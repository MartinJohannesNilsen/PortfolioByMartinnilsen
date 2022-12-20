import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();
export const dark = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#FFF",
      secondary: "#000",
    },
    background: {
      default: "#161518",
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
  components: {
    // ??
    MuiCssBaseline: {
      styleOverrides: {
        body: {},
      },
    },
    // For textbuttons in footer
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "0px",
        },
      },
    },
  },
  typography: {
    fontFamily: "Gotham",

    // Headings
    // Usage:
    h1: {},
    // Usage: NavbarLogo, aboutTitle
    h2: { fontSize: "2rem", fontWeight: 800 },
    // Usage: projectViewHeader, featuredInViewHeader
    h3: { fontSize: "2rem", fontWeight: 600 },
    // Usage: navBarSections (below md in FABMenu)
    h4: {
      fontSize: "1.25rem",
      fontWeight: 800,
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "0.45rem",
        fontWeight: 800,
      },
    },
    // Usage: landingView title
    h5: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "22pt",
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "22px",
      },
    },
    // Usage: landingView text
    h6: {
      fontSize: "16px",
      fontWeight: 600,
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "18px",
      },
    },

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
    // Usage: aboutDescription, projectDescription, footerText
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
