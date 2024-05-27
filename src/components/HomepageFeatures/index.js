import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  // {
  //   title: 'Easy to Use',
  //   Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  //   description: (
  //     <>
  //       Docusaurus was designed from the ground up to be easily installed and
  //       used to get your website up and running quickly.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

export default function HomepageFeatures() {
  return (
      // <section className={styles.features}>
      //   <div className="container">
      //     <div className="row">
      //       {FeatureList.map((props, idx) => (
      //         <Feature key={idx} {...props} />
      //       ))}
      //     </div>
      //   </div>
      // </section>
      <header>
      {/*<header className={clsx("hero hero--primary", styles.heroBanner)}>          */}
          {/*<div className="container">*/}
          {/*<div>*/}
              {/*<h1 className="hero__title">{siteConfig.title}</h1>*/}
              {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
              {/*<div*/}
              {/*    style={{*/}
              {/*        display: "flex",*/}
              {/*        justifyContent: "center",*/}
              {/*        alignItems: "center",*/}
              {/*        textAlign: "left",*/}
              {/*        marginLeft: "60px",*/}
              {/*        color: "#000000",*/}
              {/*        background: "#ffffff"*/}
              {/*    }}*/}
              {/*>*/}
              {/*    <>Solutions Architect</>*/}
              {/*    <br/>*/}
              {/*    <>Lead Software Engineer</>*/}
              {/*    <br/>*/}
              {/*    <>Machine Learning enthusiast</>*/}
              {/*    <br/>*/}
              {/*    <>Electronics Engineer by training</>*/}
              {/*</div>*/}
          {/*</div>*/}
      </header>
  );
}

// function HomepageHeader() {
//     const { siteConfig } = useDocusaurusContext();
//     return (
//         <header className={clsx("hero hero--primary", styles.heroBanner)}>
//             <div className="container">
//                 <h1 className="hero__title">{siteConfig.title}</h1>
//                 {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
//                 <div
//                     style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         textAlign: "left",
//                         marginLeft: "60px",
//                     }}
//                 >
//                     <>📐 Solutions Architect</>
//                     <br />
//                     <>👨‍💻 Lead Software Engineer</>
//                     <br />
//                     <>🧠 Machine Learning enthusiast</>
//                     <br />
//                     <>👨‍🎓 Electronics Engineer by training</>
//                 </div>
//             </div>
//         </header>
//     );
// }

