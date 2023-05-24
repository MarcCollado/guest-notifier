import * as React from 'react';
import { Link } from 'gatsby';

import * as styles from '/src/styles/navbar.module.css';
import User from '/src/icons/user.svg';

const Navbar = ({ siteTitle }) => (
  <header className={styles.container}>
    <Link
      to="/"
      style={{
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <User />
  </header>
);

export default Navbar;
