// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import jack from "../assets/jack.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-linear-to-br from-[#eef2ff] via-[#f0f9ff] to-[#fdf4ff] px-5 md:px-6 pt-20 md:pt-24 pb-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 items-center">
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          <div className="absolute w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-linear-to-tr from-indigo-300 via-purple-200 to-pink-200 blur-3xl opacity-70"></div>

          <div className="relative">
            <img
              src={jack}
              alt="Jack Harrison"
              className="w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white shadow-lg"
            />

            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/70 backdrop-blur-xl p-3 sm:p-4 rounded-xl shadow-md w-40 sm:w-48">
              <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                Building scalable and visually stunning web solutions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* TEXT SIDE */}
        <div className="order-2 lg:order-1">
          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-500 text-xs sm:text-sm md:text-base tracking-wide mb-3"
          >
            Crafting Modern Web Experiences
          </motion.p>

          {/* NAME (H1) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
          >
            Jack Harrison
          </motion.h1>

          {/* ROLE (H2) */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-3"
          >
            Full Stack Web Developer (MERN)
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 md:mt-6 space-y-2 text-gray-600"
          >
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              I design and develop high-performance web applications.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Focused on scalability, clean architecture, and user experience.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Helping businesses turn ideas into impactful digital products.
            </p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-7 md:mt-8 flex flex-wrap gap-3 md:gap-4"
          >
            <a
              href="mailto:mdfuadamir@gmail.com?subject=Project Inquiry&body=Hello Fuad Amir, I would like to discuss a project with you."
              className="px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-full bg-linear-to-r from-indigo-400 to-purple-400 text-white shadow-md hover:shadow-lg transition"
            >
              Contact Me
            </a>

            <a
              href="https://docs.google.com/document/d/12K2cXFu7bpCguwRwaytDKMEsww5fUsbcZP4UmAU-N6E/export?format=pdf"
              download
              className="px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-full border border-indigo-300 text-indigo-500 hover:bg-indigo-50 transition"
            >
              Download CV
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 md:mt-10 grid grid-cols-3 gap-3 md:gap-6"
          >
            <div className="bg-white/60 backdrop-blur-lg rounded-xl p-3 md:p-4 text-center shadow-sm">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-500">
                20+
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Projects Completed
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-lg rounded-xl p-3 md:p-4 text-center shadow-sm">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-500">
                15+
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">Happy Clients</p>
            </div>

            <div className="bg-white/60 backdrop-blur-lg rounded-xl p-3 md:p-4 text-center shadow-sm">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-500">
                2+
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Years Experience
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
