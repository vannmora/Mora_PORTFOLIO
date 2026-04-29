import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* HEADER */}
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Let’s Build Something 
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Open to opportunities, collaborations, and building impactful systems.
        </p>

        {/* MAIN CTA (NEW 🔥) */}
        <a
          href="mailto:vanmora8917@gmail.com"
          className="
            inline-block mb-16
            px-8 py-4 rounded-full
            bg-black text-white
            font-medium
            hover:scale-105 active:scale-95
            transition-all duration-300
            shadow-lg
          "
        >
          Start a Conversation →
        </a>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* EMAIL */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              relative
              bg-white/40 dark:bg-white/5
              backdrop-blur-2xl
              border border-white/20 dark:border-white/10
              p-8 rounded-3xl
              shadow-[0_20px_60px_rgba(0,0,0,0.1)]
              transition-all duration-300
            "
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/20 blur-2xl rounded-full" />

            <MdEmail className="text-3xl mx-auto mb-4 text-blue-500" />

            <p className="text-gray-500 mb-2 text-sm">Email</p>

            <a
              href="mailto:vanmora8917@gmail.com"
              className="font-medium text-gray-900 dark:text-white hover:underline"
            >
              vanmora8917@gmail.com
            </a>
          </motion.div>

          {/* PHONE */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              relative
              bg-white/40 dark:bg-white/5
              backdrop-blur-2xl
              border border-white/20 dark:border-white/10
              p-8 rounded-3xl
              shadow-[0_20px_60px_rgba(0,0,0,0.1)]
              transition-all duration-300
            "
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-500/20 blur-2xl rounded-full" />

            <FaPhoneAlt className="text-2xl mx-auto mb-4 text-green-500" />

            <p className="text-gray-500 mb-2 text-sm">Phone</p>

            <a
              href="tel:09196564785"
              className="font-medium text-gray-900 dark:text-white hover:underline"
            >
              +63 919 656 4785
            </a>
          </motion.div>

          {/* LINKEDIN */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              relative
              bg-white/40 dark:bg-white/5
              backdrop-blur-2xl
              border border-white/20 dark:border-white/10
              p-8 rounded-3xl
              shadow-[0_20px_60px_rgba(0,0,0,0.1)]
              transition-all duration-300
            "
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-purple-500/20 blur-2xl rounded-full" />

            <FaLinkedin className="text-3xl mx-auto mb-4 text-purple-500" />

            <p className="text-gray-500 mb-2 text-sm">LinkedIn</p>

            <a
              href="https://www.linkedin.com/in/van-gonzales-mora-6742a0395"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 dark:text-white hover:underline"
            >
              View Profile
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;