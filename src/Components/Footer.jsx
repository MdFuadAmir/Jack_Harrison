// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";
import Logo from "../Utils/Logo";
import { useLocation, useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    setTimeout(() => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToSection(id);
      }, 250);
    } else {
      scrollToSection(id);
    }
  };
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/your-username" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/your-username" },
    { icon: FaTwitter, url: "https://twitter.com/your-username" },
    { icon: FaFacebook, url: "https://facebook.com/your-username" },
  ];

  const services = [
    "MERN Development",
    "UI/UX Architecture",
    "SaaS Solutions",
    "Speed Optimization",
  ];
  const navigation = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <footer
      className="relative text-gray-500 dark:text-gray-400 overflow-hidden
      bg-[#ece9f6] dark:bg-[#07020d] border-t border-purple-200/50 dark:border-purple-950/40"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-125 h-62 bg-purple-500/10 dark:bg-purple-600/5 blur-[100px] -top-20 left-1/2 -translate-x-1/2 rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-8">
        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pb-16">
          {/* BRAND COLUMN (5 Columns) */}
          <div className="md:col-span-5 space-y-5 text-left">
            <Logo />
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              Crafting premium full-stack web solutions with precise
              micro-interactions and bulletproof backend optimization.
            </p>
            {/* MODERN SOCIAL BUTTONS */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl transition duration-300
                    bg-white dark:bg-white/3 border border-purple-200/40 dark:border-white/5
                    text-gray-600 dark:text-purple-300/80 hover:text-purple-600 dark:hover:text-white
                    shadow-xs hover:shadow-md hover:shadow-purple-500/5"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS COLUMN (3 Columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black tracking-widest text-gray-800 dark:text-gray-300 uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.toLowerCase());
                    }}
                    className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition duration-300 relative group block w-fit"
                  >
                    {item}

                    <span
                      className="absolute bottom-0 left-0 w-0 h-[1.5px] 
    bg-purple-600 dark:bg-purple-400 
    transition-all duration-300 group-hover:w-full"
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES COLUMN (4 Columns) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black tracking-widest text-gray-800 dark:text-gray-300 uppercase">
              Core Expertise
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500/70" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT & BACK TO TOP */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-purple-200/30 dark:border-white/5 text-xs tracking-wide">
          <p className="text-gray-500 dark:text-gray-500 text-center sm:text-left">
            &copy; {currentYear}{" "}
            <span className="font-bold text-gray-800 dark:text-gray-300">
              Md Fuad Amir
            </span>
            . Engineering Excellence.
          </p>

          {/* FLOATING BACK TO TOP */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer
            bg-white dark:bg-white/3 border border-purple-200/40 dark:border-white/5
            text-purple-600 dark:text-purple-400 text-[11px] font-black uppercase tracking-wider
            shadow-xs hover:shadow-md transition duration-300"
          >
            <span>Scroll to top</span>
            <FaArrowUp size={10} className="animate-pulse" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
