import { createTheme } from "@mui/material";
import { baseTheme } from "./themeDefaults";

export const dark = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#FFF",
      secondary: "#000",
    },
    // background
    primary: {
      main: "#161518",
      dark: "#141315",
    },
    // accent color
    secondary: {
      main: JSON.parse(String(localStorage.getItem("accent"))) || "#29939b",
    },
    // outline shadow for project images
    grey: {
      600: "#585d63",
      700: "#3e4347",
      800: "#27323b",
    },
  },
  breakpoints: baseTheme.breakpoints,
  components: baseTheme.components,
  typography: baseTheme.typography,
});
export default dark;
