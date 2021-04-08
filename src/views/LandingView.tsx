import { FC } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import NavBar from "../components/NavBar/NavBar";
import { Icon } from "@iconify/react";
import caretDown from "@iconify-icons/carbon/caret-down";

type landingProps = {
  data: {
    title: string;
    navText: string[];
    navLanguages: string[];
  };
  language: string;
  setLanguage: () => void;
};

const LandingView: FC<landingProps> = (props) => {
  const classes = useStyles();

  return (
    <Box>
      <NavBar
        data={props.data}
        language={props.language}
        setLanguage={props.setLanguage}
      />
      <Box textAlign="center" alignItems="center" className={classes.root}>
        <Typography variant="h1" color="textPrimary">
          {props.language}
        </Typography>
      </Box>
    </Box>
  );
};
export default LandingView;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100% - 120px)",
    backgroundColor: theme.palette.text.secondary,
  },
}));
