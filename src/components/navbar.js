import * as React from 'react';
import { Link } from 'gatsby';

import User from '../icons/user.svg';
import * as styles from '../styles/navbar.module.css';

const Navbar = ({ siteTitle }) => (
  <nav className={styles.container}>
    <Link to="/">
      <p className="large">
        <b>{siteTitle}</b>
      </p>
    </Link>
    <User />
  </nav>
);

export default Navbar;
