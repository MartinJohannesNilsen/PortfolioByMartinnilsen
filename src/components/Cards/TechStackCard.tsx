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
import { RevealFromDown, RevealFromDownOnEnter } from "../Animations/Reveal";

export const TechStackCard = ({
  techStackActive,
  techStackSelected,
  setTechStackSelected,
}: TechStackCardProps) => {
  const { theme } = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  const cardsRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  };

  useEffect(() => {
    console.log(cursor);

    return () => {};
  }, [cursor]);

  return (
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
      }}
    >
      <CardContent
        sx={{
          height: xs ? "400px" : "500px",
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
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            ref={cardsRef}
            onMouseMove={(event) => handleMouseMove(event)}
            onMouseEnter={() => setMouseOnCard(true)}
            onMouseLeave={() => setMouseOnCard(false)}
            sx={{
              height: "100%",
              width: "100%",
              strokeWidth: "0.1px",
              "&:hover": {
                strokeWidth: "0.2px",
              },
              p: 2,
            }}
          >
            {/* Top - selected */}
            {techStackActive.map((tech, index) => {
              return (
                index === techStackSelected && (
                  <Box
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
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        pr: 2,
                      }}
                    >
                      <Typography
                        variant="h3"
                        fontWeight="500"
                        sx={{ color: theme.palette.grey[400] }}
                      >
                        {tech.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight="500"
                        sx={{ color: theme.palette.grey[400] }}
                      >
                        {tech.description}
                      </Typography>
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
                      sx={{
                        flex:
                          techStackActive.length === 6
                            ? "0 0 calc(33.33% - 16px)"
                            : "0 0 calc(25% - 16px)", // Adjust width for 3 items per row with spacing
                        maxWidth:
                          techStackActive.length === 6 ? "33.33%" : "25%", // Ensure items take up maximum 1/3 of container width
                        maxheight:
                          techStackActive.length === 6 ? "33.33%" : "25%", // Ensure items take up maximum 1/3 of container width
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
          <Box
            display="flex"
            flexDirection="row-reverse"
            justifyContent="center"
            alignItems="center"
            ref={cardsRef}
            onMouseMove={(event) => handleMouseMove(event)}
            onMouseEnter={() => setMouseOnCard(true)}
            onMouseLeave={() => setMouseOnCard(false)}
            sx={{
              height: "100%",
              width: "100%",
              strokeWidth: "0.2px",
              "&:hover": {
                strokeWidth: "0.3px",
              },
              p: 2,
            }}
          >
            {/* Top - selected */}
            {techStackActive.map((tech, index) => {
              return (
                index === techStackSelected && (
                  <Box
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
                        sx={{ color: theme.palette.grey[400] }}
                      >
                        {tech.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight="500"
                        sx={{ color: theme.palette.grey[400] }}
                      >
                        {tech.description}
                      </Typography>
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
                        (index == techStackSelected ? "#757575" : "#75757560"),
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
  );
};
export default TechStackCard;
