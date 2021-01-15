import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: "#089e80",
    flexGrow: 1,
    width: "100%",
    padding: 0,
    height: "100vh",
    display: "flex",
  },
  heroBody: {
    padding: "10%",
    margin: 10,
    height: "50",
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.hero}>
        <Box
          className={classes.heroBody}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignContent="center"
          alignItems="start"
        >
          <Typography variant="h6" component="h6">
            Hi, my name is
          </Typography>
          <Typography variant="h2" component="h2">
            Fabian Acosta
          </Typography>
          <Typography variant="h3" component="h3">
            I build things for the web.
          </Typography>
          <Typography variant="body1" component="p">
            I'm a software engineer based in Boston, MA specializing in building
            (and occasionally designing) exceptional websites, applications, and
            everything in between.
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
