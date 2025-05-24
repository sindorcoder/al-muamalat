import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../../utils";
import saly from "../../assets/images/Saly.svg";
import { MoveUpRight, Star } from "lucide-react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "../../../node_modules/swiper/modules/pagination.css";
import "swiper/swiper-bundle.css";

const Course = () => {
  return (
    <section className="my-[45px] relative">
      <Container>
        <div className="relative">
          <h2 className="text-[40px] leading-[100%] tracking-[0%] text-center bold">
            Most Popular Course
          </h2>
          <p className="text-[20px] leading-[100%] tracking-[0%] text-center w-full max-w-[574px] mx-auto mt-[10px] mb-[60px] text-[#686868] bold">
            Expert guidance for managing funds in alignment with Islamic
            principles, helping you make informed, halal investment decisions.
          </p>

          <Swiper
            modules={[Pagination, A11y, Navigation]}
            spaceBetween={40}
            pagination={true}
            navigation={true}
            slidesPerView={3}
            loop={true}
            className="course-swiper !p-2"
          >
            <SwiperSlide>
              <div className="p-[16px] shadow-sm bg-[#ffffff] rounded-[24px]">
                <div className="bg-[#FF7F5080] rounded-[12px] min-h-[210px] relative">
                  <img
                    src={saly}
                    width={100}
                    height={100}
                    className="w-full h-full"
                    loading="lazy"
                    alt="Various versions have evolved daf"
                  />
                  <span className="absolute top-[15px] text left-[15px] bg-[#FFFFFF] backdrop-opacity-60 text-[16px] leading-[24px] text-[#1B1D1F] w-[78px] h-[36px] flex items-center justify-center rounded-[6px]">
                    Design
                  </span>
                </div>
                <div className="flex flex-col gap-[16px] mt-[16px]">
                  <h3 className="text-[22px] leading-[28px] tracking-[0%] font-medium text-[#363A3D] text">
                    Various versions have evolved ...
                  </h3>
                  <div className="flex items-center gap-[10px]">
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <span className="text-[20px] leading-[28px] tracking-[0%] text text-[#52565C] font-[400]">
                      (20)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[24px] leading-[32px] tracking-[0.2%] font-semibold text-[#1B1D1F] text">
                      $ 500
                    </span>
                    <button className="bg-[#00968833] hover:bg-[#009688] transition-colors w-[54px] flex items-center justify-center h-[54px] p-[10px] rounded-full">
                      <MoveUpRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-[16px] shadow-sm bg-[#ffffff] rounded-[24px]">
                <div className="bg-[#FF7F5080] rounded-[12px] min-h-[210px] relative">
                  <img
                    src={saly}
                    width={100}
                    height={100}
                    className="w-full h-full"
                    loading="lazy"
                    alt="Various versions have evolved daf"
                  />
                  <span className="absolute top-[15px] text left-[15px] bg-[#FFFFFF] backdrop-opacity-60 text-[16px] leading-[24px] text-[#1B1D1F] w-[78px] h-[36px] flex items-center justify-center rounded-[6px]">
                    Design
                  </span>
                </div>
                <div className="flex flex-col gap-[16px] mt-[16px]">
                  <h3 className="text-[22px] leading-[28px] tracking-[0%] font-medium text-[#363A3D] text">
                    Various versions have evolved ...
                  </h3>
                  <div className="flex items-center gap-[10px]">
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <span className="text-[20px] leading-[28px] tracking-[0%] text text-[#52565C] font-[400]">
                      (20)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[24px] leading-[32px] tracking-[0.2%] font-semibold text-[#1B1D1F] text">
                      $ 500
                    </span>
                    <button className="bg-[#00968833] hover:bg-[#009688] transition-colors w-[54px] flex items-center justify-center h-[54px] p-[10px] rounded-full">
                      <MoveUpRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-[16px] shadow-sm bg-[#ffffff] rounded-[24px]">
                <div className="bg-[#FF7F5080] rounded-[12px] min-h-[210px] relative">
                  <img
                    src={saly}
                    width={100}
                    height={100}
                    className="w-full h-full"
                    loading="lazy"
                    alt="Various versions have evolved daf"
                  />
                  <span className="absolute top-[15px] text left-[15px] bg-[#FFFFFF] backdrop-opacity-60 text-[16px] leading-[24px] text-[#1B1D1F] w-[78px] h-[36px] flex items-center justify-center rounded-[6px]">
                    Design
                  </span>
                </div>
                <div className="flex flex-col gap-[16px] mt-[16px]">
                  <h3 className="text-[22px] leading-[28px] tracking-[0%] font-medium text-[#363A3D] text">
                    Various versions have evolved ...
                  </h3>
                  <div className="flex items-center gap-[10px]">
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <span className="text-[20px] leading-[28px] tracking-[0%] text text-[#52565C] font-[400]">
                      (20)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[24px] leading-[32px] tracking-[0.2%] font-semibold text-[#1B1D1F] text">
                      $ 500
                    </span>
                    <button className="bg-[#00968833] hover:bg-[#009688] transition-colors w-[54px] flex items-center justify-center h-[54px] p-[10px] rounded-full">
                      <MoveUpRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-[16px] shadow-sm bg-[#ffffff] rounded-[24px]">
                <div className="bg-[#FF7F5080] rounded-[12px] min-h-[210px] relative">
                  <img
                    src={saly}
                    width={100}
                    height={100}
                    className="w-full h-full"
                    loading="lazy"
                    alt="Various versions have evolved daf"
                  />
                  <span className="absolute top-[15px] text left-[15px] bg-[#FFFFFF] backdrop-opacity-60 text-[16px] leading-[24px] text-[#1B1D1F] w-[78px] h-[36px] flex items-center justify-center rounded-[6px]">
                    Design
                  </span>
                </div>
                <div className="flex flex-col gap-[16px] mt-[16px]">
                  <h3 className="text-[22px] leading-[28px] tracking-[0%] font-medium text-[#363A3D] text">
                    Various versions have evolved ...
                  </h3>
                  <div className="flex items-center gap-[10px]">
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <span className="text-[20px] leading-[28px] tracking-[0%] text text-[#52565C] font-[400]">
                      (20)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[24px] leading-[32px] tracking-[0.2%] font-semibold text-[#1B1D1F] text">
                      $ 500
                    </span>
                    <button className="bg-[#00968833] hover:bg-[#009688] transition-colors w-[54px] flex items-center justify-center h-[54px] p-[10px] rounded-full">
                      <MoveUpRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-[16px] shadow-sm bg-[#ffffff] rounded-[24px]">
                <div className="bg-[#FF7F5080] rounded-[12px] min-h-[210px] relative">
                  <img
                    src={saly}
                    width={100}
                    height={100}
                    className="w-full h-full"
                    loading="lazy"
                    alt="Various versions have evolved daf"
                  />
                  <span className="absolute top-[15px] text left-[15px] bg-[#FFFFFF] backdrop-opacity-60 text-[16px] leading-[24px] text-[#1B1D1F] w-[78px] h-[36px] flex items-center justify-center rounded-[6px]">
                    Design
                  </span>
                </div>
                <div className="flex flex-col gap-[16px] mt-[16px]">
                  <h3 className="text-[22px] leading-[28px] tracking-[0%] font-medium text-[#363A3D] text">
                    Various versions have evolved ...
                  </h3>
                  <div className="flex items-center gap-[10px]">
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <Star className="inline text-[#FFB800] w-[20px] h-[20px]" />
                    <span className="text-[20px] leading-[28px] tracking-[0%] text text-[#52565C] font-[400]">
                      (20)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[24px] leading-[32px] tracking-[0.2%] font-semibold text-[#1B1D1F] text">
                      $ 500
                    </span>
                    <button className="bg-[#00968833] hover:bg-[#009688] transition-colors w-[54px] flex items-center justify-center h-[54px] p-[10px] rounded-full">
                      <MoveUpRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Course;
