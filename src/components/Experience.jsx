function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Label */}
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4 text-center">
          Career
        </p>

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-center">
          Professional Experience
        </h2>

        {/* Experience Card */}
        <div
          className="
            bg-white/40 dark:bg-white/5
            backdrop-blur-xl
            border border-white/20 dark:border-white/10
            p-8 md:p-10
            rounded-3xl
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-2xl
          "
        >

          {/* Date */}
          <span className="text-sm text-green-500 dark:text-green-400 font-medium">
            November 2025 – April 2026
          </span>

          {/* Role */}
          <h3 className="text-2xl md:text-3xl font-semibold mt-3">
            System Developer Intern
          </h3>

          {/* Company */}
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Healthy Options
          </p>

          {/* Responsibilities */}
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
            <li>
              Developed a Budget Planning System
            </li>
            <li>
              Built backend features and API endpoints using
              Django (Python).
            </li>
            <li>
              Designed and managed database structures using
              PostgreSQL.
            </li>
            <li>
              Collaborated with the development team to improve
              system performance, functionality, and usability.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}

export default Experience;