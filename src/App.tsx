import { CssBaseline } from "@material-ui/core";
import { useMemo, useState } from "react";
import ThemeProvider from "./ThemeProvider";
import useStickyState from "./utils/useStickyState";
import fetchDataFromDB from "./utils/fetchDataFromDB";

//Views
import LandingView from "./views/LandingView";
import AboutView from "./views/AboutView";
import ProjectView from "./views/ProjectView";
// import SkillView from "./views/SkillView";
import ContactView from "./views/ContactView";
import EducationView from "./views/EducationView";

const App = () => {
  const [language, setLanguage] = useStickyState("language", "norwegian");
  const [data, setData] = useState(
    language === "english"
      ? require("./TextData.json").english
      : require("./TextData.json").norwegian
  );

  useMemo(() => {
    fetchDataFromDB(language, setData);
    window.scrollTo(0, 0);
    //eslint-disable-next-line
  }, [language]);

  return (
    <ThemeProvider>
      <CssBaseline />
      <LandingView data={data} language={language} setLanguage={setLanguage} />
      <AboutView
        text={data.aboutText}
        subtitle={data.aboutSubtitle}
        id={data.navText[0]}
      />
      {/* <SkillView data={data} id={data.navText[1]} /> */}
      <ProjectView data={data} id={data.navText[1]} />
      {/* <EducationView data={data} /> */}
      <ContactView data={data} id={data.navText[2]} />
    </ThemeProvider>
  );
};

export default App;
