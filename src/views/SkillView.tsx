import { FC, useState } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Grid,
  IconButton,
  LinearProgress,
  withStyles,
  ClickAwayListener,
} from "@material-ui/core";
import { Icon } from "@iconify/react";
import caretDown from "@iconify-icons/carbon/caret-down";
import Circlegraph from "../components/Circlegraph/Circlegraph";
// Icons
import reactIcon from "@iconify-icons/cib/react";
import pythonIcon from "@iconify-icons/cib/python";
import pytorchIcon from "@iconify-icons/cib/pytorch";
import kerasIcon from "@iconify-icons/cib/keras";
import jupyterIcon from "@iconify-icons/cib/jupyter";
import javaIcon from "@iconify-icons/cib/java";
import typescriptIcon from "@iconify-icons/cib/typescript";
import gitIcon from "@iconify-icons/cib/git";
import figmaIcon from "@iconify-icons/cib/figma";
import firebaseIcon from "@iconify-icons/cib/firebase";
import { useTheme } from "../ThemeProvider";

type SkillViewProps = {
  id: string;
  data: {
    skills: string[];
    skillsTitle: string;
  };
};

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.text.primary,
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.error.main,
  },
}))(LinearProgress);

const SkillView: FC<SkillViewProps> = (props) => {
  const classes = useStyles();
  const [skillSelected, setSkillSelected] = useState<number>(-1);
  const { theme } = useTheme();

  return (
    <Box className={classes.root} textAlign="center" id={props.id}>
      <Icon icon={caretDown} className={classes.backgroundTriangle} />
      <Box className={classes.caption}>
        <Typography variant="h3" color="textPrimary">
          {skillSelected === -1
            ? props.data.skillsTitle
            : props.data.skills[skillSelected][0]}
        </Typography>
        <Box style={{ width: "130px", margin: "10px auto" }}>
          {skillSelected !== -1 ? (
            <BorderLinearProgress
              variant="determinate"
              value={+props.data.skills[skillSelected][1]}
            />
          ) : (
            <></>
          )}
        </Box>
      </Box>
      <Grid container justify="center" className={classes.grid}>
        <Grid item xs={10} sm={8} lg={6} xl={4}>
          <ClickAwayListener onClickAway={() => setSkillSelected(-1)}>
            <Circlegraph data={props.data.skills}>
              <IconButton
                onClick={() => setSkillSelected(0)}
                disableRipple
                style={{ backgroundColor: "transparent" }}
              >
                <Icon
                  icon={firebaseIcon}
                  className={classes.icon}
                  style={{
                    color:
                      skillSelected === 0
                        ? theme.palette.error.main
                        : theme.palette.text.primary,
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => setSkillSelected(1)}
                disableRipple
                style={{ backgroundColor: "transparent" }}
              >
                <Icon
                  icon={figmaIcon}
                  className={classes.icon}
                  style={{
                    color:
                      skillSelected === 1
                        ? theme.palette.error.main
                        : theme.palette.text.primary,
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => setSkillSelected(2)}
                disableRipple
                style={{ backgroundColor: "transparent" }}
              >
                <Icon
                  icon={javaIcon}
                  className={classes.icon}
                  style={{
                    color:
                      skillSelected === 2
                        ? theme.palette.error.main
                        : theme.palette.text.primary,
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => setSkillSelected(3)}
                disableRipple
                style={{ backgroundColor: "transparent" }}
              >
                <Icon
                  icon={gitIcon}
                  className={classes.icon}
                  style={{
                    color:
                      skillSelected === 3
                        ? theme.palette.error.main
                        : theme.palette.text.primary,
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => setSkillSelected(4)}
                disableRipple
                style={{ backgroundColor: "transparent" }}
              >
                <Icon
                  icon={jupyterIcon}
                  className={classes.icon}
                  style={{
                    color:
                      skillSelected === 4
                        ? theme.palette.error.main
                        : theme.palette.text.primary,
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => setSkillSelected(5)}
                disableRipple
                style={{ backgroundColor: "transparent" }}
              >
                <Icon
                  icon={kerasIcon}
                  className={classes.icon}
                  style={{
                    color:
                      skillSelected === 5
                        ? theme.palette.error.main
                        : theme.palette.text.primary,
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => setSkillSelected(6)}
                disableRipple
                style={{ backgroundColor: "transparent" }}
              >
                <Icon
                  icon={pytorchIcon}
                  className={classes.icon}
                  style={{
                    color:
                      skillSelected === 6
                        ? theme.palette.error.main
                        : theme.palette.text.primary,
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => setSkillSelected(7)}
                disableRipple
                style={{ backgroundColor: "transparent" }}
              >
                <Icon
                  icon={pythonIcon}
                  className={classes.icon}
                  style={{
                    color:
                      skillSelected === 7
                        ? theme.palette.error.main
                        : theme.palette.text.primary,
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => setSkillSelected(8)}
                disableRipple
                style={{ backgroundColor: "transparent" }}
              >
                <Icon
                  icon={typescriptIcon}
                  className={classes.icon}
                  style={{
                    color:
                      skillSelected === 8
                        ? theme.palette.error.main
                        : theme.palette.text.primary,
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => setSkillSelected(9)}
                disableRipple
                style={{ backgroundColor: "transparent" }}
              >
                <Icon
                  icon={reactIcon}
                  className={classes.icon}
                  style={{
                    color:
                      skillSelected === 9
                        ? theme.palette.error.main
                        : theme.palette.text.primary,
                  }}
                />
              </IconButton>
            </Circlegraph>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SkillView;

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "100%",
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
  grid: {
    height: "100%",
  },
  caption: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    top: "calc(65%)",
    [theme.breakpoints.up("md")]: {
      top: "calc(50% - 3rem)",
    },
    [theme.breakpoints.up("lg")]: {
      top: "calc(50% - 6rem)",
    },
  },
  icon: {
    fontSize: "100px",
    color: theme.palette.text.primary,
  },
}));
