import React, { useEffect, useRef } from 'react';

import * as styles from '../styles/guest-card.module.css';

const GuestCard = ({ guest, id, onRenderItem }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    !!itemRef &&
      onRenderItem({
        position: id,
        ref: itemRef,
      });
  }, [itemRef, id, onRenderItem]);

  return (
    <div className={`center ${styles.guestCardContainer}`} ref={itemRef}>
      {guest.name} {guest.surname} {guest.id}
    </div>
  );
};

export default GuestCard;
