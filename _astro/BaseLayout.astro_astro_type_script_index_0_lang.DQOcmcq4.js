var So={},To;function Ts(){if(To)return So;To=1;const C=!1;var K=Array.isArray,q=Array.prototype.indexOf,ae=Array.prototype.includes,Ne=Array.from,Y=Object.keys,le=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,_e=Object.getOwnPropertyDescriptors,qe=Object.prototype,et=Array.prototype,he=Object.getPrototypeOf,_t=Object.isExtensible;const Ee=()=>{};function tn(e){for(var t=0;t<e.length;t++)e[t]()}function nn(){var e,t,n=new Promise((r,a)=>{e=r,t=a});return{promise:n,resolve:e,reject:t}}const ce=2,ut=4,En=8,Kn=1<<24,xt=16,tt=32,kt=64,qn=128,Ve=512,ge=1024,me=2048,Ye=4096,nt=8192,Ge=16384,Et=32768,Yn=1<<25,Ct=65536,Hr=1<<17,$o=1<<18,Pt=1<<19,Ao=1<<20,Mt=65536,Gn=1<<21,Wn=1<<22,St=1<<23,qt=Symbol("$state"),Lo=Symbol("legacy props"),Ro=Symbol(""),ft=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},rn=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),an=3,on=8;function zr(e){return e===this.v}function Kr(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Io(e){return!Kr(e,this.v)}function Oo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Po(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Mo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Do(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function No(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Vo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Uo(){throw new Error("https://svelte.dev/e/hydration_failed")}function Fo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Bo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function jo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ho(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let zo=!1;const Ko=1,qo=2,Zn="[",qr="[!",Yr="[?",Gr="]",Dt={},be=Symbol(),Wr="http://www.w3.org/1999/xhtml",Yo="http://www.w3.org/2000/svg",Go="http://www.w3.org/1998/Math/MathML",Wo="@attach";let $e=null;function Yt(e){$e=e}function dt(e,t=!1,n){$e={p:$e,i:!1,c:null,e:null,s:e,x:null,r:R,l:null}}function ht(e){var t=$e,n=t.e;if(n!==null){t.e=null;for(var r of n)Wa(r)}return e!==void 0&&(t.x=e),t.i=!0,$e=t.p,e??{}}function Zr(){return!0}let Nt=[];function Jr(){var e=Nt;Nt=[],tn(e)}function vt(e){if(Nt.length===0&&!hn){var t=Nt;queueMicrotask(()=>{t===Nt&&Jr()})}Nt.push(e)}function Zo(){for(;Nt.length>0;)Jr()}function ln(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function Jo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Xo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let L=!1;function rt(e){L=e}let M;function Ce(e){if(e===null)throw ln(),Dt;return M=e}function Vt(){return Ce(ot(M))}function W(e){if(L){if(ot(M)!==null)throw ln(),Dt;M=e}}function Cn(e=1){if(L){for(var t=e,n=M;t--;)n=ot(n);M=n}}function Jn(e=!0){for(var t=0,n=M;;){if(n.nodeType===on){var r=n.data;if(r===Gr){if(t===0)return n;t-=1}else(r===Zn||r===qr||r[0]==="["&&!isNaN(Number(r.slice(1))))&&(t+=1)}var a=ot(n);e&&n.remove(),n=a}}function Xr(e){if(!e||e.nodeType!==on)throw ln(),Dt;return e.data}function pt(e){if(typeof e!="object"||e===null||qt in e)return e;const t=he(e);if(t!==qe&&t!==et)return e;var n=new Map,r=K(e),a=N(0),i=jt,s=l=>{if(jt===i)return l();var f=O,u=jt;Ue(null),Ha(i);var h=l();return Ue(f),Ha(u),h};return r&&n.set("length",N(e.length)),new Proxy(e,{defineProperty(l,f,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Fo();var h=n.get(f);return h===void 0?s(()=>{var g=N(u.value);return n.set(f,g),g}):y(h,u.value,!0),!0},deleteProperty(l,f){var u=n.get(f);if(u===void 0){if(f in l){const h=s(()=>N(be));n.set(f,h),pn(a)}}else y(u,be),pn(a);return!0},get(l,f,u){if(f===qt)return e;var h=n.get(f),g=f in l;if(h===void 0&&(!g||ee(l,f)?.writable)&&(h=s(()=>{var m=pt(g?l[f]:be),b=N(m);return b}),n.set(f,h)),h!==void 0){var d=o(h);return d===be?void 0:d}return Reflect.get(l,f,u)},getOwnPropertyDescriptor(l,f){var u=Reflect.getOwnPropertyDescriptor(l,f);if(u&&"value"in u){var h=n.get(f);h&&(u.value=o(h))}else if(u===void 0){var g=n.get(f),d=g?.v;if(g!==void 0&&d!==be)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return u},has(l,f){if(f===qt)return!0;var u=n.get(f),h=u!==void 0&&u.v!==be||Reflect.has(l,f);if(u!==void 0||R!==null&&(!h||ee(l,f)?.writable)){u===void 0&&(u=s(()=>{var d=h?pt(l[f]):be,m=N(d);return m}),n.set(f,u));var g=o(u);if(g===be)return!1}return h},set(l,f,u,h){var g=n.get(f),d=f in l;if(r&&f==="length")for(var m=u;m<g.v;m+=1){var b=n.get(m+"");b!==void 0?y(b,be):m in l&&(b=s(()=>N(be)),n.set(m+"",b))}if(g===void 0)(!d||ee(l,f)?.writable)&&(g=s(()=>N(void 0)),y(g,pt(u)),n.set(f,g));else{d=g.v!==be;var x=s(()=>pt(u));y(g,x)}var $=Reflect.getOwnPropertyDescriptor(l,f);if($?.set&&$.set.call(h,u),!d){if(r&&typeof f=="string"){var I=n.get("length"),pe=Number(f);Number.isInteger(pe)&&pe>=I.v&&y(I,pe+1)}pn(a)}return!0},ownKeys(l){o(a);var f=Reflect.ownKeys(l).filter(g=>{var d=n.get(g);return d===void 0||d.v!==be});for(var[u,h]of n)h.v!==be&&!(u in l)&&f.push(u);return f},setPrototypeOf(){Bo()}})}function Qr(e){try{if(e!==null&&typeof e=="object"&&qt in e)return e[qt]}catch{}return e}function Qo(e,t){return Object.is(Qr(e),Qr(t))}var Ut,Xn,ea,ta,na;function Qn(){if(Ut===void 0){Ut=window,Xn=document,ea=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;ta=ee(t,"firstChild").get,na=ee(t,"nextSibling").get,_t(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),_t(n)&&(n.__t=void 0)}}function at(e=""){return document.createTextNode(e)}function Oe(e){return ta.call(e)}function ot(e){return na.call(e)}function te(e,t){if(!L)return Oe(e);var n=Oe(M);if(n===null)n=M.appendChild(at());else if(t&&n.nodeType!==an){var r=at();return n?.before(r),Ce(r),r}return t&&Sn(n),Ce(n),n}function Gt(e,t=!1){if(!L){var n=Oe(e);return n instanceof Comment&&n.data===""?ot(n):n}if(t){if(M?.nodeType!==an){var r=at();return M?.before(r),Ce(r),r}Sn(M)}return M}function oe(e,t=1,n=!1){let r=L?M:e;for(var a;t--;)a=r,r=ot(r);if(!L)return r;if(n){if(r?.nodeType!==an){var i=at();return r===null?a?.after(i):r.before(i),Ce(i),i}Sn(r)}return Ce(r),r}function ei(e){e.textContent=""}function er(e,t,n){return document.createElementNS(t??Wr,e,void 0)}function Sn(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===an;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function ra(e){var t=R;if(t===null)return O.f|=St,e;if((t.f&Et)===0&&(t.f&ut)===0)throw e;Tt(e,t)}function Tt(e,t){for(;t!==null;){if((t.f&qn)!==0){if((t.f&Et)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}const ti=-7169;function se(e,t){e.f=e.f&ti|t}function tr(e){(e.f&Ve)!==0||e.deps===null?se(e,ge):se(e,Ye)}function aa(e){if(e!==null)for(const t of e)(t.f&ce)===0||(t.f&Mt)===0||(t.f^=Mt,aa(t.deps))}function oa(e,t,n){(e.f&me)!==0?t.add(e):(e.f&Ye)!==0&&n.add(e),aa(e.deps),se(e,ge)}function ni(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ri=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ai(e){return ri.includes(e)}const oi={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ii(e){return e=e.toLowerCase(),oi[e]??e}const li=["touchstart","touchmove"];function si(e){return li.includes(e)}function ci(e,t){if(t){const n=document.body;e.autofocus=!0,vt(()=>{document.activeElement===n&&e.focus()})}}let ia=!1;function la(){ia||(ia=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Tn(e){var t=O,n=R;Ue(null),lt(null);try{return e()}finally{Ue(t),lt(n)}}function ui(e,t,n,r=n){e.addEventListener(t,()=>Tn(n));const a=e.__on_r;a?e.__on_r=()=>{a(),r(!0)}:e.__on_r=()=>r(!0),la()}const sn=Symbol("events"),sa=new Set,nr=new Set;function ca(e,t,n,r={}){function a(i){if(r.capture||rr.call(t,i),!i.cancelBubble)return Tn(()=>n?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?vt(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function Ae(e,t,n,r,a){var i={capture:r,passive:a},s=ca(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Un(()=>{t.removeEventListener(e,s,i)})}function Ft(e,t,n){(t[sn]??={})[e]=n}function $n(e){for(var t=0;t<e.length;t++)sa.add(e[t]);for(var n of nr)n(e)}let ua=null;function rr(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],i=a[0]||e.target;ua=e;var s=0,l=ua===e&&e[sn];if(l){var f=a.indexOf(l);if(f!==-1&&(t===document||t===window)){e[sn]=t;return}var u=a.indexOf(t);if(u===-1)return;f<=u&&(s=f)}if(i=a[s]||e.target,i!==t){le(e,"currentTarget",{configurable:!0,get(){return i||n}});var h=O,g=R;Ue(null),lt(null);try{for(var d,m=[];i!==null;){var b=i.assignedSlot||i.parentNode||i.host||null;try{var x=i[sn]?.[r];x!=null&&(!i.disabled||e.target===i)&&x.call(i,e)}catch($){d?m.push($):d=$}if(e.cancelBubble||b===t||b===null)break;i=b}if(d){for(let $ of m)queueMicrotask(()=>{throw $});throw d}}finally{e[sn]=t,delete e.currentTarget,Ue(h),lt(g)}}}const fi=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function di(e){return fi?.createHTML(e)??e}function fa(e){var t=er("template");return t.innerHTML=di(e.replaceAll("<!>","<!---->")),t.content}function Pe(e,t){var n=R;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function Q(e,t){var n=(t&Ko)!==0,r=(t&qo)!==0,a,i=!e.startsWith("<!>");return()=>{if(L)return Pe(M,null),M;a===void 0&&(a=fa(i?e:"<!>"+e),n||(a=Oe(a)));var s=r||ea?document.importNode(a,!0):a.cloneNode(!0);if(n){var l=Oe(s),f=s.lastChild;Pe(l,f)}else Pe(s,s);return s}}function hi(e,t,n="svg"){var r=!e.startsWith("<!>"),a=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(L)return Pe(M,null),M;if(!i){var s=fa(a),l=Oe(s);i=Oe(l)}var f=i.cloneNode(!0);return Pe(f,f),f}}function ar(e,t){return hi(e,t,"svg")}function An(e=""){if(!L){var t=at(e+"");return Pe(t,t),t}var n=M;return n.nodeType!==an?(n.before(n=at()),Ce(n)):Sn(n),Pe(n,n),n}function da(){if(L)return Pe(M,null),M;var e=document.createDocumentFragment(),t=document.createComment(""),n=at();return e.append(t,n),Pe(t,n),e}function D(e,t){if(L){var n=R;((n.f&Et)===0||n.nodes.end===null)&&(n.nodes.end=M),Vt();return}e!==null&&e.before(t)}function vi(e){let t=0,n=vn(0),r;return()=>{_r()&&(o(n),Fn(()=>(t===0&&(r=mn(()=>e(()=>pn(n)))),t+=1,()=>{vt(()=>{t-=1,t===0&&(r?.(),r=void 0,pn(n))})})))}}var pi=Ct|Pt;function gi(e,t,n,r){new bi(e,t,n,r)}class bi{parent;is_pending=!1;transform_error;#e;#t=L?M:null;#n;#s;#a;#r=null;#o=null;#i=null;#l=null;#c=0;#u=0;#d=!1;#h=new Set;#v=new Set;#f=null;#y=vi(()=>(this.#f=vn(this.#c),()=>{this.#f=null}));constructor(t,n,r,a){this.#e=t,this.#n=n,this.#s=i=>{var s=R;s.b=this,s.f|=qn,r(i)},this.parent=R.b,this.transform_error=a??this.parent?.transform_error??(i=>i),this.#a=yn(()=>{if(L){const i=this.#t;Vt();const s=i.data===qr;if(i.data.startsWith(Yr)){const f=JSON.parse(i.data.slice(Yr.length));this.#_(f)}else s?this.#x():this.#w()}else this.#b()},pi),L&&(this.#e=M)}#w(){try{this.#r=st(()=>this.#s(this.#e))}catch(t){this.error(t)}}#_(t){const n=this.#n.failed;n&&(this.#i=st(()=>{n(this.#e,()=>t,()=>()=>{})}))}#x(){const t=this.#n.pending;if(t){this.is_pending=!0,this.#o=st(()=>t(this.#e));var n=F;vt(()=>{var r=this.#l=document.createDocumentFragment(),a=at();r.append(a),this.#r=this.#g(()=>st(()=>this.#s(a))),this.#u===0&&(this.#e.before(r),this.#l=null,wn(this.#o,()=>{this.#o=null}),this.#p(n))})}}#b(){var t=F;try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#c=0,this.#r=st(()=>{this.#s(this.#e)}),this.#u>0){var n=this.#l=document.createDocumentFragment();no(this.#r,n);const r=this.#n.pending;this.#o=st(()=>r(this.#e))}else this.#p(t)}catch(r){this.error(r)}}#p(t){this.is_pending=!1;for(const n of this.#h)se(n,me),t.schedule(n);for(const n of this.#v)se(n,Ye),t.schedule(n);this.#h.clear(),this.#v.clear()}defer_effect(t){oa(t,this.#h,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#g(t){var n=R,r=O,a=$e;lt(this.#a),Ue(this.#a),Yt(this.#a.ctx);try{return gt.ensure(),t()}catch(i){return ra(i),null}finally{lt(n),Ue(r),Yt(a)}}#m(t,n){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t,n);return}this.#u+=t,this.#u===0&&(this.#p(n),this.#o&&wn(this.#o,()=>{this.#o=null}),this.#l&&(this.#e.before(this.#l),this.#l=null))}update_pending_count(t,n){this.#m(t,n),this.#c+=t,!(!this.#f||this.#d)&&(this.#d=!0,vt(()=>{this.#d=!1,this.#f&&Nn(this.#f,this.#c)}))}get_effect_pending(){return this.#y(),o(this.#f)}error(t){var n=this.#n.onerror;let r=this.#n.failed;if(!n&&!r)throw t;this.#r&&(ye(this.#r),this.#r=null),this.#o&&(ye(this.#o),this.#o=null),this.#i&&(ye(this.#i),this.#i=null),L&&(Ce(this.#t),Cn(),Ce(Jn()));var a=!1,i=!1;const s=()=>{if(a){Xo();return}a=!0,i&&Ho(),this.#i!==null&&wn(this.#i,()=>{this.#i=null}),this.#g(()=>{this.#b()})},l=f=>{try{i=!0,n?.(f,s),i=!1}catch(u){Tt(u,this.#a&&this.#a.parent)}r&&(this.#i=this.#g(()=>{try{return st(()=>{var u=R;u.b=this,u.f|=qn,r(this.#e,()=>f,()=>s)})}catch(u){return Tt(u,this.#a.parent),null}}))};vt(()=>{var f;try{f=this.transform_error(t)}catch(u){Tt(u,this.#a&&this.#a.parent);return}f!==null&&typeof f=="object"&&typeof f.then=="function"?f.then(l,u=>Tt(u,this.#a&&this.#a.parent)):l(f)})}}function it(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=`${n}`)}function ha(e,t){return va(e,t)}function mi(e,t){Qn(),t.intro=t.intro??!1;const n=t.target,r=L,a=M;try{for(var i=Oe(n);i&&(i.nodeType!==on||i.data!==Zn);)i=ot(i);if(!i)throw Dt;rt(!0),Ce(i);const s=va(e,{...t,anchor:i});return rt(!1),s}catch(s){if(s instanceof Error&&s.message.split(`
`).some(l=>l.startsWith("https://svelte.dev/e/")))throw s;return s!==Dt&&console.warn("Failed to hydrate: ",s),t.recover===!1&&Uo(),Qn(),ei(n),rt(!1),ha(e,t)}finally{rt(r),Ce(a)}}const Ln=new Map;function va(e,{target:t,anchor:n,props:r={},events:a,context:i,intro:s=!0,transformError:l}){Qn();var f=void 0,u=il(()=>{var h=n??t.appendChild(at());gi(h,{pending:()=>{}},m=>{dt({});var b=$e;if(i&&(b.c=i),a&&(r.$$events=a),L&&Pe(m,null),f=e(m,r)||{},L&&(R.nodes.end=M,M===null||M.nodeType!==on||M.data!==Gr))throw ln(),Dt;ht()},l);var g=new Set,d=m=>{for(var b=0;b<m.length;b++){var x=m[b];if(!g.has(x)){g.add(x);var $=si(x);for(const ue of[t,document]){var I=Ln.get(ue);I===void 0&&(I=new Map,Ln.set(ue,I));var pe=I.get(x);pe===void 0?(ue.addEventListener(x,rr,{passive:$}),I.set(x,1)):I.set(x,pe+1)}}}};return d(Ne(sa)),nr.add(d),()=>{for(var m of g)for(const $ of[t,document]){var b=Ln.get($),x=b.get(m);--x==0?($.removeEventListener(m,rr),b.delete(m),b.size===0&&Ln.delete($)):b.set(m,x)}nr.delete(d),h!==n&&h.parentNode?.removeChild(h)}});return or.set(f,u),f}let or=new WeakMap;function yi(e,t){const n=or.get(e);return n?(or.delete(e),n(t)):Promise.resolve()}function ir(e){var t=ce|me,n=O!==null&&(O.f&ce)!==0?O:null;return R!==null&&(R.f|=Pt),{ctx:$e,deps:null,effects:null,equals:zr,f:t,fn:e,reactions:null,rv:0,v:be,wv:0,parent:n??R,ac:null}}function wi(e,t,n){let r=R;r===null&&Po();var a=void 0,i=vn(be),s=!O,l=new Map;return ll(()=>{var f=R,u=nn();a=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject).finally(Rn)}catch(m){u.reject(m),Rn()}var h=F;if(s){if((f.f&Et)!==0)var g=ma();if(r.b.is_rendered())l.get(h)?.reject(ft),l.delete(h);else{for(const m of l.values())m.reject(ft);l.clear()}l.set(h,u)}const d=(m,b=void 0)=>{if(g){var x=b===ft;g(x)}if(!(b===ft||(f.f&Ge)!==0)){if(h.activate(),b)i.f|=St,Nn(i,b);else{(i.f&St)!==0&&(i.f^=St),Nn(i,m);for(const[$,I]of l){if(l.delete($),$===h)break;I.reject(ft)}}h.deactivate()}};u.promise.then(d,m=>d(null,m||"unknown"))}),Un(()=>{for(const f of l.values())f.reject(ft)}),new Promise(f=>{function u(h){function g(){h===a?f(i):u(a)}h.then(g,g)}u(a)})}function Se(e){const t=ir(e);return Ba(t),t}function _i(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)ye(t[n])}}function xi(e){for(var t=e.parent;t!==null;){if((t.f&ce)===0)return(t.f&Ge)===0?t:null;t=t.parent}return null}function lr(e){var t,n=R;lt(xi(e));try{e.f&=~Mt,_i(e),t=qa(e)}finally{lt(n)}return t}function pa(e){var t=lr(e);if(!e.equals(t)&&(e.wv=za(),(!F?.is_fork||e.deps===null)&&(e.v=t,e.deps===null))){se(e,ge);return}Lt||(We!==null?(_r()||F?.is_fork)&&We.set(e,t):tr(e))}function ki(e){if(e.effects!==null)for(const t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(ft),t.teardown=Ee,t.ac=null,bn(t,0),kr(t))}function ga(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&Xt(t)}function ba(e,t,n,r){const a=ir;var i=e.filter(d=>!d.settled);if(n.length===0&&i.length===0){r(t.map(a));return}var s=R,l=Ei(),f=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(d=>d.promise)):null;function u(d){l();try{r(d)}catch(m){(s.f&Ge)===0&&Tt(m,s)}Rn()}if(n.length===0){f.then(()=>u(t.map(a)));return}var h=ma();function g(){Promise.all(n.map(d=>wi(d))).then(d=>u([...t.map(a),...d])).catch(d=>Tt(d,s)).finally(()=>h())}f?f.then(()=>{l(),g(),Rn()}):g()}function Ei(){var e=R,t=O,n=$e,r=F;return function(i=!0){lt(e),Ue(t),Yt(n),i&&(e.f&Ge)===0&&(r?.activate(),r?.apply())}}function Rn(e=!0){lt(null),Ue(null),Yt(null),e&&F?.deactivate()}function ma(){var e=R.b,t=F,n=e.is_rendered();return e.update_pending_count(1,t),t.increment(n),(r=!1)=>{e.update_pending_count(-1,t),t.decrement(n,r)}}class In{anchor;#e=new Map;#t=new Map;#n=new Map;#s=new Set;#a=!0;constructor(t,n=!0){this.anchor=t,this.#a=n}#r=t=>{if(this.#e.has(t)){var n=this.#e.get(t),r=this.#t.get(n);if(r)cl(r),this.#s.delete(n);else{var a=this.#n.get(n);a&&(this.#t.set(n,a.effect),this.#n.delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(const[i,s]of this.#e){if(this.#e.delete(i),i===t)break;const l=this.#n.get(s);l&&(ye(l.effect),this.#n.delete(s))}for(const[i,s]of this.#t){if(i===n||this.#s.has(i))continue;const l=()=>{if(Array.from(this.#e.values()).includes(i)){var u=document.createDocumentFragment();no(s,u),u.append(at()),this.#n.set(i,{effect:s,fragment:u})}else ye(s);this.#s.delete(i),this.#t.delete(i)};this.#a||!r?(this.#s.add(i),wn(s,l,!1)):l()}}};#o=t=>{this.#e.delete(t);const n=Array.from(this.#e.values());for(const[r,a]of this.#n)n.includes(r)||(ye(a.effect),this.#n.delete(r))};ensure(t,n){var r=F;n&&!this.#t.has(t)&&!this.#n.has(t)&&this.#t.set(t,st(()=>n(this.anchor))),this.#e.set(r,t),L&&(this.anchor=M),this.#r(r)}}function ve(e,t,n=!1){var r;L&&(r=M,Vt());var a=new In(e),i=n?Ct:0;function s(l,f){if(L){var u=Xr(r);if(l!==parseInt(u.substring(1))){var h=Jn();Ce(h),a.anchor=h,rt(!1),a.ensure(l,f),rt(!0);return}}a.ensure(l,f)}yn(()=>{var l=!1;t((f,u=0)=>{l=!0,s(u,f)}),l||s(-1,null)},i)}const Ci=Symbol("NaN");function Si(e,t,n){L&&Vt();var r=new In(e);yn(()=>{var a=t();a!==a&&(a=Ci),r.ensure(a,n)})}function ya(e,t,n=!1,r=!1,a=!1,i=!1){var s=e,l="";if(n){var f=e;L&&(s=Ce(Oe(f)))}xe(()=>{var u=R;if(l===(l=t()??"")){L&&Vt();return}if(n&&!L){u.nodes=null,f.innerHTML=l,l!==""&&Pe(Oe(f),f.lastChild);return}if(u.nodes!==null&&(Xa(u.nodes.start,u.nodes.end),u.nodes=null),l!==""){if(L){M.data;for(var h=Vt(),g=h;h!==null&&(h.nodeType!==on||h.data!=="");)g=h,h=ot(h);if(h===null)throw ln(),Dt;Pe(M,g),s=Ce(h);return}var d=r?Yo:a?Go:void 0,m=er(r?"svg":a?"math":"template",d);m.innerHTML=l;var b=r||a?m:m.content;if(Pe(Oe(b),b.lastChild),r||a)for(;Oe(b);)s.before(Oe(b));else s.before(b)}})}function Ti(e,t,...n){var r=new In(e);yn(()=>{const a=t()??null;r.ensure(a,a&&(i=>a(i,...n)))},Ct)}function $i(e,t,n){var r;L&&(r=M,Vt());var a=new In(e);yn(()=>{var i=t()??null;if(L){var s=Xr(r),l=s===Zn,f=i!==null;if(l!==f){var u=Jn();Ce(u),a.anchor=u,rt(!1),a.ensure(i,i&&(h=>n(h,i))),rt(!0);return}}a.ensure(i,i&&(h=>n(h,i)))},Ct)}function Ai(e,t){var n=void 0,r;Za(()=>{n!==(n=t())&&(r&&(ye(r),r=null),n&&(r=st(()=>{xr(()=>n(e))})))})}function wa(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=wa(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Li(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=wa(e))&&(r&&(r+=" "),r+=t);return r}function Ri(e){return typeof e=="object"?Li(e):e??""}const _a=[...` 	
\r\f \v\uFEFF`];function Ii(e,t,n){var r=e==null?"":""+e;if(n){for(var a of Object.keys(n))if(n[a])r=r?r+" "+a:a;else if(r.length)for(var i=a.length,s=0;(s=r.indexOf(a,s))>=0;){var l=s+i;(s===0||_a.includes(r[s-1]))&&(l===r.length||_a.includes(r[l]))?r=(s===0?"":r.substring(0,s))+r.substring(l+1):s=l}}return r===""?null:r}function xa(e,t=!1){var n=t?" !important;":";",r="";for(var a of Object.keys(e)){var i=e[a];i!=null&&i!==""&&(r+=" "+a+": "+i+n)}return r}function sr(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Oi(e,t){if(t){var n="",r,a;if(Array.isArray(t)?(r=t[0],a=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,s=0,l=!1,f=[];r&&f.push(...Object.keys(r).map(sr)),a&&f.push(...Object.keys(a).map(sr));var u=0,h=-1;const x=e.length;for(var g=0;g<x;g++){var d=e[g];if(l?d==="/"&&e[g-1]==="*"&&(l=!1):i?i===d&&(i=!1):d==="/"&&e[g+1]==="*"?l=!0:d==='"'||d==="'"?i=d:d==="("?s++:d===")"&&s--,!l&&i===!1&&s===0){if(d===":"&&h===-1)h=g;else if(d===";"||g===x-1){if(h!==-1){var m=sr(e.substring(u,h).trim());if(!f.includes(m)){d!==";"&&g++;var b=e.substring(u,g).trim();n+=" "+b+";"}}u=g+1,h=-1}}}}return r&&(n+=xa(r)),a&&(n+=xa(a,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Pi(e,t,n,r,a,i){var s=e.__className;if(L||s!==n||s===void 0){var l=Ii(n,r,i);(!L||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l)),e.__className=n}else if(i&&a!==i)for(var f in i){var u=!!i[f];(a==null||u!==!!a[f])&&e.classList.toggle(f,u)}return i}function cr(e,t={},n,r){for(var a in n){var i=n[a];t[a]!==i&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,r))}}function Mi(e,t,n,r){var a=e.__style;if(L||a!==t){var i=Oi(t,r);(!L||i!==e.getAttribute("style"))&&(i==null?e.removeAttribute("style"):e.style.cssText=i),e.__style=t}else r&&(Array.isArray(r)?(cr(e,n?.[0],r[0]),cr(e,n?.[1],r[1],"important")):cr(e,n,r));return r}function ur(e,t,n=!1){if(e.multiple){if(t==null)return;if(!K(t))return Jo();for(var r of e.options)r.selected=t.includes(ka(r));return}for(r of e.options){var a=ka(r);if(Qo(a,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Di(e){var t=new MutationObserver(()=>{ur(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Un(()=>{t.disconnect()})}function ka(e){return"__value"in e?e.__value:e.value}const cn=Symbol("class"),un=Symbol("style"),Ea=Symbol("is custom element"),Ca=Symbol("is html"),Ni=rn?"link":"LINK",Vi=rn?"input":"INPUT",Ui=rn?"option":"OPTION",Fi=rn?"select":"SELECT",Bi=rn?"progress":"PROGRESS";function fr(e){if(L){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;j(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var a=e.checked;j(e,"checked",null),e.checked=a}}};e.__on_r=n,vt(n),la()}}function ji(e,t){var n=dr(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==Bi)||(e.value=t??"")}function Hi(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function j(e,t,n,r){var a=dr(e);L&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===Ni)||a[t]!==(a[t]=n)&&(t==="loading"&&(e[Ro]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Ta(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function zi(e,t,n,r,a=!1,i=!1){if(L&&a&&e.nodeName===Vi){var s=e,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in n||fr(s)}var f=dr(e),u=f[Ea],h=!f[Ca];let g=L&&u;g&&rt(!1);var d=t||{},m=e.nodeName===Ui;for(var b in t)b in n||(n[b]=null);n.class?n.class=Ri(n.class):n[cn]&&(n.class=null),n[un]&&(n.style??=null);var x=Ta(e);for(const k in n){let V=n[k];if(m&&k==="value"&&V==null){e.value=e.__value="",d[k]=V;continue}if(k==="class"){var $=e.namespaceURI==="http://www.w3.org/1999/xhtml";Pi(e,$,V,r,t?.[cn],n[cn]),d[k]=V,d[cn]=n[cn];continue}if(k==="style"){Mi(e,V,t?.[un],n[un]),d[k]=V,d[un]=n[un];continue}var I=d[k];if(!(V===I&&!(V===void 0&&e.hasAttribute(k)))){d[k]=V;var pe=k[0]+k[1];if(pe!=="$$")if(pe==="on"){const re={},z="$$"+k;let U=k.slice(2);var ue=ai(U);if(ni(U)&&(U=U.slice(0,-7),re.capture=!0),!ue&&I){if(V!=null)continue;e.removeEventListener(U,d[z],re),d[z]=null}if(ue)Ft(U,e,V),$n([U]);else if(V!=null){let He=function(ke){d[k].call(this,ke)};d[z]=ca(U,e,He,re)}}else if(k==="style")j(e,k,V);else if(k==="autofocus")ci(e,!!V);else if(!u&&(k==="__value"||k==="value"&&V!=null))e.value=e.__value=V;else if(k==="selected"&&m)Hi(e,V);else{var P=k;h||(P=ii(P));var Re=P==="defaultValue"||P==="defaultChecked";if(V==null&&!u&&!Re)if(f[k]=null,P==="value"||P==="checked"){let re=e;const z=t===void 0;if(P==="value"){let U=re.defaultValue;re.removeAttribute(P),re.defaultValue=U,re.value=re.__value=z?U:null}else{let U=re.defaultChecked;re.removeAttribute(P),re.defaultChecked=U,re.checked=z?U:!1}}else e.removeAttribute(k);else Re||x.includes(P)&&(u||typeof V!="string")?(e[P]=V,P in f&&(f[P]=be)):typeof V!="function"&&j(e,P,V)}}}return g&&rt(!0),d}function On(e,t,n=[],r=[],a=[],i,s=!1,l=!1){ba(a,n,r,f=>{var u=void 0,h={},g=e.nodeName===Fi,d=!1;if(Za(()=>{var b=t(...f.map(o)),x=zi(e,u,b,i,s,l);d&&g&&"value"in b&&ur(e,b.value);for(let I of Object.getOwnPropertySymbols(h))b[I]||ye(h[I]);for(let I of Object.getOwnPropertySymbols(b)){var $=b[I];I.description===Wo&&(!u||$!==u[I])&&(h[I]&&ye(h[I]),h[I]=st(()=>Ai(e,()=>$))),x[I]=$}u=x}),g){var m=e;xr(()=>{ur(m,u.value,!0),Di(m)})}d=!0})}function dr(e){return e.__attributes??={[Ea]:e.nodeName.includes("-"),[Ca]:e.namespaceURI===Wr}}var Sa=new Map;function Ta(e){var t=e.getAttribute("is")||e.nodeName,n=Sa.get(t);if(n)return n;Sa.set(t,n=[]);for(var r,a=e,i=Element.prototype;i!==a;){r=_e(a);for(var s in r)r[s].set&&n.push(s);a=he(a)}return n}function Ki(e,t,n=t){var r=new WeakSet;ui(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=hr(e)?vr(i):i,n(i),F!==null&&r.add(F),await Ht(),i!==(i=t())){var s=e.selectionStart,l=e.selectionEnd,f=e.value.length;if(e.value=i??"",l!==null){var u=e.value.length;s===l&&l===f&&u>f?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=s,e.selectionEnd=Math.min(l,u))}}}),(L&&e.defaultValue!==e.value||mn(t)==null&&e.value)&&(n(hr(e)?vr(e.value):e.value),F!==null&&r.add(F)),Fn(()=>{var a=t();if(e===document.activeElement){var i=F;if(r.has(i))return}hr(e)&&a===vr(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function hr(e){var t=e.type;return t==="number"||t==="range"}function vr(e){return e===""?null:+e}function $a(e,t){return e===t||e?.[qt]===t}function Wt(e={},t,n,r){var a=$e.r,i=R;return xr(()=>{var s,l;return Fn(()=>{s=l,l=[],mn(()=>{e!==n(...l)&&(t(e,...l),s&&$a(n(...s),e)&&t(null,...s))})}),()=>{let f=i;for(;f!==a&&f.parent!==null&&f.parent.f&Yn;)f=f.parent;const u=()=>{l&&$a(n(...l),e)&&t(null,...l)},h=f.teardown;f.teardown=()=>{u(),h?.()}}}),e}const qi={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Pn(e,t,n){return new Proxy({props:e,exclude:t},qi)}function ne(e,t,n,r){var a=r,i=!0,s=()=>(i&&(i=!1,a=r),a),l;l=e[t],l===void 0&&r!==void 0&&(l=s());var f;f=()=>{var d=e[t];return d===void 0?s():(i=!0,d)};var u=!1,h=ir(()=>(u=!1,f())),g=R;return(function(d,m){if(arguments.length>0){const b=m?o(h):d;return y(h,b),u=!0,a!==void 0&&(a=b),d}return Lt&&u||(g.f&Ge)!==0?h.v:o(h)})}function Yi(e){return new Gi(e)}class Gi{#e;#t;constructor(t){var n=new Map,r=(i,s)=>{var l=Va(s,!1,!1);return n.set(i,l),l};const a=new Proxy({...t.props||{},$$events:{}},{get(i,s){return o(n.get(s)??r(s,Reflect.get(i,s)))},has(i,s){return s===Lo?!0:(o(n.get(s)??r(s,Reflect.get(i,s))),Reflect.has(i,s))},set(i,s,l){return y(n.get(s)??r(s,l),l),Reflect.set(i,s,l)}});this.#t=(t.hydrate?mi:ha)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError}),(!t?.props?.$$host||t.sync===!1)&&Z(),this.#e=a.$$events;for(const i of Object.keys(this.#t))i==="$set"||i==="$destroy"||i==="$on"||le(this,i,{get(){return this.#t[i]},set(s){this.#t[i]=s},enumerable:!0});this.#t.$set=i=>{Object.assign(a,i)},this.#t.$destroy=()=>{yi(this.#t)}}$set(t){this.#t.$set(t)}$on(t,n){this.#e[t]=this.#e[t]||[];const r=(...a)=>n.call(this,...a);return this.#e[t].push(r),()=>{this.#e[t]=this.#e[t].filter(a=>a!==r)}}$destroy(){this.#t.$destroy()}}let Aa=class{};typeof HTMLElement=="function"&&(Aa=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;$$shadowRoot=null;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&(this.$$shadowRoot=this.attachShadow(n))}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const r=this.$$c.$on(e,t);this.$$l_u.set(t,r)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const r=this.$$l_u.get(t);r&&(r(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(r){return a=>{const i=er("slot");r!=="default"&&(i.name=r),D(a,i)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},n=Wi(this);for(const r of this.$$s)r in n&&(r==="default"&&!this.$$d.children?(this.$$d.children=e(r),t.default=!0):t[r]=e(r));for(const r of this.attributes){const a=this.$$g_p(r.name);a in this.$$d||(this.$$d[a]=Mn(a,r.value,this.$$p_d,"toProp"))}for(const r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=Yi({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=ol(()=>{Fn(()=>{this.$$r=!0;for(const r of Y(this.$$c)){if(!this.$$p_d[r]?.reflect)continue;this.$$d[r]=this.$$c[r];const a=Mn(r,this.$$d[r],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,a)}this.$$r=!1})});for(const r in this.$$l)for(const a of this.$$l[r]){const i=this.$$c.$on(r,a);this.$$l_u.set(a,i)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=Mn(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return Y(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function Mn(e,t,n,r){const a=n[e]?.type;if(t=a==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(a){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(a){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Wi(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function $t(e,t,n,r,a,i){let s=class extends Aa{constructor(){super(e,n,a),this.$$p_d=t}static get observedAttributes(){return Y(t).map(l=>(t[l].attribute||l).toLowerCase())}};return Y(t).forEach(l=>{le(s.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(f){f=Mn(l,f,t),this.$$d[l]=f;var u=this.$$c;if(u){var h=ee(u,l)?.get;h?u[l]=f:u.$set({[l]:f})}}})}),r.forEach(l=>{le(s.prototype,l,{get(){return this.$$c?.[l]}})}),e.element=s,s}function pr(e){$e===null&&Oo(),je(()=>{const t=mn(e);if(typeof t=="function")return t})}function La(e,t,n){if(e==null)return t(void 0),Ee;const r=mn(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}const Zt=[];function Zi(e,t=Ee){let n=null;const r=new Set;function a(l){if(Kr(e,l)&&(e=l,n)){const f=!Zt.length;for(const u of r)u[1](),Zt.push(u,e);if(f){for(let u=0;u<Zt.length;u+=2)Zt[u][0](Zt[u+1]);Zt.length=0}}}function i(l){a(l(e))}function s(l,f=Ee){const u=[l,f];return r.add(u),r.size===1&&(n=t(a,i)||Ee),l(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:s}}function fn(e){let t;return La(e,n=>t=n)(),t}let gr=Symbol();function Ra(e,t,n){const r=n[t]??={store:null,source:Va(void 0),unsubscribe:Ee};if(r.store!==e&&!(gr in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=Ee;else{var a=!0;r.unsubscribe=La(e,i=>{a?r.source.v=i:y(r.source,i)}),a=!1}return e&&gr in n?fn(e):o(r.source)}function Ji(){const e={};function t(){Un(()=>{for(var n in e)e[n].unsubscribe();le(e,gr,{enumerable:!1,value:!0})})}return[e,t]}const dn=new Set;let F=null,We=null,br=null,hn=!1,mr=!1,Jt=null,Dn=null;var Ia=0;let Xi=1;class gt{id=Xi++;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=0;#s=0;#a=null;#r=[];#o=new Set;#i=new Set;#l=new Map;is_fork=!1;#c=!1;#u(){return this.is_fork||this.#s>0}skip_effect(t){this.#l.has(t)||this.#l.set(t,{d:[],m:[]})}unskip_effect(t){var n=this.#l.get(t);if(n){this.#l.delete(t);for(var r of n.d)se(r,me),this.schedule(r);for(r of n.m)se(r,Ye),this.schedule(r)}}#d(){Ia++>1e3&&Qi();const t=this.#r;this.#r=[],this.apply();var n=Jt=[],r=[],a=Dn=[];for(const l of t)this.#h(l,n,r);if(F=null,a.length>0){var i=gt.ensure();for(const l of a)i.schedule(l)}if(Jt=null,Dn=null,this.#u()){this.#v(r),this.#v(n);for(const[l,f]of this.#l)Da(l,f)}else{this.#o.clear(),this.#i.clear();for(const l of this.#e)l(this);this.#e.clear(),Oa(r),Oa(n),this.#n===0&&this.#f(),this.#a?.resolve()}var s=F;if(this.#r.length>0){const l=s??=this;l.#r.push(...this.#r.filter(f=>!l.#r.includes(f)))}s!==null&&(dn.add(s),s.#d())}#h(t,n,r){t.f^=ge;for(var a=t.first;a!==null;){var i=a.f,s=(i&(tt|kt))!==0,l=s&&(i&ge)!==0,f=l||(i&nt)!==0||this.#l.has(a);if(!f&&a.fn!==null){s?a.f^=ge:(i&ut)!==0?n.push(a):gn(a)&&((i&xt)!==0&&this.#i.add(a),Xt(a));var u=a.first;if(u!==null){a=u;continue}}for(;a!==null;){var h=a.next;if(h!==null){a=h;break}a=a.parent}}}#v(t){for(var n=0;n<t.length;n+=1)oa(t[n],this.#o,this.#i)}capture(t,n){n!==be&&!this.previous.has(t)&&this.previous.set(t,n),(t.f&St)===0&&(this.current.set(t,t.v),We?.set(t,t.v))}activate(){F=this}deactivate(){F=null,We=null}flush(){try{if(mr=!0,F=this,!this.#u()){for(const t of this.#o)this.#i.delete(t),se(t,me),this.schedule(t);for(const t of this.#i)se(t,Ye),this.schedule(t)}this.#d()}finally{Ia=0,br=null,Jt=null,Dn=null,mr=!1,F=null,We=null,At.clear()}}discard(){for(const t of this.#t)t(this);this.#t.clear()}#f(){if(dn.size>1){this.previous.clear();var t=F,n=We,r=!0;for(const a of dn){if(a===this){r=!1;continue}const i=[];for(const[l,f]of this.current){if(a.current.has(l))if(r&&f!==a.current.get(l))a.current.set(l,f);else continue;i.push(l)}if(i.length===0)continue;const s=[...a.current.keys()].filter(l=>!this.current.has(l));if(s.length>0){a.activate();const l=new Set,f=new Map;for(const u of i)Pa(u,s,l,f);if(a.#r.length>0){a.apply();for(const u of a.#r)a.#h(u,[],[])}a.deactivate()}}F=t,We=n}this.#l.clear(),dn.delete(this)}increment(t){this.#n+=1,t&&(this.#s+=1)}decrement(t,n){this.#n-=1,t&&(this.#s-=1),!(this.#c||n)&&(this.#c=!0,vt(()=>{this.#c=!1,this.flush()}))}oncommit(t){this.#e.add(t)}ondiscard(t){this.#t.add(t)}settled(){return(this.#a??=nn()).promise}static ensure(){if(F===null){const t=F=new gt;mr||(dn.add(F),hn||vt(()=>{F===t&&t.flush()}))}return F}apply(){}schedule(t){if(br=t,t.b?.is_pending&&(t.f&(ut|En|Kn))!==0&&(t.f&Et)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Jt!==null&&n===R&&(O===null||(O.f&ce)===0))return;if((r&(kt|tt))!==0){if((r&ge)===0)return;n.f^=ge}}this.#r.push(n)}}function Z(e){var t=hn;hn=!0;try{for(var n;;){if(Zo(),F===null)return n;F.flush()}}finally{hn=t}}function Qi(){try{Vo()}catch(e){Tt(e,br)}}let bt=null;function Oa(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Ge|nt))===0&&gn(r)&&(bt=new Set,Xt(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Qa(r),bt?.size>0)){At.clear();for(const a of bt){if((a.f&(Ge|nt))!==0)continue;const i=[a];let s=a.parent;for(;s!==null;)bt.has(s)&&(bt.delete(s),i.push(s)),s=s.parent;for(let l=i.length-1;l>=0;l--){const f=i[l];(f.f&(Ge|nt))===0&&Xt(f)}}bt.clear()}}bt=null}}function Pa(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const a of e.reactions){const i=a.f;(i&ce)!==0?Pa(a,t,n,r):(i&(Wn|xt))!==0&&(i&me)===0&&Ma(a,t,r)&&(se(a,me),yr(a))}}function Ma(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const a of e.deps){if(ae.call(t,a))return!0;if((a.f&ce)!==0&&Ma(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function yr(e){F.schedule(e)}function Da(e,t){if(!((e.f&tt)!==0&&(e.f&ge)!==0)){(e.f&me)!==0?t.d.push(e):(e.f&Ye)!==0&&t.m.push(e),se(e,ge);for(var n=e.first;n!==null;)Da(n,t),n=n.next}}let wr=new Set;const At=new Map;let Na=!1;function vn(e,t){var n={f:0,v:e,reactions:null,equals:zr,rv:0,wv:0};return n}function N(e,t){const n=vn(e);return Ba(n),n}function Va(e,t=!1,n=!0){const r=vn(e);return t||(r.equals=Io),r}function y(e,t,n=!1){O!==null&&(!Ze||(O.f&Hr)!==0)&&Zr()&&(O.f&(ce|xt|Wn|Hr))!==0&&(Fe===null||!ae.call(Fe,e))&&jo();let r=n?pt(t):t;return Nn(e,r,Dn)}function Nn(e,t,n=null){if(!e.equals(t)){var r=e.v;Lt?At.set(e,t):At.set(e,r),e.v=t;var a=gt.ensure();if(a.capture(e,r),(e.f&ce)!==0){const i=e;(e.f&me)!==0&&lr(i),tr(i)}e.wv=za(),Ua(e,me,n),R!==null&&(R.f&ge)!==0&&(R.f&(tt|kt))===0&&(Be===null?tl([e]):Be.push(e)),!a.is_fork&&wr.size>0&&!Na&&el()}return t}function el(){Na=!1;for(const e of wr)(e.f&ge)!==0&&se(e,Ye),gn(e)&&Xt(e);wr.clear()}function pn(e){y(e,e.v+1)}function Ua(e,t,n){var r=e.reactions;if(r!==null)for(var a=r.length,i=0;i<a;i++){var s=r[i],l=s.f,f=(l&me)===0;if(f&&se(s,t),(l&ce)!==0){var u=s;We?.delete(u),(l&Mt)===0&&(l&Ve&&(s.f|=Mt),Ua(u,Ye,n))}else if(f){var h=s;(l&xt)!==0&&bt!==null&&bt.add(h),n!==null?n.push(h):yr(h)}}}let Vn=!1,Lt=!1;function Fa(e){Lt=e}let O=null,Ze=!1;function Ue(e){O=e}let R=null;function lt(e){R=e}let Fe=null;function Ba(e){O!==null&&(Fe===null?Fe=[e]:Fe.push(e))}let Le=null,Me=0,Be=null;function tl(e){Be=e}let ja=1,Bt=0,jt=Bt;function Ha(e){jt=e}function za(){return++ja}function gn(e){var t=e.f;if((t&me)!==0)return!0;if(t&ce&&(e.f&=~Mt),(t&Ye)!==0){for(var n=e.deps,r=n.length,a=0;a<r;a++){var i=n[a];if(gn(i)&&pa(i),i.wv>e.wv)return!0}(t&Ve)!==0&&We===null&&se(e,ge)}return!1}function Ka(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Fe!==null&&ae.call(Fe,e)))for(var a=0;a<r.length;a++){var i=r[a];(i.f&ce)!==0?Ka(i,t,!1):t===i&&(n?se(i,me):(i.f&ge)!==0&&se(i,Ye),yr(i))}}function qa(e){var t=Le,n=Me,r=Be,a=O,i=Fe,s=$e,l=Ze,f=jt,u=e.f;Le=null,Me=0,Be=null,O=(u&(tt|kt))===0?e:null,Fe=null,Yt(e.ctx),Ze=!1,jt=++Bt,e.ac!==null&&(Tn(()=>{e.ac.abort(ft)}),e.ac=null);try{e.f|=Gn;var h=e.fn,g=h();e.f|=Et;var d=e.deps,m=F?.is_fork;if(Le!==null){var b;if(m||bn(e,Me),d!==null&&Me>0)for(d.length=Me+Le.length,b=0;b<Le.length;b++)d[Me+b]=Le[b];else e.deps=d=Le;if(_r()&&(e.f&Ve)!==0)for(b=Me;b<d.length;b++)(d[b].reactions??=[]).push(e)}else!m&&d!==null&&Me<d.length&&(bn(e,Me),d.length=Me);if(Zr()&&Be!==null&&!Ze&&d!==null&&(e.f&(ce|Ye|me))===0)for(b=0;b<Be.length;b++)Ka(Be[b],e);if(a!==null&&a!==e){if(Bt++,a.deps!==null)for(let x=0;x<n;x+=1)a.deps[x].rv=Bt;if(t!==null)for(const x of t)x.rv=Bt;Be!==null&&(r===null?r=Be:r.push(...Be))}return(e.f&St)!==0&&(e.f^=St),g}catch(x){return ra(x)}finally{e.f^=Gn,Le=t,Me=n,Be=r,O=a,Fe=i,Yt(s),Ze=l,jt=f}}function nl(e,t){let n=t.reactions;if(n!==null){var r=q.call(n,e);if(r!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[r]=n[a],n.pop())}}if(n===null&&(t.f&ce)!==0&&(Le===null||!ae.call(Le,t))){var i=t;(i.f&Ve)!==0&&(i.f^=Ve,i.f&=~Mt),tr(i),ki(i),bn(i,0)}}function bn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)nl(e,n[r])}function Xt(e){var t=e.f;if((t&Ge)===0){se(e,ge);var n=R,r=Vn;R=e,Vn=!0;try{(t&(xt|Kn))!==0?sl(e):kr(e),Ja(e);var a=qa(e);e.teardown=typeof a=="function"?a:null,e.wv=ja;var i;C&&zo&&(e.f&me)!==0&&e.deps}finally{Vn=r,R=n}}}async function Ht(){await Promise.resolve(),Z()}function o(e){var t=e.f,n=(t&ce)!==0;if(O!==null&&!Ze){var r=R!==null&&(R.f&Ge)!==0;if(!r&&(Fe===null||!ae.call(Fe,e))){var a=O.deps;if((O.f&Gn)!==0)e.rv<Bt&&(e.rv=Bt,Le===null&&a!==null&&a[Me]===e?Me++:Le===null?Le=[e]:Le.push(e));else{(O.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[O]:ae.call(i,O)||i.push(O)}}}if(Lt&&At.has(e))return At.get(e);if(n){var s=e;if(Lt){var l=s.v;return((s.f&ge)===0&&s.reactions!==null||Ga(s))&&(l=lr(s)),At.set(s,l),l}var f=(s.f&Ve)===0&&!Ze&&O!==null&&(Vn||(O.f&Ve)!==0),u=(s.f&Et)===0;gn(s)&&(f&&(s.f|=Ve),pa(s)),f&&!u&&(ga(s),Ya(s))}if(We?.has(e))return We.get(e);if((e.f&St)!==0)throw e.v;return e.v}function Ya(e){if(e.f|=Ve,e.deps!==null)for(const t of e.deps)(t.reactions??=[]).push(e),(t.f&ce)!==0&&(t.f&Ve)===0&&(ga(t),Ya(t))}function Ga(e){if(e.v===be)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(At.has(t)||(t.f&ce)!==0&&Ga(t))return!0;return!1}function mn(e){var t=Ze;try{return Ze=!0,e()}finally{Ze=t}}function rl(e){R===null&&(O===null&&No(),Do()),Lt&&Mo()}function al(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Je(e,t){var n=R;n!==null&&(n.f&nt)!==0&&(e|=nt);var r={ctx:$e,deps:null,nodes:null,f:e|me|Ve,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null},a=r;if((e&ut)!==0)Jt!==null?Jt.push(r):gt.ensure().schedule(r);else if(t!==null){try{Xt(r)}catch(s){throw ye(r),s}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Pt)===0&&(a=a.first,(e&xt)!==0&&(e&Ct)!==0&&a!==null&&(a.f|=Ct))}if(a!==null&&(a.parent=n,n!==null&&al(a,n),O!==null&&(O.f&ce)!==0&&(e&kt)===0)){var i=O;(i.effects??=[]).push(a)}return r}function _r(){return O!==null&&!Ze}function Un(e){const t=Je(En,null);return se(t,ge),t.teardown=e,t}function je(e){rl();var t=R.f,n=!O&&(t&tt)!==0&&(t&Et)===0;if(n){var r=$e;(r.e??=[]).push(e)}else return Wa(e)}function Wa(e){return Je(ut|Ao,e)}function ol(e){gt.ensure();const t=Je(kt|Pt,e);return()=>{ye(t)}}function il(e){gt.ensure();const t=Je(kt|Pt,e);return(n={})=>new Promise(r=>{n.outro?wn(t,()=>{ye(t),r(void 0)}):(ye(t),r(void 0))})}function xr(e){return Je(ut,e)}function ll(e){return Je(Wn|Pt,e)}function Fn(e,t=0){return Je(En|t,e)}function xe(e,t=[],n=[],r=[]){ba(r,t,n,a=>{Je(En,()=>e(...a.map(o)))})}function yn(e,t=0){var n=Je(xt|t,e);return n}function Za(e,t=0){var n=Je(Kn|t,e);return n}function st(e){return Je(tt|Pt,e)}function Ja(e){var t=e.teardown;if(t!==null){const n=Lt,r=O;Fa(!0),Ue(null);try{t.call(null)}finally{Fa(n),Ue(r)}}}function kr(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const a=n.ac;a!==null&&Tn(()=>{a.abort(ft)});var r=n.next;(n.f&kt)!==0?n.parent=null:ye(n,t),n=r}}function sl(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&tt)===0&&ye(t),t=n}}function ye(e,t=!0){var n=!1;(t||(e.f&$o)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Xa(e.nodes.start,e.nodes.end),n=!0),se(e,Yn),kr(e,t&&!n),bn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)i.stop();Ja(e),e.f^=Yn,e.f|=Ge;var a=e.parent;a!==null&&a.first!==null&&Qa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function Xa(e,t){for(;e!==null;){var n=e===t?null:ot(e);e.remove(),e=n}}function Qa(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function wn(e,t,n=!0){var r=[];eo(e,r,!0);var a=()=>{n&&ye(e),t&&t()},i=r.length;if(i>0){var s=()=>--i||a();for(var l of r)l.out(s)}else a()}function eo(e,t,n){if((e.f&nt)===0){e.f^=nt;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var a=e.first;a!==null;){var i=a.next,s=(a.f&Ct)!==0||(a.f&tt)!==0&&(e.f&xt)!==0;eo(a,t,s?n:!1),a=i}}}function cl(e){to(e,!0)}function to(e,t){if((e.f&nt)!==0){e.f^=nt,(e.f&ge)===0&&(se(e,me),gt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,a=(n.f&Ct)!==0||(n.f&tt)!==0;to(n,a?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(const s of i)(s.is_global||t)&&s.in()}}function no(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var a=n===r?null:ot(n);t.append(n),n=a}}function ro(e){const t={get:n=>fn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(fn(t.store),{[n]:r}):Object.assign(fn(t.store),n),t.store.set(fn(t.store))},store:Zi(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:ro({}),i18n:ro({}),instances:new Set,plugins:new Set};const ul={ariaLinkLabel:"Visit Altcha.org",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};"$altcha"in globalThis&&globalThis.$altcha.i18n.set("en",ul);const fl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(fl);var dl=Q('<label class="altcha-checkbox"><input/> <svg width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></label>');function ao(e,t){dt(t,!0);let n=ne(t,"loading"),r=Pn(t,["$$slots","$$events","$$legacy","$$host","loading"]);var a={get loading(){return n()},set loading(l){n(l),Z()}},i=dl(),s=te(i);return On(s,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Cn(4),W(i),xe(()=>j(i,"data-loading",n())),D(e,i),ht(a)}$t(ao,{loading:{}},[],[],{mode:"open"});var hl=Q('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');function oo(e,t){dt(t,!0);let n=ne(t,"loading"),r=Pn(t,["$$slots","$$events","$$legacy","$$host","loading"]);var a={get loading(){return n()},set loading(l){n(l),Z()}},i=hl(),s=te(i);return On(s,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Cn(2),W(i),xe(()=>j(i,"data-loading",n())),D(e,i),ht(a)}$t(oo,{loading:{}},[],[],{mode:"open"});var vl=Q('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');function Er(e,t){dt(t,!0);let n=ne(t,"strings");const r="https://altcha.org";var a={get strings(){return n()},set strings(l){n(l),Z()}},i=vl(),s=te(i);return j(s,"href",r),W(i),xe(()=>j(s,"aria-label",n().ariaLinkLabel)),D(e,i),ht(a)}$t(Er,{strings:{}},[],[],{mode:"open"});var pl=Q('<div class="altcha-footer"><div></div> <!></div>');function Cr(e,t){dt(t,!0);let n=ne(t,"logo"),r=ne(t,"strings");var a={get logo(){return n()},set logo(u){n(u),Z()},get strings(){return r()},set strings(u){r(u),Z()}},i=pl(),s=te(i);ya(s,()=>r().footer,!0),W(s);var l=oe(s,2);{var f=u=>{Er(u,{get strings(){return r()}})};ve(l,u=>{n()&&u(f)})}return W(i),D(e,i),ht(a)}$t(Cr,{logo:{},strings:{}},[],[],{mode:"open"});var gl=Q('<label class="altcha-switch"><input/> <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></label>');function io(e,t){dt(t,!0);let n=ne(t,"loading"),r=Pn(t,["$$slots","$$events","$$legacy","$$host","loading"]);var a={get loading(){return n()},set loading(l){n(l),Z()}},i=gl(),s=te(i);return On(s,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Cn(2),W(i),xe(()=>j(i,"data-loading",n())),D(e,i),ht(a)}$t(io,{loading:{}},[],[],{mode:"open"});var we=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))(we||{}),B=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(B||{}),bl=Q('<div class="altcha-code-challenge-title"> </div>'),ml=Q('<div class="altcha-spinner"></div>'),yl=ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),wl=ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),_l=ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),xl=Q('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),kl=Q('<audio hidden="" autoplay=""></audio>'),El=Q('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');function lo(e,t){dt(t,!0);let n=ne(t,"audioUrl"),r=ne(t,"codeChallenge"),a=ne(t,"config"),i=ne(t,"imageUrl"),s=ne(t,"onCancel"),l=ne(t,"onReload"),f=ne(t,"onSubmit"),u=ne(t,"strings"),h=N(void 0),g=N(void 0),d=N(void 0),m=N(!1),b=N(""),x=N(!1);pr(()=>(a().disableAutoFocus||Ht().then(()=>{o(d)?.focus()}),()=>{o(g)&&(o(g).pause(),y(g,void 0))}));function $(){y(h,we.PAUSED,!0)}function I(T){y(h,we.ERROR,!0)}function pe(){y(h,we.READY,!0)}function ue(){y(h,we.LOADING,!0)}function P(){y(h,we.PLAYING,!0)}function Re(){y(h,we.PAUSED,!0)}function k(T){T.code==="Space"?(T.preventDefault(),T.stopPropagation(),re()):T.code==="Escape"&&(T.preventDefault(),T.stopPropagation(),s()?.())}function V(T){T.preventDefault(),T.stopPropagation(),f()?.(o(b))}function re(){o(g)?o(h)===we.LOADING||(o(g).paused?(n()&&o(g).src!==n()&&(o(g).src=n()),o(g).currentTime=0,o(g).play()):o(g).pause()):(y(x,!0),requestAnimationFrame(()=>{o(g)&&n()&&(o(g).src=n(),o(g).play())}))}var z={get audioUrl(){return n()},set audioUrl(T){n(T),Z()},get codeChallenge(){return r()},set codeChallenge(T){r(T),Z()},get config(){return a()},set config(T){a(T),Z()},get imageUrl(){return i()},set imageUrl(T){i(T),Z()},get onCancel(){return s()},set onCancel(T){s(T),Z()},get onReload(){return l()},set onReload(T){l(T),Z()},get onSubmit(){return f()},set onSubmit(T){f(T),Z()},get strings(){return u()},set strings(T){u(T),Z()}},U=El(),He=te(U),ke=te(He);{var ze=T=>{var ie=bl(),yt=te(ie,!0);W(ie),xe(()=>it(yt,u().verificationRequired)),D(T,ie)};ve(ke,T=>{a().codeChallengeDisplay!=="standard"&&T(ze)})}var J=oe(ke,2),mt=te(J,!0);W(J);var E=oe(J,2),fe=oe(E,2),p=te(fe);fr(p),p.disabled=o(m),Wt(p,T=>y(d,T),()=>o(d));var Qt=oe(p,2);{var Ar=T=>{var ie=xl(),yt=te(ie);{var Rr=Te=>{var wt=ml();D(Te,wt)},Ir=Te=>{var wt=yl();D(Te,wt)},Or=Te=>{var wt=wl();D(Te,wt)},jn=Te=>{var wt=_l();D(Te,wt)};ve(yt,Te=>{o(h)===we.LOADING?Te(Rr):o(h)===we.ERROR?Te(Ir,1):o(h)===we.PLAYING?Te(Or,2):Te(jn,-1)})}W(ie),xe(()=>{j(ie,"title",u().getAudioChallenge),ie.disabled=o(h)===we.LOADING||o(h)===we.ERROR,j(ie,"aria-label",o(h)===we.LOADING?u().loading:u().getAudioChallenge)}),Ft("click",ie,()=>re()),D(T,ie)};ve(Qt,T=>{r().audio&&T(Ar)})}var Xe=oe(Qt,2);W(fe);var Bn=oe(fe,2),zt=te(Bn),_n=te(zt,!0);W(zt);var Rt=oe(zt,2),xn=te(Rt,!0);W(Rt),W(Bn),W(He);var Ie=oe(He,2);{var Lr=T=>{var ie=kl();Wt(ie,yt=>y(g,yt),()=>o(g)),Ae("error",ie,I),Ae("loadstart",ie,ue),Ae("canplay",ie,pe),Ae("pause",ie,Re),Ae("playing",ie,P),Ae("ended",ie,$),D(T,ie)};ve(Ie,T=>{o(x)&&T(Lr)})}return W(U),xe(()=>{it(mt,u().enterCodeFromImage),j(E,"src",i()),j(p,"minlength",r().length||1),j(p,"maxlength",r().length),j(p,"placeholder",u().enterCode),j(p,"aria-label",o(h)===we.LOADING?u().loading:o(h)===we.PLAYING?"":u().enterCodeAria),j(p,"aria-live",o(h)?"assertive":"polite"),j(p,"aria-busy",o(h)===we.LOADING),j(Xe,"title",u().reload),j(Xe,"aria-label",u().reload),j(zt,"aria-label",u().verify),it(_n,u().verify),j(Rt,"aria-label",u().cancel),it(xn,u().cancel)}),Ae("submit",He,V,!0),Ft("keydown",p,k),Ki(p,()=>o(b),T=>y(b,T)),Ft("click",Xe,()=>l()?.()),Ft("click",Rt,()=>s()?.()),D(e,U),ht(z)}$n(["keydown","click"]),$t(lo,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});var Cl=Q('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),Sl=Q('<div class="altcha-popover-arrow"></div>'),Tl=Q('<div role="button" class="altcha-popover-close">&times;</div>'),$l=Q('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);function Sr(e,t){dt(t,!0);let n=ne(t,"anchor"),r=ne(t,"children"),a=ne(t,"display",7,"standard"),i=ne(t,"backdrop",7,!1),s=ne(t,"onClickOutside"),l=ne(t,"onClickOutsideDelay",7,600),f=ne(t,"onClose"),u=ne(t,"placement",7,"auto"),h=ne(t,"variant",7,"neutral"),g=Pn(t,["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","variant"]),d=N(void 0),m=N(void 0),b=N(!1),x=N(0);je(()=>{u()!=="auto"&&y(b,u()==="top")}),pr(()=>{const E=a()==="bottomsheet"||a()==="overlay";return E&&(o(m)&&document.body.append(o(m)),o(d)&&document.body.append(o(d))),P(),Ht().then(()=>{y(x,Date.now(),!0)}),()=>{E&&(o(m)&&document.body.removeChild(o(m)),o(d)&&document.body.removeChild(o(d)))}});function $(){f()?.()}function I(E){const fe=E.target;!o(d)?.contains(fe)&&o(x)&&o(x)+l()<Date.now()&&s()?.()}function pe(){P()}function ue(){P()}function P(){if(n()&&u()==="auto"&&o(d)){const E=n().getBoundingClientRect(),p=document.documentElement.clientHeight-(E.top+E.height)<o(d).clientHeight;o(b)!==p&&y(b,p)}}var Re={get anchor(){return n()},set anchor(E){n(E),Z()},get children(){return r()},set children(E){r(E),Z()},get display(){return a()},set display(E="standard"){a(E),Z()},get backdrop(){return i()},set backdrop(E=!1){i(E),Z()},get onClickOutside(){return s()},set onClickOutside(E){s(E),Z()},get onClickOutsideDelay(){return l()},set onClickOutsideDelay(E=600){l(E),Z()},get onClose(){return f()},set onClose(E){f(E),Z()},get placement(){return u()},set placement(E="auto"){u(E),Z()},get variant(){return h()},set variant(E="neutral"){h(E),Z()}},k=$l();Ae("click",Ut,I),Ae("resize",Ut,pe),Ae("scroll",Ut,ue);var V=Gt(k);{var re=E=>{var fe=Cl();Wt(fe,p=>y(m,p),()=>o(m)),D(E,fe)};ve(V,E=>{i()&&E(re)})}var z=oe(V,2);On(z,()=>({...g,class:`altcha-popover ${(t.class||"")??""}`,"data-popover":!0,"data-variant":h(),"data-top":o(b),"data-display":a()}));var U=te(z);{var He=E=>{var fe=Sl();D(E,fe)};ve(U,E=>{a()==="standard"&&E(He)})}var ke=oe(U,2);{var ze=E=>{var fe=Tl();Ft("click",fe,$),D(E,fe)};ve(ke,E=>{a()!=="standard"&&E(ze)})}var J=oe(ke,2),mt=te(J);return Ti(mt,()=>r()??Ee),W(J),W(z),Wt(z,E=>y(d,E),()=>o(d)),D(e,k),ht(Re)}$n(["click"]),$t(Sr,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},variant:{}},[],[],{mode:"open"});function Al(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function Ll(e,t="altcha-css"){if(typeof document<"u"&&document&&!document.getElementById(t)){const n=document.createElement("style");n.id=t,n.textContent=e,document.head.appendChild(n)}}async function so(e){const{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:a,onOutOfMemory:i=d=>d>1?Math.floor(d/2):0,counterMode:s,timeout:l=9e4}=e,f=Math.min(16,Math.max(1,n)),u=[],h=()=>{for(const d of u)d.terminate()};for(let d=0;d<f;d++)u.push(await a(t.parameters.algorithm));let g=null;try{g=await Promise.race(u.map((d,m)=>(r.signal.addEventListener("abort",()=>{d.postMessage({type:"abort"})}),new Promise((b,x)=>{d.addEventListener("error",$=>{x($)}),d.addEventListener("message",$=>{if($.data){for(const I of u)I!==d&&I.postMessage({type:"abort"});if($.data.error)return x(new Error($.data.error))}b($.data)}),d.postMessage({challenge:t,counterMode:s,counterStart:m,counterStep:f,timeout:l,type:"work"})}))))}catch(d){if(d instanceof Error&&!!d?.message?.includes("Out of memory")&&i){h();const b=i(f);if(b)return so({...e,challenge:t,controller:r,concurrency:b,createWorker:a})}throw d}finally{h()}return r.signal.aborted?null:g||null}class Rl{TAG_CODES={INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10};maxSamples;sampleInterval;target;focusStartTime=0;focusInteraction=0;focusInteractionTimer=null;lastPointerSample=0;lastTouchSample=0;lastScrollSample=0;pendingPointer=null;pendingTouch=null;focus=[];pointer=[];scroll=[];touch=[];constructor(t={}){const{maxSamples:n=60,sampleInterval:r=50,target:a=window}=t;this.maxSamples=n,this.sampleInterval=r,this.target=a,this.attach()}destroy(){const t={capture:!0};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){const t={passive:!0,capture:!0};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t)}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples)}onFocus=t=>{if(this.focusInteraction===2)return;const n=t.target;if(!(n instanceof Element))return;const r=performance.now();this.focusStartTime===0&&(this.focusStartTime=r),this.focus.push([Math.round(r-this.focusStartTime),n.tabIndex,this.TAG_CODES[n.tagName]??0,this.focusInteraction?1:0]),this.evict(this.focus)};onInteraction=t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)};onPointer=t=>{if(t.pointerType==="touch")return;const n=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(n)],n-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=n,this.pendingPointer=null,this.evict(this.pointer))};onScroll=()=>{const t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))};onTouchMove=t=>{const n=t.timeStamp||performance.now(),r=t.touches[0];r&&(this.pendingTouch=[Math.round(r.clientX),Math.round(r.clientY),Math.round(n),Math.round(r.force*1e3)/1e3,Math.round(r.radiusX||0),Math.round(r.radiusY||0)],n-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=n,this.pendingTouch=null,this.evict(this.touch)))}}var Il=Q('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),Ol=Q('<div class="altcha-overlay-content"></div>'),Pl=Q('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),Ml=Q('<div class="altcha-floating-arrow"></div>'),Dl=Q('<input type="hidden"/>'),Nl=Q('<div class="altcha-error">Secure context (HTTPS) required.</div>'),Vl=Q('<div class="altcha-error"> </div>'),Ul=Q('<div class="altcha-error"> </div>'),Fl=Q("<!> <!>",1),Bl=Q('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);function jl(e,t){dt(t,!0);const n=()=>Ra(h,"$altchaDefaults",a),r=()=>Ra(b,"$altchaI18nStore",a),[a,i]=Ji(),s='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',l='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',f=["ar","fa","he","ur"],{isSecureContext:u}=globalThis,{store:h}=globalThis.$altcha.defaults,g=navigator.hardwareConcurrency||2,d=navigator.deviceMemory||0,m=d&&d<=4?Math.min(4,g):g,b=globalThis.$altcha.i18n.store,x=t.$$host,$=(c,v)=>{Ht().then(()=>{x?.dispatchEvent(new CustomEvent(c,{detail:v}))})};let I=null,pe=N(pt(new URL(location.origin))),ue=N(!1),P=N(null),Re=N(null),k=N(pt(B.UNVERIFIED)),V=N(void 0),re=N(void 0),z=N(null),U=N(void 0),He=N(null),ke=N(null),ze=N(null),J=N(null),mt=N(pt([])),E=N(pt({})),fe=N(!0);const p=Se(()=>({fetch:(c,v)=>fetch(c,v),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:!1,disableAutoFocus:!1,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:!1,floatingPlacement:"auto",hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:"",mockError:!1,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:m,...n(),...o(E)})),Qt=Se(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),Ar=Se(()=>zl(o(p).type)),Xe=Se(()=>o(p).auto),Bn=Se(()=>o(k)===B.VERIFYING),zt=Se(()=>!o(p).hideFooter),_n=Se(()=>!o(p).hideLogo&&o(p).display!=="bar"),Rt=Se(()=>Kl(r(),[o(p).language,document.documentElement.lang,...navigator.languages])),xn=Se(()=>f.includes(o(Rt).language)?"rtl":void 0),Ie=Se(()=>({...o(Rt).strings})),Lr=Se(()=>o(P)?.audio?.match(/^(https?:)?\//)?Hn(o(P).audio,o(pe),{language:o(p).audioChallengeLanguage||o(Rt).language}).toString():o(P)?.audio),T=Se(()=>o(P)?.image?.match(/^(https?:)?\//)?Hn(o(P).image,o(pe)):o(P)?.image);je(()=>{kn({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),je(()=>{if(t.configuration)try{kn(JSON.parse(t.configuration))}catch{G("unable to parse the `configuration` attribute (JSON expected)")}}),je(()=>{Mr(o(p).display)}),je(()=>{o(ue)&&o(k)===B.VERIFYING&&y(ue,!1)}),je(()=>{!o(ue)&&o(k)===B.VERIFIED&&y(ue,!0)}),je(()=>{if(!o(ue)){const c=Pr();c&&c.checked&&(c.checked=!1)}}),je(()=>{o(k)===B.VERIFIED&&Pr()?.setCustomValidity("")}),je(()=>{if(o(Xe)==="onload"){const c=setTimeout(()=>{en()},1);return()=>{c&&clearTimeout(c)}}}),je(()=>{o(ke)&&G("error:",o(ke))}),je(()=>{o(J)&&o(p).setCookie&&os(o(J),o(p).setCookie)}),pr(()=>(G("mounted","3.0.2"),x&&globalThis.$altcha.instances.add(x),y(z,o(U)?.closest("form"),!0),o(z)?.addEventListener("reset",po),o(z)?.addEventListener("submit",go,{capture:!0}),o(z)?.addEventListener("focusin",vo),ie(),o(p).humanInteractionSignature&&(G("human interaction signature enabled"),I=new Rl),$("load"),u||G("secure context (HTTPS) required"),()=>{Rr(),x&&globalThis.$altcha.instances.delete(x),o(ze)&&clearTimeout(o(ze)),o(z)?.removeEventListener("reset",po),o(z)?.removeEventListener("submit",go,{capture:!0}),o(z)?.removeEventListener("focusin",vo),I?.destroy()}));function ie(){y(mt,[...globalThis.$altcha.plugins].map(c=>new c(x)),!0),G("activating plugins",o(mt).map(c=>c.constructor.name));for(const c of o(mt))c.activate()}async function yt(c,...v){let w;for(const _ of o(mt))w=await _[c].call(_,...v);return w}function Rr(){for(const c of o(mt))c.destroy()}function Ir(c){const[v,w]=c.salt.split("?"),_={};if(w)try{Object.assign(_,Object.fromEntries(new URLSearchParams(w).entries()))}catch{}const A={codeChallenge:c.codeChallenge,parameters:{algorithm:c.algorithm,cost:1,data:_,expiresAt:_?.expires?parseInt(_.expires,10):void 0,keyLength:c.algorithm==="SHA-512"?64:c.algorithm==="SHA-384"?48:32,nonce:Al(new TextEncoder().encode(c.salt)),keyPrefix:c.challenge,salt:""},signature:c.signature};return Object.defineProperties(A,{_originalSalt:{enumerable:!1,value:c.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),A}function Or(c,v){return{algorithm:c.parameters.algorithm,challenge:c.parameters.keyPrefix,number:v.counter,salt:"_originalSalt"in c?c._originalSalt:c.parameters.nonce,signature:c.signature,took:v.time||0}}async function jn(c){await new Promise(v=>setTimeout(v,c))}async function Te(c=o(p).challenge,v){const w=await yt("onFetchChallenge",c);let _=null;if(w!==void 0)return w;if(typeof c=="string")if(c.match(/^(https?:)?\//)){G("fetching challenge from",v?.method||"GET",c),y(pe,new URL(c,location.origin),!0);const A=await o(p).fetch(c,{credentials:o(p).credentials||void 0,...v});await mo(A);const S=A.headers.get("x-altcha-config");S&&ns(S);const H=await A.json();if(H&&"his"in H&&H.his){if(G("requested HIS"),!I)throw new Error("Server requested HIS data but collector is disabled.");return Te(Hn(H.his.url,o(pe)),{body:JSON.stringify({his:I.export()}),headers:{"content-type":"application/json"},method:"POST"})}H&&"hisResult"in H&&H.hisResult&&G("HIS result",H.hisResult),_=H}else{G("parsing JSON challenge");try{_=JSON.parse(c)}catch{throw new Error("Unable to parse JSON challenge.")}}else if(c&&typeof c=="object")try{_=JSON.parse(JSON.stringify(c))}catch{throw new Error("Unable to parse JSON challenge.")}if(wt(_)&&(_=Ir(_)),!Hl(_))throw new Error("Challenge validation failed.");return _}function wt(c){return typeof c=="object"&&"challenge"in c}function Hl(c){return!!c&&typeof c=="object"&&"parameters"in c&&!!c.parameters&&typeof c.parameters=="object"&&"algorithm"in c.parameters&&"nonce"in c.parameters&&"salt"in c.parameters&&"keyPrefix"in c.parameters}function Pr(){return document.getElementById(o(Qt))}function zl(c){switch(c){case"checkbox":return ao;case"switch":return io;case"native":default:return oo}}function Kl(c,v){const w=Object.keys(c).map(A=>A.toLowerCase());let _=v.reduce((A,S)=>(S=S.toLowerCase(),A||(c[S]?S:null)||w.find(H=>S.split("-")[0]===H.split("-")[0])||null),null);return c[_||""]||(_="en"),{language:_,strings:c[_]}}function ql(c){switch(c){case"bar":return o(p).barPlacement||"bottom";case"floating":return o(p).floatingPlacement||"auto";default:return}}function Yl(c){return[...o(z)?.querySelectorAll(s)||[]].reduce((w,_)=>{const A=_.name,S=_.value;return A&&S&&(w[A]=/\n/.test(S)?S.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):S),w},{})}function Gl(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Hn(c,v,w){const _=new URL(c,v);if(_.search||(_.search=v.search),w)for(const A in w)w[A]!==void 0&&w[A]!==null&&_.searchParams.set(A,w[A]);return _.toString()}function Wl(c){!o(ue)&&c.currentTarget.checked?(c.preventDefault(),c.currentTarget.checked=!1,o(k)!==B.VERIFYING&&en()):c.currentTarget.checked||(c.preventDefault(),Qe())}function Zl(c){o(k)===B.VERIFYING?c.currentTarget.setCustomValidity(o(Ie).waitAlert):o(p).validationMessage&&c.currentTarget.setCustomValidity(o(p).validationMessage)}function Jl(){o(Re)&&o(Re).abort(),Mr(o(p).display),Qe()}function Xl(){zn()}function Ql(c){const v=c.target;o(p).display==="floating"&&v&&!x?.contains(v)&&!v.hasAttribute("data-backdrop")&&!v.closest("[data-popover]")&&o(k)!==B.VERIFIED&&!o(p).floatingPersist&&Dr()}function vo(c){o(Xe)==="onfocus"&&o(k)===B.UNVERIFIED&&en()}function po(){o(Re)&&o(Re).abort(),Mr(o(p).display),Qe()}function go(c){y(He,c.submitter,!0),o(Xe)==="onsubmit"&&o(k)===B.UNVERIFIED&&(c.preventDefault(),c.stopPropagation(),Nr(),en().then(v=>{v&&!o(P)&&Ht().then(()=>{bo(o(He))})}))}function es(){Qe()}function ts(){zn()}function ns(c){try{const v=JSON.parse(c);v&&typeof v=="object"&&kn({serverVerificationFields:v?.sentinel?.fields,serverVerificationTimeZone:v?.sentinel?.timeZone,verifyUrl:v.verifyurl,...v})}catch(v){G("unable to configure from x-altcha-config header",v)}}function rs(c=20){if(!o(U))return;const v=o(p).floatingPlacement;if(!o(re)&&(y(re,(o(p).floatingAnchor instanceof HTMLElement?o(p).floatingAnchor:o(p).floatingAnchor?document.querySelector(o(p).floatingAnchor):o(z)?.querySelector(l))||o(z),!0),!o(re))){G("unable to find floating anchor element");return}const w=parseInt(o(p).floatingOffset,10)||12,_=o(re).getBoundingClientRect(),A=o(U).getBoundingClientRect(),S=document.documentElement.clientHeight,H=document.documentElement.clientWidth,De=!v||v==="auto"?_.bottom+A.height+w+c>S:v==="top",X=Math.max(c,Math.min(H-c-A.width,_.left+_.width/2-A.width/2));if(o(U).style.setProperty("--altcha-floating-left",`${X}px`),o(U).style.setProperty("--altcha-floating-top",De?`${_.top-(A.height+w)}px`:`${_.bottom+w}px`),o(U).setAttribute("data-floating-position",De?"top":"bottom"),o(V)){const de=o(V).getBoundingClientRect();o(V).style.left=_.left-X+_.width/2-de.width/2+"px"}}async function as(c,v){const w=await yt("onRequestServerVerification",c,v);if(w!==void 0)return w;if(G("requesting server verification from",o(p).verifyUrl),!o(p).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");const _=await o(p).fetch(Hn(o(p).verifyUrl,o(pe)),{body:JSON.stringify({code:v,fields:o(p).serverVerificationFields?Yl():void 0,payload:c,timeZone:o(p).serverVerificationTimeZone?Gl():void 0}),credentials:o(p).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});await mo(_);const A=await _.json();return A&&typeof A=="object"&&"payload"in A&&A.payload&&$("serververification",A),A}function bo(c){o(z)&&"requestSubmit"in o(z)?o(z).requestSubmit(c):o(z)?.reportValidity()&&(c?c.click():o(z).submit())}function os(c,v={}){const{domain:w,name:_=o(p).name,maxAge:A,path:S,sameSite:H,secure:De}=v;let X=`${encodeURIComponent(_)}=${encodeURIComponent(c)}`;w&&(X+=`; Domain=${w}`),A!=null&&(X+=`; Max-Age=${A}`),S&&(X+=`; Path=${S}`),H&&(X+=`; SameSite=${H}`),De&&(X+="; Secure"),document.cookie=X}function Mr(c){switch(c){case"bar":case"floating":case"overlay":Dr(),(!o(Xe)||o(Xe)==="off")&&(o(E).auto="onsubmit");break;case"standard":Nr()}}function is(c){o(ze)&&clearTimeout(o(ze));const v=()=>{o(k)!==B.UNVERIFIED?(y(ue,!1),Ke(B.EXPIRED)):Qe(),$("expired")},w=c*1e3-Date.now();w>=1?y(ze,setTimeout(v,w),!0):v()}async function mo(c){if(c.status>=400){if(c.headers.get("content-type")?.includes("/json")){let w;try{w=await c.json()}catch{}if(w&&"error"in w)throw new Error(`Server responded with ${c.status} - ${w.error}`)}throw new Error(`Server responded with ${c.status}.`)}const v=c.headers.get("content-type");if(!v||!v.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${v}.`)}async function yo(c){if(!o(J)){Ke(B.ERROR,"Cannot verify code challenge without PoW payload.");return}Ke(B.VERIFYING);let v=null;if(o(p).verifyUrl)v=await as(o(J),c);else if(o(p).verifyFunction)v=await o(p).verifyFunction(o(J),c);else{Ke(B.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}v?.payload&&(y(J,v.payload,!0),G("server payload",o(J))),v?.verified===!0?(G("verified"),Ke(B.VERIFIED),$("verified",{payload:o(J)}),o(Xe)==="onsubmit"&&Ht().then(()=>{bo(o(He))})):Ke(B.ERROR,v?.reason||"Verification failed."),o(p).disableAutoFocus||Pr()?.focus()}function kn(c){Object.assign(o(E),{...Object.fromEntries(Object.entries(c).filter(([v,w])=>w!==void 0))})}function ls(){return{...o(p)}}function ss(){return o(k)}function Dr(){y(fe,!1)}function G(...c){(o(p).debug||c.some(v=>v instanceof Error))&&console[c[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${o(p).name}]`,...c)}function Qe(c=B.UNVERIFIED,v=null){y(ue,!1),y(ke,v,!0),y(J,null),o(ze)&&(clearTimeout(o(ze)),y(ze,null)),Ke(c)}function Ke(c,v=null){y(k,c,!0),y(ke,v,!0),$("statechange",{payload:o(J),state:o(k)})}function Nr(){y(fe,!0),Ht().then(()=>{zn()})}function zn(){switch(o(p).display){case"floating":return rs()}}async function en(c={}){const{concurrency:v=Math.max(1,o(p).workers),controller:w=new AbortController,minDuration:_=o(p).minDuration}=c,A=performance.now();let S=null,H=null,De=!1;const X=await yt("onVerify",c);if(X!==void 0)return X;y(Re,w,!0),Qe(B.VERIFYING);try{if(!u)throw new Error("Secure context (HTTPS) required.");if(o(p).mockError)throw new Error("Mock error.");if(o(p).test)return G("running test mode with null challenge"),await jn(Math.max(0,_-(performance.now()-A))),y(J,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),G("verified"),Ke(B.VERIFIED),$("vefified",{payload:o(J)}),{payload:o(J)};if(S=await Te(),!S)throw new Error("Failed to fetch challenge.");G("challenge",S),"configuration"in S&&(G("re-configuring from challenge",S.configuration),kn(S.configuration)),S.parameters.expiresAt&&is(S.parameters.expiresAt),De="_version"in S&&S._version===1;const de=globalThis.$altcha.algorithms.get(S.parameters.algorithm);if(!de)throw new Error(`Unsupported algorithm ${S.parameters.algorithm}.`);if(H=await so({challenge:S,concurrency:v,controller:w,createWorker:de,counterMode:De?"string":"uint32",onOutOfMemory:It=>{if(G("out of memory error received"),$("outofmemory"),o(p).retryOnOutOfMemoryError&&It>1){const Ot=Math.floor(It/2);return G(`retrying with ${Ot} workers...`),Ot}},timeout:o(p).timeout}),o(Re)?.signal.aborted)return Qe(),null;if(!H)throw new Error("Failed to find solution.");G("solution",H),await jn(Math.max(0,_-(performance.now()-A))),y(P,S.codeChallenge||o(p).codeChallenge||null,!0),De?y(J,btoa(JSON.stringify(Or(S,H))),!0):y(J,btoa(JSON.stringify({challenge:{parameters:S.parameters,signature:S.signature},solution:H})),!0),o(P)?(G("requesting code verification"),Ke(B.CODE),$("codechallenge",{codeChallenge:o(P)})):o(p).verifyUrl?await yo():(G("verified"),Ke(B.VERIFIED),$("vefified",{payload:o(J)}))}catch(de){return G("verification failed",de),Ke(B.ERROR,String(de)),null}finally{y(Re,null)}return{challenge:S,payload:o(J),solution:H}}var cs={configure:kn,getConfiguration:ls,getState:ss,hide:Dr,log:G,reset:Qe,setState:Ke,show:Nr,updateUI:zn,verify:en},wo=Bl();Ae("scroll",Xn,Xl),Ae("click",Xn,Ql),Ae("pageshow",Ut,es),Ae("resize",Ut,ts);var _o=Gt(wo);{var us=c=>{var v=Il();D(c,v)};ve(_o,c=>{o(p).display==="overlay"&&o(fe)&&c(us)})}var ct=oe(_o,2),xo=te(ct);{var fs=c=>{var v=Pl(),w=Gt(v),_=oe(w,2);{var A=S=>{var H=Ol();ya(H,()=>document.querySelector(o(p).overlayContent)?.innerHTML,!0),W(H),D(S,H)};ve(_,S=>{o(p).overlayContent&&S(A)})}Ft("click",w,Jl),D(c,v)};ve(xo,c=>{o(p).display==="overlay"&&o(fe)&&c(fs)})}var Vr=oe(xo,2),Ur=te(Vr),Fr=te(Ur),ko=te(Fr);{let c=Se(()=>o(p).display==="standard"&&o(Xe)!=="onsubmit"||o(k)===B.VERIFYING);$i(ko,()=>o(Ar),(v,w)=>{w(v,{get id(){return o(Qt)},name:"",get required(){return o(c)},get loading(){return o(Bn)},get checked(){return o(ue)},onchange:Wl,oninvalid:Zl})})}var Br=oe(ko,2),ds=te(Br);{var hs=c=>{var v=An();xe(()=>it(v,o(Ie).verificationRequired)),D(c,v)},vs=c=>{var v=An();xe(()=>it(v,o(Ie).verifying)),D(c,v)},ps=c=>{var v=An();xe(()=>it(v,o(Ie).verified)),D(c,v)},gs=c=>{var v=An();xe(()=>it(v,o(Ie).label)),D(c,v)};ve(ds,c=>{o(k)===B.CODE&&o(P)?c(hs):o(k)===B.VERIFYING?c(vs,1):o(k)===B.VERIFIED?c(ps,2):c(gs,-1)})}W(Br),W(Fr);var bs=oe(Fr,2);{var ms=c=>{Er(c,{get strings(){return o(Ie)}})};ve(bs,c=>{o(_n)&&c(ms)})}W(Ur);var Eo=oe(Ur,2);{var ys=c=>{{let v=Se(()=>o(p).display==="bar"&&o(_n));Cr(c,{get logo(){return o(v)},get strings(){return o(Ie)}})}};ve(Eo,c=>{o(zt)&&c(ys)})}var Co=oe(Eo,2);{var ws=c=>{var v=Ml();Wt(v,w=>y(V,w),()=>o(V)),D(c,v)};ve(Co,c=>{o(p).display==="floating"&&c(ws)})}var _s=oe(Co,2);{var xs=c=>{var v=Dl();fr(v),xe(()=>{j(v,"name",o(p).name),ji(v,o(J))}),D(c,v)};ve(_s,c=>{o(p).setCookie||c(xs)})}W(Vr);var ks=oe(Vr,2);{var Es=c=>{Sr(c,{get anchor(){return o(U)},onClickOutside:()=>{u&&Qe()},get placement(){return o(p).popoverPlacement},role:"alert",variant:"error",get dir(){return o(xn)},children:(v,w)=>{var _=da(),A=Gt(_);{var S=X=>{var de=Nl();D(X,de)},H=X=>{var de=Vl(),It=te(de,!0);W(de),xe(()=>it(It,o(Ie).expired)),D(X,de)},De=X=>{var de=Ul(),It=te(de,!0);W(de),xe(()=>{j(de,"title",o(ke)),it(It,o(Ie).error)}),D(X,de)};ve(A,X=>{!o(ke)&&!u?X(S):!o(ke)&&o(k)===B.EXPIRED?X(H,1):X(De,-1)})}D(v,_)},$$slots:{default:!0}})},Cs=c=>{var v=da(),w=Gt(v);Si(w,()=>o(P),_=>{{let A=Se(()=>o(p).codeChallengeDisplay!=="standard");Sr(_,{get anchor(){return o(U)},get backdrop(){return o(A)},get display(){return o(p).codeChallengeDisplay},onClose:()=>{Qe()},get placement(){return o(p).popoverPlacement},role:"dialog",get"aria-label"(){return o(Ie).verificationRequired},get dir(){return o(xn)},children:(S,H)=>{var De=Fl(),X=Gt(De);lo(X,{get audioUrl(){return o(Lr)},get imageUrl(){return o(T)},onCancel:()=>Qe(),onReload:()=>en(),onSubmit:Ot=>yo(Ot),get codeChallenge(){return o(P)},get config(){return o(p)},get strings(){return o(Ie)}});var de=oe(X,2);{var It=Ot=>{Cr(Ot,{get logo(){return o(_n)},get strings(){return o(Ie)}})};ve(de,Ot=>{o(zt)&&o(p).codeChallengeDisplay!=="standard"&&Ot(It)})}D(S,De)},$$slots:{default:!0}})}}),D(c,v)};ve(ks,c=>{o(ke)||o(k)===B.EXPIRED||!u?c(Es):o(P)&&o(k)===B.CODE&&c(Cs,1)})}W(ct),Wt(ct,c=>y(U,c),()=>o(U)),xe(c=>{j(ct,"data-state",o(k)),j(ct,"data-display",o(p).display||void 0),j(ct,"data-placement",c),j(ct,"data-visible",o(fe)||void 0),j(ct,"dir",o(xn)),j(Br,"for",o(Qt)),ct.dir=ct.dir},[()=>ql(o(p).display)]),D(e,wo);var Ss=ht(cs);return i(),Ss}$n(["click"]),typeof window<"u"&&window.customElements&&customElements.define("altcha-widget",$t(jl,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));const co=`(function() {
  "use strict";
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  function getDigest(algorithm) {
    switch (algorithm) {
      case "PBKDF2/SHA-512":
        return "SHA-512";
      case "PBKDF2/SHA-384":
        return "SHA-384";
      case "PBKDF2/SHA-256":
      default:
        return "SHA-256";
    }
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, cost, keyLength = 32 } = parameters;
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      password,
      { name: "PBKDF2" },
      false,
      ["deriveKey"]
    );
    const derivedKey = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: cost,
        hash: getDigest(algorithm)
      },
      passwordKey,
      { name: "AES-GCM", length: keyLength * 8 },
      true,
      ["encrypt"]
    );
    return {
      derivedKey: new Uint8Array(await crypto.subtle.exportKey("raw", derivedKey))
    };
  }
  handler({
    deriveKey
  });
})();
`,uo=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",co],{type:"text/javascript;charset=utf-8"});function Tr(e){let t;try{if(t=uo&&(self.URL||self.webkitURL).createObjectURL(uo),!t)throw"";const n=new Worker(t,{name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(co),{name:e?.name})}}const fo=`(function() {
  "use strict";
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, keyLength = 32 } = parameters;
    const iterations = Math.max(1, parameters.cost);
    let data = void 0;
    let derivedKey = void 0;
    for (let i = 0; i < iterations; i++) {
      if (i === 0) {
        data = concatBuffers(salt, password);
      } else {
        data = derivedKey;
      }
      derivedKey = new Uint8Array(
        (await crypto.subtle.digest(algorithm, data)).slice(0, keyLength)
      );
    }
    return {
      parameters: {},
      derivedKey
    };
  }
  handler({
    deriveKey
  });
})();
`,ho=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",fo],{type:"text/javascript;charset=utf-8"});function $r(e){let t;try{if(t=ho&&(self.URL||self.webkitURL).createObjectURL(ho),!t)throw"";const n=new Worker(t,{name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(fo),{name:e?.name})}}return Ll(`:root {
  --altcha-border-color: var(--altcha-color-neutral);
  --altcha-border-width: 1px;
  --altcha-border-radius: 6px;
  --altcha-color-base: light-dark(oklch(100% 0.00011 271.152), oklch(20.904% 0.00002 271.152));
  --altcha-color-base-content: light-dark(
  	oklch(20.904% 0.00002 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-error: oklch(51.284% 0.20527 28.678);
  --altcha-color-error-content: oklch(100% 0.00011 271.152);
  --altcha-color-neutral: light-dark(oklch(83.591% 0.0001 271.152), oklch(46.04% 0.00005 271.152));
  --altcha-color-neutral-content: light-dark(
  	oklch(46.76% 0.00005 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-primary: oklch(40.279% 0.2449 268.131);
  --altcha-color-primary-content: oklch(100% 0.00011 271.152);
  --altcha-color-success: oklch(55.748% 0.18968 142.511);
  --altcha-color-success-content: oklch(100% 0.00011 271.152);
  --altcha-checkbox-border-color: var(--altcha-color-neutral);
  --altcha-checkbox-border-radius: 5px;
  --altcha-checkbox-border-width: var(--altcha-border-width);
  --altcha-checkbox-outline: 2px solid var(--altcha-checkbox-outline-color);
  --altcha-checkbox-outline-color: light-dark(
  	color-mix(in srgb, var(--altcha-color-primary) 20%, transparent),
  	color-mix(in srgb, var(--altcha-color-primary) 60%, transparent)
  );
  --altcha-checkbox-outline-offset: 2px;
  --altcha-checkbox-size: 22px;
  --altcha-checkbox-transition-duration: var(--altcha-transition-duration);
  --altcha-input-background-color: var(--altcha-color-base);
  --altcha-input-border-radius: 3px;
  --altcha-input-border-width: 1px;
  --altcha-input-color: var(--altcha-color-base-content);
  --altcha-max-width: 320px;
  --altcha-padding: 0.75rem;
  --altcha-popover-arrow-size: 6px;
  --altcha-popover-color: var(--altcha-border-color);
  --altcha-shadow: drop-shadow(3px 3px 6px oklch(0% 0 0 / 0.2));
  --altcha-spinner-color: var(--altcha-color-base-content);
  --altcha-switch-background-color: var(--altcha-color-neutral);
  --altcha-switch-border-radius: calc(infinity * 1px);
  --altcha-switch-height: var(--altcha-checkbox-size);
  --altcha-switch-padding: 0.25rem;
  --altcha-switch-width: calc(var(--altcha-checkbox-size) * 1.75);
  --altcha-switch-toggle-border-radius: 100%;
  --altcha-switch-toggle-color: var(--altcha-color-neutral-content);
  --altcha-switch-toggle-size: calc(
  	var(--altcha-switch-height) - calc(var(--altcha-switch-padding) * 2)
  );
  --altcha-transition-duration: 0.6s;
  --altcha-z-index: 99999999;
  --altcha-z-index-popover: 999999999;
}

.altcha {
  all: revert-layer;
  display: none;
  font-family: inherit;
  font-size: inherit;
  position: relative;
}
.altcha[data-visible] {
  display: block;
}
.altcha-popover, .altcha-popover * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha a, .altcha-popover a {
  color: currentColor;
  text-decoration: none;
}
.altcha a:hover, .altcha-popover a:hover {
  color: currentColor;
}
.altcha-main {
  align-items: start;
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width, 1px) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius, 0);
  color: var(--altcha-color-base-content);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  padding: var(--altcha-padding);
  max-width: var(--altcha-max-width, 100%);
}
.altcha-main > * {
  display: flex;
  width: 100%;
}
.altcha-main > *:first-child {
  flex-grow: 1;
}
.altcha-checkbox-wrap {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 0.5rem;
}
.altcha-checkbox-wrap > * {
  display: flex;
}
.altcha-logo {
  opacity: 0.7;
}
.altcha-footer {
  align-items: center;
  display: flex;
  flex-grow: 1;
  gap: 0.5rem;
  justify-content: flex-end;
  font-size: 0.7rem;
  opacity: 0.7;
}
.altcha-error {
  font-size: 0.85rem;
}
.altcha-button {
  align-items: center;
  background: var(--altcha-color-primary);
  border: var(--altcha-input-border-width) solid var(--altcha-color-primary);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-color-primary-content);
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  gap: 0.5rem;
  padding: 0.35rem;
}
.altcha-button:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-button > .altcha-spinner, .altcha-button > svg {
  height: 20px;
  width: 20px;
}
.altcha-button-secondary {
  background: transparent;
  border-color: var(--altcha-color-neutral);
  color: var(--altcha-color-neutral-content);
}
.altcha-input {
  background: var(--altcha-input-background-color);
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-input-color);
  flex-grow: 1;
  font-size: 1rem;
  min-width: 0;
  padding: 0.25rem;
  width: auto;
}
.altcha-input:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-spinner {
  animation: altcha-rotate 0.6s linear infinite;
  border-radius: 100%;
  border: var(--altcha-checkbox-border-width) solid var(--altcha-spinner-color);
  border-bottom-color: transparent;
  border-right-color: transparent;
  opacity: 0.5;
}
.altcha-popover {
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius);
  color: var(--altcha-color-base-content);
  filter: var(--altcha-shadow);
  position: absolute;
  left: calc(var(--altcha-padding) / 2);
  max-width: calc(var(--altcha-max-width) - var(--altcha-padding));
  top: calc(var(--altcha-padding) + var(--altcha-checkbox-size) + var(--altcha-popover-arrow-size));
  z-index: var(--altcha-z-index-popover);
}
.altcha-popover-arrow {
  border: var(--altcha-popover-arrow-size) solid transparent;
  border-bottom-color: var(--altcha-popover-color);
  content: "";
  height: 0;
  left: calc(var(--altcha-checkbox-size) / 2);
  position: absolute;
  top: calc(var(--altcha-popover-arrow-size) * -2);
  width: 0;
}
.altcha-popover-content {
  max-height: 100dvh;
  overflow: auto;
  padding: var(--altcha-padding);
}
.altcha-popover[data-top=true][data-display=standard] {
  bottom: calc(100% - (var(--altcha-padding) - var(--altcha-popover-arrow-size)));
  top: auto;
}
.altcha-popover[data-top=true][data-display=standard] .altcha-popover-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-popover-color);
  bottom: calc(var(--altcha-popover-arrow-size) * -2);
  top: auto;
}
.altcha-popover[data-variant=error] {
  --altcha-popover-color: var(--altcha-color-error);
  background-color: var(--altcha-color-error);
  border-color: var(--altcha-color-error);
  color: var(--altcha-color-error-content);
}
.altcha-popover[data-variant=error] .altcha-popover-content {
  padding: calc(var(--altcha-padding) / 1.5) var(--altcha-padding);
}
.altcha-popover[data-display=overlay] {
  animation: altcha-overlay-slidein 0.5s forwards;
  left: 50%;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] {
  animation: altcha-bottomsheet-slideup 0.5s forwards;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  bottom: -100%;
  left: 50%;
  position: fixed;
  top: auto;
  transform: translate(-50%, 0);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] .altcha-popover-content {
  padding-bottom: calc(var(--altcha-padding) * 2);
}
.altcha-popover-backdrop {
  background: var(--altcha-color-base-content);
  bottom: 0;
  left: 0;
  opacity: 0.1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.5s;
  z-index: var(--altcha-z-index);
}
.altcha-popover-close {
  color: var(--altcha-color-base-content);
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  height: 1.25rem;
  line-height: 0.95;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1.25rem;
  z-index: var(--altcha-z-index);
}
[dir=rtl] .altcha-popover {
  left: auto;
  right: calc(var(--altcha-padding) / 2);
}
[dir=rtl] .altcha-popover-arrow {
  left: auto;
  right: calc(var(--altcha-checkbox-size) / 2);
}
[dir=rtl] .altcha-popover-close {
  left: 0;
  right: auto;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer, .altcha-popover[data-display=overlay] .altcha-footer {
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  gap: 0.5rem;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer svg, .altcha-popover[data-display=overlay] .altcha-footer svg {
  height: 18px;
  width: 18px;
  vertical-align: middle;
}
.altcha-code-challenge > form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.altcha-code-challenge-title {
  font-weight: 600;
}
.altcha-code-challenge-text {
  font-size: 0.85rem;
}
.altcha-code-challenge-image {
  background: white;
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  object-fit: contain;
  height: 50px;
}
.altcha-code-challenge-row {
  display: flex;
  gap: 0.5rem;
}
.altcha-code-challenge-buttons {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: var(--altcha-padding);
  justify-content: space-between;
}
.altcha-code-challenge-buttons button {
  justify-content: center;
  width: 100%;
}
.altcha-checkbox {
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input {
  appearance: none;
  background: var(--altcha-input-background-color);
  border: var(--altcha-checkbox-border-width, 2px) solid var(--altcha-checkbox-border-color);
  border-radius: var(--altcha-checkbox-border-radius);
  height: var(--altcha-checkbox-size);
  left: 0;
  margin: 0;
  outline: none;
  padding: 0;
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input:before {
  border-radius: var(--altcha-checkbox-border-radius);
  content: "";
  width: 100%;
  height: 100%;
  background: var(--altcha-color-neutral);
  display: block;
  transform: scale(0);
}
.altcha-checkbox input:focus {
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-checkbox input:checked {
  background-color: var(--altcha-color-success);
  border-color: var(--altcha-color-success);
}
.altcha-checkbox input:checked::before {
  background-color: var(--altcha-color-success);
  opacity: 0;
  transform: scale(2.2);
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox svg {
  --altcha-radio-svg-size: calc(var(--altcha-checkbox-size) * 0.5);
  --altcha-radio-svg-offset: calc(var(--altcha-checkbox-size) * 0.25);
  fill: none;
  left: var(--altcha-radio-svg-offset);
  height: var(--altcha-radio-svg-size);
  opacity: 0;
  position: absolute;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  top: var(--altcha-radio-svg-offset);
  transform: translate3d(0, 0, 0);
  width: var(--altcha-radio-svg-size);
}
.altcha-checkbox input:checked + svg {
  color: var(--altcha-color-success-content);
  opacity: 1;
  stroke-dashoffset: 0;
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox[data-loading=true] .altcha-checkbox-spinner {
  display: block;
}
.altcha-checkbox-native {
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native input {
  height: var(--altcha-checkbox-size);
  margin: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native input:focus {
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-checkbox-native-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox-native[data-loading=true] .altcha-checkbox-native-spinner {
  display: block;
}
.altcha-switch {
  align-items: center;
  border-radius: var(--altcha-switch-border-radius);
  background-color: var(--altcha-switch-background-color);
  cursor: pointer;
  display: flex;
  height: var(--altcha-switch-height);
  padding: var(--altcha-switch-padding);
  position: relative;
  width: var(--altcha-switch-width);
}
.altcha-switch:focus-within {
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-switch input {
  appearance: none;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.altcha-switch-toggle {
  align-items: center;
  background-color: var(--altcha-switch-toggle-color);
  border-radius: var(--altcha-switch-toggle-border-radius);
  display: flex;
  height: var(--altcha-switch-toggle-size);
  justify-content: center;
  left: var(--altcha-switch-padding);
  position: absolute;
  transition: width 150ms ease-out, left 150ms ease-out;
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch-spinner {
  display: none;
  height: var(--altcha-switch-toggle-size);
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch[data-loading=true] {
  pointer-events: none;
}
.altcha-switch[data-loading=true] .altcha-switch-spinner {
  display: block;
}
.altcha-switch[data-loading=true] .altcha-switch-toggle {
  background-color: transparent;
  left: calc(50% - var(--altcha-switch-toggle-size) / 2);
}
[data-state=verified] .altcha-switch {
  --altcha-switch-background-color: var(--altcha-color-success);
}
[data-state=verified] .altcha-switch-toggle {
  background-color: var(--altcha-color-success-content);
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl] .altcha-switch-toggle {
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl][data-state=verified] .altcha-switch-toggle {
  left: var(--altcha-switch-padding);
}
.altcha-floating-arrow {
  border: 6px solid transparent;
  border-bottom-color: var(--altcha-border-color);
  content: "";
  height: 0;
  left: 12px;
  position: absolute;
  top: -12px;
  width: 0;
}
.altcha-overlay-backdrop {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha-overlay-close {
  display: inline-block;
  color: currentColor;
  cursor: pointer;
  font-size: 1rem;
  height: 1rem;
  line-height: 0.85;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1rem;
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] {
  animation: altcha-overlay-slidein var(--altcha-transition-duration) forwards;
  filter: var(--altcha-shadow);
  left: 50%;
  opacity: 0;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating] {
  display: none;
  filter: var(--altcha-shadow);
  left: var(--altcha-floating-left, -100%);
  position: fixed;
  top: var(--altcha-floating-top, -100%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=floating] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating][data-placement=top] .altcha-floating-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-border-color);
  bottom: -12px;
  top: auto;
}
.altcha[data-display=floating][data-visible] {
  display: flex;
}
.altcha[data-display=bar] {
  bottom: -100%;
  filter: var(--altcha-shadow);
  left: 0;
  position: fixed;
  right: 0;
  transition: bottom var(--altcha-transition-duration), top var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=bar] .altcha-main {
  align-items: center;
  border-radius: 0;
  border-width: var(--altcha-border-width) 0 0 0;
  flex-direction: row;
  max-width: 100% !important;
}
.altcha[data-display=bar] .altcha-main > * {
  width: auto;
}
.altcha[data-display=bar][data-placement=top] {
  bottom: auto;
  top: -100%;
}
.altcha[data-display=bar][data-placement=top] .altcha-main {
  border-width: 0 0 var(--altcha-border-width) 0;
}
.altcha[data-display=bar][data-placement=bottom]:not([data-state=unverified]) {
  bottom: 0;
}
.altcha[data-display=bar][data-placement=top]:not([data-state=unverified]) {
  top: 0;
}
.altcha[data-display=invisible] {
  display: none;
}

@keyframes altcha-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes altcha-bottomsheet-slideup {
  100% {
    bottom: 0;
  }
}
@keyframes altcha-overlay-slidein {
  100% {
    opacity: 1;
    top: 50%;
  }
}`),$altcha.algorithms.set("SHA-256",()=>new $r),$altcha.algorithms.set("SHA-384",()=>new $r),$altcha.algorithms.set("SHA-512",()=>new $r),$altcha.algorithms.set("PBKDF2/SHA-256",()=>new Tr),$altcha.algorithms.set("PBKDF2/SHA-384",()=>new Tr),$altcha.algorithms.set("PBKDF2/SHA-512",()=>new Tr),So}Ts();const $s={ariaLinkLabel:"Bezoek Altcha.org",enterCode:"Voer code in",enterCodeAria:"Voer de code in die je hoort. Druk op Spatie om de audio af te spelen.",error:"Verificatie mislukt. Probeer het later opnieuw.",expired:"Verificatie verlopen. Probeer het opnieuw.",footer:'Beschermd door <a href="https://altcha.org/" target="_blank" aria-label="Bezoek Altcha.org">ALTCHA</a>',getAudioChallenge:"Audio-uitdaging ontvangen",label:"Ik ben geen robot",loading:"Laden...",reload:"Herladen",verify:"Verifiëren",verificationRequired:"Verificatie vereist!",verified:"Geverifieerd",verifying:"Bezig met verifiëren...",waitAlert:"Bezig met verifiëren... even geduld a.u.b.",cancel:"Annuleren",enterCodeFromImage:"Om door te gaan, voert u de code uit de onderstaande afbeelding in."};"$altcha"in globalThis&&globalThis.$altcha.i18n.set("nl",$s);const As="[data-form-runtime-message]";function jr(C){for(const K of Array.from(C.elements))(K instanceof HTMLInputElement||K instanceof HTMLTextAreaElement||K instanceof HTMLSelectElement)&&K.setCustomValidity("")}function Ls(C){return C.closest("label")?.querySelector("span")?.textContent?.replace(/\s*\*$/,"").trim()||"Dit veld"}function Rs(C){if(C.validity.valueMissing){if(C instanceof HTMLInputElement&&C.type==="checkbox"&&C.name==="privacy_accepted"){C.setCustomValidity("Akkoord gaan met de privacyverklaring is verplicht.");return}C.setCustomValidity(`${Ls(C)} is verplicht.`);return}if(C instanceof HTMLInputElement&&C.type==="email"&&C.validity.typeMismatch){C.setCustomValidity("Vul een geldig e-mailadres in.");return}C.setCustomValidity("")}document.querySelectorAll(".site-form").forEach(C=>{const q=C.closest(".form-shell")?.querySelector(As)??null,ae=C.querySelector('button[type="submit"]'),Ne=ae?.textContent??"Verzenden",Y=()=>{q&&(q.hidden=!0,q.textContent="")},le=ee=>{q&&(q.textContent=ee,q.hidden=!1)};C.addEventListener("invalid",ee=>{const _e=ee.target;!(_e instanceof HTMLInputElement)&&!(_e instanceof HTMLTextAreaElement)&&!(_e instanceof HTMLSelectElement)||(Rs(_e),le("Controleer de verplichte velden en probeer het opnieuw."))},!0),C.addEventListener("input",()=>{jr(C),Y()}),C.addEventListener("change",()=>{jr(C),Y()}),C.addEventListener("submit",ee=>{if(jr(C),Y(),!C.checkValidity()){ee.preventDefault(),le("Controleer de verplichte velden en probeer het opnieuw."),C.reportValidity();return}ae&&(ae.disabled=!0,ae.textContent="Verzenden...")}),window.addEventListener("pageshow",()=>{ae&&(ae.disabled=!1,ae.textContent=Ne)})});document.querySelectorAll("[data-js-timestamp]").forEach(C=>{C instanceof HTMLInputElement&&(C.value=String(Math.floor(Date.now()/1e3)))});const Kt=document.querySelector("[data-news-archive]");if(Kt){const C=new URLSearchParams(window.location.search),K=(C.get("s")||"").trim().toLowerCase(),q=(C.get("archief")||"").trim(),ae=Array.from(Kt.querySelectorAll("[data-archive-item]")),Ne=Kt.querySelector("[data-archive-search]"),Y=Array.from(Kt.querySelectorAll("[data-archive-link]")),le=Kt.querySelector("[data-archive-toolbar]"),ee=Kt.querySelector("[data-archive-results]"),_e=Kt.querySelector("[data-archive-clear]");Ne&&(Ne.value=C.get("s")||"");const qe=K.length>0||q.length>0;let et=0;if(ae.forEach(he=>{const _t=(he.dataset.archiveTitle||"").toLowerCase(),Ee=(he.dataset.archiveExcerpt||"").toLowerCase(),tn=he.dataset.archiveMonth||"",nn=K.length===0||_t.includes(K)||Ee.includes(K),ce=q.length===0||tn===q,ut=nn&&ce;he.hidden=!ut,ut&&(et+=1)}),Y.forEach(he=>{const Ee=new URL(he.href,window.location.origin).searchParams.get("archief")||"";he.toggleAttribute("aria-current",Ee===q&&q.length>0)}),le&&ee&&_e&&(le.hidden=!qe,qe)){const he=[];if(q){const Ee=Y.find(tn=>(new URL(tn.href,window.location.origin).searchParams.get("archief")||"")===q);Ee&&he.push(Ee.textContent?.trim()||q)}K&&he.push(`zoekterm "${Ne?.value.trim()||K}"`),ee.textContent=et>0?`${et} bericht${et===1?"":"en"} gevonden${he.length?` voor ${he.join(" en ")}`:""}.`:`Geen berichten gevonden${he.length?` voor ${he.join(" en ")}`:""}.`;const _t=new URL(_e.href,window.location.origin);_t.search="",_e.href=_t.pathname}}document.querySelectorAll("[data-video-load]").forEach(C=>{C.addEventListener("click",()=>{const K=C.closest(".video-consent-card"),q=K?.querySelector("[data-video-target]"),ae=C.dataset.videoSrc,Ne=C.dataset.videoTitle||"YouTube video";if(!K||!q||!ae||q.querySelector("iframe"))return;const Y=document.createElement("iframe");Y.src=ae,Y.title=Ne,Y.width="560",Y.height="315",Y.loading="lazy",Y.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",Y.referrerPolicy="strict-origin-when-cross-origin",Y.allowFullscreen=!0,q.hidden=!1,q.appendChild(Y),K.classList.add("video-consent-card--loaded")})});(()=>{const C=document.getElementById("carousel-track"),K=Array.from(document.querySelectorAll(".carousel__slide")),q=Array.from(document.querySelectorAll(".carousel__dot")),ae=document.getElementById("carousel-prev"),Ne=document.getElementById("carousel-next"),Y=document.getElementById("render-carousel");if(!(C instanceof HTMLElement)||!(ae instanceof HTMLButtonElement)||!(Ne instanceof HTMLButtonElement)||!(Y instanceof HTMLElement)||K.length===0||q.length!==K.length)return;let le=0,ee;function _e(et){q[le]?.classList.remove("carousel__dot--active"),K[le]?.setAttribute("aria-hidden","true"),le=(et%K.length+K.length)%K.length,C.style.transform=`translateX(-${le*100}%)`,q[le]?.classList.add("carousel__dot--active"),K[le]?.removeAttribute("aria-hidden")}function qe(){ee&&clearInterval(ee),ee=setInterval(()=>_e(le+1),4e3)}ae.addEventListener("click",()=>{_e(le-1),qe()}),Ne.addEventListener("click",()=>{_e(le+1),qe()}),q.forEach((et,he)=>{et.addEventListener("click",()=>{_e(he),qe()})}),Y.addEventListener("mouseenter",()=>ee&&clearInterval(ee)),Y.addEventListener("mouseleave",qe),Y.addEventListener("focusin",()=>ee&&clearInterval(ee)),Y.addEventListener("focusout",qe),_e(0),qe()})();
