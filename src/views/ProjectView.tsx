import { FC, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Icon } from "@iconify/react";
import caretDown from "@iconify-icons/carbon/caret-down";
import ProjectList from "../components/ProjectList/ProjectList";
import useDidUpdate from "../utils/useDidUpdate";

type ProjectViewProps = {
  id: string;
  data: {
    title: string;
    buttonTexts: string[];
    listOfProjects: [];
  };
  triggerRefreshScrollTriggers?: () => void;
};

const ProjectView: FC<ProjectViewProps> = (props) => {
  const classes = useStyles();
  // const [numShowing, setNumShowing] = useState<number>(100); //Remove filtering
  const [numShowing, setNumShowing] = useState<number>(3);
  const [numIncrease] = useState<number>(3);

  useDidUpdate(() => {
    if (props.triggerRefreshScrollTriggers) {
      props.triggerRefreshScrollTriggers();
    }
  }, [numShowing]);

  return (
    <Box className={classes.root} textAlign="center" id={props.id}>
      <Icon icon={caretDown} className={classes.backgroundTriangle} />
      <Box pt={3}>
        <Typography variant="subtitle1" color="textPrimary">
          {props.data.title}
        </Typography>
      </Box>
      <ProjectList
        projects={props.data.listOfProjects}
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
