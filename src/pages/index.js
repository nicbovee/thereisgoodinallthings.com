import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import ImageMasonry from "react-image-masonry";
import styled from "styled-components";
import {ThemeContext} from "../theme-context";
import ImageToggler from "../components/ImageToggler";

class IndexPage extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <Layout {...props}>
        <SEO title="Home" keywords={[`Charles Thomas Bovee`, `Premature Birth`, `Working through the loss of an infant`]} />
        <h1>A memorial of Charles Thomas Bovee</h1>
        <p>Born, loved, and passed on February 1st, 2019</p>
        {theme.showPictures && 
          <ImageMasonry
            className="masonry"
            imageUrls={[
              `https://res.cloudinary.com/ghettifish-llc/image/upload/v1549300815/CharlesThomas/Bovee001.jpg`,
              `https://res.cloudinary.com/ghettifish-llc/image/upload/v1549300821/CharlesThomas/Bovee003.jpg`,
              `https://res.cloudinary.com/ghettifish-llc/image/upload/v1549300821/CharlesThomas/Bovee007.jpg`,
              `https://res.cloudinary.com/ghettifish-llc/image/upload/v1549300824/CharlesThomas/Bovee002.jpg`,
              `https://res.cloudinary.com/ghettifish-llc/image/upload/v1549300824/CharlesThomas/Bovee006.jpg`,
              `https://res.cloudinary.com/ghettifish-llc/image/upload/v1549300825/CharlesThomas/Bovee005.jpg`,
              `https://res.cloudinary.com/ghettifish-llc/image/upload/v1549300827/CharlesThomas/Bovee008.jpg`,
            ]}
            numCols={3}
          />
        }
        <p>This site features some photography of our premature son that may trigger some people. You can choose to leave these Photos out, or click this button to include them.
          <ImageToggler />
        </p>
        <ButtonWrapper>
          <Button to="/posts/danis-story-of-charles">
            Read Dani's Story
          </Button>
          <Button to ="/posts/nics-story-of-charles">
            Read Nic's Story
          </Button>
        </ButtonWrapper>
      </Layout>
    )
  }
}

IndexPage.contextType = ThemeContext;
export default IndexPage;
const ButtonWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
margin-bottom: 50px;
`
const Button = styled(Link)`
background: #5095ea;
color: white;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border: none;
padding: 15px 20px;
border-radius: 50px;
text-decoration: none;
transition: all ease-in-out 200ms;
:hover {
  background: #b0cff7;
  color: #5095ea; 
}
`