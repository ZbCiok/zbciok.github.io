"use strict";(self.webpackChunkjreact_com_docsaurus_01=self.webpackChunkjreact_com_docsaurus_01||[]).push([[2771],{9537:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>p});var s=r(4848),a=r(8453);const t={sidebar_position:20},i="Schema Registry Spring Boot",o={id:"messaging/kafka/examples/schema-registry-spring-boot",title:"Schema Registry Spring Boot",description:"Description",source:"@site/docs/messaging/kafka/examples/schema-registry-spring-boot.mdx",sourceDirName:"messaging/kafka/examples",slug:"/messaging/kafka/examples/schema-registry-spring-boot",permalink:"/docs/messaging/kafka/examples/schema-registry-spring-boot",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/docs/messaging/kafka/examples"},next:{title:"Kafka Avro 1",permalink:"/docs/messaging/kafka/examples/kafka-avro-1"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Secrets",id:"secrets",level:3},{value:"pom.xml",id:"pomxml",level:3},{value:"Avro schema",id:"avro-schema",level:3},{value:"Run Example",id:"run-example",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"schema-registry-spring-boot",children:"Schema Registry Spring Boot"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)("img",{src:"/img/messaging/kafka/schema-registry-spring-boot-01.png",width:"300 px",alt:"schema-registry-spring-boot-01.png"}),"\n",(0,s.jsx)(n.p,{children:"The purpose of the Example is to configure a basic Kafka producer and consumer that will produce and consume messages from the same topic, using a pre defined avro schema for the message sent."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Linux"}),"\n",(0,s.jsx)(n.li,{children:"JDK 21"}),"\n",(0,s.jsx)(n.li,{children:"Maven"}),"\n",(0,s.jsx)(n.li,{children:"Docker"}),"\n",(0,s.jsx)(n.li,{children:"Spring Boot"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:".\n\u251c\u2500\u2500 docker\n\u2502\xa0\xa0 \u251c\u2500\u2500 docker-compose.yml\n\u2502\xa0\xa0 \u251c\u2500\u2500 generate_certificates.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 kafka\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 secrets\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 kafka.keystore.jks\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 kafka_secret.txt\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 kafka.truststore.jks\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 schema-registry.keystore.jks\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 schema-registry.truststore.jks\n\u2502\xa0\xa0 \u2514\u2500\u2500 kafka-demo-app\n\u2502\xa0\xa0     \u251c\u2500\u2500 docker-entrypoint.sh\n\u2502\xa0\xa0     \u2514\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 pom.xml\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 main\n    \u2502\xa0\xa0 \u251c\u2500\u2500 java\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 com\n    \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 kafka\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 demo\n    \u2502\xa0\xa0 \u2502\xa0\xa0             \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2502\xa0\xa0             \u2502\xa0\xa0 \u251c\u2500\u2500 KafkaConsumerConfig.java\n    \u2502\xa0\xa0 \u2502\xa0\xa0             \u2502\xa0\xa0 \u2514\u2500\u2500 KafkaProducerConfig.java\n    \u2502\xa0\xa0 \u2502\xa0\xa0             \u251c\u2500\u2500 consumer\n    \u2502\xa0\xa0 \u2502\xa0\xa0             \u2502\xa0\xa0 \u2514\u2500\u2500 KafkaConsumer.java\n    \u2502\xa0\xa0 \u2502\xa0\xa0             \u251c\u2500\u2500 DemoApplication.java\n    \u2502\xa0\xa0 \u2502\xa0\xa0             \u251c\u2500\u2500 KafkaRunner.java\n    \u2502\xa0\xa0 \u2502\xa0\xa0             \u251c\u2500\u2500 producer\n    \u2502\xa0\xa0 \u2502\xa0\xa0             \u2502\xa0\xa0 \u2514\u2500\u2500 KafkaProducer.java\n    \u2502\xa0\xa0 \u2502\xa0\xa0             \u2514\u2500\u2500 properties\n    \u2502\xa0\xa0 \u2502\xa0\xa0                 \u2514\u2500\u2500 KafkaCustomProperties.java\n    \u2502\xa0\xa0 \u2514\u2500\u2500 resources\n    \u2502\xa0\xa0     \u251c\u2500\u2500 application.properties\n    \u2502\xa0\xa0     \u251c\u2500\u2500 avro\n    \u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 TransactionEvent.avsc\n    \u2502\xa0\xa0     \u251c\u2500\u2500 server-keystore.jks\n    \u2502\xa0\xa0     \u2514\u2500\u2500 server-truststore.jks\n    \u2514\u2500\u2500 test\n        \u2514\u2500\u2500 java\n            \u2514\u2500\u2500 com\n                \u2514\u2500\u2500 kafka\n                    \u2514\u2500\u2500 demo\n                        \u2514\u2500\u2500 DemoApplicationTests.java\n"})}),"\n",(0,s.jsx)(n.h3,{id:"secrets",children:"Secrets"}),"\n",(0,s.jsxs)(n.p,{children:["Copy ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"resources/server-keystore.jks"})}),", ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"server-truststore.jks"})})," to ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"/var/kafka-demo-app/conf"})})]}),"\n",(0,s.jsx)(n.h3,{id:"pomxml",children:"pom.xml"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n\txsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">\n\t<modelVersion>4.0.0</modelVersion>\n\t<parent>\n\t\t<groupId>org.springframework.boot</groupId>\n\t\t<artifactId>spring-boot-starter-parent</artifactId>\n\t\t<version>3.2.3</version>\n\t</parent>\n\t<groupId>com.kafka</groupId>\n\t<artifactId>demo</artifactId>\n\t<version>0.0.1-SNAPSHOT</version>\n\t<name>demo</name>\n\t<description>POC for producing and consuming kakfa messages in a spring-boot app</description>\n\t<properties>\n\t\t<java.version>21</java.version>\n\t\t<avro-maven-plugin.version>1.11.0</avro-maven-plugin.version>\n\t\t<kafka-avro-serializer.version>7.5.1</kafka-avro-serializer.version>\n\t\t<apache-avro.version>1.11.3</apache-avro.version>\n\t\t<maven.compiler.source>21</maven.compiler.source>\n\t\t<maven.compiler.target>21</maven.compiler.target>\n\t</properties>\n\t<dependencies>\n\t\t<dependency>\n\t\t\t<groupId>org.springframework.boot</groupId>\n\t\t\t<artifactId>spring-boot-starter-web</artifactId>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.springframework.kafka</groupId>\n\t\t\t<artifactId>spring-kafka</artifactId>\n\t\t</dependency>\n\n\t\t\x3c!-- Avro schema related dependencies for serialization/deserialization --\x3e\n\t\t<dependency>\n\t\t\t<groupId>org.apache.avro</groupId>\n\t\t\t<artifactId>avro</artifactId>\n\t\t\t<version>${apache-avro.version}</version>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>io.confluent</groupId>\n\t\t\t<artifactId>kafka-avro-serializer</artifactId>\n\t\t\t<version>${kafka-avro-serializer.version}</version>\n\t\t</dependency>\n\n\t\t<dependency>\n\t\t\t<groupId>org.projectlombok</groupId>\n\t\t\t<artifactId>lombok</artifactId>\n\t\t\t<optional>true</optional>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.springframework.boot</groupId>\n\t\t\t<artifactId>spring-boot-starter-test</artifactId>\n\t\t\t<scope>test</scope>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.springframework.kafka</groupId>\n\t\t\t<artifactId>spring-kafka-test</artifactId>\n\t\t\t<scope>test</scope>\n\t\t</dependency>\n\t</dependencies>\n\n\t<build>\n\t\t<finalName>kafka-demo-app-${project.version}</finalName>\n\t\t<sourceDirectory>src/main/java</sourceDirectory>\n\t\t<testSourceDirectory>src/test/java</testSourceDirectory>\n\t\t<plugins>\n\t\t\t<plugin>\n\t\t\t\t<groupId>org.springframework.boot</groupId>\n\t\t\t\t<artifactId>spring-boot-maven-plugin</artifactId>\n\t\t\t\t<configuration>\n\t\t\t\t\t<layout>ZIP</layout>\n\t\t\t\t\t<executable>true</executable>\n\t\t\t\t\t<excludes>\n\t\t\t\t\t\t<exclude>\n\t\t\t\t\t\t\t<groupId>org.projectlombok</groupId>\n\t\t\t\t\t\t\t<artifactId>lombok</artifactId>\n\t\t\t\t\t\t</exclude>\n\t\t\t\t\t</excludes>\n\t\t\t\t</configuration>\n\t\t\t</plugin>\n\n\t\t\t\x3c!-- avro-maven-plugin --\x3e\n\t\t\t<plugin>\n\t\t\t\t<groupId>org.apache.avro</groupId>\n\t\t\t\t<artifactId>avro-maven-plugin</artifactId>\n\t\t\t\t<version>${avro-maven-plugin.version}</version>\n\t\t\t\t<executions>\n\t\t\t\t\t<execution>\n\t\t\t\t\t\t<id>avro</id>\n\t\t\t\t\t\t<phase>generate-sources</phase>\n\t\t\t\t\t\t<goals>\n\t\t\t\t\t\t\t<goal>schema</goal>\n\t\t\t\t\t\t</goals>\n\t\t\t\t\t\t<configuration>\n\t\t\t\t\t\t\t<sourceDirectory>${project.basedir}/src/main/resources/avro/</sourceDirectory>\n\t\t\t\t\t\t\t<outputDirectory>${project.basedir}/src/main/java</outputDirectory>\n\t\t\t\t\t\t\t<stringType>String</stringType>\n\t\t\t\t\t\t</configuration>\n\t\t\t\t\t</execution>\n\t\t\t\t</executions>\n\t\t\t</plugin>\n\t\t</plugins>\n\t</build>\n\t<repositories>\n\t\t<repository>\n\t\t\t<id>confluent</id>\n\t\t\t<name>confluent</name>\n\t\t\t<url>https://packages.confluent.io/maven/</url>\n\t\t\t<layout>default</layout>\n\t\t</repository>\n\t</repositories>\n</project>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Notice in pom.xml"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\x3c!-- Avro schema related dependencies for serialization/deserialization --\x3e\nand\n\x3c!-- avro-maven-plugin --\x3e\n"})}),"\n",(0,s.jsx)(n.h3,{id:"avro-schema",children:"Avro schema"}),"\n",(0,s.jsxs)(n.p,{children:["We use a ",(0,s.jsx)(n.strong,{children:"avro"})," schema called ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"TransactionEvent"})})," of type \u201crecord\u201d in ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:".avsc"})})," format which needs to be placed under ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"src/main/resources/avro"})}),". Based on the structure of this file, the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"avro-maven-plugin"})})," will generate the associated Java classes under the package ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"com.kafka.demo.avro.model"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Project Structure"})})," - above."]}),"\n",(0,s.jsx)(n.p,{children:"and"}),"\n",(0,s.jsxs)(n.p,{children:["After ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"mvn clean package"})})," you should have:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"\u2500\u2500 target\n    \u251c\u2500\u2500 classes\n    \u2502\xa0\xa0 \u251c\u2500\u2500 application.properties\n    \u2502\xa0\xa0 \u251c\u2500\u2500 avro\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 TransactionEvent.avsc\n    \u2502\xa0\xa0 \u251c\u2500\u2500 com\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 kafka\n    \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 demo\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 avro\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 model\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0     \u251c\u2500\u2500 TransactionEvent$Builder.class\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0     \u251c\u2500\u2500 TransactionEventBody$Builder.class\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0     \u251c\u2500\u2500 TransactionEventBody.class\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0     \u251c\u2500\u2500 TransactionEvent.class\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0     \u251c\u2500\u2500 TransactionEventHeader$Builder.class\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0     \u251c\u2500\u2500 TransactionEventHeader.class\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0     \u2514\u2500\u2500 TransactionType.class\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u251c\u2500\u2500 KafkaConsumerConfig.class\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 KafkaProducerConfig.class\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 consumer\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 KafkaConsumer.class\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 DemoApplication.class\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 KafkaRunner.class\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 producer\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 KafkaProducer.class\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 properties\n    \u2502\xa0\xa0 \u2502\xa0\xa0             \u2514\u2500\u2500 KafkaCustomProperties.class\n    \u2502\xa0\xa0 \u251c\u2500\u2500 server-keystore.jks\n    \u2502\xa0\xa0 \u2514\u2500\u2500 server-truststore.jks\n    \u251c\u2500\u2500 generated-sources\n    \u2502\xa0\xa0 \u2514\u2500\u2500 annotations\n    \u251c\u2500\u2500 generated-test-sources\n    \u2502\xa0\xa0 \u2514\u2500\u2500 test-annotations\n    \u251c\u2500\u2500 kafka-demo-app-0.0.1-SNAPSHOT.jar\n    \u251c\u2500\u2500 kafka-demo-app-0.0.1-SNAPSHOT.jar.original\n"})}),"\n",(0,s.jsx)(n.p,{children:"and"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 main\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 com\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 kafka\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 demo\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u251c\u2500\u2500 avro\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u2502\xa0\xa0 \u2514\u2500\u2500 model\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u2502\xa0\xa0     \u251c\u2500\u2500 TransactionEventBody.java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u2502\xa0\xa0     \u251c\u2500\u2500 TransactionEventHeader.java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u2502\xa0\xa0     \u251c\u2500\u2500 TransactionEvent.java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u2502\xa0\xa0     \u2514\u2500\u2500 TransactionType.java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u2502\xa0\xa0 \u251c\u2500\u2500 KafkaConsumerConfig.java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u2502\xa0\xa0 \u2514\u2500\u2500 KafkaProducerConfig.java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u251c\u2500\u2500 consumer\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u2502\xa0\xa0 \u2514\u2500\u2500 KafkaConsumer.java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u251c\u2500\u2500 DemoApplication.java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u251c\u2500\u2500 KafkaRunner.java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u251c\u2500\u2500 producer\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u2502\xa0\xa0 \u2514\u2500\u2500 KafkaProducer.java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0             \u2514\u2500\u2500 properties\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0                 \u2514\u2500\u2500 KafkaCustomProperties.java\n"})}),"\n",(0,s.jsx)(n.h2,{id:"run-example",children:"Run Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docker-compose up\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example Docker Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\n# ...\n\nschema-registry_1  | [2025-01-05 08:40:03,480] INFO Kafka commitId: c43d449ca7777b4e (org.apache.kafka.common.utils.AppInfoParser)\nschema-registry_1  | [2025-01-05 08:40:03,481] INFO Kafka startTimeMs: 1736066403480 (org.apache.kafka.common.utils.AppInfoParser)\nschema-registry_1  | [2025-01-05 08:40:03,499] INFO [Schema registry clientId=sr-1, groupId=schema-registry] Cluster ID: K438Gk-kRxGulCD3BGdWaQ (org.apache.kafka.clients.Metadata)\nkafka_1            | [2025-01-05 08:40:03,504] INFO Creating topic __consumer_offsets with configuration {compression.type=producer, cleanup.policy=compact, segment.bytes=104857600} and initial partition assignment HashMap(0 -> ArrayBuffer(1), 1 -> ArrayBuffer(1), 2 -> ArrayBuffer(1), 3 -> ArrayBuffer(1), 4 -> ArrayBuffer(1), 5 -> ArrayBuffer(1), 6 -> ArrayBuffer(1), 7 -> ArrayBuffer(1), 8 -> ArrayBuffer(1), 9 -> ArrayBuffer(1), 10 -> ArrayBuffer(1), 11 -> ArrayBuffer(1), 12 -> ArrayBuffer(1), 13 -> ArrayBuffer(1), 14 -> ArrayBuffer(1), 15 -> ArrayBuffer(1), 16 -> ArrayBuffer(1), 17 -> ArrayBuffer(1), 18 -> ArrayBuffer(1), 19 -> ArrayBuffer(1), 20 -> ArrayBuffer(1), 21 -> ArrayBuffer(1), 22 -> ArrayBuffer(1), 23 -> ArrayBuffer(1), 24 -> ArrayBuffer(1), 25 -> ArrayBuffer(1), 26 -> ArrayBuffer(1), 27 -> ArrayBuffer(1), 28 -> ArrayBuffer(1), 29 -> ArrayBuffer(1), 30 -> ArrayBuffer(1), 31 -> ArrayBuffer(1), 32 -> ArrayBuffer(1), 33 -> ArrayBuffer(1), 34 -> ArrayBuffer(1), 35 -> ArrayBuffer(1), 36 -> ArrayBuffer(1), 37 -> ArrayBuffer(1), 38 -> ArrayBuffer(1), 39 -> ArrayBuffer(1), 40 -> ArrayBuffer(1), 41 -> ArrayBuffer(1), 42 -> ArrayBuffer(1), 43 -> ArrayBuffer(1), 44 -> ArrayBuffer(1), 45 -> ArrayBuffer(1), 46 -> ArrayBuffer(1), 47 -> ArrayBuffer(1), 48 -> ArrayBuffer(1), 49 -> ArrayBuffer(1)) (kafka.zk.AdminZkClient)\nkafka_1            | [2025-01-05 08:40:03,516] INFO [Controller id=1] New topics: [Set(__consumer_offsets)], deleted topics: [HashSet()], new partition replica assignment [Set(TopicIdReplicaAssignment(__consumer_offsets,Some(sCl4AQdgQzysT-cqZX-oGA),HashMap(__consumer_offsets-22 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-30 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-25 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-35 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-37 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-38 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-13 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-8 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-21 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-4 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-27 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-7 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-9 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-46 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-41 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-33 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-23 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-49 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-47 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-16 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-28 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-31 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-36 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-42 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-3 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-18 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-15 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-24 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-17 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-48 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-19 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-11 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-2 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-43 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-6 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-14 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-20 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-0 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-44 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-39 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-12 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-45 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-1 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-5 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-26 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-29 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-34 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-10 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-32 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=), __consumer_offsets-40 -> ReplicaAssignment(replicas=1, addingReplicas=, removingReplicas=))))] (kafka.controller.KafkaController)\n\n# ...\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["On the base:",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.a,{href:"https://medium.com/ing-tech-romania/implementing-a-basic-kafka-producer-and-consumer-using-spring-boot-spring-kafka-and-avro-schema-2b6d06e6c4cf",children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Implementing a basic Kafka Producer and Consumer using Spring Boot, Spring Kafka and Avro schema"})})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.a,{href:"https://github.com/dianafagateanu/kafka-demo",children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Implementing a basic Kafka Producer and Consumer using Spring Boot, Spring Kafka and Avro schema (github)"})})}),(0,s.jsx)("br",{})]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var s=r(6540);const a={},t=s.createContext(a);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);