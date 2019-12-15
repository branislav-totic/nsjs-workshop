import React from "react";
import { graphql, Link } from "gatsby";
import "../css/base.css";
import Title from "../components/Title";
import Img from "gatsby-image";
import Helmet from "react-helmet";

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
    file(name: { eq: "picture-1" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 300, quality: 97) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  return (
    <div>
      <Link to="/blog">Blog</Link>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta src={data.site.siteMetadata.description} />
      </Helmet>
      <Title title={data.site.siteMetadata.title} />
      <p>{data.site.siteMetadata.description}</p>
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  );
};

export default Home;
