import Reveal from "./Reveal";

function About() {
  return (
    <section
      id="about"
      className="relative py-28"
    >
      <Reveal>
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            About 
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            I am an aspiring Full Stack Developer with hands-on experience
            building modern web and mobile applications. My primary focus
            is frontend development using React.js, while also working with
            backend technologies such as Node.js, Express, Django, and databases
            like MongoDB and PostgreSQL.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            I have also developed mobile frontend applications using Flutter,
            contributing to real-world systems such as a university queueing
            platform for National University Manila.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
            I enjoy solving real-world problems through technology and
            continuously expanding my knowledge across different IT fields.
            My goal is to grow into a versatile developer capable of building
            scalable, impactful, and user-focused software solutions.
          </p>

        </div>
      </Reveal>
    </section>
  );
}

export default About;