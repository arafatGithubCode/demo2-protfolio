import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Skill from "../components/Skill";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Skill />
      <AboutMe />
      <Projects />
    </>
  );
};

export default Home;
