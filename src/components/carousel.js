import React, { useState } from 'react';

import GuestCard from './guest-card';
import * as styles from '../styles/carousel.module.css';

const renderCarouselItems = (allGuests, addItemToRefList) =>
  allGuests.map((g) => (
    <GuestCard key={g.id} guest={g} onRenderItem={addItemToRefList} />
  ));

const renderCarouselNav = (allGuests, onClick) =>
  allGuests.map((g) => <a key={g.id} onClick={() => onClick(g.id)}></a>);

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
      {renderCarouselNav(allGuests, onClick)}
    </div>
  );
};

export default Carousel;
