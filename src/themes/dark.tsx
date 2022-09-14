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
      default: "#1a272e",
      paper: "#212121",
    },
    primary: {
      main: "#161518",
    },
    secondary: {
      main: "#141315",
    },
    success: {
      //outlineshadow
      light: "#585d63",
      main: "#3e4347",
      dark: "#27323b",
    },
    error: {
      main: "#29939b", 
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
      // textShadow: "2px 2px 3px rgba(0,0,0,1)",
      // textShadow: "4px 3px 0px rgba(0,0,0,0.15), 9px 8px 0px #fff",
      textShadow:
        "0px 15px 5px rgba(0,0,0,0.1), 10px 20px 5px rgba(0,0,0,0.05),-10px 20px 5px rgba(0,0,0,0.05)",
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
      fontSize: "1.25rem",
      fontWeight: 800,
      [defaultTheme.breakpoints.down("sm")]: {
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
