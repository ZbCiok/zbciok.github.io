"use strict";(self.webpackChunkjreact_com_docsaurus_01=self.webpackChunkjreact_com_docsaurus_01||[]).push([[4657],{2043:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=s(4848),t=s(8453);const o={sidebar_position:200},a="Docker wurstmeister",c={id:"messaging/kafka/examples/wurstmeister",title:"Docker wurstmeister",description:"docker-compose.yml",source:"@site/docs/messaging/kafka/examples/wurstmeister.mdx",sourceDirName:"messaging/kafka/examples",slug:"/messaging/kafka/examples/wurstmeister",permalink:"/docs/messaging/kafka/examples/wurstmeister",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Docker confluentinc",permalink:"/docs/messaging/kafka/examples/confluentinc"},next:{title:"References",permalink:"/docs/messaging/kafka/references"}},i={},m=[{value:"docker-compose.yml",id:"docker-composeyml",level:4}];function d(e){const n={code:"code",h1:"h1",h4:"h4",header:"header",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"docker-wurstmeister",children:"Docker wurstmeister"})}),"\n",(0,r.jsx)(n.h4,{id:"docker-composeyml",children:"docker-compose.yml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'version: \'3\'\n\nservices:\n  zookeeper:\n    image: wurstmeister/zookeeper\n    container_name: zookeeper\n    ports:\n      - "2181:2181"\n  kafka:\n    image: wurstmeister/kafka\n    container_name: kafka\n    ports:\n      - "9092:9092"\n    environment:\n      KAFKA_ADVERTISED_HOST_NAME: localhost\n      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var r=s(6540);const t={},o=r.createContext(t);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);