import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Certificates",
    "Contact",
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${
          scrolled
            ? "backdrop-blur-2xl bg-white/60 dark:bg-black/50 border-b border-white/20 dark:border-white/10 shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* LOGO / NAME */}
        <div className="text-xl font-semibold tracking-tight">
          Van Gonzales Mora
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-10">

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = active === id;

              return (
                <li key={item}>
                  <a
                    href={`#${id}`}
                    className={`
                      relative px-1 py-2 transition-colors duration-300
                      ${
                        isActive
                          ? "text-black dark:text-white"
                          : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                      }
                    `}
                  >
                    {item}

                    {/* Animated Underline */}
                    <span
                      className={`
                        absolute left-0 bottom-0 h-[2px] transition-all duration-300
                        ${
                          isActive
                            ? "w-full bg-black dark:bg-white"
                            : "w-0 bg-black dark:bg-white hover:w-full"
                        }
                      `}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* DARK MODE TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              relative w-14 h-7 flex items-center
              rounded-full p-1
              bg-gray-200 dark:bg-zinc-700
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