function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">
          Professional Experience
        </h2>

        <div className="bg-gray-100 dark:bg-gray-900 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition duration-300">

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
              Developed and maintained a Budget Planning System
              using React.js for the frontend.
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