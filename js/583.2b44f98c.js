"use strict";(self["webpackChunkinterno_site"]=self["webpackChunkinterno_site"]||[]).push([[583],{370:function(e,t,a){a.d(t,{o:function(){return u}});a(3375),a(9225),a(3972),a(9209),a(5714),a(7561),a(6197);var r=a(8355),s=a(144),l=a(3367),n=a(2022);const u=(0,l.nY)("articlesStore",(()=>{const e=(0,s.KR)([]),t=(0,s.KR)({}),a=(0,s.KR)(null),l=(0,s.KR)([]),u=(0,s.KR)(!1),i=(0,s.KR)(null);let c=(0,s.KR)(!1);const o=async(a={[n.uB.TAG]:[],page:1,limit:1})=>{c.value=!1,u.value=!0;try{const{data:s}=await r.A.get(n.mo,{params:a});e.value=s.items,t.value=s.meta,0===t.value.remaining_count&&(c.value=!0)}catch(s){i.value=s}finally{u.value=!1}},d=async()=>{try{const{data:e}=await r.A.get(`${n.mo}?sortBy=-id&page=1&limit=1`);a.value=e.items[0]}catch(e){i.value=e}},v=async()=>{try{const{data:e}=await r.A.get(`${n.mo}?_select=tag`);l.value=[...new Set(e.map((e=>e["tag"])))]}catch(e){i.value=e}};return{loader:u,error:i,allDataLoaded:c,getDataByParams:o,getLastItem:d,getUniqueTags:v,data:e,paginationInfo:t,lastItem:a,uniqueTags:l}}))},7831:function(e,t,a){a.d(t,{l:function(){return s}});var r=a(6768);function s(e,t){(0,r.wB)([()=>e.currentRoute.value.query,t],(([e])=>{e&&t.value&&t.value.scrollIntoView({behavior:"smooth"})}))}},192:function(e,t,a){a.d(t,{A:function(){return k}});a(4114);var r=a(6768),s=a(4232),l=a(144),n=a(7983),u=a(1387),i=a(6207),c=a(2022);const o=e=>((0,r.Qi)("data-v-24dd393e"),e=e(),(0,r.jt)(),e),d=o((()=>(0,r.Lk)("h2",{class:"heading"},"Tags",-1))),v={class:"tags__items"},p={[c["in"]]:"tags__medium",[c.Q1]:"tags"};var _={__name:"TagList",props:{tags:{type:[Array,String],default:()=>[]},type:{default:c.Q1,type:String}},emits:["select"],setup(e,{emit:t}){const a=(0,u.rd)(),o=e,_=(0,l.KR)((0,n.q0)(a,c.uB.TAG)||[]),g=t,m=e=>{_.value=Array.isArray(_.value)?[..._.value]:[];const t=_.value.indexOf(e);-1===t?_.value.push(e):_.value.splice(t,1),(0,n.oR)(a,{[c.uB.TAG]:_.value}),g("select",_.value)};return(0,r.sV)((()=>{_.value.length&&g("select",_.value)})),(t,a)=>((0,r.uX)(),(0,r.CE)("section",{class:(0,s.C4)(p[e.type])},[d,(0,r.Lk)("nav",v,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.tags,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e},[(0,r.bF)(i.A,{class:"btn-tag",type:o.type===(0,l.R1)(c.Q1)?(0,l.R1)(c.R1):(0,l.R1)(c.fk),isSelected:_.value.includes(e),onSelect:t=>m(e)},{default:(0,r.k6)((()=>[(0,r.eW)((0,s.v_)(e),1)])),_:2},1032,["type","isSelected","onSelect"])])))),128))])],2))}},g=a(1241);const m=(0,g.A)(_,[["__scopeId","data-v-24dd393e"]]);var k=m},7429:function(e,t,a){a.d(t,{A:function(){return c}});var r=a(6768);const s={class:"error-message"};function l(e,t){return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.RG)(e.$slots,"default",{},void 0,!0)])}var n=a(1241);const u={},i=(0,n.A)(u,[["render",l],["__scopeId","data-v-7a4b65d6"]]);var c=i},8783:function(e,t,a){a.d(t,{A:function(){return R}});var r=a(6768),s=a(144),l=a(5007),n=a(5435);const u={class:"homepage-title"},i={class:"homepage-title__flex"},c={class:"homepage-title__heading"};var o={__name:"ThePageTitleBar",props:{breadcrumbLinks:{type:Array}},setup(e){return(t,a)=>((0,r.uX)(),(0,r.CE)("section",u,[(0,r.Lk)("div",i,[(0,r.Lk)("h2",c,[(0,r.RG)(t.$slots,"default")]),e.breadcrumbLinks?((0,r.uX)(),(0,r.Wv)(n.A,{key:0,breadcrumbLinks:e.breadcrumbLinks},null,8,["breadcrumbLinks"])):(0,r.Q3)("",!0)])]))}},d=a(1241);const v=(0,d.A)(o,[["__scopeId","data-v-ed06000c"]]);var p=v,_=a(2022);const g={key:0,class:"head"},m=["srcset"],k=["src"],y=[{link:_.TD[_.EF],to:_.EF},{link:_.TD[_.xx],to:_.xx}],b=[{link:_.TD[_.EF],to:_.EF},{link:_.TD[_.ln],to:_.ln}];var f={__name:"TheHeadBackground",props:{currentPage:{type:String,required:!0,validator:l.qK}},setup(e){return(t,a)=>e.currentPage?((0,r.uX)(),(0,r.CE)("div",g,[(0,r.Lk)("picture",null,[(0,r.Lk)("source",{srcset:(0,s.R1)(_.z1)[e.currentPage].webp,type:"image/webp"},null,8,m),(0,r.Lk)("img",{src:(0,s.R1)(_.z1)[e.currentPage].jpg,alt:"head img",class:"head__img",style:{width:"100%"}},null,8,k)]),e.currentPage===(0,s.R1)(_.xx)?((0,r.uX)(),(0,r.Wv)(p,{key:0,breadcrumbLinks:y},{default:(0,r.k6)((()=>[(0,r.eW)("Articles & News")])),_:1})):(0,r.Q3)("",!0),e.currentPage===(0,s.R1)(_.ln)?((0,r.uX)(),(0,r.Wv)(p,{key:1,breadcrumbLinks:b},{default:(0,r.k6)((()=>[(0,r.eW)("Our Products")])),_:1})):(0,r.Q3)("",!0)])):(0,r.Q3)("",!0)}};const A=(0,d.A)(f,[["__scopeId","data-v-072f51ba"]]);var R=A},5435:function(e,t,a){a.d(t,{A:function(){return g}});var r=a(6768),s=a(5130),l=a(144),n=a(4232),u=a(5007),i=a(7983);const c={class:"breadcrumb"},o=["onClick"],d={class:"breadcrumb__text"};var v={__name:"BaseBreadCrumbs",props:{breadcrumbLinks:{type:Array,required:!0,validator:u.fb}},setup(e){return(t,a)=>((0,r.uX)(),(0,r.CE)("div",c,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.breadcrumbLinks,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"breadcrumb__box-link",key:e.link},[(0,r.Lk)("p",{class:"breadcrumb__link",onClick:[a[0]||(a[0]=(0,s.D$)((()=>{}),["stop"])),a=>(0,l.R1)(i.oo)(t.$router,e.to)]},[(0,r.Lk)("span",d,(0,n.v_)(e.link),1)],8,o)])))),128))]))}},p=a(1241);const _=(0,p.A)(v,[["__scopeId","data-v-04922090"]]);var g=_},6419:function(e,t,a){a.d(t,{A:function(){return p}});var r=a(6768),s=a(144),l=a(4232),n=a(4498),u=a(5007);const i={class:"date"},c=["datetime"];var o={__name:"BaseDate",props:{date:{type:String,required:!0,validator:u.Pz}},setup(e){return(t,a)=>((0,r.uX)(),(0,r.CE)("div",i,[(0,r.Lk)("time",{datetime:(0,s.R1)(n.j)(e.date),class:"date__time"},(0,l.v_)(e.date),9,c)]))}},d=a(1241);const v=(0,d.A)(o,[["__scopeId","data-v-52795287"]]);var p=v},6207:function(e,t,a){a.d(t,{A:function(){return d}});var r=a(6768),s=a(4232),l=a(5007),n=a(2022);const u={[n.vI]:"tag-btn_small",[n.R1]:"tag-btn_large",[n.fk]:"tag-btn_medium"};var i={__name:"BaseTag",props:{type:{default:n.vI,type:String,validator:l.xn},isSelected:{default:!1,type:Boolean}},emits:["select"],setup(e,{emit:t}){const a=t;return(t,l)=>((0,r.uX)(),(0,r.CE)("button",{class:(0,s.C4)([u[e.type],{selected:e.isSelected},"tag-btn"]),onClick:l[0]||(l[0]=e=>a("select",e.target))},[(0,r.RG)(t.$slots,"default")],2))}},c=a(1241);const o=(0,c.A)(i,[["__scopeId","data-v-889149ae"]]);var d=o},4583:function(e,t,a){a.r(t),a.d(t,{default:function(){return ae}});var r=a(6768),s=a(144),l=a(4232),n=a(5130),u=a(1387),i=a(3367),c=a(370),o=a(2022),d=a(7983),v=a(7831),p=a(8783),_=a(7429),g=a(5007),m=a(6419),k=a(135);const y={class:"text"};var b={__name:"BaseParagraph",props:{paragraph:{type:String,default:""}},setup(e){return(t,a)=>((0,r.uX)(),(0,r.CE)("p",y,(0,l.v_)(e.paragraph),1))}},f=a(1241);const A=(0,f.A)(b,[["__scopeId","data-v-98b05e2c"]]);var R=A;const h={class:"title"};var I={__name:"BaseHeading",props:{title:{type:String,required:!0}},setup(e){return(t,a)=>((0,r.uX)(),(0,r.CE)("h2",h,(0,l.v_)(e.title),1))}};const X=(0,f.A)(I,[["__scopeId","data-v-76d69952"]]);var C=X;const L={class:"image-link"},E=["src","alt"];var q={__name:"BaseImage",props:{image:{type:String,required:!0},alt:{type:String,default:"image"}},setup(e){return(t,a)=>((0,r.uX)(),(0,r.CE)("div",L,[(0,r.Lk)("img",{src:e.image,alt:e.alt,class:"image-link__img"},null,8,E)]))}};const B=(0,f.A)(q,[["__scopeId","data-v-52b66986"]]);var T=B;const x={class:"list"};var S={__name:"BaseListItems",props:{listItems:{type:Array,required:!0,validator:g._c}},setup(e){return(t,a)=>((0,r.uX)(),(0,r.CE)("ol",x,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.listItems,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e,class:"list__li"},(0,l.v_)(e),1)))),128))]))}};const K=(0,f.A)(S,[["__scopeId","data-v-741fca16"]]);var F=K;const Q={class:"quote"},w={class:"quote__q"};var W={__name:"BaseQuote",props:{quote:{type:String,required:!0}},setup(e){return(t,a)=>((0,r.uX)(),(0,r.CE)("blockquote",Q,[(0,r.Lk)("p",w,(0,l.v_)(e.quote),1)]))}};const P=(0,f.A)(W,[["__scopeId","data-v-4f742eb3"]]);var D=P;const G={key:0,class:"article-full"};var $={__name:"ArticleFullItem",props:{article:{type:Object,required:!0,validator(e){const t=["id","title","tag","date","imageUrls","order"];return(0,g.nJ)(e,t)}}},setup(e){const t=e=>{const t={title:C,image:T,date:m.A,text:k.A,listItems:F,quote:D,additionalText:R};return t[e]||null},a=(e,t)=>{const a={title:{title:t.title},image:{image:t.imageUrls.large,alt:t.tag+" image"},date:{date:t.date},text:{text:t.text},listItems:{listItems:t.listItems},quote:{quote:t.quote},additionalText:{paragraph:t.additionalText}};return a[e]||{}};return(s,l)=>e.article&&Object.keys(e.article).length>1?((0,r.uX)(),(0,r.CE)("article",G,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.article.order,((s,l)=>((0,r.uX)(),(0,r.Wv)((0,r.$y)(t(s)),(0,r.v6)({key:l,ref_for:!0},a(s,e.article)),null,16)))),128))])):(0,r.Q3)("",!0)}};const U=(0,f.A)($,[["__scopeId","data-v-20a27aea"]]);var j=U;const O={key:0,class:"details"};var z={__name:"ArticleFullList",props:{articles:{type:Array,required:!0,validator(e){const t=["id","title","tag","date","imageUrls","order"];return(0,g.OS)(e,t)}}},setup(e){return(t,a)=>e.articles&&e.articles.length?((0,r.uX)(),(0,r.CE)("div",O,[(0,r.bF)(n.F,{name:"list"},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.articles,(e=>((0,r.uX)(),(0,r.Wv)((0,s.R1)(j),{key:e.id,article:e},null,8,["article"])))),128))])),_:1})])):(0,r.Q3)("",!0)}};const N=(0,f.A)(z,[["__scopeId","data-v-3b0db18e"]]);var H=N,V=a(192);const J={class:"top"},Y={class:"blog-details"},M={class:"container"},Z={key:0,class:"blog-details__flex"};var ee={__name:"TheBlogDetails",setup(e){const t=(0,u.rd)(),a=(0,c.o)(),{error:g,data:m,uniqueTags:k}=(0,i.bP)(a),y=(0,s.KR)(null),b=(0,s.Kh)({page:1,id:(0,d.q0)(t,o.uB.ID)||null,[o.uB.TAG]:[],limit:3});function f(e){b[o.uB.TAG]=e,b.id=null}const A=e=>{e&&!a.allDataLoaded&&(b.limit+=3)};return a.getUniqueTags(),(0,r.wB)((()=>b),(async()=>{await a.getDataByParams(b)}),{immediate:!0,deep:!0}),(0,v.l)(t,y),(e,t)=>{const a=(0,r.gN)("observe-visibility");return(0,r.uX)(),(0,r.CE)("div",J,[(0,r.bF)((0,s.R1)(p.A),{"current-page":(0,s.R1)(o.AU)},null,8,["current-page"]),(0,s.R1)(g)?((0,r.uX)(),(0,r.Wv)((0,s.R1)(_.A),{key:0},{default:(0,r.k6)((()=>[(0,r.eW)((0,l.v_)((0,s.R1)(g)),1)])),_:1})):(0,r.Q3)("",!0),(0,r.Lk)("div",{class:"main-content",ref_key:"elementRef",ref:y},[(0,r.Lk)("div",Y,[(0,r.Lk)("div",M,[!(0,s.R1)(g)&&(0,s.R1)(m).length?((0,r.uX)(),(0,r.CE)("div",Z,[(0,s.R1)(m).length?((0,r.uX)(),(0,r.Wv)((0,s.R1)(H),{key:0,articles:(0,s.R1)(m)},null,8,["articles"])):(0,r.Q3)("",!0),(0,s.R1)(k).length?((0,r.uX)(),(0,r.Wv)((0,s.R1)(V.A),{key:1,type:(0,s.R1)(o.Q1),tags:(0,s.R1)(k),onSelect:f},null,8,["type","tags"])):(0,r.Q3)("",!0)])):((0,r.uX)(),(0,r.Wv)((0,s.R1)(_.A),{key:1},{default:(0,r.k6)((()=>[(0,r.eW)(" Not found :( ")])),_:1})),(0,r.bo)((0,r.Lk)("div",null,null,512),[[n.aG,(0,s.R1)(m).length>2],[a,A]])])])],512)])}}};const te=(0,f.A)(ee,[["__scopeId","data-v-97a108a4"]]);var ae=te}}]);
//# sourceMappingURL=583.2b44f98c.js.map