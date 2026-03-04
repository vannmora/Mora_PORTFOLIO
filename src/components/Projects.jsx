import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import nuqxImage from "../assets/project1.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      category: "Thesis Project",
      categoryColor: "text-blue-500",
      title: "NUQX – NU Queueing System",
      description:
        "A digital queue management system developed for National University Manila. I contributed as a Frontend Developer for both the Flutter mobile application and the MERN-based web platform.",
      tech: ["Flutter", "React.js", "Node.js", "Express.js", "MongoDB"],
      image: nuqxImage,
      note: "Internal University System",
    },
  ];

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-28"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Development Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 text-left cursor-pointer transition"
            >
              <span className={`text-sm font-medium ${project.categoryColor}`}>
                {project.category}
              </span>

              <h3 className="text-2xl font-semibold mt-3 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Tech Stack: {project.tech.join(", ")}
              </p>

              <div className="flex gap-4">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {project.note}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-3xl w-11/12 md:w-2/3 max-w-3xl relative shadow-2xl border border-gray-200 dark:border-gray-700 transition"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-6 text-2xl text-gray-500 dark:text-gray-300 hover:text-red-500 transition"
            >
              ✕
            </button>

            <div className="overflow-hidden rounded-2xl mb-8 shadow-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-72 object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="text-3xl font-bold mb-6 tracking-wide">
              {selectedProject.title}
            </h3>

            <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
              Tech Stack Used
            </h4>

            <div className="flex flex-wrap gap-3">
              {selectedProject.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition rounded-full text-sm font-medium shadow-md"
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