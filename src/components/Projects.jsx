import {
  Container,
  Card,
  CardMedia,
  Grid,
  Box,
  CssBaseline,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#383b3d",
    minHeight: "50vh",
    padding: "10%",
    margin: "0 auto",
  },

  media: {
    height: 300,
    minWidth: 600,
  },
  card: {
    minWidth: 600,
    maxHeight: 300,
  },
  box1: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  something: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <Container>
        <Box>
          <Grid container spacing={6}>
            <Grid className={classes.something} item xs={12} sm={12}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="../../assests/stockwatch.png"
                  title="Fabian Picture"
                />
              </Card>
            </Grid>

            <Grid className={classes.something} item xs={12} sm={12}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="../../assests/artworld.png"
                  title="Fabian Picture"
                />
              </Card>
            </Grid>

            <Grid className={classes.something} item xs={12} sm={12}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="../../assests/restaurant.png"
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
