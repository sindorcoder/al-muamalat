import Consul from "../../components/consul/Consul";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Markque from "../../components/markque/Markque";
import Questions from "../../components/questions/Questions";
import Services from "../../components/servic/Services";
import Showcase from "../../components/showCase/Showcase";
import Team from "../../components/team/Team";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Markque />
      <Showcase />
      <Testimonial  />
      <Questions />
      <Consul />
      <Footer />
    </>
  );
};

export default Home;
