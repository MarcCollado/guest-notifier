import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Navbar from './navbar';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="main-container">
      <Navbar siteTitle={data.site.siteMetadata?.title || `Guest Notifier`} />
      <main>{children}</main>
      <footer>
        <p className="small">
          © {new Date().getFullYear()} &middot; Built with ❤️ love from ☀️
          Barcelona
        </p>
      </footer>
    </div>
  );
};

export default Layout;

// 📍 https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
