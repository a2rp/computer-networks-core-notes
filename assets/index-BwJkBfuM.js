(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))p(v);new MutationObserver(v=>{for(const j of v)if(j.type==="childList")for(const N of j.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&p(N)}).observe(document,{childList:!0,subtree:!0});function l(v){const j={};return v.integrity&&(j.integrity=v.integrity),v.referrerPolicy&&(j.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?j.credentials="include":v.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function p(v){if(v.ep)return;v.ep=!0;const j=l(v);fetch(v.href,j)}})();function am(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var To={exports:{}},Gn={},Co={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function im(){if(Xd)return re;Xd=1;var i=Symbol.for("react.element"),d=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),N=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),U=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),F=Symbol.iterator;function O(x){return x===null||typeof x!="object"?null:(x=F&&x[F]||x["@@iterator"],typeof x=="function"?x:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,q={};function Y(x,w,G){this.props=x,this.context=w,this.refs=q,this.updater=G||Q}Y.prototype.isReactComponent={},Y.prototype.setState=function(x,w){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,w,"setState")},Y.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function he(){}he.prototype=Y.prototype;function oe(x,w,G){this.props=x,this.context=w,this.refs=q,this.updater=G||Q}var se=oe.prototype=new he;se.constructor=oe,ne(se,Y.prototype),se.isPureReactComponent=!0;var Z=Array.isArray,ue=Object.prototype.hasOwnProperty,K={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function Ee(x,w,G){var X,te={},ee=null,pe=null;if(w!=null)for(X in w.ref!==void 0&&(pe=w.ref),w.key!==void 0&&(ee=""+w.key),w)ue.call(w,X)&&!H.hasOwnProperty(X)&&(te[X]=w[X]);var ae=arguments.length-2;if(ae===1)te.children=G;else if(1<ae){for(var ce=Array(ae),_e=0;_e<ae;_e++)ce[_e]=arguments[_e+2];te.children=ce}if(x&&x.defaultProps)for(X in ae=x.defaultProps,ae)te[X]===void 0&&(te[X]=ae[X]);return{$$typeof:i,type:x,key:ee,ref:pe,props:te,_owner:K.current}}function rr(x,w){return{$$typeof:i,type:x.type,key:w,ref:x.ref,props:x.props,_owner:x._owner}}function yr(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function Mr(x){var w={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(G){return w[G]})}var cr=/\/+/g;function Ve(x,w){return typeof x=="object"&&x!==null&&x.key!=null?Mr(""+x.key):w.toString(36)}function tr(x,w,G,X,te){var ee=typeof x;(ee==="undefined"||ee==="boolean")&&(x=null);var pe=!1;if(x===null)pe=!0;else switch(ee){case"string":case"number":pe=!0;break;case"object":switch(x.$$typeof){case i:case d:pe=!0}}if(pe)return pe=x,te=te(pe),x=X===""?"."+Ve(pe,0):X,Z(te)?(G="",x!=null&&(G=x.replace(cr,"$&/")+"/"),tr(te,w,G,"",function(_e){return _e})):te!=null&&(yr(te)&&(te=rr(te,G+(!te.key||pe&&pe.key===te.key?"":(""+te.key).replace(cr,"$&/")+"/")+x)),w.push(te)),1;if(pe=0,X=X===""?".":X+":",Z(x))for(var ae=0;ae<x.length;ae++){ee=x[ae];var ce=X+Ve(ee,ae);pe+=tr(ee,w,G,ce,te)}else if(ce=O(x),typeof ce=="function")for(x=ce.call(x),ae=0;!(ee=x.next()).done;)ee=ee.value,ce=X+Ve(ee,ae++),pe+=tr(ee,w,G,ce,te);else if(ee==="object")throw w=String(x),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return pe}function dr(x,w,G){if(x==null)return x;var X=[],te=0;return tr(x,X,"","",function(ee){return w.call(G,ee,te++)}),X}function We(x){if(x._status===-1){var w=x._result;w=w(),w.then(function(G){(x._status===0||x._status===-1)&&(x._status=1,x._result=G)},function(G){(x._status===0||x._status===-1)&&(x._status=2,x._result=G)}),x._status===-1&&(x._status=0,x._result=w)}if(x._status===1)return x._result.default;throw x._result}var fe={current:null},C={transition:null},D={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:C,ReactCurrentOwner:K};function E(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:dr,forEach:function(x,w,G){dr(x,function(){w.apply(this,arguments)},G)},count:function(x){var w=0;return dr(x,function(){w++}),w},toArray:function(x){return dr(x,function(w){return w})||[]},only:function(x){if(!yr(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},re.Component=Y,re.Fragment=l,re.Profiler=v,re.PureComponent=oe,re.StrictMode=p,re.Suspense=T,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,re.act=E,re.cloneElement=function(x,w,G){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var X=ne({},x.props),te=x.key,ee=x.ref,pe=x._owner;if(w!=null){if(w.ref!==void 0&&(ee=w.ref,pe=K.current),w.key!==void 0&&(te=""+w.key),x.type&&x.type.defaultProps)var ae=x.type.defaultProps;for(ce in w)ue.call(w,ce)&&!H.hasOwnProperty(ce)&&(X[ce]=w[ce]===void 0&&ae!==void 0?ae[ce]:w[ce])}var ce=arguments.length-2;if(ce===1)X.children=G;else if(1<ce){ae=Array(ce);for(var _e=0;_e<ce;_e++)ae[_e]=arguments[_e+2];X.children=ae}return{$$typeof:i,type:x.type,key:te,ref:ee,props:X,_owner:pe}},re.createContext=function(x){return x={$$typeof:N,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:j,_context:x},x.Consumer=x},re.createElement=Ee,re.createFactory=function(x){var w=Ee.bind(null,x);return w.type=x,w},re.createRef=function(){return{current:null}},re.forwardRef=function(x){return{$$typeof:I,render:x}},re.isValidElement=yr,re.lazy=function(x){return{$$typeof:V,_payload:{_status:-1,_result:x},_init:We}},re.memo=function(x,w){return{$$typeof:U,type:x,compare:w===void 0?null:w}},re.startTransition=function(x){var w=C.transition;C.transition={};try{x()}finally{C.transition=w}},re.unstable_act=E,re.useCallback=function(x,w){return fe.current.useCallback(x,w)},re.useContext=function(x){return fe.current.useContext(x)},re.useDebugValue=function(){},re.useDeferredValue=function(x){return fe.current.useDeferredValue(x)},re.useEffect=function(x,w){return fe.current.useEffect(x,w)},re.useId=function(){return fe.current.useId()},re.useImperativeHandle=function(x,w,G){return fe.current.useImperativeHandle(x,w,G)},re.useInsertionEffect=function(x,w){return fe.current.useInsertionEffect(x,w)},re.useLayoutEffect=function(x,w){return fe.current.useLayoutEffect(x,w)},re.useMemo=function(x,w){return fe.current.useMemo(x,w)},re.useReducer=function(x,w,G){return fe.current.useReducer(x,w,G)},re.useRef=function(x){return fe.current.useRef(x)},re.useState=function(x){return fe.current.useState(x)},re.useSyncExternalStore=function(x,w,G){return fe.current.useSyncExternalStore(x,w,G)},re.useTransition=function(){return fe.current.useTransition()},re.version="18.3.1",re}var Jd;function Ko(){return Jd||(Jd=1,Co.exports=im()),Co.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function om(){if(Zd)return Gn;Zd=1;var i=Ko(),d=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,v=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function N(I,T,U){var V,F={},O=null,Q=null;U!==void 0&&(O=""+U),T.key!==void 0&&(O=""+T.key),T.ref!==void 0&&(Q=T.ref);for(V in T)p.call(T,V)&&!j.hasOwnProperty(V)&&(F[V]=T[V]);if(I&&I.defaultProps)for(V in T=I.defaultProps,T)F[V]===void 0&&(F[V]=T[V]);return{$$typeof:d,type:I,key:O,ref:Q,props:F,_owner:v.current}}return Gn.Fragment=l,Gn.jsx=N,Gn.jsxs=N,Gn}var eu;function lm(){return eu||(eu=1,To.exports=om()),To.exports}var t=lm(),pa={},Io={exports:{}},Ze={},Eo={exports:{}},Lo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru;function cm(){return ru||(ru=1,(function(i){function d(C,D){var E=C.length;C.push(D);e:for(;0<E;){var x=E-1>>>1,w=C[x];if(0<v(w,D))C[x]=D,C[E]=w,E=x;else break e}}function l(C){return C.length===0?null:C[0]}function p(C){if(C.length===0)return null;var D=C[0],E=C.pop();if(E!==D){C[0]=E;e:for(var x=0,w=C.length,G=w>>>1;x<G;){var X=2*(x+1)-1,te=C[X],ee=X+1,pe=C[ee];if(0>v(te,E))ee<w&&0>v(pe,te)?(C[x]=pe,C[ee]=E,x=ee):(C[x]=te,C[X]=E,x=X);else if(ee<w&&0>v(pe,E))C[x]=pe,C[ee]=E,x=ee;else break e}}return D}function v(C,D){var E=C.sortIndex-D.sortIndex;return E!==0?E:C.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;i.unstable_now=function(){return j.now()}}else{var N=Date,I=N.now();i.unstable_now=function(){return N.now()-I}}var T=[],U=[],V=1,F=null,O=3,Q=!1,ne=!1,q=!1,Y=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function se(C){for(var D=l(U);D!==null;){if(D.callback===null)p(U);else if(D.startTime<=C)p(U),D.sortIndex=D.expirationTime,d(T,D);else break;D=l(U)}}function Z(C){if(q=!1,se(C),!ne)if(l(T)!==null)ne=!0,We(ue);else{var D=l(U);D!==null&&fe(Z,D.startTime-C)}}function ue(C,D){ne=!1,q&&(q=!1,he(Ee),Ee=-1),Q=!0;var E=O;try{for(se(D),F=l(T);F!==null&&(!(F.expirationTime>D)||C&&!Mr());){var x=F.callback;if(typeof x=="function"){F.callback=null,O=F.priorityLevel;var w=x(F.expirationTime<=D);D=i.unstable_now(),typeof w=="function"?F.callback=w:F===l(T)&&p(T),se(D)}else p(T);F=l(T)}if(F!==null)var G=!0;else{var X=l(U);X!==null&&fe(Z,X.startTime-D),G=!1}return G}finally{F=null,O=E,Q=!1}}var K=!1,H=null,Ee=-1,rr=5,yr=-1;function Mr(){return!(i.unstable_now()-yr<rr)}function cr(){if(H!==null){var C=i.unstable_now();yr=C;var D=!0;try{D=H(!0,C)}finally{D?Ve():(K=!1,H=null)}}else K=!1}var Ve;if(typeof oe=="function")Ve=function(){oe(cr)};else if(typeof MessageChannel!="undefined"){var tr=new MessageChannel,dr=tr.port2;tr.port1.onmessage=cr,Ve=function(){dr.postMessage(null)}}else Ve=function(){Y(cr,0)};function We(C){H=C,K||(K=!0,Ve())}function fe(C,D){Ee=Y(function(){C(i.unstable_now())},D)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(C){C.callback=null},i.unstable_continueExecution=function(){ne||Q||(ne=!0,We(ue))},i.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rr=0<C?Math.floor(1e3/C):5},i.unstable_getCurrentPriorityLevel=function(){return O},i.unstable_getFirstCallbackNode=function(){return l(T)},i.unstable_next=function(C){switch(O){case 1:case 2:case 3:var D=3;break;default:D=O}var E=O;O=D;try{return C()}finally{O=E}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(C,D){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var E=O;O=C;try{return D()}finally{O=E}},i.unstable_scheduleCallback=function(C,D,E){var x=i.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?x+E:x):E=x,C){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=E+w,C={id:V++,callback:D,priorityLevel:C,startTime:E,expirationTime:w,sortIndex:-1},E>x?(C.sortIndex=E,d(U,C),l(T)===null&&C===l(U)&&(q?(he(Ee),Ee=-1):q=!0,fe(Z,E-x))):(C.sortIndex=w,d(T,C),ne||Q||(ne=!0,We(ue))),C},i.unstable_shouldYield=Mr,i.unstable_wrapCallback=function(C){var D=O;return function(){var E=O;O=D;try{return C.apply(this,arguments)}finally{O=E}}}})(Lo)),Lo}var tu;function dm(){return tu||(tu=1,Eo.exports=cm()),Eo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu;function um(){if(nu)return Ze;nu=1;var i=Ko(),d=dm();function l(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,v={};function j(e,r){N(e,r),N(e+"Capture",r)}function N(e,r){for(v[e]=r,e=0;e<r.length;e++)p.add(r[e])}var I=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,U=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V={},F={};function O(e){return T.call(F,e)?!0:T.call(V,e)?!1:U.test(e)?F[e]=!0:(V[e]=!0,!1)}function Q(e,r,n,s){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ne(e,r,n,s){if(r===null||typeof r=="undefined"||Q(e,r,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function q(e,r,n,s,a,o,c){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=o,this.removeEmptyString=c}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];Y[r]=new q(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new q(e,5,!1,e.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function oe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(he,oe);Y[r]=new q(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(he,oe);Y[r]=new q(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(he,oe);Y[r]=new q(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new q(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new q(e,1,!1,e.toLowerCase(),null,!0,!0)});function se(e,r,n,s){var a=Y.hasOwnProperty(r)?Y[r]:null;(a!==null?a.type!==0:s||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(ne(r,n,a,s)&&(n=null),s||a===null?O(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(r=a.attributeName,s=a.attributeNamespace,n===null?e.removeAttribute(r):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,s?e.setAttributeNS(s,r,n):e.setAttribute(r,n))))}var Z=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),K=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),rr=Symbol.for("react.profiler"),yr=Symbol.for("react.provider"),Mr=Symbol.for("react.context"),cr=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),tr=Symbol.for("react.suspense_list"),dr=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),C=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}var E=Object.assign,x;function w(e){if(x===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+e}var G=!1;function X(e,r){if(!e||G)return"";G=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(y){var s=y}Reflect.construct(e,[],r)}else{try{r.call()}catch(y){s=y}e.call(r.prototype)}else{try{throw Error()}catch(y){s=y}e()}}catch(y){if(y&&s&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),o=s.stack.split(`
`),c=a.length-1,u=o.length-1;1<=c&&0<=u&&a[c]!==o[u];)u--;for(;1<=c&&0<=u;c--,u--)if(a[c]!==o[u]){if(c!==1||u!==1)do if(c--,u--,0>u||a[c]!==o[u]){var h=`
`+a[c].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=c&&0<=u);break}}}finally{G=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?w(e):""}function te(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case K:return"Portal";case rr:return"Profiler";case Ee:return"StrictMode";case Ve:return"Suspense";case tr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mr:return(e.displayName||"Context")+".Consumer";case yr:return(e._context.displayName||"Context")+".Provider";case cr:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dr:return r=e.displayName||null,r!==null?r:ee(e.type)||"Memo";case We:r=e._payload,e=e._init;try{return ee(e(r))}catch{}}return null}function pe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(r);case 8:return r===Ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function _e(e){var r=ce(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),s=""+e[r];if(!e.hasOwnProperty(r)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return a.call(this)},set:function(c){s=""+c,o.call(this,c)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(c){s=""+c},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Dr(e){e._valueTracker||(e._valueTracker=_e(e))}function jr(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),s="";return e&&(s=ce(e)?e.checked?"true":"false":e.value),e=s,e!==n?(r.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ra(e,r){var n=r.checked;return E({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function sl(e,r){var n=r.defaultValue==null?"":r.defaultValue,s=r.checked!=null?r.checked:r.defaultChecked;n=ae(r.value!=null?r.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function al(e,r){r=r.checked,r!=null&&se(e,"checked",r,!1)}function Aa(e,r){al(e,r);var n=ae(r.value),s=r.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Ma(e,r.type,n):r.hasOwnProperty("defaultValue")&&Ma(e,r.type,ae(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function il(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var s=r.type;if(!(s!=="submit"&&s!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ma(e,r,n){(r!=="number"||ns(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dn=Array.isArray;function It(e,r,n,s){if(e=e.options,r){r={};for(var a=0;a<n.length;a++)r["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=r.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&s&&(e[n].defaultSelected=!0)}else{for(n=""+ae(n),r=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}r!==null||e[a].disabled||(r=e[a])}r!==null&&(r.selected=!0)}}function Da(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(l(91));return E({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ol(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(l(92));if(dn(n)){if(1<n.length)throw Error(l(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:ae(n)}}function ll(e,r){var n=ae(r.value),s=ae(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function cl(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function dl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _a(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?dl(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ss,ul=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,n,s,a){MSApp.execUnsafeLocalFunction(function(){return e(r,n,s,a)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(ss=ss||document.createElement("div"),ss.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ss.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function un(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cp=["Webkit","ms","Moz","O"];Object.keys(pn).forEach(function(e){cp.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),pn[r]=pn[e]})});function pl(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||pn.hasOwnProperty(e)&&pn[e]?(""+r).trim():r+"px"}function hl(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var s=n.indexOf("--")===0,a=pl(n,r[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,a):e[n]=a}}var dp=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fa(e,r){if(r){if(dp[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(l(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(l(61))}if(r.style!=null&&typeof r.style!="object")throw Error(l(62))}}function Oa(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wa=null;function Ba(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,Et=null,Lt=null;function ml(e){if(e=An(e)){if(typeof Ha!="function")throw Error(l(280));var r=e.stateNode;r&&(r=Ts(r),Ha(e.stateNode,e.type,r))}}function xl(e){Et?Lt?Lt.push(e):Lt=[e]:Et=e}function fl(){if(Et){var e=Et,r=Lt;if(Lt=Et=null,ml(e),r)for(e=0;e<r.length;e++)ml(r[e])}}function vl(e,r){return e(r)}function gl(){}var Ua=!1;function yl(e,r,n){if(Ua)return e(r,n);Ua=!0;try{return vl(e,r,n)}finally{Ua=!1,(Et!==null||Lt!==null)&&(gl(),fl())}}function hn(e,r){var n=e.stateNode;if(n===null)return null;var s=Ts(n);if(s===null)return null;n=s[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,r,typeof n));return n}var $a=!1;if(I)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){$a=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{$a=!1}function up(e,r,n,s,a,o,c,u,h){var y=Array.prototype.slice.call(arguments,3);try{r.apply(n,y)}catch(b){this.onError(b)}}var xn=!1,as=null,is=!1,Va=null,pp={onError:function(e){xn=!0,as=e}};function hp(e,r,n,s,a,o,c,u,h){xn=!1,as=null,up.apply(pp,arguments)}function mp(e,r,n,s,a,o,c,u,h){if(hp.apply(this,arguments),xn){if(xn){var y=as;xn=!1,as=null}else throw Error(l(198));is||(is=!0,Va=y)}}function ht(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function jl(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function wl(e){if(ht(e)!==e)throw Error(l(188))}function xp(e){var r=e.alternate;if(!r){if(r=ht(e),r===null)throw Error(l(188));return r!==e?null:e}for(var n=e,s=r;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(s=a.return,s!==null){n=s;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return wl(a),e;if(o===s)return wl(a),r;o=o.sibling}throw Error(l(188))}if(n.return!==s.return)n=a,s=o;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,s=o;break}if(u===s){c=!0,s=a,n=o;break}u=u.sibling}if(!c){for(u=o.child;u;){if(u===n){c=!0,n=o,s=a;break}if(u===s){c=!0,s=o,n=a;break}u=u.sibling}if(!c)throw Error(l(189))}}if(n.alternate!==s)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:r}function Nl(e){return e=xp(e),e!==null?kl(e):null}function kl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=kl(e);if(r!==null)return r;e=e.sibling}return null}var bl=d.unstable_scheduleCallback,Sl=d.unstable_cancelCallback,fp=d.unstable_shouldYield,vp=d.unstable_requestPaint,Se=d.unstable_now,gp=d.unstable_getCurrentPriorityLevel,qa=d.unstable_ImmediatePriority,Pl=d.unstable_UserBlockingPriority,os=d.unstable_NormalPriority,yp=d.unstable_LowPriority,Tl=d.unstable_IdlePriority,ls=null,Ir=null;function jp(e){if(Ir&&typeof Ir.onCommitFiberRoot=="function")try{Ir.onCommitFiberRoot(ls,e,void 0,(e.current.flags&128)===128)}catch{}}var wr=Math.clz32?Math.clz32:kp,wp=Math.log,Np=Math.LN2;function kp(e){return e>>>=0,e===0?32:31-(wp(e)/Np|0)|0}var cs=64,ds=4194304;function fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function us(e,r){var n=e.pendingLanes;if(n===0)return 0;var s=0,a=e.suspendedLanes,o=e.pingedLanes,c=n&268435455;if(c!==0){var u=c&~a;u!==0?s=fn(u):(o&=c,o!==0&&(s=fn(o)))}else c=n&~a,c!==0?s=fn(c):o!==0&&(s=fn(o));if(s===0)return 0;if(r!==0&&r!==s&&(r&a)===0&&(a=s&-s,o=r&-r,a>=o||a===16&&(o&4194240)!==0))return r;if((s&4)!==0&&(s|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=s;0<r;)n=31-wr(r),a=1<<n,s|=e[n],r&=~a;return s}function bp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sp(e,r){for(var n=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var c=31-wr(o),u=1<<c,h=a[c];h===-1?((u&n)===0||(u&s)!==0)&&(a[c]=bp(u,r)):h<=r&&(e.expiredLanes|=u),o&=~u}}function Qa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cl(){var e=cs;return cs<<=1,(cs&4194240)===0&&(cs=64),e}function Ka(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function vn(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-wr(r),e[r]=n}function Pp(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-wr(n),o=1<<a;r[a]=0,s[a]=-1,e[a]=-1,n&=~o}}function Ga(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var s=31-wr(n),a=1<<s;a&r|e[s]&r&&(e[s]|=r),n&=~a}}var xe=0;function Il(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var El,Ya,Ll,zl,Rl,Xa=!1,ps=[],qr=null,Qr=null,Kr=null,gn=new Map,yn=new Map,Gr=[],Tp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Al(e,r){switch(e){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Qr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":gn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(r.pointerId)}}function jn(e,r,n,s,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:r,domEventName:n,eventSystemFlags:s,nativeEvent:o,targetContainers:[a]},r!==null&&(r=An(r),r!==null&&Ya(r)),e):(e.eventSystemFlags|=s,r=e.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),e)}function Cp(e,r,n,s,a){switch(r){case"focusin":return qr=jn(qr,e,r,n,s,a),!0;case"dragenter":return Qr=jn(Qr,e,r,n,s,a),!0;case"mouseover":return Kr=jn(Kr,e,r,n,s,a),!0;case"pointerover":var o=a.pointerId;return gn.set(o,jn(gn.get(o)||null,e,r,n,s,a)),!0;case"gotpointercapture":return o=a.pointerId,yn.set(o,jn(yn.get(o)||null,e,r,n,s,a)),!0}return!1}function Ml(e){var r=mt(e.target);if(r!==null){var n=ht(r);if(n!==null){if(r=n.tag,r===13){if(r=jl(n),r!==null){e.blockedOn=r,Rl(e.priority,function(){Ll(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hs(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Za(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Wa=s,n.target.dispatchEvent(s),Wa=null}else return r=An(n),r!==null&&Ya(r),e.blockedOn=n,!1;r.shift()}return!0}function Dl(e,r,n){hs(e)&&n.delete(r)}function Ip(){Xa=!1,qr!==null&&hs(qr)&&(qr=null),Qr!==null&&hs(Qr)&&(Qr=null),Kr!==null&&hs(Kr)&&(Kr=null),gn.forEach(Dl),yn.forEach(Dl)}function wn(e,r){e.blockedOn===r&&(e.blockedOn=null,Xa||(Xa=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Ip)))}function Nn(e){function r(a){return wn(a,e)}if(0<ps.length){wn(ps[0],e);for(var n=1;n<ps.length;n++){var s=ps[n];s.blockedOn===e&&(s.blockedOn=null)}}for(qr!==null&&wn(qr,e),Qr!==null&&wn(Qr,e),Kr!==null&&wn(Kr,e),gn.forEach(r),yn.forEach(r),n=0;n<Gr.length;n++)s=Gr[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<Gr.length&&(n=Gr[0],n.blockedOn===null);)Ml(n),n.blockedOn===null&&Gr.shift()}var zt=Z.ReactCurrentBatchConfig,ms=!0;function Ep(e,r,n,s){var a=xe,o=zt.transition;zt.transition=null;try{xe=1,Ja(e,r,n,s)}finally{xe=a,zt.transition=o}}function Lp(e,r,n,s){var a=xe,o=zt.transition;zt.transition=null;try{xe=4,Ja(e,r,n,s)}finally{xe=a,zt.transition=o}}function Ja(e,r,n,s){if(ms){var a=Za(e,r,n,s);if(a===null)fi(e,r,s,xs,n),Al(e,s);else if(Cp(a,e,r,n,s))s.stopPropagation();else if(Al(e,s),r&4&&-1<Tp.indexOf(e)){for(;a!==null;){var o=An(a);if(o!==null&&El(o),o=Za(e,r,n,s),o===null&&fi(e,r,s,xs,n),o===a)break;a=o}a!==null&&s.stopPropagation()}else fi(e,r,s,null,n)}}var xs=null;function Za(e,r,n,s){if(xs=null,e=Ba(s),e=mt(e),e!==null)if(r=ht(e),r===null)e=null;else if(n=r.tag,n===13){if(e=jl(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return xs=e,null}function _l(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gp()){case qa:return 1;case Pl:return 4;case os:case yp:return 16;case Tl:return 536870912;default:return 16}default:return 16}}var Yr=null,ei=null,fs=null;function Fl(){if(fs)return fs;var e,r=ei,n=r.length,s,a="value"in Yr?Yr.value:Yr.textContent,o=a.length;for(e=0;e<n&&r[e]===a[e];e++);var c=n-e;for(s=1;s<=c&&r[n-s]===a[o-s];s++);return fs=a.slice(e,1<s?1-s:void 0)}function vs(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function gs(){return!0}function Ol(){return!1}function nr(e){function r(n,s,a,o,c){this._reactName=n,this._targetInst=a,this.type=s,this.nativeEvent=o,this.target=c,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?gs:Ol,this.isPropagationStopped=Ol,this}return E(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),r}var Rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=nr(Rt),kn=E({},Rt,{view:0,detail:0}),zp=nr(kn),ti,ni,bn,ys=E({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ai,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(ti=e.screenX-bn.screenX,ni=e.screenY-bn.screenY):ni=ti=0,bn=e),ti)},movementY:function(e){return"movementY"in e?e.movementY:ni}}),Wl=nr(ys),Rp=E({},ys,{dataTransfer:0}),Ap=nr(Rp),Mp=E({},kn,{relatedTarget:0}),si=nr(Mp),Dp=E({},Rt,{animationName:0,elapsedTime:0,pseudoElement:0}),_p=nr(Dp),Fp=E({},Rt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Op=nr(Fp),Wp=E({},Rt,{data:0}),Bl=nr(Wp),Bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $p(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Up[e])?!!r[e]:!1}function ai(){return $p}var Vp=E({},kn,{key:function(e){if(e.key){var r=Bp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ai,charCode:function(e){return e.type==="keypress"?vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qp=nr(Vp),Qp=E({},ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hl=nr(Qp),Kp=E({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ai}),Gp=nr(Kp),Yp=E({},Rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xp=nr(Yp),Jp=E({},ys,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zp=nr(Jp),eh=[9,13,27,32],ii=I&&"CompositionEvent"in window,Sn=null;I&&"documentMode"in document&&(Sn=document.documentMode);var rh=I&&"TextEvent"in window&&!Sn,Ul=I&&(!ii||Sn&&8<Sn&&11>=Sn),$l=" ",Vl=!1;function ql(e,r){switch(e){case"keyup":return eh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ql(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function th(e,r){switch(e){case"compositionend":return Ql(r);case"keypress":return r.which!==32?null:(Vl=!0,$l);case"textInput":return e=r.data,e===$l&&Vl?null:e;default:return null}}function nh(e,r){if(At)return e==="compositionend"||!ii&&ql(e,r)?(e=Fl(),fs=ei=Yr=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ul&&r.locale!=="ko"?null:r.data;default:return null}}var sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!sh[e.type]:r==="textarea"}function Gl(e,r,n,s){xl(s),r=bs(r,"onChange"),0<r.length&&(n=new ri("onChange","change",null,n,s),e.push({event:n,listeners:r}))}var Pn=null,Tn=null;function ah(e){hc(e,0)}function js(e){var r=Ot(e);if(jr(r))return e}function ih(e,r){if(e==="change")return r}var Yl=!1;if(I){var oi;if(I){var li="oninput"in document;if(!li){var Xl=document.createElement("div");Xl.setAttribute("oninput","return;"),li=typeof Xl.oninput=="function"}oi=li}else oi=!1;Yl=oi&&(!document.documentMode||9<document.documentMode)}function Jl(){Pn&&(Pn.detachEvent("onpropertychange",Zl),Tn=Pn=null)}function Zl(e){if(e.propertyName==="value"&&js(Tn)){var r=[];Gl(r,Tn,e,Ba(e)),yl(ah,r)}}function oh(e,r,n){e==="focusin"?(Jl(),Pn=r,Tn=n,Pn.attachEvent("onpropertychange",Zl)):e==="focusout"&&Jl()}function lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return js(Tn)}function ch(e,r){if(e==="click")return js(r)}function dh(e,r){if(e==="input"||e==="change")return js(r)}function uh(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Nr=typeof Object.is=="function"?Object.is:uh;function Cn(e,r){if(Nr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),s=Object.keys(r);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var a=n[s];if(!T.call(r,a)||!Nr(e[a],r[a]))return!1}return!0}function ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rc(e,r){var n=ec(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=r&&s>=r)return{node:n,offset:r-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ec(n)}}function tc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?tc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function nc(){for(var e=window,r=ns();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=ns(e.document)}return r}function ci(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function ph(e){var r=nc(),n=e.focusedElem,s=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&tc(n.ownerDocument.documentElement,n)){if(s!==null&&ci(n)){if(r=s.start,e=s.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(s.start,a);s=s.end===void 0?o:Math.min(s.end,a),!e.extend&&o>s&&(a=s,s=o,o=a),a=rc(n,o);var c=rc(n,s);a&&c&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(r=r.createRange(),r.setStart(a.node,a.offset),e.removeAllRanges(),o>s?(e.addRange(r),e.extend(c.node,c.offset)):(r.setEnd(c.node,c.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hh=I&&"documentMode"in document&&11>=document.documentMode,Mt=null,di=null,In=null,ui=!1;function sc(e,r,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ui||Mt==null||Mt!==ns(s)||(s=Mt,"selectionStart"in s&&ci(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),In&&Cn(In,s)||(In=s,s=bs(di,"onSelect"),0<s.length&&(r=new ri("onSelect","select",null,r,n),e.push({event:r,listeners:s}),r.target=Mt)))}function ws(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Dt={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionend:ws("Transition","TransitionEnd")},pi={},ac={};I&&(ac=document.createElement("div").style,"AnimationEvent"in window||(delete Dt.animationend.animation,delete Dt.animationiteration.animation,delete Dt.animationstart.animation),"TransitionEvent"in window||delete Dt.transitionend.transition);function Ns(e){if(pi[e])return pi[e];if(!Dt[e])return e;var r=Dt[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in ac)return pi[e]=r[n];return e}var ic=Ns("animationend"),oc=Ns("animationiteration"),lc=Ns("animationstart"),cc=Ns("transitionend"),dc=new Map,uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(e,r){dc.set(e,r),j(r,[e])}for(var hi=0;hi<uc.length;hi++){var mi=uc[hi],mh=mi.toLowerCase(),xh=mi[0].toUpperCase()+mi.slice(1);Xr(mh,"on"+xh)}Xr(ic,"onAnimationEnd"),Xr(oc,"onAnimationIteration"),Xr(lc,"onAnimationStart"),Xr("dblclick","onDoubleClick"),Xr("focusin","onFocus"),Xr("focusout","onBlur"),Xr(cc,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fh=new Set("cancel close invalid load scroll toggle".split(" ").concat(En));function pc(e,r,n){var s=e.type||"unknown-event";e.currentTarget=n,mp(s,r,void 0,e),e.currentTarget=null}function hc(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],a=s.event;s=s.listeners;e:{var o=void 0;if(r)for(var c=s.length-1;0<=c;c--){var u=s[c],h=u.instance,y=u.currentTarget;if(u=u.listener,h!==o&&a.isPropagationStopped())break e;pc(a,u,y),o=h}else for(c=0;c<s.length;c++){if(u=s[c],h=u.instance,y=u.currentTarget,u=u.listener,h!==o&&a.isPropagationStopped())break e;pc(a,u,y),o=h}}}if(is)throw e=Va,is=!1,Va=null,e}function ge(e,r){var n=r[Ni];n===void 0&&(n=r[Ni]=new Set);var s=e+"__bubble";n.has(s)||(mc(r,e,2,!1),n.add(s))}function xi(e,r,n){var s=0;r&&(s|=4),mc(n,e,s,r)}var ks="_reactListening"+Math.random().toString(36).slice(2);function Ln(e){if(!e[ks]){e[ks]=!0,p.forEach(function(n){n!=="selectionchange"&&(fh.has(n)||xi(n,!1,e),xi(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[ks]||(r[ks]=!0,xi("selectionchange",!1,r))}}function mc(e,r,n,s){switch(_l(r)){case 1:var a=Ep;break;case 4:a=Lp;break;default:a=Ja}n=a.bind(null,r,n,e),a=void 0,!$a||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(r,n,{capture:!0,passive:a}):e.addEventListener(r,n,!0):a!==void 0?e.addEventListener(r,n,{passive:a}):e.addEventListener(r,n,!1)}function fi(e,r,n,s,a){var o=s;if((r&1)===0&&(r&2)===0&&s!==null)e:for(;;){if(s===null)return;var c=s.tag;if(c===3||c===4){var u=s.stateNode.containerInfo;if(u===a||u.nodeType===8&&u.parentNode===a)break;if(c===4)for(c=s.return;c!==null;){var h=c.tag;if((h===3||h===4)&&(h=c.stateNode.containerInfo,h===a||h.nodeType===8&&h.parentNode===a))return;c=c.return}for(;u!==null;){if(c=mt(u),c===null)return;if(h=c.tag,h===5||h===6){s=o=c;continue e}u=u.parentNode}}s=s.return}yl(function(){var y=o,b=Ba(n),S=[];e:{var k=dc.get(e);if(k!==void 0){var L=ri,R=e;switch(e){case"keypress":if(vs(n)===0)break e;case"keydown":case"keyup":L=qp;break;case"focusin":R="focus",L=si;break;case"focusout":R="blur",L=si;break;case"beforeblur":case"afterblur":L=si;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Wl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Ap;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Gp;break;case ic:case oc:case lc:L=_p;break;case cc:L=Xp;break;case"scroll":L=zp;break;case"wheel":L=Zp;break;case"copy":case"cut":case"paste":L=Op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Hl}var A=(r&4)!==0,Pe=!A&&e==="scroll",f=A?k!==null?k+"Capture":null:k;A=[];for(var m=y,g;m!==null;){g=m;var P=g.stateNode;if(g.tag===5&&P!==null&&(g=P,f!==null&&(P=hn(m,f),P!=null&&A.push(zn(m,P,g)))),Pe)break;m=m.return}0<A.length&&(k=new L(k,R,null,n,b),S.push({event:k,listeners:A}))}}if((r&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",k&&n!==Wa&&(R=n.relatedTarget||n.fromElement)&&(mt(R)||R[_r]))break e;if((L||k)&&(k=b.window===b?b:(k=b.ownerDocument)?k.defaultView||k.parentWindow:window,L?(R=n.relatedTarget||n.toElement,L=y,R=R?mt(R):null,R!==null&&(Pe=ht(R),R!==Pe||R.tag!==5&&R.tag!==6)&&(R=null)):(L=null,R=y),L!==R)){if(A=Wl,P="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(A=Hl,P="onPointerLeave",f="onPointerEnter",m="pointer"),Pe=L==null?k:Ot(L),g=R==null?k:Ot(R),k=new A(P,m+"leave",L,n,b),k.target=Pe,k.relatedTarget=g,P=null,mt(b)===y&&(A=new A(f,m+"enter",R,n,b),A.target=g,A.relatedTarget=Pe,P=A),Pe=P,L&&R)r:{for(A=L,f=R,m=0,g=A;g;g=_t(g))m++;for(g=0,P=f;P;P=_t(P))g++;for(;0<m-g;)A=_t(A),m--;for(;0<g-m;)f=_t(f),g--;for(;m--;){if(A===f||f!==null&&A===f.alternate)break r;A=_t(A),f=_t(f)}A=null}else A=null;L!==null&&xc(S,k,L,A,!1),R!==null&&Pe!==null&&xc(S,Pe,R,A,!0)}}e:{if(k=y?Ot(y):window,L=k.nodeName&&k.nodeName.toLowerCase(),L==="select"||L==="input"&&k.type==="file")var M=ih;else if(Kl(k))if(Yl)M=dh;else{M=lh;var W=oh}else(L=k.nodeName)&&L.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(M=ch);if(M&&(M=M(e,y))){Gl(S,M,n,b);break e}W&&W(e,k,y),e==="focusout"&&(W=k._wrapperState)&&W.controlled&&k.type==="number"&&Ma(k,"number",k.value)}switch(W=y?Ot(y):window,e){case"focusin":(Kl(W)||W.contentEditable==="true")&&(Mt=W,di=y,In=null);break;case"focusout":In=di=Mt=null;break;case"mousedown":ui=!0;break;case"contextmenu":case"mouseup":case"dragend":ui=!1,sc(S,n,b);break;case"selectionchange":if(hh)break;case"keydown":case"keyup":sc(S,n,b)}var B;if(ii)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else At?ql(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Ul&&n.locale!=="ko"&&(At||$!=="onCompositionStart"?$==="onCompositionEnd"&&At&&(B=Fl()):(Yr=b,ei="value"in Yr?Yr.value:Yr.textContent,At=!0)),W=bs(y,$),0<W.length&&($=new Bl($,e,null,n,b),S.push({event:$,listeners:W}),B?$.data=B:(B=Ql(n),B!==null&&($.data=B)))),(B=rh?th(e,n):nh(e,n))&&(y=bs(y,"onBeforeInput"),0<y.length&&(b=new Bl("onBeforeInput","beforeinput",null,n,b),S.push({event:b,listeners:y}),b.data=B))}hc(S,r)})}function zn(e,r,n){return{instance:e,listener:r,currentTarget:n}}function bs(e,r){for(var n=r+"Capture",s=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=hn(e,n),o!=null&&s.unshift(zn(e,o,a)),o=hn(e,r),o!=null&&s.push(zn(e,o,a))),e=e.return}return s}function _t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xc(e,r,n,s,a){for(var o=r._reactName,c=[];n!==null&&n!==s;){var u=n,h=u.alternate,y=u.stateNode;if(h!==null&&h===s)break;u.tag===5&&y!==null&&(u=y,a?(h=hn(n,o),h!=null&&c.unshift(zn(n,h,u))):a||(h=hn(n,o),h!=null&&c.push(zn(n,h,u)))),n=n.return}c.length!==0&&e.push({event:r,listeners:c})}var vh=/\r\n?/g,gh=/\u0000|\uFFFD/g;function fc(e){return(typeof e=="string"?e:""+e).replace(vh,`
`).replace(gh,"")}function Ss(e,r,n){if(r=fc(r),fc(e)!==r&&n)throw Error(l(425))}function Ps(){}var vi=null,gi=null;function yi(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ji=typeof setTimeout=="function"?setTimeout:void 0,yh=typeof clearTimeout=="function"?clearTimeout:void 0,vc=typeof Promise=="function"?Promise:void 0,jh=typeof queueMicrotask=="function"?queueMicrotask:typeof vc!="undefined"?function(e){return vc.resolve(null).then(e).catch(wh)}:ji;function wh(e){setTimeout(function(){throw e})}function wi(e,r){var n=r,s=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(s===0){e.removeChild(a),Nn(r);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=a}while(n);Nn(r)}function Jr(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function gc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var Ft=Math.random().toString(36).slice(2),Er="__reactFiber$"+Ft,Rn="__reactProps$"+Ft,_r="__reactContainer$"+Ft,Ni="__reactEvents$"+Ft,Nh="__reactListeners$"+Ft,kh="__reactHandles$"+Ft;function mt(e){var r=e[Er];if(r)return r;for(var n=e.parentNode;n;){if(r=n[_r]||n[Er]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=gc(e);e!==null;){if(n=e[Er])return n;e=gc(e)}return r}e=n,n=e.parentNode}return null}function An(e){return e=e[Er]||e[_r],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ot(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Ts(e){return e[Rn]||null}var ki=[],Wt=-1;function Zr(e){return{current:e}}function ye(e){0>Wt||(e.current=ki[Wt],ki[Wt]=null,Wt--)}function ve(e,r){Wt++,ki[Wt]=e.current,e.current=r}var et={},Be=Zr(et),Ke=Zr(!1),xt=et;function Bt(e,r){var n=e.type.contextTypes;if(!n)return et;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===r)return s.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=r[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ge(e){return e=e.childContextTypes,e!=null}function Cs(){ye(Ke),ye(Be)}function yc(e,r,n){if(Be.current!==et)throw Error(l(168));ve(Be,r),ve(Ke,n)}function jc(e,r,n){var s=e.stateNode;if(r=r.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var a in s)if(!(a in r))throw Error(l(108,pe(e)||"Unknown",a));return E({},n,s)}function Is(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||et,xt=Be.current,ve(Be,e),ve(Ke,Ke.current),!0}function wc(e,r,n){var s=e.stateNode;if(!s)throw Error(l(169));n?(e=jc(e,r,xt),s.__reactInternalMemoizedMergedChildContext=e,ye(Ke),ye(Be),ve(Be,e)):ye(Ke),ve(Ke,n)}var Fr=null,Es=!1,bi=!1;function Nc(e){Fr===null?Fr=[e]:Fr.push(e)}function bh(e){Es=!0,Nc(e)}function rt(){if(!bi&&Fr!==null){bi=!0;var e=0,r=xe;try{var n=Fr;for(xe=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}Fr=null,Es=!1}catch(a){throw Fr!==null&&(Fr=Fr.slice(e+1)),bl(qa,rt),a}finally{xe=r,bi=!1}}return null}var Ht=[],Ut=0,Ls=null,zs=0,ur=[],pr=0,ft=null,Or=1,Wr="";function vt(e,r){Ht[Ut++]=zs,Ht[Ut++]=Ls,Ls=e,zs=r}function kc(e,r,n){ur[pr++]=Or,ur[pr++]=Wr,ur[pr++]=ft,ft=e;var s=Or;e=Wr;var a=32-wr(s)-1;s&=~(1<<a),n+=1;var o=32-wr(r)+a;if(30<o){var c=a-a%5;o=(s&(1<<c)-1).toString(32),s>>=c,a-=c,Or=1<<32-wr(r)+a|n<<a|s,Wr=o+e}else Or=1<<o|n<<a|s,Wr=e}function Si(e){e.return!==null&&(vt(e,1),kc(e,1,0))}function Pi(e){for(;e===Ls;)Ls=Ht[--Ut],Ht[Ut]=null,zs=Ht[--Ut],Ht[Ut]=null;for(;e===ft;)ft=ur[--pr],ur[pr]=null,Wr=ur[--pr],ur[pr]=null,Or=ur[--pr],ur[pr]=null}var sr=null,ar=null,we=!1,kr=null;function bc(e,r){var n=fr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Sc(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,sr=e,ar=Jr(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,sr=e,ar=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=ft!==null?{id:Or,overflow:Wr}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=fr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,sr=e,ar=null,!0):!1;default:return!1}}function Ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ci(e){if(we){var r=ar;if(r){var n=r;if(!Sc(e,r)){if(Ti(e))throw Error(l(418));r=Jr(n.nextSibling);var s=sr;r&&Sc(e,r)?bc(s,n):(e.flags=e.flags&-4097|2,we=!1,sr=e)}}else{if(Ti(e))throw Error(l(418));e.flags=e.flags&-4097|2,we=!1,sr=e}}}function Pc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;sr=e}function Rs(e){if(e!==sr)return!1;if(!we)return Pc(e),we=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!yi(e.type,e.memoizedProps)),r&&(r=ar)){if(Ti(e))throw Tc(),Error(l(418));for(;r;)bc(e,r),r=Jr(r.nextSibling)}if(Pc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){ar=Jr(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}ar=null}}else ar=sr?Jr(e.stateNode.nextSibling):null;return!0}function Tc(){for(var e=ar;e;)e=Jr(e.nextSibling)}function $t(){ar=sr=null,we=!1}function Ii(e){kr===null?kr=[e]:kr.push(e)}var Sh=Z.ReactCurrentBatchConfig;function Mn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var s=n.stateNode}if(!s)throw Error(l(147,e));var a=s,o=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===o?r.ref:(r=function(c){var u=a.refs;c===null?delete u[o]:u[o]=c},r._stringRef=o,r)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function As(e,r){throw e=Object.prototype.toString.call(r),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Cc(e){var r=e._init;return r(e._payload)}function Ic(e){function r(f,m){if(e){var g=f.deletions;g===null?(f.deletions=[m],f.flags|=16):g.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)r(f,m),m=m.sibling;return null}function s(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function a(f,m){return f=ct(f,m),f.index=0,f.sibling=null,f}function o(f,m,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<m?(f.flags|=2,m):g):(f.flags|=2,m)):(f.flags|=1048576,m)}function c(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,m,g,P){return m===null||m.tag!==6?(m=wo(g,f.mode,P),m.return=f,m):(m=a(m,g),m.return=f,m)}function h(f,m,g,P){var M=g.type;return M===H?b(f,m,g.props.children,P,g.key):m!==null&&(m.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===We&&Cc(M)===m.type)?(P=a(m,g.props),P.ref=Mn(f,m,g),P.return=f,P):(P=sa(g.type,g.key,g.props,null,f.mode,P),P.ref=Mn(f,m,g),P.return=f,P)}function y(f,m,g,P){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=No(g,f.mode,P),m.return=f,m):(m=a(m,g.children||[]),m.return=f,m)}function b(f,m,g,P,M){return m===null||m.tag!==7?(m=St(g,f.mode,P,M),m.return=f,m):(m=a(m,g),m.return=f,m)}function S(f,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=wo(""+m,f.mode,g),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ue:return g=sa(m.type,m.key,m.props,null,f.mode,g),g.ref=Mn(f,null,m),g.return=f,g;case K:return m=No(m,f.mode,g),m.return=f,m;case We:var P=m._init;return S(f,P(m._payload),g)}if(dn(m)||D(m))return m=St(m,f.mode,g,null),m.return=f,m;As(f,m)}return null}function k(f,m,g,P){var M=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return M!==null?null:u(f,m,""+g,P);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ue:return g.key===M?h(f,m,g,P):null;case K:return g.key===M?y(f,m,g,P):null;case We:return M=g._init,k(f,m,M(g._payload),P)}if(dn(g)||D(g))return M!==null?null:b(f,m,g,P,null);As(f,g)}return null}function L(f,m,g,P,M){if(typeof P=="string"&&P!==""||typeof P=="number")return f=f.get(g)||null,u(m,f,""+P,M);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ue:return f=f.get(P.key===null?g:P.key)||null,h(m,f,P,M);case K:return f=f.get(P.key===null?g:P.key)||null,y(m,f,P,M);case We:var W=P._init;return L(f,m,g,W(P._payload),M)}if(dn(P)||D(P))return f=f.get(g)||null,b(m,f,P,M,null);As(m,P)}return null}function R(f,m,g,P){for(var M=null,W=null,B=m,$=m=0,Me=null;B!==null&&$<g.length;$++){B.index>$?(Me=B,B=null):Me=B.sibling;var de=k(f,B,g[$],P);if(de===null){B===null&&(B=Me);break}e&&B&&de.alternate===null&&r(f,B),m=o(de,m,$),W===null?M=de:W.sibling=de,W=de,B=Me}if($===g.length)return n(f,B),we&&vt(f,$),M;if(B===null){for(;$<g.length;$++)B=S(f,g[$],P),B!==null&&(m=o(B,m,$),W===null?M=B:W.sibling=B,W=B);return we&&vt(f,$),M}for(B=s(f,B);$<g.length;$++)Me=L(B,f,$,g[$],P),Me!==null&&(e&&Me.alternate!==null&&B.delete(Me.key===null?$:Me.key),m=o(Me,m,$),W===null?M=Me:W.sibling=Me,W=Me);return e&&B.forEach(function(dt){return r(f,dt)}),we&&vt(f,$),M}function A(f,m,g,P){var M=D(g);if(typeof M!="function")throw Error(l(150));if(g=M.call(g),g==null)throw Error(l(151));for(var W=M=null,B=m,$=m=0,Me=null,de=g.next();B!==null&&!de.done;$++,de=g.next()){B.index>$?(Me=B,B=null):Me=B.sibling;var dt=k(f,B,de.value,P);if(dt===null){B===null&&(B=Me);break}e&&B&&dt.alternate===null&&r(f,B),m=o(dt,m,$),W===null?M=dt:W.sibling=dt,W=dt,B=Me}if(de.done)return n(f,B),we&&vt(f,$),M;if(B===null){for(;!de.done;$++,de=g.next())de=S(f,de.value,P),de!==null&&(m=o(de,m,$),W===null?M=de:W.sibling=de,W=de);return we&&vt(f,$),M}for(B=s(f,B);!de.done;$++,de=g.next())de=L(B,f,$,de.value,P),de!==null&&(e&&de.alternate!==null&&B.delete(de.key===null?$:de.key),m=o(de,m,$),W===null?M=de:W.sibling=de,W=de);return e&&B.forEach(function(sm){return r(f,sm)}),we&&vt(f,$),M}function Pe(f,m,g,P){if(typeof g=="object"&&g!==null&&g.type===H&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ue:e:{for(var M=g.key,W=m;W!==null;){if(W.key===M){if(M=g.type,M===H){if(W.tag===7){n(f,W.sibling),m=a(W,g.props.children),m.return=f,f=m;break e}}else if(W.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===We&&Cc(M)===W.type){n(f,W.sibling),m=a(W,g.props),m.ref=Mn(f,W,g),m.return=f,f=m;break e}n(f,W);break}else r(f,W);W=W.sibling}g.type===H?(m=St(g.props.children,f.mode,P,g.key),m.return=f,f=m):(P=sa(g.type,g.key,g.props,null,f.mode,P),P.ref=Mn(f,m,g),P.return=f,f=P)}return c(f);case K:e:{for(W=g.key;m!==null;){if(m.key===W)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(f,m.sibling),m=a(m,g.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else r(f,m);m=m.sibling}m=No(g,f.mode,P),m.return=f,f=m}return c(f);case We:return W=g._init,Pe(f,m,W(g._payload),P)}if(dn(g))return R(f,m,g,P);if(D(g))return A(f,m,g,P);As(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(f,m.sibling),m=a(m,g),m.return=f,f=m):(n(f,m),m=wo(g,f.mode,P),m.return=f,f=m),c(f)):n(f,m)}return Pe}var Vt=Ic(!0),Ec=Ic(!1),Ms=Zr(null),Ds=null,qt=null,Ei=null;function Li(){Ei=qt=Ds=null}function zi(e){var r=Ms.current;ye(Ms),e._currentValue=r}function Ri(e,r,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,s!==null&&(s.childLanes|=r)):s!==null&&(s.childLanes&r)!==r&&(s.childLanes|=r),e===n)break;e=e.return}}function Qt(e,r){Ds=e,Ei=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Ye=!0),e.firstContext=null)}function hr(e){var r=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:r,next:null},qt===null){if(Ds===null)throw Error(l(308));qt=e,Ds.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return r}var gt=null;function Ai(e){gt===null?gt=[e]:gt.push(e)}function Lc(e,r,n,s){var a=r.interleaved;return a===null?(n.next=n,Ai(r)):(n.next=a.next,a.next=n),r.interleaved=n,Br(e,s)}function Br(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function Mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function nt(e,r,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(le&2)!==0){var a=s.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),s.pending=r,Br(e,n)}return a=s.interleaved,a===null?(r.next=r,Ai(s)):(r.next=a.next,a.next=r),s.interleaved=r,Br(e,n)}function _s(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var s=r.lanes;s&=e.pendingLanes,n|=s,r.lanes=n,Ga(e,n)}}function Rc(e,r){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=c:o=o.next=c,n=n.next}while(n!==null);o===null?a=o=r:o=o.next=r}else a=o=r;n={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Fs(e,r,n,s){var a=e.updateQueue;tt=!1;var o=a.firstBaseUpdate,c=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var h=u,y=h.next;h.next=null,c===null?o=y:c.next=y,c=h;var b=e.alternate;b!==null&&(b=b.updateQueue,u=b.lastBaseUpdate,u!==c&&(u===null?b.firstBaseUpdate=y:u.next=y,b.lastBaseUpdate=h))}if(o!==null){var S=a.baseState;c=0,b=y=h=null,u=o;do{var k=u.lane,L=u.eventTime;if((s&k)===k){b!==null&&(b=b.next={eventTime:L,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var R=e,A=u;switch(k=r,L=n,A.tag){case 1:if(R=A.payload,typeof R=="function"){S=R.call(L,S,k);break e}S=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=A.payload,k=typeof R=="function"?R.call(L,S,k):R,k==null)break e;S=E({},S,k);break e;case 2:tt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,k=a.effects,k===null?a.effects=[u]:k.push(u))}else L={eventTime:L,lane:k,tag:u.tag,payload:u.payload,callback:u.callback,next:null},b===null?(y=b=L,h=S):b=b.next=L,c|=k;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;k=u,u=k.next,k.next=null,a.lastBaseUpdate=k,a.shared.pending=null}}while(!0);if(b===null&&(h=S),a.baseState=h,a.firstBaseUpdate=y,a.lastBaseUpdate=b,r=a.shared.interleaved,r!==null){a=r;do c|=a.lane,a=a.next;while(a!==r)}else o===null&&(a.shared.lanes=0);wt|=c,e.lanes=c,e.memoizedState=S}}function Ac(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var s=e[r],a=s.callback;if(a!==null){if(s.callback=null,s=n,typeof a!="function")throw Error(l(191,a));a.call(s)}}}var Dn={},Lr=Zr(Dn),_n=Zr(Dn),Fn=Zr(Dn);function yt(e){if(e===Dn)throw Error(l(174));return e}function Di(e,r){switch(ve(Fn,r),ve(_n,e),ve(Lr,Dn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:_a(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=_a(r,e)}ye(Lr),ve(Lr,r)}function Kt(){ye(Lr),ye(_n),ye(Fn)}function Mc(e){yt(Fn.current);var r=yt(Lr.current),n=_a(r,e.type);r!==n&&(ve(_n,e),ve(Lr,n))}function _i(e){_n.current===e&&(ye(Lr),ye(_n))}var Ne=Zr(0);function Os(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Fi=[];function Oi(){for(var e=0;e<Fi.length;e++)Fi[e]._workInProgressVersionPrimary=null;Fi.length=0}var Ws=Z.ReactCurrentDispatcher,Wi=Z.ReactCurrentBatchConfig,jt=0,ke=null,Le=null,Re=null,Bs=!1,On=!1,Wn=0,Ph=0;function He(){throw Error(l(321))}function Bi(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Nr(e[n],r[n]))return!1;return!0}function Hi(e,r,n,s,a,o){if(jt=o,ke=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ws.current=e===null||e.memoizedState===null?Eh:Lh,e=n(s,a),On){o=0;do{if(On=!1,Wn=0,25<=o)throw Error(l(301));o+=1,Re=Le=null,r.updateQueue=null,Ws.current=zh,e=n(s,a)}while(On)}if(Ws.current=$s,r=Le!==null&&Le.next!==null,jt=0,Re=Le=ke=null,Bs=!1,r)throw Error(l(300));return e}function Ui(){var e=Wn!==0;return Wn=0,e}function zr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ke.memoizedState=Re=e:Re=Re.next=e,Re}function mr(){if(Le===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var r=Re===null?ke.memoizedState:Re.next;if(r!==null)Re=r,Le=e;else{if(e===null)throw Error(l(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Re===null?ke.memoizedState=Re=e:Re=Re.next=e}return Re}function Bn(e,r){return typeof r=="function"?r(e):r}function $i(e){var r=mr(),n=r.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var s=Le,a=s.baseQueue,o=n.pending;if(o!==null){if(a!==null){var c=a.next;a.next=o.next,o.next=c}s.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,s=s.baseState;var u=c=null,h=null,y=o;do{var b=y.lane;if((jt&b)===b)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),s=y.hasEagerState?y.eagerState:e(s,y.action);else{var S={lane:b,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(u=h=S,c=s):h=h.next=S,ke.lanes|=b,wt|=b}y=y.next}while(y!==null&&y!==o);h===null?c=s:h.next=u,Nr(s,r.memoizedState)||(Ye=!0),r.memoizedState=s,r.baseState=c,r.baseQueue=h,n.lastRenderedState=s}if(e=n.interleaved,e!==null){a=e;do o=a.lane,ke.lanes|=o,wt|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Vi(e){var r=mr(),n=r.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var s=n.dispatch,a=n.pending,o=r.memoizedState;if(a!==null){n.pending=null;var c=a=a.next;do o=e(o,c.action),c=c.next;while(c!==a);Nr(o,r.memoizedState)||(Ye=!0),r.memoizedState=o,r.baseQueue===null&&(r.baseState=o),n.lastRenderedState=o}return[o,s]}function Dc(){}function _c(e,r){var n=ke,s=mr(),a=r(),o=!Nr(s.memoizedState,a);if(o&&(s.memoizedState=a,Ye=!0),s=s.queue,qi(Wc.bind(null,n,s,e),[e]),s.getSnapshot!==r||o||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Hn(9,Oc.bind(null,n,s,a,r),void 0,null),Ae===null)throw Error(l(349));(jt&30)!==0||Fc(n,r,a)}return a}function Fc(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=ke.updateQueue,r===null?(r={lastEffect:null,stores:null},ke.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Oc(e,r,n,s){r.value=n,r.getSnapshot=s,Bc(r)&&Hc(e)}function Wc(e,r,n){return n(function(){Bc(r)&&Hc(e)})}function Bc(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Nr(e,n)}catch{return!0}}function Hc(e){var r=Br(e,1);r!==null&&Tr(r,e,1,-1)}function Uc(e){var r=zr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:e},r.queue=e,e=e.dispatch=Ih.bind(null,ke,e),[r.memoizedState,e]}function Hn(e,r,n,s){return e={tag:e,create:r,destroy:n,deps:s,next:null},r=ke.updateQueue,r===null?(r={lastEffect:null,stores:null},ke.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,r.lastEffect=e)),e}function $c(){return mr().memoizedState}function Hs(e,r,n,s){var a=zr();ke.flags|=e,a.memoizedState=Hn(1|r,n,void 0,s===void 0?null:s)}function Us(e,r,n,s){var a=mr();s=s===void 0?null:s;var o=void 0;if(Le!==null){var c=Le.memoizedState;if(o=c.destroy,s!==null&&Bi(s,c.deps)){a.memoizedState=Hn(r,n,o,s);return}}ke.flags|=e,a.memoizedState=Hn(1|r,n,o,s)}function Vc(e,r){return Hs(8390656,8,e,r)}function qi(e,r){return Us(2048,8,e,r)}function qc(e,r){return Us(4,2,e,r)}function Qc(e,r){return Us(4,4,e,r)}function Kc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Gc(e,r,n){return n=n!=null?n.concat([e]):null,Us(4,4,Kc.bind(null,r,e),n)}function Qi(){}function Yc(e,r){var n=mr();r=r===void 0?null:r;var s=n.memoizedState;return s!==null&&r!==null&&Bi(r,s[1])?s[0]:(n.memoizedState=[e,r],e)}function Xc(e,r){var n=mr();r=r===void 0?null:r;var s=n.memoizedState;return s!==null&&r!==null&&Bi(r,s[1])?s[0]:(e=e(),n.memoizedState=[e,r],e)}function Jc(e,r,n){return(jt&21)===0?(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=n):(Nr(n,r)||(n=Cl(),ke.lanes|=n,wt|=n,e.baseState=!0),r)}function Th(e,r){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var s=Wi.transition;Wi.transition={};try{e(!1),r()}finally{xe=n,Wi.transition=s}}function Zc(){return mr().memoizedState}function Ch(e,r,n){var s=ot(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},ed(e))rd(r,n);else if(n=Lc(e,r,n,s),n!==null){var a=Qe();Tr(n,e,s,a),td(n,r,s)}}function Ih(e,r,n){var s=ot(e),a={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(ed(e))rd(r,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=r.lastRenderedReducer,o!==null))try{var c=r.lastRenderedState,u=o(c,n);if(a.hasEagerState=!0,a.eagerState=u,Nr(u,c)){var h=r.interleaved;h===null?(a.next=a,Ai(r)):(a.next=h.next,h.next=a),r.interleaved=a;return}}catch{}finally{}n=Lc(e,r,a,s),n!==null&&(a=Qe(),Tr(n,e,s,a),td(n,r,s))}}function ed(e){var r=e.alternate;return e===ke||r!==null&&r===ke}function rd(e,r){On=Bs=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function td(e,r,n){if((n&4194240)!==0){var s=r.lanes;s&=e.pendingLanes,n|=s,r.lanes=n,Ga(e,n)}}var $s={readContext:hr,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},Eh={readContext:hr,useCallback:function(e,r){return zr().memoizedState=[e,r===void 0?null:r],e},useContext:hr,useEffect:Vc,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Hs(4194308,4,Kc.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Hs(4194308,4,e,r)},useInsertionEffect:function(e,r){return Hs(4,2,e,r)},useMemo:function(e,r){var n=zr();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var s=zr();return r=n!==void 0?n(r):r,s.memoizedState=s.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},s.queue=e,e=e.dispatch=Ch.bind(null,ke,e),[s.memoizedState,e]},useRef:function(e){var r=zr();return e={current:e},r.memoizedState=e},useState:Uc,useDebugValue:Qi,useDeferredValue:function(e){return zr().memoizedState=e},useTransition:function(){var e=Uc(!1),r=e[0];return e=Th.bind(null,e[1]),zr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var s=ke,a=zr();if(we){if(n===void 0)throw Error(l(407));n=n()}else{if(n=r(),Ae===null)throw Error(l(349));(jt&30)!==0||Fc(s,r,n)}a.memoizedState=n;var o={value:n,getSnapshot:r};return a.queue=o,Vc(Wc.bind(null,s,o,e),[e]),s.flags|=2048,Hn(9,Oc.bind(null,s,o,n,r),void 0,null),n},useId:function(){var e=zr(),r=Ae.identifierPrefix;if(we){var n=Wr,s=Or;n=(s&~(1<<32-wr(s)-1)).toString(32)+n,r=":"+r+"R"+n,n=Wn++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Ph++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Lh={readContext:hr,useCallback:Yc,useContext:hr,useEffect:qi,useImperativeHandle:Gc,useInsertionEffect:qc,useLayoutEffect:Qc,useMemo:Xc,useReducer:$i,useRef:$c,useState:function(){return $i(Bn)},useDebugValue:Qi,useDeferredValue:function(e){var r=mr();return Jc(r,Le.memoizedState,e)},useTransition:function(){var e=$i(Bn)[0],r=mr().memoizedState;return[e,r]},useMutableSource:Dc,useSyncExternalStore:_c,useId:Zc,unstable_isNewReconciler:!1},zh={readContext:hr,useCallback:Yc,useContext:hr,useEffect:qi,useImperativeHandle:Gc,useInsertionEffect:qc,useLayoutEffect:Qc,useMemo:Xc,useReducer:Vi,useRef:$c,useState:function(){return Vi(Bn)},useDebugValue:Qi,useDeferredValue:function(e){var r=mr();return Le===null?r.memoizedState=e:Jc(r,Le.memoizedState,e)},useTransition:function(){var e=Vi(Bn)[0],r=mr().memoizedState;return[e,r]},useMutableSource:Dc,useSyncExternalStore:_c,useId:Zc,unstable_isNewReconciler:!1};function br(e,r){if(e&&e.defaultProps){r=E({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Ki(e,r,n,s){r=e.memoizedState,n=n(s,r),n=n==null?r:E({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={isMounted:function(e){return(e=e._reactInternals)?ht(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var s=Qe(),a=ot(e),o=Hr(s,a);o.payload=r,n!=null&&(o.callback=n),r=nt(e,o,a),r!==null&&(Tr(r,e,a,s),_s(r,e,a))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var s=Qe(),a=ot(e),o=Hr(s,a);o.tag=1,o.payload=r,n!=null&&(o.callback=n),r=nt(e,o,a),r!==null&&(Tr(r,e,a,s),_s(r,e,a))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=Qe(),s=ot(e),a=Hr(n,s);a.tag=2,r!=null&&(a.callback=r),r=nt(e,a,s),r!==null&&(Tr(r,e,s,n),_s(r,e,s))}};function nd(e,r,n,s,a,o,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,c):r.prototype&&r.prototype.isPureReactComponent?!Cn(n,s)||!Cn(a,o):!0}function sd(e,r,n){var s=!1,a=et,o=r.contextType;return typeof o=="object"&&o!==null?o=hr(o):(a=Ge(r)?xt:Be.current,s=r.contextTypes,o=(s=s!=null)?Bt(e,a):et),r=new r(n,o),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Vs,e.stateNode=r,r._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),r}function ad(e,r,n,s){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,s),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,s),r.state!==e&&Vs.enqueueReplaceState(r,r.state,null)}function Gi(e,r,n,s){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Mi(e);var o=r.contextType;typeof o=="object"&&o!==null?a.context=hr(o):(o=Ge(r)?xt:Be.current,a.context=Bt(e,o)),a.state=e.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(Ki(e,r,o,n),a.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Vs.enqueueReplaceState(a,a.state,null),Fs(e,n,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Gt(e,r){try{var n="",s=r;do n+=te(s),s=s.return;while(s);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:r,stack:a,digest:null}}function Yi(e,r,n){return{value:e,source:null,stack:n!=null?n:null,digest:r!=null?r:null}}function Xi(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Rh=typeof WeakMap=="function"?WeakMap:Map;function id(e,r,n){n=Hr(-1,n),n.tag=3,n.payload={element:null};var s=r.value;return n.callback=function(){Js||(Js=!0,ho=s),Xi(e,r)},n}function od(e,r,n){n=Hr(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=r.value;n.payload=function(){return s(a)},n.callback=function(){Xi(e,r)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Xi(e,r),typeof s!="function"&&(at===null?at=new Set([this]):at.add(this));var c=r.stack;this.componentDidCatch(r.value,{componentStack:c!==null?c:""})}),n}function ld(e,r,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Rh;var a=new Set;s.set(r,a)}else a=s.get(r),a===void 0&&(a=new Set,s.set(r,a));a.has(n)||(a.add(n),e=Qh.bind(null,e,r,n),r.then(e,e))}function cd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function dd(e,r,n,s,a){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Hr(-1,1),r.tag=2,nt(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Ah=Z.ReactCurrentOwner,Ye=!1;function qe(e,r,n,s){r.child=e===null?Ec(r,null,n,s):Vt(r,e.child,n,s)}function ud(e,r,n,s,a){n=n.render;var o=r.ref;return Qt(r,a),s=Hi(e,r,n,s,o,a),n=Ui(),e!==null&&!Ye?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Ur(e,r,a)):(we&&n&&Si(r),r.flags|=1,qe(e,r,s,a),r.child)}function pd(e,r,n,s,a){if(e===null){var o=n.type;return typeof o=="function"&&!jo(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=o,hd(e,r,o,s,a)):(e=sa(n.type,null,s,r,r.mode,a),e.ref=r.ref,e.return=r,r.child=e)}if(o=e.child,(e.lanes&a)===0){var c=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cn,n(c,s)&&e.ref===r.ref)return Ur(e,r,a)}return r.flags|=1,e=ct(o,s),e.ref=r.ref,e.return=r,r.child=e}function hd(e,r,n,s,a){if(e!==null){var o=e.memoizedProps;if(Cn(o,s)&&e.ref===r.ref)if(Ye=!1,r.pendingProps=s=o,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Ye=!0);else return r.lanes=e.lanes,Ur(e,r,a)}return Ji(e,r,n,s,a)}function md(e,r,n){var s=r.pendingProps,a=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Xt,ir),ir|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,ve(Xt,ir),ir|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:n,ve(Xt,ir),ir|=s}else o!==null?(s=o.baseLanes|n,r.memoizedState=null):s=n,ve(Xt,ir),ir|=s;return qe(e,r,a,n),r.child}function xd(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function Ji(e,r,n,s,a){var o=Ge(n)?xt:Be.current;return o=Bt(r,o),Qt(r,a),n=Hi(e,r,n,s,o,a),s=Ui(),e!==null&&!Ye?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Ur(e,r,a)):(we&&s&&Si(r),r.flags|=1,qe(e,r,n,a),r.child)}function fd(e,r,n,s,a){if(Ge(n)){var o=!0;Is(r)}else o=!1;if(Qt(r,a),r.stateNode===null)Qs(e,r),sd(r,n,s),Gi(r,n,s,a),s=!0;else if(e===null){var c=r.stateNode,u=r.memoizedProps;c.props=u;var h=c.context,y=n.contextType;typeof y=="object"&&y!==null?y=hr(y):(y=Ge(n)?xt:Be.current,y=Bt(r,y));var b=n.getDerivedStateFromProps,S=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function";S||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(u!==s||h!==y)&&ad(r,c,s,y),tt=!1;var k=r.memoizedState;c.state=k,Fs(r,s,c,a),h=r.memoizedState,u!==s||k!==h||Ke.current||tt?(typeof b=="function"&&(Ki(r,n,b,s),h=r.memoizedState),(u=tt||nd(r,n,u,s,k,h,y))?(S||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(r.flags|=4194308)):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=s,r.memoizedState=h),c.props=s,c.state=h,c.context=y,s=u):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),s=!1)}else{c=r.stateNode,zc(e,r),u=r.memoizedProps,y=r.type===r.elementType?u:br(r.type,u),c.props=y,S=r.pendingProps,k=c.context,h=n.contextType,typeof h=="object"&&h!==null?h=hr(h):(h=Ge(n)?xt:Be.current,h=Bt(r,h));var L=n.getDerivedStateFromProps;(b=typeof L=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(u!==S||k!==h)&&ad(r,c,s,h),tt=!1,k=r.memoizedState,c.state=k,Fs(r,s,c,a);var R=r.memoizedState;u!==S||k!==R||Ke.current||tt?(typeof L=="function"&&(Ki(r,n,L,s),R=r.memoizedState),(y=tt||nd(r,n,y,s,k,R,h)||!1)?(b||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,R,h),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,R,h)),typeof c.componentDidUpdate=="function"&&(r.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(r.flags|=1024),r.memoizedProps=s,r.memoizedState=R),c.props=s,c.state=R,c.context=h,s=y):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(r.flags|=1024),s=!1)}return Zi(e,r,n,s,o,a)}function Zi(e,r,n,s,a,o){xd(e,r);var c=(r.flags&128)!==0;if(!s&&!c)return a&&wc(r,n,!1),Ur(e,r,o);s=r.stateNode,Ah.current=r;var u=c&&typeof n.getDerivedStateFromError!="function"?null:s.render();return r.flags|=1,e!==null&&c?(r.child=Vt(r,e.child,null,o),r.child=Vt(r,null,u,o)):qe(e,r,u,o),r.memoizedState=s.state,a&&wc(r,n,!0),r.child}function vd(e){var r=e.stateNode;r.pendingContext?yc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&yc(e,r.context,!1),Di(e,r.containerInfo)}function gd(e,r,n,s,a){return $t(),Ii(a),r.flags|=256,qe(e,r,n,s),r.child}var eo={dehydrated:null,treeContext:null,retryLane:0};function ro(e){return{baseLanes:e,cachePool:null,transitions:null}}function yd(e,r,n){var s=r.pendingProps,a=Ne.current,o=!1,c=(r.flags&128)!==0,u;if((u=c)||(u=e!==null&&e.memoizedState===null?!1:(a&2)!==0),u?(o=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ve(Ne,a&1),e===null)return Ci(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(c=s.children,e=s.fallback,o?(s=r.mode,o=r.child,c={mode:"hidden",children:c},(s&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=c):o=aa(c,s,0,null),e=St(e,s,n,null),o.return=r,e.return=r,o.sibling=e,r.child=o,r.child.memoizedState=ro(n),r.memoizedState=eo,e):to(r,c));if(a=e.memoizedState,a!==null&&(u=a.dehydrated,u!==null))return Mh(e,r,c,s,u,a,n);if(o){o=s.fallback,c=r.mode,a=e.child,u=a.sibling;var h={mode:"hidden",children:s.children};return(c&1)===0&&r.child!==a?(s=r.child,s.childLanes=0,s.pendingProps=h,r.deletions=null):(s=ct(a,h),s.subtreeFlags=a.subtreeFlags&14680064),u!==null?o=ct(u,o):(o=St(o,c,n,null),o.flags|=2),o.return=r,s.return=r,s.sibling=o,r.child=s,s=o,o=r.child,c=e.child.memoizedState,c=c===null?ro(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},o.memoizedState=c,o.childLanes=e.childLanes&~n,r.memoizedState=eo,s}return o=e.child,e=o.sibling,s=ct(o,{mode:"visible",children:s.children}),(r.mode&1)===0&&(s.lanes=n),s.return=r,s.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=s,r.memoizedState=null,s}function to(e,r){return r=aa({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function qs(e,r,n,s){return s!==null&&Ii(s),Vt(r,e.child,null,n),e=to(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Mh(e,r,n,s,a,o,c){if(n)return r.flags&256?(r.flags&=-257,s=Yi(Error(l(422))),qs(e,r,c,s)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(o=s.fallback,a=r.mode,s=aa({mode:"visible",children:s.children},a,0,null),o=St(o,a,c,null),o.flags|=2,s.return=r,o.return=r,s.sibling=o,r.child=s,(r.mode&1)!==0&&Vt(r,e.child,null,c),r.child.memoizedState=ro(c),r.memoizedState=eo,o);if((r.mode&1)===0)return qs(e,r,c,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var u=s.dgst;return s=u,o=Error(l(419)),s=Yi(o,s,void 0),qs(e,r,c,s)}if(u=(c&e.childLanes)!==0,Ye||u){if(s=Ae,s!==null){switch(c&-c){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(s.suspendedLanes|c))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Br(e,a),Tr(s,e,a,-1))}return yo(),s=Yi(Error(l(421))),qs(e,r,c,s)}return a.data==="$?"?(r.flags|=128,r.child=e.child,r=Kh.bind(null,e),a._reactRetry=r,null):(e=o.treeContext,ar=Jr(a.nextSibling),sr=r,we=!0,kr=null,e!==null&&(ur[pr++]=Or,ur[pr++]=Wr,ur[pr++]=ft,Or=e.id,Wr=e.overflow,ft=r),r=to(r,s.children),r.flags|=4096,r)}function jd(e,r,n){e.lanes|=r;var s=e.alternate;s!==null&&(s.lanes|=r),Ri(e.return,r,n)}function no(e,r,n,s,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:a}:(o.isBackwards=r,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=n,o.tailMode=a)}function wd(e,r,n){var s=r.pendingProps,a=s.revealOrder,o=s.tail;if(qe(e,r,s.children,n),s=Ne.current,(s&2)!==0)s=s&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,n,r);else if(e.tag===19)jd(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(ve(Ne,s),(r.mode&1)===0)r.memoizedState=null;else switch(a){case"forwards":for(n=r.child,a=null;n!==null;)e=n.alternate,e!==null&&Os(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=r.child,r.child=null):(a=n.sibling,n.sibling=null),no(r,!1,a,n,o);break;case"backwards":for(n=null,a=r.child,r.child=null;a!==null;){if(e=a.alternate,e!==null&&Os(e)===null){r.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}no(r,!0,n,null,o);break;case"together":no(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Qs(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Ur(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),wt|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(l(153));if(r.child!==null){for(e=r.child,n=ct(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Dh(e,r,n){switch(r.tag){case 3:vd(r),$t();break;case 5:Mc(r);break;case 1:Ge(r.type)&&Is(r);break;case 4:Di(r,r.stateNode.containerInfo);break;case 10:var s=r.type._context,a=r.memoizedProps.value;ve(Ms,s._currentValue),s._currentValue=a;break;case 13:if(s=r.memoizedState,s!==null)return s.dehydrated!==null?(ve(Ne,Ne.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?yd(e,r,n):(ve(Ne,Ne.current&1),e=Ur(e,r,n),e!==null?e.sibling:null);ve(Ne,Ne.current&1);break;case 19:if(s=(n&r.childLanes)!==0,(e.flags&128)!==0){if(s)return wd(e,r,n);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ve(Ne,Ne.current),s)break;return null;case 22:case 23:return r.lanes=0,md(e,r,n)}return Ur(e,r,n)}var Nd,so,kd,bd;Nd=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},so=function(){},kd=function(e,r,n,s){var a=e.memoizedProps;if(a!==s){e=r.stateNode,yt(Lr.current);var o=null;switch(n){case"input":a=Ra(e,a),s=Ra(e,s),o=[];break;case"select":a=E({},a,{value:void 0}),s=E({},s,{value:void 0}),o=[];break;case"textarea":a=Da(e,a),s=Da(e,s),o=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ps)}Fa(n,s);var c;n=null;for(y in a)if(!s.hasOwnProperty(y)&&a.hasOwnProperty(y)&&a[y]!=null)if(y==="style"){var u=a[y];for(c in u)u.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(v.hasOwnProperty(y)?o||(o=[]):(o=o||[]).push(y,null));for(y in s){var h=s[y];if(u=a!=null?a[y]:void 0,s.hasOwnProperty(y)&&h!==u&&(h!=null||u!=null))if(y==="style")if(u){for(c in u)!u.hasOwnProperty(c)||h&&h.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in h)h.hasOwnProperty(c)&&u[c]!==h[c]&&(n||(n={}),n[c]=h[c])}else n||(o||(o=[]),o.push(y,n)),n=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(o=o||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(v.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&ge("scroll",e),o||u===h||(o=[])):(o=o||[]).push(y,h))}n&&(o=o||[]).push("style",n);var y=o;(r.updateQueue=y)&&(r.flags|=4)}},bd=function(e,r,n,s){n!==s&&(r.flags|=4)};function Un(e,r){if(!we)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ue(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(r)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=n,r}function _h(e,r,n){var s=r.pendingProps;switch(Pi(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(r),null;case 1:return Ge(r.type)&&Cs(),Ue(r),null;case 3:return s=r.stateNode,Kt(),ye(Ke),ye(Be),Oi(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Rs(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,kr!==null&&(fo(kr),kr=null))),so(e,r),Ue(r),null;case 5:_i(r);var a=yt(Fn.current);if(n=r.type,e!==null&&r.stateNode!=null)kd(e,r,n,s,a),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!s){if(r.stateNode===null)throw Error(l(166));return Ue(r),null}if(e=yt(Lr.current),Rs(r)){s=r.stateNode,n=r.type;var o=r.memoizedProps;switch(s[Er]=r,s[Rn]=o,e=(r.mode&1)!==0,n){case"dialog":ge("cancel",s),ge("close",s);break;case"iframe":case"object":case"embed":ge("load",s);break;case"video":case"audio":for(a=0;a<En.length;a++)ge(En[a],s);break;case"source":ge("error",s);break;case"img":case"image":case"link":ge("error",s),ge("load",s);break;case"details":ge("toggle",s);break;case"input":sl(s,o),ge("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},ge("invalid",s);break;case"textarea":ol(s,o),ge("invalid",s)}Fa(n,o),a=null;for(var c in o)if(o.hasOwnProperty(c)){var u=o[c];c==="children"?typeof u=="string"?s.textContent!==u&&(o.suppressHydrationWarning!==!0&&Ss(s.textContent,u,e),a=["children",u]):typeof u=="number"&&s.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Ss(s.textContent,u,e),a=["children",""+u]):v.hasOwnProperty(c)&&u!=null&&c==="onScroll"&&ge("scroll",s)}switch(n){case"input":Dr(s),il(s,o,!0);break;case"textarea":Dr(s),cl(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=Ps)}s=a,r.updateQueue=s,s!==null&&(r.flags|=4)}else{c=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=c.createElement(n,{is:s.is}):(e=c.createElement(n),n==="select"&&(c=e,s.multiple?c.multiple=!0:s.size&&(c.size=s.size))):e=c.createElementNS(e,n),e[Er]=r,e[Rn]=s,Nd(e,r,!1,!1),r.stateNode=e;e:{switch(c=Oa(n,s),n){case"dialog":ge("cancel",e),ge("close",e),a=s;break;case"iframe":case"object":case"embed":ge("load",e),a=s;break;case"video":case"audio":for(a=0;a<En.length;a++)ge(En[a],e);a=s;break;case"source":ge("error",e),a=s;break;case"img":case"image":case"link":ge("error",e),ge("load",e),a=s;break;case"details":ge("toggle",e),a=s;break;case"input":sl(e,s),a=Ra(e,s),ge("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=E({},s,{value:void 0}),ge("invalid",e);break;case"textarea":ol(e,s),a=Da(e,s),ge("invalid",e);break;default:a=s}Fa(n,a),u=a;for(o in u)if(u.hasOwnProperty(o)){var h=u[o];o==="style"?hl(e,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&ul(e,h)):o==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&un(e,h):typeof h=="number"&&un(e,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(v.hasOwnProperty(o)?h!=null&&o==="onScroll"&&ge("scroll",e):h!=null&&se(e,o,h,c))}switch(n){case"input":Dr(e),il(e,s,!1);break;case"textarea":Dr(e),cl(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ae(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?It(e,!!s.multiple,o,!1):s.defaultValue!=null&&It(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ps)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ue(r),null;case 6:if(e&&r.stateNode!=null)bd(e,r,e.memoizedProps,s);else{if(typeof s!="string"&&r.stateNode===null)throw Error(l(166));if(n=yt(Fn.current),yt(Lr.current),Rs(r)){if(s=r.stateNode,n=r.memoizedProps,s[Er]=r,(o=s.nodeValue!==n)&&(e=sr,e!==null))switch(e.tag){case 3:Ss(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ss(s.nodeValue,n,(e.mode&1)!==0)}o&&(r.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[Er]=r,r.stateNode=s}return Ue(r),null;case 13:if(ye(Ne),s=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&ar!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Tc(),$t(),r.flags|=98560,o=!1;else if(o=Rs(r),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=r.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[Er]=r}else $t(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ue(r),o=!1}else kr!==null&&(fo(kr),kr=null),o=!0;if(!o)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Ne.current&1)!==0?ze===0&&(ze=3):yo())),r.updateQueue!==null&&(r.flags|=4),Ue(r),null);case 4:return Kt(),so(e,r),e===null&&Ln(r.stateNode.containerInfo),Ue(r),null;case 10:return zi(r.type._context),Ue(r),null;case 17:return Ge(r.type)&&Cs(),Ue(r),null;case 19:if(ye(Ne),o=r.memoizedState,o===null)return Ue(r),null;if(s=(r.flags&128)!==0,c=o.rendering,c===null)if(s)Un(o,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(c=Os(e),c!==null){for(r.flags|=128,Un(o,!1),s=c.updateQueue,s!==null&&(r.updateQueue=s,r.flags|=4),r.subtreeFlags=0,s=n,n=r.child;n!==null;)o=n,e=s,o.flags&=14680066,c=o.alternate,c===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=c.childLanes,o.lanes=c.lanes,o.child=c.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=c.memoizedProps,o.memoizedState=c.memoizedState,o.updateQueue=c.updateQueue,o.type=c.type,e=c.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Ne,Ne.current&1|2),r.child}e=e.sibling}o.tail!==null&&Se()>Jt&&(r.flags|=128,s=!0,Un(o,!1),r.lanes=4194304)}else{if(!s)if(e=Os(c),e!==null){if(r.flags|=128,s=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Un(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!we)return Ue(r),null}else 2*Se()-o.renderingStartTime>Jt&&n!==1073741824&&(r.flags|=128,s=!0,Un(o,!1),r.lanes=4194304);o.isBackwards?(c.sibling=r.child,r.child=c):(n=o.last,n!==null?n.sibling=c:r.child=c,o.last=c)}return o.tail!==null?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.renderingStartTime=Se(),r.sibling=null,n=Ne.current,ve(Ne,s?n&1|2:n&1),r):(Ue(r),null);case 22:case 23:return go(),s=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(r.flags|=8192),s&&(r.mode&1)!==0?(ir&1073741824)!==0&&(Ue(r),r.subtreeFlags&6&&(r.flags|=8192)):Ue(r),null;case 24:return null;case 25:return null}throw Error(l(156,r.tag))}function Fh(e,r){switch(Pi(r),r.tag){case 1:return Ge(r.type)&&Cs(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Kt(),ye(Ke),ye(Be),Oi(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return _i(r),null;case 13:if(ye(Ne),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(l(340));$t()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return ye(Ne),null;case 4:return Kt(),null;case 10:return zi(r.type._context),null;case 22:case 23:return go(),null;case 24:return null;default:return null}}var Ks=!1,$e=!1,Oh=typeof WeakSet=="function"?WeakSet:Set,z=null;function Yt(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){be(e,r,s)}else n.current=null}function ao(e,r,n){try{n()}catch(s){be(e,r,s)}}var Sd=!1;function Wh(e,r){if(vi=ms,e=nc(),ci(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var a=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var c=0,u=-1,h=-1,y=0,b=0,S=e,k=null;r:for(;;){for(var L;S!==n||a!==0&&S.nodeType!==3||(u=c+a),S!==o||s!==0&&S.nodeType!==3||(h=c+s),S.nodeType===3&&(c+=S.nodeValue.length),(L=S.firstChild)!==null;)k=S,S=L;for(;;){if(S===e)break r;if(k===n&&++y===a&&(u=c),k===o&&++b===s&&(h=c),(L=S.nextSibling)!==null)break;S=k,k=S.parentNode}S=L}n=u===-1||h===-1?null:{start:u,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(gi={focusedElem:e,selectionRange:n},ms=!1,z=r;z!==null;)if(r=z,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,z=e;else for(;z!==null;){r=z;try{var R=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var A=R.memoizedProps,Pe=R.memoizedState,f=r.stateNode,m=f.getSnapshotBeforeUpdate(r.elementType===r.type?A:br(r.type,A),Pe);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=r.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(P){be(r,r.return,P)}if(e=r.sibling,e!==null){e.return=r.return,z=e;break}z=r.return}return R=Sd,Sd=!1,R}function $n(e,r,n){var s=r.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&ao(r,n,o)}a=a.next}while(a!==s)}}function Gs(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==r)}}function io(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Pd(e){var r=e.alternate;r!==null&&(e.alternate=null,Pd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Er],delete r[Rn],delete r[Ni],delete r[Nh],delete r[kh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Td(e){return e.tag===5||e.tag===3||e.tag===4}function Cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oo(e,r,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Ps));else if(s!==4&&(e=e.child,e!==null))for(oo(e,r,n),e=e.sibling;e!==null;)oo(e,r,n),e=e.sibling}function lo(e,r,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(lo(e,r,n),e=e.sibling;e!==null;)lo(e,r,n),e=e.sibling}var Fe=null,Sr=!1;function st(e,r,n){for(n=n.child;n!==null;)Id(e,r,n),n=n.sibling}function Id(e,r,n){if(Ir&&typeof Ir.onCommitFiberUnmount=="function")try{Ir.onCommitFiberUnmount(ls,n)}catch{}switch(n.tag){case 5:$e||Yt(n,r);case 6:var s=Fe,a=Sr;Fe=null,st(e,r,n),Fe=s,Sr=a,Fe!==null&&(Sr?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Sr?(e=Fe,n=n.stateNode,e.nodeType===8?wi(e.parentNode,n):e.nodeType===1&&wi(e,n),Nn(e)):wi(Fe,n.stateNode));break;case 4:s=Fe,a=Sr,Fe=n.stateNode.containerInfo,Sr=!0,st(e,r,n),Fe=s,Sr=a;break;case 0:case 11:case 14:case 15:if(!$e&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var o=a,c=o.destroy;o=o.tag,c!==void 0&&((o&2)!==0||(o&4)!==0)&&ao(n,r,c),a=a.next}while(a!==s)}st(e,r,n);break;case 1:if(!$e&&(Yt(n,r),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(u){be(n,r,u)}st(e,r,n);break;case 21:st(e,r,n);break;case 22:n.mode&1?($e=(s=$e)||n.memoizedState!==null,st(e,r,n),$e=s):st(e,r,n);break;default:st(e,r,n)}}function Ed(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Oh),r.forEach(function(s){var a=Gh.bind(null,e,s);n.has(s)||(n.add(s),s.then(a,a))})}}function Pr(e,r){var n=r.deletions;if(n!==null)for(var s=0;s<n.length;s++){var a=n[s];try{var o=e,c=r,u=c;e:for(;u!==null;){switch(u.tag){case 5:Fe=u.stateNode,Sr=!1;break e;case 3:Fe=u.stateNode.containerInfo,Sr=!0;break e;case 4:Fe=u.stateNode.containerInfo,Sr=!0;break e}u=u.return}if(Fe===null)throw Error(l(160));Id(o,c,a),Fe=null,Sr=!1;var h=a.alternate;h!==null&&(h.return=null),a.return=null}catch(y){be(a,r,y)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ld(r,e),r=r.sibling}function Ld(e,r){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pr(r,e),Rr(e),s&4){try{$n(3,e,e.return),Gs(3,e)}catch(A){be(e,e.return,A)}try{$n(5,e,e.return)}catch(A){be(e,e.return,A)}}break;case 1:Pr(r,e),Rr(e),s&512&&n!==null&&Yt(n,n.return);break;case 5:if(Pr(r,e),Rr(e),s&512&&n!==null&&Yt(n,n.return),e.flags&32){var a=e.stateNode;try{un(a,"")}catch(A){be(e,e.return,A)}}if(s&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,c=n!==null?n.memoizedProps:o,u=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&al(a,o),Oa(u,c);var y=Oa(u,o);for(c=0;c<h.length;c+=2){var b=h[c],S=h[c+1];b==="style"?hl(a,S):b==="dangerouslySetInnerHTML"?ul(a,S):b==="children"?un(a,S):se(a,b,S,y)}switch(u){case"input":Aa(a,o);break;case"textarea":ll(a,o);break;case"select":var k=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var L=o.value;L!=null?It(a,!!o.multiple,L,!1):k!==!!o.multiple&&(o.defaultValue!=null?It(a,!!o.multiple,o.defaultValue,!0):It(a,!!o.multiple,o.multiple?[]:"",!1))}a[Rn]=o}catch(A){be(e,e.return,A)}}break;case 6:if(Pr(r,e),Rr(e),s&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(A){be(e,e.return,A)}}break;case 3:if(Pr(r,e),Rr(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Nn(r.containerInfo)}catch(A){be(e,e.return,A)}break;case 4:Pr(r,e),Rr(e);break;case 13:Pr(r,e),Rr(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(po=Se())),s&4&&Ed(e);break;case 22:if(b=n!==null&&n.memoizedState!==null,e.mode&1?($e=(y=$e)||b,Pr(r,e),$e=y):Pr(r,e),Rr(e),s&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!b&&(e.mode&1)!==0)for(z=e,b=e.child;b!==null;){for(S=z=b;z!==null;){switch(k=z,L=k.child,k.tag){case 0:case 11:case 14:case 15:$n(4,k,k.return);break;case 1:Yt(k,k.return);var R=k.stateNode;if(typeof R.componentWillUnmount=="function"){s=k,n=k.return;try{r=s,R.props=r.memoizedProps,R.state=r.memoizedState,R.componentWillUnmount()}catch(A){be(s,n,A)}}break;case 5:Yt(k,k.return);break;case 22:if(k.memoizedState!==null){Ad(S);continue}}L!==null?(L.return=k,z=L):Ad(S)}b=b.sibling}e:for(b=null,S=e;;){if(S.tag===5){if(b===null){b=S;try{a=S.stateNode,y?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=S.stateNode,h=S.memoizedProps.style,c=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=pl("display",c))}catch(A){be(e,e.return,A)}}}else if(S.tag===6){if(b===null)try{S.stateNode.nodeValue=y?"":S.memoizedProps}catch(A){be(e,e.return,A)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;b===S&&(b=null),S=S.return}b===S&&(b=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Pr(r,e),Rr(e),s&4&&Ed(e);break;case 21:break;default:Pr(r,e),Rr(e)}}function Rr(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Td(n)){var s=n;break e}n=n.return}throw Error(l(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(un(a,""),s.flags&=-33);var o=Cd(e);lo(e,o,a);break;case 3:case 4:var c=s.stateNode.containerInfo,u=Cd(e);oo(e,u,c);break;default:throw Error(l(161))}}catch(h){be(e,e.return,h)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Bh(e,r,n){z=e,zd(e)}function zd(e,r,n){for(var s=(e.mode&1)!==0;z!==null;){var a=z,o=a.child;if(a.tag===22&&s){var c=a.memoizedState!==null||Ks;if(!c){var u=a.alternate,h=u!==null&&u.memoizedState!==null||$e;u=Ks;var y=$e;if(Ks=c,($e=h)&&!y)for(z=a;z!==null;)c=z,h=c.child,c.tag===22&&c.memoizedState!==null?Md(a):h!==null?(h.return=c,z=h):Md(a);for(;o!==null;)z=o,zd(o),o=o.sibling;z=a,Ks=u,$e=y}Rd(e)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,z=o):Rd(e)}}function Rd(e){for(;z!==null;){var r=z;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:$e||Gs(5,r);break;case 1:var s=r.stateNode;if(r.flags&4&&!$e)if(n===null)s.componentDidMount();else{var a=r.elementType===r.type?n.memoizedProps:br(r.type,n.memoizedProps);s.componentDidUpdate(a,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=r.updateQueue;o!==null&&Ac(r,o,s);break;case 3:var c=r.updateQueue;if(c!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Ac(r,c,n)}break;case 5:var u=r.stateNode;if(n===null&&r.flags&4){n=u;var h=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var y=r.alternate;if(y!==null){var b=y.memoizedState;if(b!==null){var S=b.dehydrated;S!==null&&Nn(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}$e||r.flags&512&&io(r)}catch(k){be(r,r.return,k)}}if(r===e){z=null;break}if(n=r.sibling,n!==null){n.return=r.return,z=n;break}z=r.return}}function Ad(e){for(;z!==null;){var r=z;if(r===e){z=null;break}var n=r.sibling;if(n!==null){n.return=r.return,z=n;break}z=r.return}}function Md(e){for(;z!==null;){var r=z;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Gs(4,r)}catch(h){be(r,n,h)}break;case 1:var s=r.stateNode;if(typeof s.componentDidMount=="function"){var a=r.return;try{s.componentDidMount()}catch(h){be(r,a,h)}}var o=r.return;try{io(r)}catch(h){be(r,o,h)}break;case 5:var c=r.return;try{io(r)}catch(h){be(r,c,h)}}}catch(h){be(r,r.return,h)}if(r===e){z=null;break}var u=r.sibling;if(u!==null){u.return=r.return,z=u;break}z=r.return}}var Hh=Math.ceil,Ys=Z.ReactCurrentDispatcher,co=Z.ReactCurrentOwner,xr=Z.ReactCurrentBatchConfig,le=0,Ae=null,Te=null,Oe=0,ir=0,Xt=Zr(0),ze=0,Vn=null,wt=0,Xs=0,uo=0,qn=null,Xe=null,po=0,Jt=1/0,$r=null,Js=!1,ho=null,at=null,Zs=!1,it=null,ea=0,Qn=0,mo=null,ra=-1,ta=0;function Qe(){return(le&6)!==0?Se():ra!==-1?ra:ra=Se()}function ot(e){return(e.mode&1)===0?1:(le&2)!==0&&Oe!==0?Oe&-Oe:Sh.transition!==null?(ta===0&&(ta=Cl()),ta):(e=xe,e!==0||(e=window.event,e=e===void 0?16:_l(e.type)),e)}function Tr(e,r,n,s){if(50<Qn)throw Qn=0,mo=null,Error(l(185));vn(e,n,s),((le&2)===0||e!==Ae)&&(e===Ae&&((le&2)===0&&(Xs|=n),ze===4&&lt(e,Oe)),Je(e,s),n===1&&le===0&&(r.mode&1)===0&&(Jt=Se()+500,Es&&rt()))}function Je(e,r){var n=e.callbackNode;Sp(e,r);var s=us(e,e===Ae?Oe:0);if(s===0)n!==null&&Sl(n),e.callbackNode=null,e.callbackPriority=0;else if(r=s&-s,e.callbackPriority!==r){if(n!=null&&Sl(n),r===1)e.tag===0?bh(_d.bind(null,e)):Nc(_d.bind(null,e)),jh(function(){(le&6)===0&&rt()}),n=null;else{switch(Il(s)){case 1:n=qa;break;case 4:n=Pl;break;case 16:n=os;break;case 536870912:n=Tl;break;default:n=os}n=Vd(n,Dd.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Dd(e,r){if(ra=-1,ta=0,(le&6)!==0)throw Error(l(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var s=us(e,e===Ae?Oe:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||r)r=na(e,s);else{r=s;var a=le;le|=2;var o=Od();(Ae!==e||Oe!==r)&&($r=null,Jt=Se()+500,kt(e,r));do try{Vh();break}catch(u){Fd(e,u)}while(!0);Li(),Ys.current=o,le=a,Te!==null?r=0:(Ae=null,Oe=0,r=ze)}if(r!==0){if(r===2&&(a=Qa(e),a!==0&&(s=a,r=xo(e,a))),r===1)throw n=Vn,kt(e,0),lt(e,s),Je(e,Se()),n;if(r===6)lt(e,s);else{if(a=e.current.alternate,(s&30)===0&&!Uh(a)&&(r=na(e,s),r===2&&(o=Qa(e),o!==0&&(s=o,r=xo(e,o))),r===1))throw n=Vn,kt(e,0),lt(e,s),Je(e,Se()),n;switch(e.finishedWork=a,e.finishedLanes=s,r){case 0:case 1:throw Error(l(345));case 2:bt(e,Xe,$r);break;case 3:if(lt(e,s),(s&130023424)===s&&(r=po+500-Se(),10<r)){if(us(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){Qe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ji(bt.bind(null,e,Xe,$r),r);break}bt(e,Xe,$r);break;case 4:if(lt(e,s),(s&4194240)===s)break;for(r=e.eventTimes,a=-1;0<s;){var c=31-wr(s);o=1<<c,c=r[c],c>a&&(a=c),s&=~o}if(s=a,s=Se()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Hh(s/1960))-s,10<s){e.timeoutHandle=ji(bt.bind(null,e,Xe,$r),s);break}bt(e,Xe,$r);break;case 5:bt(e,Xe,$r);break;default:throw Error(l(329))}}}return Je(e,Se()),e.callbackNode===n?Dd.bind(null,e):null}function xo(e,r){var n=qn;return e.current.memoizedState.isDehydrated&&(kt(e,r).flags|=256),e=na(e,r),e!==2&&(r=Xe,Xe=n,r!==null&&fo(r)),e}function fo(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function Uh(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var a=n[s],o=a.getSnapshot;a=a.value;try{if(!Nr(o(),a))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function lt(e,r){for(r&=~uo,r&=~Xs,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-wr(r),s=1<<n;e[n]=-1,r&=~s}}function _d(e){if((le&6)!==0)throw Error(l(327));Zt();var r=us(e,0);if((r&1)===0)return Je(e,Se()),null;var n=na(e,r);if(e.tag!==0&&n===2){var s=Qa(e);s!==0&&(r=s,n=xo(e,s))}if(n===1)throw n=Vn,kt(e,0),lt(e,r),Je(e,Se()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,bt(e,Xe,$r),Je(e,Se()),null}function vo(e,r){var n=le;le|=1;try{return e(r)}finally{le=n,le===0&&(Jt=Se()+500,Es&&rt())}}function Nt(e){it!==null&&it.tag===0&&(le&6)===0&&Zt();var r=le;le|=1;var n=xr.transition,s=xe;try{if(xr.transition=null,xe=1,e)return e()}finally{xe=s,xr.transition=n,le=r,(le&6)===0&&rt()}}function go(){ir=Xt.current,ye(Xt)}function kt(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yh(n)),Te!==null)for(n=Te.return;n!==null;){var s=n;switch(Pi(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Cs();break;case 3:Kt(),ye(Ke),ye(Be),Oi();break;case 5:_i(s);break;case 4:Kt();break;case 13:ye(Ne);break;case 19:ye(Ne);break;case 10:zi(s.type._context);break;case 22:case 23:go()}n=n.return}if(Ae=e,Te=e=ct(e.current,null),Oe=ir=r,ze=0,Vn=null,uo=Xs=wt=0,Xe=qn=null,gt!==null){for(r=0;r<gt.length;r++)if(n=gt[r],s=n.interleaved,s!==null){n.interleaved=null;var a=s.next,o=n.pending;if(o!==null){var c=o.next;o.next=a,s.next=c}n.pending=s}gt=null}return e}function Fd(e,r){do{var n=Te;try{if(Li(),Ws.current=$s,Bs){for(var s=ke.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Bs=!1}if(jt=0,Re=Le=ke=null,On=!1,Wn=0,co.current=null,n===null||n.return===null){ze=1,Vn=r,Te=null;break}e:{var o=e,c=n.return,u=n,h=r;if(r=Oe,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,b=u,S=b.tag;if((b.mode&1)===0&&(S===0||S===11||S===15)){var k=b.alternate;k?(b.updateQueue=k.updateQueue,b.memoizedState=k.memoizedState,b.lanes=k.lanes):(b.updateQueue=null,b.memoizedState=null)}var L=cd(c);if(L!==null){L.flags&=-257,dd(L,c,u,o,r),L.mode&1&&ld(o,y,r),r=L,h=y;var R=r.updateQueue;if(R===null){var A=new Set;A.add(h),r.updateQueue=A}else R.add(h);break e}else{if((r&1)===0){ld(o,y,r),yo();break e}h=Error(l(426))}}else if(we&&u.mode&1){var Pe=cd(c);if(Pe!==null){(Pe.flags&65536)===0&&(Pe.flags|=256),dd(Pe,c,u,o,r),Ii(Gt(h,u));break e}}o=h=Gt(h,u),ze!==4&&(ze=2),qn===null?qn=[o]:qn.push(o),o=c;do{switch(o.tag){case 3:o.flags|=65536,r&=-r,o.lanes|=r;var f=id(o,h,r);Rc(o,f);break e;case 1:u=h;var m=o.type,g=o.stateNode;if((o.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(at===null||!at.has(g)))){o.flags|=65536,r&=-r,o.lanes|=r;var P=od(o,u,r);Rc(o,P);break e}}o=o.return}while(o!==null)}Bd(n)}catch(M){r=M,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function Od(){var e=Ys.current;return Ys.current=$s,e===null?$s:e}function yo(){(ze===0||ze===3||ze===2)&&(ze=4),Ae===null||(wt&268435455)===0&&(Xs&268435455)===0||lt(Ae,Oe)}function na(e,r){var n=le;le|=2;var s=Od();(Ae!==e||Oe!==r)&&($r=null,kt(e,r));do try{$h();break}catch(a){Fd(e,a)}while(!0);if(Li(),le=n,Ys.current=s,Te!==null)throw Error(l(261));return Ae=null,Oe=0,ze}function $h(){for(;Te!==null;)Wd(Te)}function Vh(){for(;Te!==null&&!fp();)Wd(Te)}function Wd(e){var r=$d(e.alternate,e,ir);e.memoizedProps=e.pendingProps,r===null?Bd(e):Te=r,co.current=null}function Bd(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=_h(n,r,ir),n!==null){Te=n;return}}else{if(n=Fh(n,r),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Te=null;return}}if(r=r.sibling,r!==null){Te=r;return}Te=r=e}while(r!==null);ze===0&&(ze=5)}function bt(e,r,n){var s=xe,a=xr.transition;try{xr.transition=null,xe=1,qh(e,r,n,s)}finally{xr.transition=a,xe=s}return null}function qh(e,r,n,s){do Zt();while(it!==null);if((le&6)!==0)throw Error(l(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Pp(e,o),e===Ae&&(Te=Ae=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Zs||(Zs=!0,Vd(os,function(){return Zt(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=xr.transition,xr.transition=null;var c=xe;xe=1;var u=le;le|=4,co.current=null,Wh(e,n),Ld(n,e),ph(gi),ms=!!vi,gi=vi=null,e.current=n,Bh(n),vp(),le=u,xe=c,xr.transition=o}else e.current=n;if(Zs&&(Zs=!1,it=e,ea=a),o=e.pendingLanes,o===0&&(at=null),jp(n.stateNode),Je(e,Se()),r!==null)for(s=e.onRecoverableError,n=0;n<r.length;n++)a=r[n],s(a.value,{componentStack:a.stack,digest:a.digest});if(Js)throw Js=!1,e=ho,ho=null,e;return(ea&1)!==0&&e.tag!==0&&Zt(),o=e.pendingLanes,(o&1)!==0?e===mo?Qn++:(Qn=0,mo=e):Qn=0,rt(),null}function Zt(){if(it!==null){var e=Il(ea),r=xr.transition,n=xe;try{if(xr.transition=null,xe=16>e?16:e,it===null)var s=!1;else{if(e=it,it=null,ea=0,(le&6)!==0)throw Error(l(331));var a=le;for(le|=4,z=e.current;z!==null;){var o=z,c=o.child;if((z.flags&16)!==0){var u=o.deletions;if(u!==null){for(var h=0;h<u.length;h++){var y=u[h];for(z=y;z!==null;){var b=z;switch(b.tag){case 0:case 11:case 15:$n(8,b,o)}var S=b.child;if(S!==null)S.return=b,z=S;else for(;z!==null;){b=z;var k=b.sibling,L=b.return;if(Pd(b),b===y){z=null;break}if(k!==null){k.return=L,z=k;break}z=L}}}var R=o.alternate;if(R!==null){var A=R.child;if(A!==null){R.child=null;do{var Pe=A.sibling;A.sibling=null,A=Pe}while(A!==null)}}z=o}}if((o.subtreeFlags&2064)!==0&&c!==null)c.return=o,z=c;else e:for(;z!==null;){if(o=z,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:$n(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,z=f;break e}z=o.return}}var m=e.current;for(z=m;z!==null;){c=z;var g=c.child;if((c.subtreeFlags&2064)!==0&&g!==null)g.return=c,z=g;else e:for(c=m;z!==null;){if(u=z,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Gs(9,u)}}catch(M){be(u,u.return,M)}if(u===c){z=null;break e}var P=u.sibling;if(P!==null){P.return=u.return,z=P;break e}z=u.return}}if(le=a,rt(),Ir&&typeof Ir.onPostCommitFiberRoot=="function")try{Ir.onPostCommitFiberRoot(ls,e)}catch{}s=!0}return s}finally{xe=n,xr.transition=r}}return!1}function Hd(e,r,n){r=Gt(n,r),r=id(e,r,1),e=nt(e,r,1),r=Qe(),e!==null&&(vn(e,1,r),Je(e,r))}function be(e,r,n){if(e.tag===3)Hd(e,e,n);else for(;r!==null;){if(r.tag===3){Hd(r,e,n);break}else if(r.tag===1){var s=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(at===null||!at.has(s))){e=Gt(n,e),e=od(r,e,1),r=nt(r,e,1),e=Qe(),r!==null&&(vn(r,1,e),Je(r,e));break}}r=r.return}}function Qh(e,r,n){var s=e.pingCache;s!==null&&s.delete(r),r=Qe(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Oe&n)===n&&(ze===4||ze===3&&(Oe&130023424)===Oe&&500>Se()-po?kt(e,0):uo|=n),Je(e,r)}function Ud(e,r){r===0&&((e.mode&1)===0?r=1:(r=ds,ds<<=1,(ds&130023424)===0&&(ds=4194304)));var n=Qe();e=Br(e,r),e!==null&&(vn(e,r,n),Je(e,n))}function Kh(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Ud(e,n)}function Gh(e,r){var n=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(l(314))}s!==null&&s.delete(r),Ud(e,n)}var $d;$d=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||Ke.current)Ye=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return Ye=!1,Dh(e,r,n);Ye=(e.flags&131072)!==0}else Ye=!1,we&&(r.flags&1048576)!==0&&kc(r,zs,r.index);switch(r.lanes=0,r.tag){case 2:var s=r.type;Qs(e,r),e=r.pendingProps;var a=Bt(r,Be.current);Qt(r,n),a=Hi(null,r,s,e,a,n);var o=Ui();return r.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ge(s)?(o=!0,Is(r)):o=!1,r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Mi(r),a.updater=Vs,r.stateNode=a,a._reactInternals=r,Gi(r,s,e,n),r=Zi(null,r,s,!0,o,n)):(r.tag=0,we&&o&&Si(r),qe(null,r,a,n),r=r.child),r;case 16:s=r.elementType;e:{switch(Qs(e,r),e=r.pendingProps,a=s._init,s=a(s._payload),r.type=s,a=r.tag=Xh(s),e=br(s,e),a){case 0:r=Ji(null,r,s,e,n);break e;case 1:r=fd(null,r,s,e,n);break e;case 11:r=ud(null,r,s,e,n);break e;case 14:r=pd(null,r,s,br(s.type,e),n);break e}throw Error(l(306,s,""))}return r;case 0:return s=r.type,a=r.pendingProps,a=r.elementType===s?a:br(s,a),Ji(e,r,s,a,n);case 1:return s=r.type,a=r.pendingProps,a=r.elementType===s?a:br(s,a),fd(e,r,s,a,n);case 3:e:{if(vd(r),e===null)throw Error(l(387));s=r.pendingProps,o=r.memoizedState,a=o.element,zc(e,r),Fs(r,s,null,n);var c=r.memoizedState;if(s=c.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},r.updateQueue.baseState=o,r.memoizedState=o,r.flags&256){a=Gt(Error(l(423)),r),r=gd(e,r,s,n,a);break e}else if(s!==a){a=Gt(Error(l(424)),r),r=gd(e,r,s,n,a);break e}else for(ar=Jr(r.stateNode.containerInfo.firstChild),sr=r,we=!0,kr=null,n=Ec(r,null,s,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($t(),s===a){r=Ur(e,r,n);break e}qe(e,r,s,n)}r=r.child}return r;case 5:return Mc(r),e===null&&Ci(r),s=r.type,a=r.pendingProps,o=e!==null?e.memoizedProps:null,c=a.children,yi(s,a)?c=null:o!==null&&yi(s,o)&&(r.flags|=32),xd(e,r),qe(e,r,c,n),r.child;case 6:return e===null&&Ci(r),null;case 13:return yd(e,r,n);case 4:return Di(r,r.stateNode.containerInfo),s=r.pendingProps,e===null?r.child=Vt(r,null,s,n):qe(e,r,s,n),r.child;case 11:return s=r.type,a=r.pendingProps,a=r.elementType===s?a:br(s,a),ud(e,r,s,a,n);case 7:return qe(e,r,r.pendingProps,n),r.child;case 8:return qe(e,r,r.pendingProps.children,n),r.child;case 12:return qe(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(s=r.type._context,a=r.pendingProps,o=r.memoizedProps,c=a.value,ve(Ms,s._currentValue),s._currentValue=c,o!==null)if(Nr(o.value,c)){if(o.children===a.children&&!Ke.current){r=Ur(e,r,n);break e}}else for(o=r.child,o!==null&&(o.return=r);o!==null;){var u=o.dependencies;if(u!==null){c=o.child;for(var h=u.firstContext;h!==null;){if(h.context===s){if(o.tag===1){h=Hr(-1,n&-n),h.tag=2;var y=o.updateQueue;if(y!==null){y=y.shared;var b=y.pending;b===null?h.next=h:(h.next=b.next,b.next=h),y.pending=h}}o.lanes|=n,h=o.alternate,h!==null&&(h.lanes|=n),Ri(o.return,n,r),u.lanes|=n;break}h=h.next}}else if(o.tag===10)c=o.type===r.type?null:o.child;else if(o.tag===18){if(c=o.return,c===null)throw Error(l(341));c.lanes|=n,u=c.alternate,u!==null&&(u.lanes|=n),Ri(c,n,r),c=o.sibling}else c=o.child;if(c!==null)c.return=o;else for(c=o;c!==null;){if(c===r){c=null;break}if(o=c.sibling,o!==null){o.return=c.return,c=o;break}c=c.return}o=c}qe(e,r,a.children,n),r=r.child}return r;case 9:return a=r.type,s=r.pendingProps.children,Qt(r,n),a=hr(a),s=s(a),r.flags|=1,qe(e,r,s,n),r.child;case 14:return s=r.type,a=br(s,r.pendingProps),a=br(s.type,a),pd(e,r,s,a,n);case 15:return hd(e,r,r.type,r.pendingProps,n);case 17:return s=r.type,a=r.pendingProps,a=r.elementType===s?a:br(s,a),Qs(e,r),r.tag=1,Ge(s)?(e=!0,Is(r)):e=!1,Qt(r,n),sd(r,s,a),Gi(r,s,a,n),Zi(null,r,s,!0,e,n);case 19:return wd(e,r,n);case 22:return md(e,r,n)}throw Error(l(156,r.tag))};function Vd(e,r){return bl(e,r)}function Yh(e,r,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fr(e,r,n,s){return new Yh(e,r,n,s)}function jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xh(e){if(typeof e=="function")return jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cr)return 11;if(e===dr)return 14}return 2}function ct(e,r){var n=e.alternate;return n===null?(n=fr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function sa(e,r,n,s,a,o){var c=2;if(s=e,typeof e=="function")jo(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case H:return St(n.children,a,o,r);case Ee:c=8,a|=8;break;case rr:return e=fr(12,n,r,a|2),e.elementType=rr,e.lanes=o,e;case Ve:return e=fr(13,n,r,a),e.elementType=Ve,e.lanes=o,e;case tr:return e=fr(19,n,r,a),e.elementType=tr,e.lanes=o,e;case fe:return aa(n,a,o,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yr:c=10;break e;case Mr:c=9;break e;case cr:c=11;break e;case dr:c=14;break e;case We:c=16,s=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return r=fr(c,n,r,a),r.elementType=e,r.type=s,r.lanes=o,r}function St(e,r,n,s){return e=fr(7,e,s,r),e.lanes=n,e}function aa(e,r,n,s){return e=fr(22,e,s,r),e.elementType=fe,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,r,n){return e=fr(6,e,null,r),e.lanes=n,e}function No(e,r,n){return r=fr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Jh(e,r,n,s,a){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ka(0),this.expirationTimes=Ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ko(e,r,n,s,a,o,c,u,h){return e=new Jh(e,r,n,u,h),r===1?(r=1,o===!0&&(r|=8)):r=0,o=fr(3,null,null,r),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mi(o),e}function Zh(e,r,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:s==null?null:""+s,children:e,containerInfo:r,implementation:n}}function qd(e){if(!e)return et;e=e._reactInternals;e:{if(ht(e)!==e||e.tag!==1)throw Error(l(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ge(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(Ge(n))return jc(e,n,r)}return r}function Qd(e,r,n,s,a,o,c,u,h){return e=ko(n,s,!0,e,a,o,c,u,h),e.context=qd(null),n=e.current,s=Qe(),a=ot(n),o=Hr(s,a),o.callback=r!=null?r:null,nt(n,o,a),e.current.lanes=a,vn(e,a,s),Je(e,s),e}function ia(e,r,n,s){var a=r.current,o=Qe(),c=ot(a);return n=qd(n),r.context===null?r.context=n:r.pendingContext=n,r=Hr(o,c),r.payload={element:e},s=s===void 0?null:s,s!==null&&(r.callback=s),e=nt(a,r,c),e!==null&&(Tr(e,a,c,o),_s(e,a,c)),c}function oa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function bo(e,r){Kd(e,r),(e=e.alternate)&&Kd(e,r)}function em(){return null}var Gd=typeof reportError=="function"?reportError:function(e){console.error(e)};function So(e){this._internalRoot=e}la.prototype.render=So.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(l(409));ia(e,r,null,null)},la.prototype.unmount=So.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Nt(function(){ia(null,e,null,null)}),r[_r]=null}};function la(e){this._internalRoot=e}la.prototype.unstable_scheduleHydration=function(e){if(e){var r=zl();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Gr.length&&r!==0&&r<Gr[n].priority;n++);Gr.splice(n,0,e),n===0&&Ml(e)}};function Po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yd(){}function rm(e,r,n,s,a){if(a){if(typeof s=="function"){var o=s;s=function(){var y=oa(c);o.call(y)}}var c=Qd(r,s,e,0,null,!1,!1,"",Yd);return e._reactRootContainer=c,e[_r]=c.current,Ln(e.nodeType===8?e.parentNode:e),Nt(),c}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var u=s;s=function(){var y=oa(h);u.call(y)}}var h=ko(e,0,!1,null,null,!1,!1,"",Yd);return e._reactRootContainer=h,e[_r]=h.current,Ln(e.nodeType===8?e.parentNode:e),Nt(function(){ia(r,h,n,s)}),h}function da(e,r,n,s,a){var o=n._reactRootContainer;if(o){var c=o;if(typeof a=="function"){var u=a;a=function(){var h=oa(c);u.call(h)}}ia(r,c,e,a)}else c=rm(n,r,e,a,s);return oa(c)}El=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=fn(r.pendingLanes);n!==0&&(Ga(r,n|1),Je(r,Se()),(le&6)===0&&(Jt=Se()+500,rt()))}break;case 13:Nt(function(){var s=Br(e,1);if(s!==null){var a=Qe();Tr(s,e,1,a)}}),bo(e,1)}},Ya=function(e){if(e.tag===13){var r=Br(e,134217728);if(r!==null){var n=Qe();Tr(r,e,134217728,n)}bo(e,134217728)}},Ll=function(e){if(e.tag===13){var r=ot(e),n=Br(e,r);if(n!==null){var s=Qe();Tr(n,e,r,s)}bo(e,r)}},zl=function(){return xe},Rl=function(e,r){var n=xe;try{return xe=e,r()}finally{xe=n}},Ha=function(e,r,n){switch(r){case"input":if(Aa(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var s=n[r];if(s!==e&&s.form===e.form){var a=Ts(s);if(!a)throw Error(l(90));jr(s),Aa(s,a)}}}break;case"textarea":ll(e,n);break;case"select":r=n.value,r!=null&&It(e,!!n.multiple,r,!1)}},vl=vo,gl=Nt;var tm={usingClientEntryPoint:!1,Events:[An,Ot,Ts,xl,fl,vo]},Kn={findFiberByHostInstance:mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nm={bundleType:Kn.bundleType,version:Kn.version,rendererPackageName:Kn.rendererPackageName,rendererConfig:Kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nl(e),e===null?null:e.stateNode},findFiberByHostInstance:Kn.findFiberByHostInstance||em,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{ls=ua.inject(nm),Ir=ua}catch{}}return Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tm,Ze.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Po(r))throw Error(l(200));return Zh(e,r,null,n)},Ze.createRoot=function(e,r){if(!Po(e))throw Error(l(299));var n=!1,s="",a=Gd;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),r=ko(e,1,!1,null,null,n,!1,s,a),e[_r]=r.current,Ln(e.nodeType===8?e.parentNode:e),new So(r)},Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Nl(r),e=e===null?null:e.stateNode,e},Ze.flushSync=function(e){return Nt(e)},Ze.hydrate=function(e,r,n){if(!ca(r))throw Error(l(200));return da(null,e,r,!0,n)},Ze.hydrateRoot=function(e,r,n){if(!Po(e))throw Error(l(405));var s=n!=null&&n.hydratedSources||null,a=!1,o="",c=Gd;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),r=Qd(r,null,e,1,n!=null?n:null,a,!1,o,c),e[_r]=r.current,Ln(e),s)for(e=0;e<s.length;e++)n=s[e],a=n._getVersion,a=a(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,a]:r.mutableSourceEagerHydrationData.push(n,a);return new la(r)},Ze.render=function(e,r,n){if(!ca(r))throw Error(l(200));return da(null,e,r,!1,n)},Ze.unmountComponentAtNode=function(e){if(!ca(e))throw Error(l(40));return e._reactRootContainer?(Nt(function(){da(null,null,e,!1,function(){e._reactRootContainer=null,e[_r]=null})}),!0):!1},Ze.unstable_batchedUpdates=vo,Ze.unstable_renderSubtreeIntoContainer=function(e,r,n,s){if(!ca(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return da(e,r,n,!1,s)},Ze.version="18.3.1-next-f1338f8080-20240426",Ze}var su;function pm(){if(su)return Io.exports;su=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(d){console.error(d)}}return i(),Io.exports=um(),Io.exports}var au;function hm(){if(au)return pa;au=1;var i=pm();return pa.createRoot=i.createRoot,pa.hydrateRoot=i.hydrateRoot,pa}var mm=hm(),ie=Ko();const vr=am(ie);var er=function(){return er=Object.assign||function(d){for(var l,p=1,v=arguments.length;p<v;p++){l=arguments[p];for(var j in l)Object.prototype.hasOwnProperty.call(l,j)&&(d[j]=l[j])}return d},er.apply(this,arguments)};function ja(i,d,l){if(l||arguments.length===2)for(var p=0,v=d.length,j;p<v;p++)(j||!(p in d))&&(j||(j=Array.prototype.slice.call(d,0,p)),j[p]=d[p]);return i.concat(j||Array.prototype.slice.call(d))}var je="-ms-",Xn="-moz-",me="-webkit-",Iu="comm",Ta="rule",Go="decl",xm="@import",Eu="@keyframes",fm="@layer",Lu=Math.abs,Yo=String.fromCharCode,_o=Object.assign;function vm(i,d){return De(i,0)^45?(((d<<2^De(i,0))<<2^De(i,1))<<2^De(i,2))<<2^De(i,3):0}function zu(i){return i.trim()}function Vr(i,d){return(i=d.exec(i))?i[0]:i}function J(i,d,l){return i.replace(d,l)}function xa(i,d,l){return i.indexOf(d,l)}function De(i,d){return i.charCodeAt(d)|0}function tn(i,d,l){return i.slice(d,l)}function Ar(i){return i.length}function Ru(i){return i.length}function Yn(i,d){return d.push(i),i}function gm(i,d){return i.map(d).join("")}function iu(i,d){return i.filter(function(l){return!Vr(l,d)})}var Ca=1,nn=1,Au=0,gr=0,Ce=0,cn="";function Ia(i,d,l,p,v,j,N,I){return{value:i,root:d,parent:l,type:p,props:v,children:j,line:Ca,column:nn,length:N,return:"",siblings:I}}function ut(i,d){return _o(Ia("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},d)}function en(i){for(;i.root;)i=ut(i.root,{children:[i]});Yn(i,i.siblings)}function ym(){return Ce}function jm(){return Ce=gr>0?De(cn,--gr):0,nn--,Ce===10&&(nn=1,Ca--),Ce}function Cr(){return Ce=gr<Au?De(cn,gr++):0,nn++,Ce===10&&(nn=1,Ca++),Ce}function Tt(){return De(cn,gr)}function fa(){return gr}function Ea(i,d){return tn(cn,i,d)}function Fo(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wm(i){return Ca=nn=1,Au=Ar(cn=i),gr=0,[]}function Nm(i){return cn="",i}function zo(i){return zu(Ea(gr-1,Oo(i===91?i+2:i===40?i+1:i)))}function km(i){for(;(Ce=Tt())&&Ce<33;)Cr();return Fo(i)>2||Fo(Ce)>3?"":" "}function bm(i,d){for(;--d&&Cr()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return Ea(i,fa()+(d<6&&Tt()==32&&Cr()==32))}function Oo(i){for(;Cr();)switch(Ce){case i:return gr;case 34:case 39:i!==34&&i!==39&&Oo(Ce);break;case 40:i===41&&Oo(i);break;case 92:Cr();break}return gr}function Sm(i,d){for(;Cr()&&i+Ce!==57;)if(i+Ce===84&&Tt()===47)break;return"/*"+Ea(d,gr-1)+"*"+Yo(i===47?i:Cr())}function Pm(i){for(;!Fo(Tt());)Cr();return Ea(i,gr)}function Tm(i){return Nm(va("",null,null,null,[""],i=wm(i),0,[0],i))}function va(i,d,l,p,v,j,N,I,T){for(var U=0,V=0,F=N,O=0,Q=0,ne=0,q=1,Y=1,he=1,oe=0,se="",Z=v,ue=j,K=p,H=se;Y;)switch(ne=oe,oe=Cr()){case 40:if(ne!=108&&De(H,F-1)==58){xa(H+=J(zo(oe),"&","&\f"),"&\f",Lu(U?I[U-1]:0))!=-1&&(he=-1);break}case 34:case 39:case 91:H+=zo(oe);break;case 9:case 10:case 13:case 32:H+=km(ne);break;case 92:H+=bm(fa()-1,7);continue;case 47:switch(Tt()){case 42:case 47:Yn(Cm(Sm(Cr(),fa()),d,l,T),T);break;default:H+="/"}break;case 123*q:I[U++]=Ar(H)*he;case 125*q:case 59:case 0:switch(oe){case 0:case 125:Y=0;case 59+V:he==-1&&(H=J(H,/\f/g,"")),Q>0&&Ar(H)-F&&Yn(Q>32?lu(H+";",p,l,F-1,T):lu(J(H," ","")+";",p,l,F-2,T),T);break;case 59:H+=";";default:if(Yn(K=ou(H,d,l,U,V,v,I,se,Z=[],ue=[],F,j),j),oe===123)if(V===0)va(H,d,K,K,Z,j,F,I,ue);else switch(O===99&&De(H,3)===110?100:O){case 100:case 108:case 109:case 115:va(i,K,K,p&&Yn(ou(i,K,K,0,0,v,I,se,v,Z=[],F,ue),ue),v,ue,F,I,p?Z:ue);break;default:va(H,K,K,K,[""],ue,0,I,ue)}}U=V=Q=0,q=he=1,se=H="",F=N;break;case 58:F=1+Ar(H),Q=ne;default:if(q<1){if(oe==123)--q;else if(oe==125&&q++==0&&jm()==125)continue}switch(H+=Yo(oe),oe*q){case 38:he=V>0?1:(H+="\f",-1);break;case 44:I[U++]=(Ar(H)-1)*he,he=1;break;case 64:Tt()===45&&(H+=zo(Cr())),O=Tt(),V=F=Ar(se=H+=Pm(fa())),oe++;break;case 45:ne===45&&Ar(H)==2&&(q=0)}}return j}function ou(i,d,l,p,v,j,N,I,T,U,V,F){for(var O=v-1,Q=v===0?j:[""],ne=Ru(Q),q=0,Y=0,he=0;q<p;++q)for(var oe=0,se=tn(i,O+1,O=Lu(Y=N[q])),Z=i;oe<ne;++oe)(Z=zu(Y>0?Q[oe]+" "+se:J(se,/&\f/g,Q[oe])))&&(T[he++]=Z);return Ia(i,d,l,v===0?Ta:I,T,U,V,F)}function Cm(i,d,l,p){return Ia(i,d,l,Iu,Yo(ym()),tn(i,2,-2),0,p)}function lu(i,d,l,p,v){return Ia(i,d,l,Go,tn(i,0,p),tn(i,p+1,-1),p,v)}function Mu(i,d,l){switch(vm(i,d)){case 5103:return me+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+i+i;case 4789:return Xn+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return me+i+Xn+i+je+i+i;case 5936:switch(De(i,d+11)){case 114:return me+i+je+J(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return me+i+je+J(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return me+i+je+J(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return me+i+je+i+i;case 6165:return me+i+je+"flex-"+i+i;case 5187:return me+i+J(i,/(\w+).+(:[^]+)/,me+"box-$1$2"+je+"flex-$1$2")+i;case 5443:return me+i+je+"flex-item-"+J(i,/flex-|-self/g,"")+(Vr(i,/flex-|baseline/)?"":je+"grid-row-"+J(i,/flex-|-self/g,""))+i;case 4675:return me+i+je+"flex-line-pack"+J(i,/align-content|flex-|-self/g,"")+i;case 5548:return me+i+je+J(i,"shrink","negative")+i;case 5292:return me+i+je+J(i,"basis","preferred-size")+i;case 6060:return me+"box-"+J(i,"-grow","")+me+i+je+J(i,"grow","positive")+i;case 4554:return me+J(i,/([^-])(transform)/g,"$1"+me+"$2")+i;case 6187:return J(J(J(i,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),i,"")+i;case 5495:case 3959:return J(i,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return J(J(i,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+i+i;case 4200:if(!Vr(i,/flex-|baseline/))return je+"grid-column-align"+tn(i,d)+i;break;case 2592:case 3360:return je+J(i,"template-","")+i;case 4384:case 3616:return l&&l.some(function(p,v){return d=v,Vr(p.props,/grid-\w+-end/)})?~xa(i+(l=l[d].value),"span",0)?i:je+J(i,"-start","")+i+je+"grid-row-span:"+(~xa(l,"span",0)?Vr(l,/\d+/):+Vr(l,/\d+/)-+Vr(i,/\d+/))+";":je+J(i,"-start","")+i;case 4896:case 4128:return l&&l.some(function(p){return Vr(p.props,/grid-\w+-start/)})?i:je+J(J(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return J(i,/(.+)-inline(.+)/,me+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ar(i)-1-d>6)switch(De(i,d+1)){case 109:if(De(i,d+4)!==45)break;case 102:return J(i,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+Xn+(De(i,d+3)==108?"$3":"$2-$3"))+i;case 115:return~xa(i,"stretch",0)?Mu(J(i,"stretch","fill-available"),d,l)+i:i}break;case 5152:case 5920:return J(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,v,j,N,I,T,U){return je+v+":"+j+U+(N?je+v+"-span:"+(I?T:+T-+j)+U:"")+i});case 4949:if(De(i,d+6)===121)return J(i,":",":"+me)+i;break;case 6444:switch(De(i,De(i,14)===45?18:11)){case 120:return J(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(De(i,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+je+"$2box$3")+i;case 100:return J(i,":",":"+je)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return J(i,"scroll-","scroll-snap-")+i}return i}function wa(i,d){for(var l="",p=0;p<i.length;p++)l+=d(i[p],p,i,d)||"";return l}function Im(i,d,l,p){switch(i.type){case fm:if(i.children.length)break;case xm:case Go:return i.return=i.return||i.value;case Iu:return"";case Eu:return i.return=i.value+"{"+wa(i.children,p)+"}";case Ta:if(!Ar(i.value=i.props.join(",")))return""}return Ar(l=wa(i.children,p))?i.return=i.value+"{"+l+"}":""}function Em(i){var d=Ru(i);return function(l,p,v,j){for(var N="",I=0;I<d;I++)N+=i[I](l,p,v,j)||"";return N}}function Lm(i){return function(d){d.root||(d=d.return)&&i(d)}}function zm(i,d,l,p){if(i.length>-1&&!i.return)switch(i.type){case Go:i.return=Mu(i.value,i.length,l);return;case Eu:return wa([ut(i,{value:J(i.value,"@","@"+me)})],p);case Ta:if(i.length)return gm(l=i.props,function(v){switch(Vr(v,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":en(ut(i,{props:[J(v,/:(read-\w+)/,":"+Xn+"$1")]})),en(ut(i,{props:[v]})),_o(i,{props:iu(l,p)});break;case"::placeholder":en(ut(i,{props:[J(v,/:(plac\w+)/,":"+me+"input-$1")]})),en(ut(i,{props:[J(v,/:(plac\w+)/,":"+Xn+"$1")]})),en(ut(i,{props:[J(v,/:(plac\w+)/,je+"input-$1")]})),en(ut(i,{props:[v]})),_o(i,{props:iu(l,p)});break}return""})}}var Rm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},or={},sn=typeof process!="undefined"&&or!==void 0&&(or.REACT_APP_SC_ATTR||or.SC_ATTR)||"data-styled",Du="active",_u="data-styled-version",La="6.1.18",Xo=`/*!sc*/
`,Na=typeof window!="undefined"&&typeof document!="undefined",Am=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&or!==void 0&&or.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&or.REACT_APP_SC_DISABLE_SPEEDY!==""?or.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&or.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&or!==void 0&&or.SC_DISABLE_SPEEDY!==void 0&&or.SC_DISABLE_SPEEDY!==""&&or.SC_DISABLE_SPEEDY!=="false"&&or.SC_DISABLE_SPEEDY),za=Object.freeze([]),an=Object.freeze({});function Mm(i,d,l){return l===void 0&&(l=an),i.theme!==l.theme&&i.theme||d||l.theme}var Fu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Dm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_m=/(^-|-$)/g;function cu(i){return i.replace(Dm,"-").replace(_m,"")}var Fm=/(a)(d)/gi,ha=52,du=function(i){return String.fromCharCode(i+(i>25?39:97))};function Wo(i){var d,l="";for(d=Math.abs(i);d>ha;d=d/ha|0)l=du(d%ha)+l;return(du(d%ha)+l).replace(Fm,"$1-$2")}var Ro,Ou=5381,rn=function(i,d){for(var l=d.length;l;)i=33*i^d.charCodeAt(--l);return i},Wu=function(i){return rn(Ou,i)};function Om(i){return Wo(Wu(i)>>>0)}function Wm(i){return i.displayName||i.name||"Component"}function Ao(i){return typeof i=="string"&&!0}var Bu=typeof Symbol=="function"&&Symbol.for,Hu=Bu?Symbol.for("react.memo"):60115,Bm=Bu?Symbol.for("react.forward_ref"):60112,Hm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Um={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Uu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$m=((Ro={})[Bm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ro[Hu]=Uu,Ro);function uu(i){return("type"in(d=i)&&d.type.$$typeof)===Hu?Uu:"$$typeof"in i?$m[i.$$typeof]:Hm;var d}var Vm=Object.defineProperty,qm=Object.getOwnPropertyNames,pu=Object.getOwnPropertySymbols,Qm=Object.getOwnPropertyDescriptor,Km=Object.getPrototypeOf,hu=Object.prototype;function $u(i,d,l){if(typeof d!="string"){if(hu){var p=Km(d);p&&p!==hu&&$u(i,p,l)}var v=qm(d);pu&&(v=v.concat(pu(d)));for(var j=uu(i),N=uu(d),I=0;I<v.length;++I){var T=v[I];if(!(T in Um||l&&l[T]||N&&T in N||j&&T in j)){var U=Qm(d,T);try{Vm(i,T,U)}catch{}}}}return i}function on(i){return typeof i=="function"}function Jo(i){return typeof i=="object"&&"styledComponentId"in i}function Pt(i,d){return i&&d?"".concat(i," ").concat(d):i||d||""}function mu(i,d){if(i.length===0)return"";for(var l=i[0],p=1;p<i.length;p++)l+=i[p];return l}function Jn(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Bo(i,d,l){if(l===void 0&&(l=!1),!l&&!Jn(i)&&!Array.isArray(i))return d;if(Array.isArray(d))for(var p=0;p<d.length;p++)i[p]=Bo(i[p],d[p]);else if(Jn(d))for(var p in d)i[p]=Bo(i[p],d[p]);return i}function Zo(i,d){Object.defineProperty(i,"toString",{value:d})}function ts(i){for(var d=[],l=1;l<arguments.length;l++)d[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(d.length>0?" Args: ".concat(d.join(", ")):""))}var Gm=(function(){function i(d){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=d}return i.prototype.indexOfGroup=function(d){for(var l=0,p=0;p<d;p++)l+=this.groupSizes[p];return l},i.prototype.insertRules=function(d,l){if(d>=this.groupSizes.length){for(var p=this.groupSizes,v=p.length,j=v;d>=j;)if((j<<=1)<0)throw ts(16,"".concat(d));this.groupSizes=new Uint32Array(j),this.groupSizes.set(p),this.length=j;for(var N=v;N<j;N++)this.groupSizes[N]=0}for(var I=this.indexOfGroup(d+1),T=(N=0,l.length);N<T;N++)this.tag.insertRule(I,l[N])&&(this.groupSizes[d]++,I++)},i.prototype.clearGroup=function(d){if(d<this.length){var l=this.groupSizes[d],p=this.indexOfGroup(d),v=p+l;this.groupSizes[d]=0;for(var j=p;j<v;j++)this.tag.deleteRule(p)}},i.prototype.getGroup=function(d){var l="";if(d>=this.length||this.groupSizes[d]===0)return l;for(var p=this.groupSizes[d],v=this.indexOfGroup(d),j=v+p,N=v;N<j;N++)l+="".concat(this.tag.getRule(N)).concat(Xo);return l},i})(),ga=new Map,ka=new Map,ya=1,ma=function(i){if(ga.has(i))return ga.get(i);for(;ka.has(ya);)ya++;var d=ya++;return ga.set(i,d),ka.set(d,i),d},Ym=function(i,d){ya=d+1,ga.set(i,d),ka.set(d,i)},Xm="style[".concat(sn,"][").concat(_u,'="').concat(La,'"]'),Jm=new RegExp("^".concat(sn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zm=function(i,d,l){for(var p,v=l.split(","),j=0,N=v.length;j<N;j++)(p=v[j])&&i.registerName(d,p)},ex=function(i,d){for(var l,p=((l=d.textContent)!==null&&l!==void 0?l:"").split(Xo),v=[],j=0,N=p.length;j<N;j++){var I=p[j].trim();if(I){var T=I.match(Jm);if(T){var U=0|parseInt(T[1],10),V=T[2];U!==0&&(Ym(V,U),Zm(i,V,T[3]),i.getTag().insertRules(U,v)),v.length=0}else v.push(I)}}},xu=function(i){for(var d=document.querySelectorAll(Xm),l=0,p=d.length;l<p;l++){var v=d[l];v&&v.getAttribute(sn)!==Du&&(ex(i,v),v.parentNode&&v.parentNode.removeChild(v))}};function rx(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Vu=function(i){var d=document.head,l=i||d,p=document.createElement("style"),v=(function(I){var T=Array.from(I.querySelectorAll("style[".concat(sn,"]")));return T[T.length-1]})(l),j=v!==void 0?v.nextSibling:null;p.setAttribute(sn,Du),p.setAttribute(_u,La);var N=rx();return N&&p.setAttribute("nonce",N),l.insertBefore(p,j),p},tx=(function(){function i(d){this.element=Vu(d),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){if(l.sheet)return l.sheet;for(var p=document.styleSheets,v=0,j=p.length;v<j;v++){var N=p[v];if(N.ownerNode===l)return N}throw ts(17)})(this.element),this.length=0}return i.prototype.insertRule=function(d,l){try{return this.sheet.insertRule(l,d),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(d){this.sheet.deleteRule(d),this.length--},i.prototype.getRule=function(d){var l=this.sheet.cssRules[d];return l&&l.cssText?l.cssText:""},i})(),nx=(function(){function i(d){this.element=Vu(d),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(d,l){if(d<=this.length&&d>=0){var p=document.createTextNode(l);return this.element.insertBefore(p,this.nodes[d]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(d){this.element.removeChild(this.nodes[d]),this.length--},i.prototype.getRule=function(d){return d<this.length?this.nodes[d].textContent:""},i})(),sx=(function(){function i(d){this.rules=[],this.length=0}return i.prototype.insertRule=function(d,l){return d<=this.length&&(this.rules.splice(d,0,l),this.length++,!0)},i.prototype.deleteRule=function(d){this.rules.splice(d,1),this.length--},i.prototype.getRule=function(d){return d<this.length?this.rules[d]:""},i})(),fu=Na,ax={isServer:!Na,useCSSOMInjection:!Am},qu=(function(){function i(d,l,p){d===void 0&&(d=an),l===void 0&&(l={});var v=this;this.options=er(er({},ax),d),this.gs=l,this.names=new Map(p),this.server=!!d.isServer,!this.server&&Na&&fu&&(fu=!1,xu(this)),Zo(this,function(){return(function(j){for(var N=j.getTag(),I=N.length,T="",U=function(F){var O=(function(he){return ka.get(he)})(F);if(O===void 0)return"continue";var Q=j.names.get(O),ne=N.getGroup(F);if(Q===void 0||!Q.size||ne.length===0)return"continue";var q="".concat(sn,".g").concat(F,'[id="').concat(O,'"]'),Y="";Q!==void 0&&Q.forEach(function(he){he.length>0&&(Y+="".concat(he,","))}),T+="".concat(ne).concat(q,'{content:"').concat(Y,'"}').concat(Xo)},V=0;V<I;V++)U(V);return T})(v)})}return i.registerId=function(d){return ma(d)},i.prototype.rehydrate=function(){!this.server&&Na&&xu(this)},i.prototype.reconstructWithOptions=function(d,l){return l===void 0&&(l=!0),new i(er(er({},this.options),d),this.gs,l&&this.names||void 0)},i.prototype.allocateGSInstance=function(d){return this.gs[d]=(this.gs[d]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(d=(function(l){var p=l.useCSSOMInjection,v=l.target;return l.isServer?new sx(v):p?new tx(v):new nx(v)})(this.options),new Gm(d)));var d},i.prototype.hasNameForId=function(d,l){return this.names.has(d)&&this.names.get(d).has(l)},i.prototype.registerName=function(d,l){if(ma(d),this.names.has(d))this.names.get(d).add(l);else{var p=new Set;p.add(l),this.names.set(d,p)}},i.prototype.insertRules=function(d,l,p){this.registerName(d,l),this.getTag().insertRules(ma(d),p)},i.prototype.clearNames=function(d){this.names.has(d)&&this.names.get(d).clear()},i.prototype.clearRules=function(d){this.getTag().clearGroup(ma(d)),this.clearNames(d)},i.prototype.clearTag=function(){this.tag=void 0},i})(),ix=/&/g,ox=/^\s*\/\/.*$/gm;function Qu(i,d){return i.map(function(l){return l.type==="rule"&&(l.value="".concat(d," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(d," ")),l.props=l.props.map(function(p){return"".concat(d," ").concat(p)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=Qu(l.children,d)),l})}function lx(i){var d,l,p,v=an,j=v.options,N=j===void 0?an:j,I=v.plugins,T=I===void 0?za:I,U=function(O,Q,ne){return ne.startsWith(l)&&ne.endsWith(l)&&ne.replaceAll(l,"").length>0?".".concat(d):O},V=T.slice();V.push(function(O){O.type===Ta&&O.value.includes("&")&&(O.props[0]=O.props[0].replace(ix,l).replace(p,U))}),N.prefix&&V.push(zm),V.push(Im);var F=function(O,Q,ne,q){Q===void 0&&(Q=""),ne===void 0&&(ne=""),q===void 0&&(q="&"),d=q,l=Q,p=new RegExp("\\".concat(l,"\\b"),"g");var Y=O.replace(ox,""),he=Tm(ne||Q?"".concat(ne," ").concat(Q," { ").concat(Y," }"):Y);N.namespace&&(he=Qu(he,N.namespace));var oe=[];return wa(he,Em(V.concat(Lm(function(se){return oe.push(se)})))),oe};return F.hash=T.length?T.reduce(function(O,Q){return Q.name||ts(15),rn(O,Q.name)},Ou).toString():"",F}var cx=new qu,Ho=lx(),Ku=vr.createContext({shouldForwardProp:void 0,styleSheet:cx,stylis:Ho});Ku.Consumer;vr.createContext(void 0);function vu(){return ie.useContext(Ku)}var dx=(function(){function i(d,l){var p=this;this.inject=function(v,j){j===void 0&&(j=Ho);var N=p.name+j.hash;v.hasNameForId(p.id,N)||v.insertRules(p.id,N,j(p.rules,N,"@keyframes"))},this.name=d,this.id="sc-keyframes-".concat(d),this.rules=l,Zo(this,function(){throw ts(12,String(p.name))})}return i.prototype.getName=function(d){return d===void 0&&(d=Ho),this.name+d.hash},i})(),ux=function(i){return i>="A"&&i<="Z"};function gu(i){for(var d="",l=0;l<i.length;l++){var p=i[l];if(l===1&&p==="-"&&i[0]==="-")return i;ux(p)?d+="-"+p.toLowerCase():d+=p}return d.startsWith("ms-")?"-"+d:d}var Gu=function(i){return i==null||i===!1||i===""},Yu=function(i){var d,l,p=[];for(var v in i){var j=i[v];i.hasOwnProperty(v)&&!Gu(j)&&(Array.isArray(j)&&j.isCss||on(j)?p.push("".concat(gu(v),":"),j,";"):Jn(j)?p.push.apply(p,ja(ja(["".concat(v," {")],Yu(j),!1),["}"],!1)):p.push("".concat(gu(v),": ").concat((d=v,(l=j)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||d in Rm||d.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return p};function Ct(i,d,l,p){if(Gu(i))return[];if(Jo(i))return[".".concat(i.styledComponentId)];if(on(i)){if(!on(j=i)||j.prototype&&j.prototype.isReactComponent||!d)return[i];var v=i(d);return Ct(v,d,l,p)}var j;return i instanceof dx?l?(i.inject(l,p),[i.getName(p)]):[i]:Jn(i)?Yu(i):Array.isArray(i)?Array.prototype.concat.apply(za,i.map(function(N){return Ct(N,d,l,p)})):[i.toString()]}function px(i){for(var d=0;d<i.length;d+=1){var l=i[d];if(on(l)&&!Jo(l))return!1}return!0}var hx=Wu(La),mx=(function(){function i(d,l,p){this.rules=d,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&px(d),this.componentId=l,this.baseHash=rn(hx,l),this.baseStyle=p,qu.registerId(l)}return i.prototype.generateAndInjectStyles=function(d,l,p){var v=this.baseStyle?this.baseStyle.generateAndInjectStyles(d,l,p):"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))v=Pt(v,this.staticRulesId);else{var j=mu(Ct(this.rules,d,l,p)),N=Wo(rn(this.baseHash,j)>>>0);if(!l.hasNameForId(this.componentId,N)){var I=p(j,".".concat(N),void 0,this.componentId);l.insertRules(this.componentId,N,I)}v=Pt(v,N),this.staticRulesId=N}else{for(var T=rn(this.baseHash,p.hash),U="",V=0;V<this.rules.length;V++){var F=this.rules[V];if(typeof F=="string")U+=F;else if(F){var O=mu(Ct(F,d,l,p));T=rn(T,O+V),U+=O}}if(U){var Q=Wo(T>>>0);l.hasNameForId(this.componentId,Q)||l.insertRules(this.componentId,Q,p(U,".".concat(Q),void 0,this.componentId)),v=Pt(v,Q)}}return v},i})(),Xu=vr.createContext(void 0);Xu.Consumer;var Mo={};function xx(i,d,l){var p=Jo(i),v=i,j=!Ao(i),N=d.attrs,I=N===void 0?za:N,T=d.componentId,U=T===void 0?(function(Z,ue){var K=typeof Z!="string"?"sc":cu(Z);Mo[K]=(Mo[K]||0)+1;var H="".concat(K,"-").concat(Om(La+K+Mo[K]));return ue?"".concat(ue,"-").concat(H):H})(d.displayName,d.parentComponentId):T,V=d.displayName,F=V===void 0?(function(Z){return Ao(Z)?"styled.".concat(Z):"Styled(".concat(Wm(Z),")")})(i):V,O=d.displayName&&d.componentId?"".concat(cu(d.displayName),"-").concat(d.componentId):d.componentId||U,Q=p&&v.attrs?v.attrs.concat(I).filter(Boolean):I,ne=d.shouldForwardProp;if(p&&v.shouldForwardProp){var q=v.shouldForwardProp;if(d.shouldForwardProp){var Y=d.shouldForwardProp;ne=function(Z,ue){return q(Z,ue)&&Y(Z,ue)}}else ne=q}var he=new mx(l,O,p?v.componentStyle:void 0);function oe(Z,ue){return(function(K,H,Ee){var rr=K.attrs,yr=K.componentStyle,Mr=K.defaultProps,cr=K.foldedComponentIds,Ve=K.styledComponentId,tr=K.target,dr=vr.useContext(Xu),We=vu(),fe=K.shouldForwardProp||We.shouldForwardProp,C=Mm(H,dr,Mr)||an,D=(function(te,ee,pe){for(var ae,ce=er(er({},ee),{className:void 0,theme:pe}),_e=0;_e<te.length;_e+=1){var Dr=on(ae=te[_e])?ae(ce):ae;for(var jr in Dr)ce[jr]=jr==="className"?Pt(ce[jr],Dr[jr]):jr==="style"?er(er({},ce[jr]),Dr[jr]):Dr[jr]}return ee.className&&(ce.className=Pt(ce.className,ee.className)),ce})(rr,H,C),E=D.as||tr,x={};for(var w in D)D[w]===void 0||w[0]==="$"||w==="as"||w==="theme"&&D.theme===C||(w==="forwardedAs"?x.as=D.forwardedAs:fe&&!fe(w,E)||(x[w]=D[w]));var G=(function(te,ee){var pe=vu(),ae=te.generateAndInjectStyles(ee,pe.styleSheet,pe.stylis);return ae})(yr,D),X=Pt(cr,Ve);return G&&(X+=" "+G),D.className&&(X+=" "+D.className),x[Ao(E)&&!Fu.has(E)?"class":"className"]=X,Ee&&(x.ref=Ee),ie.createElement(E,x)})(se,Z,ue)}oe.displayName=F;var se=vr.forwardRef(oe);return se.attrs=Q,se.componentStyle=he,se.displayName=F,se.shouldForwardProp=ne,se.foldedComponentIds=p?Pt(v.foldedComponentIds,v.styledComponentId):"",se.styledComponentId=O,se.target=p?v.target:i,Object.defineProperty(se,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Z){this._foldedDefaultProps=p?(function(ue){for(var K=[],H=1;H<arguments.length;H++)K[H-1]=arguments[H];for(var Ee=0,rr=K;Ee<rr.length;Ee++)Bo(ue,rr[Ee],!0);return ue})({},v.defaultProps,Z):Z}}),Zo(se,function(){return".".concat(se.styledComponentId)}),j&&$u(se,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),se}function yu(i,d){for(var l=[i[0]],p=0,v=d.length;p<v;p+=1)l.push(d[p],i[p+1]);return l}var ju=function(i){return Object.assign(i,{isCss:!0})};function fx(i){for(var d=[],l=1;l<arguments.length;l++)d[l-1]=arguments[l];if(on(i)||Jn(i))return ju(Ct(yu(za,ja([i],d,!0))));var p=i;return d.length===0&&p.length===1&&typeof p[0]=="string"?Ct(p):ju(Ct(yu(p,d)))}function Uo(i,d,l){if(l===void 0&&(l=an),!d)throw ts(1,d);var p=function(v){for(var j=[],N=1;N<arguments.length;N++)j[N-1]=arguments[N];return i(d,l,fx.apply(void 0,ja([v],j,!1)))};return p.attrs=function(v){return Uo(i,d,er(er({},l),{attrs:Array.prototype.concat(l.attrs,v).filter(Boolean)}))},p.withConfig=function(v){return Uo(i,d,er(er({},l),v))},p}var Ju=function(i){return Uo(xx,i)},Ie=Ju;Fu.forEach(function(i){Ie[i]=Ju(i)});const Do={Wrapper:Ie.div`
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:Ie.header`
        height: 60px;
        flex-shrink: 0;
    `,Main:Ie.main`
        flex: 1;
        overflow-y: auto;
        position: relative;

        .workspaceLayout {
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: grid;
            grid-template-columns: 260px minmax(0, 1fr);
            gap: 28px;
            padding: 18px 22px 42px;
        }
        .sideMenu {
            position: sticky;
            top: 18px;
            align-self: start;
            height: calc(100vh - 60px - 36px);
            max-height: calc(100vh - 60px - 36px);
            box-sizing: border-box;
            overflow-y: auto;
            padding: 16px 10px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
        }
        .menuLabel { margin: 0 10px 12px; color: var(--color-text-muted); font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
        .sideMenu nav { display: grid; gap: 5px; }
        .sideMenu button { width: 100%; padding: 10px 12px; border: 1px solid transparent; border-radius: 10px; background: transparent; color: var(--color-text-secondary); text-align: left; cursor: pointer; font: inherit; }
        .sideMenu button:hover, .sideMenu button.active { background: var(--color-primary); border-color: var(--color-primary); color: #111111; }
        .contentWrapper { min-width: 0; padding: 4px 0; }
        .scrollTopButton {
            position: fixed;
            right: 24px;
            bottom: 24px;
            z-index: 10;
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 50%;
            background: var(--color-surface);
            color: var(--color-text-primary);
            cursor: pointer;
            box-shadow: 0 8px 20px var(--color-shadow);
        }
        .scrollTopButton:hover { background: var(--color-primary); color: #111111; }
        @media (max-width: 820px) {
            .workspaceLayout { grid-template-columns: 1fr; padding: 14px; }
            .sideMenu { position: static; height: auto; max-height: none; }
            .sideMenu nav { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .scrollTopButton { right: 16px; bottom: 16px; }
        }
        .footerWrapper { flex-shrink: 0; }
    `},wu={Wrapper:Ie.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;

        border-bottom: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-bg) 88%,
            var(--color-surface)
        );

        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;

        box-shadow: 0 10px 30px var(--color-shadow);

        /* networking vibe: subtle pulse strip */
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle dotted "packet" texture */
        &::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image: radial-gradient(
                color-mix(in srgb, var(--color-border) 55%, transparent) 1px,
                transparent 1px
            );
            background-size: 18px 18px;
            opacity: 0.18;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.85),
                rgba(0, 0, 0, 0)
            );
        }
    `,Main:Ie.div`
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;

        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
            position: relative;
            z-index: 1;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 12px;
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 6px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);

            /* network ring + subtle glow */
            box-shadow:
                0 0 0 1px
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                0 14px 30px var(--color-shadow);

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
                filter: saturate(1.08) contrast(1.02);
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background:
                    radial-gradient(
                        120px 90px at 20% 20%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 24%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    radial-gradient(
                        120px 90px at 85% 80%,
                        color-mix(
                            in srgb,
                            var(--color-accent) 18%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    var(--color-surface-2);
                opacity: 0.85;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 900;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            box-shadow: 0 10px 22px var(--color-shadow);

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;

                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }

            .label {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: linear-gradient(
                    180deg,
                    color-mix(in srgb, var(--color-surface) 92%, transparent),
                    color-mix(in srgb, var(--color-surface-2) 78%, #000)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
                box-shadow:
                    0 0 0 4px
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                    0 10px 22px var(--color-shadow);
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `};var Zu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Nu=vr.createContext&&vr.createContext(Zu),vx=["attr","size","title"];function gx(i,d){if(i==null)return{};var l=yx(i,d),p,v;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(i);for(v=0;v<j.length;v++)p=j[v],!(d.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(i,p)&&(l[p]=i[p])}return l}function yx(i,d){if(i==null)return{};var l={};for(var p in i)if(Object.prototype.hasOwnProperty.call(i,p)){if(d.indexOf(p)>=0)continue;l[p]=i[p]}return l}function ba(){return ba=Object.assign?Object.assign.bind():function(i){for(var d=1;d<arguments.length;d++){var l=arguments[d];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(i[p]=l[p])}return i},ba.apply(this,arguments)}function ku(i,d){var l=Object.keys(i);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(i);d&&(p=p.filter(function(v){return Object.getOwnPropertyDescriptor(i,v).enumerable})),l.push.apply(l,p)}return l}function Sa(i){for(var d=1;d<arguments.length;d++){var l=arguments[d]!=null?arguments[d]:{};d%2?ku(Object(l),!0).forEach(function(p){jx(i,p,l[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(l)):ku(Object(l)).forEach(function(p){Object.defineProperty(i,p,Object.getOwnPropertyDescriptor(l,p))})}return i}function jx(i,d,l){return d=wx(d),d in i?Object.defineProperty(i,d,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[d]=l,i}function wx(i){var d=Nx(i,"string");return typeof d=="symbol"?d:d+""}function Nx(i,d){if(typeof i!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var p=l.call(i,d);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(i)}function ep(i){return i&&i.map((d,l)=>vr.createElement(d.tag,Sa({key:l},d.attr),ep(d.child)))}function _(i){return d=>vr.createElement(kx,ba({attr:Sa({},i.attr)},d),ep(i.child))}function kx(i){var d=l=>{var{attr:p,size:v,title:j}=i,N=gx(i,vx),I=v||l.size||"1em",T;return l.className&&(T=l.className),i.className&&(T=(T?T+" ":"")+i.className),vr.createElement("svg",ba({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,p,N,{className:T,style:Sa(Sa({color:i.color||l.color},l.style),i.style),height:I,width:I,xmlns:"http://www.w3.org/2000/svg"}),j&&vr.createElement("title",null,j),i.children)};return Nu!==void 0?vr.createElement(Nu.Consumer,null,l=>d(l)):d(Zu)}function el(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(i)}function Zn(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(i)}function bx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"14.31",y1:"8",x2:"20.05",y2:"17.94"},child:[]},{tag:"line",attr:{x1:"9.69",y1:"8",x2:"21.17",y2:"8"},child:[]},{tag:"line",attr:{x1:"7.38",y1:"12",x2:"13.12",y2:"2.06"},child:[]},{tag:"line",attr:{x1:"9.69",y1:"16",x2:"3.95",y2:"6.06"},child:[]},{tag:"line",attr:{x1:"14.31",y1:"16",x2:"2.83",y2:"16"},child:[]},{tag:"line",attr:{x1:"16.62",y1:"12",x2:"10.88",y2:"21.94"},child:[]}]})(i)}function Sx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(i)}function Px(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"},child:[]}]})(i)}function bu(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function lr(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(i)}function rp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(i)}function Tx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(i)}function Cx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 14 20 9 15 4"},child:[]},{tag:"path",attr:{d:"M4 20v-7a4 4 0 0 1 4-4h12"},child:[]}]})(i)}function $o(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(i)}function Su(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(i)}function Ix(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(i)}function Ex(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(i)}function tp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(i)}function Lx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(i)}function pt(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(i)}function zx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(i)}function np(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(i)}function sp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(i)}function Rx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(i)}function Ax(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(i)}function Mx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(i)}function Dx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(i)}function es(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(i)}function rl(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(i)}function _x(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(i)}function ap(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(i)}function ip(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(i)}function Pu(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(i)}function Vo(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(i)}function Fx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"polyline",attr:{points:"9 21 3 21 3 15"},child:[]},{tag:"line",attr:{x1:"21",y1:"3",x2:"14",y2:"10"},child:[]},{tag:"line",attr:{x1:"3",y1:"21",x2:"10",y2:"14"},child:[]}]})(i)}function Ox(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(i)}function Wx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function qo(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]},{tag:"path",attr:{d:"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"},child:[]}]})(i)}function Bx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"polyline",attr:{points:"23 20 23 14 17 14"},child:[]},{tag:"path",attr:{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"},child:[]}]})(i)}function Hx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(i)}function op(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(i)}function Qo(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(i)}function Pa(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(i)}function tl(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(i)}function rs(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(i)}function Ux(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(i)}function $x(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"12",y1:"18",x2:"12.01",y2:"18"},child:[]}]})(i)}function Vx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(i)}function qx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(i)}function lp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(i)}function Qx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(i)}function Tu(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(i)}function Kx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]},{tag:"line",attr:{x1:"12",y1:"12",x2:"12",y2:"21"},child:[]},{tag:"path",attr:{d:"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"},child:[]},{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]}]})(i)}function Gx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(i)}function ln(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12.55a11 11 0 0 1 14.08 0"},child:[]},{tag:"path",attr:{d:"M1.42 9a16 16 0 0 1 21.16 0"},child:[]},{tag:"path",attr:{d:"M8.53 16.11a6 6 0 0 1 6.95 0"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12.01",y2:"20"},child:[]}]})(i)}function nl(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(i)}const Yx="/computer-networks-core-notes/logo.png",Xx=()=>{const[i,d]=ie.useState(!1),[l,p]=ie.useState("dark");ie.useEffect(()=>{const I=localStorage.getItem("app-theme")||"dark";p(I),I==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),ie.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const v=ie.useMemo(()=>l==="light"?"dark":"light",[l]),j=()=>{p(v)};return t.jsx(wu.Wrapper,{children:t.jsx(wu.Main,{children:t.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[t.jsxs("div",{className:"logoNameWrapper",children:[t.jsxs("div",{className:"logoWrapper",children:[!i&&t.jsx("div",{className:"logoSkeleton"}),t.jsx("img",{src:Yx,alt:"computer-networks-core-notes",onLoad:()=>d(!0),style:{opacity:i?1:0}})]}),t.jsxs("div",{className:"nameWrapper",children:[t.jsx("div",{className:"title",children:"computer-networks-core-notes"}),t.jsx("div",{className:"subTitle",children:"At-a-glance computer networks revision"})]})]}),t.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${v} theme`,title:`Switch to ${v}`,children:[t.jsx("span",{className:"icon",children:l==="light"?t.jsx(Ox,{}):t.jsx(qx,{})}),t.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})};function Jx(i){return _({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(i)}function Zx(i){return _({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(i)}const ef={Wrapper:Ie.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 0 4px;
        border-top: 1px solid var(--color-border);
        font-size: 12px;
        color: var(--color-text-muted);

        .copyright {
            line-height: 1.6;
        }

        .copyright a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .copyright a:hover {
            color: var(--color-text-primary);
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 7px;
        }

        .links a {
            display: inline-grid;
            place-items: center;
            width: 30px;
            height: 30px;
            border: 1px solid var(--color-border);
            border-radius: 9px;
            color: var(--color-text-secondary);
            transition:
                color 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;
        }

        .links a:hover {
            color: var(--color-primary);
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 14%, transparent);
        }

        .links svg {
            width: 15px;
            height: 15px;
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;

            .links {
                justify-content: flex-start;
            }
        }
    `},rf=[{label:"Portfolio",href:"https://www.ashishranjan.net/",icon:pt},{label:"GitHub",href:"https://github.com/a2rp",icon:Lx},{label:"CodePen",href:"https://codepen.io/ash1198",icon:Jx},{label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:_x},{label:"Facebook",href:"https://www.facebook.com/theash.ashish/",icon:Ix},{label:"YouTube",href:"https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",icon:Zx},{label:"Email",href:"mailto:ash.ranjan09@gmail.com",icon:ip},{label:"Support",href:"https://a2rp-donation-page.netlify.app/",icon:Rx},{label:"Buy Me a Coffee",href:"https://buymeacoffee.com/a2rp",icon:Tx},{label:"Patreon",href:"https://www.patreon.com/a2rp",icon:Vx}],tf=()=>t.jsxs(ef.Wrapper,{children:[t.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," All rights reserved. By"," ",t.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),t.jsx("nav",{className:"links","aria-label":"Social and support links",children:rf.map(({label:i,href:d,icon:l})=>t.jsx("a",{href:d,target:d.startsWith("mailto:")?void 0:"_blank",rel:d.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":i,title:i,children:t.jsx(l,{"aria-hidden":"true"})},i))})]}),nf={Wrapper:Ie.section`
        width: 100%;
        padding: 18px 0 6px;

        .top {
            margin-bottom: 12px;
        }

        .title {
            font-size: 22px;
            letter-spacing: 0.2px;
            margin-bottom: 6px;
        }

        .sub {
            max-width: 980px;
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            margin-bottom: 10px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 4;
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
        }

        .icon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 15px;
            letter-spacing: 0.2px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .note {
            margin-top: 4px;
            font-size: 12.5px;
            color: var(--color-text-muted);
            position: relative;
            z-index: 1;
            line-height: 1.6;
        }

        .list {
            display: grid;
            gap: 8px;
            position: relative;
            z-index: 1;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }
        }
    `},Cu=()=>t.jsxs(nf.Wrapper,{id:"aboutComputerNetworks",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"Computer Networks"}),t.jsx("p",{className:"sub",children:"Computer networks are the rules and wiring that let machines talk. Your phone, laptop, servers, routers, and switches keep exchanging packets so apps can load pages, stream videos, sync files, and send messages."}),t.jsx("p",{className:"sub",children:"The big idea is layers. We break the problem into parts like addressing, routing, reliable delivery, and application protocols. OSI and TCP-IP are just maps that help you know where a concept belongs and what to debug first."}),t.jsx("p",{className:"sub",children:"This page keeps it practical. You will revise IP and subnet basics, TCP vs UDP, DNS and HTTP flow, plus the tools used to troubleshoot fast like ping, traceroute, dig, and curl."})]}),t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"icon",children:t.jsx(es,{})}),t.jsx("h3",{className:"h3",children:"Layer mental model"})]}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"App"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"TCP or UDP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"IP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"MAC"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Wire or Wi-Fi"})]}),t.jsx("p",{className:"note",children:"Routers forward by IP. Switches forward by MAC. Apps pick ports."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"icon",children:t.jsx(Qo,{})}),t.jsx("h3",{className:"h3",children:"Web request in 1 line"})]}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"DNS"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"TCP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"TLS"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"HTTP"})]}),t.jsx("p",{className:"note",children:"Debug order: DNS, reachability, port, TLS, then HTTP."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"icon",children:t.jsx(ln,{})}),t.jsx("h3",{className:"h3",children:"What you should know"})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Addressing: IPv4, CIDR, private ranges, NAT"}),t.jsx("li",{children:"Transport: TCP handshake, UDP use cases, common ports"}),t.jsx("li",{children:"Core protocols: DNS, HTTP-HTTPS, DHCP, ICMP"}),t.jsx("li",{children:"Basics of security: TLS, firewall, VPN"})]})]})]})]}),sf={Wrapper:Ie.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .osi {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .osiRow {
            display: grid;
            grid-template-columns: 1.1fr 1.4fr 1.2fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .osiRow:first-child {
            border-top: 0;
        }

        .osiRow.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .osiRow.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .osiRow div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.45;
        }

        .map {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            margin-top: 10px;
        }

        .mapRow {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .mapRow:first-child {
            border-top: 0;
        }

        .mapRow.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .mapRow.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .mapRow div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.45;
        }

        .stack {
            display: grid;
            gap: 8px;
            margin-top: 10px;
        }

        .layer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;

            padding: 10px 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .tag {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .desc {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.45;
            text-align: right;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .desc {
                text-align: left;
            }

            .osiRow {
                grid-template-columns: 1fr;
            }

            .mapRow {
                grid-template-columns: 1fr;
            }
        }
    `},af=()=>{const[i,d]=ie.useState(!0),l=ie.useMemo(()=>({id:"networkBasicsModels",title:"Network Basics and Models",sub:"Core terms, OSI and TCP-IP layers, and how data gets wrapped and unwrapped."}),[]);return t.jsxs(sf.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>d(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(ln,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Foundations"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev","aria-hidden":"true",children:t.jsx(lr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsx("div",{className:"inner",children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Vo,{})}),t.jsx("h3",{className:"h3",children:"What is a network"})]}),t.jsx("p",{className:"p",children:"A computer network is a group of devices connected so they can communicate and share data. Devices can be phones, laptops, servers, printers, smart TVs, routers, and switches."}),t.jsx("p",{className:"p",children:"Data is sent in small pieces called packets. Packets travel across cables or Wi-Fi and pass through devices like switches and routers until they reach the destination."}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"Device"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Switch"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Router"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Internet"})]}),t.jsx("p",{className:"note",children:"Switch usually connects devices inside a LAN. Router connects different networks."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(tp,{})}),t.jsx("h3",{className:"h3",children:"Network types and full forms"})]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"LAN"}),t.jsxs("div",{className:"v",children:["Local Area Network",t.jsx("span",{className:"small",children:"Example: home Wi-Fi, office network, college lab"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"MAN"}),t.jsxs("div",{className:"v",children:["Metropolitan Area Network",t.jsx("span",{className:"small",children:"Example: city-level network, large campus across a city"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"WAN"}),t.jsxs("div",{className:"v",children:["Wide Area Network",t.jsx("span",{className:"small",children:"Example: internet, bank branches connected across states"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"PAN"}),t.jsxs("div",{className:"v",children:["Personal Area Network",t.jsx("span",{className:"small",children:"Example: Bluetooth earphones, smartwatch, phone hotspot"})]})]})]}),t.jsx("p",{className:"note",children:"Easy memory: PAN is around one person, LAN is one place, WAN is huge."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(ln,{})}),t.jsx("h3",{className:"h3",children:"Topologies"})]}),t.jsx("p",{className:"p",children:"Topology means the shape of connections in a network. It is about how devices are linked, not the physical location."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Star"})," - all devices connect to one central device (switch or router)",t.jsx("span",{className:"small",children:"Example: most office and home networks"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Mesh"})," - devices have many connections with each other",t.jsx("span",{className:"small",children:"Example: some wireless mesh Wi-Fi systems"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Bus"})," - one main cable shared by many devices",t.jsx("span",{className:"small",children:"Example: older Ethernet setups, not common now"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Ring"})," - each device connects to two neighbors, forming a loop",t.jsx("span",{className:"small",children:"Example: older ring networks, some industrial systems"})]})]}),t.jsx("p",{className:"note",children:"In real networks, star and partial mesh are most common."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(el,{})}),t.jsx("h3",{className:"h3",children:"Bandwidth vs throughput vs latency vs jitter"})]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Bandwidth"}),t.jsxs("div",{className:"v",children:["Maximum capacity of a network link.",t.jsx("span",{className:"small",children:"Example: a 100 Mbps plan is bandwidth capacity"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Throughput"}),t.jsxs("div",{className:"v",children:["Actual useful speed you get in real life.",t.jsx("span",{className:"small",children:"Example: you might get 60 Mbps on a 100 Mbps plan"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Latency"}),t.jsxs("div",{className:"v",children:["Time delay for data to travel from source to destination.",t.jsx("span",{className:"small",children:"Example: ping shows 20 ms latency"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Jitter"}),t.jsxs("div",{className:"v",children:["Variation in latency over time.",t.jsx("span",{className:"small",children:"Example: voice call breaks when delay keeps changing"})]})]})]}),t.jsx("p",{className:"note",children:"Video calls and gaming need low latency and low jitter, not only bandwidth."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(es,{})}),t.jsx("h3",{className:"h3",children:"OSI model (Open Systems Interconnection)"})]}),t.jsx("p",{className:"p",children:"OSI stands for Open Systems Interconnection. It is a 7-layer model used to understand how networking works. It is mainly a learning and troubleshooting model."}),t.jsx("p",{className:"p",children:"Each layer has a specific job. When you send data, it moves from layer 7 down to layer 1. At the receiver, it moves from layer 1 up to layer 7."}),t.jsxs("div",{className:"osi",children:[t.jsxs("div",{className:"osiRow head",children:[t.jsx("div",{className:"c1",children:"Layer"}),t.jsx("div",{className:"c2",children:"Meaning"}),t.jsx("div",{className:"c3",children:"Examples"})]}),t.jsxs("div",{className:"osiRow",children:[t.jsx("div",{className:"c1",children:"7 - Application"}),t.jsx("div",{className:"c2",children:"User-level network services"}),t.jsx("div",{className:"c3",children:"HTTP, DNS, SMTP"})]}),t.jsxs("div",{className:"osiRow",children:[t.jsx("div",{className:"c1",children:"6 - Presentation"}),t.jsx("div",{className:"c2",children:"Format, encryption, compression"}),t.jsx("div",{className:"c3",children:"TLS, JSON, UTF-8"})]}),t.jsxs("div",{className:"osiRow",children:[t.jsx("div",{className:"c1",children:"5 - Session"}),t.jsx("div",{className:"c2",children:"Session control and continuity"}),t.jsx("div",{className:"c3",children:"Session concepts, RPC"})]}),t.jsxs("div",{className:"osiRow",children:[t.jsx("div",{className:"c1",children:"4 - Transport"}),t.jsx("div",{className:"c2",children:"Reliable delivery, ports"}),t.jsx("div",{className:"c3",children:"TCP, UDP"})]}),t.jsxs("div",{className:"osiRow",children:[t.jsx("div",{className:"c1",children:"3 - Network"}),t.jsx("div",{className:"c2",children:"IP addressing and routing"}),t.jsx("div",{className:"c3",children:"IPv4, IPv6, ICMP"})]}),t.jsxs("div",{className:"osiRow",children:[t.jsx("div",{className:"c1",children:"2 - Data Link"}),t.jsx("div",{className:"c2",children:"Local delivery using MAC"}),t.jsx("div",{className:"c3",children:"Ethernet, ARP, VLAN"})]}),t.jsxs("div",{className:"osiRow",children:[t.jsx("div",{className:"c1",children:"1 - Physical"}),t.jsx("div",{className:"c2",children:"Bits on wire or air"}),t.jsx("div",{className:"c3",children:"Cable, fiber, Wi-Fi signal"})]})]}),t.jsx("p",{className:"note",children:"Full forms: HTTP is Hypertext Transfer Protocol, DNS is Domain Name System, SMTP is Simple Mail Transfer Protocol, TLS is Transport Layer Security, TCP is Transmission Control Protocol, UDP is User Datagram Protocol, IP is Internet Protocol, ICMP is Internet Control Message Protocol, ARP is Address Resolution Protocol, VLAN is Virtual Local Area Network."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(es,{})}),t.jsx("h3",{className:"h3",children:"TCP-IP model (Transmission Control Protocol - Internet Protocol)"})]}),t.jsx("p",{className:"p",children:"TCP-IP stands for Transmission Control Protocol and Internet Protocol. It is the model used by the internet in real systems. Most diagrams show 4 layers."}),t.jsxs("div",{className:"map",children:[t.jsxs("div",{className:"mapRow head",children:[t.jsx("div",{className:"a",children:"TCP-IP layer"}),t.jsx("div",{className:"b",children:"OSI mapping"})]}),t.jsxs("div",{className:"mapRow",children:[t.jsx("div",{className:"a",children:"Application"}),t.jsx("div",{className:"b",children:"OSI 5, 6, 7"})]}),t.jsxs("div",{className:"mapRow",children:[t.jsx("div",{className:"a",children:"Transport"}),t.jsx("div",{className:"b",children:"OSI 4"})]}),t.jsxs("div",{className:"mapRow",children:[t.jsx("div",{className:"a",children:"Internet"}),t.jsx("div",{className:"b",children:"OSI 3"})]}),t.jsxs("div",{className:"mapRow",children:[t.jsx("div",{className:"a",children:"Link"}),t.jsx("div",{className:"b",children:"OSI 1, 2"})]})]}),t.jsx("p",{className:"note",children:"Some books show 5 layers by splitting Link into Data Link and Physical."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Wx,{})}),t.jsx("h3",{className:"h3",children:"Encapsulation and decapsulation"})]}),t.jsx("p",{className:"p",children:"Encapsulation means each layer adds its own header while sending data down the stack. Decapsulation means headers are removed while data moves up the stack at the receiver."}),t.jsxs("div",{className:"stack",children:[t.jsxs("div",{className:"layer",children:[t.jsx("div",{className:"tag",children:"Application"}),t.jsx("div",{className:"desc",children:"Data"})]}),t.jsxs("div",{className:"layer",children:[t.jsx("div",{className:"tag",children:"Transport"}),t.jsx("div",{className:"desc",children:"TCP or UDP header + data"})]}),t.jsxs("div",{className:"layer",children:[t.jsx("div",{className:"tag",children:"Network"}),t.jsx("div",{className:"desc",children:"IP header + segment"})]}),t.jsxs("div",{className:"layer",children:[t.jsx("div",{className:"tag",children:"Data Link"}),t.jsx("div",{className:"desc",children:"MAC header + packet + trailer"})]}),t.jsxs("div",{className:"layer",children:[t.jsx("div",{className:"tag",children:"Physical"}),t.jsx("div",{className:"desc",children:"Bits on wire or air"})]})]}),t.jsx("p",{className:"note",children:"Common naming: data becomes segment, then packet, then frame, then bits."})]})]})})})]})},of={Wrapper:Ie.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},lf=()=>{const[i,d]=ie.useState(!0),l=ie.useMemo(()=>({id:"physicalDataLinkEssentials",title:"Physical and Data Link Essentials",sub:"Signals, cables, frames, MAC, ARP, switching, VLAN, and STP basics in one block."}),[]);return t.jsxs(of.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>d(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(qo,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Layer 1 and 2"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(lr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"inner",children:[t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(nl,{})}),t.jsx("h3",{className:"h3",children:"Signals - analog vs digital"})]}),t.jsxs("p",{className:"p",children:["A ",t.jsx("b",{children:"signal"})," is the physical form of data travelling through a medium. Networks carry data as electrical pulses, light pulses, or radio waves."]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Analog"})," - continuous wave form where values change smoothly.",t.jsx("span",{className:"small",children:"Example: old radio voice transmission"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Digital"})," - discrete values, usually 0 and 1 represented as pulses.",t.jsx("span",{className:"small",children:"Example: Ethernet uses pulses, fiber uses light on and off"})]})]}),t.jsx("p",{className:"note",children:"In modern networks we mostly send digital data, but the physical carrier can look like an analog wave."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(np,{})}),t.jsx("h3",{className:"h3",children:"Media - UTP, STP, fiber, wireless"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Media"})," means the path that carries signals. It decides speed, distance, noise resistance, and cost."]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"UTP"})," - Unshielded Twisted Pair",t.jsx("span",{className:"small",children:"Most common Ethernet cable. Twisting reduces noise."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"STP"})," - Shielded Twisted Pair",t.jsx("span",{className:"small",children:"Like UTP but with shielding to reduce interference. Used in noisy areas."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Fiber"})," - Optical Fiber",t.jsx("span",{className:"small",children:"Uses light pulses. Very fast and long distance. Low interference."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Wireless"}),t.jsx("span",{className:"small",children:"Uses radio waves like Wi-Fi. Convenient but interference and walls affect it."})]})]}),t.jsx("p",{className:"note",children:"Simple idea: UTP is cheap and common, fiber is fastest and farthest, wireless is flexible but variable."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx($o,{})}),t.jsx("h3",{className:"h3",children:"MAC address - role and format"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"MAC"})," means ",t.jsx("b",{children:"Media Access Control"}),". A"," ",t.jsx("b",{children:"MAC address"})," is the hardware address used for local delivery on the same network segment. Switches use MAC addresses to forward frames."]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Role"}),t.jsx("div",{className:"v",children:"Identify a network interface on a local link (Layer 2)."})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Format"}),t.jsxs("div",{className:"v",children:["48-bit address written as 6 bytes in hex.",t.jsx("span",{className:"small",children:'Example: "AA:BB:CC:11:22:33"'})]})]})]}),t.jsx("p",{className:"note",children:"IP is for routing across networks. MAC is for delivery inside a local network."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(es,{})}),t.jsx("h3",{className:"h3",children:"Framing, MTU, MSS"})]}),t.jsxs("p",{className:"p",children:["At Data Link layer, data is packed into a"," ",t.jsx("b",{children:"frame"}),". A frame is like an envelope that includes source MAC, destination MAC, and error check information."]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Frame"}),t.jsx("div",{className:"v",children:"Data Link unit that wraps a network layer packet with MAC info."})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"MTU"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"MTU"})," is"," ",t.jsx("b",{children:"Maximum Transmission Unit"}),". Largest frame payload allowed on a link.",t.jsx("span",{className:"small",children:"Example: Ethernet MTU is often 1500 bytes (payload)"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"MSS"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"MSS"})," is"," ",t.jsx("b",{children:"Maximum Segment Size"}),". TCP data size that fits inside IP without fragmentation.",t.jsx("span",{className:"small",children:"Rough idea: MSS is MTU minus headers"})]})]})]}),t.jsx("p",{className:"note",children:"MTU is about link size. MSS is about TCP payload size. Both can cause weird web issues when mismatched."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Zn,{})}),t.jsx("h3",{className:"h3",children:"Error detection - CRC"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"CRC"})," means ",t.jsx("b",{children:"Cyclic Redundancy Check"}),". It is an error detection method used to detect if bits got corrupted during transmission."]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Sender calculates a CRC value and adds it to the frame."}),t.jsx("li",{children:"Receiver recalculates CRC and compares."}),t.jsx("li",{children:"If mismatch, the frame is considered corrupted and discarded."})]}),t.jsx("p",{className:"note",children:"CRC detects errors, it does not fix them. Fixing happens by retransmission in higher layers like TCP."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(tp,{})}),t.jsx("h3",{className:"h3",children:"ARP basics"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"ARP"})," means"," ",t.jsx("b",{children:"Address Resolution Protocol"}),". It finds the MAC address for a given IP address inside a local network."]}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"I know IP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Need MAC"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"ARP request"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"ARP reply"})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:'Device sends an ARP broadcast: "Who has this IP"'}),t.jsx("li",{children:"The owner replies with its MAC address"}),t.jsx("li",{children:"Result is stored in ARP cache for some time"})]}),t.jsx("p",{className:"note",children:"ARP is for IPv4. IPv6 uses a different approach called Neighbor Discovery."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx($o,{})}),t.jsx("h3",{className:"h3",children:"Switch basics - CAM table and flooding"})]}),t.jsxs("p",{className:"p",children:["A ",t.jsx("b",{children:"switch"})," is a Layer 2 device that forwards frames using MAC addresses. It learns which MAC address is on which port and builds a table."]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"CAM table"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"CAM"})," is"," ",t.jsx("b",{children:"Content Addressable Memory"}),'. Switch stores "MAC to port" mappings here.',t.jsx("span",{className:"small",children:'Example: "AA:BB:CC:11:22:33" is on port 5'})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Learning"}),t.jsx("div",{className:"v",children:"Switch learns source MAC of incoming frames and records the port."})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Flooding"}),t.jsx("div",{className:"v",children:"If destination MAC is unknown, switch sends the frame to all ports except the source port. Once destination replies, switch learns it and flooding reduces."})]})]}),t.jsx("p",{className:"note",children:"Flooding is normal at first. Too much flooding can indicate loops or misconfiguration."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(es,{})}),t.jsx("h3",{className:"h3",children:"VLAN basics - tagging concept"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"VLAN"})," means"," ",t.jsx("b",{children:"Virtual Local Area Network"}),". It splits one physical switch into multiple logical networks. Devices in different VLANs are separated like they are on different switches."]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Access port"})," - carries traffic for one VLAN (end devices connect here)"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Trunk port"})," - carries traffic for multiple VLANs between switches"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Tagging"})," - frames carry a VLAN ID so switches know which VLAN it belongs to"]})]}),t.jsx("p",{className:"note",children:"VLAN helps isolation and security. Communication between VLANs needs routing (Layer 3)."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Zn,{})}),t.jsx("h3",{className:"h3",children:"STP basics - loops are dangerous"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"STP"})," means ",t.jsx("b",{children:"Spanning Tree Protocol"}),". It prevents Layer 2 loops when switches are connected in a way that creates multiple paths."]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Loop can cause broadcast storms because frames keep circulating."}),t.jsx("li",{children:"Switch CAM table can keep changing, causing unstable forwarding."}),t.jsx("li",{children:"STP blocks some ports so there is only one active path between switches."})]}),t.jsx("p",{className:"note",children:"We keep redundant links for safety, but STP ensures only one path is active to avoid loops."})]})]}),t.jsxs("div",{className:"bottomNote",children:[t.jsx("div",{className:"bnIcon",children:t.jsx(qo,{})}),t.jsxs("div",{className:"bnText",children:[t.jsx("div",{className:"bnTitle",children:"Quick memory"}),t.jsx("div",{className:"bnSub",children:"Physical is signals and media. Data Link is frames, MAC, switching, VLAN, and loop protection."})]})]})]})})]})},cf={Wrapper:Ie.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            padding-top: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .example {
            margin: 10px 0 6px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 88%,
                transparent
            );
        }

        .line {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin-bottom: 6px;
        }

        .line:last-child {
            margin-bottom: 0;
        }

        .muted {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            color: var(--color-text-primary);
            padding: 2px 6px;
            border-radius: 10px;
            border: 1px solid var(--color-code-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 92%,
                transparent
            );
            white-space: nowrap;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .ranges {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .range {
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .rTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 13.5px;
            margin-bottom: 4px;
        }

        .rSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .dora {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .step {
            display: grid;
            grid-template-columns: 44px 1fr;
            gap: 10px;
            align-items: center;

            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sTag {
            width: 44px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .sText b {
            color: var(--color-text-primary);
        }

        .ipv6Grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .box {
            grid-column: span 6;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .bTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            margin-bottom: 6px;
            font-size: 13.5px;
        }

        .bText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .box {
                grid-column: span 12;
            }
        }
    `},df=()=>{const[i,d]=ie.useState(!0),l=ie.useMemo(()=>({id:"ipAddressing",title:"IP Addressing (IPv4 and IPv6)",sub:"IP is how devices are identified across networks. Learn CIDR, subnet basics, private ranges, NAT, DHCP, and IPv6."}),[]);return t.jsxs(cf.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>d(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(pt,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Core"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(lr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(sp,{})}),t.jsx("h3",{className:"h3",children:"IPv4 format and CIDR"})]}),t.jsx("p",{className:"p",children:"IPv4 is a 32-bit address written as four numbers separated by dots. Each part is 0 to 255."}),t.jsxs("div",{className:"example",children:[t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"mono",children:"192.168.1.25"}),t.jsx("span",{className:"muted",children:"example IPv4 address"})]}),t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"mono",children:"192.168.1.0/24"}),t.jsx("span",{className:"muted",children:"CIDR - first 24 bits are network"})]})]}),t.jsx("p",{className:"p",children:"CIDR tells how many bits belong to the network part. The remaining bits are for hosts inside that network."}),t.jsx("p",{className:"note",children:"Quick memory: /24 often means 255.255.255.0"})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(zx,{})}),t.jsx("h3",{className:"h3",children:"Subnetting essentials"})]}),t.jsx("p",{className:"p",children:"Subnetting splits a bigger network into smaller networks. It helps manage IPs, routing, and isolation."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Network ID"}),t.jsx("span",{className:"small",children:"identifies the network. It is the first address of the subnet."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Broadcast"}),t.jsx("span",{className:"small",children:"last address of the subnet. Used to reach all hosts on that subnet."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Usable range"}),t.jsx("span",{className:"small",children:"IPs between network id and broadcast. Used by devices."})]})]}),t.jsxs("div",{className:"example",children:[t.jsx("div",{className:"line",children:t.jsx("span",{className:"mono",children:"192.168.1.0/24"})}),t.jsx("div",{className:"line",children:t.jsx("span",{className:"muted",children:"Network id: 192.168.1.0"})}),t.jsx("div",{className:"line",children:t.jsx("span",{className:"muted",children:"Broadcast: 192.168.1.255"})}),t.jsx("div",{className:"line",children:t.jsx("span",{className:"muted",children:"Usable: 192.168.1.1 to 192.168.1.254"})})]}),t.jsx("p",{className:"note",children:"Many networks block broadcast usage directly by clients, but the concept is important."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(rs,{})}),t.jsx("h3",{className:"h3",children:"Subnet mask meaning"})]}),t.jsx("p",{className:"p",children:"A subnet mask tells which part is network and which part is host. In a mask, network bits are 1 and host bits are 0."}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"CIDR"}),t.jsx("div",{className:"v",children:t.jsx("span",{className:"mono",children:"/24"})})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Mask"}),t.jsx("div",{className:"v",children:t.jsx("span",{className:"mono",children:"255.255.255.0"})})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Meaning"}),t.jsx("div",{className:"v",children:"first 24 bits are network, last 8 bits are hosts"})]})]}),t.jsx("p",{className:"note",children:'In troubleshooting, wrong subnet mask is a very common reason for "no internet".'})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Mx,{})}),t.jsx("h3",{className:"h3",children:"Private IPv4 ranges"})]}),t.jsx("p",{className:"p",children:"Private IPs are used inside homes and companies. They are not routed on the public internet."}),t.jsxs("div",{className:"ranges",children:[t.jsxs("div",{className:"range",children:[t.jsx("div",{className:"rTitle",children:"10.0.0.0/8"}),t.jsx("div",{className:"rSub",children:"10.x.x.x - very large private space"})]}),t.jsxs("div",{className:"range",children:[t.jsx("div",{className:"rTitle",children:"172.16.0.0/12"}),t.jsx("div",{className:"rSub",children:"172.16.x.x to 172.31.x.x"})]}),t.jsxs("div",{className:"range",children:[t.jsx("div",{className:"rTitle",children:"192.168.0.0/16"}),t.jsx("div",{className:"rSub",children:"192.168.x.x - common home routers"})]})]}),t.jsx("p",{className:"note",children:"Your router usually gives private IPs to devices using DHCP."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(op,{})}),t.jsx("h3",{className:"h3",children:"NAT (SNAT and DNAT idea)"})]}),t.jsx("p",{className:"p",children:"NAT is Network Address Translation. It lets private IP devices access the internet using a public IP on the router."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"SNAT"}),t.jsx("span",{className:"small",children:"Source NAT - outgoing traffic source IP changes from private to public."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"DNAT"}),t.jsx("span",{className:"small",children:"Destination NAT - incoming traffic destination changes to an internal device."})]})]}),t.jsxs("div",{className:"example",children:[t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"mono",children:"192.168.1.10"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"muted",children:"laptop inside home"})]}),t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"mono",children:"Public IP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"muted",children:"router uses this on the internet"})]})]}),t.jsx("p",{className:"note",children:"Port forwarding is DNAT in a common home setup."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(rs,{})}),t.jsx("h3",{className:"h3",children:"DHCP (DORA flow)"})]}),t.jsx("p",{className:"p",children:"DHCP automatically gives your device an IP address, subnet mask, gateway, and DNS settings."}),t.jsxs("div",{className:"dora",children:[t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"sTag",children:"D"}),t.jsxs("div",{className:"sText",children:[t.jsx("b",{children:"Discover"}),t.jsx("span",{className:"small",children:'device asks "is there a DHCP server"'})]})]}),t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"sTag",children:"O"}),t.jsxs("div",{className:"sText",children:[t.jsx("b",{children:"Offer"}),t.jsx("span",{className:"small",children:"server offers an IP and config"})]})]}),t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"sTag",children:"R"}),t.jsxs("div",{className:"sText",children:[t.jsx("b",{children:"Request"}),t.jsx("span",{className:"small",children:"device requests that offered IP"})]})]}),t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"sTag",children:"A"}),t.jsxs("div",{className:"sText",children:[t.jsx("b",{children:"Ack"}),t.jsx("span",{className:"small",children:"server confirms and lease starts"})]})]})]}),t.jsx("p",{className:"note",children:'If DHCP fails, you often see "no IP" or "self-assigned IP" issues.'})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(pt,{})}),t.jsx("h3",{className:"h3",children:"IPv6 basics"})]}),t.jsx("p",{className:"p",children:"IPv6 is a 128-bit address written in hex groups separated by colons. It exists because IPv4 addresses are limited and the internet needs more unique addresses."}),t.jsxs("div",{className:"ipv6Grid",children:[t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"bTitle",children:"Format"}),t.jsx("div",{className:"bText",children:t.jsx("span",{className:"mono",children:"2001:0db8:85a3:0000:0000:8a2e:0370:7334"})})]}),t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"bTitle",children:"Shorthand rules"}),t.jsxs("div",{className:"bText",children:["- Leading zeros can be removed in a group",t.jsx("br",{}),'- One longest run of consecutive zeros can be replaced with "::"']})]}),t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"bTitle",children:"Common types"}),t.jsxs("div",{className:"bText",children:[t.jsx("b",{children:"Global"})," - public internet reachable",t.jsx("br",{}),t.jsx("b",{children:"Link-local"})," - starts with"," ",t.jsx("span",{className:"mono",children:"fe80::"}),", used inside local link",t.jsx("br",{}),t.jsx("b",{children:"Multicast"})," - starts with"," ",t.jsx("span",{className:"mono",children:"ff00::"})]})]}),t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"bTitle",children:"Why IPv6 exists"}),t.jsx("div",{className:"bText",children:"More address space, better end-to-end connectivity, simpler address assignment ideas, less NAT dependency."})]})]}),t.jsx("p",{className:"note",children:"You will often see both IPv4 and IPv6 on modern systems. That is dual stack."})]})]})})]})},uf={Wrapper:Ie.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            padding-top: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .rt,
        .proto {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .rtRow,
        .protoRow {
            display: grid;
            grid-template-columns: 1.1fr 1fr 0.8fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .protoRow {
            grid-template-columns: 0.7fr 1fr 1.6fr;
        }

        .rtRow:first-child,
        .protoRow:first-child {
            border-top: 0;
        }

        .rtRow.head,
        .protoRow.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .rtRow.head div,
        .protoRow.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .rtRow div,
        .protoRow div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.45;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .rtRow,
            .protoRow {
                grid-template-columns: 1fr;
            }
        }
    `},pf=()=>{const[i,d]=ie.useState(!0),l=ie.useMemo(()=>({id:"routingBasics",title:"Routing Basics",sub:"Routers move packets between networks. Learn gateway, routing table, ICMP, and TTL hops."}),[]);return t.jsxs(uf.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>d(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(rs,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Core"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(lr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(np,{})}),t.jsx("h3",{className:"h3",children:"Router vs switch vs gateway"})]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Switch"}),t.jsxs("div",{className:"v",children:["Works inside a LAN. Forwards by MAC address.",t.jsx("span",{className:"small",children:"Example: office switch connects many PCs"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Router"}),t.jsxs("div",{className:"v",children:["Connects different networks. Forwards by IP and routing table.",t.jsx("span",{className:"small",children:"Example: home router connects LAN to Internet"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Gateway"}),t.jsxs("div",{className:"v",children:["The exit point from your network to another network. In homes, the router is usually the gateway.",t.jsx("span",{className:"small",children:"Example: default gateway is 192.168.1.1"})]})]})]}),t.jsx("p",{className:"note",children:"Quick memory: switch is inside, router connects outside, gateway is the exit address your device uses."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Vo,{})}),t.jsx("h3",{className:"h3",children:"Routing table idea"})]}),t.jsx("p",{className:"p",children:"A routing table is like a map that tells the router where to send a packet next. The router looks at the destination IP, finds the best matching route, then forwards the packet to the next hop."}),t.jsxs("div",{className:"rt",children:[t.jsxs("div",{className:"rtRow head",children:[t.jsx("div",{className:"c1",children:"Destination"}),t.jsx("div",{className:"c2",children:"Next hop"}),t.jsx("div",{className:"c3",children:"Interface"})]}),t.jsxs("div",{className:"rtRow",children:[t.jsx("div",{className:"c1",children:"192.168.1.0/24"}),t.jsx("div",{className:"c2",children:"Direct"}),t.jsx("div",{className:"c3",children:"LAN"})]}),t.jsxs("div",{className:"rtRow",children:[t.jsx("div",{className:"c1",children:"10.0.0.0/8"}),t.jsx("div",{className:"c2",children:"10.1.1.1"}),t.jsx("div",{className:"c3",children:"WAN"})]}),t.jsxs("div",{className:"rtRow",children:[t.jsx("div",{className:"c1",children:"0.0.0.0/0"}),t.jsx("div",{className:"c2",children:"ISP gateway"}),t.jsx("div",{className:"c3",children:"WAN"})]})]}),t.jsx("p",{className:"note",children:'The default route 0.0.0.0/0 means "everything else goes this way".'})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Cx,{})}),t.jsx("h3",{className:"h3",children:"Default gateway"})]}),t.jsx("p",{className:"p",children:"Default gateway is the IP address your device uses when the destination is outside your local network. If you are sending to a different subnet or the internet, your computer sends the packet to the gateway first."}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"Laptop"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Default gateway"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"ISP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Server"})]}),t.jsx("p",{className:"note",children:"If your internet is not working, check if you can ping the default gateway first."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(rs,{})}),t.jsx("h3",{className:"h3",children:"Static vs dynamic routing"})]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Static routing"}),t.jsx("span",{className:"small",children:"Routes are manually configured. Simple, predictable, but not flexible."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Dynamic routing"}),t.jsx("span",{className:"small",children:"Routers learn routes automatically using routing protocols. Handles changes better."})]})]}),t.jsx("p",{className:"note",children:"Static is common in small networks. Dynamic is used when you have many routers or changing paths."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Vo,{})}),t.jsx("h3",{className:"h3",children:"Routing protocols (high level use)"})]}),t.jsxs("div",{className:"proto",children:[t.jsxs("div",{className:"protoRow head",children:[t.jsx("div",{className:"c1",children:"Protocol"}),t.jsx("div",{className:"c2",children:"Used for"}),t.jsx("div",{className:"c3",children:"Simple idea"})]}),t.jsxs("div",{className:"protoRow",children:[t.jsx("div",{className:"c1",children:"RIP"}),t.jsx("div",{className:"c2",children:"Small networks"}),t.jsx("div",{className:"c3",children:"Uses hop count as metric. Easy but limited."})]}),t.jsxs("div",{className:"protoRow",children:[t.jsx("div",{className:"c1",children:"OSPF"}),t.jsx("div",{className:"c2",children:"Enterprise internal routing"}),t.jsx("div",{className:"c3",children:"Chooses best path using cost. Fast convergence."})]}),t.jsxs("div",{className:"protoRow",children:[t.jsx("div",{className:"c1",children:"BGP"}),t.jsx("div",{className:"c2",children:"Internet wide routing"}),t.jsx("div",{className:"c3",children:"Connects ISPs and big networks. Policy based routing."})]})]}),t.jsx("p",{className:"note",children:"Easy memory: RIP small, OSPF enterprise, BGP internet."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(el,{})}),t.jsx("h3",{className:"h3",children:"ICMP basics (ping and traceroute)"})]}),t.jsx("p",{className:"p",children:"ICMP is used for network diagnostics and error reporting. It is not TCP or UDP. Ping uses ICMP Echo Request and Echo Reply to test reachability."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"ping"}),t.jsx("span",{className:"small",children:"Checks if a host is reachable and shows latency."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"traceroute"}),t.jsx("span",{className:"small",children:"Shows the path packets take across hops using TTL behavior."})]})]}),t.jsx("p",{className:"note",children:"If ping to gateway fails, it is likely local network issue, not DNS."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(rp,{})}),t.jsx("h3",{className:"h3",children:"TTL and hop concept"})]}),t.jsx("p",{className:"p",children:"TTL means Time To Live. It is a number inside the IP header. Every router that forwards a packet decreases TTL by 1. If TTL reaches 0, the packet is dropped."}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"Start TTL 64"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Hop 1 TTL 63"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Hop 2 TTL 62"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"and so on"})]}),t.jsx("p",{className:"note",children:"TTL prevents infinite loops. Traceroute uses this behavior to reveal hop-by-hop path."})]})]})})]})},hf={Wrapper:Ie.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            padding-top: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
        }

        .h4 {
            font-size: 13px;
            letter-spacing: 0.2px;
            margin-bottom: 6px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 9px;
            opacity: 0.9;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .compare {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .row {
            display: grid;
            grid-template-columns: 0.9fr 1.05fr 1.05fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .row.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .row.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .row div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.45;
        }

        .section {
            padding-top: 10px;
            border-top: 1px dashed
                color-mix(in srgb, var(--color-border) 70%, transparent);
            margin-top: 10px;
        }

        .exampleBox {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-code-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 88%,
                transparent
            );
            padding: 10px;
        }

        .exRow {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 6px 0;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            color: var(--color-text-primary);
            background: color-mix(
                in srgb,
                var(--color-surface) 20%,
                transparent
            );
            border: 1px solid var(--color-border);
            padding: 3px 8px;
            border-radius: 10px;
            white-space: nowrap;
        }

        .txt {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.5;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }

        .chip {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12.5px;
            line-height: 1;
        }

        .chip:hover {
            border-color: var(--color-border-light);
            color: var(--color-text-primary);
        }

        .ports {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            margin-top: 10px;
        }

        .pRow {
            display: grid;
            grid-template-columns: 0.8fr 1fr 1.4fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .pRow:first-child {
            border-top: 0;
        }

        .pRow.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .pRow.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .pRow div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.45;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 1fr;
            }

            .pRow {
                grid-template-columns: 1fr;
            }
        }
    `},mf=()=>{const[i,d]=ie.useState(!0),l=ie.useMemo(()=>({id:"transportLayerTcpUdp",title:"Transport Layer - TCP vs UDP",sub:"Ports, sockets, delivery guarantees, and the practical difference between TCP and UDP."}),[]);return t.jsxs(hf.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>d(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(Qo,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Core"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(lr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(rs,{})}),t.jsx("h3",{className:"h3",children:"What is the Transport Layer"})]}),t.jsx("p",{className:"p",children:"The Transport Layer (Layer 4 in OSI) delivers data from one application to another application. It sits above IP (Internet Protocol) and adds the idea of ports, reliability, ordering, and flow control."}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"App data"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"TCP or UDP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"IP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Network"})]}),t.jsx("p",{className:"note",children:"IP (Internet Protocol) moves packets host to host. TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) move data app to app using ports."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(bu,{})}),t.jsx("h3",{className:"h3",children:"Port numbers and sockets"})]}),t.jsx("p",{className:"p",children:"A port is a logical number that identifies which application or service should receive the data on a machine. One IP address can run many services, ports separate them."}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Port"}),t.jsxs("div",{className:"v",children:["A number in range 0 to 65535.",t.jsx("span",{className:"small",children:"Example: HTTPS uses port 443"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Socket"}),t.jsxs("div",{className:"v",children:["An endpoint of communication. Usually written as IP:Port.",t.jsx("span",{className:"small",children:"Example: 192.168.1.10:5173"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Connection"}),t.jsxs("div",{className:"v",children:["For TCP, a connection is identified by a 4-tuple.",t.jsx("span",{className:"small",children:"Source IP, Source Port, Destination IP, Destination Port"})]})]})]}),t.jsx("p",{className:"note",children:"One server can handle thousands of clients because each client connection has a different 4-tuple."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(rl,{})}),t.jsx("h3",{className:"h3",children:"TCP vs UDP (quick compare)"})]}),t.jsxs("div",{className:"compare",children:[t.jsxs("div",{className:"row head",children:[t.jsx("div",{className:"c1",children:"Point"}),t.jsx("div",{className:"c2",children:"TCP"}),t.jsx("div",{className:"c3",children:"UDP"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"c1",children:"Full form"}),t.jsx("div",{className:"c2",children:"Transmission Control Protocol"}),t.jsx("div",{className:"c3",children:"User Datagram Protocol"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"c1",children:"Connection"}),t.jsx("div",{className:"c2",children:"Connection-oriented"}),t.jsx("div",{className:"c3",children:"Connectionless"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"c1",children:"Ordering"}),t.jsx("div",{className:"c2",children:"Keeps order (sequence numbers)"}),t.jsx("div",{className:"c3",children:"No ordering guarantee"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"c1",children:"Reliability"}),t.jsx("div",{className:"c2",children:"Reliable (ACK + retransmit)"}),t.jsx("div",{className:"c3",children:"Best effort"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"c1",children:"Speed"}),t.jsx("div",{className:"c2",children:"More overhead"}),t.jsx("div",{className:"c3",children:"Less overhead"})]})]}),t.jsx("p",{className:"note",children:"Rule: use TCP when correctness matters, use UDP when speed and low delay matter."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(el,{})}),t.jsx("h3",{className:"h3",children:"TCP features (explained)"})]}),t.jsxs("div",{className:"section",children:[t.jsx("h4",{className:"h4",children:"1) 3-way handshake"}),t.jsx("p",{className:"p",children:"TCP starts with a handshake to create a connection and agree on initial sequence numbers."}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"SYN"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"SYN-ACK"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"ACK"})]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"SYN"}),' - Synchronize. Client says "I want to start a connection".']}),t.jsxs("li",{children:[t.jsx("b",{children:"ACK"}),' - Acknowledgment. Receiver says "I received your message".']}),t.jsxs("li",{children:[t.jsx("b",{children:"SYN-ACK"}),' - Server replies "I agree, and I also acknowledge your SYN".']})]}),t.jsx("p",{className:"note",children:"This handshake helps TCP start reliably and prevents confusion between old and new packets."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h4",{className:"h4",children:"2) Sequence number and ACK"}),t.jsxs("p",{className:"p",children:["TCP breaks data into segments. Each segment has a ",t.jsx("b",{children:"sequence number"})," that helps the receiver put data back in correct order. Receiver sends"," ",t.jsx("b",{children:"ACK"})," with the next expected sequence number."]}),t.jsxs("div",{className:"exampleBox",children:[t.jsxs("div",{className:"exRow",children:[t.jsx("span",{className:"mono",children:"Seq=1000"}),t.jsx("span",{className:"txt",children:"Segment sent"})]}),t.jsxs("div",{className:"exRow",children:[t.jsx("span",{className:"mono",children:"ACK=1200"}),t.jsx("span",{className:"txt",children:"Receiver expects next byte from 1200"})]})]}),t.jsx("p",{className:"note",children:"If a segment is missing, ACK does not move forward and sender can retransmit."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h4",{className:"h4",children:"3) Flow control (window)"}),t.jsxs("p",{className:"p",children:["Flow control prevents a fast sender from overwhelming a slow receiver. Receiver tells the sender how much buffer space it has using a"," ",t.jsx("b",{children:"window"}),"."]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Window"})," - how much data can be in flight without waiting for ACK."]}),t.jsx("li",{children:"If receiver is busy, it advertises a smaller window."}),t.jsx("li",{children:"This protects the receiver from memory overload."})]}),t.jsx("p",{className:"note",children:"Think: window is receiver-side capacity control."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h4",{className:"h4",children:"4) Congestion control (high level)"}),t.jsx("p",{className:"p",children:"Congestion control protects the network, not just the receiver. Congestion means routers and links are overloaded, causing packet loss and delays."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"TCP adjusts its sending rate depending on loss and delay signals."}),t.jsx("li",{children:"It increases speed when network is fine, and decreases when congestion is detected."}),t.jsxs("li",{children:[t.jsx("b",{children:"cwnd"})," - congestion window, a limit decided by TCP based on network conditions."]})]}),t.jsx("p",{className:"note",children:"Think: window is receiver capacity, cwnd is network capacity."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h4",{className:"h4",children:"5) Retransmission"}),t.jsx("p",{className:"p",children:"Retransmission means sending data again when it is lost. TCP detects loss using timeouts or repeated ACK patterns."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"If ACK does not arrive in time, sender retransmits (timeout)."}),t.jsx("li",{children:"If receiver keeps ACKing the same number, sender suspects a missing segment (duplicate ACK)."}),t.jsx("li",{children:"This is why TCP is reliable."})]}),t.jsx("p",{className:"note",children:"Reliability comes from tracking sequence numbers and resending missing parts."})]})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Qo,{})}),t.jsx("h3",{className:"h3",children:"UDP features and use cases"})]}),t.jsx("p",{className:"p",children:"UDP is simple and fast. It sends datagrams without creating a connection. There is no handshake, no ordering guarantee, and no built-in retransmission."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Low overhead - minimal header, fast processing"}),t.jsx("li",{children:"Best for real-time where late data is useless"}),t.jsx("li",{children:"Apps can implement reliability if needed"})]}),t.jsxs("div",{className:"chips",children:[t.jsx("span",{className:"chip",children:"video streaming"}),t.jsx("span",{className:"chip",children:"voice calls"}),t.jsx("span",{className:"chip",children:"online games"}),t.jsx("span",{className:"chip",children:"DNS queries"}),t.jsx("span",{className:"chip",children:"DHCP"})]}),t.jsx("p",{className:"note",children:"Example: In a call, it is better to drop an old packet than to wait and create delay."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(bu,{})}),t.jsx("h3",{className:"h3",children:"Common port numbers (must know)"})]}),t.jsx("p",{className:"p",children:"Many services have standard ports. You should remember the common ones for interviews and debugging."}),t.jsxs("div",{className:"ports",children:[t.jsxs("div",{className:"pRow head",children:[t.jsx("div",{className:"a",children:"Port"}),t.jsx("div",{className:"b",children:"Protocol"}),t.jsx("div",{className:"c",children:"Use"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"20, 21"}),t.jsx("div",{className:"b",children:"FTP"}),t.jsx("div",{className:"c",children:"File Transfer Protocol"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"22"}),t.jsx("div",{className:"b",children:"SSH"}),t.jsx("div",{className:"c",children:"Secure Shell (remote login)"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"23"}),t.jsx("div",{className:"b",children:"Telnet"}),t.jsx("div",{className:"c",children:"Unencrypted remote login"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"25"}),t.jsx("div",{className:"b",children:"SMTP"}),t.jsx("div",{className:"c",children:"Simple Mail Transfer Protocol"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"53"}),t.jsx("div",{className:"b",children:"DNS"}),t.jsx("div",{className:"c",children:"Domain Name System"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"67, 68"}),t.jsx("div",{className:"b",children:"DHCP"}),t.jsx("div",{className:"c",children:"Dynamic Host Configuration Protocol"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"80"}),t.jsx("div",{className:"b",children:"HTTP"}),t.jsx("div",{className:"c",children:"Hypertext Transfer Protocol"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"110"}),t.jsx("div",{className:"b",children:"POP3"}),t.jsx("div",{className:"c",children:"Post Office Protocol v3"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"143"}),t.jsx("div",{className:"b",children:"IMAP"}),t.jsx("div",{className:"c",children:"Internet Message Access Protocol"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"443"}),t.jsx("div",{className:"b",children:"HTTPS"}),t.jsx("div",{className:"c",children:"HTTP Secure (HTTP over TLS)"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"3306"}),t.jsx("div",{className:"b",children:"MySQL"}),t.jsx("div",{className:"c",children:"Database"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"5432"}),t.jsx("div",{className:"b",children:"PostgreSQL"}),t.jsx("div",{className:"c",children:"Database"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"6379"}),t.jsx("div",{className:"b",children:"Redis"}),t.jsx("div",{className:"c",children:"In-memory data store"})]})]}),t.jsx("p",{className:"note",children:"TCP is common for HTTP and HTTPS. DNS mostly uses UDP, but it can use TCP for large responses."})]})]})})]})},xf={Wrapper:Ie.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 900;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .footerTip {
            grid-column: span 12;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 80%, transparent)
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .tipTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 6px;
            letter-spacing: 0.2px;
        }

        .tipText {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.6;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},ff=()=>{const[i,d]=ie.useState(!0),l=ie.useMemo(()=>({id:"applicationLayerProtocols",title:"Application Layer Protocols",sub:"Must-know protocols used by browsers, apps, and servers. Focus on what they do and where they fit."}),[]);return t.jsxs(xf.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>d(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(pt,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Must know"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(lr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"inner",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(ap,{})}),t.jsx("h3",{className:"h3",children:"HTTP vs HTTPS with TLS overview"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"HTTP"}),' means "Hypertext Transfer Protocol". It is the request-response protocol used by browsers and APIs. It sends data as plain text by default.']}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"HTTPS"}),' means "Hypertext Transfer Protocol Secure". It is HTTP running over ',t.jsx("b",{children:"TLS"}),', which means "Transport Layer Security". TLS encrypts data in transit and also helps verify the server identity using certificates.']}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"HTTP"}),t.jsx("div",{className:"v",children:"No encryption. Easier to sniff on public Wi-Fi. Mostly used only for test or internal."})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"HTTPS"}),t.jsx("div",{className:"v",children:"Encrypted with TLS. Protects login, cookies, and private data."})]})]}),t.jsx("p",{className:"note",children:"Quick TLS idea: browser and server do a handshake, agree on keys, then encrypt all traffic."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Pa,{})}),t.jsx("h3",{className:"h3",children:"DNS basics and records"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"DNS"}),' means "Domain Name System". It converts domain names like "example.com" into IP addresses so computers can connect.']}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"A"}),' record - "Address" record for IPv4',t.jsx("span",{className:"small",children:"Example: example.com - 93.184.216.34"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"AAAA"})," record - IPv6 address record",t.jsx("span",{className:"small",children:"Example: example.com - 2606:2800:220:1:248:1893:25c8:1946"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"CNAME"}),' record - "Canonical Name" alias',t.jsx("span",{className:"small",children:"Example: www.example.com points to example.com"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"MX"}),' record - "Mail Exchange" for email routing',t.jsx("span",{className:"small",children:"Example: mail for example.com is handled by mail.example.com"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"NS"}),' record - "Name Server" that hosts DNS records',t.jsx("span",{className:"small",children:"Example: ns1.provider.com and ns2.provider.com"})]})]}),t.jsx("p",{className:"note",children:"DNS caching is common. That is why changes can take time to fully show everywhere."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(ip,{})}),t.jsx("h3",{className:"h3",children:"Email basics: SMTP, IMAP, POP3"})]}),t.jsx("p",{className:"p",children:"Email has two main parts - sending and receiving. Sending is usually SMTP. Receiving is IMAP or POP3."}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"SMTP"}),t.jsx("div",{className:"v",children:'"Simple Mail Transfer Protocol" - used to send email from client to server and between mail servers.'})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"IMAP"}),t.jsx("div",{className:"v",children:'"Internet Message Access Protocol" - keeps mail on server and syncs across devices.'})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"POP3"}),t.jsx("div",{className:"v",children:'"Post Office Protocol version 3" - downloads mail to device, often less sync-friendly.'})]})]}),t.jsx("p",{className:"note",children:"Modern apps mostly use IMAP for receiving because it keeps mailbox consistent across phone and laptop."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Kx,{})}),t.jsx("h3",{className:"h3",children:"FTP vs SFTP vs SCP"})]}),t.jsx("p",{className:"p",children:"These are used to transfer files between machines. Main difference is security and how they operate."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"FTP"}),' - "File Transfer Protocol"',t.jsx("span",{className:"small",children:"Old and not secure by default. Username and password can be exposed."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"SFTP"}),' - "SSH File Transfer Protocol"',t.jsx("span",{className:"small",children:"Runs over SSH. Encrypted. Safe option for file transfer."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"SCP"}),' - "Secure Copy Protocol"',t.jsx("span",{className:"small",children:"Simple secure copy over SSH. Best for quick file copy, not a full file manager."})]})]}),t.jsx("p",{className:"note",children:"Memory: SFTP and SCP use SSH so they are encrypted."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(lp,{})}),t.jsx("h3",{className:"h3",children:"SSH basics"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"SSH"}),' means "Secure Shell". It provides a secure way to remotely login and run commands on a server. It also supports tunneling and secure file transfer.']}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"ssh user@server"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Encrypted remote terminal"})]}),t.jsx("p",{className:"note",children:"SSH commonly uses port 22. Authentication can be password or key-based."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Bx,{})}),t.jsx("h3",{className:"h3",children:"DHCP and NTP"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"DHCP"}),' means "Dynamic Host Configuration Protocol". It automatically assigns IP address, subnet mask, gateway, and DNS server details to devices.']}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"Discover"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Offer"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Request"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Acknowledge"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"NTP"}),' means "Network Time Protocol". It keeps system clocks correct by syncing time from time servers. Correct time matters for logs, security, and certificates.']}),t.jsx("p",{className:"note",children:"Broken time can break HTTPS because certificates depend on correct date and time."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(rl,{})}),t.jsx("h3",{className:"h3",children:"WebSockets concept"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"WebSocket"})," is a protocol that creates a long-lived connection between browser and server. It allows two-way communication, so server can push updates instantly."]}),t.jsx("p",{className:"p",children:"Use case: chat apps, live notifications, real-time dashboards, multiplayer games. It avoids repeated polling requests."}),t.jsx("p",{className:"note",children:"WebSocket usually starts as an HTTP request, then upgrades the connection."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(pt,{})}),t.jsx("h3",{className:"h3",children:"REST vs gRPC"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"REST"}),' means "Representational State Transfer". It is an API style that uses HTTP methods like GET, POST, PUT, DELETE, usually with JSON payloads.']}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"gRPC"}),' means "Google Remote Procedure Call". It is a high-performance RPC framework. It uses Protocol Buffers and often runs over HTTP/2.']}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"REST"}),t.jsx("div",{className:"v",children:"Human-readable, easy for web, common for public APIs."})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"gRPC"}),t.jsx("div",{className:"v",children:"Faster and strongly typed, common in microservices and internal systems."})]})]}),t.jsx("p",{className:"note",children:"Very high level rule: REST is simpler to start, gRPC is stronger for service-to-service."})]}),t.jsxs("div",{className:"footerTip",children:[t.jsx("div",{className:"tipTitle",children:"Quick debug mindset"}),t.jsx("div",{className:"tipText",children:"If a website fails: check DNS first, then ping, then ports, then TLS, then HTTP status codes."})]})]})})]})},vf={Wrapper:Ie.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            padding-top: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            color: var(--color-text-primary);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 86%,
                transparent
            );
            border: 1px solid var(--color-code-border);
            padding: 2px 6px;
            border-radius: 10px;
            white-space: nowrap;
        }

        .muted {
            color: var(--color-text-muted);
        }

        .urlBox {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            border-radius: 14px;
            padding: 10px;
        }

        .urlLine {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            align-items: center;
            padding: 8px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 80%,
                transparent
            );
            margin-bottom: 10px;
        }

        .parts {
            display: grid;
            gap: 10px;
        }

        .part {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 70%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .steps {
            display: grid;
            gap: 10px;
        }

        .step {
            display: grid;
            grid-template-columns: 40px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .num {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            font-weight: 900;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 76%,
                transparent
            );
            color: var(--color-text-primary);
        }

        .t {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 4px;
            font-size: 13px;
        }

        .d {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .ex {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .list {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .part,
            .kv {
                grid-template-columns: 1fr;
            }

            .step {
                grid-template-columns: 1fr;
            }
        }
    `},gf=()=>{const[i,d]=ie.useState(!0),l=ie.useMemo(()=>({id:"webNetworkingPracticalStuff",title:"Web Networking Practical Stuff",sub:"URL parts, request flow, and the infrastructure pieces that make the modern web work."}),[]);return t.jsxs(vf.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>d(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(pt,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Web"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(lr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(rl,{})}),t.jsx("h3",{className:"h3",children:"URL breakdown"})]}),t.jsx("p",{className:"p",children:'A URL means "Uniform Resource Locator". It tells the browser where a resource is and how to reach it.'}),t.jsxs("div",{className:"urlBox",children:[t.jsxs("div",{className:"urlLine",children:[t.jsx("span",{className:"mono",children:"https"}),t.jsx("span",{className:"muted",children:"://"}),t.jsx("span",{className:"mono",children:"api.example.com"}),t.jsx("span",{className:"mono",children:"/users"}),t.jsx("span",{className:"muted",children:"?"}),t.jsx("span",{className:"mono",children:"page=2"}),t.jsx("span",{className:"muted",children:"&"}),t.jsx("span",{className:"mono",children:"sort=latest"})]}),t.jsxs("div",{className:"parts",children:[t.jsxs("div",{className:"part",children:[t.jsx("div",{className:"k",children:"Scheme"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"https"})," tells the protocol.",t.jsx("span",{className:"small",children:'HTTP is "Hypertext Transfer Protocol". HTTPS is HTTP + TLS.'})]})]}),t.jsxs("div",{className:"part",children:[t.jsx("div",{className:"k",children:"Host"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"api.example.com"})," is the domain name that will be resolved to an IP address.",t.jsx("span",{className:"small",children:'IP is "Internet Protocol".'})]})]}),t.jsxs("div",{className:"part",children:[t.jsx("div",{className:"k",children:"Path"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"/users"})," is the resource path on the server.",t.jsx("span",{className:"small",children:"Often maps to a route in a web server or API."})]})]}),t.jsxs("div",{className:"part",children:[t.jsx("div",{className:"k",children:"Query"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"?page=2&sort=latest"})," is extra parameters.",t.jsx("span",{className:"small",children:"Used for filtering, pagination, sorting, search."})]})]})]})]}),t.jsx("p",{className:"note",children:'A URL can also include a port like ":5173" and a fragment like "#section".'})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(nl,{})}),t.jsx("h3",{className:"h3",children:"What happens when you type a URL"})]}),t.jsx("p",{className:"p",children:"The browser does a small chain of steps. If any step fails, the page does not load."}),t.jsxs("div",{className:"steps",children:[t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"num",children:"1"}),t.jsxs("div",{className:"body",children:[t.jsx("div",{className:"t",children:"DNS resolve"}),t.jsx("div",{className:"d",children:'DNS is "Domain Name System". It converts a domain name like "example.com" into an IP address like "93.184.216.34".'}),t.jsx("div",{className:"ex",children:"Example: Browser asks a DNS resolver, gets an A record for IPv4 or AAAA record for IPv6."})]})]}),t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"num",children:"2"}),t.jsxs("div",{className:"body",children:[t.jsx("div",{className:"t",children:"TCP connect"}),t.jsx("div",{className:"d",children:'TCP is "Transmission Control Protocol". It creates a reliable connection using a 3-way handshake.'}),t.jsx("div",{className:"ex",children:"Example: Client connects to server IP on port 443 for HTTPS."})]})]}),t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"num",children:"3"}),t.jsxs("div",{className:"body",children:[t.jsx("div",{className:"t",children:"TLS handshake"}),t.jsx("div",{className:"d",children:'TLS is "Transport Layer Security". It encrypts data so nobody can read it in the middle. TLS is what makes HTTPS secure.'}),t.jsx("div",{className:"ex",children:"Example: Browser verifies certificate and agrees on encryption keys."})]})]}),t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"num",children:"4"}),t.jsxs("div",{className:"body",children:[t.jsx("div",{className:"t",children:"HTTP request and response"}),t.jsx("div",{className:"d",children:'HTTP is "Hypertext Transfer Protocol". Browser sends a request like GET or POST. Server responds with status code and data.'}),t.jsx("div",{className:"ex",children:'Example: GET "/users?page=2" returns JSON or HTML.'})]})]}),t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"num",children:"5"}),t.jsxs("div",{className:"body",children:[t.jsx("div",{className:"t",children:"Render"}),t.jsx("div",{className:"d",children:"Browser parses HTML, loads CSS, runs JavaScript, then paints the page."}),t.jsx("div",{className:"ex",children:"Example: More requests happen for images, fonts, API calls, and scripts."})]})]})]}),t.jsx("p",{className:"note",children:"Debug order is usually DNS, reachability, port, TLS, then HTTP."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(tl,{})}),t.jsx("h3",{className:"h3",children:"Cookies, sessions, and CORS"})]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Cookie"}),t.jsxs("div",{className:"v",children:["Small data stored by the browser and sent with requests to the same site.",t.jsx("span",{className:"small",children:"Common use: session id, preferences, auth tokens."})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Session"}),t.jsxs("div",{className:"v",children:["A server-side memory of a logged-in user. Browser usually stores only a session id cookie.",t.jsx("span",{className:"small",children:'"Session id" points to user data on server.'})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"CORS"}),t.jsxs("div",{className:"v",children:['CORS is "Cross-Origin Resource Sharing". It is a browser security rule that controls whether a webpage can call an API from a different origin.',t.jsx("span",{className:"small",children:'Origin = scheme + host + port. Example: "https://a.com:443".'})]})]})]}),t.jsx("p",{className:"note",children:"CORS is enforced by browsers, not by servers. Server only sends headers that browser checks."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(op,{})}),t.jsx("h3",{className:"h3",children:"CDN basics"})]}),t.jsx("p",{className:"p",children:'CDN is "Content Delivery Network". It is a network of servers placed in many locations to serve content faster. Instead of every user hitting one server far away, users get content from a nearby edge server.'}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Faster load because distance and latency reduce"}),t.jsx("li",{children:"Caching of images, videos, JavaScript, CSS"}),t.jsx("li",{children:"Helps absorb traffic spikes"})]}),t.jsx("p",{className:"note",children:"Example: Cloudflare and other CDNs store a cached copy of static files near users."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Pa,{})}),t.jsx("h3",{className:"h3",children:"Proxy vs reverse proxy"})]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Proxy"}),t.jsxs("div",{className:"v",children:["A client-side middleman. Client sends requests to proxy, proxy sends to internet.",t.jsx("span",{className:"small",children:"Used for privacy, filtering, access control."})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Reverse proxy"}),t.jsxs("div",{className:"v",children:["A server-side middleman. Users hit reverse proxy, it forwards to your backend servers.",t.jsx("span",{className:"small",children:"Used for load balancing, SSL termination, caching, security."})]})]})]}),t.jsx("p",{className:"note",children:"Simple memory: proxy protects clients, reverse proxy protects servers."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Pa,{})}),t.jsx("h3",{className:"h3",children:"Load balancer basics"})]}),t.jsx("p",{className:"p",children:"A load balancer distributes traffic across multiple servers so one server does not get overloaded. This improves performance and availability."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Spreads requests across servers using strategies like round robin"}),t.jsx("li",{children:"Can do health checks and remove bad servers automatically"}),t.jsx("li",{children:"Helps scale horizontally by adding more servers"})]}),t.jsx("p",{className:"note",children:"In many setups, the reverse proxy and load balancer are the same component."})]})]})})]})},yf={Wrapper:Ie.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            padding-top: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .split {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }

        .box {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .boxTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .list {
            display: grid;
            gap: 8px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .callout {
            margin-top: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .callIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 82%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .callIcon svg {
            width: 18px;
            height: 18px;
        }

        .callText {
            min-width: 0;
        }

        .callTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            margin-bottom: 2px;
            letter-spacing: 0.2px;
        }

        .callBody {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .footerLine {
            padding-top: 12px;
        }

        .hint {
            border: 1px dashed var(--color-border-light);
            border-radius: 16px;
            padding: 10px 12px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.6;
            background: color-mix(
                in srgb,
                var(--color-surface) 72%,
                transparent
            );
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .split {
                grid-template-columns: 1fr;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},jf=()=>{const[i,d]=ie.useState(!0),l=ie.useMemo(()=>({id:"wirelessMobileBasics",title:"Wireless and Mobile Basics",sub:"Wi-Fi terms, frequency bands, access points, Bluetooth, and cellular basics."}),[]);return t.jsxs(yf.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>d(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(ln,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Wireless"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(lr,{})})]}),t.jsxs("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:[t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(ln,{})}),t.jsx("h3",{className:"h3",children:"Wi-Fi basics"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Wi-Fi"})," is wireless networking based on IEEE 802.11 standards. It lets devices connect to a local network using radio waves."]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"SSID"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Service Set Identifier"})," - the Wi-Fi network name you see.",t.jsx("span",{className:"small",children:'Example: "Ash-Home-5G"'})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"BSSID"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Basic Service Set Identifier"})," - the access point identifier, usually its MAC address.",t.jsx("span",{className:"small",children:"Useful when multiple access points share the same SSID."})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"WPA2"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Wi-Fi Protected Access 2"})," - common Wi-Fi security standard.",t.jsx("span",{className:"small",children:"Uses strong encryption (typically AES) for protection."})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"WPA3"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Wi-Fi Protected Access 3"})," - newer and stronger security than WPA2.",t.jsx("span",{className:"small",children:"Better protection against password guessing attacks."})]})]})]}),t.jsx("p",{className:"note",children:"Simple rule: use WPA3 if available, otherwise WPA2 is still standard for most networks."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(qo,{})}),t.jsx("h3",{className:"h3",children:"2.4 GHz vs 5 GHz"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"GHz"})," means gigahertz, a unit of frequency. Wi-Fi uses radio frequency bands, most commonly 2.4 GHz and 5 GHz."]}),t.jsxs("div",{className:"split",children:[t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"boxTitle",children:"2.4 GHz"}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:["Better ",t.jsx("b",{children:"range"})," - travels farther and through walls"]}),t.jsxs("li",{children:["Usually more ",t.jsx("b",{children:"interference"})," - many devices use it"]}),t.jsxs("li",{children:["Often lower ",t.jsx("b",{children:"speed"})," compared to 5 GHz"]})]})]}),t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"boxTitle",children:"5 GHz"}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:["Higher ",t.jsx("b",{children:"speed"})," - better for streaming and fast downloads"]}),t.jsxs("li",{children:["Lower ",t.jsx("b",{children:"range"})," - weaker through walls"]}),t.jsxs("li",{children:["Usually less ",t.jsx("b",{children:"interference"})," than 2.4 GHz"]})]})]})]}),t.jsx("p",{className:"note",children:"Quick pick: close to router use 5 GHz, far or many walls use 2.4 GHz."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(bx,{})}),t.jsx("h3",{className:"h3",children:"Access point vs router"})]}),t.jsx("p",{className:"p",children:'People often call everything "Wi-Fi", but devices have different roles. Understanding this makes troubleshooting easier.'}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"AP"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Access Point"})," - provides Wi-Fi to devices and connects them to the local network.",t.jsx("span",{className:"small",children:'Think: "Wi-Fi transmitter for your LAN"'})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Router"}),t.jsxs("div",{className:"v",children:["Sends traffic between networks. Connects your home network to the internet (WAN).",t.jsx("span",{className:"small",children:'Home "router" is usually router + switch + access point in one box.'})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Modem"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Modulator Demodulator"})," - converts ISP signal to usable internet connection.",t.jsx("span",{className:"small",children:"Fiber setups often use ONT, not classic modem."})]})]})]}),t.jsx("p",{className:"note",children:"If Wi-Fi works but internet does not, AP is fine but router or ISP link may be the issue."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Px,{})}),t.jsx("h3",{className:"h3",children:"Bluetooth"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Bluetooth"})," is a short-range wireless technology used mainly for personal devices. It is designed for low power and quick connections."]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Use cases: earphones, keyboard, mouse, smartwatch, car audio"}),t.jsx("li",{children:"Range: usually a few meters to tens of meters depending on device class"}),t.jsx("li",{children:"Bluetooth is not for normal internet browsing like Wi-Fi, it is more for device-to-device links"})]}),t.jsx("p",{className:"note",children:"Wi-Fi is for network and internet. Bluetooth is for nearby device connection."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx($x,{})}),t.jsx("h3",{className:"h3",children:"Cellular high level"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Cellular network"})," is mobile internet provided by telecom companies. The area is split into cells, each served by a base station (mobile tower). Your phone connects to the nearest cell and moves between cells as you travel."]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"SIM"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Subscriber Identity Module"})," - identifies you to the carrier network."]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"LTE"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Long Term Evolution"})," - commonly called 4G."]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"5G"}),t.jsx("div",{className:"v",children:"Fifth Generation mobile network - higher speed and lower latency in many cases."})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Base station"}),t.jsx("div",{className:"v",children:"Mobile tower equipment that connects phones to the carrier network."})]})]}),t.jsx("p",{className:"note",children:"In simple words: Wi-Fi connects you to a local router. Cellular connects you to a carrier tower."}),t.jsxs("div",{className:"callout",children:[t.jsx("span",{className:"callIcon",children:t.jsx(tl,{})}),t.jsxs("div",{className:"callText",children:[t.jsx("div",{className:"callTitle",children:"Security note"}),t.jsx("div",{className:"callBody",children:"Prefer HTTPS sites on both Wi-Fi and cellular. Public Wi-Fi can be risky if misconfigured."})]})]})]})]}),t.jsx("div",{className:"footerLine",children:t.jsx("div",{className:"hint",children:"Quick memory: 2.4 GHz is range, 5 GHz is speed. Router connects networks, AP gives Wi-Fi."})})]})]})},wf={Wrapper:Ie.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            padding-top: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 170px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .attacks {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 10px;
            margin-top: 10px;
        }

        .attack {
            grid-column: span 6;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            border-radius: 16px;
            padding: 12px;
        }

        .aTop {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 6px;
        }

        .aTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13.5px;
        }

        .aFull {
            color: var(--color-text-muted);
            font-size: 12.5px;
            text-align: right;
        }

        .aLine {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .attack {
                grid-column: span 12;
            }

            .aFull {
                text-align: left;
            }
        }
    `},Nf=()=>{const[i,d]=ie.useState(!0),l=ie.useMemo(()=>({id:"securityBasics",title:"Security Basics",sub:"Core security concepts used in networking, web apps, and real systems."}),[]);return t.jsxs(wf.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>d(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(tl,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Core"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(lr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Zn,{})}),t.jsx("h3",{className:"h3",children:"CIA triad"})]}),t.jsx("p",{className:"p",children:'CIA means Confidentiality, Integrity, and Availability. It is a simple way to remember what "security" is trying to protect.'}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Confidentiality"})," - only authorized people can read data",t.jsx("span",{className:"small",children:"Example: HTTPS encryption, access control"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Integrity"})," - data should not be changed silently",t.jsx("span",{className:"small",children:"Example: hashes, digital signatures, checksums"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Availability"})," - systems should stay usable",t.jsx("span",{className:"small",children:"Example: DDoS protection, redundancy, rate limiting"})]})]}),t.jsx("p",{className:"note",children:"Most real incidents hit one or more CIA points."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(ap,{})}),t.jsx("h3",{className:"h3",children:"TLS and SSL"})]}),t.jsx("p",{className:"p",children:'TLS means Transport Layer Security. SSL means Secure Sockets Layer. SSL is the older protocol family. Today, people say "SSL" in casual talk, but modern security uses TLS.'}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Goal"})," - secure data in transit between client and server",t.jsx("span",{className:"small",children:"Example: browser to website over HTTPS"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Provides"})," - encryption, integrity, and server identity",t.jsx("span",{className:"small",children:"Identity comes from certificates (CA signed)"})]})]}),t.jsx("p",{className:"note",children:"HTTPS is basically HTTP running inside a TLS tunnel."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Dx,{})}),t.jsx("h3",{className:"h3",children:"Symmetric vs asymmetric encryption"})]}),t.jsx("p",{className:"p",children:"Encryption means turning readable data into unreadable data using keys. The difference is how keys are used."}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Symmetric"}),t.jsxs("div",{className:"v",children:["Same key is used to encrypt and decrypt.",t.jsx("span",{className:"small",children:"Fast. Used for bulk data after a secure connection is established."})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Asymmetric"}),t.jsxs("div",{className:"v",children:["Two keys - public key and private key. Public encrypts or verifies, private decrypts or signs.",t.jsx("span",{className:"small",children:"Slower. Used for key exchange and identity."})]})]})]}),t.jsx("p",{className:"note",children:"In TLS, asymmetric crypto helps start trust, symmetric crypto handles the ongoing data."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(sp,{})}),t.jsx("h3",{className:"h3",children:"Hashing vs encryption"})]}),t.jsx("p",{className:"p",children:"Hashing and encryption are not the same. A hash is like a fingerprint of data. Encryption is reversible with the correct key."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Hashing"})," - one-way transformation",t.jsx("span",{className:"small",children:"Example: password hashing, file integrity check"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Encryption"})," - reversible with a key",t.jsx("span",{className:"small",children:"Example: HTTPS traffic encryption, encrypted storage"})]})]}),t.jsx("p",{className:"note",children:"Passwords should be hashed, not encrypted, because you should not be able to recover them."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Gx,{})}),t.jsx("h3",{className:"h3",children:"Authentication vs authorization"})]}),t.jsx("p",{className:"p",children:'Authentication answers "Who are you" and authorization answers "What can you do". Many systems fail because they do authentication but forget strict authorization.'}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Authentication"}),t.jsxs("div",{className:"v",children:["Proves identity using password, OTP, token, biometrics.",t.jsx("span",{className:"small",children:"Example: login with email and password"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Authorization"}),t.jsxs("div",{className:"v",children:["Checks permissions after identity is known.",t.jsx("span",{className:"small",children:"Example: only admin can delete users"})]})]})]}),t.jsx("p",{className:"note",children:'Easy memory: AuthN is "name", AuthZ is "zone" access.'})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Pa,{})}),t.jsx("h3",{className:"h3",children:"Firewall basics and stateful concept"})]}),t.jsx("p",{className:"p",children:"A firewall is a security system that allows or blocks network traffic based on rules. Rules can be based on IP, port, protocol, and direction."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Stateless firewall"})," - checks each packet independently",t.jsx("span",{className:"small",children:"Simple rules, less context"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Stateful firewall"})," - tracks connection state",t.jsx("span",{className:"small",children:"Knows if a packet belongs to an existing allowed connection"})]})]}),t.jsx("p",{className:"note",children:"Stateful firewalls are common because they reduce random inbound traffic and allow valid replies."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(pt,{})}),t.jsx("h3",{className:"h3",children:"VPN basics"})]}),t.jsx("p",{className:"p",children:"VPN means Virtual Private Network. It creates an encrypted tunnel between your device and a VPN server. Your traffic travels inside this tunnel."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Use"})," - secure connection on public Wi-Fi",t.jsx("span",{className:"small",children:"Example: coffee shop Wi-Fi"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Use"})," - access private office network remotely",t.jsx("span",{className:"small",children:"Example: connect to company intranet from home"})]})]}),t.jsx("p",{className:"note",children:"VPN improves privacy on the local network, but trust shifts to the VPN provider."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Zn,{})}),t.jsx("h3",{className:"h3",children:"Common attacks"})]}),t.jsx("p",{className:"p",children:"You do not need deep details here. Just know names, full forms, and what they mean in one line."}),t.jsxs("div",{className:"attacks",children:[t.jsxs("div",{className:"attack",children:[t.jsxs("div",{className:"aTop",children:[t.jsx("div",{className:"aTitle",children:"MITM"}),t.jsx("div",{className:"aFull",children:"Man In The Middle"})]}),t.jsx("div",{className:"aLine",children:"Attacker secretly sits between two parties and can read or alter traffic."})]}),t.jsxs("div",{className:"attack",children:[t.jsxs("div",{className:"aTop",children:[t.jsx("div",{className:"aTitle",children:"DNS spoofing"}),t.jsx("div",{className:"aFull",children:"DNS - Domain Name System"})]}),t.jsx("div",{className:"aLine",children:"Fake DNS answers redirect you to a wrong or malicious IP address."})]}),t.jsxs("div",{className:"attack",children:[t.jsxs("div",{className:"aTop",children:[t.jsx("div",{className:"aTitle",children:"ARP spoofing"}),t.jsx("div",{className:"aFull",children:"ARP - Address Resolution Protocol"})]}),t.jsx("div",{className:"aLine",children:"Attacker links their MAC address to someone else’s IP on a LAN to intercept traffic."})]}),t.jsxs("div",{className:"attack",children:[t.jsxs("div",{className:"aTop",children:[t.jsx("div",{className:"aTitle",children:"DDoS"}),t.jsx("div",{className:"aFull",children:"Distributed Denial of Service"})]}),t.jsx("div",{className:"aLine",children:"Many machines flood a target to make it slow or unavailable."})]}),t.jsxs("div",{className:"attack",children:[t.jsxs("div",{className:"aTop",children:[t.jsx("div",{className:"aTitle",children:"Phishing"}),t.jsx("div",{className:"aFull",children:"Social engineering attack"})]}),t.jsx("div",{className:"aLine",children:"Fake messages trick users into sharing passwords, OTPs, or clicking bad links."})]})]}),t.jsx("p",{className:"note",children:"Basic defense idea: use HTTPS, verify domains, keep MFA, and do not trust random links."})]})]})})]})},kf={Wrapper:Ie.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            padding-top: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .compare {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            margin: 10px 0;
        }

        .compare .row {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr 1.2fr 1.6fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .compare .row:first-child {
            border-top: 0;
        }

        .compare .row.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .compare .row.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .compare .row div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.45;
        }

        .strong {
            color: var(--color-text-primary) !important;
            font-weight: 900 !important;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .tool {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            border-radius: 14px;
            padding: 10px;
            margin-bottom: 10px;
        }

        .toolName {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 6px;
        }

        .muted {
            color: var(--color-text-muted);
            font-weight: 800;
            font-size: 12px;
        }

        .toolDesc {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
            margin-bottom: 6px;
        }

        .toolFull {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .quick {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            border-radius: 14px;
            overflow: hidden;
            margin: 10px 0;
        }

        .qRow {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .qRow:first-child {
            border-top: 0;
        }

        .qK {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 13px;
        }

        .qV {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .compare .row {
                grid-template-columns: 1fr;
            }

            .qRow {
                grid-template-columns: 1fr;
            }
        }
    `},bf=()=>{const[i,d]=ie.useState(!0);return t.jsxs(kf.Wrapper,{id:"networkDevicesTools",children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>d(l=>!l),"aria-expanded":i,"aria-controls":"networkDevicesTools-content",children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(Qx,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:"Network Devices and Tools"}),t.jsx("span",{className:"badge",children:"Must for dev"})]}),t.jsx("p",{className:"sub",children:"Devices that move packets and the command line tools used to debug networking fast."})]})]}),t.jsx("span",{className:"chev",children:t.jsx(lr,{})})]}),t.jsx("div",{id:"networkDevicesTools-content",className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Ex,{})}),t.jsx("h3",{className:"h3",children:"Hub vs Switch vs Router"})]}),t.jsx("p",{className:"p",children:"These devices look similar, but they work at different layers and make very different decisions."}),t.jsxs("div",{className:"compare",children:[t.jsxs("div",{className:"row head",children:[t.jsx("div",{children:"Device"}),t.jsx("div",{children:"Layer"}),t.jsx("div",{children:"Decision based on"}),t.jsx("div",{children:"Beginner example"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"strong",children:"Hub"}),t.jsx("div",{children:"Physical layer (Layer 1)"}),t.jsx("div",{children:"No decision - broadcasts everything"}),t.jsx("div",{children:"Like a loud speaker - everyone hears the same data"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"strong",children:"Switch"}),t.jsx("div",{children:"Data Link layer (Layer 2)"}),t.jsx("div",{children:"MAC address (Media Access Control address)"}),t.jsx("div",{children:"Sends frames only to the correct port inside a LAN"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"strong",children:"Router"}),t.jsx("div",{children:"Network layer (Layer 3)"}),t.jsx("div",{children:"IP address (Internet Protocol address)"}),t.jsx("div",{children:"Connects different networks and forwards packets"})]})]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"MAC"})," - Media Access Control - hardware address used inside a local network"]}),t.jsxs("li",{children:[t.jsx("b",{children:"IP"})," - Internet Protocol - logical address used across networks"]}),t.jsxs("li",{children:["Switch learns a ",t.jsx("b",{children:"MAC table"})," to know which device is on which port"]}),t.jsxs("li",{children:["Router uses a ",t.jsx("b",{children:"routing table"})," to choose the next hop toward destination IP"]})]}),t.jsx("p",{className:"note",children:"Quick memory: switch is inside a network, router connects networks."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(pt,{})}),t.jsx("h3",{className:"h3",children:"Modem meaning"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Modem"})," means ",t.jsx("b",{children:"MO"}),"dulator ",t.jsx("b",{children:"DEM"}),"odulator. It converts signals so your home network can talk to your Internet Service Provider."]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"ISP"})," - Internet Service Provider - the company that gives you internet"]}),t.jsx("li",{children:"In many homes, the modem is built into the router device you get from the ISP"}),t.jsxs("li",{children:["Fiber setups often use an ",t.jsx("b",{children:"ONT"})," - Optical Network Terminal - similar role for fiber"]})]}),t.jsx("p",{className:"note",children:"Router manages your home network. Modem connects your network to the ISP line."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(ln,{})}),t.jsx("h3",{className:"h3",children:"NAT device role"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"NAT"})," means ",t.jsx("b",{children:"Network Address Translation"}),". It lets many devices in your private network share one public IP address on the internet."]}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"192.168.0.10"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"NAT router"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Public IP"})]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Private IP"})," - used inside home or office network, not directly reachable from internet"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Public IP"})," - visible on the internet, used to reach your network from outside"]}),t.jsx("li",{children:"NAT keeps a translation table mapping internal connections to the public IP and ports"})]}),t.jsx("p",{className:"note",children:"NAT is one reason most home devices are not directly exposed to the internet."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Pu,{})}),t.jsx("h3",{className:"h3",children:"Reachability and path tools"})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["ping ",t.jsx("span",{className:"muted",children:"ICMP"})]}),t.jsx("div",{className:"toolDesc",children:"Checks if a host is reachable and measures round trip time."}),t.jsxs("div",{className:"toolFull",children:[t.jsx("b",{children:"ICMP"})," - Internet Control Message Protocol"]})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["traceroute"," ",t.jsx("span",{className:"muted",children:"or tracert"})]}),t.jsx("div",{className:"toolDesc",children:"Shows the route packets take by listing hops (routers) between you and a destination."}),t.jsx("div",{className:"toolFull",children:"Uses TTL (Time To Live) changes to reveal each hop."})]}),t.jsx("p",{className:"note",children:"First check ping, then check traceroute to see where it is failing."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Su,{})}),t.jsx("h3",{className:"h3",children:"DNS lookup tools"})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["nslookup ",t.jsx("span",{className:"muted",children:"DNS"})]}),t.jsx("div",{className:"toolDesc",children:"Basic tool to query domain name records and see IP addresses."}),t.jsxs("div",{className:"toolFull",children:[t.jsx("b",{children:"DNS"})," - Domain Name System - converts names to IP addresses"]})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["dig ",t.jsx("span",{className:"muted",children:"DNS"})]}),t.jsx("div",{className:"toolDesc",children:"Advanced DNS lookup tool. Shows detailed answers and timings."}),t.jsx("div",{className:"toolFull",children:"dig is very useful for debugging CNAME, A, AAAA, MX records."})]}),t.jsx("p",{className:"note",children:'Many "site not opening" issues are DNS problems, not server issues.'})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx($o,{})}),t.jsx("h3",{className:"h3",children:"Local network info tools"})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["ipconfig ",t.jsx("span",{className:"muted",children:"Windows"})]}),t.jsx("div",{className:"toolDesc",children:"Shows your IP address, gateway, DNS servers, and adapter details."}),t.jsx("div",{className:"toolFull",children:"Linux and macOS use ifconfig or ip addr."})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["ifconfig"," ",t.jsx("span",{className:"muted",children:"Linux or macOS"})]}),t.jsx("div",{className:"toolDesc",children:"Shows network interfaces and their IP configuration."}),t.jsx("div",{className:"toolFull",children:"Modern Linux often prefers ip addr and ip route."})]}),t.jsx("p",{className:"note",children:"If you do not know your gateway or DNS, start with ipconfig or ip addr."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(lp,{})}),t.jsx("h3",{className:"h3",children:"Connection and port tools"})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["netstat"," ",t.jsx("span",{className:"muted",children:"network statistics"})]}),t.jsx("div",{className:"toolDesc",children:"Shows active connections, listening ports, and routing table info."}),t.jsx("div",{className:"toolFull",children:"Often used to check if a port is open on your machine."})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["ss"," ",t.jsx("span",{className:"muted",children:"socket statistics"})]}),t.jsx("div",{className:"toolDesc",children:"Faster modern alternative to netstat on Linux."}),t.jsxs("div",{className:"toolFull",children:[t.jsx("b",{children:"Socket"})," means IP plus port endpoint used by apps."]})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["telnet ",t.jsx("span",{className:"muted",children:"port test"})]}),t.jsx("div",{className:"toolDesc",children:"Can test if a TCP port is reachable, but telnet is not secure for real login use."}),t.jsx("div",{className:"toolFull",children:"Example: telnet example.com 80 checks if port 80 is reachable."})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["nc ",t.jsx("span",{className:"muted",children:"netcat"})]}),t.jsx("div",{className:"toolDesc",children:"Powerful tool to test TCP or UDP ports, send data, and listen on ports."}),t.jsxs("div",{className:"toolFull",children:[t.jsx("b",{children:"nc"})," is short for netcat. Common for quick port checks."]})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["curl ",t.jsx("span",{className:"muted",children:"client URL"})]}),t.jsx("div",{className:"toolDesc",children:"Makes HTTP requests from terminal to test APIs, headers, redirects, and TLS."}),t.jsx("div",{className:"toolFull",children:"curl is the fastest way to confirm if your API is responding."})]}),t.jsx("p",{className:"note",children:"For dev debugging: check if server is listening, then check if client can reach the port."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Su,{})}),t.jsx("h3",{className:"h3",children:"Wireshark packet sniffing"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Wireshark"})," is a packet analyzer. It captures network traffic and shows packet details like IP, TCP, DNS, and HTTP fields."]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Useful for seeing if DNS queries are happening and what response you get"}),t.jsx("li",{children:"Useful for checking TCP handshake and retransmissions"}),t.jsx("li",{children:"Helps confirm what is actually sent on the wire"})]}),t.jsx("p",{className:"note",children:"Packet sniffing means capturing packets. It is used for debugging, not hacking."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Pu,{})}),t.jsx("h3",{className:"h3",children:"Reading an IP and route quickly"})]}),t.jsx("p",{className:"p",children:'When you see an IP like 192.168.1.25-24, the "-24" is CIDR. It means the first 24 bits are the network part and the rest is host part.'}),t.jsxs("div",{className:"quick",children:[t.jsxs("div",{className:"qRow",children:[t.jsx("div",{className:"qK",children:"CIDR"}),t.jsx("div",{className:"qV",children:"Classless Inter-Domain Routing - notation like 10.0.0.5-16"})]}),t.jsxs("div",{className:"qRow",children:[t.jsx("div",{className:"qK",children:"Gateway"}),t.jsx("div",{className:"qV",children:"The router address used to reach outside your local network"})]}),t.jsxs("div",{className:"qRow",children:[t.jsx("div",{className:"qK",children:"Route"}),t.jsx("div",{className:"qV",children:"Rule that says where to send packets for a destination network"})]}),t.jsxs("div",{className:"qRow",children:[t.jsx("div",{className:"qK",children:"Next hop"}),t.jsx("div",{className:"qV",children:"The next router IP that will forward your packet"})]})]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:["Fast check on Linux: ",t.jsx("b",{children:"ip addr"})," for IP,"," ",t.jsx("b",{children:"ip route"})," for route"]}),t.jsxs("li",{children:["Fast check on Windows: ",t.jsx("b",{children:"ipconfig"})," for IP,"," ",t.jsx("b",{children:"route print"})," for routes"]}),t.jsx("li",{children:"If gateway is wrong, internet will not work even if Wi-Fi is connected"})]}),t.jsx("p",{className:"note",children:"Debug habit: confirm your IP, confirm gateway, confirm DNS, then test a public IP, then test a domain."})]})]})})]})},Sf={Wrapper:Ie.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 900px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            padding-top: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 9px;
            opacity: 0.9;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .examples {
            display: grid;
            gap: 8px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            margin-bottom: 8px;
        }

        .exRow {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
            align-items: start;
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.8px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.55;
        }

        .twoCol {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }

        .box {
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 84%,
                transparent
            );
        }

        .boxTitle {
            font-size: 13.5px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
        }

        .chip {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12.5px;
            line-height: 1;
        }

        .chip:hover {
            border-color: var(--color-border-light);
            color: var(--color-text-primary);
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            color: var(--color-text-primary);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 86%,
                transparent
            );
            border: 1px solid var(--color-code-border);
            padding: 2px 6px;
            border-radius: 10px;
            white-space: nowrap;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .twoCol {
                grid-template-columns: 1fr;
            }

            .exRow {
                grid-template-columns: 1fr;
            }
        }
    `},Pf=()=>{const[i,d]=ie.useState(!0),l=ie.useMemo(()=>({id:"performanceReliability",title:"Performance and Reliability Concepts",sub:"Speed is not just bandwidth. Reliability is not just retries. Learn the common causes of slow or unstable networking."}),[]);return t.jsxs(Sf.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>d(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(Tu,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Practical"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(lr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Zn,{})}),t.jsx("h3",{className:"h3",children:"Packet loss"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Packet loss"})," means some packets never reach the destination. It usually happens due to Wi-Fi interference, congestion, weak signal, overloaded routers, or unstable ISP links."]}),t.jsx("p",{className:"p",children:"Why it hurts: TCP (Transmission Control Protocol) assumes loss means congestion and slows down. Even a small loss can make the internet feel slow."}),t.jsxs("div",{className:"examples",children:[t.jsxs("div",{className:"exRow",children:[t.jsx("div",{className:"k",children:"Symptoms"}),t.jsx("div",{className:"v",children:"buffering, call drops, lag spikes, pages stuck"})]}),t.jsxs("div",{className:"exRow",children:[t.jsx("div",{className:"k",children:"Quick check"}),t.jsxs("div",{className:"v",children:["use ",t.jsx("span",{className:"mono",children:"ping"}),' and watch for "Request timed out"']})]})]}),t.jsx("p",{className:"note",children:"Low bandwidth can still work for browsing. Packet loss makes everything feel broken."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Hx,{})}),t.jsx("h3",{className:"h3",children:"Retries and timeouts"})]}),t.jsxs("p",{className:"p",children:["A ",t.jsx("b",{children:"retry"})," happens when a sender sends the same data again because it did not get confirmation. In TCP, confirmations are called ",t.jsx("b",{children:"ACK"}),"(Acknowledgement)."]}),t.jsxs("p",{className:"p",children:["A ",t.jsx("b",{children:"timeout"})," is the maximum waiting time before retrying or failing. If the network is slow or packets are lost, timeouts trigger retries, which adds more delay."]}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"Send"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Wait for ACK"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Timeout"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Retry"})]}),t.jsx("p",{className:"note",children:"Too aggressive retries can increase congestion. Too slow timeouts feel unresponsive."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Fx,{})}),t.jsx("h3",{className:"h3",children:"MTU issues and PMTUD"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"MTU"})," (Maximum Transmission Unit) is the largest packet size that can be sent on a link without fragmentation. Common Ethernet MTU is 1500 bytes."]}),t.jsxs("p",{className:"p",children:["If a packet is larger than MTU, it may be",t.jsx("b",{children:"fragmented"})," (split) or dropped. Some networks block fragmentation, which causes weird issues like some websites loading and others failing."]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"PMTUD"})," (Path MTU Discovery) is a method where systems discover the smallest MTU along the path and adjust packet size automatically. It often depends on ICMP (Internet Control Message Protocol) messages."]}),t.jsxs("div",{className:"examples",children:[t.jsxs("div",{className:"exRow",children:[t.jsx("div",{className:"k",children:"Symptoms"}),t.jsx("div",{className:"v",children:"VPN works partially, large downloads fail, specific sites hang"})]}),t.jsxs("div",{className:"exRow",children:[t.jsx("div",{className:"k",children:"Mental model"}),t.jsx("div",{className:"v",children:"big packet hits a narrow tunnel and gets stuck"})]})]}),t.jsx("p",{className:"note",children:"MTU bugs feel like magic until you know MTU exists."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Ux,{})}),t.jsx("h3",{className:"h3",children:"QoS concept"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"QoS"})," means Quality of Service. It is a set of rules that prioritize certain traffic over others when the network is busy."]}),t.jsx("p",{className:"p",children:"Example: voice calls and video meetings need low latency and low jitter. Downloads can tolerate delay. QoS can keep calls smooth by giving them priority."}),t.jsxs("div",{className:"chips",children:[t.jsx("span",{className:"chip",children:"voice"}),t.jsx("span",{className:"chip",children:"video call"}),t.jsx("span",{className:"chip",children:"gaming"}),t.jsx("span",{className:"chip",children:"downloads"}),t.jsx("span",{className:"chip",children:"backups"})]}),t.jsx("p",{className:"note",children:"QoS does not create bandwidth. It manages who gets it first."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(nl,{})}),t.jsx("h3",{className:"h3",children:"Caching (DNS and HTTP)"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Caching"})," means storing results so next time the same request is faster. Caches exist everywhere in networking and the web."]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"boxTitle",children:"DNS caching"}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"DNS"}),' is Domain Name System. It translates domain names like "example.com" into IP addresses. DNS results are cached for a time called ',t.jsx("b",{children:"TTL"}),"(Time To Live)."]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Good: reduces repeated DNS lookups and speeds up page loads"}),t.jsx("li",{children:"Bad: old cache can point to old IP during changes"})]}),t.jsx("p",{className:"note",children:"Example: you changed server IP but some users still hit the old one due to TTL."})]}),t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"boxTitle",children:"HTTP caching"}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"HTTP"})," is HyperText Transfer Protocol. Browsers and CDNs cache files like images, CSS, and JS. Cache rules are controlled by headers like Cache-Control and ETag."]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Good: faster loads, less bandwidth usage"}),t.jsx("li",{children:"Bad: stale cache can show old UI unless cache is managed"})]}),t.jsx("p",{className:"note",children:"Example: deploy changed JS but user still sees old version due to caching."})]})]})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(rp,{})}),t.jsx("h3",{className:"h3",children:"Connection keep-alive"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Keep-alive"})," means reusing an existing connection instead of creating a new one for every request. This saves time because setting up TCP and TLS connections costs extra round trips."]}),t.jsx("p",{className:"p",children:"In HTTP, keep-alive allows multiple requests to use the same TCP connection. HTTP-2 goes further by multiplexing many requests in one connection."}),t.jsxs("div",{className:"examples",children:[t.jsxs("div",{className:"exRow",children:[t.jsx("div",{className:"k",children:"Benefit"}),t.jsx("div",{className:"v",children:"faster page loads, less handshake overhead"})]}),t.jsxs("div",{className:"exRow",children:[t.jsx("div",{className:"k",children:"Tradeoff"}),t.jsx("div",{className:"v",children:"too many open connections can waste server resources"})]})]}),t.jsx("p",{className:"note",children:"Keep-alive makes repeated requests feel instant after the first load."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Tu,{})}),t.jsx("h3",{className:"h3",children:"Quick debug checklist"})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Check packet loss first using ping"}),t.jsx("li",{children:"Check latency stability, jitter shows instability"}),t.jsx("li",{children:"If only some sites fail, suspect MTU or DNS cache"}),t.jsx("li",{children:"If calls lag while downloads run, QoS can help"}),t.jsx("li",{children:"If UI updates do not show, suspect HTTP caching"})]}),t.jsx("p",{className:"note",children:"Most real bugs are not advanced. They are basic concepts showing up in messy ways."})]})]})})]})},Tf={Wrapper:Ie.section`
        margin-bottom: 10px;

        .mainHead {
            width: 100%;
            padding: 14px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            cursor: pointer;
        }

        .mainHead h2 {
            font-size: 16px;
        }

        .mainHead .left {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .chev {
            transition: transform 0.2s ease;
        }

        .mainHead.open .chev {
            transform: rotate(180deg);
        }

        .content {
            display: none;
            margin-top: 12px;
        }

        .content.show {
            display: block;
        }

        .category {
            margin-bottom: 16px;
        }

        .catTitle {
            font-size: 14px;
            margin-bottom: 8px;
            color: var(--color-text-secondary);
        }

        .qnaItem {
            margin-bottom: 6px;
        }

        .question {
            width: 100%;
            padding: 10px;
            border-radius: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            cursor: pointer;
        }

        .question span {
            text-align: left;
            font-size: 13px;
        }

        .answer {
            display: none;
            padding: 10px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
        }

        .answer.show {
            display: block;
        }
    `},Cf=[{category:"Network Basics and Models",items:[{q:"What is a computer network",a:"A computer network is a group of interconnected devices that communicate and share data using standardized protocols."},{q:"What is a protocol",a:"A protocol is a defined set of rules that governs how data is transmitted and received over a network. Example: HTTP, TCP, DNS."},{q:"What is a packet",a:"A packet is a small unit of data sent across a network. It contains headers and payload."},{q:"Difference between packet, segment and frame",a:"Segment is Transport layer data unit, Packet is Network layer data unit, Frame is Data Link layer data unit."},{q:"What is bandwidth",a:"Bandwidth is the maximum capacity of a link measured in Mbps or Gbps."},{q:"What is throughput",a:"Throughput is the actual data transfer rate achieved in real conditions."},{q:"What is latency",a:"Latency is the time delay between sending and receiving data, usually measured in milliseconds."},{q:"What is jitter",a:"Jitter is the variation in latency over time."},{q:"What is LAN",a:"LAN stands for Local Area Network. It connects devices within a small area like a home or office."},{q:"What is WAN",a:"WAN stands for Wide Area Network. It connects networks across large geographic areas. The internet is a WAN."},{q:"What is PAN",a:"PAN stands for Personal Area Network. Example: Bluetooth connection between phone and earphones."},{q:"What is network topology",a:"Topology defines how devices are physically or logically connected. Example: star, mesh, bus, ring."}]},{category:"OSI and TCP-IP",items:[{q:"Explain OSI model",a:"OSI stands for Open Systems Interconnection. It is a 7 layer conceptual model used to understand networking functions."},{q:"Name OSI layers",a:"Physical, Data Link, Network, Transport, Session, Presentation, Application."},{q:"Which layer does a router work on",a:"Router works at Layer 3 which is the Network layer."},{q:"Which layer does a switch work on",a:"Switch works at Layer 2 which is the Data Link layer."},{q:"What is encapsulation",a:"Encapsulation is the process where each layer adds its header while sending data down the stack."},{q:"What is decapsulation",a:"Decapsulation is removing headers at each layer while receiving data."},{q:"Explain TCP-IP model",a:"TCP-IP model has 4 layers: Application, Transport, Internet, and Link."},{q:"Map OSI to TCP-IP",a:"OSI 5,6,7 map to Application. OSI 4 maps to Transport. OSI 3 maps to Internet. OSI 1,2 map to Link."}]},{category:"IP Addressing and Subnetting",items:[{q:"What is an IP address",a:"IP address uniquely identifies a device in a network using Internet Protocol."},{q:"What is IPv4",a:"IPv4 is 32 bit addressing format written as four octets. Example: 192.168.1.1."},{q:"What is IPv6",a:"IPv6 is 128 bit addressing format designed to replace IPv4."},{q:"What is CIDR",a:"CIDR stands for Classless Inter-Domain Routing. It uses slash notation like /24 to define subnet mask."},{q:"What is subnet mask",a:"Subnet mask separates network portion and host portion of an IP address."},{q:"What is private IP range",a:"10.0.0.0/8, 172.16.0.0 to 172.31.255.255, 192.168.0.0/16."},{q:"What is NAT",a:"NAT stands for Network Address Translation. It translates private IP addresses to public IP addresses."},{q:"What is DHCP",a:"DHCP stands for Dynamic Host Configuration Protocol. It automatically assigns IP addresses."},{q:"Explain DORA process",a:"DORA means Discover, Offer, Request, Acknowledge. It is the DHCP handshake."},{q:"What is default gateway",a:"Default gateway is the router that forwards traffic outside the local network."}]},{category:"Routing",items:[{q:"What is routing",a:"Routing is the process of forwarding packets between networks."},{q:"What is routing table",a:"Routing table stores network paths and next hop information."},{q:"Static vs dynamic routing",a:"Static routing is manually configured. Dynamic routing uses protocols like OSPF or BGP."},{q:"What is ICMP",a:"ICMP stands for Internet Control Message Protocol. Used for error reporting and ping."},{q:"What is TTL",a:"TTL stands for Time To Live. It limits packet lifetime in hops."},{q:"What is traceroute",a:"Traceroute shows the path packets take across routers using TTL."}]},{category:"Transport Layer TCP vs UDP",items:[{q:"Difference between TCP and UDP",a:"TCP is reliable and connection oriented. UDP is faster and connectionless."},{q:"What is three way handshake",a:"TCP connection setup process using SYN, SYN-ACK, ACK."},{q:"What is SYN",a:"SYN is synchronize flag used to initiate TCP connection."},{q:"What is ACK",a:"ACK stands for acknowledgement confirming receipt of data."},{q:"What is flow control",a:"Flow control ensures sender does not overwhelm receiver."},{q:"What is congestion control",a:"Congestion control prevents network overload by adjusting transmission rate."}]},{category:"Application Layer and Ports",items:[{q:"Port number of HTTP",a:"HTTP default port is 80."},{q:"Port number of HTTPS",a:"HTTPS default port is 443."},{q:"Port number of SSH",a:"SSH default port is 22."},{q:"Port number of FTP",a:"FTP default port is 21."},{q:"Port number of DNS",a:"DNS default port is 53."},{q:"What is DNS",a:"DNS stands for Domain Name System. It converts domain names into IP addresses."},{q:"What is HTTP",a:"HTTP stands for HyperText Transfer Protocol. It is used to transfer web pages."},{q:"What is HTTPS",a:"HTTPS is HTTP over TLS encryption."},{q:"POP3 vs IMAP",a:"POP3 downloads emails locally. IMAP syncs emails across devices."}]},{category:"Security Basics",items:[{q:"What is TLS",a:"TLS stands for Transport Layer Security. It encrypts communication over the network."},{q:"Symmetric vs asymmetric encryption",a:"Symmetric uses one key for encryption and decryption. Asymmetric uses public and private key pair."},{q:"What is hashing",a:"Hashing converts data into fixed length output. It is one way."},{q:"What is firewall",a:"Firewall filters network traffic based on rules."},{q:"What is VPN",a:"VPN stands for Virtual Private Network. It creates secure encrypted tunnel."},{q:"What is MITM attack",a:"MITM means Man In The Middle attack where attacker intercepts communication."}]},{category:"Performance and Troubleshooting",items:[{q:"What is packet loss",a:"Packet loss means packets fail to reach the destination."},{q:"What is MTU",a:"MTU stands for Maximum Transmission Unit. It defines maximum packet size."},{q:"What is PMTUD",a:"PMTUD stands for Path MTU Discovery. It finds smallest MTU along path."},{q:"What is QoS",a:"QoS stands for Quality of Service. It prioritizes certain traffic types."},{q:"What is caching",a:"Caching stores data temporarily to reduce repeated network requests."},{q:"What is keep alive",a:"Keep alive allows reuse of TCP connection for multiple requests."},{q:"Why can I ping IP but not domain",a:"DNS resolution may be failing even though connectivity exists."},{q:"What happens when you type a URL",a:"DNS lookup, TCP handshake, TLS handshake, HTTP request, server response."}]}],If=()=>{const[i,d]=ie.useState(!0),[l,p]=ie.useState({}),v=j=>{p(N=>({...N,[j]:!N[j]}))};return t.jsxs(Tf.Wrapper,{id:"mustKnowQna",children:[t.jsxs("button",{className:`mainHead ${i?"open":""}`,onClick:()=>d(j=>!j),children:[t.jsxs("div",{className:"left",children:[t.jsx(Ax,{}),t.jsx("h2",{children:"Must Know Interview QnA"})]}),t.jsx(lr,{className:"chev"})]}),t.jsx("div",{className:`content ${i?"show":""}`,children:Cf.map((j,N)=>t.jsxs("div",{className:"category",children:[t.jsx("h3",{className:"catTitle",children:j.category}),j.items.map((I,T)=>{const U=`${N}-${T}`;return t.jsxs("div",{className:"qnaItem",children:[t.jsxs("button",{className:`question ${l[U]?"open":""}`,onClick:()=>v(U),children:[t.jsx("span",{children:I.q}),t.jsx(lr,{})]}),t.jsx("div",{className:`answer ${l[U]?"show":""}`,children:t.jsx("p",{children:I.a})})]},U)})]},N))})]})},Ef=()=>{var j;const[i,d]=ie.useState("about"),l=ie.useRef(null),p=[["about","Overview",Cu],["basics","Network Basics",af],["physical","Physical and Data Link",lf],["ip","IP Addressing",df],["routing","Routing",pf],["transport","Transport Layer",mf],["application","Application Protocols",ff],["web","Web Networking",gf],["wireless","Wireless and Mobile",jf],["security","Security Basics",Nf],["devices","Network Devices",bf],["performance","Performance and Reliability",Pf],["qna","Must-Know Q&A",If]],v=((j=p.find(([N])=>N===i))==null?void 0:j[2])||Cu;return ie.useEffect(()=>{var N;(N=l.current)==null||N.scrollTo({top:0,behavior:"auto"})},[i]),t.jsxs(Do.Wrapper,{children:[t.jsx(Do.Header,{children:t.jsx(Xx,{})}),t.jsxs(Do.Main,{ref:l,children:[t.jsxs("div",{className:"workspaceLayout",children:[t.jsxs("aside",{className:"sideMenu","aria-label":"Computer networks topics",children:[t.jsx("p",{className:"menuLabel",children:"Study guide"}),t.jsx("nav",{children:p.map(([N,I])=>t.jsx("button",{type:"button",className:i===N?"active":"",onClick:()=>d(N),children:I},N))})]}),t.jsx("section",{className:"contentWrapper","aria-live":"polite",children:t.jsx(v,{})})]}),t.jsx("button",{type:"button",className:"scrollTopButton","aria-label":"Scroll content to top",title:"Scroll to top",onClick:()=>{var N;return(N=l.current)==null?void 0:N.scrollTo({top:0,behavior:"smooth"})},children:t.jsx(Sx,{})}),t.jsx("div",{className:"footerWrapper",children:t.jsx(tf,{})})]})]})};mm.createRoot(document.getElementById("root")).render(t.jsx(t.Fragment,{children:t.jsx(Ef,{})}));
