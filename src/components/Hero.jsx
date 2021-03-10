import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box, Button } from "@material-ui/core";
import gsap, { TweenMax, Power3 } from "gsap";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
    },
  },
  hero: {
    flexGrow: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column ",
    visibility: "hidden",
  },
  heroBody: {
    display: "flex",
    flexDirection: "column ",
    // padding: "10%",
  },
  rocket: {
    height: "100vh",
    width: "100%",
  },
  h1: {
    color: "#fff",
  },

  h5: {
    color: "#627383",
    paddingLeft: 6,
  },
  subtitle: {
    paddingLeft: 6,
  },
  button: {
    width: 150,
    padding: 10,
    marginTop: 20,
    marginLeft: 6,
  },
}));

export default function Hero() {
  let heroContent = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({ delay: 0.2 });
    const herofirst = heroContent.children[0];
    const heroSecond = heroContent.children[1];
    const heroThird = heroContent.children[2];
    const heroFourth = heroContent.children[3];

    TweenMax.to(heroContent, 0, {
      css: { visibility: "visible" },
    });
    tl.staggerFrom(
      [herofirst, heroSecond, heroThird, heroFourth],
      1,
      { y: 44, ease: Power3.easeOut, opacity: 0, delay: 0.8 },
      0.15
    );
    // .from(heroSecond, 1, { y: 1100, ease: Power3.easeOut, opacity: 0 }, 1.4);
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.hero} id="container">
        <Box className={classes.heroBody} ref={(el) => (heroContent = el)}>
          <Typography
            variant="subtitle1"
            color="primary"
            className={classes.subtitle}
          >
            Hi, my name is
          </Typography>
          <Typography variant="h1" component="h1" className={classes.h1}>
            Fabian Acosta
          </Typography>
          <Typography variant="h5" component="h5" className={classes.h5}>
            I'm a Software Developer
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
      </Container>
    </div>
  );
}
