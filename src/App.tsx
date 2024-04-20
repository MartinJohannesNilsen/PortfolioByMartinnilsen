import { CssBaseline, IconButton, StyledEngineProvider } from "@mui/material";
import { SnackbarProvider, closeSnackbar } from "notistack";
import { useEffect, useMemo, useState } from "react";
import CustomThemeProvider from "./ThemeProvider";
import { ProjectProps } from "./types";
import fetchDataFromDB from "./utils/fetchDataFromDB";
import preloadImgs from "./utils/preloadImgs";
import showMuiSize from "./utils/showMuiSize";
import useStickyState from "./utils/useStickyState";

//Views
import Close from "@mui/icons-material/Close";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./utils/scrollToTop";
import ReaderView from "./views/_ReaderView";
import DeskView from "./views/DeskView";
import FeaturedInView from "./views/FeaturedInView";
import LandingView from "./views/LandingView";
import ProjectView from "./views/ProjectView";
import TechStackView from "./views/TechStackView";

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
  const [hasLoadedImages, setHasLoadedImages] = useState(false);

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
    // Refresh scrolltriggers
    triggerRefreshScrollTriggers();

    // Preload images
    const imageSources = [
      data.landingView.cards[0].img.path,
      data.landingView.cards[1].img.path,
      data.landingView.cards[2].img.path,
    ];

    const images = imageSources.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    // Wait for all images to load
    Promise.all(
      images.map((img) => {
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    )
      .then(() => {
        // Set loading to false and start the GSAP animation
        setHasLoadedImages(true);
      })
      .catch((error) => {
        console.error("Error loading images", error);
      });
  }, [data]);

  useEffect(() => {}, []);

  return (
    <StyledEngineProvider injectFirst>
      <CustomThemeProvider>
        <SnackbarProvider
          preventDuplicate
          maxSnack={1}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          action={(snackbarId) => (
            <IconButton
              size="small"
              disableRipple
              onClick={() => closeSnackbar(snackbarId)}
            >
              <Close fontSize="small" sx={{ color: "white" }} />
            </IconButton>
          )}
        >
          <CssBaseline />
          <ScrollToTop />
          {process.env.REACT_APP_SHOW_MUI_SIZE === "true" ? showMuiSize() : ""}
          {(info.fetched && hasLoadedImages) ||
          !process.env.REACT_APP_FETCH_FROM_DB ? (
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
                triggerRefreshScrollTriggers={triggerRefreshScrollTriggers}
              />
              <LandingView
                id={data.navbar.sections[0].replace(" ", "_")}
                data={data.landingView}
                language={language}
              />
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
                id={data.navbar.sections[1].replace(" ", "_")}
                data={data.projectView}
                triggerRefreshScrollTriggers={triggerRefreshScrollTriggers}
                language={language}
              />
              <TechStackView
                id={data.navbar.sections[2].replace(" ", "_")}
                language=""
              />
              <FeaturedInView
                id={data.navbar.sections[3].replace(" ", "_")}
                data={data.featuredInView}
                language={language}
              />
              <DeskView
                language={language}
                refreshScrollTriggers={refreshScrollTriggers}
              />
              <Footer
                id={data.navbar.sections[4].replace(" ", "_")}
                data={data.footer}
                language={language}
              />
            </>
          ) : (
            <></>
          )}
        </SnackbarProvider>
      </CustomThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
