// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";

import jack from "../assets/owner.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  const contactMessage = `Hi Md Fuad Amir,

I visited your portfolio website and would love to connect with you.

I’d like to discuss a project / collaboration opportunity and learn more about your work.`;

  const handleHire = (href, message = "") => {
    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });

      if (href === "#contact" && message) {
        setTimeout(() => {
          const textarea = document.querySelector('textarea[name="message"]');

          if (textarea) {
            textarea.value = message;

            textarea.dispatchEvent(new Event("input", { bubbles: true }));
          }
        }, 500);
      }
    }
  };
  return (
    <section
      id="home"
      className="py-24 md:py-28 md:h-screen relative flex items-center px-6 md:px-10
      bg-[#f5f3ff] dark:bg-[#12081f]"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-125 h-125 bg-purple-400/20 blur-[120px] top-10 left-10"></div>
        <div className="absolute w-100 h-100 bg-indigo-400/20 blur-[120px] bottom-10 right-10"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* IMAGE SECTION (TOP ON MOBILE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center order-1 md:order-2"
        >
          {/* SHAPE BACKGROUND */}
          <div
            className="absolute w-90 h-90
            bg-linear-to-tr from-purple-500/30 via-indigo-400/30 to-transparent
            blur-2xl rotate-45 rounded-[40%_60%_60%_40%/40%_40%_60%_60%]"
          ></div>

          {/* IMAGE CARD */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative p-3 bg-white/60 dark:bg-white/10
            backdrop-blur-xl shadow-xl
            rounded-[300px_100px_170px_170px] max-w-90"
          >
            <img
              src={jack}
              alt="Jack Harrison"
              className="w-full h-full
              object-cover rounded-[300px_100px_170px_170px]"
            />
          </motion.div>
        </motion.div>

        {/* TEXT SECTION (BOTTOM ON MOBILE) */}
        <div className="text-center md:text-left order-2 md:order-1">
          {/* TAGLINE WITH ICON */}
          <motion.p
            variants={item}
            className="flex items-center justify-center md:justify-start gap-2
            text-xs md:text-sm tracking-widest text-purple-600 dark:text-purple-300"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="text-purple-500"
            >
              <FaCode />
            </motion.span>
            FULL STACK MERN DEVELOPER
          </motion.p>

          {/* NAME */}
          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl md:text-6xl font-bold
            text-gray-800 dark:text-white mt-2
            transition duration-300 hover:text-purple-600 dark:hover:text-purple-300"
          >
            Jack Harrison
          </motion.h1>

          {/* ROLE */}
          <motion.h2
            variants={item}
            className="text-base sm:text-lg md:text-2xl
            text-gray-600 dark:text-purple-200 mt-3
            hover:text-purple-600 dark:hover:text-purple-300 transition"
          >
            I build scalable & modern SaaS web apps
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            variants={item}
            className="mt-5 text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Specialized in MERN stack development with focus on performance,
            clean architecture and modern UI/UX systems.
          </motion.p>

          {/* TECH ICONS */}
          <motion.div
            variants={item}
            className="flex gap-5 mt-6 justify-center md:justify-start"
          >
            {[FaReact, FaNodeJs, FaDatabase, FaCode].map((Icon, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                }}
                className="p-3 rounded-xl
                bg-white/60 dark:bg-white/10
                text-purple-600 dark:text-purple-300
                shadow-sm hover:scale-110 transition"
              >
                <Icon size={22} />
              </motion.div>
            ))}
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start"
          >
            <a
              href="#contact"
              onClick={() => handleHire("#contact", contactMessage)}
              className="px-6 py-3 rounded-full
  bg-purple-600 hover:bg-purple-700
  text-white shadow-md transition"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-full
              border border-purple-400 text-purple-600
              dark:text-purple-300
              hover:bg-purple-100/40 dark:hover:bg-white/10 transition"
            >
              View Projects
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div variants={item} className="grid grid-cols-3 gap-4 mt-10">
            {[
              { num: "20+", label: "Projects" },
              { num: "10+", label: "Clients" },
              { num: "2+", label: "Years Exp" },
            ].map((s, i) => (
              <div
                key={i}
                className="text-center p-3 rounded-xl
                bg-white/50 dark:bg-white/10 backdrop-blur-lg
                hover:scale-105 transition"
              >
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-300">
                  {s.num}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
