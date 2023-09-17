import { createTheme } from "@mui/material";

export const defaultFontFamily =
  "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol";
// export const defaultAccentColor = "#29939b";
export const defaultAccentColor = "#E9B384";

// Create base theme
const defaultTheme = createTheme();
// https://mui.com/material-ui/customization/default-theme/
export const baseTheme = createTheme({
  typography: {
    fontFamily:
      JSON.parse(String(localStorage.getItem("font"))) ||
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    // Headings
    // Usage:
    h1: {},
    // Usage: NavbarLogo
    h2: { fontSize: "2rem", fontWeight: 800, textTransform: "uppercase" },
    // Usage: projectViewHeader, featuredInViewHeader
    h3: { fontSize: "2rem", fontWeight: 600 },
    // Usage: navBarSections (below md in FABMenu)
    h4: {
      fontSize: "1.25rem",
      textTransform: "capitalize",
      lineHeight: "26px",
      fontWeight: 800,
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "0.45rem",
        fontWeight: 800,
      },
    },
    // Usage: landingView title
    h5: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "22pt",
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "22px",
      },
    },
    // Usage: landingView text
    h6: {
      fontSize: "16px",
      fontWeight: 500,
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "18px",
      },
    },

    // Subtitles
    // Usage: projectTitle
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: 600,
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
    // Usage: projectDescription, footerText
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "18px",
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
  components: {
    // ??
    MuiCssBaseline: {
      styleOverrides: {
        body: {},
      },
    },
    // No default width on buttons
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "0px",
        },
      },
    },
    // For tooltips
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: defaultTheme.palette.grey[800],
        },
      },
    },
  },
  breakpoints: defaultTheme.breakpoints,
  palette: defaultTheme.palette,
});
