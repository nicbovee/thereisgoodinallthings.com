import React from "react";

export const themes = {
  showPictures: false
};

export const ThemeContext = React.createContext({
  theme: themes.showPictures, // default value,
  toggleTheme: () => {},
});