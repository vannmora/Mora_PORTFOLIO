import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

function Hero() {
  const fullName = "Hi, I'm Van Gonzales Mora";
  const roles = [
    "IT Enthusiast open to diverse fields",
    "Exploring diverse areas in IT"
    
  ];

  const [nameText, setNameText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setNameText(fullName.slice(0, index));
      if (index === fullName.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">

      {/* Soft Neutral Glow Background */}
      <div className="absolute inset-0 -z-40 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-black dark:via-zinc-900 dark:to-black transition-colors duration-500" />

      {/* Floating Glass Shapes (Neutral) */}
      <motion.div
        className="absolute top-24 left-16 w-44 h-24 rounded-2xl backdrop-blur-xl bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-32 right-20 w-52 h-28 rounded-2xl backdrop-blur-xl bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-white/30 dark:bg-white/5 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating Tech Icons (Muted Colors) */}
      <motion.div
        className="absolute top-32 left-12 text-gray-400 dark:text-gray-600 text-5xl opacity-20"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaReact />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-32 text-gray-400 dark:text-gray-600 text-4xl opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <SiJavascript />
      </motion.div>

      <motion.div
        className="absolute top-40 right-24 text-gray-400 dark:text-gray-600 text-5xl opacity-20"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <FaNodeJs />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-40 text-gray-400 dark:text-gray-600 text-4xl opacity-20"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6.5, repeat: Infinity }}
      >
        <SiTailwindcss />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/4 text-gray-400 dark:text-gray-600 text-4xl opacity-20"
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 7.5, repeat: Infinity }}
      >
        <FaDatabase />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-tight text-gray-900 dark:text-white">
          {nameText}
          <span className="ml-1 text-gray-400 animate-pulse">|</span>
        </h1>

        <motion.h2
          key={roleIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-lg md:text-xl mt-6 font-medium text-gray-600 dark:text-gray-400"
        >
          {roles[roleIndex]}
        </motion.h2>

        <div className="mt-14 flex justify-center gap-6 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            View Projects
          </a>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-gray-300 dark:border-zinc-700 hover:border-gray-900 dark:hover:border-white hover:scale-105 active:scale-95 transition-all duration-300 font-medium"
          >
            View Resume
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 text-gray-400 text-xl"
      >
        ↓
      </motion.div>

    </section>
  );
}

export default Hero;