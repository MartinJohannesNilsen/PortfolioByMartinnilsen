import { CssBaseline } from "@material-ui/core";
import { useMemo, useState } from "react";
import ThemeProvider, { useTheme } from "./ThemeProvider";
import useStickyState from "./utils/useStickyState";
import fetchDataFromDB from "./utils/fetchDataFromDB";

//Views
import LandingView from "./views/LandingView";
import AboutView from "./views/AboutView";
import ProjectView from "./views/ProjectView";
import ContactView from "./views/ContactView";
import ReaderView from "./views/_ReaderView";
import FeaturedInView from "./views/FeaturedInView";

const App = () => {
  const [language, setLanguage] = useStickyState(
    "language",
    navigator.language == "nb-NO" || "nn-NO" ? "norwegian" : "english"
  );
  const [data, setData] = useState(
    language === "nb-NO"
      ? require("./TextData.json").norwegian
      : require("./TextData.json").english
  );
  const { theme } = useTheme();

  useMemo(() => {
    fetchDataFromDB(language, setData);
    window.scrollTo(0, 0);
    //eslint-disable-next-line
  }, [language]);

  return (
    <ThemeProvider>
      <CssBaseline />
      <ReaderView
        ids={[
          data.landingView.navbar.sections[0],
          data.landingView.navbar.sections[1],
          data.landingView.navbar.sections[2],
        ]}
        about={data.aboutView}
        projects={data.projectView}
        contact={data.contactView}
      />
      <LandingView
        data={data.landingView}
        language={language}
        setLanguage={setLanguage}
        backgroundColor={theme.palette.primary.main}
      />
      <AboutView
        id={data.landingView.navbar.sections[0]}
        data={data.aboutView}
        backgroundColor={theme.palette.secondary.main}
      />
      <ProjectView
        id={data.landingView.navbar.sections[1]}
        data={data.projectView}
        backgroundColor={theme.palette.primary.main}
      />
      <FeaturedInView
        id={data.landingView.navbar.sections[2]}
        data={data.contactView}
        backgroundColor={theme.palette.secondary.main}
      />
      <ContactView
        id={data.landingView.navbar.sections[2]}
        data={data.contactView}
        backgroundColor={theme.palette.primary.main}
      />
    </ThemeProvider>
  );
};

export default App;
