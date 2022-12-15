import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import CustomThemeProvider from "./ThemeProvider";
import useStickyState from "./utils/useStickyState";
import fetchDataFromDB from "./utils/fetchDataFromDB";
import { ProjectProps } from "./components/ProjectList/ProjectElement";
import preloadImgs from "./utils/preloadImgs";
import showMuiSize from "./utils/showMuiSize";

//Views
import LandingView from "./views/LandingView";
import AboutView from "./views/AboutView";
import ProjectView from "./views/ProjectView";
import ContactView from "./views/ContactView";
import ReaderView from "./views/_ReaderView";
import FeaturedInView from "./views/FeaturedInView";
import DeskView from "./views/DeskView";

//Function for getting local data from correct json-file
// based on environment variable and defined language
function getLocalData(language: "norwegian" | "english") {
  return language === "norwegian"
    ? require("./data/" +
        process.env.REACT_APP_STATIC_JSON_DATA_LEVEL +
        ".json").norwegian
    : require("./data/" +
        process.env.REACT_APP_STATIC_JSON_DATA_LEVEL +
        ".json").english;
}

const App = () => {
  const [language, setLanguage] = useStickyState(
    "language",
    navigator.language === "nb-NO" || "nn-NO" ? "norwegian" : "english"
  );
  const [data, setData] = useState(getLocalData(language));
  const [refreshScrollTriggers, _setRefreshScrollTriggers] = useState(0);
  const triggerRefreshScrollTriggers = () => {
    _setRefreshScrollTriggers(refreshScrollTriggers + 1);
  };

  useMemo(() => {
    if (process.env.REACT_APP_FETCH_FROM_DB === "true") {
      fetchDataFromDB(language, setData);
    } else {
      setData(getLocalData(language));
    }
    window.scrollTo(0, 0);
    //eslint-disable-next-line
  }, [language]);

  useEffect(() => {
    triggerRefreshScrollTriggers();
  }, [data]);

  return (
    <StyledEngineProvider injectFirst>
      <CustomThemeProvider>
        <CssBaseline />
        {process.env.REACT_APP_SHOW_MUI_SIZE === "true" ? showMuiSize() : ""}
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
        {/* <AboutView
          id={data.landingView.navbar.sections[0]}
          data={data.aboutView}
        /> */}
        {process.env.REACT_APP_PRELOAD_PROJECT_IMGS === "true"
          ? preloadImgs(
              data.projectView.projects
                .slice()
                .reverse()
                .map((project: ProjectProps) => {
                  return project.img.path;
                })
            )
          : ""}
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
        <DeskView />
        <ContactView
          id={data.landingView.navbar.sections[2]}
          data={data.contactView}
        />
      </CustomThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
