var __spreadArray=this&&this.__spreadArray||function(n,e){for(var i=0,t=e.length,r=n.length;i<t;i++,r++)n[r]=e[i];return n};System.register(["./p-b74d52ec.system.js"],(function(n){"use strict";var e,i;return{setters:[function(n){e=n.u;i=n.a}],execute:function(){n("u",f);function t(n){var e=document.head.querySelectorAll("style");var i=Array.from(e).some((function(e){return e.textContent===n}));if(!i){var t=document.createElement("style");t.appendChild(document.createTextNode(n));document.head.appendChild(t)}}function r(n){var e={};var i="rotate("+n+"deg)";e.transform=i;e["-webkit-transform"]=i;return{styles:e}}function s(n){var e=n.speed,i=n.steps;var t={};var r="uni-rotate "+(e||1)+"s infinite "+(i?"steps("+i+")":"linear");t.animation=r;t["-webkit-animation"]=r;return{styles:t}}function a(n){var e=n.color,i=n.filter,t=n.size,r=n.fontSize;var s=["primary","success","accent","warn"];var a=["xs","sm","md","lg","xl","xxl"];var o=[];var l={};if(s.includes(e)){o.push("uni-color-"+e)}else if(e){l.color=e;l.fill=e}if(s.includes(i)){o.push("uni-filter-"+i)}else if(i){l.filter=i}if(a.includes(t)){o.push("uni-size-"+t)}else if(t){l.height=t;l.width=t}if(a.includes(r)){o.push("uni-font-size-"+r)}else if(r){l.fontSize=r+"px"}return{classes:o,styles:l}}function o(n,e){e.forEach((function(e){n.forEach((function(n){n.classList.add(e)}))}))}function l(n,e){if(!!e){n.forEach((function(n){n.textContent=e}))}}function f(n){var f=n.el,v=n.color,d=n.filter,g=n.size,z=n.fontSize,m=n.selector,w=n.all;var y=v||d||g||z?a({color:v,filter:d,size:g,fontSize:z}):{classes:[],styles:{}},b=y.classes,k=y.styles;b=__spreadArray(__spreadArray([],b),n.classes?n.classes.split(" "):[]);if(!!v){t(u)}if(d){t(c)}if(g){t(p)}if(z){t(h)}if(n.angle){k=Object.assign(Object.assign({},k),r(n.angle).styles)}if(n.spin){t(x);k=Object.assign(Object.assign({},k),s(n).styles)}e({el:f,selector:m,all:w},b,o);e({el:f,selector:m,all:w},k,i);e({el:f,selector:m,all:w},n.content,l)}var u="\n.uni-color-primary {\n  color: #3f51b5;\n  color: var(--uni-color-primary, #3f51b5);\n  fill: #3f51b5;\n  fill: var(--uni-color-primary, #3f51b5);\n}\n.uni-color-success {\n  color: #018786;\n  color: var(--uni-color-success, #018786);\n  fill: #018786;\n  fill: var(--uni-color-success, #018786);\n}\n.uni-color-accent {\n  color: #ff4081;\n  color: var(--uni-color-accent, #ff4081);\n  fill: #ff4081;\n  fill: var(--uni-color-accent, #ff4081);\n}\n.uni-color-warn {\n  color: #f44336;\n  color: var(--uni-color-warn, #f44336);\n  fill: #f44336;\n  fill: var(--uni-color-warn, #f44336);\n}";var c="\n.uni-filter-primary {\n  filter: invert(31%) sepia(10%) saturate(6644%) hue-rotate(204deg) brightness(95%) contrast(89%);\n  filter: var(--uni-color-primary-fix, invert(31%) sepia(10%) saturate(6644%) hue-rotate(204deg) brightness(95%) contrast(89%));\n}\n.uni-filter-success {\n  filter: invert(26%) sepia(88%) saturate(1958%) hue-rotate(160deg) brightness(94%) contrast(99%);\n  filter: var(--uni-color-success-fix, invert(26%) sepia(88%) saturate(1958%) hue-rotate(160deg) brightness(94%) contrast(99%));\n}\n.uni-filter-accent {\n  filter: invert(48%) sepia(88%) saturate(3768%) hue-rotate(315deg) brightness(99%) contrast(106%);\n  filter: var(--uni-color-accent-fix, invert(48%) sepia(88%) saturate(3768%) hue-rotate(315deg) brightness(99%) contrast(106%));\n}\n.uni-filter-warn {\n  filter: invert(42%) sepia(40%) saturate(3627%) hue-rotate(336deg) brightness(93%) contrast(107%);\n  filter: var(--uni-color-warn-fix, invert(42%) sepia(40%) saturate(3627%) hue-rotate(336deg) brightness(93%) contrast(107%));\n}";var h="\n.uni-font-size-xs {\n  font-size: 12px;\n  font-size: var(--uni-size-xs, 12px);\n}\n.uni-font-size-sm {\n  font-size: 16px;\n  font-size: var(--uni-size-sm, 16px);\n}\n.uni-font-size-md {\n  font-size: 20px;\n  font-size: var(--uni-size-md, 20px);\n}\n.uni-font-size-lg {\n  font-size: 24x;\n  font-size: var(--uni-size-lg, 24px);\n}\n.uni-font-size-xl {\n  font-size: 35px;\n  font-size: var(--uni-size-xl, 35px);\n}\n.uni-font-size-xxl {\n  font-size: 50px;\n  font-size: var(--uni-size-xxl, 50px);\n}";var x="\n@-webkit-keyframes uni-rotate {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n@keyframes uni-rotate {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}";var p="\n.uni-size-xs {\n  height: 12px;\n  height: var(--uni-size-xs, 12px);\n  width: 12px;\n  width: var(--uni-size-xs, 12px);\n}\n.uni-size-sm {\n  height: 16px;\n  height: var(--uni-size-sm, 16px);\n  width: 16px;\n  width: var(--uni-size-sm, 16px);\n}\n.uni-size-md {\n  height: 20px;\n  height: var(--uni-size-md, 20px);\n  width: 20px;\n  width: var(--uni-size-md, 20px);\n}\n.uni-size-lg {\n  height: 24px;\n  height: var(--uni-size-lg, 24px);\n  width: 24px;\n  width: var(--uni-size-lg, 24px);\n}\n.uni-size-xl {\n  height: 35px;\n  height: var(--uni-size-xl, 35px);\n  width: 35px;\n  width: var(--uni-size-xl, 35px);\n}\n.uni-size-xxl {\n  height: 50px;\n  height: var(--uni-size-xxl, 50px);\n  width: 50px;\n  width: var(--uni-size-xxl, 50px);\n}"}}}));