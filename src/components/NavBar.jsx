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
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#089e80",
  },
}));

export default function HideAppBar(props) {
  const classes = useStyles();

  return (
    <div className="classes.root">
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar}>
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

            <Button variant="outlined" color="secondary">
              Resume
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
}
