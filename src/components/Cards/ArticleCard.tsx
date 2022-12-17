import { FC } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Avatar,
  useMediaQuery,
  CardActions,
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
  publisher: {
    icon: string;
    name: string;
  };
  readTimeMinutes: string;
  date: string;
};

type ArticleCardProps = {
  index: number;
  article: ArticleProps;
  language: string;
};

export const ArticleCard: FC<ArticleCardProps> = (props) => {
  const { theme, setTheme } = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Card
      sx={{
        height: lgUp ? "460px" : "370px",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        // justifyContent: "space-between",
        background:
          theme.palette.mode === "dark"
            ? "radial-gradient(circle at 10% 20%, rgb(90, 92, 106) 0%, rgb(32, 45, 58) 81.3%)"
            : "default",
        boxShadow:
          theme.palette.mode === "light"
            ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            : "none",
      }}
      classes={{
        root: "",
      }}
    >
      <CardContent>
        <Stack direction="row" spacing={1.5} my={-0.5} alignItems="center">
          <Avatar
            alt={`Logo of ${props.article.publisher.name}`}
            src={props.article.publisher.icon}
          />
          <Typography
            variant="subtitle2"
            color="textPrimary"
            sx={{
              textAlign: "left",
              userSelect: "none",
              cursor: "grab",
            }}
          >
            {props.article.publisher.name}
          </Typography>
        </Stack>
      </CardContent>
      <CardMedia
        sx={{
          height: "160px",
          width: { xs: "100%", md: "100%" },
          // borderRadius: 4,
          // margin: "0 ",
        }}
        image={props.article.img.path}
        title={props.article.img.alt}
      />
      <CardContent>
        <Box mt={-1.5}>
          <Typography
            gutterBottom
            variant="h6"
            color="textPrimary"
            sx={{
              fontWeight: "600",
              textAlign: "left",
              userSelect: "none",
              cursor: "grab",
            }}
            mt={1}
          >
            {props.article.title}
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            sx={{
              // fontWeight: "400",
              // textAlign: "justify",
              textAlign: "left",
              userSelect: "none",
              cursor: "grab",
            }}
          >
            {props.article.description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        <Stack direction="row" spacing={2} mb={1.2} ml={1}>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            sx={{
              textAlign: "left",
              opacity: "0.5",
              userSelect: "none",
              cursor: "grab",
            }}
          >
            {new Date(props.article.date).toLocaleDateString(
              props.language === "norwegian" ? "nb-NO" : "en-GB",
              { year: "numeric", month: "short", day: "numeric" }
            )}
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            sx={{
              textAlign: "left",
              opacity: "0.5",
              userSelect: "none",
              cursor: "grab",
            }}
          >
            {`${props.article.readTimeMinutes} ${
              props.language === "norwegian" ? "min å lese" : "min read"
            }`}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
};
export default ArticleCard;
