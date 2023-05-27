import * as React from 'react';

import * as styles from '../styles/hero.module.css';

const Hero = ({}) => (
  <div className={`center ${styles.container}`}>
    <h1 className={`display ${styles.siteTitle}`}>
      Stay up-to-date with the latest podcast buzz!
    </h1>
    <p className={`${styles.tagline}`}>Get a weekly newsletter for you</p>
  </div>
);

export default Hero;
