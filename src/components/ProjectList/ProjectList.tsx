import { FC } from "react";
import { Box, makeStyles, Grid, Button, Typography } from "@material-ui/core";
import ProjectElement from "./ProjectElement";

type ProjectListProps = {
  projects: [];
  numShowing: number;
  setNumShowing: (num: number) => void;
  numIncrease: number;
  linkButtonText: string[];
};

export const ProjectList: FC<ProjectListProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box pt={10} className={classes.root}>
        <Grid container justify="center">
          {props.projects
            .slice(props.projects.length - props.numShowing)
            .reverse()
            .map((project, index) => (
              <Grid item xs={10} lg={8} xl={7}>
                <Box mb={index !== props.projects.length - 1 ? 10 : 5}>
                  <ProjectElement
                    projectData={project}
                    imgPosition={index % 2 === 0 ? "right" : "left"}
                    linkButtonText={props.linkButtonText}
                  />
                </Box>
              </Grid>
            ))}
        </Grid>
        <Box pb={8} pt={4}>
          {props.numShowing < props.projects.length ? (
            <Button
              className={classes.button}
              onClick={() =>
                props.setNumShowing(
                  props.numShowing + props.numIncrease < props.projects.length
                    ? props.numShowing + props.numIncrease
                    : props.numShowing +
                        props.projects.length -
                        props.numShowing
                )
              }
            >
              <Typography variant="button" color="textPrimary">
                {props.linkButtonText[5]}
              </Typography>
            </Button>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </>
  );
};
export default ProjectList;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
  },
  button: {
    border: "2px solid " + theme.palette.text.secondary,
  },
}));
