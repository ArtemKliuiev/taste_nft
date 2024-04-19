import{c as B,u as p,_ as k,n as l}from"./timer-BXKa7d3A.js";import{f as m,r as A,q as g,o as c,c as d,h as t,i as r,t as n,a as o,b as v,U as y,n as b,s as C,p as M,k as w,l as I,u as i,_ as S,j as $,F as U,d as x,e as j,v as N}from"./index-Df0-WU7K.js";import{U as F}from"./UIMore-DyxLHCoV.js";const q="/taste_nft/assets/logo-D4XeXRQU.svg",u=e=>(M("data-v-3e06fa36"),e=e(),w(),e),O={class:"auction-banner"},P=["srcset"],V=["src","width","height","alt"],D={key:0,class:"auction-banner__label"},L={class:"auction-banner__label-price"},R=u(()=>t("h6",null,"Price:",-1)),X={class:"price"},z=u(()=>t("img",{src:q,alt:"logo"},null,-1)),E={class:"auction-banner__label-btn"},Q={class:"auction-banner__label-price"},T=u(()=>t("h6",null,"Current Bid::",-1)),G={class:"price"},H=u(()=>t("img",{src:q,alt:"logo"},null,-1)),J={class:"auction-banner__label-price"},K=u(()=>t("h6",null,"Auction ending in:",-1)),W={class:"price"},Y={class:"auction-banner__label-btn"},Z={__name:"AuctionBanner",props:{image:Object,type:String,price:Object},setup(e){const a=e,s=A(a.price.time);return g(()=>{B(a.price.time,s)}),(_,h)=>(c(),d("div",O,[t("picture",null,[t("source",{type:"image/webp",srcset:e.image.webp},null,8,P),t("img",{class:"auction-banner__background",src:e.image.src,width:e.image.width,height:e.image.height,alt:e.image.alt},null,8,V)]),e.type==="default"?(c(),d("div",D,[t("div",L,[R,t("div",X,[z,t("p",null,[r(n(e.price.quantity)+" ",1),t("span",null,"( "+n(e.price.value)+" )",1)])])]),t("div",E,[o(y,null,{default:v(()=>[r("Buy art")]),_:1})])])):b("",!0),e.type==="auction"?(c(),d("div",{key:1,class:C(["auction-banner__label",{"auction-banner__label_auction":e.type==="auction"}])},[t("div",Q,[T,t("div",G,[H,t("p",null,[r(n(e.price.quantity)+" ",1),t("span",null,"( "+n(e.price.value)+" )",1)])])]),t("div",J,[K,t("div",W,[t("p",null,n(s.value),1)])]),t("div",Y,[o(y,null,{default:v(()=>[r("Place a bid")]),_:1})])],2)):b("",!0)]))}},tt=m(Z,[["__scopeId","data-v-3e06fa36"]]),et={class:"bid"},st={class:"bid__image"},nt={class:"bid__main"},at={class:"bid__main-info"},it={class:"bid__main-title"},ct=t("span",null,"Bid placed by ",-1),ot={class:"bid__main-date"},dt={class:"bid__main-sum"},rt={class:"bid__main-logo"},_t={class:"bid__main-quantity"},lt={class:"bid__main-price"},ut={__name:"AuctionBid",props:["bid"],setup(e){const a=e,s=I(()=>`http://${new URL(import.meta.url).host}/taste_nft#/user/${a.bid.user}`),_=()=>window.open(s.value);return(h,f)=>(c(),d("div",et,[t("div",st,[o(S,{src:i(p)[e.bid.user].photo.src,alt:i(p)[e.bid.user].name,srcset:i(p)[e.bid.user].photo.srcset},null,8,["src","alt","srcset"])]),t("div",nt,[t("div",at,[t("div",it,[ct,r(n(e.bid.code),1)]),t("div",ot,n(e.bid.date),1)]),t("div",dt,[t("span",rt,[o($,{id:"mini-logo"})]),t("span",_t,n(e.bid.quantity),1),t("div",lt,"("+n(e.bid.price)+"$)",1),t("div",{onClick:_,class:"bid__main-btn"},[o($,{id:"open"})])])])]))}},ht=[{user:0,date:"May 10, 2024 at 2:27pm",code:"0x6FC0...14A4",quantity:"1.5M",price:1308.54},{user:1,date:"May 10, 2024 at 8:22pm",code:"fd34ed...1we4",quantity:"1.7M",price:1508.78},{user:2,date:"May 11, 2024 at 7:27pm",code:"23de3f...34dw",quantity:"1.2M",price:1628.45},{user:3,date:"May 12, 2024 at 5:37pm",code:"f5dh6g...3d41",quantity:"1.1M",price:1898.23},{user:4,date:"May 14, 2024 at 1:22pm",code:"edf32...34dr",quantity:"2.3M",price:2108.51},{user:5,date:"May 19, 2024 at 4:20pm",code:"0rf0rf...16t7",quantity:"1.9M",price:2212.12},{user:6,date:"May 20, 2024 at 3:46pm",code:"3edf45...5tg6",quantity:"2.1M",price:2301.45},{user:7,date:"May 21, 2024 at 9:17pm",code:"5tg34t...5t6y",quantity:"1.4M",price:2508.12},{user:8,date:"May 22, 2024 at 2:14pm",code:"4r5ed1...ef56",quantity:"1.6M",price:2708.32}],pt={},mt={class:"bottom-nft"},bt=t("h3",{class:"bottom-nft__title"},"Feature works",-1),ft=t("div",{class:"bottom-nft__cards"},null,-1),vt=[bt,ft];function yt(e,a){return c(),d("div",mt,vt)}const $t=m(pt,[["render",yt]]),gt=e=>(M("data-v-36ea9f97"),e=e(),w(),e),Mt={class:"auction-content"},wt={class:"auction-content__wrapper"},qt={class:"auction-content__main"},Bt={class:"auction-content__info"},kt={class:"auction-content__info-text"},At={key:0},Ct={class:"auction-content__info-more"},It={class:"auction-content__shop"},St=gt(()=>t("h3",{class:"auction-content__shop-title"},"Activity",-1)),Ut={class:"auction-content__shop-main"},xt={__name:"AuctionContent",props:{user:{type:Object},nft:{type:Object}},setup(e){const a=ht.sort((s,_)=>_.price-s.price);return console.log(a),(s,_)=>(c(),d("div",Mt,[t("div",wt,[t("div",qt,[t("div",Bt,[o(k,{user:e.user},null,8,["user"]),t("div",kt,[t("h3",null,n(e.nft.description.title),1),e.nft.type==="auction"?(c(),d("p",At,[r(" Copy: "),t("span",null,n(e.nft.description.count),1)])):b("",!0),t("p",null,[r(" Description: "),t("span",null,n(e.nft.description.text),1)])]),t("div",Ct,[o(F)])]),t("div",It,[St,t("div",Ut,[(c(!0),d(U,null,x(i(a),(h,f)=>(c(),j(ut,{key:f,bid:h},null,8,["bid"]))),128))])])]),o($t)])]))}},jt=m(xt,[["__scopeId","data-v-36ea9f97"]]),Nt={class:"auction"},Ft={class:"container"},Ot={__name:"AuctionPage",setup(e){const a=N();return g(()=>{a.search=""}),(s,_)=>(c(),d("div",Nt,[t("div",Ft,[o(tt,{image:i(l)[s.$route.params.id].photo,type:i(l)[s.$route.params.id].type,price:i(l)[s.$route.params.id].price},null,8,["image","type","price"]),o(jt,{user:i(p)[i(l)[s.$route.params.id].user],nft:i(l)[s.$route.params.id]},null,8,["user","nft"])])]))}},Lt=m(Ot,[["__scopeId","data-v-ee2c6abd"]]);export{Lt as default};