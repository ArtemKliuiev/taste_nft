import{U as A,_ as g,i as R}from"./UsersSlider-CDmkheQh.js";import{v as S,g as q,r,q as x,w as p,c as d,h as o,a as f,F as B,d as T,n as k,b as U,U as V,o as u,e as C,m as E,i as F}from"./index-Df0-WU7K.js";import{n as P}from"./timer-BXKa7d3A.js";const $={class:"search"},D={class:"container"},M={class:"search__main"},O={class:"search__dropdowns"},K={class:"search__cards"},L={key:0,class:"search__cards-empty"},Q={class:"search__btn"},j={class:"search__users"},W={__name:"SearchPage",setup(z){const n=S(),_=q(),l=r("Recently added"),y=r([]),c=r("All"),v=r("disabled"),a=r([]),i=r(4);let h=0;x(()=>{const e=_.currentRoute.value.query.query;e&&(n.search=e),b(n.search)}),p(n,()=>{b(n.search),n.search===""&&_.back()});function w(e){_.replace({query:{query:e}})}p(l,()=>{l.value==="Recently added"?a.value.sort((e,t)=>e.sortInfo.recentlyAdded-t.sortInfo.recentlyAdded):l.value==="Popular"?a.value.sort((e,t)=>e.sortInfo.popular-t.sortInfo.popular):l.value==="The best"&&a.value.sort((e,t)=>e.sortInfo.best-t.sortInfo.best)}),p(c,()=>{let e=[];const t=y.value;c.value==="All"?e=t:c.value==="Auctions"?e=t.filter(s=>s.type==="auction"):c.value==="On sale"&&(e=t.filter(s=>s.type==="default")),a.value=e});function N(){i.value=i.value+4,m()}function m(){a.value.length<=i.value?v.value="disabled":v.value="active"}function b(e){w(e);const t=new RegExp(e===""?"(?=.*.)^$":e,"i");a.value=P.filter(s=>t.test(s.description.title)),y.value=a.value,m()}return(e,t)=>(u(),d("div",$,[o("div",D,[o("div",M,[o("div",O,[f(A,{list:["Recently added","Popular","The best"],onSubmit:t[0]||(t[0]=s=>l.value=s)}),f(A,{list:["All","Auctions","On sale"],onSubmit:t[1]||(t[1]=s=>c.value=s)})]),o("div",K,[(u(!0),d(B,null,T(a.value,(s,I)=>(u(),d("div",{key:I,class:"search__one-card"},[i.value>I?(u(),C(g,{nftInfo:s,key:E(h)?h.value++:h++},null,8,["nftInfo"])):k("",!0)]))),128)),a.value.length===0?(u(),d("span",L,"There are no NFTs")):k("",!0)]),o("div",Q,[f(V,{onClick:N,state:v.value},{default:U(()=>[F("Show all")]),_:1},8,["state"])]),o("div",j,[f(R)])])])]))}};export{W as default};