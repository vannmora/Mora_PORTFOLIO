import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import nuqxImage from "../assets/project1.png";
import project2Image from "../assets/project 2.png"; // ✅ ADD THIS

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      category: "Thesis Project",
      title: "NUQX – NU Queueing System",
      description:
        "A Queueing management system developed for National University Manila.",
      tech: ["Flutter", "React.js", "Node.js", "Express.js", "MongoDB"],
      image: nuqxImage,
      note: "Internal University System",
    },

    {
      id: 2,
      category: "Internship Project",
      title: "Healthy Options – Budget Planning System",
      description:
        "A budget planning system for Healthy Options to manage, track, and report financial data.",
      tech: ["React.js", "Django", "PostgreSQL", "API"],
      image: project2Image, // ✅ FIXED
      note: "Company Internal System", // ✅ comma fixed
    },
  ];

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="projects" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
          Development Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative cursor-pointer h-full"
            >
              <div className="
                bg-white/40 dark:bg-white/5
                backdrop-blur-xl
                border border-white/20 dark:border-white/10
                rounded-3xl
                overflow-hidden
                transition-all duration-300
                hover:shadow-2xl
                h-full flex flex-col
              ">

                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="p-8 text-left flex-1 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="
                          px-3 py-1
                          text-xs
                          rounded-full
                          bg-black/5 dark:bg-white/10
                          border border-black/10 dark:border-white/10
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {project.note}
                    </span>

                    <span className="text-sm font-medium text-black dark:text-white group-hover:translate-x-2 transition duration-300">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="
              bg-white/90 dark:bg-zinc-900/90
              backdrop-blur-xl
              p-10
              rounded-3xl
              w-11/12 md:w-2/3
              max-w-4xl
              relative
              shadow-2xl
              border border-white/20 dark:border-white/10
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-8 text-xl text-gray-400 hover:text-red-500 transition"
            >
              ✕
            </button>

            <div className="overflow-hidden rounded-2xl mb-10 shadow-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />
            </div>

            <h3 className="text-3xl font-semibold mb-8">
              {selectedProject.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {selectedProject.tech.map((tech, index) => (
                <span
                  key={index}
                  className="
                    px-4 py-2
                    rounded-full
                    text-sm
                    bg-black/5 dark:bg-white/10
                    border border-black/10 dark:border-white/10
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Projects;