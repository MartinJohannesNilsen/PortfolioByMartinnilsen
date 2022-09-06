import { Box, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "../ThemeProvider";

export const showMuiSize = () => {
  const classes = useStyles();
  const { theme } = useTheme();

  const getValue = () => {
    const xs = useMediaQuery(theme.breakpoints.only("xs"));
    const sm = useMediaQuery(theme.breakpoints.only("sm"));
    const md = useMediaQuery(theme.breakpoints.only("md"));
    const lg = useMediaQuery(theme.breakpoints.only("lg"));
    return xs ? "XS" : sm ? "SM" : md ? "MD" : lg ? "LG" : "XL";
  };

  return (
    <Box>
      <Typography className={classes.root}>{getValue()}</Typography>
    </Box>
  );
};
export default showMuiSize;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: 100,
    bottom: 0,
    left: 0,
    margin: "-5px 5px",
    color: "red",
    fontSize: "2rem",
    fontWeight: 800,
  },
}));
