import React, { useState, createContext, useContext, useEffect } from "react";
import { MuiThemeProvider, Theme, useMediaQuery } from "@material-ui/core";
import { themeCreator } from "./themes/base";
import { ThemeEnum } from "./themes/base";

export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: ThemeEnum) => void;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: themeCreator(ThemeEnum.Light),
  setTheme: (theme) => {},
});
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC = (props) => {
  const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)' //Default query for OS setting
  const OS_STANDARD = useMediaQuery(COLOR_SCHEME_QUERY) ? "dark" : "light"
  const curThemeName: string = localStorage.getItem("theme") || OS_STANDARD;
  const [theme, _setTheme] = useState(themeCreator(curThemeName));

  useEffect(() => {
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
