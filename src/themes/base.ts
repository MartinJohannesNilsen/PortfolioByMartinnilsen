import { Theme } from "@material-ui/core";
import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export enum ThemeEnum {
  Dark = "darkTheme",
  Light = "lightTheme",
}

export function themeCreator(theme: string): Theme {
  return themeMap[theme];
}

const themeMap: { [key: string]: Theme } = {
  darkTheme,
  lightTheme,
};
