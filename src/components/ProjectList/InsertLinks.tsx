import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { useTheme } from "../../ThemeProvider";
import { ProjectElementProps } from "../../types";

const linkElement = (link: string, text: string, color: string) => {
  return (
    <Box display="flex" my={0.5}>
      <Link
        variant="body1"
        color="textPrimary"
        href={link}
        sx={{
          // color: color,
          fontWeight: "600",
          textDecoration: "none",
          borderBottom: "2px solid #9ce0e5",
          "&:hover": {
            // borderBottom: "2px solid " + color,
            borderBottom: "2px solid #29939b",
          },
        }}
      >
        {text}
      </Link>
      <Typography variant="body1" color="textPrimary">
        ‎ →
      </Typography>
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
          "#29939b"
        )
      ) : (
        <></>
      )}
      {isHosted ? (
        linkElement(
          props.projectData.linkToWebsite!,
          props.language === "norwegian"
            ? "Utforsk prosjektets nettside"
            : "Launch the project website",
          "#29939b"
        )
      ) : (
        <></>
      )}
      {hasDemoVid ? (
        linkElement(
          props.projectData.linkToDemovideo!,
          props.language === "norwegian"
            ? "Spill av demovideo"
            : "Play the demo video",
          "#29939b"
        )
      ) : (
        <></>
      )}
      {hasReadMe ? (
        linkElement(
          props.projectData.linkToReadMe!,
          props.language === "norwegian"
            ? "Les prosjektets readme"
            : "Read the project readme",
          "#29939b"
        )
      ) : (
        <></>
      )}
      {hasPaper ? (
        linkElement(
          props.projectData.linkToPaper!,
          props.language === "norwegian"
            ? "Les den tilhørende prosjektrapporten"
            : "Read the project report",
          "#29939b"
        )
      ) : (
        <></>
      )}
    </Box>
  );
};
export default insertLinks;
