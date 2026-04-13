// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaGitAlt />, name: "Git & GitHub" },
  ];

  return (
    <section
      id="skills"
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
            MY SKILLS
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-3 md:mt-4">
            Technologies I Work With
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            I use modern technologies to build fast, scalable and user-friendly
            web applications.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 rounded-2xl bg-white/60 backdrop-blur-xl shadow-sm hover:shadow-md transition group"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl text-indigo-500 group-hover:scale-110 transition">
                {skill.icon}
              </div>

              <p className="mt-2 md:mt-3 text-xs sm:text-sm md:text-base text-gray-700 font-medium text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs sm:text-sm md:text-base text-gray-600 mt-12 md:mt-16 leading-relaxed"
        >
          I continuously learn and adapt new technologies to stay updated with
          modern web development trends.
        </motion.p>

      </div>
    </section>
  );
};

export default Skills;