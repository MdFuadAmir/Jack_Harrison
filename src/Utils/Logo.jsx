// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Logo = () => {
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.a
      href="#home"
      onClick={handleLogoClick}
      className="inline-flex items-center gap-2 group cursor-pointer select-none"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* LUXURY ICON GRAPHIC ELEMENT */}
      <div className="relative w-8 h-8 flex items-center justify-center rounded-xl bg-purple-600 text-white font-black text-sm shadow-md shadow-purple-600/20 group-hover:bg-purple-700 transition duration-300">
        J{/* DESIGN LAYER EFFECT */}
        <div className="absolute inset-0.5 rounded-[10px] border border-white/20"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
      </div>

      {/* TYPOGRAPHY TEXT */}
      <h1 className="text-lg md:text-xl font-black tracking-wider text-gray-900 dark:text-white uppercase transition duration-300">
        Jack
        <span className="text-purple-600 dark:text-purple-400 font-medium group-hover:text-purple-500 transition duration-300">
          .Harrison
        </span>
      </h1>
    </motion.a>
  );
};

export default Logo;
