"use strict";(self.webpackChunkjreact_com_docsaurus_01=self.webpackChunkjreact_com_docsaurus_01||[]).push([[9036],{871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>m});var n=r(4848),s=r(8453),l=r(3514),o=r(5068);const c={slug:"/ksqlDB/examples"},i="Examples",a={id:"streams/ksqlDB/Examples/index",title:"Examples",description:"---",source:"@site/docs/streams/ksqlDB/Examples/index.mdx",sourceDirName:"streams/ksqlDB/Examples",slug:"/ksqlDB/examples",permalink:"/docs/ksqlDB/examples",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/ksqlDB/examples"},sidebar:"tutorialSidebar",previous:{title:"Materialized Views",permalink:"/docs/streams/ksqlDB/materialized-views"},next:{title:"ksqlDB Quickstart",permalink:"/docs/streams/ksqlDB/Examples/ksqldb-quickstart"}},u={},m=[];function d(e){const t={h1:"h1",header:"header",hr:"hr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"examples",children:"Examples"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n","\n",(0,n.jsx)(l.A,{items:(0,o.$S)().items})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>j});r(6540);var n=r(4164),s=r(6972),l=r(8774),o=r(5846),c=r(6654),i=r(1312),a=r(1107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=r(4848);function d(e){let{href:t,children:r}=e;return(0,m.jsx)(l.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:s,description:l}=e;return(0,m.jsxs)(d,{href:t,children:[(0,m.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:s,children:[r," ",s]}),l&&(0,m.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:l,children:l})]})}function h(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,i.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,m.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,m.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(f,{item:t});case"category":return(0,m.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,s.$S)();return(0,m.jsx)(j,{items:r.items,className:t})}function j(e){const{items:t,className:r}=e;if(!t)return(0,m.jsx)(g,{...e});const l=(0,s.d1)(t);return(0,m.jsx)("section",{className:(0,n.A)("row",r),children:l.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(x,{item:e})},t)))})}},5846:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(6540),s=r(4586);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=i();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),l=r.pluralForms.indexOf(s);return n[Math.min(l,n.length-1)]}(r,t,e)}}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(6540);const s={},l=n.createContext(s);function o(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);