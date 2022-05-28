import React, { FC } from "react";
import { Box, makeStyles, Grid, Typography, Hidden } from "@material-ui/core";
import insertButtons from "../ProjectButtons/insertButtons";
import {
  ScrollTriggerLeft,
  ScrollTriggerRight,
} from "../Animations/ScrollTrigger";

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
  const classes = useStyles(props);
  const paddingTitleDescription = 1.7;
  const showMarkers = process.env.REACT_APP_SHOW_MARKERS == "true"; //Debug purposes
  const animationStart = "-100px center";
  const animationEnd = "50px center";

  return (
    <>
      <Grid container alignItems="center" justify="center">
        {props.imgPosition === "left" ? (
          <>
            <Grid item xs={11} md={12}>
              <ScrollTriggerLeft
                x="5vw"
                markers={showMarkers}
                start={animationStart}
                end={animationEnd}
              >
                <Grid container alignItems="center" justify="space-evenly">
                  <Grid item xs={12} md={5} lg={6}>
                    <Box py={5}>
                      <img
                        src={props.projectData.img.path}
                        className={classes.img}
                        alt={props.projectData.title}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box pb={paddingTitleDescription}>
                      <Typography variant="body1" color="textPrimary">
                        {props.projectData.title}
                      </Typography>
                    </Box>
                    <Box textAlign="justify">
                      <Typography variant="body2" color="textPrimary">
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
                <Grid container alignItems="center" justify="space-evenly">
                  <Hidden mdUp>
                    <Grid item xs={12} md={6}>
                      <Box py={5}>
                        <img
                          src={props.projectData.img.path}
                          className={classes.img}
                          alt={props.projectData.title}
                        />
                      </Box>
                    </Grid>
                  </Hidden>
                  <Grid item xs={12} md={6}>
                    <Box pb={paddingTitleDescription}>
                      <Typography variant="body1" color="textPrimary">
                        {props.projectData.title}
                      </Typography>
                    </Box>
                    <Box textAlign="justify">
                      <Typography variant="body2" color="textPrimary">
                        {props.projectData.description}
                      </Typography>
                    </Box>
                    <Box>{insertButtons(props)}</Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item xs={12} md={5} lg={6}>
                      <Box py={10}>
                        <img
                          src={props.projectData.img.path}
                          className={classes.img}
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

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  button: {
    border: "2px solid " + theme.palette.text.primary,
    borderRadius: "2px",
    padding: "5px",
    width: "40%",
    margin: "30px 10px",
    [theme.breakpoints.up("md")]: {
      margin: "30px 15px",
    },
  },
  img: {
    height: (props: ProjectElementProps) =>
      props.projectData.img.type === "portrait"
        ? "200px"
        : props.projectData.img.type === "square"
        ? "200px"
        : "default",
    width: (props: ProjectElementProps) =>
      props.projectData.img.type === "landscape"
        ? "220px"
        : props.projectData.img.type === "square"
        ? "200px"
        : "default",
    boxShadow: (props: ProjectElementProps) =>
      props.imgPosition === "right"
        ? `10px -10px 1px 0px ${theme.palette.success.light},
            20px -20px 1px 0px ${theme.palette.success.main},
            30px -30px 1px 0px ${theme.palette.success.dark}`
        : `-10px -10px 1px 0px ${theme.palette.success.light},
            -20px -20px 1px 0px ${theme.palette.success.main},
            -30px -30px 1px 0px ${theme.palette.success.dark}`,
    [theme.breakpoints.up("md")]: {
      height: (props: ProjectElementProps) =>
        props.projectData.img.type === "portrait"
          ? "250px"
          : props.projectData.img.type === "square"
          ? "250px"
          : "default",
      width: (props: ProjectElementProps) =>
        props.projectData.img.type === "landscape"
          ? "270px"
          : props.projectData.img.type === "square"
          ? "250px"
          : "default",
    },
    [theme.breakpoints.up("lg")]: {
      height: (props: ProjectElementProps) =>
        props.projectData.img.type === "portrait"
          ? "340px"
          : props.projectData.img.type === "square"
          ? "320px"
          : "default",
      width: (props: ProjectElementProps) =>
        props.projectData.img.type === "landscape"
          ? "370px"
          : props.projectData.img.type === "square"
          ? "320px"
          : "default",
    },
  },
}));
