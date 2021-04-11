import React, { FC } from "react";
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
} from "@material-ui/core";
import { ThemeEnum } from "../../themes/base";
import { useTheme } from "../../ThemeProvider";
import { Icon } from "@iconify/react";
import flagUnitedKingdom from "@iconify-icons/openmoji/flag-united-kingdom";
import flagNorway from "@iconify-icons/openmoji/flag-norway";
import Switch from "../Switch/Switch";

type NavbarProps = {
  data: {
    title: string;
    navText: string[];
    navLanguages: string[];
  };
  language: string;
  setLanguage: (language: string) => void;
};

const handleScroll = (name: string) => {
  document!.getElementById(name)!.scrollIntoView({ behavior: "smooth" });
};

export const Navbar: FC<NavbarProps> = (props) => {
  const classes = useStyles();
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (event: any) => {
    event.target.checked === true
      ? setTheme(ThemeEnum.Light)
      : setTheme(ThemeEnum.Dark);
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.root}>
        <Grid container alignItems="flex-end" justify="center">
          <Grid item>
            <Box className={classes.mainLink}>
              <Typography variant="subtitle1" color="textPrimary">
                {props.data.title}
              </Typography>
            </Box>
          </Grid>
          <Hidden mdDown>
            <Grid container item md={8} xl={6} justify="flex-end">
              <Box mx={2}>
                <Button
                  classes={{ text: classes.buttonText }}
                  onClick={() => handleScroll(props.data.navText[0])}
                >
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    className={classes.buttonLabel}
                  >
                    {props.data.navText[0]}
                  </Typography>
                </Button>
              </Box>
              <Box mx={2}>
                <Button
                  classes={{ text: classes.buttonText }}
                  onClick={() => handleScroll(props.data.navText[1])}
                >
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    className={classes.buttonLabel}
                  >
                    {props.data.navText[1]}
                  </Typography>
                </Button>
              </Box>
              <Box mx={2}>
                <Button
                  classes={{ text: classes.buttonText }}
                  onClick={() => handleScroll(props.data.navText[2])}
                >
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    className={classes.buttonLabel}
                  >
                    {props.data.navText[2]}
                  </Typography>
                </Button>
              </Box>
              <Box mx={2}>
                <Button
                  classes={{ text: classes.buttonText }}
                  onClick={() => handleScroll(props.data.navText[3])}
                >
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    className={classes.buttonLabel}
                  >
                    {props.data.navText[3]}
                  </Typography>
                </Button>
              </Box>
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
    </AppBar>
  );
};
export default Navbar;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100px",
    backgroundColor: theme.palette.text.primary,
  },
  mainLink: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(3),
    paddingLeft: theme.spacing(0.8),
    paddingRight: theme.spacing(0.8),
    backgroundColor: theme.palette.text.secondary,
  },
  icon: {
    height: "50px",
    width: "50px",
  },
  buttonText: {
    textTransform: "none",
  },
  buttonLabel: {
    "&:hover": {
      color: theme.palette.error.main,
    },
  },
}));
