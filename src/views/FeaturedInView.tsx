import { FC, useState } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  ClickAwayListener,
  Tooltip,
  Zoom,
} from "@material-ui/core";

type FeaturedInViewProps = {
  id: string;
  data: {};
  backgroundColor: string;
};

const data = [
  {
    title: "Project 1",
    description:
      "Nulla hac id ligula et conubia nullam massa parturient fusce, mattis risus adipiscing at habitant tincidunt tortor.",
    img: {
      path: "https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg",
      alt: "",
    },
    link: {
      copyText: "Link copied to clipboard!",
      url: "https://www.veracity.com/article/hackathon-winners-announced-on-final-day-of-nor-shipping",
    },
  },
  {
    title: "Project 2",
    description:
      "Felis sociosqu finibus iaculis ac senectus orci ornare, ex lectus dolor mauris tristique purus vestibulum est, dictum mi ultrices tempor sapien et.",
    img: {
      path: "https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg",
      alt: "",
    },
    link: {
      copyText: "Link copied to clipboard!",
      url: "https://www.veracity.com/article/hackathon-winners-announced-on-final-day-of-nor-shipping",
    },
  },
  {
    title: "Project 3",
    description:
      "Eros pellentesque purus sem class id consectetur risus aenean conubia aliquet velit fusce nostra blandit, magnis elementum nisl ex vivamus praesent feugiat ad eget lacus ridiculus metus integer.",
    img: {
      path: "https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg",
      alt: "",
    },
    link: {
      copyText: "Link copied to clipboard!",
      url: "https://www.veracity.com/article/hackathon-winners-announced-on-final-day-of-nor-shipping",
    },
  },
];

const FeaturedInView: FC<FeaturedInViewProps> = (props) => {
  const classes = useStyles(props);
  const [cardsState, setCardsState] = useState(
    Array(data.length).fill({ hovered: false, shadow: 1, openTooltip: false })
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
    <Box className={classes.root} textAlign="center" id={props.id}>
      <Box pt={3} pb={2}>
        <Typography variant="subtitle1" color="textPrimary">
          Featured in
        </Typography>
      </Box>
      <Grid container justify="center" className={classes.height}>
        {data.map((card, index) => (
          <Grid item xs={10} sm={8} md={3}>
            <Box px={2} my={3}>
              <Card
                className={classes.card}
                classes={{
                  root: cardsState[index].hovered ? classes.cardHovered : "",
                }}
                onMouseOver={() =>
                  handleHover(index, { hovered: true, shadow: 3 })
                }
                onMouseOut={() =>
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
                    variant="h5"
                    component="h2"
                    className={classes.cardTitle}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {card.description}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => window.open(card.link.url, "_blank")}
                  >
                    Read
                  </Button>
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
                      color="primary"
                      onClick={() => {
                        handleTooltipState(true, index);
                        navigator.clipboard.writeText(card.link.url);
                      }}
                    >
                      Copy link
                    </Button>
                  </Tooltip>
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
    backgroundColor: (props: FeaturedInViewProps) => props.backgroundColor,
    position: "relative",
  },
  height: {
    height: "100%",
  },
  media: {
    height: 140,
    borderRadius: 10,
  },
  cardTitle: {
    color: "white",
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
    transition: "transform 150ms ease-in-out",
  },
  card: {
    //display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 25,
    padding: "3%",
    [theme.breakpoints.up("sm")]: {
      padding: "4%",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "6%",
    },
  },
  tooltipWidth: {
    maxWidth: 400,
  },
  title: {
    fontSize: "3.5rem",
  },
  ref: {},
}));
