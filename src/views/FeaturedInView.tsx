import { FC, useState } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Grid,
  useMediaQuery,
} from "@material-ui/core";
import { ScrollTriggerUp } from "../components/Animations/ScrollTrigger";
import useDidUpdate from "../utils/useDidUpdate";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../ThemeProvider";
import { ArticleCard, ArticleProps } from "../components/Cards/ArticleCard";

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
  const { theme } = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.only("md"));
  const xl = useMediaQuery(theme.breakpoints.only("xl"));
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const animationOffset = mdUp ? -300 : -50;
  gsap.registerPlugin(ScrollTrigger);

  useDidUpdate(() => {
    ScrollTrigger.refresh();
  }, [props.refreshScrollTriggers]);

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
      px={xs ? 4 : sm ? 4 : md ? 8 : 0}
      pb={8}
    >
      <Box pt={4} pb={3}>
        <Typography variant="h3" className={classes.title}>
          {props.data.title}
        </Typography>
      </Box>
      <Grid container justifyContent="center" className={classes.height}>
        {props.data.articles.map((article, index) => (
          <ScrollTriggerUp
            x="10vh"
            markers={process.env.REACT_APP_SHOW_GSAP_MARKERS === "true"}
            start={animationOffset + -250 + 30 * index + "px center"}
            end={animationOffset + -100 + "px center"}
            key={index}
          >
            <Grid
              item
              xs={11}
              sm={7}
              md={4}
              lg={3}
              xl={3}
              style={{ display: "flex" }}
            >
              <Box px={xl ? 5 : 2} mx={1} my={3}>
                <ArticleCard
                  index={index}
                  article={article}
                  cardsState={cardsState}
                  handleHover={handleHover}
                  handleTooltipState={handleTooltipState}
                  readButtonText={props.data.readButtonText}
                  copyButtonText={props.data.copyButtonText}
                  copyText={props.data.copyText}
                />
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
  title: {
    color: theme.palette.error.main,
  },
  height: {
    height: "100%",
  },
}));
