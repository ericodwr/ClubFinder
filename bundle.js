(()=>{var t={286:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var u=0;u<this.length;u++){var a=this[u][0];null!=a&&(c[a]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);r&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},372:t=>{"use strict";t.exports=function(t){return t[1]}},39:(t,n,e)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var o=function(t){"use strict";var n,e=Object.prototype,o=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function s(t,n,e,r){var o=n&&n.prototype instanceof v?n:v,i=Object.create(o.prototype),c=new L(r||[]);return i._invoke=function(t,n,e){var r=p;return function(o,i){if(r===y)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return R()}for(e.method=o,e.arg=i;;){var c=e.delegate;if(c){var u=_(c,e);if(u){if(u===b)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===p)throw r=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=y;var a=f(t,n,e);if("normal"===a.type){if(r=e.done?d:h,a.arg===b)continue;return{value:a.arg,done:e.done}}"throw"===a.type&&(r=d,e.method="throw",e.arg=a.arg)}}}(t,e,c),i}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p="suspendedStart",h="suspendedYield",y="executing",d="completed",b={};function v(){}function m(){}function w(){}var g={};l(g,c,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(P([])));E&&E!==e&&o.call(E,c)&&(g=E);var O=w.prototype=v.prototype=Object.create(g);function S(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function j(t,n){function e(i,c,u,a){var l=f(t[i],t,c);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"===r(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){e("next",t,u,a)}),(function(t){e("throw",t,u,a)})):n.resolve(p).then((function(t){s.value=t,u(s)}),(function(t){return e("throw",t,u,a)}))}a(l.arg)}var i;this._invoke=function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}}function _(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,_(t,e),"throw"===e.method))return b;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,b;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,b):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function T(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function k(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:R}}function R(){return{value:n,done:!0}}return m.prototype=w,l(O,"constructor",w),l(w,"constructor",m),m.displayName=l(w,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,a,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},S(j.prototype),l(j.prototype,u,(function(){return this})),t.AsyncIterator=j,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var c=new j(s(n,e,r,o),i);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},S(O),l(O,a,"Generator"),l(O,c,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],u=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var a=o.call(c,"catchLoc"),l=o.call(c,"finallyLoc");if(a&&l){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=n,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),b},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),b}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),b}},t}("object"===r(t=e.nmd(t))?t.exports:{});try{regeneratorRuntime=o}catch(t){"object"===("undefined"==typeof globalThis?"undefined":r(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},214:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}function r(t){var n="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return o(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)},r(t)}function o(t,n,e){return o=i()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&c(o,e.prototype),o},o.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,n){return c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},c(t,n)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}var a=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}(f,t);var r,o,a,l,s=(r=f,o=i(),function(){var t,n=u(r);if(o){var i=u(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return e(this,t)});function f(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this)).shadowDom=t.attachShadow({mode:"open"}),t}return a=f,(l=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDom.innerHTML="\n    <style>\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    :host {\n        display: block;\n        width: 100%;\n        background-color: cornflowerblue;\n        color: white;\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    }\n    h2 {\n        padding: 16px;\n    }\n    </style>\n\n    <h2>Club Finder</h2>"}}])&&n(a.prototype,l),f}(r(HTMLElement));customElements.define("app-bar",a)},699:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}function r(t){var n="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return o(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)},r(t)}function o(t,n,e){return o=i()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&c(o,e.prototype),o},o.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,n){return c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},c(t,n)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}var a=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}(f,t);var r,o,a,l,s=(r=f,o=i(),function(){var t,n=u(r);if(o){var i=u(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return e(this,t)});function f(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this)).shadowDom=t.attachShadow({mode:"open"}),t}return a=f,(l=[{key:"club",set:function(t){this._club=t,this.render()}},{key:"render",value:function(){this.shadowDom.innerHTML='\n      <style>\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n        :host {\n            display: block;\n            margin-bottom: 18px;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            border-radius: 10px;\n            overflow: hidden;\n        }\n      \n        .fan-art-club {\n            margin-top:2rem;\n            width: 100%;\n            height: 300px;\n            display:flex;\n            justify-content:center;\n        }\n        img {\n          width:auto;\n          height:auto;\n        }\n\n      \n        .club-info {\n            padding: 24px;\n        }\n      \n        .club-info > h2 {\n            font-weight: lighter;\n        }\n      \n        .club-info > p {\n            margin-top: 10px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 10; /* number of lines to show */\n        }\n      </style>\n      <div class="fan-art-club">\n      <img  src="'.concat(this._club.strTeamBadge,'" alt="Fan Art">\n      </div>\n           <div class="club-info">\n               <h2>').concat(this._club.strTeam,"</h2>\n               <p>").concat(this._club.strDescriptionEN,"</p>\n           </div>;\n    ")}}])&&n(a.prototype,l),f}(r(HTMLElement));customElements.define("club-item",a)},917:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}function r(t){var n="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return o(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)},r(t)}function o(t,n,e){return o=i()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&c(o,e.prototype),o},o.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,n){return c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},c(t,n)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}var a=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}(f,t);var r,o,a,l,s=(r=f,o=i(),function(){var t,n=u(r);if(o){var i=u(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return e(this,t)});function f(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this)).shadowDom=t.attachShadow({mode:"open"}),t}return a=f,(l=[{key:"connectedCallback",value:function(){this.render()}},{key:"clickEvent",set:function(t){this._clickEvent=t,this.render()}},{key:"value",get:function(){return this.shadowDom.querySelector("#searchElement").value}},{key:"render",value:function(){this.shadowDom.innerHTML='\n      <style>\n      .search-container {\n        max-width: 800px;\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n        padding: 16px;\n        border-radius: 5px;\n        display: flex;\n        position: sticky;\n        top: 10px;\n        background-color: white;\n    }\n    \n    .search-container > input {\n        width: 75%;\n        padding: 16px;\n        border: 0;\n        border-bottom: 1px solid cornflowerblue;\n        font-weight: bold;\n    }\n    \n    .search-container > input:focus {\n        outline: 0;\n        border-bottom: 2px solid cornflowerblue;\n    }\n    \n    .search-container > input:focus::placeholder {\n        font-weight: bold;\n    }\n    \n    .search-container >  input::placeholder {\n        color: cornflowerblue;\n        font-weight: normal;\n    }\n    \n    .search-container > button {\n        width: 23%;\n        cursor: pointer;\n        margin-left: auto;\n        padding: 16px;\n        background-color: cornflowerblue;\n        color: white;\n        border: 0;\n        text-transform: uppercase;\n    }\n    \n    @media screen and (max-width: 550px){\n        .search-container {\n            flex-direction: column;\n            position: static;\n        }\n    \n        .search-container > input {\n            width: 100%;\n            margin-bottom: 12px;\n        }\n    \n        .search-container > button {\n            width: 100%;\n        }\n    }\n      </style>\n\n      <div id="search-container" class="search-container">\n        <input placeholder="Search football club" id="searchElement" type="search">\n        <button id="searchButtonElement" type="submit">Search</button>\n      </div>\n    ',this.shadowDom.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}}])&&n(a.prototype,l),f}(r(HTMLElement));customElements.define("search-bar",a)},890:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u});var r=e(372),o=e.n(r),i=e(286),c=e.n(i)()(o());c.push([t.id,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n}\n\nmain {\n    width: 90%;\n    max-width: 800px;\n    margin: 32px auto;\n}\n",""]);const u=c},379:t=>{"use strict";var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},c=[],u=0;u<t.length;u++){var a=t[u],l=r.base?a[0]+r.base:a[0],s=i[l]||0,f="".concat(l," ").concat(s);i[l]=s+1;var p=e(f),h={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var y=o(h,r);r.byIndex=u,n.splice(u,0,{identifier:f,updater:y,references:1})}c.push(f)}return c}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var u=e(i[c]);n[u].references--}for(var a=r(t,o),l=0;l<i.length;l++){var s=e(i[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=a}}},569:t=>{"use strict";var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{"use strict";t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return t[r](i,i.exports,e),i.loaded=!0,i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{"use strict";function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}function o(t){var n="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return i(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)},o(t)}function i(t,n,e){return i=c()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&u(o,e.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,n){return u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},u(t,n)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}e(214),e(917),e(699);var l=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&u(t,n)}(f,t);var e,o,i,l,s=(e=f,o=c(),function(){var t,n=a(e);if(o){var i=a(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return r(this,t)});function f(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this)).shadowDom=t.attachShadow({mode:"open"}),t}return i=f,(l=[{key:"clubs",set:function(t){this._clubs=t,this.render()}},{key:"render",value:function(){var t=this;this.shadowDom.innerHTML="",this._clubs.forEach((function(n){var e=document.createElement("club-item");e.club=n,t.shadowDom.append(e)}))}},{key:"renderError",value:function(t){this.shadowDom.innerHTML="\n      <style>\n        .placeholder {\n            font-weight: lighter;\n            color: rgba(0,0,0,0.5);\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n        }\n      </style>\n    ",this.shadowDom.innerHTML='\n      <h2 class = "placeholder">'.concat(t,"</h2>\n    ")}}])&&n(i.prototype,l),f}(o(HTMLElement));function s(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}customElements.define("club-list",l);const f=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e;return n=t,e=[{key:"searchClub",value:function(t){return fetch("https://sports-api.dicoding.dev/teams/search?t=".concat(t)).then((function(t){return t.json()})).then((function(n){return n.teams?Promise.resolve(n.teams):Promise.reject("".concat(t," is not found"))}))}}],null&&s(n.prototype,null),e&&s(n,e),t}();function p(t,n,e,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void e(t)}u.done?n(a):Promise.resolve(a).then(r,o)}var h=e(379),y=e.n(h),d=e(795),b=e.n(d),v=e(569),m=e.n(v),w=e(565),g=e.n(w),x=e(216),E=e.n(x),O=e(589),S=e.n(O),j=e(890),_={};_.styleTagTransform=S(),_.setAttributes=g(),_.insert=m().bind(null,"head"),_.domAPI=b(),_.insertStyleElement=E(),y()(j.Z,_),j.Z&&j.Z.locals&&j.Z.locals,e(39),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("search-bar"),n=document.querySelector("club-List"),e=function(){var n,e=(n=regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.searchClub(t.value);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),o(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})),function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function c(t){p(i,r,o,c,u,"next",t)}function u(t){p(i,r,o,c,u,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),r=function(t){return n.clubs=t},o=function(t){n.renderError(t)};t.clickEvent=e}))})()})();