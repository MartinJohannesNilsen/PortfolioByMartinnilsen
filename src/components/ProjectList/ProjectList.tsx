import { FC } from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import ProjectElement from "./ProjectElement";
import { useTheme } from "../../ThemeProvider";
import { ProjectListProps } from "../../types";

export const ProjectList: FC<ProjectListProps> = (props) => {
  const { theme } = useTheme();

  return (
    <>
      <Box pt={10} sx={{ minHeight: "100%" }}>
        <Grid container justifyContent="center">
          {props.projects
            .slice(props.projects.length - props.numShowing)
            .reverse()
            .map((project, index) => (
              <Grid item xs={10} lg={8} xl={7} key={index}>
                <Box mb={index !== props.projects.length - 1 ? 10 : 5}>
                  <ProjectElement
                    index={index}
                    projectData={project}
                    imgPosition={index % 2 === 0 ? "right" : "left"}
                    linkButtonText={props.buttonTexts}
                    language={props.language}
                  />
                </Box>
              </Grid>
            ))}
        </Grid>
        <Box pb={8} pt={4}>
          {props.numShowing < props.projects.length ? (
            <Button
              sx={{
                color: "text.primary",
                // border: "2px solid " + theme.palette.text.primary + "50",
                border: "2px solid " + theme.palette.text.primary,
                "&:hover": {
                  border: "2px solid " + theme.palette.secondary.main,
                  color: theme.palette.secondary.main,
                },
              }}
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
              <Typography
                fontFamily={theme.typography.fontFamily}
                variant="button"
                color="inherit"
              >
                {props.buttonTexts[0]}
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
