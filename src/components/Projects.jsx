function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Development Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <div className="bg-gray-950 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-left">
            
            <span className="text-sm text-blue-400 font-medium">
              Thesis Project
            </span>

            <h3 className="text-2xl font-semibold mt-3 mb-4">
              NUQX – NU Queueing System
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              A digital queue management system developed for
              National University Manila. I contributed as a
              Frontend Developer for both the Flutter mobile
              application and the MERN-based web platform.
            </p>

            <p className="text-sm text-gray-400 mb-6">
              Tech Stack: Flutter, React.js, Node.js, Express.js, MongoDB
            </p>

            <div className="flex gap-4">
              <span className="text-gray-500 text-sm">
                Internal University System
              </span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-950 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-left">
            
            <span className="text-sm text-green-400 font-medium">
              Internship Project
            </span>

            <h3 className="text-2xl font-semibold mt-3 mb-4">
              Budget Planning System
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              A financial planning and tracking system developed
              during my internship at Healthy Options. The system
              allows efficient budget allocation and monitoring
              through a React frontend and Django backend.
            </p>

            <p className="text-sm text-gray-400 mb-6">
              Tech Stack: React.js, Django, Python, PostgreSQL
            </p>

            <div className="flex gap-4">
              <span className="text-gray-500 text-sm">
                Internship Production System
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;