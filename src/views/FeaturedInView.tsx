import React, { FC, useState, useMemo, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  Stack,
  IconButton,
  Hidden,
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

type FeaturedInViewProps = {
  id: string;
  data: {
    title: string;
    readButtonText: string;
    copyButtonText: string;
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
          height: "100%",
          display: "flex",
          // flexDirection: "column",
          position: "relative",
        }}
      >
        {props.data.articles.map((article, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="tinderCard"
            key={index}
            onSwipe={(dir: directionType) => swiped(dir, article.title, index)}
            onCardLeftScreen={() => outOfFrame(article.title, index)}
          >
            <ArticleCard
              index={index}
              article={article}
              readButtonText={props.data.readButtonText}
              copyButtonText={props.data.copyButtonText}
              copyText={props.data.copyText}
            />
          </TinderCard>
        ))}
        <Box>
          <Stack direction="row" spacing={1}>
            <IconButton
              aria-label="clear"
              disabled={!canSwipe}
              sx={{
                color: "#ff1744",
                borderColor: "#ff1744",
                border: "2px solid",
              }}
              onClick={() => swipe("left")}
            >
              <ClearIcon />
            </IconButton>
            <IconButton
              aria-label="undo"
              disabled={!canGoBack}
              sx={{
                color: "#ffea00",
                borderColor: "#ffea00",
                border: "2px solid",
              }}
              onClick={() => goBack()}
            >
              <UndoIcon />
            </IconButton>
            <IconButton
              aria-label="copy"
              disabled={!canSwipe}
              sx={{
                color: "#2979ff",
                borderColor: "#2979ff",
                border: "2px solid",
              }}
              onClick={() => {
                //Copy and launch tooltip
                swipe("right");
              }}
            >
              <ContentCopyIcon />
            </IconButton>
            <IconButton
              aria-label="launch"
              disabled={!canSwipe}
              sx={{
                color: "#00e676",
                borderColor: "#00e676",
                border: "2px solid",
              }}
              onClick={() => {
                //Open new page in new tab
                swipe("right");
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
