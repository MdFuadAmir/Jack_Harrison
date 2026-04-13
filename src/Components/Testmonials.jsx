// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      feedback:
        "Jack delivered an outstanding full-stack application. Clean code, great communication, and very fast delivery.",
    },
    {
      name: "Michael Brown",
      role: "Startup Founder",
      feedback:
        "Highly professional developer. The UI/UX quality and performance optimization were beyond expectations.",
    },
    {
      name: "Emily Davis",
      role: "UI/UX Designer",
      feedback:
        "He perfectly converted our design into a pixel-perfect responsive web app. Very detail-oriented.",
    },
  ];

  return (
    <section
      id="testimonials"
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
            TESTIMONIALS
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-3 md:mt-4">
            What Clients Say
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Real feedback from clients I have worked with on different projects.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg transition"
            >
              {/* QUOTE ICON */}
              <div className="text-indigo-400 text-4xl mb-4">“</div>

              {/* FEEDBACK */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {t.feedback}
              </p>

              {/* USER */}
              <div className="mt-6">
                <h4 className="text-base md:text-lg font-semibold text-gray-800">
                  {t.name}
                </h4>
                <p className="text-xs md:text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
