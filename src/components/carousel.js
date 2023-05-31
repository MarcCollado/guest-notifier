import React, { useState } from 'react';

import GuestCard from './guest-card';
import * as styles from '../styles/carousel.module.css';

const renderCarouselItems = (id, n, onRenderItem) => {
  return Array.from({ length: n }, (_, i) => (
    <GuestCard key={i} onRenderItem={onRenderItem} index={i}>{`API item #${
      i + 1
    }`}</GuestCard>
  ));
};

const renderCarouselNav = (id, n, onClick) =>
  Array.from({ length: n }, (_, i) => (
    <a key={i + 1} onClick={() => onClick(i)}></a>
  ));

const Carousel = ({ items, id }) => {
  const [refList, setRefList] = useState([]);

  const onRenderItem = (obj) => refList.push(obj) && setRefList(refList);

  const onClick = (index) => {
    const found = refList.find((refObj) => refObj.index === index);
    found && found.ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselItems}>
        {renderCarouselItems(id, items, onRenderItem)}
      </div>
      {renderCarouselNav(id, items, onClick)}
    </div>
  );
};

export default Carousel;
