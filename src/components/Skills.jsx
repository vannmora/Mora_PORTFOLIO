function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          My Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Frontend */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Frontend
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>React.js</li>
              <li>JavaScript</li>
              <li>CSS / Tailwind CSS</li>
              <li>Flutter</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-green-400">
              Backend
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>Node.js (BasicKnowledge)</li>
              <li>Express.js (BasicKnowledge)</li>
              <li>Django</li>
              <li>REST APIs (BasicKnowledge)</li>
            </ul>
          </div>

          {/* Database */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
              Database
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;