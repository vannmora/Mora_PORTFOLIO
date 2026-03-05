import { useEffect, useState } from "react";
import GlobalBackground from "./components/GlobalBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Certificates from "./components/Certificate";
import AnimatedCursor from "react-animated-cursor";

function App() {
const [darkMode, setDarkMode] = useState(true);

useEffect(() => {
document.documentElement.classList.toggle("dark", darkMode);
}, [darkMode]);

return ( <div className="relative min-h-screen text-gray-900 dark:text-white transition-colors duration-500">

```
  {/* Custom Cursor */}
  <AnimatedCursor
    innerSize={8}
    outerSize={35}
    color="0, 200, 255"
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={2}
    clickables={[
      "a",
      "button",
      ".link",
      "input",
      "textarea",
      ".cursor-pointer"
    ]}
  />

  {/* 🌌 GLOBAL FLOATING BACKGROUND */}
  <GlobalBackground />

  {/* Main Content */}
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
