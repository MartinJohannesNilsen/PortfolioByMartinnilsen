import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { FC, useState } from "react";
import { useTheme } from "../ThemeProvider";
import { RevealFromDownOnEnter } from "../components/Animations/Reveal";
import TechStackCard from "../components/Cards/TechStackCard";
import { techStackItemProps, TechStackViewProps } from "../types";

// Icons
import CppIcon from "../components/AnimatedIcons/TechStack/CppIcon";
import DockerIcon from "../components/AnimatedIcons/TechStack/DockerIcon";
import GitIcon from "../components/AnimatedIcons/TechStack/GitIcon";
import GoIcon from "../components/AnimatedIcons/TechStack/GoIcon";
import HuggingfaceIcon from "../components/AnimatedIcons/TechStack/HuggingfaceIcon";
import JavaIcon from "../components/AnimatedIcons/TechStack/JavaIcon";
import JupyterIcon from "../components/AnimatedIcons/TechStack/JupyterIcon";
import KotlinIcon from "../components/AnimatedIcons/TechStack/KotlinIcon";
import KubernetesIcon from "../components/AnimatedIcons/TechStack/KubernetesIcon";
import OnnxIcon from "../components/AnimatedIcons/TechStack/OnnxIcon";
import PandasIcon from "../components/AnimatedIcons/TechStack/PandasIcon";
import PythonIcon from "../components/AnimatedIcons/TechStack/PythonIcon";
import PytorchIcon from "../components/AnimatedIcons/TechStack/PytorchIcon";
import ReactIcon from "../components/AnimatedIcons/TechStack/ReactIcon";
import RustIcon from "../components/AnimatedIcons/TechStack/RustIcon";
import SQLIcon from "../components/AnimatedIcons/TechStack/SQLIcon";
import ScikitlearnIcon from "../components/AnimatedIcons/TechStack/ScikitlearnIcon";
import SwaggerIcon from "../components/AnimatedIcons/TechStack/SwaggerIcon";
import TensorflowIcon from "../components/AnimatedIcons/TechStack/TensorflowIcon";
import TypescriptIcon from "../components/AnimatedIcons/TechStack/TypescriptIcon";

const generalTechStack: techStackItemProps[] = [
  {
    icon: PythonIcon,
    name: "Python",
    description: "Scripting elegance.",
    level: "Advanced",
  },
  {
    icon: JavaIcon,
    name: "Java",
    description:
      "A trusted cornerstone of object oriented programming for years.",
    level: "Advanced",
  },
  {
    icon: KotlinIcon,
    name: "Kotlin",
    description: "Java's seasoned successor, bringing modernity to the table.",
    level: "Intermediate",
  },
  {
    icon: TypescriptIcon,
    name: "TypeScript",
    description: "Undeniably ruling the web.",
    level: "Advanced",
  },
  {
    icon: SQLIcon,
    name: "SQL",
    description: "Taming databases with structured query finesse.",
    level: "Intermediate",
  },
  {
    icon: RustIcon,
    name: "Rust",
    description: "Safe, speedy, and fiercely modern.",
    level: "Novice",
  },
  {
    icon: GoIcon,
    name: "Go",
    description:
      "Elevating server-side development with its simplicity and concurrency.",
    level: "Novice",
  },
  {
    icon: CppIcon,
    name: "C++",
    description: "Where performance meets fine-grained control.",
    level: "Novice",
  },
];
const mlTechStack: techStackItemProps[] = [
  {
    icon: PytorchIcon,
    name: "PyTorch",
    description:
      "Empowering deep learning research and deployment with its flexibility and ease of use.",
  },
  {
    icon: PandasIcon,
    name: "Pandas",
    description: "Python's go-to for data wrangling magic.",
  },
  {
    icon: ScikitlearnIcon,
    name: "SciKitLearn",
    description: "ML made easy with Python's friendliest lib.",
  },
  {
    icon: TensorflowIcon,
    name: "Tensorflow",
    description:
      "Combined with Keras for streamlined machine learning workflows.",
  },
  {
    icon: OnnxIcon,
    name: "ONNX",
    description:
      "Enabling high performance and interoperability for efficient inference across platforms.",
  },
  {
    icon: HuggingfaceIcon,
    name: "Hugging Face",
    description: "Transforming NLP with AI wizardry.",
  },
];
const deploymentTechStack: techStackItemProps[] = [
  {
    icon: GitIcon,
    name: "Git",
    description:
      "The go-to version control system for seamless collaboration and code management.",
    level: "Intermediate",
  },
  {
    icon: DockerIcon,
    name: "Docker",
    description: "Used for composing services and containerizing everything.",
    level: "Intermediate",
  },
  {
    icon: ReactIcon,
    name: "React",
    description: "Powering web development with dynamic interfaces.",
    level: "Intermediate",
  },
  {
    icon: JupyterIcon,
    name: "Jupyter",
    description: "Facilitating interactive computing and data visualization.",
    level: "Intermediate",
  },
  {
    icon: KubernetesIcon,
    name: "Kubernetes",
    description:
      "Orchestrating containerized applications for scalable deployment and management.",
    level: "Novice",
  },
  {
    icon: SwaggerIcon,
    name: "Swagger UI",
    description:
      "Simplifying API documentation and testing with its intuitive interface.",
    level: "Intermediate",
  },
];

const TechStackView: FC<TechStackViewProps> = (props) => {
  const { theme } = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const smDown = useMediaQuery(theme.breakpoints.down("md"));
  const cardFadeLength = "60px";
  const [techStackActive, setTechStackActive] =
    useState<techStackItemProps[]>(generalTechStack);
  const [techStackSelected, setTechStackSelected] = useState<number>(0);

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
                onClick={() => {
                  setTechStackActive(generalTechStack);
                  setTechStackSelected(0);
                }}
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
                onClick={() => {
                  setTechStackActive(mlTechStack);
                  setTechStackSelected(0);
                }}
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
                onClick={() => {
                  setTechStackActive(deploymentTechStack);
                  setTechStackSelected(0);
                }}
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
            <TechStackCard
              techStackActive={techStackActive}
              techStackSelected={techStackSelected}
              setTechStackSelected={setTechStackSelected}
            />
          </Grid>
        </Grid>
      </RevealFromDownOnEnter>
    </Box>
  );
};
export default TechStackView;
