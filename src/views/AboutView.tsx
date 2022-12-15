import { FC } from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
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
  const { theme } = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100%",
        backgroundColor: "secondary.main",
        position: "relative",
        textAlign: "center",
      }}
      id={props.id}
    >
      <Grid
        item
        xs={11}
        sm={9}
        lg={6}
        sx={{
          margin: "auto",
          padding: "300px",
        }}
      >
        <AboutCard id={props.id} data={props.data} />
      </Grid>
    </Grid>
  );
};
export default AboutView;
