import {
  Container,
  Card,
  CardMedia,
  Grid,
  Box,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// anime({
//   targets: "div",
//   translateX: 250,
//   rotate: "1turn",
//   backgroundColor: "#FFF",
//   duration: 800,
// });

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "none",
    minHeight: "100vh",
    padding: "10%",
    margin: "0 auto",
  },

  media: {
    height: 300,
    maxWidth: 500,
  },
  card: {
    maxWidth: 500,
    maxHeight: 300,
  },

  heading: {
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 200,
    margin: 20,
    padding: 20,
  },
  h4: {
    color: "#fff",
    margin: 10,
  },
  h3: {
    color: "#64ffda",
  },
  subtitle: {
    color: "#627383",

    padding: 20,
  },
  img: {
    marginBottom: 25,
  },
  body: {
    marginBottom: 25,
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Box>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={12} className={classes.heading}>
              <Typography variant="h4" className={classes.h4}>
                A Few Creations
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.img}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="../../assests/stockwatch.png"
                  title="Fabian Picture"
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.body}>
              <Box>
                <Typography
                  className={classes.h3}
                  variant="h3"
                  className={classes.h3}
                >
                  Stock Watch{" "}
                </Typography>

                <Typography variant="subtitle1" className={classes.subtitle}>
                  A full stack application made for keeping a trading journal.
                  Created with Javascript, Express, MondgoDb, Bootstrap.{" "}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} className={classes.body}>
              <Box>
                <Typography
                  className={classes.h3}
                  variant="h3"
                  className={classes.h3}
                >
                  E-commerce app
                </Typography>

                <Typography variant="subtitle1" className={classes.subtitle}>
                  This is a full-stack e-commerce store that I created in a team
                  of 3 using python and django. This was to show an artist store
                  and provide a way of purchasing art pieces using crud
                  opperation.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.img}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="../../assests/artworld.png"
                  title="Fabian Picture"
                />
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} className={classes.img}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="../../assests/restaurant.png"
                  title="Fabian Picture"
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.body}>
              <Box>
                <Typography
                  className={classes.h3}
                  variant="h3"
                  className={classes.h3}
                >
                  Restaurant Website
                </Typography>

                <Typography variant="subtitle1" className={classes.subtitle}>
                  This is a website I created using the MERN stack. The purpose
                  of this application is to show a restaurants information and
                  perform crud operations. For the ui I choose to go with
                  material-ui as it had the most customizations I was looking
                  for.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
