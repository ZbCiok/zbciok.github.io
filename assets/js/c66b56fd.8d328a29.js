"use strict";(self.webpackChunkjreact_com_docsaurus_01=self.webpackChunkjreact_com_docsaurus_01||[]).push([[8839],{9074:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=r(4848),s=r(8453);r(3514);const i={slug:"/apache-flink/connectors"},c="Connectors",o={id:"streams/apache-flink/connectors/index",title:"Connectors",description:"Predefined Sources and Sinks",source:"@site/docs/streams/apache-flink/connectors/index.mdx",sourceDirName:"streams/apache-flink/connectors",slug:"/apache-flink/connectors",permalink:"/docs/apache-flink/connectors",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/apache-flink/connectors"},sidebar:"tutorialSidebar",previous:{title:"Joining",permalink:"/docs/streams/apache-flink/Operators/joining"},next:{title:"Kafka",permalink:"/docs/apache-flink/connectors/kafka"}},a={},l=[{value:"Predefined Sources and Sinks",id:"predefined-sources-and-sinks",level:2},{value:"Flink Project Connectors",id:"flink-project-connectors",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"connectors",children:"Connectors"})}),"\n",(0,t.jsx)(n.h2,{id:"predefined-sources-and-sinks",children:"Predefined Sources and Sinks"}),"\n",(0,t.jsx)(n.p,{children:"A few basic data sources and sinks are built into Flink and are always available. The predefined data sources include reading from files, directories, and sockets, and ingesting data from collections and iterators. The predefined data sinks support writing to files, to stdout and stderr, and to sockets."}),"\n",(0,t.jsx)(n.h2,{id:"flink-project-connectors",children:"Flink Project Connectors"}),"\n",(0,t.jsx)(n.p,{children:"Connectors provide code for interfacing with various third-party systems. Currently these systems are supported as part of the Apache Flink project:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Apache Kafka (source/sink)"}),"\n",(0,t.jsx)(n.li,{children:"Apache Cassandra (source/sink)"}),"\n",(0,t.jsx)(n.li,{children:"Amazon DynamoDB (sink)"}),"\n",(0,t.jsx)(n.li,{children:"Amazon Kinesis Data Streams (source/sink)"}),"\n",(0,t.jsx)(n.li,{children:"Amazon Kinesis Data Firehose (sink)"}),"\n",(0,t.jsx)(n.li,{children:"DataGen (source)"}),"\n",(0,t.jsx)(n.li,{children:"Elasticsearch (sink)"}),"\n",(0,t.jsx)(n.li,{children:"Opensearch (sink)"}),"\n",(0,t.jsx)(n.li,{children:"FileSystem (source/sink)"}),"\n",(0,t.jsx)(n.li,{children:"RabbitMQ (source/sink)"}),"\n",(0,t.jsx)(n.li,{children:"Google PubSub (source/sink)"}),"\n",(0,t.jsx)(n.li,{children:"Hybrid Source (source)"}),"\n",(0,t.jsx)(n.li,{children:"Apache Pulsar (source)"}),"\n",(0,t.jsx)(n.li,{children:"JDBC (sink)"}),"\n",(0,t.jsx)(n.li,{children:"MongoDB (source/sink)"}),"\n",(0,t.jsx)(n.li,{children:"Prometheus (sink)"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3514:(e,n,r)=>{r.d(n,{A:()=>j});r(6540);var t=r(4164),s=r(6972),i=r(8774),c=r(5846),o=r(6654),a=r(1312),l=r(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(4848);function h(e){let{href:n,children:r}=e;return(0,u.jsx)(i.A,{href:n,className:(0,t.A)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:n,icon:r,title:s,description:i}=e;return(0,u.jsxs)(h,{href:n,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,t.A)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),i&&(0,u.jsx)("p",{className:(0,t.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function f(e){let{item:n}=e;const r=(0,s.Nr)(n),t=function(){const{selectMessage:e}=(0,c.W)();return n=>e(n,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return r?(0,u.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??t(n.items.length)}):null}function m(e){let{item:n}=e;const r=(0,o.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,s.cC)(n.docId??void 0);return(0,u.jsx)(p,{href:n.href,icon:r,title:n.label,description:n.description??t?.description})}function x(e){let{item:n}=e;switch(n.type){case"link":return(0,u.jsx)(m,{item:n});case"category":return(0,u.jsx)(f,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function k(e){let{className:n}=e;const r=(0,s.$S)();return(0,u.jsx)(j,{items:r.items,className:n})}function j(e){const{items:n,className:r}=e;if(!n)return(0,u.jsx)(k,{...e});const i=(0,s.d1)(n);return(0,u.jsx)("section",{className:(0,t.A)("row",r),children:i.map(((e,n)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},n)))})}},5846:(e,n,r)=>{r.d(n,{W:()=>l});var t=r(6540),s=r(4586);const i=["zero","one","two","few","many","other"];function c(e){return i.filter((n=>e.includes(n)))}const o={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,t.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:c(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),o}}),[e])}function l(){const e=a();return{selectMessage:(n,r)=>function(e,n,r){const t=e.split("|");if(1===t.length)return t[0];t.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const s=r.select(n),i=r.pluralForms.indexOf(s);return t[Math.min(i,t.length-1)]}(r,n,e)}}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var t=r(6540);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);