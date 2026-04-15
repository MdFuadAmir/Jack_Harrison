import { Link } from "react-scroll";
const Logo = () => {
  return (
    <Link
      to="home"
      smooth={true}
      duration={500}
      className="flex items-center gap-2 text-2xl font-semibold text-gray-700 tracking-wide cursor-pointer hover:scale-105 duration-500"
    >
      
      <p>
        Jack Harrison
        <span className="text-indigo-500 animate-pulse">.</span>
      </p>
    </Link>
  );
};

export default Logo;
