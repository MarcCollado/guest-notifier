import * as React from 'react';
import { Link } from 'gatsby';

import User from '/src/icons/user.svg';
import * as styles from '/src/styles/navbar.module.css';

const Navbar = ({ siteTitle }) => (
  <header className={styles.container}>
    <Link to="/">
      <p className="large">{siteTitle}</p>
    </Link>
    <User />
  </header>
);

export default Navbar;
