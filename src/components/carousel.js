import React, { useState } from 'react';

import GuestCard from './guest-card';
import * as styles from '../styles/carousel.module.css';

const renderCarouselItems = (n, addItemToRefList) => {
  return Array.from({ length: n }, (_, i) => (
    <GuestCard
      key={i}
      onRenderItem={addItemToRefList}
    >{`API item #${i}`}</GuestCard>
  ));
};

const renderCarouselNav = (n, onClick) =>
  Array.from({ length: n }, (_, i) => (
    <a key={i} onClick={() => onClick(i)}></a>
  ));

const Carousel = ({ items }) => {
  const [refList, setRefList] = useState([]);

  const refListGenerator = (obj) => refList.push(obj) && setRefList(refList);

  const onClick = (index) => {
    const found = refList.find((refObj) => refObj.position === index);
    found && found.ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselItems}>
        {renderCarouselItems(items, refListGenerator)}
      </div>
      {renderCarouselNav(items, onClick)}
    </div>
  );
};

export default Carousel;
