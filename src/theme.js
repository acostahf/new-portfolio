import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#132736",

      contrastText: "#fff",
    },
    secondary: {
      main: "#64ffda",

      contrastText: "#000",
    },
  },
});

export default theme;
