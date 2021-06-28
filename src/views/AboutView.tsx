import { FC, useEffect } from "react";
import { Box, makeStyles, Typography, Grid, Card, CardContent } from "@material-ui/core";
import { useInView } from "react-intersection-observer";
import { gsap, Power3 } from "gsap";

type AboutViewProps = {
  id: string;
  text: string[];
};

const _calculateAge = (birthday: Date) => {
  let ageDifMs = Date.now() - birthday.getTime();
  let ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const AboutView: FC<AboutViewProps> = (props) => {
  const classes = useStyles();

  const [cardRef, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.8,
  });

  useEffect(() => {
    gsap.from(cardRef, {duration: 1, ease: Power3.easeIn})
  }, [inView])

  return (
    <Box className={classes.root} textAlign="justify" id={props.id}>
      <Grid container justify="center" className={classes.height}>
        <Grid item xs={11} sm={9} lg={7}>
          <Card className={classes.card} ref={cardRef}>
            <CardContent>
              <Box>
                <Typography variant="h1" color="textPrimary" className={classes.title}>
                  Martin Johannes Nilsen
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="textPrimary">
                  {_calculateAge(new Date(1999, 3, 26))}
                </Typography>
              </Box>
              <Box className={classes.textContainer}>
                {props.text.map((paragraph: string) => (
                  <Box my={2} key={paragraph}>
                    <Typography variant="body2" color="textPrimary">
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
    padding: "10%"
  },
  title: {
    fontSize: "3.5rem",
  },
  textContainer: {
    
  },
}));
