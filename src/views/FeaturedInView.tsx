import React, { FC, useState, useMemo, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  Stack,
  IconButton,
  Hidden,
  Zoom,
  Tooltip,
  ClickAwayListener,
} from "@mui/material";
import { ScrollTriggerUp } from "../components/Animations/ScrollTrigger";
import useDidUpdate from "../utils/useDidUpdate";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../ThemeProvider";
import { ArticleCard, ArticleProps } from "../components/Cards/ArticleCard";
import TinderCard from "react-tinder-card";
import ClearIcon from "@mui/icons-material/Clear";
import UndoIcon from "@mui/icons-material/Undo";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LaunchIcon from "@mui/icons-material/Launch";
import ReplayIcon from "@mui/icons-material/Replay";

type FeaturedInViewProps = {
  id: string;
  data: {
    title: string;
    copyText: string;
    articles: ArticleProps[];
  };
  refreshScrollTriggers: number;
  language: string;
};

type directionType = "left" | "right" | "up" | "down";

const FeaturedInView: FC<FeaturedInViewProps> = (props) => {
  const { theme } = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.only("md"));
  const lg = useMediaQuery(theme.breakpoints.only("lg"));
  const xl = useMediaQuery(theme.breakpoints.only("xl"));
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  // Tindercard
  const [currentIndex, setCurrentIndex] = useState(
    props.data.articles.length - 1
  );
  const [lastDirection, setLastDirection] = useState<directionType>();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);
  const childRefs: any = useMemo(
    () =>
      Array(props.data.articles.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < props.data.articles.length - 1;
  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction: directionType, title: string, index: number) => {
    // console.log(`${title} (${index}) swiped to the ${direction}`, currentIndexRef.current);
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name: string, idx: number) => {
    // console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()!;
  };

  const swipe = async (dir: "left" | "right") => {
    if (canSwipe && currentIndex < props.data.articles.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard()!;
  };

  // Tooltip
  const [open, setOpen] = React.useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100%",
        backgroundColor: "secondary.main",
        position: "relative",
        maxWidth: "100vw",
        overflow: "hidden",
      }}
      textAlign="center"
      id={props.id}
      px={xs ? 4 : sm ? 4 : md ? 8 : 0}
      pb={8}
    >
      <Box pt={4} pb={3}>
        {props.language === "norwegian" ? (
          <>
            <Typography
              variant="h3"
              display="inline"
              sx={{
                color: "error.main",
              }}
            >
              Artikler
            </Typography>
            <Typography variant="h3" color="textPrimary" display="inline">
              &nbsp;jeg er med i
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h3" color="textPrimary" display="inline">
              Articles I
            </Typography>
            <Typography
              variant="h3"
              display="inline"
              sx={{
                color: "error.main",
              }}
            >
              &nbsp;feature in
            </Typography>
          </>
        )}
      </Box>
      <Box
        justifyContent="center"
        sx={{
          height: "calc(100vh-93px)",
          display: "grid",
          justifyItems: "center",
          alignItems: "center",
          gridTemplateColumns: "repeat(1)",
          gridTemplateRows: lgUp ? "600px 100px" : "520px 0px",
          gridTemplateAreas: `
          'card'
          'buttonStack'
          `,
        }}
      >
        {props.data.articles.map((article, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="tinderCardCssGrid"
            // className="tinderCard"
            key={index}
            onSwipe={(dir: directionType) => swiped(dir, article.title, index)}
            onCardLeftScreen={() => outOfFrame(article.title, index)}
          >
            <ArticleCard
              index={index}
              language={props.language}
              article={article}
            />
          </TinderCard>
        ))}
        <Box
          sx={{
            gridArea: "buttonStack",
            // width: "320px",
          }}
        >
          <Stack direction="row" spacing={1.2} justifyContent="center">
            <IconButton
              aria-label="clear"
              disabled={!canSwipe}
              sx={{
                color: "#F44336",
                borderColor: "#F44336",
                border: "2px solid",
                boxShadow:
                  theme.palette.mode === "light"
                    ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                    : "none",
              }}
              onClick={() => swipe("left")}
            >
              <ClearIcon />
            </IconButton>
            <IconButton
              aria-label="undo"
              disabled={!canGoBack}
              sx={{
                // backgroundColor: theme.palette.mode === "light" ? "black" : "transparent",
                color: "#ffdf00",
                borderColor: "#ffdf00",
                border: "2px solid",
                boxShadow:
                  theme.palette.mode === "light"
                    ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                    : "none",
              }}
              onClick={() => goBack()}
            >
              <ReplayIcon />
            </IconButton>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <Tooltip
                arrow
                placement="top"
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                // disableHoverListener
                disableTouchListener
                TransitionComponent={Zoom}
                title={
                  <Typography variant="overline" color="inherit">
                    {props.data.copyText}
                  </Typography>
                }
              >
                <IconButton
                  aria-label="copy"
                  disabled={!canSwipe}
                  sx={{
                    color: "#2196F3",
                    borderColor: "#2196F3",
                    border: "2px solid",
                    boxShadow:
                      theme.palette.mode === "light"
                        ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                        : "none",
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      props.data.articles[currentIndex].url
                    );
                    handleTooltipOpen();
                    swipe("right");
                  }}
                >
                  <ContentCopyIcon />
                </IconButton>
              </Tooltip>
            </ClickAwayListener>
            <IconButton
              aria-label="launch"
              disabled={!canSwipe}
              sx={{
                color: "#00e676",
                borderColor: "#00e676",
                border: "2px solid",
                boxShadow:
                  theme.palette.mode === "light"
                    ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                    : "none",
              }}
              onClick={() => {
                //Open new page in new tab
                swipe("right");
                window.open(props.data.articles[currentIndex].url, "_blank");
              }}
            >
              <LaunchIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
export default FeaturedInView;
