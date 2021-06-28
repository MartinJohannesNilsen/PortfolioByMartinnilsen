import React, { FC } from "react";
import {
  Box,
  makeStyles,
  Grid,
  Typography,
  Button,
  Hidden,
} from "@material-ui/core";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify-icons/cib/github";
import documentBlank from "@iconify-icons/carbon/document-blank";
import documentPdf from "@iconify-icons/carbon/document-pdf";
import desktopOutlined from "@iconify-icons/ant-design/desktop-outlined";
import cameraVideo from "@iconify-icons/bi/camera-video";
import { useTheme } from "../../ThemeProvider";

type ProjectElementProps = {
  projectData: {
    title: string;
    description: string;
    img: {
      path: string;
      type: "landscape" | "portrait" | "square";
    };
    linkToWebsite?: string;
    linkToGitHub?: string;
    linkToDemovideo?: string;
    linkToReadMe?: string;
    linkToPaper?: string;
    technologies?: string[];
  };
  imgPosition: "left" | "right";
  linkButtonText: string[];
};

const ProjectElement: FC<ProjectElementProps> = (props) => {
  const classes = useStyles(props);
  const { theme } = useTheme();

  const insertButtons = (props: ProjectElementProps) => {
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
            onClick={() =>
              window.open(props.projectData.linkToGitHub, "_blank")
            }
            startIcon={
              <Icon
                icon={githubIcon}
                style={{ marginRight: "5px", marginBottom: "1px" }}
                color={theme.palette.text.primary}
              />
            }
          >
            <Typography variant="button" color="textPrimary">
              {props.linkButtonText[0]}
            </Typography>
          </Button>
        ) : (
          <></>
        )}
        {isHosted ? (
          <Button
            className={classes.button}
            onClick={() =>
              window.open(props.projectData.linkToWebsite, "_blank")
            }
            startIcon={
              <Icon
                icon={desktopOutlined}
                style={{ marginRight: "5px" }}
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
              {props.linkButtonText[2]}
            </Typography>
          </Button>
        ) : (
          <></>
        )}
        {hasReadMe ? (
          <Button
            className={classes.button}
            onClick={() =>
              window.open(props.projectData.linkToReadMe, "_blank")
            }
            startIcon={
              <Icon
                icon={documentBlank}
                style={{ marginRight: "5px", marginBottom: "1px" }}
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
              {props.linkButtonText[4]}
            </Typography>
          </Button>
        ) : (
          <></>
        )}
      </React.Fragment>
    );
  };

  // const [imageLeft, imageLeftInView] = useInView({
  //   threshold: 0,
  // });

  // useEffect(() => {
  //   TweenMax.to(imageLeft, 1.2, { opacity: 0, x: 400, ease: Power3.easeIn });
  //   // eslint-disable-next-line
  // }, [imageLeftInView]);

  return (
    <>
      <Grid container alignItems="center" justify="center">
        {props.imgPosition === "left" ? (
          <>
            <Grid item xs={12} md={6}>
              <Box py={5}>
                <img
                  // ref={imageLeft}
                  src={props.projectData.img.path}
                  className={classes.img}
                  alt={props.projectData.title}
                />
              </Box>
            </Grid>
            <Grid item xs={11} md={6}>
              <Box pb={1}>
                <Typography variant="body1" color="textPrimary">
                  {props.projectData.title}
                </Typography>
              </Box>
              <Box textAlign="justify">
                <Typography variant="body2" color="textPrimary">
                  {props.projectData.description}
                </Typography>
              </Box>
              <Box>{insertButtons(props)}</Box>
            </Grid>
          </>
        ) : (
          <>
            <Hidden mdUp>
              <Grid item xs={12} md={6}>
                <Box py={5}>
                  <img
                    src={props.projectData.img.path}
                    className={classes.img}
                    alt={props.projectData.title}
                  />
                </Box>
              </Grid>
            </Hidden>
            <Grid item xs={11} md={6}>
              <Box pb={1}>
                <Typography variant="body1" color="textPrimary">
                  {props.projectData.title}
                </Typography>
              </Box>
              <Box textAlign="justify">
                <Typography variant="body2" color="textPrimary">
                  {props.projectData.description}
                </Typography>
              </Box>
              <Box>{insertButtons(props)}</Box>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} md={6}>
                <Box py={10}>
                  <img
                    src={props.projectData.img.path}
                    className={classes.img}
                    alt={props.projectData.title}
                  />
                </Box>
              </Grid>
            </Hidden>
          </>
        )}
      </Grid>
    </>
  );
};
export default ProjectElement;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  button: {
    border: "2px solid " + theme.palette.text.primary,
    borderRadius: "2px",
    padding: "5px",
    width: "40%",
    margin: "30px 10px",
    [theme.breakpoints.up("md")]: {
      margin: "30px 15px",
    },
  },
  img: {
    height: (props: ProjectElementProps) =>
      props.projectData.img.type === "portrait" ? "200px" : "default",
    width: (props: ProjectElementProps) =>
      props.projectData.img.type === "landscape" ? "220px" : "default",
    boxShadow: (props: ProjectElementProps) =>
      props.imgPosition === "right"
        ? `10px -10px 1px 0px ${theme.palette.success.light},
            20px -20px 1px 0px ${theme.palette.success.main},
            30px -30px 1px 0px ${theme.palette.success.dark}`
        : `-10px -10px 1px 0px ${theme.palette.success.light},
            -20px -20px 1px 0px ${theme.palette.success.main},
            -30px -30px 1px 0px ${theme.palette.success.dark}`,
    [theme.breakpoints.up("md")]: {
      height: (props: ProjectElementProps) =>
        props.projectData.img.type === "portrait" ? "250px" : "default",
      width: (props: ProjectElementProps) =>
        props.projectData.img.type === "landscape" ? "270px" : "default",
    },
    [theme.breakpoints.up("lg")]: {
      height: (props: ProjectElementProps) =>
        props.projectData.img.type === "portrait" ? "340px" : "default",
      width: (props: ProjectElementProps) =>
        props.projectData.img.type === "landscape" ? "370px" : "default",
    },
  },
}));
