/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import {ThemeContext, themes} from './src/theme-context';

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
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
  
}

export const wrapRootElement = ({ element }) => <RootProvider>{element}</RootProvider>