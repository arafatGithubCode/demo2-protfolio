import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Skill from "../components/Skill";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Skill />
      <AboutMe />
      <Projects />
      <Testimonial />
    </>
  );
};

export default Home;
