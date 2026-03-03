import { useEffect, useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${
          scrolled
            ? "backdrop-blur-xl bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-zinc-800 shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* LOGO / NAME */}
        <h1 className="text-xl font-semibold tracking-tight">
          Van Gonzales{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Mora
          </span>
        </h1>

        {/* NAV LINKS + TOGGLE */}
        <div className="flex items-center gap-10">

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {[
              "About",
              "Experience",
              "Skills",
              "Projects",
              "Certificates",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                    relative group
                    text-gray-600 dark:text-gray-300
                    hover:text-blue-500
                    transition-colors duration-300
                  "
                >
                  {item}
                  <span
                    className="
                      absolute left-0 -bottom-1
                      h-[2px] w-0
                      bg-gradient-to-r from-blue-500 to-purple-500
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* DARK MODE TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              relative w-14 h-7 flex items-center
              rounded-full p-1
              bg-gray-300 dark:bg-zinc-700
              transition-colors duration-300
            "
          >
            <div
              className={`
                w-5 h-5 rounded-full bg-white shadow-md
                transform transition-transform duration-300
                flex items-center justify-center text-xs
                ${darkMode ? "translate-x-7" : "translate-x-0"}
              `}
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