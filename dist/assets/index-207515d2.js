(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},ds=[],Zt=()=>{},Dp=()=>!1,Pa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zc=t=>t.startsWith("onUpdate:"),Xe=Object.assign,eu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xy=Object.prototype.hasOwnProperty,Ce=(t,e)=>Xy.call(t,e),ae=Array.isArray,fs=t=>Gi(t)==="[object Map]",Ca=t=>Gi(t)==="[object Set]",cd=t=>Gi(t)==="[object Date]",pe=t=>typeof t=="function",Qe=t=>typeof t=="string",mn=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Np=t=>(De(t)||pe(t))&&pe(t.then)&&pe(t.catch),Vp=Object.prototype.toString,Gi=t=>Vp.call(t),Zy=t=>Gi(t).slice(8,-1),Op=t=>Gi(t)==="[object Object]",ka=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,di=Xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ev=/-\w/g,zt=xa(t=>t.replace(ev,e=>e.slice(1).toUpperCase())),tv=/\B([A-Z])/g,vr=xa(t=>t.replace(tv,"-$1").toLowerCase()),Da=xa(t=>t.charAt(0).toUpperCase()+t.slice(1)),xl=xa(t=>t?`on${Da(t)}`:""),cr=(t,e)=>!Object.is(t,e),Uo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Mp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Na=t=>{const e=parseFloat(t);return isNaN(e)?t:e},nv=t=>{const e=Qe(t)?Number(t):NaN;return isNaN(e)?t:e};let ud;const Va=()=>ud||(ud=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ts(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Qe(r)?ov(r):Ts(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Qe(t)||De(t))return t}const rv=/;(?![^(]*\))/g,sv=/:([^]+)/,iv=/\/\*[^]*?\*\//g;function ov(t){const e={};return t.replace(iv,"").split(rv).forEach(n=>{if(n){const r=n.split(sv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ar(t){let e="";if(Qe(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=ar(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const av="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lv=Xc(av);function Lp(t){return!!t||t===""}function cv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Oa(t[r],e[r]);return n}function Oa(t,e){if(t===e)return!0;let n=cd(t),r=cd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=mn(t),r=mn(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?cv(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Oa(t[o],e[o]))return!1}}return String(t)===String(e)}function uv(t,e){return t.findIndex(n=>Oa(n,e))}const Fp=t=>!!(t&&t.__v_isRef===!0),Ve=t=>Qe(t)?t:t==null?"":ae(t)||De(t)&&(t.toString===Vp||!pe(t.toString))?Fp(t)?Ve(t.value):JSON.stringify(t,Up,2):String(t),Up=(t,e)=>Fp(e)?Up(t,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Dl(r,i)+" =>"]=s,n),{})}:Ca(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Dl(n))}:mn(e)?Dl(e):De(e)&&!ae(e)&&!Op(e)?String(e):e,Dl=(t,e="")=>{var n;return mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Et;class jp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){++this._on===1&&(this.prevScope=Et,Et=this)}off(){this._on>0&&--this._on===0&&(Et=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Bp(t){return new jp(t)}function $p(){return Et}function hv(t,e=!1){Et&&Et.cleanups.push(t)}let Me;const Nl=new WeakSet;class qp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Et&&Et.active&&Et.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nl.has(this)&&(Nl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hd(this),Kp(this);const e=Me,n=en;Me=this,en=!0;try{return this.fn()}finally{Gp(this),Me=e,en=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ru(e);this.deps=this.depsTail=void 0,hd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ac(this)&&this.run()}get dirty(){return ac(this)}}let Hp=0,fi,pi;function Wp(t,e=!1){if(t.flags|=8,e){t.next=pi,pi=t;return}t.next=fi,fi=t}function tu(){Hp++}function nu(){if(--Hp>0)return;if(pi){let e=pi;for(pi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;fi;){let e=fi;for(fi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Kp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ru(r),dv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ac(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Si)||(t.globalVersion=Si,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ac(t))))return;t.flags|=2;const e=t.dep,n=Me,r=en;Me=t,en=!0;try{Kp(t);const s=t.fn(t._value);(e.version===0||cr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,en=r,Gp(t),t.flags&=-3}}function ru(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ru(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function dv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let en=!0;const Qp=[];function Vn(){Qp.push(en),en=!1}function On(){const t=Qp.pop();en=t===void 0?!0:t}function hd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Si=0;class fv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class su{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Me||!en||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new fv(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,Yp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Si++,this.notify(e)}notify(e){tu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{nu()}}}function Yp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Yp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ea=new WeakMap,jr=Symbol(""),lc=Symbol(""),Pi=Symbol("");function Tt(t,e,n){if(en&&Me){let r=ea.get(t);r||ea.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new su),s.map=r,s.key=n),s.track()}}function bn(t,e,n,r,s,i){const o=ea.get(t);if(!o){Si++;return}const l=c=>{c&&c.trigger()};if(tu(),e==="clear")o.forEach(l);else{const c=ae(t),u=c&&ka(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===Pi||!mn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Pi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(jr)),fs(t)&&l(o.get(lc)));break;case"delete":c||(l(o.get(jr)),fs(t)&&l(o.get(lc)));break;case"set":fs(t)&&l(o.get(jr));break}}nu()}function pv(t,e){const n=ea.get(t);return n&&n.get(e)}function ss(t){const e=Ie(t);return e===t?e:(Tt(e,"iterate",Pi),$t(t)?e:e.map(rn))}function Ma(t){return Tt(t=Ie(t),"iterate",Pi),t}function er(t,e){return Mn(t)?xn(t)?Is(rn(e)):Is(e):rn(e)}const gv={__proto__:null,[Symbol.iterator](){return Vl(this,Symbol.iterator,t=>er(this,t))},concat(...t){return ss(this).concat(...t.map(e=>ae(e)?ss(e):e))},entries(){return Vl(this,"entries",t=>(t[1]=er(this,t[1]),t))},every(t,e){return En(this,"every",t,e,void 0,arguments)},filter(t,e){return En(this,"filter",t,e,n=>n.map(r=>er(this,r)),arguments)},find(t,e){return En(this,"find",t,e,n=>er(this,n),arguments)},findIndex(t,e){return En(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return En(this,"findLast",t,e,n=>er(this,n),arguments)},findLastIndex(t,e){return En(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return En(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ol(this,"includes",t)},indexOf(...t){return Ol(this,"indexOf",t)},join(t){return ss(this).join(t)},lastIndexOf(...t){return Ol(this,"lastIndexOf",t)},map(t,e){return En(this,"map",t,e,void 0,arguments)},pop(){return ei(this,"pop")},push(...t){return ei(this,"push",t)},reduce(t,...e){return dd(this,"reduce",t,e)},reduceRight(t,...e){return dd(this,"reduceRight",t,e)},shift(){return ei(this,"shift")},some(t,e){return En(this,"some",t,e,void 0,arguments)},splice(...t){return ei(this,"splice",t)},toReversed(){return ss(this).toReversed()},toSorted(t){return ss(this).toSorted(t)},toSpliced(...t){return ss(this).toSpliced(...t)},unshift(...t){return ei(this,"unshift",t)},values(){return Vl(this,"values",t=>er(this,t))}};function Vl(t,e,n){const r=Ma(t),s=r[e]();return r!==t&&!$t(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const mv=Array.prototype;function En(t,e,n,r,s,i){const o=Ma(t),l=o!==t&&!$t(t),c=o[e];if(c!==mv[e]){const p=c.apply(t,i);return l?rn(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,er(t,p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function dd(t,e,n,r){const s=Ma(t);let i=n;return s!==t&&($t(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,er(t,l),c,t)}),s[e](i,...r)}function Ol(t,e,n){const r=Ie(t);Tt(r,"iterate",Pi);const s=r[e](...n);return(s===-1||s===!1)&&La(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function ei(t,e,n=[]){Vn(),tu();const r=Ie(t)[e].apply(t,n);return nu(),On(),r}const _v=Xc("__proto__,__v_isRef,__isVue"),Jp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mn));function yv(t){mn(t)||(t=String(t));const e=Ie(this);return Tt(e,"has",t),e.hasOwnProperty(t)}class Xp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Pv:ng:i?tg:eg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){let c;if(o&&(c=gv[n]))return c;if(n==="hasOwnProperty")return yv}const l=Reflect.get(e,n,ze(e)?e:r);if((mn(n)?Jp.has(n):_v(n))||(s||Tt(e,"get",n),i))return l;if(ze(l)){const c=o&&ka(n)?l:l.value;return s&&De(c)?uc(c):c}return De(l)?s?uc(l):zi(l):l}}class Zp extends Xp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ae(e)&&ka(n);if(!this._isShallow){const u=Mn(i);if(!$t(r)&&!Mn(r)&&(i=Ie(i),r=Ie(r)),!o&&ze(i)&&!ze(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:Ce(e,n),c=Reflect.set(e,n,r,ze(e)?e:s);return e===Ie(s)&&(l?cr(r,i)&&bn(e,"set",n,r):bn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&bn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!mn(n)||!Jp.has(n))&&Tt(e,"has",n),r}ownKeys(e){return Tt(e,"iterate",ae(e)?"length":jr),Reflect.ownKeys(e)}}class vv extends Xp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ev=new Zp,wv=new vv,Tv=new Zp(!0);const cc=t=>t,Po=t=>Reflect.getPrototypeOf(t);function Iv(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=fs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?cc:e?Is:rn;return!e&&Tt(i,"iterate",c?lc:jr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Co(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function bv(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),l=Ie(s);t||(cr(s,l)&&Tt(o,"get",s),Tt(o,"get",l));const{has:c}=Po(o),u=e?cc:t?Is:rn;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Tt(Ie(s),"iterate",jr),s.size},has(s){const i=this.__v_raw,o=Ie(i),l=Ie(s);return t||(cr(s,l)&&Tt(o,"has",s),Tt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ie(l),u=e?cc:t?Is:rn;return!t&&Tt(c,"iterate",jr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return Xe(n,t?{add:Co("add"),set:Co("set"),delete:Co("delete"),clear:Co("clear")}:{add(s){!e&&!$t(s)&&!Mn(s)&&(s=Ie(s));const i=Ie(this);return Po(i).has.call(i,s)||(i.add(s),bn(i,"add",s,s)),this},set(s,i){!e&&!$t(i)&&!Mn(i)&&(i=Ie(i));const o=Ie(this),{has:l,get:c}=Po(o);let u=l.call(o,s);u||(s=Ie(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?cr(i,d)&&bn(o,"set",s,i):bn(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:l}=Po(i);let c=o.call(i,s);c||(s=Ie(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&bn(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&bn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Iv(s,t,e)}),n}function iu(t,e){const n=bv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const Av={get:iu(!1,!1)},Rv={get:iu(!1,!0)},Sv={get:iu(!0,!1)};const eg=new WeakMap,tg=new WeakMap,ng=new WeakMap,Pv=new WeakMap;function Cv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kv(t){return t.__v_skip||!Object.isExtensible(t)?0:Cv(Zy(t))}function zi(t){return Mn(t)?t:ou(t,!1,Ev,Av,eg)}function rg(t){return ou(t,!1,Tv,Rv,tg)}function uc(t){return ou(t,!0,wv,Sv,ng)}function ou(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=kv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function xn(t){return Mn(t)?xn(t.__v_raw):!!(t&&t.__v_isReactive)}function Mn(t){return!!(t&&t.__v_isReadonly)}function $t(t){return!!(t&&t.__v_isShallow)}function La(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function au(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&Mp(t,"__v_skip",!0),t}const rn=t=>De(t)?zi(t):t,Is=t=>De(t)?uc(t):t;function ze(t){return t?t.__v_isRef===!0:!1}function Ue(t){return sg(t,!1)}function xv(t){return sg(t,!0)}function sg(t,e){return ze(t)?t:new Dv(t,e)}class Dv{constructor(e,n){this.dep=new su,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:rn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||$t(e)||Mn(e);e=r?e:Ie(e),cr(e,n)&&(this._rawValue=e,this._value=r?e:rn(e),this.dep.trigger())}}function it(t){return ze(t)?t.value:t}const Nv={get:(t,e,n)=>e==="__v_raw"?t:it(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ze(s)&&!ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ig(t){return xn(t)?t:new Proxy(t,Nv)}function Vv(t){const e=ae(t)?new Array(t.length):{};for(const n in t)e[n]=Mv(t,n);return e}class Ov{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=Ie(e);let s=!0,i=e;if(!ae(e)||!ka(String(n)))do s=!La(i)||$t(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=it(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&ze(this._raw[this._key])){const n=this._object[this._key];if(ze(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return pv(this._raw,this._key)}}function Mv(t,e,n){return new Ov(t,e,n)}class Lv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new su(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Wp(this,!0),!0}get value(){const e=this.dep.track();return zp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fv(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new Lv(r,s,n)}const ko={},ta=new WeakMap;let Dr;function Uv(t,e=!1,n=Dr){if(n){let r=ta.get(n);r||ta.set(n,r=[]),r.push(t)}}function jv(t,e,n=Oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=U=>s?U:$t(U)||s===!1||s===0?An(U,1):An(U);let d,p,g,E,S=!1,P=!1;if(ze(t)?(p=()=>t.value,S=$t(t)):xn(t)?(p=()=>u(t),S=!0):ae(t)?(P=!0,S=t.some(U=>xn(U)||$t(U)),p=()=>t.map(U=>{if(ze(U))return U.value;if(xn(U))return u(U);if(pe(U))return c?c(U,2):U()})):pe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Vn();try{g()}finally{On()}}const U=Dr;Dr=d;try{return c?c(t,3,[E]):t(E)}finally{Dr=U}}:p=Zt,e&&s){const U=p,J=s===!0?1/0:s;p=()=>An(U(),J)}const N=$p(),x=()=>{d.stop(),N&&N.active&&eu(N.effects,d)};if(i&&e){const U=e;e=(...J)=>{U(...J),x()}}let O=P?new Array(t.length).fill(ko):ko;const M=U=>{if(!(!(d.flags&1)||!d.dirty&&!U))if(e){const J=d.run();if(s||S||(P?J.some((ne,R)=>cr(ne,O[R])):cr(J,O))){g&&g();const ne=Dr;Dr=d;try{const R=[J,O===ko?void 0:P&&O[0]===ko?[]:O,E];O=J,c?c(e,3,R):e(...R)}finally{Dr=ne}}}else d.run()};return l&&l(M),d=new qp(p),d.scheduler=o?()=>o(M,!1):M,E=U=>Uv(U,!1,d),g=d.onStop=()=>{const U=ta.get(d);if(U){if(c)c(U,4);else for(const J of U)J();ta.delete(d)}},e?r?M(!0):O=d.run():o?o(M.bind(null,!0),!0):d.run(),x.pause=d.pause.bind(d),x.resume=d.resume.bind(d),x.stop=x,x}function An(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ze(t))An(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)An(t[r],e,n);else if(Ca(t)||fs(t))t.forEach(r=>{An(r,e,n)});else if(Op(t)){for(const r in t)An(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&An(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qi(t,e,n,r){try{return r?t(...r):t()}catch(s){Fa(s,e,n)}}function sn(t,e,n,r){if(pe(t)){const s=Qi(t,e,n,r);return s&&Np(s)&&s.catch(i=>{Fa(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(sn(t[i],e,n,r));return s}}function Fa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Oe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Vn(),Qi(i,null,10,[t,c,u]),On();return}}Bv(t,n,s,r,o)}function Bv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Dt=[];let un=-1;const ps=[];let tr=null,os=0;const og=Promise.resolve();let na=null;function qr(t){const e=na||og;return t?e.then(this?t.bind(this):t):e}function $v(t){let e=un+1,n=Dt.length;for(;e<n;){const r=e+n>>>1,s=Dt[r],i=Ci(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function lu(t){if(!(t.flags&1)){const e=Ci(t),n=Dt[Dt.length-1];!n||!(t.flags&2)&&e>=Ci(n)?Dt.push(t):Dt.splice($v(e),0,t),t.flags|=1,ag()}}function ag(){na||(na=og.then(cg))}function qv(t){ae(t)?ps.push(...t):tr&&t.id===-1?tr.splice(os+1,0,t):t.flags&1||(ps.push(t),t.flags|=1),ag()}function fd(t,e,n=un+1){for(;n<Dt.length;n++){const r=Dt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Dt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function lg(t){if(ps.length){const e=[...new Set(ps)].sort((n,r)=>Ci(n)-Ci(r));if(ps.length=0,tr){tr.push(...e);return}for(tr=e,os=0;os<tr.length;os++){const n=tr[os];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}tr=null,os=0}}const Ci=t=>t.id==null?t.flags&2?-1:1/0:t.id;function cg(t){const e=Zt;try{for(un=0;un<Dt.length;un++){const n=Dt[un];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Qi(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;un<Dt.length;un++){const n=Dt[un];n&&(n.flags&=-2)}un=-1,Dt.length=0,lg(),na=null,(Dt.length||ps.length)&&cg()}}let Ut=null,ug=null;function ra(t){const e=Ut;return Ut=t,ug=t&&t.type.__scopeId||null,e}function gs(t,e=Ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&oa(-1);const i=ra(e);let o;try{o=t(...s)}finally{ra(i),r._d&&oa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Sn(t,e){if(Ut===null)return t;const n=Ha(Ut),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Oe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&An(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Cr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Vn(),sn(c,n,8,[t.el,l,t,e]),On())}}function jo(t,e){if(At){let n=At.provides;const r=At.parent&&At.parent.provides;r===n&&(n=At.provides=Object.create(r)),n[t]=e}}function Kt(t,e,n=!1){const r=pu();if(r||Br){let s=Br?Br._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function Hv(){return!!(pu()||Br)}const Wv=Symbol.for("v-scx"),Kv=()=>Kt(Wv);function ms(t,e,n){return hg(t,e,n)}function hg(t,e,n=Oe){const{immediate:r,deep:s,flush:i,once:o}=n,l=Xe({},n),c=e&&r||!e&&i!=="post";let u;if(Ni){if(i==="sync"){const E=Kv();u=E.__watcherHandles||(E.__watcherHandles=[])}else if(!c){const E=()=>{};return E.stop=Zt,E.resume=Zt,E.pause=Zt,E}}const d=At;l.call=(E,S,P)=>sn(E,d,S,P);let p=!1;i==="post"?l.scheduler=E=>{kt(E,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(E,S)=>{S?E():lu(E)}),l.augmentJob=E=>{e&&(E.flags|=4),p&&(E.flags|=2,d&&(E.id=d.uid,E.i=d))};const g=jv(t,e,l);return Ni&&(u?u.push(g):c&&g()),g}function Gv(t,e,n){const r=this.proxy,s=Qe(t)?t.includes(".")?dg(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Yi(this),l=hg(s,i.bind(r),n);return o(),l}function dg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const fg=Symbol("_vte"),zv=t=>t.__isTeleport,gi=t=>t&&(t.disabled||t.disabled===""),pd=t=>t&&(t.defer||t.defer===""),gd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,md=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,hc=(t,e)=>{const n=t&&t.to;return Qe(n)?e?e(n):null:n},pg={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,u){const{mc:d,pc:p,pbc:g,o:{insert:E,querySelector:S,createText:P,createComment:N}}=u,x=gi(e.props);let{shapeFlag:O,children:M,dynamicChildren:U}=e;if(t==null){const J=e.el=P(""),ne=e.anchor=P("");E(J,n,r),E(ne,n,r);const R=(_,I)=>{O&16&&d(M,_,I,s,i,o,l,c)},y=()=>{const _=e.target=hc(e.props,S),I=mg(_,e,P,E);_&&(o!=="svg"&&gd(_)?o="svg":o!=="mathml"&&md(_)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(_),x||(R(_,I),Bo(e,!1)))};x&&(R(n,ne),Bo(e,!0)),pd(e.props)?(e.el.__isMounted=!1,kt(()=>{y(),delete e.el.__isMounted},i)):y()}else{if(pd(e.props)&&t.el.__isMounted===!1){kt(()=>{pg.process(t,e,n,r,s,i,o,l,c,u)},i);return}e.el=t.el,e.targetStart=t.targetStart;const J=e.anchor=t.anchor,ne=e.target=t.target,R=e.targetAnchor=t.targetAnchor,y=gi(t.props),_=y?n:ne,I=y?J:R;if(o==="svg"||gd(ne)?o="svg":(o==="mathml"||md(ne))&&(o="mathml"),U?(g(t.dynamicChildren,U,_,s,i,o,l),du(t,e,!0)):c||p(t,e,_,I,s,i,o,l,!1),x)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):xo(e,n,J,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const b=e.target=hc(e.props,S);b&&xo(e,b,null,u,0)}else y&&xo(e,ne,R,u,1);Bo(e,x)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:d,target:p,props:g}=t;if(p&&(s(u),s(d)),i&&s(c),o&16){const E=i||!gi(g);for(let S=0;S<l.length;S++){const P=l[S];r(P,e,n,E,!!P.dynamicChildren)}}},move:xo,hydrate:Qv};function xo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:u,props:d}=t,p=i===2;if(p&&r(o,e,n),(!p||gi(d))&&c&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);p&&r(l,e,n)}function Qv(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:d}},p){function g(P,N,x,O){N.anchor=p(o(P),N,l(P),n,r,s,i),N.targetStart=x,N.targetAnchor=O}const E=e.target=hc(e.props,c),S=gi(e.props);if(E){const P=E._lpa||E.firstChild;if(e.shapeFlag&16)if(S)g(t,e,P,P&&o(P));else{e.anchor=o(t);let N=P;for(;N;){if(N&&N.nodeType===8){if(N.data==="teleport start anchor")e.targetStart=N;else if(N.data==="teleport anchor"){e.targetAnchor=N,E._lpa=e.targetAnchor&&o(e.targetAnchor);break}}N=o(N)}e.targetAnchor||mg(E,e,d,u),p(P&&o(P),e,E,n,r,s,i)}Bo(e,S)}else S&&e.shapeFlag&16&&g(t,e,t,o(t));return e.anchor&&o(e.anchor)}const gg=pg;function Bo(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function mg(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[fg]=i,t&&(r(s,t),r(i,t)),i}const Nr=Symbol("_leaveCb"),Do=Symbol("_enterCb");function Yv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ja(()=>{t.isMounted=!0}),Ig(()=>{t.isUnmounting=!0}),t}const Wt=[Function,Array],Jv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Wt,onEnter:Wt,onAfterEnter:Wt,onEnterCancelled:Wt,onBeforeLeave:Wt,onLeave:Wt,onAfterLeave:Wt,onLeaveCancelled:Wt,onBeforeAppear:Wt,onAppear:Wt,onAfterAppear:Wt,onAppearCancelled:Wt};function Xv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function dc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:E,onAfterLeave:S,onLeaveCancelled:P,onBeforeAppear:N,onAppear:x,onAfterAppear:O,onAppearCancelled:M}=e,U=String(t.key),J=Xv(n,t),ne=(_,I)=>{_&&sn(_,r,9,I)},R=(_,I)=>{const b=I[1];ne(_,I),ae(_)?_.every(v=>v.length<=1)&&b():_.length<=1&&b()},y={mode:o,persisted:l,beforeEnter(_){let I=c;if(!n.isMounted)if(i)I=N||c;else return;_[Nr]&&_[Nr](!0);const b=J[U];b&&as(t,b)&&b.el[Nr]&&b.el[Nr](),ne(I,[_])},enter(_){let I=u,b=d,v=p;if(!n.isMounted)if(i)I=x||u,b=O||d,v=M||p;else return;let T=!1;const Ee=_[Do]=Be=>{T||(T=!0,Be?ne(v,[_]):ne(b,[_]),y.delayedLeave&&y.delayedLeave(),_[Do]=void 0)};I?R(I,[_,Ee]):Ee()},leave(_,I){const b=String(t.key);if(_[Do]&&_[Do](!0),n.isUnmounting)return I();ne(g,[_]);let v=!1;const T=_[Nr]=Ee=>{v||(v=!0,I(),Ee?ne(P,[_]):ne(S,[_]),_[Nr]=void 0,J[b]===t&&delete J[b])};J[b]=t,E?R(E,[_,T]):T()},clone(_){const I=dc(_,e,n,r,s);return s&&s(I),I}};return y}function ki(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ki(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function _g(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===It?(o.patchFlag&128&&s++,r=r.concat(_g(o.children,e,l))):(e||o.type!==Ln)&&r.push(l!=null?Hr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function yg(t,e){return pe(t)?(()=>Xe({name:t.name},e,{setup:t}))():t}function vg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const sa=new WeakMap;function mi(t,e,n,r,s=!1){if(ae(t)){t.forEach((S,P)=>mi(S,e&&(ae(e)?e[P]:e),n,r,s));return}if(_i(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&mi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ha(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Oe?l.refs={}:l.refs,p=l.setupState,g=Ie(p),E=p===Oe?Dp:S=>Ce(g,S);if(u!=null&&u!==c){if(_d(e),Qe(u))d[u]=null,E(u)&&(p[u]=null);else if(ze(u)){u.value=null;const S=e;S.k&&(d[S.k]=null)}}if(pe(c))Qi(c,l,12,[o,d]);else{const S=Qe(c),P=ze(c);if(S||P){const N=()=>{if(t.f){const x=S?E(c)?p[c]:d[c]:c.value;if(s)ae(x)&&eu(x,i);else if(ae(x))x.includes(i)||x.push(i);else if(S)d[c]=[i],E(c)&&(p[c]=d[c]);else{const O=[i];c.value=O,t.k&&(d[t.k]=O)}}else S?(d[c]=o,E(c)&&(p[c]=o)):P&&(c.value=o,t.k&&(d[t.k]=o))};if(o){const x=()=>{N(),sa.delete(t)};x.id=-1,sa.set(t,x),kt(x,n)}else _d(t),N()}}}function _d(t){const e=sa.get(t);e&&(e.flags|=8,sa.delete(t))}Va().requestIdleCallback;Va().cancelIdleCallback;const _i=t=>!!t.type.__asyncLoader,Eg=t=>t.type.__isKeepAlive;function Zv(t,e){wg(t,"a",e)}function e0(t,e){wg(t,"da",e)}function wg(t,e,n=At){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ua(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Eg(s.parent.vnode)&&t0(r,e,n,s),s=s.parent}}function t0(t,e,n,r){const s=Ua(e,t,r,!0);Ba(()=>{eu(r[e],s)},n)}function Ua(t,e,n=At,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Vn();const l=Yi(n),c=sn(e,n,t,o);return l(),On(),c});return r?s.unshift(i):s.push(i),i}}const $n=t=>(e,n=At)=>{(!Ni||t==="sp")&&Ua(t,(...r)=>e(...r),n)},n0=$n("bm"),ja=$n("m"),r0=$n("bu"),Tg=$n("u"),Ig=$n("bum"),Ba=$n("um"),s0=$n("sp"),i0=$n("rtg"),o0=$n("rtc");function a0(t,e=At){Ua("ec",t,e)}const bg="components";function Ag(t,e){return c0(bg,t,!0,e)||t}const l0=Symbol.for("v-ndc");function c0(t,e,n=!0,r=!1){const s=Ut||At;if(s){const i=s.type;if(t===bg){const l=G0(i,!1);if(l&&(l===e||l===zt(e)||l===Da(zt(e))))return i}const o=yd(s[t]||i[t],e)||yd(s.appContext[t],e);return!o&&r?i:o}}function yd(t,e){return t&&(t[e]||t[zt(e)]||t[Da(zt(e))])}function fc(t,e,n,r){let s;const i=n&&n[r],o=ae(t);if(o||Qe(t)){const l=o&&xn(t);let c=!1,u=!1;l&&(c=!$t(t),u=Mn(t),t=Ma(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?u?Is(rn(t[d])):rn(t[d]):t[d],d,void 0,i&&i[d])}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i&&i[l])}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i&&i[c]));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}const pc=t=>t?qg(t)?Ha(t):pc(t.parent):null,yi=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pc(t.parent),$root:t=>pc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>cu(t),$forceUpdate:t=>t.f||(t.f=()=>{lu(t.update)}),$nextTick:t=>t.n||(t.n=qr.bind(t.proxy)),$watch:t=>Gv.bind(t)}),Ml=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Ce(t,e),u0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ml(r,e))return o[e]=1,r[e];if(s!==Oe&&Ce(s,e))return o[e]=2,s[e];if(Ce(i,e))return o[e]=3,i[e];if(n!==Oe&&Ce(n,e))return o[e]=4,n[e];gc&&(o[e]=0)}}const u=yi[e];let d,p;if(u)return e==="$attrs"&&Tt(t.attrs,"get",""),u(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==Oe&&Ce(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Ce(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ml(s,e)?(s[e]=n,!0):r!==Oe&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Oe&&l[0]!=="$"&&Ce(t,l)||Ml(e,l)||Ce(i,l)||Ce(r,l)||Ce(yi,l)||Ce(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vd(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let gc=!0;function h0(t){const e=cu(t),n=t.proxy,r=t.ctx;gc=!1,e.beforeCreate&&Ed(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:E,updated:S,activated:P,deactivated:N,beforeDestroy:x,beforeUnmount:O,destroyed:M,unmounted:U,render:J,renderTracked:ne,renderTriggered:R,errorCaptured:y,serverPrefetch:_,expose:I,inheritAttrs:b,components:v,directives:T,filters:Ee}=e;if(u&&d0(u,r,null),o)for(const X in o){const _e=o[X];pe(_e)&&(r[X]=_e.bind(n))}if(s){const X=s.call(n,n);De(X)&&(t.data=zi(X))}if(gc=!0,i)for(const X in i){const _e=i[X],mt=pe(_e)?_e.bind(n,n):pe(_e.get)?_e.get.bind(n,n):Zt,tt=!pe(_e)&&pe(_e.set)?_e.set.bind(n):Zt,qt=He({get:mt,set:tt});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>qt.value,set:$e=>qt.value=$e})}if(l)for(const X in l)Rg(l[X],r,n,X);if(c){const X=pe(c)?c.call(n):c;Reflect.ownKeys(X).forEach(_e=>{jo(_e,X[_e])})}d&&Ed(d,t,"c");function be(X,_e){ae(_e)?_e.forEach(mt=>X(mt.bind(n))):_e&&X(_e.bind(n))}if(be(n0,p),be(ja,g),be(r0,E),be(Tg,S),be(Zv,P),be(e0,N),be(a0,y),be(o0,ne),be(i0,R),be(Ig,O),be(Ba,U),be(s0,_),ae(I))if(I.length){const X=t.exposed||(t.exposed={});I.forEach(_e=>{Object.defineProperty(X,_e,{get:()=>n[_e],set:mt=>n[_e]=mt,enumerable:!0})})}else t.exposed||(t.exposed={});J&&t.render===Zt&&(t.render=J),b!=null&&(t.inheritAttrs=b),v&&(t.components=v),T&&(t.directives=T),_&&vg(t)}function d0(t,e,n=Zt){ae(t)&&(t=mc(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=Kt(s.from||r,s.default,!0):i=Kt(s.from||r):i=Kt(s),ze(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ed(t,e,n){sn(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rg(t,e,n,r){let s=r.includes(".")?dg(n,r):()=>n[r];if(Qe(t)){const i=e[t];pe(i)&&ms(s,i)}else if(pe(t))ms(s,t.bind(n));else if(De(t))if(ae(t))t.forEach(i=>Rg(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&ms(s,i,t)}}function cu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ia(c,u,o,!0)),ia(c,e,o)),De(e)&&i.set(e,c),c}function ia(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ia(t,i,n,!0),s&&s.forEach(o=>ia(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=f0[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const f0={data:wd,props:Td,emits:Td,methods:ii,computed:ii,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:ii,directives:ii,watch:g0,provide:wd,inject:p0};function wd(t,e){return e?t?function(){return Xe(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function p0(t,e){return ii(mc(t),mc(e))}function mc(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function ii(t,e){return t?Xe(Object.create(null),t,e):e}function Td(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:Xe(Object.create(null),vd(t),vd(e??{})):e}function g0(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const r in e)n[r]=Ct(t[r],e[r]);return n}function Sg(){return{app:null,config:{isNativeTag:Dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let m0=0;function _0(t,e){return function(r,s=null){pe(r)||(r=Xe({},r)),s!=null&&!De(s)&&(s=null);const i=Sg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:m0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Q0,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&pe(d.install)?(o.add(d),d.install(u,...p)):pe(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!c){const E=u._ceVNode||Je(r,s);return E.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(E,d):t(E,d,g),c=!0,u._container=d,d.__vue_app__=u,Ha(E.component)}},onUnmount(d){l.push(d)},unmount(){c&&(sn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Br;Br=u;try{return d()}finally{Br=p}}};return u}}let Br=null;const y0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zt(e)}Modifiers`]||t[`${vr(e)}Modifiers`];function v0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&y0(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Qe(d)?d.trim():d)),o.number&&(s=n.map(Na)));let l,c=r[l=xl(e)]||r[l=xl(zt(e))];!c&&i&&(c=r[l=xl(vr(e))]),c&&sn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,sn(u,t,6,s)}}const E0=new WeakMap;function Pg(t,e,n=!1){const r=n?E0:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=u=>{const d=Pg(u,e,!0);d&&(l=!0,Xe(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(De(t)&&r.set(t,null),null):(ae(i)?i.forEach(c=>o[c]=null):Xe(o,i),De(t)&&r.set(t,o),o)}function $a(t,e){return!t||!Pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,vr(e))||Ce(t,e))}function Ll(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:g,setupState:E,ctx:S,inheritAttrs:P}=t,N=ra(t);let x,O;try{if(n.shapeFlag&4){const U=s||r,J=U;x=hn(u.call(J,U,d,p,E,g,S)),O=l}else{const U=e;x=hn(U.length>1?U(p,{attrs:l,slots:o,emit:c}):U(p,null)),O=e.props?l:w0(l)}}catch(U){vi.length=0,Fa(U,t,1),x=Je(Ln)}let M=x;if(O&&P!==!1){const U=Object.keys(O),{shapeFlag:J}=M;U.length&&J&7&&(i&&U.some(Zc)&&(O=T0(O,i)),M=Hr(M,O,!1,!0))}return n.dirs&&(M=Hr(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&ki(M,n.transition),x=M,ra(N),x}const w0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pa(n))&&((e||(e={}))[n]=t[n]);return e},T0=(t,e)=>{const n={};for(const r in t)(!Zc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function I0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Id(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!$a(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Id(r,o,u):!0:!!o;return!1}function Id(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!$a(n,i))return!0}return!1}function b0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Cg={},kg=()=>Object.create(Cg),xg=t=>Object.getPrototypeOf(t)===Cg;function A0(t,e,n,r=!1){const s={},i=kg();t.propsDefaults=Object.create(null),Dg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:rg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function R0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ie(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if($a(t.emitsOptions,g))continue;const E=e[g];if(c)if(Ce(i,g))E!==i[g]&&(i[g]=E,u=!0);else{const S=zt(g);s[S]=_c(c,l,S,E,t,!1)}else E!==i[g]&&(i[g]=E,u=!0)}}}else{Dg(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Ce(e,p)&&((d=vr(p))===p||!Ce(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=_c(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ce(e,p))&&(delete i[p],u=!0)}u&&bn(t.attrs,"set","")}function Dg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(di(c))continue;const u=e[c];let d;s&&Ce(s,d=zt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:$a(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ie(n),u=l||Oe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=_c(s,c,p,u[p],t,!Ce(u,p))}}return o}function _c(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ce(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Yi(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===vr(n))&&(r=!0))}return r}const S0=new WeakMap;function Ng(t,e,n=!1){const r=n?S0:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const d=p=>{c=!0;const[g,E]=Ng(p,e,!0);Xe(o,g),E&&l.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return De(t)&&r.set(t,ds),ds;if(ae(i))for(let d=0;d<i.length;d++){const p=zt(i[d]);bd(p)&&(o[p]=Oe)}else if(i)for(const d in i){const p=zt(d);if(bd(p)){const g=i[d],E=o[p]=ae(g)||pe(g)?{type:g}:Xe({},g),S=E.type;let P=!1,N=!0;if(ae(S))for(let x=0;x<S.length;++x){const O=S[x],M=pe(O)&&O.name;if(M==="Boolean"){P=!0;break}else M==="String"&&(N=!1)}else P=pe(S)&&S.name==="Boolean";E[0]=P,E[1]=N,(P||Ce(E,"default"))&&l.push(p)}}const u=[o,l];return De(t)&&r.set(t,u),u}function bd(t){return t[0]!=="$"&&!di(t)}const uu=t=>t==="_"||t==="_ctx"||t==="$stable",hu=t=>ae(t)?t.map(hn):[hn(t)],P0=(t,e,n)=>{if(e._n)return e;const r=gs((...s)=>hu(e(...s)),n);return r._c=!1,r},Vg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(uu(s))continue;const i=t[s];if(pe(i))e[s]=P0(s,i,r);else if(i!=null){const o=hu(i);e[s]=()=>o}}},Og=(t,e)=>{const n=hu(e);t.slots.default=()=>n},Mg=(t,e,n)=>{for(const r in e)(n||!uu(r))&&(t[r]=e[r])},C0=(t,e,n)=>{const r=t.slots=kg();if(t.vnode.shapeFlag&32){const s=e._;s?(Mg(r,e,n),n&&Mp(r,"_",s,!0)):Vg(e,r)}else e&&Og(t,e)},k0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Mg(s,e,n):(i=!e.$stable,Vg(e,s)),o=e}else e&&(Og(t,e),o={default:1});if(i)for(const l in s)!uu(l)&&o[l]==null&&delete s[l]},kt=O0;function x0(t){return D0(t)}function D0(t,e){const n=Va();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:E=Zt,insertStaticContent:S}=t,P=(w,A,D,B=null,L=null,$=null,z=void 0,K=null,W=!!A.dynamicChildren)=>{if(w===A)return;w&&!as(w,A)&&(B=F(w),$e(w,L,$,!0),w=null),A.patchFlag===-2&&(W=!1,A.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:Y}=A;switch(q){case qa:N(w,A,D,B);break;case Ln:x(w,A,D,B);break;case $o:w==null&&O(A,D,B,z);break;case It:v(w,A,D,B,L,$,z,K,W);break;default:Y&1?J(w,A,D,B,L,$,z,K,W):Y&6?T(w,A,D,B,L,$,z,K,W):(Y&64||Y&128)&&q.process(w,A,D,B,L,$,z,K,W,se)}oe!=null&&L?mi(oe,w&&w.ref,$,A||w,!A):oe==null&&w&&w.ref!=null&&mi(w.ref,null,$,w,!0)},N=(w,A,D,B)=>{if(w==null)r(A.el=l(A.children),D,B);else{const L=A.el=w.el;A.children!==w.children&&u(L,A.children)}},x=(w,A,D,B)=>{w==null?r(A.el=c(A.children||""),D,B):A.el=w.el},O=(w,A,D,B)=>{[w.el,w.anchor]=S(w.children,A,D,B,w.el,w.anchor)},M=({el:w,anchor:A},D,B)=>{let L;for(;w&&w!==A;)L=g(w),r(w,D,B),w=L;r(A,D,B)},U=({el:w,anchor:A})=>{let D;for(;w&&w!==A;)D=g(w),s(w),w=D;s(A)},J=(w,A,D,B,L,$,z,K,W)=>{if(A.type==="svg"?z="svg":A.type==="math"&&(z="mathml"),w==null)ne(A,D,B,L,$,z,K,W);else{const q=w.el&&w.el._isVueCE?w.el:null;try{q&&q._beginPatch(),_(w,A,L,$,z,K,W)}finally{q&&q._endPatch()}}},ne=(w,A,D,B,L,$,z,K)=>{let W,q;const{props:oe,shapeFlag:Y,transition:re,dirs:ce}=w;if(W=w.el=o(w.type,$,oe&&oe.is,oe),Y&8?d(W,w.children):Y&16&&y(w.children,W,null,B,L,Fl(w,$),z,K),ce&&Cr(w,null,B,"created"),R(W,w,w.scopeId,z,B),oe){for(const me in oe)me!=="value"&&!di(me)&&i(W,me,null,oe[me],$,B);"value"in oe&&i(W,"value",null,oe.value,$),(q=oe.onVnodeBeforeMount)&&ln(q,B,w)}ce&&Cr(w,null,B,"beforeMount");const le=N0(L,re);le&&re.beforeEnter(W),r(W,A,D),((q=oe&&oe.onVnodeMounted)||le||ce)&&kt(()=>{q&&ln(q,B,w),le&&re.enter(W),ce&&Cr(w,null,B,"mounted")},L)},R=(w,A,D,B,L)=>{if(D&&E(w,D),B)for(let $=0;$<B.length;$++)E(w,B[$]);if(L){let $=L.subTree;if(A===$||Ug($.type)&&($.ssContent===A||$.ssFallback===A)){const z=L.vnode;R(w,z,z.scopeId,z.slotScopeIds,L.parent)}}},y=(w,A,D,B,L,$,z,K,W=0)=>{for(let q=W;q<w.length;q++){const oe=w[q]=K?nr(w[q]):hn(w[q]);P(null,oe,A,D,B,L,$,z,K)}},_=(w,A,D,B,L,$,z)=>{const K=A.el=w.el;let{patchFlag:W,dynamicChildren:q,dirs:oe}=A;W|=w.patchFlag&16;const Y=w.props||Oe,re=A.props||Oe;let ce;if(D&&kr(D,!1),(ce=re.onVnodeBeforeUpdate)&&ln(ce,D,A,w),oe&&Cr(A,w,D,"beforeUpdate"),D&&kr(D,!0),(Y.innerHTML&&re.innerHTML==null||Y.textContent&&re.textContent==null)&&d(K,""),q?I(w.dynamicChildren,q,K,D,B,Fl(A,L),$):z||_e(w,A,K,null,D,B,Fl(A,L),$,!1),W>0){if(W&16)b(K,Y,re,D,L);else if(W&2&&Y.class!==re.class&&i(K,"class",null,re.class,L),W&4&&i(K,"style",Y.style,re.style,L),W&8){const le=A.dynamicProps;for(let me=0;me<le.length;me++){const we=le[me],ct=Y[we],nt=re[we];(nt!==ct||we==="value")&&i(K,we,ct,nt,L,D)}}W&1&&w.children!==A.children&&d(K,A.children)}else!z&&q==null&&b(K,Y,re,D,L);((ce=re.onVnodeUpdated)||oe)&&kt(()=>{ce&&ln(ce,D,A,w),oe&&Cr(A,w,D,"updated")},B)},I=(w,A,D,B,L,$,z)=>{for(let K=0;K<A.length;K++){const W=w[K],q=A[K],oe=W.el&&(W.type===It||!as(W,q)||W.shapeFlag&198)?p(W.el):D;P(W,q,oe,null,B,L,$,z,!0)}},b=(w,A,D,B,L)=>{if(A!==D){if(A!==Oe)for(const $ in A)!di($)&&!($ in D)&&i(w,$,A[$],null,L,B);for(const $ in D){if(di($))continue;const z=D[$],K=A[$];z!==K&&$!=="value"&&i(w,$,K,z,L,B)}"value"in D&&i(w,"value",A.value,D.value,L)}},v=(w,A,D,B,L,$,z,K,W)=>{const q=A.el=w?w.el:l(""),oe=A.anchor=w?w.anchor:l("");let{patchFlag:Y,dynamicChildren:re,slotScopeIds:ce}=A;ce&&(K=K?K.concat(ce):ce),w==null?(r(q,D,B),r(oe,D,B),y(A.children||[],D,oe,L,$,z,K,W)):Y>0&&Y&64&&re&&w.dynamicChildren&&w.dynamicChildren.length===re.length?(I(w.dynamicChildren,re,D,L,$,z,K),(A.key!=null||L&&A===L.subTree)&&du(w,A,!0)):_e(w,A,D,oe,L,$,z,K,W)},T=(w,A,D,B,L,$,z,K,W)=>{A.slotScopeIds=K,w==null?A.shapeFlag&512?L.ctx.activate(A,D,B,z,W):Ee(A,D,B,L,$,z,W):Be(w,A,W)},Ee=(w,A,D,B,L,$,z)=>{const K=w.component=$0(w,B,L);if(Eg(w)&&(K.ctx.renderer=se),q0(K,!1,z),K.asyncDep){if(L&&L.registerDep(K,be,z),!w.el){const W=K.subTree=Je(Ln);x(null,W,A,D),w.placeholder=W.el}}else be(K,w,A,D,L,$,z)},Be=(w,A,D)=>{const B=A.component=w.component;if(I0(w,A,D))if(B.asyncDep&&!B.asyncResolved){X(B,A,D);return}else B.next=A,B.update();else A.el=w.el,B.vnode=A},be=(w,A,D,B,L,$,z)=>{const K=()=>{if(w.isMounted){let{next:Y,bu:re,u:ce,parent:le,vnode:me}=w;{const rt=Lg(w);if(rt){Y&&(Y.el=me.el,X(w,Y,z)),rt.asyncDep.then(()=>{w.isUnmounted||K()});return}}let we=Y,ct;kr(w,!1),Y?(Y.el=me.el,X(w,Y,z)):Y=me,re&&Uo(re),(ct=Y.props&&Y.props.onVnodeBeforeUpdate)&&ln(ct,le,Y,me),kr(w,!0);const nt=Ll(w),Lt=w.subTree;w.subTree=nt,P(Lt,nt,p(Lt.el),F(Lt),w,L,$),Y.el=nt.el,we===null&&b0(w,nt.el),ce&&kt(ce,L),(ct=Y.props&&Y.props.onVnodeUpdated)&&kt(()=>ln(ct,le,Y,me),L)}else{let Y;const{el:re,props:ce}=A,{bm:le,m:me,parent:we,root:ct,type:nt}=w,Lt=_i(A);if(kr(w,!1),le&&Uo(le),!Lt&&(Y=ce&&ce.onVnodeBeforeMount)&&ln(Y,we,A),kr(w,!0),re&&xe){const rt=()=>{w.subTree=Ll(w),xe(re,w.subTree,w,L,null)};Lt&&nt.__asyncHydrate?nt.__asyncHydrate(re,w,rt):rt()}else{ct.ce&&ct.ce._def.shadowRoot!==!1&&ct.ce._injectChildStyle(nt);const rt=w.subTree=Ll(w);P(null,rt,D,B,w,L,$),A.el=rt.el}if(me&&kt(me,L),!Lt&&(Y=ce&&ce.onVnodeMounted)){const rt=A;kt(()=>ln(Y,we,rt),L)}(A.shapeFlag&256||we&&_i(we.vnode)&&we.vnode.shapeFlag&256)&&w.a&&kt(w.a,L),w.isMounted=!0,A=D=B=null}};w.scope.on();const W=w.effect=new qp(K);w.scope.off();const q=w.update=W.run.bind(W),oe=w.job=W.runIfDirty.bind(W);oe.i=w,oe.id=w.uid,W.scheduler=()=>lu(oe),kr(w,!0),q()},X=(w,A,D)=>{A.component=w;const B=w.vnode.props;w.vnode=A,w.next=null,R0(w,A.props,B,D),k0(w,A.children,D),Vn(),fd(w),On()},_e=(w,A,D,B,L,$,z,K,W=!1)=>{const q=w&&w.children,oe=w?w.shapeFlag:0,Y=A.children,{patchFlag:re,shapeFlag:ce}=A;if(re>0){if(re&128){tt(q,Y,D,B,L,$,z,K,W);return}else if(re&256){mt(q,Y,D,B,L,$,z,K,W);return}}ce&8?(oe&16&&Vt(q,L,$),Y!==q&&d(D,Y)):oe&16?ce&16?tt(q,Y,D,B,L,$,z,K,W):Vt(q,L,$,!0):(oe&8&&d(D,""),ce&16&&y(Y,D,B,L,$,z,K,W))},mt=(w,A,D,B,L,$,z,K,W)=>{w=w||ds,A=A||ds;const q=w.length,oe=A.length,Y=Math.min(q,oe);let re;for(re=0;re<Y;re++){const ce=A[re]=W?nr(A[re]):hn(A[re]);P(w[re],ce,D,null,L,$,z,K,W)}q>oe?Vt(w,L,$,!0,!1,Y):y(A,D,B,L,$,z,K,W,Y)},tt=(w,A,D,B,L,$,z,K,W)=>{let q=0;const oe=A.length;let Y=w.length-1,re=oe-1;for(;q<=Y&&q<=re;){const ce=w[q],le=A[q]=W?nr(A[q]):hn(A[q]);if(as(ce,le))P(ce,le,D,null,L,$,z,K,W);else break;q++}for(;q<=Y&&q<=re;){const ce=w[Y],le=A[re]=W?nr(A[re]):hn(A[re]);if(as(ce,le))P(ce,le,D,null,L,$,z,K,W);else break;Y--,re--}if(q>Y){if(q<=re){const ce=re+1,le=ce<oe?A[ce].el:B;for(;q<=re;)P(null,A[q]=W?nr(A[q]):hn(A[q]),D,le,L,$,z,K,W),q++}}else if(q>re)for(;q<=Y;)$e(w[q],L,$,!0),q++;else{const ce=q,le=q,me=new Map;for(q=le;q<=re;q++){const ut=A[q]=W?nr(A[q]):hn(A[q]);ut.key!=null&&me.set(ut.key,q)}let we,ct=0;const nt=re-le+1;let Lt=!1,rt=0;const Wn=new Array(nt);for(q=0;q<nt;q++)Wn[q]=0;for(q=ce;q<=Y;q++){const ut=w[q];if(ct>=nt){$e(ut,L,$,!0);continue}let Ht;if(ut.key!=null)Ht=me.get(ut.key);else for(we=le;we<=re;we++)if(Wn[we-le]===0&&as(ut,A[we])){Ht=we;break}Ht===void 0?$e(ut,L,$,!0):(Wn[Ht-le]=q+1,Ht>=rt?rt=Ht:Lt=!0,P(ut,A[Ht],D,null,L,$,z,K,W),ct++)}const Bs=Lt?V0(Wn):ds;for(we=Bs.length-1,q=nt-1;q>=0;q--){const ut=le+q,Ht=A[ut],ho=A[ut+1],Zr=ut+1<oe?ho.el||Fg(ho):B;Wn[q]===0?P(null,Ht,D,Zr,L,$,z,K,W):Lt&&(we<0||q!==Bs[we]?qt(Ht,D,Zr,2):we--)}}},qt=(w,A,D,B,L=null)=>{const{el:$,type:z,transition:K,children:W,shapeFlag:q}=w;if(q&6){qt(w.component.subTree,A,D,B);return}if(q&128){w.suspense.move(A,D,B);return}if(q&64){z.move(w,A,D,se);return}if(z===It){r($,A,D);for(let Y=0;Y<W.length;Y++)qt(W[Y],A,D,B);r(w.anchor,A,D);return}if(z===$o){M(w,A,D);return}if(B!==2&&q&1&&K)if(B===0)K.beforeEnter($),r($,A,D),kt(()=>K.enter($),L);else{const{leave:Y,delayLeave:re,afterLeave:ce}=K,le=()=>{w.ctx.isUnmounted?s($):r($,A,D)},me=()=>{$._isLeaving&&$[Nr](!0),Y($,()=>{le(),ce&&ce()})};re?re($,le,me):me()}else r($,A,D)},$e=(w,A,D,B=!1,L=!1)=>{const{type:$,props:z,ref:K,children:W,dynamicChildren:q,shapeFlag:oe,patchFlag:Y,dirs:re,cacheIndex:ce}=w;if(Y===-2&&(L=!1),K!=null&&(Vn(),mi(K,null,D,w,!0),On()),ce!=null&&(A.renderCache[ce]=void 0),oe&256){A.ctx.deactivate(w);return}const le=oe&1&&re,me=!_i(w);let we;if(me&&(we=z&&z.onVnodeBeforeUnmount)&&ln(we,A,w),oe&6)Mt(w.component,D,B);else{if(oe&128){w.suspense.unmount(D,B);return}le&&Cr(w,null,A,"beforeUnmount"),oe&64?w.type.remove(w,A,D,se,B):q&&!q.hasOnce&&($!==It||Y>0&&Y&64)?Vt(q,A,D,!1,!0):($===It&&Y&384||!L&&oe&16)&&Vt(W,A,D),B&&qe(w)}(me&&(we=z&&z.onVnodeUnmounted)||le)&&kt(()=>{we&&ln(we,A,w),le&&Cr(w,null,A,"unmounted")},D)},qe=w=>{const{type:A,el:D,anchor:B,transition:L}=w;if(A===It){Hn(D,B);return}if(A===$o){U(w);return}const $=()=>{s(D),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(w.shapeFlag&1&&L&&!L.persisted){const{leave:z,delayLeave:K}=L,W=()=>z(D,$);K?K(w.el,$,W):W()}else $()},Hn=(w,A)=>{let D;for(;w!==A;)D=g(w),s(w),w=D;s(A)},Mt=(w,A,D)=>{const{bum:B,scope:L,job:$,subTree:z,um:K,m:W,a:q}=w;Ad(W),Ad(q),B&&Uo(B),L.stop(),$&&($.flags|=8,$e(z,w,A,D)),K&&kt(K,A),kt(()=>{w.isUnmounted=!0},A)},Vt=(w,A,D,B=!1,L=!1,$=0)=>{for(let z=$;z<w.length;z++)$e(w[z],A,D,B,L)},F=w=>{if(w.shapeFlag&6)return F(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const A=g(w.anchor||w.el),D=A&&A[fg];return D?g(D):A};let ee=!1;const Q=(w,A,D)=>{let B;w==null?A._vnode&&($e(A._vnode,null,null,!0),B=A._vnode.component):P(A._vnode||null,w,A,null,null,null,D),A._vnode=w,ee||(ee=!0,fd(B),lg(),ee=!1)},se={p:P,um:$e,m:qt,r:qe,mt:Ee,mc:y,pc:_e,pbc:I,n:F,o:t};let ge,xe;return e&&([ge,xe]=e(se)),{render:Q,hydrate:ge,createApp:_0(Q,ge)}}function Fl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function kr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function N0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function du(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=nr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&du(o,l)),l.type===qa&&(l.patchFlag!==-1?l.el=o.el:l.__elIndex=i+(t.type===It?1:0)),l.type===Ln&&!l.el&&(l.el=o.el)}}function V0(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Lg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Lg(e)}function Ad(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Fg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Fg(e.subTree):null}const Ug=t=>t.__isSuspense;function O0(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):qv(t)}const It=Symbol.for("v-fgt"),qa=Symbol.for("v-txt"),Ln=Symbol.for("v-cmt"),$o=Symbol.for("v-stc"),vi=[];let jt=null;function Se(t=!1){vi.push(jt=t?null:[])}function M0(){vi.pop(),jt=vi[vi.length-1]||null}let xi=1;function oa(t,e=!1){xi+=t,t<0&&jt&&e&&(jt.hasOnce=!0)}function jg(t){return t.dynamicChildren=xi>0?jt||ds:null,M0(),xi>0&&jt&&jt.push(t),t}function Le(t,e,n,r,s,i){return jg(k(t,e,n,r,s,i,!0))}function Di(t,e,n,r,s){return jg(Je(t,e,n,r,s,!0))}function aa(t){return t?t.__v_isVNode===!0:!1}function as(t,e){return t.type===e.type&&t.key===e.key}const Bg=({key:t})=>t??null,qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||ze(t)||pe(t)?{i:Ut,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,r=0,s=null,i=t===It?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bg(e),ref:e&&qo(e),scopeId:ug,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ut};return l?(fu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Qe(n)?8:16),xi>0&&!o&&jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&jt.push(c),c}const Je=L0;function L0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===l0)&&(t=Ln),aa(t)){const l=Hr(t,e,!0);return n&&fu(l,n),xi>0&&!i&&jt&&(l.shapeFlag&6?jt[jt.indexOf(t)]=l:jt.push(l)),l.patchFlag=-2,l}if(z0(t)&&(t=t.__vccOpts),e){e=F0(e);let{class:l,style:c}=e;l&&!Qe(l)&&(e.class=ar(l)),De(c)&&(La(c)&&!ae(c)&&(c=Xe({},c)),e.style=Ts(c))}const o=Qe(t)?1:Ug(t)?128:zv(t)?64:De(t)?4:pe(t)?2:0;return k(t,e,n,r,s,o,i,!0)}function F0(t){return t?La(t)||xg(t)?Xe({},t):t:null}function Hr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?U0(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Bg(u),ref:e&&e.ref?n&&i?ae(i)?i.concat(qo(e)):[i,qo(e)]:qo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hr(t.ssContent),ssFallback:t.ssFallback&&Hr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ki(d,c.clone(d)),d}function Rt(t=" ",e=0){return Je(qa,null,t,e)}function $g(t,e){const n=Je($o,null,t);return n.staticCount=e,n}function dn(t="",e=!1){return e?(Se(),Di(Ln,null,t)):Je(Ln,null,t)}function hn(t){return t==null||typeof t=="boolean"?Je(Ln):ae(t)?Je(It,null,t.slice()):aa(t)?nr(t):Je(qa,null,String(t))}function nr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hr(t)}function fu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!xg(e)?e._ctx=Ut:s===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Ut},n=32):(e=String(e),r&64?(n=16,e=[Rt(e)]):n=8);t.children=e,t.shapeFlag|=n}function U0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ar([e.class,r.class]));else if(s==="style")e.style=Ts([e.style,r.style]);else if(Pa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ln(t,e,n,r=null){sn(t,e,7,[n,r])}const j0=Sg();let B0=0;function $0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||j0,i={uid:B0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ng(r,s),emitsOptions:Pg(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=v0.bind(null,i),t.ce&&t.ce(i),i}let At=null;const pu=()=>At||Ut;let la,yc;{const t=Va(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};la=e("__VUE_INSTANCE_SETTERS__",n=>At=n),yc=e("__VUE_SSR_SETTERS__",n=>Ni=n)}const Yi=t=>{const e=At;return la(t),t.scope.on(),()=>{t.scope.off(),la(e)}},Rd=()=>{At&&At.scope.off(),la(null)};function qg(t){return t.vnode.shapeFlag&4}let Ni=!1;function q0(t,e=!1,n=!1){e&&yc(e);const{props:r,children:s}=t.vnode,i=qg(t);A0(t,r,i,e),C0(t,s,n||e);const o=i?H0(t,e):void 0;return e&&yc(!1),o}function H0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,u0);const{setup:r}=n;if(r){Vn();const s=t.setupContext=r.length>1?K0(t):null,i=Yi(t),o=Qi(r,t,0,[t.props,s]),l=Np(o);if(On(),i(),(l||t.sp)&&!_i(t)&&vg(t),l){if(o.then(Rd,Rd),e)return o.then(c=>{Sd(t,c,e)}).catch(c=>{Fa(c,t,0)});t.asyncDep=o}else Sd(t,o,e)}else Hg(t,e)}function Sd(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=ig(e)),Hg(t,n)}let Pd;function Hg(t,e,n){const r=t.type;if(!t.render){if(!e&&Pd&&!r.render){const s=r.template||cu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,u=Xe(Xe({isCustomElement:i,delimiters:l},o),c);r.render=Pd(s,u)}}t.render=r.render||Zt}{const s=Yi(t);Vn();try{h0(t)}finally{On(),s()}}}const W0={get(t,e){return Tt(t,"get",""),t[e]}};function K0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,W0),slots:t.slots,emit:t.emit,expose:e}}function Ha(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ig(au(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yi)return yi[n](t)},has(e,n){return n in e||n in yi}})):t.proxy}function G0(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function z0(t){return pe(t)&&"__vccOpts"in t}const He=(t,e)=>Fv(t,e,Ni);function Wg(t,e,n){try{oa(-1);const r=arguments.length;return r===2?De(e)&&!ae(e)?aa(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&aa(n)&&(n=[n]),Je(t,e,n))}finally{oa(1)}}const Q0="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vc;const Cd=typeof window<"u"&&window.trustedTypes;if(Cd)try{vc=Cd.createPolicy("vue",{createHTML:t=>t})}catch{}const Kg=vc?t=>vc.createHTML(t):t=>t,Y0="http://www.w3.org/2000/svg",J0="http://www.w3.org/1998/Math/MathML",Tn=typeof document<"u"?document:null,kd=Tn&&Tn.createElement("template"),X0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Tn.createElementNS(Y0,t):e==="mathml"?Tn.createElementNS(J0,t):n?Tn.createElement(t,{is:n}):Tn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Tn.createTextNode(t),createComment:t=>Tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{kd.innerHTML=Kg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=kd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Qn="transition",ti="animation",bs=Symbol("_vtc"),Gg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Z0=Xe({},Jv,Gg),xr=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},xd=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function eE(t){const e={};for(const v in t)v in Gg||(e[v]=t[v]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,S=tE(s),P=S&&S[0],N=S&&S[1],{onBeforeEnter:x,onEnter:O,onEnterCancelled:M,onLeave:U,onLeaveCancelled:J,onBeforeAppear:ne=x,onAppear:R=O,onAppearCancelled:y=M}=e,_=(v,T,Ee,Be)=>{v._enterCancelled=Be,Xn(v,T?d:l),Xn(v,T?u:o),Ee&&Ee()},I=(v,T)=>{v._isLeaving=!1,Xn(v,p),Xn(v,E),Xn(v,g),T&&T()},b=v=>(T,Ee)=>{const Be=v?R:O,be=()=>_(T,v,Ee);xr(Be,[T,be]),Dd(()=>{Xn(T,v?c:i),cn(T,v?d:l),xd(Be)||Nd(T,r,P,be)})};return Xe(e,{onBeforeEnter(v){xr(x,[v]),cn(v,i),cn(v,o)},onBeforeAppear(v){xr(ne,[v]),cn(v,c),cn(v,u)},onEnter:b(!1),onAppear:b(!0),onLeave(v,T){v._isLeaving=!0;const Ee=()=>I(v,T);cn(v,p),v._enterCancelled?(cn(v,g),Ec(v)):(Ec(v),cn(v,g)),Dd(()=>{v._isLeaving&&(Xn(v,p),cn(v,E),xd(U)||Nd(v,r,N,Ee))}),xr(U,[v,Ee])},onEnterCancelled(v){_(v,!1,void 0,!0),xr(M,[v])},onAppearCancelled(v){_(v,!0,void 0,!0),xr(y,[v])},onLeaveCancelled(v){I(v),xr(J,[v])}})}function tE(t){if(t==null)return null;if(De(t))return[Ul(t.enter),Ul(t.leave)];{const e=Ul(t);return[e,e]}}function Ul(t){return nv(t)}function cn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[bs]||(t[bs]=new Set)).add(e)}function Xn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[bs];n&&(n.delete(e),n.size||(t[bs]=void 0))}function Dd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let nE=0;function Nd(t,e,n,r){const s=t._endId=++nE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=zg(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,g),i()},g=E=>{E.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,g)}function zg(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${Qn}Delay`),i=r(`${Qn}Duration`),o=Vd(s,i),l=r(`${ti}Delay`),c=r(`${ti}Duration`),u=Vd(l,c);let d=null,p=0,g=0;e===Qn?o>0&&(d=Qn,p=o,g=i.length):e===ti?u>0&&(d=ti,p=u,g=c.length):(p=Math.max(o,u),d=p>0?o>u?Qn:ti:null,g=d?d===Qn?i.length:c.length:0);const E=d===Qn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Qn}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:E}}function Vd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Od(n)+Od(t[r])))}function Od(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ec(t){return(t?t.ownerDocument:document).body.offsetHeight}function rE(t,e,n){const r=t[bs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Md=Symbol("_vod"),sE=Symbol("_vsh"),iE=Symbol(""),oE=/(?:^|;)\s*display\s*:/;function aE(t,e,n){const r=t.style,s=Qe(n);let i=!1;if(n&&!s){if(e)if(Qe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ho(r,l,"")}else for(const o in e)n[o]==null&&Ho(r,o,"");for(const o in n)o==="display"&&(i=!0),Ho(r,o,n[o])}else if(s){if(e!==n){const o=r[iE];o&&(n+=";"+o),r.cssText=n,i=oE.test(n)}}else e&&t.removeAttribute("style");Md in t&&(t[Md]=i?r.display:"",t[sE]&&(r.display="none"))}const Ld=/\s*!important$/;function Ho(t,e,n){if(ae(n))n.forEach(r=>Ho(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=lE(t,e);Ld.test(n)?t.setProperty(vr(r),n.replace(Ld,""),"important"):t[r]=n}}const Fd=["Webkit","Moz","ms"],jl={};function lE(t,e){const n=jl[e];if(n)return n;let r=zt(e);if(r!=="filter"&&r in t)return jl[e]=r;r=Da(r);for(let s=0;s<Fd.length;s++){const i=Fd[s]+r;if(i in t)return jl[e]=i}return e}const Ud="http://www.w3.org/1999/xlink";function jd(t,e,n,r,s,i=lv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ud,e.slice(6,e.length)):t.setAttributeNS(Ud,e,n):n==null||i&&!Lp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":mn(n)?String(n):n)}function Bd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Kg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Lp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Mr(t,e,n,r){t.addEventListener(e,n,r)}function cE(t,e,n,r){t.removeEventListener(e,n,r)}const $d=Symbol("_vei");function uE(t,e,n,r,s=null){const i=t[$d]||(t[$d]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=hE(e);if(r){const u=i[e]=pE(r,s);Mr(t,l,u,c)}else o&&(cE(t,l,o,c),i[e]=void 0)}}const qd=/(?:Once|Passive|Capture)$/;function hE(t){let e;if(qd.test(t)){e={};let r;for(;r=t.match(qd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vr(t.slice(2)),e]}let Bl=0;const dE=Promise.resolve(),fE=()=>Bl||(dE.then(()=>Bl=0),Bl=Date.now());function pE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sn(gE(r,n.value),e,5,[r])};return n.value=t,n.attached=fE(),n}function gE(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Hd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,mE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?rE(t,r,o):e==="style"?aE(t,n,r):Pa(e)?Zc(e)||uE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_E(t,e,r,o))?(Bd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Qe(r))?Bd(t,zt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),jd(t,e,r,o))};function _E(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hd(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hd(e)&&Qe(n)?!1:e in t}const Qg=new WeakMap,Yg=new WeakMap,ca=Symbol("_moveCb"),Wd=Symbol("_enterCb"),yE=t=>(delete t.props.mode,t),vE=yE({name:"TransitionGroup",props:Xe({},Z0,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=pu(),r=Yv();let s,i;return Tg(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!bE(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(wE),s.forEach(TE);const l=s.filter(IE);Ec(n.vnode.el),l.forEach(c=>{const u=c.el,d=u.style;cn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[ca]=g=>{g&&g.target!==u||(!g||g.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",p),u[ca]=null,Xn(u,o))};u.addEventListener("transitionend",p)}),s=[]}),()=>{const o=Ie(t),l=eE(o);let c=o.tag||It;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),ki(d,dc(d,l,r,n)),Qg.set(d,{left:d.el.offsetLeft,top:d.el.offsetTop}))}i=e.default?_g(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&ki(d,dc(d,l,r,n))}return Je(c,null,i)}}}),EE=vE;function wE(t){const e=t.el;e[ca]&&e[ca](),e[Wd]&&e[Wd]()}function TE(t){Yg.set(t,{left:t.el.offsetLeft,top:t.el.offsetTop})}function IE(t){const e=Qg.get(t),n=Yg.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function bE(t,e,n){const r=t.cloneNode(),s=t[bs];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=zg(r);return i.removeChild(r),o}const ua=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>Uo(e,n):e};function AE(t){t.target.composing=!0}function Kd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _s=Symbol("_assign");function Gd(t,e,n){return e&&(t=t.trim()),n&&(t=Na(t)),t}const ur={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[_s]=ua(s);const i=r||s.props&&s.props.type==="number";Mr(t,e?"change":"input",o=>{o.target.composing||t[_s](Gd(t.value,n,i))}),(n||i)&&Mr(t,"change",()=>{t.value=Gd(t.value,n,i)}),e||(Mr(t,"compositionstart",AE),Mr(t,"compositionend",Kd),Mr(t,"change",Kd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[_s]=ua(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Na(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},RE={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ca(e);Mr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Na(ha(o)):ha(o));t[_s](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,qr(()=>{t._assigning=!1})}),t[_s]=ua(r)},mounted(t,{value:e}){zd(t,e)},beforeUpdate(t,e,n){t[_s]=ua(n)},updated(t,{value:e}){t._assigning||zd(t,e)}};function zd(t,e){const n=t.multiple,r=ae(e);if(!(n&&!r&&!Ca(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=ha(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=uv(e,l)>-1}else o.selected=e.has(l);else if(Oa(ha(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ha(t){return"_value"in t?t._value:t.value}const SE=["ctrl","shift","alt","meta"],PE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>SE.some(n=>t[`${n}Key`]&&!e.includes(n))},Vi=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=PE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},CE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},kE=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=vr(s.key);if(e.some(o=>o===i||CE[o]===i))return t(s)})},xE=Xe({patchProp:mE},X0);let Qd;function DE(){return Qd||(Qd=x0(xE))}const NE=(...t)=>{const e=DE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=OE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,VE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function VE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function OE(t){return Qe(t)?document.querySelector(t):t}var ME=!1;/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Jg;const Wa=t=>Jg=t,Xg=Symbol();function wc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ei;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ei||(Ei={}));function LE(){const t=Bp(!0),e=t.run(()=>Ue({}));let n=[],r=[];const s=au({install(i){Wa(s),s._a=i,i.provide(Xg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!ME?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Zg=()=>{};function Yd(t,e,n,r=Zg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&$p()&&hv(s),s}function is(t,...e){t.slice().forEach(n=>{n(...e)})}const FE=t=>t(),Jd=Symbol(),$l=Symbol();function Tc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];wc(s)&&wc(r)&&t.hasOwnProperty(n)&&!ze(r)&&!xn(r)?t[n]=Tc(s,r):t[n]=r}return t}const UE=Symbol();function jE(t){return!wc(t)||!t.hasOwnProperty(UE)}const{assign:Zn}=Object;function BE(t){return!!(ze(t)&&t.effect)}function $E(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const d=Vv(n.state.value[t]);return Zn(d,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=au(He(()=>{Wa(n);const E=n._s.get(t);return o[g].call(E,E)})),p),{}))}return c=em(t,u,e,n,r,!0),c}function em(t,e,n={},r,s,i){let o;const l=Zn({actions:{}},n),c={deep:!0};let u,d,p=[],g=[],E;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),Ue({});let P;function N(y){let _;u=d=!1,typeof y=="function"?(y(r.state.value[t]),_={type:Ei.patchFunction,storeId:t,events:E}):(Tc(r.state.value[t],y),_={type:Ei.patchObject,payload:y,storeId:t,events:E});const I=P=Symbol();qr().then(()=>{P===I&&(u=!0)}),d=!0,is(p,_,r.state.value[t])}const x=i?function(){const{state:_}=n,I=_?_():{};this.$patch(b=>{Zn(b,I)})}:Zg;function O(){o.stop(),p=[],g=[],r._s.delete(t)}const M=(y,_="")=>{if(Jd in y)return y[$l]=_,y;const I=function(){Wa(r);const b=Array.from(arguments),v=[],T=[];function Ee(X){v.push(X)}function Be(X){T.push(X)}is(g,{args:b,name:I[$l],store:J,after:Ee,onError:Be});let be;try{be=y.apply(this&&this.$id===t?this:J,b)}catch(X){throw is(T,X),X}return be instanceof Promise?be.then(X=>(is(v,X),X)).catch(X=>(is(T,X),Promise.reject(X))):(is(v,be),be)};return I[Jd]=!0,I[$l]=_,I},U={_p:r,$id:t,$onAction:Yd.bind(null,g),$patch:N,$reset:x,$subscribe(y,_={}){const I=Yd(p,y,_.detached,()=>b()),b=o.run(()=>ms(()=>r.state.value[t],v=>{(_.flush==="sync"?d:u)&&y({storeId:t,type:Ei.direct,events:E},v)},Zn({},c,_)));return I},$dispose:O},J=zi(U);r._s.set(t,J);const R=(r._a&&r._a.runWithContext||FE)(()=>r._e.run(()=>(o=Bp()).run(()=>e({action:M}))));for(const y in R){const _=R[y];if(ze(_)&&!BE(_)||xn(_))i||(S&&jE(_)&&(ze(_)?_.value=S[y]:Tc(_,S[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const I=M(_,y);R[y]=I,l.actions[y]=_}}return Zn(J,R),Zn(Ie(J),R),Object.defineProperty(J,"$state",{get:()=>r.state.value[t],set:y=>{N(_=>{Zn(_,y)})}}),r._p.forEach(y=>{Zn(J,o.run(()=>y({store:J,app:r._a,pinia:r,options:l})))}),S&&i&&n.hydrate&&n.hydrate(J.$state,S),u=!0,d=!0,J}/*! #__NO_SIDE_EFFECTS__ */function tm(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const u=Hv();return l=l||(u?Kt(Xg,null):null),l&&Wa(l),l=Jg,l._s.has(r)||(i?em(r,e,s,l):$E(r,s,l)),l._s.get(r)}return o.$id=r,o}/**
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
 *//**
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
 */const nm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,E=u&63;c||(E=64,o||(g=64)),r.push(n[d],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new HE;const g=i<<2|l>>4;if(r.push(g),u!==64){const E=l<<4&240|u>>2;if(r.push(E),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WE=function(t){const e=nm(t);return rm.encodeByteArray(e,!0)},da=function(t){return WE(t).replace(/\./g,"")},sm=function(t){try{return rm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function KE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GE=()=>KE().__FIREBASE_DEFAULTS__,zE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sm(t[1]);return e&&JSON.parse(e)},Ka=()=>{try{return GE()||zE()||QE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},im=t=>{var e,n;return(n=(e=Ka())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},YE=t=>{const e=im(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},om=()=>{var t;return(t=Ka())===null||t===void 0?void 0:t.config},am=t=>{var e;return(e=Ka())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class JE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function XE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[da(JSON.stringify(n)),da(JSON.stringify(o)),l].join(".")}/**
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
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function ew(){var t;const e=(t=Ka())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sw(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iw(){return!ew()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ow(){try{return typeof indexedDB=="object"}catch{return!1}}function aw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const lw="FirebaseError";class qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lw,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?cw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new qn(s,l,r)}}function cw(t,e){return t.replace(uw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const uw=/\{\$([^}]+)}/g;function hw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xd(i)&&Xd(o)){if(!fa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xd(t){return t!==null&&typeof t=="object"}/**
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
 */function Xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ai(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dw(t,e){const n=new fw(t,e);return n.subscribe.bind(n)}class fw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ql),s.error===void 0&&(s.error=ql),s.complete===void 0&&(s.complete=ql);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ql(){}/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}class Wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vr="[DEFAULT]";/**
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
 */class gw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_w(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mw(t){return t===Vr?void 0:t}function _w(t){return t.instantiationMode==="EAGER"}/**
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
 */class yw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const vw={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},Ew=ve.INFO,ww={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},Tw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ww[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gu{constructor(e){this.name=e,this._logLevel=Ew,this._logHandler=Tw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const Iw=(t,e)=>e.some(n=>t instanceof n);let Zd,ef;function bw(){return Zd||(Zd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Aw(){return ef||(ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lm=new WeakMap,Ic=new WeakMap,cm=new WeakMap,Hl=new WeakMap,mu=new WeakMap;function Rw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lm.set(n,t)}).catch(()=>{}),mu.set(e,t),e}function Sw(t){if(Ic.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ic.set(t,e)}let bc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pw(t){bc=t(bc)}function Cw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wl(this),e,...n);return cm.set(r,e.sort?e.sort():[e]),hr(r)}:Aw().includes(t)?function(...e){return t.apply(Wl(this),e),hr(lm.get(this))}:function(...e){return hr(t.apply(Wl(this),e))}}function kw(t){return typeof t=="function"?Cw(t):(t instanceof IDBTransaction&&Sw(t),Iw(t,bw())?new Proxy(t,bc):t)}function hr(t){if(t instanceof IDBRequest)return Rw(t);if(Hl.has(t))return Hl.get(t);const e=kw(t);return e!==t&&(Hl.set(t,e),mu.set(e,t)),e}const Wl=t=>mu.get(t);function xw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=hr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(hr(o.result),c.oldVersion,c.newVersion,hr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Dw=["get","getKey","getAll","getAllKeys","count"],Nw=["put","add","delete","clear"],Kl=new Map;function tf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kl.get(e))return Kl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Nw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Dw.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Kl.set(e,i),i}Pw(t=>({...t,get:(e,n,r)=>tf(e,n)||t.get(e,n,r),has:(e,n)=>!!tf(e,n)||t.has(e,n)}));/**
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
 */class Vw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ow(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ow(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ac="@firebase/app",nf="0.10.13";/**
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
 */const Fn=new gu("@firebase/app"),Mw="@firebase/app-compat",Lw="@firebase/analytics-compat",Fw="@firebase/analytics",Uw="@firebase/app-check-compat",jw="@firebase/app-check",Bw="@firebase/auth",$w="@firebase/auth-compat",qw="@firebase/database",Hw="@firebase/data-connect",Ww="@firebase/database-compat",Kw="@firebase/functions",Gw="@firebase/functions-compat",zw="@firebase/installations",Qw="@firebase/installations-compat",Yw="@firebase/messaging",Jw="@firebase/messaging-compat",Xw="@firebase/performance",Zw="@firebase/performance-compat",eT="@firebase/remote-config",tT="@firebase/remote-config-compat",nT="@firebase/storage",rT="@firebase/storage-compat",sT="@firebase/firestore",iT="@firebase/vertexai-preview",oT="@firebase/firestore-compat",aT="firebase",lT="10.14.1";/**
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
 */const Rc="[DEFAULT]",cT={[Ac]:"fire-core",[Mw]:"fire-core-compat",[Fw]:"fire-analytics",[Lw]:"fire-analytics-compat",[jw]:"fire-app-check",[Uw]:"fire-app-check-compat",[Bw]:"fire-auth",[$w]:"fire-auth-compat",[qw]:"fire-rtdb",[Hw]:"fire-data-connect",[Ww]:"fire-rtdb-compat",[Kw]:"fire-fn",[Gw]:"fire-fn-compat",[zw]:"fire-iid",[Qw]:"fire-iid-compat",[Yw]:"fire-fcm",[Jw]:"fire-fcm-compat",[Xw]:"fire-perf",[Zw]:"fire-perf-compat",[eT]:"fire-rc",[tT]:"fire-rc-compat",[nT]:"fire-gcs",[rT]:"fire-gcs-compat",[sT]:"fire-fst",[oT]:"fire-fst-compat",[iT]:"fire-vertex","fire-js":"fire-js",[aT]:"fire-js-all"};/**
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
 */const pa=new Map,uT=new Map,Sc=new Map;function rf(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(Sc.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;Sc.set(e,t);for(const n of pa.values())rf(n,t);for(const n of uT.values())rf(n,t);return!0}function _u(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t.settings!==void 0}/**
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
 */const hT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new Ji("app","Firebase",hT);/**
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
 */class dT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const Os=lT;function um(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw dr.create("bad-app-name",{appName:String(s)});if(n||(n=om()),!n)throw dr.create("no-options");const i=pa.get(s);if(i){if(fa(n,i.options)&&fa(r,i.config))return i;throw dr.create("duplicate-app",{appName:s})}const o=new yw(s);for(const c of Sc.values())o.addComponent(c);const l=new dT(n,r,o);return pa.set(s,l),l}function hm(t=Rc){const e=pa.get(t);if(!e&&t===Rc&&om())return um();if(!e)throw dr.create("no-app",{appName:t});return e}function fr(t,e,n){var r;let s=(r=cT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(l.join(" "));return}As(new Wr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const fT="firebase-heartbeat-database",pT=1,Oi="firebase-heartbeat-store";let Gl=null;function dm(){return Gl||(Gl=xw(fT,pT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oi)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),Gl}async function gT(t){try{const n=(await dm()).transaction(Oi),r=await n.objectStore(Oi).get(fm(t));return await n.done,r}catch(e){if(e instanceof qn)Fn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function sf(t,e){try{const r=(await dm()).transaction(Oi,"readwrite");await r.objectStore(Oi).put(e,fm(t)),await r.done}catch(n){if(n instanceof qn)Fn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function fm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mT=1024,_T=30*24*60*60*1e3;class yT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ET(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=of();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=_T}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=of(),{heartbeatsToSend:r,unsentEntries:s}=vT(this._heartbeatsCache.heartbeats),i=da(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Fn.warn(n),""}}}function of(){return new Date().toISOString().substring(0,10)}function vT(t,e=mT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),af(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),af(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ET{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ow()?aw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function af(t){return da(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wT(t){As(new Wr("platform-logger",e=>new Vw(e),"PRIVATE")),As(new Wr("heartbeat",e=>new yT(e),"PRIVATE")),fr(Ac,nf,t),fr(Ac,nf,"esm2017"),fr("fire-js","")}wT("");var TT="firebase",IT="10.14.1";/**
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
 */fr(TT,IT,"app");function yu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function pm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bT=pm,gm=new Ji("auth","Firebase",pm());/**
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
 */const ga=new gu("@firebase/auth");function AT(t,...e){ga.logLevel<=ve.WARN&&ga.warn(`Auth (${Os}): ${t}`,...e)}function Wo(t,...e){ga.logLevel<=ve.ERROR&&ga.error(`Auth (${Os}): ${t}`,...e)}/**
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
 */function Qt(t,...e){throw Eu(t,...e)}function tn(t,...e){return Eu(t,...e)}function vu(t,e,n){const r=Object.assign(Object.assign({},bT()),{[e]:n});return new Ji("auth","Firebase",r).create(e,{appName:t.name})}function Dn(t){return vu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function RT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Qt(t,"argument-error"),vu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Eu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gm.create(t,...e)}function ue(t,e,...n){if(!t)throw Eu(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wo(e),new Error(e)}function Un(t,e){t||Pn(e)}/**
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
 */function Pc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ST(){return lf()==="http:"||lf()==="https:"}function lf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function PT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ST()||nw()||"connection"in navigator)?navigator.onLine:!0}function CT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=ZE()||rw()}get(){return PT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wu(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xT=new Zi(3e4,6e4);function Er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wr(t,e,n,r,s={}){return _m(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Xi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return tw()||(u.referrerPolicy="no-referrer"),mm.fetch()(ym(t,t.config.apiHost,n,l),u)})}async function _m(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kT),e);try{const s=new NT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw No(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw No(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw No(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw No(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vu(t,d,u);Qt(t,d)}}catch(s){if(s instanceof qn)throw s;Qt(t,"network-request-failed",{message:String(s)})}}async function eo(t,e,n,r,s={}){const i=await wr(t,e,n,r,s);return"mfaPendingCredential"in i&&Qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ym(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?wu(t.config,s):`${t.config.apiScheme}://${s}`}function DT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class NT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),xT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function No(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}function cf(t){return t!==void 0&&t.enterprise!==void 0}class VT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return DT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function OT(t,e){return wr(t,"GET","/v2/recaptchaConfig",Er(t,e))}/**
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
 */async function MT(t,e){return wr(t,"POST","/v1/accounts:delete",e)}async function vm(t,e){return wr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LT(t,e=!1){const n=at(t),r=await n.getIdToken(e),s=Tu(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wi(zl(s.auth_time)),issuedAtTime:wi(zl(s.iat)),expirationTime:wi(zl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zl(t){return Number(t)*1e3}function Tu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wo("JWT malformed, contained fewer than 3 sections"),null;try{const s=sm(n);return s?JSON.parse(s):(Wo("Failed to decode base64 JWT payload"),null)}catch(s){return Wo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function uf(t){const e=Tu(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qn&&FT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class UT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ma(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Mi(t,vm(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Em(i.providerUserInfo):[],l=BT(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Cc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function jT(t){const e=at(t);await ma(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Em(t){return t.map(e=>{var{providerId:n}=e,r=yu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $T(t,e){const n=await _m(t,{},async()=>{const r=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ym(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",mm.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qT(t,e){return wr(t,"POST","/v2/accounts:revokeToken",Er(t,e))}/**
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
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=uf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await $T(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ys;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Yn(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=yu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Cc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mi(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LT(this,e)}reload(){return jT(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ma(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await Mi(this,MT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:M,emailVerified:U,isAnonymous:J,providerData:ne,stsTokenManager:R}=n;ue(M&&R,e,"internal-error");const y=ys.fromJSON(this.name,R);ue(typeof M=="string",e,"internal-error"),Yn(p,e.name),Yn(g,e.name),ue(typeof U=="boolean",e,"internal-error"),ue(typeof J=="boolean",e,"internal-error"),Yn(E,e.name),Yn(S,e.name),Yn(P,e.name),Yn(N,e.name),Yn(x,e.name),Yn(O,e.name);const _=new Cn({uid:M,auth:e,email:g,emailVerified:U,displayName:p,isAnonymous:J,photoURL:S,phoneNumber:E,tenantId:P,stsTokenManager:y,createdAt:x,lastLoginAt:O});return ne&&Array.isArray(ne)&&(_.providerData=ne.map(I=>Object.assign({},I))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new ys;s.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ma(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Em(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ys;l.updateFromIdToken(r);const c=new Cn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Cc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const hf=new Map;function kn(t){Un(t instanceof Function,"Expected a class definition");let e=hf.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hf.set(t,e),e)}/**
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
 */class wm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wm.type="NONE";const df=wm;/**
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
 */function Ko(t,e,n){return`firebase:${t}:${e}:${n}`}class vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ko(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ko("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vs(kn(df),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||kn(df);const o=Ko(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Cn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new vs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new vs(i,e,r))}}/**
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
 */function ff(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Am(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sm(e))return"Blackberry";if(Pm(e))return"Webos";if(Im(e))return"Safari";if((e.includes("chrome/")||bm(e))&&!e.includes("edge/"))return"Chrome";if(Rm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tm(t=St()){return/firefox\//i.test(t)}function Im(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bm(t=St()){return/crios\//i.test(t)}function Am(t=St()){return/iemobile/i.test(t)}function Rm(t=St()){return/android/i.test(t)}function Sm(t=St()){return/blackberry/i.test(t)}function Pm(t=St()){return/webos/i.test(t)}function Iu(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HT(t=St()){var e;return Iu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WT(){return sw()&&document.documentMode===10}function Cm(t=St()){return Iu(t)||Rm(t)||Pm(t)||Sm(t)||/windows phone/i.test(t)||Am(t)}/**
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
 */function km(t,e=[]){let n;switch(t){case"Browser":n=ff(St());break;case"Worker":n=`${ff(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
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
 */class KT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function GT(t,e={}){return wr(t,"GET","/v2/passwordPolicy",Er(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const zT=6;class QT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class YT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pf(this),this.idTokenSubscription=new pf(this),this.beforeStateQueue=new KT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vm(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ma(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(Dn(this));const n=e?at(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GT(this),n=new QT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=km(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tr(t){return at(t)}class pf{constructor(e){this.auth=e,this.observer=null,this.addObserver=dw(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ga={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JT(t){Ga=t}function xm(t){return Ga.loadJS(t)}function XT(){return Ga.recaptchaEnterpriseScript}function ZT(){return Ga.gapiScript}function eI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const tI="recaptcha-enterprise",nI="NO_RECAPTCHA";class rI{constructor(e){this.type=tI,this.auth=Tr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{OT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new VT(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;cf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(nI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&cf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=XT();c.length!==0&&(c+=l),xm(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function gf(t,e,n,r=!1){const s=new rI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function kc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await gf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await gf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function sI(t,e){const n=_u(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fa(i,e??{}))return s;Qt(s,"already-initialized")}return n.initialize({options:e})}function iI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oI(t,e,n){const r=Tr(t);ue(r._canInitEmulator,r,"emulator-config-failed"),ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Dm(e),{host:o,port:l}=aI(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||lI()}function Dm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aI(t){const e=Dm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:mf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:mf(o)}}}function mf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function cI(t,e){return wr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function uI(t,e){return eo(t,"POST","/v1/accounts:signInWithPassword",Er(t,e))}/**
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
 */async function hI(t,e){return eo(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}async function dI(t,e){return eo(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}/**
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
 */class Li extends bu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Li(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Li(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kc(e,n,"signInWithPassword",uI);case"emailLink":return hI(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kc(e,r,"signUpPassword",cI);case"emailLink":return dI(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Es(t,e){return eo(t,"POST","/v1/accounts:signInWithIdp",Er(t,e))}/**
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
 */const fI="http://localhost";class Kr extends bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=yu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Kr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:fI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
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
 */function pI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gI(t){const e=oi(ai(t)).link,n=e?oi(ai(e)).deep_link_id:null,r=oi(ai(t)).deep_link_id;return(r?oi(ai(r)).link:null)||r||n||e||t}class Au{constructor(e){var n,r,s,i,o,l;const c=oi(ai(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=pI((s=c.mode)!==null&&s!==void 0?s:null);ue(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=gI(e);try{return new Au(n)}catch{return null}}}/**
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
 */class Ms{constructor(){this.providerId=Ms.PROVIDER_ID}static credential(e,n){return Li._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Au.parseLink(n);return ue(r,"argument-error"),Li._fromEmailAndCode(e,r.code,r.tenantId)}}Ms.PROVIDER_ID="password";Ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ru{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class to extends Ru{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends to{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class Rn extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
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
 */class ir extends to{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class or extends to{constructor(){super("twitter.com")}static credential(e,n){return Kr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
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
 */async function mI(t,e){return eo(t,"POST","/v1/accounts:signUp",Er(t,e))}/**
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
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cn._fromIdTokenResponse(e,r,s),o=_f(r);return new Gr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=_f(r);return new Gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function _f(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _a extends qn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_a.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _a(e,n,r,s)}}function Nm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_a._fromErrorAndOperation(t,i,e,r):i})}async function _I(t,e,n=!1){const r=await Mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
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
 */async function yI(t,e,n=!1){const{auth:r}=t;if(Xt(r.app))return Promise.reject(Dn(r));const s="reauthenticate";try{const i=await Mi(t,Nm(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=Tu(i.idToken);ue(o,r,"internal-error");const{sub:l}=o;return ue(t.uid===l,r,"user-mismatch"),Gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),i}}/**
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
 */async function Vm(t,e,n=!1){if(Xt(t.app))return Promise.reject(Dn(t));const r="signIn",s=await Nm(t,r,e),i=await Gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function vI(t,e){return Vm(Tr(t),e)}/**
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
 */async function Om(t){const e=Tr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function EI(t,e,n){if(Xt(t.app))return Promise.reject(Dn(t));const r=Tr(t),o=await kc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mI).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Om(t),c}),l=await Gr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function wI(t,e,n){return Xt(t.app)?Promise.reject(Dn(t)):vI(at(t),Ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Om(t),r})}function TI(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function II(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function bI(t,e,n,r){return at(t).onAuthStateChanged(e,n,r)}function AI(t){return at(t).signOut()}const ya="__sak";/**
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
 */class Mm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ya,"1"),this.storage.removeItem(ya),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const RI=1e3,SI=10;class Lm extends Mm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);WT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,SI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lm.type="LOCAL";const PI=Lm;/**
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
 */class Fm extends Mm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fm.type="SESSION";const Um=Fm;/**
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
 */function CI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class za{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new za(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await CI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}za.receivers=[];/**
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
 */function Su(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Su("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fn(){return window}function xI(t){fn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function jm(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function DI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function VI(){return jm()?self:null}/**
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
 */const Bm="firebaseLocalStorageDb",OI=1,va="firebaseLocalStorage",$m="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qa(t,e){return t.transaction([va],e?"readwrite":"readonly").objectStore(va)}function MI(){const t=indexedDB.deleteDatabase(Bm);return new no(t).toPromise()}function xc(){const t=indexedDB.open(Bm,OI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(va,{keyPath:$m})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(va)?e(r):(r.close(),await MI(),e(await xc()))})})}async function yf(t,e,n){const r=Qa(t,!0).put({[$m]:e,value:n});return new no(r).toPromise()}async function LI(t,e){const n=Qa(t,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function vf(t,e){const n=Qa(t,!0).delete(e);return new no(n).toPromise()}const FI=800,UI=3;class qm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>UI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=za._getInstance(VI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DI(),!this.activeServiceWorker)return;this.sender=new kI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xc();return await yf(e,ya,"1"),await vf(e,ya),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qa(s,!1).getAll();return new no(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qm.type="LOCAL";const jI=qm;new Zi(3e4,6e4);/**
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
 */function Hm(t,e){return e?kn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Pu extends bu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BI(t){return Vm(t.auth,new Pu(t),t.bypassAuthState)}function $I(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),yI(n,new Pu(t),t.bypassAuthState)}async function qI(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),_I(n,new Pu(t),t.bypassAuthState)}/**
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
 */class Wm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BI;case"linkViaPopup":case"linkViaRedirect":return qI;case"reauthViaPopup":case"reauthViaRedirect":return $I;default:Qt(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const HI=new Zi(2e3,1e4);async function WI(t,e,n){if(Xt(t.app))return Promise.reject(tn(t,"operation-not-supported-in-this-environment"));const r=Tr(t);RT(t,e,Ru);const s=Hm(r,n);return new Lr(r,"signInViaPopup",e,s).executeNotNull()}class Lr extends Wm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=Su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HI.get())};e()}}Lr.currentPopupAction=null;/**
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
 */const KI="pendingRedirect",Go=new Map;class GI extends Wm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Go.get(this.auth._key());if(!e){try{const r=await zI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Go.set(this.auth._key(),e)}return this.bypassAuthState||Go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zI(t,e){const n=JI(e),r=YI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function QI(t,e){Go.set(t._key(),e)}function YI(t){return kn(t._redirectPersistence)}function JI(t){return Ko(KI,t.config.apiKey,t.name)}async function XI(t,e,n=!1){if(Xt(t.app))return Promise.reject(Dn(t));const r=Tr(t),s=Hm(r,e),o=await new GI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ZI=10*60*1e3;class eb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Km(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ef(e))}saveEventToCache(e){this.cachedEventUids.add(Ef(e)),this.lastProcessedEventTime=Date.now()}}function Ef(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Km({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Km(t);default:return!1}}/**
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
 */async function nb(t,e={}){return wr(t,"GET","/v1/projects",e)}/**
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
 */const rb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sb=/^https?/;async function ib(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nb(t);for(const n of e)try{if(ob(n))return}catch{}Qt(t,"unauthorized-domain")}function ob(t){const e=Pc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sb.test(n))return!1;if(rb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ab=new Zi(3e4,6e4);function wf(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lb(t){return new Promise((e,n)=>{var r,s,i;function o(){wf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wf(),n(tn(t,"network-request-failed"))},timeout:ab.get()})}if(!((s=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=fn().gapi)===null||i===void 0)&&i.load)o();else{const l=eI("iframefcb");return fn()[l]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},xm(`${ZT()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw zo=null,e})}let zo=null;function cb(t){return zo=zo||lb(t),zo}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ub=new Zi(5e3,15e3),hb="__/auth/iframe",db="emulator/auth/iframe",fb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gb(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wu(e,db):`https://${t.config.authDomain}/${hb}`,r={apiKey:e.apiKey,appName:t.name,v:Os},s=pb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Xi(r).slice(1)}`}async function mb(t){const e=await cb(t),n=fn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:gb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=fn().setTimeout(()=>{i(o)},ub.get());function c(){fn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const _b={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yb=500,vb=600,Eb="_blank",wb="http://localhost";class Tf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tb(t,e,n,r=yb,s=vb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},_b),{width:r.toString(),height:s.toString(),top:i,left:o}),u=St().toLowerCase();n&&(l=bm(u)?Eb:n),Tm(u)&&(e=e||wb,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[E,S])=>`${g}${E}=${S},`,"");if(HT(u)&&l!=="_self")return Ib(e||"",l),new Tf(null);const p=window.open(e||"",l,d);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new Tf(p)}function Ib(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bb="__/auth/handler",Ab="emulator/auth/handler",Rb=encodeURIComponent("fac");async function If(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:s};if(e instanceof Ru){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries(i||{}))o[d]=p}if(e instanceof to){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${Rb}=${encodeURIComponent(c)}`:"";return`${Sb(t)}?${Xi(l).slice(1)}${u}`}function Sb({config:t}){return t.emulator?wu(t,Ab):`https://${t.authDomain}/${bb}`}/**
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
 */const Ql="webStorageSupport";class Pb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Um,this._completeRedirectFn=XI,this._overrideRedirectResult=QI}async _openPopup(e,n,r,s){var i;Un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await If(e,n,r,Pc(),s);return Tb(e,o,Su())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await If(e,n,r,Pc(),s);return xI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mb(e),r=new eb(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ql,{type:Ql},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ql];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ib(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cm()||Im()||Iu()}}const Cb=Pb;var bf="@firebase/auth",Af="1.7.9";/**
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
 */class kb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Db(t){As(new Wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:km(t)},u=new YT(r,s,i,c);return iI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),As(new Wr("auth-internal",e=>{const n=Tr(e.getProvider("auth").getImmediate());return(r=>new kb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(bf,Af,xb(t)),fr(bf,Af,"esm2017")}/**
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
 */const Nb=5*60,Vb=am("authIdTokenMaxAge")||Nb;let Rf=null;const Ob=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Vb)return;const s=n==null?void 0:n.token;Rf!==s&&(Rf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Mb(t=hm()){const e=_u(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sI(t,{popupRedirectResolver:Cb,persistence:[jI,PI,Um]}),r=am("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Ob(i.toString());II(n,o,()=>o(n.currentUser)),TI(n,l=>o(l))}}const s=im("auth");return s&&oI(n,`http://${s}`),n}function Lb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}JT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Lb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Db("Browser");var Sf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $r,Gm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,y){function _(){}_.prototype=y.prototype,R.D=y.prototype,R.prototype=new _,R.prototype.constructor=R,R.C=function(I,b,v){for(var T=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)T[Ee-2]=arguments[Ee];return y.prototype[b].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,y,_){_||(_=0);var I=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)I[b]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(b=0;16>b;++b)I[b]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=R.g[0],_=R.g[1],b=R.g[2];var v=R.g[3],T=y+(v^_&(b^v))+I[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=v+(b^y&(_^b))+I[1]+3905402710&4294967295,v=y+(T<<12&4294967295|T>>>20),T=b+(_^v&(y^_))+I[2]+606105819&4294967295,b=v+(T<<17&4294967295|T>>>15),T=_+(y^b&(v^y))+I[3]+3250441966&4294967295,_=b+(T<<22&4294967295|T>>>10),T=y+(v^_&(b^v))+I[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=v+(b^y&(_^b))+I[5]+1200080426&4294967295,v=y+(T<<12&4294967295|T>>>20),T=b+(_^v&(y^_))+I[6]+2821735955&4294967295,b=v+(T<<17&4294967295|T>>>15),T=_+(y^b&(v^y))+I[7]+4249261313&4294967295,_=b+(T<<22&4294967295|T>>>10),T=y+(v^_&(b^v))+I[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=v+(b^y&(_^b))+I[9]+2336552879&4294967295,v=y+(T<<12&4294967295|T>>>20),T=b+(_^v&(y^_))+I[10]+4294925233&4294967295,b=v+(T<<17&4294967295|T>>>15),T=_+(y^b&(v^y))+I[11]+2304563134&4294967295,_=b+(T<<22&4294967295|T>>>10),T=y+(v^_&(b^v))+I[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=v+(b^y&(_^b))+I[13]+4254626195&4294967295,v=y+(T<<12&4294967295|T>>>20),T=b+(_^v&(y^_))+I[14]+2792965006&4294967295,b=v+(T<<17&4294967295|T>>>15),T=_+(y^b&(v^y))+I[15]+1236535329&4294967295,_=b+(T<<22&4294967295|T>>>10),T=y+(b^v&(_^b))+I[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=v+(_^b&(y^_))+I[6]+3225465664&4294967295,v=y+(T<<9&4294967295|T>>>23),T=b+(y^_&(v^y))+I[11]+643717713&4294967295,b=v+(T<<14&4294967295|T>>>18),T=_+(v^y&(b^v))+I[0]+3921069994&4294967295,_=b+(T<<20&4294967295|T>>>12),T=y+(b^v&(_^b))+I[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=v+(_^b&(y^_))+I[10]+38016083&4294967295,v=y+(T<<9&4294967295|T>>>23),T=b+(y^_&(v^y))+I[15]+3634488961&4294967295,b=v+(T<<14&4294967295|T>>>18),T=_+(v^y&(b^v))+I[4]+3889429448&4294967295,_=b+(T<<20&4294967295|T>>>12),T=y+(b^v&(_^b))+I[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=v+(_^b&(y^_))+I[14]+3275163606&4294967295,v=y+(T<<9&4294967295|T>>>23),T=b+(y^_&(v^y))+I[3]+4107603335&4294967295,b=v+(T<<14&4294967295|T>>>18),T=_+(v^y&(b^v))+I[8]+1163531501&4294967295,_=b+(T<<20&4294967295|T>>>12),T=y+(b^v&(_^b))+I[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=v+(_^b&(y^_))+I[2]+4243563512&4294967295,v=y+(T<<9&4294967295|T>>>23),T=b+(y^_&(v^y))+I[7]+1735328473&4294967295,b=v+(T<<14&4294967295|T>>>18),T=_+(v^y&(b^v))+I[12]+2368359562&4294967295,_=b+(T<<20&4294967295|T>>>12),T=y+(_^b^v)+I[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=v+(y^_^b)+I[8]+2272392833&4294967295,v=y+(T<<11&4294967295|T>>>21),T=b+(v^y^_)+I[11]+1839030562&4294967295,b=v+(T<<16&4294967295|T>>>16),T=_+(b^v^y)+I[14]+4259657740&4294967295,_=b+(T<<23&4294967295|T>>>9),T=y+(_^b^v)+I[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=v+(y^_^b)+I[4]+1272893353&4294967295,v=y+(T<<11&4294967295|T>>>21),T=b+(v^y^_)+I[7]+4139469664&4294967295,b=v+(T<<16&4294967295|T>>>16),T=_+(b^v^y)+I[10]+3200236656&4294967295,_=b+(T<<23&4294967295|T>>>9),T=y+(_^b^v)+I[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=v+(y^_^b)+I[0]+3936430074&4294967295,v=y+(T<<11&4294967295|T>>>21),T=b+(v^y^_)+I[3]+3572445317&4294967295,b=v+(T<<16&4294967295|T>>>16),T=_+(b^v^y)+I[6]+76029189&4294967295,_=b+(T<<23&4294967295|T>>>9),T=y+(_^b^v)+I[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=v+(y^_^b)+I[12]+3873151461&4294967295,v=y+(T<<11&4294967295|T>>>21),T=b+(v^y^_)+I[15]+530742520&4294967295,b=v+(T<<16&4294967295|T>>>16),T=_+(b^v^y)+I[2]+3299628645&4294967295,_=b+(T<<23&4294967295|T>>>9),T=y+(b^(_|~v))+I[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=v+(_^(y|~b))+I[7]+1126891415&4294967295,v=y+(T<<10&4294967295|T>>>22),T=b+(y^(v|~_))+I[14]+2878612391&4294967295,b=v+(T<<15&4294967295|T>>>17),T=_+(v^(b|~y))+I[5]+4237533241&4294967295,_=b+(T<<21&4294967295|T>>>11),T=y+(b^(_|~v))+I[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=v+(_^(y|~b))+I[3]+2399980690&4294967295,v=y+(T<<10&4294967295|T>>>22),T=b+(y^(v|~_))+I[10]+4293915773&4294967295,b=v+(T<<15&4294967295|T>>>17),T=_+(v^(b|~y))+I[1]+2240044497&4294967295,_=b+(T<<21&4294967295|T>>>11),T=y+(b^(_|~v))+I[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=v+(_^(y|~b))+I[15]+4264355552&4294967295,v=y+(T<<10&4294967295|T>>>22),T=b+(y^(v|~_))+I[6]+2734768916&4294967295,b=v+(T<<15&4294967295|T>>>17),T=_+(v^(b|~y))+I[13]+1309151649&4294967295,_=b+(T<<21&4294967295|T>>>11),T=y+(b^(_|~v))+I[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=v+(_^(y|~b))+I[11]+3174756917&4294967295,v=y+(T<<10&4294967295|T>>>22),T=b+(y^(v|~_))+I[2]+718787259&4294967295,b=v+(T<<15&4294967295|T>>>17),T=_+(v^(b|~y))+I[9]+3951481745&4294967295,R.g[0]=R.g[0]+y&4294967295,R.g[1]=R.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,R.g[2]=R.g[2]+b&4294967295,R.g[3]=R.g[3]+v&4294967295}r.prototype.u=function(R,y){y===void 0&&(y=R.length);for(var _=y-this.blockSize,I=this.B,b=this.h,v=0;v<y;){if(b==0)for(;v<=_;)s(this,R,v),v+=this.blockSize;if(typeof R=="string"){for(;v<y;)if(I[b++]=R.charCodeAt(v++),b==this.blockSize){s(this,I),b=0;break}}else for(;v<y;)if(I[b++]=R[v++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var y=1;y<R.length-8;++y)R[y]=0;var _=8*this.o;for(y=R.length-8;y<R.length;++y)R[y]=_&255,_/=256;for(this.u(R),R=Array(16),y=_=0;4>y;++y)for(var I=0;32>I;I+=8)R[_++]=this.g[y]>>>I&255;return R};function i(R,y){var _=l;return Object.prototype.hasOwnProperty.call(_,R)?_[R]:_[R]=y(R)}function o(R,y){this.h=y;for(var _=[],I=!0,b=R.length-1;0<=b;b--){var v=R[b]|0;I&&v==y||(_[b]=v,I=!1)}this.g=_}var l={};function c(R){return-128<=R&&128>R?i(R,function(y){return new o([y|0],0>y?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return N(u(-R));for(var y=[],_=1,I=0;R>=_;I++)y[I]=R/_|0,_*=4294967296;return new o(y,0)}function d(R,y){if(R.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(R.charAt(0)=="-")return N(d(R.substring(1),y));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),I=p,b=0;b<R.length;b+=8){var v=Math.min(8,R.length-b),T=parseInt(R.substring(b,b+v),y);8>v?(v=u(Math.pow(y,v)),I=I.j(v).add(u(T))):(I=I.j(_),I=I.add(u(T)))}return I}var p=c(0),g=c(1),E=c(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();for(var R=0,y=1,_=0;_<this.g.length;_++){var I=this.i(_);R+=(0<=I?I:4294967296+I)*y,y*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(S(this))return"0";if(P(this))return"-"+N(this).toString(R);for(var y=u(Math.pow(R,6)),_=this,I="";;){var b=U(_,y).g;_=x(_,b.j(y));var v=((0<_.g.length?_.g[0]:_.h)>>>0).toString(R);if(_=b,S(_))return v+I;for(;6>v.length;)v="0"+v;I=v+I}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function S(R){if(R.h!=0)return!1;for(var y=0;y<R.g.length;y++)if(R.g[y]!=0)return!1;return!0}function P(R){return R.h==-1}t.l=function(R){return R=x(this,R),P(R)?-1:S(R)?0:1};function N(R){for(var y=R.g.length,_=[],I=0;I<y;I++)_[I]=~R.g[I];return new o(_,~R.h).add(g)}t.abs=function(){return P(this)?N(this):this},t.add=function(R){for(var y=Math.max(this.g.length,R.g.length),_=[],I=0,b=0;b<=y;b++){var v=I+(this.i(b)&65535)+(R.i(b)&65535),T=(v>>>16)+(this.i(b)>>>16)+(R.i(b)>>>16);I=T>>>16,v&=65535,T&=65535,_[b]=T<<16|v}return new o(_,_[_.length-1]&-2147483648?-1:0)};function x(R,y){return R.add(N(y))}t.j=function(R){if(S(this)||S(R))return p;if(P(this))return P(R)?N(this).j(N(R)):N(N(this).j(R));if(P(R))return N(this.j(N(R)));if(0>this.l(E)&&0>R.l(E))return u(this.m()*R.m());for(var y=this.g.length+R.g.length,_=[],I=0;I<2*y;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<R.g.length;b++){var v=this.i(I)>>>16,T=this.i(I)&65535,Ee=R.i(b)>>>16,Be=R.i(b)&65535;_[2*I+2*b]+=T*Be,O(_,2*I+2*b),_[2*I+2*b+1]+=v*Be,O(_,2*I+2*b+1),_[2*I+2*b+1]+=T*Ee,O(_,2*I+2*b+1),_[2*I+2*b+2]+=v*Ee,O(_,2*I+2*b+2)}for(I=0;I<y;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=y;I<2*y;I++)_[I]=0;return new o(_,0)};function O(R,y){for(;(R[y]&65535)!=R[y];)R[y+1]+=R[y]>>>16,R[y]&=65535,y++}function M(R,y){this.g=R,this.h=y}function U(R,y){if(S(y))throw Error("division by zero");if(S(R))return new M(p,p);if(P(R))return y=U(N(R),y),new M(N(y.g),N(y.h));if(P(y))return y=U(R,N(y)),new M(N(y.g),y.h);if(30<R.g.length){if(P(R)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,I=y;0>=I.l(R);)_=J(_),I=J(I);var b=ne(_,1),v=ne(I,1);for(I=ne(I,2),_=ne(_,2);!S(I);){var T=v.add(I);0>=T.l(R)&&(b=b.add(_),v=T),I=ne(I,1),_=ne(_,1)}return y=x(R,b.j(y)),new M(b,y)}for(b=p;0<=R.l(y);){for(_=Math.max(1,Math.floor(R.m()/y.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),v=u(_),T=v.j(y);P(T)||0<T.l(R);)_-=I,v=u(_),T=v.j(y);S(v)&&(v=g),b=b.add(v),R=x(R,T)}return new M(b,R)}t.A=function(R){return U(this,R).h},t.and=function(R){for(var y=Math.max(this.g.length,R.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)&R.i(I);return new o(_,this.h&R.h)},t.or=function(R){for(var y=Math.max(this.g.length,R.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)|R.i(I);return new o(_,this.h|R.h)},t.xor=function(R){for(var y=Math.max(this.g.length,R.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)^R.i(I);return new o(_,this.h^R.h)};function J(R){for(var y=R.g.length+1,_=[],I=0;I<y;I++)_[I]=R.i(I)<<1|R.i(I-1)>>>31;return new o(_,R.h)}function ne(R,y){var _=y>>5;y%=32;for(var I=R.g.length-_,b=[],v=0;v<I;v++)b[v]=0<y?R.i(v+_)>>>y|R.i(v+_+1)<<32-y:R.i(v+_);return new o(b,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Gm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,$r=o}).apply(typeof Sf<"u"?Sf:typeof self<"u"?self:typeof window<"u"?window:{});var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zm,li,Qm,Qo,Dc,Ym,Jm,Xm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vo=="object"&&Vo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in f))break e;f=f[C]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,m=!1,C={next:function(){if(!m&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function E(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,C,V){for(var G=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)G[Ne-2]=arguments[Ne];return h.prototype[C].apply(m,G)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function N(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const C=a.length||0,V=m.length||0;a.length=C+V;for(let G=0;G<V;G++)a[C+G]=m[G]}else a.push(m)}}class x{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function U(a){return U[" "](a),a}U[" "]=function(){};var J=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function ne(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function R(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(f in m)a[f]=m[f];for(let V=0;V<_.length;V++)f=_[V],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function b(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function v(a){l.setTimeout(()=>{throw a},0)}function T(){var a=mt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ee{constructor(){this.h=this.g=null}add(h,f){const m=Be.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Be=new x(()=>new be,a=>a.reset());class be{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let X,_e=!1,mt=new Ee,tt=()=>{const a=l.Promise.resolve(void 0);X=()=>{a.then(qt)}};var qt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){v(f)}var h=Be;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}_e=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var Hn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Mt(a,h){if(qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(J){e:{try{U(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Mt.aa.h.call(this)}}S(Mt,qe);var Vt={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),ee=0;function Q(a,h,f,m,C){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=C,this.key=++ee,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ge(a){this.src=a,this.g={},this.h=0}ge.prototype.add=function(a,h,f,m,C){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var G=w(a,h,m,C);return-1<G?(h=a[G],f||(h.fa=!1)):(h=new Q(h,this.src,V,!!m,C),h.fa=f,a.push(h)),h};function xe(a,h){var f=h.type;if(f in a.g){var m=a.g[f],C=Array.prototype.indexOf.call(m,h,void 0),V;(V=0<=C)&&Array.prototype.splice.call(m,C,1),V&&(se(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function w(a,h,f,m){for(var C=0;C<a.length;++C){var V=a[C];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==m)return C}return-1}var A="closure_lm_"+(1e6*Math.random()|0),D={};function B(a,h,f,m,C){if(m&&m.once)return z(a,h,f,m,C);if(Array.isArray(h)){for(var V=0;V<h.length;V++)B(a,h[V],f,m,C);return null}return f=ce(f),a&&a[F]?a.K(h,f,u(m)?!!m.capture:!!m,C):L(a,h,f,!1,m,C)}function L(a,h,f,m,C,V){if(!h)throw Error("Invalid event type");var G=u(C)?!!C.capture:!!C,Ne=Y(a);if(Ne||(a[A]=Ne=new ge(a)),f=Ne.add(h,f,m,G,V),f.proxy)return f;if(m=$(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Hn||(C=G),C===void 0&&(C=!1),a.addEventListener(h.toString(),m,C);else if(a.attachEvent)a.attachEvent(q(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function a(f){return h.call(a.src,a.listener,f)}const h=oe;return a}function z(a,h,f,m,C){if(Array.isArray(h)){for(var V=0;V<h.length;V++)z(a,h[V],f,m,C);return null}return f=ce(f),a&&a[F]?a.L(h,f,u(m)?!!m.capture:!!m,C):L(a,h,f,!0,m,C)}function K(a,h,f,m,C){if(Array.isArray(h))for(var V=0;V<h.length;V++)K(a,h[V],f,m,C);else m=u(m)?!!m.capture:!!m,f=ce(f),a&&a[F]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=w(V,f,m,C),-1<f&&(se(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Y(a))&&(h=a.g[h.toString()],a=-1,h&&(a=w(h,f,m,C)),(f=-1<a?h[a]:null)&&W(f))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[F])xe(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(q(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=Y(h))?(xe(f,a),f.h==0&&(f.src=null,h[A]=null)):se(a)}}}function q(a){return a in D?D[a]:D[a]="on"+a}function oe(a,h){if(a.da)a=!0;else{h=new Mt(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&W(a),a=f.call(m,h)}return a}function Y(a){return a=a[A],a instanceof ge?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[re]||(a[re]=function(h){return a.handleEvent(h)}),a[re])}function le(){$e.call(this),this.i=new ge(this),this.M=this,this.F=null}S(le,$e),le.prototype[F]=!0,le.prototype.removeEventListener=function(a,h,f,m){K(this,a,h,f,m)};function me(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new qe(h,a);else if(h instanceof qe)h.target=h.target||a;else{var C=h;h=new qe(m,a),I(h,C)}if(C=!0,f)for(var V=f.length-1;0<=V;V--){var G=h.g=f[V];C=we(G,m,!0,h)&&C}if(G=h.g=a,C=we(G,m,!0,h)&&C,C=we(G,m,!1,h)&&C,f)for(V=0;V<f.length;V++)G=h.g=f[V],C=we(G,m,!1,h)&&C}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)se(f[m]);delete a.g[h],a.h--}}this.F=null},le.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},le.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function we(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,V=0;V<h.length;++V){var G=h[V];if(G&&!G.da&&G.capture==f){var Ne=G.listener,ht=G.ha||G.src;G.fa&&xe(a.i,G),C=Ne.call(ht,m)!==!1&&C}}return C&&!m.defaultPrevented}function ct(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function nt(a){a.g=ct(()=>{a.g=null,a.i&&(a.i=!1,nt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Lt extends $e{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:nt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rt(a){$e.call(this),this.h=a,this.g={}}S(rt,$e);var Wn=[];function Bs(a){ne(a.g,function(h,f){this.g.hasOwnProperty(f)&&W(h)},a),a.g={}}rt.prototype.N=function(){rt.aa.N.call(this),Bs(this)},rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ut=l.JSON.stringify,Ht=l.JSON.parse,ho=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Zr(){}Zr.prototype.h=null;function yh(a){return a.h||(a.h=a.i())}function vh(){}var $s={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _l(){qe.call(this,"d")}S(_l,qe);function yl(){qe.call(this,"c")}S(yl,qe);var Ar={},Eh=null;function fo(){return Eh=Eh||new le}Ar.La="serverreachability";function wh(a){qe.call(this,Ar.La,a)}S(wh,qe);function qs(a){const h=fo();me(h,new wh(h))}Ar.STAT_EVENT="statevent";function Th(a,h){qe.call(this,Ar.STAT_EVENT,a),this.stat=h}S(Th,qe);function Pt(a){const h=fo();me(h,new Th(h,a))}Ar.Ma="timingevent";function Ih(a,h){qe.call(this,Ar.Ma,a),this.size=h}S(Ih,qe);function Hs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ws(){this.g=!0}Ws.prototype.xa=function(){this.g=!1};function Cy(a,h,f,m,C,V){a.info(function(){if(a.g)if(V)for(var G="",Ne=V.split("&"),ht=0;ht<Ne.length;ht++){var Ae=Ne[ht].split("=");if(1<Ae.length){var _t=Ae[0];Ae=Ae[1];var yt=_t.split("_");G=2<=yt.length&&yt[1]=="type"?G+(_t+"="+Ae+"&"):G+(_t+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+h+`
`+f+`
`+G})}function ky(a,h,f,m,C,V,G){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+h+`
`+f+`
`+V+" "+G})}function es(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Dy(a,f)+(m?" "+m:"")})}function xy(a,h){a.info(function(){return"TIMEOUT: "+h})}Ws.prototype.info=function(){};function Dy(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var V=C[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<C.length;G++)C[G]=""}}}}return ut(f)}catch{return h}}var po={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vl;function go(){}S(go,Zr),go.prototype.g=function(){return new XMLHttpRequest},go.prototype.i=function(){return{}},vl=new go;function Kn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ah}function Ah(){this.i=null,this.g="",this.h=!1}var Rh={},El={};function wl(a,h,f){a.L=1,a.v=vo(yn(h)),a.m=f,a.P=!0,Sh(a,null)}function Sh(a,h){a.F=Date.now(),mo(a),a.A=yn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Bh(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Ah,a.g=id(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Lt(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Wn[0]=C.toString()),C=Wn);for(var V=0;V<C.length;V++){var G=B(f,C[V],m||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),qs(),Cy(a.i,a.u,a.A,a.l,a.R,a.m)}Kn.prototype.ca=function(a){a=a.target;const h=this.M;h&&vn(a)==3?h.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const yt=vn(this.g);var h=this.g.Ba();const rs=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||zh(this.g)))){this.J||yt!=4||h==7||(h==8||0>=rs?qs(3):qs(2)),Tl(this);var f=this.g.Z();this.X=f;t:if(Ph(this)){var m=zh(this.g);a="";var C=m.length,V=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rr(this),Ks(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(V&&h==C-1)});m.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,ky(this.i,this.u,this.A,this.l,this.R,yt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,ht=this.g;if((Ne=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Ne)){var Ae=Ne;break t}}Ae=null}if(f=Ae)es(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Il(this,f);else{this.o=!1,this.s=3,Pt(12),Rr(this),Ks(this);break e}}if(this.P){f=!0;let Yt;for(;!this.J&&this.C<G.length;)if(Yt=Ny(this,G),Yt==El){yt==4&&(this.s=4,Pt(14),f=!1),es(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Rh){this.s=4,Pt(15),es(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else es(this.i,this.l,Yt,null),Il(this,Yt);if(Ph(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||G.length!=0||this.h.h||(this.s=1,Pt(16),f=!1),this.o=this.o&&f,!f)es(this.i,this.l,G,"[Invalid Chunked Response]"),Rr(this),Ks(this);else if(0<G.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Cl(_t),_t.M=!0,Pt(11))}}else es(this.i,this.l,G,null),Il(this,G);yt==4&&Rr(this),this.o&&!this.J&&(yt==4?td(this.j,this):(this.o=!1,mo(this)))}else Yy(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Rr(this),Ks(this)}}}catch{}finally{}};function Ph(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ny(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?El:(f=Number(h.substring(f,m)),isNaN(f)?Rh:(m+=1,m+f>h.length?El:(h=h.slice(m,m+f),a.C=m+f,h)))}Kn.prototype.cancel=function(){this.J=!0,Rr(this)};function mo(a){a.S=Date.now()+a.I,Ch(a,a.I)}function Ch(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Hs(g(a.ba,a),h)}function Tl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(xy(this.i,this.A),this.L!=2&&(qs(),Pt(17)),Rr(this),this.s=2,Ks(this)):Ch(this,this.S-a)};function Ks(a){a.j.G==0||a.J||td(a.j,a)}function Rr(a){Tl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Bs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Il(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||bl(f.h,a))){if(!a.K&&bl(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ao(f),Io(f);else break e;Pl(f),Pt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Hs(g(f.Za,f),6e3));if(1>=Dh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Pr(f,11)}else if((a.K||f.g==a)&&Ao(f),!O(h))for(C=f.Da.g.parse(h),h=0;h<C.length;h++){let Ae=C[h];if(f.T=Ae[0],Ae=Ae[1],f.G==2)if(Ae[0]=="c"){f.K=Ae[1],f.ia=Ae[2];const _t=Ae[3];_t!=null&&(f.la=_t,f.j.info("VER="+f.la));const yt=Ae[4];yt!=null&&(f.Aa=yt,f.j.info("SVER="+f.Aa));const rs=Ae[5];rs!=null&&typeof rs=="number"&&0<rs&&(m=1.5*rs,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Yt=a.g;if(Yt){const So=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(So){var V=m.h;V.g||So.indexOf("spdy")==-1&&So.indexOf("quic")==-1&&So.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Al(V,V.h),V.h=null))}if(m.D){const kl=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;kl&&(m.ya=kl,Fe(m.I,m.D,kl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var G=a;if(m.qa=sd(m,m.J?m.ia:null,m.W),G.K){Nh(m.h,G);var Ne=G,ht=m.L;ht&&(Ne.I=ht),Ne.B&&(Tl(Ne),mo(Ne)),m.g=G}else Zh(m);0<f.i.length&&bo(f)}else Ae[0]!="stop"&&Ae[0]!="close"||Pr(f,7);else f.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?Pr(f,7):Sl(f):Ae[0]!="noop"&&f.l&&f.l.ta(Ae),f.v=0)}}qs(4)}catch{}}var Vy=class{constructor(a,h){this.g=a,this.map=h}};function kh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Dh(a){return a.h?1:a.g?a.g.size:0}function bl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Al(a,h){a.g?a.g.add(h):a.h=h}function Nh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}kh.prototype.cancel=function(){if(this.i=Vh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function Oy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function My(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function Oh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=My(a),m=Oy(a),C=m.length,V=0;V<C;V++)h.call(void 0,m[V],f&&f[V],a)}var Mh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ly(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),C=null;if(0<=m){var V=a[f].substring(0,m);C=a[f].substring(m+1)}else V=a[f];h(V,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Sr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Sr){this.h=a.h,_o(this,a.j),this.o=a.o,this.g=a.g,yo(this,a.s),this.l=a.l;var h=a.i,f=new Qs;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Lh(this,f),this.m=a.m}else a&&(h=String(a).match(Mh))?(this.h=!1,_o(this,h[1]||"",!0),this.o=Gs(h[2]||""),this.g=Gs(h[3]||"",!0),yo(this,h[4]),this.l=Gs(h[5]||"",!0),Lh(this,h[6]||"",!0),this.m=Gs(h[7]||"")):(this.h=!1,this.i=new Qs(null,this.h))}Sr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(zs(h,Fh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(zs(h,Fh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(zs(f,f.charAt(0)=="/"?jy:Uy,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",zs(f,$y)),a.join("")};function yn(a){return new Sr(a)}function _o(a,h,f){a.j=f?Gs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function yo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Lh(a,h,f){h instanceof Qs?(a.i=h,qy(a.i,a.h)):(f||(h=zs(h,By)),a.i=new Qs(h,a.h))}function Fe(a,h,f){a.i.set(h,f)}function vo(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Gs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Fy),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Fy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fh=/[#\/\?@]/g,Uy=/[#\?:]/g,jy=/[#\?]/g,By=/[#\?@]/g,$y=/#/g;function Qs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&Ly(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Qs.prototype,t.add=function(a,h){Gn(this),this.i=null,a=ts(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Uh(a,h){Gn(a),h=ts(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function jh(a,h){return Gn(a),h=ts(a,h),a.g.has(h)}t.forEach=function(a,h){Gn(this),this.g.forEach(function(f,m){f.forEach(function(C){a.call(h,C,m,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const C=a[m];for(let V=0;V<C.length;V++)f.push(h[m])}return f},t.V=function(a){Gn(this);let h=[];if(typeof a=="string")jh(this,a)&&(h=h.concat(this.g.get(ts(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Gn(this),this.i=null,a=ts(this,a),jh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Bh(a,h,f){Uh(a,h),0<f.length&&(a.i=null,a.g.set(ts(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const V=encodeURIComponent(String(m)),G=this.V(m);for(m=0;m<G.length;m++){var C=V;G[m]!==""&&(C+="="+encodeURIComponent(String(G[m]))),a.push(C)}}return this.i=a.join("&")};function ts(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function qy(a,h){h&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(f,m){var C=m.toLowerCase();m!=C&&(Uh(this,m),Bh(this,C,f))},a)),a.j=h}function Hy(a,h){const f=new Ws;if(l.Image){const m=new Image;m.onload=E(zn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=E(zn,f,"TestLoadImage: error",!1,h,m),m.onabort=E(zn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=E(zn,f,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Wy(a,h){const f=new Ws,m=new AbortController,C=setTimeout(()=>{m.abort(),zn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(V=>{clearTimeout(C),V.ok?zn(f,"TestPingServer: ok",!0,h):zn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),zn(f,"TestPingServer: error",!1,h)})}function zn(a,h,f,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(f)}catch{}}function Ky(){this.g=new ho}function Gy(a,h,f){const m=f||"";try{Oh(a,function(C,V){let G=C;u(C)&&(G=ut(C)),h.push(m+V+"="+encodeURIComponent(G))})}catch(C){throw h.push(m+"type="+encodeURIComponent("_badmap")),C}}function Eo(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Eo,Zr),Eo.prototype.g=function(){return new wo(this.l,this.j)},Eo.prototype.i=function(a){return function(){return a}}({});function wo(a,h){le.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(wo,le),t=wo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Js(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ys(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Js(this)),this.g&&(this.readyState=3,Js(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$h(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function $h(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ys(this):Js(this),this.readyState==3&&$h(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ys(this))},t.Qa=function(a){this.g&&(this.response=a,Ys(this))},t.ga=function(){this.g&&Ys(this)};function Ys(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Js(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Js(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qh(a){let h="";return ne(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function Rl(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=qh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Fe(a,h,f))}function Ke(a){le.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ke,le);var zy=/^https?$/i,Qy=["POST","PUT"];t=Ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vl.g(),this.v=this.o?yh(this.o):yh(vl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Hh(this,V);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)f.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())f.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Qy,h,void 0))||m||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of f)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gh(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Hh(this,V)}};function Hh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Wh(a),To(a)}function Wh(a){a.A||(a.A=!0,me(a,"complete"),me(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,me(this,"complete"),me(this,"abort"),To(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),To(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Kh(this):this.bb())},t.bb=function(){Kh(this)};function Kh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||vn(a)!=4||a.Z()!=2)){if(a.u&&vn(a)==4)ct(a.Ea,0,a);else if(me(a,"readystatechange"),vn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=G===0){var C=String(a.D).match(Mh)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!zy.test(C?C.toLowerCase():"")}f=m}if(f)me(a,"complete"),me(a,"success");else{a.m=6;try{var V=2<vn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Wh(a)}}finally{To(a)}}}}function To(a,h){if(a.g){Gh(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||me(a,"ready");try{f.onreadystatechange=m}catch{}}}function Gh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ht(h)}};function zh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Yy(a){const h={};a=(a.g&&2<=vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(O(a[m]))continue;var f=b(a[m]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[C]||[];h[C]=V,V.push(f)}R(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Qh(a){this.Aa=0,this.i=[],this.j=new Ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xs("baseRetryDelayMs",5e3,a),this.cb=Xs("retryDelaySeedMs",1e4,a),this.Wa=Xs("forwardChannelMaxRetries",2,a),this.wa=Xs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new kh(a&&a.concurrentRequestLimit),this.Da=new Ky,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qh.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,m){Pt(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=sd(this,null,this.W),bo(this)};function Sl(a){if(Yh(a),a.G==3){var h=a.U++,f=yn(a.I);if(Fe(f,"SID",a.K),Fe(f,"RID",h),Fe(f,"TYPE","terminate"),Zs(a,f),h=new Kn(a,a.j,h),h.L=2,h.v=vo(yn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=id(h.j,null),h.g.ea(h.v)),h.F=Date.now(),mo(h)}rd(a)}function Io(a){a.g&&(Cl(a),a.g.cancel(),a.g=null)}function Yh(a){Io(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ao(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function bo(a){if(!xh(a.h)&&!a.s){a.s=!0;var h=a.Ga;X||tt(),_e||(X(),_e=!0),mt.add(h,a),a.B=0}}function Jy(a,h){return Dh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Hs(g(a.Ga,a,h),nd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Kn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(C.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Xh(this,C,h),f=yn(this.I),Fe(f,"RID",a),Fe(f,"CVER",22),this.D&&Fe(f,"X-HTTP-Session-Id",this.D),Zs(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(qh(V)))+"&"+h:this.m&&Rl(f,this.m,V)),Al(this.h,C),this.Ua&&Fe(f,"TYPE","init"),this.P?(Fe(f,"$req",h),Fe(f,"SID","null"),C.T=!0,wl(C,f,null)):wl(C,f,h),this.G=2}}else this.G==3&&(a?Jh(this,a):this.i.length==0||xh(this.h)||Jh(this))};function Jh(a,h){var f;h?f=h.l:f=a.U++;const m=yn(a.I);Fe(m,"SID",a.K),Fe(m,"RID",f),Fe(m,"AID",a.T),Zs(a,m),a.m&&a.o&&Rl(m,a.m,a.o),f=new Kn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Xh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Al(a.h,f),wl(f,m,h)}function Zs(a,h){a.H&&ne(a.H,function(f,m){Fe(h,m,f)}),a.l&&Oh({},function(f,m){Fe(h,m,f)})}function Xh(a,h,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let V=-1;for(;;){const G=["count="+f];V==-1?0<f?(V=C[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let Ne=!0;for(let ht=0;ht<f;ht++){let Ae=C[ht].g;const _t=C[ht].map;if(Ae-=V,0>Ae)V=Math.max(0,C[ht].g-100),Ne=!1;else try{Gy(_t,G,"req"+Ae+"_")}catch{m&&m(_t)}}if(Ne){m=G.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function Zh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;X||tt(),_e||(X(),_e=!0),mt.add(h,a),a.v=0}}function Pl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Hs(g(a.Fa,a),nd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ed(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Hs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Io(this),ed(this))};function Cl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ed(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=yn(a.qa);Fe(h,"RID","rpc"),Fe(h,"SID",a.K),Fe(h,"AID",a.T),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(h,"TO",a.ja),Fe(h,"TYPE","xmlhttp"),Zs(a,h),a.m&&a.o&&Rl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=vo(yn(h)),f.m=null,f.P=!0,Sh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Io(this),Pl(this),Pt(19))};function Ao(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function td(a,h){var f=null;if(a.g==h){Ao(a),Cl(a),a.g=null;var m=2}else if(bl(a.h,h))f=h.D,Nh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;m=fo(),me(m,new Ih(m,f)),bo(a)}else Zh(a);else if(C=h.s,C==3||C==0&&0<h.X||!(m==1&&Jy(a,h)||m==2&&Pl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),C){case 1:Pr(a,5);break;case 4:Pr(a,10);break;case 3:Pr(a,6);break;default:Pr(a,2)}}}function nd(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Pr(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),m=a.Xa;const C=!m;m=new Sr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||_o(m,"https"),vo(m),C?Hy(m.toString(),f):Wy(m.toString(),f)}else Pt(2);a.G=0,a.l&&a.l.sa(h),rd(a),Yh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function rd(a){if(a.G=0,a.ka=[],a.l){const h=Vh(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function sd(a,h,f){var m=f instanceof Sr?yn(f):new Sr(f);if(m.g!="")h&&(m.g=h+"."+m.g),yo(m,m.s);else{var C=l.location;m=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var V=new Sr(null);m&&_o(V,m),h&&(V.g=h),C&&yo(V,C),f&&(V.l=f),m=V}return f=a.D,h=a.ya,f&&h&&Fe(m,f,h),Fe(m,"VER",a.la),Zs(a,m),m}function id(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ke(new Eo({eb:f})):new Ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function od(){}t=od.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ro(){}Ro.prototype.g=function(a,h){return new Ft(a,h)};function Ft(a,h){le.call(this),this.g=new Qh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!O(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!O(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ns(this)}S(Ft,le),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Sl(this.g)},Ft.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ut(a),a=f);h.i.push(new Vy(h.Ya++,a)),h.G==3&&bo(h)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Sl(this.g),delete this.g,Ft.aa.N.call(this)};function ad(a){_l.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(ad,_l);function ld(){yl.call(this),this.status=1}S(ld,yl);function ns(a){this.g=a}S(ns,od),ns.prototype.ua=function(){me(this.g,"a")},ns.prototype.ta=function(a){me(this.g,new ad(a))},ns.prototype.sa=function(a){me(this.g,new ld)},ns.prototype.ra=function(){me(this.g,"b")},Ro.prototype.createWebChannel=Ro.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,Xm=function(){return new Ro},Jm=function(){return fo()},Ym=Ar,Dc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},po.NO_ERROR=0,po.TIMEOUT=8,po.HTTP_ERROR=6,Qo=po,bh.COMPLETE="complete",Qm=bh,vh.EventType=$s,$s.OPEN="a",$s.CLOSE="b",$s.ERROR="c",$s.MESSAGE="d",le.prototype.listen=le.prototype.K,li=vh,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,zm=Ke}).apply(typeof Vo<"u"?Vo:typeof self<"u"?self:typeof window<"u"?window:{});const Pf="@firebase/firestore";/**
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
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let Ls="10.14.0";/**
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
 */const zr=new gu("@firebase/firestore");function ni(){return zr.logLevel}function te(t,...e){if(zr.logLevel<=ve.DEBUG){const n=e.map(Cu);zr.debug(`Firestore (${Ls}): ${t}`,...n)}}function jn(t,...e){if(zr.logLevel<=ve.ERROR){const n=e.map(Cu);zr.error(`Firestore (${Ls}): ${t}`,...n)}}function Rs(t,...e){if(zr.logLevel<=ve.WARN){const n=e.map(Cu);zr.warn(`Firestore (${Ls}): ${t}`,...n)}}function Cu(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function ke(t,e){t||he()}function fe(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Zm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class Ub{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jb{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new Zm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new wt(e)}}class Bb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $b{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Bb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ke(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new qb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Wb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class e_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Wb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function Ss(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ot{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ot(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new ot(0,0))}static max(){return new de(new ot(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Fi{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Fi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends Fi{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const Kb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Fi{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return Kb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Z(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Z(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(je.fromString(e))}static fromName(e){return new ie(je.fromString(e).popFirst(5))}static empty(){return new ie(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new je(e.slice()))}}function Gb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new gr(s,ie.empty(),e)}function zb(t){return new gr(t.readTime,t.key,-1)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(de.min(),ie.empty(),-1)}static max(){return new gr(de.max(),ie.empty(),-1)}}function Qb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
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
 */const Yb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ro(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==Yb)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Xb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function so(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ku{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ku.oe=-1;function Ya(t){return t==null}function Ea(t){return t===0&&1/t==-1/0}function Zb(t){return typeof t=="number"&&Number.isInteger(t)&&!Ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Cf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function t_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class We{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oo(this.root,e,this.comparator,!0)}}class Oo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kf(this.data.getIterator())}getIteratorFrom(e){return new kf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class kf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new pt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class n_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new n_("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const eA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(ke(!!t),typeof t=="string"){let e=0;const n=eA.exec(t);if(ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qr(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */function xu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Du(t){const e=t.mapValue.fields.__previous_value__;return xu(e)?Du(e):e}function Ui(t){const e=mr(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
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
 */class tA{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class ji{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ji("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ji&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Mo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xu(t)?4:rA(t)?9007199254740991:nA(t)?10:11:he()}function _n(t,e){if(t===e)return!0;const n=Yr(t);if(n!==Yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ui(t).isEqual(Ui(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=mr(s.timestampValue),l=mr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Qr(s.bytesValue).isEqual(Qr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),l=Ye(i.doubleValue);return o===l?Ea(o)===Ea(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ss(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Cf(o)!==Cf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!_n(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function Bi(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function Ps(t,e){if(t===e)return 0;const n=Yr(t),r=Yr(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return xf(t.timestampValue,e.timestampValue);case 4:return xf(Ui(t),Ui(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Qr(i),c=Qr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Re(l[u],c[u]);if(d!==0)return d}return Re(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Re(Ye(i.latitude),Ye(o.latitude));return l!==0?l:Re(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Df(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},g=o.fields||{},E=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=g.value)===null||c===void 0?void 0:c.arrayValue,P=Re(((u=E==null?void 0:E.values)===null||u===void 0?void 0:u.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:Df(E,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Mo.mapValue&&o===Mo.mapValue)return 0;if(i===Mo.mapValue)return 1;if(o===Mo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Re(c[p],d[p]);if(g!==0)return g;const E=Ps(l[c[p]],u[d[p]]);if(E!==0)return E}return Re(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function xf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=mr(t),r=mr(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function Df(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ps(n[s],r[s]);if(i)return i}return Re(n.length,r.length)}function Cs(t){return Nc(t)}function Nc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Nc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Nc(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function Nf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vc(t){return!!t&&"integerValue"in t}function Nu(t){return!!t&&"arrayValue"in t}function Vf(t){return!!t&&"nullValue"in t}function Of(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yo(t){return!!t&&"mapValue"in t}function nA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ti(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ti(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Jr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ot(Ti(this.value))}}function r_(t){const e=[];return Jr(t.fields,(n,r)=>{const s=new ft([n]);if(Yo(r)){const i=r_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Bt(e)}/**
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
 */class bt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new bt(e,0,de.min(),de.min(),de.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,s){return new bt(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new bt(e,2,n,de.min(),de.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,de.min(),de.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wa{constructor(e,n){this.position=e,this.inclusive=n}}function Mf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=Ps(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class $i{constructor(e,n="asc"){this.field=e,this.dir=n}}function sA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class s_{}class et extends s_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oA(e,n,r):n==="array-contains"?new cA(e,r):n==="in"?new uA(e,r):n==="not-in"?new hA(e,r):n==="array-contains-any"?new dA(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aA(e,r):new lA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ps(n,this.value)):n!==null&&Yr(this.value)===Yr(n)&&this.matchesComparison(Ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends s_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new on(e,n)}matches(e){return i_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function i_(t){return t.op==="and"}function o_(t){return iA(t)&&i_(t)}function iA(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function Oc(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Cs(t.value);if(o_(t))return t.filters.map(e=>Oc(e)).join(",");{const e=t.filters.map(n=>Oc(n)).join(",");return`${t.op}(${e})`}}function a_(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&_n(r.value,s.value)}(t,e):t instanceof on?function(r,s){return s instanceof on&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&a_(o,s.filters[l]),!0):!1}(t,e):void he()}function l_(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${Cs(n.value)}`}(t):t instanceof on?function(n){return n.op.toString()+" {"+n.getFilters().map(l_).join(" ,")+"}"}(t):"Filter"}class oA extends et{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class aA extends et{constructor(e,n){super(e,"in",n),this.keys=c_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lA extends et{constructor(e,n){super(e,"not-in",n),this.keys=c_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function c_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class cA extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nu(n)&&Bi(n.arrayValue,this.value)}}class uA extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bi(this.value.arrayValue,n)}}class hA extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Bi(this.value.arrayValue,n)}}class dA extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bi(this.value.arrayValue,r))}}/**
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
 */class fA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Ff(t,e=null,n=[],r=[],s=null,i=null,o=null){return new fA(t,e,n,r,s,i,o)}function Vu(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Oc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ya(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cs(r)).join(",")),e.ue=n}return e.ue}function Ou(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!a_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lf(t.startAt,e.startAt)&&Lf(t.endAt,e.endAt)}function Mc(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Fs{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function pA(t,e,n,r,s,i,o,l){return new Fs(t,e,n,r,s,i,o,l)}function Ja(t){return new Fs(t)}function Uf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function u_(t){return t.collectionGroup!==null}function Ii(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new pt(ft.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new $i(i,r))}),n.has(ft.keyField().canonicalString())||e.ce.push(new $i(ft.keyField(),r))}return e.ce}function pn(t){const e=fe(t);return e.le||(e.le=gA(e,Ii(t))),e.le}function gA(t,e){if(t.limitType==="F")return Ff(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $i(s.field,i)});const n=t.endAt?new wa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new wa(t.startAt.position,t.startAt.inclusive):null;return Ff(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Lc(t,e){const n=t.filters.concat([e]);return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fc(t,e,n){return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xa(t,e){return Ou(pn(t),pn(e))&&t.limitType===e.limitType}function h_(t){return`${Vu(pn(t))}|lt:${t.limitType}`}function ls(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>l_(s)).join(", ")}]`),Ya(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Cs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Cs(s)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function Za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ii(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Mf(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Ii(r),s)||r.endAt&&!function(o,l,c){const u=Mf(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Ii(r),s))}(t,e)}function mA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function d_(t){return(e,n)=>{let r=!1;for(const s of Ii(t)){const i=_A(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _A(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ps(c,u):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
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
 */class Us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Jr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return t_(this.inner)}size(){return this.innerSize}}/**
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
 */const yA=new We(ie.comparator);function Bn(){return yA}const f_=new We(ie.comparator);function ci(...t){let e=f_;for(const n of t)e=e.insert(n.key,n);return e}function p_(t){let e=f_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return bi()}function g_(){return bi()}function bi(){return new Us(t=>t.toString(),(t,e)=>t.isEqual(e))}const vA=new We(ie.comparator),EA=new pt(ie.comparator);function ye(...t){let e=EA;for(const n of t)e=e.add(n);return e}const wA=new pt(Re);function TA(){return wA}/**
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
 */function Mu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ea(e)?"-0":e}}function m_(t){return{integerValue:""+t}}function IA(t,e){return Zb(e)?m_(e):Mu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class el{constructor(){this._=void 0}}function bA(t,e,n){return t instanceof qi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&xu(i)&&(i=Du(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Hi?y_(t,e):t instanceof Wi?v_(t,e):function(s,i){const o=__(s,i),l=jf(o)+jf(s.Pe);return Vc(o)&&Vc(s.Pe)?m_(l):Mu(s.serializer,l)}(t,e)}function AA(t,e,n){return t instanceof Hi?y_(t,e):t instanceof Wi?v_(t,e):n}function __(t,e){return t instanceof Ta?function(r){return Vc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class qi extends el{}class Hi extends el{constructor(e){super(),this.elements=e}}function y_(t,e){const n=E_(e);for(const r of t.elements)n.some(s=>_n(s,r))||n.push(r);return{arrayValue:{values:n}}}class Wi extends el{constructor(e){super(),this.elements=e}}function v_(t,e){let n=E_(e);for(const r of t.elements)n=n.filter(s=>!_n(s,r));return{arrayValue:{values:n}}}class Ta extends el{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function jf(t){return Ye(t.integerValue||t.doubleValue)}function E_(t){return Nu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class RA{constructor(e,n){this.field=e,this.transform=n}}function SA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Hi&&s instanceof Hi||r instanceof Wi&&s instanceof Wi?Ss(r.elements,s.elements,_n):r instanceof Ta&&s instanceof Ta?_n(r.Pe,s.Pe):r instanceof qi&&s instanceof qi}(t.transform,e.transform)}class PA{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tl{}function w_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lu(t.key,nn.none()):new io(t.key,t.data,nn.none());{const n=t.data,r=Ot.empty();let s=new pt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ir(t.key,r,new Bt(s.toArray()),nn.none())}}function CA(t,e,n){t instanceof io?function(s,i,o){const l=s.value.clone(),c=$f(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(s,i,o){if(!Jo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=$f(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(T_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ai(t,e,n,r){return t instanceof io?function(i,o,l,c){if(!Jo(i.precondition,o))return l;const u=i.value.clone(),d=qf(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(i,o,l,c){if(!Jo(i.precondition,o))return l;const u=qf(i.fieldTransforms,c,o),d=o.data;return d.setAll(T_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Jo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function kA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=__(r.transform,s||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function Bf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ss(r,s,(i,o)=>SA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class io extends tl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ir extends tl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function T_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $f(t,e,n){const r=new Map;ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,AA(o,l,n[s]))}return r}function qf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,bA(i,o,e))}return r}class Lu extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xA extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class DA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&CA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ai(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ai(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=g_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=w_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&Ss(this.mutations,e.mutations,(n,r)=>Bf(n,r))&&Ss(this.baseMutations,e.baseMutations,(n,r)=>Bf(n,r))}}class Fu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length);let s=function(){return vA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Fu(e,n,r,s)}}/**
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
 */class NA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class VA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ze,Te;function OA(t){switch(t){default:return he();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function I_(t){if(t===void 0)return jn("GRPC error has no .code"),j.UNKNOWN;switch(t){case Ze.OK:return j.OK;case Ze.CANCELLED:return j.CANCELLED;case Ze.UNKNOWN:return j.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return j.INTERNAL;case Ze.UNAVAILABLE:return j.UNAVAILABLE;case Ze.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ze.NOT_FOUND:return j.NOT_FOUND;case Ze.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ze.ABORTED:return j.ABORTED;case Ze.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ze.DATA_LOSS:return j.DATA_LOSS;default:return he()}}(Te=Ze||(Ze={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function MA(){return new TextEncoder}/**
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
 */const LA=new $r([4294967295,4294967295],0);function Hf(t){const e=MA().encode(t),n=new Gm;return n.update(e),new Uint8Array(n.digest())}function Wf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $r([n,r],0),new $r([s,i],0)]}class Uu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ui(`Invalid padding: ${n}`);if(r<0)throw new ui(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ui(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ui(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=$r.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply($r.fromNumber(r)));return s.compare(LA)===1&&(s=new $r([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Hf(e),[r,s]=Wf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Uu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Hf(e),[r,s]=Wf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ui extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,oo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nl(de.min(),s,new We(Re),Bn(),ye())}}class oo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new oo(r,n,ye(),ye(),ye())}}/**
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
 */class Xo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class b_{constructor(e,n){this.targetId=e,this.me=n}}class A_{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Kf{constructor(){this.fe=0,this.ge=zf(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),n=ye(),r=ye();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new oo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=zf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class FA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=Gf(),this.Qe=new We(Re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Mc(i))if(r===0){const o=new ie(i.path);this.Ue(n,o,bt.newNoDocument(o,de.min()))}else ke(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Qr(r).toUint8Array()}catch(c){if(c instanceof n_)return Rs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Uu(o,s,i)}catch(c){return Rs(c instanceof ui?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Mc(l.target)){const c=new ie(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,bt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ye();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new nl(e,n,this.Qe,this.ke,r);return this.ke=Bn(),this.qe=Gf(),this.Qe=new We(Re),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Kf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new pt(Re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Kf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Gf(){return new We(ie.comparator)}function zf(){return new We(ie.comparator)}const UA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),BA=(()=>({and:"AND",or:"OR"}))();class $A{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Uc(t,e){return t.useProto3Json||Ya(e)?e:{value:e}}function Ia(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qA(t,e){return Ia(t,e.toTimestamp())}function gn(t){return ke(!!t),de.fromTimestamp(function(n){const r=mr(n);return new ot(r.seconds,r.nanos)}(t))}function ju(t,e){return jc(t,e).canonicalString()}function jc(t,e){const n=function(s){return new je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function S_(t){const e=je.fromString(t);return ke(D_(e)),e}function Bc(t,e){return ju(t.databaseId,e.path)}function Yl(t,e){const n=S_(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(C_(n))}function P_(t,e){return ju(t.databaseId,e)}function HA(t){const e=S_(t);return e.length===4?je.emptyPath():C_(e)}function $c(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function C_(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qf(t,e,n){return{name:Bc(t,e),fields:n.value.mapValue.fields}}function WA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(ke(d===void 0||typeof d=="string"),gt.fromBase64String(d||"")):(ke(d===void 0||d instanceof Buffer||d instanceof Uint8Array),gt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?j.UNKNOWN:I_(u.code);return new Z(d,u.message||"")}(o);n=new A_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yl(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):de.min(),l=new Ot({mapValue:{fields:r.document.fields}}),c=bt.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Xo(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Yl(t,r.document),i=r.readTime?gn(r.readTime):de.min(),o=bt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Xo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Yl(t,r.document),i=r.removedTargetIds||[];n=new Xo([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new VA(s,i),l=r.targetId;n=new b_(l,o)}}return n}function KA(t,e){let n;if(e instanceof io)n={update:Qf(t,e.key,e.value)};else if(e instanceof Lu)n={delete:Bc(t,e.key)};else if(e instanceof Ir)n={update:Qf(t,e.key,e.data),updateMask:tR(e.fieldMask)};else{if(!(e instanceof xA))return he();n={verify:Bc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof qi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Hi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ta)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function GA(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(de.min())&&(o=gn(i)),new PA(o,s.transformResults||[])}(n,e))):[]}function zA(t,e){return{documents:[P_(t,e.path)]}}function QA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=P_(t,s);const i=function(u){if(u.length!==0)return x_(on.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:cs(g.field),direction:XA(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Uc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function YA(t){let e=HA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=k_(p);return g instanceof on&&o_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new $i(us(S.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Ya(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,E=p.values||[];return new wa(E,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,E=p.values||[];return new wa(E,g)}(n.endAt)),pA(e,s,o,i,l,"F",c,u)}function JA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function k_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=us(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=us(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return et.create(us(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return on.create(n.compositeFilter.filters.map(r=>k_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function XA(t){return UA[t]}function ZA(t){return jA[t]}function eR(t){return BA[t]}function cs(t){return{fieldPath:t.canonicalString()}}function us(t){return ft.fromServerFormat(t.fieldPath)}function x_(t){return t instanceof et?function(n){if(n.op==="=="){if(Of(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NAN"}};if(Vf(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Of(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NAN"}};if(Vf(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(n.field),op:ZA(n.op),value:n.value}}}(t):t instanceof on?function(n){const r=n.getFilters().map(s=>x_(s));return r.length===1?r[0]:{compositeFilter:{op:eR(n.op),filters:r}}}(t):he()}function tR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function D_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class lr{constructor(e,n,r,s,i=de.min(),o=de.min(),l=gt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nR{constructor(e){this.ct=e}}function rR(t){const e=YA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fc(e,e.limit,"L"):e}/**
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
 */class sR{constructor(){this.un=new iR}addToCollectionParentIndex(e,n){return this.un.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(gr.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class iR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new pt(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pt(je.comparator)).toArray()}}/**
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
 */class ks{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ks(0)}static kn(){return new ks(-1)}}/**
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
 */class oR{constructor(){this.changes=new Us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class aR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class lR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ai(r.mutation,s,Bt.empty(),ot.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Fr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ci();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Bn();const o=bi(),l=function(){return bi()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Ir)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Ai(d.mutation,u,d.mutation.getFieldMask(),ot.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new aR(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=bi();let s=new We((o,l)=>o-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Bt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||ye()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=g_();d.forEach(g=>{if(!i.has(g)){const E=w_(n.get(g),r.get(g));E!==null&&p.set(g,E),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):u_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(Fr());let l=-1,c=i;return o.next(u=>H.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?H.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ye())).next(d=>({batchId:l,changes:p_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=ci();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ci();return this.indexManager.getCollectionParents(e,i).next(l=>H.forEach(l,c=>{const u=function(p,g){return new Fs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,bt.newInvalidDocument(d)))});let l=ci();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Ai(d.mutation,u,Bt.empty(),ot.now()),Za(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class cR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return H.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:rR(s.bundledQuery),readTime:gn(s.readTime)}}(n)),H.resolve()}}/**
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
 */class uR{constructor(){this.overlays=new We(ie.comparator),this.Ir=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=Fr(),i=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new We((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Fr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Fr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return H.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NA(n,r));let i=this.Ir.get(n);i===void 0&&(i=ye(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class hR{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
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
 */class Bu{constructor(){this.Tr=new pt(lt.Er),this.dr=new pt(lt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new lt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new lt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ie(new je([])),r=new lt(n,e),s=new lt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ie(new je([])),r=new lt(n,e),s=new lt(n,e+1);let i=ye();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new lt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ie.comparator(e.key,n.key)||Re(e.wr,n.wr)}static Ar(e,n){return Re(e.wr,n.wr)||ie.comparator(e.key,n.key)}}/**
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
 */class dR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new pt(lt.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new lt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new lt(n,0),s=new lt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(Re);return n.forEach(s=>{const i=new lt(s,0),o=new lt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new lt(new ie(i),0);let l=new pt(Re);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.wr)),!0)},o),H.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return H.forEach(n.mutations,s=>{const i=new lt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new lt(n,0),s=this.br.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class fR{constructor(e){this.Mr=e,this.docs=function(){return new We(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():bt.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bn();const o=n.path,l=new ie(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Qb(zb(d),r)<=0||(s.has(d.key)||Za(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Or(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pR(this)}getSize(e){return H.resolve(this.size)}}class pR extends oR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class gR{constructor(e){this.persistence=e,this.Nr=new Us(n=>Vu(n),Ou),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Bu,this.targetCount=0,this.kr=ks.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),H.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ks(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Kn(n),H.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Br.containsKey(n))}}/**
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
 */class mR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new ku(0),this.Kr=!1,this.Kr=!0,this.$r=new hR,this.referenceDelegate=e(this),this.Ur=new gR(this),this.indexManager=new sR,this.remoteDocumentCache=function(s){return new fR(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new nR(n),this.Gr=new cR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new dR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new _R(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return H.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class _R extends Jb{constructor(e){super(),this.currentSequenceNumber=e}}class $u{constructor(e){this.persistence=e,this.Jr=new Bu,this.Yr=null}static Zr(e){return new $u(e)}get Xr(){if(this.Yr)return this.Yr;throw he()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,r=>{const s=ie.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return H.or([()=>H.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class qu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class yR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class vR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return iw()?8:Xb(St())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new yR;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ni()<=ve.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(ni()<=ve.DEBUG&&te("QueryEngine","Query:",ls(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ni()<=ve.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):H.resolve())}Yi(e,n){if(Uf(n))return H.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Fc(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,l);return this.ns(n,u,o,c.readTime)?this.Yi(e,Fc(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,s){return Uf(n)||s.isEqual(de.min())?H.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?H.resolve(null):(ni()<=ve.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ls(n)),this.rs(e,o,n,Gb(s,-1)).next(l=>l))})}ts(e,n){let r=new pt(d_(e));return n.forEach((s,i)=>{Za(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ni()<=ve.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ls(n)),this.Ji.getDocumentsMatchingQuery(e,n,gr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class ER{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new We(Re),this._s=new Us(i=>Vu(i),Ou),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function wR(t,e,n,r){return new ER(t,e,n,r)}async function N_(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ye();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function TR(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,g=p.keys();let E=H.resolve();return g.forEach(S=>{E=E.next(()=>d.getEntry(c,S)).next(P=>{const N=u.docVersions.get(S);ke(N!==null),P.version.compareTo(N)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ye();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function V_(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function IR(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(gt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),s=s.insert(p,E),function(P,N,x){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,E,d)&&l.push(n.Ur.updateTargetData(i,E))});let c=Bn(),u=ye();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(bR(i,o,e.documentUpdates).next(d=>{c=d.Ps,u=d.Is})),!r.isEqual(de.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return H.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.os=s,i))}function bR(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Bn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function AR(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function RR(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function qc(t,e,n){const r=fe(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!so(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Yf(t,e,n){const r=fe(t);let s=de.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=fe(c),g=p._s.get(d);return g!==void 0?H.resolve(p.os.get(g)):p.Ur.getTargetData(u,d)}(r,o,pn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:ye())).next(l=>(SR(r,mA(e),l),{documents:l,Ts:i})))}function SR(t,e,n){let r=t.us.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Jf{constructor(){this.activeTargetIds=TA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PR{constructor(){this.so=new Jf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Jf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CR{_o(e){}shutdown(){}}/**
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
 */class Xf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Lo=null;function Jl(){return Lo===null?Lo=function(){return 268435456+Math.round(2147483648*Math.random())}():Lo++,"0x"+Lo.toString(16)}/**
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
 */const kR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class xR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const vt="WebChannelConnection";class DR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Jl(),c=this.xo(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,c,u,s).then(d=>(te("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Rs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ls}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=kR[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Jl();return new Promise((o,l)=>{const c=new zm;c.setWithCredentials(!0),c.listenOnce(Qm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Qo.NO_ERROR:const d=c.getResponseJson();te(vt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Qo.TIMEOUT:te(vt,`RPC '${e}' ${i} timed out`),l(new Z(j.DEADLINE_EXCEEDED,"Request time out"));break;case Qo.HTTP_ERROR:const p=c.getStatus();if(te(vt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const S=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(x)>=0?x:j.UNKNOWN}(E.status);l(new Z(S,E.message))}else l(new Z(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Z(j.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{te(vt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(vt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=Jl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Xm(),l=Jm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");te(vt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let g=!1,E=!1;const S=new xR({Io:N=>{E?te(vt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(te(vt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),te(vt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},To:()=>p.close()}),P=(N,x,O)=>{N.listen(x,M=>{try{O(M)}catch(U){setTimeout(()=>{throw U},0)}})};return P(p,li.EventType.OPEN,()=>{E||(te(vt,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),P(p,li.EventType.CLOSE,()=>{E||(E=!0,te(vt,`RPC '${e}' stream ${s} transport closed`),S.So())}),P(p,li.EventType.ERROR,N=>{E||(E=!0,Rs(vt,`RPC '${e}' stream ${s} transport errored:`,N),S.So(new Z(j.UNAVAILABLE,"The operation could not be completed")))}),P(p,li.EventType.MESSAGE,N=>{var x;if(!E){const O=N.data[0];ke(!!O);const M=O,U=M.error||((x=M[0])===null||x===void 0?void 0:x.error);if(U){te(vt,`RPC '${e}' stream ${s} received error:`,U);const J=U.status;let ne=function(_){const I=Ze[_];if(I!==void 0)return I_(I)}(J),R=U.message;ne===void 0&&(ne=j.INTERNAL,R="Unknown error status: "+J+" with message "+U.message),E=!0,S.So(new Z(ne,R)),p.close()}else te(vt,`RPC '${e}' stream ${s} received:`,O),S.bo(O)}}),P(l,Ym.STAT_EVENT,N=>{N.stat===Dc.PROXY?te(vt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Dc.NOPROXY&&te(vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Xl(){return typeof document<"u"?document:null}/**
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
 */function rl(t){return new $A(t,!0)}/**
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
 */class O_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class M_{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new O_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Z(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NR extends M_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=WA(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?gn(o.readTime):de.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=$c(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Mc(c)?{documents:zA(i,c)}:{query:QA(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=R_(i,o.resumeToken);const u=Uc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=Ia(i,o.snapshotVersion.toTimestamp());const u=Uc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=JA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=$c(this.serializer),n.removeTarget=e,this.a_(n)}}class VR extends M_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ke(!!e.streamToken),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=GA(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=$c(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>KA(this.serializer,r))};this.a_(n)}}/**
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
 */class OR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,jc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(j.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,jc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class MR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(jn(n),this.D_=!1):te("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class LR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Xr(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=fe(c);u.L_.add(4),await ao(u),u.q_.set("Unknown"),u.L_.delete(4),await sl(u)}(this))})}),this.q_=new MR(r,s)}}async function sl(t){if(Xr(t))for(const e of t.B_)await e(!0)}async function ao(t){for(const e of t.B_)await e(!1)}function L_(t,e){const n=fe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Gu(n)?Ku(n):js(n).r_()&&Wu(n,e))}function Hu(t,e){const n=fe(t),r=js(n);n.N_.delete(e),r.r_()&&F_(n,e),n.N_.size===0&&(r.r_()?r.o_():Xr(n)&&n.q_.set("Unknown"))}function Wu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}js(t).A_(e)}function F_(t,e){t.Q_.xe(e),js(t).R_(e)}function Ku(t){t.Q_=new FA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),js(t).start(),t.q_.v_()}function Gu(t){return Xr(t)&&!js(t).n_()&&t.N_.size>0}function Xr(t){return fe(t).L_.size===0}function U_(t){t.Q_=void 0}async function FR(t){t.q_.set("Online")}async function UR(t){t.N_.forEach((e,n)=>{Wu(t,e)})}async function jR(t,e){U_(t),Gu(t)?(t.q_.M_(e),Ku(t)):t.q_.set("Unknown")}async function BR(t,e,n){if(t.q_.set("Online"),e instanceof A_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ba(t,r)}else if(e instanceof Xo?t.Q_.Ke(e):e instanceof b_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(de.min()))try{const r=await V_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(gt.EMPTY_BYTE_STRING,d.snapshotVersion)),F_(i,c);const p=new lr(d.target,c,u,d.sequenceNumber);Wu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await ba(t,r)}}async function ba(t,e,n){if(!so(e))throw e;t.L_.add(1),await ao(t),t.q_.set("Offline"),n||(n=()=>V_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await sl(t)})}function j_(t,e){return e().catch(n=>ba(t,n,e))}async function il(t){const e=fe(t),n=_r(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;$R(e);)try{const s=await AR(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,qR(e,s)}catch(s){await ba(e,s)}B_(e)&&$_(e)}function $R(t){return Xr(t)&&t.O_.length<10}function qR(t,e){t.O_.push(e);const n=_r(t);n.r_()&&n.V_&&n.m_(e.mutations)}function B_(t){return Xr(t)&&!_r(t).n_()&&t.O_.length>0}function $_(t){_r(t).start()}async function HR(t){_r(t).p_()}async function WR(t){const e=_r(t);for(const n of t.O_)e.m_(n.mutations)}async function KR(t,e,n){const r=t.O_.shift(),s=Fu.from(r,e,n);await j_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await il(t)}async function GR(t,e){e&&_r(t).V_&&await async function(r,s){if(function(o){return OA(o)&&o!==j.ABORTED}(s.code)){const i=r.O_.shift();_r(r).s_(),await j_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await il(r)}}(t,e),B_(t)&&$_(t)}async function Zf(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Xr(n);n.L_.add(3),await ao(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await sl(n)}async function zR(t,e){const n=fe(t);e?(n.L_.delete(2),await sl(n)):e||(n.L_.add(2),await ao(n),n.q_.set("Unknown"))}function js(t){return t.K_||(t.K_=function(n,r,s){const i=fe(n);return i.w_(),new NR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:FR.bind(null,t),Ro:UR.bind(null,t),mo:jR.bind(null,t),d_:BR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Gu(t)?Ku(t):t.q_.set("Unknown")):(await t.K_.stop(),U_(t))})),t.K_}function _r(t){return t.U_||(t.U_=function(n,r,s){const i=fe(n);return i.w_(),new VR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:HR.bind(null,t),mo:GR.bind(null,t),f_:WR.bind(null,t),g_:KR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await il(t)):(await t.U_.stop(),t.O_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class zu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new zu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qu(t,e){if(jn("AsyncQueue",`${e}: ${t}`),so(t))return new Z(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ws{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=ci(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new ws(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ep{constructor(){this.W_=new We(ie.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):he():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class xs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new xs(e,n,ws.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class QR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class YR{constructor(){this.queries=tp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=tp(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new Z(j.ABORTED,"Firestore shutting down"))}}function tp(){return new Us(t=>h_(t),Xa)}async function Yu(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new QR,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Qu(o,`Initialization of query '${ls(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Xu(n)}async function Ju(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function JR(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Xu(n)}function XR(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Xu(t){t.Y_.forEach(e=>{e.next()})}var Hc,np;(np=Hc||(Hc={})).ea="default",np.Cache="cache";class Zu{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Hc.Cache}}/**
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
 */class q_{constructor(e){this.key=e}}class H_{constructor(e){this.key=e}}class ZR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ye(),this.mutatedKeys=ye(),this.Aa=d_(e),this.Ra=new ws(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new ep,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),E=Za(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let N=!1;g&&E?g.data.isEqual(E.data)?S!==P&&(r.track({type:3,doc:E}),N=!0):this.ga(g,E)||(r.track({type:2,doc:E}),N=!0,(c&&this.Aa(E,c)>0||u&&this.Aa(E,u)<0)&&(l=!0)):!g&&E?(r.track({type:0,doc:E}),N=!0):g&&!E&&(r.track({type:1,doc:g}),N=!0,(c||u)&&(l=!0)),N&&(E?(o=o.add(E),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(E,S){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return P(E)-P(S)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new xs(this.query,e.Ra,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ep,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ye(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new H_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new q_(r))}),n}ba(e){this.Ta=e.Ts,this.da=ye();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return xs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class eS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tS{constructor(e){this.key=e,this.va=!1}}class nS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Us(l=>h_(l),Xa),this.Ma=new Map,this.xa=new Set,this.Oa=new We(ie.comparator),this.Na=new Map,this.La=new Bu,this.Ba={},this.ka=new Map,this.qa=ks.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function rS(t,e,n=!0){const r=Y_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await W_(r,e,n,!0),s}async function sS(t,e){const n=Y_(t);await W_(n,e,!0,!1)}async function W_(t,e,n,r){const s=await RR(t.localStore,pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await iS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&L_(t.remoteStore,s),l}async function iS(t,e,n,r,s){t.Ka=(p,g,E)=>async function(P,N,x,O){let M=N.view.ma(x);M.ns&&(M=await Yf(P.localStore,N.query,!1).then(({documents:R})=>N.view.ma(R,M)));const U=O&&O.targetChanges.get(N.targetId),J=O&&O.targetMismatches.get(N.targetId)!=null,ne=N.view.applyChanges(M,P.isPrimaryClient,U,J);return sp(P,N.targetId,ne.wa),ne.snapshot}(t,p,g,E);const i=await Yf(t.localStore,e,!0),o=new ZR(e,i.Ts),l=o.ma(i.documents),c=oo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);sp(t,n,u.wa);const d=new eS(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function oS(t,e,n){const r=fe(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Xa(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await qc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Hu(r.remoteStore,s.targetId),Wc(r,s.targetId)}).catch(ro)):(Wc(r,s.targetId),await qc(r.localStore,s.targetId,!0))}async function aS(t,e){const n=fe(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hu(n.remoteStore,r.targetId))}async function lS(t,e,n){const r=gS(t);try{const s=await function(o,l){const c=fe(o),u=ot.now(),d=l.reduce((E,S)=>E.add(S.key),ye());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let S=Bn(),P=ye();return c.cs.getEntries(E,d).next(N=>{S=N,S.forEach((x,O)=>{O.isValidDocument()||(P=P.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,S)).next(N=>{p=N;const x=[];for(const O of l){const M=kA(O,p.get(O.key).overlayedDocument);M!=null&&x.push(new Ir(O.key,M,r_(M.value.mapValue),nn.exists(!0)))}return c.mutationQueue.addMutationBatch(E,u,x,l)}).next(N=>{g=N;const x=N.applyToLocalDocumentSet(p,P);return c.documentOverlayCache.saveOverlays(E,N.batchId,x)})}).then(()=>({batchId:g.batchId,changes:p_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new We(Re)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await lo(r,s.changes),await il(r.remoteStore)}catch(s){const i=Qu(s,"Failed to persist write");n.reject(i)}}async function K_(t,e){const n=fe(t);try{const r=await IR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ke(o.va):s.removedDocuments.size>0&&(ke(o.va),o.va=!1))}),await lo(n,r,e)}catch(r){await ro(r)}}function rp(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=fe(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(l)&&(u=!0)}),u&&Xu(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cS(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new We(ie.comparator);o=o.insert(i,bt.newNoDocument(i,de.min()));const l=ye().add(i),c=new nl(de.min(),new Map,new We(Re),o,l);await K_(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),eh(r)}else await qc(r.localStore,e,!1).then(()=>Wc(r,e,n)).catch(ro)}async function uS(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await TR(n.localStore,e);z_(n,r,null),G_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lo(n,s)}catch(s){await ro(s)}}async function hS(t,e,n){const r=fe(t);try{const s=await function(o,l){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(ke(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);z_(r,e,n),G_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lo(r,s)}catch(s){await ro(s)}}function G_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function z_(t,e,n){const r=fe(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Wc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Q_(t,r)})}function Q_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Hu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),eh(t))}function sp(t,e,n){for(const r of n)r instanceof q_?(t.La.addReference(r.key,e),dS(t,r)):r instanceof H_?(te("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Q_(t,r.key)):he()}function dS(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(te("SyncEngine","New document in limbo: "+n),t.xa.add(r),eh(t))}function eh(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ie(je.fromString(e)),r=t.qa.next();t.Na.set(r,new tS(n)),t.Oa=t.Oa.insert(n,r),L_(t.remoteStore,new lr(pn(Ja(n.path)),r,"TargetPurposeLimboResolution",ku.oe))}}async function lo(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=qu.Wi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,u){const d=fe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>H.forEach(u,g=>H.forEach(g.$i,E=>d.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>H.forEach(g.Ui,E=>d.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!so(p))throw p;te("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const E=d.os.get(g),S=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(S);d.os=d.os.insert(g,P)}}}(r.localStore,i))}async function fS(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await N_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new Z(j.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lo(n,r.hs)}}function pS(t,e){const n=fe(t),r=n.Na.get(e);if(r&&r.va)return ye().add(r.key);{let s=ye();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function Y_(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=K_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cS.bind(null,e),e.Ca.d_=JR.bind(null,e.eventManager),e.Ca.$a=XR.bind(null,e.eventManager),e}function gS(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hS.bind(null,e),e}class Aa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return wR(this.persistence,new vR,e.initialUser,this.serializer)}Ga(e){return new mR($u.Zr,this.serializer)}Wa(e){return new PR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Aa.provider={build:()=>new Aa};class Kc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fS.bind(null,this.syncEngine),await zR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YR}()}createDatastore(e){const n=rl(e.databaseInfo.databaseId),r=function(i){return new DR(i)}(e.databaseInfo);return function(i,o,l,c){return new OR(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new LR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>rp(this.syncEngine,n,0),function(){return Xf.D()?new Xf:new CR}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new nS(s,i,o,l,c,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);te("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ao(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Kc.provider={build:()=>new Kc};/**
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
 *//**
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
 */class th{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class mS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=e_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zl(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await N_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ip(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _S(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Zf(e.remoteStore,s)),t._onlineComponents=e}async function _S(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Rs("Error using user provided cache. Falling back to memory cache: "+n),await Zl(t,new Aa)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Zl(t,new Aa);return t._offlineComponents}async function J_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await ip(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await ip(t,new Kc))),t._onlineComponents}function yS(t){return J_(t).then(e=>e.syncEngine)}async function Ra(t){const e=await J_(t),n=e.eventManager;return n.onListen=rS.bind(null,e.syncEngine),n.onUnlisten=oS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=sS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=aS.bind(null,e.syncEngine),n}function vS(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new th({next:g=>{d.Za(),o.enqueueAndForget(()=>Ju(i,p));const E=g.docs.has(l);!E&&g.fromCache?u.reject(new Z(j.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&c&&c.source==="server"?u.reject(new Z(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Zu(Ja(l.path),d,{includeMetadataChanges:!0,_a:!0});return Yu(i,p)}(await Ra(t),t.asyncQueue,e,n,r)),r.promise}function ES(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new th({next:g=>{d.Za(),o.enqueueAndForget(()=>Ju(i,p)),g.fromCache&&c.source==="server"?u.reject(new Z(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Zu(l,d,{includeMetadataChanges:!0,_a:!0});return Yu(i,p)}(await Ra(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function X_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const op=new Map;/**
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
 */function Z_(t,e,n){if(!n)throw new Z(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wS(t,e,n,r){if(e===!0&&r===!0)throw new Z(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ap(t){if(!ie.isDocumentKey(t))throw new Z(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lp(t){if(ie.isDocumentKey(t))throw new Z(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ol(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ol(t);throw new Z(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class cp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=X_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class al{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Fb;switch(r.type){case"firstParty":return new $b(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=op.get(n);r&&(te("ComponentProvider","Removing Datastore"),op.delete(n),r.terminate())}(this),Promise.resolve()}}function TS(t,e,n,r={}){var s;const i=(t=Gt(t,al))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=wt.MOCK_USER;else{l=XE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Z(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new wt(u)}t._authCredentials=new Ub(new Zm(l,c))}}/**
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
 */class br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new br(this.firestore,e,this._query)}}class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class pr extends br{constructor(e,n,r){super(e,n,Ja(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new ie(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function ri(t,e,...n){if(t=at(t),Z_("collection","path",e),t instanceof al){const r=je.fromString(e,...n);return lp(r),new pr(t,null,r)}{if(!(t instanceof Nt||t instanceof pr))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return lp(r),new pr(t.firestore,null,r)}}function Or(t,e,...n){if(t=at(t),arguments.length===1&&(e=e_.newId()),Z_("doc","path",e),t instanceof al){const r=je.fromString(e,...n);return ap(r),new Nt(t,null,new ie(r))}{if(!(t instanceof Nt||t instanceof pr))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return ap(r),new Nt(t.firestore,t instanceof pr?t.converter:null,new ie(r))}}/**
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
 */class up{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new O_(this,"async_queue_retry"),this.Vu=()=>{const r=Xl();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Xl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Xl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Nn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!so(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=zu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&he()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function hp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class yr extends al{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new up,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new up(e),this._firestoreClient=void 0,await e}}}function IS(t,e){const n=typeof t=="object"?t:hm(),r=typeof t=="string"?t:e||"(default)",s=_u(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=YE("firestore");i&&TS(s,...i)}return s}function ll(t){if(t._terminated)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||bS(t),t._firestoreClient}function bS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new tA(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,X_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new mS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ds(gt.fromBase64String(e))}catch(n){throw new Z(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ds(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class cl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ul{constructor(e){this._methodName=e}}/**
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
 */class nh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class rh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const AS=/^__.*__$/;class RS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new io(e,this.data,n,this.fieldTransforms)}}class ey{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ty(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class sh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new sh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Sa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ty(this.Cu)&&AS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class SS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rl(e)}Qu(e,n,r,s=!1){return new sh({Cu:e,methodName:n,qu:r,path:ft.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ih(t){const e=t._freezeSettings(),n=rl(t._databaseId);return new SS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function PS(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);ah("Data must be an object, but it was:",o,r);const l=ny(r,o);let c,u;if(i.merge)c=new Bt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=Gc(e,p,n);if(!o.contains(g))throw new Z(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);sy(d,g)||d.push(g)}c=new Bt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new RS(new Ot(l),c,u)}class hl extends ul{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hl}}class oh extends ul{_toFieldTransform(e){return new RA(e.path,new qi)}isEqual(e){return e instanceof oh}}function CS(t,e,n,r){const s=t.Qu(1,e,n);ah("Data must be an object, but it was:",s,r);const i=[],o=Ot.empty();Jr(r,(c,u)=>{const d=lh(e,c,n);u=at(u);const p=s.Nu(d);if(u instanceof hl)i.push(d);else{const g=co(u,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Bt(i);return new ey(o,l,s.fieldTransforms)}function kS(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Gc(e,r,n)],c=[s];if(i.length%2!=0)throw new Z(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Gc(e,i[g])),c.push(i[g+1]);const u=[],d=Ot.empty();for(let g=l.length-1;g>=0;--g)if(!sy(u,l[g])){const E=l[g];let S=c[g];S=at(S);const P=o.Nu(E);if(S instanceof hl)u.push(E);else{const N=co(S,P);N!=null&&(u.push(E),d.set(E,N))}}const p=new Bt(u);return new ey(d,p,o.fieldTransforms)}function xS(t,e,n,r=!1){return co(n,t.Qu(r?4:3,e))}function co(t,e){if(ry(t=at(t)))return ah("Unsupported field value:",e,t),ny(t,e);if(t instanceof ul)return function(r,s){if(!ty(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=co(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ot.fromDate(r);return{timestampValue:Ia(s.serializer,i)}}if(r instanceof ot){const i=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ia(s.serializer,i)}}if(r instanceof nh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ds)return{bytesValue:R_(s.serializer,r._byteString)};if(r instanceof Nt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ju(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof rh)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Mu(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ol(r)}`)}(t,e)}function ny(t,e){const n={};return t_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jr(t,(r,s)=>{const i=co(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ry(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof nh||t instanceof Ds||t instanceof Nt||t instanceof ul||t instanceof rh)}function ah(t,e,n){if(!ry(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ol(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Gc(t,e,n){if((e=at(e))instanceof cl)return e._internalPath;if(typeof e=="string")return lh(t,e);throw Sa("Field path arguments must be of type string or ",t,!1,void 0,n)}const DS=new RegExp("[~\\*/\\[\\]]");function lh(t,e,n){if(e.search(DS)>=0)throw Sa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cl(...e.split("."))._internalPath}catch{throw Sa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Z(j.INVALID_ARGUMENT,l+t+c)}function sy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class iy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NS extends iy{data(){return super.data()}}function dl(t,e){return typeof e=="string"?lh(t,e):e instanceof cl?e._internalPath:e._delegate._internalPath}/**
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
 */function oy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ch{}class ay extends ch{}function ec(t,e,...n){let r=[];e instanceof ch&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof uh).length,l=i.filter(c=>c instanceof fl).length;if(o>1||o>0&&l>0)throw new Z(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class fl extends ay{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fl(e,n,r)}_apply(e){const n=this._parse(e);return ly(e._query,n),new br(e.firestore,e.converter,Lc(e._query,n))}_parse(e){const n=ih(e.firestore);return function(i,o,l,c,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Z(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){fp(p,d);const E=[];for(const S of p)E.push(dp(c,i,S));g={arrayValue:{values:E}}}else g=dp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||fp(p,d),g=xS(l,o,p,d==="in"||d==="not-in");return et.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function VS(t,e,n){const r=e,s=dl("where",t);return fl._create(s,r,n)}class uh extends ch{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new uh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:on.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)ly(o,c),o=Lc(o,c)}(e._query,n),new br(e.firestore,e.converter,Lc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hh extends ay{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new hh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Z(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Z(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $i(i,o)}(e._query,this._field,this._direction);return new br(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Fs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function OS(t,e="asc"){const n=e,r=dl("orderBy",t);return hh._create(r,n)}function dp(t,e,n){if(typeof(n=at(n))=="string"){if(n==="")throw new Z(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!u_(e)&&n.indexOf("/")!==-1)throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(je.fromString(n));if(!ie.isDocumentKey(r))throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nf(t,new ie(r))}if(n instanceof Nt)return Nf(t,n._key);throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ol(n)}.`)}function fp(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ly(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class MS{convertValue(e,n="none"){switch(Yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Jr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new rh(i)}convertGeoPoint(e){return new nh(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Du(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ui(e));default:return null}}convertTimestamp(e){const n=mr(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);ke(D_(r));const s=new ji(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function LS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class hi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cy extends iy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zo extends cy{data(e={}){return super.data(e)}}class uy{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new hi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zo(this._firestore,this._userDataWriter,r.key,r,new hi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Zo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new hi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Zo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new hi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:FS(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function FS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
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
 */function US(t){t=Gt(t,Nt);const e=Gt(t.firestore,yr);return vS(ll(e),t._key).then(n=>hy(e,t,n))}class dh extends MS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function jS(t){t=Gt(t,br);const e=Gt(t.firestore,yr),n=ll(e),r=new dh(e);return oy(t._query),ES(n,t._query).then(s=>new uy(e,r,t,s))}function pp(t,e,n,...r){t=Gt(t,Nt);const s=Gt(t.firestore,yr),i=ih(s);let o;return o=typeof(e=at(e))=="string"||e instanceof cl?kS(i,"updateDoc",t._key,e,n,r):CS(i,"updateDoc",t._key,e),fh(s,[o.toMutation(t._key,nn.exists(!0))])}function tc(t){return fh(Gt(t.firestore,yr),[new Lu(t._key,nn.none())])}function gp(t,e){const n=Gt(t.firestore,yr),r=Or(t),s=LS(t.converter,e);return fh(n,[PS(ih(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function nc(t,...e){var n,r,s;t=at(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||hp(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(hp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,d;if(t instanceof Nt)u=Gt(t.firestore,yr),d=Ja(t._key.path),c={next:p=>{e[o]&&e[o](hy(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Gt(t,br);u=Gt(p.firestore,yr),d=p._query;const g=new dh(u);c={next:E=>{e[o]&&e[o](new uy(u,g,p,E))},error:e[o+1],complete:e[o+2]},oy(t._query)}return function(g,E,S,P){const N=new th(P),x=new Zu(E,N,S);return g.asyncQueue.enqueueAndForget(async()=>Yu(await Ra(g),x)),()=>{N.Za(),g.asyncQueue.enqueueAndForget(async()=>Ju(await Ra(g),x))}}(ll(u),d,l,c)}function fh(t,e){return function(r,s){const i=new Nn;return r.asyncQueue.enqueueAndForget(async()=>lS(await yS(r),s,i)),i.promise}(ll(t),e)}function hy(t,e,n){const r=n.docs.get(e._key),s=new dh(t);return new cy(t,s,e._key,r,new hi(n.hasPendingWrites,n.fromCache),e.converter)}function Fo(){return new oh("serverTimestamp")}(function(e,n=!0){(function(s){Ls=s})(Os),As(new Wr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new yr(new jb(r.getProvider("auth-internal")),new Hb(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ji(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),fr(Pf,"4.7.3",e),fr(Pf,"4.7.3","esm2017")})();const BS={apiKey:"AIzaSyBr_iE_c4iZhJPj7xA5WRQAM5pADVfQx5M",authDomain:"management-project-1ab27.firebaseapp.com",projectId:"management-project-1ab27",storageBucket:"management-project-1ab27.firebasestorage.app",messagingSenderId:"344981414742",appId:"1:344981414742:web:f8deff0f76cbd05b73acf7"},dy=um(BS),In=Mb(dy),Jt=IS(dy),uo=tm("auth",()=>{const t=Ue(In.currentUser),e=Ue(!1),n=Ue(null),r=He(()=>!!t.value);return{user:t,loading:e,error:n,isAuthenticated:r,register:async(u,d)=>{e.value=!0,n.value=null;try{const p=await EI(In,u,d);t.value=p.user}catch(p){n.value="Erreur d'inscription. Vérifiez vos données.",console.error("[Auth] Register error:",p)}finally{e.value=!1}},login:async(u,d)=>{e.value=!0,n.value=null;try{const p=await wI(In,u,d);t.value=p.user}catch(p){n.value="Email ou mot de passe incorrect.",console.error("[Auth] Login error:",p)}finally{e.value=!1}},loginWithGoogle:async()=>{e.value=!0,n.value=null;try{const u=new Rn,d=await WI(In,u);t.value=d.user}catch(u){n.value="Échec de la connexion Google.",console.error("[Auth] Google login error:",u)}finally{e.value=!1}},logout:async()=>{e.value=!0;try{await AI(In),t.value=null}catch(u){n.value="Déconnexion impossible.",console.error("[Auth] Logout error:",u)}finally{e.value=!1}},initAuthListener:()=>{bI(In,u=>{t.value=u,e.value=!1})}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const hs=typeof document<"u";function fy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $S(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&fy(t.default)}const Pe=Object.assign;function rc(t,e){const n={};for(const r in e){const s=e[r];n[r]=an(s)?s.map(t):t(s)}return n}const Ri=()=>{},an=Array.isArray;function mp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const py=/#/g,qS=/&/g,HS=/\//g,WS=/=/g,KS=/\?/g,gy=/\+/g,GS=/%5B/g,zS=/%5D/g,my=/%5E/g,QS=/%60/g,_y=/%7B/g,YS=/%7C/g,yy=/%7D/g,JS=/%20/g;function ph(t){return t==null?"":encodeURI(""+t).replace(YS,"|").replace(GS,"[").replace(zS,"]")}function XS(t){return ph(t).replace(_y,"{").replace(yy,"}").replace(my,"^")}function zc(t){return ph(t).replace(gy,"%2B").replace(JS,"+").replace(py,"%23").replace(qS,"%26").replace(QS,"`").replace(_y,"{").replace(yy,"}").replace(my,"^")}function ZS(t){return zc(t).replace(WS,"%3D")}function eP(t){return ph(t).replace(py,"%23").replace(KS,"%3F")}function tP(t){return eP(t).replace(HS,"%2F")}function Ki(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const nP=/\/$/,rP=t=>t.replace(nP,"");function sc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=aP(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Ki(o)}}function sP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _p(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function iP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ns(e.matched[r],n.matched[s])&&vy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ns(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!oP(t[n],e[n]))return!1;return!0}function oP(t,e){return an(t)?yp(t,e):an(e)?yp(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function yp(t,e){return an(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function aP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Qc=function(t){return t.pop="pop",t.push="push",t}({}),ic=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function lP(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rP(t)}const cP=/^[^#]+#/;function uP(t,e){return t.replace(cP,"#")+e}function hP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const pl=()=>({left:window.scrollX,top:window.scrollY});function dP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=hP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function vp(t,e){return(history.state?history.state.position-e:-1)+t}const Yc=new Map;function fP(t,e){Yc.set(t,e)}function pP(t){const e=Yc.get(t);return Yc.delete(t),e}function gP(t){return typeof t=="string"||t&&typeof t=="object"}function Ey(t){return typeof t=="string"||typeof t=="symbol"}let Ge=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const wy=Symbol("");Ge.MATCHER_NOT_FOUND+"",Ge.NAVIGATION_GUARD_REDIRECT+"",Ge.NAVIGATION_ABORTED+"",Ge.NAVIGATION_CANCELLED+"",Ge.NAVIGATION_DUPLICATED+"";function Vs(t,e){return Pe(new Error,{type:t,[wy]:!0},e)}function wn(t,e){return t instanceof Error&&wy in t&&(e==null||!!(t.type&e))}const mP=["params","query","hash"];function _P(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of mP)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function yP(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(gy," "),i=s.indexOf("="),o=Ki(i<0?s:s.slice(0,i)),l=i<0?null:Ki(s.slice(i+1));if(o in e){let c=e[o];an(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Ep(t){let e="";for(let n in t){const r=t[n];if(n=ZS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(an(r)?r.map(s=>s&&zc(s)):[r&&zc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function vP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=an(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const EP=Symbol(""),wp=Symbol(""),gl=Symbol(""),gh=Symbol(""),Jc=Symbol("");function si(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function rr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(Vs(Ge.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?c(g):gP(g)?c(Vs(Ge.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function oc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(fy(c)){const u=(c.__vccOpts||c)[e];u&&i.push(rr(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=$S(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const g=(p.__vccOpts||p)[e];return g&&rr(g,n,r,o,l,s)()}))}}return i}function wP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Ns(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Ns(u,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let TP=()=>location.protocol+"//"+location.host;function Ty(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),_p(l,"")}return _p(n,t)+r+s}function IP(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const E=Ty(t,location),S=n.value,P=e.value;let N=0;if(g){if(n.value=E,e.value=g,o&&o===S){o=null;return}N=P?g.position-P.position:0}else r(E);s.forEach(x=>{x(n.value,S,{delta:N,type:Qc.pop,direction:N?N>0?ic.forward:ic.back:ic.unknown})})};function c(){o=n.value}function u(g){s.push(g);const E=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(E),E}function d(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Pe({},g.state,{scroll:pl()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:u,destroy:p}}function Tp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?pl():null}}function bP(t){const{history:e,location:n}=window,r={value:Ty(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:TP()+t+c;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(E){console.error(E),n[d?"replace":"assign"](g)}}function o(c,u){i(c,Pe({},e.state,Tp(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const d=Pe({},s.value,e.state,{forward:c,scroll:pl()});i(d.current,d,!0),i(c,Pe({},Tp(r.value,c,null),{position:d.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function AP(t){t=lP(t);const e=bP(t),n=IP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:uP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Ur=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var st=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(st||{});const RP={type:Ur.Static,value:""},SP=/[a-zA-Z0-9_]/;function PP(t){if(!t)return[[]];if(t==="/")return[[RP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${u}": ${E}`)}let n=st.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===st.Static?i.push({type:Ur.Static,value:u}):n===st.Param||n===st.ParamRegExp||n===st.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Ur.Param,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==st.ParamRegExp){r=n,n=st.EscapeNext;continue}switch(n){case st.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=st.Param):g();break;case st.EscapeNext:g(),n=r;break;case st.Param:c==="("?n=st.ParamRegExp:SP.test(c)?g():(p(),n=st.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case st.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=st.ParamRegExpEnd:d+=c;break;case st.ParamRegExpEnd:p(),n=st.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===st.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const Ip="[^/]+?",CP={sensitive:!1,strict:!1,start:!0,end:!0};var xt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(xt||{});const kP=/[.+*?^${}()[\]/\\]/g;function xP(t,e){const n=Pe({},CP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[xt.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let E=xt.Segment+(n.sensitive?xt.BonusCaseSensitive:0);if(g.type===Ur.Static)p||(s+="/"),s+=g.value.replace(kP,"\\$&"),E+=xt.Static;else if(g.type===Ur.Param){const{value:S,repeatable:P,optional:N,regexp:x}=g;i.push({name:S,repeatable:P,optional:N});const O=x||Ip;if(O!==Ip){E+=xt.BonusCustomRegExp;try{`${O}`}catch(U){throw new Error(`Invalid custom RegExp for param "${S}" (${O}): `+U.message)}}let M=P?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;p||(M=N&&u.length<2?`(?:/${M})`:"/"+M),N&&(M+="?"),s+=M,E+=xt.Dynamic,N&&(E+=xt.BonusOptional),P&&(E+=xt.BonusRepeatable),O===".*"&&(E+=xt.BonusWildcard)}d.push(E)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=xt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const E=d[g]||"",S=i[g-1];p[S.name]=E&&S.repeatable?E.split("/"):E}return p}function c(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const E of g)if(E.type===Ur.Static)d+=E.value;else if(E.type===Ur.Param){const{value:S,repeatable:P,optional:N}=E,x=S in u?u[S]:"";if(an(x)&&!P)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const O=an(x)?x.join("/"):x;if(!O)if(N)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);d+=O}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function DP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===xt.Static+xt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===xt.Static+xt.Segment?1:-1:0}function Iy(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=DP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(bp(r))return 1;if(bp(s))return-1}return s.length-r.length}function bp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const NP={strict:!1,end:!0,sensitive:!1};function VP(t,e,n){const r=xP(PP(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function OP(t,e){const n=[],r=new Map;e=mp(NP,e);function s(p){return r.get(p)}function i(p,g,E){const S=!E,P=Rp(p);P.aliasOf=E&&E.record;const N=mp(e,p),x=[P];if("alias"in p){const U=typeof p.alias=="string"?[p.alias]:p.alias;for(const J of U)x.push(Rp(Pe({},P,{components:E?E.record.components:P.components,path:J,aliasOf:E?E.record:P})))}let O,M;for(const U of x){const{path:J}=U;if(g&&J[0]!=="/"){const ne=g.record.path,R=ne[ne.length-1]==="/"?"":"/";U.path=g.record.path+(J&&R+J)}if(O=VP(U,g,N),E?E.alias.push(O):(M=M||O,M!==O&&M.alias.push(O),S&&p.name&&!Sp(O)&&o(p.name)),by(O)&&c(O),P.children){const ne=P.children;for(let R=0;R<ne.length;R++)i(ne[R],O,E&&E.children[R])}E=E||O}return M?()=>{o(M)}:Ri}function o(p){if(Ey(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=FP(p,n);n.splice(g,0,p),p.record.name&&!Sp(p)&&r.set(p.record.name,p)}function u(p,g){let E,S={},P,N;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw Vs(Ge.MATCHER_NOT_FOUND,{location:p});N=E.record.name,S=Pe(Ap(g.params,E.keys.filter(M=>!M.optional).concat(E.parent?E.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),p.params&&Ap(p.params,E.keys.map(M=>M.name))),P=E.stringify(S)}else if(p.path!=null)P=p.path,E=n.find(M=>M.re.test(P)),E&&(S=E.parse(P),N=E.record.name);else{if(E=g.name?r.get(g.name):n.find(M=>M.re.test(g.path)),!E)throw Vs(Ge.MATCHER_NOT_FOUND,{location:p,currentLocation:g});N=E.record.name,S=Pe({},g.params,p.params),P=E.stringify(S)}const x=[];let O=E;for(;O;)x.unshift(O.record),O=O.parent;return{name:N,path:P,params:S,matched:x,meta:LP(x)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Ap(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Rp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:MP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function MP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Sp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function LP(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function FP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Iy(t,e[i])<0?r=i:n=i+1}const s=UP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function UP(t){let e=t;for(;e=e.parent;)if(by(e)&&Iy(t,e)===0)return e}function by({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Pp(t){const e=Kt(gl),n=Kt(gh),r=He(()=>{const c=it(t.to);return e.resolve(c)}),s=He(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Ns.bind(null,d));if(g>-1)return g;const E=Cp(c[u-2]);return u>1&&Cp(d)===E&&p[p.length-1].path!==E?p.findIndex(Ns.bind(null,c[u-2])):g}),i=He(()=>s.value>-1&&qP(n.params,r.value.params)),o=He(()=>s.value>-1&&s.value===n.matched.length-1&&vy(n.params,r.value.params));function l(c={}){if($P(c)){const u=e[it(t.replace)?"replace":"push"](it(t.to)).catch(Ri);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:He(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function jP(t){return t.length===1?t[0]:t}const BP=yg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Pp,setup(t,{slots:e}){const n=zi(Pp(t)),{options:r}=Kt(gl),s=He(()=>({[kp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[kp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&jP(e.default(n));return t.custom?i:Wg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ay=BP;function $P(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!an(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function Cp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kp=(t,e,n)=>t??e??n,HP=yg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Kt(Jc),s=He(()=>t.route||r.value),i=Kt(wp,0),o=He(()=>{let u=it(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=He(()=>s.value.matched[o.value]);jo(wp,He(()=>o.value+1)),jo(EP,l),jo(Jc,s);const c=Ue();return ms(()=>[c.value,l.value,t.name],([u,d,p],[g,E,S])=>{d&&(d.instances[p]=u,E&&E!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=E.leaveGuards),d.updateGuards.size||(d.updateGuards=E.updateGuards))),u&&d&&(!E||!Ns(d,E)||!g)&&(d.enterCallbacks[p]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return xp(n.default,{Component:g,route:u});const E=p.props[d],S=E?E===!0?u.params:typeof E=="function"?E(u):E:null,N=Wg(g,Pe({},S,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return xp(n.default,{Component:N,route:u})||N}}});function xp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const WP=HP;function KP(t){const e=OP(t.routes,t),n=t.parseQuery||yP,r=t.stringifyQuery||Ep,s=t.history,i=si(),o=si(),l=si(),c=xv(Jn);let u=Jn;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=rc.bind(null,F=>""+F),p=rc.bind(null,tP),g=rc.bind(null,Ki);function E(F,ee){let Q,se;return Ey(F)?(Q=e.getRecordMatcher(F),se=ee):se=F,e.addRoute(se,Q)}function S(F){const ee=e.getRecordMatcher(F);ee&&e.removeRoute(ee)}function P(){return e.getRoutes().map(F=>F.record)}function N(F){return!!e.getRecordMatcher(F)}function x(F,ee){if(ee=Pe({},ee||c.value),typeof F=="string"){const A=sc(n,F,ee.path),D=e.resolve({path:A.path},ee),B=s.createHref(A.fullPath);return Pe(A,D,{params:g(D.params),hash:Ki(A.hash),redirectedFrom:void 0,href:B})}let Q;if(F.path!=null)Q=Pe({},F,{path:sc(n,F.path,ee.path).path});else{const A=Pe({},F.params);for(const D in A)A[D]==null&&delete A[D];Q=Pe({},F,{params:p(A)}),ee.params=p(ee.params)}const se=e.resolve(Q,ee),ge=F.hash||"";se.params=d(g(se.params));const xe=sP(r,Pe({},F,{hash:XS(ge),path:se.path})),w=s.createHref(xe);return Pe({fullPath:xe,hash:ge,query:r===Ep?vP(F.query):F.query||{}},se,{redirectedFrom:void 0,href:w})}function O(F){return typeof F=="string"?sc(n,F,c.value.path):Pe({},F)}function M(F,ee){if(u!==F)return Vs(Ge.NAVIGATION_CANCELLED,{from:ee,to:F})}function U(F){return R(F)}function J(F){return U(Pe(O(F),{replace:!0}))}function ne(F,ee){const Q=F.matched[F.matched.length-1];if(Q&&Q.redirect){const{redirect:se}=Q;let ge=typeof se=="function"?se(F,ee):se;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=O(ge):{path:ge},ge.params={}),Pe({query:F.query,hash:F.hash,params:ge.path!=null?{}:F.params},ge)}}function R(F,ee){const Q=u=x(F),se=c.value,ge=F.state,xe=F.force,w=F.replace===!0,A=ne(Q,se);if(A)return R(Pe(O(A),{state:typeof A=="object"?Pe({},ge,A.state):ge,force:xe,replace:w}),ee||Q);const D=Q;D.redirectedFrom=ee;let B;return!xe&&iP(r,se,Q)&&(B=Vs(Ge.NAVIGATION_DUPLICATED,{to:D,from:se}),qt(se,se,!0,!1)),(B?Promise.resolve(B):I(D,se)).catch(L=>wn(L)?wn(L,Ge.NAVIGATION_GUARD_REDIRECT)?L:tt(L):_e(L,D,se)).then(L=>{if(L){if(wn(L,Ge.NAVIGATION_GUARD_REDIRECT))return R(Pe({replace:w},O(L.to),{state:typeof L.to=="object"?Pe({},ge,L.to.state):ge,force:xe}),ee||D)}else L=v(D,se,!0,w,ge);return b(D,se,L),L})}function y(F,ee){const Q=M(F,ee);return Q?Promise.reject(Q):Promise.resolve()}function _(F){const ee=Hn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(F):F()}function I(F,ee){let Q;const[se,ge,xe]=wP(F,ee);Q=oc(se.reverse(),"beforeRouteLeave",F,ee);for(const A of se)A.leaveGuards.forEach(D=>{Q.push(rr(D,F,ee))});const w=y.bind(null,F,ee);return Q.push(w),Vt(Q).then(()=>{Q=[];for(const A of i.list())Q.push(rr(A,F,ee));return Q.push(w),Vt(Q)}).then(()=>{Q=oc(ge,"beforeRouteUpdate",F,ee);for(const A of ge)A.updateGuards.forEach(D=>{Q.push(rr(D,F,ee))});return Q.push(w),Vt(Q)}).then(()=>{Q=[];for(const A of xe)if(A.beforeEnter)if(an(A.beforeEnter))for(const D of A.beforeEnter)Q.push(rr(D,F,ee));else Q.push(rr(A.beforeEnter,F,ee));return Q.push(w),Vt(Q)}).then(()=>(F.matched.forEach(A=>A.enterCallbacks={}),Q=oc(xe,"beforeRouteEnter",F,ee,_),Q.push(w),Vt(Q))).then(()=>{Q=[];for(const A of o.list())Q.push(rr(A,F,ee));return Q.push(w),Vt(Q)}).catch(A=>wn(A,Ge.NAVIGATION_CANCELLED)?A:Promise.reject(A))}function b(F,ee,Q){l.list().forEach(se=>_(()=>se(F,ee,Q)))}function v(F,ee,Q,se,ge){const xe=M(F,ee);if(xe)return xe;const w=ee===Jn,A=hs?history.state:{};Q&&(se||w?s.replace(F.fullPath,Pe({scroll:w&&A&&A.scroll},ge)):s.push(F.fullPath,ge)),c.value=F,qt(F,ee,Q,w),tt()}let T;function Ee(){T||(T=s.listen((F,ee,Q)=>{if(!Mt.listening)return;const se=x(F),ge=ne(se,Mt.currentRoute.value);if(ge){R(Pe(ge,{replace:!0,force:!0}),se).catch(Ri);return}u=se;const xe=c.value;hs&&fP(vp(xe.fullPath,Q.delta),pl()),I(se,xe).catch(w=>wn(w,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_CANCELLED)?w:wn(w,Ge.NAVIGATION_GUARD_REDIRECT)?(R(Pe(O(w.to),{force:!0}),se).then(A=>{wn(A,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===Qc.pop&&s.go(-1,!1)}).catch(Ri),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),_e(w,se,xe))).then(w=>{w=w||v(se,xe,!1),w&&(Q.delta&&!wn(w,Ge.NAVIGATION_CANCELLED)?s.go(-Q.delta,!1):Q.type===Qc.pop&&wn(w,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(se,xe,w)}).catch(Ri)}))}let Be=si(),be=si(),X;function _e(F,ee,Q){tt(F);const se=be.list();return se.length?se.forEach(ge=>ge(F,ee,Q)):console.error(F),Promise.reject(F)}function mt(){return X&&c.value!==Jn?Promise.resolve():new Promise((F,ee)=>{Be.add([F,ee])})}function tt(F){return X||(X=!F,Ee(),Be.list().forEach(([ee,Q])=>F?Q(F):ee()),Be.reset()),F}function qt(F,ee,Q,se){const{scrollBehavior:ge}=t;if(!hs||!ge)return Promise.resolve();const xe=!Q&&pP(vp(F.fullPath,0))||(se||!Q)&&history.state&&history.state.scroll||null;return qr().then(()=>ge(F,ee,xe)).then(w=>w&&dP(w)).catch(w=>_e(w,F,ee))}const $e=F=>s.go(F);let qe;const Hn=new Set,Mt={currentRoute:c,listening:!0,addRoute:E,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:P,resolve:x,options:t,push:U,replace:J,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:be.add,isReady:mt,install(F){F.component("RouterLink",Ay),F.component("RouterView",WP),F.config.globalProperties.$router=Mt,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>it(c)}),hs&&!qe&&c.value===Jn&&(qe=!0,U(s.location).catch(se=>{}));const ee={};for(const se in Jn)Object.defineProperty(ee,se,{get:()=>c.value[se],enumerable:!0});F.provide(gl,Mt),F.provide(gh,rg(ee)),F.provide(Jc,c);const Q=F.unmount;Hn.add(F),F.unmount=function(){Hn.delete(F),Hn.size<1&&(u=Jn,T&&T(),T=null,c.value=Jn,qe=!1,X=!1),Q()}}};function Vt(F){return F.reduce((ee,Q)=>ee.then(()=>_(Q)),Promise.resolve())}return Mt}function ml(){return Kt(gl)}function GP(t){return Kt(gh)}const mh=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},zP={class:"bg-white border-b border-gray-200 px-3 md:px-5 py-2"},QP={class:"flex items-center justify-between max-w-6xl mx-auto"},YP={class:"flex items-center gap-2 sm:gap-3"},JP={key:0,class:"hidden sm:flex items-center gap-2 text-sm text-gray-700"},XP={class:"font-medium"},ZP={class:"flex items-center gap-1"},eC={__name:"AppNavbar",setup(t){const e=uo(),n=ml(),r=He(()=>e.user),s=async()=>{try{await e.logout(),n.push("/auth")}catch(o){console.error("Déconnexion échouée",o)}},i=He(()=>{var o;return((o=r.value)==null?void 0:o.email)||""});return(o,l)=>{const c=Ag("RouterLink");return Se(),Le("nav",zP,[k("div",QP,[Je(c,{to:"/",class:"flex items-center gap-2 font-bold text-lg text-gray-800 hover:text-blue-600 transition"},{default:gs(()=>[...l[0]||(l[0]=[k("span",null,"TaskFlow",-1)])]),_:1}),k("div",YP,[r.value?(Se(),Le("div",JP,[k("span",XP,Ve(i.value),1),l[2]||(l[2]=k("div",{class:"w-1 h-1 rounded-full bg-gray-400 mx-1"},null,-1)),Je(c,{to:"/dashboard",class:"px-2.5 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"},{default:gs(()=>[...l[1]||(l[1]=[Rt(" Tableau de bord ",-1)])]),_:1})])):dn("",!0),k("div",ZP,[r.value?dn("",!0):(Se(),Di(c,{key:0,to:"/auth",class:"px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-blue-600 rounded transition"},{default:gs(()=>[...l[3]||(l[3]=[Rt(" Connexion ",-1)])]),_:1})),r.value?(Se(),Le("button",{key:1,onClick:s,class:"px-3 py-1.5 text-sm font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition"}," Déconnexion ")):dn("",!0)])])])])}}},tC=mh(eC,[["__scopeId","data-v-c0bf4b1f"]]);const nC={id:"app",class:"min-h-screen bg-gray-50"},rC={key:0,class:"min-h-screen flex items-center justify-center"},sC={__name:"App",setup(t){const e=uo(),n=Ue(!0);return ja(async()=>{await new Promise(r=>{e.initAuthListener(),setTimeout(r,100)}),n.value=!1}),(r,s)=>{const i=Ag("RouterView");return Se(),Le("div",nC,[n.value?(Se(),Le("div",rC,[...s[0]||(s[0]=[k("div",{class:"text-center"},[k("div",{class:"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"}),k("p",{class:"mt-2 text-gray-600"},"Chargement...")],-1)])])):(Se(),Le(It,{key:1},[Je(tC),Je(i)],64))])}}},iC={class:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 text-center"},oC={class:"max-w-2xl"},aC={class:"flex flex-col sm:flex-row gap-4 justify-center"},lC={__name:"HomeView",setup(t){return(e,n)=>(Se(),Le("div",iC,[k("div",oC,[n[1]||(n[1]=k("h1",{class:"text-4xl md:text-5xl font-bold text-gray-800 mb-4"},[Rt(" Gérez vos projets "),k("span",{class:"text-blue-600"},"simplement")],-1)),n[2]||(n[2]=k("p",{class:"text-lg text-gray-600 mb-8"}," Organisez vos tâches en temps réel. ",-1)),k("div",aC,[Je(it(Ay),{to:"/auth",class:"px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"},{default:gs(()=>[...n[0]||(n[0]=[Rt(" Commencer ",-1)])]),_:1})]),n[3]||(n[3]=$g('<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-white p-5 rounded-lg shadow-sm"><h3 class="font-semibold text-gray-800">Sécurisé</h3><p class="text-sm text-gray-600 mt-1">Authentification Firebase (Email &amp; Google)</p></div><div class="bg-white p-5 rounded-lg shadow-sm"><h3 class="font-semibold text-gray-800">Kanban</h3><p class="text-sm text-gray-600 mt-1">3 colonnes : À faire • En cours • Terminé</p></div><div class="bg-white p-5 rounded-lg shadow-sm"><h3 class="font-semibold text-gray-800">Temps réel</h3><p class="text-sm text-gray-600 mt-1">Mises à jour synchronisées entre tous les onglets</p></div></div>',1))])]))}},cC={class:"flex min-h-screen items-center justify-center bg-gray-50 p-4"},uC={class:"w-full max-w-md rounded-lg bg-white p-6 shadow-md"},hC={class:"mb-6 text-center text-2xl font-bold text-gray-800"},dC={key:0,class:"rounded bg-red-50 p-2 text-sm text-red-700"},fC=["disabled"],pC={class:"mt-4 flex items-center justify-center"},gC=["disabled"],mC={class:"mt-4 text-center text-sm text-gray-600"},_C={__name:"AuthView",setup(t){const e=uo(),n=ml(),r=Ue(!0),s=Ue({email:"",password:""}),i=async()=>{r.value?await e.login(s.value.email,s.value.password):await e.register(s.value.email,s.value.password),e.user&&n.push("/dashboard")},o=async()=>{await e.loginWithGoogle(),e.user&&n.push("/dashboard")};return(l,c)=>(Se(),Le("div",cC,[k("div",uC,[k("h2",hC,Ve(r.value?"Connexion":"Inscription"),1),k("form",{onSubmit:Vi(i,["prevent"]),class:"space-y-4"},[k("div",null,[c[3]||(c[3]=k("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Email",-1)),Sn(k("input",{id:"email","onUpdate:modelValue":c[0]||(c[0]=u=>s.value.email=u),type:"email",required:"",class:"mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"},null,512),[[ur,s.value.email]])]),k("div",null,[c[4]||(c[4]=k("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"Mot de passe",-1)),Sn(k("input",{id:"password","onUpdate:modelValue":c[1]||(c[1]=u=>s.value.password=u),type:"password",required:"",minlength:"6",class:"mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"},null,512),[[ur,s.value.password]])]),it(e).error?(Se(),Le("div",dC,Ve(it(e).error),1)):dn("",!0),k("button",{type:"submit",disabled:it(e).loading,class:"w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-60"},Ve(it(e).loading?"Chargement...":r.value?"Se connecter":"S’inscrire"),9,fC)],32),k("div",pC,[k("button",{onClick:o,disabled:it(e).loading,class:"flex items-center gap-2 rounded border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 disabled:opacity-60"},[...c[5]||(c[5]=[k("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",class:"h-5"},null,-1),Rt(" Continuer avec Google ",-1)])],8,gC)]),k("p",mC,[Rt(Ve(r.value?"Pas encore de compte ?":"Déjà inscrit ?")+" ",1),k("button",{onClick:c[2]||(c[2]=u=>r.value=!r.value),class:"font-medium text-blue-600 hover:underline"},Ve(r.value?"S’inscrire":"Se connecter"),1)])])]))}},Ry=tm("project",()=>{const t=Ue([]),e=Ue(null),n=Ue([]),r=Ue(!1),s=Ue(null);let i=null;return{projects:t,currentProject:e,tasks:n,loading:r,error:s,subscribeToProjects:x=>{if(!x)return;const O=ec(ri(Jt,"projects"),VS("userId","==",x));return nc(O,M=>{t.value=M.docs.map(U=>({id:U.id,...U.data()})),r.value=!1},M=>{s.value="Erreur de chargement des projets.",console.error("[ProjectStore] subscribeToProjects error:",M),r.value=!1})},subscribeToCurrentProject:x=>{if(i&&i(),!x)return;const O=Or(Jt,"projects",x);return i=nc(O,M=>{M.exists()?(e.value={id:M.id,...M.data()},r.value=!1):(s.value="Projet introuvable.",e.value=null,r.value=!1)},M=>{s.value="Erreur lors du chargement du projet.",console.error("[ProjectStore] subscribeToCurrentProject error:",M),r.value=!1}),i},createProject:async(x,O)=>{r.value=!0,s.value=null;try{await gp(ri(Jt,"projects"),{title:O.title,description:O.description||"",color:O.color||"#3b82f6",userId:x,createdAt:Fo()})}catch(M){s.value="Impossible de créer le projet.",console.error("[ProjectStore] createProject error:",M)}finally{r.value=!1}},updateProject:async(x,O)=>{try{const M=Or(Jt,"projects",x);await pp(M,{...O,updatedAt:Fo()})}catch(M){s.value="Mise à jour échouée.",console.error("[ProjectStore] updateProject error:",M)}},deleteProject:async x=>{try{const O=ec(ri(Jt,"projects",x,"tasks")),U=(await jS(O)).docs.map(J=>tc(J.ref));await Promise.all(U),await tc(Or(Jt,"projects",x))}catch(O){s.value="Suppression échouée.",console.error("[ProjectStore] deleteProject error:",O)}},subscribeToTasks:x=>{if(!x)return;const O=ri(Jt,"projects",x,"tasks"),M=ec(O,OS("createdAt","desc"));return nc(M,U=>{n.value=U.docs.map(J=>({id:J.id,...J.data()}))},U=>{s.value="Erreur de chargement des tâches.",console.error("[ProjectStore] subscribeToTasks error:",U)})},addTask:async(x,O)=>{try{const M=ri(Jt,"projects",x,"tasks");await gp(M,{title:O.title,description:O.description||"",dueDate:O.dueDate||null,status:O.status||"todo",createdAt:Fo()})}catch(M){s.value="Ajout de tâche échoué.",console.error("[ProjectStore] addTask error:",M)}},updateTask:async(x,O,M)=>{try{const U=Or(Jt,"projects",x,"tasks",O);await pp(U,{...M,updatedAt:Fo()})}catch(U){s.value="Mise à jour de tâche échouée.",console.error("[ProjectStore] updateTask error:",U)}},deleteTask:async(x,O)=>{try{const M=Or(Jt,"projects",x,"tasks",O);await tc(M)}catch(M){s.value="Suppression de tâche échouée.",console.error("[ProjectStore] deleteTask error:",M)}},loadProject:async x=>{r.value=!0,s.value=null;try{const O=t.value.find(J=>J.id===x);if(O){e.value=O,r.value=!1;return}const M=Or(Jt,"projects",x),U=await US(M);U.exists()?e.value={id:U.id,...U.data()}:(s.value="Projet introuvable.",console.error("[ProjectStore] Project not found:",x))}catch(O){s.value="Erreur lors du chargement du projet.",console.error("[ProjectStore] loadProject error:",O)}finally{r.value=!1}},clearCurrentProject:()=>{i&&(i(),i=null),e.value=null}}}),yC={class:"min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8"},vC={class:"max-w-7xl mx-auto"},EC={class:"mb-8"},wC={class:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"},TC={class:"text-gray-600 mt-1"},IC={key:0,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},bC=["onClick"],AC={class:"p-6"},RC={class:"flex items-start justify-between mb-3"},SC={class:"text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition"},PC={class:"flex gap-1 opacity-0 group-hover:opacity-100 transition"},CC=["onClick"],kC=["onClick"],xC={class:"text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5rem]"},DC={key:1,class:"text-center py-16"},NC={class:"w-full max-w-md bg-white rounded-xl shadow-2xl p-6 transform transition-all"},VC={class:"text-xl font-bold text-gray-900 mb-5"},OC={class:"space-y-4"},MC={class:"flex items-center gap-3"},LC={class:"text-sm text-gray-600"},FC={class:"flex gap-3 mt-6"},UC=["disabled"],jC={__name:"DashboardView",setup(t){const e=uo(),n=Ry(),r=ml();let s=null;const i=Ue(null);ms(()=>e.user,S=>{S&&(s=n.subscribeToProjects(S.uid))},{immediate:!0}),Ba(()=>{s&&s()});const o=Ue({title:"",description:"",color:"#3b82f6"}),l=Ue(!1),c=Ue(null),u=(S=null)=>{S?(c.value=S,o.value={...S}):(c.value=null,o.value={title:"",description:"",color:"#3b82f6"}),l.value=!0,qr(()=>{var P;(P=i.value)==null||P.focus()})},d=async()=>{var S;(S=o.value.title)!=null&&S.trim()&&(c.value?await n.updateProject(c.value.id,o.value):await n.createProject(e.user.uid,o.value),l.value=!1)},p=S=>{r.push(`/project/${S}`)},g=async(S,P)=>{P.stopPropagation(),confirm("Supprimer ce projet et toutes ses tâches ?")&&await n.deleteProject(S)},E=(S,P)=>{P.stopPropagation(),u(S)};return(S,P)=>{var N;return Se(),Le("div",yC,[k("div",vC,[k("div",EC,[k("div",wC,[k("div",null,[P[7]||(P[7]=k("h1",{class:"text-3xl font-bold text-gray-900"},"Mes Projets",-1)),k("p",TC,Ve(it(n).projects.length)+" projet"+Ve(it(n).projects.length>1?"s":""),1)]),k("button",{onClick:P[0]||(P[0]=x=>u()),class:"inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-sm hover:shadow-md"},[...P[8]||(P[8]=[k("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1),Rt(" Nouveau projet ",-1)])])])]),it(n).projects.length>0?(Se(),Le("div",IC,[(Se(!0),Le(It,null,fc(it(n).projects,x=>(Se(),Le("div",{key:x.id,onClick:O=>p(x.id),class:"group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-blue-200"},[k("div",{class:"h-2 w-full",style:Ts({backgroundColor:x.color||"#3b82f6"})},null,4),k("div",AC,[k("div",RC,[k("h3",SC,Ve(x.title),1),k("div",PC,[k("button",{onClick:O=>E(x,O),class:"p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition",title:"Modifier"},[...P[9]||(P[9]=[k("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1)])],8,CC),k("button",{onClick:O=>g(x.id,O),class:"p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition",title:"Supprimer"},[...P[10]||(P[10]=[k("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)])],8,kC)])]),k("p",xC,Ve(x.description||"Aucune description"),1),P[11]||(P[11]=k("div",{class:"flex items-center gap-2 text-xs text-gray-500"},[k("div",{class:"flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"},[k("svg",{class:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})]),k("span",null,"Voir les tâches")])],-1))]),P[12]||(P[12]=k("div",{class:"absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none"},null,-1))],8,bC))),128))])):(Se(),Le("div",DC,[P[14]||(P[14]=$g('<div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"><svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><h3 class="text-lg font-semibold text-gray-900 mb-2">Aucun projet pour le moment</h3><p class="text-gray-600 mb-6">Créez votre premier projet pour commencer à organiser vos tâches</p>',3)),k("button",{onClick:P[1]||(P[1]=x=>u()),class:"inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"},[...P[13]||(P[13]=[k("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1),Rt(" Créer un projet ",-1)])])]))]),(Se(),Di(gg,{to:"body"},[l.value?(Se(),Le("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",onClick:P[6]||(P[6]=Vi(x=>l.value=!1,["self"]))},[k("div",NC,[k("h3",VC,Ve(c.value?"Modifier le projet":"Nouveau projet"),1),k("div",OC,[k("div",null,[P[15]||(P[15]=k("label",{class:"block text-sm font-medium text-gray-700 mb-1"},[Rt(" Nom du projet "),k("span",{class:"text-red-500"},"*")],-1)),Sn(k("input",{"onUpdate:modelValue":P[2]||(P[2]=x=>o.value.title=x),placeholder:"Ex: Site web e-commerce",class:"w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition",required:"",ref_key:"titleInput",ref:i},null,512),[[ur,o.value.title]])]),k("div",null,[P[16]||(P[16]=k("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Description",-1)),Sn(k("textarea",{"onUpdate:modelValue":P[3]||(P[3]=x=>o.value.description=x),placeholder:"Décrivez votre projet...",rows:"3",class:"w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"},null,512),[[ur,o.value.description]])]),k("div",null,[P[17]||(P[17]=k("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Couleur",-1)),k("div",MC,[Sn(k("input",{"onUpdate:modelValue":P[4]||(P[4]=x=>o.value.color=x),type:"color",class:"h-10 w-20 cursor-pointer rounded border border-gray-300"},null,512),[[ur,o.value.color]]),k("span",LC,Ve(o.value.color),1)])])]),k("div",FC,[k("button",{onClick:P[5]||(P[5]=x=>l.value=!1),class:"flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"}," Annuler "),k("button",{onClick:d,disabled:!((N=o.value.title)!=null&&N.trim()),class:"flex-1 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"},Ve(c.value?"Modifier":"Créer"),9,UC)])])])):dn("",!0)]))])}}};const BC={class:"flex items-start justify-between gap-3"},$C={class:"flex-1 min-w-0"},qC={class:"flex items-center gap-2 mb-2"},HC={class:"font-semibold text-gray-900 group-hover:text-blue-600 transition flex-1"},WC={key:0,class:"text-sm text-gray-600 mb-2 line-clamp-2"},KC={class:"flex flex-wrap items-center gap-2 mt-2"},GC={class:"flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition"},zC={__name:"TaskCard",props:{task:{type:Object,required:!0},projectId:{type:String,required:!0}},emits:["update","delete","edit"],setup(t,{emit:e}){const n=t,r=e,s=He(()=>{if(!n.task.dueDate)return!1;const c=new Date(n.task.dueDate),u=new Date;return u.setHours(0,0,0,0),c<u&&n.task.status!=="done"}),i=He(()=>{if(!n.task.dueDate)return null;const c=new Date(n.task.dueDate),u=new Date;u.setHours(0,0,0,0);const d=c-u,p=Math.ceil(d/(1e3*60*60*24));return p<0?`En retard de ${Math.abs(p)} jour${Math.abs(p)>1?"s":""}`:p===0?"Aujourd'hui":p===1?"Demain":p<=7?`Dans ${p} jours`:c.toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}),o=c=>{c.dataTransfer.effectAllowed="move",c.dataTransfer.setData("taskId",n.task.id),c.dataTransfer.setData("currentStatus",n.task.status),c.target.style.opacity="0.5"},l=c=>{c.target.style.opacity="1"};return(c,u)=>{var d,p;return Se(),Le("div",{class:ar(["group bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all cursor-move",{"border-l-4 border-l-red-400":s.value}]),draggable:"true",onDragstart:o,onDragend:l},[k("div",BC,[k("div",$C,[k("div",qC,[u[2]||(u[2]=k("svg",{class:"w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition",fill:"currentColor",viewBox:"0 0 20 20"},[k("path",{d:"M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"})],-1)),k("h4",HC,Ve(t.task.title),1)]),t.task.description?(Se(),Le("p",WC,Ve(t.task.description),1)):dn("",!0),k("div",KC,[t.task.dueDate?(Se(),Le("div",{key:0,class:ar(["inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium",{"bg-red-100 text-red-700":s.value,"bg-yellow-100 text-yellow-700":!s.value&&((d=i.value)==null?void 0:d.includes("jour")),"bg-gray-100 text-gray-600":!s.value&&!((p=i.value)!=null&&p.includes("jour"))}])},[u[3]||(u[3]=k("svg",{class:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1)),Rt(" "+Ve(i.value),1)],2)):dn("",!0),k("div",{class:ar(["inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium",{"bg-gray-100 text-gray-600":t.task.status==="todo","bg-blue-100 text-blue-700":t.task.status==="doing","bg-green-100 text-green-700":t.task.status==="done"}])},[k("span",{class:ar(["w-1.5 h-1.5 rounded-full",{"bg-gray-400":t.task.status==="todo","bg-blue-500":t.task.status==="doing","bg-green-500":t.task.status==="done"}])},null,2),Rt(" "+Ve(t.task.status==="todo"?"À faire":t.task.status==="doing"?"En cours":"Terminé"),1)],2)])]),k("div",GC,[k("button",{onClick:u[0]||(u[0]=Vi(g=>r("edit",t.task),["stop"])),class:"p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition",title:"Modifier"},[...u[4]||(u[4]=[k("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1)])]),k("button",{onClick:u[1]||(u[1]=Vi(g=>r("delete",t.task.id),["stop"])),class:"p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition",title:"Supprimer"},[...u[5]||(u[5]=[k("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)])])])])],34)}}},QC=mh(zC,[["__scopeId","data-v-47121cd0"]]);const YC={class:"min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8"},JC={key:0,class:"max-w-7xl mx-auto flex items-center justify-center min-h-[60vh]"},XC={key:1,class:"max-w-7xl mx-auto"},ZC={class:"mb-8"},e1={class:"bg-white rounded-xl shadow-sm p-6 border border-gray-100"},t1={class:"flex flex-col md:flex-row md:items-center md:justify-between gap-4"},n1={class:"flex-1"},r1={class:"flex items-center gap-3 mb-2"},s1={class:"text-2xl md:text-3xl font-bold text-gray-900"},i1={key:0,class:"text-gray-600"},o1={class:"flex flex-col items-end gap-2"},a1={class:"text-sm text-gray-600"},l1={class:"w-48 h-2 bg-gray-200 rounded-full overflow-hidden"},c1={class:"text-xs font-medium text-gray-700"},u1={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},h1=["onDragover","onDrop"],d1={class:"bg-white rounded-t-xl shadow-sm border border-gray-200 p-4"},f1={class:"flex items-center justify-between mb-1"},p1={class:"font-semibold text-gray-800 flex items-center gap-2"},g1={class:"px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"},m1={key:0,class:"text-center py-8 text-gray-400"},_1=["onClick"],y1={class:"w-full max-w-md bg-white rounded-xl shadow-2xl p-6 transform transition-all"},v1={class:"text-xl font-bold text-gray-900 mb-5"},E1={class:"space-y-4"},w1={class:"flex gap-3 mt-6"},T1=["disabled"],I1={__name:"ProjectDetails",setup(t){const e=GP(),n=ml(),r=Ry(),s=e.params.id,i=Ue(!1),o=Ue(null),l=Ue({title:"",description:"",dueDate:"",status:"todo"}),c=Ue(null),u=Ue(null),d=Ue(null),p=[{id:"todo",label:"À faire",color:"bg-gray-50",borderColor:"border-gray-200"},{id:"doing",label:"En cours",color:"bg-blue-50",borderColor:"border-blue-200"},{id:"done",label:"Terminé",color:"bg-green-50",borderColor:"border-green-200"}];ja(async()=>{u.value=r.subscribeToCurrentProject(s),c.value=r.subscribeToTasks(s)}),Ba(()=>{c.value&&c.value(),u.value&&u.value(),r.clearCurrentProject()});const g=He(()=>r.currentProject),E=He(()=>r.loading),S=He(()=>p.reduce((b,v)=>(b[v.id]=r.tasks.filter(T=>T.status===v.id),b),{})),P=b=>{o.value=null,l.value={title:"",description:"",dueDate:"",status:b},i.value=!0,qr(()=>{var v;(v=d.value)==null||v.focus()})},N=b=>{o.value=b,l.value={title:b.title,description:b.description||"",dueDate:b.dueDate||"",status:b.status},i.value=!0,qr(()=>{var v;(v=d.value)==null||v.focus()})},x=async()=>{l.value.title.trim()&&(o.value?await r.updateTask(s,o.value.id,l.value):await r.addTask(s,l.value),i.value=!1,o.value=null)},O=(b,v)=>{r.updateTask(s,b,v)},M=b=>{confirm("Supprimer cette tâche ?")&&r.deleteTask(s,b)},U=Ue(null),J=(b,v)=>{b.preventDefault(),U.value=v},ne=()=>{U.value=null},R=async(b,v)=>{b.preventDefault(),U.value=null;const T=b.dataTransfer.getData("taskId");b.dataTransfer.getData("currentStatus")!==v&&await r.updateTask(s,T,{status:v})},y=He(()=>r.tasks.length),_=He(()=>{var b;return((b=S.value.done)==null?void 0:b.length)||0}),I=He(()=>y.value===0?0:Math.round(_.value/y.value*100));return(b,v)=>{var T,Ee,Be,be;return Se(),Le("div",YC,[E.value&&!g.value?(Se(),Le("div",JC,[...v[7]||(v[7]=[k("div",{class:"text-center"},[k("div",{class:"w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"}),k("p",{class:"text-gray-600"},"Chargement du projet...")],-1)])])):(Se(),Le("div",XC,[k("div",ZC,[k("button",{onClick:v[0]||(v[0]=X=>it(n).push("/dashboard")),class:"inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium mb-4 transition"},[...v[8]||(v[8]=[k("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),Rt(" Retour au tableau de bord ",-1)])]),k("div",e1,[k("div",t1,[k("div",n1,[k("div",r1,[k("div",{class:"w-3 h-3 rounded-full",style:Ts({backgroundColor:((T=g.value)==null?void 0:T.color)||"#3b82f6"})},null,4),k("h1",s1,Ve(((Ee=g.value)==null?void 0:Ee.title)||"Projet sans titre"),1)]),(Be=g.value)!=null&&Be.description?(Se(),Le("p",i1,Ve(g.value.description),1)):dn("",!0)]),k("div",o1,[k("div",a1,Ve(_.value)+" / "+Ve(y.value)+" tâches terminées ",1),k("div",l1,[k("div",{class:"h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500",style:Ts({width:`${I.value}%`})},null,4)]),k("div",c1,Ve(I.value)+"%",1)])])])]),v[12]||(v[12]=k("div",{class:"mb-4 bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2"},[k("svg",{class:"w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]),k("div",{class:"text-sm text-blue-900"},[k("strong",null,"Astuce :"),Rt(" Glissez-déposez les tâches entre les colonnes pour changer leur statut. Double-cliquez pour modifier les détails. ")])],-1)),k("div",u1,[(Se(),Le(It,null,fc(p,X=>{var _e,mt;return k("div",{key:X.id,class:"flex flex-col",onDragover:tt=>J(tt,X.id),onDragleave:ne,onDrop:tt=>R(tt,X.id)},[k("div",d1,[k("div",f1,[k("h3",p1,[v[9]||(v[9]=k("span",{class:"text-lg"},null,-1)),Rt(" "+Ve(X.label),1)]),k("span",g1,Ve(((_e=S.value[X.id])==null?void 0:_e.length)||0),1)])]),k("div",{class:ar(["flex-1 rounded-b-xl border-x border-b p-4 space-y-3 min-h-[400px] transition-all",[X.color,X.borderColor,U.value===X.id?"ring-2 ring-blue-400 ring-offset-2":""]])},[Je(EE,{name:"task"},{default:gs(()=>[(Se(!0),Le(It,null,fc(S.value[X.id],tt=>(Se(),Di(QC,{key:tt.id,task:tt,"project-id":it(s),onUpdate:O,onDelete:M,onEdit:N},null,8,["task","project-id"]))),128))]),_:2},1024),((mt=S.value[X.id])==null?void 0:mt.length)===0?(Se(),Le("div",m1,[...v[10]||(v[10]=[k("svg",{class:"w-12 h-12 mx-auto mb-2 opacity-50",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})],-1),k("p",{class:"text-sm"},"Aucune tâche",-1)])])):dn("",!0),k("button",{onClick:tt=>P(X.id),class:"w-full flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-dashed border-gray-300 text-gray-500 hover:border-blue-400 hover:text-blue-600 hover:bg-white transition-all group"},[...v[11]||(v[11]=[k("svg",{class:"w-5 h-5 group-hover:scale-110 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1),k("span",{class:"font-medium"},"Ajouter une tâche",-1)])],8,_1)],2)],40,h1)}),64))])])),(Se(),Di(gg,{to:"body"},[i.value?(Se(),Le("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",onClick:v[6]||(v[6]=Vi(X=>i.value=!1,["self"]))},[k("div",y1,[k("h3",v1,Ve(o.value?"Modifier la tâche":"Nouvelle tâche"),1),k("div",E1,[k("div",null,[v[13]||(v[13]=k("label",{class:"block text-sm font-medium text-gray-700 mb-1"},[Rt(" Titre "),k("span",{class:"text-red-500"},"*")],-1)),Sn(k("input",{"onUpdate:modelValue":v[1]||(v[1]=X=>l.value.title=X),placeholder:"Ex: Créer la maquette",class:"w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition",onKeyup:kE(x,["enter"]),ref_key:"taskTitleInput",ref:d},null,544),[[ur,l.value.title]])]),k("div",null,[v[14]||(v[14]=k("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Description",-1)),Sn(k("textarea",{"onUpdate:modelValue":v[2]||(v[2]=X=>l.value.description=X),placeholder:"Détails de la tâche...",rows:"3",class:"w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"},null,512),[[ur,l.value.description]])]),k("div",null,[v[15]||(v[15]=k("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Date limite",-1)),Sn(k("input",{"onUpdate:modelValue":v[3]||(v[3]=X=>l.value.dueDate=X),type:"date",class:"w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"},null,512),[[ur,l.value.dueDate]])]),k("div",null,[v[17]||(v[17]=k("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Statut",-1)),Sn(k("select",{"onUpdate:modelValue":v[4]||(v[4]=X=>l.value.status=X),class:"w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"},[...v[16]||(v[16]=[k("option",{value:"todo"},"À faire",-1),k("option",{value:"doing"},"En cours",-1),k("option",{value:"done"},"Terminé",-1)])],512),[[RE,l.value.status]])])]),k("div",w1,[k("button",{onClick:v[5]||(v[5]=X=>i.value=!1),class:"flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"}," Annuler "),k("button",{onClick:x,disabled:!((be=l.value.title)!=null&&be.trim()),class:"flex-1 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"},Ve(o.value?"Modifier":"Ajouter"),9,T1)])])])):dn("",!0)]))])}}},b1=mh(I1,[["__scopeId","data-v-a755fb54"]]),Sy=KP({history:AP("/"),routes:[{path:"/",name:"Home",component:lC},{path:"/auth",name:"Auth",component:_C},{path:"/dashboard",name:"Dashboard",component:jC,meta:{requiresAuth:!0}},{path:"/project/:id",name:"ProjectDetails",component:b1,meta:{requiresAuth:!0}}]});let Py=!1;In.onAuthStateChanged(()=>{Py=!0});Sy.beforeEach(async(t,e,n)=>{Py||await new Promise(i=>{const o=In.onAuthStateChanged(()=>{o(),i()})});const r=t.matched.some(i=>i.meta.requiresAuth),s=In.currentUser;r&&!s?n("/auth"):t.path==="/auth"&&s?n("/dashboard"):n()});const _h=NE(sC),A1=LE();_h.use(A1);_h.use(Sy);const R1=uo();R1.initAuthListener();_h.mount("#app");
