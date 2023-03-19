import { createTheme } from "@mui/material";
import { baseTheme } from "./themeDefaults";

export const light = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#000",
      secondary: "#FFF",
    },
    // background
    primary: {
      main: "#FFF",
      dark: "#fcfcfc",
    },
    // accent color
    secondary: {
      main: JSON.parse(String(localStorage.getItem("accent"))) || "#29939b",
    },
    // outline shadow for project images
    grey: {
      600: "#ccc",
      700: "#ddd",
      800: "#eee",
    },
  },
  breakpoints: baseTheme.breakpoints,
  components: baseTheme.components,
  typography: baseTheme.typography,
});
export default light;
