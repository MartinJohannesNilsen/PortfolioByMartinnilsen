import { Theme } from "@mui/material";
import { dark } from "./dark";
import { light } from "./light";

export const defaultFontFamily =
  "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol";
export const defaultAccentColor = "#29939b";

export enum ThemeEnum {
  Dark = "dark",
  Light = "light",
}

export function themeCreator(theme: string): Theme {
  return themeMap[theme];
}

const themeMap: { [key: string]: Theme } = {
  dark,
  light,
};
