"use strict";(self.webpackChunkjreact_com_docsaurus_01=self.webpackChunkjreact_com_docsaurus_01||[]).push([[7498],{2743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(4848),r=n(8453);const o={sidebar_position:42},a="Guides",s={id:"smallrye-mutiny/guides",title:"Guides",description:"How to deal with CompletionStage?",source:"@site/docs/smallrye-mutiny/guides.mdx",sourceDirName:"smallrye-mutiny",slug:"/smallrye-mutiny/guides",permalink:"/docs/smallrye-mutiny/guides",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42},sidebar:"tutorialSidebar",previous:{title:"Multi",permalink:"/docs/smallrye-mutiny/multi"},next:{title:"Implementations",permalink:"/docs/smallrye-mutiny/implementations"}},l={},c=[{value:"How to deal with CompletionStage?",id:"how-to-deal-with-completionstage",level:2},{value:"Differences between Uni and CompletionStage",id:"differences-between-uni-and-completionstage",level:3},{value:"From Uni to CompletionStage",id:"from-uni-to-completionstage",level:3},{value:"Creating a Uni from a CompletionStage#",id:"creating-a-uni-from-a-completionstage",level:3},{value:"Creating a Multi from a CompletionStage",id:"creating-a-multi-from-a-completionstage",level:3},{value:"Mutiny Vert.x bindings",id:"mutiny-vertx-bindings",level:2},{value:"What does the Mutiny code generator do?",id:"what-does-the-mutiny-code-generator-do",level:3},{value:"Getting the bindings",id:"getting-the-bindings",level:3},{value:"Example",id:"example",level:4},{value:"API translation",id:"api-translation",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"guides",children:"Guides"}),"\n",(0,i.jsx)(t.h2,{id:"how-to-deal-with-completionstage",children:"How to deal with CompletionStage?"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletionStage.html",children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"CompletionStage"})})})," and\n",(0,i.jsx)(t.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html",children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"CompletableFuture"})})})," are classes provided by Java to represent asynchronous actions."]}),"\n",(0,i.jsx)(t.h3,{id:"differences-between-uni-and-completionstage",children:"Differences between Uni and CompletionStage"}),"\n",(0,i.jsx)(t.p,{children:"While CompletionStage and CompletableFuture are close to Uni in terms of use case, there are some fundamental differences."}),"\n",(0,i.jsxs)(t.p,{children:["CompletionStage are ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"eager"})}),". When a method returns a CompletionStage, the operation has already been triggered. The outcome is used to complete the returned CompletionStage. On the other side, Unis are ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"lazy"})}),". The operation is only triggered once there is a subscription."]}),"\n",(0,i.jsx)(t.p,{children:"CompletionStage caches the outcome. So, once received, you can retrieve the result. Every retrieval will get the same result. With Uni, every subscription has the opportunity to re-trigger the operation and gets a different result."}),"\n",(0,i.jsx)(t.h3,{id:"from-uni-to-completionstage",children:"From Uni to CompletionStage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"CompletionStage<String> cs = uni.subscribeAsCompletionStage();\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"It\u2019s important to understand that retrieving a CompletionStage subscribes to the Uni. If you do this operation twice, it subscribes to the Uni twice and re-trigger the operation."})}),"\n",(0,i.jsx)(t.h3,{id:"creating-a-uni-from-a-completionstage",children:"Creating a Uni from a CompletionStage#"}),"\n",(0,i.jsxs)(t.p,{children:["To create a Uni from a CompletionStage, use ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Uni.createFrom().completionStage(...)"})}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'Uni<String> uni1 = Uni\n        // Create from a Completion Stage\n        .createFrom().completionStage(\n                CompletableFuture.supplyAsync(() -> "hello", executor)\n        )\n        .onItem().transform(String::toUpperCase);\n\nUni<String> uni2 = Uni\n        // Create from a Completion Stage supplier (recommended)\n        .createFrom().completionStage(\n                () -> CompletableFuture.supplyAsync(() -> "hello", executor)\n        )\n        .onItem().transform(String::toUpperCase);\n'})}),"\n",(0,i.jsx)(t.h3,{id:"creating-a-multi-from-a-completionstage",children:"Creating a Multi from a CompletionStage"}),"\n",(0,i.jsx)(t.p,{children:"To create a Multi from a CompletionStage, use Multi.createFrom().completionStage(...). It produces:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"a multi emitting an item and completing - if the value produced by the completion stage is not null,"}),"\n",(0,i.jsx)(t.li,{children:"an empty multi if the value produced by the completion stage is null,"}),"\n",(0,i.jsx)(t.li,{children:"a failed multi is completion stage is completed exceptionally."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'Multi<String> multi1 = Multi\n        .createFrom().completionStage(\n                CompletableFuture.supplyAsync(() -> "hello", executor)\n        )\n        .onItem().transform(String::toUpperCase);\n\nMulti<String> multi2 = Multi\n        .createFrom().completionStage(() ->\n                CompletableFuture.supplyAsync(() -> "hello", executor)\n        )\n        .onItem().transform(String::toUpperCase);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"mutiny-vertx-bindings",children:"Mutiny Vert.x bindings"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://smallrye.io/smallrye-mutiny-vertx-bindings/latest/",children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Smallrye Mutiny Vert.x bindings"})})})}),"\n",(0,i.jsx)(t.p,{children:"While the Vert.x core APIs expose asynchronous programming through callbacks and promise / future, code generators offer bindings to other asynchronous programming models, including: Kotlin coroutines, and RxJava 1, 2 and 3."}),"\n",(0,i.jsx)(t.p,{children:"This project offers Vert.x binding for Mutiny."}),"\n",(0,i.jsx)(t.h3,{id:"what-does-the-mutiny-code-generator-do",children:"What does the Mutiny code generator do?"}),"\n",(0,i.jsx)("img",{src:"/img/smallrye-mutiny/vertx-mutiny-translations-01.png",alt:"vertx-mutiny-translations-01.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h3,{id:"getting-the-bindings",children:"Getting the bindings"}),"\n",(0,i.jsx)(t.p,{children:"The bindings can be accessed from the following Maven coordinates:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Group: io.smallrye.reactive"}),"\n",(0,i.jsx)(t.li,{children:"Artifact: smallrye-mutiny-vertx-<MODULE> where MODULE refers to a Vert.x module, such as core, pg-client, web-client, etc."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The full list of supported modules from the Vert.x stack is available at ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://github.com/smallrye/smallrye-mutiny-vertx-bindings/tree/main/vertx-mutiny-clients",children:"https://github.com/smallrye/smallrye-mutiny-vertx-bindings/tree/main/vertx-mutiny-clients"})})})]}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'import io.smallrye.mutiny.Uni;\nimport io.smallrye.mutiny.vertx.core.AbstractVerticle;\nimport io.vertx.core.DeploymentOptions;\nimport io.vertx.mutiny.core.Vertx;\n\npublic class hello {\n\n    static class MyVerticle extends AbstractVerticle {\n\n        private long counter = 0L;\n\n        /*\n         * Asynchronous start completion notification through a Uni.\n         * This is the Mutiny variant of `start(Promise<Void>)` in plain Vert.x.\n         */\n        @Override\n        public Uni<Void> asyncStart() {\n\n            /*\n             * Vert.x stream (ticks every 2 seconds) to Mutiny stream (Multi),\n             * then increment a counter.\n             */\n            vertx.periodicStream(2000L)\n                .toMulti()\n                .subscribe().with(tick -> counter++);\n\n            /*\n             * HTTP endpoint, where `listen` returns a `Uni<HttpServer>`.\n             * Notifies of the start procedure completion by replacing and\n             * returning the`Uni<HttpServer>` by `Uni<Void>`.\n             */\n            return vertx.createHttpServer()\n                .requestHandler(req -> req.response().endAndForget("@" + counter))\n                .listen(8080)\n                .onItem()\n                    .invoke(() -> System.out.println("See http://127.0.0.1:8080"))\n                .onFailure()\n                    .invoke(Throwable::printStackTrace)\n                .replaceWithVoid();\n        }\n    }\n\n    /*\n     * Main method, deploys a verticle and awaits for the completion with\n     * an `*AndAwait()` method.\n     */\n    public static void main(String... args) {\n        var vertx = Vertx.vertx();\n        System.out.println("Deployment Starting");\n        vertx.deployVerticleAndAwait(MyVerticle::new, new DeploymentOptions());\n        System.out.println("Deployment completed");\n    }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"The deployed verticle uses the Mutiny API, where the start(Promise<Void>) method is replaced by asyncStart() method that returns a Uni<Void>. The code also shows how to convert Vert.x streams into Mutiny Multi streams, and how to await for the verticle deployment to complete."}),"\n",(0,i.jsx)(t.h3,{id:"api-translation",children:"API translation"}),"\n",(0,i.jsxs)(t.p,{children:["The Vert.x Mutiny bindings are generated from the existing Vert.x ",(0,i.jsx)(t.a,{href:"https://smallrye.io/smallrye-mutiny-vertx-bindings/latest/api-translation/",children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"API translations"})})}),"."]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(6540);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);