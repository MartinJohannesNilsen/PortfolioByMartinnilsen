import { FC, useEffect, useRef } from "react";
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
} from "@mui/material";
import { ThemeEnum } from "../../themes/base";
import { useTheme } from "../../ThemeProvider";
import { Icon } from "@iconify/react";
import { gsap, Power3 } from "gsap";
import flagUnitedKingdom from "@iconify-icons/openmoji/flag-united-kingdom";
import flagNorway from "@iconify-icons/openmoji/flag-norway";
import Switch from "../Switch/Switch";
import FABMenu from "./FABMenu";
import $ from "jquery";

export type NavbarProps = {
  data: {
    title: string;
    languages: string[];
    sections: string[];
  };
  language: string;
  setLanguage: (language: string) => void;
};

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

  let ref: any = useRef(null);
  useEffect(() => {
    gsap.from(ref, { duration: 0.8, opacity: 0, y: -100, ease: Power3.easeIn });
  }, []);

  const handleThemeChange = (event: any) => {
    event.target.checked === true
      ? setTheme(ThemeEnum.Light)
      : setTheme(ThemeEnum.Dark);
  };

  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const smDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
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
          ref={(el) => (ref = el)}
        >
          <Grid item md={3}>
            <Typography
              variant="h2"
              sx={{
                color: "error.main",
              }}
              style={smDown ? { marginLeft: 40 } : { marginTop: -41.5 }}
            >
              {props.data.title}
            </Typography>
          </Grid>
          <Hidden mdDown>
            <Grid container item md={9} lg={6} justifyContent="flex-end">
              {props.data.sections.map((title: string, index: number) => (
                <Box mx={2} key={index}>
                  <Button
                    sx={{
                      "& MuiButton-text": {
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      },
                    }}
                    onClick={() => handleScroll(title)}
                  >
                    <Typography
                      variant="h4"
                      color="textPrimary"
                      sx={{
                        "&:hover": {
                          color: "error.main",
                        },
                      }}
                    >
                      {title}
                    </Typography>
                  </Button>
                </Box>
              ))}
              <Box mx={2} mt={-0.45}>
                <ButtonBase
                  onClick={() => {
                    props.language === "english"
                      ? props.setLanguage("norwegian")
                      : props.setLanguage("english");
                  }}
                >
                  <Icon
                    icon={
                      props.language === "english"
                        ? flagUnitedKingdom
                        : flagNorway
                    }
                    style={{
                      height: "45px",
                      width: "45px",
                    }}
                  />
                </ButtonBase>
              </Box>
              <Box ml={0.5} mt={0}>
                <Switch
                  checked={theme.palette.mode === "light"}
                  onChange={handleThemeChange}
                />
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
      <Hidden mdUp>
        <FABMenu {...props} />
      </Hidden>
    </AppBar>
  );
};
export default Navbar;
