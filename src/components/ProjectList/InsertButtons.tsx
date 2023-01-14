import React from "react";
import { Button, SxProps, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useTheme } from "../../ThemeProvider";
import { ProjectElementProps } from "../../types";
import githubIcon from "@iconify-icons/cib/github";
import documentBlank from "@iconify-icons/carbon/document-blank";
import documentPdf from "@iconify-icons/carbon/document-pdf";
import desktopOutlined from "@iconify-icons/ant-design/desktop-outlined";
import cameraVideo from "@iconify-icons/bi/camera-video";

const insertButtons = (props: ProjectElementProps) => {
  const { theme } = useTheme();
  const isHosted = props.projectData.hasOwnProperty("linkToWebsite");
  const hasGitHub = props.projectData.hasOwnProperty("linkToGitHub");
  const hasDemoVid = props.projectData.hasOwnProperty("linkToDemovideo");
  const hasReadMe = props.projectData.hasOwnProperty("linkToReadMe");
  const hasPaper = props.projectData.hasOwnProperty("linkToPaper");

  const buttonStyle: SxProps = {
    color: theme.palette.text.primary,
    border: "2px solid",
    borderColor: theme.palette.text.primary,
    borderRadius: "2px",
    padding: "5px",
    width: "40%",
    margin: { xs: "30px 10px", md: "30px 15px" },
    "&:hover": {
      border: "2px solid " + theme.palette.error.main,
      // color: theme.palette.error.main,
    },
  };

  return (
    <React.Fragment>
      {hasGitHub ? (
        <Button
          sx={buttonStyle}
          onClick={() => window.open(props.projectData.linkToGitHub, "_blank")}
          startIcon={
            <Icon
              icon={githubIcon}
              style={{ marginRight: "5px", marginBottom: "1px" }}
              color={theme.palette.text.primary}
            />
          }
        >
          <Typography variant="button" color="inherit">
            {props.linkButtonText[1]}
          </Typography>
        </Button>
      ) : (
        <></>
      )}
      {isHosted ? (
        <Button
          sx={buttonStyle}
          onClick={() => window.open(props.projectData.linkToWebsite, "_blank")}
          startIcon={
            <Icon
              icon={desktopOutlined}
              style={{ marginRight: "5px" }}
              color={theme.palette.text.primary}
            />
          }
        >
          <Typography variant="button" color="inherit">
            {props.linkButtonText[2]}
          </Typography>
        </Button>
      ) : (
        <></>
      )}
      {hasDemoVid ? (
        <Button
          sx={buttonStyle}
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
          <Typography variant="button" color="inherit">
            {props.linkButtonText[3]}
          </Typography>
        </Button>
      ) : (
        <></>
      )}
      {hasReadMe ? (
        <Button
          sx={buttonStyle}
          onClick={() => window.open(props.projectData.linkToReadMe, "_blank")}
          startIcon={
            <Icon
              icon={documentBlank}
              style={{ marginRight: "5px", marginBottom: "1px" }}
              color={theme.palette.text.primary}
            />
          }
        >
          <Typography variant="button" color="inherit">
            {props.linkButtonText[4]}
          </Typography>
        </Button>
      ) : (
        <></>
      )}
      {hasPaper ? (
        <Button
          sx={buttonStyle}
          onClick={() => window.open(props.projectData.linkToPaper, "_blank")}
          startIcon={
            <Icon
              icon={documentPdf}
              style={{ marginRight: "5px", marginBottom: "1px" }}
              color={theme.palette.text.primary}
            />
          }
        >
          <Typography variant="button" color="inherit">
            {props.linkButtonText[5]}
          </Typography>
        </Button>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};
export default insertButtons;
