import{b as s,a as t}from"./p-25c9bb4c.js";function o(t,o,e,n){if(!s(o))if(t.selector)if("Host"===t.selector)e([t.el],o);else{const s=t.all?t.el.querySelectorAll(t.selector):[t.el.querySelector(t.selector)];s[0]&&(e(s,o),null==n||n.disconnect())}else{const s=t.all?[...t.el.children]:[t.el.firstElementChild];s&&s[0]&&(e(s,o),null==n||n.disconnect())}}function e(e,n,i){if(t(n)&&!s(n))if(c=e.el,(f=e.selector)?"Host"===f||c.querySelector(f):c.firstElementChild)o(e,n,i);else{const s=new MutationObserver((()=>{o(e,n,i,s)}));s.observe(e.el,{childList:!0,subtree:!0})}var c,f}function n(s,t){for(const[o,e]of Object.entries(t))s.forEach((s=>{s.style[o]=`${e}${isNaN(Number(e))?"":"px"}`}))}export{n as a,e as u}