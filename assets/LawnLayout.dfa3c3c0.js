import{Q as w}from"./QAvatar.ae06a3a0.js";import{Q as h,a as f,b as d,c as b,d as i,e as g,f as k,g as Q}from"./QLayout.e8397a4b.js";import{Q as c}from"./Ripple.93a3a1df.js";import{Q as p}from"./QBtn.c8a94cb1.js";import{$ as u,B as C,_ as y,j as L,k as $,l as A,m as t,d as o,n as l,p as B,q}from"./index.48421f60.js";import"./scroll.76012323.js";function x(a){const e=Object.assign({noopener:!0},a),n=[];for(const r in e)e[r]===!0&&n.push(r);return n.join(",")}function m(a,e,n){let r=window.open;if(u.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)r=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(a,{openExternal:!0})}const s=r(a,"_blank",x(n));if(s)return u.is.desktop&&s.focus(),s;e&&e()}var T=(a,e,n)=>{if(u.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(r=>{r?window.SafariViewController.show({url:a},C,e):m(a,e,n)});return}return m(a,e,n)};const V=L({name:"LawnLayout",setup(){return{leftDrawerOpen:!1,tabs(){return[{name:"Home",link:"/"},{name:"About",link:"/"},{name:"Our Services",link:"/"},{name:"Resources",link:"/"},{name:"Quote",link:"/"},{name:"Why us?",link:"/"},{name:"Contact",link:"/"}]}}},methods:{openURL:T,push(a){this.$router.push(a.link)},logout(){this.$store.dispatch("auth/logout")}}}),I=l("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"},null,-1),S=B(" Wash.Cars "),W=l("div",{class:"col-md-2 q-mt-xs self-center"}," \xA92022 Wash.Cars ",-1),H=l("div",{class:"col-md-8"},null,-1),N={class:"col-md-2 self-center float-right"};function O(a,e,n,r,s,R){const v=q("router-view");return $(),A(h,{view:"lHh Lpr fff",class:"background"},{default:t(()=>[o(g,null,{default:t(()=>[o(f,{color:"primary"},{default:t(()=>[o(d,null,{default:t(()=>[o(w,null,{default:t(()=>[I]),_:1}),S]),_:1}),o(b,{align:"right"},{default:t(()=>[o(i,{to:"/#about",label:"About"}),o(i,{to:"/#faq",label:"FAQ"}),o(i,{to:"/#contact",label:"Contact"})]),_:1})]),_:1})]),_:1}),o(k,null,{default:t(()=>[o(v)]),_:1}),o(Q,{reveal:""},{default:t(()=>[o(f,{color:"secondary"},{default:t(()=>[o(d,{class:"row justify-center"},{default:t(()=>[W,H,l("div",N,[o(p,{flat:"",onClick:e[0]||(e[0]=_=>a.launch("https://www.facebook.com/"))},{default:t(()=>[o(c,{size:"2rem",name:"fab fa-facebook-square"})]),_:1}),o(p,{flat:"",onClick:e[1]||(e[1]=_=>a.launch("https://www.twitter.com/"))},{default:t(()=>[o(c,{size:"2rem",name:"fab fa-twitter-square"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}var E=y(V,[["render",O]]);export{E as default};
