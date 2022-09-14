import { FC, useEffect, useRef } from "react";
import { Box, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import Navbar from "../components/Navbar/Navbar";
import { gsap, Power3 } from "gsap";
import { useTheme } from "../ThemeProvider";
import useDidUpdate from "../utils/useDidUpdate";
import DeskSVGInline from "../assets/svg/desk_animated";

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
  const classes = useStyles();
  const { theme } = useTheme();

  let titleRef: any = useRef(null);
  function animateIn(svgElements: svgProps) {
    let tl = gsap.timeline();
    tl.from(
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
      .from(
        svgElements.desktop_bg,
        {
          duration: 2,
          opacity: 0,
        },
        "+=0.3"
      );

    // var split = new SplitText(titleRef, {
    //   type: "chars,words,lines",
    //   position: "absolute",
    // });
    // gsap.from(split.words, {
    //   duration: 1,
    //   x: 200,
    //   autoAlpha: 0,
    //   ease: "elastic",
    //   stagger: 0.05,
    // });
    // TODO Fix splitText animation coming in at same time as monitor powering on
    tl.from(
      titleRef,
      {
        duration: 2,
        opacity: 0,
      },
      "-=2.0"
    );

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

  const xl = useMediaQuery(theme.breakpoints.only("xl"));
  const lg = useMediaQuery(theme.breakpoints.only("lg"));
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Navbar
        data={props.data.navbar}
        language={props.language}
        setLanguage={props.setLanguage}
      />
      <Box className={classes.root}>
        <DeskSVGInline
          classes={classes}
          style={{
            width: xl ? "70%" : lg ? "85%" : "100%",
            marginLeft: xl ? "15%" : lg ? "7.5%" : "0%",
          }}
        />
        <div ref={(el) => (titleRef = el)}>
          <Typography
            variant="h1"
            color="textPrimary"
            className={classes.title}
            style={{ padding: "20vh 30px 30vh 30px", whiteSpace: "pre-line" }}
          >
            {smDown
              ? props.data.hasOwnProperty("titleMobile")
                ? props.data
                    .titleMobile!.replaceAll("-", "-\n")
                    .replaceAll(". ", ". \n")
                : props.data.title.replaceAll(". ", ". \n")
              : props.data.title.replaceAll(". ", ". \n")}
          </Typography>
        </div>
      </Box>
    </Box>
  );
};
export default LandingView;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 80px)",
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
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
}));
