import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import User from '../icons/user.svg';
import * as styles from '../styles/navbar.module.css';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query ImagesQuery {
      logoImage: allFile(
        filter: { absolutePath: { regex: "/images/logo.png/" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              width: 44
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      textImage: allFile(
        filter: { absolutePath: { regex: "/images/guest-notifier.png/" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              width: 245
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  const logoImage = data.logoImage.nodes[0].childImageSharp.gatsbyImageData;
  const textImage = data.textImage.nodes[0].childImageSharp.gatsbyImageData;

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <GatsbyImage image={logoImage}></GatsbyImage>
        <GatsbyImage image={textImage}></GatsbyImage>
      </div>
      <Link to="/">
        <p className="large"></p>
      </Link>
      <User />
    </nav>
  );
};

export default Navbar;
