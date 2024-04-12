import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRef, useState } from "react";
import { useTheme } from "../../ThemeProvider";
import { TechStackCardProps } from "../../types";

export const TechStackCard = ({ techStack }: TechStackCardProps) => {
  const { theme } = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

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

  return (
    <Card
      elevation={0}
      sx={{
        // height: lgUp ? "460px" : "370px",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        p: 0,
        border:
          "3px solid" +
          (theme.palette.mode == "dark"
            ? theme.palette.grey[900]
            : theme.palette.grey[200]),
      }}
    >
      <CardContent
        sx={{
          height: "500px",
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.mode == "dark" ? "#161618" : "#ffffff",
          p: 0,
        }}
      >
        {mdDown ? (
          <Box
            display="flex"
            flexDirection="column"
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
            {techStack.map((tech) => {
              return (
                tech.selected && (
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
                        display: "flex",
                        flexDirection: "row",
                      }}
                      justifyContent="flex-end"
                    >
                      <tech.icon
                        theme={theme}
                        cursor={cursor}
                        cardRef={cardsRef}
                        mouseOnCard={mouseOnCard}
                        fill={theme.palette.grey[700] + "30"}
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
            <Box width="100%" height="100%" sx={{}}>
              <Grid
                container
                sx={{
                  width: "100%",
                  height: "100%",
                  py: 3,
                  columnGap: 2,
                  rowGap: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {techStack
                  .flatMap((i) => [i, i, i, i, i])
                  .map((tech) => (
                    <Box
                      sx={{
                        width: "3.5rem",
                        height: "3.5rem",
                        backgroundColor: "#222222" + "40",
                        border: "1px solid" + theme.palette.grey[600] + "30",
                        p: 0.5,
                        borderRadius: 2,
                      }}
                    >
                      <tech.icon
                        theme={theme}
                        fill={theme.palette.grey[600] + "40"}
                      />
                    </Box>
                  ))}
              </Grid>
            </Box>
          </Box>
        ) : (
          <Box
            display="flex"
            flexDirection="row"
            sx={{ height: "100%", width: "100%" }}
          >
            {/* left - selected */}
            <Box sx={{ height: "100%", width: "50%" }}>
              <Grid
                container
                sx={{
                  width: "100%",
                  backgroundColor: "green",
                  borderRight: "1px solid" + theme.palette.grey[900],
                  stroke: "0.1px",
                  "&:hover": {
                    stroke: "0.2px",
                  },
                }}
                justifyContent="center"
              >
                {/* <Typography>Hello</Typography> */}
              </Grid>
            </Box>
            {/* Bottom - all */}
            <Box sx={{ height: "100%", width: "50%" }}></Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
export default TechStackCard;
