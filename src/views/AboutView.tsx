import { FC } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
// import { useIntersection } from "react-use";
// import { gsap, Power4 } from "gsap";

type AboutViewProps = {
  id: string;
  text: string[];
  subtitle: string[];
};

// const _calculateAge = (birthday: Date) => {
//   let ageDifMs = Date.now() - birthday.getTime();
//   let ageDate = new Date(ageDifMs); // miliseconds from epoch
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };
// _calculateAge(new Date(1999, 3, 26))

const AboutView: FC<AboutViewProps> = (props) => {
  const classes = useStyles();

  // const intersectionRef = useRef(null);
  // const intersection = useIntersection(intersectionRef, {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.5,
  // });

  // const fadeIn = (element: any) => {
  //   gsap.from(element, {
  //     duration: 1,
  //     opacity: 1,
  //     y: -150,
  //     ease: Power4.easeIn,
  //     stagger: 0.2,
  //   });
  // };
  // const fadeOut = (element: any) => {
  //   gsap.from(element, {
  //     duration: 1,
  //     opacity: 0,
  //     y: 100,
  //     ease: Power4.easeOut,
  //   });
  // };

  // intersection && intersection.intersectionRatio < 0.5
  //   ? fadeOut(".ref")
  //   : fadeIn(".ref");

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
    // opacity: 0
  },
}));
