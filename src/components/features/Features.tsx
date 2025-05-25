import { Check } from "lucide-react";
import { Container } from "../../utils";

const Features = () => {
  return (
    <section className="my-[100px]">
      <Container>
        <div className="flex shadow-sm min-h-[864px]">
          <div className="flex flex-col max-w-[560px] w-full gap-[73px] bg-[#009688] py-[84px] px-[79px]">
            <h2 className="text-[36px] leading-[100%] font-bold tracking-[-2%] text-white">
              Our Services
            </h2>
            <ul className="flex flex-col items-start gap-[47px] justify-between">
              <li className="flex gap-[13px]">
                <div>
                  <Check color="white" size={22} />
                </div>
                <div className="flex flex-col items-start gap-[15px]">
                  <h3 className="text-[22px] leading-[100%] tracking-[-2%] font-semibold text-white title ">
                    Space for creative ideas
                  </h3>
                  <p className="text-[16px] leading-[100%] tracking-[-2%] font-medium text-white titele">
                    Cyber Square nourishes young aspiring minds to get a clear
                    vision of their ideas. We guide them in analyzing and
                    building their vision and ideas into reality.
                  </p>
                </div>
              </li>
              <li className="flex gap-[13px]">
                <div>
                  <Check color="white" size={22} />
                </div>
                <div className="flex flex-col items-start gap-[15px]">
                  <h3 className="text-[22px] leading-[100%] tracking-[-2%] font-semibold text-white title ">
                    Engaging and fun curriculum
                  </h3>
                  <p className="text-[16px] leading-[100%] tracking-[-2%] font-medium text-white titele">
                    Our goal is to create an engaging system that provides
                    exciting activities so children can understand the
                    programming concepts thoroughly so that they can perform
                    them on their own. With Cyber Square kids have fun while
                    they learn without frustrations.
                  </p>
                </div>
              </li>
              <li className="flex gap-[13px]">
                <div>
                  <Check color="white" size={22} />
                </div>
                <div className="flex flex-col items-start gap-[15px]">
                  <h3 className="text-[22px] leading-[100%] tracking-[-2%] font-semibold text-white title ">
                    Professional teaching methods
                  </h3>
                  <p className="text-[16px] leading-[100%] tracking-[-2%] font-medium text-white titele">
                    We professionals at Cyber Square, have developed an in-depth
                    understanding in how to teach kids and how to code.
                    Moreover, we believe in exposing kids to real programming
                    languages and professional tools.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[81px] py-[79px] px-[68px]">
            <h2 className="text-[36px] leading-[100%] font-bold tracking-[-2%] text-black">
              Payment
            </h2>
            <ul className="flex flex-col items-start  gap-[24px]">
              <li className="text-[18px] leading-[100%] flex items-center gap-[10px] tracking-[-2%] title font-normal text-black">
                <div className="w-[8px] h-[8px] bg-[#009688] rounded-full"></div>
                Space for creative ideas
              </li>
              <li className="text-[18px] leading-[100%] flex items-center gap-[10px] tracking-[-2%] title font-normal text-black">
                <div className="w-[8px] h-[8px] bg-[#009688] rounded-full"></div>
                Engaging and fun curriculum
              </li>
              <li className="text-[18px] leading-[100%] flex items-center gap-[10px] tracking-[-2%] title font-normal text-black">
                <div className="w-[8px] h-[8px] bg-[#009688] rounded-full"></div>
                Professional teaching methods
              </li>
              <li className="text-[18px] leading-[100%] flex items-center gap-[10px] tracking-[-2%] title font-normal text-black">
                <div className="w-[8px] h-[8px] bg-[#009688] rounded-full"></div>
                Learn from AI & Data Science experts
              </li>
              <li className="text-[18px] leading-[100%] flex items-center gap-[10px] tracking-[-2%] title font-normal text-black">
                <div className="w-[8px] h-[8px] bg-[#009688] rounded-full"></div>
                Courses by IIT, NIT, and IIM alumni
              </li>
              <li className="text-[18px] leading-[100%] flex items-center gap-[10px] tracking-[-2%] title font-normal text-black">
                <div className="w-[8px] h-[8px] bg-[#009688] rounded-full"></div>
                UK certification upon completion
              </li>
              <li className="text-[18px] leading-[100%] flex items-center gap-[10px] tracking-[-2%] title font-normal text-black">
                <div className="w-[8px] h-[8px] bg-[#009688] rounded-full"></div>
                Personalized one-to-one training
              </li>
            </ul>
            <button className="bg-[#009688] py-[20px] px-[48px] text-[18px] w-full max-w-[222px] font-bold leading-[100%] trackng-[0%] rounded-[8px] text-white ">Purchase Now</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
