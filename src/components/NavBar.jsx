import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Button,
  IconButton,
  Slide,
  useScrollTrigger,
  CssBaseline,
  Typography,
  Toolbar,
  AppBar,
  Link,
} from "@material-ui/core";

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    background: "none",
  },
}));

export default function HideAppBar(props) {
  const classes = useStyles();

  return (
    <div className="classes.root">
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              FA
            </Typography>

            <Button
              variant="outlined"
              color="primary"
              href="https://docs.google.com/document/d/1x3-xS_AOkQDxrS6FpqazxB7sQjYb4mKCq8eG19xodjE/edit?usp=sharing"
            >
              Resume
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
}
