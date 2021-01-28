import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import gsap, { TweenMax, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Box, Container, Typography, Grid } from "@material-ui/core";

gsap.registerPlugin(ScrollTrigger);
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column ",
  },
  content: {
    maxWidth: 500,
    minHeight: 100,
    padding: 20,
    marginBottom: 20,
  },
  h2: {
    color: "#f5f5f5",
    marginBottom: 10,
  },
  h6: {
    color: "#627383",
    marginBottom: 15,
  },
  body: {
    color: "#627383",
    marginBottom: 15,
  },

  box: {
    visibility: "hidden",
  },
  img: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: 10,
  },
  imgBox: {
    padding: 20,
  },
  line: {
    height: 2,
    backgroundColor: "#64ffda",
    marginBottom: 15,
  },
  listTxt: {
    color: "#f5f5f5",
  },
}));

const listData = [
  {
    name: "React",
  },
  {
    name: "Vue.js",
  },
  {
    name: "Node.js",
  },
  {
    name: " Tailwind.css",
  },
  {
    name: "HTML & CSS",
  },
  {
    name: "Material-Ui",
  },
  {
    name: "GSAP",
  },
  {
    name: "Javascript",
  },
];

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
    const fourthLine = content.children[3];
    const fifthLine = content.children[4];
    const sixthLine = content.children[5];
    const seventhLine = content.children[6];

    TweenMax.to(wrapper, 0, {
      css: { visibility: "visible" },
    });
    tl.staggerFrom(
      [
        firstLine,
        secondLine,
        thirdLine,
        fourthLine,
        fifthLine,
        sixthLine,
        seventhLine,
      ],
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
                <Typography className={classes.line}></Typography>

                <Typography variant="h6" component="h6" className={classes.h6}>
                  Hello! I'm Fabian, a software developer based in Austin, TX.{" "}
                </Typography>

                <Typography variant="body1" className={classes.body}>
                  I love being part of a team to make a vision into a reality
                  online and have grown to enjoy the front end side of
                  development, whether that is a React project, email templates,
                  or learning a new stack.
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  Since graduating from General Assembly, I had the opportunity
                  to work for Nimaroh studios as a front end developer on a few
                  projects and continued to be a freelance developer for them
                  when they do get a new client looking for a website.
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  Recent technologies I’ve been working with:
                </Typography>

                <Grid container item xs={12} spacing={1}>
                  {listData.map((item) => (
                    <Grid item xs={6} key={item.name}>
                      <Typography
                        className={classes.listTxt}
                        variant="body1"
                        value={item.name}
                      >
                        {item.name}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box className={classes.imgBox} id="img">
                <img
                  className={classes.img}
                  src="../../assests/profile.jpg"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
