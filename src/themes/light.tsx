import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();
export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    text: {
      primary: "#000",
      secondary: "#FFF",
    },
    background: {
      default: "#FFF",
      paper: "rgba(0,0,0,1)",
    },
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "rgba(0, 0, 0, 1)",
    },
    success: {
      //outlineshadow
      light: "#585d63",
      main: "#3e4347",
      dark: "#27323b",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {},
      },
    },
  },
  typography: {
    fontFamily: "Gotham",
    h1: {
      fontSize: "7rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    //Navbar
    subtitle1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: "1.5rem",
      fontWeight: 800,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 700,
      // textShadow: "1px 1px 1px #000",
      // textTransform: "none",
    },
    caption: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
});
export default lightTheme;
