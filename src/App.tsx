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
    language === "norwegian"
      ? require("./TextData.json").norwegian
      : require("./TextData.json").english
  );
  const [refreshScrollTriggers, _setRefreshScrollTriggers] = useState(0);
  const triggerRefreshScrollTriggers = () => {
    _setRefreshScrollTriggers(refreshScrollTriggers + 1);
  };

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
        featuredIn={data.featuredInView}
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
        triggerRefreshScrollTriggers={triggerRefreshScrollTriggers}
      />
      <FeaturedInView
        id={"None"}
        data={data.featuredInView}
        refreshScrollTriggers={refreshScrollTriggers}
      />
      <ContactView
        id={data.landingView.navbar.sections[2]}
        data={data.contactView}
      />
    </ThemeProvider>
  );
};

export default App;
