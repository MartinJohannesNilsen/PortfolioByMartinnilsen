import { FC, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import ProjectList from "../components/ProjectList/ProjectList";
import useDidUpdate from "../utils/useDidUpdate";
import { ProjectProps } from "../components/ProjectList/ProjectElement";

type ProjectViewProps = {
  id: string;
  data: {
    title: string;
    buttonTexts: string[];
    projects: ProjectProps[];
  };
  triggerRefreshScrollTriggers?: () => void;
};

const ProjectView: FC<ProjectViewProps> = (props) => {
  const classes = useStyles();
  const [numShowing, setNumShowing] = useState<number>(
    parseInt(process.env.REACT_APP_NUM_PROJECTS_SHOWING!)
  );
  const [numIncrease] = useState<number>(
    parseInt(process.env.REACT_APP_NUM_PROJECTS_INCREASE!)
  );

  useDidUpdate(() => {
    if (props.triggerRefreshScrollTriggers) {
      props.triggerRefreshScrollTriggers();
    }
  }, [numShowing]);

  return (
    <Box className={classes.root} textAlign="center" id={props.id}>
      <Box pt={4}>
        <Typography variant="h3" className={classes.title}>
          {props.data.title}
        </Typography>
      </Box>
      <ProjectList
        projects={props.data.projects}
        numShowing={numShowing}
        setNumShowing={setNumShowing}
        numIncrease={numIncrease}
        buttonTexts={props.data.buttonTexts}
      />
    </Box>
  );
};
export default ProjectView;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "table",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    position: "relative",
  },
  title: {
    color: theme.palette.error.main,
  },
  backgroundTriangle: {
    color: theme.palette.secondary.main,
    position: "absolute",
    margin: "-45px",
    height: "100px",
    width: "100px",
  },
  button: {
    border: "2px solid " + theme.palette.text.primary,
  },
}));
