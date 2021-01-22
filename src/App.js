import React, { useRef, useState, useEffect } from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "110vh",
    backgroundColor: "#021A33",
    // backgroundImage: `url(${
    //   process.env.PUBLIC_URL + "../../assests/pexels-stephan-seeber-1261728.jpg"
    // })`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // overflow: "hidden",
  },
}));

const App = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
  });

  let about = useRef(null);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
      console.log("works");
    }
  });

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer ref={(el) => (about = el)} />
      </div>
    </ThemeProvider>
  );
};

export default App;
