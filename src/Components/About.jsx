// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUser,
  FaTerminal,
  FaBolt,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  // Education & Experience Data
  const timeline = [
    {
      icon: FaBriefcase,
      title: "Full Stack Developer",
      subtitle: "Remote / Freelance",
      duration: "2024 - Present",
    },
    {
      icon: FaGraduationCap,
      title: "Computer Science & Engineering",
      subtitle: "B.Sc Degree",
      duration: "2020 - 2024",
    },
  ];

  // Point wise highlights for scannability
  const keyPoints = [
    {
      icon: FaTerminal,
      title: "MERN Stack Expertise",
      desc: "Building production-ready apps with MongoDB, Express, React, and Node.js.",
    },
    {
      icon: FaBolt,
      title: "Performance Optimization",
      desc: "Ensuring lightning-fast loading speeds, clean architecture, and SEO friendliness.",
    },
    {
      icon: FaLayerGroup,
      title: "Scalable Architecture",
      desc: "Writing maintainable code, structured APIs, and robust state management solutions.",
    },
    {
      icon: FaCheckCircle,
      title: "Pixel-Perfect UI/UX",
      desc: "Creating smooth, highly-responsive interfaces with fluid motion designs.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-28 relative flex items-center px-6 md:px-10
      bg-[#f5f3ff] dark:bg-[#12081f] overflow-hidden border-t border-purple-100/10"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-125 h-125 bg-indigo-400/10 blur-[120px] top-1/2 left-[-10%]"></div>
        <div className="absolute w-100 h-100 bg-purple-400/10 blur-[120px] bottom-0 right-[-5%]"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
      >
        {/* LEFT COLUMN: TITLE & CHOPPED-DOWN POINTS (7 Cols) */}
        <div className="md:col-span-7 space-y-6">
          {/* TAGLINE WITH ICON */}
          <motion.p
            variants={item}
            className="flex items-center gap-2 text-xs md:text-sm tracking-widest text-purple-600 dark:text-purple-300 font-semibold"
          >
            <span className="text-purple-500">
              <FaUser />
            </span>
            ABOUT ME
          </motion.p>

          {/* MAIN HEADING */}
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white"
          >
            Who I Am & What I Bring To{" "}
            <span className="text-purple-600 dark:text-purple-300">
              The Table
            </span>
          </motion.h2>

          {/* SHORT INTRO */}
          <motion.p
            variants={item}
            className="text-gray-600 dark:text-gray-300 leading-relaxed text-base"
          >
            I'm a Full Stack Developer focusing on crafting sleek web
            architectures. Here is a quick breakdown of how I build standard
            software solutions:
          </motion.p>

          {/* POINT-BASED TEXT SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {keyPoints.map((point, index) => {
              const PointIcon = point.icon;
              return (
                <motion.div
                  variants={item}
                  key={index}
                  className="space-y-2 group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2 rounded-lg bg-purple-100 dark:bg-purple-950/40 
                      text-purple-600 dark:text-purple-300 group-hover:scale-110 transition duration-300"
                    >
                      <PointIcon size={16} />
                    </div>
                    <h4 className="text-base font-bold text-gray-800 dark:text-white transition group-hover:text-purple-600 dark:group-hover:text-purple-300">
                      {point.title}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 pl-11 leading-normal">
                    {point.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: TIMELINE (5 Cols) */}
        <div className="md:col-span-5 w-full space-y-6">
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-purple-200 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-purple-500 rounded-full inline-block"></span>
              Timeline
            </h3>

            {timeline.map((box, i) => {
              const Icon = box.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-2xl flex gap-4 items-start
                  bg-white/60 dark:bg-white/10 backdrop-blur-xl
                  border border-purple-100/50 dark:border-white/5
                  shadow-xs transition"
                >
                  <div
                    className="p-3 rounded-xl bg-purple-100 dark:bg-purple-950/50 
                    text-purple-600 dark:text-purple-300"
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-purple-600 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/60 px-2.5 py-1 rounded-md">
                      {box.duration}
                    </span>
                    <h4 className="text-base font-bold text-gray-800 dark:text-white mt-3">
                      {box.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                      {box.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* FLOATING LUXURY QUOTE BOX */}
          <motion.div
            variants={item}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, ease: "easeIn" }}
            className="p-5 rounded-2xl bg-linear-to-br from-purple-600 to-indigo-600 text-white shadow-lg text-center"
          >
            <p className="text-sm font-medium opacity-90 italic">
              "Clean code always looks like it was written by someone who
              cares."
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
