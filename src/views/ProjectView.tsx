import { FC } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Icon } from "@iconify/react";
import caretDown from "@iconify-icons/carbon/caret-down";

const ProjectView: FC = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} textAlign="center">
      <Icon icon={caretDown} className={classes.backgroundTriangle} />
    </Box>
  );
};
export default ProjectView;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: theme.palette.text.secondary,
  },
  backgroundTriangle: {
    color: theme.palette.text.primary,
    position: "absolute",
    margin: "-45px",
    height: "100px",
    width: "100px",
  },
}));
