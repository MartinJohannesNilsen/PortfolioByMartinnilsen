import { FC, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "../ThemeProvider";
import { LandingViewProps } from "../types";
import {
  RevealFromLeftOnEnter,
  RevealFromRightOnEnter,
  RevealFromDownOnEnter,
} from "../components/Animations/Reveal";

const LandingView: FC<LandingViewProps> = (props) => {
  const { theme } = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const smDown = useMediaQuery(theme.breakpoints.down("md"));
  const cardFadeLength = "60px";

  return (
    <Box id={props.id}>
      {/* First introduction */}
      <Box
        sx={{
          minHeight: "calc(100vh - 80px)",
          backgroundColor: "primary.main",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "70px",
            rowGap: smDown ? "20px" : "6vh",
            padding: xs ? "0px 0px" : "0px 50px",
          }}
        >
          {smDown ? (
            <>
              <RevealFromDownOnEnter x={cardFadeLength}>
                <img
                  style={{
                    width: "300px",
                    backgroundColor: theme.palette.secondary.main,
                  }}
                  alt={props.data.cards[0].img.alt}
                  src={props.data.cards[0].img.path}
                />
              </RevealFromDownOnEnter>
              <RevealFromDownOnEnter x={cardFadeLength}>
                <Card sx={{ background: "transparent", boxShadow: "none" }}>
                  <CardContent>
                    <Box
                      textAlign="left"
                      sx={{
                        width: "340px",
                      }}
                    >
                      <Typography
                        fontFamily={theme.typography.fontFamily}
                        variant="h5"
                        color="textPrimary"
                      >
                        {props.data.cards[0].title}
                      </Typography>
                    </Box>
                    <Box
                      textAlign="left"
                      mt={2}
                      sx={{
                        width: "340px",
                      }}
                    >
                      <Typography
                        fontFamily={theme.typography.fontFamily}
                        variant="h6"
                        color="textPrimary"
                      >
                        {props.data.cards[0].text}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </RevealFromDownOnEnter>
            </>
          ) : (
            <>
              <RevealFromRightOnEnter x={cardFadeLength}>
                <img
                  style={{
                    width: "350px",
                    backgroundColor: theme.palette.secondary.main,
                  }}
                  alt={props.data.cards[0].img.alt}
                  src={props.data.cards[0].img.path}
                />
              </RevealFromRightOnEnter>
              <RevealFromLeftOnEnter x={cardFadeLength}>
                <Card sx={{ background: "transparent", boxShadow: "none" }}>
                  <CardContent>
                    <Box
                      textAlign="left"
                      sx={{
                        width: "400px",
                      }}
                    >
                      <Typography
                        fontFamily={theme.typography.fontFamily}
                        variant="h5"
                        color="textPrimary"
                      >
                        {props.data.cards[0].title}
                      </Typography>
                    </Box>
                    <Box
                      textAlign="left"
                      mt={2}
                      sx={{
                        width: "400px",
                      }}
                    >
                      <Typography
                        fontFamily={theme.typography.fontFamily}
                        variant="h6"
                        color="textPrimary"
                      >
                        {props.data.cards[0].text}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </RevealFromLeftOnEnter>
            </>
          )}
          <Box
            sx={{
              flexBasis: "100%",
              height: "0",
            }}
          />
          <RevealFromDownOnEnter x={cardFadeLength} start="top 95%">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              textAlign="center"
              sx={{ display: smDown ? "none" : "block" }}
            >
              <Typography
                fontFamily={theme.typography.fontFamily}
                variant="body1"
                color="textPrimary"
                fontWeight="600"
                sx={{
                  opacity: "0.25",
                  color: "text.primary",
                }}
              >
                {props.language === "norwegian" ? "Bla ned" : "Scroll"}
              </Typography>
              {/* <SouthIcon
                sx={{
                  fontSize: "24px",
                  opacity: "0.25",
                  marginTop: "6px",
                  color: "text.primary",
                }}
              /> */}
              <Typography
                fontFamily={theme.typography.fontFamily}
                variant="body1"
                color="textPrimary"
                fontWeight="600"
                sx={{
                  opacity: "0.25",
                  color: "text.primary",
                }}
              >
                ↓
              </Typography>
            </Box>
          </RevealFromDownOnEnter>
        </Box>
      </Box>
      {/* Second introduction */}
      <Box
        sx={{
          minHeight: "calc(100vh)",
          backgroundColor: "primary.main",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "50px",
        }}
      >
        {smDown ? (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "70px",
              rowGap: "20px",
              padding: xs ? "0px 0px" : "0px 50px",
            }}
          >
            <RevealFromDownOnEnter x={cardFadeLength}>
              <img
                style={{
                  width: "300px",
                  backgroundColor: theme.palette.secondary.main,
                }}
                alt={props.data.cards[1].img.alt}
                src={props.data.cards[1].img.path}
              />
            </RevealFromDownOnEnter>
            <RevealFromDownOnEnter x={cardFadeLength}>
              <Card sx={{ background: "transparent", boxShadow: "none" }}>
                <CardContent>
                  <Box
                    textAlign="left"
                    sx={{
                      width: "340px",
                    }}
                  >
                    <Typography
                      fontFamily={theme.typography.fontFamily}
                      variant="h5"
                      color="textPrimary"
                    >
                      {props.data.cards[1].title}
                    </Typography>
                  </Box>
                  <Box
                    textAlign="left"
                    mt={2}
                    sx={{
                      width: "340px",
                    }}
                  >
                    <Typography
                      fontFamily={theme.typography.fontFamily}
                      variant="h6"
                      color="textPrimary"
                    >
                      {props.data.cards[1].text}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </RevealFromDownOnEnter>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "70px",
              rowGap: "20px",
              padding: xs ? "0px 0px" : "0px 50px",
            }}
          >
            <RevealFromRightOnEnter x={cardFadeLength}>
              <Card sx={{ background: "transparent", boxShadow: "none" }}>
                <CardContent>
                  <Box
                    textAlign="left"
                    sx={{
                      width: "400px",
                    }}
                  >
                    <Typography
                      fontFamily={theme.typography.fontFamily}
                      variant="h5"
                      color="textPrimary"
                    >
                      {props.data.cards[1].title}
                    </Typography>
                  </Box>
                  <Box
                    textAlign="left"
                    mt={2}
                    sx={{
                      width: "400px",
                    }}
                  >
                    <Typography
                      fontFamily={theme.typography.fontFamily}
                      variant="h6"
                      color="textPrimary"
                    >
                      {props.data.cards[1].text}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </RevealFromRightOnEnter>
            <RevealFromLeftOnEnter x={cardFadeLength}>
              <img
                style={{ width: "350px" }}
                alt={props.data.cards[1].img.alt}
                src={props.data.cards[1].img.path}
              />
            </RevealFromLeftOnEnter>
          </Box>
        )}
      </Box>
      {/* Third introduction */}
      <Box
        sx={{
          minHeight: "calc(100vh)",
          backgroundColor: "primary.main",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "70px",
            rowGap: "20px",
            padding: xs ? "0px 0px" : "0px 50px",
          }}
        >
          {smDown ? (
            <>
              <RevealFromDownOnEnter x={cardFadeLength}>
                <img
                  style={{
                    width: "300px",
                    backgroundColor: theme.palette.secondary.main,
                  }}
                  alt={props.data.cards[2].img.alt}
                  src={props.data.cards[2].img.path}
                />
              </RevealFromDownOnEnter>
              <RevealFromDownOnEnter x={cardFadeLength}>
                <Card sx={{ background: "transparent", boxShadow: "none" }}>
                  <CardContent>
                    <Box
                      textAlign="left"
                      sx={{
                        width: "340px",
                      }}
                    >
                      <Typography
                        fontFamily={theme.typography.fontFamily}
                        variant="h5"
                        color="textPrimary"
                      >
                        {props.data.cards[2].title}
                      </Typography>
                    </Box>
                    <Box
                      textAlign="left"
                      mt={2}
                      sx={{
                        width: "340px",
                      }}
                    >
                      <Typography
                        fontFamily={theme.typography.fontFamily}
                        variant="h6"
                        color="textPrimary"
                      >
                        {props.data.cards[2].text}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </RevealFromDownOnEnter>
            </>
          ) : (
            <>
              <RevealFromRightOnEnter x={cardFadeLength}>
                <img
                  style={{ width: "350px" }}
                  alt={props.data.cards[2].img.alt}
                  src={props.data.cards[2].img.path}
                />
              </RevealFromRightOnEnter>
              <RevealFromLeftOnEnter x={cardFadeLength}>
                <Card sx={{ background: "transparent", boxShadow: "none" }}>
                  <CardContent>
                    <Box
                      textAlign="left"
                      sx={{
                        width: "400px",
                      }}
                    >
                      <Typography
                        fontFamily={theme.typography.fontFamily}
                        variant="h5"
                        color="textPrimary"
                      >
                        {props.data.cards[2].title}
                      </Typography>
                    </Box>
                    <Box
                      textAlign="left"
                      mt={2}
                      sx={{
                        width: "400px",
                      }}
                    >
                      <Typography
                        fontFamily={theme.typography.fontFamily}
                        variant="h6"
                        color="textPrimary"
                      >
                        {props.data.cards[2].text}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </RevealFromLeftOnEnter>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default LandingView;
