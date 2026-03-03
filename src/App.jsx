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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="relative min-h-screen overflow-hidden text-black dark:text-white">

      {/* Floating Orb 1 */}
      <div
        className="
          fixed -top-32 -left-32 w-[500px] h-[500px]
          bg-blue-400/30 dark:bg-blue-500/20
          rounded-full blur-[140px]
          animate-floatSlow
          -z-50
        "
      />

      {/* Floating Orb 2 */}
      <div
        className="
          fixed bottom-0 right-0 w-[450px] h-[450px]
          bg-purple-400/30 dark:bg-purple-600/20
          rounded-full blur-[140px]
          animate-floatSlowReverse
          -z-50
        "
      />

      {/* Floating Orb 3 */}
      <div
        className="
          fixed top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px]
          bg-indigo-400/20 dark:bg-indigo-500/15
          rounded-full blur-[160px]
          animate-floatMedium
          -z-50
        "
      />

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