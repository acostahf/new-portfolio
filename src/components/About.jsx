import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import gsap, { TweenMax, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Box, Container, Typography, Grid } from "@material-ui/core";

gsap.registerPlugin(ScrollTrigger);
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10%",
    margin: "0 auto",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column ",
  },
  content: {
    maxWidth: 500,
    minHeight: 100,
    padding: 20,
  },
  h2: {
    color: "#fff",
    marginBottom: 10,
  },
  h6: {
    color: "#627383",
    marginBottom: 10,
  },
  body: {
    color: "#627383",
  },

  box: {
    visibility: "hidden",
  },
  img: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  imgBox: {
    padding: 20,
  },
}));

export default function About() {
  const classes = useStyles();
  //animation

  let content = useRef(null);
  let wrapper = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#container",
        // markers: true,
        start: "bottom center",
        toggleActions: "play complete complete complete",
      },
    });

    const firstLine = content.children[0];
    const secondLine = content.children[1];
    const thirdLine = content.children[2];

    TweenMax.to(wrapper, 0, {
      css: { visibility: "visible" },
    });
    tl.staggerFrom(
      [firstLine, secondLine, thirdLine],
      1,
      {
        x: 100,
        duration: 2,
        ease: Power3.easeOut,
        opacity: 0,
        delay: 0.5,
      },
      0.15
    );
    gsap.from("#img", {
      y: 100,
      duration: 2,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 1,

      scrollTrigger: {
        trigger: "#box",
        // markers: true,
        start: "top center",
        toggleActions: "play complete complete complete",
      },
    });
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        <Box className={classes.box} id="box" ref={(el) => (wrapper = el)}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                ref={(el) => (content = el)}
                id="content"
                className={classes.content}
              >
                <Typography variant="h2" component="h2" className={classes.h2}>
                  About Me
                </Typography>

                <Typography variant="h6" component="h6" className={classes.h6}>
                  Hello! I'm Fabian, a software developer based in Austin, TX.{" "}
                </Typography>

                <Typography variant="body1" className={classes.body}>
                  I'm a bootcamp graduate making my way into the development
                  community. Since graduation I’ve worked for a local company as
                  a front end developer. Im currently working on freelancing my
                  skills to help others build a site that fits their needs.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              spacing={6}
              display="flex"
              flexDirection="row"
              justifyContent="center"
            >
              <Box className={classes.imgBox} id="img">
                <img className={classes.img} src="../../assests/profile.jpg" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
