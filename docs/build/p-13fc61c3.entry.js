import{r as t,g as s}from"./p-e4f31653.js";import{u as i,a as n}from"./p-bcfe9d2a.js";import"./p-2e6e929d.js";const o='<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 640 480">\n  <g fill-rule="evenodd" stroke-width="1pt">\n    <path fill="#fff" d="M0 0h640v480H0z"/>\n    <path fill="#009246" d="M0 0h213.3v480H0z"/>\n    <path fill="#ce2b37" d="M426.7 0H640v480H426.7z"/>\n  </g>\n</svg>\n',e='<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512">\n  <g fill-rule="evenodd" stroke-width="1pt">\n    <path fill="#fff" d="M0 0h512v512H0z"/>\n    <path fill="#009246" d="M0 0h170.7v512H0z"/>\n    <path fill="#ce2b37" d="M341.3 0H512v512H341.3z"/>\n  </g>\n</svg>\n',l=class{constructor(s){t(this,s),this.square=!1,this.round=!1}onSquare(t){this.el.innerHTML=t?e:o}onRound(t){i(this.el,t)}componentWillLoad(){this.el.innerHTML=this.square?e:o,n(this.el),i(this.el,this.round)}get el(){return s(this)}static get watchers(){return{square:["onSquare"],round:["onRound"]}}};export{l as uni_flag_it}