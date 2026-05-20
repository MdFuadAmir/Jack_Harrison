// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Utils/Logo";
import DarkMood from "../Utils/DarkMood";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // HIRE MESSAGE
  const hireMessage = `Hi Md Fuad Amir,

I'm interested in working with you on a web development project.

I'd love to discuss the project details, timeline, and how we can build something impactful together.`;

  // SCROLL FUNCTION
  const scrollToSection = (id) => {
    const cleanId = id.replace("#", "");

    setTimeout(() => {
      const el = document.getElementById(cleanId);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  // NORMAL NAVIGATION
  const handleNav = (id) => {
    setActive(id);
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToSection(id);
      }, 250);
    } else {
      scrollToSection(id);
    }
  };

  // HIRE BUTTON FUNCTION
  const handleHire = (id, message = "") => {
    setActive(id);
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToSection(id);

        setTimeout(() => {
          const textarea = document.querySelector('textarea[name="message"]');

          if (textarea) {
            textarea.value = message;

            textarea.dispatchEvent(new Event("input", { bubbles: true }));
          }
        }, 500);
      }, 250);
    } else {
      scrollToSection(id);

      setTimeout(() => {
        const textarea = document.querySelector('textarea[name="message"]');

        if (textarea) {
          textarea.value = message;

          textarea.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }, 500);
    }
  };

  // LOGO CLICK
  const goHome = () => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 200);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
      backdrop-blur-xl
      bg-[#f5f3ff]/80 dark:bg-[#12081f]/80
      border-b border-purple-200/40 dark:border-purple-500/20
      transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div onClick={goHome} className="cursor-pointer">
          <Logo />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNav(link.href)}
              className="relative text-sm font-medium transition"
            >
              <span
                className={`transition ${
                  active === link.href
                    ? "text-purple-700 dark:text-purple-300"
                    : "text-gray-700 dark:text-purple-100 hover:text-purple-600 dark:hover:text-purple-300"
                }`}
              >
                {link.name}
              </span>

              {active === link.href && (
                <motion.span
                  className="absolute left-0 -bottom-1 w-full h-0.5
                  bg-purple-600 rounded-full"
                  layoutId="active-nav"
                />
              )}
            </a>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <DarkMood />

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => handleHire("#contact", hireMessage)}
            className="hidden md:block px-5 py-2 rounded-full
            bg-purple-700 dark:bg-purple-500
            text-white text-sm font-medium
            hover:opacity-90 transition"
          >
            Hire Me
          </a>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-xl text-purple-700 dark:text-purple-300"
            onClick={() => setIsOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-[75%] max-w-sm h-fit
              bg-[#f5f3ff] dark:bg-[#12081f]
              shadow-2xl z-50 p-6 flex flex-col lg:hidden rounded-bl-2xl"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-8">
                <div onClick={goHome} className="cursor-pointer">
                  <Logo />
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-purple-700 dark:text-purple-300"
                >
                  <FaTimes />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`text-lg font-medium transition ${
                      active === link.href
                        ? "text-purple-700 dark:text-purple-300"
                        : "text-gray-700 dark:text-purple-100"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-6 border-t border-purple-200 dark:border-purple-500/20">
                <a
                  href="#contact"
                  onClick={() => handleHire("#contact", hireMessage)}
                  className="block text-center px-5 py-3 rounded-xl
                  bg-purple-700 dark:bg-purple-500
                  text-white font-medium"
                >
                  Let’s Work Together
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
