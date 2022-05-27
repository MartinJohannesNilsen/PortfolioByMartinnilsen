import { FC, useEffect, useRef } from "react";
import { Box, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import Navbar from "../components/Navbar/Navbar";
import { gsap, Power3 } from "gsap";
import { useTheme } from "../ThemeProvider";
import useDidUpdate from "../utils/useDidUpdate";
import DeskSVGInline from "../assets/illustrations/desk_animated";

type LandingViewProps = {
  data: {
    navbar: {
      title: string;
      languages: string[];
      sections: string[];
    };
    title: string;
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
  const classes = useStyles();
  const { theme } = useTheme();

  let titleRef: any = useRef(null);
  function animateIn(svgElements: svgProps) {
    let tl = gsap.timeline();
    tl.from(titleRef, {
      delay: 0.2,
      duration: 0.7,
      scale: 0.9,
      opacity: 0,
      ease: Power3.easeIn,
    })
      .from(
        svgElements.drawers,
        {
          duration: 0.8,
          y: -100,
          opacity: 0,
          ease: Power3.easeIn,
        },
        "-=0.2"
      )
      .from(
        svgElements.countertop,
        {
          duration: 0.4,
          y: -100,
          opacity: 0,
          ease: Power3.easeIn,
        },
        "-=0.1"
      )
      .from(
        svgElements.monitor_arm,
        {
          duration: 0.4,
          y: -100,
          opacity: 0,
          ease: Power3.easeIn,
        },
        "-=0.1"
      )
      .from(
        svgElements.monitor,
        {
          duration: 0.4,
          y: -100,
          opacity: 0,
          ease: Power3.easeIn,
        },
        "-=0.1"
      )
      .from(svgElements.keyboard, {
        duration: 0.4,
        y: -100,
        opacity: 0,
        ease: Power3.easeIn,
      })
      .from(
        svgElements.mouse,
        {
          duration: 0.4,
          y: -100,
          opacity: 0,
          ease: Power3.easeIn,
        },
        "-=0.1"
      )
      .from(
        svgElements.lamp,
        {
          duration: 0.4,
          y: -100,
          opacity: 0,
          ease: Power3.easeIn,
        },
        "-=0.1"
      )
      .from(svgElements.desktop_bg, {
        duration: 1.5,
        opacity: 0,
      });

    if (theme.palette.type === "dark") {
      tl.from(svgElements.lamp_light, {
        duration: 0.15,
        opacity: 0,
      })
        .to(svgElements.lamp_light, {
          duration: 0.15,
          opacity: 0,
        })
        .to(svgElements.lamp_light, {
          duration: 0.3,
          opacity: 1,
        });
    } else {
      document.getElementById("lamp_light")!.style.display = "none";
    }
  }

  useDidUpdate(() => {
    if (theme.palette.type === "dark") {
      document.getElementById("lamp_light")!.style.display = "block";
      let tl = gsap.timeline();
      tl.from("#lamp_light", {
        duration: 0.15,
        opacity: 0,
        delay: 0.5,
      })
        .to("#lamp_light", {
          duration: 0.15,
          opacity: 0,
        })
        .to("#lamp_light", {
          duration: 0.3,
          opacity: 1,
        });
    } else {
      document.getElementById("lamp_light")!.style.display = "none";
    }
  }, [theme.palette.type]);

  useEffect(() => {
    animateIn({
      drawers: "#alex_drawers",
      countertop: "#countertop",
      monitor_arm: "#monitor_arm",
      monitor: "#monitor",
      keyboard: "#keyboard",
      mouse: "#mouse",
      lamp: "#lamp",
      lamp_light: "#lamp_light",
      desktop_bg: "#desktop_bg",
    });
    //eslint-disable-next-line
  }, []);

  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Navbar
        data={props.data.navbar}
        language={props.language}
        setLanguage={props.setLanguage}
      />
      <Box className={classes.root}>
        <DeskSVGInline classes={classes} />
        <div ref={(el) => (titleRef = el)}>
          <Typography
            variant="h1"
            color="textPrimary"
            className={classes.title}
            style={
              lgUp
                ? { padding: "50px 30px" }
                : smDown
                ? { padding: "150px 30px" }
                : { padding: "100px 30px" }
            }
          >
            {props.data.title}
          </Typography>
        </div>
      </Box>
    </Box>
  );
};
export default LandingView;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 120px)",
    minHeight: "600px",
    backgroundColor: theme.palette.primary.main,
    position: "relative",
    textAlign: "center",
  },
  desk: {
    position: "absolute",
    bottom: 0,
    top: "auto",
    zIndex: 0,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  title: {
    zIndex: 1000,
    position: "absolute",
    left: 0,
    right: 0,
  },
}));
