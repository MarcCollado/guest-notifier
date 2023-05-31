import * as React from 'react';

import Carousel from '../components/carousel';
import Hero from '../components/hero';
import Seo from '../components/seo';
import * as styles from '../styles/index.module.css';

const IndexPage = () => (
  <div className={styles.indexContainer}>
    <Hero />
    <Carousel id="featured" items={parseInt(8)} />
  </div>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;

// 📍 https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
