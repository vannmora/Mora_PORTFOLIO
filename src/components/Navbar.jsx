function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 text-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold tracking-wide hover:text-blue-400 transition"
        >
          Mora.dev
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">

          {[
            { name: "About", link: "#about" },
            { name: "Experience", link: "#experience" },
            { name: "Skills", link: "#skills" },
            { name: "Projects", link: "#projects" },
            { name: "Contact", link: "#contact" },
          ].map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.link}
                className="hover:text-white transition duration-300"
              >
                {item.name}
              </a>

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;