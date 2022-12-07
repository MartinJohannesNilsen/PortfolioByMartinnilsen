import { FC } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

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
  return (
    <Card
      sx={{
        backgroundColor: "error.main",
        borderRadius: 15,
        padding: { xs: "3%", sm: "4%", lg: "6%" },
      }}
    >
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
