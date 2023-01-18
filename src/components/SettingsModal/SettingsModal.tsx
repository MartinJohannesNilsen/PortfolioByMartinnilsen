import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ButtonBase, IconButton, Link, Tooltip } from "@mui/material";
import { useTheme } from "../../ThemeProvider";
import Switch from "../Switch/Switch";
import { Icon } from "@iconify/react";
import CloseIcon from "@mui/icons-material/Close";
import flagUnitedKingdom from "@iconify-icons/openmoji/flag-united-kingdom";
import flagNorway from "@iconify-icons/openmoji/flag-norway";
import { SettingsModalProps } from "../../types";
import { ThemeEnum, defaultFontFamily } from "../../themes/base";
import SquareIcon from "@mui/icons-material/Square";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "background.paper",
  borderRadius: 5,
  outline: 0,
  display: "flex",
  textAlign: "left",
  flexDirection: "column",
  rowGap: "10px",
  justifyContent: "flex-start",
  boxShadow: 24,
  p: 4,
};

export const SettingsModal = (props: SettingsModalProps) => {
  const {
    theme,
    setTheme,
    accentColor,
    setAccentColor,
    fontFamily,
    setFontFamily,
  } = useTheme();

  return (
    <Box>
      <Modal
        open={props.open}
        onClose={props.handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            style={{ position: "absolute", top: "5px", right: "5px" }}
            onClick={() => props.handleModalClose()}
          >
            <CloseIcon />
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
              fontFamily={theme.typography.fontFamily}
              variant="h6"
              fontWeight="600"
            >
              {props.language === "norwegian"
                ? "Lys (På/Av): "
                : "Lights (On/Off): "}
            </Typography>
            <Box flexGrow="1" />
            <Box mt={-0.5} mr={-1}>
              <Switch
                checked={theme.palette.mode === "light"}
                onChange={props.handleThemeChange}
              />
            </Box>
          </Box>
          <Box display="flex">
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h6"
              fontWeight="600"
            >
              {props.language === "norwegian"
                ? "Språk (No/En): "
                : "Language (No/En): "}
            </Typography>
            <Box flexGrow="1" />
            <Box mt={-1} mr={0}>
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
              variant="h6"
              fontWeight="600"
            >
              {props.language === "norwegian" ? "Tekstfont: " : "Font Family: "}
            </Typography>
            <Box flexGrow="1" />
            {[
              { title: "System font", font: defaultFontFamily },
              { title: "Gotham Pro", font: "Gotham Pro" },
              { title: "Source Sans Pro", font: "Source Sans Pro" },
              { title: "Consolas", font: "Consolas, monospace" },
              { title: "Fantasy", font: "Luminari, sans-serif" },
            ].map((element: { title: string; font: string }, index: number) => (
              <Box mt={-0.6} display="flex" key={index}>
                <Tooltip enterDelay={2000} title={element.title}>
                  <IconButton
                    onClick={() => {
                      setFontFamily(element.font);
                      setTheme(
                        theme.palette.mode === "dark"
                          ? ThemeEnum.Dark
                          : ThemeEnum.Light
                      );
                      props.triggerRefreshScrollTriggers!();
                    }}
                    disabled={fontFamily === element.font}
                    sx={{
                      width: "35px",
                      height: "35px",
                    }}
                  >
                    <Typography
                      // mt={index === 1 ? "4.2px" : index === 4 ? "2px" : 0}
                      color="textPrimary"
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
                </Tooltip>
              </Box>
            ))}
          </Box>
          <Box display="flex" mt={0.3}>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h6"
              fontWeight="600"
            >
              {props.language === "norwegian"
                ? "Aksentfarge: "
                : "Accent color: "}
            </Typography>
            <Box flexGrow="1" />
            {[
              { title: "Teal", color: "#29939b" },
              { title: "Green", color: "#739574" },
              { title: "Yellow", color: "#fdd835" },
              { title: "Pink", color: "#df487f" },
              { title: "Red", color: "#ff1744" },
            ].map((element: { title: string; color: string }) => (
              <Box mt={-0.6}>
                <Tooltip enterDelay={2000} title={element.title}>
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
                    <SquareIcon
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
                </Tooltip>
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
export default SettingsModal;
