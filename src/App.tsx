import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import CustomThemeProvider from "./ThemeProvider";
import useStickyState from "./utils/useStickyState";
import fetchDataFromDB from "./utils/fetchDataFromDB";
import preloadImgs from "./utils/preloadImgs";
import showMuiSize from "./utils/showMuiSize";
import { ProjectProps } from "./types";

//Views
import LandingView from "./views/LandingView";
import ProjectView from "./views/ProjectView";
import Footer from "./components/Footer/Footer";
import ReaderView from "./views/_ReaderView";
import FeaturedInView from "./views/FeaturedInView";
import DeskView from "./views/DeskView";
import ScrollToTop from "./utils/scrollToTop";
import Navbar from "./components/Navbar/Navbar";

//Functions for getting local data from correct json-file
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
function getLocalInfo() {
  return require("./data/" +
    process.env.REACT_APP_STATIC_JSON_DATA_LEVEL +
    ".json").info;
}

const App = () => {
  const [language, setLanguage] = useStickyState(
    "language",
    navigator.language === "nb-NO" || "nn-NO" ? "norwegian" : "english"
  );
  const [data, setData] = useState(getLocalData(language));
  const [info, setInfo] = useState(getLocalInfo());

  const [refreshScrollTriggers, _setRefreshScrollTriggers] = useState(0);
  const triggerRefreshScrollTriggers = () => {
    _setRefreshScrollTriggers(refreshScrollTriggers + 1);
  };

  useMemo(() => {
    if (process.env.REACT_APP_FETCH_FROM_DB === "true") {
      fetchDataFromDB(language, setData);
      fetchDataFromDB("info", setInfo);
    } else {
      setData(getLocalData(language));
      setInfo(getLocalInfo());
    }
    //eslint-disable-next-line
  }, [language]);

  useEffect(() => {
    triggerRefreshScrollTriggers();
  }, [data]);

  return (
    <StyledEngineProvider injectFirst>
      <CustomThemeProvider>
        <CssBaseline />
        <ScrollToTop />
        {process.env.REACT_APP_SHOW_MUI_SIZE === "true" ? showMuiSize() : ""}
        {info.fetched || !process.env.REACT_APP_FETCH_FROM_DB ? (
          <>
            <ReaderView
              ids={[
                data.navbar.sections[0],
                data.navbar.sections[1],
                data.navbar.sections[2],
                data.navbar.sections[3],
              ]}
              landing={data.landingView}
              projects={data.projectView}
              footer={data.footer}
              featuredIn={data.featuredInView}
              language={language}
            />
            <Navbar
              data={data.navbar}
              language={language}
              setLanguage={setLanguage}
            />
            <LandingView id={data.navbar.sections[0]} data={data.landingView} />
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
              id={data.navbar.sections[1]}
              data={data.projectView}
              triggerRefreshScrollTriggers={triggerRefreshScrollTriggers}
              language={language}
            />
            <FeaturedInView
              id={data.navbar.sections[2]}
              data={data.featuredInView}
              language={language}
            />
            <DeskView
              language={language}
              refreshScrollTriggers={refreshScrollTriggers}
            />
            <Footer
              id={data.navbar.sections[3]}
              data={data.footer}
              language={language}
            />
          </>
        ) : (
          <></>
        )}
      </CustomThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
