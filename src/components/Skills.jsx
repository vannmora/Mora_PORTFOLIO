import { useState } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/van_avatar.png";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiPostgresql } from "react-icons/si";

function Skills() {

  const [showSkills, setShowSkills] = useState(false);

  return (
    <section id="skills" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          Technologies
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
          Tools & Technologies
        </h2>

        {/* ORBIT SECTION */}
        <div className="flex justify-center mb-16">

          <div
            onClick={() => setShowSkills(!showSkills)}
            className="
              relative w-[320px] h-[320px]
              animate-spin-slow
              cursor-pointer
              hover:scale-110
              transition-transform duration-300
            "
          >

            <FaReact className="absolute top-0 left-1/2 -translate-x-1/2 text-4xl text-blue-400" />
            <FaNodeJs className="absolute top-1/4 right-0 text-4xl text-green-500" />
            <SiMongodb className="absolute bottom-1/4 right-0 text-4xl text-green-700" />
            <FaGitAlt className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl text-orange-500" />
            <SiTailwindcss className="absolute bottom-1/4 left-0 text-4xl text-sky-400" />
            <SiPostgresql className="absolute top-1/4 left-0 text-4xl text-blue-500" />

            <img
              src={avatar}
              alt="avatar"
              className="
                absolute w-20 h-20 rounded-full
                top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                border-4 border-white/20
              "
            />

          </div>

        </div>

        <p className="text-sm text-gray-400 mb-20">
          Click the orbit to explore my tech stack
        </p>

        {/* SKILLS GRID */}
        {showSkills && (

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-4 gap-10"
          >

            {/* Frontend */}
            <div className="
              bg-white/40 dark:bg-white/5
              backdrop-blur-xl
              border border-white/20 dark:border-white/10
              p-8 rounded-3xl
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl
            ">
              <h3 className="text-xl font-semibold mb-6">Frontend</h3>

              <div className="flex flex-wrap gap-3 justify-center">
                {["React.js", "JavaScript", "Tailwind CSS", "CSS", "Flutter"].map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4 py-2 text-sm
                      rounded-full
                      bg-black/5 dark:bg-white/10
                      border border-black/10 dark:border-white/10
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="
              bg-white/40 dark:bg-white/5
              backdrop-blur-xl
              border border-white/20 dark:border-white/10
              p-8 rounded-3xl
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl
            ">
              <h3 className="text-xl font-semibold mb-6">Backend</h3>

              <div className="flex flex-wrap gap-3 justify-center">
                {["Node.js", "Express.js", "Django", "REST APIs"].map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4 py-2 text-sm
                      rounded-full
                      bg-black/5 dark:bg-white/10
                      border border-black/10 dark:border-white/10
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="
              bg-white/40 dark:bg-white/5
              backdrop-blur-xl
              border border-white/20 dark:border-white/10
              p-8 rounded-3xl
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl
            ">
              <h3 className="text-xl font-semibold mb-6">Database</h3>

              <div className="flex flex-wrap gap-3 justify-center">
                {["MongoDB", "PostgreSQL"].map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4 py-2 text-sm
                      rounded-full
                      bg-black/5 dark:bg-white/10
                      border border-black/10 dark:border-white/10
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="
              bg-white/40 dark:bg-white/5
              backdrop-blur-xl
              border border-white/20 dark:border-white/10
              p-8 rounded-3xl
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl
            ">
              <h3 className="text-xl font-semibold mb-6">Tools</h3>

              <div className="flex flex-wrap gap-3 justify-center">
                {["Github", "VS Code"].map((tool) => (
                  <span
                    key={tool}
                    className="
                      px-4 py-2 text-sm
                      rounded-full
                      bg-black/5 dark:bg-white/10
                      border border-black/10 dark:border-white/10
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        )}

      </div>
    </section>
  );
}

export default Skills;