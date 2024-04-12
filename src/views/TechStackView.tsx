import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { FC, useState } from "react";
import DockerIcon from "../components/AnimatedIcons/TechStack/DockerIcon";
import KubernetesIcon from "../components/AnimatedIcons/TechStack/KubernetesIcon";
import TechStackCard from "../components/Cards/TechStackCard";
import { useTheme } from "../ThemeProvider";
import { techStackItemProps, TechStackViewProps } from "../types";
import { RevealFromDownOnEnter } from "../components/Animations/Reveal";

const generalTechStack: techStackItemProps[] = [];
const mlTechStack: techStackItemProps[] = [];
const deploymentTechStack: techStackItemProps[] = [
  {
    icon: DockerIcon,
    name: "Docker",
    description:
      "Used for containerization of everything and composing services",
    selected: false,
  },
  {
    icon: KubernetesIcon,
    name: "Kubernetes",
    description: "Paired with Docker for scaled deployment",
    selected: true,
  },
];

const TechStackView: FC<TechStackViewProps> = (props) => {
  const { theme } = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const smDown = useMediaQuery(theme.breakpoints.down("md"));
  const cardFadeLength = "60px";
  const [techStackActive, setTechStackActive] =
    useState<techStackItemProps[]>(deploymentTechStack);

  return (
    <Box
      id={props.id}
      sx={{
        // minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.dark",
      }}
    >
      {/* Title */}
      <Box pt={5} pb={3}>
        {props.language === "norwegian" ? (
          <>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h3"
              display="inline"
            >
              Tech
            </Typography>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h3"
              color="textPrimary"
              display="inline"
              sx={{
                color: "secondary.main",
              }}
            >
              &nbsp;stack.
            </Typography>
          </>
        ) : (
          <>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h3"
              display="inline"
              sx={{
                color: "secondary.main",
              }}
            >
              Tech
            </Typography>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h3"
              display="inline"
              color="textPrimary"
            >
              &nbsp;stack.
            </Typography>
          </>
        )}
      </Box>
      {/* Content */}
      <RevealFromDownOnEnter>
        <Grid
          sx={{ width: "100%", height: "100%" }}
          container
          justifyContent="center"
        >
          {/* Button row */}
          <Grid item xs={12} container justifyContent="center" gap={2} py={5}>
            <Grid item>
              <Button
                sx={{
                  padding: "6px 20px",
                  borderRadius: 2,
                  backgroundColor: theme.palette.primary.main,
                  border:
                    "2px solid" +
                    (techStackActive === generalTechStack
                      ? theme.palette.grey[600]
                      : theme.palette.mode == "dark"
                      ? theme.palette.grey[900]
                      : theme.palette.grey[200]),
                  width: "100%",
                }}
                onClick={() => setTechStackActive(generalTechStack)}
              >
                <Typography
                  sx={{
                    textTransform: "none",
                    color: theme.palette.text.primary,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  General
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{
                  padding: "6px 20px",
                  borderRadius: 2,
                  backgroundColor: theme.palette.primary.main,
                  border:
                    "2px solid" +
                    (techStackActive === mlTechStack
                      ? theme.palette.grey[600]
                      : theme.palette.mode == "dark"
                      ? theme.palette.grey[900]
                      : theme.palette.grey[200]),
                  width: "100%",
                }}
                onClick={() => setTechStackActive(mlTechStack)}
              >
                <Typography
                  sx={{
                    textTransform: "none",
                    color: theme.palette.text.primary,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  AI / ML
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{
                  padding: "6px 20px",
                  borderRadius: 2,
                  backgroundColor: theme.palette.primary.main,
                  border:
                    "2px solid" +
                    (techStackActive === deploymentTechStack
                      ? theme.palette.grey[600]
                      : theme.palette.mode == "dark"
                      ? theme.palette.grey[900]
                      : theme.palette.grey[200]),
                  width: "100%",
                }}
                onClick={() => setTechStackActive(deploymentTechStack)}
              >
                <Typography
                  sx={{
                    textTransform: "none",
                    color: theme.palette.text.primary,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Deployment
                </Typography>
              </Button>
            </Grid>
          </Grid>

          {/* Main card */}
          <Grid item xs={11} sm={9} md={7} lg={6} xl={5} py={2} mb={22}>
            <TechStackCard techStack={techStackActive} />
          </Grid>
        </Grid>
      </RevealFromDownOnEnter>
    </Box>
  );
};
export default TechStackView;
