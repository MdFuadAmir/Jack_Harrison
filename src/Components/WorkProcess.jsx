// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaSearchPlus,
  FaPaintBrush,
  FaCode,
  FaCheckCircle,
  FaProjectDiagram,
} from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
};

const WorkProcess = () => {
  const steps = [
    {
      id: "01",
      icon: FaSearchPlus,
      title: "Research & Plan",
      desc: "Deep diving into requirements, competitor analysis, and structuring the roadmap.",
    },
    {
      id: "02",
      icon: FaPaintBrush,
      title: "Wireframe & Design",
      desc: "Crafting a luxury, high-fidelity user interface customized strictly to your brand.",
    },
    {
      id: "03",
      icon: FaCode,
      title: "Develop & Build",
      desc: "Breathing life into designs using optimized clean, pixel-perfect MERN React code.",
    },
    {
      id: "04",
      icon: FaCheckCircle,
      title: "QA & Production",
      desc: "Rigorous cross-browser testing, speed optimization, and secure deployment.",
    },
  ];

  return (
    <section
      id="process"
      className="py-24 md:py-28 relative flex items-center px-6 md:px-10
      bg-[#ece9f6] dark:bg-[#07020d] overflow-hidden border-t border-purple-200/40 dark:border-purple-950/40"
    >
      {/* GLOBAL GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-150 h-150 bg-purple-500/5 blur-[130px] -top-20 -left-20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto w-full space-y-20">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="flex items-center justify-center gap-2 text-xs md:text-sm tracking-widest text-purple-600 dark:text-purple-400 font-black uppercase">
            <span className="text-purple-500">
              <FaProjectDiagram />
            </span>
            WORKFLOW
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
            How Magic{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Happens
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-400">
            A precise, development-first methodology aimed at delivering premium
            and high-end scalable web architectures.
          </p>
        </motion.div>

        {/* TIMELINE TRACK GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative"
        >
          {/* HORIZONTAL CONNECTOR LINE  */}
          <div className="hidden md:block absolute top-7 left-10 right-10 h-0.5 bg-purple-200 dark:bg-purple-950/60 z-0 pointer-events-none">
            <div className="w-1/2 h-full bg-purple-500 dark:bg-purple-400 opacity-40 animate-pulse"></div>
          </div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                className="relative flex flex-col items-center md:items-start text-center md:text-left group z-10"
              >
                {/* ICON & STEP NUMBER COMBINATION */}
                <div className="flex items-center justify-center relative mb-6">
                  {/* Outer Glowing Node */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 bg-white dark:bg-white/3 border-2 border-purple-200 dark:border-purple-950 group-hover:border-purple-600 dark:group-hover:border-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-xs group-hover:shadow-lg group-hover:shadow-purple-500/20">
                    <Icon size={18} />
                  </div>

                  {/* Floating Absolute Step ID */}
                  <span className="absolute -top-4 -right-4 text-xs font-black px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 border border-purple-200/40 dark:border-white/5 select-none opacity-80 group-hover:opacity-100 transition duration-300">
                    {step.id}
                  </span>
                </div>

                {/* CONTENT AREA */}
                <div className="space-y-2 px-4 md:px-0">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs md:max-w-none">
                    {step.desc}
                  </p>
                </div>

                {/* BACKGROUND DOT SHADOW INDICATOR FOR ACTIVE NODE */}
                <div className="absolute top-5 left-5 w-4 h-4 bg-purple-500/20 rounded-full blur-xs opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess;
