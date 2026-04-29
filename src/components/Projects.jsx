import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import nuqxImage from "../assets/project1.png";
import project2Image from "../assets/Project2.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      category: "Thesis Project",
      title: "NUQX – NU Queueing System",
      description:
        "Queueing management system for National University Manila.",
      tech: ["Flutter", "React.js", "Node.js", "Express.js", "MongoDB"],
      image: nuqxImage,
      note: "Internal University System",
    },
    {
      id: 2,
      category: "Internship Project",
      title: "Budget Planning System",
      description:
        "Financial tracking and reporting system for Healthy Options.",
      tech: ["React.js", "Node.js", "PostgreSQL", "API"],
      image: project2Image,
      note: "Company Internal System",
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

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-20">
          Development Projects
        </h2>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer group"
            >
              <div className="
                relative
                bg-white/40 dark:bg-white/5
                backdrop-blur-2xl
                border border-white/20 dark:border-white/10
                rounded-3xl
                overflow-hidden
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                transition-all duration-300
              ">

                {/* GLOW */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />

                {/* IMAGE */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8 text-left">

                  <span className="text-xs text-blue-500 font-medium">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-semibold mt-2 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">
                      {project.note}
                    </span>

                    <span className="text-sm font-medium group-hover:translate-x-2 transition">
                      Inspect →
                    </span>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="
              bg-black text-green-400 font-mono
              p-8 rounded-2xl
              w-11/12 md:w-2/3 max-w-4xl
              border border-green-500/20
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* TERMINAL HEADER */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-4 text-gray-400">
                project@system:~/{selectedProject.title}
              </span>
            </div>

            {/* COMMAND */}
            <p className="mb-4">
              <span className="text-blue-400">$</span> inspect project
            </p>

            {/* OUTPUT */}
            <div className="space-y-3 text-sm text-gray-300">

              <p>→ {selectedProject.title}</p>
              <p>→ {selectedProject.note}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-green-400/30 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

            {/* IMAGE */}
            <div className="mt-6 rounded-lg overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-72 object-cover"
              />
            </div>

          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Projects;