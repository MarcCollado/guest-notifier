import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/seo';
import * as styles from '/src/styles/index.module.css';

const IndexPage = () => (
  <>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/banner.png"
        loading="eager"
        width={600}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt=""
      />
      <h5>Here are some style examples</h5>
      <p>This is p</p>
      <p>
        <strong>This is p.bold</strong>
      </p>
      <p className="large">This is p.large</p>
      <p className="small">This is p.small</p>
      <p className="caption">This is p.caption</p>
      <br />
      <br />
    </div>
  </>
);

// See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="Home" />;

export default IndexPage;
