/*! For license information please see my-component.bundle.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MyComponent=t():e.MyComponent=t()}(this,(()=>(()=>{"use strict";var e={38:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),u=n.n(a)()(o());u.push([e.id,'/* src/Chatbot.css */\n\n.chatbot {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 300px;\n  background-color: #fff;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n}\n\n.chatbot-messages {\n  max-height: 300px;\n  overflow-y: auto;\n  margin-bottom: 16px;\n}\n\n.message {\n  background-color: #f0f0f0;\n  padding: 8px;\n  margin-bottom: 8px;\n  border-radius: 4px;\n}\n\ninput[type="text"], button {\n  padding: 8px;\n  margin-right: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 14px;\n}\n\nbutton {\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n}\n',""]);const c=u},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var u={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(u[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&u[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},287:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function m(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||y}function b(){}function g(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var x=g.prototype=new b;x.constructor=g,h(x,m.prototype),x.isPureReactComponent=!0;var _=Array.isArray,S=Object.prototype.hasOwnProperty,w={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var o,a={},u=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)S.call(t,o)&&!E.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:n,type:e,key:u,ref:c,props:a,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,a,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return u=u(i=e),e=""===a?"."+R(i,0):a,_(u)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),$(u,t,o,"",(function(e){return e}))):null!=u&&(C(u)&&(u=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(j,"$&/")+"/")+e)),t.push(u)),1;if(i=0,a=""===a?".":a+":",_(e))for(var s=0;s<e.length;s++){var l=a+R(c=e[s],s);i+=$(c,t,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(c=e.next()).done;)i+=$(c=c.value,t,o,l=a+R(c,s++),u);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function T(e,t,n){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},A={transition:null},I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:A,ReactCurrentOwner:w};function M(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=u,t.PureComponent=g,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=M,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)S.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:n,type:e.type,key:a,ref:u,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=M,t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.3.1"},540:(e,t,n)=>{e.exports=n(287)},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},u=[],c=0;c<e.length;c++){var i=e[c],s=r.base?i[0]+r.base:i[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var p=n(f),d={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var y=o(d,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:y,references:1})}u.push(f)}return u}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var u=0;u<a.length;u++){var c=n(a[u]);t[c].references--}for(var i=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=i}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},159:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r={};n.r(r),n.d(r,{default:()=>x});var o=n(540),a=n(72),u=n.n(a),c=n(825),i=n.n(c),s=n(659),l=n.n(s),f=n(56),p=n.n(f),d=n(159),y=n.n(d),h=n(113),v=n.n(h),m=n(38),b={};b.styleTagTransform=v(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=y(),u()(m.A,b),m.A&&m.A.locals&&m.A.locals;var g=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};const x=function(){var e=(0,o.useState)([]),t=e[0],n=e[1],r=(0,o.useState)(""),a=r[0],u=r[1],c=function(){return e=void 0,r=void 0,c=function(){var e,r,o,c;return function(e,t){var n,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(e,u)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}(this,(function(i){switch(i.label){case 0:if(""===a.trim())return[2];i.label=1;case 1:return i.trys.push([1,4,,5]),[4,fetch("http://localhost:5000/api/13",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:a})})];case 2:if(!(e=i.sent()).ok)throw new Error("Network response was not ok");return[4,e.json()];case 3:return r=i.sent(),o=r.response,n(g(g([],t,!0),["You: ".concat(a),"Bot: ".concat(o)],!1)),u(""),[3,5];case 4:return c=i.sent(),console.error("Error sending message:",c),[3,5];case 5:return[2]}}))},new((o=void 0)||(o=Promise))((function(t,n){function a(e){try{i(c.next(e))}catch(e){n(e)}}function u(e){try{i(c.throw(e))}catch(e){n(e)}}function i(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,u)}i((c=c.apply(e,r||[])).next())}));var e,r,o,c},i=function(e){"Enter"===e.key&&c()};return o.createElement("div",{className:"chatbot"},o.createElement("div",{className:"chatbot-messages"},t.map((function(e,t){return o.createElement("div",{key:t,className:"message"},e)}))),o.createElement("input",{type:"text",value:a,onKeyDown:i,onChange:function(e){return u(e.target.value)},placeholder:"Type your message..."}),o.createElement("button",{onKeyDown:i,onClick:c},"Send"))};return r})()));