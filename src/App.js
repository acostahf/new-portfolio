import "./App.css";
import "fontsource-roboto";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { makeStyles } from "@material-ui/core/styles";
import Projects from "./components/Projects";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 4,
  //   margin: 0,
  //   backgroundColor: "#089e80",
  // },
}));
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div class="App">
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
