import { FC } from "react";
import {
  Grid,
  Box,
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  Hidden,
  ButtonBase,
} from "@material-ui/core";
import { ThemeEnum } from "../../themes/base";
import { useTheme } from "../../ThemeProvider";
import { Icon } from "@iconify/react";
import flagUnitedKingdom from "@iconify-icons/openmoji/flag-united-kingdom";
import flagNorway from "@iconify-icons/openmoji/flag-norway";
import Switch from "../Switch/Switch";

type NavBarProps = {
  data: {
    title: string;
    navText: string[];
    navLanguages: string[];
  };
  language: string;
  setLanguage: (language: string) => void;
};

export const Navbar: FC<NavBarProps> = (props) => {
  const classes = useStyles();
  const { theme, setTheme } = useTheme();

  const handleChange = (event: any) => {
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
          <Hidden smDown>
            <Grid container item md={8} xl={6} justify="flex-end">
              <Box mx={3} mt={0.8}>
                <Typography variant="subtitle2" color="textSecondary">
                  {props.data.navText[0]}
                </Typography>
              </Box>
              <Box mx={3} mt={0.8}>
                <Typography variant="subtitle2" color="textSecondary">
                  {props.data.navText[1]}
                </Typography>
              </Box>
              <Box mx={3} mt={0.8}>
                <Typography variant="subtitle2" color="textSecondary">
                  {props.data.navText[2]}
                </Typography>
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
                  onChange={handleChange}
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
}));
