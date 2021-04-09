import { CssBaseline } from "@material-ui/core";
import { useEffect, useState } from "react";
import ThemeProvider from "./ThemeProvider";
import useStickyState from "./utils/useStickyState";

//Views
import LandingView from "./views/LandingView";
import AboutView from "./views/AboutView";
import ProjectView from "./views/ProjectView";
import SkillView from "./views/SkillView";
import ContactView from "./views/ContactView";

const App = () => {
  const [data, setData] = useState(require("./TextData.json").english);
  const [language, setLanguage] = useStickyState("language", "english");

  // useEffect(() => {
  //   fetchDataFromDB();
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    language === "english"
      ? setData(require("./TextData.json").english)
      : setData(require("./TextData.json").norwegian);
  }, [language]);

  return (
    <ThemeProvider>
      <CssBaseline />
      <LandingView data={data} language={language} setLanguage={setLanguage} />
      <AboutView text={data.aboutText} />
      <SkillView data={data} />
      <ProjectView data={data} />
      <ContactView data={data} />
    </ThemeProvider>
  );
};

export default App;
