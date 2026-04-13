import About from "../Components/About";
import Contact from "../Components/Contact";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Services from "../Components/Services";
import Skills from "../Components/Skills";
import Testmonials from "../Components/Testmonials";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Services/>
            <Testmonials/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;