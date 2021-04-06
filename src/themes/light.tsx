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
      default: "white",
      paper: "rgba(0,0,0,1)", //SearchBar
    },
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "rgba(0, 0, 0, 1)",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {},
      },
    },
    MuiInput: {
      input: {
        fontWeight: 600,
        fontSize: 25,
        "&::selection": {
          backgroundColor: "white",
          color: "white",
        },
      },
    },
    MuiInputLabel: {
      root: {
        color: "white",
        "&.Mui-focused": {
          color: "white",
        },
      },
    },
    MuiInputBase: {},
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
    subtitle1: {
      fontSize: "0.8rem",
      fontWeight: 400,
      textShadow: "none",
      color: "rgba(255,255,255,0.5)",
    },
    subtitle2: {
      fontSize: "0.5rem",
      fontWeight: 400,
      textShadow: "none",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 700,
      textShadow: "1px 1px 1px #000",
      textTransform: "none",
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
});
export default lightTheme;
