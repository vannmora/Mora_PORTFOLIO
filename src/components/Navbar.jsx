function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white border-b border-gray-800 z-50">
      
      <div className="w-full px-10 py-4 flex items-center justify-between">

        {/* LEFT - NAME */}
        <h1 className="text-xl font-semibold tracking-tight">
          Van Gonzales <span className="text-blue-500">Mora</span>
        </h1>

        {/* RIGHT - LINKS */}
        <ul className="flex items-center gap-8 text-sm font-medium text-gray-300">
          {["About", "Experience", "Skills", "Projects", "Certificates", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group hover:text-white transition duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;