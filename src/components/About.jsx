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
      text: `I am Van Ian Janssen G. Mora, a 21-year-old aspiring Full Stack Developer based in Pasig City. 
      I enjoy building modern web applications and continuously improving my development skills through 
      real-world projects. My main focus is frontend development using React.js while also exploring 
      backend technologies and databases.`,
    },
    outside: {
      title: "Van Outside Development",
      text: `Outside of development, I enjoy staying active and maintaining a healthy lifestyle. 
      I regularly play basketball, go to the gym, and play badminton. I also enjoy traveling and 
      exploring new places, especially going to the beach. These activities keep me balanced, 
      motivated, and energized.`,
    },
    goals: {
      title: "My Objectives",
      text: `My goal is to build a successful career in the technology industry while continuously 
      improving my development skills. I aspire to grow into a versatile full stack developer capable 
      of building scalable and impactful software solutions that solve real-world problems.`,
    },
  };

  return (
    <section id="about" className="relative py-28">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            About Me
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-6 mb-12 flex-wrap">

            {Object.entries(sections).map(([key, value]) => (
              <motion.button
                key={key}
                layout
                onClick={() => toggle(key)}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`rounded-2xl border transition-all duration-300
                ${
                  active === key
                    ? "px-10 py-5 text-lg bg-white text-black dark:bg-white dark:text-black shadow-xl scale-105"
                    : "px-6 py-3 text-sm border-gray-400/40 dark:border-gray-600 hover:border-blue-400 hover:scale-105"
                }`}
              >
                {value.title}
              </motion.button>
            ))}

          </div>

          {/* Description Panel */}
          <AnimatePresence>
            {active && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <div className="
                  max-w-4xl mx-auto
                  bg-white/40 dark:bg-white/5
                  backdrop-blur-xl
                  border border-white/20 dark:border-white/10
                  rounded-3xl
                  p-12
                  shadow-2xl
                  text-left
                ">

                  <h3 className="text-2xl font-semibold mb-4">
                    {sections[active].title}
                  </h3>

                  <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    {sections[active].text}
                  </p>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </Reveal>
    </section>
  );
}

export default About;