import { createTheme, adaptV4Theme } from "@mui/material/styles";

const defaultTheme = createTheme();
export const light = createTheme(
  adaptV4Theme({
    palette: {
      mode: "light",
      text: {
        primary: "#000",
        secondary: "#FFF",
      },
      background: {
        default: "#FFF",
        paper: "#FFF",
      },
      primary: {
        main: "#FFF",
      },
      secondary: {
        main: "#fcfcfc",
      },
      success: {
        //outlineshadow
        light: "#ccc",
        main: "#ddd",
        dark: "#eee",
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
  })
);
export default light;
