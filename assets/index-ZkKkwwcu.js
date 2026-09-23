(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const j of f)if(j.type==="childList")for(const N of j.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&u(N)}).observe(document,{childList:!0,subtree:!0});function l(f){const j={};return f.integrity&&(j.integrity=f.integrity),f.referrerPolicy&&(j.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?j.credentials="include":f.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function u(f){if(f.ep)return;f.ep=!0;const j=l(f);fetch(f.href,j)}})();function lm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Co={exports:{}},Jn={},Io={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eu;function cm(){if(eu)return ne;eu=1;var i=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),N=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),B=Symbol.iterator;function J(x){return x===null||typeof x!="object"?null:(x=B&&x[B]||x["@@iterator"],typeof x=="function"?x:null)}var oe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,H={};function G(x,w,Z){this.props=x,this.context=w,this.refs=H,this.updater=Z||oe}G.prototype.isReactComponent={},G.prototype.setState=function(x,w){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,w,"setState")},G.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function fe(){}fe.prototype=G.prototype;function ce(x,w,Z){this.props=x,this.context=w,this.refs=H,this.updater=Z||oe}var te=ce.prototype=new fe;te.constructor=ce,Y(te,G.prototype),te.isPureReactComponent=!0;var L=Array.isArray,X=Object.prototype.hasOwnProperty,U={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function _(x,w,Z){var ee,ie={},se=null,de=null;if(w!=null)for(ee in w.ref!==void 0&&(de=w.ref),w.key!==void 0&&(se=""+w.key),w)X.call(w,ee)&&!E.hasOwnProperty(ee)&&(ie[ee]=w[ee]);var le=arguments.length-2;if(le===1)ie.children=Z;else if(1<le){for(var xe=Array(le),Pe=0;Pe<le;Pe++)xe[Pe]=arguments[Pe+2];ie.children=xe}if(x&&x.defaultProps)for(ee in le=x.defaultProps,le)ie[ee]===void 0&&(ie[ee]=le[ee]);return{$$typeof:i,type:x,key:se,ref:de,props:ie,_owner:U.current}}function ge(x,w){return{$$typeof:i,type:x.type,key:w,ref:x.ref,props:x.props,_owner:x._owner}}function Le(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function ae(x){var w={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Z){return w[Z]})}var Ie=/\/+/g;function be(x,w){return typeof x=="object"&&x!==null&&x.key!=null?ae(""+x.key):w.toString(36)}function Ve(x,w,Z,ee,ie){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var de=!1;if(x===null)de=!0;else switch(se){case"string":case"number":de=!0;break;case"object":switch(x.$$typeof){case i:case c:de=!0}}if(de)return de=x,ie=ie(de),x=ee===""?"."+be(de,0):ee,L(ie)?(Z="",x!=null&&(Z=x.replace(Ie,"$&/")+"/"),Ve(ie,w,Z,"",function(Pe){return Pe})):ie!=null&&(Le(ie)&&(ie=ge(ie,Z+(!ie.key||de&&de.key===ie.key?"":(""+ie.key).replace(Ie,"$&/")+"/")+x)),w.push(ie)),1;if(de=0,ee=ee===""?".":ee+":",L(x))for(var le=0;le<x.length;le++){se=x[le];var xe=ee+be(se,le);de+=Ve(se,w,Z,xe,ie)}else if(xe=J(x),typeof xe=="function")for(x=xe.call(x),le=0;!(se=x.next()).done;)se=se.value,xe=ee+be(se,le++),de+=Ve(se,w,Z,xe,ie);else if(se==="object")throw w=String(x),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return de}function Xe(x,w,Z){if(x==null)return x;var ee=[],ie=0;return Ve(x,ee,"","",function(se){return w.call(Z,se,ie++)}),ee}function qe(x){if(x._status===-1){var w=x._result;w=w(),w.then(function(Z){(x._status===0||x._status===-1)&&(x._status=1,x._result=Z)},function(Z){(x._status===0||x._status===-1)&&(x._status=2,x._result=Z)}),x._status===-1&&(x._status=0,x._result=w)}if(x._status===1)return x._result.default;throw x._result}var ye={current:null},I={transition:null},O={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:I,ReactCurrentOwner:U};function z(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:Xe,forEach:function(x,w,Z){Xe(x,function(){w.apply(this,arguments)},Z)},count:function(x){var w=0;return Xe(x,function(){w++}),w},toArray:function(x){return Xe(x,function(w){return w})||[]},only:function(x){if(!Le(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ne.Component=G,ne.Fragment=l,ne.Profiler=f,ne.PureComponent=ce,ne.StrictMode=u,ne.Suspense=T,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,ne.act=z,ne.cloneElement=function(x,w,Z){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var ee=Y({},x.props),ie=x.key,se=x.ref,de=x._owner;if(w!=null){if(w.ref!==void 0&&(se=w.ref,de=U.current),w.key!==void 0&&(ie=""+w.key),x.type&&x.type.defaultProps)var le=x.type.defaultProps;for(xe in w)X.call(w,xe)&&!E.hasOwnProperty(xe)&&(ee[xe]=w[xe]===void 0&&le!==void 0?le[xe]:w[xe])}var xe=arguments.length-2;if(xe===1)ee.children=Z;else if(1<xe){le=Array(xe);for(var Pe=0;Pe<xe;Pe++)le[Pe]=arguments[Pe+2];ee.children=le}return{$$typeof:i,type:x.type,key:ie,ref:se,props:ee,_owner:de}},ne.createContext=function(x){return x={$$typeof:N,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:j,_context:x},x.Consumer=x},ne.createElement=_,ne.createFactory=function(x){var w=_.bind(null,x);return w.type=x,w},ne.createRef=function(){return{current:null}},ne.forwardRef=function(x){return{$$typeof:C,render:x}},ne.isValidElement=Le,ne.lazy=function(x){return{$$typeof:Q,_payload:{_status:-1,_result:x},_init:qe}},ne.memo=function(x,w){return{$$typeof:q,type:x,compare:w===void 0?null:w}},ne.startTransition=function(x){var w=I.transition;I.transition={};try{x()}finally{I.transition=w}},ne.unstable_act=z,ne.useCallback=function(x,w){return ye.current.useCallback(x,w)},ne.useContext=function(x){return ye.current.useContext(x)},ne.useDebugValue=function(){},ne.useDeferredValue=function(x){return ye.current.useDeferredValue(x)},ne.useEffect=function(x,w){return ye.current.useEffect(x,w)},ne.useId=function(){return ye.current.useId()},ne.useImperativeHandle=function(x,w,Z){return ye.current.useImperativeHandle(x,w,Z)},ne.useInsertionEffect=function(x,w){return ye.current.useInsertionEffect(x,w)},ne.useLayoutEffect=function(x,w){return ye.current.useLayoutEffect(x,w)},ne.useMemo=function(x,w){return ye.current.useMemo(x,w)},ne.useReducer=function(x,w,Z){return ye.current.useReducer(x,w,Z)},ne.useRef=function(x){return ye.current.useRef(x)},ne.useState=function(x){return ye.current.useState(x)},ne.useSyncExternalStore=function(x,w,Z){return ye.current.useSyncExternalStore(x,w,Z)},ne.useTransition=function(){return ye.current.useTransition()},ne.version="18.3.1",ne}var ru;function Yo(){return ru||(ru=1,Io.exports=cm()),Io.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu;function dm(){if(tu)return Jn;tu=1;var i=Yo(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,f=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function N(C,T,q){var Q,B={},J=null,oe=null;q!==void 0&&(J=""+q),T.key!==void 0&&(J=""+T.key),T.ref!==void 0&&(oe=T.ref);for(Q in T)u.call(T,Q)&&!j.hasOwnProperty(Q)&&(B[Q]=T[Q]);if(C&&C.defaultProps)for(Q in T=C.defaultProps,T)B[Q]===void 0&&(B[Q]=T[Q]);return{$$typeof:c,type:C,key:J,ref:oe,props:B,_owner:f.current}}return Jn.Fragment=l,Jn.jsx=N,Jn.jsxs=N,Jn}var nu;function um(){return nu||(nu=1,Co.exports=dm()),Co.exports}var t=um(),va={},Eo={exports:{}},ar={},Lo={exports:{}},zo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su;function pm(){return su||(su=1,(function(i){function c(I,O){var z=I.length;I.push(O);e:for(;0<z;){var x=z-1>>>1,w=I[x];if(0<f(w,O))I[x]=O,I[z]=w,z=x;else break e}}function l(I){return I.length===0?null:I[0]}function u(I){if(I.length===0)return null;var O=I[0],z=I.pop();if(z!==O){I[0]=z;e:for(var x=0,w=I.length,Z=w>>>1;x<Z;){var ee=2*(x+1)-1,ie=I[ee],se=ee+1,de=I[se];if(0>f(ie,z))se<w&&0>f(de,ie)?(I[x]=de,I[se]=z,x=se):(I[x]=ie,I[ee]=z,x=ee);else if(se<w&&0>f(de,z))I[x]=de,I[se]=z,x=se;else break e}}return O}function f(I,O){var z=I.sortIndex-O.sortIndex;return z!==0?z:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;i.unstable_now=function(){return j.now()}}else{var N=Date,C=N.now();i.unstable_now=function(){return N.now()-C}}var T=[],q=[],Q=1,B=null,J=3,oe=!1,Y=!1,H=!1,G=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(I){for(var O=l(q);O!==null;){if(O.callback===null)u(q);else if(O.startTime<=I)u(q),O.sortIndex=O.expirationTime,c(T,O);else break;O=l(q)}}function L(I){if(H=!1,te(I),!Y)if(l(T)!==null)Y=!0,qe(X);else{var O=l(q);O!==null&&ye(L,O.startTime-I)}}function X(I,O){Y=!1,H&&(H=!1,fe(_),_=-1),oe=!0;var z=J;try{for(te(O),B=l(T);B!==null&&(!(B.expirationTime>O)||I&&!ae());){var x=B.callback;if(typeof x=="function"){B.callback=null,J=B.priorityLevel;var w=x(B.expirationTime<=O);O=i.unstable_now(),typeof w=="function"?B.callback=w:B===l(T)&&u(T),te(O)}else u(T);B=l(T)}if(B!==null)var Z=!0;else{var ee=l(q);ee!==null&&ye(L,ee.startTime-O),Z=!1}return Z}finally{B=null,J=z,oe=!1}}var U=!1,E=null,_=-1,ge=5,Le=-1;function ae(){return!(i.unstable_now()-Le<ge)}function Ie(){if(E!==null){var I=i.unstable_now();Le=I;var O=!0;try{O=E(!0,I)}finally{O?be():(U=!1,E=null)}}else U=!1}var be;if(typeof ce=="function")be=function(){ce(Ie)};else if(typeof MessageChannel!="undefined"){var Ve=new MessageChannel,Xe=Ve.port2;Ve.port1.onmessage=Ie,be=function(){Xe.postMessage(null)}}else be=function(){G(Ie,0)};function qe(I){E=I,U||(U=!0,be())}function ye(I,O){_=G(function(){I(i.unstable_now())},O)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(I){I.callback=null},i.unstable_continueExecution=function(){Y||oe||(Y=!0,qe(X))},i.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<I?Math.floor(1e3/I):5},i.unstable_getCurrentPriorityLevel=function(){return J},i.unstable_getFirstCallbackNode=function(){return l(T)},i.unstable_next=function(I){switch(J){case 1:case 2:case 3:var O=3;break;default:O=J}var z=J;J=O;try{return I()}finally{J=z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var z=J;J=I;try{return O()}finally{J=z}},i.unstable_scheduleCallback=function(I,O,z){var x=i.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?x+z:x):z=x,I){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=z+w,I={id:Q++,callback:O,priorityLevel:I,startTime:z,expirationTime:w,sortIndex:-1},z>x?(I.sortIndex=z,c(q,I),l(T)===null&&I===l(q)&&(H?(fe(_),_=-1):H=!0,ye(L,z-x))):(I.sortIndex=w,c(T,I),Y||oe||(Y=!0,qe(X))),I},i.unstable_shouldYield=ae,i.unstable_wrapCallback=function(I){var O=J;return function(){var z=J;J=O;try{return I.apply(this,arguments)}finally{J=z}}}})(zo)),zo}var au;function hm(){return au||(au=1,Lo.exports=pm()),Lo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iu;function mm(){if(iu)return ar;iu=1;var i=Yo(),c=hm();function l(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,f={};function j(e,r){N(e,r),N(e+"Capture",r)}function N(e,r){for(f[e]=r,e=0;e<r.length;e++)u.add(r[e])}var C=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Q={},B={};function J(e){return T.call(B,e)?!0:T.call(Q,e)?!1:q.test(e)?B[e]=!0:(Q[e]=!0,!1)}function oe(e,r,n,s){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y(e,r,n,s){if(r===null||typeof r=="undefined"||oe(e,r,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function H(e,r,n,s,a,o,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=o,this.removeEmptyString=d}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){G[e]=new H(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];G[r]=new H(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){G[e]=new H(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){G[e]=new H(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){G[e]=new H(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){G[e]=new H(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){G[e]=new H(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){G[e]=new H(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){G[e]=new H(e,5,!1,e.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function ce(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(fe,ce);G[r]=new H(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(fe,ce);G[r]=new H(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(fe,ce);G[r]=new H(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){G[e]=new H(e,1,!1,e.toLowerCase(),null,!1,!1)}),G.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){G[e]=new H(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,r,n,s){var a=G.hasOwnProperty(r)?G[r]:null;(a!==null?a.type!==0:s||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Y(r,n,a,s)&&(n=null),s||a===null?J(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(r=a.attributeName,s=a.attributeNamespace,n===null?e.removeAttribute(r):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,s?e.setAttributeNS(s,r,n):e.setAttribute(r,n))))}var L=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),U=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),Le=Symbol.for("react.provider"),ae=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),Xe=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),I=Symbol.iterator;function O(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,x;function w(e){if(x===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+e}var Z=!1;function ee(e,r){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(y){var s=y}Reflect.construct(e,[],r)}else{try{r.call()}catch(y){s=y}e.call(r.prototype)}else{try{throw Error()}catch(y){s=y}e()}}catch(y){if(y&&s&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),o=s.stack.split(`
`),d=a.length-1,p=o.length-1;1<=d&&0<=p&&a[d]!==o[p];)p--;for(;1<=d&&0<=p;d--,p--)if(a[d]!==o[p]){if(d!==1||p!==1)do if(d--,p--,0>p||a[d]!==o[p]){var h=`
`+a[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=p);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?w(e):""}function ie(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case U:return"Portal";case ge:return"Profiler";case _:return"StrictMode";case be:return"Suspense";case Ve:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ae:return(e.displayName||"Context")+".Consumer";case Le:return(e._context.displayName||"Context")+".Provider";case Ie:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xe:return r=e.displayName||null,r!==null?r:se(e.type)||"Memo";case qe:r=e._payload,e=e._init;try{return se(e(r))}catch{}}return null}function de(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(r);case 8:return r===_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Pe(e){var r=xe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),s=""+e[r];if(!e.hasOwnProperty(r)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return a.call(this)},set:function(d){s=""+d,o.call(this,d)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(d){s=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function qr(e){e._valueTracker||(e._valueTracker=Pe(e))}function ft(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),s="";return e&&(s=xe(e)?e.checked?"true":"false":e.value),e=s,e!==n?(r.setValue(e),!0):!1}function Nr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Aa(e,r){var n=r.checked;return z({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ol(e,r){var n=r.defaultValue==null?"":r.defaultValue,s=r.checked!=null?r.checked:r.defaultChecked;n=le(r.value!=null?r.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ll(e,r){r=r.checked,r!=null&&te(e,"checked",r,!1)}function Ma(e,r){ll(e,r);var n=le(r.value),s=r.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Da(e,r.type,n):r.hasOwnProperty("defaultValue")&&Da(e,r.type,le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function cl(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var s=r.type;if(!(s!=="submit"&&s!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Da(e,r,n){(r!=="number"||Nr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var hn=Array.isArray;function At(e,r,n,s){if(e=e.options,r){r={};for(var a=0;a<n.length;a++)r["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=r.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&s&&(e[n].defaultSelected=!0)}else{for(n=""+le(n),r=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}r!==null||e[a].disabled||(r=e[a])}r!==null&&(r.selected=!0)}}function _a(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(l(91));return z({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dl(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(l(92));if(hn(n)){if(1<n.length)throw Error(l(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:le(n)}}function ul(e,r){var n=le(r.value),s=le(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function pl(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function hl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fa(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?hl(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cs,ml=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,n,s,a){MSApp.execUnsafeLocalFunction(function(){return e(r,n,s,a)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(cs=cs||document.createElement("div"),cs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=cs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function mn(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pp=["Webkit","ms","Moz","O"];Object.keys(fn).forEach(function(e){pp.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),fn[r]=fn[e]})});function fl(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||fn.hasOwnProperty(e)&&fn[e]?(""+r).trim():r+"px"}function xl(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var s=n.indexOf("--")===0,a=fl(n,r[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,a):e[n]=a}}var hp=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oa(e,r){if(r){if(hp[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(l(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(l(61))}if(r.style!=null&&typeof r.style!="object")throw Error(l(62))}}function Wa(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ba=null;function Ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ua=null,Mt=null,Dt=null;function vl(e){if(e=_n(e)){if(typeof Ua!="function")throw Error(l(280));var r=e.stateNode;r&&(r=zs(r),Ua(e.stateNode,e.type,r))}}function gl(e){Mt?Dt?Dt.push(e):Dt=[e]:Mt=e}function yl(){if(Mt){var e=Mt,r=Dt;if(Dt=Mt=null,vl(e),r)for(e=0;e<r.length;e++)vl(r[e])}}function jl(e,r){return e(r)}function Nl(){}var $a=!1;function wl(e,r,n){if($a)return e(r,n);$a=!0;try{return jl(e,r,n)}finally{$a=!1,(Mt!==null||Dt!==null)&&(Nl(),yl())}}function xn(e,r){var n=e.stateNode;if(n===null)return null;var s=zs(n);if(s===null)return null;n=s[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,r,typeof n));return n}var Va=!1;if(C)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){Va=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{Va=!1}function mp(e,r,n,s,a,o,d,p,h){var y=Array.prototype.slice.call(arguments,3);try{r.apply(n,y)}catch(b){this.onError(b)}}var gn=!1,ds=null,us=!1,qa=null,fp={onError:function(e){gn=!0,ds=e}};function xp(e,r,n,s,a,o,d,p,h){gn=!1,ds=null,mp.apply(fp,arguments)}function vp(e,r,n,s,a,o,d,p,h){if(xp.apply(this,arguments),gn){if(gn){var y=ds;gn=!1,ds=null}else throw Error(l(198));us||(us=!0,qa=y)}}function xt(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function kl(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function bl(e){if(xt(e)!==e)throw Error(l(188))}function gp(e){var r=e.alternate;if(!r){if(r=xt(e),r===null)throw Error(l(188));return r!==e?null:e}for(var n=e,s=r;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(s=a.return,s!==null){n=s;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return bl(a),e;if(o===s)return bl(a),r;o=o.sibling}throw Error(l(188))}if(n.return!==s.return)n=a,s=o;else{for(var d=!1,p=a.child;p;){if(p===n){d=!0,n=a,s=o;break}if(p===s){d=!0,s=a,n=o;break}p=p.sibling}if(!d){for(p=o.child;p;){if(p===n){d=!0,n=o,s=a;break}if(p===s){d=!0,s=o,n=a;break}p=p.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==s)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:r}function Sl(e){return e=gp(e),e!==null?Pl(e):null}function Pl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Pl(e);if(r!==null)return r;e=e.sibling}return null}var Tl=c.unstable_scheduleCallback,Cl=c.unstable_cancelCallback,yp=c.unstable_shouldYield,jp=c.unstable_requestPaint,ze=c.unstable_now,Np=c.unstable_getCurrentPriorityLevel,Qa=c.unstable_ImmediatePriority,Il=c.unstable_UserBlockingPriority,ps=c.unstable_NormalPriority,wp=c.unstable_LowPriority,El=c.unstable_IdlePriority,hs=null,Lr=null;function kp(e){if(Lr&&typeof Lr.onCommitFiberRoot=="function")try{Lr.onCommitFiberRoot(hs,e,void 0,(e.current.flags&128)===128)}catch{}}var wr=Math.clz32?Math.clz32:Pp,bp=Math.log,Sp=Math.LN2;function Pp(e){return e>>>=0,e===0?32:31-(bp(e)/Sp|0)|0}var ms=64,fs=4194304;function yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xs(e,r){var n=e.pendingLanes;if(n===0)return 0;var s=0,a=e.suspendedLanes,o=e.pingedLanes,d=n&268435455;if(d!==0){var p=d&~a;p!==0?s=yn(p):(o&=d,o!==0&&(s=yn(o)))}else d=n&~a,d!==0?s=yn(d):o!==0&&(s=yn(o));if(s===0)return 0;if(r!==0&&r!==s&&(r&a)===0&&(a=s&-s,o=r&-r,a>=o||a===16&&(o&4194240)!==0))return r;if((s&4)!==0&&(s|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=s;0<r;)n=31-wr(r),a=1<<n,s|=e[n],r&=~a;return s}function Tp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cp(e,r){for(var n=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var d=31-wr(o),p=1<<d,h=a[d];h===-1?((p&n)===0||(p&s)!==0)&&(a[d]=Tp(p,r)):h<=r&&(e.expiredLanes|=p),o&=~p}}function Ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ll(){var e=ms;return ms<<=1,(ms&4194240)===0&&(ms=64),e}function Ka(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function jn(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-wr(r),e[r]=n}function Ip(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-wr(n),o=1<<a;r[a]=0,s[a]=-1,e[a]=-1,n&=~o}}function Ya(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var s=31-wr(n),a=1<<s;a&r|e[s]&r&&(e[s]|=r),n&=~a}}var ve=0;function zl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rl,Xa,Al,Ml,Dl,Ja=!1,vs=[],Qr=null,Gr=null,Kr=null,Nn=new Map,wn=new Map,Yr=[],Ep="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _l(e,r){switch(e){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":Nn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(r.pointerId)}}function kn(e,r,n,s,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:r,domEventName:n,eventSystemFlags:s,nativeEvent:o,targetContainers:[a]},r!==null&&(r=_n(r),r!==null&&Xa(r)),e):(e.eventSystemFlags|=s,r=e.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),e)}function Lp(e,r,n,s,a){switch(r){case"focusin":return Qr=kn(Qr,e,r,n,s,a),!0;case"dragenter":return Gr=kn(Gr,e,r,n,s,a),!0;case"mouseover":return Kr=kn(Kr,e,r,n,s,a),!0;case"pointerover":var o=a.pointerId;return Nn.set(o,kn(Nn.get(o)||null,e,r,n,s,a)),!0;case"gotpointercapture":return o=a.pointerId,wn.set(o,kn(wn.get(o)||null,e,r,n,s,a)),!0}return!1}function Fl(e){var r=vt(e.target);if(r!==null){var n=xt(r);if(n!==null){if(r=n.tag,r===13){if(r=kl(n),r!==null){e.blockedOn=r,Dl(e.priority,function(){Al(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gs(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=ei(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Ba=s,n.target.dispatchEvent(s),Ba=null}else return r=_n(n),r!==null&&Xa(r),e.blockedOn=n,!1;r.shift()}return!0}function Ol(e,r,n){gs(e)&&n.delete(r)}function zp(){Ja=!1,Qr!==null&&gs(Qr)&&(Qr=null),Gr!==null&&gs(Gr)&&(Gr=null),Kr!==null&&gs(Kr)&&(Kr=null),Nn.forEach(Ol),wn.forEach(Ol)}function bn(e,r){e.blockedOn===r&&(e.blockedOn=null,Ja||(Ja=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,zp)))}function Sn(e){function r(a){return bn(a,e)}if(0<vs.length){bn(vs[0],e);for(var n=1;n<vs.length;n++){var s=vs[n];s.blockedOn===e&&(s.blockedOn=null)}}for(Qr!==null&&bn(Qr,e),Gr!==null&&bn(Gr,e),Kr!==null&&bn(Kr,e),Nn.forEach(r),wn.forEach(r),n=0;n<Yr.length;n++)s=Yr[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)Fl(n),n.blockedOn===null&&Yr.shift()}var _t=L.ReactCurrentBatchConfig,ys=!0;function Rp(e,r,n,s){var a=ve,o=_t.transition;_t.transition=null;try{ve=1,Za(e,r,n,s)}finally{ve=a,_t.transition=o}}function Ap(e,r,n,s){var a=ve,o=_t.transition;_t.transition=null;try{ve=4,Za(e,r,n,s)}finally{ve=a,_t.transition=o}}function Za(e,r,n,s){if(ys){var a=ei(e,r,n,s);if(a===null)vi(e,r,s,js,n),_l(e,s);else if(Lp(a,e,r,n,s))s.stopPropagation();else if(_l(e,s),r&4&&-1<Ep.indexOf(e)){for(;a!==null;){var o=_n(a);if(o!==null&&Rl(o),o=ei(e,r,n,s),o===null&&vi(e,r,s,js,n),o===a)break;a=o}a!==null&&s.stopPropagation()}else vi(e,r,s,null,n)}}var js=null;function ei(e,r,n,s){if(js=null,e=Ha(s),e=vt(e),e!==null)if(r=xt(e),r===null)e=null;else if(n=r.tag,n===13){if(e=kl(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return js=e,null}function Wl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Np()){case Qa:return 1;case Il:return 4;case ps:case wp:return 16;case El:return 536870912;default:return 16}default:return 16}}var Xr=null,ri=null,Ns=null;function Bl(){if(Ns)return Ns;var e,r=ri,n=r.length,s,a="value"in Xr?Xr.value:Xr.textContent,o=a.length;for(e=0;e<n&&r[e]===a[e];e++);var d=n-e;for(s=1;s<=d&&r[n-s]===a[o-s];s++);return Ns=a.slice(e,1<s?1-s:void 0)}function ws(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ks(){return!0}function Hl(){return!1}function or(e){function r(n,s,a,o,d){this._reactName=n,this._targetInst=a,this.type=s,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ks:Hl,this.isPropagationStopped=Hl,this}return z(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ks)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ks)},persist:function(){},isPersistent:ks}),r}var Ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ti=or(Ft),Pn=z({},Ft,{view:0,detail:0}),Mp=or(Pn),ni,si,Tn,bs=z({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ii,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(ni=e.screenX-Tn.screenX,si=e.screenY-Tn.screenY):si=ni=0,Tn=e),ni)},movementY:function(e){return"movementY"in e?e.movementY:si}}),Ul=or(bs),Dp=z({},bs,{dataTransfer:0}),_p=or(Dp),Fp=z({},Pn,{relatedTarget:0}),ai=or(Fp),Op=z({},Ft,{animationName:0,elapsedTime:0,pseudoElement:0}),Wp=or(Op),Bp=z({},Ft,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hp=or(Bp),Up=z({},Ft,{data:0}),$l=or(Up),$p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qp(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=qp[e])?!!r[e]:!1}function ii(){return Qp}var Gp=z({},Pn,{key:function(e){if(e.key){var r=$p[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ii,charCode:function(e){return e.type==="keypress"?ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kp=or(Gp),Yp=z({},bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vl=or(Yp),Xp=z({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ii}),Jp=or(Xp),Zp=z({},Ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),eh=or(Zp),rh=z({},bs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),th=or(rh),nh=[9,13,27,32],oi=C&&"CompositionEvent"in window,Cn=null;C&&"documentMode"in document&&(Cn=document.documentMode);var sh=C&&"TextEvent"in window&&!Cn,ql=C&&(!oi||Cn&&8<Cn&&11>=Cn),Ql=" ",Gl=!1;function Kl(e,r){switch(e){case"keyup":return nh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function ah(e,r){switch(e){case"compositionend":return Yl(r);case"keypress":return r.which!==32?null:(Gl=!0,Ql);case"textInput":return e=r.data,e===Ql&&Gl?null:e;default:return null}}function ih(e,r){if(Ot)return e==="compositionend"||!oi&&Kl(e,r)?(e=Bl(),Ns=ri=Xr=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ql&&r.locale!=="ko"?null:r.data;default:return null}}var oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!oh[e.type]:r==="textarea"}function Jl(e,r,n,s){gl(s),r=Is(r,"onChange"),0<r.length&&(n=new ti("onChange","change",null,n,s),e.push({event:n,listeners:r}))}var In=null,En=null;function lh(e){xc(e,0)}function Ss(e){var r=$t(e);if(ft(r))return e}function ch(e,r){if(e==="change")return r}var Zl=!1;if(C){var li;if(C){var ci="oninput"in document;if(!ci){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),ci=typeof ec.oninput=="function"}li=ci}else li=!1;Zl=li&&(!document.documentMode||9<document.documentMode)}function rc(){In&&(In.detachEvent("onpropertychange",tc),En=In=null)}function tc(e){if(e.propertyName==="value"&&Ss(En)){var r=[];Jl(r,En,e,Ha(e)),wl(lh,r)}}function dh(e,r,n){e==="focusin"?(rc(),In=r,En=n,In.attachEvent("onpropertychange",tc)):e==="focusout"&&rc()}function uh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(En)}function ph(e,r){if(e==="click")return Ss(r)}function hh(e,r){if(e==="input"||e==="change")return Ss(r)}function mh(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var kr=typeof Object.is=="function"?Object.is:mh;function Ln(e,r){if(kr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),s=Object.keys(r);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var a=n[s];if(!T.call(r,a)||!kr(e[a],r[a]))return!1}return!0}function nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sc(e,r){var n=nc(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=r&&s>=r)return{node:n,offset:r-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nc(n)}}function ac(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?ac(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function ic(){for(var e=window,r=Nr();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Nr(e.document)}return r}function di(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function fh(e){var r=ic(),n=e.focusedElem,s=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&ac(n.ownerDocument.documentElement,n)){if(s!==null&&di(n)){if(r=s.start,e=s.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(s.start,a);s=s.end===void 0?o:Math.min(s.end,a),!e.extend&&o>s&&(a=s,s=o,o=a),a=sc(n,o);var d=sc(n,s);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(a.node,a.offset),e.removeAllRanges(),o>s?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xh=C&&"documentMode"in document&&11>=document.documentMode,Wt=null,ui=null,zn=null,pi=!1;function oc(e,r,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pi||Wt==null||Wt!==Nr(s)||(s=Wt,"selectionStart"in s&&di(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),zn&&Ln(zn,s)||(zn=s,s=Is(ui,"onSelect"),0<s.length&&(r=new ti("onSelect","select",null,r,n),e.push({event:r,listeners:s}),r.target=Wt)))}function Ps(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Bt={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionend:Ps("Transition","TransitionEnd")},hi={},lc={};C&&(lc=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function Ts(e){if(hi[e])return hi[e];if(!Bt[e])return e;var r=Bt[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in lc)return hi[e]=r[n];return e}var cc=Ts("animationend"),dc=Ts("animationiteration"),uc=Ts("animationstart"),pc=Ts("transitionend"),hc=new Map,mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(e,r){hc.set(e,r),j(r,[e])}for(var mi=0;mi<mc.length;mi++){var fi=mc[mi],vh=fi.toLowerCase(),gh=fi[0].toUpperCase()+fi.slice(1);Jr(vh,"on"+gh)}Jr(cc,"onAnimationEnd"),Jr(dc,"onAnimationIteration"),Jr(uc,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(pc,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function fc(e,r,n){var s=e.type||"unknown-event";e.currentTarget=n,vp(s,r,void 0,e),e.currentTarget=null}function xc(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],a=s.event;s=s.listeners;e:{var o=void 0;if(r)for(var d=s.length-1;0<=d;d--){var p=s[d],h=p.instance,y=p.currentTarget;if(p=p.listener,h!==o&&a.isPropagationStopped())break e;fc(a,p,y),o=h}else for(d=0;d<s.length;d++){if(p=s[d],h=p.instance,y=p.currentTarget,p=p.listener,h!==o&&a.isPropagationStopped())break e;fc(a,p,y),o=h}}}if(us)throw e=qa,us=!1,qa=null,e}function Ne(e,r){var n=r[ki];n===void 0&&(n=r[ki]=new Set);var s=e+"__bubble";n.has(s)||(vc(r,e,2,!1),n.add(s))}function xi(e,r,n){var s=0;r&&(s|=4),vc(n,e,s,r)}var Cs="_reactListening"+Math.random().toString(36).slice(2);function An(e){if(!e[Cs]){e[Cs]=!0,u.forEach(function(n){n!=="selectionchange"&&(yh.has(n)||xi(n,!1,e),xi(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Cs]||(r[Cs]=!0,xi("selectionchange",!1,r))}}function vc(e,r,n,s){switch(Wl(r)){case 1:var a=Rp;break;case 4:a=Ap;break;default:a=Za}n=a.bind(null,r,n,e),a=void 0,!Va||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(r,n,{capture:!0,passive:a}):e.addEventListener(r,n,!0):a!==void 0?e.addEventListener(r,n,{passive:a}):e.addEventListener(r,n,!1)}function vi(e,r,n,s,a){var o=s;if((r&1)===0&&(r&2)===0&&s!==null)e:for(;;){if(s===null)return;var d=s.tag;if(d===3||d===4){var p=s.stateNode.containerInfo;if(p===a||p.nodeType===8&&p.parentNode===a)break;if(d===4)for(d=s.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===a||h.nodeType===8&&h.parentNode===a))return;d=d.return}for(;p!==null;){if(d=vt(p),d===null)return;if(h=d.tag,h===5||h===6){s=o=d;continue e}p=p.parentNode}}s=s.return}wl(function(){var y=o,b=Ha(n),S=[];e:{var k=hc.get(e);if(k!==void 0){var R=ti,M=e;switch(e){case"keypress":if(ws(n)===0)break e;case"keydown":case"keyup":R=Kp;break;case"focusin":M="focus",R=ai;break;case"focusout":M="blur",R=ai;break;case"beforeblur":case"afterblur":R=ai;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Ul;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Jp;break;case cc:case dc:case uc:R=Wp;break;case pc:R=eh;break;case"scroll":R=Mp;break;case"wheel":R=th;break;case"copy":case"cut":case"paste":R=Hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Vl}var D=(r&4)!==0,Re=!D&&e==="scroll",v=D?k!==null?k+"Capture":null:k;D=[];for(var m=y,g;m!==null;){g=m;var P=g.stateNode;if(g.tag===5&&P!==null&&(g=P,v!==null&&(P=xn(m,v),P!=null&&D.push(Mn(m,P,g)))),Re)break;m=m.return}0<D.length&&(k=new R(k,M,null,n,b),S.push({event:k,listeners:D}))}}if((r&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",k&&n!==Ba&&(M=n.relatedTarget||n.fromElement)&&(vt(M)||M[Dr]))break e;if((R||k)&&(k=b.window===b?b:(k=b.ownerDocument)?k.defaultView||k.parentWindow:window,R?(M=n.relatedTarget||n.toElement,R=y,M=M?vt(M):null,M!==null&&(Re=xt(M),M!==Re||M.tag!==5&&M.tag!==6)&&(M=null)):(R=null,M=y),R!==M)){if(D=Ul,P="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(D=Vl,P="onPointerLeave",v="onPointerEnter",m="pointer"),Re=R==null?k:$t(R),g=M==null?k:$t(M),k=new D(P,m+"leave",R,n,b),k.target=Re,k.relatedTarget=g,P=null,vt(b)===y&&(D=new D(v,m+"enter",M,n,b),D.target=g,D.relatedTarget=Re,P=D),Re=P,R&&M)r:{for(D=R,v=M,m=0,g=D;g;g=Ht(g))m++;for(g=0,P=v;P;P=Ht(P))g++;for(;0<m-g;)D=Ht(D),m--;for(;0<g-m;)v=Ht(v),g--;for(;m--;){if(D===v||v!==null&&D===v.alternate)break r;D=Ht(D),v=Ht(v)}D=null}else D=null;R!==null&&gc(S,k,R,D,!1),M!==null&&Re!==null&&gc(S,Re,M,D,!0)}}e:{if(k=y?$t(y):window,R=k.nodeName&&k.nodeName.toLowerCase(),R==="select"||R==="input"&&k.type==="file")var F=ch;else if(Xl(k))if(Zl)F=hh;else{F=uh;var $=dh}else(R=k.nodeName)&&R.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(F=ph);if(F&&(F=F(e,y))){Jl(S,F,n,b);break e}$&&$(e,k,y),e==="focusout"&&($=k._wrapperState)&&$.controlled&&k.type==="number"&&Da(k,"number",k.value)}switch($=y?$t(y):window,e){case"focusin":(Xl($)||$.contentEditable==="true")&&(Wt=$,ui=y,zn=null);break;case"focusout":zn=ui=Wt=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,oc(S,n,b);break;case"selectionchange":if(xh)break;case"keydown":case"keyup":oc(S,n,b)}var V;if(oi)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Ot?Kl(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(ql&&n.locale!=="ko"&&(Ot||K!=="onCompositionStart"?K==="onCompositionEnd"&&Ot&&(V=Bl()):(Xr=b,ri="value"in Xr?Xr.value:Xr.textContent,Ot=!0)),$=Is(y,K),0<$.length&&(K=new $l(K,e,null,n,b),S.push({event:K,listeners:$}),V?K.data=V:(V=Yl(n),V!==null&&(K.data=V)))),(V=sh?ah(e,n):ih(e,n))&&(y=Is(y,"onBeforeInput"),0<y.length&&(b=new $l("onBeforeInput","beforeinput",null,n,b),S.push({event:b,listeners:y}),b.data=V))}xc(S,r)})}function Mn(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Is(e,r){for(var n=r+"Capture",s=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=xn(e,n),o!=null&&s.unshift(Mn(e,o,a)),o=xn(e,r),o!=null&&s.push(Mn(e,o,a))),e=e.return}return s}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gc(e,r,n,s,a){for(var o=r._reactName,d=[];n!==null&&n!==s;){var p=n,h=p.alternate,y=p.stateNode;if(h!==null&&h===s)break;p.tag===5&&y!==null&&(p=y,a?(h=xn(n,o),h!=null&&d.unshift(Mn(n,h,p))):a||(h=xn(n,o),h!=null&&d.push(Mn(n,h,p)))),n=n.return}d.length!==0&&e.push({event:r,listeners:d})}var jh=/\r\n?/g,Nh=/\u0000|\uFFFD/g;function yc(e){return(typeof e=="string"?e:""+e).replace(jh,`
`).replace(Nh,"")}function Es(e,r,n){if(r=yc(r),yc(e)!==r&&n)throw Error(l(425))}function Ls(){}var gi=null,yi=null;function ji(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ni=typeof setTimeout=="function"?setTimeout:void 0,wh=typeof clearTimeout=="function"?clearTimeout:void 0,jc=typeof Promise=="function"?Promise:void 0,kh=typeof queueMicrotask=="function"?queueMicrotask:typeof jc!="undefined"?function(e){return jc.resolve(null).then(e).catch(bh)}:Ni;function bh(e){setTimeout(function(){throw e})}function wi(e,r){var n=r,s=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(s===0){e.removeChild(a),Sn(r);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=a}while(n);Sn(r)}function Zr(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Nc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var Ut=Math.random().toString(36).slice(2),zr="__reactFiber$"+Ut,Dn="__reactProps$"+Ut,Dr="__reactContainer$"+Ut,ki="__reactEvents$"+Ut,Sh="__reactListeners$"+Ut,Ph="__reactHandles$"+Ut;function vt(e){var r=e[zr];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Dr]||n[zr]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=Nc(e);e!==null;){if(n=e[zr])return n;e=Nc(e)}return r}e=n,n=e.parentNode}return null}function _n(e){return e=e[zr]||e[Dr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function zs(e){return e[Dn]||null}var bi=[],Vt=-1;function et(e){return{current:e}}function we(e){0>Vt||(e.current=bi[Vt],bi[Vt]=null,Vt--)}function je(e,r){Vt++,bi[Vt]=e.current,e.current=r}var rt={},Qe=et(rt),er=et(!1),gt=rt;function qt(e,r){var n=e.type.contextTypes;if(!n)return rt;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===r)return s.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=r[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),a}function rr(e){return e=e.childContextTypes,e!=null}function Rs(){we(er),we(Qe)}function wc(e,r,n){if(Qe.current!==rt)throw Error(l(168));je(Qe,r),je(er,n)}function kc(e,r,n){var s=e.stateNode;if(r=r.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var a in s)if(!(a in r))throw Error(l(108,de(e)||"Unknown",a));return z({},n,s)}function As(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rt,gt=Qe.current,je(Qe,e),je(er,er.current),!0}function bc(e,r,n){var s=e.stateNode;if(!s)throw Error(l(169));n?(e=kc(e,r,gt),s.__reactInternalMemoizedMergedChildContext=e,we(er),we(Qe),je(Qe,e)):we(er),je(er,n)}var _r=null,Ms=!1,Si=!1;function Sc(e){_r===null?_r=[e]:_r.push(e)}function Th(e){Ms=!0,Sc(e)}function tt(){if(!Si&&_r!==null){Si=!0;var e=0,r=ve;try{var n=_r;for(ve=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}_r=null,Ms=!1}catch(a){throw _r!==null&&(_r=_r.slice(e+1)),Tl(Qa,tt),a}finally{ve=r,Si=!1}}return null}var Qt=[],Gt=0,Ds=null,_s=0,mr=[],fr=0,yt=null,Fr=1,Or="";function jt(e,r){Qt[Gt++]=_s,Qt[Gt++]=Ds,Ds=e,_s=r}function Pc(e,r,n){mr[fr++]=Fr,mr[fr++]=Or,mr[fr++]=yt,yt=e;var s=Fr;e=Or;var a=32-wr(s)-1;s&=~(1<<a),n+=1;var o=32-wr(r)+a;if(30<o){var d=a-a%5;o=(s&(1<<d)-1).toString(32),s>>=d,a-=d,Fr=1<<32-wr(r)+a|n<<a|s,Or=o+e}else Fr=1<<o|n<<a|s,Or=e}function Pi(e){e.return!==null&&(jt(e,1),Pc(e,1,0))}function Ti(e){for(;e===Ds;)Ds=Qt[--Gt],Qt[Gt]=null,_s=Qt[--Gt],Qt[Gt]=null;for(;e===yt;)yt=mr[--fr],mr[fr]=null,Or=mr[--fr],mr[fr]=null,Fr=mr[--fr],mr[fr]=null}var lr=null,cr=null,Se=!1,br=null;function Tc(e,r){var n=yr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Cc(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,lr=e,cr=Zr(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,lr=e,cr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=yt!==null?{id:Fr,overflow:Or}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=yr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,lr=e,cr=null,!0):!1;default:return!1}}function Ci(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ii(e){if(Se){var r=cr;if(r){var n=r;if(!Cc(e,r)){if(Ci(e))throw Error(l(418));r=Zr(n.nextSibling);var s=lr;r&&Cc(e,r)?Tc(s,n):(e.flags=e.flags&-4097|2,Se=!1,lr=e)}}else{if(Ci(e))throw Error(l(418));e.flags=e.flags&-4097|2,Se=!1,lr=e}}}function Ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lr=e}function Fs(e){if(e!==lr)return!1;if(!Se)return Ic(e),Se=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!ji(e.type,e.memoizedProps)),r&&(r=cr)){if(Ci(e))throw Ec(),Error(l(418));for(;r;)Tc(e,r),r=Zr(r.nextSibling)}if(Ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){cr=Zr(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}cr=null}}else cr=lr?Zr(e.stateNode.nextSibling):null;return!0}function Ec(){for(var e=cr;e;)e=Zr(e.nextSibling)}function Kt(){cr=lr=null,Se=!1}function Ei(e){br===null?br=[e]:br.push(e)}var Ch=L.ReactCurrentBatchConfig;function Fn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var s=n.stateNode}if(!s)throw Error(l(147,e));var a=s,o=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===o?r.ref:(r=function(d){var p=a.refs;d===null?delete p[o]:p[o]=d},r._stringRef=o,r)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function Os(e,r){throw e=Object.prototype.toString.call(r),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Lc(e){var r=e._init;return r(e._payload)}function zc(e){function r(v,m){if(e){var g=v.deletions;g===null?(v.deletions=[m],v.flags|=16):g.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)r(v,m),m=m.sibling;return null}function s(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function a(v,m){return v=dt(v,m),v.index=0,v.sibling=null,v}function o(v,m,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<m?(v.flags|=2,m):g):(v.flags|=2,m)):(v.flags|=1048576,m)}function d(v){return e&&v.alternate===null&&(v.flags|=2),v}function p(v,m,g,P){return m===null||m.tag!==6?(m=wo(g,v.mode,P),m.return=v,m):(m=a(m,g),m.return=v,m)}function h(v,m,g,P){var F=g.type;return F===E?b(v,m,g.props.children,P,g.key):m!==null&&(m.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===qe&&Lc(F)===m.type)?(P=a(m,g.props),P.ref=Fn(v,m,g),P.return=v,P):(P=ca(g.type,g.key,g.props,null,v.mode,P),P.ref=Fn(v,m,g),P.return=v,P)}function y(v,m,g,P){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=ko(g,v.mode,P),m.return=v,m):(m=a(m,g.children||[]),m.return=v,m)}function b(v,m,g,P,F){return m===null||m.tag!==7?(m=Ct(g,v.mode,P,F),m.return=v,m):(m=a(m,g),m.return=v,m)}function S(v,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=wo(""+m,v.mode,g),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case X:return g=ca(m.type,m.key,m.props,null,v.mode,g),g.ref=Fn(v,null,m),g.return=v,g;case U:return m=ko(m,v.mode,g),m.return=v,m;case qe:var P=m._init;return S(v,P(m._payload),g)}if(hn(m)||O(m))return m=Ct(m,v.mode,g,null),m.return=v,m;Os(v,m)}return null}function k(v,m,g,P){var F=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return F!==null?null:p(v,m,""+g,P);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case X:return g.key===F?h(v,m,g,P):null;case U:return g.key===F?y(v,m,g,P):null;case qe:return F=g._init,k(v,m,F(g._payload),P)}if(hn(g)||O(g))return F!==null?null:b(v,m,g,P,null);Os(v,g)}return null}function R(v,m,g,P,F){if(typeof P=="string"&&P!==""||typeof P=="number")return v=v.get(g)||null,p(m,v,""+P,F);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case X:return v=v.get(P.key===null?g:P.key)||null,h(m,v,P,F);case U:return v=v.get(P.key===null?g:P.key)||null,y(m,v,P,F);case qe:var $=P._init;return R(v,m,g,$(P._payload),F)}if(hn(P)||O(P))return v=v.get(g)||null,b(m,v,P,F,null);Os(m,P)}return null}function M(v,m,g,P){for(var F=null,$=null,V=m,K=m=0,He=null;V!==null&&K<g.length;K++){V.index>K?(He=V,V=null):He=V.sibling;var he=k(v,V,g[K],P);if(he===null){V===null&&(V=He);break}e&&V&&he.alternate===null&&r(v,V),m=o(he,m,K),$===null?F=he:$.sibling=he,$=he,V=He}if(K===g.length)return n(v,V),Se&&jt(v,K),F;if(V===null){for(;K<g.length;K++)V=S(v,g[K],P),V!==null&&(m=o(V,m,K),$===null?F=V:$.sibling=V,$=V);return Se&&jt(v,K),F}for(V=s(v,V);K<g.length;K++)He=R(V,v,K,g[K],P),He!==null&&(e&&He.alternate!==null&&V.delete(He.key===null?K:He.key),m=o(He,m,K),$===null?F=He:$.sibling=He,$=He);return e&&V.forEach(function(ut){return r(v,ut)}),Se&&jt(v,K),F}function D(v,m,g,P){var F=O(g);if(typeof F!="function")throw Error(l(150));if(g=F.call(g),g==null)throw Error(l(151));for(var $=F=null,V=m,K=m=0,He=null,he=g.next();V!==null&&!he.done;K++,he=g.next()){V.index>K?(He=V,V=null):He=V.sibling;var ut=k(v,V,he.value,P);if(ut===null){V===null&&(V=He);break}e&&V&&ut.alternate===null&&r(v,V),m=o(ut,m,K),$===null?F=ut:$.sibling=ut,$=ut,V=He}if(he.done)return n(v,V),Se&&jt(v,K),F;if(V===null){for(;!he.done;K++,he=g.next())he=S(v,he.value,P),he!==null&&(m=o(he,m,K),$===null?F=he:$.sibling=he,$=he);return Se&&jt(v,K),F}for(V=s(v,V);!he.done;K++,he=g.next())he=R(V,v,K,he.value,P),he!==null&&(e&&he.alternate!==null&&V.delete(he.key===null?K:he.key),m=o(he,m,K),$===null?F=he:$.sibling=he,$=he);return e&&V.forEach(function(om){return r(v,om)}),Se&&jt(v,K),F}function Re(v,m,g,P){if(typeof g=="object"&&g!==null&&g.type===E&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case X:e:{for(var F=g.key,$=m;$!==null;){if($.key===F){if(F=g.type,F===E){if($.tag===7){n(v,$.sibling),m=a($,g.props.children),m.return=v,v=m;break e}}else if($.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===qe&&Lc(F)===$.type){n(v,$.sibling),m=a($,g.props),m.ref=Fn(v,$,g),m.return=v,v=m;break e}n(v,$);break}else r(v,$);$=$.sibling}g.type===E?(m=Ct(g.props.children,v.mode,P,g.key),m.return=v,v=m):(P=ca(g.type,g.key,g.props,null,v.mode,P),P.ref=Fn(v,m,g),P.return=v,v=P)}return d(v);case U:e:{for($=g.key;m!==null;){if(m.key===$)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(v,m.sibling),m=a(m,g.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else r(v,m);m=m.sibling}m=ko(g,v.mode,P),m.return=v,v=m}return d(v);case qe:return $=g._init,Re(v,m,$(g._payload),P)}if(hn(g))return M(v,m,g,P);if(O(g))return D(v,m,g,P);Os(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(v,m.sibling),m=a(m,g),m.return=v,v=m):(n(v,m),m=wo(g,v.mode,P),m.return=v,v=m),d(v)):n(v,m)}return Re}var Yt=zc(!0),Rc=zc(!1),Ws=et(null),Bs=null,Xt=null,Li=null;function zi(){Li=Xt=Bs=null}function Ri(e){var r=Ws.current;we(Ws),e._currentValue=r}function Ai(e,r,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,s!==null&&(s.childLanes|=r)):s!==null&&(s.childLanes&r)!==r&&(s.childLanes|=r),e===n)break;e=e.return}}function Jt(e,r){Bs=e,Li=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(tr=!0),e.firstContext=null)}function xr(e){var r=e._currentValue;if(Li!==e)if(e={context:e,memoizedValue:r,next:null},Xt===null){if(Bs===null)throw Error(l(308));Xt=e,Bs.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return r}var Nt=null;function Mi(e){Nt===null?Nt=[e]:Nt.push(e)}function Ac(e,r,n,s){var a=r.interleaved;return a===null?(n.next=n,Mi(r)):(n.next=a.next,a.next=n),r.interleaved=n,Wr(e,s)}function Wr(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function Di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Br(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function st(e,r,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ue&2)!==0){var a=s.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),s.pending=r,Wr(e,n)}return a=s.interleaved,a===null?(r.next=r,Mi(s)):(r.next=a.next,a.next=r),s.interleaved=r,Wr(e,n)}function Hs(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var s=r.lanes;s&=e.pendingLanes,n|=s,r.lanes=n,Ya(e,n)}}function Dc(e,r){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=d:o=o.next=d,n=n.next}while(n!==null);o===null?a=o=r:o=o.next=r}else a=o=r;n={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Us(e,r,n,s){var a=e.updateQueue;nt=!1;var o=a.firstBaseUpdate,d=a.lastBaseUpdate,p=a.shared.pending;if(p!==null){a.shared.pending=null;var h=p,y=h.next;h.next=null,d===null?o=y:d.next=y,d=h;var b=e.alternate;b!==null&&(b=b.updateQueue,p=b.lastBaseUpdate,p!==d&&(p===null?b.firstBaseUpdate=y:p.next=y,b.lastBaseUpdate=h))}if(o!==null){var S=a.baseState;d=0,b=y=h=null,p=o;do{var k=p.lane,R=p.eventTime;if((s&k)===k){b!==null&&(b=b.next={eventTime:R,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var M=e,D=p;switch(k=r,R=n,D.tag){case 1:if(M=D.payload,typeof M=="function"){S=M.call(R,S,k);break e}S=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=D.payload,k=typeof M=="function"?M.call(R,S,k):M,k==null)break e;S=z({},S,k);break e;case 2:nt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,k=a.effects,k===null?a.effects=[p]:k.push(p))}else R={eventTime:R,lane:k,tag:p.tag,payload:p.payload,callback:p.callback,next:null},b===null?(y=b=R,h=S):b=b.next=R,d|=k;if(p=p.next,p===null){if(p=a.shared.pending,p===null)break;k=p,p=k.next,k.next=null,a.lastBaseUpdate=k,a.shared.pending=null}}while(!0);if(b===null&&(h=S),a.baseState=h,a.firstBaseUpdate=y,a.lastBaseUpdate=b,r=a.shared.interleaved,r!==null){a=r;do d|=a.lane,a=a.next;while(a!==r)}else o===null&&(a.shared.lanes=0);bt|=d,e.lanes=d,e.memoizedState=S}}function _c(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var s=e[r],a=s.callback;if(a!==null){if(s.callback=null,s=n,typeof a!="function")throw Error(l(191,a));a.call(s)}}}var On={},Rr=et(On),Wn=et(On),Bn=et(On);function wt(e){if(e===On)throw Error(l(174));return e}function _i(e,r){switch(je(Bn,r),je(Wn,e),je(Rr,On),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Fa(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Fa(r,e)}we(Rr),je(Rr,r)}function Zt(){we(Rr),we(Wn),we(Bn)}function Fc(e){wt(Bn.current);var r=wt(Rr.current),n=Fa(r,e.type);r!==n&&(je(Wn,e),je(Rr,n))}function Fi(e){Wn.current===e&&(we(Rr),we(Wn))}var Te=et(0);function $s(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Oi=[];function Wi(){for(var e=0;e<Oi.length;e++)Oi[e]._workInProgressVersionPrimary=null;Oi.length=0}var Vs=L.ReactCurrentDispatcher,Bi=L.ReactCurrentBatchConfig,kt=0,Ce=null,_e=null,We=null,qs=!1,Hn=!1,Un=0,Ih=0;function Ge(){throw Error(l(321))}function Hi(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!kr(e[n],r[n]))return!1;return!0}function Ui(e,r,n,s,a,o){if(kt=o,Ce=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Vs.current=e===null||e.memoizedState===null?Rh:Ah,e=n(s,a),Hn){o=0;do{if(Hn=!1,Un=0,25<=o)throw Error(l(301));o+=1,We=_e=null,r.updateQueue=null,Vs.current=Mh,e=n(s,a)}while(Hn)}if(Vs.current=Ks,r=_e!==null&&_e.next!==null,kt=0,We=_e=Ce=null,qs=!1,r)throw Error(l(300));return e}function $i(){var e=Un!==0;return Un=0,e}function Ar(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ce.memoizedState=We=e:We=We.next=e,We}function vr(){if(_e===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var r=We===null?Ce.memoizedState:We.next;if(r!==null)We=r,_e=e;else{if(e===null)throw Error(l(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},We===null?Ce.memoizedState=We=e:We=We.next=e}return We}function $n(e,r){return typeof r=="function"?r(e):r}function Vi(e){var r=vr(),n=r.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var s=_e,a=s.baseQueue,o=n.pending;if(o!==null){if(a!==null){var d=a.next;a.next=o.next,o.next=d}s.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,s=s.baseState;var p=d=null,h=null,y=o;do{var b=y.lane;if((kt&b)===b)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),s=y.hasEagerState?y.eagerState:e(s,y.action);else{var S={lane:b,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(p=h=S,d=s):h=h.next=S,Ce.lanes|=b,bt|=b}y=y.next}while(y!==null&&y!==o);h===null?d=s:h.next=p,kr(s,r.memoizedState)||(tr=!0),r.memoizedState=s,r.baseState=d,r.baseQueue=h,n.lastRenderedState=s}if(e=n.interleaved,e!==null){a=e;do o=a.lane,Ce.lanes|=o,bt|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function qi(e){var r=vr(),n=r.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var s=n.dispatch,a=n.pending,o=r.memoizedState;if(a!==null){n.pending=null;var d=a=a.next;do o=e(o,d.action),d=d.next;while(d!==a);kr(o,r.memoizedState)||(tr=!0),r.memoizedState=o,r.baseQueue===null&&(r.baseState=o),n.lastRenderedState=o}return[o,s]}function Oc(){}function Wc(e,r){var n=Ce,s=vr(),a=r(),o=!kr(s.memoizedState,a);if(o&&(s.memoizedState=a,tr=!0),s=s.queue,Qi(Uc.bind(null,n,s,e),[e]),s.getSnapshot!==r||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Vn(9,Hc.bind(null,n,s,a,r),void 0,null),Be===null)throw Error(l(349));(kt&30)!==0||Bc(n,r,a)}return a}function Bc(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Ce.updateQueue,r===null?(r={lastEffect:null,stores:null},Ce.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Hc(e,r,n,s){r.value=n,r.getSnapshot=s,$c(r)&&Vc(e)}function Uc(e,r,n){return n(function(){$c(r)&&Vc(e)})}function $c(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!kr(e,n)}catch{return!0}}function Vc(e){var r=Wr(e,1);r!==null&&Cr(r,e,1,-1)}function qc(e){var r=Ar();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:e},r.queue=e,e=e.dispatch=zh.bind(null,Ce,e),[r.memoizedState,e]}function Vn(e,r,n,s){return e={tag:e,create:r,destroy:n,deps:s,next:null},r=Ce.updateQueue,r===null?(r={lastEffect:null,stores:null},Ce.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,r.lastEffect=e)),e}function Qc(){return vr().memoizedState}function Qs(e,r,n,s){var a=Ar();Ce.flags|=e,a.memoizedState=Vn(1|r,n,void 0,s===void 0?null:s)}function Gs(e,r,n,s){var a=vr();s=s===void 0?null:s;var o=void 0;if(_e!==null){var d=_e.memoizedState;if(o=d.destroy,s!==null&&Hi(s,d.deps)){a.memoizedState=Vn(r,n,o,s);return}}Ce.flags|=e,a.memoizedState=Vn(1|r,n,o,s)}function Gc(e,r){return Qs(8390656,8,e,r)}function Qi(e,r){return Gs(2048,8,e,r)}function Kc(e,r){return Gs(4,2,e,r)}function Yc(e,r){return Gs(4,4,e,r)}function Xc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Jc(e,r,n){return n=n!=null?n.concat([e]):null,Gs(4,4,Xc.bind(null,r,e),n)}function Gi(){}function Zc(e,r){var n=vr();r=r===void 0?null:r;var s=n.memoizedState;return s!==null&&r!==null&&Hi(r,s[1])?s[0]:(n.memoizedState=[e,r],e)}function ed(e,r){var n=vr();r=r===void 0?null:r;var s=n.memoizedState;return s!==null&&r!==null&&Hi(r,s[1])?s[0]:(e=e(),n.memoizedState=[e,r],e)}function rd(e,r,n){return(kt&21)===0?(e.baseState&&(e.baseState=!1,tr=!0),e.memoizedState=n):(kr(n,r)||(n=Ll(),Ce.lanes|=n,bt|=n,e.baseState=!0),r)}function Eh(e,r){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var s=Bi.transition;Bi.transition={};try{e(!1),r()}finally{ve=n,Bi.transition=s}}function td(){return vr().memoizedState}function Lh(e,r,n){var s=lt(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},nd(e))sd(r,n);else if(n=Ac(e,r,n,s),n!==null){var a=Ze();Cr(n,e,s,a),ad(n,r,s)}}function zh(e,r,n){var s=lt(e),a={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(nd(e))sd(r,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=r.lastRenderedReducer,o!==null))try{var d=r.lastRenderedState,p=o(d,n);if(a.hasEagerState=!0,a.eagerState=p,kr(p,d)){var h=r.interleaved;h===null?(a.next=a,Mi(r)):(a.next=h.next,h.next=a),r.interleaved=a;return}}catch{}finally{}n=Ac(e,r,a,s),n!==null&&(a=Ze(),Cr(n,e,s,a),ad(n,r,s))}}function nd(e){var r=e.alternate;return e===Ce||r!==null&&r===Ce}function sd(e,r){Hn=qs=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function ad(e,r,n){if((n&4194240)!==0){var s=r.lanes;s&=e.pendingLanes,n|=s,r.lanes=n,Ya(e,n)}}var Ks={readContext:xr,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Rh={readContext:xr,useCallback:function(e,r){return Ar().memoizedState=[e,r===void 0?null:r],e},useContext:xr,useEffect:Gc,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Qs(4194308,4,Xc.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Qs(4194308,4,e,r)},useInsertionEffect:function(e,r){return Qs(4,2,e,r)},useMemo:function(e,r){var n=Ar();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var s=Ar();return r=n!==void 0?n(r):r,s.memoizedState=s.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},s.queue=e,e=e.dispatch=Lh.bind(null,Ce,e),[s.memoizedState,e]},useRef:function(e){var r=Ar();return e={current:e},r.memoizedState=e},useState:qc,useDebugValue:Gi,useDeferredValue:function(e){return Ar().memoizedState=e},useTransition:function(){var e=qc(!1),r=e[0];return e=Eh.bind(null,e[1]),Ar().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var s=Ce,a=Ar();if(Se){if(n===void 0)throw Error(l(407));n=n()}else{if(n=r(),Be===null)throw Error(l(349));(kt&30)!==0||Bc(s,r,n)}a.memoizedState=n;var o={value:n,getSnapshot:r};return a.queue=o,Gc(Uc.bind(null,s,o,e),[e]),s.flags|=2048,Vn(9,Hc.bind(null,s,o,n,r),void 0,null),n},useId:function(){var e=Ar(),r=Be.identifierPrefix;if(Se){var n=Or,s=Fr;n=(s&~(1<<32-wr(s)-1)).toString(32)+n,r=":"+r+"R"+n,n=Un++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Ih++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Ah={readContext:xr,useCallback:Zc,useContext:xr,useEffect:Qi,useImperativeHandle:Jc,useInsertionEffect:Kc,useLayoutEffect:Yc,useMemo:ed,useReducer:Vi,useRef:Qc,useState:function(){return Vi($n)},useDebugValue:Gi,useDeferredValue:function(e){var r=vr();return rd(r,_e.memoizedState,e)},useTransition:function(){var e=Vi($n)[0],r=vr().memoizedState;return[e,r]},useMutableSource:Oc,useSyncExternalStore:Wc,useId:td,unstable_isNewReconciler:!1},Mh={readContext:xr,useCallback:Zc,useContext:xr,useEffect:Qi,useImperativeHandle:Jc,useInsertionEffect:Kc,useLayoutEffect:Yc,useMemo:ed,useReducer:qi,useRef:Qc,useState:function(){return qi($n)},useDebugValue:Gi,useDeferredValue:function(e){var r=vr();return _e===null?r.memoizedState=e:rd(r,_e.memoizedState,e)},useTransition:function(){var e=qi($n)[0],r=vr().memoizedState;return[e,r]},useMutableSource:Oc,useSyncExternalStore:Wc,useId:td,unstable_isNewReconciler:!1};function Sr(e,r){if(e&&e.defaultProps){r=z({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Ki(e,r,n,s){r=e.memoizedState,n=n(s,r),n=n==null?r:z({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ys={isMounted:function(e){return(e=e._reactInternals)?xt(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var s=Ze(),a=lt(e),o=Br(s,a);o.payload=r,n!=null&&(o.callback=n),r=st(e,o,a),r!==null&&(Cr(r,e,a,s),Hs(r,e,a))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var s=Ze(),a=lt(e),o=Br(s,a);o.tag=1,o.payload=r,n!=null&&(o.callback=n),r=st(e,o,a),r!==null&&(Cr(r,e,a,s),Hs(r,e,a))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=Ze(),s=lt(e),a=Br(n,s);a.tag=2,r!=null&&(a.callback=r),r=st(e,a,s),r!==null&&(Cr(r,e,s,n),Hs(r,e,s))}};function id(e,r,n,s,a,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,d):r.prototype&&r.prototype.isPureReactComponent?!Ln(n,s)||!Ln(a,o):!0}function od(e,r,n){var s=!1,a=rt,o=r.contextType;return typeof o=="object"&&o!==null?o=xr(o):(a=rr(r)?gt:Qe.current,s=r.contextTypes,o=(s=s!=null)?qt(e,a):rt),r=new r(n,o),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ys,e.stateNode=r,r._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),r}function ld(e,r,n,s){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,s),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,s),r.state!==e&&Ys.enqueueReplaceState(r,r.state,null)}function Yi(e,r,n,s){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Di(e);var o=r.contextType;typeof o=="object"&&o!==null?a.context=xr(o):(o=rr(r)?gt:Qe.current,a.context=qt(e,o)),a.state=e.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(Ki(e,r,o,n),a.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Ys.enqueueReplaceState(a,a.state,null),Us(e,n,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function en(e,r){try{var n="",s=r;do n+=ie(s),s=s.return;while(s);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:r,stack:a,digest:null}}function Xi(e,r,n){return{value:e,source:null,stack:n!=null?n:null,digest:r!=null?r:null}}function Ji(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Dh=typeof WeakMap=="function"?WeakMap:Map;function cd(e,r,n){n=Br(-1,n),n.tag=3,n.payload={element:null};var s=r.value;return n.callback=function(){na||(na=!0,mo=s),Ji(e,r)},n}function dd(e,r,n){n=Br(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=r.value;n.payload=function(){return s(a)},n.callback=function(){Ji(e,r)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ji(e,r),typeof s!="function"&&(it===null?it=new Set([this]):it.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),n}function ud(e,r,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Dh;var a=new Set;s.set(r,a)}else a=s.get(r),a===void 0&&(a=new Set,s.set(r,a));a.has(n)||(a.add(n),e=Yh.bind(null,e,r,n),r.then(e,e))}function pd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function hd(e,r,n,s,a){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Br(-1,1),r.tag=2,st(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var _h=L.ReactCurrentOwner,tr=!1;function Je(e,r,n,s){r.child=e===null?Rc(r,null,n,s):Yt(r,e.child,n,s)}function md(e,r,n,s,a){n=n.render;var o=r.ref;return Jt(r,a),s=Ui(e,r,n,s,o,a),n=$i(),e!==null&&!tr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Hr(e,r,a)):(Se&&n&&Pi(r),r.flags|=1,Je(e,r,s,a),r.child)}function fd(e,r,n,s,a){if(e===null){var o=n.type;return typeof o=="function"&&!No(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=o,xd(e,r,o,s,a)):(e=ca(n.type,null,s,r,r.mode,a),e.ref=r.ref,e.return=r,r.child=e)}if(o=e.child,(e.lanes&a)===0){var d=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ln,n(d,s)&&e.ref===r.ref)return Hr(e,r,a)}return r.flags|=1,e=dt(o,s),e.ref=r.ref,e.return=r,r.child=e}function xd(e,r,n,s,a){if(e!==null){var o=e.memoizedProps;if(Ln(o,s)&&e.ref===r.ref)if(tr=!1,r.pendingProps=s=o,(e.lanes&a)!==0)(e.flags&131072)!==0&&(tr=!0);else return r.lanes=e.lanes,Hr(e,r,a)}return Zi(e,r,n,s,a)}function vd(e,r,n){var s=r.pendingProps,a=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(tn,dr),dr|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,je(tn,dr),dr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:n,je(tn,dr),dr|=s}else o!==null?(s=o.baseLanes|n,r.memoizedState=null):s=n,je(tn,dr),dr|=s;return Je(e,r,a,n),r.child}function gd(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function Zi(e,r,n,s,a){var o=rr(n)?gt:Qe.current;return o=qt(r,o),Jt(r,a),n=Ui(e,r,n,s,o,a),s=$i(),e!==null&&!tr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Hr(e,r,a)):(Se&&s&&Pi(r),r.flags|=1,Je(e,r,n,a),r.child)}function yd(e,r,n,s,a){if(rr(n)){var o=!0;As(r)}else o=!1;if(Jt(r,a),r.stateNode===null)Js(e,r),od(r,n,s),Yi(r,n,s,a),s=!0;else if(e===null){var d=r.stateNode,p=r.memoizedProps;d.props=p;var h=d.context,y=n.contextType;typeof y=="object"&&y!==null?y=xr(y):(y=rr(n)?gt:Qe.current,y=qt(r,y));var b=n.getDerivedStateFromProps,S=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function";S||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==s||h!==y)&&ld(r,d,s,y),nt=!1;var k=r.memoizedState;d.state=k,Us(r,s,d,a),h=r.memoizedState,p!==s||k!==h||er.current||nt?(typeof b=="function"&&(Ki(r,n,b,s),h=r.memoizedState),(p=nt||id(r,n,p,s,k,h,y))?(S||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=s,r.memoizedState=h),d.props=s,d.state=h,d.context=y,s=p):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),s=!1)}else{d=r.stateNode,Mc(e,r),p=r.memoizedProps,y=r.type===r.elementType?p:Sr(r.type,p),d.props=y,S=r.pendingProps,k=d.context,h=n.contextType,typeof h=="object"&&h!==null?h=xr(h):(h=rr(n)?gt:Qe.current,h=qt(r,h));var R=n.getDerivedStateFromProps;(b=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==S||k!==h)&&ld(r,d,s,h),nt=!1,k=r.memoizedState,d.state=k,Us(r,s,d,a);var M=r.memoizedState;p!==S||k!==M||er.current||nt?(typeof R=="function"&&(Ki(r,n,R,s),M=r.memoizedState),(y=nt||id(r,n,y,s,k,M,h)||!1)?(b||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,M,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,M,h)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(r.flags|=1024),r.memoizedProps=s,r.memoizedState=M),d.props=s,d.state=M,d.context=h,s=y):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(r.flags|=1024),s=!1)}return eo(e,r,n,s,o,a)}function eo(e,r,n,s,a,o){gd(e,r);var d=(r.flags&128)!==0;if(!s&&!d)return a&&bc(r,n,!1),Hr(e,r,o);s=r.stateNode,_h.current=r;var p=d&&typeof n.getDerivedStateFromError!="function"?null:s.render();return r.flags|=1,e!==null&&d?(r.child=Yt(r,e.child,null,o),r.child=Yt(r,null,p,o)):Je(e,r,p,o),r.memoizedState=s.state,a&&bc(r,n,!0),r.child}function jd(e){var r=e.stateNode;r.pendingContext?wc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&wc(e,r.context,!1),_i(e,r.containerInfo)}function Nd(e,r,n,s,a){return Kt(),Ei(a),r.flags|=256,Je(e,r,n,s),r.child}var ro={dehydrated:null,treeContext:null,retryLane:0};function to(e){return{baseLanes:e,cachePool:null,transitions:null}}function wd(e,r,n){var s=r.pendingProps,a=Te.current,o=!1,d=(r.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(a&2)!==0),p?(o=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),je(Te,a&1),e===null)return Ii(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=s.children,e=s.fallback,o?(s=r.mode,o=r.child,d={mode:"hidden",children:d},(s&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=d):o=da(d,s,0,null),e=Ct(e,s,n,null),o.return=r,e.return=r,o.sibling=e,r.child=o,r.child.memoizedState=to(n),r.memoizedState=ro,e):no(r,d));if(a=e.memoizedState,a!==null&&(p=a.dehydrated,p!==null))return Fh(e,r,d,s,p,a,n);if(o){o=s.fallback,d=r.mode,a=e.child,p=a.sibling;var h={mode:"hidden",children:s.children};return(d&1)===0&&r.child!==a?(s=r.child,s.childLanes=0,s.pendingProps=h,r.deletions=null):(s=dt(a,h),s.subtreeFlags=a.subtreeFlags&14680064),p!==null?o=dt(p,o):(o=Ct(o,d,n,null),o.flags|=2),o.return=r,s.return=r,s.sibling=o,r.child=s,s=o,o=r.child,d=e.child.memoizedState,d=d===null?to(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},o.memoizedState=d,o.childLanes=e.childLanes&~n,r.memoizedState=ro,s}return o=e.child,e=o.sibling,s=dt(o,{mode:"visible",children:s.children}),(r.mode&1)===0&&(s.lanes=n),s.return=r,s.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=s,r.memoizedState=null,s}function no(e,r){return r=da({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Xs(e,r,n,s){return s!==null&&Ei(s),Yt(r,e.child,null,n),e=no(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Fh(e,r,n,s,a,o,d){if(n)return r.flags&256?(r.flags&=-257,s=Xi(Error(l(422))),Xs(e,r,d,s)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(o=s.fallback,a=r.mode,s=da({mode:"visible",children:s.children},a,0,null),o=Ct(o,a,d,null),o.flags|=2,s.return=r,o.return=r,s.sibling=o,r.child=s,(r.mode&1)!==0&&Yt(r,e.child,null,d),r.child.memoizedState=to(d),r.memoizedState=ro,o);if((r.mode&1)===0)return Xs(e,r,d,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var p=s.dgst;return s=p,o=Error(l(419)),s=Xi(o,s,void 0),Xs(e,r,d,s)}if(p=(d&e.childLanes)!==0,tr||p){if(s=Be,s!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(s.suspendedLanes|d))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Wr(e,a),Cr(s,e,a,-1))}return jo(),s=Xi(Error(l(421))),Xs(e,r,d,s)}return a.data==="$?"?(r.flags|=128,r.child=e.child,r=Xh.bind(null,e),a._reactRetry=r,null):(e=o.treeContext,cr=Zr(a.nextSibling),lr=r,Se=!0,br=null,e!==null&&(mr[fr++]=Fr,mr[fr++]=Or,mr[fr++]=yt,Fr=e.id,Or=e.overflow,yt=r),r=no(r,s.children),r.flags|=4096,r)}function kd(e,r,n){e.lanes|=r;var s=e.alternate;s!==null&&(s.lanes|=r),Ai(e.return,r,n)}function so(e,r,n,s,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:a}:(o.isBackwards=r,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=n,o.tailMode=a)}function bd(e,r,n){var s=r.pendingProps,a=s.revealOrder,o=s.tail;if(Je(e,r,s.children,n),s=Te.current,(s&2)!==0)s=s&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kd(e,n,r);else if(e.tag===19)kd(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(je(Te,s),(r.mode&1)===0)r.memoizedState=null;else switch(a){case"forwards":for(n=r.child,a=null;n!==null;)e=n.alternate,e!==null&&$s(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=r.child,r.child=null):(a=n.sibling,n.sibling=null),so(r,!1,a,n,o);break;case"backwards":for(n=null,a=r.child,r.child=null;a!==null;){if(e=a.alternate,e!==null&&$s(e)===null){r.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}so(r,!0,n,null,o);break;case"together":so(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Js(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Hr(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),bt|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(l(153));if(r.child!==null){for(e=r.child,n=dt(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Oh(e,r,n){switch(r.tag){case 3:jd(r),Kt();break;case 5:Fc(r);break;case 1:rr(r.type)&&As(r);break;case 4:_i(r,r.stateNode.containerInfo);break;case 10:var s=r.type._context,a=r.memoizedProps.value;je(Ws,s._currentValue),s._currentValue=a;break;case 13:if(s=r.memoizedState,s!==null)return s.dehydrated!==null?(je(Te,Te.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?wd(e,r,n):(je(Te,Te.current&1),e=Hr(e,r,n),e!==null?e.sibling:null);je(Te,Te.current&1);break;case 19:if(s=(n&r.childLanes)!==0,(e.flags&128)!==0){if(s)return bd(e,r,n);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),je(Te,Te.current),s)break;return null;case 22:case 23:return r.lanes=0,vd(e,r,n)}return Hr(e,r,n)}var Sd,ao,Pd,Td;Sd=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ao=function(){},Pd=function(e,r,n,s){var a=e.memoizedProps;if(a!==s){e=r.stateNode,wt(Rr.current);var o=null;switch(n){case"input":a=Aa(e,a),s=Aa(e,s),o=[];break;case"select":a=z({},a,{value:void 0}),s=z({},s,{value:void 0}),o=[];break;case"textarea":a=_a(e,a),s=_a(e,s),o=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ls)}Oa(n,s);var d;n=null;for(y in a)if(!s.hasOwnProperty(y)&&a.hasOwnProperty(y)&&a[y]!=null)if(y==="style"){var p=a[y];for(d in p)p.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(f.hasOwnProperty(y)?o||(o=[]):(o=o||[]).push(y,null));for(y in s){var h=s[y];if(p=a!=null?a[y]:void 0,s.hasOwnProperty(y)&&h!==p&&(h!=null||p!=null))if(y==="style")if(p){for(d in p)!p.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in h)h.hasOwnProperty(d)&&p[d]!==h[d]&&(n||(n={}),n[d]=h[d])}else n||(o||(o=[]),o.push(y,n)),n=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,p=p?p.__html:void 0,h!=null&&p!==h&&(o=o||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(f.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&Ne("scroll",e),o||p===h||(o=[])):(o=o||[]).push(y,h))}n&&(o=o||[]).push("style",n);var y=o;(r.updateQueue=y)&&(r.flags|=4)}},Td=function(e,r,n,s){n!==s&&(r.flags|=4)};function qn(e,r){if(!Se)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ke(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(r)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=n,r}function Wh(e,r,n){var s=r.pendingProps;switch(Ti(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(r),null;case 1:return rr(r.type)&&Rs(),Ke(r),null;case 3:return s=r.stateNode,Zt(),we(er),we(Qe),Wi(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Fs(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,br!==null&&(vo(br),br=null))),ao(e,r),Ke(r),null;case 5:Fi(r);var a=wt(Bn.current);if(n=r.type,e!==null&&r.stateNode!=null)Pd(e,r,n,s,a),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!s){if(r.stateNode===null)throw Error(l(166));return Ke(r),null}if(e=wt(Rr.current),Fs(r)){s=r.stateNode,n=r.type;var o=r.memoizedProps;switch(s[zr]=r,s[Dn]=o,e=(r.mode&1)!==0,n){case"dialog":Ne("cancel",s),Ne("close",s);break;case"iframe":case"object":case"embed":Ne("load",s);break;case"video":case"audio":for(a=0;a<Rn.length;a++)Ne(Rn[a],s);break;case"source":Ne("error",s);break;case"img":case"image":case"link":Ne("error",s),Ne("load",s);break;case"details":Ne("toggle",s);break;case"input":ol(s,o),Ne("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},Ne("invalid",s);break;case"textarea":dl(s,o),Ne("invalid",s)}Oa(n,o),a=null;for(var d in o)if(o.hasOwnProperty(d)){var p=o[d];d==="children"?typeof p=="string"?s.textContent!==p&&(o.suppressHydrationWarning!==!0&&Es(s.textContent,p,e),a=["children",p]):typeof p=="number"&&s.textContent!==""+p&&(o.suppressHydrationWarning!==!0&&Es(s.textContent,p,e),a=["children",""+p]):f.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&Ne("scroll",s)}switch(n){case"input":qr(s),cl(s,o,!0);break;case"textarea":qr(s),pl(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=Ls)}s=a,r.updateQueue=s,s!==null&&(r.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=d.createElement(n,{is:s.is}):(e=d.createElement(n),n==="select"&&(d=e,s.multiple?d.multiple=!0:s.size&&(d.size=s.size))):e=d.createElementNS(e,n),e[zr]=r,e[Dn]=s,Sd(e,r,!1,!1),r.stateNode=e;e:{switch(d=Wa(n,s),n){case"dialog":Ne("cancel",e),Ne("close",e),a=s;break;case"iframe":case"object":case"embed":Ne("load",e),a=s;break;case"video":case"audio":for(a=0;a<Rn.length;a++)Ne(Rn[a],e);a=s;break;case"source":Ne("error",e),a=s;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),a=s;break;case"details":Ne("toggle",e),a=s;break;case"input":ol(e,s),a=Aa(e,s),Ne("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=z({},s,{value:void 0}),Ne("invalid",e);break;case"textarea":dl(e,s),a=_a(e,s),Ne("invalid",e);break;default:a=s}Oa(n,a),p=a;for(o in p)if(p.hasOwnProperty(o)){var h=p[o];o==="style"?xl(e,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&ml(e,h)):o==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&mn(e,h):typeof h=="number"&&mn(e,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(f.hasOwnProperty(o)?h!=null&&o==="onScroll"&&Ne("scroll",e):h!=null&&te(e,o,h,d))}switch(n){case"input":qr(e),cl(e,s,!1);break;case"textarea":qr(e),pl(e);break;case"option":s.value!=null&&e.setAttribute("value",""+le(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?At(e,!!s.multiple,o,!1):s.defaultValue!=null&&At(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ls)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ke(r),null;case 6:if(e&&r.stateNode!=null)Td(e,r,e.memoizedProps,s);else{if(typeof s!="string"&&r.stateNode===null)throw Error(l(166));if(n=wt(Bn.current),wt(Rr.current),Fs(r)){if(s=r.stateNode,n=r.memoizedProps,s[zr]=r,(o=s.nodeValue!==n)&&(e=lr,e!==null))switch(e.tag){case 3:Es(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Es(s.nodeValue,n,(e.mode&1)!==0)}o&&(r.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[zr]=r,r.stateNode=s}return Ke(r),null;case 13:if(we(Te),s=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&cr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ec(),Kt(),r.flags|=98560,o=!1;else if(o=Fs(r),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=r.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[zr]=r}else Kt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ke(r),o=!1}else br!==null&&(vo(br),br=null),o=!0;if(!o)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Te.current&1)!==0?Fe===0&&(Fe=3):jo())),r.updateQueue!==null&&(r.flags|=4),Ke(r),null);case 4:return Zt(),ao(e,r),e===null&&An(r.stateNode.containerInfo),Ke(r),null;case 10:return Ri(r.type._context),Ke(r),null;case 17:return rr(r.type)&&Rs(),Ke(r),null;case 19:if(we(Te),o=r.memoizedState,o===null)return Ke(r),null;if(s=(r.flags&128)!==0,d=o.rendering,d===null)if(s)qn(o,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=$s(e),d!==null){for(r.flags|=128,qn(o,!1),s=d.updateQueue,s!==null&&(r.updateQueue=s,r.flags|=4),r.subtreeFlags=0,s=n,n=r.child;n!==null;)o=n,e=s,o.flags&=14680066,d=o.alternate,d===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=d.childLanes,o.lanes=d.lanes,o.child=d.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=d.memoizedProps,o.memoizedState=d.memoizedState,o.updateQueue=d.updateQueue,o.type=d.type,e=d.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(Te,Te.current&1|2),r.child}e=e.sibling}o.tail!==null&&ze()>nn&&(r.flags|=128,s=!0,qn(o,!1),r.lanes=4194304)}else{if(!s)if(e=$s(d),e!==null){if(r.flags|=128,s=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),qn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Se)return Ke(r),null}else 2*ze()-o.renderingStartTime>nn&&n!==1073741824&&(r.flags|=128,s=!0,qn(o,!1),r.lanes=4194304);o.isBackwards?(d.sibling=r.child,r.child=d):(n=o.last,n!==null?n.sibling=d:r.child=d,o.last=d)}return o.tail!==null?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.renderingStartTime=ze(),r.sibling=null,n=Te.current,je(Te,s?n&1|2:n&1),r):(Ke(r),null);case 22:case 23:return yo(),s=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(r.flags|=8192),s&&(r.mode&1)!==0?(dr&1073741824)!==0&&(Ke(r),r.subtreeFlags&6&&(r.flags|=8192)):Ke(r),null;case 24:return null;case 25:return null}throw Error(l(156,r.tag))}function Bh(e,r){switch(Ti(r),r.tag){case 1:return rr(r.type)&&Rs(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Zt(),we(er),we(Qe),Wi(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Fi(r),null;case 13:if(we(Te),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(l(340));Kt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return we(Te),null;case 4:return Zt(),null;case 10:return Ri(r.type._context),null;case 22:case 23:return yo(),null;case 24:return null;default:return null}}var Zs=!1,Ye=!1,Hh=typeof WeakSet=="function"?WeakSet:Set,A=null;function rn(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){Ee(e,r,s)}else n.current=null}function io(e,r,n){try{n()}catch(s){Ee(e,r,s)}}var Cd=!1;function Uh(e,r){if(gi=ys,e=ic(),di(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var a=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var d=0,p=-1,h=-1,y=0,b=0,S=e,k=null;r:for(;;){for(var R;S!==n||a!==0&&S.nodeType!==3||(p=d+a),S!==o||s!==0&&S.nodeType!==3||(h=d+s),S.nodeType===3&&(d+=S.nodeValue.length),(R=S.firstChild)!==null;)k=S,S=R;for(;;){if(S===e)break r;if(k===n&&++y===a&&(p=d),k===o&&++b===s&&(h=d),(R=S.nextSibling)!==null)break;S=k,k=S.parentNode}S=R}n=p===-1||h===-1?null:{start:p,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(yi={focusedElem:e,selectionRange:n},ys=!1,A=r;A!==null;)if(r=A,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,A=e;else for(;A!==null;){r=A;try{var M=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var D=M.memoizedProps,Re=M.memoizedState,v=r.stateNode,m=v.getSnapshotBeforeUpdate(r.elementType===r.type?D:Sr(r.type,D),Re);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=r.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(P){Ee(r,r.return,P)}if(e=r.sibling,e!==null){e.return=r.return,A=e;break}A=r.return}return M=Cd,Cd=!1,M}function Qn(e,r,n){var s=r.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&io(r,n,o)}a=a.next}while(a!==s)}}function ea(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==r)}}function oo(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Id(e){var r=e.alternate;r!==null&&(e.alternate=null,Id(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[zr],delete r[Dn],delete r[ki],delete r[Sh],delete r[Ph])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ed(e){return e.tag===5||e.tag===3||e.tag===4}function Ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lo(e,r,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Ls));else if(s!==4&&(e=e.child,e!==null))for(lo(e,r,n),e=e.sibling;e!==null;)lo(e,r,n),e=e.sibling}function co(e,r,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(co(e,r,n),e=e.sibling;e!==null;)co(e,r,n),e=e.sibling}var Ue=null,Pr=!1;function at(e,r,n){for(n=n.child;n!==null;)zd(e,r,n),n=n.sibling}function zd(e,r,n){if(Lr&&typeof Lr.onCommitFiberUnmount=="function")try{Lr.onCommitFiberUnmount(hs,n)}catch{}switch(n.tag){case 5:Ye||rn(n,r);case 6:var s=Ue,a=Pr;Ue=null,at(e,r,n),Ue=s,Pr=a,Ue!==null&&(Pr?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Pr?(e=Ue,n=n.stateNode,e.nodeType===8?wi(e.parentNode,n):e.nodeType===1&&wi(e,n),Sn(e)):wi(Ue,n.stateNode));break;case 4:s=Ue,a=Pr,Ue=n.stateNode.containerInfo,Pr=!0,at(e,r,n),Ue=s,Pr=a;break;case 0:case 11:case 14:case 15:if(!Ye&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var o=a,d=o.destroy;o=o.tag,d!==void 0&&((o&2)!==0||(o&4)!==0)&&io(n,r,d),a=a.next}while(a!==s)}at(e,r,n);break;case 1:if(!Ye&&(rn(n,r),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(p){Ee(n,r,p)}at(e,r,n);break;case 21:at(e,r,n);break;case 22:n.mode&1?(Ye=(s=Ye)||n.memoizedState!==null,at(e,r,n),Ye=s):at(e,r,n);break;default:at(e,r,n)}}function Rd(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hh),r.forEach(function(s){var a=Jh.bind(null,e,s);n.has(s)||(n.add(s),s.then(a,a))})}}function Tr(e,r){var n=r.deletions;if(n!==null)for(var s=0;s<n.length;s++){var a=n[s];try{var o=e,d=r,p=d;e:for(;p!==null;){switch(p.tag){case 5:Ue=p.stateNode,Pr=!1;break e;case 3:Ue=p.stateNode.containerInfo,Pr=!0;break e;case 4:Ue=p.stateNode.containerInfo,Pr=!0;break e}p=p.return}if(Ue===null)throw Error(l(160));zd(o,d,a),Ue=null,Pr=!1;var h=a.alternate;h!==null&&(h.return=null),a.return=null}catch(y){Ee(a,r,y)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ad(r,e),r=r.sibling}function Ad(e,r){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tr(r,e),Mr(e),s&4){try{Qn(3,e,e.return),ea(3,e)}catch(D){Ee(e,e.return,D)}try{Qn(5,e,e.return)}catch(D){Ee(e,e.return,D)}}break;case 1:Tr(r,e),Mr(e),s&512&&n!==null&&rn(n,n.return);break;case 5:if(Tr(r,e),Mr(e),s&512&&n!==null&&rn(n,n.return),e.flags&32){var a=e.stateNode;try{mn(a,"")}catch(D){Ee(e,e.return,D)}}if(s&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,d=n!==null?n.memoizedProps:o,p=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{p==="input"&&o.type==="radio"&&o.name!=null&&ll(a,o),Wa(p,d);var y=Wa(p,o);for(d=0;d<h.length;d+=2){var b=h[d],S=h[d+1];b==="style"?xl(a,S):b==="dangerouslySetInnerHTML"?ml(a,S):b==="children"?mn(a,S):te(a,b,S,y)}switch(p){case"input":Ma(a,o);break;case"textarea":ul(a,o);break;case"select":var k=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var R=o.value;R!=null?At(a,!!o.multiple,R,!1):k!==!!o.multiple&&(o.defaultValue!=null?At(a,!!o.multiple,o.defaultValue,!0):At(a,!!o.multiple,o.multiple?[]:"",!1))}a[Dn]=o}catch(D){Ee(e,e.return,D)}}break;case 6:if(Tr(r,e),Mr(e),s&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(D){Ee(e,e.return,D)}}break;case 3:if(Tr(r,e),Mr(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Sn(r.containerInfo)}catch(D){Ee(e,e.return,D)}break;case 4:Tr(r,e),Mr(e);break;case 13:Tr(r,e),Mr(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(ho=ze())),s&4&&Rd(e);break;case 22:if(b=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(y=Ye)||b,Tr(r,e),Ye=y):Tr(r,e),Mr(e),s&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!b&&(e.mode&1)!==0)for(A=e,b=e.child;b!==null;){for(S=A=b;A!==null;){switch(k=A,R=k.child,k.tag){case 0:case 11:case 14:case 15:Qn(4,k,k.return);break;case 1:rn(k,k.return);var M=k.stateNode;if(typeof M.componentWillUnmount=="function"){s=k,n=k.return;try{r=s,M.props=r.memoizedProps,M.state=r.memoizedState,M.componentWillUnmount()}catch(D){Ee(s,n,D)}}break;case 5:rn(k,k.return);break;case 22:if(k.memoizedState!==null){_d(S);continue}}R!==null?(R.return=k,A=R):_d(S)}b=b.sibling}e:for(b=null,S=e;;){if(S.tag===5){if(b===null){b=S;try{a=S.stateNode,y?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(p=S.stateNode,h=S.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,p.style.display=fl("display",d))}catch(D){Ee(e,e.return,D)}}}else if(S.tag===6){if(b===null)try{S.stateNode.nodeValue=y?"":S.memoizedProps}catch(D){Ee(e,e.return,D)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;b===S&&(b=null),S=S.return}b===S&&(b=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Tr(r,e),Mr(e),s&4&&Rd(e);break;case 21:break;default:Tr(r,e),Mr(e)}}function Mr(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Ed(n)){var s=n;break e}n=n.return}throw Error(l(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(mn(a,""),s.flags&=-33);var o=Ld(e);co(e,o,a);break;case 3:case 4:var d=s.stateNode.containerInfo,p=Ld(e);lo(e,p,d);break;default:throw Error(l(161))}}catch(h){Ee(e,e.return,h)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function $h(e,r,n){A=e,Md(e)}function Md(e,r,n){for(var s=(e.mode&1)!==0;A!==null;){var a=A,o=a.child;if(a.tag===22&&s){var d=a.memoizedState!==null||Zs;if(!d){var p=a.alternate,h=p!==null&&p.memoizedState!==null||Ye;p=Zs;var y=Ye;if(Zs=d,(Ye=h)&&!y)for(A=a;A!==null;)d=A,h=d.child,d.tag===22&&d.memoizedState!==null?Fd(a):h!==null?(h.return=d,A=h):Fd(a);for(;o!==null;)A=o,Md(o),o=o.sibling;A=a,Zs=p,Ye=y}Dd(e)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,A=o):Dd(e)}}function Dd(e){for(;A!==null;){var r=A;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ye||ea(5,r);break;case 1:var s=r.stateNode;if(r.flags&4&&!Ye)if(n===null)s.componentDidMount();else{var a=r.elementType===r.type?n.memoizedProps:Sr(r.type,n.memoizedProps);s.componentDidUpdate(a,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=r.updateQueue;o!==null&&_c(r,o,s);break;case 3:var d=r.updateQueue;if(d!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}_c(r,d,n)}break;case 5:var p=r.stateNode;if(n===null&&r.flags&4){n=p;var h=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var y=r.alternate;if(y!==null){var b=y.memoizedState;if(b!==null){var S=b.dehydrated;S!==null&&Sn(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ye||r.flags&512&&oo(r)}catch(k){Ee(r,r.return,k)}}if(r===e){A=null;break}if(n=r.sibling,n!==null){n.return=r.return,A=n;break}A=r.return}}function _d(e){for(;A!==null;){var r=A;if(r===e){A=null;break}var n=r.sibling;if(n!==null){n.return=r.return,A=n;break}A=r.return}}function Fd(e){for(;A!==null;){var r=A;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{ea(4,r)}catch(h){Ee(r,n,h)}break;case 1:var s=r.stateNode;if(typeof s.componentDidMount=="function"){var a=r.return;try{s.componentDidMount()}catch(h){Ee(r,a,h)}}var o=r.return;try{oo(r)}catch(h){Ee(r,o,h)}break;case 5:var d=r.return;try{oo(r)}catch(h){Ee(r,d,h)}}}catch(h){Ee(r,r.return,h)}if(r===e){A=null;break}var p=r.sibling;if(p!==null){p.return=r.return,A=p;break}A=r.return}}var Vh=Math.ceil,ra=L.ReactCurrentDispatcher,uo=L.ReactCurrentOwner,gr=L.ReactCurrentBatchConfig,ue=0,Be=null,Ae=null,$e=0,dr=0,tn=et(0),Fe=0,Gn=null,bt=0,ta=0,po=0,Kn=null,nr=null,ho=0,nn=1/0,Ur=null,na=!1,mo=null,it=null,sa=!1,ot=null,aa=0,Yn=0,fo=null,ia=-1,oa=0;function Ze(){return(ue&6)!==0?ze():ia!==-1?ia:ia=ze()}function lt(e){return(e.mode&1)===0?1:(ue&2)!==0&&$e!==0?$e&-$e:Ch.transition!==null?(oa===0&&(oa=Ll()),oa):(e=ve,e!==0||(e=window.event,e=e===void 0?16:Wl(e.type)),e)}function Cr(e,r,n,s){if(50<Yn)throw Yn=0,fo=null,Error(l(185));jn(e,n,s),((ue&2)===0||e!==Be)&&(e===Be&&((ue&2)===0&&(ta|=n),Fe===4&&ct(e,$e)),sr(e,s),n===1&&ue===0&&(r.mode&1)===0&&(nn=ze()+500,Ms&&tt()))}function sr(e,r){var n=e.callbackNode;Cp(e,r);var s=xs(e,e===Be?$e:0);if(s===0)n!==null&&Cl(n),e.callbackNode=null,e.callbackPriority=0;else if(r=s&-s,e.callbackPriority!==r){if(n!=null&&Cl(n),r===1)e.tag===0?Th(Wd.bind(null,e)):Sc(Wd.bind(null,e)),kh(function(){(ue&6)===0&&tt()}),n=null;else{switch(zl(s)){case 1:n=Qa;break;case 4:n=Il;break;case 16:n=ps;break;case 536870912:n=El;break;default:n=ps}n=Gd(n,Od.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Od(e,r){if(ia=-1,oa=0,(ue&6)!==0)throw Error(l(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var s=xs(e,e===Be?$e:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||r)r=la(e,s);else{r=s;var a=ue;ue|=2;var o=Hd();(Be!==e||$e!==r)&&(Ur=null,nn=ze()+500,Pt(e,r));do try{Gh();break}catch(p){Bd(e,p)}while(!0);zi(),ra.current=o,ue=a,Ae!==null?r=0:(Be=null,$e=0,r=Fe)}if(r!==0){if(r===2&&(a=Ga(e),a!==0&&(s=a,r=xo(e,a))),r===1)throw n=Gn,Pt(e,0),ct(e,s),sr(e,ze()),n;if(r===6)ct(e,s);else{if(a=e.current.alternate,(s&30)===0&&!qh(a)&&(r=la(e,s),r===2&&(o=Ga(e),o!==0&&(s=o,r=xo(e,o))),r===1))throw n=Gn,Pt(e,0),ct(e,s),sr(e,ze()),n;switch(e.finishedWork=a,e.finishedLanes=s,r){case 0:case 1:throw Error(l(345));case 2:Tt(e,nr,Ur);break;case 3:if(ct(e,s),(s&130023424)===s&&(r=ho+500-ze(),10<r)){if(xs(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){Ze(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ni(Tt.bind(null,e,nr,Ur),r);break}Tt(e,nr,Ur);break;case 4:if(ct(e,s),(s&4194240)===s)break;for(r=e.eventTimes,a=-1;0<s;){var d=31-wr(s);o=1<<d,d=r[d],d>a&&(a=d),s&=~o}if(s=a,s=ze()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Vh(s/1960))-s,10<s){e.timeoutHandle=Ni(Tt.bind(null,e,nr,Ur),s);break}Tt(e,nr,Ur);break;case 5:Tt(e,nr,Ur);break;default:throw Error(l(329))}}}return sr(e,ze()),e.callbackNode===n?Od.bind(null,e):null}function xo(e,r){var n=Kn;return e.current.memoizedState.isDehydrated&&(Pt(e,r).flags|=256),e=la(e,r),e!==2&&(r=nr,nr=n,r!==null&&vo(r)),e}function vo(e){nr===null?nr=e:nr.push.apply(nr,e)}function qh(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var a=n[s],o=a.getSnapshot;a=a.value;try{if(!kr(o(),a))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ct(e,r){for(r&=~po,r&=~ta,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-wr(r),s=1<<n;e[n]=-1,r&=~s}}function Wd(e){if((ue&6)!==0)throw Error(l(327));sn();var r=xs(e,0);if((r&1)===0)return sr(e,ze()),null;var n=la(e,r);if(e.tag!==0&&n===2){var s=Ga(e);s!==0&&(r=s,n=xo(e,s))}if(n===1)throw n=Gn,Pt(e,0),ct(e,r),sr(e,ze()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Tt(e,nr,Ur),sr(e,ze()),null}function go(e,r){var n=ue;ue|=1;try{return e(r)}finally{ue=n,ue===0&&(nn=ze()+500,Ms&&tt())}}function St(e){ot!==null&&ot.tag===0&&(ue&6)===0&&sn();var r=ue;ue|=1;var n=gr.transition,s=ve;try{if(gr.transition=null,ve=1,e)return e()}finally{ve=s,gr.transition=n,ue=r,(ue&6)===0&&tt()}}function yo(){dr=tn.current,we(tn)}function Pt(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wh(n)),Ae!==null)for(n=Ae.return;n!==null;){var s=n;switch(Ti(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Rs();break;case 3:Zt(),we(er),we(Qe),Wi();break;case 5:Fi(s);break;case 4:Zt();break;case 13:we(Te);break;case 19:we(Te);break;case 10:Ri(s.type._context);break;case 22:case 23:yo()}n=n.return}if(Be=e,Ae=e=dt(e.current,null),$e=dr=r,Fe=0,Gn=null,po=ta=bt=0,nr=Kn=null,Nt!==null){for(r=0;r<Nt.length;r++)if(n=Nt[r],s=n.interleaved,s!==null){n.interleaved=null;var a=s.next,o=n.pending;if(o!==null){var d=o.next;o.next=a,s.next=d}n.pending=s}Nt=null}return e}function Bd(e,r){do{var n=Ae;try{if(zi(),Vs.current=Ks,qs){for(var s=Ce.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}qs=!1}if(kt=0,We=_e=Ce=null,Hn=!1,Un=0,uo.current=null,n===null||n.return===null){Fe=1,Gn=r,Ae=null;break}e:{var o=e,d=n.return,p=n,h=r;if(r=$e,p.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,b=p,S=b.tag;if((b.mode&1)===0&&(S===0||S===11||S===15)){var k=b.alternate;k?(b.updateQueue=k.updateQueue,b.memoizedState=k.memoizedState,b.lanes=k.lanes):(b.updateQueue=null,b.memoizedState=null)}var R=pd(d);if(R!==null){R.flags&=-257,hd(R,d,p,o,r),R.mode&1&&ud(o,y,r),r=R,h=y;var M=r.updateQueue;if(M===null){var D=new Set;D.add(h),r.updateQueue=D}else M.add(h);break e}else{if((r&1)===0){ud(o,y,r),jo();break e}h=Error(l(426))}}else if(Se&&p.mode&1){var Re=pd(d);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),hd(Re,d,p,o,r),Ei(en(h,p));break e}}o=h=en(h,p),Fe!==4&&(Fe=2),Kn===null?Kn=[o]:Kn.push(o),o=d;do{switch(o.tag){case 3:o.flags|=65536,r&=-r,o.lanes|=r;var v=cd(o,h,r);Dc(o,v);break e;case 1:p=h;var m=o.type,g=o.stateNode;if((o.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(it===null||!it.has(g)))){o.flags|=65536,r&=-r,o.lanes|=r;var P=dd(o,p,r);Dc(o,P);break e}}o=o.return}while(o!==null)}$d(n)}catch(F){r=F,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function Hd(){var e=ra.current;return ra.current=Ks,e===null?Ks:e}function jo(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Be===null||(bt&268435455)===0&&(ta&268435455)===0||ct(Be,$e)}function la(e,r){var n=ue;ue|=2;var s=Hd();(Be!==e||$e!==r)&&(Ur=null,Pt(e,r));do try{Qh();break}catch(a){Bd(e,a)}while(!0);if(zi(),ue=n,ra.current=s,Ae!==null)throw Error(l(261));return Be=null,$e=0,Fe}function Qh(){for(;Ae!==null;)Ud(Ae)}function Gh(){for(;Ae!==null&&!yp();)Ud(Ae)}function Ud(e){var r=Qd(e.alternate,e,dr);e.memoizedProps=e.pendingProps,r===null?$d(e):Ae=r,uo.current=null}function $d(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=Wh(n,r,dr),n!==null){Ae=n;return}}else{if(n=Bh(n,r),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Ae=null;return}}if(r=r.sibling,r!==null){Ae=r;return}Ae=r=e}while(r!==null);Fe===0&&(Fe=5)}function Tt(e,r,n){var s=ve,a=gr.transition;try{gr.transition=null,ve=1,Kh(e,r,n,s)}finally{gr.transition=a,ve=s}return null}function Kh(e,r,n,s){do sn();while(ot!==null);if((ue&6)!==0)throw Error(l(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ip(e,o),e===Be&&(Ae=Be=null,$e=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||sa||(sa=!0,Gd(ps,function(){return sn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=gr.transition,gr.transition=null;var d=ve;ve=1;var p=ue;ue|=4,uo.current=null,Uh(e,n),Ad(n,e),fh(yi),ys=!!gi,yi=gi=null,e.current=n,$h(n),jp(),ue=p,ve=d,gr.transition=o}else e.current=n;if(sa&&(sa=!1,ot=e,aa=a),o=e.pendingLanes,o===0&&(it=null),kp(n.stateNode),sr(e,ze()),r!==null)for(s=e.onRecoverableError,n=0;n<r.length;n++)a=r[n],s(a.value,{componentStack:a.stack,digest:a.digest});if(na)throw na=!1,e=mo,mo=null,e;return(aa&1)!==0&&e.tag!==0&&sn(),o=e.pendingLanes,(o&1)!==0?e===fo?Yn++:(Yn=0,fo=e):Yn=0,tt(),null}function sn(){if(ot!==null){var e=zl(aa),r=gr.transition,n=ve;try{if(gr.transition=null,ve=16>e?16:e,ot===null)var s=!1;else{if(e=ot,ot=null,aa=0,(ue&6)!==0)throw Error(l(331));var a=ue;for(ue|=4,A=e.current;A!==null;){var o=A,d=o.child;if((A.flags&16)!==0){var p=o.deletions;if(p!==null){for(var h=0;h<p.length;h++){var y=p[h];for(A=y;A!==null;){var b=A;switch(b.tag){case 0:case 11:case 15:Qn(8,b,o)}var S=b.child;if(S!==null)S.return=b,A=S;else for(;A!==null;){b=A;var k=b.sibling,R=b.return;if(Id(b),b===y){A=null;break}if(k!==null){k.return=R,A=k;break}A=R}}}var M=o.alternate;if(M!==null){var D=M.child;if(D!==null){M.child=null;do{var Re=D.sibling;D.sibling=null,D=Re}while(D!==null)}}A=o}}if((o.subtreeFlags&2064)!==0&&d!==null)d.return=o,A=d;else e:for(;A!==null;){if(o=A,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Qn(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,A=v;break e}A=o.return}}var m=e.current;for(A=m;A!==null;){d=A;var g=d.child;if((d.subtreeFlags&2064)!==0&&g!==null)g.return=d,A=g;else e:for(d=m;A!==null;){if(p=A,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:ea(9,p)}}catch(F){Ee(p,p.return,F)}if(p===d){A=null;break e}var P=p.sibling;if(P!==null){P.return=p.return,A=P;break e}A=p.return}}if(ue=a,tt(),Lr&&typeof Lr.onPostCommitFiberRoot=="function")try{Lr.onPostCommitFiberRoot(hs,e)}catch{}s=!0}return s}finally{ve=n,gr.transition=r}}return!1}function Vd(e,r,n){r=en(n,r),r=cd(e,r,1),e=st(e,r,1),r=Ze(),e!==null&&(jn(e,1,r),sr(e,r))}function Ee(e,r,n){if(e.tag===3)Vd(e,e,n);else for(;r!==null;){if(r.tag===3){Vd(r,e,n);break}else if(r.tag===1){var s=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(it===null||!it.has(s))){e=en(n,e),e=dd(r,e,1),r=st(r,e,1),e=Ze(),r!==null&&(jn(r,1,e),sr(r,e));break}}r=r.return}}function Yh(e,r,n){var s=e.pingCache;s!==null&&s.delete(r),r=Ze(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&($e&n)===n&&(Fe===4||Fe===3&&($e&130023424)===$e&&500>ze()-ho?Pt(e,0):po|=n),sr(e,r)}function qd(e,r){r===0&&((e.mode&1)===0?r=1:(r=fs,fs<<=1,(fs&130023424)===0&&(fs=4194304)));var n=Ze();e=Wr(e,r),e!==null&&(jn(e,r,n),sr(e,n))}function Xh(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),qd(e,n)}function Jh(e,r){var n=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(l(314))}s!==null&&s.delete(r),qd(e,n)}var Qd;Qd=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||er.current)tr=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return tr=!1,Oh(e,r,n);tr=(e.flags&131072)!==0}else tr=!1,Se&&(r.flags&1048576)!==0&&Pc(r,_s,r.index);switch(r.lanes=0,r.tag){case 2:var s=r.type;Js(e,r),e=r.pendingProps;var a=qt(r,Qe.current);Jt(r,n),a=Ui(null,r,s,e,a,n);var o=$i();return r.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,rr(s)?(o=!0,As(r)):o=!1,r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Di(r),a.updater=Ys,r.stateNode=a,a._reactInternals=r,Yi(r,s,e,n),r=eo(null,r,s,!0,o,n)):(r.tag=0,Se&&o&&Pi(r),Je(null,r,a,n),r=r.child),r;case 16:s=r.elementType;e:{switch(Js(e,r),e=r.pendingProps,a=s._init,s=a(s._payload),r.type=s,a=r.tag=em(s),e=Sr(s,e),a){case 0:r=Zi(null,r,s,e,n);break e;case 1:r=yd(null,r,s,e,n);break e;case 11:r=md(null,r,s,e,n);break e;case 14:r=fd(null,r,s,Sr(s.type,e),n);break e}throw Error(l(306,s,""))}return r;case 0:return s=r.type,a=r.pendingProps,a=r.elementType===s?a:Sr(s,a),Zi(e,r,s,a,n);case 1:return s=r.type,a=r.pendingProps,a=r.elementType===s?a:Sr(s,a),yd(e,r,s,a,n);case 3:e:{if(jd(r),e===null)throw Error(l(387));s=r.pendingProps,o=r.memoizedState,a=o.element,Mc(e,r),Us(r,s,null,n);var d=r.memoizedState;if(s=d.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=o,r.memoizedState=o,r.flags&256){a=en(Error(l(423)),r),r=Nd(e,r,s,n,a);break e}else if(s!==a){a=en(Error(l(424)),r),r=Nd(e,r,s,n,a);break e}else for(cr=Zr(r.stateNode.containerInfo.firstChild),lr=r,Se=!0,br=null,n=Rc(r,null,s,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kt(),s===a){r=Hr(e,r,n);break e}Je(e,r,s,n)}r=r.child}return r;case 5:return Fc(r),e===null&&Ii(r),s=r.type,a=r.pendingProps,o=e!==null?e.memoizedProps:null,d=a.children,ji(s,a)?d=null:o!==null&&ji(s,o)&&(r.flags|=32),gd(e,r),Je(e,r,d,n),r.child;case 6:return e===null&&Ii(r),null;case 13:return wd(e,r,n);case 4:return _i(r,r.stateNode.containerInfo),s=r.pendingProps,e===null?r.child=Yt(r,null,s,n):Je(e,r,s,n),r.child;case 11:return s=r.type,a=r.pendingProps,a=r.elementType===s?a:Sr(s,a),md(e,r,s,a,n);case 7:return Je(e,r,r.pendingProps,n),r.child;case 8:return Je(e,r,r.pendingProps.children,n),r.child;case 12:return Je(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(s=r.type._context,a=r.pendingProps,o=r.memoizedProps,d=a.value,je(Ws,s._currentValue),s._currentValue=d,o!==null)if(kr(o.value,d)){if(o.children===a.children&&!er.current){r=Hr(e,r,n);break e}}else for(o=r.child,o!==null&&(o.return=r);o!==null;){var p=o.dependencies;if(p!==null){d=o.child;for(var h=p.firstContext;h!==null;){if(h.context===s){if(o.tag===1){h=Br(-1,n&-n),h.tag=2;var y=o.updateQueue;if(y!==null){y=y.shared;var b=y.pending;b===null?h.next=h:(h.next=b.next,b.next=h),y.pending=h}}o.lanes|=n,h=o.alternate,h!==null&&(h.lanes|=n),Ai(o.return,n,r),p.lanes|=n;break}h=h.next}}else if(o.tag===10)d=o.type===r.type?null:o.child;else if(o.tag===18){if(d=o.return,d===null)throw Error(l(341));d.lanes|=n,p=d.alternate,p!==null&&(p.lanes|=n),Ai(d,n,r),d=o.sibling}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===r){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}Je(e,r,a.children,n),r=r.child}return r;case 9:return a=r.type,s=r.pendingProps.children,Jt(r,n),a=xr(a),s=s(a),r.flags|=1,Je(e,r,s,n),r.child;case 14:return s=r.type,a=Sr(s,r.pendingProps),a=Sr(s.type,a),fd(e,r,s,a,n);case 15:return xd(e,r,r.type,r.pendingProps,n);case 17:return s=r.type,a=r.pendingProps,a=r.elementType===s?a:Sr(s,a),Js(e,r),r.tag=1,rr(s)?(e=!0,As(r)):e=!1,Jt(r,n),od(r,s,a),Yi(r,s,a,n),eo(null,r,s,!0,e,n);case 19:return bd(e,r,n);case 22:return vd(e,r,n)}throw Error(l(156,r.tag))};function Gd(e,r){return Tl(e,r)}function Zh(e,r,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yr(e,r,n,s){return new Zh(e,r,n,s)}function No(e){return e=e.prototype,!(!e||!e.isReactComponent)}function em(e){if(typeof e=="function")return No(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ie)return 11;if(e===Xe)return 14}return 2}function dt(e,r){var n=e.alternate;return n===null?(n=yr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ca(e,r,n,s,a,o){var d=2;if(s=e,typeof e=="function")No(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case E:return Ct(n.children,a,o,r);case _:d=8,a|=8;break;case ge:return e=yr(12,n,r,a|2),e.elementType=ge,e.lanes=o,e;case be:return e=yr(13,n,r,a),e.elementType=be,e.lanes=o,e;case Ve:return e=yr(19,n,r,a),e.elementType=Ve,e.lanes=o,e;case ye:return da(n,a,o,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:d=10;break e;case ae:d=9;break e;case Ie:d=11;break e;case Xe:d=14;break e;case qe:d=16,s=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return r=yr(d,n,r,a),r.elementType=e,r.type=s,r.lanes=o,r}function Ct(e,r,n,s){return e=yr(7,e,s,r),e.lanes=n,e}function da(e,r,n,s){return e=yr(22,e,s,r),e.elementType=ye,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,r,n){return e=yr(6,e,null,r),e.lanes=n,e}function ko(e,r,n){return r=yr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function rm(e,r,n,s,a){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ka(0),this.expirationTimes=Ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function bo(e,r,n,s,a,o,d,p,h){return e=new rm(e,r,n,p,h),r===1?(r=1,o===!0&&(r|=8)):r=0,o=yr(3,null,null,r),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Di(o),e}function tm(e,r,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:s==null?null:""+s,children:e,containerInfo:r,implementation:n}}function Kd(e){if(!e)return rt;e=e._reactInternals;e:{if(xt(e)!==e||e.tag!==1)throw Error(l(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(rr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(rr(n))return kc(e,n,r)}return r}function Yd(e,r,n,s,a,o,d,p,h){return e=bo(n,s,!0,e,a,o,d,p,h),e.context=Kd(null),n=e.current,s=Ze(),a=lt(n),o=Br(s,a),o.callback=r!=null?r:null,st(n,o,a),e.current.lanes=a,jn(e,a,s),sr(e,s),e}function ua(e,r,n,s){var a=r.current,o=Ze(),d=lt(a);return n=Kd(n),r.context===null?r.context=n:r.pendingContext=n,r=Br(o,d),r.payload={element:e},s=s===void 0?null:s,s!==null&&(r.callback=s),e=st(a,r,d),e!==null&&(Cr(e,a,d,o),Hs(e,a,d)),d}function pa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function So(e,r){Xd(e,r),(e=e.alternate)&&Xd(e,r)}function nm(){return null}var Jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Po(e){this._internalRoot=e}ha.prototype.render=Po.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(l(409));ua(e,r,null,null)},ha.prototype.unmount=Po.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;St(function(){ua(null,e,null,null)}),r[Dr]=null}};function ha(e){this._internalRoot=e}ha.prototype.unstable_scheduleHydration=function(e){if(e){var r=Ml();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Yr.length&&r!==0&&r<Yr[n].priority;n++);Yr.splice(n,0,e),n===0&&Fl(e)}};function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zd(){}function sm(e,r,n,s,a){if(a){if(typeof s=="function"){var o=s;s=function(){var y=pa(d);o.call(y)}}var d=Yd(r,s,e,0,null,!1,!1,"",Zd);return e._reactRootContainer=d,e[Dr]=d.current,An(e.nodeType===8?e.parentNode:e),St(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var p=s;s=function(){var y=pa(h);p.call(y)}}var h=bo(e,0,!1,null,null,!1,!1,"",Zd);return e._reactRootContainer=h,e[Dr]=h.current,An(e.nodeType===8?e.parentNode:e),St(function(){ua(r,h,n,s)}),h}function fa(e,r,n,s,a){var o=n._reactRootContainer;if(o){var d=o;if(typeof a=="function"){var p=a;a=function(){var h=pa(d);p.call(h)}}ua(r,d,e,a)}else d=sm(n,r,e,a,s);return pa(d)}Rl=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=yn(r.pendingLanes);n!==0&&(Ya(r,n|1),sr(r,ze()),(ue&6)===0&&(nn=ze()+500,tt()))}break;case 13:St(function(){var s=Wr(e,1);if(s!==null){var a=Ze();Cr(s,e,1,a)}}),So(e,1)}},Xa=function(e){if(e.tag===13){var r=Wr(e,134217728);if(r!==null){var n=Ze();Cr(r,e,134217728,n)}So(e,134217728)}},Al=function(e){if(e.tag===13){var r=lt(e),n=Wr(e,r);if(n!==null){var s=Ze();Cr(n,e,r,s)}So(e,r)}},Ml=function(){return ve},Dl=function(e,r){var n=ve;try{return ve=e,r()}finally{ve=n}},Ua=function(e,r,n){switch(r){case"input":if(Ma(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var s=n[r];if(s!==e&&s.form===e.form){var a=zs(s);if(!a)throw Error(l(90));ft(s),Ma(s,a)}}}break;case"textarea":ul(e,n);break;case"select":r=n.value,r!=null&&At(e,!!n.multiple,r,!1)}},jl=go,Nl=St;var am={usingClientEntryPoint:!1,Events:[_n,$t,zs,gl,yl,go]},Xn={findFiberByHostInstance:vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},im={bundleType:Xn.bundleType,version:Xn.version,rendererPackageName:Xn.rendererPackageName,rendererConfig:Xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sl(e),e===null?null:e.stateNode},findFiberByHostInstance:Xn.findFiberByHostInstance||nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xa.isDisabled&&xa.supportsFiber)try{hs=xa.inject(im),Lr=xa}catch{}}return ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=am,ar.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!To(r))throw Error(l(200));return tm(e,r,null,n)},ar.createRoot=function(e,r){if(!To(e))throw Error(l(299));var n=!1,s="",a=Jd;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),r=bo(e,1,!1,null,null,n,!1,s,a),e[Dr]=r.current,An(e.nodeType===8?e.parentNode:e),new Po(r)},ar.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Sl(r),e=e===null?null:e.stateNode,e},ar.flushSync=function(e){return St(e)},ar.hydrate=function(e,r,n){if(!ma(r))throw Error(l(200));return fa(null,e,r,!0,n)},ar.hydrateRoot=function(e,r,n){if(!To(e))throw Error(l(405));var s=n!=null&&n.hydratedSources||null,a=!1,o="",d=Jd;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),r=Yd(r,null,e,1,n!=null?n:null,a,!1,o,d),e[Dr]=r.current,An(e),s)for(e=0;e<s.length;e++)n=s[e],a=n._getVersion,a=a(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,a]:r.mutableSourceEagerHydrationData.push(n,a);return new ha(r)},ar.render=function(e,r,n){if(!ma(r))throw Error(l(200));return fa(null,e,r,!1,n)},ar.unmountComponentAtNode=function(e){if(!ma(e))throw Error(l(40));return e._reactRootContainer?(St(function(){fa(null,null,e,!1,function(){e._reactRootContainer=null,e[Dr]=null})}),!0):!1},ar.unstable_batchedUpdates=go,ar.unstable_renderSubtreeIntoContainer=function(e,r,n,s){if(!ma(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return fa(e,r,n,!1,s)},ar.version="18.3.1-next-f1338f8080-20240426",ar}var ou;function fm(){if(ou)return Eo.exports;ou=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Eo.exports=mm(),Eo.exports}var lu;function xm(){if(lu)return va;lu=1;var i=fm();return va.createRoot=i.createRoot,va.hydrateRoot=i.hydrateRoot,va}var vm=xm(),pe=Yo();const pr=lm(pe);var ir=function(){return ir=Object.assign||function(c){for(var l,u=1,f=arguments.length;u<f;u++){l=arguments[u];for(var j in l)Object.prototype.hasOwnProperty.call(l,j)&&(c[j]=l[j])}return c},ir.apply(this,arguments)};function ka(i,c,l){if(l||arguments.length===2)for(var u=0,f=c.length,j;u<f;u++)(j||!(u in c))&&(j||(j=Array.prototype.slice.call(c,0,u)),j[u]=c[u]);return i.concat(j||Array.prototype.slice.call(c))}var ke="-ms-",rs="-moz-",me="-webkit-",Ru="comm",Ia="rule",Xo="decl",gm="@import",ym="@namespace",Au="@keyframes",jm="@layer",Mu=Math.abs,Jo=String.fromCharCode,Oo=Object.assign;function Nm(i,c){return Oe(i,0)^45?(((c<<2^Oe(i,0))<<2^Oe(i,1))<<2^Oe(i,2))<<2^Oe(i,3):0}function Du(i){return i.trim()}function $r(i,c){return(i=c.exec(i))?i[0]:i}function re(i,c,l){return i.replace(c,l)}function ga(i,c,l){return i.indexOf(c,l)}function Oe(i,c){return i.charCodeAt(c)|0}function Rt(i,c,l){return i.slice(c,l)}function Ir(i){return i.length}function _u(i){return i.length}function Zn(i,c){return c.push(i),i}function wm(i,c){return i.map(c).join("")}function cu(i,c){return i.filter(function(l){return!$r(l,c)})}var Ea=1,on=1,Fu=0,jr=0,Me=0,pn="";function La(i,c,l,u,f,j,N,C){return{value:i,root:c,parent:l,type:u,props:f,children:j,line:Ea,column:on,length:N,return:"",siblings:C}}function pt(i,c){return Oo(La("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},c)}function an(i){for(;i.root;)i=pt(i.root,{children:[i]});Zn(i,i.siblings)}function km(){return Me}function bm(){return Me=jr>0?Oe(pn,--jr):0,on--,Me===10&&(on=1,Ea--),Me}function Er(){return Me=jr<Fu?Oe(pn,jr++):0,on++,Me===10&&(on=1,Ea++),Me}function ht(){return Oe(pn,jr)}function ya(){return jr}function za(i,c){return Rt(pn,i,c)}function ns(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sm(i){return Ea=on=1,Fu=Ir(pn=i),jr=0,[]}function Pm(i){return pn="",i}function Ro(i){return Du(za(jr-1,Wo(i===91?i+2:i===40?i+1:i)))}function Tm(i){for(;(Me=ht())&&Me<33;)Er();return ns(i)>2||ns(Me)>3?"":" "}function Cm(i,c){for(;--c&&Er()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return za(i,ya()+(c<6&&ht()==32&&Er()==32))}function Wo(i){for(;Er();)switch(Me){case i:return jr;case 34:case 39:i!==34&&i!==39&&Wo(Me);break;case 40:i===41&&Wo(i);break;case 92:Er();break}return jr}function Im(i,c){for(;Er()&&i+Me!==57;)if(i+Me===84&&ht()===47)break;return"/*"+za(c,jr-1)+"*"+Jo(i===47?i:Er())}function Em(i){for(;!ns(ht());)Er();return za(i,jr)}function Lm(i){return Pm(ja("",null,null,null,[""],i=Sm(i),0,[0],i))}function ja(i,c,l,u,f,j,N,C,T){for(var q=0,Q=0,B=N,J=0,oe=0,Y=0,H=1,G=1,fe=1,ce=0,te="",L=f,X=j,U=u,E=te;G;)switch(Y=ce,ce=Er()){case 40:if(Y!=108&&Oe(E,B-1)==58){ga(E+=re(Ro(ce),"&","&\f"),"&\f",Mu(q?C[q-1]:0))!=-1&&(fe=-1);break}case 34:case 39:case 91:E+=Ro(ce);break;case 9:case 10:case 13:case 32:E+=Tm(Y);break;case 92:E+=Cm(ya()-1,7);continue;case 47:switch(ht()){case 42:case 47:Zn(zm(Im(Er(),ya()),c,l,T),T),(ns(Y||1)==5||ns(ht()||1)==5)&&Ir(E)&&Rt(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*H:C[q++]=Ir(E)*fe;case 125*H:case 59:case 0:switch(ce){case 0:case 125:G=0;case 59+Q:fe==-1&&(E=re(E,/\f/g,"")),oe>0&&(Ir(E)-B||H===0&&Y===47)&&Zn(oe>32?uu(E+";",u,l,B-1,T):uu(re(E," ","")+";",u,l,B-2,T),T);break;case 59:E+=";";default:if(Zn(U=du(E,c,l,q,Q,f,C,te,L=[],X=[],B,j),j),ce===123)if(Q===0)ja(E,c,U,U,L,j,B,C,X);else{switch(J){case 99:if(Oe(E,3)===110)break;case 108:if(Oe(E,2)===97)break;default:Q=0;case 100:case 109:case 115:}Q?ja(i,U,U,u&&Zn(du(i,U,U,0,0,f,C,te,f,L=[],B,X),X),f,X,B,C,u?L:X):ja(E,U,U,U,[""],X,0,C,X)}}q=Q=oe=0,H=fe=1,te=E="",B=N;break;case 58:B=1+Ir(E),oe=Y;default:if(H<1){if(ce==123)--H;else if(ce==125&&H++==0&&bm()==125)continue}switch(E+=Jo(ce),ce*H){case 38:fe=Q>0?1:(E+="\f",-1);break;case 44:C[q++]=(Ir(E)-1)*fe,fe=1;break;case 64:ht()===45&&(E+=Ro(Er())),J=ht(),Q=B=Ir(te=E+=Em(ya())),ce++;break;case 45:Y===45&&Ir(E)==2&&(H=0)}}return j}function du(i,c,l,u,f,j,N,C,T,q,Q,B){for(var J=f-1,oe=f===0?j:[""],Y=_u(oe),H=0,G=0,fe=0;H<u;++H)for(var ce=0,te=Rt(i,J+1,J=Mu(G=N[H])),L=i;ce<Y;++ce)(L=Du(G>0?oe[ce]+" "+te:re(te,/&\f/g,oe[ce])))&&(T[fe++]=L);return La(i,c,l,f===0?Ia:C,T,q,Q,B)}function zm(i,c,l,u){return La(i,c,l,Ru,Jo(km()),Rt(i,2,-2),0,u)}function uu(i,c,l,u,f){return La(i,c,l,Xo,Rt(i,0,u),Rt(i,u+1,-1),u,f)}function Ou(i,c,l){switch(Nm(i,c)){case 5103:return me+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return me+i+i;case 4855:return me+i.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+i;case 4789:return rs+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return me+i+rs+i+ke+i+i;case 5936:switch(Oe(i,c+11)){case 114:return me+i+ke+re(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return me+i+ke+re(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return me+i+ke+re(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return me+i+ke+i+i;case 6165:return me+i+ke+"flex-"+i+i;case 5187:return me+i+re(i,/(\w+).+(:[^]+)/,me+"box-$1$2"+ke+"flex-$1$2")+i;case 5443:return me+i+ke+"flex-item-"+re(i,/flex-|-self/g,"")+($r(i,/flex-|baseline/)?"":ke+"grid-row-"+re(i,/flex-|-self/g,""))+i;case 4675:return me+i+ke+"flex-line-pack"+re(i,/align-content|flex-|-self/g,"")+i;case 5548:return me+i+ke+re(i,"shrink","negative")+i;case 5292:return me+i+ke+re(i,"basis","preferred-size")+i;case 6060:return me+"box-"+re(i,"-grow","")+me+i+ke+re(i,"grow","positive")+i;case 4554:return me+re(i,/([^-])(transform)/g,"$1"+me+"$2")+i;case 6187:return re(re(re(i,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),i,"")+i;case 5495:case 3959:return re(i,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return re(re(i,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+ke+"flex-pack:$3"),/space-between/,"justify")+me+i+i;case 4200:if(!$r(i,/flex-|baseline/))return ke+"grid-column-align"+Rt(i,c)+i;break;case 2592:case 3360:return ke+re(i,"template-","")+i;case 4384:case 3616:return l&&l.some(function(u,f){return c=f,$r(u.props,/grid-\w+-end/)})?~ga(i+(l=l[c].value),"span",0)?i:ke+re(i,"-start","")+i+ke+"grid-row-span:"+(~ga(l,"span",0)?$r(l,/\d+/):+$r(l,/\d+/)-+$r(i,/\d+/))+";":ke+re(i,"-start","")+i;case 4896:case 4128:return l&&l.some(function(u){return $r(u.props,/grid-\w+-start/)})?i:ke+re(re(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return re(i,/(.+)-inline(.+)/,me+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ir(i)-1-c>6)switch(Oe(i,c+1)){case 109:if(Oe(i,c+4)!==45)break;case 102:return re(i,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+rs+(Oe(i,c+3)==108?"$3":"$2-$3"))+i;case 115:return~ga(i,"stretch",0)?Ou(re(i,"stretch","fill-available"),c,l)+i:i}break;case 5152:case 5920:return re(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,f,j,N,C,T,q){return ke+f+":"+j+q+(N?ke+f+"-span:"+(C?T:+T-+j)+q:"")+i});case 4949:if(Oe(i,c+6)===121)return re(i,":",":"+me)+i;break;case 6444:switch(Oe(i,Oe(i,14)===45?18:11)){case 120:return re(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(Oe(i,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+ke+"$2box$3")+i;case 100:return re(i,":",":"+ke)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(i,"scroll-","scroll-snap-")+i}return i}function ba(i,c){for(var l="",u=0;u<i.length;u++)l+=c(i[u],u,i,c)||"";return l}function Rm(i,c,l,u){switch(i.type){case jm:if(i.children.length)break;case gm:case ym:case Xo:return i.return=i.return||i.value;case Ru:return"";case Au:return i.return=i.value+"{"+ba(i.children,u)+"}";case Ia:if(!Ir(i.value=i.props.join(",")))return""}return Ir(l=ba(i.children,u))?i.return=i.value+"{"+l+"}":""}function Am(i){var c=_u(i);return function(l,u,f,j){for(var N="",C=0;C<c;C++)N+=i[C](l,u,f,j)||"";return N}}function Mm(i){return function(c){c.root||(c=c.return)&&i(c)}}function Dm(i,c,l,u){if(i.length>-1&&!i.return)switch(i.type){case Xo:i.return=Ou(i.value,i.length,l);return;case Au:return ba([pt(i,{value:re(i.value,"@","@"+me)})],u);case Ia:if(i.length)return wm(l=i.props,function(f){switch($r(f,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":an(pt(i,{props:[re(f,/:(read-\w+)/,":"+rs+"$1")]})),an(pt(i,{props:[f]})),Oo(i,{props:cu(l,u)});break;case"::placeholder":an(pt(i,{props:[re(f,/:(plac\w+)/,":"+me+"input-$1")]})),an(pt(i,{props:[re(f,/:(plac\w+)/,":"+rs+"$1")]})),an(pt(i,{props:[re(f,/:(plac\w+)/,ke+"input-$1")]})),an(pt(i,{props:[f]})),Oo(i,{props:cu(l,u)});break}return""})}}var _m={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ur={},ln=typeof process!="undefined"&&ur!==void 0&&(ur.REACT_APP_SC_ATTR||ur.SC_ATTR)||"data-styled",Wu="active",Bu="data-styled-version",Ra="6.3.10",Zo=`/*!sc*/
`,ts=typeof window!="undefined"&&typeof document!="undefined",Fm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&ur!==void 0&&ur.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ur.REACT_APP_SC_DISABLE_SPEEDY!==""?ur.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ur.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&ur!==void 0&&ur.SC_DISABLE_SPEEDY!==void 0&&ur.SC_DISABLE_SPEEDY!==""&&ur.SC_DISABLE_SPEEDY!=="false"&&ur.SC_DISABLE_SPEEDY);function ls(i){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Na=new Map,Sa=new Map,wa=1,es=function(i){if(Na.has(i))return Na.get(i);for(;Sa.has(wa);)wa++;var c=wa++;return Na.set(i,c),Sa.set(c,i),c},Om=function(i,c){wa=c+1,Na.set(i,c),Sa.set(c,i)},el=Object.freeze([]),cn=Object.freeze({});function Wm(i,c,l){return l===void 0&&(l=cn),i.theme!==l.theme&&i.theme||c||l.theme}var Hu=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Bm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Hm=/(^-|-$)/g;function pu(i){return i.replace(Bm,"-").replace(Hm,"")}var Um=/(a)(d)/gi,hu=function(i){return String.fromCharCode(i+(i>25?39:97))};function Bo(i){var c,l="";for(c=Math.abs(i);c>52;c=c/52|0)l=hu(c%52)+l;return(hu(c%52)+l).replace(Um,"$1-$2")}var Ao,It=function(i,c){for(var l=c.length;l;)i=33*i^c.charCodeAt(--l);return i},Uu=function(i){return It(5381,i)};function $m(i){return Bo(Uu(i)>>>0)}function Vm(i){return i.displayName||i.name||"Component"}function Mo(i){return typeof i=="string"&&!0}var $u=typeof Symbol=="function"&&Symbol.for,Vu=$u?Symbol.for("react.memo"):60115,qm=$u?Symbol.for("react.forward_ref"):60112,Qm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Km=((Ao={})[qm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ao[Vu]=qu,Ao);function mu(i){return("type"in(c=i)&&c.type.$$typeof)===Vu?qu:"$$typeof"in i?Km[i.$$typeof]:Qm;var c}var Ym=Object.defineProperty,Xm=Object.getOwnPropertyNames,fu=Object.getOwnPropertySymbols,Jm=Object.getOwnPropertyDescriptor,Zm=Object.getPrototypeOf,xu=Object.prototype;function Qu(i,c,l){if(typeof c!="string"){if(xu){var u=Zm(c);u&&u!==xu&&Qu(i,u,l)}var f=Xm(c);fu&&(f=f.concat(fu(c)));for(var j=mu(i),N=mu(c),C=0;C<f.length;++C){var T=f[C];if(!(T in Gm||l&&l[T]||N&&T in N||j&&T in j)){var q=Jm(c,T);try{Ym(i,T,q)}catch{}}}}return i}function dn(i){return typeof i=="function"}function rl(i){return typeof i=="object"&&"styledComponentId"in i}function Lt(i,c){return i&&c?"".concat(i," ").concat(c):i||c||""}function vu(i,c){return i.join("")}function ss(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Ho(i,c,l){if(l===void 0&&(l=!1),!l&&!ss(i)&&!Array.isArray(i))return c;if(Array.isArray(c))for(var u=0;u<c.length;u++)i[u]=Ho(i[u],c[u]);else if(ss(c))for(var u in c)i[u]=Ho(i[u],c[u]);return i}function tl(i,c){Object.defineProperty(i,"toString",{value:c})}var ef=(function(){function i(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return i.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var u=this._cGroup;u<c;u++)l+=this.groupSizes[u];else for(u=this._cGroup-1;u>=c;u--)l-=this.groupSizes[u];return this._cGroup=c,this._cIndex=l,l},i.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var u=this.groupSizes,f=u.length,j=f;c>=j;)if((j<<=1)<0)throw ls(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(u),this.length=j;for(var N=f;N<j;N++)this.groupSizes[N]=0}for(var C=this.indexOfGroup(c+1),T=0,q=(N=0,l.length);N<q;N++)this.tag.insertRule(C,l[N])&&(this.groupSizes[c]++,C++,T++);T>0&&this._cGroup>c&&(this._cIndex+=T)},i.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],u=this.indexOfGroup(c),f=u+l;this.groupSizes[c]=0;for(var j=u;j<f;j++)this.tag.deleteRule(u);l>0&&this._cGroup>c&&(this._cIndex-=l)}},i.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var u=this.groupSizes[c],f=this.indexOfGroup(c),j=f+u,N=f;N<j;N++)l+=this.tag.getRule(N)+Zo;return l},i})(),rf="style[".concat(ln,"][").concat(Bu,'="').concat(Ra,'"]'),tf=new RegExp("^".concat(ln,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gu=function(i){return typeof ShadowRoot!="undefined"&&i instanceof ShadowRoot||"host"in i&&i.nodeType===11},Uo=function(i){if(!i)return document;if(gu(i))return i;if("getRootNode"in i){var c=i.getRootNode();if(gu(c))return c}return document},nf=function(i,c,l){for(var u,f=l.split(","),j=0,N=f.length;j<N;j++)(u=f[j])&&i.registerName(c,u)},sf=function(i,c){for(var l,u=((l=c.textContent)!==null&&l!==void 0?l:"").split(Zo),f=[],j=0,N=u.length;j<N;j++){var C=u[j].trim();if(C){var T=C.match(tf);if(T){var q=0|parseInt(T[1],10),Q=T[2];q!==0&&(Om(Q,q),nf(i,Q,T[3]),i.getTag().insertRules(q,f)),f.length=0}else f.push(C)}}},Do=function(i){for(var c=Uo(i.options.target).querySelectorAll(rf),l=0,u=c.length;l<u;l++){var f=c[l];f&&f.getAttribute(ln)!==Wu&&(sf(i,f),f.parentNode&&f.parentNode.removeChild(f))}};function af(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Gu=function(i){var c=document.head,l=i||c,u=document.createElement("style"),f=(function(C){var T=Array.from(C.querySelectorAll("style[".concat(ln,"]")));return T[T.length-1]})(l),j=f!==void 0?f.nextSibling:null;u.setAttribute(ln,Wu),u.setAttribute(Bu,Ra);var N=af();return N&&u.setAttribute("nonce",N),l.insertBefore(u,j),u},of=(function(){function i(c){this.element=Gu(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var u;if(l.sheet)return l.sheet;for(var f=(u=l.getRootNode().styleSheets)!==null&&u!==void 0?u:document.styleSheets,j=0,N=f.length;j<N;j++){var C=f[j];if(C.ownerNode===l)return C}throw ls(17)})(this.element),this.length=0}return i.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},i.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},i})(),lf=(function(){function i(c){this.element=Gu(c),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var u=document.createTextNode(l);return this.element.insertBefore(u,this.nodes[c]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},i.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},i})(),cf=(function(){function i(c){this.rules=[],this.length=0}return i.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},i.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},i.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},i})(),yu=ts,df={isServer:!ts,useCSSOMInjection:!Fm},Ku=(function(){function i(c,l,u){c===void 0&&(c=cn),l===void 0&&(l={});var f=this;this.options=ir(ir({},df),c),this.gs=l,this.names=new Map(u),this.server=!!c.isServer,!this.server&&ts&&yu&&(yu=!1,Do(this)),tl(this,function(){return(function(j){for(var N=j.getTag(),C=N.length,T="",q=function(B){var J=(function(fe){return Sa.get(fe)})(B);if(J===void 0)return"continue";var oe=j.names.get(J);if(oe===void 0||!oe.size)return"continue";var Y=N.getGroup(B);if(Y.length===0)return"continue";var H=ln+".g"+B+'[id="'+J+'"]',G="";oe.forEach(function(fe){fe.length>0&&(G+=fe+",")}),T+=Y+H+'{content:"'+G+'"}'+Zo},Q=0;Q<C;Q++)q(Q);return T})(f)})}return i.registerId=function(c){return es(c)},i.prototype.rehydrate=function(){!this.server&&ts&&Do(this)},i.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var u=new i(ir(ir({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&ts&&c.target!==this.options.target&&Uo(this.options.target)!==Uo(c.target)&&Do(u),u},i.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var u=l.useCSSOMInjection,f=l.target;return l.isServer?new cf(f):u?new of(f):new lf(f)})(this.options),new ef(c)));var c},i.prototype.hasNameForId=function(c,l){var u,f;return(f=(u=this.names.get(c))===null||u===void 0?void 0:u.has(l))!==null&&f!==void 0&&f},i.prototype.registerName=function(c,l){es(c);var u=this.names.get(c);u?u.add(l):this.names.set(c,new Set([l]))},i.prototype.insertRules=function(c,l,u){this.registerName(c,l),this.getTag().insertRules(es(c),u)},i.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},i.prototype.clearRules=function(c){this.getTag().clearGroup(es(c)),this.clearNames(c)},i.prototype.clearTag=function(){this.tag=void 0},i})(),uf=/&/g,Vr=47,Et=42;function ju(i){if(i.indexOf("}")===-1)return!1;for(var c=i.length,l=0,u=0,f=!1,j=0;j<c;j++){var N=i.charCodeAt(j);if(u!==0||f||N!==Vr||i.charCodeAt(j+1)!==Et)if(f)N===Et&&i.charCodeAt(j+1)===Vr&&(f=!1,j++);else if(N!==34&&N!==39||j!==0&&i.charCodeAt(j-1)===92){if(u===0){if(N===123)l++;else if(N===125&&--l<0)return!0}}else u===0?u=N:u===N&&(u=0);else f=!0,j++}return l!==0||u!==0}function Yu(i,c){return i.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(u){return"".concat(c," ").concat(u)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=Yu(l.children,c)),l})}function pf(i){var c,l,u,f=cn,j=f.options,N=j===void 0?cn:j,C=f.plugins,T=C===void 0?el:C,q=function(Y,H,G){return G.startsWith(l)&&G.endsWith(l)&&G.replaceAll(l,"").length>0?".".concat(c):Y},Q=T.slice();Q.push(function(Y){Y.type===Ia&&Y.value.includes("&")&&(u||(u=new RegExp("\\".concat(l,"\\b"),"g")),Y.props[0]=Y.props[0].replace(uf,l).replace(u,q))}),N.prefix&&Q.push(Dm),Q.push(Rm);var B=[],J=Am(Q.concat(Mm(function(Y){return B.push(Y)}))),oe=function(Y,H,G,fe){H===void 0&&(H=""),G===void 0&&(G=""),fe===void 0&&(fe="&"),c=fe,l=H,u=void 0;var ce=(function(L){if(!ju(L))return L;for(var X=L.length,U="",E=0,_=0,ge=0,Le=!1,ae=0;ae<X;ae++){var Ie=L.charCodeAt(ae);if(ge!==0||Le||Ie!==Vr||L.charCodeAt(ae+1)!==Et)if(Le)Ie===Et&&L.charCodeAt(ae+1)===Vr&&(Le=!1,ae++);else if(Ie!==34&&Ie!==39||ae!==0&&L.charCodeAt(ae-1)===92){if(ge===0)if(Ie===123)_++;else if(Ie===125){if(--_<0){for(var be=ae+1;be<X;){var Ve=L.charCodeAt(be);if(Ve===59||Ve===10)break;be++}be<X&&L.charCodeAt(be)===59&&be++,_=0,ae=be-1,E=be;continue}_===0&&(U+=L.substring(E,ae+1),E=ae+1)}else Ie===59&&_===0&&(U+=L.substring(E,ae+1),E=ae+1)}else ge===0?ge=Ie:ge===Ie&&(ge=0);else Le=!0,ae++}if(E<X){var Xe=L.substring(E);ju(Xe)||(U+=Xe)}return U})((function(L){if(L.indexOf("//")===-1)return L;for(var X=L.length,U=[],E=0,_=0,ge=0,Le=0;_<X;){var ae=L.charCodeAt(_);if(ae!==34&&ae!==39||_!==0&&L.charCodeAt(_-1)===92)if(ge===0)if(ae===Vr&&_+1<X&&L.charCodeAt(_+1)===Et){for(_+=2;_+1<X&&(L.charCodeAt(_)!==Et||L.charCodeAt(_+1)!==Vr);)_++;_+=2}else if(ae===40&&_>=3&&(32|L.charCodeAt(_-1))==108&&(32|L.charCodeAt(_-2))==114&&(32|L.charCodeAt(_-3))==117)Le=1,_++;else if(Le>0)ae===41?Le--:ae===40&&Le++,_++;else if(ae===Et&&_+1<X&&L.charCodeAt(_+1)===Vr)_>E&&U.push(L.substring(E,_)),E=_+=2;else if(ae===Vr&&_+1<X&&L.charCodeAt(_+1)===Vr){for(_>E&&U.push(L.substring(E,_));_<X&&L.charCodeAt(_)!==10;)_++;E=_}else _++;else _++;else ge===0?ge=ae:ge===ae&&(ge=0),_++}return E===0?L:(E<X&&U.push(L.substring(E)),U.join(""))})(Y)),te=Lm(G||H?"".concat(G," ").concat(H," { ").concat(ce," }"):ce);return N.namespace&&(te=Yu(te,N.namespace)),B=[],ba(te,J),B};return oe.hash=T.length?T.reduce(function(Y,H){return H.name||ls(15),It(Y,H.name)},5381).toString():"",oe}var hf=new Ku,$o=pf(),Xu=pr.createContext({shouldForwardProp:void 0,styleSheet:hf,stylis:$o});Xu.Consumer;pr.createContext(void 0);function Nu(){return pr.useContext(Xu)}var mf=(function(){function i(c,l){var u=this;this.inject=function(f,j){j===void 0&&(j=$o);var N=u.name+j.hash;f.hasNameForId(u.id,N)||f.insertRules(u.id,N,j(u.rules,N,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,tl(this,function(){throw ls(12,String(u.name))})}return i.prototype.getName=function(c){return c===void 0&&(c=$o),this.name+c.hash},i})();function ff(i,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||i in _m||i.startsWith("--")?String(c).trim():"".concat(c,"px")}var xf=function(i){return i>="A"&&i<="Z"};function wu(i){for(var c="",l=0;l<i.length;l++){var u=i[l];if(l===1&&u==="-"&&i[0]==="-")return i;xf(u)?c+="-"+u.toLowerCase():c+=u}return c.startsWith("ms-")?"-"+c:c}var Ju=function(i){return i==null||i===!1||i===""},Zu=function(i){var c=[];for(var l in i){var u=i[l];i.hasOwnProperty(l)&&!Ju(u)&&(Array.isArray(u)&&u.isCss||dn(u)?c.push("".concat(wu(l),":"),u,";"):ss(u)?c.push.apply(c,ka(ka(["".concat(l," {")],Zu(u),!1),["}"],!1)):c.push("".concat(wu(l),": ").concat(ff(l,u),";")))}return c};function zt(i,c,l,u,f){if(f===void 0&&(f=[]),typeof i=="string")return i&&f.push(i),f;if(Ju(i))return f;if(rl(i))return f.push(".".concat(i.styledComponentId)),f;if(dn(i)){if(!dn(N=i)||N.prototype&&N.prototype.isReactComponent||!c)return f.push(i),f;var j=i(c);return zt(j,c,l,u,f)}var N;if(i instanceof mf)return l?(i.inject(l,u),f.push(i.getName(u))):f.push(i),f;if(ss(i)){for(var C=Zu(i),T=0;T<C.length;T++)f.push(C[T]);return f}if(!Array.isArray(i))return f.push(i.toString()),f;for(T=0;T<i.length;T++)zt(i[T],c,l,u,f);return f}function vf(i){for(var c=0;c<i.length;c+=1){var l=i[c];if(dn(l)&&!rl(l))return!1}return!0}var gf=Uu(Ra),yf=(function(){function i(c,l,u){this.rules=c,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&vf(c),this.componentId=l,this.baseHash=It(gf,l),this.baseStyle=u,Ku.registerId(l)}return i.prototype.generateAndInjectStyles=function(c,l,u){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))f=Lt(f,this.staticRulesId);else{var j=vu(zt(this.rules,c,l,u)),N=Bo(It(this.baseHash,j)>>>0);if(!l.hasNameForId(this.componentId,N)){var C=u(j,".".concat(N),void 0,this.componentId);l.insertRules(this.componentId,N,C)}f=Lt(f,N),this.staticRulesId=N}else{for(var T=It(this.baseHash,u.hash),q="",Q=0;Q<this.rules.length;Q++){var B=this.rules[Q];if(typeof B=="string")q+=B;else if(B){var J=vu(zt(B,c,l,u));T=It(It(T,String(Q)),J),q+=J}}if(q){var oe=Bo(T>>>0);if(!l.hasNameForId(this.componentId,oe)){var Y=u(q,".".concat(oe),void 0,this.componentId);l.insertRules(this.componentId,oe,Y)}f=Lt(f,oe)}}return{className:f,css:typeof window=="undefined"?l.getTag().getGroup(es(this.componentId)):""}},i})(),ep=pr.createContext(void 0);ep.Consumer;var _o={};function jf(i,c,l){var u=rl(i),f=i,j=!Mo(i),N=c.attrs,C=N===void 0?el:N,T=c.componentId,q=T===void 0?(function(L,X){var U=typeof L!="string"?"sc":pu(L);_o[U]=(_o[U]||0)+1;var E="".concat(U,"-").concat($m(Ra+U+_o[U]));return X?"".concat(X,"-").concat(E):E})(c.displayName,c.parentComponentId):T,Q=c.displayName,B=Q===void 0?(function(L){return Mo(L)?"styled.".concat(L):"Styled(".concat(Vm(L),")")})(i):Q,J=c.displayName&&c.componentId?"".concat(pu(c.displayName),"-").concat(c.componentId):c.componentId||q,oe=u&&f.attrs?f.attrs.concat(C).filter(Boolean):C,Y=c.shouldForwardProp;if(u&&f.shouldForwardProp){var H=f.shouldForwardProp;if(c.shouldForwardProp){var G=c.shouldForwardProp;Y=function(L,X){return H(L,X)&&G(L,X)}}else Y=H}var fe=new yf(l,J,u?f.componentStyle:void 0);function ce(L,X){return(function(U,E,_){var ge=U.attrs,Le=U.componentStyle,ae=U.defaultProps,Ie=U.foldedComponentIds,be=U.styledComponentId,Ve=U.target,Xe=pr.useContext(ep),qe=Nu(),ye=U.shouldForwardProp||qe.shouldForwardProp,I=Wm(E,Xe,ae)||cn,O=(function(se,de,le){for(var xe,Pe=ir(ir({},de),{className:void 0,theme:le}),qr=0;qr<se.length;qr+=1){var ft=dn(xe=se[qr])?xe(Pe):xe;for(var Nr in ft)Nr==="className"?Pe.className=Lt(Pe.className,ft[Nr]):Nr==="style"?Pe.style=ir(ir({},Pe.style),ft[Nr]):Pe[Nr]=ft[Nr]}return"className"in de&&typeof de.className=="string"&&(Pe.className=Lt(Pe.className,de.className)),Pe})(ge,E,I),z=O.as||Ve,x={};for(var w in O)O[w]===void 0||w[0]==="$"||w==="as"||w==="theme"&&O.theme===I||(w==="forwardedAs"?x.as=O.forwardedAs:ye&&!ye(w,z)||(x[w]=O[w]));var Z=(function(se,de){var le=Nu(),xe=se.generateAndInjectStyles(de,le.styleSheet,le.stylis);return xe})(Le,O),ee=Z.className,ie=Lt(Ie,be);return ee&&(ie+=" "+ee),O.className&&(ie+=" "+O.className),x[Mo(z)&&!Hu.has(z)?"class":"className"]=ie,_&&(x.ref=_),pe.createElement(z,x)})(te,L,X)}ce.displayName=B;var te=pr.forwardRef(ce);return te.attrs=oe,te.componentStyle=fe,te.displayName=B,te.shouldForwardProp=Y,te.foldedComponentIds=u?Lt(f.foldedComponentIds,f.styledComponentId):"",te.styledComponentId=J,te.target=u?f.target:i,Object.defineProperty(te,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=u?(function(X){for(var U=[],E=1;E<arguments.length;E++)U[E-1]=arguments[E];for(var _=0,ge=U;_<ge.length;_++)Ho(X,ge[_],!0);return X})({},f.defaultProps,L):L}}),tl(te,function(){return".".concat(te.styledComponentId)}),j&&Qu(te,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),te}function ku(i,c){for(var l=[i[0]],u=0,f=c.length;u<f;u+=1)l.push(c[u],i[u+1]);return l}var bu=function(i){return Object.assign(i,{isCss:!0})};function Nf(i){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(dn(i)||ss(i))return bu(zt(ku(el,ka([i],c,!0))));var u=i;return c.length===0&&u.length===1&&typeof u[0]=="string"?zt(u):bu(zt(ku(u,c)))}function Vo(i,c,l){if(l===void 0&&(l=cn),!c)throw ls(1,c);var u=function(f){for(var j=[],N=1;N<arguments.length;N++)j[N-1]=arguments[N];return i(c,l,Nf.apply(void 0,ka([f],j,!1)))};return u.attrs=function(f){return Vo(i,c,ir(ir({},l),{attrs:Array.prototype.concat(l.attrs,f).filter(Boolean)}))},u.withConfig=function(f){return Vo(i,c,ir(ir({},l),f))},u}var rp=function(i){return Vo(jf,i)},De=rp;Hu.forEach(function(i){De[i]=rp(i)});const Fo={Wrapper:De.div`
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:De.header`
        height: 60px;
        flex-shrink: 0;
    `,Main:De.main`
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
        .sideMenu button:hover, .sideMenu button.active { background: var(--color-primary); border-color: var(--color-primary); color: #07111f; }
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
        .scrollTopButton:hover { background: var(--color-primary); color: #07111f; }
        @media (max-width: 820px) {
            .workspaceLayout { grid-template-columns: 1fr; padding: 14px; }
            .sideMenu { position: static; height: auto; max-height: none; }
            .sideMenu nav { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .scrollTopButton { right: 16px; bottom: 16px; }
        }
        .footerWrapper { flex-shrink: 0; }
    `},Su={Wrapper:De.header`
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
    `,Main:De.div`
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
    `};var tp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Pu=pr.createContext&&pr.createContext(tp),wf=["attr","size","title"];function kf(i,c){if(i==null)return{};var l=bf(i,c),u,f;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(i);for(f=0;f<j.length;f++)u=j[f],!(c.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(i,u)&&(l[u]=i[u])}return l}function bf(i,c){if(i==null)return{};var l={};for(var u in i)if(Object.prototype.hasOwnProperty.call(i,u)){if(c.indexOf(u)>=0)continue;l[u]=i[u]}return l}function Pa(){return Pa=Object.assign?Object.assign.bind():function(i){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(i[u]=l[u])}return i},Pa.apply(this,arguments)}function Tu(i,c){var l=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);c&&(u=u.filter(function(f){return Object.getOwnPropertyDescriptor(i,f).enumerable})),l.push.apply(l,u)}return l}function Ta(i){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Tu(Object(l),!0).forEach(function(u){Sf(i,u,l[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(l)):Tu(Object(l)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(l,u))})}return i}function Sf(i,c,l){return c=Pf(c),c in i?Object.defineProperty(i,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[c]=l,i}function Pf(i){var c=Tf(i,"string");return typeof c=="symbol"?c:c+""}function Tf(i,c){if(typeof i!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var u=l.call(i,c);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(i)}function np(i){return i&&i.map((c,l)=>pr.createElement(c.tag,Ta({key:l},c.attr),np(c.child)))}function W(i){return c=>pr.createElement(Cf,Pa({attr:Ta({},i.attr)},c),np(i.child))}function Cf(i){var c=l=>{var{attr:u,size:f,title:j}=i,N=kf(i,wf),C=f||l.size||"1em",T;return l.className&&(T=l.className),i.className&&(T=(T?T+" ":"")+i.className),pr.createElement("svg",Pa({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,u,N,{className:T,style:Ta(Ta({color:i.color||l.color},l.style),i.style),height:C,width:C,xmlns:"http://www.w3.org/2000/svg"}),j&&pr.createElement("title",null,j),i.children)};return Pu!==void 0?pr.createElement(Pu.Consumer,null,l=>c(l)):c(tp)}function nl(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(i)}function as(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(i)}function If(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"14.31",y1:"8",x2:"20.05",y2:"17.94"},child:[]},{tag:"line",attr:{x1:"9.69",y1:"8",x2:"21.17",y2:"8"},child:[]},{tag:"line",attr:{x1:"7.38",y1:"12",x2:"13.12",y2:"2.06"},child:[]},{tag:"line",attr:{x1:"9.69",y1:"16",x2:"3.95",y2:"6.06"},child:[]},{tag:"line",attr:{x1:"14.31",y1:"16",x2:"2.83",y2:"16"},child:[]},{tag:"line",attr:{x1:"16.62",y1:"12",x2:"10.88",y2:"21.94"},child:[]}]})(i)}function Ef(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(i)}function Lf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"},child:[]}]})(i)}function Cu(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function hr(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(i)}function sp(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(i)}function zf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(i)}function Rf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 14 20 9 15 4"},child:[]},{tag:"path",attr:{d:"M4 20v-7a4 4 0 0 1 4-4h12"},child:[]}]})(i)}function qo(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(i)}function Iu(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(i)}function Af(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(i)}function Mf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(i)}function ap(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(i)}function Df(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(i)}function mt(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(i)}function _f(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(i)}function ip(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(i)}function op(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(i)}function Ff(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(i)}function Of(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(i)}function Wf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(i)}function Bf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(i)}function is(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(i)}function sl(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(i)}function Hf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(i)}function lp(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(i)}function cp(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(i)}function Eu(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(i)}function Qo(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(i)}function Uf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"polyline",attr:{points:"9 21 3 21 3 15"},child:[]},{tag:"line",attr:{x1:"21",y1:"3",x2:"14",y2:"10"},child:[]},{tag:"line",attr:{x1:"3",y1:"21",x2:"10",y2:"14"},child:[]}]})(i)}function $f(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(i)}function Vf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function Go(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]},{tag:"path",attr:{d:"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"},child:[]}]})(i)}function qf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"polyline",attr:{points:"23 20 23 14 17 14"},child:[]},{tag:"path",attr:{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"},child:[]}]})(i)}function Qf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(i)}function dp(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(i)}function Ko(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(i)}function Ca(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(i)}function al(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(i)}function os(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(i)}function Gf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(i)}function Kf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"12",y1:"18",x2:"12.01",y2:"18"},child:[]}]})(i)}function Yf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(i)}function Xf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(i)}function up(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(i)}function Jf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(i)}function Lu(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(i)}function Zf(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]},{tag:"line",attr:{x1:"12",y1:"12",x2:"12",y2:"21"},child:[]},{tag:"path",attr:{d:"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"},child:[]},{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]}]})(i)}function ex(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(i)}function un(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12.55a11 11 0 0 1 14.08 0"},child:[]},{tag:"path",attr:{d:"M1.42 9a16 16 0 0 1 21.16 0"},child:[]},{tag:"path",attr:{d:"M8.53 16.11a6 6 0 0 1 6.95 0"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12.01",y2:"20"},child:[]}]})(i)}function il(i){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(i)}const rx="/computer-networks-core-notes/logo.png",tx=()=>{const[i,c]=pe.useState(!1),[l,u]=pe.useState("dark");pe.useEffect(()=>{const C=localStorage.getItem("app-theme")||"dark";u(C),C==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),pe.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const f=pe.useMemo(()=>l==="light"?"dark":"light",[l]),j=()=>{u(f)};return t.jsx(Su.Wrapper,{children:t.jsx(Su.Main,{children:t.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[t.jsxs("div",{className:"logoNameWrapper",children:[t.jsxs("div",{className:"logoWrapper",children:[!i&&t.jsx("div",{className:"logoSkeleton"}),t.jsx("img",{src:rx,alt:"computer-networks-core-notes",onLoad:()=>c(!0),style:{opacity:i?1:0}})]}),t.jsxs("div",{className:"nameWrapper",children:[t.jsx("div",{className:"title",children:"computer-networks-core-notes"}),t.jsx("div",{className:"subTitle",children:"At-a-glance computer networks revision"})]})]}),t.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${f} theme`,title:`Switch to ${f}`,children:[t.jsx("span",{className:"icon",children:l==="light"?t.jsx($f,{}):t.jsx(Xf,{})}),t.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})};function nx(i){return W({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(i)}function sx(i){return W({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(i)}const ax={Wrapper:De.footer`
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
    `},ix=[{label:"Portfolio",href:"https://www.ashishranjan.net/",icon:mt},{label:"GitHub",href:"https://github.com/a2rp",icon:Df},{label:"CodePen",href:"https://codepen.io/ash1198",icon:nx},{label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:Hf},{label:"Facebook",href:"https://www.facebook.com/theash.ashish/",icon:Af},{label:"YouTube",href:"https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",icon:sx},{label:"Email",href:"mailto:ash.ranjan09@gmail.com",icon:cp},{label:"Support",href:"https://a2rp-donation-page.netlify.app/",icon:Ff},{label:"Buy Me a Coffee",href:"https://buymeacoffee.com/a2rp",icon:zf},{label:"Patreon",href:"https://www.patreon.com/a2rp",icon:Yf}],ox=()=>t.jsxs(ax.Wrapper,{children:[t.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," All rights reserved. By"," ",t.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),t.jsx("nav",{className:"links","aria-label":"Social and support links",children:ix.map(({label:i,href:c,icon:l})=>t.jsx("a",{href:c,target:c.startsWith("mailto:")?void 0:"_blank",rel:c.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":i,title:i,children:t.jsx(l,{"aria-hidden":"true"})},i))})]}),lx={Wrapper:De.section`
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
    `},zu=()=>t.jsxs(lx.Wrapper,{id:"aboutComputerNetworks",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"Computer Networks"}),t.jsx("p",{className:"sub",children:"Computer networks are the rules and wiring that let machines talk. Your phone, laptop, servers, routers, and switches keep exchanging packets so apps can load pages, stream videos, sync files, and send messages."}),t.jsx("p",{className:"sub",children:"The big idea is layers. We break the problem into parts like addressing, routing, reliable delivery, and application protocols. OSI and TCP-IP are just maps that help you know where a concept belongs and what to debug first."}),t.jsx("p",{className:"sub",children:"This page keeps it practical. You will revise IP and subnet basics, TCP vs UDP, DNS and HTTP flow, plus the tools used to troubleshoot fast like ping, traceroute, dig, and curl."})]}),t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"icon",children:t.jsx(is,{})}),t.jsx("h3",{className:"h3",children:"Layer mental model"})]}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"App"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"TCP or UDP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"IP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"MAC"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Wire or Wi-Fi"})]}),t.jsx("p",{className:"note",children:"Routers forward by IP. Switches forward by MAC. Apps pick ports."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"icon",children:t.jsx(Ko,{})}),t.jsx("h3",{className:"h3",children:"Web request in 1 line"})]}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"DNS"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"TCP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"TLS"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"HTTP"})]}),t.jsx("p",{className:"note",children:"Debug order: DNS, reachability, port, TLS, then HTTP."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"icon",children:t.jsx(un,{})}),t.jsx("h3",{className:"h3",children:"What you should know"})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Addressing: IPv4, CIDR, private ranges, NAT"}),t.jsx("li",{children:"Transport: TCP handshake, UDP use cases, common ports"}),t.jsx("li",{children:"Core protocols: DNS, HTTP-HTTPS, DHCP, ICMP"}),t.jsx("li",{children:"Basics of security: TLS, firewall, VPN"})]})]})]})]}),cx={Wrapper:De.section`
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
    `},dx=()=>{const[i,c]=pe.useState(!0),l=pe.useMemo(()=>({id:"networkBasicsModels",title:"Network Basics and Models",sub:"Core terms, OSI and TCP-IP layers, and how data gets wrapped and unwrapped."}),[]);return t.jsxs(cx.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(u=>!u),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(un,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Foundations"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev","aria-hidden":"true",children:t.jsx(hr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsx("div",{className:"inner",children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Qo,{})}),t.jsx("h3",{className:"h3",children:"What is a network"})]}),t.jsx("p",{className:"p",children:"A computer network is a group of devices connected so they can communicate and share data. Devices can be phones, laptops, servers, printers, smart TVs, routers, and switches."}),t.jsx("p",{className:"p",children:"Data is sent in small pieces called packets. Packets travel across cables or Wi-Fi and pass through devices like switches and routers until they reach the destination."}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"Device"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Switch"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Router"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Internet"})]}),t.jsx("p",{className:"note",children:"Switch usually connects devices inside a LAN. Router connects different networks."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(ap,{})}),t.jsx("h3",{className:"h3",children:"Network types and full forms"})]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"LAN"}),t.jsxs("div",{className:"v",children:["Local Area Network",t.jsx("span",{className:"small",children:"Example: home Wi-Fi, office network, college lab"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"MAN"}),t.jsxs("div",{className:"v",children:["Metropolitan Area Network",t.jsx("span",{className:"small",children:"Example: city-level network, large campus across a city"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"WAN"}),t.jsxs("div",{className:"v",children:["Wide Area Network",t.jsx("span",{className:"small",children:"Example: internet, bank branches connected across states"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"PAN"}),t.jsxs("div",{className:"v",children:["Personal Area Network",t.jsx("span",{className:"small",children:"Example: Bluetooth earphones, smartwatch, phone hotspot"})]})]})]}),t.jsx("p",{className:"note",children:"Easy memory: PAN is around one person, LAN is one place, WAN is huge."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(un,{})}),t.jsx("h3",{className:"h3",children:"Topologies"})]}),t.jsx("p",{className:"p",children:"Topology means the shape of connections in a network. It is about how devices are linked, not the physical location."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Star"})," - all devices connect to one central device (switch or router)",t.jsx("span",{className:"small",children:"Example: most office and home networks"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Mesh"})," - devices have many connections with each other",t.jsx("span",{className:"small",children:"Example: some wireless mesh Wi-Fi systems"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Bus"})," - one main cable shared by many devices",t.jsx("span",{className:"small",children:"Example: older Ethernet setups, not common now"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Ring"})," - each device connects to two neighbors, forming a loop",t.jsx("span",{className:"small",children:"Example: older ring networks, some industrial systems"})]})]}),t.jsx("p",{className:"note",children:"In real networks, star and partial mesh are most common."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(nl,{})}),t.jsx("h3",{className:"h3",children:"Bandwidth vs throughput vs latency vs jitter"})]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Bandwidth"}),t.jsxs("div",{className:"v",children:["Maximum capacity of a network link.",t.jsx("span",{className:"small",children:"Example: a 100 Mbps plan is bandwidth capacity"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Throughput"}),t.jsxs("div",{className:"v",children:["Actual useful speed you get in real life.",t.jsx("span",{className:"small",children:"Example: you might get 60 Mbps on a 100 Mbps plan"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Latency"}),t.jsxs("div",{className:"v",children:["Time delay for data to travel from source to destination.",t.jsx("span",{className:"small",children:"Example: ping shows 20 ms latency"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Jitter"}),t.jsxs("div",{className:"v",children:["Variation in latency over time.",t.jsx("span",{className:"small",children:"Example: voice call breaks when delay keeps changing"})]})]})]}),t.jsx("p",{className:"note",children:"Video calls and gaming need low latency and low jitter, not only bandwidth."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(is,{})}),t.jsx("h3",{className:"h3",children:"OSI model (Open Systems Interconnection)"})]}),t.jsx("p",{className:"p",children:"OSI stands for Open Systems Interconnection. It is a 7-layer model used to understand how networking works. It is mainly a learning and troubleshooting model."}),t.jsx("p",{className:"p",children:"Each layer has a specific job. When you send data, it moves from layer 7 down to layer 1. At the receiver, it moves from layer 1 up to layer 7."}),t.jsxs("div",{className:"osi",children:[t.jsxs("div",{className:"osiRow head",children:[t.jsx("div",{className:"c1",children:"Layer"}),t.jsx("div",{className:"c2",children:"Meaning"}),t.jsx("div",{className:"c3",children:"Examples"})]}),t.jsxs("div",{className:"osiRow",children:[t.jsx("div",{className:"c1",children:"7 - Application"}),t.jsx("div",{className:"c2",children:"User-level network services"}),t.jsx("div",{className:"c3",children:"HTTP, DNS, SMTP"})]}),t.jsxs("div",{className:"osiRow",children:[t.jsx("div",{className:"c1",children:"6 - Presentation"}),t.jsx("div",{className:"c2",children:"Format, encryption, compression"}),t.jsx("div",{className:"c3",children:"TLS, JSON, UTF-8"})]}),t.jsxs("div",{className:"osiRow",children:[t.jsx("div",{className:"c1",children:"5 - Session"}),t.jsx("div",{className:"c2",children:"Session control and continuity"}),t.jsx("div",{className:"c3",children:"Session concepts, RPC"})]}),t.jsxs("div",{className:"osiRow",children:[t.jsx("div",{className:"c1",children:"4 - Transport"}),t.jsx("div",{className:"c2",children:"Reliable delivery, ports"}),t.jsx("div",{className:"c3",children:"TCP, UDP"})]}),t.jsxs("div",{className:"osiRow",children:[t.jsx("div",{className:"c1",children:"3 - Network"}),t.jsx("div",{className:"c2",children:"IP addressing and routing"}),t.jsx("div",{className:"c3",children:"IPv4, IPv6, ICMP"})]}),t.jsxs("div",{className:"osiRow",children:[t.jsx("div",{className:"c1",children:"2 - Data Link"}),t.jsx("div",{className:"c2",children:"Local delivery using MAC"}),t.jsx("div",{className:"c3",children:"Ethernet, ARP, VLAN"})]}),t.jsxs("div",{className:"osiRow",children:[t.jsx("div",{className:"c1",children:"1 - Physical"}),t.jsx("div",{className:"c2",children:"Bits on wire or air"}),t.jsx("div",{className:"c3",children:"Cable, fiber, Wi-Fi signal"})]})]}),t.jsx("p",{className:"note",children:"Full forms: HTTP is Hypertext Transfer Protocol, DNS is Domain Name System, SMTP is Simple Mail Transfer Protocol, TLS is Transport Layer Security, TCP is Transmission Control Protocol, UDP is User Datagram Protocol, IP is Internet Protocol, ICMP is Internet Control Message Protocol, ARP is Address Resolution Protocol, VLAN is Virtual Local Area Network."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(is,{})}),t.jsx("h3",{className:"h3",children:"TCP-IP model (Transmission Control Protocol - Internet Protocol)"})]}),t.jsx("p",{className:"p",children:"TCP-IP stands for Transmission Control Protocol and Internet Protocol. It is the model used by the internet in real systems. Most diagrams show 4 layers."}),t.jsxs("div",{className:"map",children:[t.jsxs("div",{className:"mapRow head",children:[t.jsx("div",{className:"a",children:"TCP-IP layer"}),t.jsx("div",{className:"b",children:"OSI mapping"})]}),t.jsxs("div",{className:"mapRow",children:[t.jsx("div",{className:"a",children:"Application"}),t.jsx("div",{className:"b",children:"OSI 5, 6, 7"})]}),t.jsxs("div",{className:"mapRow",children:[t.jsx("div",{className:"a",children:"Transport"}),t.jsx("div",{className:"b",children:"OSI 4"})]}),t.jsxs("div",{className:"mapRow",children:[t.jsx("div",{className:"a",children:"Internet"}),t.jsx("div",{className:"b",children:"OSI 3"})]}),t.jsxs("div",{className:"mapRow",children:[t.jsx("div",{className:"a",children:"Link"}),t.jsx("div",{className:"b",children:"OSI 1, 2"})]})]}),t.jsx("p",{className:"note",children:"Some books show 5 layers by splitting Link into Data Link and Physical."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Vf,{})}),t.jsx("h3",{className:"h3",children:"Encapsulation and decapsulation"})]}),t.jsx("p",{className:"p",children:"Encapsulation means each layer adds its own header while sending data down the stack. Decapsulation means headers are removed while data moves up the stack at the receiver."}),t.jsxs("div",{className:"stack",children:[t.jsxs("div",{className:"layer",children:[t.jsx("div",{className:"tag",children:"Application"}),t.jsx("div",{className:"desc",children:"Data"})]}),t.jsxs("div",{className:"layer",children:[t.jsx("div",{className:"tag",children:"Transport"}),t.jsx("div",{className:"desc",children:"TCP or UDP header + data"})]}),t.jsxs("div",{className:"layer",children:[t.jsx("div",{className:"tag",children:"Network"}),t.jsx("div",{className:"desc",children:"IP header + segment"})]}),t.jsxs("div",{className:"layer",children:[t.jsx("div",{className:"tag",children:"Data Link"}),t.jsx("div",{className:"desc",children:"MAC header + packet + trailer"})]}),t.jsxs("div",{className:"layer",children:[t.jsx("div",{className:"tag",children:"Physical"}),t.jsx("div",{className:"desc",children:"Bits on wire or air"})]})]}),t.jsx("p",{className:"note",children:"Common naming: data becomes segment, then packet, then frame, then bits."})]})]})})})]})},ux={Wrapper:De.section`
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
    `},px=()=>{const[i,c]=pe.useState(!0),l=pe.useMemo(()=>({id:"physicalDataLinkEssentials",title:"Physical and Data Link Essentials",sub:"Signals, cables, frames, MAC, ARP, switching, VLAN, and STP basics in one block."}),[]);return t.jsxs(ux.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(u=>!u),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(Go,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Layer 1 and 2"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(hr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"inner",children:[t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(il,{})}),t.jsx("h3",{className:"h3",children:"Signals - analog vs digital"})]}),t.jsxs("p",{className:"p",children:["A ",t.jsx("b",{children:"signal"})," is the physical form of data travelling through a medium. Networks carry data as electrical pulses, light pulses, or radio waves."]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Analog"})," - continuous wave form where values change smoothly.",t.jsx("span",{className:"small",children:"Example: old radio voice transmission"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Digital"})," - discrete values, usually 0 and 1 represented as pulses.",t.jsx("span",{className:"small",children:"Example: Ethernet uses pulses, fiber uses light on and off"})]})]}),t.jsx("p",{className:"note",children:"In modern networks we mostly send digital data, but the physical carrier can look like an analog wave."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(ip,{})}),t.jsx("h3",{className:"h3",children:"Media - UTP, STP, fiber, wireless"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Media"})," means the path that carries signals. It decides speed, distance, noise resistance, and cost."]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"UTP"})," - Unshielded Twisted Pair",t.jsx("span",{className:"small",children:"Most common Ethernet cable. Twisting reduces noise."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"STP"})," - Shielded Twisted Pair",t.jsx("span",{className:"small",children:"Like UTP but with shielding to reduce interference. Used in noisy areas."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Fiber"})," - Optical Fiber",t.jsx("span",{className:"small",children:"Uses light pulses. Very fast and long distance. Low interference."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Wireless"}),t.jsx("span",{className:"small",children:"Uses radio waves like Wi-Fi. Convenient but interference and walls affect it."})]})]}),t.jsx("p",{className:"note",children:"Simple idea: UTP is cheap and common, fiber is fastest and farthest, wireless is flexible but variable."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(qo,{})}),t.jsx("h3",{className:"h3",children:"MAC address - role and format"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"MAC"})," means ",t.jsx("b",{children:"Media Access Control"}),". A"," ",t.jsx("b",{children:"MAC address"})," is the hardware address used for local delivery on the same network segment. Switches use MAC addresses to forward frames."]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Role"}),t.jsx("div",{className:"v",children:"Identify a network interface on a local link (Layer 2)."})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Format"}),t.jsxs("div",{className:"v",children:["48-bit address written as 6 bytes in hex.",t.jsx("span",{className:"small",children:'Example: "AA:BB:CC:11:22:33"'})]})]})]}),t.jsx("p",{className:"note",children:"IP is for routing across networks. MAC is for delivery inside a local network."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(is,{})}),t.jsx("h3",{className:"h3",children:"Framing, MTU, MSS"})]}),t.jsxs("p",{className:"p",children:["At Data Link layer, data is packed into a"," ",t.jsx("b",{children:"frame"}),". A frame is like an envelope that includes source MAC, destination MAC, and error check information."]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Frame"}),t.jsx("div",{className:"v",children:"Data Link unit that wraps a network layer packet with MAC info."})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"MTU"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"MTU"})," is"," ",t.jsx("b",{children:"Maximum Transmission Unit"}),". Largest frame payload allowed on a link.",t.jsx("span",{className:"small",children:"Example: Ethernet MTU is often 1500 bytes (payload)"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"MSS"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"MSS"})," is"," ",t.jsx("b",{children:"Maximum Segment Size"}),". TCP data size that fits inside IP without fragmentation.",t.jsx("span",{className:"small",children:"Rough idea: MSS is MTU minus headers"})]})]})]}),t.jsx("p",{className:"note",children:"MTU is about link size. MSS is about TCP payload size. Both can cause weird web issues when mismatched."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(as,{})}),t.jsx("h3",{className:"h3",children:"Error detection - CRC"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"CRC"})," means ",t.jsx("b",{children:"Cyclic Redundancy Check"}),". It is an error detection method used to detect if bits got corrupted during transmission."]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Sender calculates a CRC value and adds it to the frame."}),t.jsx("li",{children:"Receiver recalculates CRC and compares."}),t.jsx("li",{children:"If mismatch, the frame is considered corrupted and discarded."})]}),t.jsx("p",{className:"note",children:"CRC detects errors, it does not fix them. Fixing happens by retransmission in higher layers like TCP."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(ap,{})}),t.jsx("h3",{className:"h3",children:"ARP basics"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"ARP"})," means"," ",t.jsx("b",{children:"Address Resolution Protocol"}),". It finds the MAC address for a given IP address inside a local network."]}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"I know IP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Need MAC"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"ARP request"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"ARP reply"})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:'Device sends an ARP broadcast: "Who has this IP"'}),t.jsx("li",{children:"The owner replies with its MAC address"}),t.jsx("li",{children:"Result is stored in ARP cache for some time"})]}),t.jsx("p",{className:"note",children:"ARP is for IPv4. IPv6 uses a different approach called Neighbor Discovery."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(qo,{})}),t.jsx("h3",{className:"h3",children:"Switch basics - CAM table and flooding"})]}),t.jsxs("p",{className:"p",children:["A ",t.jsx("b",{children:"switch"})," is a Layer 2 device that forwards frames using MAC addresses. It learns which MAC address is on which port and builds a table."]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"CAM table"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"CAM"})," is"," ",t.jsx("b",{children:"Content Addressable Memory"}),'. Switch stores "MAC to port" mappings here.',t.jsx("span",{className:"small",children:'Example: "AA:BB:CC:11:22:33" is on port 5'})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Learning"}),t.jsx("div",{className:"v",children:"Switch learns source MAC of incoming frames and records the port."})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Flooding"}),t.jsx("div",{className:"v",children:"If destination MAC is unknown, switch sends the frame to all ports except the source port. Once destination replies, switch learns it and flooding reduces."})]})]}),t.jsx("p",{className:"note",children:"Flooding is normal at first. Too much flooding can indicate loops or misconfiguration."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(is,{})}),t.jsx("h3",{className:"h3",children:"VLAN basics - tagging concept"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"VLAN"})," means"," ",t.jsx("b",{children:"Virtual Local Area Network"}),". It splits one physical switch into multiple logical networks. Devices in different VLANs are separated like they are on different switches."]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Access port"})," - carries traffic for one VLAN (end devices connect here)"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Trunk port"})," - carries traffic for multiple VLANs between switches"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Tagging"})," - frames carry a VLAN ID so switches know which VLAN it belongs to"]})]}),t.jsx("p",{className:"note",children:"VLAN helps isolation and security. Communication between VLANs needs routing (Layer 3)."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(as,{})}),t.jsx("h3",{className:"h3",children:"STP basics - loops are dangerous"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"STP"})," means ",t.jsx("b",{children:"Spanning Tree Protocol"}),". It prevents Layer 2 loops when switches are connected in a way that creates multiple paths."]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Loop can cause broadcast storms because frames keep circulating."}),t.jsx("li",{children:"Switch CAM table can keep changing, causing unstable forwarding."}),t.jsx("li",{children:"STP blocks some ports so there is only one active path between switches."})]}),t.jsx("p",{className:"note",children:"We keep redundant links for safety, but STP ensures only one path is active to avoid loops."})]})]}),t.jsxs("div",{className:"bottomNote",children:[t.jsx("div",{className:"bnIcon",children:t.jsx(Go,{})}),t.jsxs("div",{className:"bnText",children:[t.jsx("div",{className:"bnTitle",children:"Quick memory"}),t.jsx("div",{className:"bnSub",children:"Physical is signals and media. Data Link is frames, MAC, switching, VLAN, and loop protection."})]})]})]})})]})},hx={Wrapper:De.section`
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
    `},mx=()=>{const[i,c]=pe.useState(!0),l=pe.useMemo(()=>({id:"ipAddressing",title:"IP Addressing (IPv4 and IPv6)",sub:"IP is how devices are identified across networks. Learn CIDR, subnet basics, private ranges, NAT, DHCP, and IPv6."}),[]);return t.jsxs(hx.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(u=>!u),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(mt,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Core"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(hr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(op,{})}),t.jsx("h3",{className:"h3",children:"IPv4 format and CIDR"})]}),t.jsx("p",{className:"p",children:"IPv4 is a 32-bit address written as four numbers separated by dots. Each part is 0 to 255."}),t.jsxs("div",{className:"example",children:[t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"mono",children:"192.168.1.25"}),t.jsx("span",{className:"muted",children:"example IPv4 address"})]}),t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"mono",children:"192.168.1.0/24"}),t.jsx("span",{className:"muted",children:"CIDR - first 24 bits are network"})]})]}),t.jsx("p",{className:"p",children:"CIDR tells how many bits belong to the network part. The remaining bits are for hosts inside that network."}),t.jsx("p",{className:"note",children:"Quick memory: /24 often means 255.255.255.0"})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(_f,{})}),t.jsx("h3",{className:"h3",children:"Subnetting essentials"})]}),t.jsx("p",{className:"p",children:"Subnetting splits a bigger network into smaller networks. It helps manage IPs, routing, and isolation."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Network ID"}),t.jsx("span",{className:"small",children:"identifies the network. It is the first address of the subnet."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Broadcast"}),t.jsx("span",{className:"small",children:"last address of the subnet. Used to reach all hosts on that subnet."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Usable range"}),t.jsx("span",{className:"small",children:"IPs between network id and broadcast. Used by devices."})]})]}),t.jsxs("div",{className:"example",children:[t.jsx("div",{className:"line",children:t.jsx("span",{className:"mono",children:"192.168.1.0/24"})}),t.jsx("div",{className:"line",children:t.jsx("span",{className:"muted",children:"Network id: 192.168.1.0"})}),t.jsx("div",{className:"line",children:t.jsx("span",{className:"muted",children:"Broadcast: 192.168.1.255"})}),t.jsx("div",{className:"line",children:t.jsx("span",{className:"muted",children:"Usable: 192.168.1.1 to 192.168.1.254"})})]}),t.jsx("p",{className:"note",children:"Many networks block broadcast usage directly by clients, but the concept is important."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(os,{})}),t.jsx("h3",{className:"h3",children:"Subnet mask meaning"})]}),t.jsx("p",{className:"p",children:"A subnet mask tells which part is network and which part is host. In a mask, network bits are 1 and host bits are 0."}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"CIDR"}),t.jsx("div",{className:"v",children:t.jsx("span",{className:"mono",children:"/24"})})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Mask"}),t.jsx("div",{className:"v",children:t.jsx("span",{className:"mono",children:"255.255.255.0"})})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Meaning"}),t.jsx("div",{className:"v",children:"first 24 bits are network, last 8 bits are hosts"})]})]}),t.jsx("p",{className:"note",children:'In troubleshooting, wrong subnet mask is a very common reason for "no internet".'})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Wf,{})}),t.jsx("h3",{className:"h3",children:"Private IPv4 ranges"})]}),t.jsx("p",{className:"p",children:"Private IPs are used inside homes and companies. They are not routed on the public internet."}),t.jsxs("div",{className:"ranges",children:[t.jsxs("div",{className:"range",children:[t.jsx("div",{className:"rTitle",children:"10.0.0.0/8"}),t.jsx("div",{className:"rSub",children:"10.x.x.x - very large private space"})]}),t.jsxs("div",{className:"range",children:[t.jsx("div",{className:"rTitle",children:"172.16.0.0/12"}),t.jsx("div",{className:"rSub",children:"172.16.x.x to 172.31.x.x"})]}),t.jsxs("div",{className:"range",children:[t.jsx("div",{className:"rTitle",children:"192.168.0.0/16"}),t.jsx("div",{className:"rSub",children:"192.168.x.x - common home routers"})]})]}),t.jsx("p",{className:"note",children:"Your router usually gives private IPs to devices using DHCP."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(dp,{})}),t.jsx("h3",{className:"h3",children:"NAT (SNAT and DNAT idea)"})]}),t.jsx("p",{className:"p",children:"NAT is Network Address Translation. It lets private IP devices access the internet using a public IP on the router."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"SNAT"}),t.jsx("span",{className:"small",children:"Source NAT - outgoing traffic source IP changes from private to public."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"DNAT"}),t.jsx("span",{className:"small",children:"Destination NAT - incoming traffic destination changes to an internal device."})]})]}),t.jsxs("div",{className:"example",children:[t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"mono",children:"192.168.1.10"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"muted",children:"laptop inside home"})]}),t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"mono",children:"Public IP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"muted",children:"router uses this on the internet"})]})]}),t.jsx("p",{className:"note",children:"Port forwarding is DNAT in a common home setup."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(os,{})}),t.jsx("h3",{className:"h3",children:"DHCP (DORA flow)"})]}),t.jsx("p",{className:"p",children:"DHCP automatically gives your device an IP address, subnet mask, gateway, and DNS settings."}),t.jsxs("div",{className:"dora",children:[t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"sTag",children:"D"}),t.jsxs("div",{className:"sText",children:[t.jsx("b",{children:"Discover"}),t.jsx("span",{className:"small",children:'device asks "is there a DHCP server"'})]})]}),t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"sTag",children:"O"}),t.jsxs("div",{className:"sText",children:[t.jsx("b",{children:"Offer"}),t.jsx("span",{className:"small",children:"server offers an IP and config"})]})]}),t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"sTag",children:"R"}),t.jsxs("div",{className:"sText",children:[t.jsx("b",{children:"Request"}),t.jsx("span",{className:"small",children:"device requests that offered IP"})]})]}),t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"sTag",children:"A"}),t.jsxs("div",{className:"sText",children:[t.jsx("b",{children:"Ack"}),t.jsx("span",{className:"small",children:"server confirms and lease starts"})]})]})]}),t.jsx("p",{className:"note",children:'If DHCP fails, you often see "no IP" or "self-assigned IP" issues.'})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(mt,{})}),t.jsx("h3",{className:"h3",children:"IPv6 basics"})]}),t.jsx("p",{className:"p",children:"IPv6 is a 128-bit address written in hex groups separated by colons. It exists because IPv4 addresses are limited and the internet needs more unique addresses."}),t.jsxs("div",{className:"ipv6Grid",children:[t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"bTitle",children:"Format"}),t.jsx("div",{className:"bText",children:t.jsx("span",{className:"mono",children:"2001:0db8:85a3:0000:0000:8a2e:0370:7334"})})]}),t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"bTitle",children:"Shorthand rules"}),t.jsxs("div",{className:"bText",children:["- Leading zeros can be removed in a group",t.jsx("br",{}),'- One longest run of consecutive zeros can be replaced with "::"']})]}),t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"bTitle",children:"Common types"}),t.jsxs("div",{className:"bText",children:[t.jsx("b",{children:"Global"})," - public internet reachable",t.jsx("br",{}),t.jsx("b",{children:"Link-local"})," - starts with"," ",t.jsx("span",{className:"mono",children:"fe80::"}),", used inside local link",t.jsx("br",{}),t.jsx("b",{children:"Multicast"})," - starts with"," ",t.jsx("span",{className:"mono",children:"ff00::"})]})]}),t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"bTitle",children:"Why IPv6 exists"}),t.jsx("div",{className:"bText",children:"More address space, better end-to-end connectivity, simpler address assignment ideas, less NAT dependency."})]})]}),t.jsx("p",{className:"note",children:"You will often see both IPv4 and IPv6 on modern systems. That is dual stack."})]})]})})]})},fx={Wrapper:De.section`
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
    `},xx=()=>{const[i,c]=pe.useState(!0),l=pe.useMemo(()=>({id:"routingBasics",title:"Routing Basics",sub:"Routers move packets between networks. Learn gateway, routing table, ICMP, and TTL hops."}),[]);return t.jsxs(fx.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(u=>!u),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(os,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Core"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(hr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(ip,{})}),t.jsx("h3",{className:"h3",children:"Router vs switch vs gateway"})]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Switch"}),t.jsxs("div",{className:"v",children:["Works inside a LAN. Forwards by MAC address.",t.jsx("span",{className:"small",children:"Example: office switch connects many PCs"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Router"}),t.jsxs("div",{className:"v",children:["Connects different networks. Forwards by IP and routing table.",t.jsx("span",{className:"small",children:"Example: home router connects LAN to Internet"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Gateway"}),t.jsxs("div",{className:"v",children:["The exit point from your network to another network. In homes, the router is usually the gateway.",t.jsx("span",{className:"small",children:"Example: default gateway is 192.168.1.1"})]})]})]}),t.jsx("p",{className:"note",children:"Quick memory: switch is inside, router connects outside, gateway is the exit address your device uses."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Qo,{})}),t.jsx("h3",{className:"h3",children:"Routing table idea"})]}),t.jsx("p",{className:"p",children:"A routing table is like a map that tells the router where to send a packet next. The router looks at the destination IP, finds the best matching route, then forwards the packet to the next hop."}),t.jsxs("div",{className:"rt",children:[t.jsxs("div",{className:"rtRow head",children:[t.jsx("div",{className:"c1",children:"Destination"}),t.jsx("div",{className:"c2",children:"Next hop"}),t.jsx("div",{className:"c3",children:"Interface"})]}),t.jsxs("div",{className:"rtRow",children:[t.jsx("div",{className:"c1",children:"192.168.1.0/24"}),t.jsx("div",{className:"c2",children:"Direct"}),t.jsx("div",{className:"c3",children:"LAN"})]}),t.jsxs("div",{className:"rtRow",children:[t.jsx("div",{className:"c1",children:"10.0.0.0/8"}),t.jsx("div",{className:"c2",children:"10.1.1.1"}),t.jsx("div",{className:"c3",children:"WAN"})]}),t.jsxs("div",{className:"rtRow",children:[t.jsx("div",{className:"c1",children:"0.0.0.0/0"}),t.jsx("div",{className:"c2",children:"ISP gateway"}),t.jsx("div",{className:"c3",children:"WAN"})]})]}),t.jsx("p",{className:"note",children:'The default route 0.0.0.0/0 means "everything else goes this way".'})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Rf,{})}),t.jsx("h3",{className:"h3",children:"Default gateway"})]}),t.jsx("p",{className:"p",children:"Default gateway is the IP address your device uses when the destination is outside your local network. If you are sending to a different subnet or the internet, your computer sends the packet to the gateway first."}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"Laptop"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Default gateway"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"ISP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Server"})]}),t.jsx("p",{className:"note",children:"If your internet is not working, check if you can ping the default gateway first."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(os,{})}),t.jsx("h3",{className:"h3",children:"Static vs dynamic routing"})]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Static routing"}),t.jsx("span",{className:"small",children:"Routes are manually configured. Simple, predictable, but not flexible."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Dynamic routing"}),t.jsx("span",{className:"small",children:"Routers learn routes automatically using routing protocols. Handles changes better."})]})]}),t.jsx("p",{className:"note",children:"Static is common in small networks. Dynamic is used when you have many routers or changing paths."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Qo,{})}),t.jsx("h3",{className:"h3",children:"Routing protocols (high level use)"})]}),t.jsxs("div",{className:"proto",children:[t.jsxs("div",{className:"protoRow head",children:[t.jsx("div",{className:"c1",children:"Protocol"}),t.jsx("div",{className:"c2",children:"Used for"}),t.jsx("div",{className:"c3",children:"Simple idea"})]}),t.jsxs("div",{className:"protoRow",children:[t.jsx("div",{className:"c1",children:"RIP"}),t.jsx("div",{className:"c2",children:"Small networks"}),t.jsx("div",{className:"c3",children:"Uses hop count as metric. Easy but limited."})]}),t.jsxs("div",{className:"protoRow",children:[t.jsx("div",{className:"c1",children:"OSPF"}),t.jsx("div",{className:"c2",children:"Enterprise internal routing"}),t.jsx("div",{className:"c3",children:"Chooses best path using cost. Fast convergence."})]}),t.jsxs("div",{className:"protoRow",children:[t.jsx("div",{className:"c1",children:"BGP"}),t.jsx("div",{className:"c2",children:"Internet wide routing"}),t.jsx("div",{className:"c3",children:"Connects ISPs and big networks. Policy based routing."})]})]}),t.jsx("p",{className:"note",children:"Easy memory: RIP small, OSPF enterprise, BGP internet."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(nl,{})}),t.jsx("h3",{className:"h3",children:"ICMP basics (ping and traceroute)"})]}),t.jsx("p",{className:"p",children:"ICMP is used for network diagnostics and error reporting. It is not TCP or UDP. Ping uses ICMP Echo Request and Echo Reply to test reachability."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"ping"}),t.jsx("span",{className:"small",children:"Checks if a host is reachable and shows latency."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"traceroute"}),t.jsx("span",{className:"small",children:"Shows the path packets take across hops using TTL behavior."})]})]}),t.jsx("p",{className:"note",children:"If ping to gateway fails, it is likely local network issue, not DNS."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(sp,{})}),t.jsx("h3",{className:"h3",children:"TTL and hop concept"})]}),t.jsx("p",{className:"p",children:"TTL means Time To Live. It is a number inside the IP header. Every router that forwards a packet decreases TTL by 1. If TTL reaches 0, the packet is dropped."}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"Start TTL 64"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Hop 1 TTL 63"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Hop 2 TTL 62"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"and so on"})]}),t.jsx("p",{className:"note",children:"TTL prevents infinite loops. Traceroute uses this behavior to reveal hop-by-hop path."})]})]})})]})},vx={Wrapper:De.section`
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
    `},gx=()=>{const[i,c]=pe.useState(!0),l=pe.useMemo(()=>({id:"transportLayerTcpUdp",title:"Transport Layer - TCP vs UDP",sub:"Ports, sockets, delivery guarantees, and the practical difference between TCP and UDP."}),[]);return t.jsxs(vx.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(u=>!u),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(Ko,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Core"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(hr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(os,{})}),t.jsx("h3",{className:"h3",children:"What is the Transport Layer"})]}),t.jsx("p",{className:"p",children:"The Transport Layer (Layer 4 in OSI) delivers data from one application to another application. It sits above IP (Internet Protocol) and adds the idea of ports, reliability, ordering, and flow control."}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"App data"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"TCP or UDP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"IP"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Network"})]}),t.jsx("p",{className:"note",children:"IP (Internet Protocol) moves packets host to host. TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) move data app to app using ports."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Cu,{})}),t.jsx("h3",{className:"h3",children:"Port numbers and sockets"})]}),t.jsx("p",{className:"p",children:"A port is a logical number that identifies which application or service should receive the data on a machine. One IP address can run many services, ports separate them."}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Port"}),t.jsxs("div",{className:"v",children:["A number in range 0 to 65535.",t.jsx("span",{className:"small",children:"Example: HTTPS uses port 443"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Socket"}),t.jsxs("div",{className:"v",children:["An endpoint of communication. Usually written as IP:Port.",t.jsx("span",{className:"small",children:"Example: 192.168.1.10:5173"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Connection"}),t.jsxs("div",{className:"v",children:["For TCP, a connection is identified by a 4-tuple.",t.jsx("span",{className:"small",children:"Source IP, Source Port, Destination IP, Destination Port"})]})]})]}),t.jsx("p",{className:"note",children:"One server can handle thousands of clients because each client connection has a different 4-tuple."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(sl,{})}),t.jsx("h3",{className:"h3",children:"TCP vs UDP (quick compare)"})]}),t.jsxs("div",{className:"compare",children:[t.jsxs("div",{className:"row head",children:[t.jsx("div",{className:"c1",children:"Point"}),t.jsx("div",{className:"c2",children:"TCP"}),t.jsx("div",{className:"c3",children:"UDP"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"c1",children:"Full form"}),t.jsx("div",{className:"c2",children:"Transmission Control Protocol"}),t.jsx("div",{className:"c3",children:"User Datagram Protocol"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"c1",children:"Connection"}),t.jsx("div",{className:"c2",children:"Connection-oriented"}),t.jsx("div",{className:"c3",children:"Connectionless"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"c1",children:"Ordering"}),t.jsx("div",{className:"c2",children:"Keeps order (sequence numbers)"}),t.jsx("div",{className:"c3",children:"No ordering guarantee"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"c1",children:"Reliability"}),t.jsx("div",{className:"c2",children:"Reliable (ACK + retransmit)"}),t.jsx("div",{className:"c3",children:"Best effort"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"c1",children:"Speed"}),t.jsx("div",{className:"c2",children:"More overhead"}),t.jsx("div",{className:"c3",children:"Less overhead"})]})]}),t.jsx("p",{className:"note",children:"Rule: use TCP when correctness matters, use UDP when speed and low delay matter."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(nl,{})}),t.jsx("h3",{className:"h3",children:"TCP features (explained)"})]}),t.jsxs("div",{className:"section",children:[t.jsx("h4",{className:"h4",children:"1) 3-way handshake"}),t.jsx("p",{className:"p",children:"TCP starts with a handshake to create a connection and agree on initial sequence numbers."}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"SYN"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"SYN-ACK"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"ACK"})]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"SYN"}),' - Synchronize. Client says "I want to start a connection".']}),t.jsxs("li",{children:[t.jsx("b",{children:"ACK"}),' - Acknowledgment. Receiver says "I received your message".']}),t.jsxs("li",{children:[t.jsx("b",{children:"SYN-ACK"}),' - Server replies "I agree, and I also acknowledge your SYN".']})]}),t.jsx("p",{className:"note",children:"This handshake helps TCP start reliably and prevents confusion between old and new packets."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h4",{className:"h4",children:"2) Sequence number and ACK"}),t.jsxs("p",{className:"p",children:["TCP breaks data into segments. Each segment has a ",t.jsx("b",{children:"sequence number"})," that helps the receiver put data back in correct order. Receiver sends"," ",t.jsx("b",{children:"ACK"})," with the next expected sequence number."]}),t.jsxs("div",{className:"exampleBox",children:[t.jsxs("div",{className:"exRow",children:[t.jsx("span",{className:"mono",children:"Seq=1000"}),t.jsx("span",{className:"txt",children:"Segment sent"})]}),t.jsxs("div",{className:"exRow",children:[t.jsx("span",{className:"mono",children:"ACK=1200"}),t.jsx("span",{className:"txt",children:"Receiver expects next byte from 1200"})]})]}),t.jsx("p",{className:"note",children:"If a segment is missing, ACK does not move forward and sender can retransmit."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h4",{className:"h4",children:"3) Flow control (window)"}),t.jsxs("p",{className:"p",children:["Flow control prevents a fast sender from overwhelming a slow receiver. Receiver tells the sender how much buffer space it has using a"," ",t.jsx("b",{children:"window"}),"."]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Window"})," - how much data can be in flight without waiting for ACK."]}),t.jsx("li",{children:"If receiver is busy, it advertises a smaller window."}),t.jsx("li",{children:"This protects the receiver from memory overload."})]}),t.jsx("p",{className:"note",children:"Think: window is receiver-side capacity control."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h4",{className:"h4",children:"4) Congestion control (high level)"}),t.jsx("p",{className:"p",children:"Congestion control protects the network, not just the receiver. Congestion means routers and links are overloaded, causing packet loss and delays."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"TCP adjusts its sending rate depending on loss and delay signals."}),t.jsx("li",{children:"It increases speed when network is fine, and decreases when congestion is detected."}),t.jsxs("li",{children:[t.jsx("b",{children:"cwnd"})," - congestion window, a limit decided by TCP based on network conditions."]})]}),t.jsx("p",{className:"note",children:"Think: window is receiver capacity, cwnd is network capacity."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h4",{className:"h4",children:"5) Retransmission"}),t.jsx("p",{className:"p",children:"Retransmission means sending data again when it is lost. TCP detects loss using timeouts or repeated ACK patterns."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"If ACK does not arrive in time, sender retransmits (timeout)."}),t.jsx("li",{children:"If receiver keeps ACKing the same number, sender suspects a missing segment (duplicate ACK)."}),t.jsx("li",{children:"This is why TCP is reliable."})]}),t.jsx("p",{className:"note",children:"Reliability comes from tracking sequence numbers and resending missing parts."})]})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Ko,{})}),t.jsx("h3",{className:"h3",children:"UDP features and use cases"})]}),t.jsx("p",{className:"p",children:"UDP is simple and fast. It sends datagrams without creating a connection. There is no handshake, no ordering guarantee, and no built-in retransmission."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Low overhead - minimal header, fast processing"}),t.jsx("li",{children:"Best for real-time where late data is useless"}),t.jsx("li",{children:"Apps can implement reliability if needed"})]}),t.jsxs("div",{className:"chips",children:[t.jsx("span",{className:"chip",children:"video streaming"}),t.jsx("span",{className:"chip",children:"voice calls"}),t.jsx("span",{className:"chip",children:"online games"}),t.jsx("span",{className:"chip",children:"DNS queries"}),t.jsx("span",{className:"chip",children:"DHCP"})]}),t.jsx("p",{className:"note",children:"Example: In a call, it is better to drop an old packet than to wait and create delay."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Cu,{})}),t.jsx("h3",{className:"h3",children:"Common port numbers (must know)"})]}),t.jsx("p",{className:"p",children:"Many services have standard ports. You should remember the common ones for interviews and debugging."}),t.jsxs("div",{className:"ports",children:[t.jsxs("div",{className:"pRow head",children:[t.jsx("div",{className:"a",children:"Port"}),t.jsx("div",{className:"b",children:"Protocol"}),t.jsx("div",{className:"c",children:"Use"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"20, 21"}),t.jsx("div",{className:"b",children:"FTP"}),t.jsx("div",{className:"c",children:"File Transfer Protocol"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"22"}),t.jsx("div",{className:"b",children:"SSH"}),t.jsx("div",{className:"c",children:"Secure Shell (remote login)"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"23"}),t.jsx("div",{className:"b",children:"Telnet"}),t.jsx("div",{className:"c",children:"Unencrypted remote login"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"25"}),t.jsx("div",{className:"b",children:"SMTP"}),t.jsx("div",{className:"c",children:"Simple Mail Transfer Protocol"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"53"}),t.jsx("div",{className:"b",children:"DNS"}),t.jsx("div",{className:"c",children:"Domain Name System"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"67, 68"}),t.jsx("div",{className:"b",children:"DHCP"}),t.jsx("div",{className:"c",children:"Dynamic Host Configuration Protocol"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"80"}),t.jsx("div",{className:"b",children:"HTTP"}),t.jsx("div",{className:"c",children:"Hypertext Transfer Protocol"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"110"}),t.jsx("div",{className:"b",children:"POP3"}),t.jsx("div",{className:"c",children:"Post Office Protocol v3"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"143"}),t.jsx("div",{className:"b",children:"IMAP"}),t.jsx("div",{className:"c",children:"Internet Message Access Protocol"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"443"}),t.jsx("div",{className:"b",children:"HTTPS"}),t.jsx("div",{className:"c",children:"HTTP Secure (HTTP over TLS)"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"3306"}),t.jsx("div",{className:"b",children:"MySQL"}),t.jsx("div",{className:"c",children:"Database"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"5432"}),t.jsx("div",{className:"b",children:"PostgreSQL"}),t.jsx("div",{className:"c",children:"Database"})]}),t.jsxs("div",{className:"pRow",children:[t.jsx("div",{className:"a",children:"6379"}),t.jsx("div",{className:"b",children:"Redis"}),t.jsx("div",{className:"c",children:"In-memory data store"})]})]}),t.jsx("p",{className:"note",children:"TCP is common for HTTP and HTTPS. DNS mostly uses UDP, but it can use TCP for large responses."})]})]})})]})},yx={Wrapper:De.section`
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
    `},jx=()=>{const[i,c]=pe.useState(!0),l=pe.useMemo(()=>({id:"applicationLayerProtocols",title:"Application Layer Protocols",sub:"Must-know protocols used by browsers, apps, and servers. Focus on what they do and where they fit."}),[]);return t.jsxs(yx.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(u=>!u),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(mt,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Must know"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(hr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"inner",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(lp,{})}),t.jsx("h3",{className:"h3",children:"HTTP vs HTTPS with TLS overview"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"HTTP"}),' means "Hypertext Transfer Protocol". It is the request-response protocol used by browsers and APIs. It sends data as plain text by default.']}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"HTTPS"}),' means "Hypertext Transfer Protocol Secure". It is HTTP running over ',t.jsx("b",{children:"TLS"}),', which means "Transport Layer Security". TLS encrypts data in transit and also helps verify the server identity using certificates.']}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"HTTP"}),t.jsx("div",{className:"v",children:"No encryption. Easier to sniff on public Wi-Fi. Mostly used only for test or internal."})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"HTTPS"}),t.jsx("div",{className:"v",children:"Encrypted with TLS. Protects login, cookies, and private data."})]})]}),t.jsx("p",{className:"note",children:"Quick TLS idea: browser and server do a handshake, agree on keys, then encrypt all traffic."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Ca,{})}),t.jsx("h3",{className:"h3",children:"DNS basics and records"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"DNS"}),' means "Domain Name System". It converts domain names like "example.com" into IP addresses so computers can connect.']}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"A"}),' record - "Address" record for IPv4',t.jsx("span",{className:"small",children:"Example: example.com - 93.184.216.34"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"AAAA"})," record - IPv6 address record",t.jsx("span",{className:"small",children:"Example: example.com - 2606:2800:220:1:248:1893:25c8:1946"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"CNAME"}),' record - "Canonical Name" alias',t.jsx("span",{className:"small",children:"Example: www.example.com points to example.com"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"MX"}),' record - "Mail Exchange" for email routing',t.jsx("span",{className:"small",children:"Example: mail for example.com is handled by mail.example.com"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"NS"}),' record - "Name Server" that hosts DNS records',t.jsx("span",{className:"small",children:"Example: ns1.provider.com and ns2.provider.com"})]})]}),t.jsx("p",{className:"note",children:"DNS caching is common. That is why changes can take time to fully show everywhere."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(cp,{})}),t.jsx("h3",{className:"h3",children:"Email basics: SMTP, IMAP, POP3"})]}),t.jsx("p",{className:"p",children:"Email has two main parts - sending and receiving. Sending is usually SMTP. Receiving is IMAP or POP3."}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"SMTP"}),t.jsx("div",{className:"v",children:'"Simple Mail Transfer Protocol" - used to send email from client to server and between mail servers.'})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"IMAP"}),t.jsx("div",{className:"v",children:'"Internet Message Access Protocol" - keeps mail on server and syncs across devices.'})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"POP3"}),t.jsx("div",{className:"v",children:'"Post Office Protocol version 3" - downloads mail to device, often less sync-friendly.'})]})]}),t.jsx("p",{className:"note",children:"Modern apps mostly use IMAP for receiving because it keeps mailbox consistent across phone and laptop."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Zf,{})}),t.jsx("h3",{className:"h3",children:"FTP vs SFTP vs SCP"})]}),t.jsx("p",{className:"p",children:"These are used to transfer files between machines. Main difference is security and how they operate."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"FTP"}),' - "File Transfer Protocol"',t.jsx("span",{className:"small",children:"Old and not secure by default. Username and password can be exposed."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"SFTP"}),' - "SSH File Transfer Protocol"',t.jsx("span",{className:"small",children:"Runs over SSH. Encrypted. Safe option for file transfer."})]}),t.jsxs("li",{children:[t.jsx("b",{children:"SCP"}),' - "Secure Copy Protocol"',t.jsx("span",{className:"small",children:"Simple secure copy over SSH. Best for quick file copy, not a full file manager."})]})]}),t.jsx("p",{className:"note",children:"Memory: SFTP and SCP use SSH so they are encrypted."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(up,{})}),t.jsx("h3",{className:"h3",children:"SSH basics"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"SSH"}),' means "Secure Shell". It provides a secure way to remotely login and run commands on a server. It also supports tunneling and secure file transfer.']}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"ssh user@server"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Encrypted remote terminal"})]}),t.jsx("p",{className:"note",children:"SSH commonly uses port 22. Authentication can be password or key-based."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(qf,{})}),t.jsx("h3",{className:"h3",children:"DHCP and NTP"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"DHCP"}),' means "Dynamic Host Configuration Protocol". It automatically assigns IP address, subnet mask, gateway, and DNS server details to devices.']}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"Discover"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Offer"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Request"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Acknowledge"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"NTP"}),' means "Network Time Protocol". It keeps system clocks correct by syncing time from time servers. Correct time matters for logs, security, and certificates.']}),t.jsx("p",{className:"note",children:"Broken time can break HTTPS because certificates depend on correct date and time."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(sl,{})}),t.jsx("h3",{className:"h3",children:"WebSockets concept"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"WebSocket"})," is a protocol that creates a long-lived connection between browser and server. It allows two-way communication, so server can push updates instantly."]}),t.jsx("p",{className:"p",children:"Use case: chat apps, live notifications, real-time dashboards, multiplayer games. It avoids repeated polling requests."}),t.jsx("p",{className:"note",children:"WebSocket usually starts as an HTTP request, then upgrades the connection."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(mt,{})}),t.jsx("h3",{className:"h3",children:"REST vs gRPC"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"REST"}),' means "Representational State Transfer". It is an API style that uses HTTP methods like GET, POST, PUT, DELETE, usually with JSON payloads.']}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"gRPC"}),' means "Google Remote Procedure Call". It is a high-performance RPC framework. It uses Protocol Buffers and often runs over HTTP/2.']}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"REST"}),t.jsx("div",{className:"v",children:"Human-readable, easy for web, common for public APIs."})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"gRPC"}),t.jsx("div",{className:"v",children:"Faster and strongly typed, common in microservices and internal systems."})]})]}),t.jsx("p",{className:"note",children:"Very high level rule: REST is simpler to start, gRPC is stronger for service-to-service."})]}),t.jsxs("div",{className:"footerTip",children:[t.jsx("div",{className:"tipTitle",children:"Quick debug mindset"}),t.jsx("div",{className:"tipText",children:"If a website fails: check DNS first, then ping, then ports, then TLS, then HTTP status codes."})]})]})})]})},Nx={Wrapper:De.section`
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
    `},wx=()=>{const[i,c]=pe.useState(!0),l=pe.useMemo(()=>({id:"webNetworkingPracticalStuff",title:"Web Networking Practical Stuff",sub:"URL parts, request flow, and the infrastructure pieces that make the modern web work."}),[]);return t.jsxs(Nx.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(u=>!u),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(mt,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Web"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(hr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(sl,{})}),t.jsx("h3",{className:"h3",children:"URL breakdown"})]}),t.jsx("p",{className:"p",children:'A URL means "Uniform Resource Locator". It tells the browser where a resource is and how to reach it.'}),t.jsxs("div",{className:"urlBox",children:[t.jsxs("div",{className:"urlLine",children:[t.jsx("span",{className:"mono",children:"https"}),t.jsx("span",{className:"muted",children:"://"}),t.jsx("span",{className:"mono",children:"api.example.com"}),t.jsx("span",{className:"mono",children:"/users"}),t.jsx("span",{className:"muted",children:"?"}),t.jsx("span",{className:"mono",children:"page=2"}),t.jsx("span",{className:"muted",children:"&"}),t.jsx("span",{className:"mono",children:"sort=latest"})]}),t.jsxs("div",{className:"parts",children:[t.jsxs("div",{className:"part",children:[t.jsx("div",{className:"k",children:"Scheme"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"https"})," tells the protocol.",t.jsx("span",{className:"small",children:'HTTP is "Hypertext Transfer Protocol". HTTPS is HTTP + TLS.'})]})]}),t.jsxs("div",{className:"part",children:[t.jsx("div",{className:"k",children:"Host"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"api.example.com"})," is the domain name that will be resolved to an IP address.",t.jsx("span",{className:"small",children:'IP is "Internet Protocol".'})]})]}),t.jsxs("div",{className:"part",children:[t.jsx("div",{className:"k",children:"Path"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"/users"})," is the resource path on the server.",t.jsx("span",{className:"small",children:"Often maps to a route in a web server or API."})]})]}),t.jsxs("div",{className:"part",children:[t.jsx("div",{className:"k",children:"Query"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"?page=2&sort=latest"})," is extra parameters.",t.jsx("span",{className:"small",children:"Used for filtering, pagination, sorting, search."})]})]})]})]}),t.jsx("p",{className:"note",children:'A URL can also include a port like ":5173" and a fragment like "#section".'})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(il,{})}),t.jsx("h3",{className:"h3",children:"What happens when you type a URL"})]}),t.jsx("p",{className:"p",children:"The browser does a small chain of steps. If any step fails, the page does not load."}),t.jsxs("div",{className:"steps",children:[t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"num",children:"1"}),t.jsxs("div",{className:"body",children:[t.jsx("div",{className:"t",children:"DNS resolve"}),t.jsx("div",{className:"d",children:'DNS is "Domain Name System". It converts a domain name like "example.com" into an IP address like "93.184.216.34".'}),t.jsx("div",{className:"ex",children:"Example: Browser asks a DNS resolver, gets an A record for IPv4 or AAAA record for IPv6."})]})]}),t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"num",children:"2"}),t.jsxs("div",{className:"body",children:[t.jsx("div",{className:"t",children:"TCP connect"}),t.jsx("div",{className:"d",children:'TCP is "Transmission Control Protocol". It creates a reliable connection using a 3-way handshake.'}),t.jsx("div",{className:"ex",children:"Example: Client connects to server IP on port 443 for HTTPS."})]})]}),t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"num",children:"3"}),t.jsxs("div",{className:"body",children:[t.jsx("div",{className:"t",children:"TLS handshake"}),t.jsx("div",{className:"d",children:'TLS is "Transport Layer Security". It encrypts data so nobody can read it in the middle. TLS is what makes HTTPS secure.'}),t.jsx("div",{className:"ex",children:"Example: Browser verifies certificate and agrees on encryption keys."})]})]}),t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"num",children:"4"}),t.jsxs("div",{className:"body",children:[t.jsx("div",{className:"t",children:"HTTP request and response"}),t.jsx("div",{className:"d",children:'HTTP is "Hypertext Transfer Protocol". Browser sends a request like GET or POST. Server responds with status code and data.'}),t.jsx("div",{className:"ex",children:'Example: GET "/users?page=2" returns JSON or HTML.'})]})]}),t.jsxs("div",{className:"step",children:[t.jsx("div",{className:"num",children:"5"}),t.jsxs("div",{className:"body",children:[t.jsx("div",{className:"t",children:"Render"}),t.jsx("div",{className:"d",children:"Browser parses HTML, loads CSS, runs JavaScript, then paints the page."}),t.jsx("div",{className:"ex",children:"Example: More requests happen for images, fonts, API calls, and scripts."})]})]})]}),t.jsx("p",{className:"note",children:"Debug order is usually DNS, reachability, port, TLS, then HTTP."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(al,{})}),t.jsx("h3",{className:"h3",children:"Cookies, sessions, and CORS"})]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Cookie"}),t.jsxs("div",{className:"v",children:["Small data stored by the browser and sent with requests to the same site.",t.jsx("span",{className:"small",children:"Common use: session id, preferences, auth tokens."})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Session"}),t.jsxs("div",{className:"v",children:["A server-side memory of a logged-in user. Browser usually stores only a session id cookie.",t.jsx("span",{className:"small",children:'"Session id" points to user data on server.'})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"CORS"}),t.jsxs("div",{className:"v",children:['CORS is "Cross-Origin Resource Sharing". It is a browser security rule that controls whether a webpage can call an API from a different origin.',t.jsx("span",{className:"small",children:'Origin = scheme + host + port. Example: "https://a.com:443".'})]})]})]}),t.jsx("p",{className:"note",children:"CORS is enforced by browsers, not by servers. Server only sends headers that browser checks."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(dp,{})}),t.jsx("h3",{className:"h3",children:"CDN basics"})]}),t.jsx("p",{className:"p",children:'CDN is "Content Delivery Network". It is a network of servers placed in many locations to serve content faster. Instead of every user hitting one server far away, users get content from a nearby edge server.'}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Faster load because distance and latency reduce"}),t.jsx("li",{children:"Caching of images, videos, JavaScript, CSS"}),t.jsx("li",{children:"Helps absorb traffic spikes"})]}),t.jsx("p",{className:"note",children:"Example: Cloudflare and other CDNs store a cached copy of static files near users."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Ca,{})}),t.jsx("h3",{className:"h3",children:"Proxy vs reverse proxy"})]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Proxy"}),t.jsxs("div",{className:"v",children:["A client-side middleman. Client sends requests to proxy, proxy sends to internet.",t.jsx("span",{className:"small",children:"Used for privacy, filtering, access control."})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Reverse proxy"}),t.jsxs("div",{className:"v",children:["A server-side middleman. Users hit reverse proxy, it forwards to your backend servers.",t.jsx("span",{className:"small",children:"Used for load balancing, SSL termination, caching, security."})]})]})]}),t.jsx("p",{className:"note",children:"Simple memory: proxy protects clients, reverse proxy protects servers."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Ca,{})}),t.jsx("h3",{className:"h3",children:"Load balancer basics"})]}),t.jsx("p",{className:"p",children:"A load balancer distributes traffic across multiple servers so one server does not get overloaded. This improves performance and availability."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Spreads requests across servers using strategies like round robin"}),t.jsx("li",{children:"Can do health checks and remove bad servers automatically"}),t.jsx("li",{children:"Helps scale horizontally by adding more servers"})]}),t.jsx("p",{className:"note",children:"In many setups, the reverse proxy and load balancer are the same component."})]})]})})]})},kx={Wrapper:De.section`
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
    `},bx=()=>{const[i,c]=pe.useState(!0),l=pe.useMemo(()=>({id:"wirelessMobileBasics",title:"Wireless and Mobile Basics",sub:"Wi-Fi terms, frequency bands, access points, Bluetooth, and cellular basics."}),[]);return t.jsxs(kx.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(u=>!u),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(un,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Wireless"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(hr,{})})]}),t.jsxs("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:[t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(un,{})}),t.jsx("h3",{className:"h3",children:"Wi-Fi basics"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Wi-Fi"})," is wireless networking based on IEEE 802.11 standards. It lets devices connect to a local network using radio waves."]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"SSID"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Service Set Identifier"})," - the Wi-Fi network name you see.",t.jsx("span",{className:"small",children:'Example: "Ash-Home-5G"'})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"BSSID"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Basic Service Set Identifier"})," - the access point identifier, usually its MAC address.",t.jsx("span",{className:"small",children:"Useful when multiple access points share the same SSID."})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"WPA2"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Wi-Fi Protected Access 2"})," - common Wi-Fi security standard.",t.jsx("span",{className:"small",children:"Uses strong encryption (typically AES) for protection."})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"WPA3"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Wi-Fi Protected Access 3"})," - newer and stronger security than WPA2.",t.jsx("span",{className:"small",children:"Better protection against password guessing attacks."})]})]})]}),t.jsx("p",{className:"note",children:"Simple rule: use WPA3 if available, otherwise WPA2 is still standard for most networks."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Go,{})}),t.jsx("h3",{className:"h3",children:"2.4 GHz vs 5 GHz"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"GHz"})," means gigahertz, a unit of frequency. Wi-Fi uses radio frequency bands, most commonly 2.4 GHz and 5 GHz."]}),t.jsxs("div",{className:"split",children:[t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"boxTitle",children:"2.4 GHz"}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:["Better ",t.jsx("b",{children:"range"})," - travels farther and through walls"]}),t.jsxs("li",{children:["Usually more ",t.jsx("b",{children:"interference"})," - many devices use it"]}),t.jsxs("li",{children:["Often lower ",t.jsx("b",{children:"speed"})," compared to 5 GHz"]})]})]}),t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"boxTitle",children:"5 GHz"}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:["Higher ",t.jsx("b",{children:"speed"})," - better for streaming and fast downloads"]}),t.jsxs("li",{children:["Lower ",t.jsx("b",{children:"range"})," - weaker through walls"]}),t.jsxs("li",{children:["Usually less ",t.jsx("b",{children:"interference"})," than 2.4 GHz"]})]})]})]}),t.jsx("p",{className:"note",children:"Quick pick: close to router use 5 GHz, far or many walls use 2.4 GHz."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(If,{})}),t.jsx("h3",{className:"h3",children:"Access point vs router"})]}),t.jsx("p",{className:"p",children:'People often call everything "Wi-Fi", but devices have different roles. Understanding this makes troubleshooting easier.'}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"AP"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Access Point"})," - provides Wi-Fi to devices and connects them to the local network.",t.jsx("span",{className:"small",children:'Think: "Wi-Fi transmitter for your LAN"'})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Router"}),t.jsxs("div",{className:"v",children:["Sends traffic between networks. Connects your home network to the internet (WAN).",t.jsx("span",{className:"small",children:'Home "router" is usually router + switch + access point in one box.'})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Modem"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Modulator Demodulator"})," - converts ISP signal to usable internet connection.",t.jsx("span",{className:"small",children:"Fiber setups often use ONT, not classic modem."})]})]})]}),t.jsx("p",{className:"note",children:"If Wi-Fi works but internet does not, AP is fine but router or ISP link may be the issue."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Lf,{})}),t.jsx("h3",{className:"h3",children:"Bluetooth"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Bluetooth"})," is a short-range wireless technology used mainly for personal devices. It is designed for low power and quick connections."]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Use cases: earphones, keyboard, mouse, smartwatch, car audio"}),t.jsx("li",{children:"Range: usually a few meters to tens of meters depending on device class"}),t.jsx("li",{children:"Bluetooth is not for normal internet browsing like Wi-Fi, it is more for device-to-device links"})]}),t.jsx("p",{className:"note",children:"Wi-Fi is for network and internet. Bluetooth is for nearby device connection."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Kf,{})}),t.jsx("h3",{className:"h3",children:"Cellular high level"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Cellular network"})," is mobile internet provided by telecom companies. The area is split into cells, each served by a base station (mobile tower). Your phone connects to the nearest cell and moves between cells as you travel."]}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"SIM"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Subscriber Identity Module"})," - identifies you to the carrier network."]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"LTE"}),t.jsxs("div",{className:"v",children:[t.jsx("b",{children:"Long Term Evolution"})," - commonly called 4G."]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"5G"}),t.jsx("div",{className:"v",children:"Fifth Generation mobile network - higher speed and lower latency in many cases."})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Base station"}),t.jsx("div",{className:"v",children:"Mobile tower equipment that connects phones to the carrier network."})]})]}),t.jsx("p",{className:"note",children:"In simple words: Wi-Fi connects you to a local router. Cellular connects you to a carrier tower."}),t.jsxs("div",{className:"callout",children:[t.jsx("span",{className:"callIcon",children:t.jsx(al,{})}),t.jsxs("div",{className:"callText",children:[t.jsx("div",{className:"callTitle",children:"Security note"}),t.jsx("div",{className:"callBody",children:"Prefer HTTPS sites on both Wi-Fi and cellular. Public Wi-Fi can be risky if misconfigured."})]})]})]})]}),t.jsx("div",{className:"footerLine",children:t.jsx("div",{className:"hint",children:"Quick memory: 2.4 GHz is range, 5 GHz is speed. Router connects networks, AP gives Wi-Fi."})})]})]})},Sx={Wrapper:De.section`
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
    `},Px=()=>{const[i,c]=pe.useState(!0),l=pe.useMemo(()=>({id:"securityBasics",title:"Security Basics",sub:"Core security concepts used in networking, web apps, and real systems."}),[]);return t.jsxs(Sx.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(u=>!u),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(al,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Core"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(hr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(as,{})}),t.jsx("h3",{className:"h3",children:"CIA triad"})]}),t.jsx("p",{className:"p",children:'CIA means Confidentiality, Integrity, and Availability. It is a simple way to remember what "security" is trying to protect.'}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Confidentiality"})," - only authorized people can read data",t.jsx("span",{className:"small",children:"Example: HTTPS encryption, access control"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Integrity"})," - data should not be changed silently",t.jsx("span",{className:"small",children:"Example: hashes, digital signatures, checksums"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Availability"})," - systems should stay usable",t.jsx("span",{className:"small",children:"Example: DDoS protection, redundancy, rate limiting"})]})]}),t.jsx("p",{className:"note",children:"Most real incidents hit one or more CIA points."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(lp,{})}),t.jsx("h3",{className:"h3",children:"TLS and SSL"})]}),t.jsx("p",{className:"p",children:'TLS means Transport Layer Security. SSL means Secure Sockets Layer. SSL is the older protocol family. Today, people say "SSL" in casual talk, but modern security uses TLS.'}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Goal"})," - secure data in transit between client and server",t.jsx("span",{className:"small",children:"Example: browser to website over HTTPS"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Provides"})," - encryption, integrity, and server identity",t.jsx("span",{className:"small",children:"Identity comes from certificates (CA signed)"})]})]}),t.jsx("p",{className:"note",children:"HTTPS is basically HTTP running inside a TLS tunnel."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Bf,{})}),t.jsx("h3",{className:"h3",children:"Symmetric vs asymmetric encryption"})]}),t.jsx("p",{className:"p",children:"Encryption means turning readable data into unreadable data using keys. The difference is how keys are used."}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Symmetric"}),t.jsxs("div",{className:"v",children:["Same key is used to encrypt and decrypt.",t.jsx("span",{className:"small",children:"Fast. Used for bulk data after a secure connection is established."})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Asymmetric"}),t.jsxs("div",{className:"v",children:["Two keys - public key and private key. Public encrypts or verifies, private decrypts or signs.",t.jsx("span",{className:"small",children:"Slower. Used for key exchange and identity."})]})]})]}),t.jsx("p",{className:"note",children:"In TLS, asymmetric crypto helps start trust, symmetric crypto handles the ongoing data."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(op,{})}),t.jsx("h3",{className:"h3",children:"Hashing vs encryption"})]}),t.jsx("p",{className:"p",children:"Hashing and encryption are not the same. A hash is like a fingerprint of data. Encryption is reversible with the correct key."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Hashing"})," - one-way transformation",t.jsx("span",{className:"small",children:"Example: password hashing, file integrity check"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Encryption"})," - reversible with a key",t.jsx("span",{className:"small",children:"Example: HTTPS traffic encryption, encrypted storage"})]})]}),t.jsx("p",{className:"note",children:"Passwords should be hashed, not encrypted, because you should not be able to recover them."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(ex,{})}),t.jsx("h3",{className:"h3",children:"Authentication vs authorization"})]}),t.jsx("p",{className:"p",children:'Authentication answers "Who are you" and authorization answers "What can you do". Many systems fail because they do authentication but forget strict authorization.'}),t.jsxs("div",{className:"kvs",children:[t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Authentication"}),t.jsxs("div",{className:"v",children:["Proves identity using password, OTP, token, biometrics.",t.jsx("span",{className:"small",children:"Example: login with email and password"})]})]}),t.jsxs("div",{className:"kv",children:[t.jsx("div",{className:"k",children:"Authorization"}),t.jsxs("div",{className:"v",children:["Checks permissions after identity is known.",t.jsx("span",{className:"small",children:"Example: only admin can delete users"})]})]})]}),t.jsx("p",{className:"note",children:'Easy memory: AuthN is "name", AuthZ is "zone" access.'})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Ca,{})}),t.jsx("h3",{className:"h3",children:"Firewall basics and stateful concept"})]}),t.jsx("p",{className:"p",children:"A firewall is a security system that allows or blocks network traffic based on rules. Rules can be based on IP, port, protocol, and direction."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Stateless firewall"})," - checks each packet independently",t.jsx("span",{className:"small",children:"Simple rules, less context"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Stateful firewall"})," - tracks connection state",t.jsx("span",{className:"small",children:"Knows if a packet belongs to an existing allowed connection"})]})]}),t.jsx("p",{className:"note",children:"Stateful firewalls are common because they reduce random inbound traffic and allow valid replies."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(mt,{})}),t.jsx("h3",{className:"h3",children:"VPN basics"})]}),t.jsx("p",{className:"p",children:"VPN means Virtual Private Network. It creates an encrypted tunnel between your device and a VPN server. Your traffic travels inside this tunnel."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Use"})," - secure connection on public Wi-Fi",t.jsx("span",{className:"small",children:"Example: coffee shop Wi-Fi"})]}),t.jsxs("li",{children:[t.jsx("b",{children:"Use"})," - access private office network remotely",t.jsx("span",{className:"small",children:"Example: connect to company intranet from home"})]})]}),t.jsx("p",{className:"note",children:"VPN improves privacy on the local network, but trust shifts to the VPN provider."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(as,{})}),t.jsx("h3",{className:"h3",children:"Common attacks"})]}),t.jsx("p",{className:"p",children:"You do not need deep details here. Just know names, full forms, and what they mean in one line."}),t.jsxs("div",{className:"attacks",children:[t.jsxs("div",{className:"attack",children:[t.jsxs("div",{className:"aTop",children:[t.jsx("div",{className:"aTitle",children:"MITM"}),t.jsx("div",{className:"aFull",children:"Man In The Middle"})]}),t.jsx("div",{className:"aLine",children:"Attacker secretly sits between two parties and can read or alter traffic."})]}),t.jsxs("div",{className:"attack",children:[t.jsxs("div",{className:"aTop",children:[t.jsx("div",{className:"aTitle",children:"DNS spoofing"}),t.jsx("div",{className:"aFull",children:"DNS - Domain Name System"})]}),t.jsx("div",{className:"aLine",children:"Fake DNS answers redirect you to a wrong or malicious IP address."})]}),t.jsxs("div",{className:"attack",children:[t.jsxs("div",{className:"aTop",children:[t.jsx("div",{className:"aTitle",children:"ARP spoofing"}),t.jsx("div",{className:"aFull",children:"ARP - Address Resolution Protocol"})]}),t.jsx("div",{className:"aLine",children:"Attacker links their MAC address to someone else’s IP on a LAN to intercept traffic."})]}),t.jsxs("div",{className:"attack",children:[t.jsxs("div",{className:"aTop",children:[t.jsx("div",{className:"aTitle",children:"DDoS"}),t.jsx("div",{className:"aFull",children:"Distributed Denial of Service"})]}),t.jsx("div",{className:"aLine",children:"Many machines flood a target to make it slow or unavailable."})]}),t.jsxs("div",{className:"attack",children:[t.jsxs("div",{className:"aTop",children:[t.jsx("div",{className:"aTitle",children:"Phishing"}),t.jsx("div",{className:"aFull",children:"Social engineering attack"})]}),t.jsx("div",{className:"aLine",children:"Fake messages trick users into sharing passwords, OTPs, or clicking bad links."})]})]}),t.jsx("p",{className:"note",children:"Basic defense idea: use HTTPS, verify domains, keep MFA, and do not trust random links."})]})]})})]})},Tx={Wrapper:De.section`
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
    `},Cx=()=>{const[i,c]=pe.useState(!0);return t.jsxs(Tx.Wrapper,{id:"networkDevicesTools",children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(l=>!l),"aria-expanded":i,"aria-controls":"networkDevicesTools-content",children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(Jf,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:"Network Devices and Tools"}),t.jsx("span",{className:"badge",children:"Must for dev"})]}),t.jsx("p",{className:"sub",children:"Devices that move packets and the command line tools used to debug networking fast."})]})]}),t.jsx("span",{className:"chev",children:t.jsx(hr,{})})]}),t.jsx("div",{id:"networkDevicesTools-content",className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Mf,{})}),t.jsx("h3",{className:"h3",children:"Hub vs Switch vs Router"})]}),t.jsx("p",{className:"p",children:"These devices look similar, but they work at different layers and make very different decisions."}),t.jsxs("div",{className:"compare",children:[t.jsxs("div",{className:"row head",children:[t.jsx("div",{children:"Device"}),t.jsx("div",{children:"Layer"}),t.jsx("div",{children:"Decision based on"}),t.jsx("div",{children:"Beginner example"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"strong",children:"Hub"}),t.jsx("div",{children:"Physical layer (Layer 1)"}),t.jsx("div",{children:"No decision - broadcasts everything"}),t.jsx("div",{children:"Like a loud speaker - everyone hears the same data"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"strong",children:"Switch"}),t.jsx("div",{children:"Data Link layer (Layer 2)"}),t.jsx("div",{children:"MAC address (Media Access Control address)"}),t.jsx("div",{children:"Sends frames only to the correct port inside a LAN"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"strong",children:"Router"}),t.jsx("div",{children:"Network layer (Layer 3)"}),t.jsx("div",{children:"IP address (Internet Protocol address)"}),t.jsx("div",{children:"Connects different networks and forwards packets"})]})]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"MAC"})," - Media Access Control - hardware address used inside a local network"]}),t.jsxs("li",{children:[t.jsx("b",{children:"IP"})," - Internet Protocol - logical address used across networks"]}),t.jsxs("li",{children:["Switch learns a ",t.jsx("b",{children:"MAC table"})," to know which device is on which port"]}),t.jsxs("li",{children:["Router uses a ",t.jsx("b",{children:"routing table"})," to choose the next hop toward destination IP"]})]}),t.jsx("p",{className:"note",children:"Quick memory: switch is inside a network, router connects networks."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(mt,{})}),t.jsx("h3",{className:"h3",children:"Modem meaning"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Modem"})," means ",t.jsx("b",{children:"MO"}),"dulator ",t.jsx("b",{children:"DEM"}),"odulator. It converts signals so your home network can talk to your Internet Service Provider."]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"ISP"})," - Internet Service Provider - the company that gives you internet"]}),t.jsx("li",{children:"In many homes, the modem is built into the router device you get from the ISP"}),t.jsxs("li",{children:["Fiber setups often use an ",t.jsx("b",{children:"ONT"})," - Optical Network Terminal - similar role for fiber"]})]}),t.jsx("p",{className:"note",children:"Router manages your home network. Modem connects your network to the ISP line."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(un,{})}),t.jsx("h3",{className:"h3",children:"NAT device role"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"NAT"})," means ",t.jsx("b",{children:"Network Address Translation"}),". It lets many devices in your private network share one public IP address on the internet."]}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"192.168.0.10"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"NAT router"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Public IP"})]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("b",{children:"Private IP"})," - used inside home or office network, not directly reachable from internet"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Public IP"})," - visible on the internet, used to reach your network from outside"]}),t.jsx("li",{children:"NAT keeps a translation table mapping internal connections to the public IP and ports"})]}),t.jsx("p",{className:"note",children:"NAT is one reason most home devices are not directly exposed to the internet."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Eu,{})}),t.jsx("h3",{className:"h3",children:"Reachability and path tools"})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["ping ",t.jsx("span",{className:"muted",children:"ICMP"})]}),t.jsx("div",{className:"toolDesc",children:"Checks if a host is reachable and measures round trip time."}),t.jsxs("div",{className:"toolFull",children:[t.jsx("b",{children:"ICMP"})," - Internet Control Message Protocol"]})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["traceroute"," ",t.jsx("span",{className:"muted",children:"or tracert"})]}),t.jsx("div",{className:"toolDesc",children:"Shows the route packets take by listing hops (routers) between you and a destination."}),t.jsx("div",{className:"toolFull",children:"Uses TTL (Time To Live) changes to reveal each hop."})]}),t.jsx("p",{className:"note",children:"First check ping, then check traceroute to see where it is failing."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Iu,{})}),t.jsx("h3",{className:"h3",children:"DNS lookup tools"})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["nslookup ",t.jsx("span",{className:"muted",children:"DNS"})]}),t.jsx("div",{className:"toolDesc",children:"Basic tool to query domain name records and see IP addresses."}),t.jsxs("div",{className:"toolFull",children:[t.jsx("b",{children:"DNS"})," - Domain Name System - converts names to IP addresses"]})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["dig ",t.jsx("span",{className:"muted",children:"DNS"})]}),t.jsx("div",{className:"toolDesc",children:"Advanced DNS lookup tool. Shows detailed answers and timings."}),t.jsx("div",{className:"toolFull",children:"dig is very useful for debugging CNAME, A, AAAA, MX records."})]}),t.jsx("p",{className:"note",children:'Many "site not opening" issues are DNS problems, not server issues.'})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(qo,{})}),t.jsx("h3",{className:"h3",children:"Local network info tools"})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["ipconfig ",t.jsx("span",{className:"muted",children:"Windows"})]}),t.jsx("div",{className:"toolDesc",children:"Shows your IP address, gateway, DNS servers, and adapter details."}),t.jsx("div",{className:"toolFull",children:"Linux and macOS use ifconfig or ip addr."})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["ifconfig"," ",t.jsx("span",{className:"muted",children:"Linux or macOS"})]}),t.jsx("div",{className:"toolDesc",children:"Shows network interfaces and their IP configuration."}),t.jsx("div",{className:"toolFull",children:"Modern Linux often prefers ip addr and ip route."})]}),t.jsx("p",{className:"note",children:"If you do not know your gateway or DNS, start with ipconfig or ip addr."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(up,{})}),t.jsx("h3",{className:"h3",children:"Connection and port tools"})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["netstat"," ",t.jsx("span",{className:"muted",children:"network statistics"})]}),t.jsx("div",{className:"toolDesc",children:"Shows active connections, listening ports, and routing table info."}),t.jsx("div",{className:"toolFull",children:"Often used to check if a port is open on your machine."})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["ss"," ",t.jsx("span",{className:"muted",children:"socket statistics"})]}),t.jsx("div",{className:"toolDesc",children:"Faster modern alternative to netstat on Linux."}),t.jsxs("div",{className:"toolFull",children:[t.jsx("b",{children:"Socket"})," means IP plus port endpoint used by apps."]})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["telnet ",t.jsx("span",{className:"muted",children:"port test"})]}),t.jsx("div",{className:"toolDesc",children:"Can test if a TCP port is reachable, but telnet is not secure for real login use."}),t.jsx("div",{className:"toolFull",children:"Example: telnet example.com 80 checks if port 80 is reachable."})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["nc ",t.jsx("span",{className:"muted",children:"netcat"})]}),t.jsx("div",{className:"toolDesc",children:"Powerful tool to test TCP or UDP ports, send data, and listen on ports."}),t.jsxs("div",{className:"toolFull",children:[t.jsx("b",{children:"nc"})," is short for netcat. Common for quick port checks."]})]}),t.jsxs("div",{className:"tool",children:[t.jsxs("div",{className:"toolName",children:["curl ",t.jsx("span",{className:"muted",children:"client URL"})]}),t.jsx("div",{className:"toolDesc",children:"Makes HTTP requests from terminal to test APIs, headers, redirects, and TLS."}),t.jsx("div",{className:"toolFull",children:"curl is the fastest way to confirm if your API is responding."})]}),t.jsx("p",{className:"note",children:"For dev debugging: check if server is listening, then check if client can reach the port."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Iu,{})}),t.jsx("h3",{className:"h3",children:"Wireshark packet sniffing"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Wireshark"})," is a packet analyzer. It captures network traffic and shows packet details like IP, TCP, DNS, and HTTP fields."]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Useful for seeing if DNS queries are happening and what response you get"}),t.jsx("li",{children:"Useful for checking TCP handshake and retransmissions"}),t.jsx("li",{children:"Helps confirm what is actually sent on the wire"})]}),t.jsx("p",{className:"note",children:"Packet sniffing means capturing packets. It is used for debugging, not hacking."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Eu,{})}),t.jsx("h3",{className:"h3",children:"Reading an IP and route quickly"})]}),t.jsx("p",{className:"p",children:'When you see an IP like 192.168.1.25-24, the "-24" is CIDR. It means the first 24 bits are the network part and the rest is host part.'}),t.jsxs("div",{className:"quick",children:[t.jsxs("div",{className:"qRow",children:[t.jsx("div",{className:"qK",children:"CIDR"}),t.jsx("div",{className:"qV",children:"Classless Inter-Domain Routing - notation like 10.0.0.5-16"})]}),t.jsxs("div",{className:"qRow",children:[t.jsx("div",{className:"qK",children:"Gateway"}),t.jsx("div",{className:"qV",children:"The router address used to reach outside your local network"})]}),t.jsxs("div",{className:"qRow",children:[t.jsx("div",{className:"qK",children:"Route"}),t.jsx("div",{className:"qV",children:"Rule that says where to send packets for a destination network"})]}),t.jsxs("div",{className:"qRow",children:[t.jsx("div",{className:"qK",children:"Next hop"}),t.jsx("div",{className:"qV",children:"The next router IP that will forward your packet"})]})]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:["Fast check on Linux: ",t.jsx("b",{children:"ip addr"})," for IP,"," ",t.jsx("b",{children:"ip route"})," for route"]}),t.jsxs("li",{children:["Fast check on Windows: ",t.jsx("b",{children:"ipconfig"})," for IP,"," ",t.jsx("b",{children:"route print"})," for routes"]}),t.jsx("li",{children:"If gateway is wrong, internet will not work even if Wi-Fi is connected"})]}),t.jsx("p",{className:"note",children:"Debug habit: confirm your IP, confirm gateway, confirm DNS, then test a public IP, then test a domain."})]})]})})]})},Ix={Wrapper:De.section`
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
    `},Ex=()=>{const[i,c]=pe.useState(!0),l=pe.useMemo(()=>({id:"performanceReliability",title:"Performance and Reliability Concepts",sub:"Speed is not just bandwidth. Reliability is not just retries. Learn the common causes of slow or unstable networking."}),[]);return t.jsxs(Ix.Wrapper,{id:l.id,children:[t.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(u=>!u),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[t.jsxs("div",{className:"left",children:[t.jsx("span",{className:"icon",children:t.jsx(Lu,{})}),t.jsxs("div",{className:"text",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:l.title}),t.jsx("span",{className:"badge",children:"Practical"})]}),t.jsx("p",{className:"sub",children:l.sub})]})]}),t.jsx("span",{className:"chev",children:t.jsx(hr,{})})]}),t.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(as,{})}),t.jsx("h3",{className:"h3",children:"Packet loss"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Packet loss"})," means some packets never reach the destination. It usually happens due to Wi-Fi interference, congestion, weak signal, overloaded routers, or unstable ISP links."]}),t.jsx("p",{className:"p",children:"Why it hurts: TCP (Transmission Control Protocol) assumes loss means congestion and slows down. Even a small loss can make the internet feel slow."}),t.jsxs("div",{className:"examples",children:[t.jsxs("div",{className:"exRow",children:[t.jsx("div",{className:"k",children:"Symptoms"}),t.jsx("div",{className:"v",children:"buffering, call drops, lag spikes, pages stuck"})]}),t.jsxs("div",{className:"exRow",children:[t.jsx("div",{className:"k",children:"Quick check"}),t.jsxs("div",{className:"v",children:["use ",t.jsx("span",{className:"mono",children:"ping"}),' and watch for "Request timed out"']})]})]}),t.jsx("p",{className:"note",children:"Low bandwidth can still work for browsing. Packet loss makes everything feel broken."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Qf,{})}),t.jsx("h3",{className:"h3",children:"Retries and timeouts"})]}),t.jsxs("p",{className:"p",children:["A ",t.jsx("b",{children:"retry"})," happens when a sender sends the same data again because it did not get confirmation. In TCP, confirmations are called ",t.jsx("b",{children:"ACK"}),"(Acknowledgement)."]}),t.jsxs("p",{className:"p",children:["A ",t.jsx("b",{children:"timeout"})," is the maximum waiting time before retrying or failing. If the network is slow or packets are lost, timeouts trigger retries, which adds more delay."]}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"pill",children:"Send"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Wait for ACK"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Timeout"}),t.jsx("span",{className:"dash",children:"-"}),t.jsx("span",{className:"pill",children:"Retry"})]}),t.jsx("p",{className:"note",children:"Too aggressive retries can increase congestion. Too slow timeouts feel unresponsive."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Uf,{})}),t.jsx("h3",{className:"h3",children:"MTU issues and PMTUD"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"MTU"})," (Maximum Transmission Unit) is the largest packet size that can be sent on a link without fragmentation. Common Ethernet MTU is 1500 bytes."]}),t.jsxs("p",{className:"p",children:["If a packet is larger than MTU, it may be",t.jsx("b",{children:"fragmented"})," (split) or dropped. Some networks block fragmentation, which causes weird issues like some websites loading and others failing."]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"PMTUD"})," (Path MTU Discovery) is a method where systems discover the smallest MTU along the path and adjust packet size automatically. It often depends on ICMP (Internet Control Message Protocol) messages."]}),t.jsxs("div",{className:"examples",children:[t.jsxs("div",{className:"exRow",children:[t.jsx("div",{className:"k",children:"Symptoms"}),t.jsx("div",{className:"v",children:"VPN works partially, large downloads fail, specific sites hang"})]}),t.jsxs("div",{className:"exRow",children:[t.jsx("div",{className:"k",children:"Mental model"}),t.jsx("div",{className:"v",children:"big packet hits a narrow tunnel and gets stuck"})]})]}),t.jsx("p",{className:"note",children:"MTU bugs feel like magic until you know MTU exists."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Gf,{})}),t.jsx("h3",{className:"h3",children:"QoS concept"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"QoS"})," means Quality of Service. It is a set of rules that prioritize certain traffic over others when the network is busy."]}),t.jsx("p",{className:"p",children:"Example: voice calls and video meetings need low latency and low jitter. Downloads can tolerate delay. QoS can keep calls smooth by giving them priority."}),t.jsxs("div",{className:"chips",children:[t.jsx("span",{className:"chip",children:"voice"}),t.jsx("span",{className:"chip",children:"video call"}),t.jsx("span",{className:"chip",children:"gaming"}),t.jsx("span",{className:"chip",children:"downloads"}),t.jsx("span",{className:"chip",children:"backups"})]}),t.jsx("p",{className:"note",children:"QoS does not create bandwidth. It manages who gets it first."})]}),t.jsxs("div",{className:"card span12",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(il,{})}),t.jsx("h3",{className:"h3",children:"Caching (DNS and HTTP)"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Caching"})," means storing results so next time the same request is faster. Caches exist everywhere in networking and the web."]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"boxTitle",children:"DNS caching"}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"DNS"}),' is Domain Name System. It translates domain names like "example.com" into IP addresses. DNS results are cached for a time called ',t.jsx("b",{children:"TTL"}),"(Time To Live)."]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Good: reduces repeated DNS lookups and speeds up page loads"}),t.jsx("li",{children:"Bad: old cache can point to old IP during changes"})]}),t.jsx("p",{className:"note",children:"Example: you changed server IP but some users still hit the old one due to TTL."})]}),t.jsxs("div",{className:"box",children:[t.jsx("div",{className:"boxTitle",children:"HTTP caching"}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"HTTP"})," is HyperText Transfer Protocol. Browsers and CDNs cache files like images, CSS, and JS. Cache rules are controlled by headers like Cache-Control and ETag."]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Good: faster loads, less bandwidth usage"}),t.jsx("li",{children:"Bad: stale cache can show old UI unless cache is managed"})]}),t.jsx("p",{className:"note",children:"Example: deploy changed JS but user still sees old version due to caching."})]})]})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(sp,{})}),t.jsx("h3",{className:"h3",children:"Connection keep-alive"})]}),t.jsxs("p",{className:"p",children:[t.jsx("b",{children:"Keep-alive"})," means reusing an existing connection instead of creating a new one for every request. This saves time because setting up TCP and TLS connections costs extra round trips."]}),t.jsx("p",{className:"p",children:"In HTTP, keep-alive allows multiple requests to use the same TCP connection. HTTP-2 goes further by multiplexing many requests in one connection."}),t.jsxs("div",{className:"examples",children:[t.jsxs("div",{className:"exRow",children:[t.jsx("div",{className:"k",children:"Benefit"}),t.jsx("div",{className:"v",children:"faster page loads, less handshake overhead"})]}),t.jsxs("div",{className:"exRow",children:[t.jsx("div",{className:"k",children:"Tradeoff"}),t.jsx("div",{className:"v",children:"too many open connections can waste server resources"})]})]}),t.jsx("p",{className:"note",children:"Keep-alive makes repeated requests feel instant after the first load."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTop",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Lu,{})}),t.jsx("h3",{className:"h3",children:"Quick debug checklist"})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Check packet loss first using ping"}),t.jsx("li",{children:"Check latency stability, jitter shows instability"}),t.jsx("li",{children:"If only some sites fail, suspect MTU or DNS cache"}),t.jsx("li",{children:"If calls lag while downloads run, QoS can help"}),t.jsx("li",{children:"If UI updates do not show, suspect HTTP caching"})]}),t.jsx("p",{className:"note",children:"Most real bugs are not advanced. They are basic concepts showing up in messy ways."})]})]})})]})},Lx={Wrapper:De.section`
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
    `},zx=[{category:"Network Basics and Models",items:[{q:"What is a computer network",a:"A computer network is a group of interconnected devices that communicate and share data using standardized protocols."},{q:"What is a protocol",a:"A protocol is a defined set of rules that governs how data is transmitted and received over a network. Example: HTTP, TCP, DNS."},{q:"What is a packet",a:"A packet is a small unit of data sent across a network. It contains headers and payload."},{q:"Difference between packet, segment and frame",a:"Segment is Transport layer data unit, Packet is Network layer data unit, Frame is Data Link layer data unit."},{q:"What is bandwidth",a:"Bandwidth is the maximum capacity of a link measured in Mbps or Gbps."},{q:"What is throughput",a:"Throughput is the actual data transfer rate achieved in real conditions."},{q:"What is latency",a:"Latency is the time delay between sending and receiving data, usually measured in milliseconds."},{q:"What is jitter",a:"Jitter is the variation in latency over time."},{q:"What is LAN",a:"LAN stands for Local Area Network. It connects devices within a small area like a home or office."},{q:"What is WAN",a:"WAN stands for Wide Area Network. It connects networks across large geographic areas. The internet is a WAN."},{q:"What is PAN",a:"PAN stands for Personal Area Network. Example: Bluetooth connection between phone and earphones."},{q:"What is network topology",a:"Topology defines how devices are physically or logically connected. Example: star, mesh, bus, ring."}]},{category:"OSI and TCP-IP",items:[{q:"Explain OSI model",a:"OSI stands for Open Systems Interconnection. It is a 7 layer conceptual model used to understand networking functions."},{q:"Name OSI layers",a:"Physical, Data Link, Network, Transport, Session, Presentation, Application."},{q:"Which layer does a router work on",a:"Router works at Layer 3 which is the Network layer."},{q:"Which layer does a switch work on",a:"Switch works at Layer 2 which is the Data Link layer."},{q:"What is encapsulation",a:"Encapsulation is the process where each layer adds its header while sending data down the stack."},{q:"What is decapsulation",a:"Decapsulation is removing headers at each layer while receiving data."},{q:"Explain TCP-IP model",a:"TCP-IP model has 4 layers: Application, Transport, Internet, and Link."},{q:"Map OSI to TCP-IP",a:"OSI 5,6,7 map to Application. OSI 4 maps to Transport. OSI 3 maps to Internet. OSI 1,2 map to Link."}]},{category:"IP Addressing and Subnetting",items:[{q:"What is an IP address",a:"IP address uniquely identifies a device in a network using Internet Protocol."},{q:"What is IPv4",a:"IPv4 is 32 bit addressing format written as four octets. Example: 192.168.1.1."},{q:"What is IPv6",a:"IPv6 is 128 bit addressing format designed to replace IPv4."},{q:"What is CIDR",a:"CIDR stands for Classless Inter-Domain Routing. It uses slash notation like /24 to define subnet mask."},{q:"What is subnet mask",a:"Subnet mask separates network portion and host portion of an IP address."},{q:"What is private IP range",a:"10.0.0.0/8, 172.16.0.0 to 172.31.255.255, 192.168.0.0/16."},{q:"What is NAT",a:"NAT stands for Network Address Translation. It translates private IP addresses to public IP addresses."},{q:"What is DHCP",a:"DHCP stands for Dynamic Host Configuration Protocol. It automatically assigns IP addresses."},{q:"Explain DORA process",a:"DORA means Discover, Offer, Request, Acknowledge. It is the DHCP handshake."},{q:"What is default gateway",a:"Default gateway is the router that forwards traffic outside the local network."}]},{category:"Routing",items:[{q:"What is routing",a:"Routing is the process of forwarding packets between networks."},{q:"What is routing table",a:"Routing table stores network paths and next hop information."},{q:"Static vs dynamic routing",a:"Static routing is manually configured. Dynamic routing uses protocols like OSPF or BGP."},{q:"What is ICMP",a:"ICMP stands for Internet Control Message Protocol. Used for error reporting and ping."},{q:"What is TTL",a:"TTL stands for Time To Live. It limits packet lifetime in hops."},{q:"What is traceroute",a:"Traceroute shows the path packets take across routers using TTL."}]},{category:"Transport Layer TCP vs UDP",items:[{q:"Difference between TCP and UDP",a:"TCP is reliable and connection oriented. UDP is faster and connectionless."},{q:"What is three way handshake",a:"TCP connection setup process using SYN, SYN-ACK, ACK."},{q:"What is SYN",a:"SYN is synchronize flag used to initiate TCP connection."},{q:"What is ACK",a:"ACK stands for acknowledgement confirming receipt of data."},{q:"What is flow control",a:"Flow control ensures sender does not overwhelm receiver."},{q:"What is congestion control",a:"Congestion control prevents network overload by adjusting transmission rate."}]},{category:"Application Layer and Ports",items:[{q:"Port number of HTTP",a:"HTTP default port is 80."},{q:"Port number of HTTPS",a:"HTTPS default port is 443."},{q:"Port number of SSH",a:"SSH default port is 22."},{q:"Port number of FTP",a:"FTP default port is 21."},{q:"Port number of DNS",a:"DNS default port is 53."},{q:"What is DNS",a:"DNS stands for Domain Name System. It converts domain names into IP addresses."},{q:"What is HTTP",a:"HTTP stands for HyperText Transfer Protocol. It is used to transfer web pages."},{q:"What is HTTPS",a:"HTTPS is HTTP over TLS encryption."},{q:"POP3 vs IMAP",a:"POP3 downloads emails locally. IMAP syncs emails across devices."}]},{category:"Security Basics",items:[{q:"What is TLS",a:"TLS stands for Transport Layer Security. It encrypts communication over the network."},{q:"Symmetric vs asymmetric encryption",a:"Symmetric uses one key for encryption and decryption. Asymmetric uses public and private key pair."},{q:"What is hashing",a:"Hashing converts data into fixed length output. It is one way."},{q:"What is firewall",a:"Firewall filters network traffic based on rules."},{q:"What is VPN",a:"VPN stands for Virtual Private Network. It creates secure encrypted tunnel."},{q:"What is MITM attack",a:"MITM means Man In The Middle attack where attacker intercepts communication."}]},{category:"Performance and Troubleshooting",items:[{q:"What is packet loss",a:"Packet loss means packets fail to reach the destination."},{q:"What is MTU",a:"MTU stands for Maximum Transmission Unit. It defines maximum packet size."},{q:"What is PMTUD",a:"PMTUD stands for Path MTU Discovery. It finds smallest MTU along path."},{q:"What is QoS",a:"QoS stands for Quality of Service. It prioritizes certain traffic types."},{q:"What is caching",a:"Caching stores data temporarily to reduce repeated network requests."},{q:"What is keep alive",a:"Keep alive allows reuse of TCP connection for multiple requests."},{q:"Why can I ping IP but not domain",a:"DNS resolution may be failing even though connectivity exists."},{q:"What happens when you type a URL",a:"DNS lookup, TCP handshake, TLS handshake, HTTP request, server response."}]}],Rx=()=>{const[i,c]=pe.useState(!0),[l,u]=pe.useState({}),f=j=>{u(N=>({...N,[j]:!N[j]}))};return t.jsxs(Lx.Wrapper,{id:"mustKnowQna",children:[t.jsxs("button",{className:`mainHead ${i?"open":""}`,onClick:()=>c(j=>!j),children:[t.jsxs("div",{className:"left",children:[t.jsx(Of,{}),t.jsx("h2",{children:"Must Know Interview QnA"})]}),t.jsx(hr,{className:"chev"})]}),t.jsx("div",{className:`content ${i?"show":""}`,children:zx.map((j,N)=>t.jsxs("div",{className:"category",children:[t.jsx("h3",{className:"catTitle",children:j.category}),j.items.map((C,T)=>{const q=`${N}-${T}`;return t.jsxs("div",{className:"qnaItem",children:[t.jsxs("button",{className:`question ${l[q]?"open":""}`,onClick:()=>f(q),children:[t.jsx("span",{children:C.q}),t.jsx(hr,{})]}),t.jsx("div",{className:`answer ${l[q]?"show":""}`,children:t.jsx("p",{children:C.a})})]},q)})]},N))})]})},Ax=()=>{var j;const[i,c]=pe.useState("about"),l=pe.useRef(null),u=[["about","Overview",zu],["basics","Network Basics",dx],["physical","Physical and Data Link",px],["ip","IP Addressing",mx],["routing","Routing",xx],["transport","Transport Layer",gx],["application","Application Protocols",jx],["web","Web Networking",wx],["wireless","Wireless and Mobile",bx],["security","Security Basics",Px],["devices","Network Devices",Cx],["performance","Performance and Reliability",Ex],["qna","Must-Know Q&A",Rx]],f=((j=u.find(([N])=>N===i))==null?void 0:j[2])||zu;return pe.useEffect(()=>{var N;(N=l.current)==null||N.scrollTo({top:0,behavior:"auto"})},[i]),t.jsxs(Fo.Wrapper,{children:[t.jsx(Fo.Header,{children:t.jsx(tx,{})}),t.jsxs(Fo.Main,{ref:l,children:[t.jsxs("div",{className:"workspaceLayout",children:[t.jsxs("aside",{className:"sideMenu","aria-label":"Computer networks topics",children:[t.jsx("p",{className:"menuLabel",children:"Study guide"}),t.jsx("nav",{children:u.map(([N,C])=>t.jsx("button",{type:"button",className:i===N?"active":"",onClick:()=>c(N),children:C},N))})]}),t.jsx("section",{className:"contentWrapper","aria-live":"polite",children:t.jsx(f,{})})]}),t.jsx("button",{type:"button",className:"scrollTopButton","aria-label":"Scroll content to top",title:"Scroll to top",onClick:()=>{var N;return(N=l.current)==null?void 0:N.scrollTo({top:0,behavior:"smooth"})},children:t.jsx(Ef,{})}),t.jsx("div",{className:"footerWrapper",children:t.jsx(ox,{})})]})]})};vm.createRoot(document.getElementById("root")).render(t.jsx(t.Fragment,{children:t.jsx(Ax,{})}));
