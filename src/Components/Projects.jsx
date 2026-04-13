// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import image from "../assets/project.png"
const Projects = () => {
  const projects = [
    {
      title: "Full Stack Portfolio Website",
      desc: "A modern and responsive full stack portfolio website built for personal branding with smooth UI, animations, and optimized performance.",
      tech: ["React", "Node", "MongoDB"],
      img: image,
      live: "#",
      code: "#",
    },
    {
      title: "Digital Marketer Portfolio",
      desc: "A clean and minimal portfolio website for a digital marketer showcasing services, campaigns, and client results in a structured layout.",
      tech: ["React", "Tailwind", "Framer Motion"],
      img: image,
      live: "#",
      code: "#",
    },
    {
      title: "UI/UX Designer Portfolio",
      desc: "A visually appealing UI/UX portfolio highlighting design skills, case studies, and creative interface concepts with modern aesthetics.",
      tech: ["React", "CSS", "Figma Integration"],
      img: image,
      live: "#",
      code: "#",
    },
    {
      title: "Digital Marketing Landing Page",
      desc: "A high-converting landing page designed for digital marketing services with strong CTA sections and modern layout structure.",
      tech: ["Next.js", "Tailwind", "SEO"],
      img: image,
      live: "#",
      code: "#",
    },
    {
      title: "Photography Portfolio Website",
      desc: "A stunning photography portfolio showcasing visual storytelling, image gallery system, and elegant fullscreen presentation layout.",
      tech: ["React", "Gallery UI", "Framer Motion"],
      img: image,
      live: "#",
      code: "#",
    },
    {
      title: "Graphic Designer Portfolio",
      desc: "A creative graphic designer portfolio featuring branding works, posters, and visual identity projects with modern grid presentation.",
      tech: ["React", "Tailwind", "Design System"],
      img: image,
      live: "#",
      code: "#",
    },
  ];

  return (
    <section
      id="projects"
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
            MY WORK
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-3 md:mt-4">
            Projects I Have Built
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            A selection of real-world projects focused on performance, usability
            and modern design.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >

              {/* IMAGE */}
              <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-5 md:p-6">

                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2 md:mt-3 leading-relaxed">
                  {project.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs md:text-sm px-2 md:px-3 py-1 rounded-full bg-indigo-100 text-indigo-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-2 md:gap-3 mt-4 md:mt-6">

                  <a
                    href={project.live}
                    className="px-3 md:px-4 py-2 text-xs sm:text-sm rounded-full bg-linear-to-r from-indigo-400 to-purple-400 text-white shadow hover:shadow-md transition"
                  >
                    Live
                  </a>

                  <a
                    href={project.code}
                    className="px-3 md:px-4 py-2 text-xs sm:text-sm rounded-full border border-indigo-300 text-indigo-500 hover:bg-indigo-50 transition"
                  >
                    Code
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* FOOTER NOTE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs sm:text-sm md:text-base text-gray-600 mt-12 md:mt-16 leading-relaxed"
        >
          More projects are continuously being developed to improve skills and
          explore new technologies.
        </motion.p>

      </div>
    </section>
  );
};

export default Projects;