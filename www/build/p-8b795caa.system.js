var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),i=0,r=0;r<t;r++)for(var l=arguments[r],o=0,c=l.length;o<c;o++,i++)n[i]=l[o];return n};System.register([],(function(e){"use strict";return{execute:function(){e({c:i,d:l,e:o,f:u,g:s,u:c});var r=e("i",(function(e){return typeof e!=="undefined"&&e!==null}));var t=e("a",(function(e){return r(e)&&Array.isArray(e)}));var n=e("b",(function(e){return r(e)&&typeof e==="object"&&!t(e)}));function i(e){return typeof e==="string"}function l(e){return t(e)&&e.length===0||n(e)&&Object.keys(e).length===0||i(e)&&e===""}function o(e,r){return r?r==="Host"||!!e.querySelector(r):!!e.firstElementChild}function c(e,r,t,n){if(!l(r)){if(e.selector){if(e.selector==="Host"){t([e.el],r)}else{var i=e.all?e.el.querySelectorAll(e.selector):[e.el.querySelector(e.selector)];if(i[0]){t(i,r);n===null||n===void 0?void 0:n.disconnect()}}}else{var o=e.all?__spreadArrays(e.el.children):[e.el.firstElementChild];if(o&&o[0]){t(o,r);n===null||n===void 0?void 0:n.disconnect()}}}}function u(e,t,n){if(r(t)&&!l(t)){if(o(e.el,e.selector)){c(e,t,n)}else{var i=new MutationObserver((function(){c(e,t,n,i)}));i.observe(e.el,{childList:true,subtree:true})}}}function s(e,r){r.forEach((function(r){e.forEach((function(e){e.classList.add(r)}))}))}}}}));