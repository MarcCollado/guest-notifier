import React, { forwardRef, useEffect, useRef } from 'react';

import * as styles from '../styles/guest-card.module.css';

const GuestCard = forwardRef((props, ref) => {
  const itemRef = useRef(null);

  useEffect(() => {
    if (!!itemRef) {
      props.onRenderItem({
        index: props.index,
        ref: itemRef,
      });
    }
  }, [itemRef]);

  return (
    <div className={`center ${styles.guestCardContainer}`} ref={itemRef}>
      {props.children}
    </div>
  );
});

export default GuestCard;
