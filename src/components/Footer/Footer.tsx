import React, { FC } from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  Icon,
  IconButton,
  Link,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
  useMediaQuery,
  Zoom,
} from "@mui/material";
import { useTheme } from "../../ThemeProvider";
import { FooterProps } from "../../types";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { ReactComponent as CVIcon } from "../../assets/svg/cvIconMedium.svg";
import DOMPurify from "dompurify";
import colorLuminance from "../../utils/colorLuminance";

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 400,
  },
});

const Footer: FC<FooterProps> = (props) => {
  const [tooltipStates, setTooltipStates] = React.useState(
    Array(props.data.links.length).fill(false)
  );
  const { theme } = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const iconButtons: boolean = true;
  const iconButtonSize: number = mdUp ? 40 : 35;

  const handleTooltipState = (newState: boolean, index: number) => {
    let tooltips = [...tooltipStates];
    tooltips[index] = newState;
    setTooltipStates(tooltips);
  };

  const TypographyBullet: FC = () => {
    return (
      <Typography
        fontFamily={theme.typography.fontFamily}
        variant="button"
        color="textPrimary"
        sx={{
          margin: "0 5px",
          cursor: "default",
          userSelect: "none",
        }}
      >
        •
      </Typography>
    );
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        sx={{
          backgroundColor: "primary.dark",
          position: "relative",
        }}
        id={props.id}
      >
        <Box py={5} px={3} textAlign="center">
          <Box py={2} px={1}>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="body1"
              display="inline-block"
              color="textPrimary"
              sx={{ fontWeight: 600, fontSize: lgUp ? "1.1rem" : "0.9rem" }}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  props.language === "norwegian"
                    ? "Ikke nøl med å ta kontakt dersom du ønsker noe mer informasjon, eller ønsker å&nbsp;"
                    : "Do not hesitate in reaching out to me if you need any further information, or just want to&nbsp;"
                ),
              }}
            />
            <Link
              fontFamily={theme.typography.fontFamily}
              display="inline-block"
              variant="body1"
              color="textPrimary"
              href="https://martinjohannesnilsen.no/links"
              sx={{
                fontWeight: 600,
                fontSize: lgUp ? "1.1rem" : "0.9rem",
                textDecoration: "none",
                borderBottom:
                  "2px solid " +
                  colorLuminance(theme.palette.secondary.main, 0.33),
                "&:hover": {
                  borderBottom: "2px solid " + theme.palette.secondary.main,
                },
              }}
            >
              {props.language === "norwegian"
                ? "komme i kontakt"
                : "get in touch"}
            </Link>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="body1"
              display="inline-block"
              sx={{ fontWeight: 600, fontSize: lgUp ? "1.1rem" : "0.9rem" }}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  props.language === "norwegian" ? "&nbsp;med meg." : "."
                ),
              }}
            />
          </Box>
          <Box py={3}>
            {props.data.links.map((link, key) => {
              let elements = [];
              if (link.hasOwnProperty("copyText")) {
                elements.push(
                  <ClickAwayListener
                    onClickAway={() => handleTooltipState(false, key)}
                  >
                    <CustomWidthTooltip
                      arrow
                      placement="top"
                      // TransitionComponent={Fade}
                      TransitionComponent={Zoom}
                      PopperProps={{
                        disablePortal: true,
                      }}
                      TransitionProps={{ timeout: 200 }}
                      onClose={() => handleTooltipState(false, key)}
                      open={tooltipStates[key]}
                      disableFocusListener
                      // disableHoverListener
                      disableTouchListener
                      title={
                        <Typography
                          fontFamily={theme.typography.fontFamily}
                          variant="overline"
                        >
                          {link.copyText}
                        </Typography>
                      }
                    >
                      {!iconButtons ? (
                        <Button
                          sx={{
                            "& MuiButton-text": {
                              textTransform: "none",
                              "&:hover": {
                                backgroundColor: "transparent",
                              },
                            },
                            "&:hover": {
                              color: "secondary.main",
                            },
                            color: "text.primary",
                          }}
                          onClick={() => {
                            handleTooltipState(true, key);
                            navigator.clipboard.writeText(link.value);
                          }}
                        >
                          <Typography
                            fontFamily={theme.typography.fontFamily}
                            variant="button"
                          >
                            {link.text}
                          </Typography>
                        </Button>
                      ) : (
                        <IconButton
                          sx={{
                            "&:hover": {
                              color: "secondary.main",
                              backgroundColor: "transparent",
                            },
                            color: "text.primary",
                          }}
                          onClick={() => {
                            handleTooltipState(true, key);
                            navigator.clipboard.writeText(link.value);
                          }}
                        >
                          {link.text.toLowerCase().includes("tele") ? (
                            <PhoneIcon
                              sx={{
                                fontSize: iconButtonSize + 3.5,
                              }}
                            />
                          ) : (
                            <AlternateEmailIcon
                              sx={{ fontSize: iconButtonSize }}
                            />
                          )}
                        </IconButton>
                      )}
                    </CustomWidthTooltip>
                  </ClickAwayListener>
                );
              } else {
                iconButtons && link.text.toLowerCase() === "github"
                  ? elements.push(
                      <IconButton
                        onClick={() => window.open(link.value, "_blank")}
                        sx={{
                          "&:hover": {
                            color: "secondary.main",
                            backgroundColor: "transparent",
                          },
                          color: "text.primary",
                        }}
                      >
                        <GitHubIcon
                          sx={{
                            fontSize: mdUp
                              ? iconButtonSize - 2
                              : iconButtonSize - 3,
                            marginBottom: mdUp ? 0 : 0.2,
                          }}
                        />
                      </IconButton>
                    )
                  : iconButtons && link.text.toLowerCase() === "linkedin"
                  ? elements.push(
                      <IconButton
                        onClick={() => window.open(link.value, "_blank")}
                        sx={{
                          "&:hover": {
                            color: "secondary.main",
                            backgroundColor: "transparent",
                          },
                          color: "text.primary",
                        }}
                      >
                        <LinkedInIcon sx={{ fontSize: iconButtonSize + 3.5 }} />
                      </IconButton>
                    )
                  : iconButtons && link.text.toLowerCase() === "cv"
                  ? elements.push(
                      <IconButton
                        onClick={() => window.open(link.value, "_blank")}
                        sx={{
                          "&:hover": {
                            // filter: "invert(50%) sepia(73%) saturate(393%) hue-rotate(136deg) brightness(85%) contrast(93%)",
                            color: "secondary.main",
                            backgroundColor: "transparent",
                          },
                          color: "text.primary",
                        }}
                      >
                        <Icon
                          sx={{
                            fontSize: iconButtonSize,
                          }}
                        >
                          <CVIcon />
                        </Icon>
                      </IconButton>
                    )
                  : elements.push(
                      <Button
                        onClick={() => window.open(link.value, "_blank")}
                        sx={{
                          "& MuiButton-text": {
                            textTransform: "none",
                            "&:hover": {
                              backgroundColor: "transparent",
                            },
                          },
                          "&:hover": {
                            color: "secondary.main",
                          },
                          color: "text.primary",
                        }}
                      >
                        <Typography
                          fontFamily={theme.typography.fontFamily}
                          variant="button"
                        >
                          {link.text}
                        </Typography>
                      </Button>
                    );
              }
              if (key < props.data.links.length - 1) {
                elements.push(<TypographyBullet />);
              }
              return elements;
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
