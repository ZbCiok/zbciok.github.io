"use strict";(self.webpackChunkjreact_com_docsaurus_01=self.webpackChunkjreact_com_docsaurus_01||[]).push([[5286],{8846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var a=t(4848),r=t(8453),s=t(3514),i=t(5068);const c={sidebar_position:20},o="ddb-delete-table-example-01",l={id:"aws/dynamodb/examples/ddb-delete-table-example-01",title:"ddb-delete-table-example-01",description:"Description",source:"@site/docs/aws/dynamodb/examples/ddb-delete-table-example-01.mdx",sourceDirName:"aws/dynamodb/examples",slug:"/aws/dynamodb/examples/ddb-delete-table-example-01",permalink:"/docs/aws/dynamodb/examples/ddb-delete-table-example-01",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"ddb-write-read-example-01",permalink:"/docs/aws/dynamodb/examples/ddb-write-read-example-01"},next:{title:"ddb-enh-client-spring-boot-1",permalink:"/docs/aws/dynamodb/examples/ddb-enh-client-spring-boot-1"}},d={},p=[{value:"Description",id:"description",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run LocalStack",id:"run-localstack",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"pom.xml",id:"pomxml",level:3},{value:"DynamoDBService.java",id:"dynamodbservicejava",level:3},{value:"Running and Testing",id:"running-and-testing",level:2},{value:"Output:",id:"output",level:4},{value:"Source Code",id:"source-code",level:2}];function m(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"ddb-delete-table-example-01",children:"ddb-delete-table-example-01"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This example's purpose is to support the LocalStack on using the platform with Java AWS applications."}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://maven.apache.org/install.html",children:"Maven 3.8.5+"})," & ",(0,a.jsx)(n.a,{href:"https://www.java.com/en/download/help/download_options.html",children:"Java 17"})]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://localstack.cloud/",children:"LocalStack"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})," - for running LocalStack"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://aws.amazon.com/cli/",children:"AWS CLI"})," and ",(0,a.jsx)(n.a,{href:"https://docs.localstack.cloud/user-guide/integrations/aws-cli/#localstack-aws-cli-awslocal",children:"awslocal"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"run-localstack",children:"Run LocalStack"}),"\n",(0,a.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:".\n\u251c\u2500\u2500 pom.xml\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 main\n        \u251c\u2500\u2500 java\n        \u2502\xa0\xa0 \u2514\u2500\u2500 v2\n        \u2502\xa0\xa0     \u2514\u2500\u2500 dynamodb\n        \u2502\xa0\xa0         \u2514\u2500\u2500 DynamoDBService.java\n        \u2514\u2500\u2500 resources\n"})}),"\n",(0,a.jsx)(n.h3,{id:"pomxml",children:"pom.xml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>cloud.localstack</groupId>\n  <artifactId>ddb-delete-table-example-01</artifactId>\n  <version>1.0-SNAPSHOT</version>\n\n  <properties>\n    <maven.compiler.source>17</maven.compiler.source>\n    <maven.compiler.target>17</maven.compiler.target>\n    <exec.cleanupDaemonThreads>false</exec.cleanupDaemonThreads>\n  </properties>\n\n  <dependencies>\n    <dependency>\n      <groupId>software.amazon.awssdk</groupId>\n      <artifactId>dynamodb-enhanced</artifactId>\n    </dependency>\n    <dependency>\n      <groupId>software.amazon.awssdk</groupId>\n      <artifactId>dynamodb</artifactId>\n    </dependency>\n\n\x3c!--     <dependency>--\x3e\n\x3c!--          <groupId>ch.qos.logback</groupId>--\x3e\n\x3c!--          <artifactId>logback-classic</artifactId>--\x3e\n\x3c!--          <version>1.4.14</version>--\x3e\n\x3c!--     </dependency>--\x3e\n  </dependencies>\n\n  <dependencyManagement>\n    <dependencies>\n      <dependency>\n        <groupId>software.amazon.awssdk</groupId>\n        <artifactId>bom</artifactId>\n        <version>2.20.47</version>\n        <type>pom</type>\n        <scope>import</scope>\n      </dependency>\n    </dependencies>\n  </dependencyManagement>\n</project>\n'})}),"\n",(0,a.jsx)(n.h3,{id:"dynamodbservicejava",children:"DynamoDBService.java"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'package v2.dynamodb;\n\nimport java.net.URI;\nimport java.text.ParseException;\nimport software.amazon.awssdk.auth.credentials.AwsBasicCredentials;\nimport software.amazon.awssdk.auth.credentials.AwsCredentialsProvider;\nimport software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;\nimport software.amazon.awssdk.regions.Region;\nimport software.amazon.awssdk.services.dynamodb.DynamoDbClient;\nimport software.amazon.awssdk.services.dynamodb.model.*;\n\n\npublic class DynamoDBService {\n\n  // credentials that can be replaced with real AWS values\n  private static final String ACCESS_KEY = "test";\n  private static final String SECRET_KEY = "test";\n  private static String TABLE_NAME = "person";\n  private static AwsCredentialsProvider credentials = StaticCredentialsProvider.create(\n      AwsBasicCredentials.create(ACCESS_KEY, SECRET_KEY));\n\n  // create the dynamoDB client using the credentials and specific region\n  private static Region region = Region.US_EAST_1;\n\n  // create a dynamoDB client\n  private static DynamoDbClient dynamoDbClient = DynamoDbClient.builder()\n      .region(region)\n      .credentialsProvider(\n          credentials)\n      .endpointOverride(URI.create("https://localhost.localstack.cloud:4566"))\n      .build();\n\n  public static void main(String[] args) throws ParseException {\n    deleteTable(dynamoDbClient, "person");\n  }\n\n  public static void deleteTable(DynamoDbClient ddb, String tableName) {\n    DeleteTableRequest request = DeleteTableRequest.builder()\n            .tableName(tableName)\n            .build();\n\n    try {\n      ddb.deleteTable(request);\n\n    } catch (DynamoDbException e) {\n      System.err.println(e.getMessage());\n      System.exit(1);\n    }\n    System.out.println(tableName + " was successfully deleted!");\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"running-and-testing",children:"Running and Testing"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"mvn clean package\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'mvn exec:java -Dexec.mainClass="v2.dynamodb.DynamoDBService"\n'})}),"\n",(0,a.jsx)(n.h4,{id:"output",children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"person was successfully deleted!\n"})}),"\n",(0,a.jsx)(n.h2,{id:"source-code",children:"Source Code"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://github.com/ZbCiok/zjc-examples/tree/main/aws/aws/dynamodb/ddb-delete-table-example-01",children:"https://github.com/ZbCiok/zjc-examples/tree/main/aws/aws/dynamodb/ddb-delete-table-example-01"})})})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n","\n",(0,a.jsx)(s.A,{items:(0,i.$S)().items})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},3514:(e,n,t)=>{t.d(n,{A:()=>v});t(6540);var a=t(4164),r=t(6972),s=t(8774),i=t(5846),c=t(6654),o=t(1312),l=t(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=t(4848);function m(e){let{href:n,children:t}=e;return(0,p.jsx)(s.A,{href:n,className:(0,a.A)("card padding--lg",d.cardContainer),children:t})}function u(e){let{href:n,icon:t,title:r,description:s}=e;return(0,p.jsxs)(m,{href:n,children:[(0,p.jsxs)(l.A,{as:"h2",className:(0,a.A)("text--truncate",d.cardTitle),title:r,children:[t," ",r]}),s&&(0,p.jsx)("p",{className:(0,a.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function h(e){let{item:n}=e;const t=(0,r.Nr)(n),a=function(){const{selectMessage:e}=(0,i.W)();return n=>e(n,(0,o.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,p.jsx)(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??a(n.items.length)}):null}function x(e){let{item:n}=e;const t=(0,c.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.cC)(n.docId??void 0);return(0,p.jsx)(u,{href:n.href,icon:t,title:n.label,description:n.description??a?.description})}function b(e){let{item:n}=e;switch(n.type){case"link":return(0,p.jsx)(x,{item:n});case"category":return(0,p.jsx)(h,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function g(e){let{className:n}=e;const t=(0,r.$S)();return(0,p.jsx)(v,{items:t.items,className:n})}function v(e){const{items:n,className:t}=e;if(!n)return(0,p.jsx)(g,{...e});const s=(0,r.d1)(n);return(0,p.jsx)("section",{className:(0,a.A)("row",t),children:s.map(((e,n)=>(0,p.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.jsx)(b,{item:e})},n)))})}},5846:(e,n,t)=>{t.d(n,{W:()=>l});var a=t(6540),r=t(4586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((n=>e.includes(n)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,a.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:i(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),c}}),[e])}function l(){const e=o();return{selectMessage:(n,t)=>function(e,n,t){const a=e.split("|");if(1===a.length)return a[0];a.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=t.select(n),s=t.pluralForms.indexOf(r);return a[Math.min(s,a.length-1)]}(t,n,e)}}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var a=t(6540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);