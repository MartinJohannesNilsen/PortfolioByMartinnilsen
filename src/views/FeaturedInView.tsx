import React, { FC, useState, useMemo, useRef } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Stack,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import { useTheme } from "../ThemeProvider";
import { ArticleCard } from "../components/Cards/ArticleCard";
import TinderCard from "react-tinder-card";
import ClearIcon from "@mui/icons-material/Clear";
import { BiCopy } from "react-icons/bi";
import LaunchIcon from "@mui/icons-material/Launch";
import ReplayIcon from "@mui/icons-material/Replay";
import { useSnackbar } from "notistack";
import { ArticleProps, FeaturedInViewProps, directionType } from "../types";
import { isMobile } from "react-device-detect";

const FeaturedInView: FC<FeaturedInViewProps> = (props) => {
  const { theme } = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.only("md"));
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  // Tindercard
  const [currentIndex, setCurrentIndex] = useState(
    props.data.articles.length - 1
  );
  // const [lastDirection, setLastDirection] = useState<directionType>();
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
  const swiped = (
    direction: directionType,
    index: number,
    article: ArticleProps
  ) => {
    // console.log(`${title} (${index}) swiped to the ${direction}`, currentIndexRef.current);
    // setLastDirection(direction);
    if (currentIndexRef.current >= index) {
      handleAction(direction, article);
    }
    updateCurrentIndex(index - 1);
  };

  const swipe = async (dir: directionType) => {
    if (canSwipe && currentIndex < props.data.articles.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // Snackbar
  const { enqueueSnackbar } = useSnackbar();

  // Actions
  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard()!;
  };

  const copyToClipboard = async (link: string) => {
    if (!navigator.clipboard) {
      return Promise.reject("Clipboard not supported!");
    }

    try {
      await navigator.clipboard.writeText(link);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const handleAction = (dir: directionType, article: ArticleProps) => {
    if (dir === "up") {
      copyToClipboard(article.url)
        .then(() => {
          enqueueSnackbar(props.data.copySuccessText, {
            variant: "default",
            preventDuplicate: true,
          });
        })
        .catch((error) => {
          enqueueSnackbar(props.data.copyFailureText, {
            variant: "error",
            preventDuplicate: true,
          });
        });
    } else if (dir === "right") {
      isMobile
        ? (window.location.href = article.url)
        : setTimeout(() => window.open(article.url, "_blank"), 250);
    }
  };

  return (
    <Box
      sx={{
        height: xs || sm ? "700px" : "850px",
        backgroundColor: "primary.dark",
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
              fontFamily={theme.typography.fontFamily}
              variant="h3"
              display="inline"
            >
              Relevante
            </Typography>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h3"
              color="textPrimary"
              display="inline"
              sx={{
                color: "secondary.main",
              }}
            >
              &nbsp;artikler
            </Typography>
          </>
        ) : (
          <>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h3"
              color="textPrimary"
              display="inline"
            >
              Articles I
            </Typography>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h3"
              display="inline"
              sx={{
                color: "secondary.main",
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
          height: "calc(100%-93px)",
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
            preventSwipe={["down"]}
            flickOnSwipe
            swipeRequirementType="position"
            swipeThreshold={100}
            ref={childRefs[index]}
            className={"featuredInCardCssGrid tinderCards"}
            key={index}
            onSwipe={(dir: directionType) => {
              swiped(dir, index, article);
            }}
          >
            <ArticleCard
              index={index}
              language={props.language}
              article={article}
            />
          </TinderCard>
        ))}
        <Card
          className="featuredInCardCssGrid"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            boxShadow: "none",
            zIndex: 0,
          }}
        >
          <CardContent>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="subtitle2"
              color="textPrimary"
              sx={{
                opacity: "0.4",
              }}
            >
              {props.language === "norwegian"
                ? "Det var det. Eller kanskje du vil se over en gang til?"
                : "No more cards, but maybe you want to look through them one more time?"}
            </Typography>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="subtitle2"
              color="textPrimary"
              sx={{
                opacity: "0.4",
              }}
            >
              {props.language === "norwegian"
                ? "(Trykk på den gule knappen)"
                : "(Press the yellow button)"}
            </Typography>
          </CardContent>
        </Card>
        <Box
          sx={{
            gridArea: "buttonStack",
          }}
        >
          <Stack direction="row" spacing={1.2} justifyContent="center">
            <IconButton
              aria-label="clear"
              disabled={!canSwipe}
              sx={{
                border: "2px solid",
                borderColor: "#fd5c63",
                color: "#FFF",
                backgroundColor: "#fd5c63",
                boxShadow:
                  theme.palette.mode === "light"
                    ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                    : "none",
                "&:disabled": {
                  opacity: 0.5,
                  border: "2px solid",
                  borderColor: "grey",
                  backgroundColor: "grey",
                },
                "&:hover": {
                  backgroundColor: "#fd858a",
                  borderColor: "#fd858a",
                },
              }}
              onClick={() => swipe("left")}
            >
              <ClearIcon />
            </IconButton>
            <IconButton
              aria-label="undo"
              disabled={!canGoBack}
              sx={{
                border: "2px solid",
                borderColor: "#ffdf00",
                color: "#FFF",
                backgroundColor: "#ffdf00",
                boxShadow:
                  theme.palette.mode === "light"
                    ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                    : "none",
                "&:disabled": {
                  opacity: 0.5,
                  border: "2px solid",
                  borderColor: "grey",
                  backgroundColor: "grey",
                },
                "&:hover": {
                  backgroundColor: "#ffe740",
                  borderColor: "#ffe740",
                },
              }}
              onClick={() => goBack()}
            >
              <ReplayIcon />
            </IconButton>
            <IconButton
              aria-label="copy"
              disabled={!canSwipe}
              sx={{
                border: "2px solid",
                borderColor: "#2196F3",
                color: "#FFF",
                backgroundColor: "#2196F3",
                boxShadow:
                  theme.palette.mode === "light"
                    ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                    : "none",
                "&:disabled": {
                  opacity: 0.5,
                  border: "2px solid",
                  borderColor: "grey",
                  backgroundColor: "grey",
                },
                "&:hover": {
                  backgroundColor: "#58b0f6",
                  borderColor: "#58b0f6",
                },
              }}
              onClick={() => {
                handleAction("up", props.data.articles[currentIndex]);
                swipe("up");
              }}
            >
              {/* <ContentCopyIcon /> */}
              <BiCopy />
            </IconButton>
            <IconButton
              aria-label="launch"
              disabled={!canSwipe}
              sx={{
                border: "2px solid",
                borderColor: "#00e676",
                color: "#FFF",
                backgroundColor: "#00e676",
                boxShadow:
                  theme.palette.mode === "light"
                    ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                    : "none",
                "&:disabled": {
                  opacity: 0.5,
                  border: "2px solid",
                  borderColor: "grey",
                  backgroundColor: "grey",
                },
                "&:hover": {
                  backgroundColor: "#2dff99",
                  borderColor: "#2dff99",
                },
              }}
              onClick={() => {
                //Open new page in new tab
                swipe("right");
                handleAction("right", props.data.articles[currentIndex]);
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
