// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message ❌");
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-5 md:px-6 bg-linear-to-br linear from-[#eef2ff] via-[#f0f9ff] to-[#fdf4ff]"
    >
      <div className="max-w-6xl mx-auto">
        {/* TOAST */}

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-indigo-500 text-xs sm:text-sm tracking-widest">
            CONTACT
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-3 md:mt-4">
            Let’s Work Together
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Send me a message and I will reply quickly.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {/* LEFT PREMIUM CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* MAIN CARD */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-7 shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-gray-800">
                Jack Harrison
              </h3>

              <p className="text-indigo-500 mt-2 text-sm">
                Full Stack Web Developer (MERN)
              </p>

              <p className="text-gray-600 mt-5 leading-relaxed">
                I build scalable, modern and high-performance web applications
                with clean UI and strong backend systems.
              </p>

              {/* HIGHLIGHT BADGES */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-indigo-100 text-indigo-600 rounded-full">
                  Fast Delivery
                </span>
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-600 rounded-full">
                  Clean Code
                </span>
                <span className="px-3 py-1 text-xs bg-pink-100 text-pink-600 rounded-full">
                  Modern UI
                </span>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                <MdEmail className="text-indigo-500 text-xl" />
                <span>jackharrison.dev@email.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                <MdLocationOn className="text-indigo-500 text-xl" />
                <span>Available Worldwide (Remote)</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM (FUNCTIONAL) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-7 shadow-md"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />

              <input
                name="user_email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-linear-to-r from-indigo-400 to-purple-400 text-white font-medium shadow-md hover:shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
