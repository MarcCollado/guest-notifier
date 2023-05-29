import * as React from 'react';

import Hero from '../components/hero';
import Seo from '../components/seo';
import GuestCard from '../components/guest-card';

import * as styles from '/src/styles/index.module.css';

const renderGuests = (numOfGuests) => {
  return Array.from({ length: numOfGuests }, (_, i) => <GuestCard key={i} />);
};

const IndexPage = () => (
  <>
    <Hero />
    <div className={styles.featuredGuestsContainer}>{renderGuests(8)}</div>
  </>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;

// 📍 https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
