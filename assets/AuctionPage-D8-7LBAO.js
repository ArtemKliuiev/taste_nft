import{c as $,_ as w,n as u,u as S}from"./UIUser-CWf7k-oI.js";import{_ as h,r as B,b as m,o as i,c as o,a as t,d as c,t as s,e as r,w as p,U as b,f as _,n as I,p as v,g,u as A,h as a}from"./index-Bg3wdbA8.js";const f="/taste_nft/assets/logo-D4XeXRQU.svg",d=e=>(v("data-v-9abb849b"),e=e(),g(),e),C={class:"auction-banner"},k=["srcset"],j=["src","width","height","alt"],x={key:0,class:"auction-banner__label"},N={class:"auction-banner__label-price"},O=d(()=>t("h6",null,"Price:",-1)),P={class:"price"},V=d(()=>t("img",{src:f,alt:"logo"},null,-1)),D={class:"auction-banner__label-btn"},U={class:"auction-banner__label-price"},q=d(()=>t("h6",null,"Current Bid::",-1)),X={class:"price"},z=d(()=>t("img",{src:f,alt:"logo"},null,-1)),E={class:"auction-banner__label-price"},M=d(()=>t("h6",null,"Auction ending in:",-1)),Q={class:"price"},R={class:"auction-banner__label-btn"},T={__name:"AuctionBanner",props:{image:Object,type:String,price:Object},setup(e){const l=e,n=B(l.price.time);return m(()=>{$(l.price.time,n)}),(y,at)=>(i(),o("div",C,[t("picture",null,[t("source",{type:"image/webp",srcset:e.image.webp},null,8,k),t("img",{class:"auction-banner__background",src:e.image.src,width:e.image.width,height:e.image.height,alt:e.image.alt},null,8,j)]),e.type==="default"?(i(),o("div",x,[t("div",N,[O,t("div",P,[V,t("p",null,[c(s(e.price.quantity)+" ",1),t("span",null,"( "+s(e.price.value)+" )",1)])])]),t("div",D,[r(b,null,{default:p(()=>[c("Buy art")]),_:1})])])):_("",!0),e.type==="auction"?(i(),o("div",{key:1,class:I(["auction-banner__label",{"auction-banner__label_auction":e.type==="auction"}])},[t("div",U,[q,t("div",X,[z,t("p",null,[c(s(e.price.quantity)+" ",1),t("span",null,"( "+s(e.price.value)+" )",1)])])]),t("div",E,[M,t("div",Q,[t("p",null,s(n.value),1)])]),t("div",R,[r(b,null,{default:p(()=>[c("Place a bid")]),_:1})])],2)):_("",!0)]))}},F=h(T,[["__scopeId","data-v-9abb849b"]]),G=e=>(v("data-v-d1692859"),e=e(),g(),e),H={class:"auction-content"},J={class:"auction-content__wrapper"},K={class:"auction-content__info"},L={class:"auction-content__info-text"},W={key:0},Y=G(()=>t("div",{class:"auction-content__shop"},null,-1)),Z={__name:"AuctionContent",props:{user:{type:Object},nft:{type:Object}},setup(e){return(l,n)=>(i(),o("div",H,[t("div",J,[t("div",K,[r(w,{user:e.user},null,8,["user"]),t("div",L,[t("h3",null,s(e.nft.description.title),1),e.nft.type==="auction"?(i(),o("p",W,[c(" Copy: "),t("span",null,s(e.nft.description.count),1)])):_("",!0),t("p",null,[c(" Description: "),t("span",null,s(e.nft.description.text),1)])])]),Y])]))}},tt=h(Z,[["__scopeId","data-v-d1692859"]]),et={class:"auction"},nt={class:"container"},st={__name:"AuctionPage",setup(e){const l=A();return m(()=>{l.search=""}),(n,y)=>(i(),o("div",et,[t("div",nt,[r(F,{image:a(u)[n.$route.params.id].photo,type:a(u)[n.$route.params.id].type,price:a(u)[n.$route.params.id].price},null,8,["image","type","price"]),r(tt,{user:a(S)[a(u)[n.$route.params.id].user],nft:a(u)[n.$route.params.id]},null,8,["user","nft"])])]))}},ot=h(st,[["__scopeId","data-v-ee2c6abd"]]);export{ot as default};