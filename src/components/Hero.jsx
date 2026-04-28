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

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-40 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-black dark:via-zinc-900 dark:to-black transition-colors duration-500" />

      {/* Center Glow (FOCUS) */}
      <div className="absolute inset-0 flex justify-center items-center -z-30">
        <div className="w-[500px] h-[300px] bg-white/20 dark:bg-white/5 blur-3xl rounded-full" />
      </div>

      {/* Glass Shapes (ONLY 2) */}
      <motion.div
        className="absolute top-24 left-16 w-44 h-24 rounded-2xl backdrop-blur-xl bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-32 right-20 w-52 h-28 rounded-2xl backdrop-blur-xl bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Floating Icons (IMPROVED DEPTH + MOTION) */}
      <motion.div
        className="absolute top-32 left-12 text-gray-400 dark:text-gray-600 text-5xl opacity-30"
        animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        whileHover={{ scale: 1.2, opacity: 0.6 }}
      >
        <FaReact />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-32 text-gray-400 dark:text-gray-600 text-4xl opacity-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        whileHover={{ scale: 1.2, opacity: 0.5 }}
      >
        <SiJavascript />
      </motion.div>

      <motion.div
        className="absolute top-40 right-24 text-gray-400 dark:text-gray-600 text-5xl opacity-20"
        animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
        whileHover={{ scale: 1.2, opacity: 0.6 }}
      >
        <FaNodeJs />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-40 text-gray-400 dark:text-gray-600 text-4xl opacity-20"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 11, repeat: Infinity }}
        whileHover={{ scale: 1.2, opacity: 0.6 }}
      >
        <SiTailwindcss />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/4 text-gray-400 dark:text-gray-600 text-4xl opacity-15"
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        whileHover={{ scale: 1.2, opacity: 0.6 }}
      >
        <FaDatabase />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 leading-tight text-gray-900 dark:text-white">
          {nameText}
          <span className="ml-1 text-gray-400 animate-pulse">|</span>
        </h1>

        <motion.h2
          key={roleIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xl md:text-2xl mt-8 font-medium text-gray-700 dark:text-gray-300"
        >
          {roles[roleIndex]}
        </motion.h2>

        <div className="mt-16 flex justify-center gap-6 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-gray-900 to-black text-white font-medium hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            View Projects
          </a>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white hover:scale-105 active:scale-95 transition-all duration-300 font-medium"
          >
            View Resume
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 flex flex-col items-center">
        <div className="w-[1px] h-10 bg-gray-400 animate-pulse"></div>
      </div>

    </section>
  );
}

export default Hero;