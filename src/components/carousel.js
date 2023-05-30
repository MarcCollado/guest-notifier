import * as React from 'react';

import GuestCard from './guest-card';
import * as styles from '../styles/carousel.module.css';

const renderCarouselItems = (numOfItems) => {
  return Array.from({ length: numOfItems }, (_, i) => (
    <GuestCard key={i + 1} href={`slide-${i + 1}`}>
      {`${i + 1}`}
    </GuestCard>
  ));
};

const Carousel = (props) => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselItems}>
        {renderCarouselItems(props.items)}
      </div>

      <a href="#slide-1"></a>
      <a href="#slide-2"></a>
      <a href="#slide-3"></a>
      <a href="#slide-4"></a>
      <a href="#slide-5"></a>
      <a href="#slide-6"></a>
      <a href="#slide-7"></a>
      <a href="#slide-8"></a>
    </div>
  );
};

export default Carousel;
