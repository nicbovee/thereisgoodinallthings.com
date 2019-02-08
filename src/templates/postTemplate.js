import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {ThemeContext} from "../theme-context";
import styled from "styled-components";


const StyledDiv = styled.div`
  ${props => {
    if(!props.showPictures){
      return `
      & .gatsby-resp-image-link {
        display: none !important;
        position: absolute;
      }
      & .image {
        display: none !important;
        position: absolute;
      }
      `
    }
  }}
`

const Author = styled.span`
  color: rgb(80, 149, 234);
`
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
      }
    }
  }
`


class Template extends React.Component {
  render() {
    const { markdownRemark } = this.props.data;
    const {frontmatter, html } = markdownRemark;
    let theme = this.context;
    return (
      <StyledDiv showPictures={theme.showPictures}>
          <Layout>
            <SEO title={frontmatter.title} keywords={[`gatsby`, `application`, `react`]} />
            <h1>{frontmatter.title}</h1>         
            <p>By <Author>{frontmatter.author}</Author></p> 
            <div dangerouslySetInnerHTML={{__html: html}} />
          </Layout>
      </StyledDiv>
    )
  };
};

Template.contextType = ThemeContext;
export default Template;
