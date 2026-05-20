import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is your primary technology stack?",
      answer:
        "I specialize in the MERN Stack. My core expertise includes React for building dynamic frontends, Tailwind CSS for modern responsive styling, Framer Motion for premium fluid animations, and Node.js, Express, and MongoDB for building scalable full-stack backends and REST APIs.",
    },
    {
      question: "Do you offer post-project deployment support?",
      answer:
        "Yes, absolute support is part of my engineering flow. I provide 30 days of free post-delivery support to handle bug fixes, performance monitoring, or minor text/image updates to ensure your platform runs perfectly after launch.",
    },
    {
      question:
        "Can you work with existing codebases or clean up legacy systems?",
      answer:
        "Definitely. I can jump into existing raw React or Node.js structures, optimize network requests using tools like Axios and TanStack Query, implement structured React Hook Form validations, and refactor codebases into modular architectures.",
    },
    {
      question: "How do you handle project management and communication?",
      answer:
        "I follow a strict step-by-step development process. We begin with comprehensive requirement planning, followed by frequent updates via milestones. I communicate clearly throughout the project, ensuring full transparency until final production deployment.",
    },
    {
      question:
        "Are the websites you build fully search engine optimized (SEO)?",
      answer:
        "Yes, all frontends are developed using clean semantic HTML markup, production-grade responsive layouts, and strict asset compression pipelines to guarantee ultra-fast loading times, which is essential for modern search engine ranking algorithms.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-28 relative flex items-center px-6 md:px-10
      bg-[#f5f3ff] dark:bg-[#12081f] overflow-hidden border-t border-purple-100/10"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-120 h-120 bg-purple-500/5 blur-[130px] top-10 right-10 rounded-full"></div>
        <div className="absolute w-100 h-100 bg-indigo-500/5 blur-[120px] bottom-10 left-10 rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto w-full space-y-16">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="flex items-center justify-center gap-2 text-xs md:text-sm tracking-widest text-purple-600 dark:text-purple-300 font-bold uppercase">
            <span className="text-purple-500">
              <FaQuestionCircle />
            </span>
            QUESTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 dark:text-white uppercase tracking-tight">
            Frequently Asked{" "}
            <span className="text-purple-600 dark:text-purple-300">
              Questions
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-400">
            Got questions? Here are clear, upfront answers regarding my
            technical approach, workflows, and production policies.
          </p>
        </motion.div>

        {/* ACCORDION CONTAINER */}
        <div className="space-y-4 w-full">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden transition duration-300
                bg-white/60 dark:bg-white/5 backdrop-blur-xl
                border border-purple-100/50 dark:border-white/5 shadow-xs"
              >
                {/* QUESTION ACCORDION BUTTON */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer select-none"
                >
                  <span
                    className={`text-sm md:text-base font-bold transition duration-300 ${
                      isOpen
                        ? "text-purple-600 dark:text-purple-300"
                        : "text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* CHEVRON ICON WITH ANIMATED ROTATION */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`text-purple-500 dark:text-purple-400 shrink-0`}
                  >
                    <FaChevronDown size={14} />
                  </motion.div>
                </button>

                {/* ANSWER DRAWER LAYER WITH FRAMER MOTION ANIMATION */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-purple-100/20 dark:border-white/5 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
