"use strict";(self.webpackChunkjreact_com_docsaurus_01=self.webpackChunkjreact_com_docsaurus_01||[]).push([[5322],{8903:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>t,toc:()=>p});var s=a(4848),n=a(8453);const c={sidebar_position:40},r="Docker apache/kafka:3.9.0",t={id:"messaging/kafka/examples/apache-kafka-3.9.0",title:"Docker apache/kafka:3.9.0",description:"Setup",source:"@site/docs/messaging/kafka/examples/apache-kafka-3.9.0.mdx",sourceDirName:"messaging/kafka/examples",slug:"/messaging/kafka/examples/apache-kafka-3.9.0",permalink:"/docs/messaging/kafka/examples/apache-kafka-3.9.0",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Kafka Avro 1",permalink:"/docs/messaging/kafka/examples/kafka-avro-1"},next:{title:"Docker kafdrop",permalink:"/docs/messaging/kafka/examples/docker-obsidiandynamics-kafdrop"}},i={},p=[{value:"Setup",id:"setup",level:2},{value:"Create topics:",id:"create-topics",level:2},{value:"docker-kafka.cmds",id:"docker-kafkacmds",level:2}];function k(e){const o={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"docker-apachekafka390",children:"Docker apache/kafka:3.9.0"})}),"\n",(0,s.jsx)(o.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"docker pull apache/kafka:3.9.0\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"docker run -p 9092:9092 apache/kafka:3.9.0\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"docker ps\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:'CONTAINER ID   IMAGE                COMMAND                  CREATED          STATUS          PORTS                    NAMES\n8560ba3f4d19   apache/kafka:3.9.0   "/__cacert_entrypoin\u2026"   27 seconds ago   Up 25 seconds   0.0.0.0:9092->9092/tcp   upbeat_wiles\n'})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"In our case (above):"}),(0,s.jsx)("br",{}),"\nContainer name: ",(0,s.jsx)(o.em,{children:(0,s.jsx)(o.strong,{children:"upbeat_wiles"})})]}),"\n",(0,s.jsx)(o.h2,{id:"create-topics",children:"Create topics:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"docker exec -it upbeat_wiles /bin/bash\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"cd /opt/kafka\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"bin/kafka-topics.sh --create --topic inputTopic --bootstrap-server localhost:9092\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"bin/kafka-topics.sh --create --topic outputTopic --bootstrap-server localhost:9092\n"})}),"\n",(0,s.jsx)(o.h2,{id:"docker-kafkacmds",children:"docker-kafka.cmds"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"docker pull apache/kafka:3.9.0\ndocker run -p 9092:9092 apache/kafka:3.9.0\n\ndocker ps\ndocker exec -it fervent_dijkstra /bin/bash\n\ncd /opt/kafka\n\ncreate topic:\n-------------\nbin/kafka-topics.sh --create --topic price --bootstrap-server localhost:9092\nbin/kafka-topics.sh --create --topic stock --bootstrap-server localhost:9092\nbin/kafka-topics.sh --create --topic stock_update --bootstrap-server localhost:9092\n\nproducer/consumer:\n------------------\nbin/kafka-console-producer.sh --topic price --bootstrap-server localhost:9092\nbin/kafka-console-consumer.sh --topic price --from-beginning --bootstrap-server localhost:9092\n\nbin/kafka-console-producer.sh --topic stock --bootstrap-server localhost:9092\nbin/kafka-console-consumer.sh --topic stock --from-beginning --bootstrap-server localhost:9092\n\nbin/kafka-console-producer.sh --topic stock_update --bootstrap-server localhost:9092\nbin/kafka-console-consumer.sh --topic stock_update --from-beginning --bootstrap-server localhost:9092\n\nview message:\n-------------\nbin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic stock --from-beginning\nbin/kafka-console-consumer.sh --topic price --from-beginning --bootstrap-server localhost:9092\nbin/kafka-console-consumer.sh --topic stock_update --from-beginning --bootstrap-server localhost:9092\n\n\n\nlist topics:\n------------\nbin/kafka-topics.sh --list --bootstrap-server localhost:9092\n\ndelete topic:\n-------------\nbin/kafka-topics.sh --delete --bootstrap-server localhost:9092 --topic price\nbin/kafka-topics.sh --delete --bootstrap-server localhost:9092 --topic stock\nbin/kafka-topics.sh --delete --bootstrap-server localhost:9092 --topic stock_update\n\n"})})]})}function l(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},8453:(e,o,a)=>{a.d(o,{R:()=>r,x:()=>t});var s=a(6540);const n={},c=s.createContext(n);function r(e){const o=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(c.Provider,{value:o},e.children)}}}]);