import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  makeStyles,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Link,
} from "@material-ui/core";
import Toggle from "react-toggle";
import "react-toggle/style.css";

export const NavBar = () => {
  const classes = useStyles();
  const [norwegianChosen, setNorwegianChosen] = useState(false);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.root}>
        <Grid container alignItems="flex-end" justify="center" spacing={3}>
          <Box className={classes.mainLink}>
            <Typography variant="h2" color="textPrimary">
              PORTFOLIO
            </Typography>
          </Box>
          <Grid container item xs={5}>
            <Box mx={2}>
              <Typography variant="h4" color="textSecondary">
                About
              </Typography>
            </Box>
            <Box mx={2}>
              <Typography variant="h4" color="textSecondary">
                Projects
              </Typography>
            </Box>
            <Box mx={2}>
              <Typography variant="h4" color="textSecondary">
                Contact
              </Typography>
            </Box>
            <Box mx={2}>
              <Toggle
                defaultChecked={norwegianChosen}
                icons={{
                  checked: (
                    <Typography variant="subtitle2" color="textSecondary">
                      NO
                    </Typography>
                  ),
                  unchecked: (
                    <Typography variant="subtitle2" color="textSecondary">
                      EN
                    </Typography>
                  ),
                }}
                onChange={() => setNorwegianChosen(false)}
              />
            </Box>
          </Grid>
          {/* <IconButton edge="start" aria-label="menu" className={classes.menu}>
          <MenuIcon />
        </IconButton> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "140px",
    backgroundColor: theme.palette.background.paper,
  },
  menu: {
    color: "white",
  },
  mainLink: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    paddingLeft: theme.spacing(0.8),
    paddingRight: theme.spacing(0.8),
    backgroundColor: theme.palette.text.secondary,
  },
}));
