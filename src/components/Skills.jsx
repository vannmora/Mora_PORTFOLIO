function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          Technologies
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
          Tools & Technologies
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          {/* Frontend */}
          <div className="
            bg-white/40 dark:bg-white/5
            backdrop-blur-xl
            border border-white/20 dark:border-white/10
            p-8 rounded-3xl
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-2xl
          ">
            <h3 className="text-xl font-semibold mb-6">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-3 justify-center">
              {["React.js", "JavaScript", "Tailwind CSS", "CSS", "Flutter"].map(
                (skill) => (
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
                )
              )}
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
            <h3 className="text-xl font-semibold mb-6">
              Backend
            </h3>

            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Node.js",
                "Express.js",
                "Django",
                "REST APIs",
              ].map((skill) => (
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
            <h3 className="text-xl font-semibold mb-6">
              Database
            </h3>

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
            <h3 className="text-xl font-semibold mb-6">
              Tools
            </h3>

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

        </div>
      </div>
    </section>
  );
}

export default Skills;