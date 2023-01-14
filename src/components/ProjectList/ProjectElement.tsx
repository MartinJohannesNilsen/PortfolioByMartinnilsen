import { FC, useRef } from "react";
import DOMPurify from "dompurify";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Image } from "mui-image";
import { gsap } from "gsap";
import insertButtons from "./InsertButtons";
import insertLinks from "./InsertLinks";
import {
  ScrollTriggerFromLeft,
  ScrollTriggerFromRight,
} from "../Animations/ScrollTrigger";
import { useTheme } from "../../ThemeProvider";
import { ProjectElementProps } from "../../types";
import {
  RevealFromLeftOnEnter,
  RevealFromRightOnEnter,
} from "../Animations/Reveal";

const ProjectElement: FC<ProjectElementProps> = (props) => {
  const paddingTitleDescription = 1.7;
  const showMarkers = process.env.REACT_APP_SHOW_GSAP_MARKERS === "true";
  const { theme } = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const elementRef = useRef(null);
  const q = gsap.utils.selector(elementRef);
  const animationStart = "top 80%";
  const animationEnd = "+=200px";

  return (
    <Grid container alignItems="center" justifyContent="center">
      {props.imgPosition === "left" ? (
        <Grid item xs={11} md={12}>
          <ScrollTriggerFromLeft
            x="5vw"
            markers={showMarkers}
            start={animationStart}
            end={animationEnd}
          >
            <Grid container alignItems="center" justifyContent="space-evenly">
              <Grid item xs={12} md={5} lg={6}>
                <Box py={5} px={5}>
                  <Image
                    duration={0}
                    src={props.projectData.img.path}
                    sx={{
                      margin: { lg: "0 30px 0 0" },
                      maxHeight: {
                        xs:
                          props.projectData.img.type === "portrait"
                            ? "200px"
                            : props.projectData.img.type === "square"
                            ? "200px"
                            : "140px",
                        md:
                          props.projectData.img.type === "portrait"
                            ? "250px"
                            : props.projectData.img.type === "square"
                            ? "250px"
                            : "190px",
                        lg:
                          props.projectData.img.type === "portrait"
                            ? "340px"
                            : props.projectData.img.type === "square"
                            ? "320px"
                            : "240px",
                      },
                      maxWidth: {
                        xs:
                          props.projectData.img.type === "landscape"
                            ? "220px"
                            : props.projectData.img.type === "square"
                            ? "200px"
                            : "140px",
                        md:
                          props.projectData.img.type === "landscape"
                            ? "270px"
                            : props.projectData.img.type === "square"
                            ? "250px"
                            : "190px",
                        lg:
                          props.projectData.img.type === "landscape"
                            ? "370px"
                            : props.projectData.img.type === "square"
                            ? "320px"
                            : "250px",
                      },
                      boxShadow: `-10px -10px 1px 0px ${theme.palette.success.light},
                            -20px -20px 1px 0px ${theme.palette.success.main},
                            -30px -30px 1px 0px ${theme.palette.success.dark}`,
                    }}
                    alt={props.projectData.title}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box pb={paddingTitleDescription}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(props.projectData.title),
                    }}
                  ></Typography>
                </Box>
                <Box textAlign="justify">
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(props.projectData.description),
                    }}
                  ></Typography>
                </Box>
                {/* <Box>{insertButtons(props)}</Box> */}
                <Box>{insertLinks(props)}</Box>
              </Grid>
            </Grid>
          </ScrollTriggerFromLeft>
          {/* <RevealFromLeftOnEnter x="5vw">
            <Grid container alignItems="center" justifyContent="space-evenly">
              <Grid item xs={12} md={5} lg={6}>
                <Box py={5}>
                  <Image
                    className={`projectTrigger${props.index}`}
                    duration={0}
                    src={props.projectData.img.path}
                    sx={{
                      margin: { lg: "0 30px 0 0" },
                      maxHeight: {
                        xs:
                          props.projectData.img.type === "portrait"
                            ? "200px"
                            : props.projectData.img.type === "square"
                            ? "200px"
                            : "140px",
                        md:
                          props.projectData.img.type === "portrait"
                            ? "250px"
                            : props.projectData.img.type === "square"
                            ? "250px"
                            : "190px",
                        lg:
                          props.projectData.img.type === "portrait"
                            ? "340px"
                            : props.projectData.img.type === "square"
                            ? "320px"
                            : "240px",
                      },
                      maxWidth: {
                        xs:
                          props.projectData.img.type === "landscape"
                            ? "220px"
                            : props.projectData.img.type === "square"
                            ? "200px"
                            : "140px",
                        md:
                          props.projectData.img.type === "landscape"
                            ? "270px"
                            : props.projectData.img.type === "square"
                            ? "250px"
                            : "190px",
                        lg:
                          props.projectData.img.type === "landscape"
                            ? "370px"
                            : props.projectData.img.type === "square"
                            ? "320px"
                            : "250px",
                      },
                      boxShadow: `-10px -10px 1px 0px ${theme.palette.success.light},
                            -20px -20px 1px 0px ${theme.palette.success.main},
                            -30px -30px 1px 0px ${theme.palette.success.dark}`,
                    }}
                    alt={props.projectData.title}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box pb={paddingTitleDescription}>
                  <Typography variant="subtitle1" color="textPrimary">
                    {props.projectData.title}
                  </Typography>
                </Box>
                <Box textAlign="justify">
                  <Typography variant="body1" color="textPrimary">
                    {props.projectData.description}
                  </Typography>
                </Box>
                <Box>{insertButtons(props)}</Box>
              </Grid>
            </Grid>
          </RevealFromLeftOnEnter> */}
        </Grid>
      ) : (
        <Grid item xs={11} md={12}>
          <ScrollTriggerFromRight
            x="5vw"
            markers={showMarkers}
            start={animationStart}
            end={animationEnd}
          >
            <Grid container alignItems="center" justifyContent="space-evenly">
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box py={5} px={5}>
                  <Image
                    duration={0}
                    src={props.projectData.img.path}
                    sx={{
                      // margin: { lg: "0 30px 0 0" },
                      maxHeight: {
                        xs:
                          props.projectData.img.type === "portrait"
                            ? "200px"
                            : props.projectData.img.type === "square"
                            ? "200px"
                            : "140px",
                        md:
                          props.projectData.img.type === "portrait"
                            ? "250px"
                            : props.projectData.img.type === "square"
                            ? "250px"
                            : "190px",
                        lg:
                          props.projectData.img.type === "portrait"
                            ? "340px"
                            : props.projectData.img.type === "square"
                            ? "320px"
                            : "240px",
                      },
                      maxWidth: {
                        xs:
                          props.projectData.img.type === "landscape"
                            ? "220px"
                            : props.projectData.img.type === "square"
                            ? "200px"
                            : "140px",
                        md:
                          props.projectData.img.type === "landscape"
                            ? "270px"
                            : props.projectData.img.type === "square"
                            ? "250px"
                            : "190px",
                        lg:
                          props.projectData.img.type === "landscape"
                            ? "370px"
                            : props.projectData.img.type === "square"
                            ? "320px"
                            : "250px",
                      },
                      boxShadow: `10px -10px 1px 0px ${theme.palette.success.light},
                              20px -20px 1px 0px ${theme.palette.success.main},
                              30px -30px 1px 0px ${theme.palette.success.dark}`,
                    }}
                    alt={props.projectData.title}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <Box pb={paddingTitleDescription}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(props.projectData.title),
                    }}
                  ></Typography>
                </Box>
                <Box textAlign="justify">
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(props.projectData.description),
                    }}
                  ></Typography>
                </Box>
                {/* <Box>{insertButtons(props)}</Box> */}
                <Box>{insertLinks(props)}</Box>
              </Grid>
            </Grid>
          </ScrollTriggerFromRight>
          {/* <RevealFromRightOnEnter x="5vw">
            <Grid container alignItems="center" justifyContent="space-evenly">
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box py={5}>
                  <Image
                    className={`projectTrigger${props.index}`}
                    duration={0}
                    src={props.projectData.img.path}
                    sx={{
                      maxHeight:
                        props.projectData.img.type === "portrait"
                          ? "240px"
                          : props.projectData.img.type === "square"
                          ? "200px"
                          : "112px",
                      maxWidth:
                        props.projectData.img.type === "landscape"
                          ? "220px"
                          : props.projectData.img.type === "square"
                          ? "200px"
                          : "134px",
                      boxShadow: `10px -10px 1px 0px ${theme.palette.success.light},
                              20px -20px 1px 0px ${theme.palette.success.main},
                              30px -30px 1px 0px ${theme.palette.success.dark}`,
                    }}
                    alt={props.projectData.title}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <Box pb={paddingTitleDescription}>
                  <Typography variant="subtitle1" color="textPrimary">
                    {props.projectData.title}
                  </Typography>
                </Box>
                <Box textAlign="justify">
                  <Typography variant="body1" color="textPrimary">
                    {props.projectData.description}
                  </Typography>
                </Box>
                <Box>{insertButtons(props)}</Box>
              </Grid>
            </Grid>
          </RevealFromRightOnEnter> */}
        </Grid>
      )}
    </Grid>
  );
};
export default ProjectElement;
