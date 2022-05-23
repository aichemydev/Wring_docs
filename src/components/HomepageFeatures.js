import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    
    title: 'Auto-Gen',
    Svg: require('../../static/img/images.svg').default,
    description: (
      <>
        AI explores your app and generates tests with page object models for your apps, useful for automated and manual testers alike.      </>
    ),
  },
  {
    title: 'Auto-Heal',
    Svg: require('../../static/img/icons8-windows-client-26.svg').default,
    description: (
      <>
        Maintain your existing tests by using AI driven healing.
      </>
    ),
  },
  {
    title: 'Enhance Coverage',
    Svg: require('../../static/img/icons8-speed-50.svg').default,
    description: (
      <>
        Keep increasing your test coverage to ensure Continuous Quality.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <hr></hr>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
