import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { pbkdf2Sync, randomBytes } from 'node:crypto';
import { mkdtempSync, writeFileSync, readFileSync, renameSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

const temp = mkdtempSync(join(tmpdir(), 'stb-form-test-'));
const php = process.env.PHP_BINARY || 'php';
const base = 'http://127.0.0.1:18761';
const mailFile = join(temp, 'mail.txt');
writeFileSync(join(temp, 'config.php'), `<?php
return ['mail' => ['transport' => 'sendmail', 'from_email' => 'test@example.com',
'from_name' => 'STB test', 'to_email' => 'test@example.com'],
'altcha' => ['enabled' => true, 'hmac_signature_secret' => 'local-test-only-secret', 'pbkdf2_cost' => 1000]];
`, { mode: 0o600 });
const server = spawn(php, ['-d', `sendmail_path=${php} ${resolve('tests/php-hardening.php')} --capture-mail`,
  '-d', 'memory_limit=128M', '-d', 'post_max_size=8M', '-d', 'max_input_vars=100',
  '-d', 'max_input_nesting_level=8', '-S', '127.0.0.1:18761', '-t', 'public'], {
  env: { ...process.env, STB_PRIVATE_ROOT: temp, STB_TEST_MAIL_FILE: mailFile }, stdio: ['ignore', 'ignore', 'pipe'],
});
let errors = '';
server.stderr.on('data', chunk => { errors += chunk; });
const headers = { 'User-Agent': 'Mozilla/5.0 (STB form verification)', 'Accept-Language': 'nl-NL' };
const request = (path, options = {}) => fetch(base + path, { redirect: 'manual', ...options,
  headers: { ...headers, ...options.headers } });

function solve(challenge) {
  const p = challenge.parameters;
  for (let counter = 0; counter < 100000; counter++) {
    const n = Buffer.alloc(4);
    n.writeUInt32BE(counter);
    const key = pbkdf2Sync(Buffer.concat([Buffer.from(p.nonce, 'hex'), n]), Buffer.from(p.salt, 'hex'),
      p.cost, p.keyLength, 'sha256').toString('hex');
    if (key.startsWith(p.keyPrefix)) return Buffer.from(JSON.stringify({ challenge,
      solution: { counter, derivedKey: key } })).toString('base64');
  }
  throw new Error('ALTCHA solution not found');
}

try {
  for (let attempt = 0; attempt < 50; attempt++) {
    try { await request('/api/altcha-challenge.php?form=contact'); break; }
    catch { if (attempt === 49) throw new Error(errors); await delay(100); }
  }
  // Invalid methods must work even when the private configuration is unavailable.
  renameSync(join(temp, 'config.php'), join(temp, 'config.saved.php'));
  for (const [path, method, allow] of [
    ['/api/contact.php', 'GET', 'POST'], ['/api/contact.php', 'HEAD', 'POST'],
    ['/api/aanmelden.php', 'PUT', 'POST'], ['/api/altcha-challenge.php', 'POST', 'GET'],
  ]) {
    const response = await request(path, { method });
    assert.equal(response.status, 405);
    assert.equal(response.headers.get('allow'), allow);
  }
  assert.equal(existsSync(join(temp, 'logs')), false);
  assert.equal(existsSync(join(temp, 'var')), false);
  renameSync(join(temp, 'config.saved.php'), join(temp, 'config.php'));
  console.log('PASS method rejection without private config or storage writes');
  for (const [form, endpoint] of [['contact', 'contact'], ['signup', 'aanmelden']]) {
    for (const max of [false, true]) {
      const challenge = await (await request(`/api/altcha-challenge.php?form=${form}`)).json();
      const body = new URLSearchParams({
        company: max ? 'C'.repeat(160) : 'STB local test', name: max ? 'N'.repeat(120) : 'Local verification',
        phone: max ? '1'.repeat(60) : '0612345678',
        email: max ? `${'e'.repeat(64)}@${'d'.repeat(63)}.${'d'.repeat(63)}.${'d'.repeat(61)}` : `${randomBytes(6).toString('hex')}@example.com`,
        message: max ? 'M'.repeat(5000) : 'Automatische lokale verificatie van de beveiligde formulieren.',
        privacy_accepted: '1', form_started_at: String(Math.floor(Date.now() / 1000) - 10), company_site: '',
        altcha: solve(challenge),
      });
      if (form === 'signup') {
        body.set('address', max ? 'A'.repeat(200) : 'Teststraat 1');
        body.set('postal_code', max ? 'P'.repeat(32) : '1234 AB');
        body.set('city', max ? 'S'.repeat(120) : 'Teststad');
        body.append('interest[]', '3-Daagse cursus Vectorworks Basis');
        body.append('interest[]', '1-Daagse cursus Vectorworks Spotlight');
      }
      const response = await request(`/api/${endpoint}.php`, { method: 'POST', body });
      assert.equal(response.status, 303);
      assert.equal(response.headers.get('location'), `/${endpoint === 'contact' ? 'contact' : 'aanmelden'}/?status=success`);
      console.log(`PASS ${form}: ${max ? 'maximum-length' : 'normal'} submission with signed ALTCHA`);
    }
    for (const altcha of ['', 'invalid-payload']) {
      const response = await request(`/api/${endpoint}.php`, { method: 'POST', body: new URLSearchParams({
        name: 'Rejected verification', phone: '0612345678', email: `${randomBytes(6).toString('hex')}@example.com`,
        message: 'This request must be rejected without sending mail.', privacy_accepted: '1', altcha,
      }) });
      assert.equal(response.status, 303);
      assert.ok(response.headers.get('location').endsWith('status=captcha'));
    }
    console.log(`PASS ${form}: missing and invalid ALTCHA rejected`);
  }
  const messages = readFileSync(mailFile, 'utf8');
  assert.equal(messages.split('--- message end ---').length - 1, 4);
  assert.ok(messages.includes('3-Daagse cursus Vectorworks Basis, 1-Daagse cursus Vectorworks Spotlight'));
  assert.ok(messages.includes('M'.repeat(5000)));
  console.log('PASS exactly four locally captured messages; maximum message and signup interests preserved');
  console.log('NOTE Apache/LiteSpeed access and body-limit checks require the web server, not PHP’s development server.');
} finally {
  if (server.exitCode === null && server.signalCode === null) {
    const exited = new Promise(resolve => server.once('exit', resolve));
    server.kill();
    await exited;
  }
  rmSync(temp, { recursive: true, force: true });
}
