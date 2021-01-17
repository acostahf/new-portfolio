import "./App.css";
import "fontsource-roboto";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { makeStyles } from "@material-ui/core/styles";
import Projects from "./components/Projects";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "110vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "../../assests/pexels-stephan-seeber-1261728.jpg"
    })`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
