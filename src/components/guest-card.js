import * as React from 'react';

import * as styles from '../styles/guest-card.module.css';

const GuestCard = (props) => (
  <div className={`center ${styles.guestCardContainer}`} id={props.href}>
    {props.children}
  </div>
);

export default GuestCard;
