import React, { useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import {
  Box,
  CssBaseline,
  StyledEngineProvider,
  useMediaQuery,
} from "@mui/material";

const data = [
  {
    title: "LinkedIn",
    description:
      "The platform for building a career-related network, or showing off your new fresh certification.",
    url: "https://www.linkedin.com/in/MartinJohannesNilsen/",
    icon: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
    // icon: https://cdn-icons-png.flaticon.com/512/3536/3536569.png
    backgroundColor: "#ebf3f7",
  },
  {
    title: "Instagram",
    description:
      "Get a little insight into my life through images. Plz do not stalk me.",
    url: "https://www.instagram.com/MartinJohannesNilsen/",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    // icon: https://cdn-icons-png.flaticon.com/512/1384/1384031.png
    // icon: https://cdn-icons-png.flaticon.com/512/2111/2111463.png
    backgroundColor: "#f6ebf7",
  },
  {
    title: "Twitter",
    description:
      "Have just started using Twitter a bit - someone wants to learn me how to use it?",
    url: "https://twitter.com/MartinJNilsen",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    // icon: https://cdn-icons-png.flaticon.com/512/733/733635.png
    // icon: https://cdn-icons-png.flaticon.com/128/25/25347.png
    // icon: https://cdn-icons-png.flaticon.com/128/3256/3256013.png
    backgroundColor: "#ebf7f7",
  },
  {
    title: "Developer Portfolio",
    description:
      "I am an M.Sc. Student in Computer Science and Software Engineer.",
    url: "https://MartinJohannesNilsen.no",
    icon: "https://i.ibb.co/b60yJW4/image.png",
    // icon: "https://martinjohannesnilsen.no/logo512.png",
    // icon: "https://martinjohannesnilsen.no/favicon.ico",
    backgroundColor: "#ebf3f7",
  },
  {
    title: "Tech blog",
    description:
      "A platform for sharing posts about technology, software engineering and everything in between.",
    url: "https://blog.mjntech.dev",
    // icon: "https://blog.mjntech.dev/logo512.png",
    icon: "https://blog.mjntech.dev/favicon.ico",
    // backgroundColor: "#f7f6eb",
    backgroundColor: "#f4ebf7",
  },
  {
    title: "GitHub",
    description:
      "How can one work as a developer and not have a GitHub? Check out my ReadMe :)",
    url: "https://github.com/MartinJohannesNilsen",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111432.png",
    // icon: https://cdn-icons-png.flaticon.com/128/25/25657.png
    backgroundColor: "#f5f5f5",
  },
  {
    title: "VSCO",
    description: "Well, yeah, I do also have a VSCO.",
    url: "https://vsco.co/martinjohannesnilsen",
    icon: "https://cdn-icons-png.flaticon.com/512/356/356039.png",
    // icon: https://cdn-icons-png.flaticon.com/512/355/355988.png
    // icon: https://cdn-icons-png.flaticon.com/512/356/356090.png
    backgroundColor: "#f7f7f7",
  },
  {
    title: "YouTube",
    description:
      "Not a YouTuber by any means, but might upload something in the future?",
    url: "https://www.youtube.com/channel/UCxyROQQeUpa44IEeC5oJuhQ",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    // icon: https://cdn-icons-png.flaticon.com/128/3670/3670147.png
    // icon: https://cdn-icons-png.flaticon.com/128/1384/1384012.png
    // icon: https://cdn-icons-png.flaticon.com/128/1384/1384028.png
    // icon: https://cdn-icons-png.flaticon.com/128/3938/3938026.png
    backgroundColor: "#f7edeb",
  },
  {
    title: "Spotify",
    description:
      "Most definitely listening to some mainstream music right now.",
    url: "https://open.spotify.com/user/martinnilsen99",
    icon: "https://cdn-icons-png.flaticon.com/128/174/174872.png",
    // icon: https://cdn-icons-png.flaticon.com/128/2111/2111685.png
    // icon: https://cdn-icons-png.flaticon.com/128/5968/5968959.png
    // icon: https://cdn-icons-png.flaticon.com/128/2111/2111624.png
    backgroundColor: "#ebf7eb",
  },
];

type LinkCardProps = {
  title: string;
  description: string;
  url: string;
  icon: string;
  backgroundColor: string;
};

const Card = (props: LinkCardProps) => {
  return (
    <a href={props.url} style={{ color: "inherit", textDecoration: "none" }}>
      <Box
        display="flex"
        sx={{
          padding: "10px",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: props.backgroundColor,
          },
        }}
      >
        {/* Icon */}
        <Box
          display="flex"
          sx={{ justifyItems: "center", alignItems: "center" }}
        >
          <img
            src={props.icon}
            style={{
              width: "40px",
              height: "40px",
              marginRight: "15px",
            }}
          />
        </Box>
        {/* Text */}
        <Box sx={{}}>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
            {props.title}
          </h2>
          <p
            style={{
              margin: 0,
              opacity: 0.7,
              fontSize: 16,
              color: "inherit",
            }}
          >
            {props.description}
          </p>
        </Box>
      </Box>
    </a>
  );
};

const Linktree = () => {
  const { theme } = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    document.title = "Links | MJN";
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      {/* <CustomThemeProvider> */}
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
          minHeight: "100%",
          minWidth: "100%",
          padding: smUp ? "10px 0 15px 0" : "15px 15px 150px 15px",
        }}
      >
        <Box sx={{ padding: "10px", margin: smUp ? "0" : "0px 0px 50px 0px" }}>
          <h1 style={{ fontSize: 36, fontWeight: 700, height: 45, margin: 0 }}>
            Follow me
          </h1>
          <p
            style={{
              fontSize: 18,
              height: 25,
              opacity: 0.8,
              boxSizing: "border-box",
              display: "block",
              marginTop: 8,
            }}
          >
            Hi! Below is a list of my social media accounts. Let's be friends,
            or enemies - your choice.
          </p>
        </Box>
        <Box
          style={{ padding: "0px" }}
          display="flex"
          flexDirection="column"
          justifyItems="flex-start"
          gap="5px"
        >
          {data.map((link) => (
            <Card
              title={link.title}
              description={link.description}
              url={link.url}
              icon={link.icon}
              backgroundColor={link.backgroundColor}
            />
          ))}
        </Box>
      </Box>
      {/* </CustomThemeProvider> */}
    </StyledEngineProvider>
  );
};
export default Linktree;
