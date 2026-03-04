import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-zinc-900 dark:to-black transition-colors duration-500" />

      {/* Floating Glass Shapes */}
      <motion.div
        className="absolute top-24 left-16 w-40 h-24 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-32 right-16 w-52 h-28 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-32 left-10 text-blue-500 text-5xl opacity-20"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaReact />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-32 text-yellow-400 text-4xl opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <SiJavascript />
      </motion.div>

      <motion.div
        className="absolute top-40 right-24 text-green-500 text-5xl opacity-20"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <FaNodeJs />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-40 text-cyan-400 text-4xl opacity-20"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6.5, repeat: Infinity }}
      >
        <SiTailwindcss />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/4 text-purple-400 text-4xl opacity-20"
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 7.5, repeat: Infinity }}
      >
        <FaDatabase />
      </motion.div>

    </div>
  );
}

export default GlobalBackground;