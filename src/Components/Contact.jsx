// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";
import { toast } from "react-toastify";

const SITE_NAME = "Jack Harrison";
const SUB_TITLE = "Client Inquiry Form";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [loading, setLoading] = useState(false);

  // React Hook Form Setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Updated Axios Form Submit Handler
  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await axios.post("https://compact-server.vercel.app/send-email", {
        ...data,
        siteName: SITE_NAME,
        subtitle: SUB_TITLE,
      });

      toast.success("Message sent successfully 🚀");
      reset();
    } catch {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: FaPhoneAlt, title: "Call Me", value: "+880 1705470131" },
    { icon: FaEnvelope, title: "Email Me", value: "mdfuadamir@gmail.com" },
    { icon: FaMapMarkerAlt, title: "Location", value: "Kushtia, Bangladesh" },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-28 relative flex items-center px-6 md:px-10
      bg-[#f5f3ff] dark:bg-[#12081f] overflow-hidden border-t border-purple-100/10"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-120 h-120 bg-purple-500/10 blur-[130px] bottom-10 left-10"></div>
        <div className="absolute w-100 h-100 bg-indigo-500/10 blur-[120px] top-10 right-10"></div>
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
              <FaEnvelope />
            </span>
            GET IN TOUCH
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Let's Build Something{" "}
            <span className="text-purple-600 dark:text-purple-300">
              Together
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-400">
            Have a project in mind or just want to chat? Drop a message, and
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start"
        >
          {/* LEFT COLUMN: CONTACT INFO */}
          <div className="md:col-span-5 space-y-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ x: 6 }}
                  className="p-5 rounded-2xl flex gap-4 items-center
                  bg-white/60 dark:bg-white/10 backdrop-blur-xl
                  border border-purple-100/50 dark:border-white/5 shadow-xs transition"
                >
                  <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-300">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      {info.title}
                    </h4>
                    <p className="text-sm md:text-base font-semibold text-gray-800 dark:text-white mt-0.5">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <motion.div variants={item} className="md:col-span-7 w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-8 rounded-3xl space-y-5 relative
              bg-white/60 dark:bg-white/10 backdrop-blur-xl
              border border-purple-100/50 dark:border-white/5 shadow-xs"
            >
              {/* NAME FIELD */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-purple-200 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-black/20 
                  border border-purple-100 dark:border-white/5 text-gray-800 dark:text-white
                  focus:outline-hidden focus:border-purple-500 transition duration-300"
                />
                {errors.name && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* EMAIL FIELD */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-purple-200 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-black/20 
                  border border-purple-100 dark:border-white/5 text-gray-800 dark:text-white
                  focus:outline-hidden focus:border-purple-500 transition duration-300"
                />
                {errors.email && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* MESSAGE FIELD */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-purple-200 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  rows="8"
                  placeholder="Hi, I would love to discuss a project..."
                  {...register("message", {
                    required: "Message cannot be empty",
                  })}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-black/20 
                  border border-purple-100 dark:border-white/5 text-gray-800 dark:text-white
                  focus:outline-hidden focus:border-purple-500 transition duration-300 resize-none"
                />
                {errors.message && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2
                bg-purple-600 text-white hover:bg-purple-700 shadow-md shadow-purple-600/10
                disabled:opacity-70 disabled:cursor-not-allowed transition cursor-pointer"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" size={14} />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={12} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
