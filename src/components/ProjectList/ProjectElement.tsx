import { FC } from "react";
import { Box, Grid, Typography, Hidden, useMediaQuery } from "@mui/material";
import { Image } from "mui-image";
import insertButtons from "./InsertButtons";
import {
  ScrollTriggerLeft,
  ScrollTriggerRight,
} from "../Animations/ScrollTrigger";
import { useTheme } from "../../ThemeProvider";

export type ProjectProps = {
  title: string;
  description: string;
  img: {
    path: string;
    type: "landscape" | "portrait" | "square";
  };
  linkToWebsite?: string;
  linkToGitHub?: string;
  linkToDemovideo?: string;
  linkToReadMe?: string;
  linkToPaper?: string;
  technologies?: string[];
};

export type ProjectElementProps = {
  projectData: ProjectProps;
  imgPosition: "left" | "right";
  linkButtonText: string[];
};

const ProjectElement: FC<ProjectElementProps> = (props) => {
  const paddingTitleDescription = 1.7;
  const showMarkers = process.env.REACT_APP_SHOW_GSAP_MARKERS === "true";
  const { theme } = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const animationOffset = mdUp ? -300 : -50;
  const animationStart = animationOffset + -250 + "px center";
  const animationEnd = animationOffset + -100 + "px center";

  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        {props.imgPosition === "left" ? (
          <>
            <Grid item xs={11} md={12}>
              <ScrollTriggerLeft
                x="5vw"
                markers={showMarkers}
                start={animationStart}
                end={animationEnd}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  <Grid item xs={12} md={5} lg={6}>
                    <Box py={5}>
                      <Image
                        src={props.projectData.img.path}
                        sx={{
                          height: {
                            sm:
                              props.projectData.img.type === "portrait"
                                ? "200px"
                                : props.projectData.img.type === "square"
                                ? "200px"
                                : "default",
                            md:
                              props.projectData.img.type === "portrait"
                                ? "250px"
                                : props.projectData.img.type === "square"
                                ? "250px"
                                : "default",
                            lg:
                              props.projectData.img.type === "portrait"
                                ? "340px"
                                : props.projectData.img.type === "square"
                                ? "320px"
                                : "default",
                          },
                          width: {
                            sm:
                              props.projectData.img.type === "landscape"
                                ? "220px"
                                : props.projectData.img.type === "square"
                                ? "200px"
                                : "default",
                            md:
                              props.projectData.img.type === "landscape"
                                ? "270px"
                                : props.projectData.img.type === "square"
                                ? "250px"
                                : "default",
                            lg:
                              props.projectData.img.type === "landscape"
                                ? "370px"
                                : props.projectData.img.type === "square"
                                ? "320px"
                                : "default",
                          },
                          boxShadow: `-10px -10px 1px 0px ${"success.light"},
                            -20px -20px 1px 0px ${"success.main"},
                            -30px -30px 1px 0px ${"success.dark"}`,
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
              </ScrollTriggerLeft>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={11} md={12}>
              <ScrollTriggerRight
                x="5vw"
                markers={showMarkers}
                start={animationStart}
                end={animationEnd}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  <Hidden mdUp>
                    <Grid item xs={12} md={6}>
                      <Box py={5}>
                        <Image
                          src={props.projectData.img.path}
                          sx={{
                            height: {
                              sm:
                                props.projectData.img.type === "portrait"
                                  ? "200px"
                                  : props.projectData.img.type === "square"
                                  ? "200px"
                                  : "default",
                              md:
                                props.projectData.img.type === "portrait"
                                  ? "250px"
                                  : props.projectData.img.type === "square"
                                  ? "250px"
                                  : "default",
                              lg:
                                props.projectData.img.type === "portrait"
                                  ? "340px"
                                  : props.projectData.img.type === "square"
                                  ? "320px"
                                  : "default",
                            },
                            width: {
                              sm:
                                props.projectData.img.type === "landscape"
                                  ? "220px"
                                  : props.projectData.img.type === "square"
                                  ? "200px"
                                  : "default",
                              md:
                                props.projectData.img.type === "landscape"
                                  ? "270px"
                                  : props.projectData.img.type === "square"
                                  ? "250px"
                                  : "default",
                              lg:
                                props.projectData.img.type === "landscape"
                                  ? "370px"
                                  : props.projectData.img.type === "square"
                                  ? "320px"
                                  : "default",
                            },
                            boxShadow: `10px -10px 1px 0px ${"success.light"},
                              20px -20px 1px 0px ${"success.main"},
                              30px -30px 1px 0px ${"success.dark"}`,
                          }}
                          alt={props.projectData.title}
                        />
                      </Box>
                    </Grid>
                  </Hidden>
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
                  <Hidden mdDown>
                    <Grid item xs={12} md={5} lg={6}>
                      <Box py={10}>
                        <Image
                          src={props.projectData.img.path}
                          sx={{
                            height: {
                              sm:
                                props.projectData.img.type === "portrait"
                                  ? "200px"
                                  : props.projectData.img.type === "square"
                                  ? "200px"
                                  : "default",
                              md:
                                props.projectData.img.type === "portrait"
                                  ? "250px"
                                  : props.projectData.img.type === "square"
                                  ? "250px"
                                  : "default",
                              lg:
                                props.projectData.img.type === "portrait"
                                  ? "340px"
                                  : props.projectData.img.type === "square"
                                  ? "320px"
                                  : "default",
                            },
                            width: {
                              sm:
                                props.projectData.img.type === "landscape"
                                  ? "220px"
                                  : props.projectData.img.type === "square"
                                  ? "200px"
                                  : "default",
                              md:
                                props.projectData.img.type === "landscape"
                                  ? "270px"
                                  : props.projectData.img.type === "square"
                                  ? "250px"
                                  : "default",
                              lg:
                                props.projectData.img.type === "landscape"
                                  ? "370px"
                                  : props.projectData.img.type === "square"
                                  ? "320px"
                                  : "default",
                            },
                            boxShadow: `10px -10px 1px 0px ${"success.light"},
                              20px -20px 1px 0px ${"success.main"},
                              30px -30px 1px 0px ${"success.dark"}`,
                          }}
                          alt={props.projectData.title}
                        />
                      </Box>
                    </Grid>
                  </Hidden>
                </Grid>
              </ScrollTriggerRight>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};
export default ProjectElement;
