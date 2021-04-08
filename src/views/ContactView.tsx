import { FC } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Icon } from "@iconify/react";
import caretDown from "@iconify-icons/carbon/caret-down";

const ContactView: FC = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} textAlign="center">
      <Icon icon={caretDown} className={classes.backgroundTriangle} />
    </Box>
  );
};
export default ContactView;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: theme.palette.text.primary,
  },
  backgroundTriangle: {
    color: theme.palette.text.secondary,
    position: "absolute",
    margin: "-45px",
    height: "100px",
    width: "100px",
  },
}));
