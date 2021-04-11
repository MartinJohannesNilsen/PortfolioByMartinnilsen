import { FC } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Icon } from "@iconify/react";
import caretDown from "@iconify-icons/carbon/caret-down";

type ContactViewProps = {
  id: string;
  data: {};
};

const ContactView: FC<ContactViewProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root} textAlign="center" id={props.id}>
        <Icon icon={caretDown} className={classes.backgroundTriangle} />
      </Box>
    </>
  );
};
export default ContactView;

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "30%",
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
