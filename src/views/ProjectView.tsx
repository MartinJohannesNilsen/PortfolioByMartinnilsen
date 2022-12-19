import { FC, useState } from "react";
import { Box, Typography } from "@mui/material";
import ProjectList from "../components/ProjectList/ProjectList";
import useDidUpdate from "../utils/useDidUpdate";
import { ProjectViewProps } from "../types";

const ProjectView: FC<ProjectViewProps> = (props) => {
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
    <Box
      sx={{
        display: "table",
        width: "100%",
        backgroundColor: "primary.main",
        position: "relative",
      }}
      textAlign="center"
      id={props.id}
    >
      <Box pt={4}>
        {props.language === "norwegian" ? (
          <>
            <Typography variant="h3" color="textPrimary" display="inline">
              Et utvalg
            </Typography>
            <Typography
              variant="h3"
              display="inline"
              sx={{
                color: "error.main",
              }}
            >
              &nbsp;prosjekter
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h3" color="textPrimary" display="inline">
              Some of my
            </Typography>
            <Typography
              variant="h3"
              display="inline"
              sx={{
                color: "error.main",
              }}
            >
              &nbsp;projects
            </Typography>
          </>
        )}
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
