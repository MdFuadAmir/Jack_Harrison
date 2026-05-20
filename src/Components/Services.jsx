// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaRocket,
  FaCogs,
  FaArrowRight,
} from "react-icons/fa";

// Staggered Entry Animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  // Services Data List
  const servicesList = [
    {
      icon: FaLaptopCode,
      title: "Frontend Development",
      desc: "Creating pixel-perfect, fully responsive, and highly interactive user interfaces using React, Tailwind CSS, and Framer Motion.",

      message: `Hi Md Fuad Amir,

I'm interested in your Frontend Development service.

I need a modern, responsive, and interactive UI for my project and would love to discuss the details with you.`,
    },

    {
      icon: FaServer,
      title: "Backend & API Design",
      desc: "Building secure, scalable, and robust server-side architectures with Node.js, Express.js, and efficient MongoDB databases.",

      message: `Hi Md Fuad Amir,

I'm interested in your Backend & API Design service.

I’d like to discuss building a secure and scalable backend architecture for my project.`,
    },

    {
      icon: FaRocket,
      title: "Full-Stack SaaS Web Apps",
      desc: "Developing complete end-to-end full-stack web applications tailored for businesses with seamless state management and clean workflows.",

      message: `Hi Md Fuad Amir,

I'm interested in your Full-Stack SaaS Web App service.

I’d love to discuss building a complete scalable SaaS platform for my business/project.`,
    },

    {
      icon: FaCogs,
      title: "Optimization & Integration",
      desc: "Integrating modern state managers, Axios, TanStack Query, and optimizing apps for maximum speed, SEO, and top performance.",

      message: `Hi Md Fuad Amir,

I'm interested in your Optimization & Integration service.

I’d like help improving performance, SEO, integrations, and overall optimization for my web application.`,
    },
  ];

  const handleDiscussProject = (message) => {
    const el = document.querySelector("#contact");

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        const textarea = document.querySelector('textarea[name="message"]');

        if (textarea) {
          textarea.value = message;

          textarea.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }, 500);
    }
  };

  return (
    <section
      id="services"
      className="py-24 md:py-28 relative flex items-center px-6 md:px-10
      bg-[#f5f3ff] dark:bg-[#12081f] overflow-hidden border-t border-purple-100/10"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-125 h-125 bg-indigo-400/10 blur-[120px] top-10 left-10"></div>
        <div className="absolute w-110 h-110 bg-purple-400/10 blur-[120px] bottom-10 right-10"></div>
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
              <FaCogs />
            </span>
            WHAT I OFFER
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Premium{" "}
            <span className="text-purple-600 dark:text-purple-300">
              Development Services
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-400">
            Providing specialized digital solutions focused on seamless UI/UX,
            robust security, and absolute performance scalability.
          </p>
        </motion.div>

        {/* SERVICES CARDS GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {servicesList.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group
                bg-white/60 dark:bg-white/10 backdrop-blur-xl 
                border border-purple-100/50 dark:border-white/5
                shadow-xs hover:shadow-xl hover:shadow-purple-500/5 transition duration-300"
              >
                {/* Subtle Inner Card Glow on Hover */}
                <div className="absolute -inset-px bg-linear-to-br from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

                <div className="relative space-y-5">
                  {/* ICON CONTAINER */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center
                    bg-purple-100 dark:bg-purple-950/50 
                    text-purple-600 dark:text-purple-300 
                    group-hover:bg-purple-600 group-hover:text-white transition duration-300"
                  >
                    <Icon size={22} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition duration-300">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* BOTTOM LINK EFFECT */}
                <button
                  onClick={() => handleDiscussProject(service.message)}
                  className="relative flex items-center gap-2 text-xs font-bold 
  text-purple-600 dark:text-purple-300 pt-6 mt-4 
  opacity-70 group-hover:opacity-100 
  group-hover:translate-x-2 transition duration-300 cursor-pointer"
                >
                  <span>DISCUSS PROJECT</span>
                  <FaArrowRight size={10} />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
