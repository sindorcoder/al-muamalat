import { Container } from "../../utils";
import TeamCarousel from "../teamCarousel/TeamCarousel";

const Team = () => {
  return (
    <section className="my-[130px]">
      <Container>
        <div className="mb-[44px]">
          <h2 className="text-[40px] leading-[100%] tracking-[0%] text-center bold">
            Our Expert Team
          </h2>
          <p className="text-[17px] w-full max-w-[564px] mx-auto mt-[16px] leading-[100%] tracking-[0%] text-center bold text-[#686868]">
            Our team consists of seasoned professionals with extensive
            experience in Islamic finance and management. Each member brings a
            unique set of skills and expertise.
          </p>
        </div>
      </Container>
        <TeamCarousel />
    </section>
  );
};

export default Team;
