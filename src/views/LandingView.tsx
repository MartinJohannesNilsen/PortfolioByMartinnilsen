import { FC, useEffect } from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import { gsap, Power3 } from "gsap";
import { useTheme } from "../ThemeProvider";
import useDidUpdate from "../utils/useDidUpdate";

type LandingViewProps = {
  data: {
    navbar: {
      title: string;
      languages: string[];
      sections: string[];
    };
    title: string;
    titleMobile?: string;
  };
  language: string;
  setLanguage: () => void;
};

type svgProps = {
  drawers: any;
  countertop: any;
  monitor_arm: any;
  monitor: any;
  keyboard: any;
  mouse: any;
  lamp: any;
  lamp_light: any;
  desktop_bg: any;
};

const LandingView: FC<LandingViewProps> = (props) => {
  const { theme } = useTheme();

  const xl = useMediaQuery(theme.breakpoints.only("xl"));
  const lg = useMediaQuery(theme.breakpoints.only("lg"));
  const smDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Navbar
        data={props.data.navbar}
        language={props.language}
        setLanguage={props.setLanguage}
      />
      <Box
        sx={{
          height: "calc(100vh - 80px)",
          backgroundColor: "primary.main",
          position: "relative",
          textAlign: "center",
        }}
      ></Box>
    </Box>
  );
};
export default LandingView;
