import { Container } from "../../utils";
import double from "../../assets/images/double.svg";
const ProgramsHero = () => {
  return (
    <section className="my-[70px]">
      <Container>
        <div>
          <h2 className="text-[40px] leading-[100%] tracking-[0%] font-[700] bold text-center">
            International educational programs
          </h2>

          <p className="text-[20px] leading-[100%] tracking-[0%] bold text-center w-full max-w-[542px] mx-auto mt-[20px] text-[#686868]">
            Al Muamalat Education's international study programs offer an
            in-depth learning experience at leading Islamic financial
            institutions around the world.
          </p>
          <div className="flex gap-[20px] justify-between mt-[60px]">
            <div className="bg-[#F3F8FF] w-full max-w-[50%] py-[36px] px-[33px]">
              <h3 className="text-[24px] leading-[100%] font-[500] bold tracking-[0%] text-center">
                What you’ll learn{" "}
              </h3>
              <ul className="flex flex-col gap-[27px] mt-[32px]">
                <li className="flex items-center gap-[20px] text-[20px] leading-[100%] tracking-[0%] font-[400] text-[#000]">
                  <img
                    src={double}
                    alt="double"
                    className="inline-block mr-[10px]"
                  />
                  Gain a comprehensive understanding of Islamic finance
                  principles and ethics.
                </li>
                <li className="flex items-center gap-[20px] text-[20px] leading-[100%] tracking-[0%] font-[400] text-[#000]">
                  <img
                    src={double}
                    alt="double"
                    className="inline-block mr-[10px]"
                  />
                  Build a portfolio with 10+ real-world projects in Islamic
                  financial services.
                </li>
                <li className="flex items-center gap-[20px] text-[20px] leading-[100%] tracking-[0%] font-[400] text-[#000]">
                  <img
                    src={double}
                    alt="double"
                    className="inline-block mr-[10px]"
                  />
                  Learn to develop and manage Sharia-compliant financial
                  products.
                </li>
                <li className="flex items-center gap-[20px] text-[20px] leading-[100%] tracking-[0%] font-[400] text-[#000]">
                  <img
                    src={double}
                    alt="double"
                    className="inline-block mr-[10px]"
                  />
                  Master key concepts in Islamic banking, investment, and wealth
                  management.
                </li>
                <li className="flex items-center gap-[20px] text-[20px] leading-[100%] tracking-[0%] font-[400] text-[#000]">
                  <img
                    src={double}
                    alt="double"
                    className="inline-block mr-[10px]"
                  />
                  Understand the fundamentals of risk management in Islamic
                  finance.
                </li>
                <li className="flex items-center gap-[20px] text-[20px] leading-[100%] tracking-[0%] font-[400] text-[#000]">
                  <img
                    src={double}
                    alt="double"
                    className="inline-block mr-[10px]"
                  />
                  Develop skills to work as an Islamic finance consultant.
                </li>
              </ul>
            </div>
            <div className="bg-[#F3F8FF] w-full max-w-[50%] py-[36px] px-[33px]">
              <h3 className="text-[24px] leading-[100%] font-[500] bold tracking-[0%] text-center">
                Why should you study at "AL-MUAMALAT"?
              </h3>
              <ul className="flex flex-col gap-[27px] mt-[32px] list-disc">
                <li className="text-[20px] leading-[100%] tracking-[0%] font-[400] bold text-[#000]">Lifetime access</li>
                <li className="text-[20px] leading-[100%] tracking-[0%] font-[400] bold text-[#000]">Video lessons</li>
                <li className="text-[20px] leading-[100%] tracking-[0%] font-[400] bold text-[#000]">Tests</li>
                <li className="text-[20px] leading-[100%] tracking-[0%] font-[400] bold text-[#000]">Projects</li>
                <li className="text-[20px] leading-[100%] tracking-[0%] font-[400] bold text-[#000]">Downloadable resources</li>
                <li className="text-[20px] leading-[100%] tracking-[0%] font-[400] bold text-[#000]">Access via mobile device</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProgramsHero;
