import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import ImageMasonry from "react-image-masonry";
import styled from "styled-components";
import {ThemeContext} from "../theme-context";
import ImageToggler from "../components/ImageToggler";
import poppies from "../images/charlies-poppies.svg";


const ButtonWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
margin: 150px 0;
`

const PlantPoppy = styled.div`
background: #c7dbf3;
padding: 25px;
display: flex;
min-height: 400px;
flex-direction: column;
justify-content: center;
`
const ActionButton = styled.button`
display:flex;
justify-content: center;
max-width: 200px;
background: #5095ea;
color: white;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border: none;
padding: 15px 20px;
border-radius: 50px;
text-decoration: none;
transition: all ease-in-out 200ms;
cursor: pointer;
:hover {
  background: #b0cff7;
  color: #5095ea; 
}
`
const Button = styled(Link)`
display:flex;
justify-content: center;
max-width: 200px;
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

class IndexPage extends React.Component {
  state = {
    poppyPlanting: false,
    poppyPlanted: false,
  }

  togglePoppyPlanting = () => {
    this.setState({poppyPlanging: !this.state.poppyPlanting})
  }
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <Layout {...props}>
        <SEO title="Home" keywords={[`Charles Thomas Bovee`, `Premature Birth`, `Working through the loss of an infant`]} />
        
        <h1>A memorial for Charles Thomas Bovee</h1>
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
        <p>This site features some photography of our premature son that may trigger some people. You can use this site with or without photos.
          <ImageToggler />
        </p>
        <ButtonWrapper>
          <Button to="/posts/danis-story-of-charles">
            Read Dani's Story
          </Button>
          <Button to="/posts/nics-story-of-charles">
            Read Nic's Story
          </Button>
        </ButtonWrapper>

        <PlantPoppy>
          <div>
          <div>
            <img src={poppies} style={{
              opacity: this.state.poppyPlanted ? 1 : 0,
              display: this.state.poppyPlanted ? "block" : "none",
              transition: "opacity ease-in-out 1000ms",
              maxWidth: 100
            }}/>
          </div>
            <h3>Plant a Poppy</h3>
            <p>"Poppy" was the nickname we gave Charles because he was the size of a poppyseed when we found out we were having him.<br/></p>
            <p>We have a special shelf in the center of our living room for memories with Charles. In that shelf we have a salt lamp that warms up the space. Say a prayer and click this button to illuminate the lamp and send your warm wishes into our home.</p>
          </div>
          {!this.state.poppyPlanted &&
          <ActionButton onClick={(event) => {
                this.setState({
                  poppyPlanting: true
                })
                PlantPoppyTrigger();
                this.setState({
                  poppyPlanting: false,
                  poppyPlanted: true
                })
              }}>
                {this.state.poppyPlanting ? "Planting Poppy" : "Plant a Poppy"}
            </ActionButton>
          }
          {this.state.poppyPlanted &&
          <p>Thanks for planting a poppy!</p>
          }
          
        </PlantPoppy>

      </Layout>
    )
  }
}

const PlantPoppyTrigger = (callback) => {
  console.log("poppy planted");
  fetch('https://maker.ifttt.com/trigger/poppy_planted/with/key/cEMMaotmQzG00yMvrU8AUg',
  {
    method: "GET",
    mode: "no-cors",
    headers: {
      'Accept':          'application/json',
      'Accept-Charset':  'utf-8',
      'Accept-Encoding': 'gzip, deflate',
      'Content-Type':    'application/json',
    }
  }).then(resp =>{
    console.log(resp);
  })
}
IndexPage.contextType = ThemeContext;
export default IndexPage;
