import { FC, useEffect, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Navbar from "../components/Navbar/Navbar";
import Typist from "react-typist";

type landingProps = {
  data: {
    title: string;
    descriptivePhrases: string[];
    navText: string[];
    navLanguages: string[];
  };
  language: string;
  setLanguage: () => void;
};

const LandingView: FC<landingProps> = (props) => {
  const classes = useStyles();
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  useEffect(() => {
    setCount(0);
  }, [props.data.descriptivePhrases]);

  return (
    <Box>
      <Navbar
        data={props.data}
        language={props.language}
        setLanguage={props.setLanguage}
      />
      <Box textAlign="center" alignItems="center" className={classes.root}>
        {count ? (
          <Typist
            avgTypingDelay={90}
            cursor={{ show: false }}
            onTypingDone={() => setCount(0)}
          >
            {props.data.descriptivePhrases.map((phrase) => (
              <div className={classes.typist}>
                <Typography variant="h1" color="textPrimary">
                  {phrase}
                </Typography>
                <Typist.Backspace count={phrase.length} delay={4000} />
              </div>
            ))}
          </Typist>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};
export default LandingView;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100% - 120px)",
    backgroundColor: theme.palette.text.secondary,
    position: "relative"
  },
  typist: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
