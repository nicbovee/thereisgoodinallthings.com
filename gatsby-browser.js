/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import styled from "styled-components";
import {ThemeContext, themes} from './src/theme-context';
import {Helmet} from "react-helmet";
import fav32 from "./src/favicons/favicon-32x32.png";
import fav16 from "./src/favicons/favicon-16x16.png";
class RootProvider extends React.Component {
  toggleTheme = () => {
    this.setState(state => ({
      showPictures: !state.showPictures
    }));
  }
  state = {
    showPictures: false,
    toggleTheme: this.toggleTheme
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Helmet>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
          <link rel="icon" type="image/png" sizes="16x16" href={fav16}/>
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#ffffff" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
  
}

export const wrapRootElement = ({ element }) => <RootProvider>{element}</RootProvider>