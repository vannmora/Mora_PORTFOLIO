import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const fullName = "Hi, I'm Van Gonzales Mora";
  const roles = [
    "System Developer",
    "Aspiring Full Stack Developer",
    "Welcome to my Portfolio",
  ];

  const [nameText, setNameText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  // Typing effect (slightly smoother)
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setNameText(fullName.slice(0, index));
      if (index === fullName.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  // Role rotation (slower = calmer feel)
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">

      {/* Softer Background Gradient */}
      <div
        className="absolute inset-0 -z-30 
        bg-gradient-to-br 
        from-white via-gray-50 to-gray-100
        dark:from-black dark:via-zinc-900 dark:to-black
        transition-colors duration-500"
      />

      {/* Softer Blob 1 */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[420px] h-[420px]
        bg-blue-500/15 dark:bg-blue-500/10
        rounded-full blur-[160px] -z-20"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Softer Blob 2 */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px]
        bg-purple-500/15 dark:bg-purple-500/10
        rounded-full blur-[160px] -z-20"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-gray-900 dark:text-white leading-tight">
          {nameText}
          <span className="ml-1 text-blue-500 animate-pulse">|</span>
        </h1>

        <motion.h2
          key={roleIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-4"
        >
          {roles[roleIndex]}
        </motion.h2>

        {/* Slightly refined buttons */}
        <div className="mt-12 flex justify-center gap-6 flex-wrap">

          <a
            href="#projects"
            className="px-7 py-3 rounded-lg 
            bg-gray-900 dark:bg-white 
            text-white dark:text-black 
            hover:opacity-80 
            transition duration-300 font-medium"
          >
            View Projects
          </a>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-lg 
            border border-gray-300 dark:border-zinc-700 
            hover:border-gray-900 dark:hover:border-white
            transition duration-300 font-medium"
          >
            View Resume
          </a>

        </div>
      </motion.div>
    </section>
  );
}

export default Hero;