import About from "../Components/About";
import Contact from "../Components/Contact";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Services from "../Components/Services";
import Skills from "../Components/Skills";
import Testmonials from "../Components/Testmonials";
import WorkProcess from "../Components/WorkProcess";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Services />
      <WorkProcess />
      <Projects />
      <Testmonials />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
