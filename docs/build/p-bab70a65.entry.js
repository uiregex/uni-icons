import{r as s,h as t,g as e}from"./p-01c3aca0.js";import{d as i}from"./p-b2b8e073.js";import{f as r}from"./p-c8856b52.js";import"./p-99cfbc8e.js";import{u as o}from"./p-66fb414e.js";import{u as n}from"./p-f8cfb79a.js";const p=class{constructor(t){s(this,t),this.type="filled",this.spin=!1}render(){const s=this.name||o(this.el),e=i(s)?null:`uni-mat-${n(this.type)}-${s}`;return t(e,null)}componentDidRender(){const{el:s,color:t,size:e,angle:i,spin:o,speed:n,steps:p}=this,c={el:s,color:t,size:e,angle:i,spin:o,speed:n,steps:p,selector:"svg"};this.el.style.display="inherit",r(c)}get el(){return e(this)}};export{p as uni_icon_mat}