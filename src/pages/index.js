import * as React from 'react';
import { graphql } from 'gatsby';

import Carousel from '../components/carousel';
import Hero from '../components/hero';
import Seo from '../components/seo';
import * as styles from '../styles/index.module.css';

const IndexPage = ({ data }) => (
  <div className={styles.indexContainer}>
    <Hero />
    <h2>Featured Guests</h2>
    <Carousel allGuests={data.allGuests.nodes} />
  </div>
);
export const Head = () => <Seo title="Home" />;

export const query = graphql`
  {
    allGuests {
      nodes {
        id
        name
        surname
      }
    }
  }
`;

export default IndexPage;

// 📍 https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
