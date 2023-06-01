const crypto = require('crypto');

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: '/using-dsg',
    component: require.resolve('./src/templates/using-dsg.js'),
    context: {},
    defer: true,
  });
};

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const guestList = await fetch('https://api.guestnotifier.com/v1.0/guests')
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error));
  guestList.guests.map((g) => {
    createNode({
      // GraphQL required fields
      id: `${g.id}`,
      parent: null,
      internal: {
        type: `Guests`, // graphQL query: allGuests { ... }
        contentDigest: createContentDigest(g),
      },
      children: [],
      // API fields
      name: g.name,
      surname: g.surname,
    });
    return;
  });
};

// 📍 https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
// 📍 https://www.gatsbyjs.com/docs/reference/config-files/actions/#createNode
// 📍 https://www.gatsbyjs.com/docs/tutorial/creating-a-source-plugin/#create-source-plugin
