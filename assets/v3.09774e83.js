import{Q as x}from"./QBtn.c8a94cb1.js";import{u as W,d as E,Q as K,a as U,c as f,b as H}from"./QPage.4c5fb9c0.js";import{a as c,Q as k}from"./QSeparator.bcf912ec.js";import{Q as G}from"./QAvatar.ae06a3a0.js";import{c as y,b as R,e as M,f as O,g as X}from"./Ripple.93a3a1df.js";import{c as d,h as p,r as Q,v as Y,y as Z,g as S,_ as J,j as ee,k as m,l as g,m as i,n as e,d as s,X as L,Y as V,F as j,p as b,Z as q}from"./index.48421f60.js";var te=y({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:l}){const n=d(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>p("div",{class:n.value},R(l.default))}}),se=y({name:"QItem",props:{...W,...M,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:l,emit:n}){const{proxy:{$q:r}}=S(),h=E(t,r),{hasRouterLink:w,hasLink:o,linkProps:T,linkClass:I,linkTag:z,navigateToRouterLink:$}=O(),v=Q(null),_=Q(null),C=d(()=>t.clickable===!0||o.value===!0||t.tag==="label"),u=d(()=>t.disable!==!0&&C.value===!0),A=d(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(h.value===!0?" q-item--dark":"")+(o.value===!0&&t.active===null?I.value:t.active===!0?`${t.activeClass!==void 0?` ${t.activeClass}`:""} q-item--active`:"")+(t.disable===!0?" disabled":"")+(u.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),D=d(()=>{if(t.insetLevel===void 0)return null;const a=r.lang.rtl===!0?"Right":"Left";return{["padding"+a]:16+t.insetLevel*56+"px"}});function F(a){u.value===!0&&(_.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===v.value?_.value.focus():document.activeElement===_.value&&v.value.focus()),w.value===!0&&$(a),n("click",a))}function N(a){if(u.value===!0&&Y(a,13)===!0){Z(a),a.qKeyEvent=!0;const B=new MouseEvent("click",a);B.qKeyEvent=!0,v.value.dispatchEvent(B)}n("keyup",a)}function P(){const a=X(l.default,[]);return u.value===!0&&a.unshift(p("div",{class:"q-focus-helper",tabindex:-1,ref:_})),a}return()=>{const a={ref:v,class:A.value,style:D.value,onClick:F,onKeyup:N};return u.value===!0?(a.tabindex=t.tabindex||"0",Object.assign(a,T.value)):C.value===!0&&(a["aria-disabled"]="true"),p(z.value,a,P())}}}),ae=y({name:"QList",props:{...W,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(t,{slots:l}){const n=S(),r=E(t,n.proxy.$q),h=d(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>p("div",{class:h.value},R(l.default))}});const oe=ee({name:"Home",setup(){return{header:"car2.jpeg",name:"",email:"",phone:"",text:"",expanded:!1,items:["Incident Tracking","Employee Rewards","Chemical Tracking","Company Announcements","Employee Apparel Ordering","Resource Hub","DRB Integration","Data Reporting","Checklists","...And More!"],services:[{title:"Incident Tracking",description:"Never forget about an incident again. Be prepared for handling and tracking incidents, from first report until the incident is resolved. Wash.Cars streamlines all of these processes and more.",link:"14.png"},{title:"Employee Rewards",description:"Looking for a way to let your employees know they went above and beyond? Wash.Cars employee rewards module gives employees another reason to give their all each day on the job.",link:"17.png"},{title:"Chemical Tracking",description:"Chemical tracking doesn't have to be tedious or difficult. With the Wash.Cars Chemical Tracking module, you'll be able to keep track of your chemical usage with ease and glean invaluable data.",link:"chem.png"}]}}}),le={class:""},ie={class:"row"},ne={class:"col-12"},ce={class:"absolute-full text-subtitle2 flex flex-center"},de={class:"row text-center"},re=e("div",{class:"col-12 text-center"},[e("span",{class:"text-white text-bold text-h2"},"Wash.Cars")],-1),ue=e("div",{class:"col-12 text-center"},[e("span",{class:"text-h4 text-white text-bold"},"Take your car wash to the next level.")],-1),me={class:"col-12 text-center q-mt-xl"},he=b("Schedule a demo!"),ve={class:"dark-bg q-pt-xl q-pb-lg"},_e={class:"row justify-center"},fe={id:"callout",class:"col-9"},pe={class:"row justify-center"},be={class:"col-10 q-mt-xl"},xe=e("div",{class:"col-10 text-white"},[e("h2",{class:"text-bold"},"What is Wash.Cars?")],-1),ke=e("div",{class:"col-10 text-white"},[e("p",{class:"text-h5"}," Wash.Cars is the go-to when it comes to innovative software that helps your company to wash more cars. Wash.Cars aims to take all of the manual, ineffective, and inefficient tasks of a car wash and turn them into simple procedures that all exist in the same place. ")],-1),ge={class:"col-10 q-mt-xl q-mb-xl"},qe={class:"col-12 bg-white"},ye={class:"row q-gutter-lg justify-center q-mt-xl q-mb-xl"},we=["src"],Ce={class:"text-h4 text-dark text-bolder"},Be={class:"row justify-center q-mt-xl q-mb-xl"},Qe={class:"col-12 text-center"},Le=b("Full Feature List"),Ve={id:"about",class:"col-9 q-mt-xl q-mb-xl"},je={class:"row justify-center"},We=e("div",{class:"col-10 text-white"},[e("h2",{class:"text-bold"},"About")],-1),Ee={class:"col-10 q-mb-md"},Re=e("div",{class:"col-10 text-white"},[e("p",{class:"text-h5"}," Wash.Cars was created out of necessity. The car wash industry is often stuck in the dark ages technologically and Wash.Cars is on a mission to bring updated software and processes to areas paper forms and spreadsheets should have long been replaced. ")],-1),Se={class:"row justify-around bg-white"},Te={id:"contact",class:"col-12 col-md-5 q-pb-xl"},Ie={class:"row justify-center dark"},ze={class:"col-12 q-mt-xl"},$e=e("div",{class:"col-12"},[e("h2",{class:"text-dark text-bold"},"Get in touch")],-1),Ae={class:"col-12 bg-accent q-pa-xl shadow-12"},De={class:"row"},Fe={class:"col-12"},Ne={class:"col-12"},Pe={class:"col-12"},Ke={class:"col-12"},Ue={class:"row q-mt-md"},He={class:"col-12"},Ge=b("Send"),Me={id:"features",class:"col-9 col-md-3 q-pb-xl"},Oe={class:"row justify-center"},Xe={class:"col-12 q-mt-xl"},Ye=e("div",{class:"col-12 text-dark"},[e("h2",{class:"text-bold"},"Feature List")],-1),Ze={class:"col-12 text-white bg-secondary q-pt-xl q-pb-xl q-pl-xl q-pr-xl big-rounded"},Je={class:"text-h5"},et=e("div",{class:"row"},[e("div",{class:"col-12"})],-1);function tt(t,l,n,r,h,w){return m(),g(K,{class:"flex bg-img"},{default:i(()=>[e("div",le,[e("div",ie,[e("div",ne,[s(U,{src:t.header,alt:"Header image",class:"bg-header responsive"},{default:i(()=>[e("div",ce,[e("div",de,[re,ue,e("div",me,[s(x,{color:"primary",size:"xl","no-caps":""},{default:i(()=>[he]),_:1})])])])]),_:1},8,["src"])])]),e("div",ve,[e("div",_e,[e("div",fe,[e("div",pe,[e("div",be,[s(c,{size:".2rem",spaced:"",dark:""})]),xe,ke,e("div",ge,[s(c,{size:".2rem",spaced:"",dark:""})])])]),e("div",qe,[e("div",ye,[(m(!0),L(j,null,V(t.services,o=>(m(),g(H,{flat:"",class:"col-xs-12 col-md-3 my-card"},{default:i(()=>[s(k,{class:"text-center"},{default:i(()=>[s(G,{size:"6rem"},{default:i(()=>[e("img",{src:o.link},null,8,we)]),_:2},1024)]),_:2},1024),s(k,{class:"text-center"},{default:i(()=>[e("div",Ce,q(o.title),1)]),_:2},1024),s(c,{inset:""}),s(k,{class:"q-pt-md text-body1 text-dark text-center"},{default:i(()=>[b(q(o.description),1)]),_:2},1024)]),_:2},1024))),256))]),e("div",Be,[e("div",Qe,[s(x,{"no-caps":"",color:"secondary",size:"xl"},{default:i(()=>[Le]),_:1})])])]),e("div",Ve,[e("div",je,[We,e("div",Ee,[s(c,{size:".2rem",spaced:"",dark:""})]),Re])])]),e("div",Se,[e("div",Te,[e("div",Ie,[e("div",ze,[s(c,{size:".2rem",spaced:"",dark:""})]),$e,e("div",Ae,[e("div",De,[e("div",Fe,[s(f,{modelValue:t.name,"onUpdate:modelValue":l[0]||(l[0]=o=>t.name=o),label:"Name",dark:""},null,8,["modelValue"])]),e("div",Ne,[s(f,{modelValue:t.email,"onUpdate:modelValue":l[1]||(l[1]=o=>t.email=o),label:"Email",dark:""},null,8,["modelValue"])]),e("div",Pe,[s(f,{modelValue:t.phone,"onUpdate:modelValue":l[2]||(l[2]=o=>t.phone=o),label:"Phone",dark:""},null,8,["modelValue"])]),e("div",Ke,[s(f,{modelValue:t.text,"onUpdate:modelValue":l[3]||(l[3]=o=>t.text=o),type:"textarea",label:"Get in touch to schedule a demo or find out more information!",dark:""},null,8,["modelValue"])])]),e("div",Ue,[e("div",He,[s(x,{color:"secondary"},{default:i(()=>[Ge]),_:1})])])])])]),e("div",Me,[e("div",Oe,[e("div",Xe,[s(c,{size:".2rem",spaced:"",dark:""})]),Ye,e("div",Ze,[s(ae,{dense:"",padding:"",class:"rounded-borders text-center"},{default:i(()=>[(m(!0),L(j,null,V(t.items,o=>(m(),g(se,null,{default:i(()=>[s(te,null,{default:i(()=>[e("span",Je,q(o),1),s(c,{size:".1rem",spaced:"",dark:""})]),_:2},1024)]),_:2},1024))),256))]),_:1})])])])])]),et])]),_:1})}var ct=J(oe,[["render",tt]]);export{ct as default};
