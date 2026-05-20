// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt, FaRegFolderOpen } from "react-icons/fa";
import { projectData } from "../assets/projectData";
import { useNavigate } from "react-router";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section
      id="projects"
      className="py-24 md:py-28 relative flex items-center px-6 md:px-10
      bg-[#f5f3ff] dark:bg-[#12081f] overflow-hidden border-t border-purple-100/10"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-120 h-120 bg-indigo-500/10 blur-[130px] bottom-10 right-10"></div>
        <div className="absolute w-100 h-100 bg-purple-500/10 blur-[120px] top-10 left-10"></div>
      </div>

      <div className="relative max-w-6xl mx-auto w-full space-y-12">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="flex items-center justify-center gap-2 text-xs md:text-sm tracking-widest text-purple-600 dark:text-purple-300 font-semibold">
            <span className="text-purple-500">
              <FaRegFolderOpen />
            </span>
            MY WORKS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Recent Showcase{" "}
            <span className="text-purple-600 dark:text-purple-300">
              Projects
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-400">
            A curated list of scalable MERN web applications, SaaS MVPs, and
            modern interactive frontends.
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -6 }}
              className="rounded-3xl overflow-hidden flex flex-col h-full justify-between relative group
              bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-purple-100/50 dark:border-white/5 shadow-xs"
            >
              <div>
                {/* PROJECT IMAGE CONTAINER */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-purple-600 text-white shadow-xs">
                    {project.projectType}
                  </div>
                </div>

                {/* PROJECT CONTENTS */}
                <div className="p-6 space-y-4">
                  {/* TECHNOLOGY TAGS */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm bg-purple-100/50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* TITLE & SUBTITLE */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* BOTTOM CTA BUTTON LINKS */}
              <div className="p-6 pt-0 flex gap-4 border-t border-purple-100/20 dark:border-white/5 mt-4">
                {/* LIVE LINK */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5
                  bg-purple-600 text-white hover:bg-purple-700 shadow-xs transition"
                >
                  <span>Live Preview</span>
                  <FaExternalLinkAlt size={10} />
                </a>

                {/* DETAILS LINK BUTTON */}
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5
                  border border-purple-400 text-purple-600 dark:text-purple-300 
                  hover:bg-purple-100/40 dark:hover:bg-white/10 transition cursor-pointer"
                >
                  <FaCode size={11} />
                  <span>View Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
