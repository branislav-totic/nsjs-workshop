import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

export const pageQuery = graphql`
  query BlogQuery {
    blog: allContentfulPost {
      items: nodes {
        id
        author
        slug
        title
        thumbnail {
          fluid(maxWidth:400) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
        createdAt(fromNow: true)
      }
    }
  }
`;

const Blog = ({ data }) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <div className="blog">
        {data.blog.items.map(( blogPost ) => (
          <Link to={`blog/${blogPost.slug}`} key={blogPost.id}>
            <article key={blogPost.id}>
              <h4>{blogPost.title}</h4>
              <small>{`${blogPost.author} and ${blogPost.createdAt}`}</small>
              <Img fluid={blogPost.thumbnail.fluid} />
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
