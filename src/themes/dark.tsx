import { createTheme } from "@material-ui/core/styles";

const defaultTheme = createTheme();
export const dark = createTheme({
  palette: {
    type: "dark",
    text: {
      primary: "#FFF",
      secondary: "#000",
    },
    background: {
      default: "#021b2e",
      paper: "rgba(0,0,0,1)",
    },
    primary: {
      // main: "#03243d",
      main: "#021b2e",
    },
    secondary: {
      main: "#01121f",
    },
    success: {
      //outlineshadow
      light: "#585d63",
      main: "#3e4347",
      dark: "#27323b",
    },
    error: {
      main: "#c73626",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {},
      },
    },
    MuiButton: {
      root: {
        minWidth: "0px",
      },
    },
  },
  typography: {
    fontFamily: "Gotham",
    h1: {
      fontSize: "5.5rem",
      fontWeight: 800,
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "4rem",
      },
      [defaultTheme.breakpoints.down("xs")]: {
        fontSize: "2.7rem",
      },
    },
    h2: {
      fontSize: "1.2rem",
      fontWeight: 700,
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "1.6rem",
      },
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "3rem",
      },
    },
    h4: {
      fontSize: "1.4rem",
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
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: ".5rem",
        fontWeight: 800,
      },
    },
    button: {
      fontSize: ".8rem",
      fontWeight: 800,
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "1.1rem",
      },
    },
    caption: {
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.5rem",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "1.8rem",
      },
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "1.3rem",
      },
    },
    overline: {
      fontSize: "0.7rem",
      fontWeight: 800,
    },
  },
});
export default dark;
