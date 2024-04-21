import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../ThemeProvider";
import { TechStackCardProps } from "../../types";
import { isMobile } from "react-device-detect";
import { createNoise2D } from "simplex-noise";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { generalTechStack, mlTechStack } from "../../views/TechStackView";

export const TechStackCard = ({
  techStackActive,
  techStackSelected,
  setTechStackSelected,
  mouseOnCard,
  setMouseOnCard,
}: TechStackCardProps) => {
  const { theme } = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.only("md"));
  const lg = useMediaQuery(theme.breakpoints.only("lg"));
  const xl = useMediaQuery(theme.breakpoints.only("xl"));

  const cardsRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (!isMobile && cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  };

  // Animate moving cursor on mobile devices using noise
  useEffect(() => {
    if (isMobile && cardsRef.current !== null) {
      // Create noise functions
      const noise2DX = createNoise2D();
      const noise2DY = createNoise2D();
      // Get card width and height
      const cardMeasurements = cardsRef.current.getBoundingClientRect();
      // Generate noise values
      const updateNoise = () => {
        const time = Date.now() * 0.00000005;
        const noise = {
          x: Math.abs(noise2DX(time * cardMeasurements.width, 0)),
          y: Math.abs(noise2DY(0, time * cardMeasurements.height)),
        };
        const calculatedPosition = {
          x: noise.x * cardMeasurements.width,
          y: noise.y * cardMeasurements.height,
        };
        // setCursor(offsetPosition);

        // Move bounderies within offset for better visuals
        const offsetPosition = {
          x:
            (calculatedPosition.x + cardMeasurements.width * 0.05) %
            cardMeasurements.width,
          y:
            (calculatedPosition.y + cardMeasurements.height * 0.05) %
            cardMeasurements.height,
        };
        setCursor(offsetPosition);
      };

      const intervalId = setInterval(updateNoise, 100); // Adjust interval as needed

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isMobile]);

  // Gsap animations
  const containerRef = useRef();
  // Animation: Ease in card on change of techStackActive
  useGSAP(
    () => {
      // Animations
      const easeAnimation = gsap.fromTo(
        ".techStackCard",
        { opacity: "0", y: "20px" },
        {
          opacity: "1",
          y: "0",
          // scaleY: "80%",
          duration: 1,
        }
      );
      easeAnimation.play();

      return () => {};
    },
    { dependencies: [techStackActive], scope: containerRef }
  );
  // Animation: Ease in techStackSelected
  useGSAP(
    () => {
      // Animations
      const easeAnimation = gsap.fromTo(
        ".techStackSelected",
        { opacity: "0", y: "20px" },
        {
          opacity: "1",
          y: "0",
          // scaleY: "80%",
          duration: 1,
        }
      );
      easeAnimation.play();

      return () => {};
    },
    { dependencies: [techStackSelected], scope: containerRef }
  );

  return (
    <Box ref={containerRef}>
      <Card
        elevation={0}
        sx={{
          // height: lgUp ? "460px" : "370px",
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          paddingBottom: "0px !important",
          p: 0,
          border:
            "3px solid" +
            (theme.palette.mode == "dark"
              ? theme.palette.grey[900]
              : theme.palette.grey[300]),
          maxWidth: xs ? "380px" : sm ? "500px" : "100%",
        }}
      >
        <CardContent
          sx={{
            height: xs ? "440px" : "500px",
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor:
              // theme.palette.mode == "dark" ? "#161618" : theme.palette.grey[200],
              "#161618",
            "&:last-child": {
              paddingBottom: 2,
            },
          }}
        >
          {mdDown ? (
            // Small screens (xs, sm)
            <Box
              className="techStackCard"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              ref={cardsRef}
              onMouseMove={(event) => !isMobile && handleMouseMove(event)}
              onMouseEnter={() => !isMobile && setMouseOnCard(true)}
              onMouseLeave={() => !isMobile && setMouseOnCard(false)}
              sx={{
                height: "100%",
                width: "100%",
                strokeWidth: xs ? "0.2px" : "0.3px",
                "&:hover": {
                  strokeWidth: xs ? "0.3px" : "0.4px",
                },
                p: xs ? 1 : 2,
              }}
            >
              {/* Top - selected */}
              {techStackActive.map((tech, index) => {
                return (
                  index === techStackSelected && (
                    <Box
                      key={index}
                      className="techStackSelected"
                      sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        gap: 4,
                        borderBottom: "1px solid" + theme.palette.grey[900],
                      }}
                    >
                      <Box
                        sx={{
                          height: "225px",
                          width: "40%",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          // pt: "10%",
                        }}
                        justifyContent="flex-end"
                      >
                        <tech.icon
                          theme={theme}
                          cursor={cursor}
                          cardRef={cardsRef}
                          mouseOnCard={mouseOnCard}
                          fill={"#61616130"}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: "80%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          // height: "75%",
                          pr: 0,
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          fontWeight="700"
                          fontFamily={theme.typography.fontFamily}
                          sx={{ color: theme.palette.grey[400] }}
                        >
                          {tech.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          fontWeight="500"
                          fontFamily={theme.typography.fontFamily}
                          sx={{ color: theme.palette.grey[400] }}
                        >
                          {tech.description}
                        </Typography>
                        {tech.level && (
                          <Typography
                            mt={0.5}
                            variant="body2"
                            fontWeight="300"
                            fontFamily={theme.typography.fontFamily}
                            sx={{ color: theme.palette.grey[400] }}
                          >
                            Level: {tech.level}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  )
                );
              })}

              {/* Bottom - all */}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  py: 2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center", // Center items horizontally
                    alignItems: "center", // Center items vertically
                    flexWrap: "wrap", // Allow items to wrap to next line
                    rowGap: 2,
                    columnGap: 2,
                  }}
                >
                  {techStackActive
                    // .flatMap((i) => [i, i, i, i, i])
                    .map((tech, index) => (
                      <Box
                        key={index}
                        sx={{
                          flex:
                            techStackActive.length === 6
                              ? "0 0 calc(33.33% - 16px)"
                              : "0 0 calc(25% - 16px)", // Adjust width for 3 items per row with spacing
                          maxWidth:
                            // techStackActive.length === 6 ? "33.33%" : "25%", // Ensure items take up maximum 1/3 of container width
                            "33.33%", // Ensure items take up maximum 1/3 of container width
                          maxheight:
                            // techStackActive.length === 6 ? "33.33%" : "25%", // Ensure items take up maximum 1/3 of container width
                            "33.33%", // Ensure items take up maximum 1/3 of container width
                          textAlign: "center",
                          backgroundColor: "#22222240",
                          border:
                            "1px solid " +
                            (index == techStackSelected
                              ? "#757575"
                              : "#75757530"),
                          p: "0.8rem",
                          borderRadius: 2,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          "&:hover": {
                            cursor: "pointer",
                            border:
                              "1px solid" +
                              (index == techStackSelected
                                ? "#757575"
                                : "#75757560"),
                          },
                        }}
                        onClick={() => {
                          setTechStackSelected(index);
                        }}
                      >
                        <tech.icon theme={theme} fill={"#75757540"} />
                      </Box>
                    ))}
                </Box>
              </Box>
            </Box>
          ) : (
            // Large screens (md, lg, xl)
            <Box
              className="techStackCard"
              display="flex"
              flexDirection="row-reverse"
              justifyContent="center"
              alignItems="center"
              ref={cardsRef}
              onMouseMove={(event) => !isMobile && handleMouseMove(event)}
              onMouseEnter={() => !isMobile && setMouseOnCard(true)}
              onMouseLeave={() => !isMobile && setMouseOnCard(false)}
              sx={{
                height: "100%",
                width: "100%",
                strokeWidth: xl ? "0.4px" : "0.3px",
                "&:hover": {
                  strokeWidth: xl ? "0.5px" : "0.4px",
                },
                p: 2,
              }}
            >
              {/* Top - selected */}
              {techStackActive.map((tech, index) => {
                return (
                  index === techStackSelected && (
                    <Box
                      key={index}
                      className="techStackSelected"
                      sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        // gap: 4,
                        borderLeft: "1px solid" + theme.palette.grey[900],
                      }}
                    >
                      <Box
                        sx={{
                          height: "225px",
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        justifyContent="flex-end"
                      >
                        <tech.icon
                          theme={theme}
                          cursor={cursor}
                          cardRef={cardsRef}
                          mouseOnCard={mouseOnCard}
                          fill={"#61616130"}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: "80%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          pl: 1,
                        }}
                      >
                        <Typography
                          variant="h3"
                          fontWeight="500"
                          fontFamily={theme.typography.fontFamily}
                          sx={{ color: theme.palette.grey[400] }}
                        >
                          {tech.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          fontWeight="500"
                          fontFamily={theme.typography.fontFamily}
                          sx={{ color: theme.palette.grey[400] }}
                        >
                          {tech.description}
                        </Typography>
                        {tech.level && (
                          <Typography
                            mt={0.5}
                            variant="body2"
                            fontWeight="300"
                            fontFamily={theme.typography.fontFamily}
                            sx={{ color: theme.palette.grey[400] }}
                          >
                            Level: {tech.level}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  )
                );
              })}

              {/* Bottom - all */}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexBasis: "100%",
                  justifyContent: "center",
                  alignContent: "center",
                  flexWrap: "wrap", // Allow items to wrap to next line
                  p: 2,
                  mr: 2,
                  rowGap: 1.5,
                  columnGap: 1.5,
                }}
              >
                {techStackActive.map((tech, index) => (
                  <Box
                    key={index}
                    sx={{
                      flex: "0 0 calc(50% - 16px)",
                      maxWidth: "50%",
                      maxheight: "50%",
                      textAlign: "center",
                      backgroundColor: "#22222240",
                      border:
                        "1px solid " +
                        (index == techStackSelected ? "#757575" : "#75757530"),
                      p: 0.5,
                      borderRadius: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      "&:hover": {
                        cursor: "pointer",
                        border:
                          "1px solid" +
                          (index == techStackSelected
                            ? "#757575"
                            : "#75757560"),
                      },
                    }}
                    onClick={() => {
                      setTechStackSelected(index);
                    }}
                  >
                    <tech.icon theme={theme} fill={"#75757540"} />
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};
export default TechStackCard;
