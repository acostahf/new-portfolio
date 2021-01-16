import "./App.css";
import "fontsource-roboto";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
