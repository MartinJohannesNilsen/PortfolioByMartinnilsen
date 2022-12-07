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
  const animationOffset = mdUp ? -300 : -50;

  return (
    <Box
      sx={{
        minHeight: "100%",
        backgroundColor: "secondary.main",
        position: "relative",
        textAlign: "center",
      }}
      id={props.id}
    >
      {/* <Box pt={4}>
        <Typography variant="h3" className={classes.title}>
          {props.id}
        </Typography>
      </Box> */}
      <Grid
        container
        justifyContent="center"
        sx={{
          height: "100%",
        }}
      >
        <Grid
          item
          xs={11}
          sm={9}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            margin: "auto",
          }}
        >
          <AboutCard id={props.id} data={props.data} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default AboutView;
