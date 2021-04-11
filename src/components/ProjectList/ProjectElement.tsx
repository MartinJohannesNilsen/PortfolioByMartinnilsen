import React, { FC } from "react";
import {
  Box,
  makeStyles,
  Grid,
  Typography,
  // Button,
  Hidden,
} from "@material-ui/core";

type ProjectElementProps = {
  projectData: {
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
  imgPosition: "left" | "right";
};

const ProjectElement: FC<ProjectElementProps> = (props) => {
  const classes = useStyles(props);

  // const insertButtons = (props: any) => {
  //   const isHosted = props.projectData.hasOwnProperty("linkToWebsite");
  //   const hasGitHub = props.projectData.hasOwnProperty("linkToGitHub");
  //   const hasDemoVid = props.projectData.hasOwnProperty("linkToDemovideo");
  //   const hasReadMe = props.projectData.hasOwnProperty("linkToReadMe");
  //   const hasPaper = props.projectData.hasOwnProperty("linkToPaper");
  //   return (
  //     <React.Fragment>
  //       {hasGitHub ? <Button></Button> : <></>}
  //       {isHosted ? <Button></Button> : <></>}
  //       {hasDemoVid ? <Button></Button> : <></>}
  //       {hasReadMe ? <Button></Button> : <></>}
  //       {hasPaper ? <Button></Button> : <></>}
  //     </React.Fragment>
  //   );
  // };

  return (
    <>
      <Grid container alignItems="center" justify="center">
        {props.imgPosition === "left" ? (
          <>
            <Grid item xs={12} md={6}>
              <Box py={5}>
                <img
                  src={props.projectData.img.path}
                  className={classes.img}
                  alt={props.projectData.title}
                />
              </Box>
            </Grid>
            <Grid item xs={11} md={6}>
              <Box pb={1}>
                <Typography variant="body1" color="textSecondary">
                  {props.projectData.title}
                </Typography>
              </Box>
              <Box textAlign="justify">
                <Typography variant="body2" color="textSecondary">
                  {props.projectData.description}
                </Typography>
              </Box>
            </Grid>
          </>
        ) : (
          <>
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
            <Grid item xs={11} md={6}>
              <Box pb={1}>
                <Typography variant="body1" color="textSecondary">
                  {props.projectData.title}
                </Typography>
              </Box>
              <Box textAlign="justify">
                <Typography variant="body2" color="textSecondary">
                  {props.projectData.description}
                </Typography>
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} md={6}>
                <Box py={10}>
                  <img
                    src={props.projectData.img.path}
                    className={classes.img}
                    alt={props.projectData.title}
                  />
                </Box>
              </Grid>
            </Hidden>
          </>
        )}
      </Grid>
    </>
  );
};
export default ProjectElement;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  img: {
    height: (props: ProjectElementProps) =>
      props.projectData.img.type === "portrait" ? "200px" : "default",
    width: (props: ProjectElementProps) =>
      props.projectData.img.type === "landscape" ? "220px" : "default",
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
        props.projectData.img.type === "portrait" ? "250px" : "default",
      width: (props: ProjectElementProps) =>
        props.projectData.img.type === "landscape" ? "270px" : "default",
    },
    [theme.breakpoints.up("lg")]: {
      height: (props: ProjectElementProps) =>
        props.projectData.img.type === "portrait" ? "340px" : "default",
      width: (props: ProjectElementProps) =>
        props.projectData.img.type === "landscape" ? "370px" : "default",
    },
  },
}));
