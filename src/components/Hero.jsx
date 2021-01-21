import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box, Button, ThemeProvider } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
  },
  hero: {
    flexGrow: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column ",
  },
  heroBody: {
    display: "flex",
    flexDirection: "column ",
    padding: "10%",
    margin: 10,
  },
  rocket: {
    height: "100vh",
    width: "100%",
  },
  h2: {
    color: "#fff",
  },

  h6: {
    color: "#627383",
  },
  button: {
    width: 150,
    padding: 10,
    marginTop: 20,
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <Container className={classes.hero}>
          <motion.div animate={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
            <Box className={classes.heroBody}>
              <Typography variant="subtitle1" color="primary">
                Hi, my name is
              </Typography>
              <Typography variant="h2" component="h2" className={classes.h2}>
                Fabian Acosta
              </Typography>
              <Typography variant="h6" component="h6" className={classes.h6}>
                Im a front end developer
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                href="mailto:acostahf4@gmail.com"
                className={classes.button}
              >
                {" "}
                Get In Touch
              </Button>
            </Box>
          </motion.div>
        </Container>
      </div>
    </React.Fragment>
  );
}
