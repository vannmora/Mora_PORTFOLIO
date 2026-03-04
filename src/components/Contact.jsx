import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
          Let's Build Something Together
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-14">
          I'm open to opportunities, collaborations, and professional connections.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <div className="
            bg-white/40 dark:bg-white/5
            backdrop-blur-xl
            border border-white/20 dark:border-white/10
            p-8 rounded-3xl
            hover:-translate-y-2 hover:shadow-2xl
            transition-all duration-300
          ">
            <MdEmail className="text-3xl mx-auto mb-4 text-gray-700 dark:text-gray-300" />

            <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm">
              Email
            </p>

            <a
              href="mailto:vanmora8917@gmail.com"
              className="font-medium text-gray-900 dark:text-white hover:underline"
            >
              vanmora8917@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="
            bg-white/40 dark:bg-white/5
            backdrop-blur-xl
            border border-white/20 dark:border-white/10
            p-8 rounded-3xl
            hover:-translate-y-2 hover:shadow-2xl
            transition-all duration-300
          ">
            <FaPhoneAlt className="text-2xl mx-auto mb-4 text-gray-700 dark:text-gray-300" />

            <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm">
              Phone
            </p>

            <a
              href="tel:09196564785"
              className="font-medium text-gray-900 dark:text-white hover:underline"
            >
              +63 919 656 4785
            </a>
          </div>

          {/* LinkedIn */}
          <div className="
            bg-white/40 dark:bg-white/5
            backdrop-blur-xl
            border border-white/20 dark:border-white/10
            p-8 rounded-3xl
            hover:-translate-y-2 hover:shadow-2xl
            transition-all duration-300
          ">
            <FaLinkedin className="text-3xl mx-auto mb-4 text-gray-700 dark:text-gray-300" />

            <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm">
              LinkedIn
            </p>

            <a
              href="https://www.linkedin.com/in/van-gonzales-mora-6742a0395"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 dark:text-white hover:underline"
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