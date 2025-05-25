import Consul from "../../components/consul/Consul";
import Course from "../../components/course/Course";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import Information from "../../components/information/Information";
import ProgramsHero from "../../components/programsHero/ProgramsHero";

const Education = () => {
  return (
    <>
      <ProgramsHero />
      <Information />
      <Course />
      <Features />
      <Consul />
      <Footer />
    </>
  );
};

export default Education;
