import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Markque from "../../components/markque/Markque";
import Services from "../../components/services/Services";
import Showcase from "../../components/showCase/Showcase";
import Team from "../../components/team/Team";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Markque />
      <Showcase />
      <Footer />
    </>
  );
};

export default Home;
