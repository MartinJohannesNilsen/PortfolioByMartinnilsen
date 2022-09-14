import { FC } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  ClickAwayListener,
  Tooltip,
  Zoom,
} from "@material-ui/core";

export type ArticleProps = {
  title: string;
  description: string;
  img: {
    path: string;
    alt: string;
  };
  url: string;
};

type ArticleCardProps = {
  index: number;
  readButtonText: string;
  copyButtonText: string;
  copyText: string;
  article: ArticleProps;
  cardsState: {
    hovered: false;
    shadow: 1;
    openTooltip: false;
  }[];
  handleHover: (index: number, {}) => void;
  handleTooltipState: (newState: boolean, index: number) => void;
};

export const ArticleCard: FC<ArticleCardProps> = (props) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      classes={{
        root: props.cardsState[props.index]?.hovered ? classes.cardHovered : "",
      }}
      onMouseEnter={() =>
        props.handleHover(props.index, { hovered: true, shadow: 3 })
      }
      onMouseLeave={() =>
        props.handleHover(props.index, { hovered: false, shadow: 1 })
      }
      raised={props.cardsState[props.index]?.hovered}
    >
      <CardMedia
        className={classes.media}
        image={props.article.img.path}
        title={props.article.img.alt}
      />
      <CardContent>
        <Box ml={-0.8}>
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textPrimary"
            className={classes.cardTitle}
          >
            {props.article.title}
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            className={classes.cardText}
          >
            {props.article.description}
          </Typography>
        </Box>
      </CardContent>
      <div style={{ flexGrow: 1 }} />
      <CardActions>
        <Box ml={-0.4}>
          <Button
            size="small"
            color="inherit"
            onClick={() => window.open(props.article.url, "_blank")}
          >
            {props.readButtonText}
          </Button>
          <ClickAwayListener
            onClickAway={() => props.handleTooltipState(false, props.index)}
          >
            <Tooltip
              arrow
              placement="top"
              PopperProps={{
                disablePortal: true,
              }}
              onClose={() => props.handleTooltipState(false, props.index)}
              open={props.cardsState[props.index]?.openTooltip}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              classes={{ tooltip: classes.tooltipWidth }}
              TransitionComponent={Zoom}
              title={
                <Typography variant="overline" color="inherit">
                  {props.copyText}
                </Typography>
              }
            >
              <Button
                size="small"
                color="inherit"
                onClick={() => {
                  props.handleTooltipState(true, props.index);
                  navigator.clipboard.writeText(props.article.url);
                }}
              >
                {props.copyButtonText}
              </Button>
            </Tooltip>
          </ClickAwayListener>
        </Box>
      </CardActions>
    </Card>
  );
};
export default ArticleCard;

const useStyles = makeStyles((theme) => ({
  media: {
    height: "160px",
    width: "100%",
    borderRadius: 5,
    margin: "-0%",
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
    borderRadius: 20,
    padding: "5%",
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
}));
