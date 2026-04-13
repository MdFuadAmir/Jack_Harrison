
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-5 md:px-10 bg-linear-to-br linear from-[#f0f4ff] via-[#f7fbff] to-[#fdf4ff]"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-14 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* SMALL LABEL (H6 STYLE) */}
          <p className="text-indigo-500 text-xs sm:text-sm tracking-widest">
            EXPERIENCE
          </p>

          {/* H2 RESPONSIVE */}
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            My Journey as a Developer
          </h2>

          {/* CONTENT WRAPPER */}
          <div className="mt-8 md:mt-10 space-y-8 md:space-y-10">

            {/* ITEM 1 */}
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                Freelance Full Stack Developer
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-indigo-500 mt-1">
                2024 - Present
              </p>

              <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Working with clients worldwide building scalable MERN stack applications,
                focusing on performance, clean UI and real business solutions.
              </p>
            </div>

            {/* ITEM 2 */}
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                Frontend Developer (Remote Projects)
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-indigo-500 mt-1">
                2023 - 2024
              </p>

              <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Created responsive interfaces using React and Tailwind CSS with strong focus
                on user experience and modern design systems.
              </p>
            </div>

            {/* ITEM 3 */}
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                Learning Phase & Practice Projects
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-indigo-500 mt-1">
                2022 - 2023
              </p>

              <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Started journey with JavaScript fundamentals and built multiple real-world
                practice projects to improve problem solving and coding skills.
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-24"
        >
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 md:p-10 shadow-sm">

            {/* NAME (H3) */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              Jack Harrison
            </h3>

            {/* ROLE */}
            <p className="text-xs sm:text-sm md:text-base text-indigo-500 mt-2">
              Full Stack Web Developer
            </p>

            {/* PARAGRAPH (IMPORTANT FIX 🔥) */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-5 md:mt-6 leading-relaxed">
              I focus on building real-world applications that are fast, scalable and user-friendly.
              My experience is shaped by hands-on projects and continuous learning in modern web technologies.
            </p>

            {/* LIST */}
            <div className="mt-6 md:mt-8 space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base text-gray-600">
              <p>✔ MERN Stack Expertise</p>
              <p>✔ Modern UI/UX Focus</p>
              <p>✔ Performance Optimization</p>
              <p>✔ Clean Architecture Thinking</p>
            </div>

            {/* BADGE */}
            <div className="mt-8 inline-block px-4 md:px-5 py-2 rounded-full bg-linear-to-br linear from-indigo-100 via-purple-100 to-pink-100 text-gray-700 text-xs sm:text-sm">
              Building Digital Products with Passion
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;