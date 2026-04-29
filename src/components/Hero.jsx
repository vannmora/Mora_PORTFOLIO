import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

function Hero() {
  const fullName = "Hi, I'm Van Gonzales Mora.";
  const roles = [
    "Exploring AI, Systems, and Emerging Tech",
    "Passionate about Building and Learning",
    "Eager to Contribute and Grow in Tech",
  ];

  const [nameText, setNameText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setNameText(fullName.slice(0, index));
      if (index === fullName.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // rotating roles
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  // mouse tracking (MAGNETIC EFFECT)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;

      setMouse({
        x: (e.clientX - innerWidth / 2) / 25,
        y: (e.clientY - innerHeight / 2) / 25,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-40 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-black dark:via-zinc-900 dark:to-black transition-colors duration-500" />

      {/* REACTIVE GLOW */}
      <motion.div
        className="absolute w-[500px] h-[300px] bg-white/20 dark:bg-white/5 blur-3xl rounded-full"
        animate={{ x: mouse.x, y: mouse.y }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* GLASS SHAPES */}
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

      {/* FLOATING ICONS WITH PARALLAX */}
      <motion.div
        className="absolute top-32 left-12 text-gray-400 text-5xl opacity-30"
        animate={{ x: mouse.x * -2, y: mouse.y * -2 }}
        transition={{ type: "spring", stiffness: 40 }}
      >
        <FaReact />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-32 text-gray-400 text-4xl opacity-20"
        animate={{ x: mouse.x * -1.5, y: mouse.y * -1.5 }}
        transition={{ type: "spring", stiffness: 40 }}
      >
        <SiJavascript />
      </motion.div>

      <motion.div
        className="absolute top-40 right-24 text-gray-400 text-5xl opacity-20"
        animate={{ x: mouse.x * -2, y: mouse.y * -2 }}
        transition={{ type: "spring", stiffness: 40 }}
      >
        <FaNodeJs />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-40 text-gray-400 text-4xl opacity-20"
        animate={{ x: mouse.x * -1.2, y: mouse.y * -1.2 }}
        transition={{ type: "spring", stiffness: 40 }}
      >
        <SiTailwindcss />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/4 text-gray-400 text-4xl opacity-20"
        animate={{ x: mouse.x * -1, y: mouse.y * -1 }}
        transition={{ type: "spring", stiffness: 40 }}
      >
        <FaDatabase />
      </motion.div>

      {/* MAIN CONTENT (MAGNETIC CENTER) */}
      <motion.div
        animate={{ x: mouse.x * 0.3, y: mouse.y * 0.3 }}
        transition={{ type: "spring", stiffness: 60 }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-tight text-gray-900 dark:text-white">
          {nameText}
          <span className="ml-1 text-gray-400 animate-pulse">|</span>
        </h1>


        <motion.p
          key={roleIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300"
        >
          {roles[roleIndex]}
        </motion.p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-black text-white font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            View Projects
          </a>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white hover:scale-105 active:scale-95 transition-all duration-300 font-medium"
          >
            View Resume
          </a>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 flex flex-col items-center">
        <div className="w-[1px] h-10 bg-gray-400 animate-pulse"></div>
      </div>

    </section>
  );
}

export default Hero;