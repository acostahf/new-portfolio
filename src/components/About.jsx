import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Box,
  Card,
  CardMedia,
  Container,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10%",
    margin: "0 auto",
  },
  card: {
    maxWidth: 300,
    maxHeight: 300,
  },
  about: {
    width: "100%",
    height: "50vh",
    // padding: 40,
  },
  heroBody: {
    maxWidth: 500,
    minHeight: 100,
    display: "flex",
    flexDirection: "column",
  },
  h2: {
    color: "#fff",
    margin: 10,
  },
  h6: {
    color: "#627383",
    margin: 10,
  },
  body: {
    color: "#627383",
    margin: 10,
  },
  media: {
    height: 300,
    maxWidth: 300,
  },
  img: {
    // padding: 20,
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Box>
          <Grid container spaceing={6}>
            <Grid item xs={12} sm={6} md={6}>
              <Box className={classes.heroBody}>
                <Box>
                  <Typography
                    variant="h2"
                    component="h2"
                    className={classes.h2}
                  >
                    About Me
                  </Typography>
                </Box>

                <Typography variant="h6" component="h6" className={classes.h6}>
                  Hello! I'm Fabian, a software developer based in Austin, TX.{" "}
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  Im bootcamp graduate making my way into the development
                  community. Since graduation I’ve worked for a local company as
                  a front end developer. Im currently working on freelancing my
                  skills to help others build a site that fits their needs.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} className={classes.img}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="../../assests/profile.jpg"
                  title="Fabian Picture"
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
