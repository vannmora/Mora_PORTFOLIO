import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const fullName = "Hi, I'm Van Gonzales Mora";
  const roles = [
    "System Developer",
    "Welcome to my Portfolio",
    "Aspiring Full Stack Developer",
  ];

  const [nameText, setNameText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setNameText(fullName.slice(0, index));
      if (index === fullName.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Role rotation
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      {/* Base Gradient Background */}
      <div
        className="absolute inset-0 -z-30 
        bg-gradient-to-br 
        from-white via-gray-100 to-gray-200
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
        transition-colors duration-500"
      />

      {/* Floating Blob 1 */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[450px] h-[450px]
        bg-blue-500/25 dark:bg-blue-600/15
        rounded-full blur-[150px] -z-20"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 40, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Blob 2 */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px]
        bg-purple-500/25 dark:bg-purple-600/15
        rounded-full blur-[150px] -z-20"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white">
          {nameText}
          <span className="animate-pulse text-blue-500">|</span>
        </h1>

        <motion.h2
          key={roleIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mt-4"
        >
          {roles[roleIndex]}
        </motion.h2>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium shadow-lg"
          >
            View Projects
          </a>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl border border-gray-400 dark:border-gray-600 hover:border-blue-400 transition font-medium"
          >
            View Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;