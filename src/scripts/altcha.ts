import "altcha/external";
import "altcha/altcha.css";
import "altcha/i18n/nl";
import pbkdf2WorkerUrl from "altcha/workers/pbkdf2?url";
import shaWorkerUrl from "altcha/workers/sha?url";

type AltchaGlobal = {
  algorithms: Map<string, () => Worker>;
};

const altchaGlobal = (globalThis.$altcha ?? {}) as Partial<AltchaGlobal>;

if (!altchaGlobal.algorithms) {
  altchaGlobal.algorithms = new Map<string, () => Worker>();
  globalThis.$altcha = altchaGlobal as typeof globalThis.$altcha;
}

const algorithms = altchaGlobal.algorithms;

const createWorker = (url: string) => () => new Worker(url);

algorithms.set("SHA-256", createWorker(shaWorkerUrl));
algorithms.set("SHA-384", createWorker(shaWorkerUrl));
algorithms.set("SHA-512", createWorker(shaWorkerUrl));
algorithms.set("PBKDF2/SHA-256", createWorker(pbkdf2WorkerUrl));
algorithms.set("PBKDF2/SHA-384", createWorker(pbkdf2WorkerUrl));
algorithms.set("PBKDF2/SHA-512", createWorker(pbkdf2WorkerUrl));
