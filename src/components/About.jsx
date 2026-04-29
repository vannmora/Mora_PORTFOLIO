import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

function About() {
  const [active, setActive] = useState(null);

  const toggle = (key) => {
    setActive(active === key ? null : key);
  };

  const sections = {
    who: {
      title: "Who is Van?",
      text: `I am Van Ian Janssen G. Mora, a 22-year-old aspiring Full Stack Developer based in Pasig City. 
      I enjoy building modern web applications and continuously improving my development skills through 
      real-world projects. My main focus is frontend development using React.js while also exploring 
      backend technologies and databases.`,
    },
    outside: {
      title: "Outside Development",
      text: `Outside of development, I stay active through basketball, gym sessions, and badminton. 
      I also enjoy traveling and exploring new places, especially beaches. These experiences keep me 
      balanced, motivated, and inspired.`,
    },
    goals: {
      title: "My Objectives",
      text: `My goal is to grow into a versatile full stack developer capable of building scalable 
      and impactful systems. I aim to continuously expand my knowledge beyond development and explore 
      other areas in the IT field.`,
    },
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold mb-20">
            About Me
          </h2>

          {/* TABS (UPGRADED) */}
          <div className="flex justify-center gap-6 mb-16 flex-wrap">

            {Object.entries(sections).map(([key, value], index) => {
              const isActive = active === key;

              return (
                <motion.button
                  key={key}
                  onClick={() => toggle(key)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative rounded-2xl transition-all duration-300
                  ${
                    isActive
                      ? "px-10 py-5 text-lg bg-black text-white dark:bg-white dark:text-black shadow-2xl"
                      : "px-6 py-3 text-sm border border-gray-400/30 dark:border-gray-600 hover:border-blue-400"
                  }`}
                >
                  {value.title}

                  {/* ACTIVE GLOW */}
                  {isActive && (
                    <motion.div
                      layoutId="tab-glow"
                      className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl -z-10"
                    />
                  )}
                </motion.button>
              );
            })}

          </div>

          {/* CONTENT PANEL */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="
                    relative
                    max-w-4xl mx-auto
                    bg-white/40 dark:bg-white/5
                    backdrop-blur-2xl
                    border border-white/20 dark:border-white/10
                    rounded-3xl
                    p-12
                    shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                    text-left
                    overflow-hidden
                  "
                >

                  {/* BACKGROUND GLOW */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />

                  <h3 className="text-2xl font-semibold mb-6">
                    {sections[active].title}
                  </h3>

                  <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    {sections[active].text}
                  </p>

                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </Reveal>
    </section>
  );
}

export default About;