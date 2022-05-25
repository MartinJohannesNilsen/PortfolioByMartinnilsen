import { Theme } from "@material-ui/core";
import { dark } from "./dark";
import { light } from "./light";

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
