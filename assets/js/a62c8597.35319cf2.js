"use strict";(self.webpackChunkjreact_com_docsaurus_01=self.webpackChunkjreact_com_docsaurus_01||[]).push([[7162],{6127:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var t=r(4848),a=r(8453);const n={sidebar_position:10},i="Smallrye Mutiny Zero",l={id:"smallrye-mutiny/smallrye-mutiny-zero",title:"Smallrye Mutiny Zero",description:"Javadoc",source:"@site/docs/smallrye-mutiny/smallrye-mutiny-zero.mdx",sourceDirName:"smallrye-mutiny",slug:"/smallrye-mutiny/smallrye-mutiny-zero",permalink:"/docs/smallrye-mutiny/smallrye-mutiny-zero",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"SmallRye Mutiny",permalink:"/docs/smallrye-mutiny"},next:{title:"Observing Events",permalink:"/docs/smallrye-mutiny/observing-events"}},c={},o=[{value:"Vert.x-based Reactive Streams Publishers",id:"vertx-based-reactive-streams-publishers",level:2}];function m(e){const s={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"smallrye-mutiny-zero",children:"Smallrye Mutiny Zero"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://smallrye.io/smallrye-mutiny-zero/1.0.0/apidocs/",children:(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Javadoc"})})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.a,{href:"https://smallrye.io/smallrye-mutiny-zero/latest/",children:"https://smallrye.io/smallrye-mutiny-zero/latest/"})]}),"\n",(0,t.jsxs)(s.p,{children:["Mutiny Zero is a minimal API for creating ",(0,t.jsx)(s.a,{href:"https://www.reactive-streams.org/",children:(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"reactive streams"})})})," compliant publishers."]}),"\n",(0,t.jsxs)(s.p,{children:["It weights less than 50K and has 0 external dependency as it uses the ",(0,t.jsx)(s.a,{href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/Flow.html",children:(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Java Flow APIs"})})}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.strong,{children:["In a reactive streams ecosystem sources with asynchronous I/O can be wrapped as ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"publishers"})}),", and applications can ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"subscribe"})})," to these publishers:"]})}),"\n",(0,t.jsx)("img",{src:"/img/smallrye-mutiny/smallye-mutiny-zero-01.png",alt:"smallye-mutiny-zero-01.png"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(s.p,{children:["Since reactive streams are defined as a set of minimal interfaces (see the ",(0,t.jsx)(s.a,{href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/Flow.html",children:(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Java Flow"})})})," interfaces),\nit is possible to mix and match ",(0,t.jsx)(s.a,{href:"/docs/streams/reactive-streams/java-util-concurrent-Flow",children:(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"publishers"})})}),", ",(0,t.jsx)(s.a,{href:"/docs/streams/reactive-streams/java-util-concurrent-Flow",children:(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"processors"})})})," and ",(0,t.jsx)(s.a,{href:"/docs/streams/reactive-streams/java-util-concurrent-Flow",children:(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"subscribers"})})})," from different software stacks.\nFor instance an event streaming service and a large data store can expose reactive streams compliant clients.\nIn turn applications can be made end-to-end reactive as long as the code honors reactive streams protocols and semantics."]}),"\n",(0,t.jsx)(s.p,{children:"Reactive streams is a low-level protocol and applications shall use higher-level reactive programming libraries such as Mutiny."}),"\n",(0,t.jsx)(s.h2,{id:"vertx-based-reactive-streams-publishers",children:"Vert.x-based Reactive Streams Publishers"}),"\n",(0,t.jsx)(s.p,{children:"The mutiny-zero-vertx-publishers library  allows creating Reactive Streams publishers from Vert.x streams."}),"\n",(0,t.jsx)(s.p,{children:"This library acts as a thin adapter between Vert.x ReadStream and java.util.concurrent.Flow.Publisher and uses Mutiny Zero to expose Reactive Streams compliant publishers."})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>l});var t=r(6540);const a={},n=t.createContext(a);function i(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);