import React, { useState, createContext, useContext, useMemo } from "react";
import {
  ThemeProvider,
  StyledEngineProvider,
  Theme,
  useMediaQuery,
  createTheme,
} from "@mui/material";
import { themeCreator, ThemeEnum } from "./themes/themeMap";
import { defaultFontFamily, defaultAccentColor } from "./themes/themeDefaults";
import useDidUpdate from "./utils/useDidUpdate";

// Find the correct scheme based on user preferences.
// If changed on site before, persist based on localStorage, else default OS setting
const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
export function getSelectedTheme() {
  const localStorageTheme = localStorage.getItem("theme");
  const OS_STANDARD = window.matchMedia(COLOR_SCHEME_QUERY).matches
    ? "dark"
    : "light";
  return localStorageTheme || OS_STANDARD;
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: ThemeEnum) => void;
  accentColor: string;
  setAccentColor: (accent: string) => void;
  fontFamily: string;
  setFontFamily: (font: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme:
    getSelectedTheme() === "dark"
      ? themeCreator(ThemeEnum.Dark)
      : themeCreator(ThemeEnum.Light),
  setTheme: (theme) => {},
  accentColor: localStorage.getItem("accent") || defaultAccentColor,
  setAccentColor: (accent) => {},
  fontFamily: localStorage.getItem("font") || defaultFontFamily,
  setFontFamily: (fontFamily) => {},
});
export const useTheme = () => useContext(ThemeContext);

const CustomThemeProvider: React.FC = (props) => {
  const OS_STANDARD = useMediaQuery(COLOR_SCHEME_QUERY) ? "dark" : "light";
  const [fontFamily, _setFontFamily] = useState(
    JSON.parse(String(localStorage.getItem("font"))) || defaultFontFamily
  );
  const [accentColor, _setAccentColor] = useState(
    JSON.parse(String(localStorage.getItem("accent"))) || defaultAccentColor
  );
  const [theme, _setTheme] = useState(
    getSelectedTheme() === "dark"
      ? themeCreator(ThemeEnum.Dark)
      : themeCreator(ThemeEnum.Light)
  );

  useDidUpdate(() => {
    _setTheme(themeCreator(localStorage.getItem("theme") || OS_STANDARD));
  }, [OS_STANDARD]);

  const setTheme = (themeName: ThemeEnum): void => {
    localStorage.setItem("theme", themeName);
    const underlayingTheme = themeCreator(themeName);
    _setTheme(
      createTheme({
        ...underlayingTheme,
        palette: {
          ...underlayingTheme.palette,
          secondary: { main: accentColor },
        },
        typography: {
          ...underlayingTheme.typography,
          fontFamily: fontFamily,
        },
      })
    );
  };

  const setFontFamily = (font: string): void => {
    localStorage.setItem("font", String(JSON.stringify(font)));
    _setFontFamily(font);
  };

  const setAccentColor = (accent: string): void => {
    localStorage.setItem("accent", String(JSON.stringify(accent)));
    _setAccentColor(accent);
  };

  useMemo(() => {
    _setTheme(
      createTheme({
        ...theme,
        palette: {
          ...theme.palette,
          secondary: { main: accentColor },
        },
        typography: {
          ...theme.typography,
          fontFamily: fontFamily,
        },
      })
    );
    return () => {};
  }, [accentColor, fontFamily]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        accentColor,
        setAccentColor,
        fontFamily,
        setFontFamily,
      }}
    >
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
