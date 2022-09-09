import{Q as v}from"./QBtn.c8a94cb1.js";import{Q as q,a as _,c as m,b as V}from"./QPage.4c5fb9c0.js";import{l as j,o as b,m as y}from"./Ripple.93a3a1df.js";import{S,C,_ as I,k as r,l as w,m as d,n as e,d as i,X as p,Y as T,F as L,t as n,a0 as u,p as k,Z as U}from"./index.48421f60.js";import{g as A}from"./scroll.76012323.js";const{passive:f}=C;function x(a,{value:t,oldValue:l}){if(typeof t!="function"){a.scrollTarget.removeEventListener("scroll",a.scroll,f);return}a.handler=t,typeof l!="function"&&(a.scrollTarget.addEventListener("scroll",a.scroll,f),a.scroll())}var g=j({name:"scroll-fire",mounted(a,t){const l={scrollTarget:A(a),scroll:S(()=>{let o,c;l.scrollTarget===window?(c=a.getBoundingClientRect().bottom,o=window.innerHeight):(c=b(a).top+y(a),o=b(l.scrollTarget).top+y(l.scrollTarget)),c>0&&c<o&&(l.scrollTarget.removeEventListener("scroll",l.scroll,f),l.handler(a))},25)};x(l,t),a.__qscrollfire=l},updated(a,t){t.value!==t.oldValue&&x(a.__qscrollfire,t)},beforeUnmount(a){const t=a.__qscrollfire;t.scrollTarget.removeEventListener("scroll",t.scroll,f),t.scroll.cancel(),delete a.__qscrollfire}});const M={name:"Home",setup(){return{name:"",email:"",phone:"",subject:"",message:"",modal:!1,selectedService:{},companyName:"Wash.Cars",services:[{title:"Employee Rewards",description:"Cat ipsum dolor sit amet, fight an alligator and win and cuddle no cuddle cuddle love scratch scratch. Chase mice nap all day. Love me! x so stand in front of the computer screen, yet thug cat . My water bowl is clean and freshly replenished, so i'll drink from the toilet",link:"reward.png"},{title:"Incident Tracking",description:"prepare to pounce eat too much then proceed to regurgitate all over living room carpet while humans eat dinner. Lie in the sink all day lick the plastic bag so hiss and stare at nothing then run suddenly away and attack like a vicious monster.",link:"incident.png"},{title:"Company Announcements",description:"Fooled again thinking the dog likes me sleep on dog bed, force dog to sleep on floor a nice warm laptop for me to sit on hey! you there, with the hands, i show my fluffy belly but it's a trap! if you pet it i will tear up your hand kitty loves pigs, human is washing you why halp oh the horror flee scratch hiss bite. ",link:"ann.png"},{title:"Employee Apparel Ordering",description:"Wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again i like big cats and i can not lie or flop over my cat stared at me he was sipping his tea, too, stick butt in face leave fur on owners clothes.",link:"app.png"},{title:"Chemical Tracking",description:"Cat ipsum dolor sit amet, meowing non stop for food thug cat , for a nice warm laptop for me to sit on mark territory. Catasstrophe sniff catnip and act crazy. Disappear for four days and return home with an expensive injury",link:"chem.png"},{title:"Resource Hub",description:"Meow meow, i tell my human i is not fat, i is fluffy. Get scared by doggo also cucumerro cat cat moo moo lick ears lick paws yet sit on human they not getting up ever knock over christmas tree. Prance along on top of the garden fence, annoy the neighbor's dog and make it bark sit in box.",link:"docs.png"}],projects:[]}},methods:{fadeInImage(a){a.classList.add("loaded")}}},N={class:"row justify-center second-background",style:{"min-height":"30vh"}},E={class:"col-xs-12 col-md-12 desktop-only"},B={class:"row justify-center",style:{height:"100%"}},Q={class:"col-8"},D={class:""},F=e("h1",{class:"text-weight-bolder"},"Wash.Cars",-1),H=e("div",{class:"text-h4 text-weight-bold"}," Let us help you wash more cars. ",-1),P=e("hr",{class:"q-hr q-my-lg"},null,-1),O=e("div",{class:"text-subtitle1 q-mb-md text-weight-bold"},"This is the section where we would put a short blip about your company. Something not too long, and not too short. This section should have enough information to grab attention, but not overwhelm potential customers.",-1),W=e("div",{class:"spacer col-xs-12 mobile-only white-text see-through-dark"},[e("div",{class:"row justify-center full"},[e("h2",{class:"col-xs-12 text-weight-bold mobile-only text-center"},"Wash.Cars")])],-1),R={class:"row justify-center"},z=e("div",{class:"col-xs-12 text-center"},[e("h2",{class:"header text-weight-bolder"},"Our Services")],-1),G=["onClick"],X={class:"col-xs-12 text-center"},Y={class:"text-h5 text-center"},Z={class:"col-xs-12 q-mt-xl"},J=k("More Info"),K={class:"row justify-center bg-secondary q-mt-xl"},$={class:"col-12"},ee={class:"row justify-center not-loaded"},te=e("div",{class:"col-7"},[e("h2",{class:"header text-weight-bolder text-white"},"About Us")],-1),oe=e("div",{class:"col-7 q-mb-xl"},[e("div",{class:"text-body1 text-white"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus orci ac. Amet nulla facilisi morbi tempus iaculis. Arcu vitae elementum curabitur vitae. Dolor purus non enim praesent elementum facilisis leo vel. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Vitae turpis massa sed elementum tempus egestas sed sed risus. Sit amet venenatis urna cursus. Neque gravida in fermentum et sollicitudin. Sed blandit libero volutpat sed cras. Integer vitae justo eget magna fermentum iaculis eu non. Nunc eget lorem dolor sed viverra. Aenean et tortor at risus. Magna etiam tempor orci eu lobortis. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. ")],-1),se=[te,oe],ae={class:"row justify-center q-mt-xl"},le={class:"col-12"},ie={class:"row justify-center not-loaded"},ne=e("div",{class:"col-7"},[e("h2",{class:"header text-weight-bolder"},"FAQ")],-1),re=e("div",{class:"col-7 q-mb-xl"},[e("p",{class:"text-body1"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus orci ac. Amet nulla facilisi morbi tempus iaculis. "),e("p",{class:"text-body1"}," Arcu vitae elementum curabitur vitae. Dolor purus non enim praesent elementum facilisis leo vel. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Vitae turpis massa sed elementum tempus egestas sed sed risus. "),e("p",{class:"text-body1"}," Sit amet venenatis urna cursus. Neque gravida in fermentum et sollicitudin. Sed blandit libero volutpat sed cras. Integer vitae justo eget magna fermentum iaculis eu non. Nunc eget lorem dolor sed viverra. "),e("p",{class:"text-body1"}," Aenean et tortor at risus. Magna etiam tempor orci eu lobortis. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. ")],-1),de=[ne,re],ce={class:"row justify-center top-spacer bg-secondary"},me={class:"col-xs-8 q-mb-xl"},ue=e("h2",{class:"header text-weight-bolder text-white"},"Contact Us",-1),he=e("hr",{class:"q-my-lg white-hr",align:"left"},null,-1),pe={class:"self-center not-loaded"},ge={action:"//formspree.io/trever@ebenezerwebsites.com",method:"POST"},fe=k("Send"),ve={class:"hidden"};function _e(a,t,l,o,c,h){return r(),w(q,null,{default:d(()=>[e("div",N,[e("div",E,[i(_,{class:"see-through",style:{"min-height":"30vh"}},{default:d(()=>[e("div",B,[e("div",Q,[e("div",D,[F,H,P,O,i(v,{color:"secondary","no-caps":"",class:"q-py-sm q-px-xl text-weight-light",label:"Learn more"})])])])]),_:1})]),W]),e("div",R,[z,(r(!0),p(L,null,T(o.services,s=>n((r(),w(V,{class:"col-xs-10 col-md-3 card grow not-loaded"},{default:d(()=>[i(_,{src:s.link,style:{height:"100%","max-height":"35vh"}},{default:d(()=>[e("div",{onClick:be=>a.setSelectedService(s),class:"row justify-center text-center grow card-overlay"},[e("div",X,[e("span",Y,U(s.title),1)]),e("div",Z,[i(v,{outline:"",class:"hidden-text text-white"},{default:d(()=>[J]),_:1})])],8,G)]),_:2},1032,["src"])]),_:2},1024)),[[g,h.fadeInImage]])),256))]),e("div",K,[e("div",$,[n((r(),p("div",ee,se)),[[g,h.fadeInImage]])])]),e("div",ae,[e("div",le,[n((r(),p("div",ie,de)),[[g,h.fadeInImage]])])]),e("div",ce,[e("div",me,[ue,he,n((r(),p("div",pe,[i(m,{modelValue:o.name,"onUpdate:modelValue":t[0]||(t[0]=s=>o.name=s),label:"Name",name:"Name",type:"text",color:"white","label-color":"white"},null,8,["modelValue"]),i(m,{modelValue:o.email,"onUpdate:modelValue":t[1]||(t[1]=s=>o.email=s),label:"Email",name:"Email",type:"email",color:"white","label-color":"white"},null,8,["modelValue"]),i(m,{modelValue:o.phone,"onUpdate:modelValue":t[2]||(t[2]=s=>o.phone=s),label:"Phone",name:"Phone",type:"tel",color:"white","label-color":"white"},null,8,["modelValue"]),i(m,{modelValue:o.subject,"onUpdate:modelValue":t[3]||(t[3]=s=>o.subject=s),label:"Subject",name:"Subject",type:"text",color:"white","label-color":"white"},null,8,["modelValue"]),i(m,{modelValue:o.message,"onUpdate:modelValue":t[4]||(t[4]=s=>o.message=s),type:"textarea",name:"Message",label:"Message","max-height":100,rows:"5",color:"white","label-color":"white"},null,8,["modelValue"]),e("form",ge,[i(v,{type:"submit",outline:"",color:"white",class:"q-mt-sm"},{default:d(()=>[fe]),_:1}),e("div",ve,[n(e("input",{type:"text",name:"name","onUpdate:modelValue":t[5]||(t[5]=s=>o.name=s)},null,512),[[u,o.name]]),n(e("input",{type:"email",name:"_replyto","onUpdate:modelValue":t[6]||(t[6]=s=>o.email=s)},null,512),[[u,o.email]]),n(e("input",{type:"tel",name:"phone","onUpdate:modelValue":t[7]||(t[7]=s=>o.phone=s)},null,512),[[u,o.phone]]),n(e("input",{type:"text",name:"subject","onUpdate:modelValue":t[8]||(t[8]=s=>o.subject=s)},null,512),[[u,o.subject]]),n(e("input",{type:"textarea",name:"message","onUpdate:modelValue":t[9]||(t[9]=s=>o.message=s)},null,512),[[u,o.message]])])])])),[[g,h.fadeInImage]])])])]),_:1})}var Ve=I(M,[["render",_e]]);export{Ve as default};
