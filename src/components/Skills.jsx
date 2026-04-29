import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [active, setActive] = useState(null);
  const [typedText, setTypedText] = useState("");

  const sections = [
    {
      key: "frontend",
      title: "Frontend",
      command: "npm run frontend",
      skills: ["React.js", "JavaScript", "Tailwind CSS", "Flutter"],
    },
    {
      key: "backend",
      title: "Backend",
      command: "npm run backend",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Python"],
    },
    {
      key: "tools",
      title: "Tools",
      command: "git init",
      skills: ["GitHub", "VS Code"],
    },
  ];

  // typing effect
  useEffect(() => {
    if (!active) return;

    const section = sections.find((s) => s.key === active);
    let index = 0;
    setTypedText("");

    const interval = setInterval(() => {
      index++;
      setTypedText(section.command.slice(0, index));

      if (index === section.command.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section id="skills" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 text-center">
          Technologies
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-center">
          Skills & Stack
        </h2>

        {/* TERMINAL */}
        <div className="bg-black text-green-400 rounded-2xl p-6 font-mono text-sm shadow-2xl">

          {/* HEADER */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="ml-4 text-gray-400">van@portfolio:~/skills</span>
          </div>

          {/* COMMAND LIST */}
          {sections.map((section) => (
            <div key={section.key} className="mb-4">

              {/* CLICKABLE COMMAND */}
              <button
                onClick={() =>
                  setActive(active === section.key ? null : section.key)
                }
                className="text-left w-full hover:text-green-300 transition"
              >
                <span className="text-blue-400">$</span>{" "}
                {section.command}
              </button>

              {/* TYPING OUTPUT */}
              <AnimatePresence>
                {active === section.key && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="pl-4 mt-2 text-gray-300"
                  >
                    {/* TYPING LINE */}
                    <p className="text-green-400">
                      <span className="text-blue-400">$</span> {typedText}
                      <span className="animate-pulse">|</span>
                    </p>

                    {/* SHOW OUTPUT AFTER TYPING */}
                    {typedText === section.command && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2"
                      >
                        <p className="mb-2 text-green-500">
                          ✓ {section.title} Loaded
                        </p>

                        <ul className="space-y-1">
                          {section.skills.map((skill) => (
                            <li key={skill}>→ {skill}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;