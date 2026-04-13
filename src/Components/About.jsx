// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-5 md:px-6 bg-linear-to-br linear from-[#f0f4ff] via-[#f7fbff] to-[#fdf4ff]"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-indigo-500 text-xs sm:text-sm md:text-base tracking-widest">
            WHO AM I
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-3 md:mt-4">
            Jack Harrison
          </h2>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-indigo-400 pl-4 md:pl-6"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-snug md:leading-relaxed">
              I create digital products that feel simple, fast, and powerful.
            </h3>

            <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              I’m a Full Stack Web Developer specializing in MERN stack.
              My focus is building scalable applications with clean architecture,
              modern UI, and smooth user experience.
            </p>

            <p className="mt-3 md:mt-5 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              I believe good design is not how it looks — it’s how it works.
              Every project I build is focused on real-world usability and performance.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              My journey started with curiosity — exploring how websites work behind the scenes.
              Over time, that curiosity turned into passion, and passion turned into profession.
            </p>

            <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Today, I build full-stack applications that help businesses grow online.
              From frontend interfaces to backend systems, I handle everything with attention to detail.
            </p>

            <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              My goal is simple: deliver clean, modern, and impactful digital experiences
              that users actually enjoy using.
            </p>

            {/* BADGE */}
            <div className="mt-8 md:mt-10 inline-block px-4 md:px-5 py-2 md:py-3 rounded-full bg-white/60 backdrop-blur-xl shadow-sm text-gray-700 text-xs sm:text-sm md:text-base">
              Clean Code • Performance Focus • Modern UI • Real Impact
            </div>
          </motion.div>

        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 md:mt-20 flex flex-wrap justify-center gap-8 md:gap-14 text-center"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-500">
              20+
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-500">
              15+
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Clients
            </p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-500">
              2+
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Years Experience
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;