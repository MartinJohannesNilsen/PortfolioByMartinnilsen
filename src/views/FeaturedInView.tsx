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

type FeaturedInViewProps = {
  id: string;
  data: {
    title: string;
    readButtonText: string;
    copyButtonText: string;
    articles: [
      {
        title: string;
        description: string;
        img: {
          path: string;
          alt: string;
        };
        link: {
          copyText: string;
          url: string;
        };
      }
    ];
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
    <Box className={classes.root} textAlign="center" id={props.id} pb={2}>
      <Box pt={3} pb={2}>
        <Typography variant="subtitle1" color="textPrimary">
          {props.data.title}
        </Typography>
      </Box>
      <Grid container justify="center" className={classes.height}>
        {props.data.articles.map((card, index) => (
          <Grid item xs={10} sm={8} md={3} style={{ display: "flex" }}>
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
                    variant="h2"
                    component="h2"
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
                    onClick={() => window.open(card.link.url, "_blank")}
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
                          {card.link.copyText}
                        </Typography>
                      }
                    >
                      <Button
                        size="small"
                        color="inherit"
                        onClick={() => {
                          handleTooltipState(true, index);
                          navigator.clipboard.writeText(card.link.url);
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
    textAlign: "justify",
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
    padding: "3%",
    [theme.breakpoints.up("sm")]: {
      padding: "4%",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "6%",
    },
    // backgroundColor: "white",
    // backgroundColor: theme.palette.error.light,
    backgroundColor: theme.palette.text.secondary,
  },
  tooltipWidth: {
    maxWidth: 400,
  },
  title: {
    fontSize: "3.5rem",
  },
  ref: {},
}));
