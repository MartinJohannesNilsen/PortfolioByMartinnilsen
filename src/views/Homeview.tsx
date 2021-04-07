import { useEffect, useState } from "react";
import firebaseConfig from "../firebaseConfig";
import useStickyState from "../utils/useStickyState";
import { Box, makeStyles, Typography } from "@material-ui/core";
import NavBar from "../components/NavBar/NavBar";
import { Icon } from "@iconify/react";
import caretDown from "@iconify-icons/carbon/caret-down";

const Homepage = () => {
  const classes = useStyles();
  const [textData, setTextData] = useState(require("../TextData.json").english);
  const [language, setLanguage] = useStickyState("language", "english");

  useEffect(() => {
    language === "english"
      ? setTextData(require("../TextData.json").english)
      : setTextData(require("../TextData.json").norwegian);
  }, [language]);

  // const fetchDataFromDB = () => {
  //   let dbText = firebaseConfig
  //     .database()
  //     .ref(language)
  //     .orderByKey()
  //     .limitToLast(1000);
  //   dbText.on("value", function (snapshot, prevChildKey) {
  //     setTextData(snapshot.val());
  //   });
  // };

  // useEffect(() => {
  //   fetchDataFromDB();
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <Box>
      <NavBar data={textData} language={language} setLanguage={setLanguage} />
      <Box textAlign="center" alignItems="center" className={classes.root}>
        <Typography variant="h1" color="textPrimary">
          {language}
        </Typography>
      </Box>
      <Box className={classes.background1} textAlign="center">
        <Icon icon={caretDown} className={classes.background1triangle} />
      </Box>
      <Box className={classes.background2} textAlign="center">
        <Icon icon={caretDown} className={classes.background2triangle} />
      </Box>
    </Box>
  );
};
export default Homepage;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100% - 140px)",
    backgroundColor: theme.palette.text.secondary,
  },
  background1: {
    height: "100%",
    backgroundColor: theme.palette.text.primary,
  },
  background2: {
    height: "100%",
    backgroundColor: theme.palette.text.secondary,
  },
  background1triangle: {
    color: theme.palette.text.secondary,
    margin: "-40px",
    height: "100px",
    width: "100px",
  },
  background2triangle: {
    color: theme.palette.text.primary,
    margin: "-40px",
    height: "100px",
    width: "100px",
  },
}));
