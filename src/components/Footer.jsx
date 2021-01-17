import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 50,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Box display="flex" justifyContent="center">
          <Typography variant="subtitle1">Built By Fabian Acosta</Typography>
        </Box>
      </Container>
    </div>
  );
}
