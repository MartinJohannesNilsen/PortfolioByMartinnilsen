import flagNorway from "@iconify-icons/openmoji/flag-norway";
import flagUnitedKingdom from "@iconify-icons/openmoji/flag-united-kingdom";
import { Icon } from "@iconify/react";
import { Close, GradientSharp, Square } from "@mui/icons-material";
import {
  ButtonBase,
  ClickAwayListener,
  IconButton,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import { useState } from "react";
import { BlockPicker } from "react-color";
import { isMobile } from "react-device-detect";
import { useTheme } from "../../ThemeProvider";
import { defaultFontFamily } from "../../themes/themeDefaults";
import { ThemeEnum } from "../../themes/themeMap";
import { SettingsModalProps } from "../../types";
import Switch from "../Switch/Switch";

const defaultFonts = [
  { title: "System font", font: defaultFontFamily },
  { title: "Gotham Pro", font: "Gotham Pro" },
  { title: "Source Sans Pro", font: "Source Sans Pro" },
  { title: "Consolas", font: "Consolas, monospace" },
  { title: "Fantasy", font: "Luminari, sans-serif" },
];

const defaultColors = [
  // { title: "Teal", color: "#29939b" },
  { title: "Teal", color: "#35A29F" },
  { title: "Yellow", color: "#fdd835" },
  { title: "Pink", color: "#df487f" },
  { title: "Red", color: "#ff1744" },
];

const TransparentTooltip = withStyles({
  tooltip: {
    backgroundColor: "transparent",
  },
})(Tooltip);

export const SettingsModal = (props: SettingsModalProps) => {
  const {
    theme,
    setTheme,
    setDefaultTheme,
    accentColor,
    setAccentColor,
    fontFamily,
    setFontFamily,
  } = useTheme();
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const blockPickerColors = [
    "#D9E3F0",
    "#F47373",
    "#697689",
    "#37D67A",
    "#2CCCE4",
    "#555555",
    "#E9B384",
    "#ff8a65",
    "#ba68c8",
    "#7ca18d",
  ];

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: lgUp ? 400 : 370,
    bgcolor: "background.paper",
    borderRadius: 2,
    outline: 0,
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    rowGap: "10px",
    justifyContent: "flex-start",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box>
      <Modal
        open={props.open}
        onClose={() => {
          props.handleModalClose;
          setColorPickerOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        children={
          <Box sx={style}>
            <IconButton
              style={{ position: "absolute", top: "5px", right: "5px" }}
              onClick={() => {
                props.handleModalClose();
                setColorPickerOpen(false);
              }}
            >
              <Close />
            </IconButton>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h5"
              fontWeight="800"
              mb={1}
            >
              {props.language === "norwegian" ? "Innstillinger" : "Settings"}
            </Typography>
            <Box display="flex" gap="10px">
              <Typography
                mt={0.1}
                fontFamily={theme.typography.fontFamily}
                variant="body1"
                fontSize={16}
                fontWeight="800"
                color={theme.palette.text.primary}
              >
                {props.language === "norwegian" ? "Lys: " : "Lights: "}
              </Typography>
              <Box flexGrow="1" />
              <Box mt={-0.6} mr={-1.8}>
                <Switch
                  checked={theme.palette.mode === "light"}
                  onChange={props.handleThemeChange}
                />
              </Box>
              <Box mt={-0.2}>
                <Tooltip
                  enterDelay={2000}
                  title="Use system settings"
                  children={
                    <IconButton
                      disabled={localStorage.getItem("theme") === null}
                      aria-label="delete"
                      size="small"
                      onClick={() => {
                        setDefaultTheme();
                      }}
                    >
                      <Close fontSize="inherit" />
                    </IconButton>
                  }
                />
              </Box>
            </Box>
            <Box display="flex">
              <Typography
                fontFamily={theme.typography.fontFamily}
                variant="body1"
                fontSize={16}
                fontWeight="800"
                color={theme.palette.text.primary}
              >
                {props.language === "norwegian" ? "Språk: " : "Language: "}
              </Typography>
              <Box flexGrow="1" />
              <Box mt={-1} mb={-0.5} mr={0}>
                <ButtonBase
                  onClick={() => {
                    props.language === "norwegian"
                      ? props.setLanguage("english")
                      : props.setLanguage("norwegian");
                  }}
                >
                  <Icon
                    icon={
                      props.language === "norwegian"
                        ? flagNorway
                        : flagUnitedKingdom
                    }
                    style={{
                      height: "45px",
                      width: "45px",
                    }}
                  />
                </ButtonBase>
              </Box>
            </Box>
            <Box display="flex" mt={-0.4} alignItems="baseline">
              <Typography
                fontFamily={theme.typography.fontFamily}
                variant="body1"
                fontSize={16}
                fontWeight="800"
                color={theme.palette.text.primary}
              >
                {props.language === "norwegian"
                  ? "Tekstfont: "
                  : "Font Family: "}
              </Typography>
              <Box flexGrow="1" />
              {defaultFonts.map(
                (element: { title: string; font: string }, index: number) => (
                  <Box mt={-0.6} display="flex" key={index}>
                    <Tooltip
                      enterDelay={2000}
                      title={element.title}
                      children={
                        <IconButton
                          onClick={() => {
                            setFontFamily(element.font);
                            setTheme(
                              theme.palette.mode === "dark"
                                ? ThemeEnum.Dark
                                : ThemeEnum.Light
                            );
                          }}
                          disabled={fontFamily === element.font}
                          sx={{
                            width: "35px",
                            height: "35px",
                          }}
                        >
                          <Typography
                            // mt={index === 1 ? "4.2px" : index === 4 ? "2px" : 0}
                            color={theme.palette.text.primary}
                            sx={{
                              fontFamily: element.font,
                              fontWeight: 600,
                              borderBottom:
                                fontFamily === element.font
                                  ? "2px solid " + theme.palette.text.primary
                                  : "",
                            }}
                          >
                            Aa
                          </Typography>
                        </IconButton>
                      }
                    />
                  </Box>
                )
              )}
            </Box>
            <Box display="flex" mt={0.3}>
              <Typography
                fontFamily={theme.typography.fontFamily}
                variant="body1"
                fontSize={16}
                fontWeight="800"
                color={theme.palette.text.primary}
              >
                {props.language === "norwegian"
                  ? "Aksentfarge: "
                  : "Accent color: "}
              </Typography>
              <Box flexGrow="1" />
              {defaultColors.map(
                (element: { title: string; color: string }, index: number) => (
                  <Box mt={-0.6} key={index}>
                    <Tooltip
                      enterDelay={2000}
                      title={element.title}
                      children={
                        <IconButton
                          onClick={() => {
                            setAccentColor(element.color);
                            setTheme(
                              theme.palette.mode === "dark"
                                ? ThemeEnum.Dark
                                : ThemeEnum.Light
                            );
                          }}
                          disabled={accentColor === element.color}
                          sx={{
                            width: "35px",
                            height: "35px",
                          }}
                        >
                          <Square
                            fontFamily={theme.typography.fontFamily}
                            sx={{
                              color: element.color,
                              fontWeight: 600,
                              borderBottom:
                                accentColor === element.color
                                  ? "2px solid " + theme.palette.secondary.main
                                  : "",
                            }}
                          />
                        </IconButton>
                      }
                    />
                  </Box>
                )
              )}
              <Box mt={-0.6}>
                <ClickAwayListener
                  onClickAway={() => setColorPickerOpen(false)}
                  children={
                    <Box>
                      <TransparentTooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={() => setColorPickerOpen(false)}
                        open={colorPickerOpen}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        placement={isMobile ? "top" : "bottom"}
                        title={
                          <BlockPicker
                            triangle={isMobile ? "hide" : "top"}
                            colors={blockPickerColors}
                            color={accentColor}
                            onChange={(color, event) => {
                              setAccentColor(color.hex);
                              setTheme(
                                theme.palette.mode === "dark"
                                  ? ThemeEnum.Dark
                                  : ThemeEnum.Light,
                                true
                              );
                            }}
                          />
                        }
                      >
                        <IconButton
                          onClick={() => {
                            setColorPickerOpen(!colorPickerOpen);
                          }}
                          sx={{
                            width: "35px",
                            height: "35px",
                          }}
                        >
                          <GradientSharp
                            fontFamily={theme.typography.fontFamily}
                            sx={{
                              color:
                                defaultColors.filter(function (e) {
                                  return e.color === accentColor;
                                }).length === 0
                                  ? accentColor
                                  : theme.palette.text.primary,
                              fontWeight: 600,
                              borderBottom:
                                defaultColors.filter(function (e) {
                                  return e.color === accentColor;
                                }).length === 0
                                  ? "2px solid " + theme.palette.secondary.main
                                  : "",
                            }}
                          />
                        </IconButton>
                      </TransparentTooltip>
                    </Box>
                  }
                />
              </Box>
            </Box>
          </Box>
        }
      />
    </Box>
  );
};
export default SettingsModal;
