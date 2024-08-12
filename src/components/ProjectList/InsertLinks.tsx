import { Box, Link, Theme, Typography } from "@mui/material";
import { useTheme } from "../../ThemeProvider";
import { ProjectElementProps } from "../../types";
import colorLuminance from "../../utils/colorLuminance";
import DOMPurify from "dompurify";
import { ArrowOutward } from "@mui/icons-material";

const linkElement = (link: string, text: string, theme: Theme) => {
  return (
    <Box display="flex" my={0.5}>
      <Link
        fontFamily={theme.typography.fontFamily}
        variant="body1"
        // color="textPrimary"
        href={link}
        sx={{
          color: "text.primary",
          fontWeight: "600",
          textDecoration: "none",
          borderBottom:
            "2px solid" + colorLuminance(theme.palette.secondary.main, 0.33),
          "&:hover": {
            // borderBottom: "2px solid " + color,
            // color: colorLuminance(
            //   "text.primary",
            //   theme.palette.mode === "dark" ? -0.4 : 0.4
            // ),
            borderBottom: "2px solid " + theme.palette.secondary.main,
          },
        }}
      >
        {text}
      </Link>
      <Typography
        fontFamily={theme.typography.fontFamily}
        variant="body1"
        color="inherit"
        display="inline-block"
        sx={{ fontWeight: 800 }}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize("&nbsp;→"),
          // __html: DOMPurify.sanitize("&nbsp;"),
        }}
      />
      {/* <ArrowOutward
        sx={{ fontSize: theme.typography.body1.fontSize, marginTop: 0.5 }}
      /> */}
    </Box>
  );
};

const insertLinks = (props: ProjectElementProps) => {
  const { theme } = useTheme();
  const hasGitHub = props.projectData.hasOwnProperty("linkToGitHub");
  const isHosted = props.projectData.hasOwnProperty("linkToWebsite");
  const hasDemoVid = props.projectData.hasOwnProperty("linkToDemovideo");
  const hasReadMe = props.projectData.hasOwnProperty("linkToReadMe");
  const hasPaper = props.projectData.hasOwnProperty("linkToPaper");

  return (
    <Box mt={2}>
      {hasGitHub ? (
        linkElement(
          props.projectData.linkToGitHub!,
          props.language === "norwegian"
            ? "Sjekk ut prosjektets GitHub"
            : "Check out the GitHub page",
          theme
        )
      ) : (
        <></>
      )}
      {isHosted ? (
        linkElement(
          props.projectData.linkToWebsite!,
          props.language === "norwegian"
            ? "Utforsk nettsiden"
            : "Launch the website",
          theme
        )
      ) : (
        <></>
      )}
      {hasDemoVid ? (
        linkElement(
          props.projectData.linkToDemovideo!,
          props.language === "norwegian" ? "Se demovideo" : "Watch demo video",
          theme
        )
      ) : (
        <></>
      )}
      {hasReadMe ? (
        linkElement(
          props.projectData.linkToReadMe!,
          props.language === "norwegian" ? "Les readme" : "Read the readme",
          theme
        )
      ) : (
        <></>
      )}
      {hasPaper ? (
        linkElement(
          props.projectData.linkToPaper!,
          props.language === "norwegian"
            ? "Les prosjektrapporten"
            : "Read the report",
          theme
        )
      ) : (
        <></>
      )}
    </Box>
  );
};
export default insertLinks;
