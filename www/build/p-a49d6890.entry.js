import{r as t,h as e,c as s,g as o}from"./p-46c6540d.js";import"./p-d8f3608d.js";import{e as n}from"./p-24ae7c7b.js";import"./p-b80ea12f.js";const r=class{constructor(e){t(this,e),this.init=!1,this.rotate=!1}componentWillLoad(){this.name=this.name||this.el.textContent,this.el.innerHTML=""}render(){return e(s,{class:"far fa-"+this.name},this.init?e("uni-fa-styles-load",null):"")}componentDidLoad(){const{el:t,color:e,rotate:s,degree:o,speed:r,steps:i}=this;n({el:t,color:e,fontSize:this.size,rotate:s,degree:o,speed:r,steps:i,selector:"Host"})}get el(){return o(this)}};r.style='/*!\n * Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */@font-face{font-family:\'Font Awesome 5 Free\';font-style:normal;font-weight:400;font-display:block;src:url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.0.8/dist/assets/font/fa/fa-regular-400.eot);src:url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.0.8/dist/assets/font/fa/fa-regular-400.eot?#iefix) format("embedded-opentype"),\n  url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.0.8/dist/assets/font/fa/fa-regular-400.woff2) format("woff2"),\n  url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.0.8/dist/assets/font/fa/fa-regular-400.woff) format("woff"),\n  url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.0.8/dist/assets/font/fa/fa-regular-400.ttf) format("truetype"),\n  url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.0.8/dist/assets/font/fa/fa-regular-400.svg#fontawesome) format("svg")}.far{font-family:\'Font Awesome 5 Free\';font-weight:400}';export{r as uni_icons_fa_r}