import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import User from '../icons/user.svg';
import * as styles from '../styles/navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbarContainer}>
    <div className={styles.logoContainer}>
      <StaticImage
        src="../images/logo.png"
        alt="Guest Notifier logo"
        placeholder="blurred"
        width={44}
      />
      {window.matchMedia('(min-width: 768px)').matches && (
        <StaticImage
          src="../images/brand.png"
          alt="Guest Notifier"
          placeholder="blurred"
          width={236}
        />
      )}
    </div>
    <Link to="/">
      <p className="large"></p>
    </Link>
    <User />
  </nav>
);

export default Navbar;
