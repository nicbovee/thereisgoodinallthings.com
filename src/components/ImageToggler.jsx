import {ThemeContext} from '../theme-context';
import React from 'react';
import styled from "styled-components";

function ImageToggler() {
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <Button
          onClick={toggleTheme}>
          Show/Hide Pictures
        </Button>
      )}
    </ThemeContext.Consumer>
  );
}

const Button = styled.button`
color: #5095ea;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border: none;
text-decoration: none;
transition: all ease-in-out 200ms;
cursor: pointer;
:hover {
  color: #b0cff7;
}
`

export default ImageToggler;