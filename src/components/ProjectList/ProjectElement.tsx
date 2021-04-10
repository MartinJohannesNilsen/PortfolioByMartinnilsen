import { FC } from "react";
import { Box, makeStyles, Grid, Typography, Button } from "@material-ui/core";
import { Icon } from "@iconify/react";
import caretDown from "@iconify-icons/carbon/caret-down";
import StudyPalImg from "../../assets/img/Studypal.png";
import React from "react";

type ProjectElementProps = {
  projectData: {
    title: string;
    description: string;
    imgPath: string;
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

  const insertButtons = (props: any) => {
    const isHosted = props.projectData.hasOwnProperty("linkToWebsite");
    const hasGitHub = props.projectData.hasOwnProperty("linkToGitHub");
    const hasDemoVid = props.projectData.hasOwnProperty("linkToDemovideo");
    const hasReadMe = props.projectData.hasOwnProperty("linkToReadMe");
    const hasPaper = props.projectData.hasOwnProperty("linkToPaper");
    return (
      <React.Fragment>
        {hasGitHub ? <Button></Button> : <></>}
        {isHosted ? <Button></Button> : <></>}
        {hasDemoVid ? <Button></Button> : <></>}
        {hasReadMe ? <Button></Button> : <></>}
        {hasPaper ? <Button></Button> : <></>}
      </React.Fragment>
    );
  };

  return (
    <>
      <Grid container alignItems="center">
        {props.imgPosition === "left" ? (
          <>
            <Grid item xs={6}>
              <img
                src={props.projectData.imgPath}
                className={classes.img}
                alt={props.projectData.title}
              />
            </Grid>
            <Grid item xs={6}>
              <Box pb={1}>
                <Typography variant="h2" color="textSecondary">
                  {props.projectData.title}
                </Typography>
              </Box>
              <Box textAlign="left">
                <Typography variant="h4" color="textSecondary">
                  {props.projectData.description}
                </Typography>
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={6}>
              <Box pb={1}>
                <Typography variant="h2" color="textSecondary">
                  {props.projectData.title}
                </Typography>
              </Box>
              <Box textAlign="left">
                <Typography variant="h4" color="textSecondary">
                  {props.projectData.description}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} style={{ height: "100%" }}>
              <img
                src={props.projectData.imgPath}
                className={classes.img}
                alt={props.projectData.title}
              />
            </Grid>
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
    width: "80%",
    height: "100%",
    boxShadow: (props: ProjectElementProps) =>
      props.imgPosition === "right"
        ? `10px -10px 1px 0px ${theme.palette.success.light},
            20px -20px 1px 0px ${theme.palette.success.main},
            30px -30px 1px 0px ${theme.palette.success.dark}`
        : `-10px -10px 1px 0px ${theme.palette.success.light},
            -20px -20px 1px 0px ${theme.palette.success.main},
            -30px -30px 1px 0px ${theme.palette.success.dark}`,
  },
}));
