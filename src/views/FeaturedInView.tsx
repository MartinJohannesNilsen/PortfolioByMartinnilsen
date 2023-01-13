import React, { FC, useState, useMemo, useRef } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Stack,
  IconButton,
  Zoom,
  Tooltip,
  ClickAwayListener,
  Card,
  CardContent,
} from "@mui/material";
import { useTheme } from "../ThemeProvider";
import { ArticleCard } from "../components/Cards/ArticleCard";
import TinderCard from "react-tinder-card";
import ClearIcon from "@mui/icons-material/Clear";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LaunchIcon from "@mui/icons-material/Launch";
import ReplayIcon from "@mui/icons-material/Replay";
import { FeaturedInViewProps, directionType } from "../types";

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

  // Copy to clipboard
  const deprecated_copyToClipboard = (text: string) => {
    // Does not work on safari, iPhone
    navigator.clipboard.writeText(text);
  };

  function copyToClipboard(str: string) {
    var el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    document.body.appendChild(el);

    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      // save current contentEditable/readOnly status
      var editable = el.contentEditable;
      var readOnly = el.readOnly;

      // convert to editable with readonly to stop iOS keyboard opening
      // el.contentEditable = true;
      el.readOnly = true;

      // create a selectable range
      var range = document.createRange();
      range.selectNodeContents(el);

      // select the range
      var selection = window.getSelection();
      selection!.removeAllRanges();
      selection!.addRange(range);
      el.setSelectionRange(0, 999999);

      // restore contentEditable/readOnly to original state
      el.contentEditable = editable;
      el.readOnly = readOnly;
    } else {
      el.select();
    }
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  return (
    <Box
      sx={{
        height: "100%",
        maxHeight: "900px",
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
              &nbsp;hvor jeg nevnes
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
            ref={childRefs[index]}
            className={"featuredInCardCssGrid tinderCards"}
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
                    copyToClipboard(props.data.articles[currentIndex].url);
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
