import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Container } from "../../utils";

import people from "../../assets/images/people.png";
import ellipse from "../../assets/images/ellipses.png";
import rates from "../../assets/images/rate.svg";
const Hero = () => {
  return (
    <div className="bg-[#009688] py-2">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2700,
        }}
        loop={true}
      >
        <SwiperSlide>

          <Container>
            
            <div className="flex items-center justify-between gap-[50px]">
              <div>
                <span className="text-[17px] py-[10px] px-[25px] bg-white rounded-[10px] font-[500] leading-[100%] tracking-[2%]">
                  Seeking Knowledge is an Obligation in Islam
                </span>
                <h1 className="text-[58px] my-[40px] leading-[70px] tracking-[0%] font-[700] title text-white w-full max-w-[753px]">
                  Enhance Your Understanding of Islamic Ethics with Al-Muamalat
                </h1>
                <div className="relative flex items-center gap-[130px]">
                  <button className="text-[16px] cursor-pointer leading-[100%] tracking-[2%] font-[500] text uppercase bg-[#FD661F] text-white rounded-[10px] py-[20px] px-[41px] ">
                    Students’ opnion
                  </button>
                  <div className="absolute   left-[220px] flex items-center ">
                    <img src={ellipse} alt="people" />
                  </div>
                  <img src={rates} alt="5 rate by people comment" />
                </div>
              </div>
              <div>
                <img src={people} alt="People of Student" />
              </div>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <div className="flex items-center justify-between gap-[50px]">
              <div>
                <span className="text-[17px] py-[10px] px-[25px] bg-white rounded-[10px] font-[500] leading-[100%] tracking-[2%]">
                  Seeking Knowledge is an Obligation in Islam
                </span>
                <h1 className="text-[58px] my-[40px] leading-[70px] tracking-[0%] font-[700] title text-white w-full max-w-[753px]">
                  Enhance Your Understanding of Islamic Ethics with Al-Muamalat
                </h1>
                <div className="relative flex items-center gap-[130px]">
                  <button className="text-[16px] cursor-pointer leading-[100%] tracking-[2%] font-[500] text uppercase bg-[#FD661F] text-white rounded-[10px] py-[20px] px-[41px] ">
                    Students’ opnion
                  </button>
                  <div className="absolute   left-[220px] flex items-center ">
                    <img src={ellipse} alt="people" />
                  </div>
                  <img src={rates} alt="5 rate by people comment" />
                </div>
              </div>
              <div>
                <img src={people} alt="People of Student" />
              </div>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <div className="flex items-center justify-between gap-[50px]">
              <div>
                <span className="text-[17px] py-[10px] px-[25px] bg-white rounded-[10px] font-[500] leading-[100%] tracking-[2%]">
                  Seeking Knowledge is an Obligation in Islam
                </span>
                <h1 className="text-[58px] my-[40px] leading-[70px] tracking-[0%] font-[700] title text-white w-full max-w-[753px]">
                  Enhance Your Understanding of Islamic Ethics with Al-Muamalat
                </h1>
                <div className="relative flex items-center gap-[130px]">
                  <button className="text-[16px] cursor-pointer leading-[100%] tracking-[2%] font-[500] text uppercase bg-[#FD661F] text-white rounded-[10px] py-[20px] px-[41px] ">
                    Students’ opnion
                  </button>
                  <div className="absolute   left-[220px] flex items-center ">
                    <img src={ellipse} alt="people" />
                  </div>
                  <img src={rates} alt="5 rate by people comment" />
                </div>
              </div>
              <div>
                <img src={people} alt="People of Student" />
              </div>
            </div>
          </Container>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
