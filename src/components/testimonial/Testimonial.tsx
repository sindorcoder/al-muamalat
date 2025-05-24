import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../../utils";

import kirk from "../../assets/images/kirk.png";
import { Pagination } from "swiper/modules";
import "../../../node_modules/swiper/modules/pagination.css";
const Testimonial = () => {
  return (
    <section className="my-[80px] relative">
      <Container>
        <div className="mb-[60px]">
          <h2 className="text-[40px] font-bold bold leading-[100%] tracking-[0%] mb-[16px] text-center">
            What students say
          </h2>
          <p className="text-[17px] leading-[100%] tracking-[0%] w-full max-w-[574px] mx-auto text-center font-medium bold text-[#686868]">
            Our team consists of seasoned professionals with extensive
            experience in Islamic finance and management. Each member brings a
            unique set of skills and expertise.
          </p>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={true}
          loop={true}
          className="testimonial-swiper !p-2"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="shadow-sm bg-[#F6F8F9] rounded-[10px] p-[35px]">
              <p className="text-[17px] leading-[26px] tracking-[0%] font-medium bold text-[#686868]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College.
              </p>
              <div className="flex items-center gap-[16px] mt-[24px]">
                <img src={kirk} alt="Finlay Kirk" />
                <div className="flex flex-col items-start gap-[2px]">
                  <span className="text-[18px] leading-[26px] font-medium bold">
                    Finlay Kirk
                  </span>
                  <span className="text-[12px] font-[400] leading-[26px] tracking-[0%] text-[#686868] bold">
                    Web designer
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-sm bg-[#F6F8F9] rounded-[10px] p-[35px]">
              <p className="text-[17px] leading-[26px] tracking-[0%] font-medium bold text-[#686868]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College.
              </p>
              <div className="flex items-center gap-[16px] mt-[24px]">
                <img src={kirk} alt="Finlay Kirk" />
                <div className="flex flex-col items-start gap-[2px]">
                  <span className="text-[18px] leading-[26px] font-medium bold">
                    Finlay Kirk
                  </span>
                  <span className="text-[12px] font-[400] leading-[26px] tracking-[0%] text-[#686868] bold">
                    Web designer
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-sm bg-[#F6F8F9] rounded-[10px] p-[35px]">
              <p className="text-[17px] leading-[26px] tracking-[0%] font-medium bold text-[#686868]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College.
              </p>
              <div className="flex items-center gap-[16px] mt-[24px]">
                <img src={kirk} alt="Finlay Kirk" />
                <div className="flex flex-col items-start gap-[2px]">
                  <span className="text-[18px] leading-[26px] font-medium bold">
                    Finlay Kirk
                  </span>
                  <span className="text-[12px] font-[400] leading-[26px] tracking-[0%] text-[#686868] bold">
                    Web designer
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-sm bg-[#F6F8F9] rounded-[10px] p-[35px]">
              <p className="text-[17px] leading-[26px] tracking-[0%] font-medium bold text-[#686868]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College.
              </p>
              <div className="flex items-center gap-[16px] mt-[24px]">
                <img src={kirk} alt="Finlay Kirk" />
                <div className="flex flex-col items-start gap-[2px]">
                  <span className="text-[18px] leading-[26px] font-medium bold">
                    Finlay Kirk
                  </span>
                  <span className="text-[12px] font-[400] leading-[26px] tracking-[0%] text-[#686868] bold">
                    Web designer
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-sm bg-[#F6F8F9] rounded-[10px] p-[35px]">
              <p className="text-[17px] leading-[26px] tracking-[0%] font-medium bold text-[#686868]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College.
              </p>
              <div className="flex items-center gap-[16px] mt-[24px]">
                <img src={kirk} alt="Finlay Kirk" />
                <div className="flex flex-col items-start gap-[2px]">
                  <span className="text-[18px] leading-[26px] font-medium bold">
                    Finlay Kirk
                  </span>
                  <span className="text-[12px] font-[400] leading-[26px] tracking-[0%] text-[#686868] bold">
                    Web designer
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonial;
