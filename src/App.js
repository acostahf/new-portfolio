import "./App.css";
import "fontsource-roboto";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;
