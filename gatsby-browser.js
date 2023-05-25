import React from 'react';

import Layout from './src/components/layout';
import './src/styles/global.css';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

// 📍 https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
