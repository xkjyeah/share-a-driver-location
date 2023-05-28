(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ur(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Q={},Bt=[],Pe=()=>{},vu=()=>!1,Cu=/^on[^a-z]/,Ws=t=>Cu.test(t),hr=t=>t.startsWith("onUpdate:"),ce=Object.assign,fr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Eu=Object.prototype.hasOwnProperty,U=(t,e)=>Eu.call(t,e),O=Array.isArray,Wt=t=>Us(t)==="[object Map]",Kl=t=>Us(t)==="[object Set]",M=t=>typeof t=="function",re=t=>typeof t=="string",dr=t=>typeof t=="symbol",Z=t=>t!==null&&typeof t=="object",ql=t=>Z(t)&&M(t.then)&&M(t.catch),Gl=Object.prototype.toString,Us=t=>Gl.call(t),bu=t=>Us(t).slice(8,-1),Yl=t=>Us(t)==="[object Object]",pr=t=>re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fs=ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wu=/-(\w)/g,Kt=Hs(t=>t.replace(wu,(e,n)=>n?n.toUpperCase():"")),Iu=/\B([A-Z])/g,tn=Hs(t=>t.replace(Iu,"-$1").toLowerCase()),Ql=Hs(t=>t.charAt(0).toUpperCase()+t.slice(1)),ui=Hs(t=>t?`on${Ql(t)}`:""),Nn=(t,e)=>!Object.is(t,e),hi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},gs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Tu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Io;const Pi=()=>Io||(Io=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nn(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=re(s)?Ru(s):nn(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(re(t))return t;if(Z(t))return t}}const Su=/;(?![^(]*\))/g,xu=/:([^]+)/,Nu=/\/\*[^]*?\*\//g;function Ru(t){const e={};return t.replace(Nu,"").split(Su).forEach(n=>{if(n){const s=n.split(xu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function _r(t){let e="";if(re(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const s=_r(t[n]);s&&(e+=s+" ")}else if(Z(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Au="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pu=ur(Au);function Xl(t){return!!t||t===""}const Ou=t=>re(t)?t:t==null?"":O(t)||Z(t)&&(t.toString===Gl||!M(t.toString))?JSON.stringify(t,Jl,2):String(t),Jl=(t,e)=>e&&e.__v_isRef?Jl(t,e.value):Wt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Kl(e)?{[`Set(${e.size})`]:[...e.values()]}:Z(e)&&!O(e)&&!Yl(e)?String(e):e;let Te;class Du{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!e&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Te;try{return Te=this,e()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Mu(t,e=Te){e&&e.active&&e.effects.push(t)}function ku(){return Te}const gr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Zl=t=>(t.w&at)>0,ea=t=>(t.n&at)>0,Fu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=at},Lu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Zl(i)&&!ea(i)?i.delete(t):e[n++]=i,i.w&=~at,i.n&=~at}e.length=n}},Oi=new WeakMap;let Cn=0,at=1;const Di=30;let Se;const wt=Symbol(""),Mi=Symbol("");class mr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Mu(this,s)}run(){if(!this.active)return this.fn();let e=Se,n=nt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Se,Se=this,nt=!0,at=1<<++Cn,Cn<=Di?Fu(this):To(this),this.fn()}finally{Cn<=Di&&Lu(this),at=1<<--Cn,Se=this.parent,nt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Se===this?this.deferStop=!0:this.active&&(To(this),this.onStop&&this.onStop(),this.active=!1)}}function To(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let nt=!0;const ta=[];function sn(){ta.push(nt),nt=!1}function rn(){const t=ta.pop();nt=t===void 0?!0:t}function Ee(t,e,n){if(nt&&Se){let s=Oi.get(t);s||Oi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=gr()),na(i)}}function na(t,e){let n=!1;Cn<=Di?ea(t)||(t.n|=at,n=!Zl(t)):n=!t.has(Se),n&&(t.add(Se),Se.deps.push(t))}function qe(t,e,n,s,i,r){const o=Oi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&O(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":O(t)?pr(n)&&l.push(o.get("length")):(l.push(o.get(wt)),Wt(t)&&l.push(o.get(Mi)));break;case"delete":O(t)||(l.push(o.get(wt)),Wt(t)&&l.push(o.get(Mi)));break;case"set":Wt(t)&&l.push(o.get(wt));break}if(l.length===1)l[0]&&ki(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);ki(gr(a))}}function ki(t,e){const n=O(t)?t:[...t];for(const s of n)s.computed&&So(s);for(const s of n)s.computed||So(s)}function So(t,e){(t!==Se||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Bu=ur("__proto__,__v_isRef,__isVue"),sa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(dr)),Wu=yr(),Uu=yr(!1,!0),Hu=yr(!0),xo=$u();function $u(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=$(this);for(let r=0,o=this.length;r<o;r++)Ee(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map($)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){sn();const s=$(this)[e].apply(this,n);return rn(),s}}),t}function ju(t){const e=$(this);return Ee(e,"has",t),e.hasOwnProperty(t)}function yr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?rh:aa:e?la:oa).get(s))return s;const o=O(s);if(!t){if(o&&U(xo,i))return Reflect.get(xo,i,r);if(i==="hasOwnProperty")return ju}const l=Reflect.get(s,i,r);return(dr(i)?sa.has(i):Bu(i))||(t||Ee(s,"get",i),e)?l:pe(l)?o&&pr(i)?l:l.value:Z(l)?t?ca(l):Er(l):l}}const Vu=ia(),zu=ia(!0);function ia(t=!1){return function(n,s,i,r){let o=n[s];if(qt(o)&&pe(o)&&!pe(i))return!1;if(!t&&(!ms(i)&&!qt(i)&&(o=$(o),i=$(i)),!O(n)&&pe(o)&&!pe(i)))return o.value=i,!0;const l=O(n)&&pr(s)?Number(s)<n.length:U(n,s),a=Reflect.set(n,s,i,r);return n===$(r)&&(l?Nn(i,o)&&qe(n,"set",s,i):qe(n,"add",s,i)),a}}function Ku(t,e){const n=U(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&qe(t,"delete",e,void 0),s}function qu(t,e){const n=Reflect.has(t,e);return(!dr(e)||!sa.has(e))&&Ee(t,"has",e),n}function Gu(t){return Ee(t,"iterate",O(t)?"length":wt),Reflect.ownKeys(t)}const ra={get:Wu,set:Vu,deleteProperty:Ku,has:qu,ownKeys:Gu},Yu={get:Hu,set(t,e){return!0},deleteProperty(t,e){return!0}},Qu=ce({},ra,{get:Uu,set:zu}),vr=t=>t,$s=t=>Reflect.getPrototypeOf(t);function is(t,e,n=!1,s=!1){t=t.__v_raw;const i=$(t),r=$(e);n||(e!==r&&Ee(i,"get",e),Ee(i,"get",r));const{has:o}=$s(i),l=s?vr:n?wr:Rn;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function rs(t,e=!1){const n=this.__v_raw,s=$(n),i=$(t);return e||(t!==i&&Ee(s,"has",t),Ee(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function os(t,e=!1){return t=t.__v_raw,!e&&Ee($(t),"iterate",wt),Reflect.get(t,"size",t)}function No(t){t=$(t);const e=$(this);return $s(e).has.call(e,t)||(e.add(t),qe(e,"add",t,t)),this}function Ro(t,e){e=$(e);const n=$(this),{has:s,get:i}=$s(n);let r=s.call(n,t);r||(t=$(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Nn(e,o)&&qe(n,"set",t,e):qe(n,"add",t,e),this}function Ao(t){const e=$(this),{has:n,get:s}=$s(e);let i=n.call(e,t);i||(t=$(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&qe(e,"delete",t,void 0),r}function Po(){const t=$(this),e=t.size!==0,n=t.clear();return e&&qe(t,"clear",void 0,void 0),n}function ls(t,e){return function(s,i){const r=this,o=r.__v_raw,l=$(o),a=e?vr:t?wr:Rn;return!t&&Ee(l,"iterate",wt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function as(t,e,n){return function(...s){const i=this.__v_raw,r=$(i),o=Wt(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?vr:e?wr:Rn;return!e&&Ee(r,"iterate",a?Mi:wt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function et(t){return function(...e){return t==="delete"?!1:this}}function Xu(){const t={get(r){return is(this,r)},get size(){return os(this)},has:rs,add:No,set:Ro,delete:Ao,clear:Po,forEach:ls(!1,!1)},e={get(r){return is(this,r,!1,!0)},get size(){return os(this)},has:rs,add:No,set:Ro,delete:Ao,clear:Po,forEach:ls(!1,!0)},n={get(r){return is(this,r,!0)},get size(){return os(this,!0)},has(r){return rs.call(this,r,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:ls(!0,!1)},s={get(r){return is(this,r,!0,!0)},get size(){return os(this,!0)},has(r){return rs.call(this,r,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:ls(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=as(r,!1,!1),n[r]=as(r,!0,!1),e[r]=as(r,!1,!0),s[r]=as(r,!0,!0)}),[t,n,e,s]}const[Ju,Zu,eh,th]=Xu();function Cr(t,e){const n=e?t?th:eh:t?Zu:Ju;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(U(n,i)&&i in s?n:s,i,r)}const nh={get:Cr(!1,!1)},sh={get:Cr(!1,!0)},ih={get:Cr(!0,!1)},oa=new WeakMap,la=new WeakMap,aa=new WeakMap,rh=new WeakMap;function oh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lh(t){return t.__v_skip||!Object.isExtensible(t)?0:oh(bu(t))}function Er(t){return qt(t)?t:br(t,!1,ra,nh,oa)}function ah(t){return br(t,!1,Qu,sh,la)}function ca(t){return br(t,!0,Yu,ih,aa)}function br(t,e,n,s,i){if(!Z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=lh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Ut(t){return qt(t)?Ut(t.__v_raw):!!(t&&t.__v_isReactive)}function qt(t){return!!(t&&t.__v_isReadonly)}function ms(t){return!!(t&&t.__v_isShallow)}function ua(t){return Ut(t)||qt(t)}function $(t){const e=t&&t.__v_raw;return e?$(e):t}function ha(t){return gs(t,"__v_skip",!0),t}const Rn=t=>Z(t)?Er(t):t,wr=t=>Z(t)?ca(t):t;function fa(t){nt&&Se&&(t=$(t),na(t.dep||(t.dep=gr())))}function da(t,e){t=$(t);const n=t.dep;n&&ki(n)}function pe(t){return!!(t&&t.__v_isRef===!0)}function Fi(t){return ch(t,!1)}function ch(t,e){return pe(t)?t:new uh(t,e)}class uh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:$(e),this._value=n?e:Rn(e)}get value(){return fa(this),this._value}set value(e){const n=this.__v_isShallow||ms(e)||qt(e);e=n?e:$(e),Nn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Rn(e),da(this))}}function An(t){return pe(t)?t.value:t}const hh={get:(t,e,n)=>An(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return pe(i)&&!pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function pa(t){return Ut(t)?t:new Proxy(t,hh)}class fh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new mr(e,()=>{this._dirty||(this._dirty=!0,da(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=$(this);return fa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function dh(t,e,n=!1){let s,i;const r=M(t);return r?(s=t,i=Pe):(s=t.get,i=t.set),new fh(s,i,r||!i,n)}function st(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){js(r,e,n)}return i}function Oe(t,e,n,s){if(M(t)){const r=st(t,e,n,s);return r&&ql(r)&&r.catch(o=>{js(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Oe(t[r],e,n,s));return i}function js(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){st(a,null,10,[t,o,l]);return}}ph(t,n,i,s)}function ph(t,e,n,s=!0){console.error(t)}let Pn=!1,Li=!1;const fe=[];let We=0;const Ht=[];let Ve=null,vt=0;const _a=Promise.resolve();let Ir=null;function _h(t){const e=Ir||_a;return t?e.then(this?t.bind(this):t):e}function gh(t){let e=We+1,n=fe.length;for(;e<n;){const s=e+n>>>1;On(fe[s])<t?e=s+1:n=s}return e}function Tr(t){(!fe.length||!fe.includes(t,Pn&&t.allowRecurse?We+1:We))&&(t.id==null?fe.push(t):fe.splice(gh(t.id),0,t),ga())}function ga(){!Pn&&!Li&&(Li=!0,Ir=_a.then(ya))}function mh(t){const e=fe.indexOf(t);e>We&&fe.splice(e,1)}function yh(t){O(t)?Ht.push(...t):(!Ve||!Ve.includes(t,t.allowRecurse?vt+1:vt))&&Ht.push(t),ga()}function Oo(t,e=Pn?We+1:0){for(;e<fe.length;e++){const n=fe[e];n&&n.pre&&(fe.splice(e,1),e--,n())}}function ma(t){if(Ht.length){const e=[...new Set(Ht)];if(Ht.length=0,Ve){Ve.push(...e);return}for(Ve=e,Ve.sort((n,s)=>On(n)-On(s)),vt=0;vt<Ve.length;vt++)Ve[vt]();Ve=null,vt=0}}const On=t=>t.id==null?1/0:t.id,vh=(t,e)=>{const n=On(t)-On(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ya(t){Li=!1,Pn=!0,fe.sort(vh);const e=Pe;try{for(We=0;We<fe.length;We++){const n=fe[We];n&&n.active!==!1&&st(n,null,14)}}finally{We=0,fe.length=0,ma(),Pn=!1,Ir=null,(fe.length||Ht.length)&&ya()}}function Ch(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Q;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Q;d&&(i=n.map(g=>re(g)?g.trim():g)),h&&(i=n.map(Tu))}let l,a=s[l=ui(e)]||s[l=ui(Kt(e))];!a&&r&&(a=s[l=ui(tn(e))]),a&&Oe(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Oe(c,t,6,i)}}function va(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!M(t)){const a=c=>{const u=va(c,e,!0);u&&(l=!0,ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(Z(t)&&s.set(t,null),null):(O(r)?r.forEach(a=>o[a]=null):ce(o,r),Z(t)&&s.set(t,o),o)}function Vs(t,e){return!t||!Ws(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,tn(e))||U(t,e))}let Ue=null,Ca=null;function ys(t){const e=Ue;return Ue=t,Ca=t&&t.type.__scopeId||null,e}function Eh(t,e=Ue,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&$o(-1);const r=ys(e);let o;try{o=t(...i)}finally{ys(r),s._d&&$o(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function fi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:I,inheritAttrs:S}=t;let W,X;const te=ys(t);try{if(n.shapeFlag&4){const D=i||s;W=Be(u.call(D,D,h,r,g,d,I)),X=a}else{const D=e;W=Be(D.length>1?D(r,{attrs:a,slots:l,emit:c}):D(r,null)),X=e.props?a:bh(a)}}catch(D){wn.length=0,js(D,t,1),W=He(Dn)}let ne=W;if(X&&S!==!1){const D=Object.keys(X),{shapeFlag:Ze}=ne;D.length&&Ze&7&&(o&&D.some(hr)&&(X=wh(X,o)),ne=Qt(ne,X))}return n.dirs&&(ne=Qt(ne),ne.dirs=ne.dirs?ne.dirs.concat(n.dirs):n.dirs),n.transition&&(ne.transition=n.transition),W=ne,ys(te),W}const bh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ws(n))&&((e||(e={}))[n]=t[n]);return e},wh=(t,e)=>{const n={};for(const s in t)(!hr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ih(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Do(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Vs(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Do(s,o,c):!0:!!o;return!1}function Do(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Vs(n,r))return!0}return!1}function Th({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Sh=t=>t.__isSuspense;function xh(t,e){e&&e.pendingBranch?O(t)?e.effects.push(...t):e.effects.push(t):yh(t)}const cs={};function di(t,e,n){return Ea(t,e,n)}function Ea(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Q){var l;const a=ku()===((l=de)==null?void 0:l.scope)?de:null;let c,u=!1,h=!1;if(pe(t)?(c=()=>t.value,u=ms(t)):Ut(t)?(c=()=>t,s=!0):O(t)?(h=!0,u=t.some(D=>Ut(D)||ms(D)),c=()=>t.map(D=>{if(pe(D))return D.value;if(Ut(D))return Ft(D);if(M(D))return st(D,a,2)})):M(t)?e?c=()=>st(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),Oe(t,a,3,[g])}:c=Pe,e&&s){const D=c;c=()=>Ft(D())}let d,g=D=>{d=te.onStop=()=>{st(D,a,4)}},I;if(kn)if(g=Pe,e?n&&Oe(e,a,3,[c(),h?[]:void 0,g]):c(),i==="sync"){const D=Tf();I=D.__watcherHandles||(D.__watcherHandles=[])}else return Pe;let S=h?new Array(t.length).fill(cs):cs;const W=()=>{if(te.active)if(e){const D=te.run();(s||u||(h?D.some((Ze,fn)=>Nn(Ze,S[fn])):Nn(D,S)))&&(d&&d(),Oe(e,a,3,[D,S===cs?void 0:h&&S[0]===cs?[]:S,g]),S=D)}else te.run()};W.allowRecurse=!!e;let X;i==="sync"?X=W:i==="post"?X=()=>me(W,a&&a.suspense):(W.pre=!0,a&&(W.id=a.uid),X=()=>Tr(W));const te=new mr(c,X);e?n?W():S=te.run():i==="post"?me(te.run.bind(te),a&&a.suspense):te.run();const ne=()=>{te.stop(),a&&a.scope&&fr(a.scope.effects,te)};return I&&I.push(ne),ne}function Nh(t,e,n){const s=this.proxy,i=re(t)?t.includes(".")?ba(s,t):()=>s[t]:t.bind(s,s);let r;M(e)?r=e:(r=e.handler,n=e);const o=de;Xt(this);const l=Ea(i,r.bind(s),n);return o?Xt(o):It(),l}function ba(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ft(t,e){if(!Z(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pe(t))Ft(t.value,e);else if(O(t))for(let n=0;n<t.length;n++)Ft(t[n],e);else if(Kl(t)||Wt(t))t.forEach(n=>{Ft(n,e)});else if(Yl(t))for(const n in t)Ft(t[n],e);return t}function _t(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(sn(),Oe(a,n,8,[t.el,l,t,e]),rn())}}function zs(t,e){return M(t)?(()=>ce({name:t.name},e,{setup:t}))():t}const ds=t=>!!t.type.__asyncLoader,wa=t=>t.type.__isKeepAlive;function Rh(t,e){Ia(t,"a",e)}function Ah(t,e){Ia(t,"da",e)}function Ia(t,e,n=de){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ks(e,s,n),n){let i=n.parent;for(;i&&i.parent;)wa(i.parent.vnode)&&Ph(s,e,n,i),i=i.parent}}function Ph(t,e,n,s){const i=Ks(e,t,s,!0);Ta(()=>{fr(s[e],i)},n)}function Ks(t,e,n=de,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;sn(),Xt(n);const l=Oe(e,n,t,o);return It(),rn(),l});return s?i.unshift(r):i.push(r),r}}const Xe=t=>(e,n=de)=>(!kn||t==="sp")&&Ks(t,(...s)=>e(...s),n),Oh=Xe("bm"),Dh=Xe("m"),Mh=Xe("bu"),kh=Xe("u"),Fh=Xe("bum"),Ta=Xe("um"),Lh=Xe("sp"),Bh=Xe("rtg"),Wh=Xe("rtc");function Uh(t,e=de){Ks("ec",t,e)}const Hh=Symbol.for("v-ndc");function $h(t,e,n,s){let i;const r=n&&n[s];if(O(t)||re(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Z(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Bi=t=>t?Fa(t)?Ar(t)||t.proxy:Bi(t.parent):null,bn=ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Bi(t.parent),$root:t=>Bi(t.root),$emit:t=>t.emit,$options:t=>Sr(t),$forceUpdate:t=>t.f||(t.f=()=>Tr(t.update)),$nextTick:t=>t.n||(t.n=_h.bind(t.proxy)),$watch:t=>Nh.bind(t)}),pi=(t,e)=>t!==Q&&!t.__isScriptSetup&&U(t,e),jh={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(pi(s,e))return o[e]=1,s[e];if(i!==Q&&U(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&U(c,e))return o[e]=3,r[e];if(n!==Q&&U(n,e))return o[e]=4,n[e];Wi&&(o[e]=0)}}const u=bn[e];let h,d;if(u)return e==="$attrs"&&Ee(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==Q&&U(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,U(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return pi(i,e)?(i[e]=n,!0):s!==Q&&U(s,e)?(s[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==Q&&U(t,o)||pi(e,o)||(l=r[0])&&U(l,o)||U(s,o)||U(bn,o)||U(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Mo(t){return O(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wi=!0;function Vh(t){const e=Sr(t),n=t.proxy,s=t.ctx;Wi=!1,e.beforeCreate&&ko(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:I,activated:S,deactivated:W,beforeDestroy:X,beforeUnmount:te,destroyed:ne,unmounted:D,render:Ze,renderTracked:fn,renderTriggered:Zn,errorCaptured:ht,serverPrefetch:oi,expose:ft,inheritAttrs:dn,components:es,directives:ts,filters:li}=e;if(c&&zh(c,s,null),o)for(const ee in o){const z=o[ee];M(z)&&(s[ee]=z.bind(n))}if(i){const ee=i.call(n,n);Z(ee)&&(t.data=Er(ee))}if(Wi=!0,r)for(const ee in r){const z=r[ee],dt=M(z)?z.bind(n,n):M(z.get)?z.get.bind(n,n):Pe,ns=!M(z)&&M(z.set)?z.set.bind(n):Pe,pt=wf({get:dt,set:ns});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>pt.value,set:Me=>pt.value=Me})}if(l)for(const ee in l)Sa(l[ee],s,n,ee);if(a){const ee=M(a)?a.call(n):a;Reflect.ownKeys(ee).forEach(z=>{Xh(z,ee[z])})}u&&ko(u,t,"c");function _e(ee,z){O(z)?z.forEach(dt=>ee(dt.bind(n))):z&&ee(z.bind(n))}if(_e(Oh,h),_e(Dh,d),_e(Mh,g),_e(kh,I),_e(Rh,S),_e(Ah,W),_e(Uh,ht),_e(Wh,fn),_e(Bh,Zn),_e(Fh,te),_e(Ta,D),_e(Lh,oi),O(ft))if(ft.length){const ee=t.exposed||(t.exposed={});ft.forEach(z=>{Object.defineProperty(ee,z,{get:()=>n[z],set:dt=>n[z]=dt})})}else t.exposed||(t.exposed={});Ze&&t.render===Pe&&(t.render=Ze),dn!=null&&(t.inheritAttrs=dn),es&&(t.components=es),ts&&(t.directives=ts)}function zh(t,e,n=Pe){O(t)&&(t=Ui(t));for(const s in t){const i=t[s];let r;Z(i)?"default"in i?r=ps(i.from||s,i.default,!0):r=ps(i.from||s):r=ps(i),pe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function ko(t,e,n){Oe(O(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sa(t,e,n,s){const i=s.includes(".")?ba(n,s):()=>n[s];if(re(t)){const r=e[t];M(r)&&di(i,r)}else if(M(t))di(i,t.bind(n));else if(Z(t))if(O(t))t.forEach(r=>Sa(r,e,n,s));else{const r=M(t.handler)?t.handler.bind(n):e[t.handler];M(r)&&di(i,r,t)}}function Sr(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>vs(a,c,o,!0)),vs(a,e,o)),Z(e)&&r.set(e,a),a}function vs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&vs(t,r,n,!0),i&&i.forEach(o=>vs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Kh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Kh={data:Fo,props:Lo,emits:Lo,methods:En,computed:En,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:En,directives:En,watch:Gh,provide:Fo,inject:qh};function Fo(t,e){return e?t?function(){return ce(M(t)?t.call(this,this):t,M(e)?e.call(this,this):e)}:e:t}function qh(t,e){return En(Ui(t),Ui(e))}function Ui(t){if(O(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ge(t,e){return t?[...new Set([].concat(t,e))]:e}function En(t,e){return t?ce(Object.create(null),t,e):e}function Lo(t,e){return t?O(t)&&O(e)?[...new Set([...t,...e])]:ce(Object.create(null),Mo(t),Mo(e??{})):e}function Gh(t,e){if(!t)return e;if(!e)return t;const n=ce(Object.create(null),t);for(const s in e)n[s]=ge(t[s],e[s]);return n}function xa(){return{app:null,config:{isNativeTag:vu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yh=0;function Qh(t,e){return function(s,i=null){M(s)||(s=ce({},s)),i!=null&&!Z(i)&&(i=null);const r=xa(),o=new Set;let l=!1;const a=r.app={_uid:Yh++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Sf,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&M(c.install)?(o.add(c),c.install(a,...u)):M(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=He(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Ar(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){Cs=a;try{return c()}finally{Cs=null}}};return a}}let Cs=null;function Xh(t,e){if(de){let n=de.provides;const s=de.parent&&de.parent.provides;s===n&&(n=de.provides=Object.create(s)),n[t]=e}}function ps(t,e,n=!1){const s=de||Ue;if(s||Cs){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Cs._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&M(e)?e.call(s&&s.proxy):e}}function Jh(t,e,n,s=!1){const i={},r={};gs(r,Gs,1),t.propsDefaults=Object.create(null),Na(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:ah(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Zh(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=$(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Vs(t.emitsOptions,d))continue;const g=e[d];if(a)if(U(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const I=Kt(d);i[I]=Hi(a,l,I,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Na(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!U(e,h)&&((u=tn(h))===h||!U(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Hi(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!U(e,h))&&(delete r[h],c=!0)}c&&qe(t,"set","$attrs")}function Na(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(fs(a))continue;const c=e[a];let u;i&&U(i,u=Kt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Vs(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=$(n),c=l||Q;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Hi(i,a,h,c[h],t,!U(c,h))}}return o}function Hi(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=U(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&M(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(Xt(i),s=c[n]=a.call(null,e),It())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===tn(n))&&(s=!0))}return s}function Ra(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!M(t)){const u=h=>{a=!0;const[d,g]=Ra(h,e,!0);ce(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return Z(t)&&s.set(t,Bt),Bt;if(O(r))for(let u=0;u<r.length;u++){const h=Kt(r[u]);Bo(h)&&(o[h]=Q)}else if(r)for(const u in r){const h=Kt(u);if(Bo(h)){const d=r[u],g=o[h]=O(d)||M(d)?{type:d}:ce({},d);if(g){const I=Ho(Boolean,g.type),S=Ho(String,g.type);g[0]=I>-1,g[1]=S<0||I<S,(I>-1||U(g,"default"))&&l.push(h)}}}const c=[o,l];return Z(t)&&s.set(t,c),c}function Bo(t){return t[0]!=="$"}function Wo(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Uo(t,e){return Wo(t)===Wo(e)}function Ho(t,e){return O(e)?e.findIndex(n=>Uo(n,t)):M(e)&&Uo(e,t)?0:-1}const Aa=t=>t[0]==="_"||t==="$stable",xr=t=>O(t)?t.map(Be):[Be(t)],ef=(t,e,n)=>{if(e._n)return e;const s=Eh((...i)=>xr(e(...i)),n);return s._c=!1,s},Pa=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Aa(i))continue;const r=t[i];if(M(r))e[i]=ef(i,r,s);else if(r!=null){const o=xr(r);e[i]=()=>o}}},Oa=(t,e)=>{const n=xr(e);t.slots.default=()=>n},tf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=$(e),gs(e,"_",n)):Pa(e,t.slots={})}else t.slots={},e&&Oa(t,e);gs(t.slots,Gs,1)},nf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Q;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ce(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Pa(e,i)),o=e}else e&&(Oa(t,e),o={default:1});if(r)for(const l in i)!Aa(l)&&!(l in o)&&delete i[l]};function $i(t,e,n,s,i=!1){if(O(t)){t.forEach((d,g)=>$i(d,e&&(O(e)?e[g]:e),n,s,i));return}if(ds(s)&&!i)return;const r=s.shapeFlag&4?Ar(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===Q?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(re(c)?(u[c]=null,U(h,c)&&(h[c]=null)):pe(c)&&(c.value=null)),M(a))st(a,l,12,[o,u]);else{const d=re(a),g=pe(a);if(d||g){const I=()=>{if(t.f){const S=d?U(h,a)?h[a]:u[a]:a.value;i?O(S)&&fr(S,r):O(S)?S.includes(r)||S.push(r):d?(u[a]=[r],U(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,U(h,a)&&(h[a]=o)):g&&(a.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,me(I,n)):I()}}}const me=xh;function sf(t){return rf(t)}function rf(t,e){const n=Pi();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Pe,insertStaticContent:I}=t,S=(f,p,_,y=null,m=null,b=null,T=!1,E=null,w=!!p.dynamicChildren)=>{if(f===p)return;f&&!_n(f,p)&&(y=ss(f),Me(f,m,b,!0),f=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:v,ref:N,shapeFlag:x}=p;switch(v){case qs:W(f,p,_,y);break;case Dn:X(f,p,_,y);break;case _i:f==null&&te(p,_,y,T);break;case Le:es(f,p,_,y,m,b,T,E,w);break;default:x&1?Ze(f,p,_,y,m,b,T,E,w):x&6?ts(f,p,_,y,m,b,T,E,w):(x&64||x&128)&&v.process(f,p,_,y,m,b,T,E,w,Ot)}N!=null&&m&&$i(N,f&&f.ref,b,p||f,!p)},W=(f,p,_,y)=>{if(f==null)s(p.el=l(p.children),_,y);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},X=(f,p,_,y)=>{f==null?s(p.el=a(p.children||""),_,y):p.el=f.el},te=(f,p,_,y)=>{[f.el,f.anchor]=I(f.children,p,_,y,f.el,f.anchor)},ne=({el:f,anchor:p},_,y)=>{let m;for(;f&&f!==p;)m=d(f),s(f,_,y),f=m;s(p,_,y)},D=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},Ze=(f,p,_,y,m,b,T,E,w)=>{T=T||p.type==="svg",f==null?fn(p,_,y,m,b,T,E,w):oi(f,p,m,b,T,E,w)},fn=(f,p,_,y,m,b,T,E)=>{let w,v;const{type:N,props:x,shapeFlag:R,transition:P,dirs:B}=f;if(w=f.el=o(f.type,b,x&&x.is,x),R&8?u(w,f.children):R&16&&ht(f.children,w,null,y,m,b&&N!=="foreignObject",T,E),B&&_t(f,null,y,"created"),Zn(w,f,f.scopeId,T,y),x){for(const j in x)j!=="value"&&!fs(j)&&r(w,j,null,x[j],b,f.children,y,m,je);"value"in x&&r(w,"value",null,x.value),(v=x.onVnodeBeforeMount)&&Fe(v,y,f)}B&&_t(f,null,y,"beforeMount");const K=(!m||m&&!m.pendingBranch)&&P&&!P.persisted;K&&P.beforeEnter(w),s(w,p,_),((v=x&&x.onVnodeMounted)||K||B)&&me(()=>{v&&Fe(v,y,f),K&&P.enter(w),B&&_t(f,null,y,"mounted")},m)},Zn=(f,p,_,y,m)=>{if(_&&g(f,_),y)for(let b=0;b<y.length;b++)g(f,y[b]);if(m){let b=m.subTree;if(p===b){const T=m.vnode;Zn(f,T,T.scopeId,T.slotScopeIds,m.parent)}}},ht=(f,p,_,y,m,b,T,E,w=0)=>{for(let v=w;v<f.length;v++){const N=f[v]=E?tt(f[v]):Be(f[v]);S(null,N,p,_,y,m,b,T,E)}},oi=(f,p,_,y,m,b,T)=>{const E=p.el=f.el;let{patchFlag:w,dynamicChildren:v,dirs:N}=p;w|=f.patchFlag&16;const x=f.props||Q,R=p.props||Q;let P;_&&gt(_,!1),(P=R.onVnodeBeforeUpdate)&&Fe(P,_,p,f),N&&_t(p,f,_,"beforeUpdate"),_&&gt(_,!0);const B=m&&p.type!=="foreignObject";if(v?ft(f.dynamicChildren,v,E,_,y,B,b):T||z(f,p,E,null,_,y,B,b,!1),w>0){if(w&16)dn(E,p,x,R,_,y,m);else if(w&2&&x.class!==R.class&&r(E,"class",null,R.class,m),w&4&&r(E,"style",x.style,R.style,m),w&8){const K=p.dynamicProps;for(let j=0;j<K.length;j++){const se=K[j],Ie=x[se],Dt=R[se];(Dt!==Ie||se==="value")&&r(E,se,Ie,Dt,m,f.children,_,y,je)}}w&1&&f.children!==p.children&&u(E,p.children)}else!T&&v==null&&dn(E,p,x,R,_,y,m);((P=R.onVnodeUpdated)||N)&&me(()=>{P&&Fe(P,_,p,f),N&&_t(p,f,_,"updated")},y)},ft=(f,p,_,y,m,b,T)=>{for(let E=0;E<p.length;E++){const w=f[E],v=p[E],N=w.el&&(w.type===Le||!_n(w,v)||w.shapeFlag&70)?h(w.el):_;S(w,v,N,null,y,m,b,T,!0)}},dn=(f,p,_,y,m,b,T)=>{if(_!==y){if(_!==Q)for(const E in _)!fs(E)&&!(E in y)&&r(f,E,_[E],null,T,p.children,m,b,je);for(const E in y){if(fs(E))continue;const w=y[E],v=_[E];w!==v&&E!=="value"&&r(f,E,v,w,T,p.children,m,b,je)}"value"in y&&r(f,"value",_.value,y.value)}},es=(f,p,_,y,m,b,T,E,w)=>{const v=p.el=f?f.el:l(""),N=p.anchor=f?f.anchor:l("");let{patchFlag:x,dynamicChildren:R,slotScopeIds:P}=p;P&&(E=E?E.concat(P):P),f==null?(s(v,_,y),s(N,_,y),ht(p.children,_,N,m,b,T,E,w)):x>0&&x&64&&R&&f.dynamicChildren?(ft(f.dynamicChildren,R,_,m,b,T,E),(p.key!=null||m&&p===m.subTree)&&Da(f,p,!0)):z(f,p,_,N,m,b,T,E,w)},ts=(f,p,_,y,m,b,T,E,w)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?m.ctx.activate(p,_,y,T,w):li(p,_,y,m,b,T,w):yo(f,p,w)},li=(f,p,_,y,m,b,T)=>{const E=f.component=mf(f,y,m);if(wa(f)&&(E.ctx.renderer=Ot),yf(E),E.asyncDep){if(m&&m.registerDep(E,_e),!f.el){const w=E.subTree=He(Dn);X(null,w,p,_)}return}_e(E,f,p,_,m,b,T)},yo=(f,p,_)=>{const y=p.component=f.component;if(Ih(f,p,_))if(y.asyncDep&&!y.asyncResolved){ee(y,p,_);return}else y.next=p,mh(y.update),y.update();else p.el=f.el,y.vnode=p},_e=(f,p,_,y,m,b,T)=>{const E=()=>{if(f.isMounted){let{next:N,bu:x,u:R,parent:P,vnode:B}=f,K=N,j;gt(f,!1),N?(N.el=B.el,ee(f,N,T)):N=B,x&&hi(x),(j=N.props&&N.props.onVnodeBeforeUpdate)&&Fe(j,P,N,B),gt(f,!0);const se=fi(f),Ie=f.subTree;f.subTree=se,S(Ie,se,h(Ie.el),ss(Ie),f,m,b),N.el=se.el,K===null&&Th(f,se.el),R&&me(R,m),(j=N.props&&N.props.onVnodeUpdated)&&me(()=>Fe(j,P,N,B),m)}else{let N;const{el:x,props:R}=p,{bm:P,m:B,parent:K}=f,j=ds(p);if(gt(f,!1),P&&hi(P),!j&&(N=R&&R.onVnodeBeforeMount)&&Fe(N,K,p),gt(f,!0),x&&ci){const se=()=>{f.subTree=fi(f),ci(x,f.subTree,f,m,null)};j?p.type.__asyncLoader().then(()=>!f.isUnmounted&&se()):se()}else{const se=f.subTree=fi(f);S(null,se,_,y,f,m,b),p.el=se.el}if(B&&me(B,m),!j&&(N=R&&R.onVnodeMounted)){const se=p;me(()=>Fe(N,K,se),m)}(p.shapeFlag&256||K&&ds(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&me(f.a,m),f.isMounted=!0,p=_=y=null}},w=f.effect=new mr(E,()=>Tr(v),f.scope),v=f.update=()=>w.run();v.id=f.uid,gt(f,!0),v()},ee=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Zh(f,p.props,y,_),nf(f,p.children,_),sn(),Oo(),rn()},z=(f,p,_,y,m,b,T,E,w=!1)=>{const v=f&&f.children,N=f?f.shapeFlag:0,x=p.children,{patchFlag:R,shapeFlag:P}=p;if(R>0){if(R&128){ns(v,x,_,y,m,b,T,E,w);return}else if(R&256){dt(v,x,_,y,m,b,T,E,w);return}}P&8?(N&16&&je(v,m,b),x!==v&&u(_,x)):N&16?P&16?ns(v,x,_,y,m,b,T,E,w):je(v,m,b,!0):(N&8&&u(_,""),P&16&&ht(x,_,y,m,b,T,E,w))},dt=(f,p,_,y,m,b,T,E,w)=>{f=f||Bt,p=p||Bt;const v=f.length,N=p.length,x=Math.min(v,N);let R;for(R=0;R<x;R++){const P=p[R]=w?tt(p[R]):Be(p[R]);S(f[R],P,_,null,m,b,T,E,w)}v>N?je(f,m,b,!0,!1,x):ht(p,_,y,m,b,T,E,w,x)},ns=(f,p,_,y,m,b,T,E,w)=>{let v=0;const N=p.length;let x=f.length-1,R=N-1;for(;v<=x&&v<=R;){const P=f[v],B=p[v]=w?tt(p[v]):Be(p[v]);if(_n(P,B))S(P,B,_,null,m,b,T,E,w);else break;v++}for(;v<=x&&v<=R;){const P=f[x],B=p[R]=w?tt(p[R]):Be(p[R]);if(_n(P,B))S(P,B,_,null,m,b,T,E,w);else break;x--,R--}if(v>x){if(v<=R){const P=R+1,B=P<N?p[P].el:y;for(;v<=R;)S(null,p[v]=w?tt(p[v]):Be(p[v]),_,B,m,b,T,E,w),v++}}else if(v>R)for(;v<=x;)Me(f[v],m,b,!0),v++;else{const P=v,B=v,K=new Map;for(v=B;v<=R;v++){const we=p[v]=w?tt(p[v]):Be(p[v]);we.key!=null&&K.set(we.key,v)}let j,se=0;const Ie=R-B+1;let Dt=!1,Eo=0;const pn=new Array(Ie);for(v=0;v<Ie;v++)pn[v]=0;for(v=P;v<=x;v++){const we=f[v];if(se>=Ie){Me(we,m,b,!0);continue}let ke;if(we.key!=null)ke=K.get(we.key);else for(j=B;j<=R;j++)if(pn[j-B]===0&&_n(we,p[j])){ke=j;break}ke===void 0?Me(we,m,b,!0):(pn[ke-B]=v+1,ke>=Eo?Eo=ke:Dt=!0,S(we,p[ke],_,null,m,b,T,E,w),se++)}const bo=Dt?of(pn):Bt;for(j=bo.length-1,v=Ie-1;v>=0;v--){const we=B+v,ke=p[we],wo=we+1<N?p[we+1].el:y;pn[v]===0?S(null,ke,_,wo,m,b,T,E,w):Dt&&(j<0||v!==bo[j]?pt(ke,_,wo,2):j--)}}},pt=(f,p,_,y,m=null)=>{const{el:b,type:T,transition:E,children:w,shapeFlag:v}=f;if(v&6){pt(f.component.subTree,p,_,y);return}if(v&128){f.suspense.move(p,_,y);return}if(v&64){T.move(f,p,_,Ot);return}if(T===Le){s(b,p,_);for(let x=0;x<w.length;x++)pt(w[x],p,_,y);s(f.anchor,p,_);return}if(T===_i){ne(f,p,_);return}if(y!==2&&v&1&&E)if(y===0)E.beforeEnter(b),s(b,p,_),me(()=>E.enter(b),m);else{const{leave:x,delayLeave:R,afterLeave:P}=E,B=()=>s(b,p,_),K=()=>{x(b,()=>{B(),P&&P()})};R?R(b,B,K):K()}else s(b,p,_)},Me=(f,p,_,y=!1,m=!1)=>{const{type:b,props:T,ref:E,children:w,dynamicChildren:v,shapeFlag:N,patchFlag:x,dirs:R}=f;if(E!=null&&$i(E,null,_,f,!0),N&256){p.ctx.deactivate(f);return}const P=N&1&&R,B=!ds(f);let K;if(B&&(K=T&&T.onVnodeBeforeUnmount)&&Fe(K,p,f),N&6)yu(f.component,_,y);else{if(N&128){f.suspense.unmount(_,y);return}P&&_t(f,null,p,"beforeUnmount"),N&64?f.type.remove(f,p,_,m,Ot,y):v&&(b!==Le||x>0&&x&64)?je(v,p,_,!1,!0):(b===Le&&x&384||!m&&N&16)&&je(w,p,_),y&&vo(f)}(B&&(K=T&&T.onVnodeUnmounted)||P)&&me(()=>{K&&Fe(K,p,f),P&&_t(f,null,p,"unmounted")},_)},vo=f=>{const{type:p,el:_,anchor:y,transition:m}=f;if(p===Le){mu(_,y);return}if(p===_i){D(f);return}const b=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:E}=m,w=()=>T(_,b);E?E(f.el,b,w):w()}else b()},mu=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},yu=(f,p,_)=>{const{bum:y,scope:m,update:b,subTree:T,um:E}=f;y&&hi(y),m.stop(),b&&(b.active=!1,Me(T,f,p,_)),E&&me(E,p),me(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},je=(f,p,_,y=!1,m=!1,b=0)=>{for(let T=b;T<f.length;T++)Me(f[T],p,_,y,m)},ss=f=>f.shapeFlag&6?ss(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),Co=(f,p,_)=>{f==null?p._vnode&&Me(p._vnode,null,null,!0):S(p._vnode||null,f,p,null,null,null,_),Oo(),ma(),p._vnode=f},Ot={p:S,um:Me,m:pt,r:vo,mt:li,mc:ht,pc:z,pbc:ft,n:ss,o:t};let ai,ci;return e&&([ai,ci]=e(Ot)),{render:Co,hydrate:ai,createApp:Qh(Co,ai)}}function gt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Da(t,e,n=!1){const s=t.children,i=e.children;if(O(s)&&O(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=tt(i[r]),l.el=o.el),n||Da(o,l)),l.type===qs&&(l.el=o.el)}}function of(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const lf=t=>t.__isTeleport,Le=Symbol.for("v-fgt"),qs=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),_i=Symbol.for("v-stc"),wn=[];let Ne=null;function Gt(t=!1){wn.push(Ne=t?null:[])}function af(){wn.pop(),Ne=wn[wn.length-1]||null}let Mn=1;function $o(t){Mn+=t}function cf(t){return t.dynamicChildren=Mn>0?Ne||Bt:null,af(),Mn>0&&Ne&&Ne.push(t),t}function Yt(t,e,n,s,i,r){return cf(ka(t,e,n,s,i,r,!0))}function uf(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const Gs="__vInternal",Ma=({key:t})=>t??null,_s=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?re(t)||pe(t)||M(t)?{i:Ue,r:t,k:e,f:!!n}:t:null);function ka(t,e=null,n=null,s=0,i=null,r=t===Le?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ma(e),ref:e&&_s(e),scopeId:Ca,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ue};return l?(Nr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=re(n)?8:16),Mn>0&&!o&&Ne&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ne.push(a),a}const He=hf;function hf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Hh)&&(t=Dn),uf(t)){const l=Qt(t,e,!0);return n&&Nr(l,n),Mn>0&&!r&&Ne&&(l.shapeFlag&6?Ne[Ne.indexOf(t)]=l:Ne.push(l)),l.patchFlag|=-2,l}if(bf(t)&&(t=t.__vccOpts),e){e=ff(e);let{class:l,style:a}=e;l&&!re(l)&&(e.class=_r(l)),Z(a)&&(ua(a)&&!O(a)&&(a=ce({},a)),e.style=nn(a))}const o=re(t)?1:Sh(t)?128:lf(t)?64:Z(t)?4:M(t)?2:0;return ka(t,e,n,s,i,o,r,!0)}function ff(t){return t?ua(t)||Gs in t?ce({},t):t:null}function Qt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?pf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ma(l),ref:e&&e.ref?n&&i?O(i)?i.concat(_s(e)):[i,_s(e)]:_s(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qt(t.ssContent),ssFallback:t.ssFallback&&Qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function df(t=" ",e=0){return He(qs,null,t,e)}function Be(t){return t==null||typeof t=="boolean"?He(Dn):O(t)?He(Le,null,t.slice()):typeof t=="object"?tt(t):He(qs,null,String(t))}function tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qt(t)}function Nr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Nr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Gs in e)?e._ctx=Ue:i===3&&Ue&&(Ue.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:Ue},n=32):(e=String(e),s&64?(n=16,e=[df(e)]):n=8);t.children=e,t.shapeFlag|=n}function pf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=_r([e.class,s.class]));else if(i==="style")e.style=nn([e.style,s.style]);else if(Ws(i)){const r=e[i],o=s[i];o&&r!==o&&!(O(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Fe(t,e,n,s=null){Oe(t,e,7,[n,s])}const _f=xa();let gf=0;function mf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||_f,r={uid:gf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Du(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ra(s,i),emitsOptions:va(s,i),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:s.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ch.bind(null,r),t.ce&&t.ce(r),r}let de=null,Rr,Mt,jo="__VUE_INSTANCE_SETTERS__";(Mt=Pi()[jo])||(Mt=Pi()[jo]=[]),Mt.push(t=>de=t),Rr=t=>{Mt.length>1?Mt.forEach(e=>e(t)):Mt[0](t)};const Xt=t=>{Rr(t),t.scope.on()},It=()=>{de&&de.scope.off(),Rr(null)};function Fa(t){return t.vnode.shapeFlag&4}let kn=!1;function yf(t,e=!1){kn=e;const{props:n,children:s}=t.vnode,i=Fa(t);Jh(t,n,i,e),tf(t,s);const r=i?vf(t,e):void 0;return kn=!1,r}function vf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ha(new Proxy(t.ctx,jh));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Ef(t):null;Xt(t),sn();const r=st(s,t,0,[t.props,i]);if(rn(),It(),ql(r)){if(r.then(It,It),e)return r.then(o=>{Vo(t,o,e)}).catch(o=>{js(o,t,0)});t.asyncDep=r}else Vo(t,r,e)}else La(t,e)}function Vo(t,e,n){M(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Z(e)&&(t.setupState=pa(e)),La(t,n)}let zo;function La(t,e,n){const s=t.type;if(!t.render){if(!e&&zo&&!s.render){const i=s.template||Sr(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=ce(ce({isCustomElement:r,delimiters:l},o),a);s.render=zo(i,c)}}t.render=s.render||Pe}Xt(t),sn(),Vh(t),rn(),It()}function Cf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ee(t,"get","$attrs"),e[n]}}))}function Ef(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Cf(t)},slots:t.slots,emit:t.emit,expose:e}}function Ar(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(pa(ha(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bn)return bn[n](t)},has(e,n){return n in e||n in bn}}))}function bf(t){return M(t)&&"__vccOpts"in t}const wf=(t,e)=>dh(t,e,kn),If=Symbol.for("v-scx"),Tf=()=>ps(If),Sf="3.3.4",xf="http://www.w3.org/2000/svg",Ct=typeof document<"u"?document:null,Ko=Ct&&Ct.createElement("template"),Nf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ct.createElementNS(xf,t):Ct.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ct.createTextNode(t),createComment:t=>Ct.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ct.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ko.innerHTML=s?`<svg>${t}</svg>`:t;const l=Ko.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Rf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Af(t,e,n){const s=t.style,i=re(n);if(n&&!i){if(e&&!re(e))for(const r in e)n[r]==null&&ji(s,r,"");for(const r in n)ji(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const qo=/\s*!important$/;function ji(t,e,n){if(O(n))n.forEach(s=>ji(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Pf(t,e);qo.test(n)?t.setProperty(tn(s),n.replace(qo,""),"important"):t[s]=n}}const Go=["Webkit","Moz","ms"],gi={};function Pf(t,e){const n=gi[e];if(n)return n;let s=Kt(e);if(s!=="filter"&&s in t)return gi[e]=s;s=Ql(s);for(let i=0;i<Go.length;i++){const r=Go[i]+s;if(r in t)return gi[e]=r}return e}const Yo="http://www.w3.org/1999/xlink";function Of(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Yo,e.slice(6,e.length)):t.setAttributeNS(Yo,e,n);else{const r=Pu(e);n==null||r&&!Xl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Df(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Xl(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Mf(t,e,n,s){t.addEventListener(e,n,s)}function kf(t,e,n,s){t.removeEventListener(e,n,s)}function Ff(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Lf(e);if(s){const c=r[e]=Uf(s,i);Mf(t,l,c,a)}else o&&(kf(t,l,o,a),r[e]=void 0)}}const Qo=/(?:Once|Passive|Capture)$/;function Lf(t){let e;if(Qo.test(t)){e={};let s;for(;s=t.match(Qo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tn(t.slice(2)),e]}let mi=0;const Bf=Promise.resolve(),Wf=()=>mi||(Bf.then(()=>mi=0),mi=Date.now());function Uf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Oe(Hf(s,n.value),e,5,[s])};return n.value=t,n.attached=Wf(),n}function Hf(t,e){if(O(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Xo=/^on[a-z]/,$f=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Rf(t,s,i):e==="style"?Af(t,n,s):Ws(e)?hr(e)||Ff(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jf(t,e,s,i))?Df(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Of(t,e,s,i))};function jf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Xo.test(e)&&M(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xo.test(e)&&re(n)?!1:e in t}const Vf=ce({patchProp:$f},Nf);let Jo;function zf(){return Jo||(Jo=sf(Vf))}const Kf=(...t)=>{const e=zf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=qf(s);if(!i)return;const r=e._component;!M(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function qf(t){return re(t)?document.querySelector(t):t}var Zo=Zf,Es=256,Gf={x:Es/2,y:Es/2},Yf=Es/360,Qf=Es/(2*Math.PI);function Xf(t,e,n){return e!=null&&(t=Math.max(t,e)),n!=null&&(t=Math.min(t,n)),t}function Jf(t){return t*(Math.PI/180)}function Zf(t,e){var n={x:null,y:null},s=Gf;n.x=s.x+t.lng*Yf;var i=Xf(Math.sin(Jf(t.lat)),-.9999,.9999);return n.y=s.y+.5*Math.log((1+i)/(1-i))*-Qf,n}const ed=["src"],td=zs({__name:"StaticMap",props:{zoom:{},center:{},mapWidth:{},mapHeight:{}},setup(t){const e=t,n=new URL("https://maps.googleapis.com/maps/api/staticmap");return n.searchParams.set("zoom",e.zoom),n.searchParams.set("center",e.center),n.searchParams.set("key","AIzaSyDImU7k6IetA47jAxOPlhWiMlWcefJoIiw"),n.searchParams.set("size",`${e.mapWidth}x${e.mapHeight}`),n.searchParams.set("scale","2"),(s,i)=>(Gt(),Yt("img",{src:An(n).toString(),style:nn({width:e.mapWidth+"px",height:e.mapHeight+"px"})},null,12,ed))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw on(e)},on=function(t){return new Error("Firebase Database ("+Ba.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Pr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new sd;const d=r<<2|l>>4;if(s.push(d),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const I=c<<6&192|h;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ua=function(t){const e=Wa(t);return Pr.encodeByteArray(e,!0)},bs=function(t){return Ua(t).replace(/\./g,"")},Vi=function(t){try{return Pr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t){return Ha(void 0,t)}function Ha(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rd(n)||(t[n]=Ha(t[n],e[n]));return t}function rd(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=()=>od().__FIREBASE_DEFAULTS__,ad=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vi(t[1]);return e&&JSON.parse(e)},$a=()=>{try{return ld()||ad()||cd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ud=t=>{var e,n;return(n=(e=$a())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hd=t=>{const e=ud(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ja=()=>{var t;return(t=$a())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[bs(JSON.stringify(n)),bs(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Va(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dd())}function pd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function za(){return Ba.NODE_ADMIN===!0}function _d(){try{return typeof indexedDB=="object"}catch{return!1}}function gd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="FirebaseError";class qn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=md,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ka.prototype.create)}}class Ka{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?yd(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new qn(i,l,s)}}function yd(t,e){return t.replace(vd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const vd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){return JSON.parse(t)}function ae(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Fn(Vi(r[0])||""),n=Fn(Vi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Cd=function(t){const e=qa(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ed=function(t){const e=qa(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Jt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function el(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ws(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function zi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(tl(r)&&tl(o)){if(!zi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function tl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Qs(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xs=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t){return t&&t._delegate?t._delegate:t}class Ln{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ys;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xd(e))try{this.getOrInitializeService({instanceIdentifier:mt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mt){return this.instances.has(e)}getOptions(e=mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=mt){return this.component?this.component.multipleInstances?e:mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sd(t){return t===mt?void 0:t}function xd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Td(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const Rd={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Ad=q.INFO,Pd={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Od=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Pd[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ga{constructor(e){this.name=e,this._logLevel=Ad,this._logHandler=Od,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const Dd=(t,e)=>e.some(n=>t instanceof n);let nl,sl;function Md(){return nl||(nl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kd(){return sl||(sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ya=new WeakMap,Ki=new WeakMap,Qa=new WeakMap,yi=new WeakMap,Or=new WeakMap;function Fd(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(it(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ya.set(n,t)}).catch(()=>{}),Or.set(e,t),e}function Ld(t){if(Ki.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ki.set(t,e)}let qi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ki.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return it(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bd(t){qi=t(qi)}function Wd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(vi(this),e,...n);return Qa.set(s,e.sort?e.sort():[e]),it(s)}:kd().includes(t)?function(...e){return t.apply(vi(this),e),it(Ya.get(this))}:function(...e){return it(t.apply(vi(this),e))}}function Ud(t){return typeof t=="function"?Wd(t):(t instanceof IDBTransaction&&Ld(t),Dd(t,Md())?new Proxy(t,qi):t)}function it(t){if(t instanceof IDBRequest)return Fd(t);if(yi.has(t))return yi.get(t);const e=Ud(t);return e!==t&&(yi.set(t,e),Or.set(e,t)),e}const vi=t=>Or.get(t);function Hd(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=it(o);return s&&o.addEventListener("upgradeneeded",a=>{s(it(o.result),a.oldVersion,a.newVersion,it(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const $d=["get","getKey","getAll","getAllKeys","count"],jd=["put","add","delete","clear"],Ci=new Map;function il(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ci.get(e))return Ci.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=jd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||$d.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ci.set(e,r),r}Bd(t=>({...t,get:(e,n,s)=>il(e,n)||t.get(e,n,s),has:(e,n)=>!!il(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gi="@firebase/app",rl="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new Ga("@firebase/app"),Kd="@firebase/app-compat",qd="@firebase/analytics-compat",Gd="@firebase/analytics",Yd="@firebase/app-check-compat",Qd="@firebase/app-check",Xd="@firebase/auth",Jd="@firebase/auth-compat",Zd="@firebase/database",ep="@firebase/database-compat",tp="@firebase/functions",np="@firebase/functions-compat",sp="@firebase/installations",ip="@firebase/installations-compat",rp="@firebase/messaging",op="@firebase/messaging-compat",lp="@firebase/performance",ap="@firebase/performance-compat",cp="@firebase/remote-config",up="@firebase/remote-config-compat",hp="@firebase/storage",fp="@firebase/storage-compat",dp="@firebase/firestore",pp="@firebase/firestore-compat",_p="firebase",gp="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="[DEFAULT]",mp={[Gi]:"fire-core",[Kd]:"fire-core-compat",[Gd]:"fire-analytics",[qd]:"fire-analytics-compat",[Qd]:"fire-app-check",[Yd]:"fire-app-check-compat",[Xd]:"fire-auth",[Jd]:"fire-auth-compat",[Zd]:"fire-rtdb",[ep]:"fire-rtdb-compat",[tp]:"fire-fn",[np]:"fire-fn-compat",[sp]:"fire-iid",[ip]:"fire-iid-compat",[rp]:"fire-fcm",[op]:"fire-fcm-compat",[lp]:"fire-perf",[ap]:"fire-perf-compat",[cp]:"fire-rc",[up]:"fire-rc-compat",[hp]:"fire-gcs",[fp]:"fire-gcs-compat",[dp]:"fire-fst",[pp]:"fire-fst-compat","fire-js":"fire-js",[_p]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Map,Qi=new Map;function yp(t,e){try{t.container.addComponent(e)}catch(n){St.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ts(t){const e=t.name;if(Qi.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;Qi.set(e,t);for(const n of Is.values())yp(n,t);return!0}function vp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rt=new Ka("app","Firebase",Cp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=gp;function Xa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Yi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw rt.create("bad-app-name",{appName:String(i)});if(n||(n=ja()),!n)throw rt.create("no-options");const r=Is.get(i);if(r){if(zi(n,r.options)&&zi(s,r.config))return r;throw rt.create("duplicate-app",{appName:i})}const o=new Nd(i);for(const a of Qi.values())o.addComponent(a);const l=new Ep(n,s,o);return Is.set(i,l),l}function wp(t=Yi){const e=Is.get(t);if(!e&&t===Yi&&ja())return Xa();if(!e)throw rt.create("no-app",{appName:t});return e}function $t(t,e,n){var s;let i=(s=mp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(l.join(" "));return}Ts(new Ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="firebase-heartbeat-database",Tp=1,Bn="firebase-heartbeat-store";let Ei=null;function Ja(){return Ei||(Ei=Hd(Ip,Tp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bn)}}}).catch(t=>{throw rt.create("idb-open",{originalErrorMessage:t.message})})),Ei}async function Sp(t){try{return await(await Ja()).transaction(Bn).objectStore(Bn).get(Za(t))}catch(e){if(e instanceof qn)St.warn(e.message);else{const n=rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(n.message)}}}async function ol(t,e){try{const s=(await Ja()).transaction(Bn,"readwrite");await s.objectStore(Bn).put(e,Za(t)),await s.done}catch(n){if(n instanceof qn)St.warn(n.message);else{const s=rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});St.warn(s.message)}}}function Za(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=1024,Np=30*24*60*60*1e3;class Rp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ll();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Np}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ll(),{heartbeatsToSend:n,unsentEntries:s}=Ap(this._heartbeatsCache.heartbeats),i=bs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ll(){return new Date().toISOString().substring(0,10)}function Ap(t,e=xp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),al(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),al(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Pp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _d()?gd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ol(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ol(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function al(t){return bs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t){Ts(new Ln("platform-logger",e=>new Vd(e),"PRIVATE")),Ts(new Ln("heartbeat",e=>new Rp(e),"PRIVATE")),$t(Gi,rl,t),$t(Gi,rl,"esm2017"),$t("fire-js","")}Op("");var Dp="firebase",Mp="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(Dp,Mp,"app");const cl="@firebase/database",ul="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec="";function kp(t){ec=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return $e(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Fp(e)}}catch{}return new Lp},Et=tc("localStorage"),Xi=tc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Ga("@firebase/database"),Bp=function(){let t=1;return function(){return t++}}(),nc=function(t){const e=Id(t),n=new wd;n.update(e);const s=n.digest();return Pr.encodeByteArray(s)},Gn=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Gn.apply(null,s):typeof s=="object"?e+=ae(s):e+=s,e+=" "}return e};let Tt=null,hl=!0;const Wp=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(jt.logLevel=q.VERBOSE,Tt=jt.log.bind(jt),e&&Xi.set("logging_enabled",!0)):typeof t=="function"?Tt=t:(Tt=null,Xi.remove("logging_enabled"))},he=function(...t){if(hl===!0&&(hl=!1,Tt===null&&Xi.get("logging_enabled")===!0&&Wp(!0)),Tt){const e=Gn.apply(null,t);Tt(e)}},Yn=function(t){return function(...e){he(t,...e)}},Ji=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gn(...t);jt.error(e)},Ge=function(...t){const e=`FIREBASE FATAL ERROR: ${Gn(...t)}`;throw jt.error(e),new Error(e)},Ce=function(...t){const e="FIREBASE WARNING: "+Gn(...t);jt.warn(e)},Up=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Hp=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xt="[MIN_NAME]",Ye="[MAX_NAME]",an=function(t,e){if(t===e)return 0;if(t===xt||e===Ye)return-1;if(e===xt||t===Ye)return 1;{const n=fl(t),s=fl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},$p=function(t,e){return t===e?0:t<e?-1:1},gn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ae(e))},Mr=function(t){if(typeof t!="object"||t===null)return ae(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ae(e[s]),n+=":",n+=Mr(t[e[s]]);return n+="}",n},sc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ic=function(t){C(!Dr(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},jp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Vp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Kp=new RegExp("^-?(0*)\\d{1,10}$"),qp=-2147483648,Gp=2147483647,fl=function(t){if(Kp.test(t)){const e=Number(t);if(e>=qp&&e<=Gp)return e}return null},cn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ce("Exception was thrown by user callback.",n),e},Math.floor(0))}},Yp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},In=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(he("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ce(e)}}class Vt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="5",rc="v",oc="s",lc="r",ac="f",cc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uc="ls",hc="p",Zi="ac",fc="websocket",dc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Et.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Et.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Jp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _c(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===fc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===dc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Jp(t)&&(n.ns=t.namespace);const i=[];return be(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.counters_={}}incrementCounter(e,n=1){$e(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return id(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi={},wi={};function Fr(t){const e=t.toString();return bi[e]||(bi[e]=new Zp),bi[e]}function e_(t,e){const n=t.toString();return wi[n]||(wi[n]=e()),wi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&cn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="start",n_="close",s_="pLPCommand",i_="pRTLPCB",gc="id",mc="pw",yc="ser",r_="cb",o_="seg",l_="ts",a_="d",c_="dframe",vc=1870,Cc=30,u_=vc-Cc,h_=25e3,f_=3e4;class Lt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yn(e),this.stats_=Fr(n),this.urlFn=a=>(this.appCheckToken&&(a[Zi]=this.appCheckToken),_c(n,dc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new t_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(f_)),Hp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dl)this.id=l,this.password=a;else if(o===n_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[dl]="t",s[yc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[r_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[rc]=kr,this.transportSessionId&&(s[oc]=this.transportSessionId),this.lastSessionId&&(s[uc]=this.lastSessionId),this.applicationId&&(s[hc]=this.applicationId),this.appCheckToken&&(s[Zi]=this.appCheckToken),typeof location<"u"&&location.hostname&&cc.test(location.hostname)&&(s[lc]=ac);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Lt.forceAllow_=!0}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){return Lt.forceAllow_?!0:!Lt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jp()&&!Vp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ua(n),i=sc(s,u_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[c_]="t",s[gc]=e,s[mc]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Bp(),window[s_+this.uniqueCallbackIdentifier]=e,window[i_+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){he("frame writing exception"),l.stack&&he(l.stack),he(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||he("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gc]=this.myID,e[mc]=this.myPW,e[yc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cc+s.length<=vc;){const o=this.pendingSegs.shift();s=s+"&"+o_+i+"="+o.seg+"&"+l_+i+"="+o.ts+"&"+a_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(h_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{he("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=16384,p_=45e3;let Ss=null;typeof MozWebSocket<"u"?Ss=MozWebSocket:typeof WebSocket<"u"&&(Ss=WebSocket);class xe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yn(this.connId),this.stats_=Fr(n),this.connURL=xe.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[rc]=kr,typeof location<"u"&&location.hostname&&cc.test(location.hostname)&&(o[lc]=ac),n&&(o[oc]=n),s&&(o[uc]=s),i&&(o[Zi]=i),r&&(o[hc]=r),_c(e,fc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Et.set("previous_websocket_failure",!0);try{let s;za(),this.mySock=new Ss(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ss!==null&&!xe.forceDisallow_}static previouslyFailed(){return Et.isInMemoryStorage||Et.get("previous_websocket_failure")===!0}markConnectionHealthy(){Et.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Fn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=sc(n,d_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(p_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xe.responsesRequiredToBeHealthy=2;xe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Lt,xe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=xe&&xe.isAvailable();let s=n&&!xe.previouslyFailed();if(e.webSocketOnly&&(n||Ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[xe];else{const i=this.transports_=[];for(const r of Wn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Wn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=6e4,g_=5e3,m_=10*1024,y_=100*1024,Ii="t",pl="d",v_="s",_l="r",C_="e",gl="o",ml="a",yl="n",vl="p",E_="h";class b_{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yn("c:"+this.id+":"),this.transportManager_=new Wn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=In(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>y_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>m_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ii in e){const n=e[Ii];n===ml?this.upgradeIfSecondaryHealthy_():n===_l?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===gl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gn("t",e),s=gn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ml,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gn("t",e),s=gn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gn(Ii,e);if(pl in e){const s=e[pl];if(n===E_){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===yl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===v_?this.onConnectionShutdown_(s):n===_l?this.onReset_(s):n===C_?Ji("Server Error: "+s):n===gl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ji("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),kr!==s&&Ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),In(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(__))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):In(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(g_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Et.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends bc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Va()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xs}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=32,El=768;class V{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new V("")}function k(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ct(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new V(t.pieces_,e)}function wc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function w_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ic(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Tc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new V(e,0)}function ie(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof V)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new V(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function ye(t,e){const n=k(t),s=k(e);if(n===null)return e;if(n===s)return ye(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Br(t,e){if(ct(t)!==ct(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Re(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ct(t)>ct(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class I_{constructor(e,n){this.errorPrefix_=n,this.parts_=Ic(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Xs(this.parts_[s]);Sc(this)}}function T_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Xs(e),Sc(t)}function S_(t){const e=t.parts_.pop();t.byteLength_-=Xs(e),t.parts_.length>0&&(t.byteLength_-=1)}function Sc(t){if(t.byteLength_>El)throw new Error(t.errorPrefix_+"has a key path longer than "+El+" bytes ("+t.byteLength_+").");if(t.parts_.length>Cl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cl+") or object contains a cycle "+yt(t))}function yt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends bc{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Wr}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=1e3,x_=60*5*1e3,bl=30*1e3,N_=1.3,R_=3e4,A_="server_kill",wl=3;class Ke extends Ec{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ke.nextPersistentConnectionId_++,this.log_=Yn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=mn,this.maxReconnectDelay_=x_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!za())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ae(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ys,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Ke.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&$e(e,"w")){const s=Jt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ed(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Cd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ae(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ji("Unrecognized action received from server: "+ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>R_&&(this.reconnectDelay_=mn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*N_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ke.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?he("getToken() completed but was canceled"):(he("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new b_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Ce(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(A_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ce(h),a())}}}interrupt(e){he("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){he("Resuming connection for reason: "+e),delete this.interruptReasons_[e],el(this.interruptReasons_)&&(this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Mr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new V(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){he("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wl&&(this.reconnectDelay_=bl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){he("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ec.replace(/\./g,"-")]=1,Va()?e["framework.cordova"]=1:pd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xs.getInstance().currentlyOnline();return el(this.interruptReasons_)&&e}}Ke.nextPersistentConnectionId_=0;Ke.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new L(xt,e),i=new L(xt,n);return this.compare(s,i)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us;class xc extends Js{static get __EMPTY_NODE(){return us}static set __EMPTY_NODE(e){us=e}compare(e,n){return an(e.name,n.name)}isDefinedOn(e){throw on("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(Ye,us)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,us)}toString(){return".key"}}const ot=new xc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class le{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??le.RED,this.left=i??ve.EMPTY_NODE,this.right=r??ve.EMPTY_NODE}copy(e,n,s,i,r){return new le(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ve.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}le.RED=!0;le.BLACK=!1;class P_{copy(e,n,s,i,r){return this}insert(e,n,s){return new le(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ve{constructor(e,n=ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,le.BLACK,null,null))}remove(e){return new ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,le.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new hs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new hs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new hs(this.root_,null,this.comparator_,!0,e)}}ve.EMPTY_NODE=new P_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t,e){return an(t.name,e.name)}function Ur(t,e){return an(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er;function D_(t){er=t}const Nc=function(t){return typeof t=="number"?"number:"+ic(t):"string:"+t},Rc=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$e(e,".sv"),"Priority must be a string or number.")}else C(t===er||t.isEmpty(),"priority of unexpected type.");C(t===er||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il;class oe{constructor(e,n=oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rc(this.priorityNode_)}static set __childrenNodeConstructor(e){Il=e}static get __childrenNodeConstructor(){return Il}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:k(e)===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=k(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||ct(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Nc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ic(this.value_):e+=this.value_,this.lazyHash_=nc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof oe.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=oe.VALUE_TYPE_ORDER.indexOf(n),r=oe.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac,Pc;function M_(t){Ac=t}function k_(t){Pc=t}class F_ extends Js{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?an(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Ye,new oe("[PRIORITY-POST]",Pc))}makePost(e,n){const s=Ac(e);return new L(n,new oe("[PRIORITY-POST]",s))}toString(){return".priority"}}const J=new F_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=Math.log(2);class B_{constructor(e){const n=r=>parseInt(Math.log(r)/L_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ns=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new le(d,h.node,le.BLACK,null,null);{const g=parseInt(u/2,10)+a,I=i(a,g),S=i(g+1,c);return h=t[g],d=n?n(h):h,new le(d,h.node,le.BLACK,I,S)}},r=function(a){let c=null,u=null,h=t.length;const d=function(I,S){const W=h-I,X=h;h-=I;const te=i(W+1,X),ne=t[W],D=n?n(ne):ne;g(new le(D,ne.node,S,null,te))},g=function(I){c?(c.left=I,c=I):(u=I,c=I)};for(let I=0;I<a.count;++I){const S=a.nextBitIsOne(),W=Math.pow(2,a.count-(I+1));S?d(W,le.BLACK):(d(W,le.BLACK),d(W,le.RED))}return u},o=new B_(t.length),l=r(o);return new ve(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;const kt={};class ze{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(kt&&J,"ChildrenNode.ts has not been loaded"),Ti=Ti||new ze({".priority":kt},{".priority":J}),Ti}get(e){const n=Jt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ve?n:null}hasIndex(e){return $e(this.indexSet_,e.toString())}addIndex(e,n){C(e!==ot,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(L.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ns(s,e.getCompare()):l=kt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new ze(u,c)}addToIndexes(e,n){const s=ws(this.indexes_,(i,r)=>{const o=Jt(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===kt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ns(l,o.getCompare())}else return kt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new ze(s,this.indexSet_)}removeFromIndexes(e,n){const s=ws(this.indexes_,i=>{if(i===kt)return i;{const r=n.get(e.name);return r?i.remove(new L(e.name,r)):i}});return new ze(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn;class A{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Rc(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yn||(yn=new A(new ve(Ur),null,ze.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yn}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yn:n}}getChild(e){const n=k(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new L(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?yn:this.priorityNode_;return new A(i,o,r)}}updateChild(e,n){const s=k(e);if(s===null)return n;{C(k(e)!==".priority"||ct(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(G(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(J,(o,l)=>{n[o]=l.val(e),s++,r&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Nc(this.getPriority().val())+":"),this.forEachChild(J,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":nc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new L(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qn?-1:0}withIndex(e){if(e===ot||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ot||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(J),i=n.getIterator(J);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ot?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class W_ extends A{constructor(){super(new ve(Ur),A.EMPTY_NODE,ze.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Qn=new W_;Object.defineProperties(L,{MIN:{value:new L(xt,A.EMPTY_NODE)},MAX:{value:new L(Ye,Qn)}});xc.__EMPTY_NODE=A.EMPTY_NODE;oe.__childrenNodeConstructor=A;D_(Qn);k_(Qn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=!0;function ue(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new oe(n,ue(e))}if(!(t instanceof Array)&&U_){const n=[];let s=!1;if(be(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ue(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return A.EMPTY_NODE;const r=Ns(n,O_,o=>o.name,Ur);if(s){const o=Ns(n,J.getCompare());return new A(r,ue(e),new ze({".priority":o},{".priority":J}))}else return new A(r,ue(e),ze.Default)}else{let n=A.EMPTY_NODE;return be(t,(s,i)=>{if($e(t,s)&&s.substring(0,1)!=="."){const r=ue(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ue(e))}}M_(ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Js{constructor(e){super(),this.indexPath_=e,C(!F(e)&&k(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?an(e.name,n.name):r}makePost(e,n){const s=ue(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,s);return new L(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Qn);return new L(Ye,e)}toString(){return Ic(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_ extends Js{compare(e,n){const s=e.node.compareTo(n.node);return s===0?an(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const s=ue(e);return new L(n,s)}toString(){return".value"}}const Oc=new H_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){return{type:"value",snapshotNode:t}}function Zt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Un(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Hn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function $_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Un(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Zt(n,s)):o.trackChildChange(Hn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(J,(i,r)=>{n.hasChild(i)||s.trackChildChange(Un(i,r))}),n.isLeafNode()||n.forEachChild(J,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Hn(i,r,o))}else s.trackChildChange(Zt(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.indexedFilter_=new $r(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$n.getStartPost_(e),this.endPost_=$n.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new L(n,s))||(s=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const r=this;return n.forEachChild(J,(o,l)=>{r.matches(new L(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new $n(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new L(n,s))||(s=A.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new L(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(Hn(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Un(n,h));const S=l.updateImmediateChild(n,A.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Zt(d.name,d.node)),S.updateImmediateChild(d.name,d.node)):S}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Un(c.name,c.node)),r.trackChildChange(Zt(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=J}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xt}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ye}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===J}copy(){const e=new jr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function V_(t){return t.loadsAllData()?new $r(t.getIndex()):t.hasLimit()?new j_(t):new $n(t)}function z_(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function Tl(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function K_(t,e,n){let s;return t.index_===ot||n?s=Tl(t,e,n):s=Tl(t,e,Ye),s.startAfterSet_=!0,s}function q_(t,e){const n=t.copy();return n.index_=e,n}function Sl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===J?n="$priority":t.index_===Oc?n="$value":t.index_===ot?n="$key":(C(t.index_ instanceof Hr,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ae(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ae(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ae(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ae(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function xl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==J&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Ec{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Yn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Rs.getListenId_(e,s),l={};this.listens_[o]=l;const a=Sl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Jt(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Rs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Sl(e._queryParams),s=e._path.toString(),i=new Ys;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bd(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Fn(l.responseText)}catch{Ce("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ce("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(){return{value:null,children:new Map}}function Mc(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=k(e);t.children.has(s)||t.children.set(s,As());const i=t.children.get(s);e=G(e),Mc(i,e,n)}}function tr(t,e,n){t.value!==null?n(e,t.value):Y_(t,(s,i)=>{const r=new V(e.toString()+"/"+s);tr(i,r,n)})}function Y_(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&be(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=10*1e3,X_=30*1e3,J_=5*60*1e3;class Z_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Q_(e);const s=Nl+(X_-Nl)*Math.random();In(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;be(e,(i,r)=>{r>0&&$e(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),In(this.reportStats_.bind(this),Math.floor(Math.random()*2*J_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ae||(Ae={}));function kc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ae.ACK_USER_WRITE,this.source=kc()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new V(e));return new Ps(H(),n,this.revert)}}else return C(k(this.path)===e,"operationForChild called for unrelated child."),new Ps(G(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n){this.source=e,this.path=n,this.type=Ae.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new jn(this.source,H()):new jn(this.source,G(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ae.OVERWRITE}operationForChild(e){return F(this.path)?new Nt(this.source,H(),this.snap.getImmediateChild(e)):new Nt(this.source,G(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ae.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new V(e));return n.isEmpty()?null:n.value?new Nt(this.source,H(),n.value):new Vn(this.source,H(),n)}else return C(k(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vn(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=k(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push($_(o.childName,o.snapshotNode))}),vn(t,i,"child_removed",e,s,n),vn(t,i,"child_added",e,s,n),vn(t,i,"child_moved",r,s,n),vn(t,i,"child_changed",e,s,n),vn(t,i,"value",e,s,n),i}function vn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>sg(t,l,a)),o.forEach(l=>{const a=ng(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function ng(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function sg(t,e,n){if(e.childName==null||n.childName==null)throw on("Should only compare child_ events.");const s=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t,e){return{eventCache:t,serverCache:e}}function Tn(t,e,n,s){return Zs(new Rt(e,n,s),t.serverCache)}function Fc(t,e,n,s){return Zs(t.eventCache,new Rt(e,n,s))}function nr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function At(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si;const ig=()=>(Si||(Si=new ve($p)),Si);class Y{constructor(e,n=ig()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return be(e,(s,i)=>{n=n.set(new V(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(F(e))return null;{const s=k(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(G(e),n);return r!=null?{path:ie(new V(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=k(e),s=this.children.get(n);return s!==null?s.subtree(G(e)):new Y(null)}}set(e,n){if(F(e))return new Y(n,this.children);{const s=k(e),r=(this.children.get(s)||new Y(null)).set(G(e),n),o=this.children.insert(s,r);return new Y(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=k(e),s=this.children.get(n);if(s){const i=s.remove(G(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Y(null):new Y(this.value,r)}else return this}}get(e){if(F(e))return this.value;{const n=k(e),s=this.children.get(n);return s?s.get(G(e)):null}}setTree(e,n){if(F(e))return n;{const s=k(e),r=(this.children.get(s)||new Y(null)).setTree(G(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Y(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ie(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(F(e))return null;{const r=k(e),o=this.children.get(r);return o?o.findOnPath_(G(e),ie(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,s){if(F(e))return this;{this.value&&s(n,this.value);const i=k(e),r=this.children.get(i);return r?r.foreachOnPath_(G(e),ie(n,i),s):new Y(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ie(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.writeTree_=e}static empty(){return new De(new Y(null))}}function Sn(t,e,n){if(F(e))return new De(new Y(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ye(i,e);return r=r.updateChild(o,n),new De(t.writeTree_.set(i,r))}else{const i=new Y(n),r=t.writeTree_.setTree(e,i);return new De(r)}}}function Rl(t,e,n){let s=t;return be(n,(i,r)=>{s=Sn(s,ie(e,i),r)}),s}function Al(t,e){if(F(e))return De.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new De(n)}}function sr(t,e){return Pt(t,e)!=null}function Pt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ye(n.path,e)):null}function Pl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(J,(s,i)=>{e.push(new L(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new L(s,i.value))}),e}function lt(t,e){if(F(e))return t;{const n=Pt(t,e);return n!=null?new De(new Y(n)):new De(t.writeTree_.subtree(e))}}function ir(t){return t.writeTree_.isEmpty()}function en(t,e){return Lc(H(),t.writeTree_,e)}function Lc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Lc(ie(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ie(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t,e){return Hc(e,t)}function rg(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Sn(t.visibleWrites,e,n)),t.lastWriteId=s}function og(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function lg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&ag(l,s.path)?i=!1:Re(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return cg(t),!0;if(s.snap)t.visibleWrites=Al(t.visibleWrites,s.path);else{const l=s.children;be(l,a=>{t.visibleWrites=Al(t.visibleWrites,ie(s.path,a))})}return!0}else return!1}function ag(t,e){if(t.snap)return Re(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Re(ie(t.path,n),e))return!0;return!1}function cg(t){t.visibleWrites=Bc(t.allWrites,ug,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ug(t){return t.visible}function Bc(t,e,n){let s=De.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Re(n,o)?(l=ye(n,o),s=Sn(s,l,r.snap)):Re(o,n)&&(l=ye(o,n),s=Sn(s,H(),r.snap.getChild(l)));else if(r.children){if(Re(n,o))l=ye(n,o),s=Rl(s,l,r.children);else if(Re(o,n))if(l=ye(o,n),F(l))s=Rl(s,H(),r.children);else{const a=Jt(r.children,k(l));if(a){const c=a.getChild(G(l));s=Sn(s,H(),c)}}}else throw on("WriteRecord should have .snap or .children")}}return s}function Wc(t,e,n,s,i){if(!s&&!i){const r=Pt(t.visibleWrites,e);if(r!=null)return r;{const o=lt(t.visibleWrites,e);if(ir(o))return n;if(n==null&&!sr(o,H()))return null;{const l=n||A.EMPTY_NODE;return en(o,l)}}}else{const r=lt(t.visibleWrites,e);if(!i&&ir(r))return n;if(!i&&n==null&&!sr(r,H()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Re(c.path,e)||Re(e,c.path))},l=Bc(t.allWrites,o,e),a=n||A.EMPTY_NODE;return en(l,a)}}}function hg(t,e,n){let s=A.EMPTY_NODE;const i=Pt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(J,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=lt(t.visibleWrites,e);return n.forEachChild(J,(o,l)=>{const a=en(lt(r,new V(o)),l);s=s.updateImmediateChild(o,a)}),Pl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=lt(t.visibleWrites,e);return Pl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function fg(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ie(e,n);if(sr(t.visibleWrites,r))return null;{const o=lt(t.visibleWrites,r);return ir(o)?i.getChild(n):en(o,i.getChild(n))}}function dg(t,e,n,s){const i=ie(e,n),r=Pt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=lt(t.visibleWrites,i);return en(o,s.getNode().getImmediateChild(n))}else return null}function pg(t,e){return Pt(t.visibleWrites,e)}function _g(t,e,n,s,i,r,o){let l;const a=lt(t.visibleWrites,e),c=Pt(a,H());if(c!=null)l=c;else if(n!=null)l=en(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function gg(){return{visibleWrites:De.empty(),allWrites:[],lastWriteId:-1}}function Os(t,e,n,s){return Wc(t.writeTree,t.treePath,e,n,s)}function qr(t,e){return hg(t.writeTree,t.treePath,e)}function Ol(t,e,n,s){return fg(t.writeTree,t.treePath,e,n,s)}function Ds(t,e){return pg(t.writeTree,ie(t.treePath,e))}function mg(t,e,n,s,i,r){return _g(t.writeTree,t.treePath,e,n,s,i,r)}function Gr(t,e,n){return dg(t.writeTree,t.treePath,e,n)}function Uc(t,e){return Hc(ie(t.treePath,e),t.writeTree)}function Hc(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Hn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Un(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Zt(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Hn(s,e.snapshotNode,i.oldSnap));else throw on("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const $c=new vg;class Yr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Rt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:At(this.viewCache_),r=mg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){return{filter:t}}function Eg(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function bg(t,e,n,s,i){const r=new yg;let o,l;if(n.type===Ae.OVERWRITE){const c=n;c.source.fromUser?o=rr(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=Ms(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ae.MERGE){const c=n;c.source.fromUser?o=Ig(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=or(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ae.ACK_USER_WRITE){const c=n;c.revert?o=xg(t,e,c.path,s,i,r):o=Tg(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ae.LISTEN_COMPLETE)o=Sg(t,e,n.path,s,r);else throw on("Unknown operation type: "+n.type);const a=r.getChanges();return wg(e,o,a),{viewCache:o,changes:a}}function wg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=nr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Dc(nr(e)))}}function jc(t,e,n,s,i,r){const o=e.eventCache;if(Ds(s,n)!=null)return e;{let l,a;if(F(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=At(e),u=c instanceof A?c:A.EMPTY_NODE,h=qr(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Os(s,At(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=k(n);if(c===".priority"){C(ct(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Ol(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=G(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Ol(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Gr(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Tn(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function Ms(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(F(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=k(n);if(!a.isCompleteForPath(n)&&ct(n)>1)return e;const I=G(n),W=a.getNode().getImmediateChild(g).updateChild(I,s);g===".priority"?c=u.updatePriority(a.getNode(),W):c=u.updateChild(a.getNode(),g,W,I,$c,null)}const h=Fc(e,c,a.isFullyInitialized()||F(n),u.filtersNodes()),d=new Yr(i,h,r);return jc(t,h,n,i,d,l)}function rr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Yr(i,e,r);if(F(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Tn(e,c,!0,t.filter.filtersNodes());else{const h=k(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Tn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=G(n),g=l.getNode().getImmediateChild(h);let I;if(F(d))I=s;else{const S=u.getCompleteChild(h);S!=null?wc(d)===".priority"&&S.getChild(Tc(d)).isEmpty()?I=S:I=S.updateChild(d,s):I=A.EMPTY_NODE}if(g.equals(I))a=e;else{const S=t.filter.updateChild(l.getNode(),h,I,d,u,o);a=Tn(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Dl(t,e){return t.eventCache.isCompleteForChild(e)}function Ig(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=ie(n,a);Dl(e,k(u))&&(l=rr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=ie(n,a);Dl(e,k(u))||(l=rr(t,l,u,c,i,r,o))}),l}function Ml(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function or(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;F(n)?c=s:c=new Y(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),I=Ml(t,g,d);a=Ms(t,a,new V(h),I,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const I=e.serverCache.getNode().getImmediateChild(h),S=Ml(t,I,d);a=Ms(t,a,new V(h),S,i,r,o,l)}}),a}function Tg(t,e,n,s,i,r,o){if(Ds(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ms(t,e,n,a.getNode().getChild(n),i,r,l,o);if(F(n)){let c=new Y(null);return a.getNode().forEachChild(ot,(u,h)=>{c=c.set(new V(u),h)}),or(t,e,n,c,i,r,l,o)}else return e}else{let c=new Y(null);return s.foreach((u,h)=>{const d=ie(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),or(t,e,n,c,i,r,l,o)}}function Sg(t,e,n,s,i){const r=e.serverCache,o=Fc(e,r.getNode(),r.isFullyInitialized()||F(n),r.isFiltered());return jc(t,o,n,s,$c,i)}function xg(t,e,n,s,i,r){let o;if(Ds(s,n)!=null)return e;{const l=new Yr(s,e,i),a=e.eventCache.getNode();let c;if(F(n)||k(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Os(s,At(e));else{const h=e.serverCache.getNode();C(h instanceof A,"serverChildren would be complete if leaf node"),u=qr(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=k(n);let h=Gr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,G(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,A.EMPTY_NODE,G(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Os(s,At(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ds(s,H())!=null,Tn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new $r(s.getIndex()),r=V_(s);this.processor_=Cg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(A.EMPTY_NODE,l.getNode(),null),u=new Rt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Rt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Zs(h,u),this.eventGenerator_=new eg(this.query_)}get query(){return this.query_}}function Rg(t){return t.viewCache_.serverCache.getNode()}function Ag(t,e){const n=At(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(k(e)).isEmpty())?n.getChild(e):null}function kl(t){return t.eventRegistrations_.length===0}function Pg(t,e){t.eventRegistrations_.push(e)}function Fl(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ll(t,e,n,s){e.type===Ae.MERGE&&e.source.queryId!==null&&(C(At(t.viewCache_),"We should always have a full cache before handling merges"),C(nr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=bg(t.processor_,i,e,n,s);return Eg(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Vc(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Og(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(J,(r,o)=>{s.push(Zt(r,o))}),n.isFullyInitialized()&&s.push(Dc(n.getNode())),Vc(t,s,n.getNode(),e)}function Vc(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return tg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks;class Dg{constructor(){this.views=new Map}}function Mg(t){C(!ks,"__referenceConstructor has already been defined"),ks=t}function kg(){return C(ks,"Reference.ts has not been loaded"),ks}function Fg(t){return t.views.size===0}function Qr(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),Ll(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ll(o,e,n,s));return r}}function Lg(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Os(n,i?s:null),a=!1;l?a=!0:s instanceof A?(l=qr(n,s),a=!1):(l=A.EMPTY_NODE,a=!1);const c=Zs(new Rt(l,a,!1),new Rt(s,i,!1));return new Ng(e,c)}return o}function Bg(t,e,n,s,i,r){const o=Lg(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Pg(o,n),Og(o,n)}function Wg(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=ut(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Fl(c,n,s)),kl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Fl(a,n,s)),kl(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!ut(t)&&r.push(new(kg())(e._repo,e._path)),{removed:r,events:o}}function zc(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function zt(t,e){let n=null;for(const s of t.views.values())n=n||Ag(s,e);return n}function Kc(t,e){if(e._queryParams.loadsAllData())return ei(t);{const s=e._queryIdentifier;return t.views.get(s)}}function qc(t,e){return Kc(t,e)!=null}function ut(t){return ei(t)!=null}function ei(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;function Ug(t){C(!Fs,"__referenceConstructor has already been defined"),Fs=t}function Hg(){return C(Fs,"Reference.ts has not been loaded"),Fs}let $g=1;class Bl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=gg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gc(t,e,n,s,i){return rg(t.pendingWriteTree_,e,n,s,i),i?Xn(t,new Nt(kc(),e,n)):[]}function bt(t,e,n=!1){const s=og(t.pendingWriteTree_,e);if(lg(t.pendingWriteTree_,e)){let r=new Y(null);return s.snap!=null?r=r.set(H(),!0):be(s.children,o=>{r=r.set(new V(o),!0)}),Xn(t,new Ps(s.path,r,n))}else return[]}function ti(t,e,n){return Xn(t,new Nt(Vr(),e,n))}function jg(t,e,n){const s=Y.fromObject(n);return Xn(t,new Vn(Vr(),e,s))}function Vg(t,e){return Xn(t,new jn(Vr(),e))}function zg(t,e,n){const s=Jr(t,n);if(s){const i=Zr(s),r=i.path,o=i.queryId,l=ye(r,e),a=new jn(zr(o),l);return eo(t,r,a)}else return[]}function lr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||qc(o,e))){const a=Wg(o,e,n,s);Fg(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>ut(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=Gg(d);for(let I=0;I<g.length;++I){const S=g[I],W=S.query,X=Xc(t,S);t.listenProvider_.startListening(xn(W),Ls(t,W),X.hashFn,X.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(xn(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(ni(d));t.listenProvider_.stopListening(xn(d),g)}))}Yg(t,c)}return l}function Kg(t,e,n,s){const i=Jr(t,s);if(i!=null){const r=Zr(i),o=r.path,l=r.queryId,a=ye(o,e),c=new Nt(zr(l),a,n);return eo(t,o,c)}else return[]}function qg(t,e,n,s){const i=Jr(t,s);if(i){const r=Zr(i),o=r.path,l=r.queryId,a=ye(o,e),c=Y.fromObject(n),u=new Vn(zr(l),a,c);return eo(t,o,u)}else return[]}function Wl(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const I=ye(d,i);r=r||zt(g,I),o=o||ut(g)});let l=t.syncPointTree_.get(i);l?(o=o||ut(l),r=r||zt(l,H())):(l=new Dg,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,I)=>{const S=zt(I,H());S&&(r=r.updateImmediateChild(g,S))}));const c=qc(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=ni(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=Qg();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=Kr(t.pendingWriteTree_,i);let h=Bg(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Kc(l,e);h=h.concat(Xg(t,e,d))}return h}function Xr(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ye(o,e),c=zt(l,a);if(c)return c});return Wc(i,e,r,n,!0)}function Xn(t,e){return Yc(e,t.syncPointTree_,null,Kr(t.pendingWriteTree_,H()))}function Yc(t,e,n,s){if(F(t.path))return Qc(t,e,n,s);{const i=e.get(H());n==null&&i!=null&&(n=zt(i,H()));let r=[];const o=k(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Uc(s,o);r=r.concat(Yc(l,a,c,u))}return i&&(r=r.concat(Qr(i,t,s,n))),r}}function Qc(t,e,n,s){const i=e.get(H());n==null&&i!=null&&(n=zt(i,H()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Uc(s,o),u=t.operationForChild(o);u&&(r=r.concat(Qc(u,l,a,c)))}),i&&(r=r.concat(Qr(i,t,s,n))),r}function Xc(t,e){const n=e.query,s=Ls(t,n);return{hashFn:()=>(Rg(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?zg(t,n._path,s):Vg(t,n._path);{const r=zp(i,n);return lr(t,n,null,r)}}}}function Ls(t,e){const n=ni(e);return t.queryToTagMap.get(n)}function ni(t){return t._path.toString()+"$"+t._queryIdentifier}function Jr(t,e){return t.tagToQueryMap.get(e)}function Zr(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new V(t.substr(0,e))}}function eo(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=Kr(t.pendingWriteTree_,e);return Qr(s,n,i,null)}function Gg(t){return t.fold((e,n,s)=>{if(n&&ut(n))return[ei(n)];{let i=[];return n&&(i=zc(n)),be(s,(r,o)=>{i=i.concat(o)}),i}})}function xn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Hg())(t._repo,t._path):t}function Yg(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ni(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Qg(){return $g++}function Xg(t,e,n){const s=e._path,i=Ls(t,e),r=Xc(t,n),o=t.listenProvider_.startListening(xn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)C(!ut(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!F(c)&&u&&ut(u))return[ei(u).query];{let d=[];return u&&(d=d.concat(zc(u).map(g=>g.query))),be(h,(g,I)=>{d=d.concat(I)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(xn(u),Ls(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new to(n)}node(){return this.node_}}class no{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ie(this.path_,e);return new no(this.syncTree_,n)}node(){return Xr(this.syncTree_,this.path_)}}const Jg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ul=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Zg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return em(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Zg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},em=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},tm=function(t,e,n,s){return so(e,new no(n,t),s)},Jc=function(t,e,n){return so(t,new to(e),n)};function so(t,e,n){const s=t.getPriority().val(),i=Ul(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ul(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new oe(l,ue(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new oe(i))),o.forEachChild(J,(l,a)=>{const c=so(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ro(t,e){let n=e instanceof V?e:new V(e),s=t,i=k(n);for(;i!==null;){const r=Jt(s.node.children,i)||{children:{},childCount:0};s=new io(i,s,r),n=G(n),i=k(n)}return s}function un(t){return t.node.value}function Zc(t,e){t.node.value=e,ar(t)}function eu(t){return t.node.childCount>0}function nm(t){return un(t)===void 0&&!eu(t)}function si(t,e){be(t.node.children,(n,s)=>{e(new io(n,t,s))})}function tu(t,e,n,s){n&&!s&&e(t),si(t,i=>{tu(i,e,!0,s)}),n&&s&&e(t)}function sm(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Jn(t){return new V(t.parent===null?t.name:Jn(t.parent)+"/"+t.name)}function ar(t){t.parent!==null&&im(t.parent,t.name,t)}function im(t,e,n){const s=nm(n),i=$e(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ar(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ar(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=/[\[\].#$\/\u0000-\u001F\u007F]/,om=/[\[\].#$\u0000-\u001F\u007F]/,xi=10*1024*1024,oo=function(t){return typeof t=="string"&&t.length!==0&&!rm.test(t)},nu=function(t){return typeof t=="string"&&t.length!==0&&!om.test(t)},lm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),nu(t)},Hl=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Dr(t)||t&&typeof t=="object"&&$e(t,".sv")},su=function(t,e,n,s){s&&e===void 0||lo(Qs(t,"value"),e,n)},lo=function(t,e,n){const s=n instanceof V?new I_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+yt(s));if(typeof e=="function")throw new Error(t+"contains a function "+yt(s)+" with contents = "+e.toString());if(Dr(e))throw new Error(t+"contains "+e.toString()+" "+yt(s));if(typeof e=="string"&&e.length>xi/3&&Xs(e)>xi)throw new Error(t+"contains a string greater than "+xi+" utf8 bytes "+yt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!oo(o)))throw new Error(t+" contains an invalid key ("+o+") "+yt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);T_(s,o),lo(t,l,s),S_(s)}),i&&r)throw new Error(t+' contains ".value" child '+yt(s)+" in addition to actual children.")}},am=function(t,e,n,s){if(!(s&&n===void 0)&&!oo(n))throw new Error(Qs(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},ao=function(t,e,n,s){if(!(s&&n===void 0)&&!nu(n))throw new Error(Qs(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},cm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ao(t,e,n,s)},um=function(t,e){if(k(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},hm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!oo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lm(n))throw new Error(Qs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function co(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Br(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function iu(t,e,n){co(t,n),ru(t,s=>Br(s,e))}function Qe(t,e,n){co(t,n),ru(t,s=>Re(s,e)||Re(e,s))}function ru(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(dm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function dm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Tt&&he("event: "+n.toString()),cn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="repo_interrupt",_m=25;class gm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=As(),this.transactionQueueTree_=new io,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mm(t,e,n){if(t.stats_=Fr(t.repoInfo_),t.forceRestClient_||Yp())t.server_=new Rs(t.repoInfo_,(s,i,r,o)=>{$l(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ae(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ke(t.repoInfo_,e,(s,i,r,o)=>{$l(t,s,i,r,o)},s=>{jl(t,s)},s=>{vm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=e_(t.repoInfo_,()=>new Z_(t.stats_,t.server_)),t.infoData_=new G_,t.infoSyncTree_=new Bl({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=ti(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ho(t,"connected",!1),t.serverSyncTree_=new Bl({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Qe(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ym(t){const n=t.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function uo(t){return Jg({timestamp:ym(t)})}function $l(t,e,n,s,i){t.dataUpdateCount++;const r=new V(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=ws(n,c=>ue(c));o=qg(t.serverSyncTree_,r,a,i)}else{const a=ue(n);o=Kg(t.serverSyncTree_,r,a,i)}else if(s){const a=ws(n,c=>ue(c));o=jg(t.serverSyncTree_,r,a)}else{const a=ue(n);o=ti(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ii(t,r)),Qe(t.eventQueue_,l,o)}function jl(t,e){ho(t,"connected",e),e===!1&&Em(t)}function vm(t,e){be(e,(n,s)=>{ho(t,n,s)})}function ho(t,e,n){const s=new V("/.info/"+e),i=ue(n);t.infoData_.updateSnapshot(s,i);const r=ti(t.infoSyncTree_,s,i);Qe(t.eventQueue_,s,r)}function ou(t){return t.nextWriteId_++}function Cm(t,e,n,s,i){fo(t,"set",{path:e.toString(),value:n,priority:s});const r=uo(t),o=ue(n,s),l=Xr(t.serverSyncTree_,e),a=Jc(o,l,r),c=ou(t),u=Gc(t.serverSyncTree_,e,a,c,!0);co(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const I=d==="ok";I||Ce("set at "+e+" failed: "+d);const S=bt(t.serverSyncTree_,c,!I);Qe(t.eventQueue_,e,S),Im(t,i,d,g)});const h=hu(t,e);ii(t,h),Qe(t.eventQueue_,h,[])}function Em(t){fo(t,"onDisconnectEvents");const e=uo(t),n=As();tr(t.onDisconnect_,H(),(i,r)=>{const o=tm(i,r,t.serverSyncTree_,e);Mc(n,i,o)});let s=[];tr(n,H(),(i,r)=>{s=s.concat(ti(t.serverSyncTree_,i,r));const o=hu(t,i);ii(t,o)}),t.onDisconnect_=As(),Qe(t.eventQueue_,H(),s)}function bm(t,e,n){let s;k(e._path)===".info"?s=Wl(t.infoSyncTree_,e,n):s=Wl(t.serverSyncTree_,e,n),iu(t.eventQueue_,e._path,s)}function Vl(t,e,n){let s;k(e._path)===".info"?s=lr(t.infoSyncTree_,e,n):s=lr(t.serverSyncTree_,e,n),iu(t.eventQueue_,e._path,s)}function wm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(pm)}function fo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),he(n,...e)}function Im(t,e,n,s){e&&cn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function lu(t,e,n){return Xr(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function po(t,e=t.transactionQueueTree_){if(e||ri(t,e),un(e)){const n=cu(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Tm(t,Jn(e),n)}else eu(e)&&si(e,n=>{po(t,n)})}function Tm(t,e,n){const s=n.map(c=>c.currentWriteId),i=lu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ye(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{fo(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(bt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ri(t,ro(t.transactionQueueTree_,e)),po(t,t.transactionQueueTree_),Qe(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)cn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ce("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ii(t,e)}},o)}function ii(t,e){const n=au(t,e),s=Jn(n),i=cu(t,n);return Sm(t,i,s),s}function Sm(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ye(n,a.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(bt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=_m)u=!0,h="maxretry",i=i.concat(bt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=lu(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){lo("transaction failed: Data returned ",g,a.path);let I=ue(g);typeof g=="object"&&g!=null&&$e(g,".priority")||(I=I.updatePriority(d.getPriority()));const W=a.currentWriteId,X=uo(t),te=Jc(I,d,X);a.currentOutputSnapshotRaw=I,a.currentOutputSnapshotResolved=te,a.currentWriteId=ou(t),o.splice(o.indexOf(W),1),i=i.concat(Gc(t.serverSyncTree_,a.path,te,a.currentWriteId,a.applyLocally)),i=i.concat(bt(t.serverSyncTree_,W,!0))}else u=!0,h="nodata",i=i.concat(bt(t.serverSyncTree_,a.currentWriteId,!0))}Qe(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}ri(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)cn(s[l]);po(t,t.transactionQueueTree_)}function au(t,e){let n,s=t.transactionQueueTree_;for(n=k(e);n!==null&&un(s)===void 0;)s=ro(s,n),e=G(e),n=k(e);return s}function cu(t,e){const n=[];return uu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function uu(t,e,n){const s=un(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);si(e,i=>{uu(t,i,n)})}function ri(t,e){const n=un(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Zc(e,n.length>0?n:void 0)}si(e,s=>{ri(t,s)})}function hu(t,e){const n=Jn(au(t,e)),s=ro(t.transactionQueueTree_,e);return sm(s,i=>{Ni(t,i)}),Ni(t,s),tu(s,i=>{Ni(t,i)}),n}function Ni(t,e){const n=un(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Zc(e,void 0):n.length=r+1,Qe(t.eventQueue_,Jn(e),i);for(let o=0;o<s.length;o++)cn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Nm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ce(`Invalid query segment '${n}' in query '${t}'`)}return e}const zl=function(t,e){const n=Rm(t),s=n.namespace;n.domain==="firebase.com"&&Ge(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ge("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Up();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new pc(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new V(n.pathString)}},Rm=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=xm(t.substring(u,h)));const d=Nm(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ae(this.snapshot.exportVal())}}class du{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return F(this._path)?null:wc(this._path)}get ref(){return new Je(this._repo,this._path)}get _queryIdentifier(){const e=xl(this._queryParams),n=Mr(e);return n==="{}"?"default":n}get _queryObject(){return xl(this._queryParams)}isEqual(e){if(e=ln(e),!(e instanceof hn))return!1;const n=this._repo===e._repo,s=Br(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+w_(this._path)}}function Pm(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function pu(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===ot){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==xt)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Ye)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===J){if(e!=null&&!Hl(e)||n!=null&&!Hl(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(C(t.getIndex()instanceof Hr||t.getIndex()===Oc,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Om(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Je extends hn{constructor(e,n){super(e,n,new jr,!1)}get parent(){const e=Tc(this._path);return e===null?null:new Je(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new V(e),s=Bs(this.ref,e);return new zn(this._node.getChild(n),s,J)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new zn(i,Bs(this.ref,s),J)))}hasChild(e){const n=new V(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _u(t,e){return t=ln(t),t._checkNotDeleted("ref"),e!==void 0?Bs(t._root,e):t._root}function Bs(t,e){return t=ln(t),k(t._path)===null?cm("child","path",e,!1):ao("child","path",e,!1),new Je(t._repo,ie(t._path,e))}function Dm(t,e){t=ln(t),um("set",t._path),su("set",e,t._path,!1);const n=new Ys;return Cm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class _o{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new fu("value",this,new zn(e.snapshotNode,new Je(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new du(this,e,n):null}matches(e){return e instanceof _o?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class go{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new du(this,e,n):null}createEvent(e,n){C(e.childName!=null,"Child events should have a childName.");const s=Bs(new Je(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new fu(e.type,this,new zn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof go?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Mm(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{Vl(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Am(n,r||void 0),l=e==="value"?new _o(o):new go(e,o);return bm(t._repo,t,l),()=>Vl(t._repo,t,l)}function km(t,e,n,s){return Mm(t,"value",e,n,s)}class mo{}class Fm extends mo{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){su("startAfter",this._value,e._path,!1);const n=K_(e._queryParams,this._value,this._key);if(Om(n),pu(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new hn(e._repo,e._path,n,e._orderByCalled)}}function Lm(t,e){return am("startAfter","key",e,!0),new Fm(t,e)}class Bm extends mo{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new hn(e._repo,e._path,z_(e._queryParams,this._limit),e._orderByCalled)}}function Wm(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Bm(t)}class Um extends mo{constructor(e){super(),this._path=e}_apply(e){Pm(e,"orderByChild");const n=new V(this._path);if(F(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Hr(n),i=q_(e._queryParams,s);return pu(i),new hn(e._repo,e._path,i,!0)}}function Hm(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ao("orderByChild","path",t,!1),new Um(t)}function $m(t,...e){let n=ln(t);for(const s of e)n=s._apply(n);return n}Mg(Je);Ug(Je);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="FIREBASE_DATABASE_EMULATOR_HOST",cr={};let Vm=!1;function zm(t,e,n,s){t.repoInfo_=new pc(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Km(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ge("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),he("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zl(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[jm]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=zl(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Vt(Vt.OWNER):new Xp(t.name,t.options,e);hm("Invalid Firebase Database URL",o),F(o.path)||Ge("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Gm(l,t,u,new Qp(t.name,n));return new Ym(h,t)}function qm(t,e){const n=cr[e];(!n||n[t.key]!==t)&&Ge(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wm(t),delete n[t.key]}function Gm(t,e,n,s){let i=cr[e.name];i||(i={},cr[e.name]=i);let r=i[t.toURLString()];return r&&Ge("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new gm(t,Vm,n,s),i[t.toURLString()]=r,r}class Ym{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Je(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(qm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ge("Cannot call "+e+" on a deleted database.")}}function Qm(t=wp(),e){const n=vp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=hd("database");s&&Xm(n,...s)}return n}function Xm(t,e,n,s={}){t=ln(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ge("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ge('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Vt(Vt.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:fd(s.mockUserToken,t.app.options.projectId);r=new Vt(o)}zm(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t){kp(bp),Ts(new Ln("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Km(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),$t(cl,ul,t),$t(cl,ul,"esm2017")}Ke.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ke.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Jm();function Zm(){return[1,2,3].map(()=>Math.floor(Math.random()*(2<<16)).toString(16).padStart(4,"0")).join("")}function ey(t){const e=new URL(window.location.href);e.searchParams.set("zoom",t.zoom),e.searchParams.set("center",t.center),e.searchParams.set("sharingKey",t.sharingKey),window.history.replaceState(null,"",e.toString())}function Kn(){const t=new URL(window.location.href),e=t.searchParams.get("center")||"1.38,103.8",n=t.searchParams.get("zoom")||"3",s=t.searchParams.get("sharingKey")||Zm(),[i,r]=e.split(",");return{center:e,zoom:n,sharingKey:s,parsedZoom:parseFloat(n),parsedCenter:{lat:parseFloat(i),lng:parseFloat(r)}}}const ty=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function ny(){const t=window.localStorage.getItem("userId");if(t!=null&&t.match(ty))return t;{const e=window.crypto.randomUUID();return window.localStorage.setItem("userId",e),e}}const sy={apiKey:"AIzaSyCVPkgR8wpTD-PtV14m6AbUHR8iWv0WqSc",authDomain:"simple-location-sharing.firebaseapp.com",projectId:"simple-location-sharing",storageBucket:"simple-location-sharing.appspot.com",messagingSenderId:"747204085237",appId:"1:747204085237:web:0f4adacb13c07818174cbc",databaseURL:"https://simple-location-sharing-default-rtdb.asia-southeast1.firebasedatabase.app"};Xa(sy);const gu=Qm();function iy(t,e){const n=Kn().sharingKey,s=ny();Dm(_u(gu,`sessions/${n}/${s}`),{coordinates:t,timestamp:e})}function ry(t,e,n){km($m(_u(gu,`sessions/${t}`),Hm("timestamp"),Lm(Date.now()-e),Wm(10)),s=>{n(s.val()),console.log(s.val())})}const oy=40,ly=40,ay=zs({__name:"DynamicMarkers",props:{width:{},height:{}},setup(t){const e=t,n=Fi([]);ry(Kn().sharingKey,120*6e4,r=>{n.value=Object.entries(r).map(([o,l])=>({...l,key:o}))});function s(r){return r.key.substring(r.key.length-4)}function i(r){const o={width:e.width,height:e.height},{parsedZoom:l,parsedCenter:a}=Kn(),c=Math.pow(2,l),u=Zo(a),h=Zo(r.coordinates),d={x:(h.x-u.x)*c,y:(h.y-u.y)*c},g=parseInt(r.key.substring(r.key.length-4),16)/65536*360;return{left:Math.round(o.width/2+d.x-oy/2)+"px",top:Math.round(o.height/2+d.y-ly/2)+"px","background-color":`hsl(${g} 60% 80%)`}}return(r,o)=>(Gt(!0),Yt(Le,null,$h(An(n),l=>(Gt(),Yt("div",{key:l.key,class:"circle",style:nn(i(l))},Ou(s(l)),5))),128))}});const cy=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},uy=cy(ay,[["__scopeId","data-v-aae8a2c2"]]),hy=zs({__name:"OfferLocation",setup(t){const e=Fi(!1),n=Fi(0);function s(){n.value=navigator.geolocation.watchPosition(r=>{iy({lat:r.coords.latitude,lng:r.coords.longitude},r.timestamp)}),e.value=!0}function i(){navigator.geolocation.clearWatch(n.value),e.value=!1}return(r,o)=>e.value?(Gt(),Yt("button",{key:0,style:{right:"10px",top:"10px",position:"absolute"},onClick:i},"Sending location")):(Gt(),Yt("button",{key:1,style:{right:"10px",top:"10px",position:"absolute"},onClick:s},"Not sending location"))}}),Ri=500,Ai=500,fy=zs({__name:"App",setup(t){const{zoom:e,center:n}=Kn();return(s,i)=>(Gt(),Yt("div",{style:nn({position:"relative",width:Ri,height:Ai,overflow:"hidden"})},[He(td,{center:An(n),zoom:An(e),mapWidth:Ri,mapHeight:Ai},null,8,["center","zoom"]),He(hy),He(uy,{width:Ri,height:Ai})],4))}});Kf(fy).mount("#app");window.addEventListener("DOMContentLoaded",()=>{ey(Kn())});
