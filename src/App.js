import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
