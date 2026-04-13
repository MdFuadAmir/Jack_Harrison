// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import Logo from "../Utils/Logo";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br linear from-[#eef2ff] via-[#f0f9ff] to-[#fdf4ff] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >

          {/* LEFT INFO */}
          <div>
            <Logo/>

            <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
              Full Stack Web Developer (MERN) focused on building scalable,
              modern and high-performance web applications with clean UI.
            </p>

            <p className="text-gray-500 mt-4 text-sm">
              © 2026 All Rights Reserved
            </p>
          </div>

          {/* LINKS */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>

            <a href="#home" className="block text-gray-600 hover:text-indigo-500 transition">
              Home
            </a>
            <a href="#about" className="block text-gray-600 hover:text-indigo-500 transition">
              About
            </a>
            <a href="#projects" className="block text-gray-600 hover:text-indigo-500 transition">
              Projects
            </a>
            <a href="#contact" className="block text-gray-600 hover:text-indigo-500 transition">
              Contact
            </a>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Connect With Me
            </h3>

            <div className="flex gap-4 text-xl text-gray-600">
              <a href="#" className="hover:text-indigo-500 transition">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-indigo-500 transition">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-indigo-500 transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-indigo-500 transition">
                <FaTwitter />
              </a>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              Built with React & Tailwind CSS
            </p>
          </div>

        </motion.div>

        {/* BOTTOM LINE */}
        <div className="mt-12 border-t border-white/40 pt-6 text-center text-gray-500 text-sm">
          Designed & Developed by Md Fuad Amir 🚀
        </div>

      </div>
    </footer>
  );
};

export default Footer;