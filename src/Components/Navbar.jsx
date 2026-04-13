import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Utils/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills & Expertise", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-xl bg-linear-to-r from-[#eef2ff]/80 via-[#f0f9ff]/80 to-[#fdf4ff]/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-600 text-sm lg:text-base transition duration-300 hover:text-indigo-500 relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="mailto:mdfuadamir@gmail.com?subject=Project Inquiry&body=Hello Fuad Amir, I would like to discuss a project with you."
            className="px-6 py-2 rounded-full bg-linear-to-r from-indigo-400 to-purple-400 text-white text-sm shadow-md hover:shadow-lg transition duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-gray-700 text-xl">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-6"
          >
            <div className="flex flex-col gap-5 bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 text-base hover:text-indigo-500 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
