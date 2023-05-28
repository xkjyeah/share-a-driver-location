(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ar(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Q={},Wt=[],De=()=>{},mu=()=>!1,yu=/^on[^a-z]/,Ws=t=>yu.test(t),cr=t=>t.startsWith("onUpdate:"),ce=Object.assign,ur=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vu=Object.prototype.hasOwnProperty,U=(t,e)=>vu.call(t,e),O=Array.isArray,Ut=t=>Us(t)==="[object Map]",zl=t=>Us(t)==="[object Set]",M=t=>typeof t=="function",re=t=>typeof t=="string",hr=t=>typeof t=="symbol",Z=t=>t!==null&&typeof t=="object",Kl=t=>Z(t)&&M(t.then)&&M(t.catch),ql=Object.prototype.toString,Us=t=>ql.call(t),Cu=t=>Us(t).slice(8,-1),Gl=t=>Us(t)==="[object Object]",fr=t=>re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fs=ar(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Eu=/-(\w)/g,qt=Hs(t=>t.replace(Eu,(e,n)=>n?n.toUpperCase():"")),bu=/\B([A-Z])/g,nn=Hs(t=>t.replace(bu,"-$1").toLowerCase()),Yl=Hs(t=>t.charAt(0).toUpperCase()+t.slice(1)),ui=Hs(t=>t?`on${Yl(t)}`:""),Rn=(t,e)=>!Object.is(t,e),hi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},gs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},wu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wo;const Ri=()=>wo||(wo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sn(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=re(s)?xu(s):sn(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(re(t))return t;if(Z(t))return t}}const Iu=/;(?![^(]*\))/g,Tu=/:([^]+)/,Su=/\/\*[^]*?\*\//g;function xu(t){const e={};return t.replace(Su,"").split(Iu).forEach(n=>{if(n){const s=n.split(Tu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function dr(t){let e="";if(re(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const s=dr(t[n]);s&&(e+=s+" ")}else if(Z(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Nu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ru=ar(Nu);function Ql(t){return!!t||t===""}const Au=t=>re(t)?t:t==null?"":O(t)||Z(t)&&(t.toString===ql||!M(t.toString))?JSON.stringify(t,Xl,2):String(t),Xl=(t,e)=>e&&e.__v_isRef?Xl(t,e.value):Ut(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:zl(e)?{[`Set(${e.size})`]:[...e.values()]}:Z(e)&&!O(e)&&!Gl(e)?String(e):e;let Te;class Pu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!e&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Te;try{return Te=this,e()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ou(t,e=Te){e&&e.active&&e.effects.push(t)}function Du(){return Te}const pr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Jl=t=>(t.w&ct)>0,Zl=t=>(t.n&ct)>0,Mu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ct},ku=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Jl(i)&&!Zl(i)?i.delete(t):e[n++]=i,i.w&=~ct,i.n&=~ct}e.length=n}},Ai=new WeakMap;let En=0,ct=1;const Pi=30;let Ne;const It=Symbol(""),Oi=Symbol("");class _r{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ou(this,s)}run(){if(!this.active)return this.fn();let e=Ne,n=st;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ne,Ne=this,st=!0,ct=1<<++En,En<=Pi?Mu(this):Io(this),this.fn()}finally{En<=Pi&&ku(this),ct=1<<--En,Ne=this.parent,st=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(Io(this),this.onStop&&this.onStop(),this.active=!1)}}function Io(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let st=!0;const ea=[];function rn(){ea.push(st),st=!1}function on(){const t=ea.pop();st=t===void 0?!0:t}function Ee(t,e,n){if(st&&Ne){let s=Ai.get(t);s||Ai.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=pr()),ta(i)}}function ta(t,e){let n=!1;En<=Pi?Zl(t)||(t.n|=ct,n=!Jl(t)):n=!t.has(Ne),n&&(t.add(Ne),Ne.deps.push(t))}function Ge(t,e,n,s,i,r){const o=Ai.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&O(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":O(t)?fr(n)&&l.push(o.get("length")):(l.push(o.get(It)),Ut(t)&&l.push(o.get(Oi)));break;case"delete":O(t)||(l.push(o.get(It)),Ut(t)&&l.push(o.get(Oi)));break;case"set":Ut(t)&&l.push(o.get(It));break}if(l.length===1)l[0]&&Di(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Di(pr(a))}}function Di(t,e){const n=O(t)?t:[...t];for(const s of n)s.computed&&To(s);for(const s of n)s.computed||To(s)}function To(t,e){(t!==Ne||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Lu=ar("__proto__,__v_isRef,__isVue"),na=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hr)),Fu=gr(),Bu=gr(!1,!0),Wu=gr(!0),So=Uu();function Uu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=$(this);for(let r=0,o=this.length;r<o;r++)Ee(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map($)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){rn();const s=$(this)[e].apply(this,n);return on(),s}}),t}function Hu(t){const e=$(this);return Ee(e,"has",t),e.hasOwnProperty(t)}function gr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?sh:la:e?oa:ra).get(s))return s;const o=O(s);if(!t){if(o&&U(So,i))return Reflect.get(So,i,r);if(i==="hasOwnProperty")return Hu}const l=Reflect.get(s,i,r);return(hr(i)?na.has(i):Lu(i))||(t||Ee(s,"get",i),e)?l:pe(l)?o&&fr(i)?l:l.value:Z(l)?t?aa(l):vr(l):l}}const $u=sa(),ju=sa(!0);function sa(t=!1){return function(n,s,i,r){let o=n[s];if(Gt(o)&&pe(o)&&!pe(i))return!1;if(!t&&(!ms(i)&&!Gt(i)&&(o=$(o),i=$(i)),!O(n)&&pe(o)&&!pe(i)))return o.value=i,!0;const l=O(n)&&fr(s)?Number(s)<n.length:U(n,s),a=Reflect.set(n,s,i,r);return n===$(r)&&(l?Rn(i,o)&&Ge(n,"set",s,i):Ge(n,"add",s,i)),a}}function Vu(t,e){const n=U(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ge(t,"delete",e,void 0),s}function zu(t,e){const n=Reflect.has(t,e);return(!hr(e)||!na.has(e))&&Ee(t,"has",e),n}function Ku(t){return Ee(t,"iterate",O(t)?"length":It),Reflect.ownKeys(t)}const ia={get:Fu,set:$u,deleteProperty:Vu,has:zu,ownKeys:Ku},qu={get:Wu,set(t,e){return!0},deleteProperty(t,e){return!0}},Gu=ce({},ia,{get:Bu,set:ju}),mr=t=>t,$s=t=>Reflect.getPrototypeOf(t);function is(t,e,n=!1,s=!1){t=t.__v_raw;const i=$(t),r=$(e);n||(e!==r&&Ee(i,"get",e),Ee(i,"get",r));const{has:o}=$s(i),l=s?mr:n?Er:An;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function rs(t,e=!1){const n=this.__v_raw,s=$(n),i=$(t);return e||(t!==i&&Ee(s,"has",t),Ee(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function os(t,e=!1){return t=t.__v_raw,!e&&Ee($(t),"iterate",It),Reflect.get(t,"size",t)}function xo(t){t=$(t);const e=$(this);return $s(e).has.call(e,t)||(e.add(t),Ge(e,"add",t,t)),this}function No(t,e){e=$(e);const n=$(this),{has:s,get:i}=$s(n);let r=s.call(n,t);r||(t=$(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Rn(e,o)&&Ge(n,"set",t,e):Ge(n,"add",t,e),this}function Ro(t){const e=$(this),{has:n,get:s}=$s(e);let i=n.call(e,t);i||(t=$(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ge(e,"delete",t,void 0),r}function Ao(){const t=$(this),e=t.size!==0,n=t.clear();return e&&Ge(t,"clear",void 0,void 0),n}function ls(t,e){return function(s,i){const r=this,o=r.__v_raw,l=$(o),a=e?mr:t?Er:An;return!t&&Ee(l,"iterate",It),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function as(t,e,n){return function(...s){const i=this.__v_raw,r=$(i),o=Ut(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?mr:e?Er:An;return!e&&Ee(r,"iterate",a?Oi:It),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function tt(t){return function(...e){return t==="delete"?!1:this}}function Yu(){const t={get(r){return is(this,r)},get size(){return os(this)},has:rs,add:xo,set:No,delete:Ro,clear:Ao,forEach:ls(!1,!1)},e={get(r){return is(this,r,!1,!0)},get size(){return os(this)},has:rs,add:xo,set:No,delete:Ro,clear:Ao,forEach:ls(!1,!0)},n={get(r){return is(this,r,!0)},get size(){return os(this,!0)},has(r){return rs.call(this,r,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:ls(!0,!1)},s={get(r){return is(this,r,!0,!0)},get size(){return os(this,!0)},has(r){return rs.call(this,r,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:ls(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=as(r,!1,!1),n[r]=as(r,!0,!1),e[r]=as(r,!1,!0),s[r]=as(r,!0,!0)}),[t,n,e,s]}const[Qu,Xu,Ju,Zu]=Yu();function yr(t,e){const n=e?t?Zu:Ju:t?Xu:Qu;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(U(n,i)&&i in s?n:s,i,r)}const eh={get:yr(!1,!1)},th={get:yr(!1,!0)},nh={get:yr(!0,!1)},ra=new WeakMap,oa=new WeakMap,la=new WeakMap,sh=new WeakMap;function ih(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rh(t){return t.__v_skip||!Object.isExtensible(t)?0:ih(Cu(t))}function vr(t){return Gt(t)?t:Cr(t,!1,ia,eh,ra)}function oh(t){return Cr(t,!1,Gu,th,oa)}function aa(t){return Cr(t,!0,qu,nh,la)}function Cr(t,e,n,s,i){if(!Z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=rh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Ht(t){return Gt(t)?Ht(t.__v_raw):!!(t&&t.__v_isReactive)}function Gt(t){return!!(t&&t.__v_isReadonly)}function ms(t){return!!(t&&t.__v_isShallow)}function ca(t){return Ht(t)||Gt(t)}function $(t){const e=t&&t.__v_raw;return e?$(e):t}function ua(t){return gs(t,"__v_skip",!0),t}const An=t=>Z(t)?vr(t):t,Er=t=>Z(t)?aa(t):t;function ha(t){st&&Ne&&(t=$(t),ta(t.dep||(t.dep=pr())))}function fa(t,e){t=$(t);const n=t.dep;n&&Di(n)}function pe(t){return!!(t&&t.__v_isRef===!0)}function Mi(t){return lh(t,!1)}function lh(t,e){return pe(t)?t:new ah(t,e)}class ah{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:$(e),this._value=n?e:An(e)}get value(){return ha(this),this._value}set value(e){const n=this.__v_isShallow||ms(e)||Gt(e);e=n?e:$(e),Rn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:An(e),fa(this))}}function Se(t){return pe(t)?t.value:t}const ch={get:(t,e,n)=>Se(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return pe(i)&&!pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function da(t){return Ht(t)?t:new Proxy(t,ch)}class uh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new _r(e,()=>{this._dirty||(this._dirty=!0,fa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=$(this);return ha(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function hh(t,e,n=!1){let s,i;const r=M(t);return r?(s=t,i=De):(s=t.get,i=t.set),new uh(s,i,r||!i,n)}function it(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){js(r,e,n)}return i}function Me(t,e,n,s){if(M(t)){const r=it(t,e,n,s);return r&&Kl(r)&&r.catch(o=>{js(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Me(t[r],e,n,s));return i}function js(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){it(a,null,10,[t,o,l]);return}}fh(t,n,i,s)}function fh(t,e,n,s=!0){console.error(t)}let Pn=!1,ki=!1;const fe=[];let Ue=0;const $t=[];let ze=null,Ct=0;const pa=Promise.resolve();let br=null;function dh(t){const e=br||pa;return t?e.then(this?t.bind(this):t):e}function ph(t){let e=Ue+1,n=fe.length;for(;e<n;){const s=e+n>>>1;On(fe[s])<t?e=s+1:n=s}return e}function wr(t){(!fe.length||!fe.includes(t,Pn&&t.allowRecurse?Ue+1:Ue))&&(t.id==null?fe.push(t):fe.splice(ph(t.id),0,t),_a())}function _a(){!Pn&&!ki&&(ki=!0,br=pa.then(ma))}function _h(t){const e=fe.indexOf(t);e>Ue&&fe.splice(e,1)}function gh(t){O(t)?$t.push(...t):(!ze||!ze.includes(t,t.allowRecurse?Ct+1:Ct))&&$t.push(t),_a()}function Po(t,e=Pn?Ue+1:0){for(;e<fe.length;e++){const n=fe[e];n&&n.pre&&(fe.splice(e,1),e--,n())}}function ga(t){if($t.length){const e=[...new Set($t)];if($t.length=0,ze){ze.push(...e);return}for(ze=e,ze.sort((n,s)=>On(n)-On(s)),Ct=0;Ct<ze.length;Ct++)ze[Ct]();ze=null,Ct=0}}const On=t=>t.id==null?1/0:t.id,mh=(t,e)=>{const n=On(t)-On(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ma(t){ki=!1,Pn=!0,fe.sort(mh);const e=De;try{for(Ue=0;Ue<fe.length;Ue++){const n=fe[Ue];n&&n.active!==!1&&it(n,null,14)}}finally{Ue=0,fe.length=0,ga(),Pn=!1,br=null,(fe.length||$t.length)&&ma()}}function yh(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Q;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Q;d&&(i=n.map(g=>re(g)?g.trim():g)),h&&(i=n.map(wu))}let l,a=s[l=ui(e)]||s[l=ui(qt(e))];!a&&r&&(a=s[l=ui(nn(e))]),a&&Me(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Me(c,t,6,i)}}function ya(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!M(t)){const a=c=>{const u=ya(c,e,!0);u&&(l=!0,ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(Z(t)&&s.set(t,null),null):(O(r)?r.forEach(a=>o[a]=null):ce(o,r),Z(t)&&s.set(t,o),o)}function Vs(t,e){return!t||!Ws(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,nn(e))||U(t,e))}let He=null,va=null;function ys(t){const e=He;return He=t,va=t&&t.type.__scopeId||null,e}function vh(t,e=He,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ho(-1);const r=ys(e);let o;try{o=t(...i)}finally{ys(r),s._d&&Ho(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function fi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:I,inheritAttrs:S}=t;let W,X;const te=ys(t);try{if(n.shapeFlag&4){const D=i||s;W=We(u.call(D,D,h,r,g,d,I)),X=a}else{const D=e;W=We(D.length>1?D(r,{attrs:a,slots:l,emit:c}):D(r,null)),X=e.props?a:Ch(a)}}catch(D){In.length=0,js(D,t,1),W=$e(Dn)}let ne=W;if(X&&S!==!1){const D=Object.keys(X),{shapeFlag:et}=ne;D.length&&et&7&&(o&&D.some(cr)&&(X=Eh(X,o)),ne=Xt(ne,X))}return n.dirs&&(ne=Xt(ne),ne.dirs=ne.dirs?ne.dirs.concat(n.dirs):n.dirs),n.transition&&(ne.transition=n.transition),W=ne,ys(te),W}const Ch=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ws(n))&&((e||(e={}))[n]=t[n]);return e},Eh=(t,e)=>{const n={};for(const s in t)(!cr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function bh(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Oo(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Vs(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Oo(s,o,c):!0:!!o;return!1}function Oo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Vs(n,r))return!0}return!1}function wh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ih=t=>t.__isSuspense;function Th(t,e){e&&e.pendingBranch?O(t)?e.effects.push(...t):e.effects.push(t):gh(t)}const cs={};function di(t,e,n){return Ca(t,e,n)}function Ca(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Q){var l;const a=Du()===((l=de)==null?void 0:l.scope)?de:null;let c,u=!1,h=!1;if(pe(t)?(c=()=>t.value,u=ms(t)):Ht(t)?(c=()=>t,s=!0):O(t)?(h=!0,u=t.some(D=>Ht(D)||ms(D)),c=()=>t.map(D=>{if(pe(D))return D.value;if(Ht(D))return Ft(D);if(M(D))return it(D,a,2)})):M(t)?e?c=()=>it(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),Me(t,a,3,[g])}:c=De,e&&s){const D=c;c=()=>Ft(D())}let d,g=D=>{d=te.onStop=()=>{it(D,a,4)}},I;if(kn)if(g=De,e?n&&Me(e,a,3,[c(),h?[]:void 0,g]):c(),i==="sync"){const D=wf();I=D.__watcherHandles||(D.__watcherHandles=[])}else return De;let S=h?new Array(t.length).fill(cs):cs;const W=()=>{if(te.active)if(e){const D=te.run();(s||u||(h?D.some((et,dn)=>Rn(et,S[dn])):Rn(D,S)))&&(d&&d(),Me(e,a,3,[D,S===cs?void 0:h&&S[0]===cs?[]:S,g]),S=D)}else te.run()};W.allowRecurse=!!e;let X;i==="sync"?X=W:i==="post"?X=()=>me(W,a&&a.suspense):(W.pre=!0,a&&(W.id=a.uid),X=()=>wr(W));const te=new _r(c,X);e?n?W():S=te.run():i==="post"?me(te.run.bind(te),a&&a.suspense):te.run();const ne=()=>{te.stop(),a&&a.scope&&ur(a.scope.effects,te)};return I&&I.push(ne),ne}function Sh(t,e,n){const s=this.proxy,i=re(t)?t.includes(".")?Ea(s,t):()=>s[t]:t.bind(s,s);let r;M(e)?r=e:(r=e.handler,n=e);const o=de;Jt(this);const l=Ca(i,r.bind(s),n);return o?Jt(o):Tt(),l}function Ea(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ft(t,e){if(!Z(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pe(t))Ft(t.value,e);else if(O(t))for(let n=0;n<t.length;n++)Ft(t[n],e);else if(zl(t)||Ut(t))t.forEach(n=>{Ft(n,e)});else if(Gl(t))for(const n in t)Ft(t[n],e);return t}function gt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(rn(),Me(a,n,8,[t.el,l,t,e]),on())}}function zs(t,e){return M(t)?(()=>ce({name:t.name},e,{setup:t}))():t}const ds=t=>!!t.type.__asyncLoader,ba=t=>t.type.__isKeepAlive;function xh(t,e){wa(t,"a",e)}function Nh(t,e){wa(t,"da",e)}function wa(t,e,n=de){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ks(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ba(i.parent.vnode)&&Rh(s,e,n,i),i=i.parent}}function Rh(t,e,n,s){const i=Ks(e,t,s,!0);Ia(()=>{ur(s[e],i)},n)}function Ks(t,e,n=de,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;rn(),Jt(n);const l=Me(e,n,t,o);return Tt(),on(),l});return s?i.unshift(r):i.push(r),r}}const Je=t=>(e,n=de)=>(!kn||t==="sp")&&Ks(t,(...s)=>e(...s),n),Ah=Je("bm"),Ph=Je("m"),Oh=Je("bu"),Dh=Je("u"),Mh=Je("bum"),Ia=Je("um"),kh=Je("sp"),Lh=Je("rtg"),Fh=Je("rtc");function Bh(t,e=de){Ks("ec",t,e)}const Wh=Symbol.for("v-ndc");function Uh(t,e,n,s){let i;const r=n&&n[s];if(O(t)||re(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Z(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Li=t=>t?Ma(t)?Rr(t)||t.proxy:Li(t.parent):null,wn=ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Li(t.parent),$root:t=>Li(t.root),$emit:t=>t.emit,$options:t=>Ir(t),$forceUpdate:t=>t.f||(t.f=()=>wr(t.update)),$nextTick:t=>t.n||(t.n=dh.bind(t.proxy)),$watch:t=>Sh.bind(t)}),pi=(t,e)=>t!==Q&&!t.__isScriptSetup&&U(t,e),Hh={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(pi(s,e))return o[e]=1,s[e];if(i!==Q&&U(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&U(c,e))return o[e]=3,r[e];if(n!==Q&&U(n,e))return o[e]=4,n[e];Fi&&(o[e]=0)}}const u=wn[e];let h,d;if(u)return e==="$attrs"&&Ee(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==Q&&U(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,U(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return pi(i,e)?(i[e]=n,!0):s!==Q&&U(s,e)?(s[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==Q&&U(t,o)||pi(e,o)||(l=r[0])&&U(l,o)||U(s,o)||U(wn,o)||U(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Do(t){return O(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Fi=!0;function $h(t){const e=Ir(t),n=t.proxy,s=t.ctx;Fi=!1,e.beforeCreate&&Mo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:I,activated:S,deactivated:W,beforeDestroy:X,beforeUnmount:te,destroyed:ne,unmounted:D,render:et,renderTracked:dn,renderTriggered:Zn,errorCaptured:ft,serverPrefetch:oi,expose:dt,inheritAttrs:pn,components:es,directives:ts,filters:li}=e;if(c&&jh(c,s,null),o)for(const ee in o){const z=o[ee];M(z)&&(s[ee]=z.bind(n))}if(i){const ee=i.call(n,n);Z(ee)&&(t.data=vr(ee))}if(Fi=!0,r)for(const ee in r){const z=r[ee],pt=M(z)?z.bind(n,n):M(z.get)?z.get.bind(n,n):De,ns=!M(z)&&M(z.set)?z.set.bind(n):De,_t=Ef({get:pt,set:ns});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>_t.value,set:Le=>_t.value=Le})}if(l)for(const ee in l)Ta(l[ee],s,n,ee);if(a){const ee=M(a)?a.call(n):a;Reflect.ownKeys(ee).forEach(z=>{Yh(z,ee[z])})}u&&Mo(u,t,"c");function _e(ee,z){O(z)?z.forEach(pt=>ee(pt.bind(n))):z&&ee(z.bind(n))}if(_e(Ah,h),_e(Ph,d),_e(Oh,g),_e(Dh,I),_e(xh,S),_e(Nh,W),_e(Bh,ft),_e(Fh,dn),_e(Lh,Zn),_e(Mh,te),_e(Ia,D),_e(kh,oi),O(dt))if(dt.length){const ee=t.exposed||(t.exposed={});dt.forEach(z=>{Object.defineProperty(ee,z,{get:()=>n[z],set:pt=>n[z]=pt})})}else t.exposed||(t.exposed={});et&&t.render===De&&(t.render=et),pn!=null&&(t.inheritAttrs=pn),es&&(t.components=es),ts&&(t.directives=ts)}function jh(t,e,n=De){O(t)&&(t=Bi(t));for(const s in t){const i=t[s];let r;Z(i)?"default"in i?r=ps(i.from||s,i.default,!0):r=ps(i.from||s):r=ps(i),pe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Mo(t,e,n){Me(O(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ta(t,e,n,s){const i=s.includes(".")?Ea(n,s):()=>n[s];if(re(t)){const r=e[t];M(r)&&di(i,r)}else if(M(t))di(i,t.bind(n));else if(Z(t))if(O(t))t.forEach(r=>Ta(r,e,n,s));else{const r=M(t.handler)?t.handler.bind(n):e[t.handler];M(r)&&di(i,r,t)}}function Ir(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>vs(a,c,o,!0)),vs(a,e,o)),Z(e)&&r.set(e,a),a}function vs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&vs(t,r,n,!0),i&&i.forEach(o=>vs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Vh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Vh={data:ko,props:Lo,emits:Lo,methods:bn,computed:bn,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:bn,directives:bn,watch:Kh,provide:ko,inject:zh};function ko(t,e){return e?t?function(){return ce(M(t)?t.call(this,this):t,M(e)?e.call(this,this):e)}:e:t}function zh(t,e){return bn(Bi(t),Bi(e))}function Bi(t){if(O(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ge(t,e){return t?[...new Set([].concat(t,e))]:e}function bn(t,e){return t?ce(Object.create(null),t,e):e}function Lo(t,e){return t?O(t)&&O(e)?[...new Set([...t,...e])]:ce(Object.create(null),Do(t),Do(e??{})):e}function Kh(t,e){if(!t)return e;if(!e)return t;const n=ce(Object.create(null),t);for(const s in e)n[s]=ge(t[s],e[s]);return n}function Sa(){return{app:null,config:{isNativeTag:mu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qh=0;function Gh(t,e){return function(s,i=null){M(s)||(s=ce({},s)),i!=null&&!Z(i)&&(i=null);const r=Sa(),o=new Set;let l=!1;const a=r.app={_uid:qh++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:If,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&M(c.install)?(o.add(c),c.install(a,...u)):M(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=$e(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Rr(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){Cs=a;try{return c()}finally{Cs=null}}};return a}}let Cs=null;function Yh(t,e){if(de){let n=de.provides;const s=de.parent&&de.parent.provides;s===n&&(n=de.provides=Object.create(s)),n[t]=e}}function ps(t,e,n=!1){const s=de||He;if(s||Cs){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Cs._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&M(e)?e.call(s&&s.proxy):e}}function Qh(t,e,n,s=!1){const i={},r={};gs(r,Gs,1),t.propsDefaults=Object.create(null),xa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:oh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Xh(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=$(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Vs(t.emitsOptions,d))continue;const g=e[d];if(a)if(U(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const I=qt(d);i[I]=Wi(a,l,I,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{xa(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!U(e,h)&&((u=nn(h))===h||!U(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Wi(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!U(e,h))&&(delete r[h],c=!0)}c&&Ge(t,"set","$attrs")}function xa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(fs(a))continue;const c=e[a];let u;i&&U(i,u=qt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Vs(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=$(n),c=l||Q;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Wi(i,a,h,c[h],t,!U(c,h))}}return o}function Wi(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=U(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&M(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(Jt(i),s=c[n]=a.call(null,e),Tt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===nn(n))&&(s=!0))}return s}function Na(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!M(t)){const u=h=>{a=!0;const[d,g]=Na(h,e,!0);ce(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return Z(t)&&s.set(t,Wt),Wt;if(O(r))for(let u=0;u<r.length;u++){const h=qt(r[u]);Fo(h)&&(o[h]=Q)}else if(r)for(const u in r){const h=qt(u);if(Fo(h)){const d=r[u],g=o[h]=O(d)||M(d)?{type:d}:ce({},d);if(g){const I=Uo(Boolean,g.type),S=Uo(String,g.type);g[0]=I>-1,g[1]=S<0||I<S,(I>-1||U(g,"default"))&&l.push(h)}}}const c=[o,l];return Z(t)&&s.set(t,c),c}function Fo(t){return t[0]!=="$"}function Bo(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Wo(t,e){return Bo(t)===Bo(e)}function Uo(t,e){return O(e)?e.findIndex(n=>Wo(n,t)):M(e)&&Wo(e,t)?0:-1}const Ra=t=>t[0]==="_"||t==="$stable",Tr=t=>O(t)?t.map(We):[We(t)],Jh=(t,e,n)=>{if(e._n)return e;const s=vh((...i)=>Tr(e(...i)),n);return s._c=!1,s},Aa=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ra(i))continue;const r=t[i];if(M(r))e[i]=Jh(i,r,s);else if(r!=null){const o=Tr(r);e[i]=()=>o}}},Pa=(t,e)=>{const n=Tr(e);t.slots.default=()=>n},Zh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=$(e),gs(e,"_",n)):Aa(e,t.slots={})}else t.slots={},e&&Pa(t,e);gs(t.slots,Gs,1)},ef=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Q;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ce(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Aa(e,i)),o=e}else e&&(Pa(t,e),o={default:1});if(r)for(const l in i)!Ra(l)&&!(l in o)&&delete i[l]};function Ui(t,e,n,s,i=!1){if(O(t)){t.forEach((d,g)=>Ui(d,e&&(O(e)?e[g]:e),n,s,i));return}if(ds(s)&&!i)return;const r=s.shapeFlag&4?Rr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===Q?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(re(c)?(u[c]=null,U(h,c)&&(h[c]=null)):pe(c)&&(c.value=null)),M(a))it(a,l,12,[o,u]);else{const d=re(a),g=pe(a);if(d||g){const I=()=>{if(t.f){const S=d?U(h,a)?h[a]:u[a]:a.value;i?O(S)&&ur(S,r):O(S)?S.includes(r)||S.push(r):d?(u[a]=[r],U(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,U(h,a)&&(h[a]=o)):g&&(a.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,me(I,n)):I()}}}const me=Th;function tf(t){return nf(t)}function nf(t,e){const n=Ri();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=De,insertStaticContent:I}=t,S=(f,p,_,y=null,m=null,b=null,T=!1,E=null,w=!!p.dynamicChildren)=>{if(f===p)return;f&&!gn(f,p)&&(y=ss(f),Le(f,m,b,!0),f=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:v,ref:N,shapeFlag:x}=p;switch(v){case qs:W(f,p,_,y);break;case Dn:X(f,p,_,y);break;case _i:f==null&&te(p,_,y,T);break;case xe:es(f,p,_,y,m,b,T,E,w);break;default:x&1?et(f,p,_,y,m,b,T,E,w):x&6?ts(f,p,_,y,m,b,T,E,w):(x&64||x&128)&&v.process(f,p,_,y,m,b,T,E,w,Dt)}N!=null&&m&&Ui(N,f&&f.ref,b,p||f,!p)},W=(f,p,_,y)=>{if(f==null)s(p.el=l(p.children),_,y);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},X=(f,p,_,y)=>{f==null?s(p.el=a(p.children||""),_,y):p.el=f.el},te=(f,p,_,y)=>{[f.el,f.anchor]=I(f.children,p,_,y,f.el,f.anchor)},ne=({el:f,anchor:p},_,y)=>{let m;for(;f&&f!==p;)m=d(f),s(f,_,y),f=m;s(p,_,y)},D=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},et=(f,p,_,y,m,b,T,E,w)=>{T=T||p.type==="svg",f==null?dn(p,_,y,m,b,T,E,w):oi(f,p,m,b,T,E,w)},dn=(f,p,_,y,m,b,T,E)=>{let w,v;const{type:N,props:x,shapeFlag:R,transition:P,dirs:B}=f;if(w=f.el=o(f.type,b,x&&x.is,x),R&8?u(w,f.children):R&16&&ft(f.children,w,null,y,m,b&&N!=="foreignObject",T,E),B&&gt(f,null,y,"created"),Zn(w,f,f.scopeId,T,y),x){for(const j in x)j!=="value"&&!fs(j)&&r(w,j,null,x[j],b,f.children,y,m,Ve);"value"in x&&r(w,"value",null,x.value),(v=x.onVnodeBeforeMount)&&Be(v,y,f)}B&&gt(f,null,y,"beforeMount");const K=(!m||m&&!m.pendingBranch)&&P&&!P.persisted;K&&P.beforeEnter(w),s(w,p,_),((v=x&&x.onVnodeMounted)||K||B)&&me(()=>{v&&Be(v,y,f),K&&P.enter(w),B&&gt(f,null,y,"mounted")},m)},Zn=(f,p,_,y,m)=>{if(_&&g(f,_),y)for(let b=0;b<y.length;b++)g(f,y[b]);if(m){let b=m.subTree;if(p===b){const T=m.vnode;Zn(f,T,T.scopeId,T.slotScopeIds,m.parent)}}},ft=(f,p,_,y,m,b,T,E,w=0)=>{for(let v=w;v<f.length;v++){const N=f[v]=E?nt(f[v]):We(f[v]);S(null,N,p,_,y,m,b,T,E)}},oi=(f,p,_,y,m,b,T)=>{const E=p.el=f.el;let{patchFlag:w,dynamicChildren:v,dirs:N}=p;w|=f.patchFlag&16;const x=f.props||Q,R=p.props||Q;let P;_&&mt(_,!1),(P=R.onVnodeBeforeUpdate)&&Be(P,_,p,f),N&&gt(p,f,_,"beforeUpdate"),_&&mt(_,!0);const B=m&&p.type!=="foreignObject";if(v?dt(f.dynamicChildren,v,E,_,y,B,b):T||z(f,p,E,null,_,y,B,b,!1),w>0){if(w&16)pn(E,p,x,R,_,y,m);else if(w&2&&x.class!==R.class&&r(E,"class",null,R.class,m),w&4&&r(E,"style",x.style,R.style,m),w&8){const K=p.dynamicProps;for(let j=0;j<K.length;j++){const se=K[j],Ie=x[se],Mt=R[se];(Mt!==Ie||se==="value")&&r(E,se,Ie,Mt,m,f.children,_,y,Ve)}}w&1&&f.children!==p.children&&u(E,p.children)}else!T&&v==null&&pn(E,p,x,R,_,y,m);((P=R.onVnodeUpdated)||N)&&me(()=>{P&&Be(P,_,p,f),N&&gt(p,f,_,"updated")},y)},dt=(f,p,_,y,m,b,T)=>{for(let E=0;E<p.length;E++){const w=f[E],v=p[E],N=w.el&&(w.type===xe||!gn(w,v)||w.shapeFlag&70)?h(w.el):_;S(w,v,N,null,y,m,b,T,!0)}},pn=(f,p,_,y,m,b,T)=>{if(_!==y){if(_!==Q)for(const E in _)!fs(E)&&!(E in y)&&r(f,E,_[E],null,T,p.children,m,b,Ve);for(const E in y){if(fs(E))continue;const w=y[E],v=_[E];w!==v&&E!=="value"&&r(f,E,v,w,T,p.children,m,b,Ve)}"value"in y&&r(f,"value",_.value,y.value)}},es=(f,p,_,y,m,b,T,E,w)=>{const v=p.el=f?f.el:l(""),N=p.anchor=f?f.anchor:l("");let{patchFlag:x,dynamicChildren:R,slotScopeIds:P}=p;P&&(E=E?E.concat(P):P),f==null?(s(v,_,y),s(N,_,y),ft(p.children,_,N,m,b,T,E,w)):x>0&&x&64&&R&&f.dynamicChildren?(dt(f.dynamicChildren,R,_,m,b,T,E),(p.key!=null||m&&p===m.subTree)&&Oa(f,p,!0)):z(f,p,_,N,m,b,T,E,w)},ts=(f,p,_,y,m,b,T,E,w)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?m.ctx.activate(p,_,y,T,w):li(p,_,y,m,b,T,w):mo(f,p,w)},li=(f,p,_,y,m,b,T)=>{const E=f.component=_f(f,y,m);if(ba(f)&&(E.ctx.renderer=Dt),gf(E),E.asyncDep){if(m&&m.registerDep(E,_e),!f.el){const w=E.subTree=$e(Dn);X(null,w,p,_)}return}_e(E,f,p,_,m,b,T)},mo=(f,p,_)=>{const y=p.component=f.component;if(bh(f,p,_))if(y.asyncDep&&!y.asyncResolved){ee(y,p,_);return}else y.next=p,_h(y.update),y.update();else p.el=f.el,y.vnode=p},_e=(f,p,_,y,m,b,T)=>{const E=()=>{if(f.isMounted){let{next:N,bu:x,u:R,parent:P,vnode:B}=f,K=N,j;mt(f,!1),N?(N.el=B.el,ee(f,N,T)):N=B,x&&hi(x),(j=N.props&&N.props.onVnodeBeforeUpdate)&&Be(j,P,N,B),mt(f,!0);const se=fi(f),Ie=f.subTree;f.subTree=se,S(Ie,se,h(Ie.el),ss(Ie),f,m,b),N.el=se.el,K===null&&wh(f,se.el),R&&me(R,m),(j=N.props&&N.props.onVnodeUpdated)&&me(()=>Be(j,P,N,B),m)}else{let N;const{el:x,props:R}=p,{bm:P,m:B,parent:K}=f,j=ds(p);if(mt(f,!1),P&&hi(P),!j&&(N=R&&R.onVnodeBeforeMount)&&Be(N,K,p),mt(f,!0),x&&ci){const se=()=>{f.subTree=fi(f),ci(x,f.subTree,f,m,null)};j?p.type.__asyncLoader().then(()=>!f.isUnmounted&&se()):se()}else{const se=f.subTree=fi(f);S(null,se,_,y,f,m,b),p.el=se.el}if(B&&me(B,m),!j&&(N=R&&R.onVnodeMounted)){const se=p;me(()=>Be(N,K,se),m)}(p.shapeFlag&256||K&&ds(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&me(f.a,m),f.isMounted=!0,p=_=y=null}},w=f.effect=new _r(E,()=>wr(v),f.scope),v=f.update=()=>w.run();v.id=f.uid,mt(f,!0),v()},ee=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Xh(f,p.props,y,_),ef(f,p.children,_),rn(),Po(),on()},z=(f,p,_,y,m,b,T,E,w=!1)=>{const v=f&&f.children,N=f?f.shapeFlag:0,x=p.children,{patchFlag:R,shapeFlag:P}=p;if(R>0){if(R&128){ns(v,x,_,y,m,b,T,E,w);return}else if(R&256){pt(v,x,_,y,m,b,T,E,w);return}}P&8?(N&16&&Ve(v,m,b),x!==v&&u(_,x)):N&16?P&16?ns(v,x,_,y,m,b,T,E,w):Ve(v,m,b,!0):(N&8&&u(_,""),P&16&&ft(x,_,y,m,b,T,E,w))},pt=(f,p,_,y,m,b,T,E,w)=>{f=f||Wt,p=p||Wt;const v=f.length,N=p.length,x=Math.min(v,N);let R;for(R=0;R<x;R++){const P=p[R]=w?nt(p[R]):We(p[R]);S(f[R],P,_,null,m,b,T,E,w)}v>N?Ve(f,m,b,!0,!1,x):ft(p,_,y,m,b,T,E,w,x)},ns=(f,p,_,y,m,b,T,E,w)=>{let v=0;const N=p.length;let x=f.length-1,R=N-1;for(;v<=x&&v<=R;){const P=f[v],B=p[v]=w?nt(p[v]):We(p[v]);if(gn(P,B))S(P,B,_,null,m,b,T,E,w);else break;v++}for(;v<=x&&v<=R;){const P=f[x],B=p[R]=w?nt(p[R]):We(p[R]);if(gn(P,B))S(P,B,_,null,m,b,T,E,w);else break;x--,R--}if(v>x){if(v<=R){const P=R+1,B=P<N?p[P].el:y;for(;v<=R;)S(null,p[v]=w?nt(p[v]):We(p[v]),_,B,m,b,T,E,w),v++}}else if(v>R)for(;v<=x;)Le(f[v],m,b,!0),v++;else{const P=v,B=v,K=new Map;for(v=B;v<=R;v++){const we=p[v]=w?nt(p[v]):We(p[v]);we.key!=null&&K.set(we.key,v)}let j,se=0;const Ie=R-B+1;let Mt=!1,Co=0;const _n=new Array(Ie);for(v=0;v<Ie;v++)_n[v]=0;for(v=P;v<=x;v++){const we=f[v];if(se>=Ie){Le(we,m,b,!0);continue}let Fe;if(we.key!=null)Fe=K.get(we.key);else for(j=B;j<=R;j++)if(_n[j-B]===0&&gn(we,p[j])){Fe=j;break}Fe===void 0?Le(we,m,b,!0):(_n[Fe-B]=v+1,Fe>=Co?Co=Fe:Mt=!0,S(we,p[Fe],_,null,m,b,T,E,w),se++)}const Eo=Mt?sf(_n):Wt;for(j=Eo.length-1,v=Ie-1;v>=0;v--){const we=B+v,Fe=p[we],bo=we+1<N?p[we+1].el:y;_n[v]===0?S(null,Fe,_,bo,m,b,T,E,w):Mt&&(j<0||v!==Eo[j]?_t(Fe,_,bo,2):j--)}}},_t=(f,p,_,y,m=null)=>{const{el:b,type:T,transition:E,children:w,shapeFlag:v}=f;if(v&6){_t(f.component.subTree,p,_,y);return}if(v&128){f.suspense.move(p,_,y);return}if(v&64){T.move(f,p,_,Dt);return}if(T===xe){s(b,p,_);for(let x=0;x<w.length;x++)_t(w[x],p,_,y);s(f.anchor,p,_);return}if(T===_i){ne(f,p,_);return}if(y!==2&&v&1&&E)if(y===0)E.beforeEnter(b),s(b,p,_),me(()=>E.enter(b),m);else{const{leave:x,delayLeave:R,afterLeave:P}=E,B=()=>s(b,p,_),K=()=>{x(b,()=>{B(),P&&P()})};R?R(b,B,K):K()}else s(b,p,_)},Le=(f,p,_,y=!1,m=!1)=>{const{type:b,props:T,ref:E,children:w,dynamicChildren:v,shapeFlag:N,patchFlag:x,dirs:R}=f;if(E!=null&&Ui(E,null,_,f,!0),N&256){p.ctx.deactivate(f);return}const P=N&1&&R,B=!ds(f);let K;if(B&&(K=T&&T.onVnodeBeforeUnmount)&&Be(K,p,f),N&6)gu(f.component,_,y);else{if(N&128){f.suspense.unmount(_,y);return}P&&gt(f,null,p,"beforeUnmount"),N&64?f.type.remove(f,p,_,m,Dt,y):v&&(b!==xe||x>0&&x&64)?Ve(v,p,_,!1,!0):(b===xe&&x&384||!m&&N&16)&&Ve(w,p,_),y&&yo(f)}(B&&(K=T&&T.onVnodeUnmounted)||P)&&me(()=>{K&&Be(K,p,f),P&&gt(f,null,p,"unmounted")},_)},yo=f=>{const{type:p,el:_,anchor:y,transition:m}=f;if(p===xe){_u(_,y);return}if(p===_i){D(f);return}const b=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:E}=m,w=()=>T(_,b);E?E(f.el,b,w):w()}else b()},_u=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},gu=(f,p,_)=>{const{bum:y,scope:m,update:b,subTree:T,um:E}=f;y&&hi(y),m.stop(),b&&(b.active=!1,Le(T,f,p,_)),E&&me(E,p),me(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ve=(f,p,_,y=!1,m=!1,b=0)=>{for(let T=b;T<f.length;T++)Le(f[T],p,_,y,m)},ss=f=>f.shapeFlag&6?ss(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),vo=(f,p,_)=>{f==null?p._vnode&&Le(p._vnode,null,null,!0):S(p._vnode||null,f,p,null,null,null,_),Po(),ga(),p._vnode=f},Dt={p:S,um:Le,m:_t,r:yo,mt:li,mc:ft,pc:z,pbc:dt,n:ss,o:t};let ai,ci;return e&&([ai,ci]=e(Dt)),{render:vo,hydrate:ai,createApp:Gh(vo,ai)}}function mt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Oa(t,e,n=!1){const s=t.children,i=e.children;if(O(s)&&O(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=nt(i[r]),l.el=o.el),n||Oa(o,l)),l.type===qs&&(l.el=o.el)}}function sf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const rf=t=>t.__isTeleport,xe=Symbol.for("v-fgt"),qs=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),_i=Symbol.for("v-stc"),In=[];let Ae=null;function Yt(t=!1){In.push(Ae=t?null:[])}function of(){In.pop(),Ae=In[In.length-1]||null}let Mn=1;function Ho(t){Mn+=t}function lf(t){return t.dynamicChildren=Mn>0?Ae||Wt:null,of(),Mn>0&&Ae&&Ae.push(t),t}function Qt(t,e,n,s,i,r){return lf(Sr(t,e,n,s,i,r,!0))}function af(t){return t?t.__v_isVNode===!0:!1}function gn(t,e){return t.type===e.type&&t.key===e.key}const Gs="__vInternal",Da=({key:t})=>t??null,_s=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?re(t)||pe(t)||M(t)?{i:He,r:t,k:e,f:!!n}:t:null);function Sr(t,e=null,n=null,s=0,i=null,r=t===xe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Da(e),ref:e&&_s(e),scopeId:va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:He};return l?(xr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=re(n)?8:16),Mn>0&&!o&&Ae&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ae.push(a),a}const $e=cf;function cf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Wh)&&(t=Dn),af(t)){const l=Xt(t,e,!0);return n&&xr(l,n),Mn>0&&!r&&Ae&&(l.shapeFlag&6?Ae[Ae.indexOf(t)]=l:Ae.push(l)),l.patchFlag|=-2,l}if(Cf(t)&&(t=t.__vccOpts),e){e=uf(e);let{class:l,style:a}=e;l&&!re(l)&&(e.class=dr(l)),Z(a)&&(ca(a)&&!O(a)&&(a=ce({},a)),e.style=sn(a))}const o=re(t)?1:Ih(t)?128:rf(t)?64:Z(t)?4:M(t)?2:0;return Sr(t,e,n,s,i,o,r,!0)}function uf(t){return t?ca(t)||Gs in t?ce({},t):t:null}function Xt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?ff(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Da(l),ref:e&&e.ref?n&&i?O(i)?i.concat(_s(e)):[i,_s(e)]:_s(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xt(t.ssContent),ssFallback:t.ssFallback&&Xt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function hf(t=" ",e=0){return $e(qs,null,t,e)}function We(t){return t==null||typeof t=="boolean"?$e(Dn):O(t)?$e(xe,null,t.slice()):typeof t=="object"?nt(t):$e(qs,null,String(t))}function nt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xt(t)}function xr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),xr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Gs in e)?e._ctx=He:i===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:He},n=32):(e=String(e),s&64?(n=16,e=[hf(e)]):n=8);t.children=e,t.shapeFlag|=n}function ff(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=dr([e.class,s.class]));else if(i==="style")e.style=sn([e.style,s.style]);else if(Ws(i)){const r=e[i],o=s[i];o&&r!==o&&!(O(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Be(t,e,n,s=null){Me(t,e,7,[n,s])}const df=Sa();let pf=0;function _f(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||df,r={uid:pf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Na(s,i),emitsOptions:ya(s,i),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:s.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=yh.bind(null,r),t.ce&&t.ce(r),r}let de=null,Nr,kt,$o="__VUE_INSTANCE_SETTERS__";(kt=Ri()[$o])||(kt=Ri()[$o]=[]),kt.push(t=>de=t),Nr=t=>{kt.length>1?kt.forEach(e=>e(t)):kt[0](t)};const Jt=t=>{Nr(t),t.scope.on()},Tt=()=>{de&&de.scope.off(),Nr(null)};function Ma(t){return t.vnode.shapeFlag&4}let kn=!1;function gf(t,e=!1){kn=e;const{props:n,children:s}=t.vnode,i=Ma(t);Qh(t,n,i,e),Zh(t,s);const r=i?mf(t,e):void 0;return kn=!1,r}function mf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ua(new Proxy(t.ctx,Hh));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?vf(t):null;Jt(t),rn();const r=it(s,t,0,[t.props,i]);if(on(),Tt(),Kl(r)){if(r.then(Tt,Tt),e)return r.then(o=>{jo(t,o,e)}).catch(o=>{js(o,t,0)});t.asyncDep=r}else jo(t,r,e)}else ka(t,e)}function jo(t,e,n){M(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Z(e)&&(t.setupState=da(e)),ka(t,n)}let Vo;function ka(t,e,n){const s=t.type;if(!t.render){if(!e&&Vo&&!s.render){const i=s.template||Ir(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=ce(ce({isCustomElement:r,delimiters:l},o),a);s.render=Vo(i,c)}}t.render=s.render||De}Jt(t),rn(),$h(t),on(),Tt()}function yf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ee(t,"get","$attrs"),e[n]}}))}function vf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return yf(t)},slots:t.slots,emit:t.emit,expose:e}}function Rr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(da(ua(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in wn)return wn[n](t)},has(e,n){return n in e||n in wn}}))}function Cf(t){return M(t)&&"__vccOpts"in t}const Ef=(t,e)=>hh(t,e,kn),bf=Symbol.for("v-scx"),wf=()=>ps(bf),If="3.3.4",Tf="http://www.w3.org/2000/svg",Et=typeof document<"u"?document:null,zo=Et&&Et.createElement("template"),Sf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Et.createElementNS(Tf,t):Et.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Et.createTextNode(t),createComment:t=>Et.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Et.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{zo.innerHTML=s?`<svg>${t}</svg>`:t;const l=zo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function xf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Nf(t,e,n){const s=t.style,i=re(n);if(n&&!i){if(e&&!re(e))for(const r in e)n[r]==null&&Hi(s,r,"");for(const r in n)Hi(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Ko=/\s*!important$/;function Hi(t,e,n){if(O(n))n.forEach(s=>Hi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Rf(t,e);Ko.test(n)?t.setProperty(nn(s),n.replace(Ko,""),"important"):t[s]=n}}const qo=["Webkit","Moz","ms"],gi={};function Rf(t,e){const n=gi[e];if(n)return n;let s=qt(e);if(s!=="filter"&&s in t)return gi[e]=s;s=Yl(s);for(let i=0;i<qo.length;i++){const r=qo[i]+s;if(r in t)return gi[e]=r}return e}const Go="http://www.w3.org/1999/xlink";function Af(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Go,e.slice(6,e.length)):t.setAttributeNS(Go,e,n);else{const r=Ru(e);n==null||r&&!Ql(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Pf(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ql(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Of(t,e,n,s){t.addEventListener(e,n,s)}function Df(t,e,n,s){t.removeEventListener(e,n,s)}function Mf(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=kf(e);if(s){const c=r[e]=Bf(s,i);Of(t,l,c,a)}else o&&(Df(t,l,o,a),r[e]=void 0)}}const Yo=/(?:Once|Passive|Capture)$/;function kf(t){let e;if(Yo.test(t)){e={};let s;for(;s=t.match(Yo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nn(t.slice(2)),e]}let mi=0;const Lf=Promise.resolve(),Ff=()=>mi||(Lf.then(()=>mi=0),mi=Date.now());function Bf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Me(Wf(s,n.value),e,5,[s])};return n.value=t,n.attached=Ff(),n}function Wf(t,e){if(O(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Qo=/^on[a-z]/,Uf=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?xf(t,s,i):e==="style"?Nf(t,n,s):Ws(e)?cr(e)||Mf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hf(t,e,s,i))?Pf(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Af(t,e,s,i))};function Hf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Qo.test(e)&&M(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Qo.test(e)&&re(n)?!1:e in t}const $f=ce({patchProp:Uf},Sf);let Xo;function jf(){return Xo||(Xo=tf($f))}const Vf=(...t)=>{const e=jf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=zf(s);if(!i)return;const r=e._component;!M(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function zf(t){return re(t)?document.querySelector(t):t}var Jo=Xf,Es=256,Kf={x:Es/2,y:Es/2},qf=Es/360,Gf=Es/(2*Math.PI);function Yf(t,e,n){return e!=null&&(t=Math.max(t,e)),n!=null&&(t=Math.min(t,n)),t}function Qf(t){return t*(Math.PI/180)}function Xf(t,e){var n={x:null,y:null},s=Kf;n.x=s.x+t.lng*qf;var i=Yf(Math.sin(Qf(t.lat)),-.9999,.9999);return n.y=s.y+.5*Math.log((1+i)/(1-i))*-Gf,n}const Jf=["src"],Zf=zs({__name:"StaticMap",props:{zoom:{},center:{},mapWidth:{},mapHeight:{}},setup(t){const e=t,n=new URL("https://maps.googleapis.com/maps/api/staticmap");return n.searchParams.set("zoom",e.zoom),n.searchParams.set("center",e.center),n.searchParams.set("key","AIzaSyDImU7k6IetA47jAxOPlhWiMlWcefJoIiw"),n.searchParams.set("size",`${e.mapWidth}x${e.mapHeight}`),n.searchParams.set("scale","2"),(s,i)=>(Yt(),Qt("img",{src:Se(n).toString(),style:sn({width:e.mapWidth+"px",height:e.mapHeight+"px"})},null,12,Jf))}});/**
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
 */const La={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw ln(e)},ln=function(t){return new Error("Firebase Database ("+La.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Fa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ed=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ar={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ed(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new td;const d=r<<2|l>>4;if(s.push(d),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const I=c<<6&192|h;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class td extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ba=function(t){const e=Fa(t);return Ar.encodeByteArray(e,!0)},bs=function(t){return Ba(t).replace(/\./g,"")},$i=function(t){try{return Ar.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nd(t){return Wa(void 0,t)}function Wa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!sd(n)||(t[n]=Wa(t[n],e[n]));return t}function sd(t){return t!=="__proto__"}/**
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
 */function id(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rd=()=>id().__FIREBASE_DEFAULTS__,od=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ld=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$i(t[1]);return e&&JSON.parse(e)},Ua=()=>{try{return rd()||od()||ld()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ad=t=>{var e,n;return(n=(e=Ua())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cd=t=>{const e=ad(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ha=()=>{var t;return(t=Ua())===null||t===void 0?void 0:t.config};/**
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
 */function ud(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[bs(JSON.stringify(n)),bs(JSON.stringify(o)),l].join(".")}/**
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
 */function hd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $a(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hd())}function fd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ja(){return La.NODE_ADMIN===!0}function dd(){try{return typeof indexedDB=="object"}catch{return!1}}function pd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const _d="FirebaseError";class qn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_d,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Va.prototype.create)}}class Va{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?gd(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new qn(i,l,s)}}function gd(t,e){return t.replace(md,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const md=/\{\$([^}]+)}/g;/**
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
 */function Ln(t){return JSON.parse(t)}function ae(t){return JSON.stringify(t)}/**
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
 */const za=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ln($i(r[0])||""),n=Ln($i(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},yd=function(t){const e=za(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vd=function(t){const e=za(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function je(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Zt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Zo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ws(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ji(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(el(r)&&el(o)){if(!ji(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function el(t){return t!==null&&typeof t=="object"}/**
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
 */function Cd(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Ed{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Qs(t,e){return`${t} failed: ${e} argument `}/**
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
 */const bd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xs=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function an(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yt="[DEFAULT]";/**
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
 */class wd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ys;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Td(e))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yt){return this.instances.has(e)}getOptions(e=yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Id(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yt){return this.component?this.component.multipleInstances?e:yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Id(t){return t===yt?void 0:t}function Td(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const xd={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Nd=q.INFO,Rd={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Ad=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Rd[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ka{constructor(e){this.name=e,this._logLevel=Nd,this._logHandler=Ad,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const Pd=(t,e)=>e.some(n=>t instanceof n);let tl,nl;function Od(){return tl||(tl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dd(){return nl||(nl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qa=new WeakMap,Vi=new WeakMap,Ga=new WeakMap,yi=new WeakMap,Pr=new WeakMap;function Md(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(rt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qa.set(n,t)}).catch(()=>{}),Pr.set(e,t),e}function kd(t){if(Vi.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Vi.set(t,e)}let zi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ga.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ld(t){zi=t(zi)}function Fd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(vi(this),e,...n);return Ga.set(s,e.sort?e.sort():[e]),rt(s)}:Dd().includes(t)?function(...e){return t.apply(vi(this),e),rt(qa.get(this))}:function(...e){return rt(t.apply(vi(this),e))}}function Bd(t){return typeof t=="function"?Fd(t):(t instanceof IDBTransaction&&kd(t),Pd(t,Od())?new Proxy(t,zi):t)}function rt(t){if(t instanceof IDBRequest)return Md(t);if(yi.has(t))return yi.get(t);const e=Bd(t);return e!==t&&(yi.set(t,e),Pr.set(e,t)),e}const vi=t=>Pr.get(t);function Wd(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=rt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(rt(o.result),a.oldVersion,a.newVersion,rt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ud=["get","getKey","getAll","getAllKeys","count"],Hd=["put","add","delete","clear"],Ci=new Map;function sl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ci.get(e))return Ci.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Hd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ud.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ci.set(e,r),r}Ld(t=>({...t,get:(e,n,s)=>sl(e,n)||t.get(e,n,s),has:(e,n)=>!!sl(e,n)||t.has(e,n)}));/**
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
 */class $d{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function jd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ki="@firebase/app",il="0.9.11";/**
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
 */const xt=new Ka("@firebase/app"),Vd="@firebase/app-compat",zd="@firebase/analytics-compat",Kd="@firebase/analytics",qd="@firebase/app-check-compat",Gd="@firebase/app-check",Yd="@firebase/auth",Qd="@firebase/auth-compat",Xd="@firebase/database",Jd="@firebase/database-compat",Zd="@firebase/functions",ep="@firebase/functions-compat",tp="@firebase/installations",np="@firebase/installations-compat",sp="@firebase/messaging",ip="@firebase/messaging-compat",rp="@firebase/performance",op="@firebase/performance-compat",lp="@firebase/remote-config",ap="@firebase/remote-config-compat",cp="@firebase/storage",up="@firebase/storage-compat",hp="@firebase/firestore",fp="@firebase/firestore-compat",dp="firebase",pp="9.22.1";/**
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
 */const qi="[DEFAULT]",_p={[Ki]:"fire-core",[Vd]:"fire-core-compat",[Kd]:"fire-analytics",[zd]:"fire-analytics-compat",[Gd]:"fire-app-check",[qd]:"fire-app-check-compat",[Yd]:"fire-auth",[Qd]:"fire-auth-compat",[Xd]:"fire-rtdb",[Jd]:"fire-rtdb-compat",[Zd]:"fire-fn",[ep]:"fire-fn-compat",[tp]:"fire-iid",[np]:"fire-iid-compat",[sp]:"fire-fcm",[ip]:"fire-fcm-compat",[rp]:"fire-perf",[op]:"fire-perf-compat",[lp]:"fire-rc",[ap]:"fire-rc-compat",[cp]:"fire-gcs",[up]:"fire-gcs-compat",[hp]:"fire-fst",[fp]:"fire-fst-compat","fire-js":"fire-js",[dp]:"fire-js-all"};/**
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
 */const Is=new Map,Gi=new Map;function gp(t,e){try{t.container.addComponent(e)}catch(n){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ts(t){const e=t.name;if(Gi.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;Gi.set(e,t);for(const n of Is.values())gp(n,t);return!0}function mp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const yp={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ot=new Va("app","Firebase",yp);/**
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
 */class vp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ot.create("app-deleted",{appName:this._name})}}/**
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
 */const Cp=pp;function Ya(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:qi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ot.create("bad-app-name",{appName:String(i)});if(n||(n=Ha()),!n)throw ot.create("no-options");const r=Is.get(i);if(r){if(ji(n,r.options)&&ji(s,r.config))return r;throw ot.create("duplicate-app",{appName:i})}const o=new Sd(i);for(const a of Gi.values())o.addComponent(a);const l=new vp(n,s,o);return Is.set(i,l),l}function Ep(t=qi){const e=Is.get(t);if(!e&&t===qi&&Ha())return Ya();if(!e)throw ot.create("no-app",{appName:t});return e}function jt(t,e,n){var s;let i=(s=_p[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(l.join(" "));return}Ts(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const bp="firebase-heartbeat-database",wp=1,Bn="firebase-heartbeat-store";let Ei=null;function Qa(){return Ei||(Ei=Wd(bp,wp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bn)}}}).catch(t=>{throw ot.create("idb-open",{originalErrorMessage:t.message})})),Ei}async function Ip(t){try{return await(await Qa()).transaction(Bn).objectStore(Bn).get(Xa(t))}catch(e){if(e instanceof qn)xt.warn(e.message);else{const n=ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(n.message)}}}async function rl(t,e){try{const s=(await Qa()).transaction(Bn,"readwrite");await s.objectStore(Bn).put(e,Xa(t)),await s.done}catch(n){if(n instanceof qn)xt.warn(n.message);else{const s=ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xt.warn(s.message)}}}function Xa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Tp=1024,Sp=30*24*60*60*1e3;class xp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ol();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Sp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ol(),{heartbeatsToSend:n,unsentEntries:s}=Np(this._heartbeatsCache.heartbeats),i=bs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ol(){return new Date().toISOString().substring(0,10)}function Np(t,e=Tp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ll(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ll(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Rp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dd()?pd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ip(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ll(t){return bs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ap(t){Ts(new Fn("platform-logger",e=>new $d(e),"PRIVATE")),Ts(new Fn("heartbeat",e=>new xp(e),"PRIVATE")),jt(Ki,il,t),jt(Ki,il,"esm2017"),jt("fire-js","")}Ap("");var Pp="firebase",Op="9.22.1";/**
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
 */jt(Pp,Op,"app");const al="@firebase/database",cl="0.14.4";/**
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
 */let Ja="";function Dp(t){Ja=t}/**
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
 */class Mp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ln(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class kp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return je(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Za=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Mp(e)}}catch{}return new kp},bt=Za("localStorage"),Yi=Za("sessionStorage");/**
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
 */const Vt=new Ka("@firebase/database"),Lp=function(){let t=1;return function(){return t++}}(),ec=function(t){const e=bd(t),n=new Ed;n.update(e);const s=n.digest();return Ar.encodeByteArray(s)},Gn=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Gn.apply(null,s):typeof s=="object"?e+=ae(s):e+=s,e+=" "}return e};let St=null,ul=!0;const Fp=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Vt.logLevel=q.VERBOSE,St=Vt.log.bind(Vt),e&&Yi.set("logging_enabled",!0)):typeof t=="function"?St=t:(St=null,Yi.remove("logging_enabled"))},he=function(...t){if(ul===!0&&(ul=!1,St===null&&Yi.get("logging_enabled")===!0&&Fp(!0)),St){const e=Gn.apply(null,t);St(e)}},Yn=function(t){return function(...e){he(t,...e)}},Qi=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gn(...t);Vt.error(e)},Ye=function(...t){const e=`FIREBASE FATAL ERROR: ${Gn(...t)}`;throw Vt.error(e),new Error(e)},Ce=function(...t){const e="FIREBASE WARNING: "+Gn(...t);Vt.warn(e)},Bp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Or=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Wp=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Nt="[MIN_NAME]",Qe="[MAX_NAME]",cn=function(t,e){if(t===e)return 0;if(t===Nt||e===Qe)return-1;if(e===Nt||t===Qe)return 1;{const n=hl(t),s=hl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Up=function(t,e){return t===e?0:t<e?-1:1},mn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ae(e))},Dr=function(t){if(typeof t!="object"||t===null)return ae(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ae(e[s]),n+=":",n+=Dr(t[e[s]]);return n+="}",n},tc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const nc=function(t){C(!Or(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Hp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$p=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Vp=new RegExp("^-?(0*)\\d{1,10}$"),zp=-2147483648,Kp=2147483647,hl=function(t){if(Vp.test(t)){const e=Number(t);if(e>=zp&&e<=Kp)return e}return null},un=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ce("Exception was thrown by user callback.",n),e},Math.floor(0))}},qp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Tn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Gp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Yp{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(he("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ce(e)}}class zt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zt.OWNER="owner";/**
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
 */const Mr="5",sc="v",ic="s",rc="r",oc="f",lc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ac="ls",cc="p",Xi="ac",uc="websocket",hc="long_polling";/**
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
 */class fc{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Qp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dc(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===uc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Qp(t)&&(n.ns=t.namespace);const i=[];return be(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Xp{constructor(){this.counters_={}}incrementCounter(e,n=1){je(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nd(this.counters_)}}/**
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
 */const bi={},wi={};function kr(t){const e=t.toString();return bi[e]||(bi[e]=new Xp),bi[e]}function Jp(t,e){const n=t.toString();return wi[n]||(wi[n]=e()),wi[n]}/**
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
 */class Zp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&un(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const fl="start",e_="close",t_="pLPCommand",n_="pRTLPCB",pc="id",_c="pw",gc="ser",s_="cb",i_="seg",r_="ts",o_="d",l_="dframe",mc=1870,yc=30,a_=mc-yc,c_=25e3,u_=3e4;class Bt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yn(e),this.stats_=kr(n),this.urlFn=a=>(this.appCheckToken&&(a[Xi]=this.appCheckToken),dc(n,hc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Zp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(u_)),Wp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fl)this.id=l,this.password=a;else if(o===e_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[fl]="t",s[gc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[s_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[sc]=Mr,this.transportSessionId&&(s[ic]=this.transportSessionId),this.lastSessionId&&(s[ac]=this.lastSessionId),this.applicationId&&(s[cc]=this.applicationId),this.appCheckToken&&(s[Xi]=this.appCheckToken),typeof location<"u"&&location.hostname&&lc.test(location.hostname)&&(s[rc]=oc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bt.forceAllow_=!0}static forceDisallow(){Bt.forceDisallow_=!0}static isAvailable(){return Bt.forceAllow_?!0:!Bt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Hp()&&!$p()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ba(n),i=tc(s,a_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[l_]="t",s[pc]=e,s[_c]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Lp(),window[t_+this.uniqueCallbackIdentifier]=e,window[n_+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){he("frame writing exception"),l.stack&&he(l.stack),he(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||he("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pc]=this.myID,e[_c]=this.myPW,e[gc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yc+s.length<=mc;){const o=this.pendingSegs.shift();s=s+"&"+i_+i+"="+o.seg+"&"+r_+i+"="+o.ts+"&"+o_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(c_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{he("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const h_=16384,f_=45e3;let Ss=null;typeof MozWebSocket<"u"?Ss=MozWebSocket:typeof WebSocket<"u"&&(Ss=WebSocket);class Re{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yn(this.connId),this.stats_=kr(n),this.connURL=Re.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[sc]=Mr,typeof location<"u"&&location.hostname&&lc.test(location.hostname)&&(o[rc]=oc),n&&(o[ic]=n),s&&(o[ac]=s),i&&(o[Xi]=i),r&&(o[cc]=r),dc(e,uc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bt.set("previous_websocket_failure",!0);try{let s;ja(),this.mySock=new Ss(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Re.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ss!==null&&!Re.forceDisallow_}static previouslyFailed(){return bt.isInMemoryStorage||bt.get("previous_websocket_failure")===!0}markConnectionHealthy(){bt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ln(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=tc(n,h_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(f_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Re.responsesRequiredToBeHealthy=2;Re.healthyTimeout=3e4;/**
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
 */class Wn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Bt,Re]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Re&&Re.isAvailable();let s=n&&!Re.previouslyFailed();if(e.webSocketOnly&&(n||Ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Re];else{const i=this.transports_=[];for(const r of Wn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Wn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wn.globalTransportInitialized_=!1;/**
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
 */const d_=6e4,p_=5e3,__=10*1024,g_=100*1024,Ii="t",dl="d",m_="s",pl="r",y_="e",_l="o",gl="a",ml="n",yl="p",v_="h";class C_{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yn("c:"+this.id+":"),this.transportManager_=new Wn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Tn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>g_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>__?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ii in e){const n=e[Ii];n===gl?this.upgradeIfSecondaryHealthy_():n===pl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_l&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=mn("t",e),s=mn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ml,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=mn("t",e),s=mn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=mn(Ii,e);if(dl in e){const s=e[dl];if(n===v_){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ml){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===m_?this.onConnectionShutdown_(s):n===pl?this.onReset_(s):n===y_?Qi("Server Error: "+s):n===_l?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Mr!==s&&Ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Tn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(d_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(p_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class vc{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Cc{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class xs extends Cc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$a()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xs}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const vl=32,Cl=768;class V{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new V("")}function k(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ut(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new V(t.pieces_,e)}function Ec(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function E_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function bc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new V(e,0)}function ie(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof V)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new V(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function ye(t,e){const n=k(t),s=k(e);if(n===null)return e;if(n===s)return ye(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Fr(t,e){if(ut(t)!==ut(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Pe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ut(t)>ut(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class b_{constructor(e,n){this.errorPrefix_=n,this.parts_=bc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Xs(this.parts_[s]);Ic(this)}}function w_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Xs(e),Ic(t)}function I_(t){const e=t.parts_.pop();t.byteLength_-=Xs(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ic(t){if(t.byteLength_>Cl)throw new Error(t.errorPrefix_+"has a key path longer than "+Cl+" bytes ("+t.byteLength_+").");if(t.parts_.length>vl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vl+") or object contains a cycle "+vt(t))}function vt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Br extends Cc{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Br}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const yn=1e3,T_=60*5*1e3,El=30*1e3,S_=1.3,x_=3e4,N_="server_kill",bl=3;class qe extends vc{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=qe.nextPersistentConnectionId_++,this.log_=Yn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yn,this.maxReconnectDelay_=T_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ja())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Br.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ae(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ys,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;qe.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&je(e,"w")){const s=Zt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=El)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ae(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qi("Unrecognized action received from server: "+ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>x_&&(this.reconnectDelay_=yn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*S_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+qe.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?he("getToken() completed but was canceled"):(he("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new C_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Ce(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(N_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ce(h),a())}}}interrupt(e){he("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){he("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zo(this.interruptReasons_)&&(this.reconnectDelay_=yn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Dr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new V(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){he("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bl&&(this.reconnectDelay_=El,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){he("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ja.replace(/\./g,"-")]=1,$a()?e["framework.cordova"]=1:fd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xs.getInstance().currentlyOnline();return Zo(this.interruptReasons_)&&e}}qe.nextPersistentConnectionId_=0;qe.nextConnectionId_=0;/**
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
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
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
 */class Js{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(Nt,e),i=new F(Nt,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
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
 */let us;class Tc extends Js{static get __EMPTY_NODE(){return us}static set __EMPTY_NODE(e){us=e}compare(e,n){return cn(e.name,n.name)}isDefinedOn(e){throw ln("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Qe,us)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,us)}toString(){return".key"}}const lt=new Tc;/**
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
 */class hs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class le{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??le.RED,this.left=i??ve.EMPTY_NODE,this.right=r??ve.EMPTY_NODE}copy(e,n,s,i,r){return new le(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ve.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}le.RED=!0;le.BLACK=!1;class R_{copy(e,n,s,i,r){return this}insert(e,n,s){return new le(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ve{constructor(e,n=ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,le.BLACK,null,null))}remove(e){return new ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,le.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new hs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new hs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new hs(this.root_,null,this.comparator_,!0,e)}}ve.EMPTY_NODE=new R_;/**
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
 */function A_(t,e){return cn(t.name,e.name)}function Wr(t,e){return cn(t,e)}/**
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
 */let Ji;function P_(t){Ji=t}const Sc=function(t){return typeof t=="number"?"number:"+nc(t):"string:"+t},xc=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&je(e,".sv"),"Priority must be a string or number.")}else C(t===Ji||t.isEmpty(),"priority of unexpected type.");C(t===Ji||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let wl;class oe{constructor(e,n=oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xc(this.priorityNode_)}static set __childrenNodeConstructor(e){wl=e}static get __childrenNodeConstructor(){return wl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:k(e)===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=k(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||ut(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Sc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=nc(this.value_):e+=this.value_,this.lazyHash_=ec(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof oe.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=oe.VALUE_TYPE_ORDER.indexOf(n),r=oe.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Nc,Rc;function O_(t){Nc=t}function D_(t){Rc=t}class M_ extends Js{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?cn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Qe,new oe("[PRIORITY-POST]",Rc))}makePost(e,n){const s=Nc(e);return new F(n,new oe("[PRIORITY-POST]",s))}toString(){return".priority"}}const J=new M_;/**
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
 */const k_=Math.log(2);class L_{constructor(e){const n=r=>parseInt(Math.log(r)/k_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ns=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new le(d,h.node,le.BLACK,null,null);{const g=parseInt(u/2,10)+a,I=i(a,g),S=i(g+1,c);return h=t[g],d=n?n(h):h,new le(d,h.node,le.BLACK,I,S)}},r=function(a){let c=null,u=null,h=t.length;const d=function(I,S){const W=h-I,X=h;h-=I;const te=i(W+1,X),ne=t[W],D=n?n(ne):ne;g(new le(D,ne.node,S,null,te))},g=function(I){c?(c.left=I,c=I):(u=I,c=I)};for(let I=0;I<a.count;++I){const S=a.nextBitIsOne(),W=Math.pow(2,a.count-(I+1));S?d(W,le.BLACK):(d(W,le.BLACK),d(W,le.RED))}return u},o=new L_(t.length),l=r(o);return new ve(s||e,l)};/**
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
 */let Ti;const Lt={};class Ke{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Lt&&J,"ChildrenNode.ts has not been loaded"),Ti=Ti||new Ke({".priority":Lt},{".priority":J}),Ti}get(e){const n=Zt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ve?n:null}hasIndex(e){return je(this.indexSet_,e.toString())}addIndex(e,n){C(e!==lt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ns(s,e.getCompare()):l=Lt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Ke(u,c)}addToIndexes(e,n){const s=ws(this.indexes_,(i,r)=>{const o=Zt(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===Lt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ns(l,o.getCompare())}else return Lt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new Ke(s,this.indexSet_)}removeFromIndexes(e,n){const s=ws(this.indexes_,i=>{if(i===Lt)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new Ke(s,this.indexSet_)}}/**
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
 */let vn;class A{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&xc(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return vn||(vn=new A(new ve(Wr),null,Ke.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vn}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vn:n}}getChild(e){const n=k(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?vn:this.priorityNode_;return new A(i,o,r)}}updateChild(e,n){const s=k(e);if(s===null)return n;{C(k(e)!==".priority"||ut(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(G(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(J,(o,l)=>{n[o]=l.val(e),s++,r&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Sc(this.getPriority().val())+":"),this.forEachChild(J,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ec(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qn?-1:0}withIndex(e){if(e===lt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===lt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(J),i=n.getIterator(J);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===lt?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class F_ extends A{constructor(){super(new ve(Wr),A.EMPTY_NODE,Ke.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Qn=new F_;Object.defineProperties(F,{MIN:{value:new F(Nt,A.EMPTY_NODE)},MAX:{value:new F(Qe,Qn)}});Tc.__EMPTY_NODE=A.EMPTY_NODE;oe.__childrenNodeConstructor=A;P_(Qn);D_(Qn);/**
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
 */const B_=!0;function ue(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new oe(n,ue(e))}if(!(t instanceof Array)&&B_){const n=[];let s=!1;if(be(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ue(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return A.EMPTY_NODE;const r=Ns(n,A_,o=>o.name,Wr);if(s){const o=Ns(n,J.getCompare());return new A(r,ue(e),new Ke({".priority":o},{".priority":J}))}else return new A(r,ue(e),Ke.Default)}else{let n=A.EMPTY_NODE;return be(t,(s,i)=>{if(je(t,s)&&s.substring(0,1)!=="."){const r=ue(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ue(e))}}O_(ue);/**
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
 */class Ur extends Js{constructor(e){super(),this.indexPath_=e,C(!L(e)&&k(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?cn(e.name,n.name):r}makePost(e,n){const s=ue(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Qn);return new F(Qe,e)}toString(){return bc(this.indexPath_,0).join("/")}}/**
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
 */class W_ extends Js{compare(e,n){const s=e.node.compareTo(n.node);return s===0?cn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=ue(e);return new F(n,s)}toString(){return".value"}}const Ac=new W_;/**
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
 */function Pc(t){return{type:"value",snapshotNode:t}}function en(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Un(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Hn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function U_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Hr{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Un(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(en(n,s)):o.trackChildChange(Hn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(J,(i,r)=>{n.hasChild(i)||s.trackChildChange(Un(i,r))}),n.isLeafNode()||n.forEachChild(J,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Hn(i,r,o))}else s.trackChildChange(en(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class $n{constructor(e){this.indexedFilter_=new Hr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$n.getStartPost_(e),this.endPost_=$n.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const r=this;return n.forEachChild(J,(o,l)=>{r.matches(new F(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class H_{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new $n(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=A.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new F(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(Hn(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Un(n,h));const S=l.updateImmediateChild(n,A.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(en(d.name,d.node)),S.updateImmediateChild(d.name,d.node)):S}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Un(c.name,c.node)),r.trackChildChange(en(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
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
 */class $r{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=J}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Nt}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===J}copy(){const e=new $r;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $_(t){return t.loadsAllData()?new Hr(t.getIndex()):t.hasLimit()?new H_(t):new $n(t)}function j_(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function Il(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function V_(t,e,n){let s;return t.index_===lt||n?s=Il(t,e,n):s=Il(t,e,Qe),s.startAfterSet_=!0,s}function z_(t,e){const n=t.copy();return n.index_=e,n}function Tl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===J?n="$priority":t.index_===Ac?n="$value":t.index_===lt?n="$key":(C(t.index_ instanceof Ur,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ae(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ae(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ae(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ae(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Sl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==J&&(e.i=t.index_.toString()),e}/**
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
 */class Rs extends vc{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Yn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Rs.getListenId_(e,s),l={};this.listens_[o]=l;const a=Tl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Zt(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Rs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Tl(e._queryParams),s=e._path.toString(),i=new Ys;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cd(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ln(l.responseText)}catch{Ce("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ce("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class K_{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function As(){return{value:null,children:new Map}}function Oc(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=k(e);t.children.has(s)||t.children.set(s,As());const i=t.children.get(s);e=G(e),Oc(i,e,n)}}function Zi(t,e,n){t.value!==null?n(e,t.value):q_(t,(s,i)=>{const r=new V(e.toString()+"/"+s);Zi(i,r,n)})}function q_(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class G_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&be(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const xl=10*1e3,Y_=30*1e3,Q_=5*60*1e3;class X_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new G_(e);const s=xl+(Y_-xl)*Math.random();Tn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;be(e,(i,r)=>{r>0&&je(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Tn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Q_))}}/**
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
 */var Oe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Oe||(Oe={}));function Dc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ps{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Oe.ACK_USER_WRITE,this.source=Dc()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new V(e));return new Ps(H(),n,this.revert)}}else return C(k(this.path)===e,"operationForChild called for unrelated child."),new Ps(G(this.path),this.affectedTree,this.revert)}}/**
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
 */class jn{constructor(e,n){this.source=e,this.path=n,this.type=Oe.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new jn(this.source,H()):new jn(this.source,G(this.path))}}/**
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
 */class Rt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Oe.OVERWRITE}operationForChild(e){return L(this.path)?new Rt(this.source,H(),this.snap.getImmediateChild(e)):new Rt(this.source,G(this.path),this.snap)}}/**
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
 */class Vn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Oe.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new V(e));return n.isEmpty()?null:n.value?new Rt(this.source,H(),n.value):new Vn(this.source,H(),n)}else return C(k(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vn(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class At{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=k(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class J_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Z_(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(U_(o.childName,o.snapshotNode))}),Cn(t,i,"child_removed",e,s,n),Cn(t,i,"child_added",e,s,n),Cn(t,i,"child_moved",r,s,n),Cn(t,i,"child_changed",e,s,n),Cn(t,i,"value",e,s,n),i}function Cn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>tg(t,l,a)),o.forEach(l=>{const a=eg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function eg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tg(t,e,n){if(e.childName==null||n.childName==null)throw ln("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Zs(t,e){return{eventCache:t,serverCache:e}}function Sn(t,e,n,s){return Zs(new At(e,n,s),t.serverCache)}function Mc(t,e,n,s){return Zs(t.eventCache,new At(e,n,s))}function er(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Pt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Si;const ng=()=>(Si||(Si=new ve(Up)),Si);class Y{constructor(e,n=ng()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return be(e,(s,i)=>{n=n.set(new V(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(L(e))return null;{const s=k(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(G(e),n);return r!=null?{path:ie(new V(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=k(e),s=this.children.get(n);return s!==null?s.subtree(G(e)):new Y(null)}}set(e,n){if(L(e))return new Y(n,this.children);{const s=k(e),r=(this.children.get(s)||new Y(null)).set(G(e),n),o=this.children.insert(s,r);return new Y(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=k(e),s=this.children.get(n);if(s){const i=s.remove(G(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Y(null):new Y(this.value,r)}else return this}}get(e){if(L(e))return this.value;{const n=k(e),s=this.children.get(n);return s?s.get(G(e)):null}}setTree(e,n){if(L(e))return n;{const s=k(e),r=(this.children.get(s)||new Y(null)).setTree(G(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Y(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ie(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(L(e))return null;{const r=k(e),o=this.children.get(r);return o?o.findOnPath_(G(e),ie(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,s){if(L(e))return this;{this.value&&s(n,this.value);const i=k(e),r=this.children.get(i);return r?r.foreachOnPath_(G(e),ie(n,i),s):new Y(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ie(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class ke{constructor(e){this.writeTree_=e}static empty(){return new ke(new Y(null))}}function xn(t,e,n){if(L(e))return new ke(new Y(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ye(i,e);return r=r.updateChild(o,n),new ke(t.writeTree_.set(i,r))}else{const i=new Y(n),r=t.writeTree_.setTree(e,i);return new ke(r)}}}function Nl(t,e,n){let s=t;return be(n,(i,r)=>{s=xn(s,ie(e,i),r)}),s}function Rl(t,e){if(L(e))return ke.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new ke(n)}}function tr(t,e){return Ot(t,e)!=null}function Ot(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ye(n.path,e)):null}function Al(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(J,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function at(t,e){if(L(e))return t;{const n=Ot(t,e);return n!=null?new ke(new Y(n)):new ke(t.writeTree_.subtree(e))}}function nr(t){return t.writeTree_.isEmpty()}function tn(t,e){return kc(H(),t.writeTree_,e)}function kc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=kc(ie(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ie(t,".priority"),s)),n}}/**
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
 */function zr(t,e){return Wc(e,t)}function sg(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=xn(t.visibleWrites,e,n)),t.lastWriteId=s}function ig(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function rg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&og(l,s.path)?i=!1:Pe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return lg(t),!0;if(s.snap)t.visibleWrites=Rl(t.visibleWrites,s.path);else{const l=s.children;be(l,a=>{t.visibleWrites=Rl(t.visibleWrites,ie(s.path,a))})}return!0}else return!1}function og(t,e){if(t.snap)return Pe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Pe(ie(t.path,n),e))return!0;return!1}function lg(t){t.visibleWrites=Lc(t.allWrites,ag,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ag(t){return t.visible}function Lc(t,e,n){let s=ke.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Pe(n,o)?(l=ye(n,o),s=xn(s,l,r.snap)):Pe(o,n)&&(l=ye(o,n),s=xn(s,H(),r.snap.getChild(l)));else if(r.children){if(Pe(n,o))l=ye(n,o),s=Nl(s,l,r.children);else if(Pe(o,n))if(l=ye(o,n),L(l))s=Nl(s,H(),r.children);else{const a=Zt(r.children,k(l));if(a){const c=a.getChild(G(l));s=xn(s,H(),c)}}}else throw ln("WriteRecord should have .snap or .children")}}return s}function Fc(t,e,n,s,i){if(!s&&!i){const r=Ot(t.visibleWrites,e);if(r!=null)return r;{const o=at(t.visibleWrites,e);if(nr(o))return n;if(n==null&&!tr(o,H()))return null;{const l=n||A.EMPTY_NODE;return tn(o,l)}}}else{const r=at(t.visibleWrites,e);if(!i&&nr(r))return n;if(!i&&n==null&&!tr(r,H()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Pe(c.path,e)||Pe(e,c.path))},l=Lc(t.allWrites,o,e),a=n||A.EMPTY_NODE;return tn(l,a)}}}function cg(t,e,n){let s=A.EMPTY_NODE;const i=Ot(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(J,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=at(t.visibleWrites,e);return n.forEachChild(J,(o,l)=>{const a=tn(at(r,new V(o)),l);s=s.updateImmediateChild(o,a)}),Al(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=at(t.visibleWrites,e);return Al(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ug(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ie(e,n);if(tr(t.visibleWrites,r))return null;{const o=at(t.visibleWrites,r);return nr(o)?i.getChild(n):tn(o,i.getChild(n))}}function hg(t,e,n,s){const i=ie(e,n),r=Ot(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=at(t.visibleWrites,i);return tn(o,s.getNode().getImmediateChild(n))}else return null}function fg(t,e){return Ot(t.visibleWrites,e)}function dg(t,e,n,s,i,r,o){let l;const a=at(t.visibleWrites,e),c=Ot(a,H());if(c!=null)l=c;else if(n!=null)l=tn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function pg(){return{visibleWrites:ke.empty(),allWrites:[],lastWriteId:-1}}function Os(t,e,n,s){return Fc(t.writeTree,t.treePath,e,n,s)}function Kr(t,e){return cg(t.writeTree,t.treePath,e)}function Pl(t,e,n,s){return ug(t.writeTree,t.treePath,e,n,s)}function Ds(t,e){return fg(t.writeTree,ie(t.treePath,e))}function _g(t,e,n,s,i,r){return dg(t.writeTree,t.treePath,e,n,s,i,r)}function qr(t,e,n){return hg(t.writeTree,t.treePath,e,n)}function Bc(t,e){return Wc(ie(t.treePath,e),t.writeTree)}function Wc(t,e){return{treePath:t,writeTree:e}}/**
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
 */class gg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Hn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Un(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,en(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Hn(s,e.snapshotNode,i.oldSnap));else throw ln("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class mg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Uc=new mg;class Gr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new At(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pt(this.viewCache_),r=_g(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function yg(t){return{filter:t}}function vg(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Cg(t,e,n,s,i){const r=new gg;let o,l;if(n.type===Oe.OVERWRITE){const c=n;c.source.fromUser?o=sr(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=Ms(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Oe.MERGE){const c=n;c.source.fromUser?o=bg(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=ir(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Oe.ACK_USER_WRITE){const c=n;c.revert?o=Tg(t,e,c.path,s,i,r):o=wg(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Oe.LISTEN_COMPLETE)o=Ig(t,e,n.path,s,r);else throw ln("Unknown operation type: "+n.type);const a=r.getChanges();return Eg(e,o,a),{viewCache:o,changes:a}}function Eg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=er(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Pc(er(e)))}}function Hc(t,e,n,s,i,r){const o=e.eventCache;if(Ds(s,n)!=null)return e;{let l,a;if(L(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Pt(e),u=c instanceof A?c:A.EMPTY_NODE,h=Kr(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Os(s,Pt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=k(n);if(c===".priority"){C(ut(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Pl(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=G(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Pl(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=qr(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Sn(e,l,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function Ms(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=k(n);if(!a.isCompleteForPath(n)&&ut(n)>1)return e;const I=G(n),W=a.getNode().getImmediateChild(g).updateChild(I,s);g===".priority"?c=u.updatePriority(a.getNode(),W):c=u.updateChild(a.getNode(),g,W,I,Uc,null)}const h=Mc(e,c,a.isFullyInitialized()||L(n),u.filtersNodes()),d=new Gr(i,h,r);return Hc(t,h,n,i,d,l)}function sr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Gr(i,e,r);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Sn(e,c,!0,t.filter.filtersNodes());else{const h=k(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Sn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=G(n),g=l.getNode().getImmediateChild(h);let I;if(L(d))I=s;else{const S=u.getCompleteChild(h);S!=null?Ec(d)===".priority"&&S.getChild(wc(d)).isEmpty()?I=S:I=S.updateChild(d,s):I=A.EMPTY_NODE}if(g.equals(I))a=e;else{const S=t.filter.updateChild(l.getNode(),h,I,d,u,o);a=Sn(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ol(t,e){return t.eventCache.isCompleteForChild(e)}function bg(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=ie(n,a);Ol(e,k(u))&&(l=sr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=ie(n,a);Ol(e,k(u))||(l=sr(t,l,u,c,i,r,o))}),l}function Dl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ir(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;L(n)?c=s:c=new Y(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),I=Dl(t,g,d);a=Ms(t,a,new V(h),I,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const I=e.serverCache.getNode().getImmediateChild(h),S=Dl(t,I,d);a=Ms(t,a,new V(h),S,i,r,o,l)}}),a}function wg(t,e,n,s,i,r,o){if(Ds(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(L(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ms(t,e,n,a.getNode().getChild(n),i,r,l,o);if(L(n)){let c=new Y(null);return a.getNode().forEachChild(lt,(u,h)=>{c=c.set(new V(u),h)}),ir(t,e,n,c,i,r,l,o)}else return e}else{let c=new Y(null);return s.foreach((u,h)=>{const d=ie(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),ir(t,e,n,c,i,r,l,o)}}function Ig(t,e,n,s,i){const r=e.serverCache,o=Mc(e,r.getNode(),r.isFullyInitialized()||L(n),r.isFiltered());return Hc(t,o,n,s,Uc,i)}function Tg(t,e,n,s,i,r){let o;if(Ds(s,n)!=null)return e;{const l=new Gr(s,e,i),a=e.eventCache.getNode();let c;if(L(n)||k(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Os(s,Pt(e));else{const h=e.serverCache.getNode();C(h instanceof A,"serverChildren would be complete if leaf node"),u=Kr(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=k(n);let h=qr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,G(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,A.EMPTY_NODE,G(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Os(s,Pt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ds(s,H())!=null,Sn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Sg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Hr(s.getIndex()),r=$_(s);this.processor_=yg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(A.EMPTY_NODE,l.getNode(),null),u=new At(a,o.isFullyInitialized(),i.filtersNodes()),h=new At(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Zs(h,u),this.eventGenerator_=new J_(this.query_)}get query(){return this.query_}}function xg(t){return t.viewCache_.serverCache.getNode()}function Ng(t,e){const n=Pt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(k(e)).isEmpty())?n.getChild(e):null}function Ml(t){return t.eventRegistrations_.length===0}function Rg(t,e){t.eventRegistrations_.push(e)}function kl(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ll(t,e,n,s){e.type===Oe.MERGE&&e.source.queryId!==null&&(C(Pt(t.viewCache_),"We should always have a full cache before handling merges"),C(er(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Cg(t.processor_,i,e,n,s);return vg(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,$c(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Ag(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(J,(r,o)=>{s.push(en(r,o))}),n.isFullyInitialized()&&s.push(Pc(n.getNode())),$c(t,s,n.getNode(),e)}function $c(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Z_(t.eventGenerator_,e,n,i)}/**
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
 */let ks;class Pg{constructor(){this.views=new Map}}function Og(t){C(!ks,"__referenceConstructor has already been defined"),ks=t}function Dg(){return C(ks,"Reference.ts has not been loaded"),ks}function Mg(t){return t.views.size===0}function Yr(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),Ll(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ll(o,e,n,s));return r}}function kg(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Os(n,i?s:null),a=!1;l?a=!0:s instanceof A?(l=Kr(n,s),a=!1):(l=A.EMPTY_NODE,a=!1);const c=Zs(new At(l,a,!1),new At(s,i,!1));return new Sg(e,c)}return o}function Lg(t,e,n,s,i,r){const o=kg(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Rg(o,n),Ag(o,n)}function Fg(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=ht(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(kl(c,n,s)),Ml(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(kl(a,n,s)),Ml(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!ht(t)&&r.push(new(Dg())(e._repo,e._path)),{removed:r,events:o}}function jc(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Kt(t,e){let n=null;for(const s of t.views.values())n=n||Ng(s,e);return n}function Vc(t,e){if(e._queryParams.loadsAllData())return ei(t);{const s=e._queryIdentifier;return t.views.get(s)}}function zc(t,e){return Vc(t,e)!=null}function ht(t){return ei(t)!=null}function ei(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ls;function Bg(t){C(!Ls,"__referenceConstructor has already been defined"),Ls=t}function Wg(){return C(Ls,"Reference.ts has not been loaded"),Ls}let Ug=1;class Fl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=pg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Kc(t,e,n,s,i){return sg(t.pendingWriteTree_,e,n,s,i),i?Xn(t,new Rt(Dc(),e,n)):[]}function wt(t,e,n=!1){const s=ig(t.pendingWriteTree_,e);if(rg(t.pendingWriteTree_,e)){let r=new Y(null);return s.snap!=null?r=r.set(H(),!0):be(s.children,o=>{r=r.set(new V(o),!0)}),Xn(t,new Ps(s.path,r,n))}else return[]}function ti(t,e,n){return Xn(t,new Rt(jr(),e,n))}function Hg(t,e,n){const s=Y.fromObject(n);return Xn(t,new Vn(jr(),e,s))}function $g(t,e){return Xn(t,new jn(jr(),e))}function jg(t,e,n){const s=Xr(t,n);if(s){const i=Jr(s),r=i.path,o=i.queryId,l=ye(r,e),a=new jn(Vr(o),l);return Zr(t,r,a)}else return[]}function rr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||zc(o,e))){const a=Fg(o,e,n,s);Mg(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>ht(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=Kg(d);for(let I=0;I<g.length;++I){const S=g[I],W=S.query,X=Yc(t,S);t.listenProvider_.startListening(Nn(W),Fs(t,W),X.hashFn,X.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Nn(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(ni(d));t.listenProvider_.stopListening(Nn(d),g)}))}qg(t,c)}return l}function Vg(t,e,n,s){const i=Xr(t,s);if(i!=null){const r=Jr(i),o=r.path,l=r.queryId,a=ye(o,e),c=new Rt(Vr(l),a,n);return Zr(t,o,c)}else return[]}function zg(t,e,n,s){const i=Xr(t,s);if(i){const r=Jr(i),o=r.path,l=r.queryId,a=ye(o,e),c=Y.fromObject(n),u=new Vn(Vr(l),a,c);return Zr(t,o,u)}else return[]}function Bl(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const I=ye(d,i);r=r||Kt(g,I),o=o||ht(g)});let l=t.syncPointTree_.get(i);l?(o=o||ht(l),r=r||Kt(l,H())):(l=new Pg,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,I)=>{const S=Kt(I,H());S&&(r=r.updateImmediateChild(g,S))}));const c=zc(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=ni(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=Gg();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=zr(t.pendingWriteTree_,i);let h=Lg(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Vc(l,e);h=h.concat(Yg(t,e,d))}return h}function Qr(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ye(o,e),c=Kt(l,a);if(c)return c});return Fc(i,e,r,n,!0)}function Xn(t,e){return qc(e,t.syncPointTree_,null,zr(t.pendingWriteTree_,H()))}function qc(t,e,n,s){if(L(t.path))return Gc(t,e,n,s);{const i=e.get(H());n==null&&i!=null&&(n=Kt(i,H()));let r=[];const o=k(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Bc(s,o);r=r.concat(qc(l,a,c,u))}return i&&(r=r.concat(Yr(i,t,s,n))),r}}function Gc(t,e,n,s){const i=e.get(H());n==null&&i!=null&&(n=Kt(i,H()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Bc(s,o),u=t.operationForChild(o);u&&(r=r.concat(Gc(u,l,a,c)))}),i&&(r=r.concat(Yr(i,t,s,n))),r}function Yc(t,e){const n=e.query,s=Fs(t,n);return{hashFn:()=>(xg(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?jg(t,n._path,s):$g(t,n._path);{const r=jp(i,n);return rr(t,n,null,r)}}}}function Fs(t,e){const n=ni(e);return t.queryToTagMap.get(n)}function ni(t){return t._path.toString()+"$"+t._queryIdentifier}function Xr(t,e){return t.tagToQueryMap.get(e)}function Jr(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new V(t.substr(0,e))}}function Zr(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=zr(t.pendingWriteTree_,e);return Yr(s,n,i,null)}function Kg(t){return t.fold((e,n,s)=>{if(n&&ht(n))return[ei(n)];{let i=[];return n&&(i=jc(n)),be(s,(r,o)=>{i=i.concat(o)}),i}})}function Nn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Wg())(t._repo,t._path):t}function qg(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ni(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Gg(){return Ug++}function Yg(t,e,n){const s=e._path,i=Fs(t,e),r=Yc(t,n),o=t.listenProvider_.startListening(Nn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)C(!ht(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!L(c)&&u&&ht(u))return[ei(u).query];{let d=[];return u&&(d=d.concat(jc(u).map(g=>g.query))),be(h,(g,I)=>{d=d.concat(I)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Nn(u),Fs(t,u))}}return o}/**
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
 */class eo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new eo(n)}node(){return this.node_}}class to{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ie(this.path_,e);return new to(this.syncTree_,n)}node(){return Qr(this.syncTree_,this.path_)}}const Qg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Wl=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Xg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Jg(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Xg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},Jg=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Zg=function(t,e,n,s){return no(e,new to(n,t),s)},Qc=function(t,e,n){return no(t,new eo(e),n)};function no(t,e,n){const s=t.getPriority().val(),i=Wl(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Wl(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new oe(l,ue(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new oe(i))),o.forEachChild(J,(l,a)=>{const c=no(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class so{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function io(t,e){let n=e instanceof V?e:new V(e),s=t,i=k(n);for(;i!==null;){const r=Zt(s.node.children,i)||{children:{},childCount:0};s=new so(i,s,r),n=G(n),i=k(n)}return s}function hn(t){return t.node.value}function Xc(t,e){t.node.value=e,or(t)}function Jc(t){return t.node.childCount>0}function em(t){return hn(t)===void 0&&!Jc(t)}function si(t,e){be(t.node.children,(n,s)=>{e(new so(n,t,s))})}function Zc(t,e,n,s){n&&!s&&e(t),si(t,i=>{Zc(i,e,!0,s)}),n&&s&&e(t)}function tm(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Jn(t){return new V(t.parent===null?t.name:Jn(t.parent)+"/"+t.name)}function or(t){t.parent!==null&&nm(t.parent,t.name,t)}function nm(t,e,n){const s=em(n),i=je(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,or(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,or(t))}/**
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
 */const sm=/[\[\].#$\/\u0000-\u001F\u007F]/,im=/[\[\].#$\u0000-\u001F\u007F]/,xi=10*1024*1024,ro=function(t){return typeof t=="string"&&t.length!==0&&!sm.test(t)},eu=function(t){return typeof t=="string"&&t.length!==0&&!im.test(t)},rm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),eu(t)},Ul=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Or(t)||t&&typeof t=="object"&&je(t,".sv")},tu=function(t,e,n,s){s&&e===void 0||oo(Qs(t,"value"),e,n)},oo=function(t,e,n){const s=n instanceof V?new b_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+vt(s));if(typeof e=="function")throw new Error(t+"contains a function "+vt(s)+" with contents = "+e.toString());if(Or(e))throw new Error(t+"contains "+e.toString()+" "+vt(s));if(typeof e=="string"&&e.length>xi/3&&Xs(e)>xi)throw new Error(t+"contains a string greater than "+xi+" utf8 bytes "+vt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ro(o)))throw new Error(t+" contains an invalid key ("+o+") "+vt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);w_(s,o),oo(t,l,s),I_(s)}),i&&r)throw new Error(t+' contains ".value" child '+vt(s)+" in addition to actual children.")}},om=function(t,e,n,s){if(!(s&&n===void 0)&&!ro(n))throw new Error(Qs(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},lo=function(t,e,n,s){if(!(s&&n===void 0)&&!eu(n))throw new Error(Qs(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),lo(t,e,n,s)},am=function(t,e){if(k(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},cm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ro(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!rm(n))throw new Error(Qs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class um{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ao(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Fr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function nu(t,e,n){ao(t,n),su(t,s=>Fr(s,e))}function Xe(t,e,n){ao(t,n),su(t,s=>Pe(s,e)||Pe(e,s))}function su(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(hm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();St&&he("event: "+n.toString()),un(s)}}}/**
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
 */const fm="repo_interrupt",dm=25;class pm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new um,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=As(),this.transactionQueueTree_=new so,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _m(t,e,n){if(t.stats_=kr(t.repoInfo_),t.forceRestClient_||qp())t.server_=new Rs(t.repoInfo_,(s,i,r,o)=>{Hl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>$l(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ae(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new qe(t.repoInfo_,e,(s,i,r,o)=>{Hl(t,s,i,r,o)},s=>{$l(t,s)},s=>{mm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Jp(t.repoInfo_,()=>new X_(t.stats_,t.server_)),t.infoData_=new K_,t.infoSyncTree_=new Fl({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=ti(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),uo(t,"connected",!1),t.serverSyncTree_=new Fl({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Xe(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function gm(t){const n=t.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function co(t){return Qg({timestamp:gm(t)})}function Hl(t,e,n,s,i){t.dataUpdateCount++;const r=new V(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=ws(n,c=>ue(c));o=zg(t.serverSyncTree_,r,a,i)}else{const a=ue(n);o=Vg(t.serverSyncTree_,r,a,i)}else if(s){const a=ws(n,c=>ue(c));o=Hg(t.serverSyncTree_,r,a)}else{const a=ue(n);o=ti(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ii(t,r)),Xe(t.eventQueue_,l,o)}function $l(t,e){uo(t,"connected",e),e===!1&&vm(t)}function mm(t,e){be(e,(n,s)=>{uo(t,n,s)})}function uo(t,e,n){const s=new V("/.info/"+e),i=ue(n);t.infoData_.updateSnapshot(s,i);const r=ti(t.infoSyncTree_,s,i);Xe(t.eventQueue_,s,r)}function iu(t){return t.nextWriteId_++}function ym(t,e,n,s,i){ho(t,"set",{path:e.toString(),value:n,priority:s});const r=co(t),o=ue(n,s),l=Qr(t.serverSyncTree_,e),a=Qc(o,l,r),c=iu(t),u=Kc(t.serverSyncTree_,e,a,c,!0);ao(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const I=d==="ok";I||Ce("set at "+e+" failed: "+d);const S=wt(t.serverSyncTree_,c,!I);Xe(t.eventQueue_,e,S),bm(t,i,d,g)});const h=cu(t,e);ii(t,h),Xe(t.eventQueue_,h,[])}function vm(t){ho(t,"onDisconnectEvents");const e=co(t),n=As();Zi(t.onDisconnect_,H(),(i,r)=>{const o=Zg(i,r,t.serverSyncTree_,e);Oc(n,i,o)});let s=[];Zi(n,H(),(i,r)=>{s=s.concat(ti(t.serverSyncTree_,i,r));const o=cu(t,i);ii(t,o)}),t.onDisconnect_=As(),Xe(t.eventQueue_,H(),s)}function Cm(t,e,n){let s;k(e._path)===".info"?s=Bl(t.infoSyncTree_,e,n):s=Bl(t.serverSyncTree_,e,n),nu(t.eventQueue_,e._path,s)}function jl(t,e,n){let s;k(e._path)===".info"?s=rr(t.infoSyncTree_,e,n):s=rr(t.serverSyncTree_,e,n),nu(t.eventQueue_,e._path,s)}function Em(t){t.persistentConnection_&&t.persistentConnection_.interrupt(fm)}function ho(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),he(n,...e)}function bm(t,e,n,s){e&&un(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ru(t,e,n){return Qr(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function fo(t,e=t.transactionQueueTree_){if(e||ri(t,e),hn(e)){const n=lu(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&wm(t,Jn(e),n)}else Jc(e)&&si(e,n=>{fo(t,n)})}function wm(t,e,n){const s=n.map(c=>c.currentWriteId),i=ru(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ye(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{ho(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(wt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ri(t,io(t.transactionQueueTree_,e)),fo(t,t.transactionQueueTree_),Xe(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)un(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ce("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ii(t,e)}},o)}function ii(t,e){const n=ou(t,e),s=Jn(n),i=lu(t,n);return Im(t,i,s),s}function Im(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ye(n,a.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(wt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=dm)u=!0,h="maxretry",i=i.concat(wt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=ru(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){oo("transaction failed: Data returned ",g,a.path);let I=ue(g);typeof g=="object"&&g!=null&&je(g,".priority")||(I=I.updatePriority(d.getPriority()));const W=a.currentWriteId,X=co(t),te=Qc(I,d,X);a.currentOutputSnapshotRaw=I,a.currentOutputSnapshotResolved=te,a.currentWriteId=iu(t),o.splice(o.indexOf(W),1),i=i.concat(Kc(t.serverSyncTree_,a.path,te,a.currentWriteId,a.applyLocally)),i=i.concat(wt(t.serverSyncTree_,W,!0))}else u=!0,h="nodata",i=i.concat(wt(t.serverSyncTree_,a.currentWriteId,!0))}Xe(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}ri(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)un(s[l]);fo(t,t.transactionQueueTree_)}function ou(t,e){let n,s=t.transactionQueueTree_;for(n=k(e);n!==null&&hn(s)===void 0;)s=io(s,n),e=G(e),n=k(e);return s}function lu(t,e){const n=[];return au(t,e,n),n.sort((s,i)=>s.order-i.order),n}function au(t,e,n){const s=hn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);si(e,i=>{au(t,i,n)})}function ri(t,e){const n=hn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Xc(e,n.length>0?n:void 0)}si(e,s=>{ri(t,s)})}function cu(t,e){const n=Jn(ou(t,e)),s=io(t.transactionQueueTree_,e);return tm(s,i=>{Ni(t,i)}),Ni(t,s),Zc(s,i=>{Ni(t,i)}),n}function Ni(t,e){const n=hn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(wt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Xc(e,void 0):n.length=r+1,Xe(t.eventQueue_,Jn(e),i);for(let o=0;o<s.length;o++)un(s[o])}}/**
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
 */function Tm(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Sm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ce(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vl=function(t,e){const n=xm(t),s=n.namespace;n.domain==="firebase.com"&&Ye(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ye("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Bp();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new fc(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new V(n.pathString)}},xm=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Tm(t.substring(u,h)));const d=Sm(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class uu{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ae(this.snapshot.exportVal())}}class hu{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Nm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class fn{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return L(this._path)?null:Ec(this._path)}get ref(){return new Ze(this._repo,this._path)}get _queryIdentifier(){const e=Sl(this._queryParams),n=Dr(e);return n==="{}"?"default":n}get _queryObject(){return Sl(this._queryParams)}isEqual(e){if(e=an(e),!(e instanceof fn))return!1;const n=this._repo===e._repo,s=Fr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+E_(this._path)}}function Rm(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function fu(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===lt){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Nt)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Qe)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===J){if(e!=null&&!Ul(e)||n!=null&&!Ul(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(C(t.getIndex()instanceof Ur||t.getIndex()===Ac,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Am(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Ze extends fn{constructor(e,n){super(e,n,new $r,!1)}get parent(){const e=wc(this._path);return e===null?null:new Ze(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new V(e),s=Bs(this.ref,e);return new zn(this._node.getChild(n),s,J)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new zn(i,Bs(this.ref,s),J)))}hasChild(e){const n=new V(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function du(t,e){return t=an(t),t._checkNotDeleted("ref"),e!==void 0?Bs(t._root,e):t._root}function Bs(t,e){return t=an(t),k(t._path)===null?lm("child","path",e,!1):lo("child","path",e,!1),new Ze(t._repo,ie(t._path,e))}function Pm(t,e){t=an(t),am("set",t._path),tu("set",e,t._path,!1);const n=new Ys;return ym(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class po{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new uu("value",this,new zn(e.snapshotNode,new Ze(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hu(this,e,n):null}matches(e){return e instanceof po?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class _o{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hu(this,e,n):null}createEvent(e,n){C(e.childName!=null,"Child events should have a childName.");const s=Bs(new Ze(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new uu(e.type,this,new zn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof _o?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Om(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{jl(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Nm(n,r||void 0),l=e==="value"?new po(o):new _o(e,o);return Cm(t._repo,t,l),()=>jl(t._repo,t,l)}function Dm(t,e,n,s){return Om(t,"value",e,n,s)}class go{}class Mm extends go{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){tu("startAfter",this._value,e._path,!1);const n=V_(e._queryParams,this._value,this._key);if(Am(n),fu(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new fn(e._repo,e._path,n,e._orderByCalled)}}function km(t,e){return om("startAfter","key",e,!0),new Mm(t,e)}class Lm extends go{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new fn(e._repo,e._path,j_(e._queryParams,this._limit),e._orderByCalled)}}function Fm(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Lm(t)}class Bm extends go{constructor(e){super(),this._path=e}_apply(e){Rm(e,"orderByChild");const n=new V(this._path);if(L(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Ur(n),i=z_(e._queryParams,s);return fu(i),new fn(e._repo,e._path,i,!0)}}function Wm(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return lo("orderByChild","path",t,!1),new Bm(t)}function Um(t,...e){let n=an(t);for(const s of e)n=s._apply(n);return n}Og(Ze);Bg(Ze);/**
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
 */const Hm="FIREBASE_DATABASE_EMULATOR_HOST",lr={};let $m=!1;function jm(t,e,n,s){t.repoInfo_=new fc(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Vm(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ye("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),he("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vl(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[Hm]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Vl(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new zt(zt.OWNER):new Yp(t.name,t.options,e);cm("Invalid Firebase Database URL",o),L(o.path)||Ye("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Km(l,t,u,new Gp(t.name,n));return new qm(h,t)}function zm(t,e){const n=lr[e];(!n||n[t.key]!==t)&&Ye(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Em(t),delete n[t.key]}function Km(t,e,n,s){let i=lr[e.name];i||(i={},lr[e.name]=i);let r=i[t.toURLString()];return r&&Ye("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new pm(t,$m,n,s),i[t.toURLString()]=r,r}class qm{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_m(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ze(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(zm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ye("Cannot call "+e+" on a deleted database.")}}function Gm(t=Ep(),e){const n=mp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=cd("database");s&&Ym(n,...s)}return n}function Ym(t,e,n,s={}){t=an(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ye("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ye('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new zt(zt.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:ud(s.mockUserToken,t.app.options.projectId);r=new zt(o)}jm(i,e,n,r)}/**
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
 */function Qm(t){Dp(Cp),Ts(new Fn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Vm(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),jt(al,cl,t),jt(al,cl,"esm2017")}qe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Qm();function Xm(){return[1,2,3].map(()=>Math.floor(Math.random()*(2<<16)).toString(16).padStart(4,"0")).join("")}function Jm(t){const e=new URL(window.location.href);e.searchParams.set("zoom",t.zoom),e.searchParams.set("center",t.center),e.searchParams.set("sharingKey",t.sharingKey),window.history.replaceState(null,"",e.toString())}function Kn(){const t=new URL(window.location.href),e=t.searchParams.get("center")||"1.38,103.8",n=t.searchParams.get("zoom")||"13",s=t.searchParams.get("sharingKey")||Xm(),[i,r]=e.split(",");return{center:e,zoom:n,sharingKey:s,parsedZoom:parseFloat(n),parsedCenter:{lat:parseFloat(i),lng:parseFloat(r)}}}const Zm=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function ey(){const t=window.localStorage.getItem("userId");if(t!=null&&t.match(Zm))return t;{const e=window.crypto.randomUUID();return window.localStorage.setItem("userId",e),e}}const ty={apiKey:"AIzaSyCVPkgR8wpTD-PtV14m6AbUHR8iWv0WqSc",authDomain:"simple-location-sharing.firebaseapp.com",projectId:"simple-location-sharing",storageBucket:"simple-location-sharing.appspot.com",messagingSenderId:"747204085237",appId:"1:747204085237:web:0f4adacb13c07818174cbc",databaseURL:"https://simple-location-sharing-default-rtdb.asia-southeast1.firebasedatabase.app"};Ya(ty);const pu=Gm();function ny(t,e){const n=Kn().sharingKey,s=ey();Pm(du(pu,`sessions/${n}/${s}`),{coordinates:t,timestamp:e})}function sy(t,e,n){Dm(Um(du(pu,`sessions/${t}`),Wm("timestamp"),km(Date.now()-e),Fm(10)),s=>{n(s.val())})}const iy=40,ry=40,oy=zs({__name:"DynamicMarkers",props:{width:{},height:{}},setup(t){const e=t,n=Mi([]);sy(Kn().sharingKey,120*6e4,r=>{r?n.value=Object.entries(r).map(([o,l])=>({...l,key:o})):n.value=[]});function s(r){return r.key.substring(r.key.length-4)}function i(r){const o={width:e.width,height:e.height},{parsedZoom:l,parsedCenter:a}=Kn(),c=Math.pow(2,l),u=Jo(a),h=Jo(r.coordinates),d={x:(h.x-u.x)*c,y:(h.y-u.y)*c},g=parseInt(r.key.substring(r.key.length-4),16)/65536*360;return{left:Math.round(o.width/2+d.x-iy/2)+"px",top:Math.round(o.height/2+d.y-ry/2)+"px","background-color":`hsl(${g} 60% 80%)`}}return(r,o)=>(Yt(!0),Qt(xe,null,Uh(Se(n),l=>(Yt(),Qt("div",{key:l.key,class:"circle",style:sn(i(l))},Au(s(l)),5))),128))}});const ly=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ay=ly(oy,[["__scopeId","data-v-e87d141f"]]),cy=zs({__name:"OfferLocation",setup(t){const e=Mi(!1),n=Mi(0);function s(){n.value=navigator.geolocation.watchPosition(r=>{ny({lat:r.coords.latitude,lng:r.coords.longitude},r.timestamp)}),e.value=!0}function i(){navigator.geolocation.clearWatch(n.value),e.value=!1}return(r,o)=>e.value?(Yt(),Qt("button",{key:0,id:"send-location",style:{right:"10px",top:"10px",position:"fixed"},onClick:i},"Stop sending location")):(Yt(),Qt("button",{key:1,id:"send-location",style:{right:"10px",top:"10px",position:"fixed"},onClick:s},"Send location"))}}),uy=1e3,hy=1e3,fy=zs({__name:"App",setup(t){const e=uy,n=hy,{zoom:s,center:i}=Kn();return(r,o)=>(Yt(),Qt(xe,null,[Sr("div",{style:sn({position:"relative",width:Se(e)+"px",height:Se(n)+"px",overflow:"hidden"})},[$e(Zf,{center:Se(i),zoom:Se(s),mapWidth:Se(e),mapHeight:Se(n)},null,8,["center","zoom","mapWidth","mapHeight"]),$e(ay,{width:Se(e),height:Se(n)},null,8,["width","height"])],4),$e(cy)],64))}});Vf(fy).mount("#app");window.addEventListener("DOMContentLoaded",()=>{Jm(Kn())});window.addEventListener("load",()=>{setTimeout(()=>{window.scrollTo((document.body.scrollWidth-document.documentElement.clientWidth)/2,(document.body.scrollHeight-document.documentElement.clientHeight)/2)},50)});
