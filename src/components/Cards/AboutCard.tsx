import { FC } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";

type AboutCardProps = {
  id: string;
  data: {
    text: string[];
    subtitle: string[];
  };
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
};

const AboutCard: FC<AboutCardProps> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box textAlign="left">
          <Typography variant="h2" color="textPrimary" itemProp="description">
            Martin Johannes Nilsen
          </Typography>
        </Box>
        <Box textAlign="left">
          <Typography variant="subtitle1" color="textPrimary">
            {props.data.subtitle?.map((text: string, index) => {
              if (text.includes("AGE(")) {
                let dateString = text
                  .match(/\((.*)\)/)
                  ?.pop()
                  ?.toString();
                if (dateString) {
                  text = getAge(dateString).toString();
                }
              }
              if (index !== 0) {
                return " • " + text;
              } else {
                return text;
              }
            })}
          </Typography>
        </Box>
        <Box textAlign="justify">
          {props.data.text.map((paragraph: string) => (
            <Box my={2} key={paragraph}>
              <Typography variant="body1" color="textPrimary" className={"ref"}>
                {paragraph}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
export default AboutCard;

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.error.main,
    borderRadius: 35,
    padding: "3%",
    [theme.breakpoints.up("sm")]: {
      padding: "4%",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "6%",
    },
  },
}));
