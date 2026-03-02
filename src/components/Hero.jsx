import avatar from "../assets/avatar.png";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden scroll-mt-24"
    >
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-20 right-10"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm Van Gonzales{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mora
            </span>{" "}
            👋
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
            Aspiring Full Stack Developer
          </h2>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            I build modern web and mobile applications using React,
            Flutter, and backend technologies like Node.js and Django.
            Passionate about learning new technologies and growing in
            different IT fields.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition font-medium"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-gray-600 hover:border-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side - Avatar */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

            <img
              src={avatar}
              alt="Mora Pixel Avatar"
              className="relative w-72 md:w-96 rounded-2xl shadow-2xl border border-gray-800"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;