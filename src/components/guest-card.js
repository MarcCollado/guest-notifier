import React, { useEffect, useRef } from 'react';

import * as styles from '../styles/guest-card.module.css';

const GuestCard = ({ guest, onRenderItem }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    !!itemRef &&
      onRenderItem({
        position: guest.id,
        ref: itemRef,
      });
  }, [itemRef, guest, onRenderItem]);

  return (
    <div className={styles.guestCardContainer} ref={itemRef}>
      {guest.name} {guest.surname} {guest.id}
    </div>
  );
};

export default GuestCard;
