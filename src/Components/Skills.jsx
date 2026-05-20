// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaTools,
  FaFire,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFramer,
  SiAxios,
  SiReactquery,
  SiGit,
  SiPostman,
  SiVite,
  SiFirebase,
} from "react-icons/si";

// Staggered Entry Animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  // 1. Tech Stack (MERN focused)
  const techStack = [
    { name: "React", icon: FaReact, color: "hover:text-[#61dafb]" },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "hover:text-[#38bdf8]",
    },
    { name: "Framer Motion", icon: SiFramer, color: "hover:text-[#ff0055]" }, // এখানে আপডেট করা হয়েছে
    { name: "Node.js", icon: FaNodeJs, color: "hover:text-[#339933]" },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "hover:text-[#828282] dark:hover:text-white",
    },
    { name: "MongoDB", icon: SiMongodb, color: "hover:text-[#47a248]" },
    { name: "Firebase", icon: SiFirebase, color: "hover:text-[#ffca28]" },
    {
      name: "TanStack Query",
      icon: SiReactquery,
      color: "hover:text-[#ff4154]",
    },
  ];

  // 2. Core Dev Tools / Libraries
  const tools = [
    { name: "Axios", icon: SiAxios, color: "hover:text-[#5a29e4]" },
    {
      name: "React Hook Form",
      icon: FaCheckCircle,
      color: "hover:text-[#ec5990]",
    },
    { name: "Git & GitHub", icon: SiGit, color: "hover:text-[#f05032]" },
    { name: "Postman", icon: SiPostman, color: "hover:text-[#ff6c37]" },
    { name: "Vite", icon: SiVite, color: "hover:text-[#646cff]" },
  ];

  return (
    <section
      id="skills"
      className="py-24 md:py-28 relative flex items-center px-6 md:px-10
      bg-[#f5f3ff] dark:bg-[#12081f] overflow-hidden border-t border-purple-100/10"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-120 h-120 bg-purple-500/10 blur-[130px] top-10 right-10"></div>
        <div className="absolute w-100 h-100 bg-indigo-500/10 blur-[120px] bottom-10 left-10"></div>
      </div>

      <div className="relative max-w-6xl mx-auto w-full space-y-16">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="flex items-center justify-center gap-2 text-xs md:text-sm tracking-widest text-purple-600 dark:text-purple-300 font-semibold">
            <span className="text-purple-500">
              <FaCode />
            </span>
            MY KNOWLEDGE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Skills &{" "}
            <span className="text-purple-600 dark:text-purple-300">
              Tools Arsenal
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-400">
            The modern web technologies, libraries, and design systems I
            implement daily to build high-performance web applications.
          </p>
        </motion.div>

        {/* SKILLS CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT: CORE TECHNOLOGIES */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-purple-200 flex items-center gap-2 px-2">
              <FaFire className="text-purple-500 animate-pulse" /> Core
              Technologies
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStack.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={i}
                    variants={item}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-3
                    bg-white/60 dark:bg-white/10 backdrop-blur-xl
                    border border-purple-100/50 dark:border-white/5
                    shadow-xs transition duration-300 group cursor-pointer"
                  >
                    <div
                      className={`text-3xl text-purple-600 dark:text-purple-300 transition duration-300 ${tech.color}`}
                    >
                      <Icon />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT: COMPLEMENTARY TOOLS & LIBS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-purple-200 flex items-center gap-2 px-2">
              <FaTools className="text-purple-500" /> Professional Tools
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={i}
                    variants={item}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-3
                    bg-white/60 dark:bg-white/10 backdrop-blur-xl
                    border border-purple-100/50 dark:border-white/5
                    shadow-xs transition duration-300 group cursor-pointer"
                  >
                    <div
                      className={`text-3xl text-purple-600 dark:text-purple-300 transition duration-300 ${tool.color}`}
                    >
                      <Icon />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition">
                      {tool.name}
                    </span>
                  </motion.div>
                );
              })}

              {/* FLOATING DECORATIVE EXPERIENCE BOX */}
              <motion.div
                variants={item}
                className="col-span-2 sm:col-span-1 p-5 rounded-2xl flex flex-col items-center justify-center text-center
                bg-linear-to-br from-purple-600 to-indigo-600 text-white shadow-md"
              >
                <h4 className="text-2xl font-black">100%</h4>
                <p className="text-[11px] font-medium opacity-90 mt-1 uppercase tracking-wider">
                  Dedicated To Code Quality
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
