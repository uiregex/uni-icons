System.register(["./p-48fb3a55.system.js","./p-e8be8763.system.js","./p-a6600594.system.js","./p-02361d26.system.js","./p-c7e6f9fd.system.js","./p-b74d52ec.system.js"],(function(e){"use strict";var t,s,i,n,r,o,u;return{setters:[function(e){t=e.r;s=e.h;i=e.g},function(e){n=e.i},function(e){r=e.u},function(e){o=e.u},function(e){u=e.U},function(){}],execute:function(){var c=e("uni_icon_bi",function(){function e(e){t(this,e);this.img=false;this.url="https://cdn.jsdelivr.net/npm/@uiwebkit/icn";this.version="0.1.0";this.alter="uni-icon-bi";this.spin=false}e.prototype.render=function(){var e=this.name||r(this.el);var t=!n(e)?"uni-bi-"+e:null;return this.img?s("img",{src:this.url+"@"+this.version+"/dist/assets/svg/bi/"+e+".svg",alt:this.alter}):u(s(t,null,s("slot",null)))};e.prototype.componentDidRender=function(){var e=this,t=e.el,s=e.color,i=e.size,n=e.angle,r=e.spin,u=e.speed,c=e.steps;var l={el:t,color:s,size:i,angle:n,spin:r,speed:u,steps:c,selector:this.img?"img":"svg"};o(l)};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return e}())}}}));