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
import AskAI from "./components/AskAI"; // ⭐ AI Assistant

function App() {
const [darkMode, setDarkMode] = useState(true);

useEffect(() => {
document.documentElement.classList.toggle("dark", darkMode);
}, [darkMode]);

return ( <div className="relative min-h-screen text-gray-900 dark:text-white transition-colors duration-500">

```
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

  {/* 🤖 ASK AI ASSISTANT */}
  <AskAI />

</div>


);
}

export default App;
