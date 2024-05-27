import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        {/*<p className="hero__subtitle">{siteConfig.tagline}</p>*/}
        {/*<div className={styles.buttons}>*/}
        {/*  <Link*/}
        {/*    className="button button--secondary button--lg"*/}
        {/*    to="/docs/intro">*/}
        {/*    Docusaurus Tutorial - 5min ⏱️*/}
        {/*  </Link>*/}
        {/*</div>*/}
          <div>
              <p>
                  The <a href="https://jreact.com">jreact.com</a> website is dedicated to developing and presenting a repository of reactive programming examples.
                  Each example is accompanied by a short introduction and explanation.
              </p>
              <h3>News</h3>
              <ul>
                  <li><a
                      href="https://jreact.com/index.php/2024/04/09/micronaut-jaxrs-jdbc-mysql-maven/" target="_blank">micronaut-jaxrs-jdbc-mysql-maven</a>
                  </li>
                  <li><a
                      href="https://jreact.com/index.php/2024/04/11/micronaut-data-r2dbc-repository-gradle/ " target="_blank">micronaut-data-r2dbc-repository-gradle</a>
                  </li>
                  <li><a
                      href="https://jreact.com/index.php/2024/05/06/sqs-spring-boot-localstack/" target="_blank">sqs-spring-boot-localstack</a>
                  </li>
                  <li><a
                      href="https://jreact.com/index.php/2024/03/09/aws-sdk-java-v2-dynamodb-s3-1/" target="_blank">aws-sdk-java-v2-dynamodb-s3-1</a>
                  </li>
                  <li><a href="https://jreact.com/index.php/2024/03/05/quarkus-aws-localstack-lambda-dynamodb/" target="_blank">quarkus-aws-localstack-lambda-dynamodb</a></li>
                  <li><a href="http://jreact.com/index.php/2024/03/13/spring-boot-with-aws-s3-1/" target="_blank">spring-boot-with-aws-s3-1</a></li>
              </ul>
          </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
