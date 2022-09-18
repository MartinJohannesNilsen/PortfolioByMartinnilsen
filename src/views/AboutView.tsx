import { FC } from "react";
import { Box, makeStyles, Grid, useMediaQuery } from "@material-ui/core";
import AboutCard from "../components/Cards/AboutCard";
import { useTheme } from "../ThemeProvider";

type AboutViewProps = {
  id: string;
  data: {
    text: string[];
    subtitle: string[];
  };
};

const AboutView: FC<AboutViewProps> = (props) => {
  const classes = useStyles();
  const { theme } = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const animationOffset = mdUp ? -300 : -50;

  return (
    <Box className={classes.root} id={props.id}>
      {/* <Box pt={4}>
        <Typography variant="h3" className={classes.title}>
          {props.id}
        </Typography>
      </Box> */}
      <Grid container justifyContent="center" className={classes.height}>
        <Grid item xs={11} sm={9} lg={6} className={classes.position}>
          <AboutCard id={props.id} data={props.data} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default AboutView;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    backgroundColor: theme.palette.secondary.main,
    position: "relative",
    textAlign: "center",
  },
  height: {
    height: "100%",
  },
  position: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    margin: "auto",
  },
  title: {
    color: theme.palette.error.main,
  },
}));
