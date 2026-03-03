import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Certificates from "./components/Certificate";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="
  min-h-screen 
  bg-gradient-to-br 
  from-white via-gray-100 to-gray-200
  dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
  text-black dark:text-white 
  transition-colors duration-500
">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;