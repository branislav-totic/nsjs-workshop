import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      author
      content {
        childContentfulRichText {
          html
        }
      }
      subtitle
      title
      thumbnail {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

const BlogTemp = ({ data }) => {
  const { contentfulPost } = data;
  return (
    <div className='blog-temp'>
      <Link to="blog">Back to blog</Link>
      <h1>{contentfulPost.title}</h1>
      <Img fluid={contentfulPost.thumbnail.fluid} className="blog-temp-image" />
      <small>{`${contentfulPost.author} and ${contentfulPost.createdAt}`}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: contentfulPost.content.childContentfulRichText.html
        }}
      />
    </div>
  );
};

export default BlogTemp;
