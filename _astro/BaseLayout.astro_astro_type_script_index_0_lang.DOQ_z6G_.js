var Co={},So;function Ss(){if(So)return Co;So=1;const $e=!1;var Te=Array.isArray,be=Array.prototype.indexOf,je=Array.prototype.includes,Rt=Array.from,ue=Object.keys,gt=Object.defineProperty,at=Object.getOwnPropertyDescriptor,Qt=Object.getOwnPropertyDescriptors,xr=Object.prototype,Bt=Array.prototype,fe=Object.getPrototypeOf,bt=Object.isExtensible;const me=()=>{};function er(e){for(var t=0;t<e.length;t++)e[t]()}function tr(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}const re=2,ot=4,kr=8,Hr=1<<24,mt=16,We=32,yt=64,Kr=128,Oe=512,se=1024,he=2048,ze=4096,Ze=8192,Be=16384,wt=32768,qr=1<<25,_t=65536,zn=1<<17,$o=1<<18,It=1<<19,To=1<<20,Lt=65536,Yr=1<<21,Gr=1<<22,xt=1<<23,Ht=Symbol("$state"),Ao=Symbol("legacy props"),Ro=Symbol(""),it=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},rr=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),nr=3,ar=8;function Bn(e){return e===this.v}function Hn(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Io(e){return!Hn(e,this.v)}function Lo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Oo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Po(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Mo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Do(e){throw new Error("https://svelte.dev/e/effect_orphan")}function No(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Uo(){throw new Error("https://svelte.dev/e/hydration_failed")}function Vo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Fo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function jo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function zo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Bo=!1;const Ho=1,Ko=2,Wr="[",Kn="[!",qn="[?",Yn="]",Ot={},ce=Symbol(),Gn="http://www.w3.org/1999/xhtml",qo="http://www.w3.org/2000/svg",Yo="http://www.w3.org/1998/Math/MathML",Go="@attach";let xe=null;function Kt(e){xe=e}function lt(e,t=!1,r){xe={p:xe,i:!1,c:null,e:null,s:e,x:null,r:R,l:null}}function st(e){var t=xe,r=t.e;if(r!==null){t.e=null;for(var n of r)Ga(n)}return e!==void 0&&(t.x=e),t.i=!0,xe=t.p,e??{}}function Wn(){return!0}let Pt=[];function Zn(){var e=Pt;Pt=[],er(e)}function ct(e){if(Pt.length===0&&!fr){var t=Pt;queueMicrotask(()=>{t===Pt&&Zn()})}Pt.push(e)}function Wo(){for(;Pt.length>0;)Zn()}function or(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function Zo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Jo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let A=!1;function Je(e){A=e}let P;function ye(e){if(e===null)throw or(),Ot;return P=e}function Mt(){return ye(Qe(P))}function K(e){if(A){if(Qe(P)!==null)throw or(),Ot;P=e}}function Er(e=1){if(A){for(var t=e,r=P;t--;)r=Qe(r);P=r}}function Zr(e=!0){for(var t=0,r=P;;){if(r.nodeType===ar){var n=r.data;if(n===Yn){if(t===0)return r;t-=1}else(n===Wr||n===Kn||n[0]==="["&&!isNaN(Number(n.slice(1))))&&(t+=1)}var a=Qe(r);e&&r.remove(),r=a}}function Jn(e){if(!e||e.nodeType!==ar)throw or(),Ot;return e.data}function ut(e){if(typeof e!="object"||e===null||Ht in e)return e;const t=fe(e);if(t!==xr&&t!==Bt)return e;var r=new Map,n=Te(e),a=D(0),i=Vt,s=l=>{if(Vt===i)return l();var f=L,u=Vt;Pe(null),za(i);var d=l();return Pe(f),za(u),d};return n&&r.set("length",D(e.length)),new Proxy(e,{defineProperty(l,f,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Vo();var d=r.get(f);return d===void 0?s(()=>{var g=D(u.value);return r.set(f,g),g}):y(d,u.value,!0),!0},deleteProperty(l,f){var u=r.get(f);if(u===void 0){if(f in l){const d=s(()=>D(ce));r.set(f,d),dr(a)}}else y(u,ce),dr(a);return!0},get(l,f,u){if(f===Ht)return e;var d=r.get(f),g=f in l;if(d===void 0&&(!g||at(l,f)?.writable)&&(d=s(()=>{var m=ut(g?l[f]:ce),b=D(m);return b}),r.set(f,d)),d!==void 0){var h=o(d);return h===ce?void 0:h}return Reflect.get(l,f,u)},getOwnPropertyDescriptor(l,f){var u=Reflect.getOwnPropertyDescriptor(l,f);if(u&&"value"in u){var d=r.get(f);d&&(u.value=o(d))}else if(u===void 0){var g=r.get(f),h=g?.v;if(g!==void 0&&h!==ce)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(l,f){if(f===Ht)return!0;var u=r.get(f),d=u!==void 0&&u.v!==ce||Reflect.has(l,f);if(u!==void 0||R!==null&&(!d||at(l,f)?.writable)){u===void 0&&(u=s(()=>{var h=d?ut(l[f]):ce,m=D(h);return m}),r.set(f,u));var g=o(u);if(g===ce)return!1}return d},set(l,f,u,d){var g=r.get(f),h=f in l;if(n&&f==="length")for(var m=u;m<g.v;m+=1){var b=r.get(m+"");b!==void 0?y(b,ce):m in l&&(b=s(()=>D(ce)),r.set(m+"",b))}if(g===void 0)(!h||at(l,f)?.writable)&&(g=s(()=>D(void 0)),y(g,ut(u)),r.set(f,g));else{h=g.v!==ce;var x=s(()=>ut(u));y(g,x)}var $=Reflect.getOwnPropertyDescriptor(l,f);if($?.set&&$.set.call(d,u),!h){if(n&&typeof f=="string"){var I=r.get("length"),le=Number(f);Number.isInteger(le)&&le>=I.v&&y(I,le+1)}dr(a)}return!0},ownKeys(l){o(a);var f=Reflect.ownKeys(l).filter(g=>{var h=r.get(g);return h===void 0||h.v!==ce});for(var[u,d]of r)d.v!==ce&&!(u in l)&&f.push(u);return f},setPrototypeOf(){Fo()}})}function Xn(e){try{if(e!==null&&typeof e=="object"&&Ht in e)return e[Ht]}catch{}return e}function Xo(e,t){return Object.is(Xn(e),Xn(t))}var Dt,Jr,Qn,ea,ta;function Xr(){if(Dt===void 0){Dt=window,Jr=document,Qn=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;ea=at(t,"firstChild").get,ta=at(t,"nextSibling").get,bt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),bt(r)&&(r.__t=void 0)}}function Xe(e=""){return document.createTextNode(e)}function Ae(e){return ea.call(e)}function Qe(e){return ta.call(e)}function Z(e,t){if(!A)return Ae(e);var r=Ae(P);if(r===null)r=P.appendChild(Xe());else if(t&&r.nodeType!==nr){var n=Xe();return r?.before(n),ye(n),n}return t&&Cr(r),ye(r),r}function qt(e,t=!1){if(!A){var r=Ae(e);return r instanceof Comment&&r.data===""?Qe(r):r}if(t){if(P?.nodeType!==nr){var n=Xe();return P?.before(n),ye(n),n}Cr(P)}return P}function Q(e,t=1,r=!1){let n=A?P:e;for(var a;t--;)a=n,n=Qe(n);if(!A)return n;if(r){if(n?.nodeType!==nr){var i=Xe();return n===null?a?.after(i):n.before(i),ye(i),i}Cr(n)}return ye(n),n}function Qo(e){e.textContent=""}function Qr(e,t,r){return document.createElementNS(t??Gn,e,void 0)}function Cr(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===nr;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function ra(e){var t=R;if(t===null)return L.f|=xt,e;if((t.f&wt)===0&&(t.f&ot)===0)throw e;kt(e,t)}function kt(e,t){for(;t!==null;){if((t.f&Kr)!==0){if((t.f&wt)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const ei=-7169;function te(e,t){e.f=e.f&ei|t}function en(e){(e.f&Oe)!==0||e.deps===null?te(e,se):te(e,ze)}function na(e){if(e!==null)for(const t of e)(t.f&re)===0||(t.f&Lt)===0||(t.f^=Lt,na(t.deps))}function aa(e,t,r){(e.f&he)!==0?t.add(e):(e.f&ze)!==0&&r.add(e),na(e.deps),te(e,se)}function ti(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ri=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ni(e){return ri.includes(e)}const ai={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function oi(e){return e=e.toLowerCase(),ai[e]??e}const ii=["touchstart","touchmove"];function li(e){return ii.includes(e)}function si(e,t){if(t){const r=document.body;e.autofocus=!0,ct(()=>{document.activeElement===r&&e.focus()})}}let oa=!1;function ia(){oa||(oa=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Sr(e){var t=L,r=R;Pe(null),tt(null);try{return e()}finally{Pe(t),tt(r)}}function ci(e,t,r,n=r){e.addEventListener(t,()=>Sr(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),ia()}const ir=Symbol("events"),la=new Set,tn=new Set;function sa(e,t,r,n={}){function a(i){if(n.capture||rn.call(t,i),!i.cancelBubble)return Sr(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ct(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function ke(e,t,r,n,a){var i={capture:n,passive:a},s=sa(e,t,r,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Ur(()=>{t.removeEventListener(e,s,i)})}function Nt(e,t,r){(t[ir]??={})[e]=r}function $r(e){for(var t=0;t<e.length;t++)la.add(e[t]);for(var r of tn)r(e)}let ca=null;function rn(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],i=a[0]||e.target;ca=e;var s=0,l=ca===e&&e[ir];if(l){var f=a.indexOf(l);if(f!==-1&&(t===document||t===window)){e[ir]=t;return}var u=a.indexOf(t);if(u===-1)return;f<=u&&(s=f)}if(i=a[s]||e.target,i!==t){gt(e,"currentTarget",{configurable:!0,get(){return i||r}});var d=L,g=R;Pe(null),tt(null);try{for(var h,m=[];i!==null;){var b=i.assignedSlot||i.parentNode||i.host||null;try{var x=i[ir]?.[n];x!=null&&(!i.disabled||e.target===i)&&x.call(i,e)}catch($){h?m.push($):h=$}if(e.cancelBubble||b===t||b===null)break;i=b}if(h){for(let $ of m)queueMicrotask(()=>{throw $});throw h}}finally{e[ir]=t,delete e.currentTarget,Pe(d),tt(g)}}}const ui=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function fi(e){return ui?.createHTML(e)??e}function ua(e){var t=Qr("template");return t.innerHTML=fi(e.replaceAll("<!>","<!---->")),t.content}function Re(e,t){var r=R;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function W(e,t){var r=(t&Ho)!==0,n=(t&Ko)!==0,a,i=!e.startsWith("<!>");return()=>{if(A)return Re(P,null),P;a===void 0&&(a=ua(i?e:"<!>"+e),r||(a=Ae(a)));var s=n||Qn?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Ae(s),f=s.lastChild;Re(l,f)}else Re(s,s);return s}}function hi(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(A)return Re(P,null),P;if(!i){var s=ua(a),l=Ae(s);i=Ae(l)}var f=i.cloneNode(!0);return Re(f,f),f}}function nn(e,t){return hi(e,t,"svg")}function Tr(e=""){if(!A){var t=Xe(e+"");return Re(t,t),t}var r=P;return r.nodeType!==nr?(r.before(r=Xe()),ye(r)):Cr(r),Re(r,r),r}function fa(){if(A)return Re(P,null),P;var e=document.createDocumentFragment(),t=document.createComment(""),r=Xe();return e.append(t,r),Re(t,r),e}function M(e,t){if(A){var r=R;((r.f&wt)===0||r.nodes.end===null)&&(r.nodes.end=P),Mt();return}e!==null&&e.before(t)}function di(e){let t=0,r=hr(0),n;return()=>{_n()&&(o(r),Vr(()=>(t===0&&(n=gr(()=>e(()=>dr(r)))),t+=1,()=>{ct(()=>{t-=1,t===0&&(n?.(),n=void 0,dr(r))})})))}}var vi=_t|It;function pi(e,t,r,n){new gi(e,t,r,n)}class gi{parent;is_pending=!1;transform_error;#e;#t=A?P:null;#r;#s;#a;#n=null;#o=null;#i=null;#l=null;#c=0;#u=0;#h=!1;#d=new Set;#v=new Set;#f=null;#y=di(()=>(this.#f=hr(this.#c),()=>{this.#f=null}));constructor(t,r,n,a){this.#e=t,this.#r=r,this.#s=i=>{var s=R;s.b=this,s.f|=Kr,n(i)},this.parent=R.b,this.transform_error=a??this.parent?.transform_error??(i=>i),this.#a=br(()=>{if(A){const i=this.#t;Mt();const s=i.data===Kn;if(i.data.startsWith(qn)){const f=JSON.parse(i.data.slice(qn.length));this.#_(f)}else s?this.#x():this.#w()}else this.#b()},vi),A&&(this.#e=P)}#w(){try{this.#n=rt(()=>this.#s(this.#e))}catch(t){this.error(t)}}#_(t){const r=this.#r.failed;r&&(this.#i=rt(()=>{r(this.#e,()=>t,()=>()=>{})}))}#x(){const t=this.#r.pending;if(t){this.is_pending=!0,this.#o=rt(()=>t(this.#e));var r=V;ct(()=>{var n=this.#l=document.createDocumentFragment(),a=Xe();n.append(a),this.#n=this.#g(()=>rt(()=>this.#s(a))),this.#u===0&&(this.#e.before(n),this.#l=null,mr(this.#o,()=>{this.#o=null}),this.#p(r))})}}#b(){var t=V;try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#c=0,this.#n=rt(()=>{this.#s(this.#e)}),this.#u>0){var r=this.#l=document.createDocumentFragment();to(this.#n,r);const n=this.#r.pending;this.#o=rt(()=>n(this.#e))}else this.#p(t)}catch(n){this.error(n)}}#p(t){this.is_pending=!1;for(const r of this.#d)te(r,he),t.schedule(r);for(const r of this.#v)te(r,ze),t.schedule(r);this.#d.clear(),this.#v.clear()}defer_effect(t){aa(t,this.#d,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#r.pending}#g(t){var r=R,n=L,a=xe;tt(this.#a),Pe(this.#a),Kt(this.#a.ctx);try{return ft.ensure(),t()}catch(i){return ra(i),null}finally{tt(r),Pe(n),Kt(a)}}#m(t,r){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t,r);return}this.#u+=t,this.#u===0&&(this.#p(r),this.#o&&mr(this.#o,()=>{this.#o=null}),this.#l&&(this.#e.before(this.#l),this.#l=null))}update_pending_count(t,r){this.#m(t,r),this.#c+=t,!(!this.#f||this.#h)&&(this.#h=!0,ct(()=>{this.#h=!1,this.#f&&Dr(this.#f,this.#c)}))}get_effect_pending(){return this.#y(),o(this.#f)}error(t){var r=this.#r.onerror;let n=this.#r.failed;if(!r&&!n)throw t;this.#n&&(de(this.#n),this.#n=null),this.#o&&(de(this.#o),this.#o=null),this.#i&&(de(this.#i),this.#i=null),A&&(ye(this.#t),Er(),ye(Zr()));var a=!1,i=!1;const s=()=>{if(a){Jo();return}a=!0,i&&zo(),this.#i!==null&&mr(this.#i,()=>{this.#i=null}),this.#g(()=>{this.#b()})},l=f=>{try{i=!0,r?.(f,s),i=!1}catch(u){kt(u,this.#a&&this.#a.parent)}n&&(this.#i=this.#g(()=>{try{return rt(()=>{var u=R;u.b=this,u.f|=Kr,n(this.#e,()=>f,()=>s)})}catch(u){return kt(u,this.#a.parent),null}}))};ct(()=>{var f;try{f=this.transform_error(t)}catch(u){kt(u,this.#a&&this.#a.parent);return}f!==null&&typeof f=="object"&&typeof f.then=="function"?f.then(l,u=>kt(u,this.#a&&this.#a.parent)):l(f)})}}function et(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=`${r}`)}function ha(e,t){return da(e,t)}function bi(e,t){Xr(),t.intro=t.intro??!1;const r=t.target,n=A,a=P;try{for(var i=Ae(r);i&&(i.nodeType!==ar||i.data!==Wr);)i=Qe(i);if(!i)throw Ot;Je(!0),ye(i);const s=da(e,{...t,anchor:i});return Je(!1),s}catch(s){if(s instanceof Error&&s.message.split(`
`).some(l=>l.startsWith("https://svelte.dev/e/")))throw s;return s!==Ot&&console.warn("Failed to hydrate: ",s),t.recover===!1&&Uo(),Xr(),Qo(r),Je(!1),ha(e,t)}finally{Je(n),ye(a)}}const Ar=new Map;function da(e,{target:t,anchor:r,props:n={},events:a,context:i,intro:s=!0,transformError:l}){Xr();var f=void 0,u=ol(()=>{var d=r??t.appendChild(Xe());pi(d,{pending:()=>{}},m=>{lt({});var b=xe;if(i&&(b.c=i),a&&(n.$$events=a),A&&Re(m,null),f=e(m,n)||{},A&&(R.nodes.end=P,P===null||P.nodeType!==ar||P.data!==Yn))throw or(),Ot;st()},l);var g=new Set,h=m=>{for(var b=0;b<m.length;b++){var x=m[b];if(!g.has(x)){g.add(x);var $=li(x);for(const ne of[t,document]){var I=Ar.get(ne);I===void 0&&(I=new Map,Ar.set(ne,I));var le=I.get(x);le===void 0?(ne.addEventListener(x,rn,{passive:$}),I.set(x,1)):I.set(x,le+1)}}}};return h(Rt(la)),tn.add(h),()=>{for(var m of g)for(const $ of[t,document]){var b=Ar.get($),x=b.get(m);--x==0?($.removeEventListener(m,rn),b.delete(m),b.size===0&&Ar.delete($)):b.set(m,x)}tn.delete(h),d!==r&&d.parentNode?.removeChild(d)}});return an.set(f,u),f}let an=new WeakMap;function mi(e,t){const r=an.get(e);return r?(an.delete(e),r(t)):Promise.resolve()}function on(e){var t=re|he,r=L!==null&&(L.f&re)!==0?L:null;return R!==null&&(R.f|=It),{ctx:xe,deps:null,effects:null,equals:Bn,f:t,fn:e,reactions:null,rv:0,v:ce,wv:0,parent:r??R,ac:null}}function yi(e,t,r){let n=R;n===null&&Oo();var a=void 0,i=hr(ce),s=!L,l=new Map;return il(()=>{var f=R,u=tr();a=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject).finally(Rr)}catch(m){u.reject(m),Rr()}var d=V;if(s){if((f.f&wt)!==0)var g=ba();if(n.b.is_rendered())l.get(d)?.reject(it),l.delete(d);else{for(const m of l.values())m.reject(it);l.clear()}l.set(d,u)}const h=(m,b=void 0)=>{if(g){var x=b===it;g(x)}if(!(b===it||(f.f&Be)!==0)){if(d.activate(),b)i.f|=xt,Dr(i,b);else{(i.f&xt)!==0&&(i.f^=xt),Dr(i,m);for(const[$,I]of l){if(l.delete($),$===d)break;I.reject(it)}}d.deactivate()}};u.promise.then(h,m=>h(null,m||"unknown"))}),Ur(()=>{for(const f of l.values())f.reject(it)}),new Promise(f=>{function u(d){function g(){d===a?f(i):u(a)}d.then(g,g)}u(a)})}function we(e){const t=on(e);return Fa(t),t}function wi(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)de(t[r])}}function _i(e){for(var t=e.parent;t!==null;){if((t.f&re)===0)return(t.f&Be)===0?t:null;t=t.parent}return null}function ln(e){var t,r=R;tt(_i(e));try{e.f&=~Lt,wi(e),t=Ka(e)}finally{tt(r)}return t}function va(e){var t=ln(e);if(!e.equals(t)&&(e.wv=Ba(),(!V?.is_fork||e.deps===null)&&(e.v=t,e.deps===null))){te(e,se);return}St||(He!==null?(_n()||V?.is_fork)&&He.set(e,t):en(e))}function xi(e){if(e.effects!==null)for(const t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(it),t.teardown=me,t.ac=null,pr(t,0),kn(t))}function pa(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&Zt(t)}function ga(e,t,r,n){const a=on;var i=e.filter(h=>!h.settled);if(r.length===0&&i.length===0){n(t.map(a));return}var s=R,l=ki(),f=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(h=>h.promise)):null;function u(h){l();try{n(h)}catch(m){(s.f&Be)===0&&kt(m,s)}Rr()}if(r.length===0){f.then(()=>u(t.map(a)));return}var d=ba();function g(){Promise.all(r.map(h=>yi(h))).then(h=>u([...t.map(a),...h])).catch(h=>kt(h,s)).finally(()=>d())}f?f.then(()=>{l(),g(),Rr()}):g()}function ki(){var e=R,t=L,r=xe,n=V;return function(i=!0){tt(e),Pe(t),Kt(r),i&&(e.f&Be)===0&&(n?.activate(),n?.apply())}}function Rr(e=!0){tt(null),Pe(null),Kt(null),e&&V?.deactivate()}function ba(){var e=R.b,t=V,r=e.is_rendered();return e.update_pending_count(1,t),t.increment(r),(n=!1)=>{e.update_pending_count(-1,t),t.decrement(r,n)}}class Ir{anchor;#e=new Map;#t=new Map;#r=new Map;#s=new Set;#a=!0;constructor(t,r=!0){this.anchor=t,this.#a=r}#n=t=>{if(this.#e.has(t)){var r=this.#e.get(t),n=this.#t.get(r);if(n)sl(n),this.#s.delete(r);else{var a=this.#r.get(r);a&&(this.#t.set(r,a.effect),this.#r.delete(r),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),n=a.effect)}for(const[i,s]of this.#e){if(this.#e.delete(i),i===t)break;const l=this.#r.get(s);l&&(de(l.effect),this.#r.delete(s))}for(const[i,s]of this.#t){if(i===r||this.#s.has(i))continue;const l=()=>{if(Array.from(this.#e.values()).includes(i)){var u=document.createDocumentFragment();to(s,u),u.append(Xe()),this.#r.set(i,{effect:s,fragment:u})}else de(s);this.#s.delete(i),this.#t.delete(i)};this.#a||!n?(this.#s.add(i),mr(s,l,!1)):l()}}};#o=t=>{this.#e.delete(t);const r=Array.from(this.#e.values());for(const[n,a]of this.#r)r.includes(n)||(de(a.effect),this.#r.delete(n))};ensure(t,r){var n=V;r&&!this.#t.has(t)&&!this.#r.has(t)&&this.#t.set(t,rt(()=>r(this.anchor))),this.#e.set(n,t),A&&(this.anchor=P),this.#n(n)}}function ie(e,t,r=!1){var n;A&&(n=P,Mt());var a=new Ir(e),i=r?_t:0;function s(l,f){if(A){var u=Jn(n);if(l!==parseInt(u.substring(1))){var d=Zr();ye(d),a.anchor=d,Je(!1),a.ensure(l,f),Je(!0);return}}a.ensure(l,f)}br(()=>{var l=!1;t((f,u=0)=>{l=!0,s(u,f)}),l||s(-1,null)},i)}const Ei=Symbol("NaN");function Ci(e,t,r){A&&Mt();var n=new Ir(e);br(()=>{var a=t();a!==a&&(a=Ei),n.ensure(a,r)})}function ma(e,t,r=!1,n=!1,a=!1,i=!1){var s=e,l="";if(r){var f=e;A&&(s=ye(Ae(f)))}pe(()=>{var u=R;if(l===(l=t()??"")){A&&Mt();return}if(r&&!A){u.nodes=null,f.innerHTML=l,l!==""&&Re(Ae(f),f.lastChild);return}if(u.nodes!==null&&(Ja(u.nodes.start,u.nodes.end),u.nodes=null),l!==""){if(A){P.data;for(var d=Mt(),g=d;d!==null&&(d.nodeType!==ar||d.data!=="");)g=d,d=Qe(d);if(d===null)throw or(),Ot;Re(P,g),s=ye(d);return}var h=n?qo:a?Yo:void 0,m=Qr(n?"svg":a?"math":"template",h);m.innerHTML=l;var b=n||a?m:m.content;if(Re(Ae(b),b.lastChild),n||a)for(;Ae(b);)s.before(Ae(b));else s.before(b)}})}function Si(e,t,...r){var n=new Ir(e);br(()=>{const a=t()??null;n.ensure(a,a&&(i=>a(i,...r)))},_t)}function $i(e,t,r){var n;A&&(n=P,Mt());var a=new Ir(e);br(()=>{var i=t()??null;if(A){var s=Jn(n),l=s===Wr,f=i!==null;if(l!==f){var u=Zr();ye(u),a.anchor=u,Je(!1),a.ensure(i,i&&(d=>r(d,i))),Je(!0);return}}a.ensure(i,i&&(d=>r(d,i)))},_t)}function Ti(e,t){var r=void 0,n;Wa(()=>{r!==(r=t())&&(n&&(de(n),n=null),r&&(n=rt(()=>{xn(()=>r(e))})))})}function ya(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=ya(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Ai(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=ya(e))&&(n&&(n+=" "),n+=t);return n}function Ri(e){return typeof e=="object"?Ai(e):e??""}const wa=[...` 	
\r\f \v\uFEFF`];function Ii(e,t,r){var n=e==null?"":""+e;if(r){for(var a of Object.keys(r))if(r[a])n=n?n+" "+a:a;else if(n.length)for(var i=a.length,s=0;(s=n.indexOf(a,s))>=0;){var l=s+i;(s===0||wa.includes(n[s-1]))&&(l===n.length||wa.includes(n[l]))?n=(s===0?"":n.substring(0,s))+n.substring(l+1):s=l}}return n===""?null:n}function _a(e,t=!1){var r=t?" !important;":";",n="";for(var a of Object.keys(e)){var i=e[a];i!=null&&i!==""&&(n+=" "+a+": "+i+r)}return n}function sn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Li(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,s=0,l=!1,f=[];n&&f.push(...Object.keys(n).map(sn)),a&&f.push(...Object.keys(a).map(sn));var u=0,d=-1;const x=e.length;for(var g=0;g<x;g++){var h=e[g];if(l?h==="/"&&e[g-1]==="*"&&(l=!1):i?i===h&&(i=!1):h==="/"&&e[g+1]==="*"?l=!0:h==='"'||h==="'"?i=h:h==="("?s++:h===")"&&s--,!l&&i===!1&&s===0){if(h===":"&&d===-1)d=g;else if(h===";"||g===x-1){if(d!==-1){var m=sn(e.substring(u,d).trim());if(!f.includes(m)){h!==";"&&g++;var b=e.substring(u,g).trim();r+=" "+b+";"}}u=g+1,d=-1}}}}return n&&(r+=_a(n)),a&&(r+=_a(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Oi(e,t,r,n,a,i){var s=e.__className;if(A||s!==r||s===void 0){var l=Ii(r,n,i);(!A||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l)),e.__className=r}else if(i&&a!==i)for(var f in i){var u=!!i[f];(a==null||u!==!!a[f])&&e.classList.toggle(f,u)}return i}function cn(e,t={},r,n){for(var a in r){var i=r[a];t[a]!==i&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,n))}}function Pi(e,t,r,n){var a=e.__style;if(A||a!==t){var i=Li(t,n);(!A||i!==e.getAttribute("style"))&&(i==null?e.removeAttribute("style"):e.style.cssText=i),e.__style=t}else n&&(Array.isArray(n)?(cn(e,r?.[0],n[0]),cn(e,r?.[1],n[1],"important")):cn(e,r,n));return n}function un(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Te(t))return Zo();for(var n of e.options)n.selected=t.includes(xa(n));return}for(n of e.options){var a=xa(n);if(Xo(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Mi(e){var t=new MutationObserver(()=>{un(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ur(()=>{t.disconnect()})}function xa(e){return"__value"in e?e.__value:e.value}const lr=Symbol("class"),sr=Symbol("style"),ka=Symbol("is custom element"),Ea=Symbol("is html"),Di=rr?"link":"LINK",Ni=rr?"input":"INPUT",Ui=rr?"option":"OPTION",Vi=rr?"select":"SELECT",Fi=rr?"progress":"PROGRESS";function fn(e){if(A){var t=!1,r=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var n=e.value;j(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var a=e.checked;j(e,"checked",null),e.checked=a}}};e.__on_r=r,ct(r),ia()}}function ji(e,t){var r=hn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==Fi)||(e.value=t??"")}function zi(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function j(e,t,r,n){var a=hn(e);A&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===Di)||a[t]!==(a[t]=r)&&(t==="loading"&&(e[Ro]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Sa(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Bi(e,t,r,n,a=!1,i=!1){if(A&&a&&e.nodeName===Ni){var s=e,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in r||fn(s)}var f=hn(e),u=f[ka],d=!f[Ea];let g=A&&u;g&&Je(!1);var h=t||{},m=e.nodeName===Ui;for(var b in t)b in r||(r[b]=null);r.class?r.class=Ri(r.class):r[lr]&&(r.class=null),r[sr]&&(r.style??=null);var x=Sa(e);for(const k in r){let N=r[k];if(m&&k==="value"&&N==null){e.value=e.__value="",h[k]=N;continue}if(k==="class"){var $=e.namespaceURI==="http://www.w3.org/1999/xhtml";Oi(e,$,N,n,t?.[lr],r[lr]),h[k]=N,h[lr]=r[lr];continue}if(k==="style"){Pi(e,N,t?.[sr],r[sr]),h[k]=N,h[sr]=r[sr];continue}var I=h[k];if(!(N===I&&!(N===void 0&&e.hasAttribute(k)))){h[k]=N;var le=k[0]+k[1];if(le!=="$$")if(le==="on"){const X={},B="$$"+k;let U=k.slice(2);var ne=ni(U);if(ti(U)&&(U=U.slice(0,-7),X.capture=!0),!ne&&I){if(N!=null)continue;e.removeEventListener(U,h[B],X),h[B]=null}if(ne)Nt(U,e,N),$r([U]);else if(N!=null){let Ue=function(ge){h[k].call(this,ge)};h[B]=sa(U,e,Ue,X)}}else if(k==="style")j(e,k,N);else if(k==="autofocus")si(e,!!N);else if(!u&&(k==="__value"||k==="value"&&N!=null))e.value=e.__value=N;else if(k==="selected"&&m)zi(e,N);else{var O=k;d||(O=oi(O));var Ce=O==="defaultValue"||O==="defaultChecked";if(N==null&&!u&&!Ce)if(f[k]=null,O==="value"||O==="checked"){let X=e;const B=t===void 0;if(O==="value"){let U=X.defaultValue;X.removeAttribute(O),X.defaultValue=U,X.value=X.__value=B?U:null}else{let U=X.defaultChecked;X.removeAttribute(O),X.defaultChecked=U,X.checked=B?U:!1}}else e.removeAttribute(k);else Ce||x.includes(O)&&(u||typeof N!="string")?(e[O]=N,O in f&&(f[O]=ce)):typeof N!="function"&&j(e,O,N)}}}return g&&Je(!0),h}function Lr(e,t,r=[],n=[],a=[],i,s=!1,l=!1){ga(a,r,n,f=>{var u=void 0,d={},g=e.nodeName===Vi,h=!1;if(Wa(()=>{var b=t(...f.map(o)),x=Bi(e,u,b,i,s,l);h&&g&&"value"in b&&un(e,b.value);for(let I of Object.getOwnPropertySymbols(d))b[I]||de(d[I]);for(let I of Object.getOwnPropertySymbols(b)){var $=b[I];I.description===Go&&(!u||$!==u[I])&&(d[I]&&de(d[I]),d[I]=rt(()=>Ti(e,()=>$))),x[I]=$}u=x}),g){var m=e;xn(()=>{un(m,u.value,!0),Mi(m)})}h=!0})}function hn(e){return e.__attributes??={[ka]:e.nodeName.includes("-"),[Ea]:e.namespaceURI===Gn}}var Ca=new Map;function Sa(e){var t=e.getAttribute("is")||e.nodeName,r=Ca.get(t);if(r)return r;Ca.set(t,r=[]);for(var n,a=e,i=Element.prototype;i!==a;){n=Qt(a);for(var s in n)n[s].set&&r.push(s);a=fe(a)}return r}function Hi(e,t,r=t){var n=new WeakSet;ci(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=dn(e)?vn(i):i,r(i),V!==null&&n.add(V),await Ft(),i!==(i=t())){var s=e.selectionStart,l=e.selectionEnd,f=e.value.length;if(e.value=i??"",l!==null){var u=e.value.length;s===l&&l===f&&u>f?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=s,e.selectionEnd=Math.min(l,u))}}}),(A&&e.defaultValue!==e.value||gr(t)==null&&e.value)&&(r(dn(e)?vn(e.value):e.value),V!==null&&n.add(V)),Vr(()=>{var a=t();if(e===document.activeElement){var i=V;if(n.has(i))return}dn(e)&&a===vn(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function dn(e){var t=e.type;return t==="number"||t==="range"}function vn(e){return e===""?null:+e}function $a(e,t){return e===t||e?.[Ht]===t}function Yt(e={},t,r,n){var a=xe.r,i=R;return xn(()=>{var s,l;return Vr(()=>{s=l,l=[],gr(()=>{e!==r(...l)&&(t(e,...l),s&&$a(r(...s),e)&&t(null,...s))})}),()=>{let f=i;for(;f!==a&&f.parent!==null&&f.parent.f&qr;)f=f.parent;const u=()=>{l&&$a(r(...l),e)&&t(null,...l)},d=f.teardown;f.teardown=()=>{u(),d?.()}}}),e}const Ki={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Or(e,t,r){return new Proxy({props:e,exclude:t},Ki)}function J(e,t,r,n){var a=n,i=!0,s=()=>(i&&(i=!1,a=n),a),l;l=e[t],l===void 0&&n!==void 0&&(l=s());var f;f=()=>{var h=e[t];return h===void 0?s():(i=!0,h)};var u=!1,d=on(()=>(u=!1,f())),g=R;return(function(h,m){if(arguments.length>0){const b=m?o(d):h;return y(d,b),u=!0,a!==void 0&&(a=b),h}return St&&u||(g.f&Be)!==0?d.v:o(d)})}function qi(e){return new Yi(e)}class Yi{#e;#t;constructor(t){var r=new Map,n=(i,s)=>{var l=Na(s,!1,!1);return r.set(i,l),l};const a=new Proxy({...t.props||{},$$events:{}},{get(i,s){return o(r.get(s)??n(s,Reflect.get(i,s)))},has(i,s){return s===Ao?!0:(o(r.get(s)??n(s,Reflect.get(i,s))),Reflect.has(i,s))},set(i,s,l){return y(r.get(s)??n(s,l),l),Reflect.set(i,s,l)}});this.#t=(t.hydrate?bi:ha)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError}),(!t?.props?.$$host||t.sync===!1)&&q(),this.#e=a.$$events;for(const i of Object.keys(this.#t))i==="$set"||i==="$destroy"||i==="$on"||gt(this,i,{get(){return this.#t[i]},set(s){this.#t[i]=s},enumerable:!0});this.#t.$set=i=>{Object.assign(a,i)},this.#t.$destroy=()=>{mi(this.#t)}}$set(t){this.#t.$set(t)}$on(t,r){this.#e[t]=this.#e[t]||[];const n=(...a)=>r.call(this,...a);return this.#e[t].push(n),()=>{this.#e[t]=this.#e[t].filter(a=>a!==n)}}$destroy(){this.#t.$destroy()}}let Ta=class{};typeof HTMLElement=="function"&&(Ta=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;$$shadowRoot=null;constructor(e,t,r){super(),this.$$ctor=e,this.$$s=t,r&&(this.$$shadowRoot=this.attachShadow(r))}addEventListener(e,t,r){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const n=this.$$c.$on(e,t);this.$$l_u.set(t,n)}super.addEventListener(e,t,r)}removeEventListener(e,t,r){if(super.removeEventListener(e,t,r),this.$$c){const n=this.$$l_u.get(t);n&&(n(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(n){return a=>{const i=Qr("slot");n!=="default"&&(i.name=n),M(a,i)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},r=Gi(this);for(const n of this.$$s)n in r&&(n==="default"&&!this.$$d.children?(this.$$d.children=e(n),t.default=!0):t[n]=e(n));for(const n of this.attributes){const a=this.$$g_p(n.name);a in this.$$d||(this.$$d[a]=Pr(a,n.value,this.$$p_d,"toProp"))}for(const n in this.$$p_d)!(n in this.$$d)&&this[n]!==void 0&&(this.$$d[n]=this[n],delete this[n]);this.$$c=qi({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=al(()=>{Vr(()=>{this.$$r=!0;for(const n of ue(this.$$c)){if(!this.$$p_d[n]?.reflect)continue;this.$$d[n]=this.$$c[n];const a=Pr(n,this.$$d[n],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[n].attribute||n):this.setAttribute(this.$$p_d[n].attribute||n,a)}this.$$r=!1})});for(const n in this.$$l)for(const a of this.$$l[n]){const i=this.$$c.$on(n,a);this.$$l_u.set(a,i)}this.$$l={}}}attributeChangedCallback(e,t,r){this.$$r||(e=this.$$g_p(e),this.$$d[e]=Pr(e,r,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return ue(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function Pr(e,t,r,n){const a=r[e]?.type;if(t=a==="Boolean"&&typeof t!="boolean"?t!=null:t,!n||!r[e])return t;if(n==="toAttribute")switch(a){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(a){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Gi(e){const t={};return e.childNodes.forEach(r=>{t[r.slot||"default"]=!0}),t}function Et(e,t,r,n,a,i){let s=class extends Ta{constructor(){super(e,r,a),this.$$p_d=t}static get observedAttributes(){return ue(t).map(l=>(t[l].attribute||l).toLowerCase())}};return ue(t).forEach(l=>{gt(s.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(f){f=Pr(l,f,t),this.$$d[l]=f;var u=this.$$c;if(u){var d=at(u,l)?.get;d?u[l]=f:u.$set({[l]:f})}}})}),n.forEach(l=>{gt(s.prototype,l,{get(){return this.$$c?.[l]}})}),e.element=s,s}function pn(e){xe===null&&Lo(),Ne(()=>{const t=gr(e);if(typeof t=="function")return t})}function Aa(e,t,r){if(e==null)return t(void 0),me;const n=gr(()=>e.subscribe(t,r));return n.unsubscribe?()=>n.unsubscribe():n}const Gt=[];function Wi(e,t=me){let r=null;const n=new Set;function a(l){if(Hn(e,l)&&(e=l,r)){const f=!Gt.length;for(const u of n)u[1](),Gt.push(u,e);if(f){for(let u=0;u<Gt.length;u+=2)Gt[u][0](Gt[u+1]);Gt.length=0}}}function i(l){a(l(e))}function s(l,f=me){const u=[l,f];return n.add(u),n.size===1&&(r=t(a,i)||me),l(e),()=>{n.delete(u),n.size===0&&r&&(r(),r=null)}}return{set:a,update:i,subscribe:s}}function cr(e){let t;return Aa(e,r=>t=r)(),t}let gn=Symbol();function Ra(e,t,r){const n=r[t]??={store:null,source:Na(void 0),unsubscribe:me};if(n.store!==e&&!(gn in r))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=me;else{var a=!0;n.unsubscribe=Aa(e,i=>{a?n.source.v=i:y(n.source,i)}),a=!1}return e&&gn in r?cr(e):o(n.source)}function Zi(){const e={};function t(){Ur(()=>{for(var r in e)e[r].unsubscribe();gt(e,gn,{enumerable:!1,value:!0})})}return[e,t]}const ur=new Set;let V=null,He=null,bn=null,fr=!1,mn=!1,Wt=null,Mr=null;var Ia=0;let Ji=1;class ft{id=Ji++;current=new Map;previous=new Map;#e=new Set;#t=new Set;#r=0;#s=0;#a=null;#n=[];#o=new Set;#i=new Set;#l=new Map;is_fork=!1;#c=!1;#u(){return this.is_fork||this.#s>0}skip_effect(t){this.#l.has(t)||this.#l.set(t,{d:[],m:[]})}unskip_effect(t){var r=this.#l.get(t);if(r){this.#l.delete(t);for(var n of r.d)te(n,he),this.schedule(n);for(n of r.m)te(n,ze),this.schedule(n)}}#h(){Ia++>1e3&&Xi();const t=this.#n;this.#n=[],this.apply();var r=Wt=[],n=[],a=Mr=[];for(const l of t)this.#d(l,r,n);if(V=null,a.length>0){var i=ft.ensure();for(const l of a)i.schedule(l)}if(Wt=null,Mr=null,this.#u()){this.#v(n),this.#v(r);for(const[l,f]of this.#l)Ma(l,f)}else{this.#o.clear(),this.#i.clear();for(const l of this.#e)l(this);this.#e.clear(),La(n),La(r),this.#r===0&&this.#f(),this.#a?.resolve()}var s=V;if(this.#n.length>0){const l=s??=this;l.#n.push(...this.#n.filter(f=>!l.#n.includes(f)))}s!==null&&(ur.add(s),s.#h())}#d(t,r,n){t.f^=se;for(var a=t.first;a!==null;){var i=a.f,s=(i&(We|yt))!==0,l=s&&(i&se)!==0,f=l||(i&Ze)!==0||this.#l.has(a);if(!f&&a.fn!==null){s?a.f^=se:(i&ot)!==0?r.push(a):vr(a)&&((i&mt)!==0&&this.#i.add(a),Zt(a));var u=a.first;if(u!==null){a=u;continue}}for(;a!==null;){var d=a.next;if(d!==null){a=d;break}a=a.parent}}}#v(t){for(var r=0;r<t.length;r+=1)aa(t[r],this.#o,this.#i)}capture(t,r){r!==ce&&!this.previous.has(t)&&this.previous.set(t,r),(t.f&xt)===0&&(this.current.set(t,t.v),He?.set(t,t.v))}activate(){V=this}deactivate(){V=null,He=null}flush(){try{if(mn=!0,V=this,!this.#u()){for(const t of this.#o)this.#i.delete(t),te(t,he),this.schedule(t);for(const t of this.#i)te(t,ze),this.schedule(t)}this.#h()}finally{Ia=0,bn=null,Wt=null,Mr=null,mn=!1,V=null,He=null,Ct.clear()}}discard(){for(const t of this.#t)t(this);this.#t.clear()}#f(){if(ur.size>1){this.previous.clear();var t=V,r=He,n=!0;for(const a of ur){if(a===this){n=!1;continue}const i=[];for(const[l,f]of this.current){if(a.current.has(l))if(n&&f!==a.current.get(l))a.current.set(l,f);else continue;i.push(l)}if(i.length===0)continue;const s=[...a.current.keys()].filter(l=>!this.current.has(l));if(s.length>0){a.activate();const l=new Set,f=new Map;for(const u of i)Oa(u,s,l,f);if(a.#n.length>0){a.apply();for(const u of a.#n)a.#d(u,[],[])}a.deactivate()}}V=t,He=r}this.#l.clear(),ur.delete(this)}increment(t){this.#r+=1,t&&(this.#s+=1)}decrement(t,r){this.#r-=1,t&&(this.#s-=1),!(this.#c||r)&&(this.#c=!0,ct(()=>{this.#c=!1,this.flush()}))}oncommit(t){this.#e.add(t)}ondiscard(t){this.#t.add(t)}settled(){return(this.#a??=tr()).promise}static ensure(){if(V===null){const t=V=new ft;mn||(ur.add(V),fr||ct(()=>{V===t&&t.flush()}))}return V}apply(){}schedule(t){if(bn=t,t.b?.is_pending&&(t.f&(ot|kr|Hr))!==0&&(t.f&wt)===0){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(Wt!==null&&r===R&&(L===null||(L.f&re)===0))return;if((n&(yt|We))!==0){if((n&se)===0)return;r.f^=se}}this.#n.push(r)}}function q(e){var t=fr;fr=!0;try{for(var r;;){if(Wo(),V===null)return r;V.flush()}}finally{fr=t}}function Xi(){try{No()}catch(e){kt(e,bn)}}let ht=null;function La(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Be|Ze))===0&&vr(n)&&(ht=new Set,Zt(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Xa(n),ht?.size>0)){Ct.clear();for(const a of ht){if((a.f&(Be|Ze))!==0)continue;const i=[a];let s=a.parent;for(;s!==null;)ht.has(s)&&(ht.delete(s),i.push(s)),s=s.parent;for(let l=i.length-1;l>=0;l--){const f=i[l];(f.f&(Be|Ze))===0&&Zt(f)}}ht.clear()}}ht=null}}function Oa(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const a of e.reactions){const i=a.f;(i&re)!==0?Oa(a,t,r,n):(i&(Gr|mt))!==0&&(i&he)===0&&Pa(a,t,n)&&(te(a,he),yn(a))}}function Pa(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const a of e.deps){if(je.call(t,a))return!0;if((a.f&re)!==0&&Pa(a,t,r))return r.set(a,!0),!0}return r.set(e,!1),!1}function yn(e){V.schedule(e)}function Ma(e,t){if(!((e.f&We)!==0&&(e.f&se)!==0)){(e.f&he)!==0?t.d.push(e):(e.f&ze)!==0&&t.m.push(e),te(e,se);for(var r=e.first;r!==null;)Ma(r,t),r=r.next}}let wn=new Set;const Ct=new Map;let Da=!1;function hr(e,t){var r={f:0,v:e,reactions:null,equals:Bn,rv:0,wv:0};return r}function D(e,t){const r=hr(e);return Fa(r),r}function Na(e,t=!1,r=!0){const n=hr(e);return t||(n.equals=Io),n}function y(e,t,r=!1){L!==null&&(!Ke||(L.f&zn)!==0)&&Wn()&&(L.f&(re|mt|Gr|zn))!==0&&(Me===null||!je.call(Me,e))&&jo();let n=r?ut(t):t;return Dr(e,n,Mr)}function Dr(e,t,r=null){if(!e.equals(t)){var n=e.v;St?Ct.set(e,t):Ct.set(e,n),e.v=t;var a=ft.ensure();if(a.capture(e,n),(e.f&re)!==0){const i=e;(e.f&he)!==0&&ln(i),en(i)}e.wv=Ba(),Ua(e,he,r),R!==null&&(R.f&se)!==0&&(R.f&(We|yt))===0&&(De===null?el([e]):De.push(e)),!a.is_fork&&wn.size>0&&!Da&&Qi()}return t}function Qi(){Da=!1;for(const e of wn)(e.f&se)!==0&&te(e,ze),vr(e)&&Zt(e);wn.clear()}function dr(e){y(e,e.v+1)}function Ua(e,t,r){var n=e.reactions;if(n!==null)for(var a=n.length,i=0;i<a;i++){var s=n[i],l=s.f,f=(l&he)===0;if(f&&te(s,t),(l&re)!==0){var u=s;He?.delete(u),(l&Lt)===0&&(l&Oe&&(s.f|=Lt),Ua(u,ze,r))}else if(f){var d=s;(l&mt)!==0&&ht!==null&&ht.add(d),r!==null?r.push(d):yn(d)}}}let Nr=!1,St=!1;function Va(e){St=e}let L=null,Ke=!1;function Pe(e){L=e}let R=null;function tt(e){R=e}let Me=null;function Fa(e){L!==null&&(Me===null?Me=[e]:Me.push(e))}let Ee=null,Ie=0,De=null;function el(e){De=e}let ja=1,Ut=0,Vt=Ut;function za(e){Vt=e}function Ba(){return++ja}function vr(e){var t=e.f;if((t&he)!==0)return!0;if(t&re&&(e.f&=~Lt),(t&ze)!==0){for(var r=e.deps,n=r.length,a=0;a<n;a++){var i=r[a];if(vr(i)&&va(i),i.wv>e.wv)return!0}(t&Oe)!==0&&He===null&&te(e,se)}return!1}function Ha(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Me!==null&&je.call(Me,e)))for(var a=0;a<n.length;a++){var i=n[a];(i.f&re)!==0?Ha(i,t,!1):t===i&&(r?te(i,he):(i.f&se)!==0&&te(i,ze),yn(i))}}function Ka(e){var t=Ee,r=Ie,n=De,a=L,i=Me,s=xe,l=Ke,f=Vt,u=e.f;Ee=null,Ie=0,De=null,L=(u&(We|yt))===0?e:null,Me=null,Kt(e.ctx),Ke=!1,Vt=++Ut,e.ac!==null&&(Sr(()=>{e.ac.abort(it)}),e.ac=null);try{e.f|=Yr;var d=e.fn,g=d();e.f|=wt;var h=e.deps,m=V?.is_fork;if(Ee!==null){var b;if(m||pr(e,Ie),h!==null&&Ie>0)for(h.length=Ie+Ee.length,b=0;b<Ee.length;b++)h[Ie+b]=Ee[b];else e.deps=h=Ee;if(_n()&&(e.f&Oe)!==0)for(b=Ie;b<h.length;b++)(h[b].reactions??=[]).push(e)}else!m&&h!==null&&Ie<h.length&&(pr(e,Ie),h.length=Ie);if(Wn()&&De!==null&&!Ke&&h!==null&&(e.f&(re|ze|he))===0)for(b=0;b<De.length;b++)Ha(De[b],e);if(a!==null&&a!==e){if(Ut++,a.deps!==null)for(let x=0;x<r;x+=1)a.deps[x].rv=Ut;if(t!==null)for(const x of t)x.rv=Ut;De!==null&&(n===null?n=De:n.push(...De))}return(e.f&xt)!==0&&(e.f^=xt),g}catch(x){return ra(x)}finally{e.f^=Yr,Ee=t,Ie=r,De=n,L=a,Me=i,Kt(s),Ke=l,Vt=f}}function tl(e,t){let r=t.reactions;if(r!==null){var n=be.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}if(r===null&&(t.f&re)!==0&&(Ee===null||!je.call(Ee,t))){var i=t;(i.f&Oe)!==0&&(i.f^=Oe,i.f&=~Lt),en(i),xi(i),pr(i,0)}}function pr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)tl(e,r[n])}function Zt(e){var t=e.f;if((t&Be)===0){te(e,se);var r=R,n=Nr;R=e,Nr=!0;try{(t&(mt|Hr))!==0?ll(e):kn(e),Za(e);var a=Ka(e);e.teardown=typeof a=="function"?a:null,e.wv=ja;var i;$e&&Bo&&(e.f&he)!==0&&e.deps}finally{Nr=n,R=r}}}async function Ft(){await Promise.resolve(),q()}function o(e){var t=e.f,r=(t&re)!==0;if(L!==null&&!Ke){var n=R!==null&&(R.f&Be)!==0;if(!n&&(Me===null||!je.call(Me,e))){var a=L.deps;if((L.f&Yr)!==0)e.rv<Ut&&(e.rv=Ut,Ee===null&&a!==null&&a[Ie]===e?Ie++:Ee===null?Ee=[e]:Ee.push(e));else{(L.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[L]:je.call(i,L)||i.push(L)}}}if(St&&Ct.has(e))return Ct.get(e);if(r){var s=e;if(St){var l=s.v;return((s.f&se)===0&&s.reactions!==null||Ya(s))&&(l=ln(s)),Ct.set(s,l),l}var f=(s.f&Oe)===0&&!Ke&&L!==null&&(Nr||(L.f&Oe)!==0),u=(s.f&wt)===0;vr(s)&&(f&&(s.f|=Oe),va(s)),f&&!u&&(pa(s),qa(s))}if(He?.has(e))return He.get(e);if((e.f&xt)!==0)throw e.v;return e.v}function qa(e){if(e.f|=Oe,e.deps!==null)for(const t of e.deps)(t.reactions??=[]).push(e),(t.f&re)!==0&&(t.f&Oe)===0&&(pa(t),qa(t))}function Ya(e){if(e.v===ce)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ct.has(t)||(t.f&re)!==0&&Ya(t))return!0;return!1}function gr(e){var t=Ke;try{return Ke=!0,e()}finally{Ke=t}}function rl(e){R===null&&(L===null&&Do(),Mo()),St&&Po()}function nl(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function qe(e,t){var r=R;r!==null&&(r.f&Ze)!==0&&(e|=Ze);var n={ctx:xe,deps:null,nodes:null,f:e|he|Oe,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null},a=n;if((e&ot)!==0)Wt!==null?Wt.push(n):ft.ensure().schedule(n);else if(t!==null){try{Zt(n)}catch(s){throw de(n),s}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&It)===0&&(a=a.first,(e&mt)!==0&&(e&_t)!==0&&a!==null&&(a.f|=_t))}if(a!==null&&(a.parent=r,r!==null&&nl(a,r),L!==null&&(L.f&re)!==0&&(e&yt)===0)){var i=L;(i.effects??=[]).push(a)}return n}function _n(){return L!==null&&!Ke}function Ur(e){const t=qe(kr,null);return te(t,se),t.teardown=e,t}function Ne(e){rl();var t=R.f,r=!L&&(t&We)!==0&&(t&wt)===0;if(r){var n=xe;(n.e??=[]).push(e)}else return Ga(e)}function Ga(e){return qe(ot|To,e)}function al(e){ft.ensure();const t=qe(yt|It,e);return()=>{de(t)}}function ol(e){ft.ensure();const t=qe(yt|It,e);return(r={})=>new Promise(n=>{r.outro?mr(t,()=>{de(t),n(void 0)}):(de(t),n(void 0))})}function xn(e){return qe(ot,e)}function il(e){return qe(Gr|It,e)}function Vr(e,t=0){return qe(kr|t,e)}function pe(e,t=[],r=[],n=[]){ga(n,t,r,a=>{qe(kr,()=>e(...a.map(o)))})}function br(e,t=0){var r=qe(mt|t,e);return r}function Wa(e,t=0){var r=qe(Hr|t,e);return r}function rt(e){return qe(We|It,e)}function Za(e){var t=e.teardown;if(t!==null){const r=St,n=L;Va(!0),Pe(null);try{t.call(null)}finally{Va(r),Pe(n)}}}function kn(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&Sr(()=>{a.abort(it)});var n=r.next;(r.f&yt)!==0?r.parent=null:de(r,t),r=n}}function ll(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&We)===0&&de(t),t=r}}function de(e,t=!0){var r=!1;(t||(e.f&$o)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Ja(e.nodes.start,e.nodes.end),r=!0),te(e,qr),kn(e,t&&!r),pr(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const i of n)i.stop();Za(e),e.f^=qr,e.f|=Be;var a=e.parent;a!==null&&a.first!==null&&Xa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function Ja(e,t){for(;e!==null;){var r=e===t?null:Qe(e);e.remove(),e=r}}function Xa(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function mr(e,t,r=!0){var n=[];Qa(e,n,!0);var a=()=>{r&&de(e),t&&t()},i=n.length;if(i>0){var s=()=>--i||a();for(var l of n)l.out(s)}else a()}function Qa(e,t,r){if((e.f&Ze)===0){e.f^=Ze;var n=e.nodes&&e.nodes.t;if(n!==null)for(const l of n)(l.is_global||r)&&t.push(l);for(var a=e.first;a!==null;){var i=a.next,s=(a.f&_t)!==0||(a.f&We)!==0&&(e.f&mt)!==0;Qa(a,t,s?r:!1),a=i}}}function sl(e){eo(e,!0)}function eo(e,t){if((e.f&Ze)!==0){e.f^=Ze,(e.f&se)===0&&(te(e,he),ft.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&_t)!==0||(r.f&We)!==0;eo(r,a?t:!1),r=n}var i=e.nodes&&e.nodes.t;if(i!==null)for(const s of i)(s.is_global||t)&&s.in()}}function to(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var a=r===n?null:Qe(r);t.append(r),r=a}}function ro(e){const t={get:r=>cr(t.store)[r],set:(r,n)=>{typeof r=="string"?Object.assign(cr(t.store),{[r]:n}):Object.assign(cr(t.store),r),t.store.set(cr(t.store))},store:Wi(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:ro({}),i18n:ro({}),instances:new Set,plugins:new Set};const cl={ariaLinkLabel:"Visit Altcha.org",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};"$altcha"in globalThis&&globalThis.$altcha.i18n.set("en",cl);const ul="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(ul);var fl=W('<label class="altcha-checkbox"><input/> <svg width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></label>');function no(e,t){lt(t,!0);let r=J(t,"loading"),n=Or(t,["$$slots","$$events","$$legacy","$$host","loading"]);var a={get loading(){return r()},set loading(l){r(l),q()}},i=fl(),s=Z(i);return Lr(s,()=>({type:"checkbox",...n}),void 0,void 0,void 0,void 0,!0),Er(4),K(i),pe(()=>j(i,"data-loading",r())),M(e,i),st(a)}Et(no,{loading:{}},[],[],{mode:"open"});var hl=W('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');function ao(e,t){lt(t,!0);let r=J(t,"loading"),n=Or(t,["$$slots","$$events","$$legacy","$$host","loading"]);var a={get loading(){return r()},set loading(l){r(l),q()}},i=hl(),s=Z(i);return Lr(s,()=>({type:"checkbox",...n}),void 0,void 0,void 0,void 0,!0),Er(2),K(i),pe(()=>j(i,"data-loading",r())),M(e,i),st(a)}Et(ao,{loading:{}},[],[],{mode:"open"});var dl=W('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');function En(e,t){lt(t,!0);let r=J(t,"strings");const n="https://altcha.org";var a={get strings(){return r()},set strings(l){r(l),q()}},i=dl(),s=Z(i);return j(s,"href",n),K(i),pe(()=>j(s,"aria-label",r().ariaLinkLabel)),M(e,i),st(a)}Et(En,{strings:{}},[],[],{mode:"open"});var vl=W('<div class="altcha-footer"><div></div> <!></div>');function Cn(e,t){lt(t,!0);let r=J(t,"logo"),n=J(t,"strings");var a={get logo(){return r()},set logo(u){r(u),q()},get strings(){return n()},set strings(u){n(u),q()}},i=vl(),s=Z(i);ma(s,()=>n().footer,!0),K(s);var l=Q(s,2);{var f=u=>{En(u,{get strings(){return n()}})};ie(l,u=>{r()&&u(f)})}return K(i),M(e,i),st(a)}Et(Cn,{logo:{},strings:{}},[],[],{mode:"open"});var pl=W('<label class="altcha-switch"><input/> <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></label>');function oo(e,t){lt(t,!0);let r=J(t,"loading"),n=Or(t,["$$slots","$$events","$$legacy","$$host","loading"]);var a={get loading(){return r()},set loading(l){r(l),q()}},i=pl(),s=Z(i);return Lr(s,()=>({type:"checkbox",...n}),void 0,void 0,void 0,void 0,!0),Er(2),K(i),pe(()=>j(i,"data-loading",r())),M(e,i),st(a)}Et(oo,{loading:{}},[],[],{mode:"open"});var ve=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))(ve||{}),F=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(F||{}),gl=W('<div class="altcha-code-challenge-title"> </div>'),bl=W('<div class="altcha-spinner"></div>'),ml=nn('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),yl=nn('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),wl=nn('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),_l=W('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),xl=W('<audio hidden="" autoplay=""></audio>'),kl=W('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');function io(e,t){lt(t,!0);let r=J(t,"audioUrl"),n=J(t,"codeChallenge"),a=J(t,"config"),i=J(t,"imageUrl"),s=J(t,"onCancel"),l=J(t,"onReload"),f=J(t,"onSubmit"),u=J(t,"strings"),d=D(void 0),g=D(void 0),h=D(void 0),m=D(!1),b=D(""),x=D(!1);pn(()=>(a().disableAutoFocus||Ft().then(()=>{o(h)?.focus()}),()=>{o(g)&&(o(g).pause(),y(g,void 0))}));function $(){y(d,ve.PAUSED,!0)}function I(S){y(d,ve.ERROR,!0)}function le(){y(d,ve.READY,!0)}function ne(){y(d,ve.LOADING,!0)}function O(){y(d,ve.PLAYING,!0)}function Ce(){y(d,ve.PAUSED,!0)}function k(S){S.code==="Space"?(S.preventDefault(),S.stopPropagation(),X()):S.code==="Escape"&&(S.preventDefault(),S.stopPropagation(),s()?.())}function N(S){S.preventDefault(),S.stopPropagation(),f()?.(o(b))}function X(){o(g)?o(d)===ve.LOADING||(o(g).paused?(r()&&o(g).src!==r()&&(o(g).src=r()),o(g).currentTime=0,o(g).play()):o(g).pause()):(y(x,!0),requestAnimationFrame(()=>{o(g)&&r()&&(o(g).src=r(),o(g).play())}))}var B={get audioUrl(){return r()},set audioUrl(S){r(S),q()},get codeChallenge(){return n()},set codeChallenge(S){n(S),q()},get config(){return a()},set config(S){a(S),q()},get imageUrl(){return i()},set imageUrl(S){i(S),q()},get onCancel(){return s()},set onCancel(S){s(S),q()},get onReload(){return l()},set onReload(S){l(S),q()},get onSubmit(){return f()},set onSubmit(S){f(S),q()},get strings(){return u()},set strings(S){u(S),q()}},U=kl(),Ue=Z(U),ge=Z(Ue);{var Ve=S=>{var ee=gl(),vt=Z(ee,!0);K(ee),pe(()=>et(vt,u().verificationRequired)),M(S,ee)};ie(ge,S=>{a().codeChallengeDisplay!=="standard"&&S(Ve)})}var Y=Q(ge,2),dt=Z(Y,!0);K(Y);var E=Q(Y,2),ae=Q(E,2),p=Z(ae);fn(p),p.disabled=o(m),Yt(p,S=>y(h,S),()=>o(h));var Jt=Q(p,2);{var An=S=>{var ee=_l(),vt=Z(ee);{var In=_e=>{var pt=bl();M(_e,pt)},Ln=_e=>{var pt=ml();M(_e,pt)},On=_e=>{var pt=yl();M(_e,pt)},jr=_e=>{var pt=wl();M(_e,pt)};ie(vt,_e=>{o(d)===ve.LOADING?_e(In):o(d)===ve.ERROR?_e(Ln,1):o(d)===ve.PLAYING?_e(On,2):_e(jr,-1)})}K(ee),pe(()=>{j(ee,"title",u().getAudioChallenge),ee.disabled=o(d)===ve.LOADING||o(d)===ve.ERROR,j(ee,"aria-label",o(d)===ve.LOADING?u().loading:u().getAudioChallenge)}),Nt("click",ee,()=>X()),M(S,ee)};ie(Jt,S=>{n().audio&&S(An)})}var Ye=Q(Jt,2);K(ae);var Fr=Q(ae,2),jt=Z(Fr),yr=Z(jt,!0);K(jt);var $t=Q(jt,2),wr=Z($t,!0);K($t),K(Fr),K(Ue);var Se=Q(Ue,2);{var Rn=S=>{var ee=xl();Yt(ee,vt=>y(g,vt),()=>o(g)),ke("error",ee,I),ke("loadstart",ee,ne),ke("canplay",ee,le),ke("pause",ee,Ce),ke("playing",ee,O),ke("ended",ee,$),M(S,ee)};ie(Se,S=>{o(x)&&S(Rn)})}return K(U),pe(()=>{et(dt,u().enterCodeFromImage),j(E,"src",i()),j(p,"minlength",n().length||1),j(p,"maxlength",n().length),j(p,"placeholder",u().enterCode),j(p,"aria-label",o(d)===ve.LOADING?u().loading:o(d)===ve.PLAYING?"":u().enterCodeAria),j(p,"aria-live",o(d)?"assertive":"polite"),j(p,"aria-busy",o(d)===ve.LOADING),j(Ye,"title",u().reload),j(Ye,"aria-label",u().reload),j(jt,"aria-label",u().verify),et(yr,u().verify),j($t,"aria-label",u().cancel),et(wr,u().cancel)}),ke("submit",Ue,N,!0),Nt("keydown",p,k),Hi(p,()=>o(b),S=>y(b,S)),Nt("click",Ye,()=>l()?.()),Nt("click",$t,()=>s()?.()),M(e,U),st(B)}$r(["keydown","click"]),Et(io,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});var El=W('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),Cl=W('<div class="altcha-popover-arrow"></div>'),Sl=W('<div role="button" class="altcha-popover-close">&times;</div>'),$l=W('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);function Sn(e,t){lt(t,!0);let r=J(t,"anchor"),n=J(t,"children"),a=J(t,"display",7,"standard"),i=J(t,"backdrop",7,!1),s=J(t,"onClickOutside"),l=J(t,"onClickOutsideDelay",7,600),f=J(t,"onClose"),u=J(t,"placement",7,"auto"),d=J(t,"variant",7,"neutral"),g=Or(t,["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","variant"]),h=D(void 0),m=D(void 0),b=D(!1),x=D(0);Ne(()=>{u()!=="auto"&&y(b,u()==="top")}),pn(()=>{const E=a()==="bottomsheet"||a()==="overlay";return E&&(o(m)&&document.body.append(o(m)),o(h)&&document.body.append(o(h))),O(),Ft().then(()=>{y(x,Date.now(),!0)}),()=>{E&&(o(m)&&document.body.removeChild(o(m)),o(h)&&document.body.removeChild(o(h)))}});function $(){f()?.()}function I(E){const ae=E.target;!o(h)?.contains(ae)&&o(x)&&o(x)+l()<Date.now()&&s()?.()}function le(){O()}function ne(){O()}function O(){if(r()&&u()==="auto"&&o(h)){const E=r().getBoundingClientRect(),p=document.documentElement.clientHeight-(E.top+E.height)<o(h).clientHeight;o(b)!==p&&y(b,p)}}var Ce={get anchor(){return r()},set anchor(E){r(E),q()},get children(){return n()},set children(E){n(E),q()},get display(){return a()},set display(E="standard"){a(E),q()},get backdrop(){return i()},set backdrop(E=!1){i(E),q()},get onClickOutside(){return s()},set onClickOutside(E){s(E),q()},get onClickOutsideDelay(){return l()},set onClickOutsideDelay(E=600){l(E),q()},get onClose(){return f()},set onClose(E){f(E),q()},get placement(){return u()},set placement(E="auto"){u(E),q()},get variant(){return d()},set variant(E="neutral"){d(E),q()}},k=$l();ke("click",Dt,I),ke("resize",Dt,le),ke("scroll",Dt,ne);var N=qt(k);{var X=E=>{var ae=El();Yt(ae,p=>y(m,p),()=>o(m)),M(E,ae)};ie(N,E=>{i()&&E(X)})}var B=Q(N,2);Lr(B,()=>({...g,class:`altcha-popover ${(t.class||"")??""}`,"data-popover":!0,"data-variant":d(),"data-top":o(b),"data-display":a()}));var U=Z(B);{var Ue=E=>{var ae=Cl();M(E,ae)};ie(U,E=>{a()==="standard"&&E(Ue)})}var ge=Q(U,2);{var Ve=E=>{var ae=Sl();Nt("click",ae,$),M(E,ae)};ie(ge,E=>{a()!=="standard"&&E(Ve)})}var Y=Q(ge,2),dt=Z(Y);return Si(dt,()=>n()??me),K(Y),K(B),Yt(B,E=>y(h,E),()=>o(h)),M(e,k),st(Ce)}$r(["click"]),Et(Sn,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},variant:{}},[],[],{mode:"open"});function Tl(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function Al(e,t="altcha-css"){if(typeof document<"u"&&document&&!document.getElementById(t)){const r=document.createElement("style");r.id=t,r.textContent=e,document.head.appendChild(r)}}async function lo(e){const{challenge:t,concurrency:r=navigator.hardwareConcurrency,controller:n=new AbortController,createWorker:a,onOutOfMemory:i=h=>h>1?Math.floor(h/2):0,counterMode:s,timeout:l=9e4}=e,f=Math.min(16,Math.max(1,r)),u=[],d=()=>{for(const h of u)h.terminate()};for(let h=0;h<f;h++)u.push(await a(t.parameters.algorithm));let g=null;try{g=await Promise.race(u.map((h,m)=>(n.signal.addEventListener("abort",()=>{h.postMessage({type:"abort"})}),new Promise((b,x)=>{h.addEventListener("error",$=>{x($)}),h.addEventListener("message",$=>{if($.data){for(const I of u)I!==h&&I.postMessage({type:"abort"});if($.data.error)return x(new Error($.data.error))}b($.data)}),h.postMessage({challenge:t,counterMode:s,counterStart:m,counterStep:f,timeout:l,type:"work"})}))))}catch(h){if(h instanceof Error&&!!h?.message?.includes("Out of memory")&&i){d();const b=i(f);if(b)return lo({...e,challenge:t,controller:n,concurrency:b,createWorker:a})}throw h}finally{d()}return n.signal.aborted?null:g||null}class Rl{TAG_CODES={INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10};maxSamples;sampleInterval;target;focusStartTime=0;focusInteraction=0;focusInteractionTimer=null;lastPointerSample=0;lastTouchSample=0;lastScrollSample=0;pendingPointer=null;pendingTouch=null;focus=[];pointer=[];scroll=[];touch=[];constructor(t={}){const{maxSamples:r=60,sampleInterval:n=50,target:a=window}=t;this.maxSamples=r,this.sampleInterval=n,this.target=a,this.attach()}destroy(){const t={capture:!0};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){const t={passive:!0,capture:!0};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t)}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples)}onFocus=t=>{if(this.focusInteraction===2)return;const r=t.target;if(!(r instanceof Element))return;const n=performance.now();this.focusStartTime===0&&(this.focusStartTime=n),this.focus.push([Math.round(n-this.focusStartTime),r.tabIndex,this.TAG_CODES[r.tagName]??0,this.focusInteraction?1:0]),this.evict(this.focus)};onInteraction=t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)};onPointer=t=>{if(t.pointerType==="touch")return;const r=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(r)],r-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=r,this.pendingPointer=null,this.evict(this.pointer))};onScroll=()=>{const t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))};onTouchMove=t=>{const r=t.timeStamp||performance.now(),n=t.touches[0];n&&(this.pendingTouch=[Math.round(n.clientX),Math.round(n.clientY),Math.round(r),Math.round(n.force*1e3)/1e3,Math.round(n.radiusX||0),Math.round(n.radiusY||0)],r-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=r,this.pendingTouch=null,this.evict(this.touch)))}}var Il=W('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),Ll=W('<div class="altcha-overlay-content"></div>'),Ol=W('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),Pl=W('<div class="altcha-floating-arrow"></div>'),Ml=W('<input type="hidden"/>'),Dl=W('<div class="altcha-error">Secure context (HTTPS) required.</div>'),Nl=W('<div class="altcha-error"> </div>'),Ul=W('<div class="altcha-error"> </div>'),Vl=W("<!> <!>",1),Fl=W('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);function jl(e,t){lt(t,!0);const r=()=>Ra(d,"$altchaDefaults",a),n=()=>Ra(b,"$altchaI18nStore",a),[a,i]=Zi(),s='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',l='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',f=["ar","fa","he","ur"],{isSecureContext:u}=globalThis,{store:d}=globalThis.$altcha.defaults,g=navigator.hardwareConcurrency||2,h=navigator.deviceMemory||0,m=h&&h<=4?Math.min(4,g):g,b=globalThis.$altcha.i18n.store,x=t.$$host,$=(c,v)=>{Ft().then(()=>{x?.dispatchEvent(new CustomEvent(c,{detail:v}))})};let I=null,le=D(ut(new URL(location.origin))),ne=D(!1),O=D(null),Ce=D(null),k=D(ut(F.UNVERIFIED)),N=D(void 0),X=D(void 0),B=D(null),U=D(void 0),Ue=D(null),ge=D(null),Ve=D(null),Y=D(null),dt=D(ut([])),E=D(ut({})),ae=D(!0);const p=we(()=>({fetch:(c,v)=>fetch(c,v),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:!1,disableAutoFocus:!1,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:!1,floatingPlacement:"auto",hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:"",mockError:!1,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:m,...r(),...o(E)})),Jt=we(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),An=we(()=>Bl(o(p).type)),Ye=we(()=>o(p).auto),Fr=we(()=>o(k)===F.VERIFYING),jt=we(()=>!o(p).hideFooter),yr=we(()=>!o(p).hideLogo&&o(p).display!=="bar"),$t=we(()=>Hl(n(),[o(p).language,document.documentElement.lang,...navigator.languages])),wr=we(()=>f.includes(o($t).language)?"rtl":void 0),Se=we(()=>({...o($t).strings})),Rn=we(()=>o(O)?.audio?.match(/^(https?:)?\//)?zr(o(O).audio,o(le),{language:o(p).audioChallengeLanguage||o($t).language}).toString():o(O)?.audio),S=we(()=>o(O)?.image?.match(/^(https?:)?\//)?zr(o(O).image,o(le)):o(O)?.image);Ne(()=>{_r({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),Ne(()=>{if(t.configuration)try{_r(JSON.parse(t.configuration))}catch{H("unable to parse the `configuration` attribute (JSON expected)")}}),Ne(()=>{Mn(o(p).display)}),Ne(()=>{o(ne)&&o(k)===F.VERIFYING&&y(ne,!1)}),Ne(()=>{!o(ne)&&o(k)===F.VERIFIED&&y(ne,!0)}),Ne(()=>{if(!o(ne)){const c=Pn();c&&c.checked&&(c.checked=!1)}}),Ne(()=>{o(k)===F.VERIFIED&&Pn()?.setCustomValidity("")}),Ne(()=>{if(o(Ye)==="onload"){const c=setTimeout(()=>{Xt()},1);return()=>{c&&clearTimeout(c)}}}),Ne(()=>{o(ge)&&H("error:",o(ge))}),Ne(()=>{o(Y)&&o(p).setCookie&&as(o(Y),o(p).setCookie)}),pn(()=>(H("mounted","3.0.2"),x&&globalThis.$altcha.instances.add(x),y(B,o(U)?.closest("form"),!0),o(B)?.addEventListener("reset",vo),o(B)?.addEventListener("submit",po,{capture:!0}),o(B)?.addEventListener("focusin",ho),ee(),o(p).humanInteractionSignature&&(H("human interaction signature enabled"),I=new Rl),$("load"),u||H("secure context (HTTPS) required"),()=>{In(),x&&globalThis.$altcha.instances.delete(x),o(Ve)&&clearTimeout(o(Ve)),o(B)?.removeEventListener("reset",vo),o(B)?.removeEventListener("submit",po,{capture:!0}),o(B)?.removeEventListener("focusin",ho),I?.destroy()}));function ee(){y(dt,[...globalThis.$altcha.plugins].map(c=>new c(x)),!0),H("activating plugins",o(dt).map(c=>c.constructor.name));for(const c of o(dt))c.activate()}async function vt(c,...v){let w;for(const _ of o(dt))w=await _[c].call(_,...v);return w}function In(){for(const c of o(dt))c.destroy()}function Ln(c){const[v,w]=c.salt.split("?"),_={};if(w)try{Object.assign(_,Object.fromEntries(new URLSearchParams(w).entries()))}catch{}const T={codeChallenge:c.codeChallenge,parameters:{algorithm:c.algorithm,cost:1,data:_,expiresAt:_?.expires?parseInt(_.expires,10):void 0,keyLength:c.algorithm==="SHA-512"?64:c.algorithm==="SHA-384"?48:32,nonce:Tl(new TextEncoder().encode(c.salt)),keyPrefix:c.challenge,salt:""},signature:c.signature};return Object.defineProperties(T,{_originalSalt:{enumerable:!1,value:c.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),T}function On(c,v){return{algorithm:c.parameters.algorithm,challenge:c.parameters.keyPrefix,number:v.counter,salt:"_originalSalt"in c?c._originalSalt:c.parameters.nonce,signature:c.signature,took:v.time||0}}async function jr(c){await new Promise(v=>setTimeout(v,c))}async function _e(c=o(p).challenge,v){const w=await vt("onFetchChallenge",c);let _=null;if(w!==void 0)return w;if(typeof c=="string")if(c.match(/^(https?:)?\//)){H("fetching challenge from",v?.method||"GET",c),y(le,new URL(c,location.origin),!0);const T=await o(p).fetch(c,{credentials:o(p).credentials||void 0,...v});await bo(T);const C=T.headers.get("x-altcha-config");C&&ts(C);const z=await T.json();if(z&&"his"in z&&z.his){if(H("requested HIS"),!I)throw new Error("Server requested HIS data but collector is disabled.");return _e(zr(z.his.url,o(le)),{body:JSON.stringify({his:I.export()}),headers:{"content-type":"application/json"},method:"POST"})}z&&"hisResult"in z&&z.hisResult&&H("HIS result",z.hisResult),_=z}else{H("parsing JSON challenge");try{_=JSON.parse(c)}catch{throw new Error("Unable to parse JSON challenge.")}}else if(c&&typeof c=="object")try{_=JSON.parse(JSON.stringify(c))}catch{throw new Error("Unable to parse JSON challenge.")}if(pt(_)&&(_=Ln(_)),!zl(_))throw new Error("Challenge validation failed.");return _}function pt(c){return typeof c=="object"&&"challenge"in c}function zl(c){return!!c&&typeof c=="object"&&"parameters"in c&&!!c.parameters&&typeof c.parameters=="object"&&"algorithm"in c.parameters&&"nonce"in c.parameters&&"salt"in c.parameters&&"keyPrefix"in c.parameters}function Pn(){return document.getElementById(o(Jt))}function Bl(c){switch(c){case"checkbox":return no;case"switch":return oo;case"native":default:return ao}}function Hl(c,v){const w=Object.keys(c).map(T=>T.toLowerCase());let _=v.reduce((T,C)=>(C=C.toLowerCase(),T||(c[C]?C:null)||w.find(z=>C.split("-")[0]===z.split("-")[0])||null),null);return c[_||""]||(_="en"),{language:_,strings:c[_]}}function Kl(c){switch(c){case"bar":return o(p).barPlacement||"bottom";case"floating":return o(p).floatingPlacement||"auto";default:return}}function ql(c){return[...o(B)?.querySelectorAll(s)||[]].reduce((w,_)=>{const T=_.name,C=_.value;return T&&C&&(w[T]=/\n/.test(C)?C.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):C),w},{})}function Yl(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function zr(c,v,w){const _=new URL(c,v);if(_.search||(_.search=v.search),w)for(const T in w)w[T]!==void 0&&w[T]!==null&&_.searchParams.set(T,w[T]);return _.toString()}function Gl(c){!o(ne)&&c.currentTarget.checked?(c.preventDefault(),c.currentTarget.checked=!1,o(k)!==F.VERIFYING&&Xt()):c.currentTarget.checked||(c.preventDefault(),Ge())}function Wl(c){o(k)===F.VERIFYING?c.currentTarget.setCustomValidity(o(Se).waitAlert):o(p).validationMessage&&c.currentTarget.setCustomValidity(o(p).validationMessage)}function Zl(){o(Ce)&&o(Ce).abort(),Mn(o(p).display),Ge()}function Jl(){Br()}function Xl(c){const v=c.target;o(p).display==="floating"&&v&&!x?.contains(v)&&!v.hasAttribute("data-backdrop")&&!v.closest("[data-popover]")&&o(k)!==F.VERIFIED&&!o(p).floatingPersist&&Dn()}function ho(c){o(Ye)==="onfocus"&&o(k)===F.UNVERIFIED&&Xt()}function vo(){o(Ce)&&o(Ce).abort(),Mn(o(p).display),Ge()}function po(c){y(Ue,c.submitter,!0),o(Ye)==="onsubmit"&&o(k)===F.UNVERIFIED&&(c.preventDefault(),c.stopPropagation(),Nn(),Xt().then(v=>{v&&!o(O)&&Ft().then(()=>{go(o(Ue))})}))}function Ql(){Ge()}function es(){Br()}function ts(c){try{const v=JSON.parse(c);v&&typeof v=="object"&&_r({serverVerificationFields:v?.sentinel?.fields,serverVerificationTimeZone:v?.sentinel?.timeZone,verifyUrl:v.verifyurl,...v})}catch(v){H("unable to configure from x-altcha-config header",v)}}function rs(c=20){if(!o(U))return;const v=o(p).floatingPlacement;if(!o(X)&&(y(X,(o(p).floatingAnchor instanceof HTMLElement?o(p).floatingAnchor:o(p).floatingAnchor?document.querySelector(o(p).floatingAnchor):o(B)?.querySelector(l))||o(B),!0),!o(X))){H("unable to find floating anchor element");return}const w=parseInt(o(p).floatingOffset,10)||12,_=o(X).getBoundingClientRect(),T=o(U).getBoundingClientRect(),C=document.documentElement.clientHeight,z=document.documentElement.clientWidth,Le=!v||v==="auto"?_.bottom+T.height+w+c>C:v==="top",G=Math.max(c,Math.min(z-c-T.width,_.left+_.width/2-T.width/2));if(o(U).style.setProperty("--altcha-floating-left",`${G}px`),o(U).style.setProperty("--altcha-floating-top",Le?`${_.top-(T.height+w)}px`:`${_.bottom+w}px`),o(U).setAttribute("data-floating-position",Le?"top":"bottom"),o(N)){const oe=o(N).getBoundingClientRect();o(N).style.left=_.left-G+_.width/2-oe.width/2+"px"}}async function ns(c,v){const w=await vt("onRequestServerVerification",c,v);if(w!==void 0)return w;if(H("requesting server verification from",o(p).verifyUrl),!o(p).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");const _=await o(p).fetch(zr(o(p).verifyUrl,o(le)),{body:JSON.stringify({code:v,fields:o(p).serverVerificationFields?ql():void 0,payload:c,timeZone:o(p).serverVerificationTimeZone?Yl():void 0}),credentials:o(p).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});await bo(_);const T=await _.json();return T&&typeof T=="object"&&"payload"in T&&T.payload&&$("serververification",T),T}function go(c){o(B)&&"requestSubmit"in o(B)?o(B).requestSubmit(c):o(B)?.reportValidity()&&(c?c.click():o(B).submit())}function as(c,v={}){const{domain:w,name:_=o(p).name,maxAge:T,path:C,sameSite:z,secure:Le}=v;let G=`${encodeURIComponent(_)}=${encodeURIComponent(c)}`;w&&(G+=`; Domain=${w}`),T!=null&&(G+=`; Max-Age=${T}`),C&&(G+=`; Path=${C}`),z&&(G+=`; SameSite=${z}`),Le&&(G+="; Secure"),document.cookie=G}function Mn(c){switch(c){case"bar":case"floating":case"overlay":Dn(),(!o(Ye)||o(Ye)==="off")&&(o(E).auto="onsubmit");break;case"standard":Nn()}}function os(c){o(Ve)&&clearTimeout(o(Ve));const v=()=>{o(k)!==F.UNVERIFIED?(y(ne,!1),Fe(F.EXPIRED)):Ge(),$("expired")},w=c*1e3-Date.now();w>=1?y(Ve,setTimeout(v,w),!0):v()}async function bo(c){if(c.status>=400){if(c.headers.get("content-type")?.includes("/json")){let w;try{w=await c.json()}catch{}if(w&&"error"in w)throw new Error(`Server responded with ${c.status} - ${w.error}`)}throw new Error(`Server responded with ${c.status}.`)}const v=c.headers.get("content-type");if(!v||!v.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${v}.`)}async function mo(c){if(!o(Y)){Fe(F.ERROR,"Cannot verify code challenge without PoW payload.");return}Fe(F.VERIFYING);let v=null;if(o(p).verifyUrl)v=await ns(o(Y),c);else if(o(p).verifyFunction)v=await o(p).verifyFunction(o(Y),c);else{Fe(F.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}v?.payload&&(y(Y,v.payload,!0),H("server payload",o(Y))),v?.verified===!0?(H("verified"),Fe(F.VERIFIED),$("verified",{payload:o(Y)}),o(Ye)==="onsubmit"&&Ft().then(()=>{go(o(Ue))})):Fe(F.ERROR,v?.reason||"Verification failed."),o(p).disableAutoFocus||Pn()?.focus()}function _r(c){Object.assign(o(E),{...Object.fromEntries(Object.entries(c).filter(([v,w])=>w!==void 0))})}function is(){return{...o(p)}}function ls(){return o(k)}function Dn(){y(ae,!1)}function H(...c){(o(p).debug||c.some(v=>v instanceof Error))&&console[c[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${o(p).name}]`,...c)}function Ge(c=F.UNVERIFIED,v=null){y(ne,!1),y(ge,v,!0),y(Y,null),o(Ve)&&(clearTimeout(o(Ve)),y(Ve,null)),Fe(c)}function Fe(c,v=null){y(k,c,!0),y(ge,v,!0),$("statechange",{payload:o(Y),state:o(k)})}function Nn(){y(ae,!0),Ft().then(()=>{Br()})}function Br(){switch(o(p).display){case"floating":return rs()}}async function Xt(c={}){const{concurrency:v=Math.max(1,o(p).workers),controller:w=new AbortController,minDuration:_=o(p).minDuration}=c,T=performance.now();let C=null,z=null,Le=!1;const G=await vt("onVerify",c);if(G!==void 0)return G;y(Ce,w,!0),Ge(F.VERIFYING);try{if(!u)throw new Error("Secure context (HTTPS) required.");if(o(p).mockError)throw new Error("Mock error.");if(o(p).test)return H("running test mode with null challenge"),await jr(Math.max(0,_-(performance.now()-T))),y(Y,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),H("verified"),Fe(F.VERIFIED),$("vefified",{payload:o(Y)}),{payload:o(Y)};if(C=await _e(),!C)throw new Error("Failed to fetch challenge.");H("challenge",C),"configuration"in C&&(H("re-configuring from challenge",C.configuration),_r(C.configuration)),C.parameters.expiresAt&&os(C.parameters.expiresAt),Le="_version"in C&&C._version===1;const oe=globalThis.$altcha.algorithms.get(C.parameters.algorithm);if(!oe)throw new Error(`Unsupported algorithm ${C.parameters.algorithm}.`);if(z=await lo({challenge:C,concurrency:v,controller:w,createWorker:oe,counterMode:Le?"string":"uint32",onOutOfMemory:Tt=>{if(H("out of memory error received"),$("outofmemory"),o(p).retryOnOutOfMemoryError&&Tt>1){const At=Math.floor(Tt/2);return H(`retrying with ${At} workers...`),At}},timeout:o(p).timeout}),o(Ce)?.signal.aborted)return Ge(),null;if(!z)throw new Error("Failed to find solution.");H("solution",z),await jr(Math.max(0,_-(performance.now()-T))),y(O,C.codeChallenge||o(p).codeChallenge||null,!0),Le?y(Y,btoa(JSON.stringify(On(C,z))),!0):y(Y,btoa(JSON.stringify({challenge:{parameters:C.parameters,signature:C.signature},solution:z})),!0),o(O)?(H("requesting code verification"),Fe(F.CODE),$("codechallenge",{codeChallenge:o(O)})):o(p).verifyUrl?await mo():(H("verified"),Fe(F.VERIFIED),$("vefified",{payload:o(Y)}))}catch(oe){return H("verification failed",oe),Fe(F.ERROR,String(oe)),null}finally{y(Ce,null)}return{challenge:C,payload:o(Y),solution:z}}var ss={configure:_r,getConfiguration:is,getState:ls,hide:Dn,log:H,reset:Ge,setState:Fe,show:Nn,updateUI:Br,verify:Xt},yo=Fl();ke("scroll",Jr,Jl),ke("click",Jr,Xl),ke("pageshow",Dt,Ql),ke("resize",Dt,es);var wo=qt(yo);{var cs=c=>{var v=Il();M(c,v)};ie(wo,c=>{o(p).display==="overlay"&&o(ae)&&c(cs)})}var nt=Q(wo,2),_o=Z(nt);{var us=c=>{var v=Ol(),w=qt(v),_=Q(w,2);{var T=C=>{var z=Ll();ma(z,()=>document.querySelector(o(p).overlayContent)?.innerHTML,!0),K(z),M(C,z)};ie(_,C=>{o(p).overlayContent&&C(T)})}Nt("click",w,Zl),M(c,v)};ie(_o,c=>{o(p).display==="overlay"&&o(ae)&&c(us)})}var Un=Q(_o,2),Vn=Z(Un),Fn=Z(Vn),xo=Z(Fn);{let c=we(()=>o(p).display==="standard"&&o(Ye)!=="onsubmit"||o(k)===F.VERIFYING);$i(xo,()=>o(An),(v,w)=>{w(v,{get id(){return o(Jt)},name:"",get required(){return o(c)},get loading(){return o(Fr)},get checked(){return o(ne)},onchange:Gl,oninvalid:Wl})})}var jn=Q(xo,2),fs=Z(jn);{var hs=c=>{var v=Tr();pe(()=>et(v,o(Se).verificationRequired)),M(c,v)},ds=c=>{var v=Tr();pe(()=>et(v,o(Se).verifying)),M(c,v)},vs=c=>{var v=Tr();pe(()=>et(v,o(Se).verified)),M(c,v)},ps=c=>{var v=Tr();pe(()=>et(v,o(Se).label)),M(c,v)};ie(fs,c=>{o(k)===F.CODE&&o(O)?c(hs):o(k)===F.VERIFYING?c(ds,1):o(k)===F.VERIFIED?c(vs,2):c(ps,-1)})}K(jn),K(Fn);var gs=Q(Fn,2);{var bs=c=>{En(c,{get strings(){return o(Se)}})};ie(gs,c=>{o(yr)&&c(bs)})}K(Vn);var ko=Q(Vn,2);{var ms=c=>{{let v=we(()=>o(p).display==="bar"&&o(yr));Cn(c,{get logo(){return o(v)},get strings(){return o(Se)}})}};ie(ko,c=>{o(jt)&&c(ms)})}var Eo=Q(ko,2);{var ys=c=>{var v=Pl();Yt(v,w=>y(N,w),()=>o(N)),M(c,v)};ie(Eo,c=>{o(p).display==="floating"&&c(ys)})}var ws=Q(Eo,2);{var _s=c=>{var v=Ml();fn(v),pe(()=>{j(v,"name",o(p).name),ji(v,o(Y))}),M(c,v)};ie(ws,c=>{o(p).setCookie||c(_s)})}K(Un);var xs=Q(Un,2);{var ks=c=>{Sn(c,{get anchor(){return o(U)},onClickOutside:()=>{u&&Ge()},get placement(){return o(p).popoverPlacement},role:"alert",variant:"error",get dir(){return o(wr)},children:(v,w)=>{var _=fa(),T=qt(_);{var C=G=>{var oe=Dl();M(G,oe)},z=G=>{var oe=Nl(),Tt=Z(oe,!0);K(oe),pe(()=>et(Tt,o(Se).expired)),M(G,oe)},Le=G=>{var oe=Ul(),Tt=Z(oe,!0);K(oe),pe(()=>{j(oe,"title",o(ge)),et(Tt,o(Se).error)}),M(G,oe)};ie(T,G=>{!o(ge)&&!u?G(C):!o(ge)&&o(k)===F.EXPIRED?G(z,1):G(Le,-1)})}M(v,_)},$$slots:{default:!0}})},Es=c=>{var v=fa(),w=qt(v);Ci(w,()=>o(O),_=>{{let T=we(()=>o(p).codeChallengeDisplay!=="standard");Sn(_,{get anchor(){return o(U)},get backdrop(){return o(T)},get display(){return o(p).codeChallengeDisplay},onClose:()=>{Ge()},get placement(){return o(p).popoverPlacement},role:"dialog",get"aria-label"(){return o(Se).verificationRequired},get dir(){return o(wr)},children:(C,z)=>{var Le=Vl(),G=qt(Le);io(G,{get audioUrl(){return o(Rn)},get imageUrl(){return o(S)},onCancel:()=>Ge(),onReload:()=>Xt(),onSubmit:At=>mo(At),get codeChallenge(){return o(O)},get config(){return o(p)},get strings(){return o(Se)}});var oe=Q(G,2);{var Tt=At=>{Cn(At,{get logo(){return o(yr)},get strings(){return o(Se)}})};ie(oe,At=>{o(jt)&&o(p).codeChallengeDisplay!=="standard"&&At(Tt)})}M(C,Le)},$$slots:{default:!0}})}}),M(c,v)};ie(xs,c=>{o(ge)||o(k)===F.EXPIRED||!u?c(ks):o(O)&&o(k)===F.CODE&&c(Es,1)})}K(nt),Yt(nt,c=>y(U,c),()=>o(U)),pe(c=>{j(nt,"data-state",o(k)),j(nt,"data-display",o(p).display||void 0),j(nt,"data-placement",c),j(nt,"data-visible",o(ae)||void 0),j(nt,"dir",o(wr)),j(jn,"for",o(Jt)),nt.dir=nt.dir},[()=>Kl(o(p).display)]),M(e,yo);var Cs=st(ss);return i(),Cs}$r(["click"]),typeof window<"u"&&window.customElements&&customElements.define("altcha-widget",Et(jl,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));const so=`(function() {
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
`,co=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",so],{type:"text/javascript;charset=utf-8"});function $n(e){let t;try{if(t=co&&(self.URL||self.webkitURL).createObjectURL(co),!t)throw"";const r=new Worker(t,{name:e?.name});return r.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),r}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(so),{name:e?.name})}}const uo=`(function() {
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
`,fo=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",uo],{type:"text/javascript;charset=utf-8"});function Tn(e){let t;try{if(t=fo&&(self.URL||self.webkitURL).createObjectURL(fo),!t)throw"";const r=new Worker(t,{name:e?.name});return r.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),r}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(uo),{name:e?.name})}}return Al(`:root {
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
}`),$altcha.algorithms.set("SHA-256",()=>new Tn),$altcha.algorithms.set("SHA-384",()=>new Tn),$altcha.algorithms.set("SHA-512",()=>new Tn),$altcha.algorithms.set("PBKDF2/SHA-256",()=>new $n),$altcha.algorithms.set("PBKDF2/SHA-384",()=>new $n),$altcha.algorithms.set("PBKDF2/SHA-512",()=>new $n),Co}Ss();const $s={ariaLinkLabel:"Bezoek Altcha.org",enterCode:"Voer code in",enterCodeAria:"Voer de code in die je hoort. Druk op Spatie om de audio af te spelen.",error:"Verificatie mislukt. Probeer het later opnieuw.",expired:"Verificatie verlopen. Probeer het opnieuw.",footer:'Beschermd door <a href="https://altcha.org/" target="_blank" aria-label="Bezoek Altcha.org">ALTCHA</a>',getAudioChallenge:"Audio-uitdaging ontvangen",label:"Ik ben geen robot",loading:"Laden...",reload:"Herladen",verify:"Verifiëren",verificationRequired:"Verificatie vereist!",verified:"Geverifieerd",verifying:"Bezig met verifiëren...",waitAlert:"Bezig met verifiëren... even geduld a.u.b.",cancel:"Annuleren",enterCodeFromImage:"Om door te gaan, voert u de code uit de onderstaande afbeelding in."};"$altcha"in globalThis&&globalThis.$altcha.i18n.set("nl",$s);document.querySelectorAll("[data-js-timestamp]").forEach($e=>{$e instanceof HTMLInputElement&&($e.value=String(Math.floor(Date.now()/1e3)))});const zt=document.querySelector("[data-news-archive]");if(zt){const $e=new URLSearchParams(window.location.search),Te=($e.get("s")||"").trim().toLowerCase(),be=($e.get("archief")||"").trim(),je=Array.from(zt.querySelectorAll("[data-archive-item]")),Rt=zt.querySelector("[data-archive-search]"),ue=Array.from(zt.querySelectorAll("[data-archive-link]")),gt=zt.querySelector("[data-archive-toolbar]"),at=zt.querySelector("[data-archive-results]"),Qt=zt.querySelector("[data-archive-clear]");Rt&&(Rt.value=$e.get("s")||"");const xr=Te.length>0||be.length>0;let Bt=0;if(je.forEach(fe=>{const bt=(fe.dataset.archiveTitle||"").toLowerCase(),me=(fe.dataset.archiveExcerpt||"").toLowerCase(),er=fe.dataset.archiveMonth||"",tr=Te.length===0||bt.includes(Te)||me.includes(Te),re=be.length===0||er===be,ot=tr&&re;fe.hidden=!ot,ot&&(Bt+=1)}),ue.forEach(fe=>{const me=new URL(fe.href,window.location.origin).searchParams.get("archief")||"";fe.toggleAttribute("aria-current",me===be&&be.length>0)}),gt&&at&&Qt&&(gt.hidden=!xr,xr)){const fe=[];if(be){const me=ue.find(er=>(new URL(er.href,window.location.origin).searchParams.get("archief")||"")===be);me&&fe.push(me.textContent?.trim()||be)}Te&&fe.push(`zoekterm "${Rt?.value.trim()||Te}"`),at.textContent=Bt>0?`${Bt} bericht${Bt===1?"":"en"} gevonden${fe.length?` voor ${fe.join(" en ")}`:""}.`:`Geen berichten gevonden${fe.length?` voor ${fe.join(" en ")}`:""}.`;const bt=new URL(Qt.href,window.location.origin);bt.search="",Qt.href=bt.pathname}}document.querySelectorAll("[data-video-load]").forEach($e=>{$e.addEventListener("click",()=>{const Te=$e.closest(".video-consent-card"),be=Te?.querySelector("[data-video-target]"),je=$e.dataset.videoSrc,Rt=$e.dataset.videoTitle||"YouTube video";if(!Te||!be||!je||be.querySelector("iframe"))return;const ue=document.createElement("iframe");ue.src=je,ue.title=Rt,ue.width="560",ue.height="315",ue.loading="lazy",ue.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",ue.referrerPolicy="strict-origin-when-cross-origin",ue.allowFullscreen=!0,be.hidden=!1,be.appendChild(ue),Te.classList.add("video-consent-card--loaded")})});
