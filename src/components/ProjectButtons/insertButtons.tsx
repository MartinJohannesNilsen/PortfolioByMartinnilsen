import React from "react";
import { Button, Typography } from "@material-ui/core";
import { Icon } from "@iconify/react";
import { ProjectElementProps, useStyles } from "../ProjectList/ProjectElement";
import { useTheme } from "../../ThemeProvider";

// Icons
import githubIcon from "@iconify-icons/cib/github";
import documentBlank from "@iconify-icons/carbon/document-blank";
import documentPdf from "@iconify-icons/carbon/document-pdf";
import desktopOutlined from "@iconify-icons/ant-design/desktop-outlined";
import cameraVideo from "@iconify-icons/bi/camera-video";

const insertButtons = (props: ProjectElementProps) => {
  const classes = useStyles(props);
  const { theme } = useTheme();

  const isHosted = props.projectData.hasOwnProperty("linkToWebsite");
  const hasGitHub = props.projectData.hasOwnProperty("linkToGitHub");
  const hasDemoVid = props.projectData.hasOwnProperty("linkToDemovideo");
  const hasReadMe = props.projectData.hasOwnProperty("linkToReadMe");
  const hasPaper = props.projectData.hasOwnProperty("linkToPaper");

  return (
    <React.Fragment>
      {hasGitHub ? (
        <Button
          className={classes.button}
          onClick={() => window.open(props.projectData.linkToGitHub, "_blank")}
          startIcon={
            <Icon
              icon={githubIcon}
              style={{ marginRight: "5px", marginBottom: "1px" }}
              color={theme.palette.text.primary}
            />
          }
        >
          <Typography variant="button" color="textPrimary">
            {props.linkButtonText[1]}
          </Typography>
        </Button>
      ) : (
        <></>
      )}
      {isHosted ? (
        <Button
          className={classes.button}
          onClick={() => window.open(props.projectData.linkToWebsite, "_blank")}
          startIcon={
            <Icon
              icon={desktopOutlined}
              style={{ marginRight: "5px" }}
              color={theme.palette.text.primary}
            />
          }
        >
          <Typography variant="button" color="textPrimary">
            {props.linkButtonText[2]}
          </Typography>
        </Button>
      ) : (
        <></>
      )}
      {hasDemoVid ? (
        <Button
          className={classes.button}
          onClick={() =>
            window.open(props.projectData.linkToDemovideo, "_blank")
          }
          startIcon={
            <Icon
              icon={cameraVideo}
              style={{ marginRight: "5px" }}
              color={theme.palette.text.primary}
            />
          }
        >
          <Typography variant="button" color="textPrimary">
            {props.linkButtonText[3]}
          </Typography>
        </Button>
      ) : (
        <></>
      )}
      {hasReadMe ? (
        <Button
          className={classes.button}
          onClick={() => window.open(props.projectData.linkToReadMe, "_blank")}
          startIcon={
            <Icon
              icon={documentBlank}
              style={{ marginRight: "5px", marginBottom: "1px" }}
              color={theme.palette.text.primary}
            />
          }
        >
          <Typography variant="button" color="textPrimary">
            {props.linkButtonText[4]}
          </Typography>
        </Button>
      ) : (
        <></>
      )}
      {hasPaper ? (
        <Button
          className={classes.button}
          onClick={() => window.open(props.projectData.linkToPaper, "_blank")}
          startIcon={
            <Icon
              icon={documentPdf}
              style={{ marginRight: "5px", marginBottom: "1px" }}
              color={theme.palette.text.primary}
            />
          }
        >
          <Typography variant="button" color="textPrimary">
            {props.linkButtonText[5]}
          </Typography>
        </Button>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};
