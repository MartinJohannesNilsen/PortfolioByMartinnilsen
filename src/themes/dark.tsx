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

    // Headings
    // Usage: landingViewSlogan
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
    // Usage: NavbarLogo, aboutTitle
    h2: { fontSize: "2rem", fontWeight: 800 },
    // Usage: projectViewHeader, featuredInViewHeader
    h3: { fontSize: "2rem", fontWeight: 600 },
    // Usage: navBarSections (below md in FABMenu)
    h4: {
      fontSize: "1.5rem",
      fontWeight: 800,
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "0.45rem",
        fontWeight: 800,
      },
    },
    h5: {},
    h6: {},

    // Subtitles
    // Usage: projectTitle, aboutSubtitle
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "1.8rem",
      },
    },
    // Usage: featuredInTitle
    subtitle2: {
      fontSize: "0.85rem",
      fontWeight: 600,
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "1.1rem",
      },
    },

    // Bodies
    // Usage: aboutDescription, projectDescription, contactText
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "1.3rem",
      },
    },
    // Usage: featuredInDescription
    body2: {
      fontSize: "0.8rem",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "1rem",
      },
    },

    // Buttons
    button: {
      fontSize: ".8rem",
      fontWeight: 800,
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "1.1rem",
      },
    },

    // Tooltips
    overline: {
      fontSize: "0.7rem",
      fontWeight: 800,
    },
    caption: {},
  },
});
export default dark;
