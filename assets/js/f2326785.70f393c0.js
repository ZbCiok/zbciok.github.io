"use strict";(self.webpackChunkjreact_com_docsaurus_01=self.webpackChunkjreact_com_docsaurus_01||[]).push([[828],{2114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=t(4848),s=t(8453),r=t(3514),i=t(5068);const o={sidebar_position:30},c="SNS Trigger Lambda",l={id:"aws/aws-lambda/examples/sns-trigger-lambda",title:"SNS Trigger Lambda",description:"Amazon Simple Notification Service (Amazon SNS) is a web service that makes it easy to set up, operate, and send notifications from the cloud.",source:"@site/docs/aws/aws-lambda/examples/sns-trigger-lambda.mdx",sourceDirName:"aws/aws-lambda/examples",slug:"/aws/aws-lambda/examples/sns-trigger-lambda",permalink:"/docs/aws/aws-lambda/examples/sns-trigger-lambda",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"The First Lambda Example",permalink:"/docs/aws/aws-lambda/examples/first-aws-lambda-example"},next:{title:"S3 Trigger Lambda",permalink:"/docs/aws/aws-lambda/examples/s3-trigger-lambda"}},d={},m=[{value:"Description",id:"description",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run LocalStack",id:"run-localstack",level:2},{value:"Create Lambda",id:"create-lambda",level:2},{value:"Project Structure",id:"project-structure",level:3},{value:"pom.xml",id:"pomxml",level:3},{value:"SnsRequestHandler.java",id:"snsrequesthandlerjava",level:3},{value:"Deploy Lambda Function",id:"deploy-lambda-function",level:3},{value:"<em><strong>mvn clean package</strong></em>",id:"mvn-clean-package",level:4},{value:"SNS Create a topic",id:"sns-create-a-topic",level:2},{value:"Creating a subscription",id:"creating-a-subscription",level:2},{value:"Publish a SNS event &amp; Invoke the Lambda",id:"publish-a-sns-event--invoke-the-lambda",level:2},{value:"Verify if the Lambda was invoked",id:"verify-if-the-lambda-was-invoked",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"sns-trigger-lambda",children:"SNS Trigger Lambda"})}),"\n",(0,a.jsx)(n.p,{children:"Amazon Simple Notification Service (Amazon SNS) is a web service that makes it easy to set up, operate, and send notifications from the cloud."}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)("img",{src:"/img/aws/lambda/sns-lambda-log-01.png",alt:"sns-lambda-log-01.png"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(n.p,{children:["We\u2019ll show how you can invoke an AWS Lambda through an SNS subscription using LocalStack.\nWhen Amazon SNS invokes a Lambda function asynchronously, Lambda returns a 202 HTTP status code back to Amazon SNS. The status code shows that Lambda has accepted the message for later processing. For more information, see ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html",children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Asynchronous invocation"})})}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"JDK 21"}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://maven.apache.org/install.html",children:"Maven 3.8.5+"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://localstack.cloud/",children:"LocalStack"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})," - for running LocalStack"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://aws.amazon.com/cli/",children:"AWS CLI"})," and ",(0,a.jsx)(n.a,{href:"https://docs.localstack.cloud/user-guide/integrations/aws-cli/#localstack-aws-cli-awslocal",children:"awslocal"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"run-localstack",children:"Run LocalStack"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'version: \'3.8\'\n\nservices:\n  localstack:\n    image: localstack/localstack\n    container_name: localstack_main\n    ports:\n      - "4566-4599:4566-4599"\n    environment:\n      - SERVICES=sns,s3,sqs,dynamodb,ses,lambda,logs,stepfunctions\n      - DYNAMODB_SHARE_DB=1\n      - DEBUG=1\n      - DATA_DIR=/tmp/localstack/data\n      - DOCKER_HOST=unix:///var/run/docker.sock\n    volumes:\n      - "${LOCALSTACK_VOLUME_DIR:-./volume}:/var/lib/localstack"\n      - "/var/run/docker.sock:/var/run/docker.sock"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"create-lambda",children:"Create Lambda"}),"\n",(0,a.jsxs)(n.p,{children:["Source Code: ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://github.com/ZbCiok/zjc-examples/tree/main/aws/aws/lambda/sns-trigger-lambda",children:"https://github.com/ZbCiok/zjc-examples/tree/main/aws/aws/lambda/sns-trigger-lambda"})})})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.h3,{id:"project-structure",children:"Project Structure"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:".\n\u251c\u2500\u2500 pom.xml\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 main\n    \u2502\xa0\xa0 \u251c\u2500\u2500 java\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 com\n    \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 example\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 Main.java\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 SnsRequestHandler.java\n    \u2502\xa0\xa0 \u2514\u2500\u2500 resources\n    \u2514\u2500\u2500 test\n        \u2514\u2500\u2500 java\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.h3,{id:"pomxml",children:"pom.xml"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n\t\t\t\t xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n\t\t\t\t xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n\t<modelVersion>4.0.0</modelVersion>\n\n\t<groupId>com.example</groupId>\n\t<artifactId>sns-trigger-lambda</artifactId>\n\t<version>0.0.1</version>\n\n\t<properties>\n\t\t<encoding>UTF-8</encoding>\n\t\t<project.build.sourceEncoding>${encoding}</project.build.sourceEncoding>\n\t\t<project.reporting.outputEncoding>${encoding}</project.reporting.outputEncoding>\n\t\t<java.version>21</java.version>\n\t\t<maven.compiler.source>${java.version}</maven.compiler.source>\n\t\t<maven.compiler.target>${java.version}</maven.compiler.target>\n\t</properties>\n\n\t<dependencies>\n\t\t<dependency>\n\t\t\t<groupId>com.amazonaws</groupId>\n\t\t\t<artifactId>aws-lambda-java-core</artifactId>\n\t\t\t<version>1.2.3</version>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>com.amazonaws</groupId>\n\t\t\t<artifactId>aws-lambda-java-events</artifactId>\n\t\t\t<version>3.11.4</version>\n\t\t</dependency>\n\n\t\t<dependency>\n\t\t\t<groupId>org.projectlombok</groupId>\n\t\t\t<artifactId>lombok</artifactId>\n\t\t\t<version>1.18.34</version>\n\t\t\t<scope>provided</scope>\n\t\t</dependency>\n\t</dependencies>\n\n\t<build>\n\t\t<plugins>\n\t\t\t<plugin>\n\t\t\t\t<groupId>org.apache.maven.plugins</groupId>\n\t\t\t\t<artifactId>maven-shade-plugin</artifactId>\n\t\t\t\t<version>3.5.1</version>\n\t\t\t\t<configuration>\n\t\t\t\t\t<createDependencyReducedPom>false</createDependencyReducedPom>\n\t\t\t\t</configuration>\n\t\t\t\t<executions>\n\t\t\t\t\t<execution>\n\t\t\t\t\t\t<phase>package</phase>\n\t\t\t\t\t\t<goals>\n\t\t\t\t\t\t\t<goal>shade</goal>\n\t\t\t\t\t\t</goals>\n\t\t\t\t\t</execution>\n\t\t\t\t</executions>\n\t\t\t</plugin>\n\t\t</plugins>\n\t</build>\n\n</project>\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.h3,{id:"snsrequesthandlerjava",children:"SnsRequestHandler.java"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'package com.example;\n\nimport com.amazonaws.services.lambda.runtime.Context;\nimport com.amazonaws.services.lambda.runtime.LambdaLogger;\nimport com.amazonaws.services.lambda.runtime.RequestHandler;\nimport com.amazonaws.services.lambda.runtime.events.SNSEvent;\n\nimport java.util.List;\nimport com.amazonaws.services.lambda.runtime.events.SNSEvent.SNSRecord;\nimport lombok.extern.java.Log;\n\nimport java.util.Iterator;\n\n@Log\npublic class SnsRequestHandler implements RequestHandler<SNSEvent, Boolean> {\n    LambdaLogger logger;\n\n    @Override\n    public Boolean handleRequest(SNSEvent event, Context context) {\n        log.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");\n        logger = context.getLogger();\n        List<SNSRecord> records = event.getRecords();\n        if (!records.isEmpty()) {\n            Iterator<SNSRecord> recordsIter = records.iterator();\n            while (recordsIter.hasNext()) {\n                processRecord(recordsIter.next());\n            }\n        }\n        return Boolean.TRUE;\n    }\n\n    public void processRecord(SNSRecord record) {\n        try {\n            String message = record.getSNS().getMessage();\n            logger.log("message: " + message);\n        } catch (Exception e) {\n            throw new RuntimeException(e);\n        }\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.h3,{id:"deploy-lambda-function",children:"Deploy Lambda Function"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.h4,{id:"mvn-clean-package",children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"mvn clean package"})})}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Create Function"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"awslocal lambda create-function \\\n    --region us-east-1 \\\n    --function-name localstack-lambda-sns \\\n    --runtime java21 \\\n    --zip-file fileb://sns-trigger-lambda-0.0.1.jar \\\n    --handler com.example.SnsRequestHandler \\\n    --role arn:aws:iam::000000000000:role/example-lambda-noop-role \\\n    --timeout 120\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["zip-file fileb://localstack-lambda-sns-0.0.1.jar  - generated by ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"mvn clean package"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"sns-create-a-topic",children:"SNS Create a topic"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"awslocal sns create-topic --name example-topic --region us-east-1\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"awslocal sns list-topics\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "Topics": [\n        {\n            "TopicArn": "arn:aws:sns:us-east-1:000000000000:example-topic"\n        }\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-subscription",children:"Creating a subscription"}),"\n",(0,a.jsxs)(n.p,{children:["Let\u2019s create a subscription on the ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"example-topic"})}),". This will trigger the Lambda when we publish an event to the topic."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"awslocal sns subscribe \\\n--region us-east-1 \\\n--protocol lambda \\\n--topic-arn arn:aws:sns:us-east-1:000000000000:example-topic \\\n--notification-endpoint arn:aws:lambda:us-east-1:000000000000:function:localstack-lambda-sns\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"awslocal sns list-subscriptions\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "Subscriptions": [\n        {\n            "SubscriptionArn": "arn:aws:sns:us-east-1:000000000000:example-topic:ae242544-2b1a-4ba8-a324-a024b73bc1cf",\n            "Owner": "000000000000",\n            "Protocol": "lambda",\n            "Endpoint": "arn:aws:lambda:us-east-1:000000000000:function:localstack-lambda-sns",\n            "TopicArn": "arn:aws:sns:us-east-1:000000000000:example-topic"\n        }\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"publish-a-sns-event--invoke-the-lambda",children:"Publish a SNS event & Invoke the Lambda"}),"\n",(0,a.jsx)(n.p,{children:"Publish an event to the topic:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'awslocal sns publish \\\n--region us-east-1 \\\n--topic-arn arn:aws:sns:us-east-1:000000000000:example-topic \\\n--message "Hello Lambda..........!"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"verify-if-the-lambda-was-invoked",children:"Verify if the Lambda was invoked"}),"\n",(0,a.jsx)(n.p,{children:"Docker Log:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\n...\nlocalstack_main  | 2024-09-26T07:24:51.088 DEBUG --- [ns:$LATEST_0] l.s.l.i.version_manager    : [localstack-lambda-sns-43f017bb-ee5d-49c4-a5b6-922da7d48ee5] Sep 26, 2024 7:24:51 AM com.example.SnsRequestHandler handleRequest\nlocalstack_main  | 2024-09-26T07:24:51.088 DEBUG --- [ns:$LATEST_0] l.s.l.i.version_manager    : [localstack-lambda-sns-43f017bb-ee5d-49c4-a5b6-922da7d48ee5] INFO: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\nlocalstack_main  | 2024-09-26T07:24:51.088 DEBUG --- [ns:$LATEST_0] l.s.l.i.version_manager    : [localstack-lambda-sns-43f017bb-ee5d-49c4-a5b6-922da7d48ee5] message: Hello Lambda..........!END RequestId: 43f017bb-ee5d-49c4-a5b6-922da7d48ee5\n...\n"})}),"\n",(0,a.jsx)(n.p,{children:"Notice:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"INFO: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\nmessage: Hello Lambda..........!\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\nlocalstack-main  | 2024-09-20T10:38:43.258  INFO --- [et.reactor-1] localstack.request.http  /\n  : POST /_localstack_lambda/537e999fe486e7d46879e3fafcf1dc73/invocations/bb479d30-62d8-40b9-8798-5f393c2a9644/response => 202\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"response => 202"})}),(0,a.jsx)("br",{}),"\nFor asynchronous invocation, Lambda places the event in a queue and returns a success response without additional information. A separate process reads events from the queue and sends them to your function."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n","\n",(0,a.jsx)(r.A,{items:(0,i.$S)().items})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},3514:(e,n,t)=>{t.d(n,{A:()=>j});t(6540);var a=t(4164),s=t(6972),r=t(8774),i=t(5846),o=t(6654),c=t(1312),l=t(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=t(4848);function u(e){let{href:n,children:t}=e;return(0,m.jsx)(r.A,{href:n,className:(0,a.A)("card padding--lg",d.cardContainer),children:t})}function p(e){let{href:n,icon:t,title:s,description:r}=e;return(0,m.jsxs)(u,{href:n,children:[(0,m.jsxs)(l.A,{as:"h2",className:(0,a.A)("text--truncate",d.cardTitle),title:s,children:[t," ",s]}),r&&(0,m.jsx)("p",{className:(0,a.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function h(e){let{item:n}=e;const t=(0,s.Nr)(n),a=function(){const{selectMessage:e}=(0,i.W)();return n=>e(n,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,m.jsx)(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??a(n.items.length)}):null}function g(e){let{item:n}=e;const t=(0,o.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,s.cC)(n.docId??void 0);return(0,m.jsx)(p,{href:n.href,icon:t,title:n.label,description:n.description??a?.description})}function x(e){let{item:n}=e;switch(n.type){case"link":return(0,m.jsx)(g,{item:n});case"category":return(0,m.jsx)(h,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function b(e){let{className:n}=e;const t=(0,s.$S)();return(0,m.jsx)(j,{items:t.items,className:n})}function j(e){const{items:n,className:t}=e;if(!n)return(0,m.jsx)(b,{...e});const r=(0,s.d1)(n);return(0,m.jsx)("section",{className:(0,a.A)("row",t),children:r.map(((e,n)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(x,{item:e})},n)))})}},5846:(e,n,t)=>{t.d(n,{W:()=>l});var a=t(6540),s=t(4586);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((n=>e.includes(n)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,a.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:i(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),o}}),[e])}function l(){const e=c();return{selectMessage:(n,t)=>function(e,n,t){const a=e.split("|");if(1===a.length)return a[0];a.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const s=t.select(n),r=t.pluralForms.indexOf(s);return a[Math.min(r,a.length-1)]}(t,n,e)}}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(6540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);