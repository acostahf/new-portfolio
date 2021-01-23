import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box, Button } from "@material-ui/core";
import { TweenMax, TimelineLite, Power3 } from "gsap";

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
    visibility: "hidden",
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
  let heroContent = useRef(null);
  let tl = new TimelineLite({ delay: 0.2 });

  useEffect(() => {
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
  }, [tl]);
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Container className={classes.hero} id="container">
          <Box className={classes.heroBody} ref={(el) => (heroContent = el)}>
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
        </Container>
      </div>
    </React.Fragment>
  );
}
