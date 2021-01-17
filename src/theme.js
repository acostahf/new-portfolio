import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#64ffda",

      contrastText: "#fff",
    },
    secondary: {
      main: "#64ffda",

      contrastText: "#000",
    },
  },
});

export default theme;
