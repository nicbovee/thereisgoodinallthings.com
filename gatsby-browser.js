/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import {ThemeContext, themes} from './src/theme-context';
import {Helmet} from "react-helmet";

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
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
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