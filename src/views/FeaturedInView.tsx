import { FC, useState } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  ClickAwayListener,
  Tooltip,
  Zoom,
} from "@material-ui/core";
import { ScrollTriggerUp } from "../components/Animations/ScrollTrigger";

export type ArticleProps = {
  title: string;
  description: string;
  img: {
    path: string;
    alt: string;
  };
  url: string;
};

type FeaturedInViewProps = {
  id: string;
  data: {
    title: string;
    readButtonText: string;
    copyButtonText: string;
    copyText: string;
    articles: [ArticleProps];
  };
};

const FeaturedInView: FC<FeaturedInViewProps> = (props) => {
  const classes = useStyles();
  const [cardsState, setCardsState] = useState(
    Array(props.data.articles.length).fill({
      hovered: false,
      shadow: 1,
      openTooltip: false,
    })
  );

  const handleHover = (index: number, newState: {}) => {
    let cardStateCopy = [...cardsState];
    cardStateCopy[index] = newState;
    setCardsState(cardStateCopy);
  };

  const handleTooltipState = (newState: boolean, index: number) => {
    let cardStateCopy = [...cardsState];
    cardStateCopy[index].openTooltip = newState;
    setCardsState(cardStateCopy);
  };

  return (
    <Box
      className={classes.root}
      textAlign="center"
      id={props.id}
      px={4}
      pb={2}
    >
      <Box pt={3} pb={2}>
        <Typography variant="subtitle1" color="textPrimary">
          {props.data.title}
        </Typography>
      </Box>
      <Grid container justify="center" className={classes.height}>
        {props.data.articles.map((card, index) => (
          <ScrollTriggerUp
            x="10vh"
            markers={process.env.REACT_APP_SHOW_MARKERS === "true"}
            start={-200 + 30 * index + "px center"}
            // start={"-200px center"}
            end={"100px center"}
          >
            <Grid item xs={12} sm={8} md={4} xl={3} style={{ display: "flex" }}>
              <Box px={2} my={3}>
                <Card
                  className={classes.card}
                  classes={{
                    root: cardsState[index].hovered ? classes.cardHovered : "",
                  }}
                  onMouseEnter={() =>
                    handleHover(index, { hovered: true, shadow: 3 })
                  }
                  onMouseLeave={() =>
                    handleHover(index, { hovered: false, shadow: 1 })
                  }
                  raised={cardsState[index].hovered}
                >
                  <CardMedia
                    className={classes.media}
                    image={card.img.path}
                    title={card.img.alt}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                      className={classes.cardTitle}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                      className={classes.cardText}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                  <div style={{ flexGrow: 1 }} />
                  <CardActions>
                    <Button
                      size="small"
                      color="inherit"
                      onClick={() => window.open(card.url, "_blank")}
                    >
                      {props.data.readButtonText}
                    </Button>
                    <ClickAwayListener
                      onClickAway={() => handleTooltipState(false, index)}
                    >
                      <Tooltip
                        arrow
                        placement="top"
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={() => handleTooltipState(false, index)}
                        open={cardsState[index].openTooltip}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        classes={{ tooltip: classes.tooltipWidth }}
                        TransitionComponent={Zoom}
                        title={
                          <Typography variant="overline" color="inherit">
                            {props.data.copyText}
                          </Typography>
                        }
                      >
                        <Button
                          size="small"
                          color="inherit"
                          onClick={() => {
                            handleTooltipState(true, index);
                            navigator.clipboard.writeText(card.url);
                          }}
                        >
                          {props.data.copyButtonText}
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          </ScrollTriggerUp>
        ))}
      </Grid>
    </Box>
  );
};
export default FeaturedInView;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    position: "relative",
  },
  height: {
    height: "100%",
  },
  media: {
    height: "160px",
    width: "100%",
    borderRadius: 10,
  },
  cardTitle: {
    textAlign: "left",
  },
  cardText: {
    textAlign: "justify",
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
    transition: "transform 150ms ease-in-out",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 25,
    padding: "5%",
    [theme.breakpoints.up("sm")]: {
      padding: "4%",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "6%",
    },
    // backgroundColor: theme.palette.error.light, //Pastel red
    // backgroundColor: theme.palette.text.secondary, //White and black
    backgroundColor: theme.palette.primary.main, //White and dark blue
  },
  tooltipWidth: {
    maxWidth: 400,
  },
  title: {
    fontSize: "3.5rem",
  },
  ref: {},
}));
