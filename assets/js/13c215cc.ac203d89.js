"use strict";(self.webpackChunkjreact_com_docsaurus_01=self.webpackChunkjreact_com_docsaurus_01||[]).push([[7112],{9106:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>_,default:()=>i,frontMatter:()=>s,metadata:()=>E,toc:()=>c});var r=o(4848),t=o(8453);const s={sidebar_position:220},_="GSchmutz docker-compose",E={id:"messaging/kafka/examples/gschmutz",title:"GSchmutz docker-compose",description:"Docker Compose with Kafka Single Broker, Connect, Schema-Registry, REST Proxy, Kafka Manager",source:"@site/docs/messaging/kafka/examples/gschmutz.mdx",sourceDirName:"messaging/kafka/examples",slug:"/messaging/kafka/examples/gschmutz",permalink:"/docs/messaging/kafka/examples/gschmutz",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:220,frontMatter:{sidebar_position:220},sidebar:"tutorialSidebar",previous:{title:"Docker wurstmeister",permalink:"/docs/messaging/kafka/examples/wurstmeister"},next:{title:"References",permalink:"/docs/messaging/kafka/references"}},a={},c=[];function T(n){const e={code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"gschmutz-docker-compose",children:"GSchmutz docker-compose"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"Docker Compose with Kafka Single Broker, Connect, Schema-Registry, REST Proxy, Kafka Manager"})})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"version: '2'\nservices:\n  zookeeper:\n    image: confluentinc/cp-zookeeper:3.3.0\n    hostname: zookeeper\n    ports:\n      - \"2181:2181\"\n    environment:\n      ZOOKEEPER_CLIENT_PORT: 2181\n      ZOOKEEPER_TICK_TIME: 2000\n\n  broker-1:\n    image: confluentinc/cp-enterprise-kafka:3.3.0\n    hostname: broker-1\n    depends_on:\n      - zookeeper\n    ports:\n      - \"9092:9092\"\n    environment:\n      KAFKA_BROKER_ID: 1\n      KAFKA_BROKER_RACK: rack-a\n      KAFKA_ZOOKEEPER_CONNECT: 'zookeeper:2181'\n      KAFKA_ADVERTISED_HOST_NAME: ${DOCKER_HOST_IP}\n      KAFKA_ADVERTISED_LISTENERS: 'PLAINTEXT://${DOCKER_HOST_IP}:9092'\n      KAFKA_METRIC_REPORTERS: io.confluent.metrics.reporter.ConfluentMetricsReporter\n      KAFKA_DELETE_TOPIC_ENABLE: \"true\"\n      KAFKA_JMX_PORT: 9999\n      KAFKA_JMX_HOSTNAME: 'broker-1'\n      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1\n      CONFLUENT_METRICS_REPORTER_BOOTSTRAP_SERVERS: broker-1:9092\n      CONFLUENT_METRICS_REPORTER_ZOOKEEPER_CONNECT: zookeeper:2181\n      CONFLUENT_METRICS_REPORTER_TOPIC_REPLICAS: 1\n      CONFLUENT_METRICS_ENABLE: 'true'\n      CONFLUENT_SUPPORT_CUSTOMER_ID: 'anonymous'\n\n  schema_registry:\n    image: confluentinc/cp-schema-registry:3.3.0\n    hostname: schema_registry\n    container_name: schema_registry\n    depends_on:\n      - zookeeper\n      - broker-1\n    ports:\n      - \"8081:8081\"\n    environment:\n      SCHEMA_REGISTRY_HOST_NAME: schema_registry\n      SCHEMA_REGISTRY_KAFKASTORE_CONNECTION_URL: 'zookeeper:2181'\n      SCHEMA_REGISTRY_ACCESS_CONTROL_ALLOW_ORIGIN: '*'\n      SCHEMA_REGISTRY_ACCESS_CONTROL_ALLOW_METHODS: 'GET,POST,PUT,OPTIONS'\n\n  connect:\n    image: confluentinc/cp-kafka-connect:3.3.0\n    hostname: connect\n    container_name: connect\n    depends_on:\n      - zookeeper\n      - broker-1\n      - schema_registry\n    ports:\n      - \"8083:8083\"\n    environment:\n      CONNECT_BOOTSTRAP_SERVERS: 'broker-1:9092'\n      CONNECT_REST_ADVERTISED_HOST_NAME: connect\n      CONNECT_REST_PORT: 8083\n      CONNECT_GROUP_ID: compose-connect-group\n      CONNECT_CONFIG_STORAGE_TOPIC: docker-connect-configs\n      CONNECT_CONFIG_STORAGE_REPLICATION_FACTOR: 1\n      CONNECT_OFFSET_STORAGE_TOPIC: docker-connect-offsets\n      CONNECT_OFFSET_STORAGE_REPLICATION_FACTOR: 1\n      CONNECT_STATUS_STORAGE_TOPIC: docker-connect-status\n      CONNECT_STATUS_STORAGE_REPLICATION_FACTOR: 1\n      CONNECT_KEY_CONVERTER: io.confluent.connect.avro.AvroConverter\n      CONNECT_KEY_CONVERTER_SCHEMA_REGISTRY_URL: 'http://schema_registry:8081'\n      CONNECT_VALUE_CONVERTER: io.confluent.connect.avro.AvroConverter\n      CONNECT_VALUE_CONVERTER_SCHEMA_REGISTRY_URL: 'http://schema_registry:8081'\n      CONNECT_INTERNAL_KEY_CONVERTER: org.apache.kafka.connect.json.JsonConverter\n      CONNECT_INTERNAL_VALUE_CONVERTER: org.apache.kafka.connect.json.JsonConverter\n      CONNECT_ZOOKEEPER_CONNECT: 'zookeeper:2181'\n    volumes:\n      - ./kafka-connect:/etc/kafka-connect/jars\n\n  rest-proxy:\n    image: confluentinc/cp-kafka-rest\n    hostname: rest-proxy\n    depends_on:\n      - broker-1\n      - schema_registry\n    ports:\n      - \"8084:8084\"\n    environment:\n      KAFKA_REST_ZOOKEEPER_CONNECT: '${DOCKER_HOST_IP}:2181'\n      KAFKA_REST_LISTENERS: 'http://0.0.0.0:8084'\n      KAFKA_REST_SCHEMA_REGISTRY_URL: 'http://schema_registry:8081'\n      KAFKA_REST_HOST_NAME: 'rest-proxy'\n\n  adminer:\n    image: adminer\n    ports:\n      - 8080:8080\n\n  db:\n    image: mujz/pagila\n    environment:\n      - POSTGRES_PASSWORD=sample\n      - POSTGRES_USER=sample\n      - POSTGRES_DB=sample\n\n  kafka-manager:\n    image: trivadisbds/kafka-manager\n    hostname: kafka-manager\n    depends_on:\n      - zookeeper\n    ports:\n      - \"9000:9000\"\n    environment:\n      ZK_HOSTS: 'zookeeper:2181'\n      APPLICATION_SECRET: 'letmein'\n\n  connect-ui:\n    image: landoop/kafka-connect-ui\n    container_name: connect-ui\n    depends_on:\n      - connect\n    ports:\n      - \"8001:8000\"\n    environment:\n      - \"CONNECT_URL=http://connect:8083\"\n\n  schema-registry-ui:\n    image: landoop/schema-registry-ui\n    hostname: schema-registry-ui\n    depends_on:\n      - broker-1\n      - schema_registry\n    ports:\n      - \"8002:8000\"\n    environment:\n      SCHEMAREGISTRY_URL: 'http://${DOCKER_HOST_IP}:8081'\n"})})]})}function i(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(T,{...n})}):T(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>_,x:()=>E});var r=o(6540);const t={},s=r.createContext(t);function _(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function E(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:_(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);