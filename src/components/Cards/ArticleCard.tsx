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
import { ArticleCardProps } from "../../types";

export const ArticleCard: FC<ArticleCardProps> = (props) => {
  const { theme } = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Card
      sx={{
        height: lgUp ? "460px" : "370px",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
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
            fontFamily={theme.typography.fontFamily}
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
        }}
        image={props.article.img.path}
        title={props.article.img.alt}
      />
      <CardContent>
        <Box mt={-1.5}>
          <Typography
            fontFamily={theme.typography.fontFamily}
            variant="h6"
            gutterBottom
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
            fontFamily={theme.typography.fontFamily}
            variant="body2"
            color="textPrimary"
            component="p"
            sx={{
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
            fontFamily={theme.typography.fontFamily}
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
            fontFamily={theme.typography.fontFamily}
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
