import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Box, Card, CardMedia, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    maxHeight: 300,
  },
  about: {
    width: "100%",
    padding: "10%",
    height: "50%",
  },
  heroBody: {
    padding: 10,
    maxWidth: 500,
    minHeight: 100,
    display: "flex",
    flexDirection: "column",
    borderColor: "#64ffda",
  },
  media: {
    height: 300,
    width: 300,
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Container className={classes.about}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignContent="center"
        alignItems="center"
        flexWrap="wrap"
        className={classes.root}
      >
        <Box className={classes.heroBody} border={1}>
          <Typography
            p={20}
            variant="h2"
            component="h2"
            className={classes.heroBody}
          >
            About Me
          </Typography>
          <Typography variant="h3" component="h3" className={classes.heroBody}>
            Hello! I'm Fabian, a software engineer based in Austin, TX.{" "}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.heroBody}
          >
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.heroBody}
          >
            Shortly after graduating from Northeastern University, I joined the
            engineering team at Upstatement where I work on a wide variety of
            interesting and meaningful projects on a daily basis.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.heroBody}
          >
            Here are a few technologies I've been working with recently:
          </Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" flexShrink="1">
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="../../assests/profile.jpg"
              title="Fabian Picture"
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
