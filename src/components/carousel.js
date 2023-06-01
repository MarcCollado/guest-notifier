import React, { useState } from 'react';

import GuestCard from './guest-card';
import * as styles from '../styles/carousel.module.css';

const renderCarouselItems = (allGuests, addItemToRefList) =>
  allGuests.map((g, i) => (
    <GuestCard key={i} guest={g} id={i} onRenderItem={addItemToRefList} />
  ));

const renderCarouselNav = (n, onClick) =>
  Array.from({ length: n }, (_, i) => (
    <a key={i} onClick={() => onClick(i)}></a>
  ));

const Carousel = ({ allGuests }) => {
  const [refList, setRefList] = useState([]);

  const refListGenerator = (obj) => refList.push(obj) && setRefList(refList);

  const onClick = (index) => {
    const found = refList.find((refObj) => refObj.position === index);
    found && found.ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselItems}>
        {renderCarouselItems(allGuests, refListGenerator)}
      </div>
      {renderCarouselNav(allGuests.length, onClick)}
    </div>
  );
};

export default Carousel;
