!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/sudoku/",e(0)}(function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))switch(typeof t[e]){case"function":break;case"object":t[e]=function(e){var n=e.slice(1),r=t[e[0]];return function(t,e,o){r.apply(this,[t,e,o].concat(n))}}(t[e]);break;default:t[e]=t[t[e]]}return t}([function(t,e,n){n(13),t.exports=n(9)},function(t,e,n){!function(){"use strict";function e(){}function n(t,n){var r,o,i,a,u=N;for(a=arguments.length;a-- >2;)I.push(arguments[a]);for(n&&null!=n.children&&(I.length||I.push(n.children),delete n.children);I.length;)if((o=I.pop())&&void 0!==o.pop)for(a=o.length;a--;)I.push(o[a]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof t)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(i=!1)),i&&r?u[u.length-1]+=o:u===N?u=[o]:u.push(o),r=i;var s=new e;return s.nodeName=t,s.children=u,s.attributes=null==n?void 0:n,s.key=null==n?void 0:n.key,void 0!==U.vnode&&U.vnode(s),s}function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){return n(t.nodeName,r(r({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==z.push(t)&&(U.debounceRendering||R)(a)}function a(){var t,e=z;for(z=[];t=e.pop();)t.__d&&E(t)}function u(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&s(t,e.nodeName):n||t._componentConstructor===e.nodeName}function s(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function l(t){var e=r({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===e[o]&&(e[o]=n[o]);return e}function c(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function f(t){var e=t.parentNode;e&&e.removeChild(t)}function p(t,e,n,r,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)n&&n(null),r&&r(t);else if("class"!==e||o)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof n||(t.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(t.style[i]="");for(var i in r)t.style[i]="number"==typeof r[i]&&!1===D.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var a=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?n||t.addEventListener(e,h,a):t.removeEventListener(e,h,a),(t.__l||(t.__l={}))[e]=r}else if("list"!==e&&"type"!==e&&!o&&e in t)d(t,e,null==r?"":r),null!=r&&!1!==r||t.removeAttribute(e);else{var u=o&&e!==(e=e.replace(/^xlink\:?/,""));null==r||!1===r?u?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof r&&(u?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.setAttribute(e,r))}else t.className=r||""}function d(t,e,n){try{t[e]=n}catch(r){}}function h(t){return this.__l[t.type](U.event&&U.event(t)||t)}function _(){for(var t;t=L.pop();)U.afterMount&&U.afterMount(t),t.componentDidMount&&t.componentDidMount()}function y(t,e,n,r,o,i){A++||(M=null!=o&&void 0!==o.ownerSVGElement,B=null!=t&&!("__preactattr_"in t));var a=v(t,e,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--A||(B=!1,i||_()),a}function v(t,e,n,r,o){var i=t,a=M;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0))),i.__preactattr_=!0,i;var u=e.nodeName;if("function"==typeof u)return C(t,e,n,r);if(M="svg"===u||"foreignObject"!==u&&M,u=String(u),(!t||!s(t,u))&&(i=c(u,M),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0)}var l=i.firstChild,f=i.__preactattr_,p=e.children;if(null==f){f=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)f[d[h].name]=d[h].value}return!B&&p&&1===p.length&&"string"==typeof p[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=p[0]&&(l.nodeValue=p[0]):(p&&p.length||null!=l)&&m(i,p,n,r,B||null!=f.dangerouslySetInnerHTML),g(i,e.attributes,f),M=a,i}function m(t,e,n,r,o){var i,a,s,l,c,p=t.childNodes,d=[],h={},_=0,y=0,m=p.length,w=0,g=e?e.length:0;if(0!==m)for(var x=0;x<m;x++){var T=p[x],O=T.__preactattr_,P=g&&O?T._component?T._component.__k:O.key:null;null!=P?(_++,h[P]=T):(O||(void 0!==T.splitText?!o||T.nodeValue.trim():o))&&(d[w++]=T)}if(0!==g)for(var x=0;x<g;x++){l=e[x],c=null;var P=l.key;if(null!=P)_&&void 0!==h[P]&&(c=h[P],h[P]=void 0,_--);else if(!c&&y<w)for(i=y;i<w;i++)if(void 0!==d[i]&&u(a=d[i],l,o)){c=a,d[i]=void 0,i===w-1&&w--,i===y&&y++;break}c=v(c,l,n,r),s=p[x],c&&c!==t&&c!==s&&(null==s?t.appendChild(c):c===s.nextSibling?f(s):t.insertBefore(c,s))}if(_)for(var x in h)void 0!==h[x]&&b(h[x],!1);for(;y<=w;)void 0!==(c=d[w--])&&b(c,!1)}function b(t,e){var n=t._component;n?k(n):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||f(t),w(t))}function w(t){for(t=t.lastChild;t;){var e=t.previousSibling;b(t,!0),t=e}}function g(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||p(t,r,n[r],n[r]=void 0,M);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||p(t,r,n[r],n[r]=e[r],M)}function x(t){var e=t.constructor.name;(F[e]||(F[e]=[])).push(t)}function T(t,e,n){var r,o=F[t.name];if(t.prototype&&t.prototype.render?(r=new t(e,n),j.call(r,e,n)):(r=new j(e,n),r.constructor=t,r.render=O),o)for(var i=o.length;i--;)if(o[i].constructor===t){r.__b=o[i].__b,o.splice(i,1);break}return r}function O(t,e,n){return this.constructor(t,n)}function P(t,e,n,r,o){t.__x||(t.__x=!0,(t.__r=e.ref)&&delete e.ref,(t.__k=e.key)&&delete e.key,!t.base||o?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r),r&&r!==t.context&&(t.__c||(t.__c=t.context),t.context=r),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===U.syncComponentUpdates&&t.base?i(t):E(t,1,o)),t.__r&&t.__r(t))}function E(t,e,n,o){if(!t.__x){var i,a,u,s=t.props,c=t.state,f=t.context,p=t.__p||s,d=t.__s||c,h=t.__c||f,v=t.base,m=t.__b,w=v||m,g=t._component,x=!1;if(v&&(t.props=p,t.state=d,t.context=h,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(s,c,f)?x=!0:t.componentWillUpdate&&t.componentWillUpdate(s,c,f),t.props=s,t.state=c,t.context=f),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!x){i=t.render(s,c,f),t.getChildContext&&(f=r(r({},f),t.getChildContext()));var O,C,j=i&&i.nodeName;if("function"==typeof j){var S=l(i);a=g,a&&a.constructor===j&&S.key==a.__k?P(a,S,1,f,!1):(O=a,t._component=a=T(j,S,f),a.__b=a.__b||m,a.__u=t,P(a,S,0,f,!1),E(a,1,n,!0)),C=a.base}else u=w,O=g,O&&(u=t._component=null),(w||1===e)&&(u&&(u._component=null),C=y(u,i,f,n||!v,w&&w.parentNode,!0));if(w&&C!==w&&a!==g){var I=w.parentNode;I&&C!==I&&(I.replaceChild(C,w),O||(w._component=null,b(w,!1)))}if(O&&k(O),t.base=C,C&&!o){for(var N=t,R=t;R=R.__u;)(N=R).base=C;C._component=N,C._componentConstructor=N.constructor}}if(!v||n?L.unshift(t):x||(t.componentDidUpdate&&t.componentDidUpdate(p,d,h),U.afterUpdate&&U.afterUpdate(t)),null!=t.__h)for(;t.__h.length;)t.__h.pop().call(t);A||o||_()}}function C(t,e,n,r){for(var o=t&&t._component,i=o,a=t,u=o&&t._componentConstructor===e.nodeName,s=u,c=l(e);o&&!s&&(o=o.__u);)s=o.constructor===e.nodeName;return o&&s&&(!r||o._component)?(P(o,c,3,n,r),t=o.base):(i&&!u&&(k(i),t=a=null),o=T(e.nodeName,c,n),t&&!o.__b&&(o.__b=t,a=null),P(o,c,1,n,r),t=o.base,a&&t!==a&&(a._component=null,b(a,!1))),t}function k(t){U.beforeUnmount&&U.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?k(n):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.__b=e,f(e),x(t),w(e)),t.__r&&t.__r(null)}function j(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{}}function S(t,e,n){return y(n,t,{},!1,e,!1)}var U={},I=[],N=[],R="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,D=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,z=[],L=[],A=0,M=!1,B=!1,F={};r(j.prototype,{setState:function(t,e){var n=this.state;this.__s||(this.__s=r({},n)),r(n,"function"==typeof t?t(n,this.props):t),e&&(this.__h=this.__h||[]).push(e),i(this)},forceUpdate:function(t){t&&(this.__h=this.__h||[]).push(t),E(this,2)},render:function(){}});var H={h:n,createElement:n,cloneElement:o,Component:j,render:S,rerender:a,options:U};t.exports=H}()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=e.SUDOKU_DIGITS=[1,2,3,4,5,6,7,8,9];e.SUDOKU_LARGEST_DIGIT=Math.max.apply({},n),e.GA_DIFFICULTY_MULTIPLIER=1e3},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=window,o=r.ga,i=r.requirejs;o("create","UA-59233605-5","auto");var a="https://www.google-analytics.com/analytics.js";"localhost"===location.hostname&&(a=a.replace("analytics.js","analytics_debug.js"),o("set","sendHitTask",null)),o("set",{title:"Sudoku",page:"/sudoku/"}),o("send","pageview"),i([a]);e.trackEvent=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];window.ga.apply(null,["send","event"].concat(e))}},function(t,e,n){"use strict";function r(){}function o(t){try{return t.then}catch(e){return v=e,m}}function i(t,e){try{return t(e)}catch(n){return v=n,m}}function a(t,e,n){try{t(e,n)}catch(r){return v=r,m}}function u(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._45=0,this._81=0,this._65=null,this._54=null,t!==r&&_(t,this)}function s(t,e,n){return new t.constructor(function(o,i){var a=new u(r);a.then(o,i),l(t,new h(e,n,a))})}function l(t,e){for(;3===t._81;)t=t._65;return u._10&&u._10(t),0===t._81?0===t._45?(t._45=1,void(t._54=e)):1===t._45?(t._45=2,void(t._54=[t._54,e])):void t._54.push(e):void c(t,e)}function c(t,e){y(function(){var n=1===t._81?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._81?f(e.promise,t._65):p(e.promise,t._65));var r=i(n,t._65);r===m?p(e.promise,v):f(e.promise,r)})}function f(t,e){if(e===t)return p(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"==typeof e||"function"==typeof e)){var n=o(e);if(n===m)return p(t,v);if(n===t.then&&e instanceof u)return t._81=3,t._65=e,void d(t);if("function"==typeof n)return void _(n.bind(e),t)}t._81=1,t._65=e,d(t)}function p(t,e){t._81=2,t._65=e,u._97&&u._97(t,e),d(t)}function d(t){if(1===t._45&&(l(t,t._54),t._54=null),2===t._45){for(var e=0;e<t._54.length;e++)l(t,t._54[e]);t._54=null}}function h(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function _(t,e){var n=!1,r=a(t,function(t){n||(n=!0,f(e,t))},function(t){n||(n=!0,p(e,t))});n||r!==m||(n=!0,p(e,v))}var y=n(5),v=null,m={};t.exports=u,u._10=null,u._97=null,u._61=r,u.prototype.then=function(t,e){if(this.constructor!==u)return s(this,t,e);var n=new u(r);return l(this,new h(t,e,n)),n}},function(t,e){(function(e){"use strict";function n(t){u.length||(a(),s=!0),u[u.length]=t}function r(){for(;l<u.length;){var t=l;if(l+=1,u[t].call(),l>c){for(var e=0,n=u.length-l;e<n;e++)u[e]=u[e+l];u.length-=l,l=0}}u.length=0,l=0,s=!1}function o(t){var e=1,n=new p(t),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){e=-e,r.data=e}}function i(t){return function(){function e(){clearTimeout(n),clearInterval(r),t()}var n=setTimeout(e,0),r=setInterval(e,50)}}t.exports=n;var a,u=[],s=!1,l=0,c=1024,f="undefined"!=typeof e?e:self,p=f.MutationObserver||f.WebKitMutationObserver;a="function"==typeof p?o(r):i(r),n.requestFlush=a,n.makeRequestCallFromTimer=i}).call(e,function(){return this}())},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(1),l=n(7),c=r(l);n(10);var f=(0,s.h)("main",{className:"center",role:"main"},(0,s.h)("h1",{className:"heading text-center"},"Sudoku"),(0,s.h)(c.default,null)),p=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),u(e,[{key:"render",value:function(){return f}}]),e}(s.Component);t.exports=p},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(1),l=n(2),c=n(8),f=r(c),p=n(3);n(11);var d=(0,s.h)("br",null),h=(0,s.h)("br",null),_=(0,s.h)("br",null),y=(0,s.h)("small",null,"Difficulty: "),v=function(t){function e(){var t,n,r,a;o(this,e);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),r.state={attempt:[],difficulty:.5,puzzle:[],solution:[],solutionJSON:""},r.handleCellChange=function(t){var e=t.target,n=e.dataset,o=n.x,i=n.y,a=e.value;!e.readOnly&&a&&r.setState(function(t){var e=t.attempt.map(function(t){return t.slice()});return e[i][o]=parseInt(a,10)||null,{attempt:e}})},r.handleCellKeyDown=function(t){var e=t.key,n=t.target,o=n.dataset,i=o.x,a=o.y;switch(i=parseInt(i,10),a=parseInt(a,10),e){case"ArrowUp":a-=1;break;case"ArrowDown":a+=1;break;case"ArrowLeft":i-=1;break;case"ArrowRight":i+=1;break;default:return}var u=r.tbody.querySelector('[data-x="'+i+'"][data-y="'+a+'"]');u&&setTimeout(function(){return u.select()})},r.checkSolution=function(){var t=r.state,e=t.attempt,n=t.difficulty,o=t.solutionJSON;console.log(JSON.stringify(e),o),JSON.stringify(e)===o?((0,p.trackEvent)("puzzle","check","solved",Math.round(n*l.GA_DIFFICULTY_MULTIPLIER)),alert("Solved!")):((0,p.trackEvent)("puzzle","check","unsolved",Math.round(n*l.GA_DIFFICULTY_MULTIPLIER)),alert("Not solved."))},r.clearPuzzle=function(){(0,p.trackEvent)("puzzle","clear"),r.setState(function(t){var e=t.puzzle;return{attempt:e.map(function(t){return t.slice()})}})},r.newPuzzle=function(){r.setState(function(t){var e=t.difficulty;(0,p.trackEvent)("puzzle","new",void 0,Math.round(e*l.GA_DIFFICULTY_MULTIPLIER));var n=(0,f.default)(e),r=n.puzzle,o=n.solution;return{attempt:r.map(function(t){return t.slice()}),puzzle:r,solution:o,solutionJSON:JSON.stringify(o)}})},r.changeDifficulty=function(t){var e=t.target;r.setState(function(){return{difficulty:Number(e.value)}})},a=n,i(r,a)}return a(e,t),u(e,[{key:"componentDidMount",value:function(){this.newPuzzle()}},{key:"handleCellClick",value:function(t){var e=t.target;e.select()}},{key:"render",value:function(){var t=this,e=this.state,n=e.attempt,r=e.difficulty,o=e.puzzle;return(0,s.h)("div",null,(0,s.h)("table",null,(0,s.h)("tbody",{ref:function(e){return t.tbody=e}},n.map(function(e,n){return(0,s.h)("tr",null,e.map(function(e,r){return(0,s.h)("td",null,(0,s.h)("input",{"data-x":r,"data-y":n,formnovalidate:!0,maxlength:"1",onClick:t.handleCellClick,onChange:t.handleCellChange,onKeyDown:t.handleCellKeyDown,pattern:"[0-9]",readonly:Boolean(o[n][r]),type:"text",value:e}))}))}))),d,(0,s.h)("button",{onClick:this.checkSolution},"Check Solution")," ",(0,s.h)("button",{onClick:this.clearPuzzle},"Clear Puzzle"),h,_,(0,s.h)("label",null,y,(0,s.h)("input",{type:"number",min:0,max:1,value:r,onChange:this.changeDifficulty}))," ",(0,s.h)("button",{onClick:this.newPuzzle},"New Puzzle"))}}]),e}(s.Component);e.default=v},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?t:t.slice(),r=n.length-1;r>0;r--){var o=Math.floor(Math.random()*(r+1)),i=n[r];n[r]=n[o],n[o]=i}return n},i=function(){return o(r.SUDOKU_DIGITS)},a=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=n.length-1;r>-1;r--)for(var o=n[r].length-1;o>-1;o--){var i=e[o];if(i===n[r][o])return!1;var a=6;t<3?a=0:t<6&&(a=3);var u=6;o<3?u=0:o<6&&(u=3);for(var s=[],l=0;l<3;l++)n[a+l]instanceof Array&&(s=s.concat(n[a+l].slice(u,u+3)));if(s.indexOf(i)!==-1)return!1}return!0},u=function t(){for(var e=[i()],n=0,o=1;o<8;o++)for(;;){var u=i();if(a(o,u,e)){e[o]=u,n=0;break}if(n++,n>2e5)return t()}for(var s=e.reduce(function(t,e,n){return e.forEach(function(e,r){t[r]=t[r]||[],t[r][n]=e}),t},[]),l=[],c=r.SUDOKU_LARGEST_DIGIT;c>0;c--)for(var f=s.length-1;f>-1;f--)if(s[f].indexOf(c)===-1){l[f]=c;break}return e.push(l),e},s=function(t){var e=u(),n=e.map(function(e){return e.slice().map(function(e){return Math.random()>t?e:null})});return{puzzle:n,solution:e}};e.default=s},function(t,e,n){"use strict";var r=n(1),o=function(){n(3);var t=n(6);(0,r.render)((0,r.h)(t,null),document.getElementById("root"))};window.requirejs(o,o)},function(t,e){},10,function(t,e){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function r(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(i){return!1}}var o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=r()?Object.assign:function(t,e){for(var r,a,u=n(t),s=1;s<arguments.length;s++){r=Object(arguments[s]);for(var l in r)o.call(r,l)&&(u[l]=r[l]);if(Object.getOwnPropertySymbols){a=Object.getOwnPropertySymbols(r);for(var c=0;c<a.length;c++)i.call(r,a[c])&&(u[a[c]]=r[a[c]])}}return u}},function(t,e,n){"undefined"==typeof Promise&&(n(15).enable(),window.Promise=n(14)),n(16),Object.assign=n(12)},function(t,e,n){"use strict";function r(t){var e=new o(o._61);return e._81=1,e._65=t,e}var o=n(4);t.exports=o;var i=r(!0),a=r(!1),u=r(null),s=r(void 0),l=r(0),c=r("");o.resolve=function(t){if(t instanceof o)return t;if(null===t)return u;if(void 0===t)return s;if(t===!0)return i;if(t===!1)return a;if(0===t)return l;if(""===t)return c;if("object"==typeof t||"function"==typeof t)try{var e=t.then;if("function"==typeof e)return new o(e.bind(t))}catch(n){return new o(function(t,e){e(n)})}return r(t)},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function r(a,u){if(u&&("object"==typeof u||"function"==typeof u)){if(u instanceof o&&u.then===o.prototype.then){for(;3===u._81;)u=u._65;return 1===u._81?r(a,u._65):(2===u._81&&n(u._65),void u.then(function(t){r(a,t)},n))}var s=u.then;if("function"==typeof s){var l=new o(s.bind(u));return void l.then(function(t){r(a,t)},n)}}e[a]=u,0===--i&&t(e)}if(0===e.length)return t([]);for(var i=e.length,a=0;a<e.length;a++)r(a,e[a])})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){t.forEach(function(t){o.resolve(t).then(e,n)})})},o.prototype.catch=function(t){return this.then(null,t)}},function(t,e,n){"use strict";function r(){l=!1,u._10=null,u._97=null}function o(t){function e(e){(t.allRejections||a(f[e].error,t.whitelist||s))&&(f[e].displayId=c++,t.onUnhandled?(f[e].logged=!0,t.onUnhandled(f[e].displayId,f[e].error)):(f[e].logged=!0,i(f[e].displayId,f[e].error)))}function n(e){f[e].logged&&(t.onHandled?t.onHandled(f[e].displayId,f[e].error):f[e].onUnhandled||(console.warn("Promise Rejection Handled (id: "+f[e].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+f[e].displayId+".")))}t=t||{},l&&r(),l=!0;var o=0,c=0,f={};u._10=function(t){2===t._81&&f[t._72]&&(f[t._72].logged?n(t._72):clearTimeout(f[t._72].timeout),delete f[t._72])},u._97=function(t,n){0===t._45&&(t._72=o++,f[t._72]={displayId:null,error:n,timeout:setTimeout(e.bind(null,t._72),a(n,s)?100:2e3),logged:!1})}}function i(t,e){console.warn("Possible Unhandled Promise Rejection (id: "+t+"):");var n=(e&&(e.stack||e))+"";n.split("\n").forEach(function(t){console.warn("  "+t)})}function a(t,e){return e.some(function(e){return t instanceof e})}var u=n(4),s=[ReferenceError,TypeError,RangeError],l=!1;e.disable=r,e.enable=o},function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!=typeof t&&(t=String(t)),t}function r(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return _.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function a(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function u(t){var e=new FileReader;return e.readAsArrayBuffer(t),a(e)}function s(t){var e=new FileReader;return e.readAsText(t),a(e)}function l(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(_.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(_.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(_.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(t){if(!_.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):_.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},_.blob?(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(u)},this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return s(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var t=i(this);return t?t:Promise.resolve(this._bodyText)},_.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function c(t){var e=t.toUpperCase();return y.indexOf(e)>-1?e:t}function f(t,e){e=e||{};var n=e.body;if(f.prototype.isPrototypeOf(t)){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,n||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=t;if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=c(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function d(t){var e=new o,n=(t.getAllResponseHeaders()||"").trim().split("\n");return n.forEach(function(t){var n=t.trim().split(":"),r=n.shift().trim(),o=n.join(":").trim();e.append(r,o)}),e}function h(t,e){e||(e={}),this.type="default",this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof o?e.headers:new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var _={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};o.prototype.append=function(t,r){t=e(t),r=n(r);var o=this.map[t];o||(o=[],this.map[t]=o),o.push(r)},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){var n=this.map[e(t)];return n?n[0]:null},o.prototype.getAll=function(t){return this.map[e(t)]||[]},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,r){this.map[e(t)]=[n(r)]},o.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(n){this.map[n].forEach(function(r){t.call(e,r,n,this)},this)},this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),r(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),r(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),r(t)},_.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];f.prototype.clone=function(){return new f(this)},l.call(f.prototype),l.call(h.prototype),h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},h.error=function(){var t=new h(null,{status:0,statusText:""});return t.type="error",t};var v=[301,302,303,307,308];h.redirect=function(t,e){if(v.indexOf(e)===-1)throw new RangeError("Invalid status code");return new h(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=f,t.Response=h,t.fetch=function(t,e){return new Promise(function(n,r){function o(){return"responseURL"in a?a.responseURL:/^X-Request-URL:/m.test(a.getAllResponseHeaders())?a.getResponseHeader("X-Request-URL"):void 0}var i;i=f.prototype.isPrototypeOf(t)&&!e?t:new f(t,e);var a=new XMLHttpRequest;a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:d(a),url:o()},e="response"in a?a.response:a.responseText;n(new h(e,t))},a.onerror=function(){r(new TypeError("Network request failed"))},a.ontimeout=function(){r(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials&&(a.withCredentials=!0),"responseType"in a&&_.blob&&(a.responseType="blob"),i.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),a.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}]));
//# sourceMappingURL=main.6283b909.js.map