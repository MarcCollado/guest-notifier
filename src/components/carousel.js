import * as React from 'react';

import GuestCard from './guest-card';
import * as styles from '../styles/carousel.module.css';

const renderCarouselItems = (carouselId, numOfItems) => {
  return Array.from({ length: numOfItems }, (_, i) => (
    <GuestCard key={i + 1} href={`${carouselId}-${i + 1}`}>
      {`API item #${i + 1}`}
    </GuestCard>
  ));
};

const renderCarouselNav = (carouselId, numOfItems) => {
  return Array.from({ length: numOfItems }, (_, i) => (
    <a href={`#${carouselId}-${i + 1}`}></a>
  ));
};

const Carousel = ({ items, id }) => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselItems}>
        {renderCarouselItems(id, items)}
      </div>
      {renderCarouselNav(id, items)}
    </div>
  );
};

export default Carousel;
