import React, { FC } from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  Icon,
  IconButton,
  Link,
  styled,
  SvgIcon,
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
import EmailIcon from "@mui/icons-material/Email";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { ReactComponent as CVIcon } from "../../assets/svg/cvIconMedium.svg";

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
          backgroundColor: "secondary.main",
          position: "relative",
        }}
        id={props.id}
      >
        <Box py={5} px={3} textAlign="center">
          <Box py={2} px={1} display="flex">
            <Typography
              variant="body1"
              color="textPrimary"
              sx={{ fontWeight: 600, fontSize: lgUp ? "1.1rem" : "0.9rem" }}
            >
              {props.language === "norwegian"
                ? "Ikke nøl med å ta kontakt dersom du ønsker noe mer informasjon, eller ønsker å ‎"
                : "Do not hesitate in reaching out to me if you need any further information, or just want to ‎"}
            </Typography>
            <Link
              variant="body1"
              color="textPrimary"
              href="https://martinjohannesnilsen.no/links"
              sx={{
                fontWeight: 600,
                fontSize: lgUp ? "1.1rem" : "0.9rem",
                textDecoration: "none",
                borderBottom: "2px solid #9ce0e5",
                "&:hover": {
                  borderBottom: "2px solid #29939b",
                },
              }}
            >
              {props.language === "norwegian"
                ? "komme i kontakt"
                : "get in touch"}
            </Link>
            <Typography
              variant="body1"
              color="textPrimary"
              sx={{ fontWeight: 600, fontSize: lgUp ? "1.1rem" : "0.9rem" }}
            >
              {props.language === "norwegian" ? "‎ med meg." : "."}
            </Typography>
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
                        <Typography variant="overline" color="inherit">
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
                              color: "error.main",
                            },
                            color: theme.palette.text.primary,
                          }}
                          onClick={() => {
                            handleTooltipState(true, key);
                            navigator.clipboard.writeText(link.value);
                          }}
                        >
                          <Typography variant="button">{link.text}</Typography>
                        </Button>
                      ) : (
                        <IconButton
                          sx={{
                            "&:hover": {
                              color: "error.main",
                              backgroundColor: "transparent",
                            },
                            color: theme.palette.text.primary,
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
                            color: "error.main",
                            backgroundColor: "transparent",
                          },
                          color: theme.palette.text.primary,
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
                            color: "error.main",
                            backgroundColor: "transparent",
                          },
                          color: theme.palette.text.primary,
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
                            color: "error.main",
                            backgroundColor: "transparent",
                          },
                          color: theme.palette.text.primary,
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
                            color: "error.main",
                          },
                          color: theme.palette.text.primary,
                        }}
                      >
                        <Typography variant="button">{link.text}</Typography>
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
