import { FC, useEffect, useRef, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Hidden,
  ButtonBase,
  Button,
  useMediaQuery,
  Fade,
  Tooltip,
} from "@mui/material";
import { ThemeEnum } from "../../themes/themeMap";
import { useTheme } from "../../ThemeProvider";
import { gsap, Power3 } from "gsap";
import TuneIcon from "@mui/icons-material/Tune";
import FABMenu from "./FABMenu";
import $ from "jquery";
import { useWindowScroll } from "react-use";
import { NavbarProps } from "../../types";
import SettingsModal from "../SettingsModal/SettingsModal";

export const handleScroll = (name: string) => {
  $("html, body").animate(
    {
      scrollTop: $("#" + name)!.offset()!.top,
    },
    100
  );
};

export const Navbar: FC<NavbarProps> = (props) => {
  const { theme, setTheme } = useTheme();
  const windowScroll = useWindowScroll();
  const [openSettingsModal, setOpenSettingsModal] = useState(false);
  const handleSettingsModalOpen = () => setOpenSettingsModal(true);
  const handleSettingsModalClose = () => setOpenSettingsModal(false);

  let ref: any = useRef(null);
  useEffect(() => {
    gsap.from(ref, {
      duration: 0.85,
      opacity: 0,
      y: -100,
      ease: Power3.easeIn,
    });
  }, []);

  const handleThemeChange = (event: any) => {
    setTheme(
      event.target.checked === true ? ThemeEnum.Light : ThemeEnum.Dark,
      true
    );
  };

  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const smDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      id="Navbar"
      elevation={0}
      position="static"
      sx={{
        zIndex: 2,
        height: "80px",
        backgroundColor: "primary.main",
      }}
    >
      <Toolbar
        sx={{
          zIndex: 2,
          height: "80px",
          backgroundColor: "primary.main",
        }}
      >
        <Grid
          container
          alignItems="flex-end"
          justifyContent={lgUp ? "center" : "flex-start"}
          ref={(el: any) => (ref = el)}
        >
          <Grid item md={3}>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h2"
              sx={{
                color: "secondary.main",
              }}
              style={
                smDown
                  ? { marginLeft: 40 }
                  : {
                      marginTop: -41.5,
                    }
              }
            >
              {props.data.title}
            </Typography>
          </Grid>
          <Hidden mdDown>
            <Grid container item md={9} lg={7} justifyContent="flex-end">
              {props.data.sections
                .slice(1)
                .map((title: string, index: number) => (
                  <Box mx={2} key={index}>
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
                      onClick={() => handleScroll(title.replace(" ", "_"))}
                    >
                      <Typography
                        fontFamily={theme.typography.fontFamily}
                        variant="h4"
                      >
                        {title}
                      </Typography>
                    </Button>
                  </Box>
                ))}
              <Box mx={2} mt={0.4}>
                <Tooltip
                  enterDelay={2000}
                  title={
                    props.language === "norwegian"
                      ? "Åpne innstillinger"
                      : "Open settings"
                  }
                  children={
                    <ButtonBase
                      onClick={() => {
                        handleSettingsModalOpen();
                      }}
                    >
                      <TuneIcon
                        sx={{
                          color: theme.palette.text.primary,
                          height: "30px",
                          width: "30px",
                          "&:hover": {
                            color: theme.palette.secondary.main,
                          },
                        }}
                      />
                    </ButtonBase>
                  }
                />
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
      <Hidden mdDown>
        {windowScroll.y > window.innerHeight - 50 ? (
          <Fade
            children={
              <FABMenu
                handleSettingsModalOpen={handleSettingsModalOpen}
                {...props}
              />
            }
          />
        ) : (
          <></>
        )}
      </Hidden>
      <Hidden mdUp>
        <FABMenu handleSettingsModalOpen={handleSettingsModalOpen} {...props} />
      </Hidden>
      <SettingsModal
        language={props.language}
        setLanguage={props.setLanguage}
        open={openSettingsModal}
        handleModalOpen={handleSettingsModalOpen}
        handleModalClose={handleSettingsModalClose}
        handleThemeChange={handleThemeChange}
        triggerRefreshScrollTriggers={props.triggerRefreshScrollTriggers}
      />
    </AppBar>
  );
};
export default Navbar;
