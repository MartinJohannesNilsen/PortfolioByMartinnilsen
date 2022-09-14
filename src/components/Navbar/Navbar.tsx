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
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.root}>
        <Grid
          container
          alignItems="flex-end"
          justifyContent={lgUp ? "center" : "flex-start"}
          ref={(el) => (ref = el)}
        >
          <Grid item md={3}>
            <Typography
              variant="h2"
              className={classes.mainLink}
              style={smDown ? { marginLeft: 40 } : { marginTop: -41.5 }}
            >
              {props.data.title}
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid container item md={9} lg={6} justifyContent="flex-end">
              {props.data.sections.map((title: string, index: number) => (
                <Box mx={2} key={index}>
                  <Button
                    classes={{ text: classes.buttonText }}
                    onClick={() => handleScroll(title)}
                  >
                    <Typography
                      variant="h4"
                      color="textPrimary"
                      className={classes.buttonLabel}
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
                    className={classes.icon}
                  />
                </ButtonBase>
              </Box>
              <Box ml={0.5} mt={0}>
                <Switch
                  checked={theme.palette.type === "light"}
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

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 2,
    height: "80px",
    backgroundColor: theme.palette.primary.main,
  },
  mainLink: {
    color: theme.palette.error.main,
  },
  icon: {
    height: "45px",
    width: "45px",
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
