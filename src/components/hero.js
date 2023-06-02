import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from '../styles/hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.imageContainer}>
        <StaticImage
          src="../images/hero-avatar.png"
          alt="Hero Avatar"
          placeholder="blurred"
          width={260}
        />
      </div>
      <h1 className={`display ${styles.siteTitle}`}>
        Stay up-to-date with the latest podcast buzz!
      </h1>
    </div>
  );
};

export default Hero;
