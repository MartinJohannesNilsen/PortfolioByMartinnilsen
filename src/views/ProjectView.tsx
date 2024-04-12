import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import { useTheme } from "../ThemeProvider";
import { ProjectViewProps } from "../types";
import useDidUpdate from "../utils/useDidUpdate";

const ProjectView: FC<ProjectViewProps> = (props) => {
  const [numShowing, setNumShowing] = useState<number>(
    parseInt(process.env.REACT_APP_NUM_PROJECTS_SHOWING!)
  );
  const [numIncrease] = useState<number>(
    parseInt(process.env.REACT_APP_NUM_PROJECTS_INCREASE!)
  );
  const { theme } = useTheme();

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
      <Box pt={5}>
        {props.language === "norwegian" ? (
          <>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h3"
              color="textPrimary"
              display="inline"
            >
              Et utvalg
            </Typography>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h3"
              display="inline"
              sx={{
                color: "secondary.main",
              }}
            >
              &nbsp;prosjekter.
            </Typography>
          </>
        ) : (
          <>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h3"
              color="textPrimary"
              display="inline"
            >
              Some of my
            </Typography>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h3"
              display="inline"
              sx={{
                color: "secondary.main",
              }}
            >
              &nbsp;projects.
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
        language={props.language}
      />
    </Box>
  );
};
export default ProjectView;
