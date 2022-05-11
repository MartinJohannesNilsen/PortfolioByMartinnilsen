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
  data: {
    text: string[];
    subtitle: string[];
  }
};

export const getAge = (dateString: string) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

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
                  itemProp="description"
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
                  <h2>
                    {props.data.subtitle?.map((text: string, index) => {
                      if(text.includes("AGE(")){
                        let dateString = text.match(/\((.*)\)/)?.pop()?.toString();
                        if(dateString){
                          text = getAge(dateString).toString()
                        }
                      }
                      if(index !== 0){
                        return " • " + text
                      } else {
                        return text
                      }
                    }
                    )}
                  </h2>
                </Typography>
              </Box>
              <Box textAlign="justify">
                <p>
                {props.data.text.map((paragraph: string) => (
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
                </p>                
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.error.main,
    borderRadius: 50,
    margin: "25% 0",
    padding: "6%",
  },
  title: {
    fontSize: "3.5rem",
  },
  ref: {
  },
}));
