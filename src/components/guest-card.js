import React, { useEffect, useRef } from 'react';

import * as styles from '../styles/guest-card.module.css';

const GuestCard = ({ children, index, onRenderItem }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    !!itemRef &&
      onRenderItem({
        index: index,
        ref: itemRef,
      });
  }, [itemRef]);

  return (
    <div className={`center ${styles.guestCardContainer}`} ref={itemRef}>
      {children}
    </div>
  );
};

export default GuestCard;
