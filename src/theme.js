import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#64ffda",

      contrastText: "#64ffda",
    },
    secondary: {
      main: "#64ffda",

      contrastText: "#000",
    },
    textPrimary: { main: "#fff" },
  },
});

export default theme;
