// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import jack from "../assets/jack.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center py-20 md:py-28 px-5 md:px-6 bg-linear-to-br from-[#eef2ff] via-[#f0f9ff] to-[#fdf4ff] min-h-screen"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* IMAGE (TOP ON MOBILE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-linear-to-tr from-indigo-300 via-purple-200 to-pink-200 blur-3xl opacity-70"></div>

          {/* <div className="relative">
            <img
              src={jack}
              alt="Jack Harrison"
              className="w-56 h-56 md:w-88 md:h-88 object-cover rounded-full border-4 border-white shadow-lg"
            />

            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/70 backdrop-blur-xl p-3 rounded-xl shadow-md w-36 sm:w-44">
              <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                Building scalable and visually stunning web solutions.
              </p>
            </div>
          </div> */}
          <div className="relative flex justify-center items-center">
            {/* IMAGE */}
            <img
              src={jack}
              alt="Jack Harrison"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover object-center rounded-full border-4 border-white shadow-lg"
            />

            {/* FLOATING CARD */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-left-6 bg-white/80 backdrop-blur-xl p-3 sm:p-4 rounded-xl shadow-md w-40 sm:w-44">
              <p className="text-xs sm:text-sm text-gray-700 leading-snug text-center sm:text-left">
                Building scalable and visually stunning web solutions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <div className="order-2 md:order-1 text-center md:text-left">
          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-500 text-xs sm:text-sm md:text-base tracking-wide mb-2"
          >
            Crafting Modern Web Experiences
          </motion.p>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
          >
            Jack Harrison
          </motion.h1>

          {/* ROLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mt-2"
          >
            Full Stack Web Developer (MERN)
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 md:mt-5 space-y-2 text-gray-600"
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
            className="mt-6 md:mt-8 flex flex-wrap justify-center md:justify-start gap-3"
          >
            <a
              href="mailto:mdfuadamir@gmail.com?subject=Project Inquiry"
              className="px-5 py-2.5 text-sm md:text-base rounded-full bg-linear-to-r from-indigo-400 to-purple-400 text-white shadow-md hover:shadow-lg transition"
            >
              Contact Me
            </a>

            <a
              href="https://docs.google.com/document/d/12K2cXFu7bpCguwRwaytDKMEsww5fUsbcZP4UmAU-N6E/export?format=pdf"
              target="_blank"
              className="px-5 py-2.5 text-sm md:text-base rounded-full border border-indigo-300 text-indigo-500 hover:bg-indigo-50 transition"
            >
              Download CV
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 md:mt-8 grid grid-cols-3 gap-3 md:gap-5"
          >
            <div className="bg-white/60 backdrop-blur-lg rounded-xl p-3 text-center shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-indigo-500">
                20+
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">Projects</p>
            </div>

            <div className="bg-white/60 backdrop-blur-lg rounded-xl p-3 text-center shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-indigo-500">
                15+
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">Clients</p>
            </div>

            <div className="bg-white/60 backdrop-blur-lg rounded-xl p-3 text-center shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-indigo-500">
                2+
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
