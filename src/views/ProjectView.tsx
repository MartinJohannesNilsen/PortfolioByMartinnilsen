import { FC, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Icon } from "@iconify/react";
import caretDown from "@iconify-icons/carbon/caret-down";
import ProjectList from "../components/ProjectList/ProjectList";

type ProjectViewProps = {
  id: string;
  data: {
    projects: [];
    projectsTitle: string;
    linkButtonText: string[];
  };
};

const ProjectView: FC<ProjectViewProps> = (props) => {
  const classes = useStyles();
  const [numShowing, setNumShowing] = useState<number>(3);
  const [numIncrease] = useState<number>(3);

  return (
    <Box className={classes.root} textAlign="center" id={props.id}>
      <Icon icon={caretDown} className={classes.backgroundTriangle} />
      <Box pt={3}>
        <Typography variant="subtitle1" color="textSecondary">
          {props.data.projectsTitle}
        </Typography>
      </Box>
      <ProjectList
        projects={props.data.projects}
        numShowing={numShowing}
        setNumShowing={setNumShowing}
        numIncrease={numIncrease}
        linkButtonText={props.data.linkButtonText}
      />
    </Box>
  );
};
export default ProjectView;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "table",
    width: "100%",
    backgroundColor: theme.palette.text.primary,
    position: "relative"
  },
  backgroundTriangle: {
    color: theme.palette.text.secondary,
    position: "absolute",
    margin: "-45px",
    height: "100px",
    width: "100px",
  },
  button: {
    border: "2px solid " + theme.palette.text.secondary,
  },
}));
