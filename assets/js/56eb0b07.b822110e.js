"use strict";(self.webpackChunkjreact_com_docsaurus_01=self.webpackChunkjreact_com_docsaurus_01||[]).push([[4690],{3502:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var t=s(4848),n=s(8453),r=s(3514),i=s(5068);const o={slug:"/aws/amazon-kinesis-data-streams"},c="Kinesis Data Streams",d={id:"aws/amazon-kinesis-data-streams/index",title:"Kinesis Data Streams",description:"https://docs.aws.amazon.com/streams/latest/dev/introduction.html",source:"@site/docs/aws/amazon-kinesis-data-streams/index.mdx",sourceDirName:"aws/amazon-kinesis-data-streams",slug:"/aws/amazon-kinesis-data-streams",permalink:"/docs/aws/amazon-kinesis-data-streams",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/aws/amazon-kinesis-data-streams"},sidebar:"tutorialSidebar",previous:{title:"References",permalink:"/docs/aws/aws-lambda/references"},next:{title:"Examples",permalink:"/docs/aws/amazon-kinesis-data-streams/examples"}},l={},m=[{value:"What is Amazon Kinesis Data Streams?",id:"what-is-amazon-kinesis-data-streams",level:2},{value:"What can I do with Kinesis Data Streams?",id:"what-can-i-do-with-kinesis-data-streams",level:3},{value:"Terminology and Concepts",id:"terminology-and-concepts",level:2},{value:"Review the high-level architecture of Kinesis Data Streams",id:"review-the-high-level-architecture-of-kinesis-data-streams",level:3}];function h(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"kinesis-data-streams",children:"Kinesis Data Streams"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/streams/latest/dev/introduction.html",children:"https://docs.aws.amazon.com/streams/latest/dev/introduction.html"})})})}),"\n",(0,t.jsx)(a.h2,{id:"what-is-amazon-kinesis-data-streams",children:"What is Amazon Kinesis Data Streams?"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["You can use Amazon Kinesis Data Streams to collect and process large streams of data records in real time. You can create data-processing applications, known as Kinesis Data Streams applications. A typical Kinesis Data Streams application reads data from a data stream as data records. These applications can use the Kinesis Client Library, and they can run on Amazon EC2 instances. You can send the processed records to dashboards, use them to generate alerts, dynamically change pricing and advertising strategies, or send data to a variety of other AWS services. For information about Kinesis Data Streams features and pricing, see ",(0,t.jsx)(a.a,{href:"https://aws.amazon.com/kinesis/streams/",children:(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Amazon Kinesis Data Streams"})})}),"."]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Amazon Kinesis Data Streams is a serverless streaming data service that makes it easy to capture, process, and store data streams at any scale."}),"\n",(0,t.jsx)("img",{src:"/img/aws/kinesis/Product-Page-Diagram_Amazon-Kinesis-Data-Streams-01.png",alt:"Product-Page-Diagram_Amazon-Kinesis-Data-Streams-01.png"}),"\n",(0,t.jsx)("br",{}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["Kinesis Data Streams is part of the Kinesis streaming data platform, along with ",(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/firehose/latest/dev/",children:(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Firehose"})})}),", ",(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/",children:(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Kinesis Video Streams"})})}),", and ",(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/kinesisanalytics/latest/dev/",children:(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Managed Service for Apache Flink"})})}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"what-can-i-do-with-kinesis-data-streams",children:"What can I do with Kinesis Data Streams?"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"You can use Kinesis Data Streams for rapid and continuous data intake and aggregation. The type of data used can include IT infrastructure log data, application logs, social media, market data feeds, and web clickstream data. Because the response time for the data intake and processing is in real time, the processing is typically lightweight."}),"\n",(0,t.jsx)(a.p,{children:"The following are typical scenarios for using Kinesis Data Streams:"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Accelerated log and data feed intake and processing"})}),(0,t.jsx)("br",{}),"\nYou can have producers push data directly into a stream. For example, push system and application logs and they are available for processing in seconds. This prevents the log data from being lost if the front end or application server fails. Kinesis Data Streams provides accelerated data feed intake because you don't batch the data on the servers before you submit it for intake."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Real-time metrics and reporting"})}),(0,t.jsx)("br",{}),"\nYou can use data collected into Kinesis Data Streams for simple data analysis and reporting in real time. For example, your data-processing application can work on metrics and reporting for system and application logs as the data is streaming in, rather than wait to receive batches of data."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Real-time data analytics"})}),(0,t.jsx)("br",{}),"\nThis combines the power of parallel processing with the value of real-time data. For example, process website clickstreams in real time, and then analyze site usability engagement using multiple different Kinesis Data Streams applications running in parallel."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Complex stream processing"})}),(0,t.jsx)("br",{}),"\nYou can create Directed Acyclic Graphs (DAGs) of Kinesis Data Streams applications and data streams. This typically involves putting data from multiple Kinesis Data Streams applications into another stream for downstream processing by a different Kinesis Data Streams application."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"terminology-and-concepts",children:"Terminology and Concepts"}),"\n",(0,t.jsx)(a.h3,{id:"review-the-high-level-architecture-of-kinesis-data-streams",children:"Review the high-level architecture of Kinesis Data Streams"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"The following diagram illustrates the high-level architecture of Kinesis Data Streams. The producers continually push data to Kinesis Data Streams, and the consumers process the data in real time. Consumers (such as a custom application running on Amazon EC2 or an Amazon Data Firehose delivery stream) can store their results using an AWS service such as Amazon DynamoDB, Amazon Redshift, or Amazon S3."}),"\n",(0,t.jsx)("img",{src:"/img/aws/kinesis/kinesis-architecture-01.png",alt:"kinesis-architecture-01.png"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Kinesis Data Stream"})})," ",(0,t.jsx)("br",{}),"\nA Kinesis data stream is a set of shards. Each shard has a sequence of data records. Each data record has a sequence number that is assigned by Kinesis Data Streams."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Data Record"})}),(0,t.jsx)("br",{}),"\nA data record is the unit of data stored in a Kinesis data stream. Data records are composed of a sequence number, a partition key, and a data blob, which is an immutable sequence of bytes. Kinesis Data Streams does not inspect, interpret, or change the data in the blob in any way. A data blob can be up to 1 MB."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Capacity Mode"})}),(0,t.jsx)("br",{}),"\nA data stream capacity mode determines how capacity is managed and how you are charged for the usage of your data stream. Currently, in Kinesis Data Streams, you can choose between an on-demand mode and a provisioned mode for your data streams. For more information, see Choose the data stream capacity mode."]}),"\n",(0,t.jsx)(a.p,{children:"With the on-demand mode, Kinesis Data Streams automatically manages the shards in order to provide the necessary throughput. You are charged only for the actual throughput that you use and Kinesis Data Streams automatically accommodates your workloads\u2019 throughput needs as they ramp up or down. For more information, see On-demand mode features and use cases."}),"\n",(0,t.jsx)(a.p,{children:"With the provisioned mode, you must specify the number of shards for the data stream. The total capacity of a data stream is the sum of the capacities of its shards. You can increase or decrease the number of shards in a data stream as needed and you are charged for the number of shards at an hourly rate. For more information, see Provisioned mode features and use cases."}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Retention Period"})}),(0,t.jsx)("br",{}),"\nThe retention period is the length of time that data records are accessible after they are added to the stream. A stream\u2019s retention period is set to a default of 24 hours after creation. You can increase the retention period up to 8760 hours (365 days) using the IncreaseStreamRetentionPeriod operation, and decrease the retention period down to a minimum of 24 hours using the DecreaseStreamRetentionPeriod operation. Additional charges apply for streams with a retention period set to more than 24 hours. For more information, see ",(0,t.jsx)(a.a,{href:"https://aws.amazon.com/kinesis/pricing/",children:(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Amazon Kinesis Data Streams Pricing"})})}),"."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Producer"})}),(0,t.jsx)("br",{}),"\nProducers put records into Amazon Kinesis Data Streams. For example, a web server sending log data to a stream is a producer."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Consumer"})}),(0,t.jsx)("br",{}),"\nConsumers get records from Amazon Kinesis Data Streams and process them. These consumers are known as Amazon Kinesis Data Streams Application."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Amazon Kinesis Data Streams Application"})}),(0,t.jsx)("br",{}),"\nAn Amazon Kinesis Data Streams application is a consumer of a stream that commonly runs on a fleet of EC2 instances."]}),"\n",(0,t.jsx)(a.p,{children:"There are two types of consumers that you can develop: shared fan-out consumers and enhanced fan-out consumers. To learn about the differences between them, and to see how you can create each type of consumer, see Read data from Amazon Kinesis Data Streams."}),"\n",(0,t.jsx)(a.p,{children:"The output of a Kinesis Data Streams application can be input for another stream, enabling you to create complex topologies that process data in real time. An application can also send data to a variety of other AWS services. There can be multiple applications for one stream, and each application can consume data from the stream independently and concurrently."}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Shard"})}),(0,t.jsx)("br",{}),"\nA shard is a uniquely identified sequence of data records in a stream. A stream is composed of one or more shards, each of which provides a fixed unit of capacity. Each shard can support up to 5 transactions per second for reads, up to a maximum total data read rate of 2 MB per second and up to 1,000 records per second for writes, up to a maximum total data write rate of 1 MB per second (including partition keys). The data capacity of your stream is a function of the number of shards that you specify for the stream. The total capacity of the stream is the sum of the capacities of its shards."]}),"\n",(0,t.jsx)(a.p,{children:"If your data rate increases, you can increase or decrease the number of shards allocated to your stream. For more information, see Reshard a stream."}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Partition Key"})}),(0,t.jsx)("br",{}),"\nA partition key is used to group data by shard within a stream. Kinesis Data Streams segregates the data records belonging to a stream into multiple shards. It uses the partition key that is associated with each data record to determine which shard a given data record belongs to. Partition keys are Unicode strings, with a maximum length limit of 256 characters for each key. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards using the hash key ranges of the shards. When an application puts data into a stream, it must specify a partition key."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Sequence Number"})}),(0,t.jsx)("br",{}),"\nEach data record has a sequence number that is unique per partition-key within its shard. Kinesis Data Streams assigns the sequence number after you write to the stream with client.putRecords or client.putRecord. Sequence numbers for the same partition key generally increase over time. The longer the time period between write requests, the larger the sequence numbers become."]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsx)(a.p,{children:"Sequence numbers cannot be used as indexes to sets of data within the same stream. To logically separate sets of data, use partition keys or create a separate stream for each dataset."})}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Kinesis Client Library"})}),(0,t.jsx)("br",{}),"\nThe Kinesis Client Library is compiled into your application to enable fault-tolerant consumption of data from the stream. The Kinesis Client Library ensures that for every shard there is a record processor running and processing that shard. The library also simplifies reading data from the stream. The Kinesis Client Library uses an Amazon DynamoDB table to store control data. It creates one table per application that is processing data."]}),"\n",(0,t.jsx)(a.p,{children:"There are two major versions of the Kinesis Client Library. Which one you use depends on the type of consumer you want to create. For more information, see Read data from Amazon Kinesis Data Streams."}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"Server-Side Encryption"})}),(0,t.jsx)("br",{}),"\nAmazon Kinesis Data Streams can automatically encrypt sensitive data as a producer enters it into a stream. Kinesis Data Streams uses ",(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/kms/latest/developerguide/",children:(0,t.jsx)(a.em,{children:(0,t.jsx)(a.strong,{children:"AWS KMS"})})})," master keys for encryption. For more information, see Data protection in Amazon Kinesis Data Streams."]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsx)(a.p,{children:"To read from or write to an encrypted stream, producer and consumer applications must have permission to access the master key. For information about granting permissions to producer and consumer applications, see Permissions to use user-generated KMS keys."})}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsx)(a.p,{children:"Using server-side encryption incurs AWS Key Management Service (AWS KMS) costs. For more information, see AWS Key Management Service Pricing."})}),"\n"]}),"\n","\n",(0,t.jsx)(r.A,{items:(0,i.$S)().items})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3514:(e,a,s)=>{s.d(a,{A:()=>j});s(6540);var t=s(4164),n=s(6972),r=s(8774),i=s(5846),o=s(6654),c=s(1312),d=s(1107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=s(4848);function h(e){let{href:a,children:s}=e;return(0,m.jsx)(r.A,{href:a,className:(0,t.A)("card padding--lg",l.cardContainer),children:s})}function u(e){let{href:a,icon:s,title:n,description:r}=e;return(0,m.jsxs)(h,{href:a,children:[(0,m.jsxs)(d.A,{as:"h2",className:(0,t.A)("text--truncate",l.cardTitle),title:n,children:[s," ",n]}),r&&(0,m.jsx)("p",{className:(0,t.A)("text--truncate",l.cardDescription),title:r,children:r})]})}function p(e){let{item:a}=e;const s=(0,n.Nr)(a),t=function(){const{selectMessage:e}=(0,i.W)();return a=>e(a,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a}))}();return s?(0,m.jsx)(u,{href:s,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:a.description??t(a.items.length)}):null}function f(e){let{item:a}=e;const s=(0,o.A)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,n.cC)(a.docId??void 0);return(0,m.jsx)(u,{href:a.href,icon:s,title:a.label,description:a.description??t?.description})}function g(e){let{item:a}=e;switch(a.type){case"link":return(0,m.jsx)(f,{item:a});case"category":return(0,m.jsx)(p,{item:a});default:throw new Error(`unknown item type ${JSON.stringify(a)}`)}}function x(e){let{className:a}=e;const s=(0,n.$S)();return(0,m.jsx)(j,{items:s.items,className:a})}function j(e){const{items:a,className:s}=e;if(!a)return(0,m.jsx)(x,{...e});const r=(0,n.d1)(a);return(0,m.jsx)("section",{className:(0,t.A)("row",s),children:r.map(((e,a)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(g,{item:e})},a)))})}},5846:(e,a,s)=>{s.d(a,{W:()=>d});var t=s(6540),n=s(4586);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((a=>e.includes(a)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,t.useMemo)((()=>{try{return function(e){const a=new Intl.PluralRules(e);return{locale:e,pluralForms:i(a.resolvedOptions().pluralCategories),select:e=>a.select(e)}}(e)}catch(a){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${a.message}\n`),o}}),[e])}function d(){const e=c();return{selectMessage:(a,s)=>function(e,a,s){const t=e.split("|");if(1===t.length)return t[0];t.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const n=s.select(a),r=s.pluralForms.indexOf(n);return t[Math.min(r,t.length-1)]}(s,a,e)}}},8453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>o});var t=s(6540);const n={},r=t.createContext(n);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);