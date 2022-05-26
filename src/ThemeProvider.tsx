import React, { useState, createContext, useContext} from "react";
import { MuiThemeProvider, Theme, useMediaQuery } from "@material-ui/core";
import { themeCreator } from "./themes/base";
import { ThemeEnum } from "./themes/base";
import useDidUpdate from "./utils/useDidUpdate";

// Find the correct scheme based on user preferences. 
// If changed on site before, persist based on localStorage, else default
const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'
export function getSelectedTheme() {
  const localStorageTheme = localStorage.getItem("theme");
  const OS_STANDARD = window.matchMedia(COLOR_SCHEME_QUERY).matches ? "dark" : "light";
  return localStorageTheme || OS_STANDARD;
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: ThemeEnum) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: getSelectedTheme() == "dark" ? themeCreator(ThemeEnum.Dark) : themeCreator(ThemeEnum.Light), 
  setTheme: (theme) => {},
});
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC = (props) => {
  const curThemeName: string = getSelectedTheme();
  const OS_STANDARD = useMediaQuery(COLOR_SCHEME_QUERY) ? "dark" : "light";
  const [theme, _setTheme] = useState(themeCreator(curThemeName));

  useDidUpdate(() => {
    _setTheme(themeCreator(localStorage.getItem("theme") || OS_STANDARD))
  }, [OS_STANDARD])

  const setTheme = (themeName: ThemeEnum): void => {
    localStorage.setItem("theme", themeName);
    _setTheme(themeCreator(themeName));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
