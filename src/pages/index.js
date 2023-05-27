import * as React from 'react';

import Hero from '../components/hero';
import Seo from '../components/seo';
import * as styles from '/src/styles/index.module.css';

const IndexPage = () => (
  <>
    <Hero />
  </>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;

// 📍 https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
