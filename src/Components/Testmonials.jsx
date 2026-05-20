// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";

// Staggered Entry Animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95, x: 30 },
  show: { opacity: 1, scale: 1, x: 0 },
};

const Testimonials = () => {
  // 6-7 Client Testimonials Data
  const reviews = [
    {
      name: "Alex Rivera",
      role: "SaaS Founder, TechFlow",
      text: "Working with Jack was a game-changer for our platform. He delivered a flawless MERN stack app ahead of schedule. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      role: "Product Manager, CreativeCo",
      text: "The responsiveness and fluid UI elements he developed using React and Framer Motion are outstanding. Our conversion rate increased by 25%!",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "CEO, NexaDigital",
      text: "Clean architecture, absolute speed optimization, and robust backend handling. He truly knows how to build production-grade scalable systems.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "E-commerce Owner",
      text: "Incredible attention to detail. The integration with state management and Tailwind CSS was precise. A complete full-stack expert.",
      rating: 5,
    },
    {
      name: "Marcus Brody",
      role: "Founder, FinTech Lab",
      text: "Excellent communication and brilliant problem-solving skills. He turned our complex dashboard requirements into a super fast React app.",
      rating: 5,
    },
    {
      name: "Sophia Martinez",
      role: "Director, LevelUp agency",
      text: "Jack's code quality is exceptionally high. He implemented the secure API structures smoothly and optimized our web app flawlessly.",
      rating: 5,
    },
    {
      name: "Liam O'Connor",
      role: "Startup Founder",
      text: "Highly reliable full-stack developer. The animations are modern and luxury, giving our startup a premium edge over competitors.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-28 relative flex flex-col justify-center px-6 md:px-10
      bg-[#f5f3ff] dark:bg-[#12081f] overflow-hidden border-t border-purple-100/10"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-120 h-120 bg-purple-500/10 blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
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
              <FaQuoteLeft size={12} />
            </span>
            CLIENT FEEDBACK
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            What My{" "}
            <span className="text-purple-600 dark:text-purple-300">
              Clients Say
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-400">
            Real feedback from businesses and founders worldwide regarding
            project execution, speed, and standard delivery.
          </p>
        </motion.div>

        {/* HORIZONTAL SIDE SCROLL CONTAINER (Scrollbar Hidden) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex gap-6 overflow-x-auto pb-8 pt-4 px-2 cursor-grab active:cursor-grabbing
          scroll-smooth snap-x snap-mandatory 
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]  scrollbar-none"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6 }}
              className="min-w-75 sm:min-w-95 max-w-100 p-6 md:p-8 rounded-3xl snap-center flex flex-col justify-between relative
              bg-white/60 dark:bg-white/10 backdrop-blur-xl
              border border-purple-100/50 dark:border-white/5
              shadow-xs hover:shadow-lg transition duration-300 shrink-0"
            >
              {/* QUOTE ICON */}
              <div className="absolute top-6 right-6 text-purple-500/10 dark:text-purple-300/10">
                <FaQuoteLeft size={45} />
              </div>

              <div className="space-y-4">
                {/* RATING STARS */}
                <div className="flex gap-1 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>

                {/* REVIEW TEXT */}
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* USER INFO BOX */}
              <div className="flex items-center gap-3 border-t border-purple-100/30 dark:border-white/5 pt-5 mt-6">
                <div className="text-purple-500 dark:text-purple-300">
                  <FaUserCircle size={36} className="opacity-80" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-gray-800 dark:text-white">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
