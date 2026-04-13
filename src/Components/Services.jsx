// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Full Stack Development",
      desc: "Building scalable, high-performance MERN applications with clean architecture and modern UI systems.",
    },
    {
      title: "Frontend Engineering",
      desc: "Responsive and accessible interfaces using React, Tailwind CSS, and smooth micro-interactions.",
    },
    {
      title: "Backend Development",
      desc: "Secure REST APIs, authentication systems, and optimized database architecture for real-world applications.",
    },
    {
      title: "UI/UX Implementation",
      desc: "Translating modern designs into pixel-perfect, production-ready user interfaces with attention to detail.",
    },
    {
      title: "Performance Optimization",
      desc: "Improving speed, SEO, and Core Web Vitals for better user experience and search ranking.",
    },
    {
      title: "Deployment & Maintenance",
      desc: "CI/CD setup, cloud deployment, and long-term maintenance for scalable production systems.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-28 px-5 md:px-6 bg-linear-to-br linear from-[#eef2ff] via-[#f0f9ff] to-[#fdf4ff]"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-indigo-500 text-xs sm:text-sm tracking-widest">
            SERVICES
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-3 md:mt-4">
            Professional Solutions
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            I provide modern web development services focused on performance,
            scalability, and premium user experience.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* ICON DOT */}
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></div>
              </div>

              {/* TITLE */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm md:text-base text-gray-600 mt-3 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
