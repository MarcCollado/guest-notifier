/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Guest Notifier`,
    description: `Timely notifications from your tribe of mentors`,
    author: `@MarcCollado`,
    siteUrl: `https://www.guestnotifier.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#8590F5`,
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#8590F5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`,
      },
    },
  ],
};

// 📍 https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
