import { FC, useRef } from "react";
import DOMPurify from "dompurify";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { gsap } from "gsap";
import insertLinks from "./InsertLinks";
import {
  ScrollTriggerFromLeft,
  ScrollTriggerFromRight,
} from "../Animations/ScrollTrigger";
import { useTheme } from "../../ThemeProvider";
import { ProjectElementProps } from "../../types";

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
              {/* Image */}
              <Grid item xs={12} md={5} lg={5}>
                <Box py={5} px={5}>
                  <Box
                    component="img"
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
                      border: `1.5px solid ${theme.palette.grey[600]}`,
                      borderRadius: "10px",
                      boxShadow: `
                            -3px -3px 1px 0px ${theme.palette.grey[700]},
                            -6px -6px 1px 0px ${theme.palette.grey[800]}`,
                    }}
                    alt={props.projectData.title}
                  />
                </Box>
              </Grid>
              {/* Text */}
              <Grid item xs={12} md={6}>
                <Box pb={paddingTitleDescription}>
                  <Typography
                    fontFamily={theme.typography.fontFamily}
                    variant="subtitle1"
                    color="textPrimary"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(props.projectData.title),
                    }}
                  ></Typography>
                </Box>
                <Box textAlign="justify">
                  <Typography
                    fontFamily={theme.typography.fontFamily}
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
              {/* Image */}
              <Grid item xs={12} md={5} lg={5} order={{ xs: 1, md: 2 }}>
                <Box py={5} px={5}>
                  <Box
                    component="img"
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
                      border: `1.5px solid ${theme.palette.grey[600]}`,
                      borderRadius: "10px",
                      boxShadow: `
                            3px -3px 1px 0px ${theme.palette.grey[700]},
                            6px -6px 1px 0px ${theme.palette.grey[800]}`,
                    }}
                    alt={props.projectData.title}
                  />
                </Box>
              </Grid>
              {/* Text */}
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <Box pb={paddingTitleDescription}>
                  <Typography
                    fontFamily={theme.typography.fontFamily}
                    variant="subtitle1"
                    color="textPrimary"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(props.projectData.title),
                    }}
                  ></Typography>
                </Box>
                <Box textAlign="justify">
                  <Typography
                    fontFamily={theme.typography.fontFamily}
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
        </Grid>
      )}
    </Grid>
  );
};
export default ProjectElement;
