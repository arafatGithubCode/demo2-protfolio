import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Skill from "../components/Skill";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Skill />
      <AboutMe />
      <Projects />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
