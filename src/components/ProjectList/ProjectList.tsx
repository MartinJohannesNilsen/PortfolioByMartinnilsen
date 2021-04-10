import { FC } from "react";
import { Box, makeStyles, Grid, Typography } from "@material-ui/core";
import { Icon } from "@iconify/react";
import caretDown from "@iconify-icons/carbon/caret-down";
import ProjectElement from "./ProjectElement";

type ProjectListProps = {
  projects: [];
  numShowing: number;
};

export const ProjectList: FC<ProjectListProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box pt={15} className={classes.root}>
        <Grid container justify="center">
          {props.projects
            .slice(props.projects.length - props.numShowing)
            .reverse()
            .map((project, index) => (
              <Grid item xs={10}>
                <Box mb={index !== props.projects.length - 1 ? 15 : 5}>
                  <ProjectElement
                    projectData={project}
                    imgPosition={index % 2 === 0 ? "right" : "left"}
                  />
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};
export default ProjectList;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
  },
}));
