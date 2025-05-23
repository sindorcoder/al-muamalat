import Marquee from "react-fast-marquee";
import stripe from "../../assets/images/Stripe.svg";
import skrill from "../../assets/images/Skrill.svg";
import westernunion from "../../assets/images/westernunion.svg";
import klarna from "../../assets/images/klarna.svg";
import express from "../../assets/images/express.svg";

const Markque = () => {
  return (
    <div className="flex flex-col gap-[27px]">
      <h2 className="text-[40px] leading-[100%]  tracking-[0%] font-[700] bold text-center mb-[60px]">
        Our Partners and Clients
      </h2>

      <Marquee
        gradient={false}
        direction="right"
        pauseOnHover={true}
        delay={1}
        speed={300}
      >
        <div className="grid grid-cols-6 items-center gap-[21px] justify-between">
          <div className="mx-4 border-[1px] bg-[#F6F8F9] rounded-[10px] py-[36px] px-[44px] w-full  flex items-center justify-center border-[#E1E1E1]">
            <img src={stripe} alt="Stripe" className="h-10" />
          </div>
          <div className="mx-4 border-[1px] bg-[#F6F8F9] rounded-[10px] py-[36px] px-[44px] w-full  flex items-center justify-center border-[#E1E1E1]">
            <img src={skrill} alt="Skrill" className="h-10" />
          </div>
          <div className="mx-4 border-[1px] bg-[#F6F8F9] rounded-[10px] py-[36px] px-[44px] w-full  flex items-center justify-center border-[#E1E1E1]">
            <img src={westernunion} alt="Western Union" className="h-10" />
          </div>
          <div className="mx-4 border-[1px] bg-[#F6F8F9] rounded-[10px] py-[36px] px-[44px] w-full  flex items-center justify-center border-[#E1E1E1]">
            <img src={klarna} alt="Klarna" className="h-10" />
          </div>
          <div className="mx-4 border-[1px] bg-[#F6F8F9] rounded-[10px] py-[36px] px-[44px] w-full  flex items-center justify-center border-[#E1E1E1]">
            <img src={express} alt="American Express" className="h-10" />
          </div>
          <div className="mx-4 border-[1px] bg-[#F6F8F9] rounded-[10px] py-[36px] px-[44px] w-full  flex items-center justify-center border-[#E1E1E1]">
            <img src={klarna} alt="Klarna" className="h-10" />
          </div>
        </div>
      </Marquee>
      <Marquee
        gradient={false}
        pauseOnHover={true}
        speed={300}
      >
        <div className="grid grid-cols-6 items-center gap-[21px] justify-between">
          <div className="mx-4 border-[1px] bg-[#F6F8F9] rounded-[10px] py-[36px] px-[44px] w-full  flex items-center justify-center border-[#E1E1E1]">
            <img src={stripe} alt="Stripe" className="h-10" />
          </div>
          <div className="mx-4 border-[1px] bg-[#F6F8F9] rounded-[10px] py-[36px] px-[44px] w-full  flex items-center justify-center border-[#E1E1E1]">
            <img src={skrill} alt="Skrill" className="h-10" />
          </div>
          <div className="mx-4 border-[1px] bg-[#F6F8F9] rounded-[10px] py-[36px] px-[44px] w-full  flex items-center justify-center border-[#E1E1E1]">
            <img src={westernunion} alt="Western Union" className="h-10" />
          </div>
          <div className="mx-4 border-[1px] bg-[#F6F8F9] rounded-[10px] py-[36px] px-[44px] w-full  flex items-center justify-center border-[#E1E1E1]">
            <img src={klarna} alt="Klarna" className="h-10" />
          </div>
          <div className="mx-4 border-[1px] bg-[#F6F8F9] rounded-[10px] py-[36px] px-[44px] w-full  flex items-center justify-center border-[#E1E1E1]">
            <img src={express} alt="American Express" className="h-10" />
          </div>
          <div className="mx-4 border-[1px] bg-[#F6F8F9] rounded-[10px] py-[36px] px-[44px] w-full  flex items-center justify-center border-[#E1E1E1]">
            <img src={klarna} alt="Klarna" className="h-10" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Markque;
