function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-950 text-white scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let's Connect
        </h2>

        <p className="text-lg text-gray-400 mb-12">
          I'm open to internship opportunities, collaborations, and professional connections.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Personal Email */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:-translate-y-2 transition duration-300">
            <p className="text-gray-400 mb-2">Personal Email</p>
            <a
              href="mailto:vanmora8917@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              vanmora8917@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:-translate-y-2 transition duration-300">
            <p className="text-gray-400 mb-2">Phone</p>
            <a
              href="tel:09196564785"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              09196564785
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:-translate-y-2 transition duration-300">
            <p className="text-gray-400 mb-2">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/van-gonzales-mora-6742a0395"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              View Profile
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;