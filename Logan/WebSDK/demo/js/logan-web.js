!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Logan=e():t.Logan=e()}(window,(function(){return function(t){function e(e){for(var n,o,i=e[0],u=e[1],c=0,a=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&a.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(s&&s(e);a.length;)a.shift()()}var n={},r={2:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(t){return o.p+""+({0:"vendors~report_log~save_log",1:"encryption",3:"report_log",4:"save_log",5:"vendors~encryption"}[t]||t)+"."+{0:"6b0b6899c82a3791969e",1:"84da1c088acde86c674a",3:"e4a8ea183c19fa22f2ac",4:"00981f9fd6b1b24fdd0c",5:"837fe4cda6cf454d6e46"}[t]+".js"}(t),0!==c.src.indexOf(window.location.origin+"/")&&(c.crossOrigin="anonymous");var s=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(a);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}r[t]=void 0}};var a=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="./js/",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonpLogan=window.webpackJsonpLogan||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var s=u;return o(o.s=4)}([function(t,e,n){"use strict";var r=function(){},o={logTryTimes:3,errorHandler:r,succHandler:r};function i(t,e,n){return typeof t===e?t:n}e.a={set:function(t){o={publicKey:i(t.publicKey,"string",void 0),logTryTimes:i(t.logTryTimes,"number",3),reportUrl:i(t.reportUrl,"string",void 0),dbName:i(t.dbName,"string",void 0),errorHandler:i(t.errorHandler,"function",r),succHandler:i(t.succHandler,"function",r)}},get:function(t){return o[t]}}},function(t,e,n){"use strict";var r,o;n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),function(t){t.DB_NOT_SUPPORT="IndexedDB is not supported",t.NO_LOG="No log exists",t.REPORT_LOG_SUCC="Report succ",t.REPORT_LOG_FAIL="Report fail",t.EXCEED_TRY_TIMES="Exceed try times",t.EXCEED_LOG_SIZE_LIMIT="Exceed log size day limit"}(r||(r={})),function(t){t[t.PLAIN=0]="PLAIN",t[t.RSA=1]="RSA"}(o||(o={}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"g",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return a}));var r=1048576;function o(t){for(var e=0,n=0,r=t.length;n<r;n++){var o=t.charCodeAt(n);e+=o<=127?1:o<=2047?2:o<=65535?3:4}return e}function i(t){var e=t.split("-"),n=parseInt(e[1]),r=parseInt(e[2]);return n>0&&n<=12&&r>0&&r<=31&&"Invalid Date"!==new Date(t).toString()}function u(t){var e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return e+"-"+(n<10?"0"+n:n)+"-"+(r<10?"0"+r:r)}function c(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()}function s(t){var e=(t.match(/(\d+)/g)||[]).map((function(t){return parseInt(t)})),n=e[0],r=e[1],o=e[2];if(n<1e3)throw new Error("Invalid dayString: "+t);return new Date(n,r-1,o)}var a=864e5},function(t,e,n){"use strict";var r=n(0),o=r.a.get("logTryTimes");e.a={errorTrigger:function(){o>0&&o--},canSave:function(){return o>0},resetQuota:function(){o=r.a.get("logTryTimes")}}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";n.r(e),n.d(e,"initConfig",(function(){return h})),n.d(e,"log",(function(){return p})),n.d(e,"logWithEncryption",(function(){return v})),n.d(e,"report",(function(){return y}));var r=n(1),o=n(0),i=n(2),u=n(3),c=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function c(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}s((r=r.apply(t,e||[])).next())}))},s=function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=n(6);window.Promise||(window.Promise=a);var f=[];function l(t){return c(this,void 0,void 0,(function(){var e;return s(this,(function(i){switch(i.label){case 0:if(!u.a.canSave())return[3,5];i.label=1;case 1:return i.trys.push([1,3,,4]),function(t){if("number"!=typeof t.logType)throw new Error("logType needs to be set");if(t.encryptVersion===r.a.RSA&&!o.a.get("publicKey"))throw new Error("publicKey needs to be set before logWithEncryption")}(t),[4,Promise.all([n.e(0),n.e(4)]).then(n.bind(null,9))];case 2:return i.sent().default(t),[3,4];case 3:return e=i.sent(),u.a.errorTrigger(),o.a.get("errorHandler")(e),[3,4];case 4:return[3,6];case 5:o.a.get("errorHandler")(new Error(r.b.EXCEED_TRY_TIMES)),i.label=6;case 6:return[2]}}))}))}function d(t){!document.readyState||document.readyState&&"complete"===document.readyState?l(t):f.push(t)}function h(t){o.a.set(t)}function p(t,e){d({content:t,logType:e,encryptVersion:r.a.PLAIN})}function v(t,e){d({content:t,logType:e,encryptVersion:r.a.RSA})}function y(t){return c(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return function(t){if(!t.reportUrl&&!o.a.get("reportUrl"))throw new Error("reportUrl needs to be set before report");if(void 0===t.deviceId)throw new Error("deviceId is needed");var e="is not valid, needs to be YYYY-MM-DD format";if(!Object(i.f)(t.fromDayString))throw new Error("fromDayString "+e);if(!Object(i.f)(t.toDayString))throw new Error("toDayString "+e);if(t.fromDayString>t.toDayString)throw new Error("fromDayString needs to be no bigger than toDayString")}(t),[4,Promise.all([n.e(0),n.e(3)]).then(n.bind(null,10))];case 1:return[4,e.sent().default(t)];case 2:return[2,e.sent()]}}))}))}window.addEventListener("load",(function t(){f.forEach((function(t){l(t)})),f=[],window.removeEventListener("load",t)})),e.default={initConfig:h,log:p,logWithEncryption:v,report:y,ResultMsg:r.b}},function(t,e,n){(function(e,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */var r;r=function(){"use strict";function t(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,u=void 0,c=function(t,e){p[o]=t,p[o+1]=e,2===(o+=2)&&(u?u(v):w())},s="undefined"!=typeof window?window:void 0,a=s||{},f=a.MutationObserver||a.WebKitMutationObserver,l="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(v,1)}}var p=new Array(1e3);function v(){for(var t=0;t<o;t+=2)(0,p[t])(p[t+1]),p[t]=void 0,p[t+1]=void 0;o=0}var y,g,m,b,w=void 0;function _(t,e){var n=this,r=new this.constructor(S);void 0===r[E]&&Y(r);var o=n._state;if(o){var i=arguments[o-1];c((function(){return R(o,r,i,n._result)}))}else I(n,r,t,e);return r}function T(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(S);return P(e,t),e}l?w=function(){return e.nextTick(v)}:f?(g=0,m=new f(v),b=document.createTextNode(""),m.observe(b,{characterData:!0}),w=function(){b.data=g=++g%2}):d?((y=new MessageChannel).port1.onmessage=v,w=function(){return y.port2.postMessage(0)}):w=void 0===s?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(v)}:h()}catch(t){return h()}}():h();var E=Math.random().toString(36).substring(2);function S(){}var A=void 0,O=1,x=2;function j(e,n,r){n.constructor===e.constructor&&r===_&&n.constructor.resolve===T?function(t,e){e._state===O?D(t,e._result):e._state===x?M(t,e._result):I(e,void 0,(function(e){return P(t,e)}),(function(e){return M(t,e)}))}(e,n):void 0===r?D(e,n):t(r)?function(t,e,n){c((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?P(t,n):D(t,n))}),(function(e){r||(r=!0,M(t,e))}),t._label);!r&&o&&(r=!0,M(t,o))}),t)}(e,n,r):D(e,n)}function P(t,e){if(t===e)M(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=e),null===r||"object"!==o&&"function"!==o)D(t,e);else{var n=void 0;try{n=e.then}catch(e){return void M(t,e)}j(t,e,n)}var r,o}function L(t){t._onerror&&t._onerror(t._result),C(t)}function D(t,e){t._state===A&&(t._result=e,t._state=O,0!==t._subscribers.length&&c(C,t))}function M(t,e){t._state===A&&(t._state=x,t._result=e,c(L,t))}function I(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+O]=n,o[i+x]=r,0===i&&t._state&&c(C,t)}function C(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?R(n,r,o,i):o(i);t._subscribers.length=0}}function R(e,n,r,o){var i=t(r),u=void 0,c=void 0,s=!0;if(i){try{u=r(o)}catch(t){s=!1,c=t}if(n===u)return void M(n,new TypeError("A promises callback cannot return that same promise."))}else u=o;n._state!==A||(i&&s?P(n,u):!1===s?M(n,c):e===O?D(n,u):e===x&&M(n,u))}var k=0;function Y(t){t[E]=k++,t._state=void 0,t._result=void 0,t._subscribers=[]}var N=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(S),this.promise[E]||Y(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?D(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&D(this.promise,this._result))):M(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===A&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===T){var o=void 0,i=void 0,u=!1;try{o=t.then}catch(t){u=!0,i=t}if(o===_&&t._state!==A)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===H){var c=new n(S);u?M(c,i):j(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===A&&(this._remaining--,t===x?M(r,n):this._result[e]=n),0===this._remaining&&D(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;I(t,void 0,(function(t){return n._settledAt(O,e,t)}),(function(t){return n._settledAt(x,e,t)}))},t}(),H=function(){function e(t){this[E]=k++,this._result=this._state=void 0,this._subscribers=[],S!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){P(t,e)}),(function(e){M(t,e)}))}catch(e){M(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this.constructor;return t(e)?this.then((function(t){return n.resolve(e()).then((function(){return t}))}),(function(t){return n.resolve(e()).then((function(){throw t}))})):this.then(e,e)},e}();return H.prototype.then=_,H.all=function(t){return new N(this,t).promise},H.race=function(t){var e=this;return r(t)?new e((function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)})):new e((function(t,e){return e(new TypeError("You must pass an array to race."))}))},H.resolve=T,H.reject=function(t){var e=new this(S);return M(e,t),e},H._setScheduler=function(t){u=t},H._setAsap=function(t){c=t},H._asap=c,H.polyfill=function(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=H},H.Promise=H,H},t.exports=r()}).call(this,n(7),n(8))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var s,a=[],f=!1,l=-1;function d(){f&&s&&(f=!1,s.length?a=s.concat(a):l=-1,a.length&&h())}function h(){if(!f){var t=c(d);f=!0;for(var e=a.length;e;){for(s=a,a=[];++l<e;)s&&s[l].run();l=-1,e=a.length}s=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new p(t,e)),1!==a.length||f||c(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}])}));