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
import ReaderView from "./views/_ReaderView";
// import EducationView from "./views/EducationView";

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
      {/* <ReaderView /> */}
      <ReaderView 
        ids={[data.landingView.navbar.sections[0], data.landingView.navbar.sections[1], data.landingView.navbar.sections[2]]}
        about={data.aboutView}
        projects={data.projectView}
        contact={data.contactView}
      />
      <LandingView 
        data={data.landingView}
        language={language} 
        setLanguage={setLanguage} 
      />
      <AboutView
        id={data.landingView.navbar.sections[0]}
        data={data.aboutView}
      />
      <ProjectView 
        id={data.landingView.navbar.sections[1]} 
        data={data.projectView} 
      />
      <ContactView 
        id={data.landingView.navbar.sections[2]} 
        data={data.contactView} 
      />
    </ThemeProvider>
  );
};

export default App;
