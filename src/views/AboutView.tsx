import { FC } from "react";
import { Box, makeStyles, Grid } from "@material-ui/core";
import AboutCard from "../components/Cards/AboutCard";

type AboutViewProps = {
  id: string;
  data: {
    text: string[];
    subtitle: string[];
  };
};

const AboutView: FC<AboutViewProps> = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} id={props.id}>
      <Grid container justifyContent="center" className={classes.height}>
        <Grid item xs={11} sm={9} lg={7}>
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
  },
  height: {
    height: "100%",
  },
}));
