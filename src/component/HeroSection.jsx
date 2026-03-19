import { motion } from "framer-motion";
import { ArrowDown, ChevronDown, Send } from "lucide-react";
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Bg Gradient */}
      <div className="absolute top-4/8 -left-32 h-96 w-96 rounded-full bg-blue-500/9 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-sky-500/9 blur-3xl" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-teal-500 font-mono text-sm mb-4 tracking-wider"
          >
            Howdy, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-main mb-4 text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
          >
            Adyatma Abidin.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted mb-6 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
          >
            I do code.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 mb-10 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Junior Full-Stack Developer who passionate about building efficient,
            modern web applications. Always eager to learn new technologies and
            contribute to collaborative team projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button
              className="bg-teal-500 px-8 py-3 rounded-xl inline-flex items-center gap-4 text-gray-900 font-mono cursor-pointer hover:scale-105 duration-300"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
              <ArrowDown size={18} />
            </button>
            <button
              className="border border-teal-500 px-8 py-3 rounded-xl inline-flex items-center gap-4 text-teal-500 cursor-pointer hover:scale-105 duration-300"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
              <Send size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
