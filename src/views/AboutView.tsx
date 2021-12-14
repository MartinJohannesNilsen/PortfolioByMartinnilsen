import { FC } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";

type AboutViewProps = {
  id: string;
  text: string[];
  subtitle: string[];
};

const AboutView: FC<AboutViewProps> = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} id={props.id}>
      <Grid container justify="center" className={classes.height}>
        <Grid item xs={11} sm={9} lg={7}>
          <Card className={classes.card}>
            <CardContent>
              <Box textAlign="left">
                <Typography
                  variant="h1"
                  color="textPrimary"
                  className={`${classes.title} ref`}
                >
                  Martin Johannes Nilsen
                </Typography>
              </Box>
              <Box textAlign="left">
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={"ref"}
                >
                  <p>
                    {props.subtitle?.map((text: string, index) =>
                      index !== 0 ? " • " + text : text
                    )}
                  </p>
                </Typography>
              </Box>
              <Box textAlign="justify">
                {props.text.map((paragraph: string) => (
                  <Box my={2} key={paragraph}>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      className={"ref"}
                    >
                      {paragraph}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
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
  card: {
    backgroundColor: theme.palette.error.main,
    borderRadius: 50,
    margin: "120px 0",
    padding: "10%",
  },
  title: {
    fontSize: "3.5rem",
  },
  ref: {
  },
}));
