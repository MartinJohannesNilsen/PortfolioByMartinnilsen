import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();
export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    text: {
      primary: "#FFF",
      secondary: "#000",
    },
    background: {
      default: "#000",
      paper: "rgba(0,0,0,1)",
    },
    primary: {
      main: "#000",
    },
    secondary: {
      main: "rgba(255, 255, 255, 1)",
    },
    success: {
      //outlineshadow
      light: "#ccc",
      main: "#ddd",
      dark: "#eee",
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
      fontSize: "4rem",
      fontWeight: 800,
      [defaultTheme.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
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
export default darkTheme;
