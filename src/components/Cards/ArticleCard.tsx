import { FC } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  ClickAwayListener,
  Tooltip,
  Zoom,
} from "@mui/material";
import { useTheme } from "../../ThemeProvider";

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
  const { theme, setTheme } = useTheme();
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        padding: { xs: "5%", sm: "4%", lg: "6%" },
        "&:hover": {
          transform: "scale3d(1.05, 1.05, 1)",
          transition: "transform 150ms ease-in-out",
        },
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(115deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)"
            : "default",
      }}
      classes={{
        root: "",
        ...(props.cardsState[props.index]?.hovered
          ? {
              transform: "scale3d(1.05, 1.05, 1)",
              transition: "transform 150ms ease-in-out",
            }
          : ""),
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
        sx={{
          height: "160px",
          width: { xs: "95%", md: "100%" },
          borderRadius: 4,
          margin: "10px auto",
        }}
        image={props.article.img.path}
        title={props.article.img.alt}
      />
      <CardContent>
        <Box ml={-0.8}>
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textPrimary"
            sx={{
              textAlign: "left",
            }}
          >
            {props.article.title}
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            sx={{
              textAlign: "justify",
            }}
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
              // disableHoverListener
              disableTouchListener
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
