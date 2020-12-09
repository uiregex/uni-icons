var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;for(var r=Array(e),i=0,n=0;n<t;n++)for(var s=arguments[n],a=0,o=s.length;a<o;a++,i++)r[i]=s[a];return r};System.register(["./p-a5e8ff82.system.js","./p-9a895e97.system.js"],(function(e){"use strict";var n,t,r;return{setters:[function(e){n=e.u;t=e.a},function(e){r=e.u}],execute:function(){e("u",f);function i(e){var n=document.head.querySelectorAll("style");var t=Array.from(n).some((function(n){return n.textContent===e}));if(!t){var r=document.createElement("style");r.appendChild(document.createTextNode(e));document.head.appendChild(r)}}function s(e){var n={};var t="rotate("+e+"deg)";n.transform=t;n["-webkit-transform"]=t;return{styles:n}}function a(e){var n=e.speed,t=e.steps;var r={};var i="uni-rotate "+(n||1)+"s infinite "+(t?"steps("+t+")":"linear");r.animation=i;r["-webkit-animation"]=i;return{styles:r}}function o(e){var n=e.color,t=e.filter,r=e.size,i=e.fontSize;var s=["primary","success","accent","warn"];var a=["lg","md","sm","xs"];var o=[];var l={};if(s.includes(n)){o.push("uni-color-"+n)}else if(n){l.color=n;l.fill=n}if(s.includes(t)){o.push("uni-filter-"+t)}else if(t){l.filter=t}if(a.includes(r)){o.push("uni-size-"+r)}else if(r){l.height=r;l.width=r}if(a.includes(i)){o.push("uni-font-size-"+i)}else if(i){l.fontSize=i+"px"}return{classes:o,styles:l}}function l(e,n){if(!!n){e.forEach((function(e){e.textContent=n}))}}function f(e){var f=e.el,d=e.color,g=e.filter,m=e.size,x=e.fontSize,z=e.selector,y=e.all;var b=d||g||m||x?o({color:d,filter:g,size:m,fontSize:x}):{classes:[],styles:{}},w=b.classes,k=b.styles;w=__spreadArrays(w,e.classes?e.classes.split(" "):[]);if(!!d){i(u)}if(g){i(c)}if(m){i(p)}if(x){i(h)}if(e.degree){k=Object.assign(Object.assign({},k),s(e.degree).styles)}if(e.rotate){i(v);k=Object.assign(Object.assign({},k),a(e).styles)}n({el:f,selector:z,all:y},w,t);n({el:f,selector:z,all:y},k,r);n({el:f,selector:z,all:y},e.content,l)}var u="\n.uni-color-primary {\n  color: #3f51b5;\n  color: var(--uni-color-primary, #3f51b5);\n  fill: #3f51b5;\n  fill: var(--uni-color-primary, #3f51b5);\n}\n.uni-color-success {\n  color: #018786;\n  color: var(--uni-color-success, #018786);\n  fill: #018786;\n  fill: var(--uni-color-success, #018786);\n}\n.uni-color-accent {\n  color: #ff4081;\n  color: var(--uni-color-accent, #ff4081);\n  fill: #ff4081;\n  fill: var(--uni-color-accent, #ff4081);\n}\n.uni-color-warn {\n  color: #f44336;\n  color: var(--uni-color-warn, #f44336);\n  fill: #f44336;\n  fill: var(--uni-color-warn, #f44336);\n}";var c="\n.uni-filter-primary {\n  filter: invert(31%) sepia(10%) saturate(6644%) hue-rotate(204deg) brightness(95%) contrast(89%);\n  filter: var(--uni-color-primary-fix, invert(31%) sepia(10%) saturate(6644%) hue-rotate(204deg) brightness(95%) contrast(89%));\n}\n.uni-filter-success {\n  filter: invert(26%) sepia(88%) saturate(1958%) hue-rotate(160deg) brightness(94%) contrast(99%);\n  filter: var(--uni-color-success-fix, invert(26%) sepia(88%) saturate(1958%) hue-rotate(160deg) brightness(94%) contrast(99%));\n}\n.uni-filter-accent {\n  filter: invert(48%) sepia(88%) saturate(3768%) hue-rotate(315deg) brightness(99%) contrast(106%);\n  filter: var(--uni-color-accent-fix, invert(48%) sepia(88%) saturate(3768%) hue-rotate(315deg) brightness(99%) contrast(106%));\n}\n.uni-filter-warn {\n  filter: invert(42%) sepia(40%) saturate(3627%) hue-rotate(336deg) brightness(93%) contrast(107%);\n  filter: var(--uni-color-warn-fix, invert(42%) sepia(40%) saturate(3627%) hue-rotate(336deg) brightness(93%) contrast(107%));\n}";var h="\n.uni-font-size-lg {\n  font-size: 48px;\n  font-size: var(--uni-size-lg, 48px);\n}\n.uni-font-size-md {\n  font-size: 36px;\n  font-size: var(--uni-size-md, 36px);\n}\n.uni-font-size-sm {\n  font-size: 24px;\n  font-size: var(--uni-size-sm, 24px);\n}\n.uni-font-size-xs {\n  font-size: 12px;\n  font-size: var(--uni-size-xs, 12px);\n}";var v="\n@-webkit-keyframes uni-rotate {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n@keyframes uni-rotate {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}";var p="\n.uni-size-lg {\n  height: 48px;\n  height: var(--uni-size-lg, 48px);\n  width: 48px;\n  width: var(--uni-size-lg, 48px);\n}\n.uni-size-md {\n  height: 36px;\n  height: var(--uni-size-md, 36px);\n  width: 36px;\n  width: var(--uni-size-md, 48px);\n}\n.uni-size-sm {\n  height: 24px;\n  height: var(--uni-size-sm, 24px);\n  width: 24px;\n  width: var(--uni-size-sm, 24px);\n}\n.uni-size-xs {\n  height: 12px;\n  height: var(--uni-size-xs, 12px);\n  width: 12px;\n  width: var(--uni-size-xs, 12px);\n}"}}}));