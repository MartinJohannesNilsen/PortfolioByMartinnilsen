import { FC, useEffect, useRef } from "react";
import {
  Grid,
  Box,
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  Hidden,
  ButtonBase,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { ThemeEnum } from "../../themes/base";
import { useTheme } from "../../ThemeProvider";
import { Icon } from "@iconify/react";
import { gsap, Power3 } from "gsap";
import flagUnitedKingdom from "@iconify-icons/openmoji/flag-united-kingdom";
import flagNorway from "@iconify-icons/openmoji/flag-norway";
import Switch from "../Switch/Switch";
import $ from "jquery";
import FABMenu from "./FABMenu";

export type NavbarProps = {
  data: {
    title: string;
    navText: string[];
    navLanguages: string[];
  };
  language: string;
  setLanguage: (language: string) => void;
};

export const handleScroll = (name: string) => {
  $("html, body").animate(
    {
      scrollTop: $("#" + name)!.offset()!.top,
    },
    1500
  );
};

export const Navbar: FC<NavbarProps> = (props) => {
  const classes = useStyles();
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

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.root}>
        <Grid
          container
          alignItems="flex-end"
          justify={lgUp ? "center" : "flex-start"}
          ref={(el) => (ref = el)}
        >
          <Grid item>
            <Typography
              variant="subtitle1"
              className={classes.mainLink}
              style={!lgUp ? { marginLeft: 40 } : {}}
            >
              {props.data.title}
            </Typography>
          </Grid>
          <Hidden mdDown>
            <Grid container item md={8} xl={6} justify="flex-end">
              {props.data.navText.map((title: string) => (
                <Box mx={2}>
                  <Button
                    classes={{ text: classes.buttonText }}
                    onClick={() => handleScroll(title)}
                  >
                    <Typography
                      variant="subtitle2"
                      color="textPrimary"
                      className={classes.buttonLabel}
                    >
                      {title}
                    </Typography>
                  </Button>
                </Box>
              ))}
              <Box mx={2}>
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
                    className={classes.icon}
                  />
                </ButtonBase>
              </Box>
              <Box ml={0.5} mt={0.8}>
                <Switch
                  checked={theme.palette.type === "light"}
                  onChange={handleThemeChange}
                />
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
      <Hidden lgUp>
        <FABMenu {...props} />
      </Hidden>
    </AppBar>
  );
};
export default Navbar;

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 2,
    height: "100px",
    backgroundColor: theme.palette.primary.main,
  },
  mainLink: {
    color: theme.palette.error.main,
    fontWeight: 800,
  },
  icon: {
    height: "50px",
    width: "50px",
  },
  buttonText: {
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  buttonLabel: {
    "&:hover": {
      color: theme.palette.error.main,
    },
  },
}));
