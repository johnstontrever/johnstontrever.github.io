import{l as a,o as c,m as n}from"./Ripple.4ce448b0.js";import{S as f,C as m}from"./index.21ccbf86.js";import{g}from"./scroll.da944e1b.js";const{passive:t}=m;function i(e,{value:r,oldValue:o}){if(typeof r!="function"){e.scrollTarget.removeEventListener("scroll",e.scroll,t);return}e.handler=r,typeof o!="function"&&(e.scrollTarget.addEventListener("scroll",e.scroll,t),e.scroll())}var v=a({name:"scroll-fire",mounted(e,r){const o={scrollTarget:g(e),scroll:f(()=>{let s,l;o.scrollTarget===window?(l=e.getBoundingClientRect().bottom,s=window.innerHeight):(l=c(e).top+n(e),s=c(o.scrollTarget).top+n(o.scrollTarget)),l>0&&l<s&&(o.scrollTarget.removeEventListener("scroll",o.scroll,t),o.handler(e))},25)};i(o,r),e.__qscrollfire=o},updated(e,r){r.value!==r.oldValue&&i(e.__qscrollfire,r)},beforeUnmount(e){const r=e.__qscrollfire;r.scrollTarget.removeEventListener("scroll",r.scroll,t),r.scroll.cancel(),delete e.__qscrollfire}});export{v as S};
