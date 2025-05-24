import { Swiper, SwiperSlide } from "swiper/react";
import "./teamCarousel.css";
import "swiper/swiper-bundle.css";

import melo from "../../assets/images/Melo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Container } from "../../utils";
import { A11y, Pagination } from "swiper/modules";
import "../../../node_modules/swiper/modules/pagination.css";

const TeamCarousel = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, A11y]}
        slidesPerView={"auto"}
        initialSlide={2}
        centeredSlides={true}
        pagination={true}
        autoplay={{
          delay: 2700,
        }}
        loop={true}
        className="testimonial-swiper"
      >
        <Container>
          <SwiperSlide className="slideTeam">
            <div className="bg-[#D2E6E4] rounded-[10px] flex items-center py-[35px] px-[81px] justify-between gap-[60px]">
              <div className="w-full  h-full max-w-[300px]">
                <img
                  src={melo}
                  width={"100%"}
                  height={"100%"}
                  alt="Dr. Mezbah Uddin Ahmed"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-between gap-[36px]">
                <h2 className="text-[28px] font-[700] leading-[100%] tracking-[0%] bold text-[#141B34]">
                  Dr. Mezbah Uddin Ahmed
                </h2>
                <p className="text-[22px] font-[400] leading-[100%] tracking-[0%] bold text-[#141B34]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <div className="flex items-center justify-between gap-[40px]">
                  <Facebook color="#141B34"  />
                  <Instagram color="#141B34" />
                  <Twitter color="#141B34" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slideTeam">
            <div className="bg-[#D2E6E4] rounded-[10px] flex items-center py-[35px] px-[81px] justify-between gap-[60px]">
              <div className="w-full  h-full max-w-[300px]">
                <img
                  src={melo}
                  width={"100%"}
                  height={"100%"}
                  alt="Dr. Mezbah Uddin Ahmed"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-between gap-[36px]">
                <h2 className="text-[28px] font-[700] leading-[100%] tracking-[0%] bold text-[#141B34]">
                  Dr. Mezbah Uddin Ahmed
                </h2>
                <p className="text-[22px] font-[400] leading-[100%] tracking-[0%] bold text-[#141B34]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <div className="flex items-center justify-between gap-[40px]">
                  <Facebook color="#141B34" />
                  <Instagram color="#141B34" />
                  <Twitter color="#141B34" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slideTeam">
            <div className="bg-[#D2E6E4] rounded-[10px] flex items-center py-[35px] px-[81px] justify-between gap-[60px]">
              <div className="w-full  h-full max-w-[300px]">
                <img
                  src={melo}
                  width={"100%"}
                  height={"100%"}
                  alt="Dr. Mezbah Uddin Ahmed"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-between gap-[36px]">
                <h2 className="text-[28px] font-[700] leading-[100%] tracking-[0%] bold text-[#141B34]">
                  Dr. Mezbah Uddin Ahmed
                </h2>
                <p className="text-[22px] font-[400] leading-[100%] tracking-[0%] bold text-[#141B34]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <div className="flex items-center justify-between gap-[40px]">
                  <Facebook color="#141B34" />
                  <Instagram color="#141B34" />
                  <Twitter color="#141B34" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Container>
      </Swiper>
    </div>
  );
};

export default TeamCarousel;
