import { Container } from "../../utils";
import ShowCaseCarousel from "../showCaseCarousel/ShowCaseCarousel";

const Showcase = () => {
  return (
    <section className="mt-[90px]">
      <Container>
        <div className="mb-[71px]">
          <h3 className="text-[40px] bold tracking-[0%] leading-[100%] text-center ">
            Our Media
          </h3>
          <p className="text-[17px] tracking-[0%] leading-[100%] text-center w-full max-w-[574px] mx-auto mt-[16px] font-[500]">
            Our team consists of seasoned professionals with extensive
            experience in Islamic finance and management. Each member brings a
            unique set of skills and expertise.
          </p>
        </div>
        <ShowCaseCarousel />
      </Container>
    </section>
  );
};

export default Showcase;
