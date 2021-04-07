import React, { useState, createContext, useContext } from "react";
import { MuiThemeProvider, Theme } from "@material-ui/core";
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
  const curThemeName: string = localStorage.getItem("appTheme") || "lightTheme";
  const [theme, _setTheme] = useState(themeCreator(curThemeName));

  const setTheme = (themeName: ThemeEnum): void => {
    localStorage.setItem("appTheme", themeName);
    _setTheme(themeCreator(themeName));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
