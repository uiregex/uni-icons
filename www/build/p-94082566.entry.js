import{r as s,h as t,g as e}from"./p-46c6540d.js";import{u as i}from"./p-eb8040c3.js";const o=class{constructor(t){s(this,t),this.init=!1,this.type="solid",this.rotate=!1}componentWillLoad(){this.name=this.name||this.el.textContent,this.el.innerHTML=""}render(){const{init:s,name:e,color:o,size:r,rotate:n,degree:c,speed:a,steps:h}=this,p={init:s,name:e,color:o,size:r,rotate:n,degree:c,speed:a,steps:h},d="uni-icons-fa-"+i(this.type);return t(d,Object.assign({},p))}get el(){return e(this)}};export{o as uni_icons_fa}