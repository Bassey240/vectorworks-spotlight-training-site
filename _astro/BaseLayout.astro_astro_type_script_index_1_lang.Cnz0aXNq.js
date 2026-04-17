var So={},To;function Ts(){if(To)return So;To=1;const $=!1;var oe=Array.isArray,J=Array.prototype.indexOf,ue=Array.prototype.includes,lt=Array.from,re=Object.keys,Be=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,Je=Object.getOwnPropertyDescriptors,kn=Object.prototype,Ht=Array.prototype,pe=Object.getPrototypeOf,yt=Object.isExtensible;const xe=()=>{};function en(e){for(var t=0;t<e.length;t++)e[t]()}function tn(){var e,t,n=new Promise((r,a)=>{e=r,t=a});return{promise:n,resolve:e,reject:t}}const ie=2,st=4,En=8,Kn=1<<24,wt=16,Xe=32,_t=64,qn=128,Me=512,he=1024,ge=2048,He=4096,Qe=8192,Ke=16384,xt=32768,Yn=1<<25,kt=65536,Br=1<<17,$o=1<<18,It=1<<19,Ao=1<<20,Ot=65536,Gn=1<<21,Wn=1<<22,Et=1<<23,Kt=Symbol("$state"),Ro=Symbol("legacy props"),Lo=Symbol(""),ct=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},nn=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),rn=3,an=8;function Hr(e){return e===this.v}function Kr(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Io(e){return!Kr(e,this.v)}function Oo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Po(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Mo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Do(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function No(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Vo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Uo(){throw new Error("https://svelte.dev/e/hydration_failed")}function Fo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function jo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function zo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Bo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Ho=!1;const Ko=1,qo=2,Zn="[",qr="[!",Yr="[?",Gr="]",Pt={},ve=Symbol(),Wr="http://www.w3.org/1999/xhtml",Yo="http://www.w3.org/2000/svg",Go="http://www.w3.org/1998/Math/MathML",Wo="@attach";let Se=null;function qt(e){Se=e}function ut(e,t=!1,n){Se={p:Se,i:!1,c:null,e:null,s:e,x:null,r:L,l:null}}function ft(e){var t=Se,n=t.e;if(n!==null){t.e=null;for(var r of n)Wa(r)}return e!==void 0&&(t.x=e),t.i=!0,Se=t.p,e??{}}function Zr(){return!0}let Mt=[];function Jr(){var e=Mt;Mt=[],en(e)}function dt(e){if(Mt.length===0&&!dn){var t=Mt;queueMicrotask(()=>{t===Mt&&Jr()})}Mt.push(e)}function Zo(){for(;Mt.length>0;)Jr()}function on(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function Jo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Xo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let R=!1;function et(e){R=e}let M;function ke(e){if(e===null)throw on(),Pt;return M=e}function Dt(){return ke(nt(M))}function q(e){if(R){if(nt(M)!==null)throw on(),Pt;M=e}}function Cn(e=1){if(R){for(var t=e,n=M;t--;)n=nt(n);M=n}}function Jn(e=!0){for(var t=0,n=M;;){if(n.nodeType===an){var r=n.data;if(r===Gr){if(t===0)return n;t-=1}else(r===Zn||r===qr||r[0]==="["&&!isNaN(Number(r.slice(1))))&&(t+=1)}var a=nt(n);e&&n.remove(),n=a}}function Xr(e){if(!e||e.nodeType!==an)throw on(),Pt;return e.data}function ht(e){if(typeof e!="object"||e===null||Kt in e)return e;const t=pe(e);if(t!==kn&&t!==Ht)return e;var n=new Map,r=oe(e),a=N(0),i=Ft,s=l=>{if(Ft===i)return l();var f=O,u=Ft;De(null),Ba(i);var h=l();return De(f),Ba(u),h};return r&&n.set("length",N(e.length)),new Proxy(e,{defineProperty(l,f,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Fo();var h=n.get(f);return h===void 0?s(()=>{var g=N(u.value);return n.set(f,g),g}):y(h,u.value,!0),!0},deleteProperty(l,f){var u=n.get(f);if(u===void 0){if(f in l){const h=s(()=>N(ve));n.set(f,h),vn(a)}}else y(u,ve),vn(a);return!0},get(l,f,u){if(f===Kt)return e;var h=n.get(f),g=f in l;if(h===void 0&&(!g||_e(l,f)?.writable)&&(h=s(()=>{var m=ht(g?l[f]:ve),b=N(m);return b}),n.set(f,h)),h!==void 0){var d=o(h);return d===ve?void 0:d}return Reflect.get(l,f,u)},getOwnPropertyDescriptor(l,f){var u=Reflect.getOwnPropertyDescriptor(l,f);if(u&&"value"in u){var h=n.get(f);h&&(u.value=o(h))}else if(u===void 0){var g=n.get(f),d=g?.v;if(g!==void 0&&d!==ve)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return u},has(l,f){if(f===Kt)return!0;var u=n.get(f),h=u!==void 0&&u.v!==ve||Reflect.has(l,f);if(u!==void 0||L!==null&&(!h||_e(l,f)?.writable)){u===void 0&&(u=s(()=>{var d=h?ht(l[f]):ve,m=N(d);return m}),n.set(f,u));var g=o(u);if(g===ve)return!1}return h},set(l,f,u,h){var g=n.get(f),d=f in l;if(r&&f==="length")for(var m=u;m<g.v;m+=1){var b=n.get(m+"");b!==void 0?y(b,ve):m in l&&(b=s(()=>N(ve)),n.set(m+"",b))}if(g===void 0)(!d||_e(l,f)?.writable)&&(g=s(()=>N(void 0)),y(g,ht(u)),n.set(f,g));else{d=g.v!==ve;var x=s(()=>ht(u));y(g,x)}var T=Reflect.getOwnPropertyDescriptor(l,f);if(T?.set&&T.set.call(h,u),!d){if(r&&typeof f=="string"){var I=n.get("length"),de=Number(f);Number.isInteger(de)&&de>=I.v&&y(I,de+1)}vn(a)}return!0},ownKeys(l){o(a);var f=Reflect.ownKeys(l).filter(g=>{var d=n.get(g);return d===void 0||d.v!==ve});for(var[u,h]of n)h.v!==ve&&!(u in l)&&f.push(u);return f},setPrototypeOf(){jo()}})}function Qr(e){try{if(e!==null&&typeof e=="object"&&Kt in e)return e[Kt]}catch{}return e}function Qo(e,t){return Object.is(Qr(e),Qr(t))}var Nt,Xn,ea,ta,na;function Qn(){if(Nt===void 0){Nt=window,Xn=document,ea=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;ta=_e(t,"firstChild").get,na=_e(t,"nextSibling").get,yt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),yt(n)&&(n.__t=void 0)}}function tt(e=""){return document.createTextNode(e)}function Le(e){return ta.call(e)}function nt(e){return na.call(e)}function X(e,t){if(!R)return Le(e);var n=Le(M);if(n===null)n=M.appendChild(tt());else if(t&&n.nodeType!==rn){var r=tt();return n?.before(r),ke(r),r}return t&&Sn(n),ke(n),n}function Yt(e,t=!1){if(!R){var n=Le(e);return n instanceof Comment&&n.data===""?nt(n):n}if(t){if(M?.nodeType!==rn){var r=tt();return M?.before(r),ke(r),r}Sn(M)}return M}function te(e,t=1,n=!1){let r=R?M:e;for(var a;t--;)a=r,r=nt(r);if(!R)return r;if(n){if(r?.nodeType!==rn){var i=tt();return r===null?a?.after(i):r.before(i),ke(i),i}Sn(r)}return ke(r),r}function ei(e){e.textContent=""}function er(e,t,n){return document.createElementNS(t??Wr,e,void 0)}function Sn(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===rn;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function ra(e){var t=L;if(t===null)return O.f|=Et,e;if((t.f&xt)===0&&(t.f&st)===0)throw e;Ct(e,t)}function Ct(e,t){for(;t!==null;){if((t.f&qn)!==0){if((t.f&xt)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}const ti=-7169;function ae(e,t){e.f=e.f&ti|t}function tr(e){(e.f&Me)!==0||e.deps===null?ae(e,he):ae(e,He)}function aa(e){if(e!==null)for(const t of e)(t.f&ie)===0||(t.f&Ot)===0||(t.f^=Ot,aa(t.deps))}function oa(e,t,n){(e.f&ge)!==0?t.add(e):(e.f&He)!==0&&n.add(e),aa(e.deps),ae(e,he)}function ni(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ri=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ai(e){return ri.includes(e)}const oi={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ii(e){return e=e.toLowerCase(),oi[e]??e}const li=["touchstart","touchmove"];function si(e){return li.includes(e)}function ci(e,t){if(t){const n=document.body;e.autofocus=!0,dt(()=>{document.activeElement===n&&e.focus()})}}let ia=!1;function la(){ia||(ia=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Tn(e){var t=O,n=L;De(null),at(null);try{return e()}finally{De(t),at(n)}}function ui(e,t,n,r=n){e.addEventListener(t,()=>Tn(n));const a=e.__on_r;a?e.__on_r=()=>{a(),r(!0)}:e.__on_r=()=>r(!0),la()}const ln=Symbol("events"),sa=new Set,nr=new Set;function ca(e,t,n,r={}){function a(i){if(r.capture||rr.call(t,i),!i.cancelBubble)return Tn(()=>n?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?dt(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function Te(e,t,n,r,a){var i={capture:r,passive:a},s=ca(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Un(()=>{t.removeEventListener(e,s,i)})}function Vt(e,t,n){(t[ln]??={})[e]=n}function $n(e){for(var t=0;t<e.length;t++)sa.add(e[t]);for(var n of nr)n(e)}let ua=null;function rr(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],i=a[0]||e.target;ua=e;var s=0,l=ua===e&&e[ln];if(l){var f=a.indexOf(l);if(f!==-1&&(t===document||t===window)){e[ln]=t;return}var u=a.indexOf(t);if(u===-1)return;f<=u&&(s=f)}if(i=a[s]||e.target,i!==t){Be(e,"currentTarget",{configurable:!0,get(){return i||n}});var h=O,g=L;De(null),at(null);try{for(var d,m=[];i!==null;){var b=i.assignedSlot||i.parentNode||i.host||null;try{var x=i[ln]?.[r];x!=null&&(!i.disabled||e.target===i)&&x.call(i,e)}catch(T){d?m.push(T):d=T}if(e.cancelBubble||b===t||b===null)break;i=b}if(d){for(let T of m)queueMicrotask(()=>{throw T});throw d}}finally{e[ln]=t,delete e.currentTarget,De(h),at(g)}}}const fi=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function di(e){return fi?.createHTML(e)??e}function fa(e){var t=er("template");return t.innerHTML=di(e.replaceAll("<!>","<!---->")),t.content}function Ie(e,t){var n=L;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function Z(e,t){var n=(t&Ko)!==0,r=(t&qo)!==0,a,i=!e.startsWith("<!>");return()=>{if(R)return Ie(M,null),M;a===void 0&&(a=fa(i?e:"<!>"+e),n||(a=Le(a)));var s=r||ea?document.importNode(a,!0):a.cloneNode(!0);if(n){var l=Le(s),f=s.lastChild;Ie(l,f)}else Ie(s,s);return s}}function hi(e,t,n="svg"){var r=!e.startsWith("<!>"),a=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(R)return Ie(M,null),M;if(!i){var s=fa(a),l=Le(s);i=Le(l)}var f=i.cloneNode(!0);return Ie(f,f),f}}function ar(e,t){return hi(e,t,"svg")}function An(e=""){if(!R){var t=tt(e+"");return Ie(t,t),t}var n=M;return n.nodeType!==rn?(n.before(n=tt()),ke(n)):Sn(n),Ie(n,n),n}function da(){if(R)return Ie(M,null),M;var e=document.createDocumentFragment(),t=document.createComment(""),n=tt();return e.append(t,n),Ie(t,n),e}function D(e,t){if(R){var n=L;((n.f&xt)===0||n.nodes.end===null)&&(n.nodes.end=M),Dt();return}e!==null&&e.before(t)}function vi(e){let t=0,n=hn(0),r;return()=>{_r()&&(o(n),Fn(()=>(t===0&&(r=bn(()=>e(()=>vn(n)))),t+=1,()=>{dt(()=>{t-=1,t===0&&(r?.(),r=void 0,vn(n))})})))}}var pi=kt|It;function gi(e,t,n,r){new bi(e,t,n,r)}class bi{parent;is_pending=!1;transform_error;#e;#t=R?M:null;#n;#s;#a;#r=null;#o=null;#i=null;#l=null;#c=0;#u=0;#d=!1;#h=new Set;#v=new Set;#f=null;#y=vi(()=>(this.#f=hn(this.#c),()=>{this.#f=null}));constructor(t,n,r,a){this.#e=t,this.#n=n,this.#s=i=>{var s=L;s.b=this,s.f|=qn,r(i)},this.parent=L.b,this.transform_error=a??this.parent?.transform_error??(i=>i),this.#a=mn(()=>{if(R){const i=this.#t;Dt();const s=i.data===qr;if(i.data.startsWith(Yr)){const f=JSON.parse(i.data.slice(Yr.length));this.#_(f)}else s?this.#x():this.#w()}else this.#b()},pi),R&&(this.#e=M)}#w(){try{this.#r=ot(()=>this.#s(this.#e))}catch(t){this.error(t)}}#_(t){const n=this.#n.failed;n&&(this.#i=ot(()=>{n(this.#e,()=>t,()=>()=>{})}))}#x(){const t=this.#n.pending;if(t){this.is_pending=!0,this.#o=ot(()=>t(this.#e));var n=F;dt(()=>{var r=this.#l=document.createDocumentFragment(),a=tt();r.append(a),this.#r=this.#g(()=>ot(()=>this.#s(a))),this.#u===0&&(this.#e.before(r),this.#l=null,yn(this.#o,()=>{this.#o=null}),this.#p(n))})}}#b(){var t=F;try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#c=0,this.#r=ot(()=>{this.#s(this.#e)}),this.#u>0){var n=this.#l=document.createDocumentFragment();no(this.#r,n);const r=this.#n.pending;this.#o=ot(()=>r(this.#e))}else this.#p(t)}catch(r){this.error(r)}}#p(t){this.is_pending=!1;for(const n of this.#h)ae(n,ge),t.schedule(n);for(const n of this.#v)ae(n,He),t.schedule(n);this.#h.clear(),this.#v.clear()}defer_effect(t){oa(t,this.#h,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#g(t){var n=L,r=O,a=Se;at(this.#a),De(this.#a),qt(this.#a.ctx);try{return vt.ensure(),t()}catch(i){return ra(i),null}finally{at(n),De(r),qt(a)}}#m(t,n){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t,n);return}this.#u+=t,this.#u===0&&(this.#p(n),this.#o&&yn(this.#o,()=>{this.#o=null}),this.#l&&(this.#e.before(this.#l),this.#l=null))}update_pending_count(t,n){this.#m(t,n),this.#c+=t,!(!this.#f||this.#d)&&(this.#d=!0,dt(()=>{this.#d=!1,this.#f&&Nn(this.#f,this.#c)}))}get_effect_pending(){return this.#y(),o(this.#f)}error(t){var n=this.#n.onerror;let r=this.#n.failed;if(!n&&!r)throw t;this.#r&&(be(this.#r),this.#r=null),this.#o&&(be(this.#o),this.#o=null),this.#i&&(be(this.#i),this.#i=null),R&&(ke(this.#t),Cn(),ke(Jn()));var a=!1,i=!1;const s=()=>{if(a){Xo();return}a=!0,i&&Bo(),this.#i!==null&&yn(this.#i,()=>{this.#i=null}),this.#g(()=>{this.#b()})},l=f=>{try{i=!0,n?.(f,s),i=!1}catch(u){Ct(u,this.#a&&this.#a.parent)}r&&(this.#i=this.#g(()=>{try{return ot(()=>{var u=L;u.b=this,u.f|=qn,r(this.#e,()=>f,()=>s)})}catch(u){return Ct(u,this.#a.parent),null}}))};dt(()=>{var f;try{f=this.transform_error(t)}catch(u){Ct(u,this.#a&&this.#a.parent);return}f!==null&&typeof f=="object"&&typeof f.then=="function"?f.then(l,u=>Ct(u,this.#a&&this.#a.parent)):l(f)})}}function rt(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=`${n}`)}function ha(e,t){return va(e,t)}function mi(e,t){Qn(),t.intro=t.intro??!1;const n=t.target,r=R,a=M;try{for(var i=Le(n);i&&(i.nodeType!==an||i.data!==Zn);)i=nt(i);if(!i)throw Pt;et(!0),ke(i);const s=va(e,{...t,anchor:i});return et(!1),s}catch(s){if(s instanceof Error&&s.message.split(`
`).some(l=>l.startsWith("https://svelte.dev/e/")))throw s;return s!==Pt&&console.warn("Failed to hydrate: ",s),t.recover===!1&&Uo(),Qn(),ei(n),et(!1),ha(e,t)}finally{et(r),ke(a)}}const Rn=new Map;function va(e,{target:t,anchor:n,props:r={},events:a,context:i,intro:s=!0,transformError:l}){Qn();var f=void 0,u=il(()=>{var h=n??t.appendChild(tt());gi(h,{pending:()=>{}},m=>{ut({});var b=Se;if(i&&(b.c=i),a&&(r.$$events=a),R&&Ie(m,null),f=e(m,r)||{},R&&(L.nodes.end=M,M===null||M.nodeType!==an||M.data!==Gr))throw on(),Pt;ft()},l);var g=new Set,d=m=>{for(var b=0;b<m.length;b++){var x=m[b];if(!g.has(x)){g.add(x);var T=si(x);for(const le of[t,document]){var I=Rn.get(le);I===void 0&&(I=new Map,Rn.set(le,I));var de=I.get(x);de===void 0?(le.addEventListener(x,rr,{passive:T}),I.set(x,1)):I.set(x,de+1)}}}};return d(lt(sa)),nr.add(d),()=>{for(var m of g)for(const T of[t,document]){var b=Rn.get(T),x=b.get(m);--x==0?(T.removeEventListener(m,rr),b.delete(m),b.size===0&&Rn.delete(T)):b.set(m,x)}nr.delete(d),h!==n&&h.parentNode?.removeChild(h)}});return or.set(f,u),f}let or=new WeakMap;function yi(e,t){const n=or.get(e);return n?(or.delete(e),n(t)):Promise.resolve()}function ir(e){var t=ie|ge,n=O!==null&&(O.f&ie)!==0?O:null;return L!==null&&(L.f|=It),{ctx:Se,deps:null,effects:null,equals:Hr,f:t,fn:e,reactions:null,rv:0,v:ve,wv:0,parent:n??L,ac:null}}function wi(e,t,n){let r=L;r===null&&Po();var a=void 0,i=hn(ve),s=!O,l=new Map;return ll(()=>{var f=L,u=tn();a=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject).finally(Ln)}catch(m){u.reject(m),Ln()}var h=F;if(s){if((f.f&xt)!==0)var g=ma();if(r.b.is_rendered())l.get(h)?.reject(ct),l.delete(h);else{for(const m of l.values())m.reject(ct);l.clear()}l.set(h,u)}const d=(m,b=void 0)=>{if(g){var x=b===ct;g(x)}if(!(b===ct||(f.f&Ke)!==0)){if(h.activate(),b)i.f|=Et,Nn(i,b);else{(i.f&Et)!==0&&(i.f^=Et),Nn(i,m);for(const[T,I]of l){if(l.delete(T),T===h)break;I.reject(ct)}}h.deactivate()}};u.promise.then(d,m=>d(null,m||"unknown"))}),Un(()=>{for(const f of l.values())f.reject(ct)}),new Promise(f=>{function u(h){function g(){h===a?f(i):u(a)}h.then(g,g)}u(a)})}function Ee(e){const t=ir(e);return ja(t),t}function _i(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)be(t[n])}}function xi(e){for(var t=e.parent;t!==null;){if((t.f&ie)===0)return(t.f&Ke)===0?t:null;t=t.parent}return null}function lr(e){var t,n=L;at(xi(e));try{e.f&=~Ot,_i(e),t=qa(e)}finally{at(n)}return t}function pa(e){var t=lr(e);if(!e.equals(t)&&(e.wv=Ha(),(!F?.is_fork||e.deps===null)&&(e.v=t,e.deps===null))){ae(e,he);return}$t||(qe!==null?(_r()||F?.is_fork)&&qe.set(e,t):tr(e))}function ki(e){if(e.effects!==null)for(const t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(ct),t.teardown=xe,t.ac=null,gn(t,0),kr(t))}function ga(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&Jt(t)}function ba(e,t,n,r){const a=ir;var i=e.filter(d=>!d.settled);if(n.length===0&&i.length===0){r(t.map(a));return}var s=L,l=Ei(),f=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(d=>d.promise)):null;function u(d){l();try{r(d)}catch(m){(s.f&Ke)===0&&Ct(m,s)}Ln()}if(n.length===0){f.then(()=>u(t.map(a)));return}var h=ma();function g(){Promise.all(n.map(d=>wi(d))).then(d=>u([...t.map(a),...d])).catch(d=>Ct(d,s)).finally(()=>h())}f?f.then(()=>{l(),g(),Ln()}):g()}function Ei(){var e=L,t=O,n=Se,r=F;return function(i=!0){at(e),De(t),qt(n),i&&(e.f&Ke)===0&&(r?.activate(),r?.apply())}}function Ln(e=!0){at(null),De(null),qt(null),e&&F?.deactivate()}function ma(){var e=L.b,t=F,n=e.is_rendered();return e.update_pending_count(1,t),t.increment(n),(r=!1)=>{e.update_pending_count(-1,t),t.decrement(n,r)}}class In{anchor;#e=new Map;#t=new Map;#n=new Map;#s=new Set;#a=!0;constructor(t,n=!0){this.anchor=t,this.#a=n}#r=t=>{if(this.#e.has(t)){var n=this.#e.get(t),r=this.#t.get(n);if(r)cl(r),this.#s.delete(n);else{var a=this.#n.get(n);a&&(this.#t.set(n,a.effect),this.#n.delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(const[i,s]of this.#e){if(this.#e.delete(i),i===t)break;const l=this.#n.get(s);l&&(be(l.effect),this.#n.delete(s))}for(const[i,s]of this.#t){if(i===n||this.#s.has(i))continue;const l=()=>{if(Array.from(this.#e.values()).includes(i)){var u=document.createDocumentFragment();no(s,u),u.append(tt()),this.#n.set(i,{effect:s,fragment:u})}else be(s);this.#s.delete(i),this.#t.delete(i)};this.#a||!r?(this.#s.add(i),yn(s,l,!1)):l()}}};#o=t=>{this.#e.delete(t);const n=Array.from(this.#e.values());for(const[r,a]of this.#n)n.includes(r)||(be(a.effect),this.#n.delete(r))};ensure(t,n){var r=F;n&&!this.#t.has(t)&&!this.#n.has(t)&&this.#t.set(t,ot(()=>n(this.anchor))),this.#e.set(r,t),R&&(this.anchor=M),this.#r(r)}}function fe(e,t,n=!1){var r;R&&(r=M,Dt());var a=new In(e),i=n?kt:0;function s(l,f){if(R){var u=Xr(r);if(l!==parseInt(u.substring(1))){var h=Jn();ke(h),a.anchor=h,et(!1),a.ensure(l,f),et(!0);return}}a.ensure(l,f)}mn(()=>{var l=!1;t((f,u=0)=>{l=!0,s(u,f)}),l||s(-1,null)},i)}const Ci=Symbol("NaN");function Si(e,t,n){R&&Dt();var r=new In(e);mn(()=>{var a=t();a!==a&&(a=Ci),r.ensure(a,n)})}function ya(e,t,n=!1,r=!1,a=!1,i=!1){var s=e,l="";if(n){var f=e;R&&(s=ke(Le(f)))}ye(()=>{var u=L;if(l===(l=t()??"")){R&&Dt();return}if(n&&!R){u.nodes=null,f.innerHTML=l,l!==""&&Ie(Le(f),f.lastChild);return}if(u.nodes!==null&&(Xa(u.nodes.start,u.nodes.end),u.nodes=null),l!==""){if(R){M.data;for(var h=Dt(),g=h;h!==null&&(h.nodeType!==an||h.data!=="");)g=h,h=nt(h);if(h===null)throw on(),Pt;Ie(M,g),s=ke(h);return}var d=r?Yo:a?Go:void 0,m=er(r?"svg":a?"math":"template",d);m.innerHTML=l;var b=r||a?m:m.content;if(Ie(Le(b),b.lastChild),r||a)for(;Le(b);)s.before(Le(b));else s.before(b)}})}function Ti(e,t,...n){var r=new In(e);mn(()=>{const a=t()??null;r.ensure(a,a&&(i=>a(i,...n)))},kt)}function $i(e,t,n){var r;R&&(r=M,Dt());var a=new In(e);mn(()=>{var i=t()??null;if(R){var s=Xr(r),l=s===Zn,f=i!==null;if(l!==f){var u=Jn();ke(u),a.anchor=u,et(!1),a.ensure(i,i&&(h=>n(h,i))),et(!0);return}}a.ensure(i,i&&(h=>n(h,i)))},kt)}function Ai(e,t){var n=void 0,r;Za(()=>{n!==(n=t())&&(r&&(be(r),r=null),n&&(r=ot(()=>{xr(()=>n(e))})))})}function wa(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=wa(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ri(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=wa(e))&&(r&&(r+=" "),r+=t);return r}function Li(e){return typeof e=="object"?Ri(e):e??""}const _a=[...` 	
\r\f \v\uFEFF`];function Ii(e,t,n){var r=e==null?"":""+e;if(n){for(var a of Object.keys(n))if(n[a])r=r?r+" "+a:a;else if(r.length)for(var i=a.length,s=0;(s=r.indexOf(a,s))>=0;){var l=s+i;(s===0||_a.includes(r[s-1]))&&(l===r.length||_a.includes(r[l]))?r=(s===0?"":r.substring(0,s))+r.substring(l+1):s=l}}return r===""?null:r}function xa(e,t=!1){var n=t?" !important;":";",r="";for(var a of Object.keys(e)){var i=e[a];i!=null&&i!==""&&(r+=" "+a+": "+i+n)}return r}function sr(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Oi(e,t){if(t){var n="",r,a;if(Array.isArray(t)?(r=t[0],a=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,s=0,l=!1,f=[];r&&f.push(...Object.keys(r).map(sr)),a&&f.push(...Object.keys(a).map(sr));var u=0,h=-1;const x=e.length;for(var g=0;g<x;g++){var d=e[g];if(l?d==="/"&&e[g-1]==="*"&&(l=!1):i?i===d&&(i=!1):d==="/"&&e[g+1]==="*"?l=!0:d==='"'||d==="'"?i=d:d==="("?s++:d===")"&&s--,!l&&i===!1&&s===0){if(d===":"&&h===-1)h=g;else if(d===";"||g===x-1){if(h!==-1){var m=sr(e.substring(u,h).trim());if(!f.includes(m)){d!==";"&&g++;var b=e.substring(u,g).trim();n+=" "+b+";"}}u=g+1,h=-1}}}}return r&&(n+=xa(r)),a&&(n+=xa(a,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Pi(e,t,n,r,a,i){var s=e.__className;if(R||s!==n||s===void 0){var l=Ii(n,r,i);(!R||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l)),e.__className=n}else if(i&&a!==i)for(var f in i){var u=!!i[f];(a==null||u!==!!a[f])&&e.classList.toggle(f,u)}return i}function cr(e,t={},n,r){for(var a in n){var i=n[a];t[a]!==i&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,r))}}function Mi(e,t,n,r){var a=e.__style;if(R||a!==t){var i=Oi(t,r);(!R||i!==e.getAttribute("style"))&&(i==null?e.removeAttribute("style"):e.style.cssText=i),e.__style=t}else r&&(Array.isArray(r)?(cr(e,n?.[0],r[0]),cr(e,n?.[1],r[1],"important")):cr(e,n,r));return r}function ur(e,t,n=!1){if(e.multiple){if(t==null)return;if(!oe(t))return Jo();for(var r of e.options)r.selected=t.includes(ka(r));return}for(r of e.options){var a=ka(r);if(Qo(a,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Di(e){var t=new MutationObserver(()=>{ur(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Un(()=>{t.disconnect()})}function ka(e){return"__value"in e?e.__value:e.value}const sn=Symbol("class"),cn=Symbol("style"),Ea=Symbol("is custom element"),Ca=Symbol("is html"),Ni=nn?"link":"LINK",Vi=nn?"input":"INPUT",Ui=nn?"option":"OPTION",Fi=nn?"select":"SELECT",ji=nn?"progress":"PROGRESS";function fr(e){if(R){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;z(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var a=e.checked;z(e,"checked",null),e.checked=a}}};e.__on_r=n,dt(n),la()}}function zi(e,t){var n=dr(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==ji)||(e.value=t??"")}function Bi(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function z(e,t,n,r){var a=dr(e);R&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===Ni)||a[t]!==(a[t]=n)&&(t==="loading"&&(e[Lo]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Ta(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Hi(e,t,n,r,a=!1,i=!1){if(R&&a&&e.nodeName===Vi){var s=e,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in n||fr(s)}var f=dr(e),u=f[Ea],h=!f[Ca];let g=R&&u;g&&et(!1);var d=t||{},m=e.nodeName===Ui;for(var b in t)b in n||(n[b]=null);n.class?n.class=Li(n.class):n[sn]&&(n.class=null),n[cn]&&(n.style??=null);var x=Ta(e);for(const k in n){let V=n[k];if(m&&k==="value"&&V==null){e.value=e.__value="",d[k]=V;continue}if(k==="class"){var T=e.namespaceURI==="http://www.w3.org/1999/xhtml";Pi(e,T,V,r,t?.[sn],n[sn]),d[k]=V,d[sn]=n[sn];continue}if(k==="style"){Mi(e,V,t?.[cn],n[cn]),d[k]=V,d[cn]=n[cn];continue}var I=d[k];if(!(V===I&&!(V===void 0&&e.hasAttribute(k)))){d[k]=V;var de=k[0]+k[1];if(de!=="$$")if(de==="on"){const ee={},H="$$"+k;let U=k.slice(2);var le=ai(U);if(ni(U)&&(U=U.slice(0,-7),ee.capture=!0),!le&&I){if(V!=null)continue;e.removeEventListener(U,d[H],ee),d[H]=null}if(le)Vt(U,e,V),$n([U]);else if(V!=null){let Fe=function(we){d[k].call(this,we)};d[H]=ca(U,e,Fe,ee)}}else if(k==="style")z(e,k,V);else if(k==="autofocus")ci(e,!!V);else if(!u&&(k==="__value"||k==="value"&&V!=null))e.value=e.__value=V;else if(k==="selected"&&m)Bi(e,V);else{var P=k;h||(P=ii(P));var Ae=P==="defaultValue"||P==="defaultChecked";if(V==null&&!u&&!Ae)if(f[k]=null,P==="value"||P==="checked"){let ee=e;const H=t===void 0;if(P==="value"){let U=ee.defaultValue;ee.removeAttribute(P),ee.defaultValue=U,ee.value=ee.__value=H?U:null}else{let U=ee.defaultChecked;ee.removeAttribute(P),ee.defaultChecked=U,ee.checked=H?U:!1}}else e.removeAttribute(k);else Ae||x.includes(P)&&(u||typeof V!="string")?(e[P]=V,P in f&&(f[P]=ve)):typeof V!="function"&&z(e,P,V)}}}return g&&et(!0),d}function On(e,t,n=[],r=[],a=[],i,s=!1,l=!1){ba(a,n,r,f=>{var u=void 0,h={},g=e.nodeName===Fi,d=!1;if(Za(()=>{var b=t(...f.map(o)),x=Hi(e,u,b,i,s,l);d&&g&&"value"in b&&ur(e,b.value);for(let I of Object.getOwnPropertySymbols(h))b[I]||be(h[I]);for(let I of Object.getOwnPropertySymbols(b)){var T=b[I];I.description===Wo&&(!u||T!==u[I])&&(h[I]&&be(h[I]),h[I]=ot(()=>Ai(e,()=>T))),x[I]=T}u=x}),g){var m=e;xr(()=>{ur(m,u.value,!0),Di(m)})}d=!0})}function dr(e){return e.__attributes??={[Ea]:e.nodeName.includes("-"),[Ca]:e.namespaceURI===Wr}}var Sa=new Map;function Ta(e){var t=e.getAttribute("is")||e.nodeName,n=Sa.get(t);if(n)return n;Sa.set(t,n=[]);for(var r,a=e,i=Element.prototype;i!==a;){r=Je(a);for(var s in r)r[s].set&&n.push(s);a=pe(a)}return n}function Ki(e,t,n=t){var r=new WeakSet;ui(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=hr(e)?vr(i):i,n(i),F!==null&&r.add(F),await jt(),i!==(i=t())){var s=e.selectionStart,l=e.selectionEnd,f=e.value.length;if(e.value=i??"",l!==null){var u=e.value.length;s===l&&l===f&&u>f?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=s,e.selectionEnd=Math.min(l,u))}}}),(R&&e.defaultValue!==e.value||bn(t)==null&&e.value)&&(n(hr(e)?vr(e.value):e.value),F!==null&&r.add(F)),Fn(()=>{var a=t();if(e===document.activeElement){var i=F;if(r.has(i))return}hr(e)&&a===vr(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function hr(e){var t=e.type;return t==="number"||t==="range"}function vr(e){return e===""?null:+e}function $a(e,t){return e===t||e?.[Kt]===t}function Gt(e={},t,n,r){var a=Se.r,i=L;return xr(()=>{var s,l;return Fn(()=>{s=l,l=[],bn(()=>{e!==n(...l)&&(t(e,...l),s&&$a(n(...s),e)&&t(null,...s))})}),()=>{let f=i;for(;f!==a&&f.parent!==null&&f.parent.f&Yn;)f=f.parent;const u=()=>{l&&$a(n(...l),e)&&t(null,...l)},h=f.teardown;f.teardown=()=>{u(),h?.()}}}),e}const qi={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Pn(e,t,n){return new Proxy({props:e,exclude:t},qi)}function Q(e,t,n,r){var a=r,i=!0,s=()=>(i&&(i=!1,a=r),a),l;l=e[t],l===void 0&&r!==void 0&&(l=s());var f;f=()=>{var d=e[t];return d===void 0?s():(i=!0,d)};var u=!1,h=ir(()=>(u=!1,f())),g=L;return(function(d,m){if(arguments.length>0){const b=m?o(h):d;return y(h,b),u=!0,a!==void 0&&(a=b),d}return $t&&u||(g.f&Ke)!==0?h.v:o(h)})}function Yi(e){return new Gi(e)}class Gi{#e;#t;constructor(t){var n=new Map,r=(i,s)=>{var l=Va(s,!1,!1);return n.set(i,l),l};const a=new Proxy({...t.props||{},$$events:{}},{get(i,s){return o(n.get(s)??r(s,Reflect.get(i,s)))},has(i,s){return s===Ro?!0:(o(n.get(s)??r(s,Reflect.get(i,s))),Reflect.has(i,s))},set(i,s,l){return y(n.get(s)??r(s,l),l),Reflect.set(i,s,l)}});this.#t=(t.hydrate?mi:ha)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError}),(!t?.props?.$$host||t.sync===!1)&&Y(),this.#e=a.$$events;for(const i of Object.keys(this.#t))i==="$set"||i==="$destroy"||i==="$on"||Be(this,i,{get(){return this.#t[i]},set(s){this.#t[i]=s},enumerable:!0});this.#t.$set=i=>{Object.assign(a,i)},this.#t.$destroy=()=>{yi(this.#t)}}$set(t){this.#t.$set(t)}$on(t,n){this.#e[t]=this.#e[t]||[];const r=(...a)=>n.call(this,...a);return this.#e[t].push(r),()=>{this.#e[t]=this.#e[t].filter(a=>a!==r)}}$destroy(){this.#t.$destroy()}}let Aa=class{};typeof HTMLElement=="function"&&(Aa=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;$$shadowRoot=null;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&(this.$$shadowRoot=this.attachShadow(n))}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const r=this.$$c.$on(e,t);this.$$l_u.set(t,r)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const r=this.$$l_u.get(t);r&&(r(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(r){return a=>{const i=er("slot");r!=="default"&&(i.name=r),D(a,i)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},n=Wi(this);for(const r of this.$$s)r in n&&(r==="default"&&!this.$$d.children?(this.$$d.children=e(r),t.default=!0):t[r]=e(r));for(const r of this.attributes){const a=this.$$g_p(r.name);a in this.$$d||(this.$$d[a]=Mn(a,r.value,this.$$p_d,"toProp"))}for(const r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=Yi({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=ol(()=>{Fn(()=>{this.$$r=!0;for(const r of re(this.$$c)){if(!this.$$p_d[r]?.reflect)continue;this.$$d[r]=this.$$c[r];const a=Mn(r,this.$$d[r],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,a)}this.$$r=!1})});for(const r in this.$$l)for(const a of this.$$l[r]){const i=this.$$c.$on(r,a);this.$$l_u.set(a,i)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=Mn(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return re(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function Mn(e,t,n,r){const a=n[e]?.type;if(t=a==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(a){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(a){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Wi(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function St(e,t,n,r,a,i){let s=class extends Aa{constructor(){super(e,n,a),this.$$p_d=t}static get observedAttributes(){return re(t).map(l=>(t[l].attribute||l).toLowerCase())}};return re(t).forEach(l=>{Be(s.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(f){f=Mn(l,f,t),this.$$d[l]=f;var u=this.$$c;if(u){var h=_e(u,l)?.get;h?u[l]=f:u.$set({[l]:f})}}})}),r.forEach(l=>{Be(s.prototype,l,{get(){return this.$$c?.[l]}})}),e.element=s,s}function pr(e){Se===null&&Oo(),Ue(()=>{const t=bn(e);if(typeof t=="function")return t})}function Ra(e,t,n){if(e==null)return t(void 0),xe;const r=bn(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}const Wt=[];function Zi(e,t=xe){let n=null;const r=new Set;function a(l){if(Kr(e,l)&&(e=l,n)){const f=!Wt.length;for(const u of r)u[1](),Wt.push(u,e);if(f){for(let u=0;u<Wt.length;u+=2)Wt[u][0](Wt[u+1]);Wt.length=0}}}function i(l){a(l(e))}function s(l,f=xe){const u=[l,f];return r.add(u),r.size===1&&(n=t(a,i)||xe),l(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:s}}function un(e){let t;return Ra(e,n=>t=n)(),t}let gr=Symbol();function La(e,t,n){const r=n[t]??={store:null,source:Va(void 0),unsubscribe:xe};if(r.store!==e&&!(gr in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=xe;else{var a=!0;r.unsubscribe=Ra(e,i=>{a?r.source.v=i:y(r.source,i)}),a=!1}return e&&gr in n?un(e):o(r.source)}function Ji(){const e={};function t(){Un(()=>{for(var n in e)e[n].unsubscribe();Be(e,gr,{enumerable:!1,value:!0})})}return[e,t]}const fn=new Set;let F=null,qe=null,br=null,dn=!1,mr=!1,Zt=null,Dn=null;var Ia=0;let Xi=1;class vt{id=Xi++;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=0;#s=0;#a=null;#r=[];#o=new Set;#i=new Set;#l=new Map;is_fork=!1;#c=!1;#u(){return this.is_fork||this.#s>0}skip_effect(t){this.#l.has(t)||this.#l.set(t,{d:[],m:[]})}unskip_effect(t){var n=this.#l.get(t);if(n){this.#l.delete(t);for(var r of n.d)ae(r,ge),this.schedule(r);for(r of n.m)ae(r,He),this.schedule(r)}}#d(){Ia++>1e3&&Qi();const t=this.#r;this.#r=[],this.apply();var n=Zt=[],r=[],a=Dn=[];for(const l of t)this.#h(l,n,r);if(F=null,a.length>0){var i=vt.ensure();for(const l of a)i.schedule(l)}if(Zt=null,Dn=null,this.#u()){this.#v(r),this.#v(n);for(const[l,f]of this.#l)Da(l,f)}else{this.#o.clear(),this.#i.clear();for(const l of this.#e)l(this);this.#e.clear(),Oa(r),Oa(n),this.#n===0&&this.#f(),this.#a?.resolve()}var s=F;if(this.#r.length>0){const l=s??=this;l.#r.push(...this.#r.filter(f=>!l.#r.includes(f)))}s!==null&&(fn.add(s),s.#d())}#h(t,n,r){t.f^=he;for(var a=t.first;a!==null;){var i=a.f,s=(i&(Xe|_t))!==0,l=s&&(i&he)!==0,f=l||(i&Qe)!==0||this.#l.has(a);if(!f&&a.fn!==null){s?a.f^=he:(i&st)!==0?n.push(a):pn(a)&&((i&wt)!==0&&this.#i.add(a),Jt(a));var u=a.first;if(u!==null){a=u;continue}}for(;a!==null;){var h=a.next;if(h!==null){a=h;break}a=a.parent}}}#v(t){for(var n=0;n<t.length;n+=1)oa(t[n],this.#o,this.#i)}capture(t,n){n!==ve&&!this.previous.has(t)&&this.previous.set(t,n),(t.f&Et)===0&&(this.current.set(t,t.v),qe?.set(t,t.v))}activate(){F=this}deactivate(){F=null,qe=null}flush(){try{if(mr=!0,F=this,!this.#u()){for(const t of this.#o)this.#i.delete(t),ae(t,ge),this.schedule(t);for(const t of this.#i)ae(t,He),this.schedule(t)}this.#d()}finally{Ia=0,br=null,Zt=null,Dn=null,mr=!1,F=null,qe=null,Tt.clear()}}discard(){for(const t of this.#t)t(this);this.#t.clear()}#f(){if(fn.size>1){this.previous.clear();var t=F,n=qe,r=!0;for(const a of fn){if(a===this){r=!1;continue}const i=[];for(const[l,f]of this.current){if(a.current.has(l))if(r&&f!==a.current.get(l))a.current.set(l,f);else continue;i.push(l)}if(i.length===0)continue;const s=[...a.current.keys()].filter(l=>!this.current.has(l));if(s.length>0){a.activate();const l=new Set,f=new Map;for(const u of i)Pa(u,s,l,f);if(a.#r.length>0){a.apply();for(const u of a.#r)a.#h(u,[],[])}a.deactivate()}}F=t,qe=n}this.#l.clear(),fn.delete(this)}increment(t){this.#n+=1,t&&(this.#s+=1)}decrement(t,n){this.#n-=1,t&&(this.#s-=1),!(this.#c||n)&&(this.#c=!0,dt(()=>{this.#c=!1,this.flush()}))}oncommit(t){this.#e.add(t)}ondiscard(t){this.#t.add(t)}settled(){return(this.#a??=tn()).promise}static ensure(){if(F===null){const t=F=new vt;mr||(fn.add(F),dn||dt(()=>{F===t&&t.flush()}))}return F}apply(){}schedule(t){if(br=t,t.b?.is_pending&&(t.f&(st|En|Kn))!==0&&(t.f&xt)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Zt!==null&&n===L&&(O===null||(O.f&ie)===0))return;if((r&(_t|Xe))!==0){if((r&he)===0)return;n.f^=he}}this.#r.push(n)}}function Y(e){var t=dn;dn=!0;try{for(var n;;){if(Zo(),F===null)return n;F.flush()}}finally{dn=t}}function Qi(){try{Vo()}catch(e){Ct(e,br)}}let pt=null;function Oa(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Ke|Qe))===0&&pn(r)&&(pt=new Set,Jt(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Qa(r),pt?.size>0)){Tt.clear();for(const a of pt){if((a.f&(Ke|Qe))!==0)continue;const i=[a];let s=a.parent;for(;s!==null;)pt.has(s)&&(pt.delete(s),i.push(s)),s=s.parent;for(let l=i.length-1;l>=0;l--){const f=i[l];(f.f&(Ke|Qe))===0&&Jt(f)}}pt.clear()}}pt=null}}function Pa(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const a of e.reactions){const i=a.f;(i&ie)!==0?Pa(a,t,n,r):(i&(Wn|wt))!==0&&(i&ge)===0&&Ma(a,t,r)&&(ae(a,ge),yr(a))}}function Ma(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const a of e.deps){if(ue.call(t,a))return!0;if((a.f&ie)!==0&&Ma(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function yr(e){F.schedule(e)}function Da(e,t){if(!((e.f&Xe)!==0&&(e.f&he)!==0)){(e.f&ge)!==0?t.d.push(e):(e.f&He)!==0&&t.m.push(e),ae(e,he);for(var n=e.first;n!==null;)Da(n,t),n=n.next}}let wr=new Set;const Tt=new Map;let Na=!1;function hn(e,t){var n={f:0,v:e,reactions:null,equals:Hr,rv:0,wv:0};return n}function N(e,t){const n=hn(e);return ja(n),n}function Va(e,t=!1,n=!0){const r=hn(e);return t||(r.equals=Io),r}function y(e,t,n=!1){O!==null&&(!Ye||(O.f&Br)!==0)&&Zr()&&(O.f&(ie|wt|Wn|Br))!==0&&(Ne===null||!ue.call(Ne,e))&&zo();let r=n?ht(t):t;return Nn(e,r,Dn)}function Nn(e,t,n=null){if(!e.equals(t)){var r=e.v;$t?Tt.set(e,t):Tt.set(e,r),e.v=t;var a=vt.ensure();if(a.capture(e,r),(e.f&ie)!==0){const i=e;(e.f&ge)!==0&&lr(i),tr(i)}e.wv=Ha(),Ua(e,ge,n),L!==null&&(L.f&he)!==0&&(L.f&(Xe|_t))===0&&(Ve===null?tl([e]):Ve.push(e)),!a.is_fork&&wr.size>0&&!Na&&el()}return t}function el(){Na=!1;for(const e of wr)(e.f&he)!==0&&ae(e,He),pn(e)&&Jt(e);wr.clear()}function vn(e){y(e,e.v+1)}function Ua(e,t,n){var r=e.reactions;if(r!==null)for(var a=r.length,i=0;i<a;i++){var s=r[i],l=s.f,f=(l&ge)===0;if(f&&ae(s,t),(l&ie)!==0){var u=s;qe?.delete(u),(l&Ot)===0&&(l&Me&&(s.f|=Ot),Ua(u,He,n))}else if(f){var h=s;(l&wt)!==0&&pt!==null&&pt.add(h),n!==null?n.push(h):yr(h)}}}let Vn=!1,$t=!1;function Fa(e){$t=e}let O=null,Ye=!1;function De(e){O=e}let L=null;function at(e){L=e}let Ne=null;function ja(e){O!==null&&(Ne===null?Ne=[e]:Ne.push(e))}let $e=null,Oe=0,Ve=null;function tl(e){Ve=e}let za=1,Ut=0,Ft=Ut;function Ba(e){Ft=e}function Ha(){return++za}function pn(e){var t=e.f;if((t&ge)!==0)return!0;if(t&ie&&(e.f&=~Ot),(t&He)!==0){for(var n=e.deps,r=n.length,a=0;a<r;a++){var i=n[a];if(pn(i)&&pa(i),i.wv>e.wv)return!0}(t&Me)!==0&&qe===null&&ae(e,he)}return!1}function Ka(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Ne!==null&&ue.call(Ne,e)))for(var a=0;a<r.length;a++){var i=r[a];(i.f&ie)!==0?Ka(i,t,!1):t===i&&(n?ae(i,ge):(i.f&he)!==0&&ae(i,He),yr(i))}}function qa(e){var t=$e,n=Oe,r=Ve,a=O,i=Ne,s=Se,l=Ye,f=Ft,u=e.f;$e=null,Oe=0,Ve=null,O=(u&(Xe|_t))===0?e:null,Ne=null,qt(e.ctx),Ye=!1,Ft=++Ut,e.ac!==null&&(Tn(()=>{e.ac.abort(ct)}),e.ac=null);try{e.f|=Gn;var h=e.fn,g=h();e.f|=xt;var d=e.deps,m=F?.is_fork;if($e!==null){var b;if(m||gn(e,Oe),d!==null&&Oe>0)for(d.length=Oe+$e.length,b=0;b<$e.length;b++)d[Oe+b]=$e[b];else e.deps=d=$e;if(_r()&&(e.f&Me)!==0)for(b=Oe;b<d.length;b++)(d[b].reactions??=[]).push(e)}else!m&&d!==null&&Oe<d.length&&(gn(e,Oe),d.length=Oe);if(Zr()&&Ve!==null&&!Ye&&d!==null&&(e.f&(ie|He|ge))===0)for(b=0;b<Ve.length;b++)Ka(Ve[b],e);if(a!==null&&a!==e){if(Ut++,a.deps!==null)for(let x=0;x<n;x+=1)a.deps[x].rv=Ut;if(t!==null)for(const x of t)x.rv=Ut;Ve!==null&&(r===null?r=Ve:r.push(...Ve))}return(e.f&Et)!==0&&(e.f^=Et),g}catch(x){return ra(x)}finally{e.f^=Gn,$e=t,Oe=n,Ve=r,O=a,Ne=i,qt(s),Ye=l,Ft=f}}function nl(e,t){let n=t.reactions;if(n!==null){var r=J.call(n,e);if(r!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[r]=n[a],n.pop())}}if(n===null&&(t.f&ie)!==0&&($e===null||!ue.call($e,t))){var i=t;(i.f&Me)!==0&&(i.f^=Me,i.f&=~Ot),tr(i),ki(i),gn(i,0)}}function gn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)nl(e,n[r])}function Jt(e){var t=e.f;if((t&Ke)===0){ae(e,he);var n=L,r=Vn;L=e,Vn=!0;try{(t&(wt|Kn))!==0?sl(e):kr(e),Ja(e);var a=qa(e);e.teardown=typeof a=="function"?a:null,e.wv=za;var i;$&&Ho&&(e.f&ge)!==0&&e.deps}finally{Vn=r,L=n}}}async function jt(){await Promise.resolve(),Y()}function o(e){var t=e.f,n=(t&ie)!==0;if(O!==null&&!Ye){var r=L!==null&&(L.f&Ke)!==0;if(!r&&(Ne===null||!ue.call(Ne,e))){var a=O.deps;if((O.f&Gn)!==0)e.rv<Ut&&(e.rv=Ut,$e===null&&a!==null&&a[Oe]===e?Oe++:$e===null?$e=[e]:$e.push(e));else{(O.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[O]:ue.call(i,O)||i.push(O)}}}if($t&&Tt.has(e))return Tt.get(e);if(n){var s=e;if($t){var l=s.v;return((s.f&he)===0&&s.reactions!==null||Ga(s))&&(l=lr(s)),Tt.set(s,l),l}var f=(s.f&Me)===0&&!Ye&&O!==null&&(Vn||(O.f&Me)!==0),u=(s.f&xt)===0;pn(s)&&(f&&(s.f|=Me),pa(s)),f&&!u&&(ga(s),Ya(s))}if(qe?.has(e))return qe.get(e);if((e.f&Et)!==0)throw e.v;return e.v}function Ya(e){if(e.f|=Me,e.deps!==null)for(const t of e.deps)(t.reactions??=[]).push(e),(t.f&ie)!==0&&(t.f&Me)===0&&(ga(t),Ya(t))}function Ga(e){if(e.v===ve)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Tt.has(t)||(t.f&ie)!==0&&Ga(t))return!0;return!1}function bn(e){var t=Ye;try{return Ye=!0,e()}finally{Ye=t}}function rl(e){L===null&&(O===null&&No(),Do()),$t&&Mo()}function al(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Ge(e,t){var n=L;n!==null&&(n.f&Qe)!==0&&(e|=Qe);var r={ctx:Se,deps:null,nodes:null,f:e|ge|Me,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null},a=r;if((e&st)!==0)Zt!==null?Zt.push(r):vt.ensure().schedule(r);else if(t!==null){try{Jt(r)}catch(s){throw be(r),s}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&It)===0&&(a=a.first,(e&wt)!==0&&(e&kt)!==0&&a!==null&&(a.f|=kt))}if(a!==null&&(a.parent=n,n!==null&&al(a,n),O!==null&&(O.f&ie)!==0&&(e&_t)===0)){var i=O;(i.effects??=[]).push(a)}return r}function _r(){return O!==null&&!Ye}function Un(e){const t=Ge(En,null);return ae(t,he),t.teardown=e,t}function Ue(e){rl();var t=L.f,n=!O&&(t&Xe)!==0&&(t&xt)===0;if(n){var r=Se;(r.e??=[]).push(e)}else return Wa(e)}function Wa(e){return Ge(st|Ao,e)}function ol(e){vt.ensure();const t=Ge(_t|It,e);return()=>{be(t)}}function il(e){vt.ensure();const t=Ge(_t|It,e);return(n={})=>new Promise(r=>{n.outro?yn(t,()=>{be(t),r(void 0)}):(be(t),r(void 0))})}function xr(e){return Ge(st,e)}function ll(e){return Ge(Wn|It,e)}function Fn(e,t=0){return Ge(En|t,e)}function ye(e,t=[],n=[],r=[]){ba(r,t,n,a=>{Ge(En,()=>e(...a.map(o)))})}function mn(e,t=0){var n=Ge(wt|t,e);return n}function Za(e,t=0){var n=Ge(Kn|t,e);return n}function ot(e){return Ge(Xe|It,e)}function Ja(e){var t=e.teardown;if(t!==null){const n=$t,r=O;Fa(!0),De(null);try{t.call(null)}finally{Fa(n),De(r)}}}function kr(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const a=n.ac;a!==null&&Tn(()=>{a.abort(ct)});var r=n.next;(n.f&_t)!==0?n.parent=null:be(n,t),n=r}}function sl(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Xe)===0&&be(t),t=n}}function be(e,t=!0){var n=!1;(t||(e.f&$o)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Xa(e.nodes.start,e.nodes.end),n=!0),ae(e,Yn),kr(e,t&&!n),gn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)i.stop();Ja(e),e.f^=Yn,e.f|=Ke;var a=e.parent;a!==null&&a.first!==null&&Qa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function Xa(e,t){for(;e!==null;){var n=e===t?null:nt(e);e.remove(),e=n}}function Qa(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function yn(e,t,n=!0){var r=[];eo(e,r,!0);var a=()=>{n&&be(e),t&&t()},i=r.length;if(i>0){var s=()=>--i||a();for(var l of r)l.out(s)}else a()}function eo(e,t,n){if((e.f&Qe)===0){e.f^=Qe;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var a=e.first;a!==null;){var i=a.next,s=(a.f&kt)!==0||(a.f&Xe)!==0&&(e.f&wt)!==0;eo(a,t,s?n:!1),a=i}}}function cl(e){to(e,!0)}function to(e,t){if((e.f&Qe)!==0){e.f^=Qe,(e.f&he)===0&&(ae(e,ge),vt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,a=(n.f&kt)!==0||(n.f&Xe)!==0;to(n,a?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(const s of i)(s.is_global||t)&&s.in()}}function no(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var a=n===r?null:nt(n);t.append(n),n=a}}function ro(e){const t={get:n=>un(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(un(t.store),{[n]:r}):Object.assign(un(t.store),n),t.store.set(un(t.store))},store:Zi(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:ro({}),i18n:ro({}),instances:new Set,plugins:new Set};const ul={ariaLinkLabel:"Visit Altcha.org",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};"$altcha"in globalThis&&globalThis.$altcha.i18n.set("en",ul);const fl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(fl);var dl=Z('<label class="altcha-checkbox"><input/> <svg width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></label>');function ao(e,t){ut(t,!0);let n=Q(t,"loading"),r=Pn(t,["$$slots","$$events","$$legacy","$$host","loading"]);var a={get loading(){return n()},set loading(l){n(l),Y()}},i=dl(),s=X(i);return On(s,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Cn(4),q(i),ye(()=>z(i,"data-loading",n())),D(e,i),ft(a)}St(ao,{loading:{}},[],[],{mode:"open"});var hl=Z('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');function oo(e,t){ut(t,!0);let n=Q(t,"loading"),r=Pn(t,["$$slots","$$events","$$legacy","$$host","loading"]);var a={get loading(){return n()},set loading(l){n(l),Y()}},i=hl(),s=X(i);return On(s,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Cn(2),q(i),ye(()=>z(i,"data-loading",n())),D(e,i),ft(a)}St(oo,{loading:{}},[],[],{mode:"open"});var vl=Z('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');function Er(e,t){ut(t,!0);let n=Q(t,"strings");const r="https://altcha.org";var a={get strings(){return n()},set strings(l){n(l),Y()}},i=vl(),s=X(i);return z(s,"href",r),q(i),ye(()=>z(s,"aria-label",n().ariaLinkLabel)),D(e,i),ft(a)}St(Er,{strings:{}},[],[],{mode:"open"});var pl=Z('<div class="altcha-footer"><div></div> <!></div>');function Cr(e,t){ut(t,!0);let n=Q(t,"logo"),r=Q(t,"strings");var a={get logo(){return n()},set logo(u){n(u),Y()},get strings(){return r()},set strings(u){r(u),Y()}},i=pl(),s=X(i);ya(s,()=>r().footer,!0),q(s);var l=te(s,2);{var f=u=>{Er(u,{get strings(){return r()}})};fe(l,u=>{n()&&u(f)})}return q(i),D(e,i),ft(a)}St(Cr,{logo:{},strings:{}},[],[],{mode:"open"});var gl=Z('<label class="altcha-switch"><input/> <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></label>');function io(e,t){ut(t,!0);let n=Q(t,"loading"),r=Pn(t,["$$slots","$$events","$$legacy","$$host","loading"]);var a={get loading(){return n()},set loading(l){n(l),Y()}},i=gl(),s=X(i);return On(s,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Cn(2),q(i),ye(()=>z(i,"data-loading",n())),D(e,i),ft(a)}St(io,{loading:{}},[],[],{mode:"open"});var me=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))(me||{}),j=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(j||{}),bl=Z('<div class="altcha-code-challenge-title"> </div>'),ml=Z('<div class="altcha-spinner"></div>'),yl=ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),wl=ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),_l=ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),xl=Z('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),kl=Z('<audio hidden="" autoplay=""></audio>'),El=Z('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');function lo(e,t){ut(t,!0);let n=Q(t,"audioUrl"),r=Q(t,"codeChallenge"),a=Q(t,"config"),i=Q(t,"imageUrl"),s=Q(t,"onCancel"),l=Q(t,"onReload"),f=Q(t,"onSubmit"),u=Q(t,"strings"),h=N(void 0),g=N(void 0),d=N(void 0),m=N(!1),b=N(""),x=N(!1);pr(()=>(a().disableAutoFocus||jt().then(()=>{o(d)?.focus()}),()=>{o(g)&&(o(g).pause(),y(g,void 0))}));function T(){y(h,me.PAUSED,!0)}function I(S){y(h,me.ERROR,!0)}function de(){y(h,me.READY,!0)}function le(){y(h,me.LOADING,!0)}function P(){y(h,me.PLAYING,!0)}function Ae(){y(h,me.PAUSED,!0)}function k(S){S.code==="Space"?(S.preventDefault(),S.stopPropagation(),ee()):S.code==="Escape"&&(S.preventDefault(),S.stopPropagation(),s()?.())}function V(S){S.preventDefault(),S.stopPropagation(),f()?.(o(b))}function ee(){o(g)?o(h)===me.LOADING||(o(g).paused?(n()&&o(g).src!==n()&&(o(g).src=n()),o(g).currentTime=0,o(g).play()):o(g).pause()):(y(x,!0),requestAnimationFrame(()=>{o(g)&&n()&&(o(g).src=n(),o(g).play())}))}var H={get audioUrl(){return n()},set audioUrl(S){n(S),Y()},get codeChallenge(){return r()},set codeChallenge(S){r(S),Y()},get config(){return a()},set config(S){a(S),Y()},get imageUrl(){return i()},set imageUrl(S){i(S),Y()},get onCancel(){return s()},set onCancel(S){s(S),Y()},get onReload(){return l()},set onReload(S){l(S),Y()},get onSubmit(){return f()},set onSubmit(S){f(S),Y()},get strings(){return u()},set strings(S){u(S),Y()}},U=El(),Fe=X(U),we=X(Fe);{var je=S=>{var ne=bl(),bt=X(ne,!0);q(ne),ye(()=>rt(bt,u().verificationRequired)),D(S,ne)};fe(we,S=>{a().codeChallengeDisplay!=="standard"&&S(je)})}var G=te(we,2),gt=X(G,!0);q(G);var E=te(G,2),se=te(E,2),p=X(se);fr(p),p.disabled=o(m),Gt(p,S=>y(d,S),()=>o(d));var Xt=te(p,2);{var Ar=S=>{var ne=xl(),bt=X(ne);{var Lr=Ce=>{var mt=ml();D(Ce,mt)},Ir=Ce=>{var mt=yl();D(Ce,mt)},Or=Ce=>{var mt=wl();D(Ce,mt)},zn=Ce=>{var mt=_l();D(Ce,mt)};fe(bt,Ce=>{o(h)===me.LOADING?Ce(Lr):o(h)===me.ERROR?Ce(Ir,1):o(h)===me.PLAYING?Ce(Or,2):Ce(zn,-1)})}q(ne),ye(()=>{z(ne,"title",u().getAudioChallenge),ne.disabled=o(h)===me.LOADING||o(h)===me.ERROR,z(ne,"aria-label",o(h)===me.LOADING?u().loading:u().getAudioChallenge)}),Vt("click",ne,()=>ee()),D(S,ne)};fe(Xt,S=>{r().audio&&S(Ar)})}var We=te(Xt,2);q(se);var jn=te(se,2),zt=X(jn),wn=X(zt,!0);q(zt);var At=te(zt,2),_n=X(At,!0);q(At),q(jn),q(Fe);var Re=te(Fe,2);{var Rr=S=>{var ne=kl();Gt(ne,bt=>y(g,bt),()=>o(g)),Te("error",ne,I),Te("loadstart",ne,le),Te("canplay",ne,de),Te("pause",ne,Ae),Te("playing",ne,P),Te("ended",ne,T),D(S,ne)};fe(Re,S=>{o(x)&&S(Rr)})}return q(U),ye(()=>{rt(gt,u().enterCodeFromImage),z(E,"src",i()),z(p,"minlength",r().length||1),z(p,"maxlength",r().length),z(p,"placeholder",u().enterCode),z(p,"aria-label",o(h)===me.LOADING?u().loading:o(h)===me.PLAYING?"":u().enterCodeAria),z(p,"aria-live",o(h)?"assertive":"polite"),z(p,"aria-busy",o(h)===me.LOADING),z(We,"title",u().reload),z(We,"aria-label",u().reload),z(zt,"aria-label",u().verify),rt(wn,u().verify),z(At,"aria-label",u().cancel),rt(_n,u().cancel)}),Te("submit",Fe,V,!0),Vt("keydown",p,k),Ki(p,()=>o(b),S=>y(b,S)),Vt("click",We,()=>l()?.()),Vt("click",At,()=>s()?.()),D(e,U),ft(H)}$n(["keydown","click"]),St(lo,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});var Cl=Z('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),Sl=Z('<div class="altcha-popover-arrow"></div>'),Tl=Z('<div role="button" class="altcha-popover-close">&times;</div>'),$l=Z('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);function Sr(e,t){ut(t,!0);let n=Q(t,"anchor"),r=Q(t,"children"),a=Q(t,"display",7,"standard"),i=Q(t,"backdrop",7,!1),s=Q(t,"onClickOutside"),l=Q(t,"onClickOutsideDelay",7,600),f=Q(t,"onClose"),u=Q(t,"placement",7,"auto"),h=Q(t,"variant",7,"neutral"),g=Pn(t,["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","variant"]),d=N(void 0),m=N(void 0),b=N(!1),x=N(0);Ue(()=>{u()!=="auto"&&y(b,u()==="top")}),pr(()=>{const E=a()==="bottomsheet"||a()==="overlay";return E&&(o(m)&&document.body.append(o(m)),o(d)&&document.body.append(o(d))),P(),jt().then(()=>{y(x,Date.now(),!0)}),()=>{E&&(o(m)&&document.body.removeChild(o(m)),o(d)&&document.body.removeChild(o(d)))}});function T(){f()?.()}function I(E){const se=E.target;!o(d)?.contains(se)&&o(x)&&o(x)+l()<Date.now()&&s()?.()}function de(){P()}function le(){P()}function P(){if(n()&&u()==="auto"&&o(d)){const E=n().getBoundingClientRect(),p=document.documentElement.clientHeight-(E.top+E.height)<o(d).clientHeight;o(b)!==p&&y(b,p)}}var Ae={get anchor(){return n()},set anchor(E){n(E),Y()},get children(){return r()},set children(E){r(E),Y()},get display(){return a()},set display(E="standard"){a(E),Y()},get backdrop(){return i()},set backdrop(E=!1){i(E),Y()},get onClickOutside(){return s()},set onClickOutside(E){s(E),Y()},get onClickOutsideDelay(){return l()},set onClickOutsideDelay(E=600){l(E),Y()},get onClose(){return f()},set onClose(E){f(E),Y()},get placement(){return u()},set placement(E="auto"){u(E),Y()},get variant(){return h()},set variant(E="neutral"){h(E),Y()}},k=$l();Te("click",Nt,I),Te("resize",Nt,de),Te("scroll",Nt,le);var V=Yt(k);{var ee=E=>{var se=Cl();Gt(se,p=>y(m,p),()=>o(m)),D(E,se)};fe(V,E=>{i()&&E(ee)})}var H=te(V,2);On(H,()=>({...g,class:`altcha-popover ${(t.class||"")??""}`,"data-popover":!0,"data-variant":h(),"data-top":o(b),"data-display":a()}));var U=X(H);{var Fe=E=>{var se=Sl();D(E,se)};fe(U,E=>{a()==="standard"&&E(Fe)})}var we=te(U,2);{var je=E=>{var se=Tl();Vt("click",se,T),D(E,se)};fe(we,E=>{a()!=="standard"&&E(je)})}var G=te(we,2),gt=X(G);return Ti(gt,()=>r()??xe),q(G),q(H),Gt(H,E=>y(d,E),()=>o(d)),D(e,k),ft(Ae)}$n(["click"]),St(Sr,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},variant:{}},[],[],{mode:"open"});function Al(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function Rl(e,t="altcha-css"){if(typeof document<"u"&&document&&!document.getElementById(t)){const n=document.createElement("style");n.id=t,n.textContent=e,document.head.appendChild(n)}}async function so(e){const{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:a,onOutOfMemory:i=d=>d>1?Math.floor(d/2):0,counterMode:s,timeout:l=9e4}=e,f=Math.min(16,Math.max(1,n)),u=[],h=()=>{for(const d of u)d.terminate()};for(let d=0;d<f;d++)u.push(await a(t.parameters.algorithm));let g=null;try{g=await Promise.race(u.map((d,m)=>(r.signal.addEventListener("abort",()=>{d.postMessage({type:"abort"})}),new Promise((b,x)=>{d.addEventListener("error",T=>{x(T)}),d.addEventListener("message",T=>{if(T.data){for(const I of u)I!==d&&I.postMessage({type:"abort"});if(T.data.error)return x(new Error(T.data.error))}b(T.data)}),d.postMessage({challenge:t,counterMode:s,counterStart:m,counterStep:f,timeout:l,type:"work"})}))))}catch(d){if(d instanceof Error&&!!d?.message?.includes("Out of memory")&&i){h();const b=i(f);if(b)return so({...e,challenge:t,controller:r,concurrency:b,createWorker:a})}throw d}finally{h()}return r.signal.aborted?null:g||null}class Ll{TAG_CODES={INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10};maxSamples;sampleInterval;target;focusStartTime=0;focusInteraction=0;focusInteractionTimer=null;lastPointerSample=0;lastTouchSample=0;lastScrollSample=0;pendingPointer=null;pendingTouch=null;focus=[];pointer=[];scroll=[];touch=[];constructor(t={}){const{maxSamples:n=60,sampleInterval:r=50,target:a=window}=t;this.maxSamples=n,this.sampleInterval=r,this.target=a,this.attach()}destroy(){const t={capture:!0};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){const t={passive:!0,capture:!0};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t)}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples)}onFocus=t=>{if(this.focusInteraction===2)return;const n=t.target;if(!(n instanceof Element))return;const r=performance.now();this.focusStartTime===0&&(this.focusStartTime=r),this.focus.push([Math.round(r-this.focusStartTime),n.tabIndex,this.TAG_CODES[n.tagName]??0,this.focusInteraction?1:0]),this.evict(this.focus)};onInteraction=t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)};onPointer=t=>{if(t.pointerType==="touch")return;const n=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(n)],n-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=n,this.pendingPointer=null,this.evict(this.pointer))};onScroll=()=>{const t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))};onTouchMove=t=>{const n=t.timeStamp||performance.now(),r=t.touches[0];r&&(this.pendingTouch=[Math.round(r.clientX),Math.round(r.clientY),Math.round(n),Math.round(r.force*1e3)/1e3,Math.round(r.radiusX||0),Math.round(r.radiusY||0)],n-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=n,this.pendingTouch=null,this.evict(this.touch)))}}var Il=Z('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),Ol=Z('<div class="altcha-overlay-content"></div>'),Pl=Z('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),Ml=Z('<div class="altcha-floating-arrow"></div>'),Dl=Z('<input type="hidden"/>'),Nl=Z('<div class="altcha-error">Secure context (HTTPS) required.</div>'),Vl=Z('<div class="altcha-error"> </div>'),Ul=Z('<div class="altcha-error"> </div>'),Fl=Z("<!> <!>",1),jl=Z('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);function zl(e,t){ut(t,!0);const n=()=>La(h,"$altchaDefaults",a),r=()=>La(b,"$altchaI18nStore",a),[a,i]=Ji(),s='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',l='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',f=["ar","fa","he","ur"],{isSecureContext:u}=globalThis,{store:h}=globalThis.$altcha.defaults,g=navigator.hardwareConcurrency||2,d=navigator.deviceMemory||0,m=d&&d<=4?Math.min(4,g):g,b=globalThis.$altcha.i18n.store,x=t.$$host,T=(c,v)=>{jt().then(()=>{x?.dispatchEvent(new CustomEvent(c,{detail:v}))})};let I=null,de=N(ht(new URL(location.origin))),le=N(!1),P=N(null),Ae=N(null),k=N(ht(j.UNVERIFIED)),V=N(void 0),ee=N(void 0),H=N(null),U=N(void 0),Fe=N(null),we=N(null),je=N(null),G=N(null),gt=N(ht([])),E=N(ht({})),se=N(!0);const p=Ee(()=>({fetch:(c,v)=>fetch(c,v),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:!1,disableAutoFocus:!1,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:!1,floatingPlacement:"auto",hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:"",mockError:!1,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:m,...n(),...o(E)})),Xt=Ee(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),Ar=Ee(()=>Hl(o(p).type)),We=Ee(()=>o(p).auto),jn=Ee(()=>o(k)===j.VERIFYING),zt=Ee(()=>!o(p).hideFooter),wn=Ee(()=>!o(p).hideLogo&&o(p).display!=="bar"),At=Ee(()=>Kl(r(),[o(p).language,document.documentElement.lang,...navigator.languages])),_n=Ee(()=>f.includes(o(At).language)?"rtl":void 0),Re=Ee(()=>({...o(At).strings})),Rr=Ee(()=>o(P)?.audio?.match(/^(https?:)?\//)?Bn(o(P).audio,o(de),{language:o(p).audioChallengeLanguage||o(At).language}).toString():o(P)?.audio),S=Ee(()=>o(P)?.image?.match(/^(https?:)?\//)?Bn(o(P).image,o(de)):o(P)?.image);Ue(()=>{xn({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),Ue(()=>{if(t.configuration)try{xn(JSON.parse(t.configuration))}catch{K("unable to parse the `configuration` attribute (JSON expected)")}}),Ue(()=>{Mr(o(p).display)}),Ue(()=>{o(le)&&o(k)===j.VERIFYING&&y(le,!1)}),Ue(()=>{!o(le)&&o(k)===j.VERIFIED&&y(le,!0)}),Ue(()=>{if(!o(le)){const c=Pr();c&&c.checked&&(c.checked=!1)}}),Ue(()=>{o(k)===j.VERIFIED&&Pr()?.setCustomValidity("")}),Ue(()=>{if(o(We)==="onload"){const c=setTimeout(()=>{Qt()},1);return()=>{c&&clearTimeout(c)}}}),Ue(()=>{o(we)&&K("error:",o(we))}),Ue(()=>{o(G)&&o(p).setCookie&&os(o(G),o(p).setCookie)}),pr(()=>(K("mounted","3.0.2"),x&&globalThis.$altcha.instances.add(x),y(H,o(U)?.closest("form"),!0),o(H)?.addEventListener("reset",po),o(H)?.addEventListener("submit",go,{capture:!0}),o(H)?.addEventListener("focusin",vo),ne(),o(p).humanInteractionSignature&&(K("human interaction signature enabled"),I=new Ll),T("load"),u||K("secure context (HTTPS) required"),()=>{Lr(),x&&globalThis.$altcha.instances.delete(x),o(je)&&clearTimeout(o(je)),o(H)?.removeEventListener("reset",po),o(H)?.removeEventListener("submit",go,{capture:!0}),o(H)?.removeEventListener("focusin",vo),I?.destroy()}));function ne(){y(gt,[...globalThis.$altcha.plugins].map(c=>new c(x)),!0),K("activating plugins",o(gt).map(c=>c.constructor.name));for(const c of o(gt))c.activate()}async function bt(c,...v){let w;for(const _ of o(gt))w=await _[c].call(_,...v);return w}function Lr(){for(const c of o(gt))c.destroy()}function Ir(c){const[v,w]=c.salt.split("?"),_={};if(w)try{Object.assign(_,Object.fromEntries(new URLSearchParams(w).entries()))}catch{}const A={codeChallenge:c.codeChallenge,parameters:{algorithm:c.algorithm,cost:1,data:_,expiresAt:_?.expires?parseInt(_.expires,10):void 0,keyLength:c.algorithm==="SHA-512"?64:c.algorithm==="SHA-384"?48:32,nonce:Al(new TextEncoder().encode(c.salt)),keyPrefix:c.challenge,salt:""},signature:c.signature};return Object.defineProperties(A,{_originalSalt:{enumerable:!1,value:c.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),A}function Or(c,v){return{algorithm:c.parameters.algorithm,challenge:c.parameters.keyPrefix,number:v.counter,salt:"_originalSalt"in c?c._originalSalt:c.parameters.nonce,signature:c.signature,took:v.time||0}}async function zn(c){await new Promise(v=>setTimeout(v,c))}async function Ce(c=o(p).challenge,v){const w=await bt("onFetchChallenge",c);let _=null;if(w!==void 0)return w;if(typeof c=="string")if(c.match(/^(https?:)?\//)){K("fetching challenge from",v?.method||"GET",c),y(de,new URL(c,location.origin),!0);const A=await o(p).fetch(c,{credentials:o(p).credentials||void 0,...v});await mo(A);const C=A.headers.get("x-altcha-config");C&&ns(C);const B=await A.json();if(B&&"his"in B&&B.his){if(K("requested HIS"),!I)throw new Error("Server requested HIS data but collector is disabled.");return Ce(Bn(B.his.url,o(de)),{body:JSON.stringify({his:I.export()}),headers:{"content-type":"application/json"},method:"POST"})}B&&"hisResult"in B&&B.hisResult&&K("HIS result",B.hisResult),_=B}else{K("parsing JSON challenge");try{_=JSON.parse(c)}catch{throw new Error("Unable to parse JSON challenge.")}}else if(c&&typeof c=="object")try{_=JSON.parse(JSON.stringify(c))}catch{throw new Error("Unable to parse JSON challenge.")}if(mt(_)&&(_=Ir(_)),!Bl(_))throw new Error("Challenge validation failed.");return _}function mt(c){return typeof c=="object"&&"challenge"in c}function Bl(c){return!!c&&typeof c=="object"&&"parameters"in c&&!!c.parameters&&typeof c.parameters=="object"&&"algorithm"in c.parameters&&"nonce"in c.parameters&&"salt"in c.parameters&&"keyPrefix"in c.parameters}function Pr(){return document.getElementById(o(Xt))}function Hl(c){switch(c){case"checkbox":return ao;case"switch":return io;case"native":default:return oo}}function Kl(c,v){const w=Object.keys(c).map(A=>A.toLowerCase());let _=v.reduce((A,C)=>(C=C.toLowerCase(),A||(c[C]?C:null)||w.find(B=>C.split("-")[0]===B.split("-")[0])||null),null);return c[_||""]||(_="en"),{language:_,strings:c[_]}}function ql(c){switch(c){case"bar":return o(p).barPlacement||"bottom";case"floating":return o(p).floatingPlacement||"auto";default:return}}function Yl(c){return[...o(H)?.querySelectorAll(s)||[]].reduce((w,_)=>{const A=_.name,C=_.value;return A&&C&&(w[A]=/\n/.test(C)?C.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):C),w},{})}function Gl(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Bn(c,v,w){const _=new URL(c,v);if(_.search||(_.search=v.search),w)for(const A in w)w[A]!==void 0&&w[A]!==null&&_.searchParams.set(A,w[A]);return _.toString()}function Wl(c){!o(le)&&c.currentTarget.checked?(c.preventDefault(),c.currentTarget.checked=!1,o(k)!==j.VERIFYING&&Qt()):c.currentTarget.checked||(c.preventDefault(),Ze())}function Zl(c){o(k)===j.VERIFYING?c.currentTarget.setCustomValidity(o(Re).waitAlert):o(p).validationMessage&&c.currentTarget.setCustomValidity(o(p).validationMessage)}function Jl(){o(Ae)&&o(Ae).abort(),Mr(o(p).display),Ze()}function Xl(){Hn()}function Ql(c){const v=c.target;o(p).display==="floating"&&v&&!x?.contains(v)&&!v.hasAttribute("data-backdrop")&&!v.closest("[data-popover]")&&o(k)!==j.VERIFIED&&!o(p).floatingPersist&&Dr()}function vo(c){o(We)==="onfocus"&&o(k)===j.UNVERIFIED&&Qt()}function po(){o(Ae)&&o(Ae).abort(),Mr(o(p).display),Ze()}function go(c){y(Fe,c.submitter,!0),o(We)==="onsubmit"&&o(k)===j.UNVERIFIED&&(c.preventDefault(),c.stopPropagation(),Nr(),Qt().then(v=>{v&&!o(P)&&jt().then(()=>{bo(o(Fe))})}))}function es(){Ze()}function ts(){Hn()}function ns(c){try{const v=JSON.parse(c);v&&typeof v=="object"&&xn({serverVerificationFields:v?.sentinel?.fields,serverVerificationTimeZone:v?.sentinel?.timeZone,verifyUrl:v.verifyurl,...v})}catch(v){K("unable to configure from x-altcha-config header",v)}}function rs(c=20){if(!o(U))return;const v=o(p).floatingPlacement;if(!o(ee)&&(y(ee,(o(p).floatingAnchor instanceof HTMLElement?o(p).floatingAnchor:o(p).floatingAnchor?document.querySelector(o(p).floatingAnchor):o(H)?.querySelector(l))||o(H),!0),!o(ee))){K("unable to find floating anchor element");return}const w=parseInt(o(p).floatingOffset,10)||12,_=o(ee).getBoundingClientRect(),A=o(U).getBoundingClientRect(),C=document.documentElement.clientHeight,B=document.documentElement.clientWidth,Pe=!v||v==="auto"?_.bottom+A.height+w+c>C:v==="top",W=Math.max(c,Math.min(B-c-A.width,_.left+_.width/2-A.width/2));if(o(U).style.setProperty("--altcha-floating-left",`${W}px`),o(U).style.setProperty("--altcha-floating-top",Pe?`${_.top-(A.height+w)}px`:`${_.bottom+w}px`),o(U).setAttribute("data-floating-position",Pe?"top":"bottom"),o(V)){const ce=o(V).getBoundingClientRect();o(V).style.left=_.left-W+_.width/2-ce.width/2+"px"}}async function as(c,v){const w=await bt("onRequestServerVerification",c,v);if(w!==void 0)return w;if(K("requesting server verification from",o(p).verifyUrl),!o(p).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");const _=await o(p).fetch(Bn(o(p).verifyUrl,o(de)),{body:JSON.stringify({code:v,fields:o(p).serverVerificationFields?Yl():void 0,payload:c,timeZone:o(p).serverVerificationTimeZone?Gl():void 0}),credentials:o(p).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});await mo(_);const A=await _.json();return A&&typeof A=="object"&&"payload"in A&&A.payload&&T("serververification",A),A}function bo(c){o(H)&&"requestSubmit"in o(H)?o(H).requestSubmit(c):o(H)?.reportValidity()&&(c?c.click():o(H).submit())}function os(c,v={}){const{domain:w,name:_=o(p).name,maxAge:A,path:C,sameSite:B,secure:Pe}=v;let W=`${encodeURIComponent(_)}=${encodeURIComponent(c)}`;w&&(W+=`; Domain=${w}`),A!=null&&(W+=`; Max-Age=${A}`),C&&(W+=`; Path=${C}`),B&&(W+=`; SameSite=${B}`),Pe&&(W+="; Secure"),document.cookie=W}function Mr(c){switch(c){case"bar":case"floating":case"overlay":Dr(),(!o(We)||o(We)==="off")&&(o(E).auto="onsubmit");break;case"standard":Nr()}}function is(c){o(je)&&clearTimeout(o(je));const v=()=>{o(k)!==j.UNVERIFIED?(y(le,!1),ze(j.EXPIRED)):Ze(),T("expired")},w=c*1e3-Date.now();w>=1?y(je,setTimeout(v,w),!0):v()}async function mo(c){if(c.status>=400){if(c.headers.get("content-type")?.includes("/json")){let w;try{w=await c.json()}catch{}if(w&&"error"in w)throw new Error(`Server responded with ${c.status} - ${w.error}`)}throw new Error(`Server responded with ${c.status}.`)}const v=c.headers.get("content-type");if(!v||!v.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${v}.`)}async function yo(c){if(!o(G)){ze(j.ERROR,"Cannot verify code challenge without PoW payload.");return}ze(j.VERIFYING);let v=null;if(o(p).verifyUrl)v=await as(o(G),c);else if(o(p).verifyFunction)v=await o(p).verifyFunction(o(G),c);else{ze(j.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}v?.payload&&(y(G,v.payload,!0),K("server payload",o(G))),v?.verified===!0?(K("verified"),ze(j.VERIFIED),T("verified",{payload:o(G)}),o(We)==="onsubmit"&&jt().then(()=>{bo(o(Fe))})):ze(j.ERROR,v?.reason||"Verification failed."),o(p).disableAutoFocus||Pr()?.focus()}function xn(c){Object.assign(o(E),{...Object.fromEntries(Object.entries(c).filter(([v,w])=>w!==void 0))})}function ls(){return{...o(p)}}function ss(){return o(k)}function Dr(){y(se,!1)}function K(...c){(o(p).debug||c.some(v=>v instanceof Error))&&console[c[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${o(p).name}]`,...c)}function Ze(c=j.UNVERIFIED,v=null){y(le,!1),y(we,v,!0),y(G,null),o(je)&&(clearTimeout(o(je)),y(je,null)),ze(c)}function ze(c,v=null){y(k,c,!0),y(we,v,!0),T("statechange",{payload:o(G),state:o(k)})}function Nr(){y(se,!0),jt().then(()=>{Hn()})}function Hn(){switch(o(p).display){case"floating":return rs()}}async function Qt(c={}){const{concurrency:v=Math.max(1,o(p).workers),controller:w=new AbortController,minDuration:_=o(p).minDuration}=c,A=performance.now();let C=null,B=null,Pe=!1;const W=await bt("onVerify",c);if(W!==void 0)return W;y(Ae,w,!0),Ze(j.VERIFYING);try{if(!u)throw new Error("Secure context (HTTPS) required.");if(o(p).mockError)throw new Error("Mock error.");if(o(p).test)return K("running test mode with null challenge"),await zn(Math.max(0,_-(performance.now()-A))),y(G,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),K("verified"),ze(j.VERIFIED),T("vefified",{payload:o(G)}),{payload:o(G)};if(C=await Ce(),!C)throw new Error("Failed to fetch challenge.");K("challenge",C),"configuration"in C&&(K("re-configuring from challenge",C.configuration),xn(C.configuration)),C.parameters.expiresAt&&is(C.parameters.expiresAt),Pe="_version"in C&&C._version===1;const ce=globalThis.$altcha.algorithms.get(C.parameters.algorithm);if(!ce)throw new Error(`Unsupported algorithm ${C.parameters.algorithm}.`);if(B=await so({challenge:C,concurrency:v,controller:w,createWorker:ce,counterMode:Pe?"string":"uint32",onOutOfMemory:Rt=>{if(K("out of memory error received"),T("outofmemory"),o(p).retryOnOutOfMemoryError&&Rt>1){const Lt=Math.floor(Rt/2);return K(`retrying with ${Lt} workers...`),Lt}},timeout:o(p).timeout}),o(Ae)?.signal.aborted)return Ze(),null;if(!B)throw new Error("Failed to find solution.");K("solution",B),await zn(Math.max(0,_-(performance.now()-A))),y(P,C.codeChallenge||o(p).codeChallenge||null,!0),Pe?y(G,btoa(JSON.stringify(Or(C,B))),!0):y(G,btoa(JSON.stringify({challenge:{parameters:C.parameters,signature:C.signature},solution:B})),!0),o(P)?(K("requesting code verification"),ze(j.CODE),T("codechallenge",{codeChallenge:o(P)})):o(p).verifyUrl?await yo():(K("verified"),ze(j.VERIFIED),T("vefified",{payload:o(G)}))}catch(ce){return K("verification failed",ce),ze(j.ERROR,String(ce)),null}finally{y(Ae,null)}return{challenge:C,payload:o(G),solution:B}}var cs={configure:xn,getConfiguration:ls,getState:ss,hide:Dr,log:K,reset:Ze,setState:ze,show:Nr,updateUI:Hn,verify:Qt},wo=jl();Te("scroll",Xn,Xl),Te("click",Xn,Ql),Te("pageshow",Nt,es),Te("resize",Nt,ts);var _o=Yt(wo);{var us=c=>{var v=Il();D(c,v)};fe(_o,c=>{o(p).display==="overlay"&&o(se)&&c(us)})}var it=te(_o,2),xo=X(it);{var fs=c=>{var v=Pl(),w=Yt(v),_=te(w,2);{var A=C=>{var B=Ol();ya(B,()=>document.querySelector(o(p).overlayContent)?.innerHTML,!0),q(B),D(C,B)};fe(_,C=>{o(p).overlayContent&&C(A)})}Vt("click",w,Jl),D(c,v)};fe(xo,c=>{o(p).display==="overlay"&&o(se)&&c(fs)})}var Vr=te(xo,2),Ur=X(Vr),Fr=X(Ur),ko=X(Fr);{let c=Ee(()=>o(p).display==="standard"&&o(We)!=="onsubmit"||o(k)===j.VERIFYING);$i(ko,()=>o(Ar),(v,w)=>{w(v,{get id(){return o(Xt)},name:"",get required(){return o(c)},get loading(){return o(jn)},get checked(){return o(le)},onchange:Wl,oninvalid:Zl})})}var jr=te(ko,2),ds=X(jr);{var hs=c=>{var v=An();ye(()=>rt(v,o(Re).verificationRequired)),D(c,v)},vs=c=>{var v=An();ye(()=>rt(v,o(Re).verifying)),D(c,v)},ps=c=>{var v=An();ye(()=>rt(v,o(Re).verified)),D(c,v)},gs=c=>{var v=An();ye(()=>rt(v,o(Re).label)),D(c,v)};fe(ds,c=>{o(k)===j.CODE&&o(P)?c(hs):o(k)===j.VERIFYING?c(vs,1):o(k)===j.VERIFIED?c(ps,2):c(gs,-1)})}q(jr),q(Fr);var bs=te(Fr,2);{var ms=c=>{Er(c,{get strings(){return o(Re)}})};fe(bs,c=>{o(wn)&&c(ms)})}q(Ur);var Eo=te(Ur,2);{var ys=c=>{{let v=Ee(()=>o(p).display==="bar"&&o(wn));Cr(c,{get logo(){return o(v)},get strings(){return o(Re)}})}};fe(Eo,c=>{o(zt)&&c(ys)})}var Co=te(Eo,2);{var ws=c=>{var v=Ml();Gt(v,w=>y(V,w),()=>o(V)),D(c,v)};fe(Co,c=>{o(p).display==="floating"&&c(ws)})}var _s=te(Co,2);{var xs=c=>{var v=Dl();fr(v),ye(()=>{z(v,"name",o(p).name),zi(v,o(G))}),D(c,v)};fe(_s,c=>{o(p).setCookie||c(xs)})}q(Vr);var ks=te(Vr,2);{var Es=c=>{Sr(c,{get anchor(){return o(U)},onClickOutside:()=>{u&&Ze()},get placement(){return o(p).popoverPlacement},role:"alert",variant:"error",get dir(){return o(_n)},children:(v,w)=>{var _=da(),A=Yt(_);{var C=W=>{var ce=Nl();D(W,ce)},B=W=>{var ce=Vl(),Rt=X(ce,!0);q(ce),ye(()=>rt(Rt,o(Re).expired)),D(W,ce)},Pe=W=>{var ce=Ul(),Rt=X(ce,!0);q(ce),ye(()=>{z(ce,"title",o(we)),rt(Rt,o(Re).error)}),D(W,ce)};fe(A,W=>{!o(we)&&!u?W(C):!o(we)&&o(k)===j.EXPIRED?W(B,1):W(Pe,-1)})}D(v,_)},$$slots:{default:!0}})},Cs=c=>{var v=da(),w=Yt(v);Si(w,()=>o(P),_=>{{let A=Ee(()=>o(p).codeChallengeDisplay!=="standard");Sr(_,{get anchor(){return o(U)},get backdrop(){return o(A)},get display(){return o(p).codeChallengeDisplay},onClose:()=>{Ze()},get placement(){return o(p).popoverPlacement},role:"dialog",get"aria-label"(){return o(Re).verificationRequired},get dir(){return o(_n)},children:(C,B)=>{var Pe=Fl(),W=Yt(Pe);lo(W,{get audioUrl(){return o(Rr)},get imageUrl(){return o(S)},onCancel:()=>Ze(),onReload:()=>Qt(),onSubmit:Lt=>yo(Lt),get codeChallenge(){return o(P)},get config(){return o(p)},get strings(){return o(Re)}});var ce=te(W,2);{var Rt=Lt=>{Cr(Lt,{get logo(){return o(wn)},get strings(){return o(Re)}})};fe(ce,Lt=>{o(zt)&&o(p).codeChallengeDisplay!=="standard"&&Lt(Rt)})}D(C,Pe)},$$slots:{default:!0}})}}),D(c,v)};fe(ks,c=>{o(we)||o(k)===j.EXPIRED||!u?c(Es):o(P)&&o(k)===j.CODE&&c(Cs,1)})}q(it),Gt(it,c=>y(U,c),()=>o(U)),ye(c=>{z(it,"data-state",o(k)),z(it,"data-display",o(p).display||void 0),z(it,"data-placement",c),z(it,"data-visible",o(se)||void 0),z(it,"dir",o(_n)),z(jr,"for",o(Xt)),it.dir=it.dir},[()=>ql(o(p).display)]),D(e,wo);var Ss=ft(cs);return i(),Ss}$n(["click"]),typeof window<"u"&&window.customElements&&customElements.define("altcha-widget",St(zl,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));const co=`(function() {
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
`,ho=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",fo],{type:"text/javascript;charset=utf-8"});function $r(e){let t;try{if(t=ho&&(self.URL||self.webkitURL).createObjectURL(ho),!t)throw"";const n=new Worker(t,{name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(fo),{name:e?.name})}}return Rl(`:root {
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
}`),$altcha.algorithms.set("SHA-256",()=>new $r),$altcha.algorithms.set("SHA-384",()=>new $r),$altcha.algorithms.set("SHA-512",()=>new $r),$altcha.algorithms.set("PBKDF2/SHA-256",()=>new Tr),$altcha.algorithms.set("PBKDF2/SHA-384",()=>new Tr),$altcha.algorithms.set("PBKDF2/SHA-512",()=>new Tr),So}Ts();const $s={ariaLinkLabel:"Bezoek Altcha.org",enterCode:"Voer code in",enterCodeAria:"Voer de code in die je hoort. Druk op Spatie om de audio af te spelen.",error:"Verificatie mislukt. Probeer het later opnieuw.",expired:"Verificatie verlopen. Probeer het opnieuw.",footer:'Beschermd door <a href="https://altcha.org/" target="_blank" aria-label="Bezoek Altcha.org">ALTCHA</a>',getAudioChallenge:"Audio-uitdaging ontvangen",label:"Ik ben geen robot",loading:"Laden...",reload:"Herladen",verify:"Verifiëren",verificationRequired:"Verificatie vereist!",verified:"Geverifieerd",verifying:"Bezig met verifiëren...",waitAlert:"Bezig met verifiëren... even geduld a.u.b.",cancel:"Annuleren",enterCodeFromImage:"Om door te gaan, voert u de code uit de onderstaande afbeelding in."};"$altcha"in globalThis&&globalThis.$altcha.i18n.set("nl",$s);const As="[data-form-runtime-message]";function zr($){for(const oe of Array.from($.elements))(oe instanceof HTMLInputElement||oe instanceof HTMLTextAreaElement||oe instanceof HTMLSelectElement)&&oe.setCustomValidity("")}function Rs($){return $.closest("label")?.querySelector("span")?.textContent?.replace(/\s*\*$/,"").trim()||"Dit veld"}function Ls($){if($.validity.valueMissing){if($ instanceof HTMLInputElement&&$.type==="checkbox"&&$.name==="privacy_accepted"){$.setCustomValidity("Akkoord gaan met de privacyverklaring is verplicht.");return}$.setCustomValidity(`${Rs($)} is verplicht.`);return}if($ instanceof HTMLInputElement&&$.type==="email"&&$.validity.typeMismatch){$.setCustomValidity("Vul een geldig e-mailadres in.");return}$.setCustomValidity("")}document.querySelectorAll(".site-form").forEach($=>{const J=$.closest(".form-shell")?.querySelector(As)??null,ue=$.querySelector('button[type="submit"]'),lt=ue?.textContent??"Verzenden",re=()=>{J&&(J.hidden=!0,J.textContent="")},Be=_e=>{J&&(J.textContent=_e,J.hidden=!1)};$.addEventListener("invalid",_e=>{const Je=_e.target;!(Je instanceof HTMLInputElement)&&!(Je instanceof HTMLTextAreaElement)&&!(Je instanceof HTMLSelectElement)||(Ls(Je),Be("Controleer de verplichte velden en probeer het opnieuw."))},!0),$.addEventListener("input",()=>{zr($),re()}),$.addEventListener("change",()=>{zr($),re()}),$.addEventListener("submit",_e=>{if(zr($),re(),!$.checkValidity()){_e.preventDefault(),Be("Controleer de verplichte velden en probeer het opnieuw."),$.reportValidity();return}ue&&(ue.disabled=!0,ue.textContent="Verzenden...")}),window.addEventListener("pageshow",()=>{ue&&(ue.disabled=!1,ue.textContent=lt)})});document.querySelectorAll("[data-js-timestamp]").forEach($=>{$ instanceof HTMLInputElement&&($.value=String(Math.floor(Date.now()/1e3)))});const Bt=document.querySelector("[data-news-archive]");if(Bt){const $=new URLSearchParams(window.location.search),oe=($.get("s")||"").trim().toLowerCase(),J=($.get("archief")||"").trim(),ue=Array.from(Bt.querySelectorAll("[data-archive-item]")),lt=Bt.querySelector("[data-archive-search]"),re=Array.from(Bt.querySelectorAll("[data-archive-link]")),Be=Bt.querySelector("[data-archive-toolbar]"),_e=Bt.querySelector("[data-archive-results]"),Je=Bt.querySelector("[data-archive-clear]");lt&&(lt.value=$.get("s")||"");const kn=oe.length>0||J.length>0;let Ht=0;if(ue.forEach(pe=>{const yt=(pe.dataset.archiveTitle||"").toLowerCase(),xe=(pe.dataset.archiveExcerpt||"").toLowerCase(),en=pe.dataset.archiveMonth||"",tn=oe.length===0||yt.includes(oe)||xe.includes(oe),ie=J.length===0||en===J,st=tn&&ie;pe.hidden=!st,st&&(Ht+=1)}),re.forEach(pe=>{const xe=new URL(pe.href,window.location.origin).searchParams.get("archief")||"";pe.toggleAttribute("aria-current",xe===J&&J.length>0)}),Be&&_e&&Je&&(Be.hidden=!kn,kn)){const pe=[];if(J){const xe=re.find(en=>(new URL(en.href,window.location.origin).searchParams.get("archief")||"")===J);xe&&pe.push(xe.textContent?.trim()||J)}oe&&pe.push(`zoekterm "${lt?.value.trim()||oe}"`),_e.textContent=Ht>0?`${Ht} bericht${Ht===1?"":"en"} gevonden${pe.length?` voor ${pe.join(" en ")}`:""}.`:`Geen berichten gevonden${pe.length?` voor ${pe.join(" en ")}`:""}.`;const yt=new URL(Je.href,window.location.origin);yt.search="",Je.href=yt.pathname}}document.querySelectorAll("[data-video-load]").forEach($=>{$.addEventListener("click",()=>{const oe=$.closest(".video-consent-card"),J=oe?.querySelector("[data-video-target]"),ue=$.dataset.videoSrc,lt=$.dataset.videoTitle||"YouTube video";if(!oe||!J||!ue||J.querySelector("iframe"))return;const re=document.createElement("iframe");re.src=ue,re.title=lt,re.width="560",re.height="315",re.loading="lazy",re.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",re.referrerPolicy="strict-origin-when-cross-origin",re.allowFullscreen=!0,J.hidden=!1,J.appendChild(re),oe.classList.add("video-consent-card--loaded")})});
