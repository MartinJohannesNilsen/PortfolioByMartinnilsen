import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import { gsap, Power3 } from "gsap";
import { useTheme } from "../ThemeProvider";
import useDidUpdate from "../utils/useDidUpdate";
import DeskSVGInline from "../assets/svg/desk_animated";

type DeskViewProps = { language: string };

type svgProps = {
  drawers: string;
  countertop: string;
  monitor_arm: string;
  monitor: string;
  keyboard: string;
  mouse: string;
  lamp: string;
  lamp_light: string;
  desktop_bg: string;
};

const DeskView: FC<DeskViewProps> = (props) => {
  const { theme } = useTheme();
  const elementRef = useRef(null);
  const q = gsap.utils.selector(elementRef);
  const [inView, setInView] = useState(false);

  function animateIn(svgElements: svgProps) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: q(".desksvginline"),
        start: "top center",
        end: "+=0px",
        // scrub: 1, // scrub: 1
        pin: false,
        markers: process.env.REACT_APP_SHOW_GSAP_MARKERS === "true",
        onEnter: () => setInView(true),
      },
    });
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

    document.getElementById("lamp_light")!.style.display = "none";
  }

  useDidUpdate(() => {
    if (theme.palette.mode === "dark" && inView) {
      document.getElementById("lamp_light")!.style.display = "block";
      let tl = gsap.timeline();
      tl.from("#lamp_light", {
        duration: 0.15,
        opacity: 0,
        delay: 5,
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
  }, [inView]);

  useDidUpdate(() => {
    if (theme.palette.mode === "dark" && inView) {
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
  }, [theme.palette.mode]);

  useLayoutEffect(() => {
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
  const md = useMediaQuery(theme.breakpoints.only("md"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const smDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      ref={elementRef}
      sx={{
        backgroundColor: "primary.main",
        position: "relative",
        textAlign: "center",
      }}
    >
      <Box pt={4}>
        {props.language === "norwegian" ? (
          <>
            <Typography variant="h3" color="textPrimary" display="inline">
              Det holder. Tid for å
            </Typography>
            <Typography
              variant="h3"
              display="inline"
              sx={{
                color: "error.main",
              }}
            >
              &nbsp;kode.
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h3" color="textPrimary" display="inline">
              That's it. Time to
            </Typography>
            <Typography
              variant="h3"
              display="inline"
              sx={{
                color: "error.main",
              }}
            >
              &nbsp;code.
            </Typography>
          </>
        )}
      </Box>
      <DeskSVGInline
        className={"desksvginline"}
        style={{
          width: xl ? "70%" : lg ? "85%" : "100%",
          textAlign: "center",
          marginTop: "40px",
        }}
      />
    </Box>
  );
};
export default DeskView;
