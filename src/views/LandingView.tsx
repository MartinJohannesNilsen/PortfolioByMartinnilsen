import { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "../ThemeProvider";
import SouthIcon from "@mui/icons-material/South";
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
            rowGap: smDown ? "20px" : "70px",
            padding: xs ? "0px 0px" : "0px 50px",
          }}
        >
          {smDown ? (
            <>
              <RevealFromDownOnEnter x={cardFadeLength}>
                <img
                  style={{ width: "350px" }}
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
                        width: smDown ? "360px" : "400px",
                      }}
                    >
                      <Typography variant="h5" color="textPrimary">
                        {props.data.cards[0].title}
                      </Typography>
                    </Box>
                    <Box
                      textAlign="left"
                      mt={2}
                      sx={{
                        width: smDown ? "360px" : "400px",
                      }}
                    >
                      <Typography variant="h6" color="textPrimary">
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
                  style={{ width: "350px" }}
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
                        width: smDown ? "360px" : "400px",
                      }}
                    >
                      <Typography variant="h5" color="textPrimary">
                        {props.data.cards[0].title}
                      </Typography>
                    </Box>
                    <Box
                      textAlign="left"
                      mt={2}
                      sx={{
                        width: smDown ? "360px" : "400px",
                      }}
                    >
                      <Typography variant="h6" color="textPrimary">
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
          ></Box>
          <RevealFromDownOnEnter x={cardFadeLength} start="top 95%">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              textAlign="center"
              sx={{ display: smDown ? "none" : "block" }}
            >
              <Typography
                variant="body1"
                color="textPrimary"
                fontWeight="600"
                sx={{
                  opacity: "0.25",
                  color: theme.palette.text.primary,
                }}
              >
                Scroll
              </Typography>
              <SouthIcon
                sx={{
                  fontSize: "24px",
                  opacity: "0.25",
                  marginTop: "6px",
                  color: theme.palette.text.primary,
                }}
              />
            </Box>
          </RevealFromDownOnEnter>
        </Box>
      </Box>
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
              rowGap: smDown ? "20px" : "70px",
              padding: xs ? "0px 0px" : "0px 50px",
            }}
          >
            <RevealFromDownOnEnter x={cardFadeLength}>
              <img
                style={{ width: "350px" }}
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
                      width: smDown ? "360px" : "400px",
                    }}
                  >
                    <Typography variant="h5" color="textPrimary">
                      {props.data.cards[1].title}
                    </Typography>
                  </Box>
                  <Box
                    textAlign="left"
                    mt={2}
                    sx={{
                      width: smDown ? "360px" : "400px",
                    }}
                  >
                    <Typography variant="h6" color="textPrimary">
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
              rowGap: smDown ? "20px" : "70px",
              padding: xs ? "0px 0px" : "0px 50px",
            }}
          >
            <RevealFromRightOnEnter x={cardFadeLength}>
              <Card sx={{ background: "transparent", boxShadow: "none" }}>
                <CardContent>
                  <Box
                    textAlign="left"
                    sx={{
                      width: smDown ? "360px" : "400px",
                    }}
                  >
                    <Typography variant="h5" color="textPrimary">
                      {props.data.cards[1].title}
                    </Typography>
                  </Box>
                  <Box
                    textAlign="left"
                    mt={2}
                    sx={{
                      width: smDown ? "360px" : "400px",
                    }}
                  >
                    <Typography variant="h6" color="textPrimary">
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
            rowGap: smDown ? "20px" : "70px",
            padding: xs ? "0px 0px" : "0px 50px",
          }}
        >
          {smDown ? (
            <>
              <RevealFromDownOnEnter x={cardFadeLength}>
                <img
                  style={{ width: "350px" }}
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
                        width: smDown ? "360px" : "400px",
                      }}
                    >
                      <Typography variant="h5" color="textPrimary">
                        {props.data.cards[2].title}
                      </Typography>
                    </Box>
                    <Box
                      textAlign="left"
                      mt={2}
                      sx={{
                        width: smDown ? "360px" : "400px",
                      }}
                    >
                      <Typography variant="h6" color="textPrimary">
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
                        width: smDown ? "360px" : "400px",
                      }}
                    >
                      <Typography variant="h5" color="textPrimary">
                        {props.data.cards[2].title}
                      </Typography>
                    </Box>
                    <Box
                      textAlign="left"
                      mt={2}
                      sx={{
                        width: smDown ? "360px" : "400px",
                      }}
                    >
                      <Typography variant="h6" color="textPrimary">
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
