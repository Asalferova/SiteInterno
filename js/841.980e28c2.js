"use strict";(self["webpackChunkinterno_site"]=self["webpackChunkinterno_site"]||[]).push([[841],{7831:function(e,t,a){a.d(t,{l:function(){return s}});var l=a(6768);function s(e,t){(0,l.wB)([()=>e.currentRoute.value.query,t],(([e])=>{e&&t.value&&t.value.scrollIntoView({behavior:"smooth"})}))}},8783:function(e,t,a){a.d(t,{A:function(){return h}});var l=a(6768),s=a(144),r=a(5007),n=a(5435);const c={class:"homepage-title"},i={class:"homepage-title__flex"},u={class:"homepage-title__heading"};var d={__name:"ThePageTitleBar",props:{breadcrumbLinks:{type:Array}},setup(e){return(t,a)=>((0,l.uX)(),(0,l.CE)("section",c,[(0,l.Lk)("div",i,[(0,l.Lk)("h2",u,[(0,l.RG)(t.$slots,"default")]),e.breadcrumbLinks?((0,l.uX)(),(0,l.Wv)(n.A,{key:0,breadcrumbLinks:e.breadcrumbLinks},null,8,["breadcrumbLinks"])):(0,l.Q3)("",!0)])]))}},o=a(1241);const v=(0,o.A)(d,[["__scopeId","data-v-ed06000c"]]);var _=v,p=a(2022);const k={key:0,class:"head"},m=["srcset"],g=["src"],b=[{link:p.TD[p.EF],to:p.EF},{link:p.TD[p.xx],to:p.xx}],R=[{link:p.TD[p.EF],to:p.EF},{link:p.TD[p.ln],to:p.ln}];var y={__name:"TheHeadBackground",props:{currentPage:{type:String,required:!0,validator:r.qK}},setup(e){return(t,a)=>e.currentPage?((0,l.uX)(),(0,l.CE)("div",k,[(0,l.Lk)("picture",null,[(0,l.Lk)("source",{srcset:(0,s.R1)(p.z1)[e.currentPage].webp,type:"image/webp"},null,8,m),(0,l.Lk)("img",{src:(0,s.R1)(p.z1)[e.currentPage].jpg,alt:"head img",class:"head__img",style:{width:"100%"}},null,8,g)]),e.currentPage===(0,s.R1)(p.xx)?((0,l.uX)(),(0,l.Wv)(_,{key:0,breadcrumbLinks:b},{default:(0,l.k6)((()=>[(0,l.eW)("Articles & News")])),_:1})):(0,l.Q3)("",!0),e.currentPage===(0,s.R1)(p.ln)?((0,l.uX)(),(0,l.Wv)(_,{key:1,breadcrumbLinks:R},{default:(0,l.k6)((()=>[(0,l.eW)("Our Products")])),_:1})):(0,l.Q3)("",!0)])):(0,l.Q3)("",!0)}};const f=(0,o.A)(y,[["__scopeId","data-v-072f51ba"]]);var h=f},4951:function(e,t,a){a.d(t,{A:function(){return g}});a(4114);var l=a(6768),s=a(144),r=a(4232),n=a(1387),c=a(2022),i=a(7983),u=a(6296),d=a(4217),o=a(5694);const v={class:"pagination"},_=5;var p={__name:"ThePagination",props:{totalPages:{default:1,type:Number}},emits:["update:currentPage"],setup(e,{emit:t}){const a=e,p=(0,n.rd)(),k=parseInt((0,i.q0)(p,c.uB.PAGE)),m=(0,s.KR)(a.totalPages),g=(0,s.KR)((k<=m.value?k:1)||1),b=(0,l.EW)((()=>{if(m.value<=_)return Array.from({length:m.value},((e,t)=>t+1));{const e=[1];g.value>2&&e.push("...");for(let t=Math.max(2,g.value-1);t<=Math.min(g.value+1,m.value-1);t++)e.push(t);return g.value<m.value-1&&e.push("..."),e.push(m.value),e}})),R=t,y=e=>{"..."!==e&&(g.value=e,(0,i.oR)(p,{page:g.value})),R("update:currentPage",e)};return(0,l.sV)((()=>{R("update:currentPage",g.value)})),(e,t)=>((0,l.uX)(),(0,l.CE)("div",v,[(0,l.bF)(u.A,{type:(0,s.R1)(c.Jb),onClick:t[0]||(t[0]=e=>y(g.value-1)),disabled:1===g.value},{default:(0,l.k6)((()=>[(0,l.bF)(o.A,{name:(0,s.R1)(d.db),style:"transform: rotate(180deg);"},null,8,["name"])])),_:1},8,["type","disabled"]),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(b.value,(e=>((0,l.uX)(),(0,l.Wv)(u.A,{type:(0,s.R1)(c.Jb),key:e,onClick:t=>y(e),isSelected:e===g.value},{default:(0,l.k6)((()=>[(0,l.eW)((0,r.v_)(e<10?"0"+e:e),1)])),_:2},1032,["type","onClick","isSelected"])))),128)),(0,l.bF)(u.A,{type:(0,s.R1)(c.Jb),onClick:t[1]||(t[1]=e=>y(g.value+1)),disabled:g.value===m.value},{default:(0,l.k6)((()=>[(0,l.bF)(o.A,{name:(0,s.R1)(d.db)},null,8,["name"])])),_:1},8,["type","disabled"])]))}},k=a(1241);const m=(0,k.A)(p,[["__scopeId","data-v-5b037d7c"]]);var g=m},7483:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var l=a(6768),s=a(144),r=a(4232),n=a(1387),c=a(2022),i=a(3367),u=a(370),d=a(7831),o=a(8783),v=a(5007),_=a(7983),p=a(6296),k=a(4217),m=a(5694),g=a(6419);const b={class:"article-latest__image-link"},R=["src","alt"],y={class:"article-latest__content"},f={class:"article-latest__title"},h={class:"article-latest__some"};var A={__name:"ArticleMediumItem",props:{article:{type:Object,required:!0,validator(e){const t=["id","title","tag","date","imageUrls"];return(0,v.nJ)(e,t)}}},setup(e){const t=e;return(a,n)=>e.article&&Object.keys(t.article).length?((0,l.uX)(),(0,l.CE)("article",{key:0,onClick:n[0]||(n[0]=e=>(0,s.R1)(_.oo)(a.$router,(0,s.R1)(c.AU),{[(0,s.R1)(c.uB).ID]:t.article.id})),class:"article-latest"},[(0,l.Lk)("div",b,[(0,l.Lk)("picture",null,[(0,l.Lk)("img",{class:"article-latest__img",src:t.article.imageUrls?.medium,alt:t.article.tag+" image",style:{width:"100%"},loading:"lazy"},null,8,R)])]),(0,l.Lk)("div",y,[(0,l.Lk)("h3",f,(0,r.v_)(t.article.title),1),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(t.article.text,(e=>((0,l.uX)(),(0,l.CE)("p",{class:"article-latest__text",key:e},(0,r.v_)(e),1)))),128)),(0,l.Lk)("div",h,[(0,l.bF)(g.A,{date:t.article.date},null,8,["date"]),(0,l.bF)(p.A,{type:(0,s.R1)(c.GR)},{default:(0,l.k6)((()=>[(0,l.bF)(m.A,{name:(0,s.R1)(k.db)},null,8,["name"])])),_:1},8,["type"])])])])):(0,l.Q3)("",!0)}},L=a(1241);const P=(0,L.A)(A,[["__scopeId","data-v-0fe75720"]]);var w=P,C=a(7635),E=a(6396),F=a(4951),X=a(7429);const I=e=>((0,l.Qi)("data-v-74abd19e"),e=e(),(0,l.jt)(),e),x={class:"top"},Q={key:1,class:"main-content"},W={key:0,class:"articles-and-news"},T={class:"container"},B=I((()=>(0,l.Lk)("div",{class:"articles-and-news__content"},[(0,l.Lk)("h2",{class:"articles-and-news__title_latest"},"Latest Post")],-1))),K={class:"container-for-article"},D={class:"container"},q=I((()=>(0,l.Lk)("div",{class:"articles-and-news__content"},[(0,l.Lk)("h2",{class:"articles-and-news__title_latest"},"Articles & News")],-1))),j={class:"articles-and-news__flex"};var J={__name:"TheBlog",setup(e){const t=(0,n.rd)(),a=(0,u.o)(),{error:v,lastItem:_,data:p,loader:k,paginationInfo:m}=(0,i.bP)(a),g=(0,s.Kh)({page:1,limit:6}),b=(0,s.KR)(null);function R(e){g.page=e}return a.getLastItem(),(0,l.wB)((()=>g),(async()=>{await a.getDataByParams(g)}),{immediate:!0,deep:!0}),(0,d.l)(t,b),(e,t)=>((0,l.uX)(),(0,l.CE)("div",x,[(0,l.bF)((0,s.R1)(o.A),{"current-page":(0,s.R1)(c.xx)},null,8,["current-page"]),(0,s.R1)(v)?((0,l.uX)(),(0,l.Wv)((0,s.R1)(X.A),{key:0},{default:(0,l.k6)((()=>[(0,l.eW)((0,r.v_)((0,s.R1)(v)),1)])),_:1})):(0,l.Q3)("",!0),(0,s.R1)(v)?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",Q,[(0,s.R1)(_)?((0,l.uX)(),(0,l.CE)("section",W,[(0,l.Lk)("div",T,[B,(0,l.bF)((0,s.R1)(w),{class:"article-latest__desctop",article:(0,s.R1)(_)},null,8,["article"]),(0,l.Lk)("div",K,[(0,l.bF)((0,s.R1)(E.A),{class:"article-latest__mobile",article:(0,s.R1)(_)},null,8,["article"])])])])):(0,l.Q3)("",!0),(0,s.R1)(p).length?((0,l.uX)(),(0,l.CE)("section",{key:1,class:"articles-and-news",ref_key:"elementRef",ref:b},[(0,l.Lk)("div",D,[q,(0,l.Lk)("div",j,[(0,l.bF)((0,s.R1)(C.A),{articles:(0,s.R1)(p)},null,8,["articles"]),(0,s.R1)(k)?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.Wv)((0,s.R1)(F.A),{key:0,totalPages:(0,s.R1)(m).total_pages,"onUpdate:currentPage":R},null,8,["totalPages"]))])])],512)):(0,l.Q3)("",!0)]))]))}};const U=(0,L.A)(J,[["__scopeId","data-v-74abd19e"]]);var z=U}}]);
//# sourceMappingURL=841.980e28c2.js.map