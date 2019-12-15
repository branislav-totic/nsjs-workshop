const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const posts = await graphql(`
    query Test {
      allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `);

  if (posts.errors) {
    reporter.panicOnBuild(`Error while creating pages!`);
    return;
  }

  const blogPostTemplate = path.resolve(`src/templates/blog.js`);

  posts.data.allContentfulPost.nodes.forEach(post => {
    createPage({
      path: `blog/${post.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.slug
      }
    });
  });
};
