import{r as s,h as i,g as t}from"./p-e4f31653.js";import{i as e}from"./p-aea24d64.js";import{u as n}from"./p-f2eac647.js";import{u as o}from"./p-bef68146.js";import{U as r}from"./p-cfd80f20.js";const p=class{constructor(i){s(this,i),this.img=!1,this.url="https://cdn.jsdelivr.net/npm/@uiwebkit/icn",this.version="0.1.0",this.alter="uni-icon-bi",this.spin=!1}render(){const s=this.name||n(this.el),t=e(s)?null:`uni-bi-${s}`;return this.img?i("img",{src:`${this.url}@${this.version}/dist/assets/svg/bi/${s}.svg`,alt:this.alter}):r(i(t,null,i("slot",null)))}componentDidRender(){const{el:s,color:i,size:t,angle:e,spin:n,speed:r,steps:p}=this;o({el:s,color:i,size:t,angle:e,spin:n,speed:r,steps:p,selector:this.img?"img":"svg"})}get el(){return t(this)}};export{p as uni_icon_bi}