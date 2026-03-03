import { useEffect, useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-md border-b border-gray-200 dark:border-gray-800"
            : "bg-transparent"
        }`}
    >
      <div className="w-full px-10 py-4 flex items-center justify-between">

        {/* LEFT - NAME */}
        <h1 className="text-xl font-semibold tracking-tight text-black dark:text-white">
          Van Gonzales <span className="text-blue-500">Mora</span>
        </h1>

        {/* RIGHT - LINKS + THEME */}
        <div className="flex items-center gap-8">

          <ul className="flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
            {["About", "Experience", "Skills", "Projects", "Certificates", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group hover:text-blue-500 transition duration-300"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* 🌞 Dark / Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 
                      bg-gray-300 dark:bg-gray-700"
          >
            <div
              className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 
                          flex items-center justify-center text-xs
                          ${darkMode ? "translate-x-8" : "translate-x-0"}`}
            >
              {darkMode ? "🌙" : "☀"}
            </div>
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;