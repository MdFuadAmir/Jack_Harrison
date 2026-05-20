// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useParams, Link } from "react-router";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCalendarAlt,
  FaClock,
  FaUserTie,
  FaLayerGroup,
} from "react-icons/fa";

import { projectData } from "../assets/projectData";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projectData.find((item) => item.id === parseInt(id));

  if (!project) {
    return (
      <div
        className="min-h-screen flex items-center justify-center
        bg-[#f5f3ff] dark:bg-[#12081f]"
      >
        <h2 className="text-2xl font-bold text-purple-600">
          Project Not Found
        </h2>
      </div>
    );
  }

  return (
    <section
      className="min-h-screen py-24 px-6 md:px-10
      bg-[#f5f3ff] dark:bg-[#12081f] relative overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-120 h-120 bg-purple-500/10 blur-[120px] top-10 left-10"></div>
        <div className="absolute w-120 h-120 bg-indigo-500/10 blur-[120px] bottom-10 right-10"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* BACK BUTTON */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-10
          text-purple-600 dark:text-purple-300
          hover:translate-x-1 transition"
        >
          <FaArrowLeft />
          Back To Home
        </Link>

        {/* PROJECT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl overflow-hidden
          border border-purple-100/20 dark:border-white/10
          shadow-2xl"
        >
          <img
            src={project.featuredImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-3 gap-10 mt-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* TITLE */}
            <div>
              <p
                className="text-sm font-semibold tracking-widest
                text-purple-600 dark:text-purple-300 uppercase"
              >
                {project.projectType}
              </p>

              <h1
                className="text-3xl md:text-5xl font-bold mt-3
                text-gray-800 dark:text-white"
              >
                {project.title}
              </h1>

              <p
                className="mt-4 text-gray-600 dark:text-gray-400
                leading-relaxed"
              >
                {project.description}
              </p>
            </div>

            {/* FEATURES */}
            <div
              className="p-6 rounded-3xl
              bg-white/60 dark:bg-white/10
              backdrop-blur-xl border border-purple-100/30 dark:border-white/5"
            >
              <h2
                className="text-2xl font-bold mb-5
                text-gray-800 dark:text-white"
              >
                Key Features
              </h2>

              <div className="space-y-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 mt-2 rounded-full
                      bg-purple-600"
                    ></div>

                    <p className="text-gray-600 dark:text-gray-400">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TECH STACK */}
            <div
              className="p-6 rounded-3xl
              bg-white/60 dark:bg-white/10
              backdrop-blur-xl border border-purple-100/30 dark:border-white/5"
            >
              <h2
                className="text-2xl font-bold mb-5
                text-gray-800 dark:text-white"
              >
                Technologies Used
              </h2>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl
                    bg-purple-100 dark:bg-purple-950/40
                    text-purple-600 dark:text-purple-300
                    text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* INFO CARD */}
            <div
              className="p-6 rounded-3xl
              bg-white/60 dark:bg-white/10
              backdrop-blur-xl border border-purple-100/30 dark:border-white/5
              space-y-5"
            >
              <h2
                className="text-2xl font-bold
                text-gray-800 dark:text-white"
              >
                Project Info
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaUserTie className="text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Client
                    </p>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {project.clientName}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaClock className="text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Duration
                    </p>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {project.duration}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Completion Date
                    </p>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {project.completionDate}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaLayerGroup className="text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Category
                    </p>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {project.category}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="space-y-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-2xl
                bg-purple-600 hover:bg-purple-700
                text-white font-semibold
                flex items-center justify-center gap-2 transition"
              >
                Live Preview
                <FaExternalLinkAlt size={13} />
              </a>

              <a
                href={project.githubClient}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-2xl
                border border-purple-400
                text-purple-600 dark:text-purple-300
                flex items-center justify-center gap-2
                hover:bg-purple-100/40 dark:hover:bg-white/10 transition"
              >
                Client Repository
                <FaGithub size={15} />
              </a>

              {project.githubServer && (
                <a
                  href={project.githubServer}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-2xl
                  border border-purple-400
                  text-purple-600 dark:text-purple-300
                  flex items-center justify-center gap-2
                  hover:bg-purple-100/40 dark:hover:bg-white/10 transition"
                >
                  Server Repository
                  <FaGithub size={15} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
