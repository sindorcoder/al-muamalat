import { Swiper, SwiperSlide } from "swiper/react";
import office from "../../assets/images/office.png";
import officeBoy from "../../assets/images/officeBoy.png";
import libraryPeople from "../../assets/images/libraryPeople.png";
import { Play } from "lucide-react";
import { A11y, Navigation } from "swiper/modules";
import "../../../node_modules/swiper/modules/navigation.css";

const ShowCaseCarousel = () => {
  return (
    <div className="relative">
        <h2 className="text-[35px] mb-[30px] leading-[100%] bold font-medium">
          Our media showcase
        </h2>
      <Swiper
        modules={[Navigation, A11y]}
        navigation={true}
        spaceBetween={40}
        slidesPerView={3}
        className="showCaseSwiper"
      >
        <SwiperSlide>
          <div
            className="flex items-end p-[33px]"
            style={{
              backgroundImage: `url(${office})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              maxWidth: "380px",
              minHeight: "516px",
            }}
          >
            <div className="flex items-center justify-between gap-5 w-full">
              <span className="text-[20px] w-full max-w-[192px] leading-[100%] font-bold bold tracking-[0%] text-white">
                Why Islamic finance?
              </span>
              <span className="w-full max-w-[70px] bg-[#fff] hover:bg-[#2198FF]  transition-colors cursor-pointer rounded-full min-h-[70px] flex items-center justify-center">
                <Play color="black" size={30} />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-end p-[33px]"
            style={{
              backgroundImage: `url(${officeBoy})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              maxWidth: "380px",
              minHeight: "516px",
            }}
          >
            <div className="flex items-center justify-between gap-5 w-full">
              <span className="text-[20px] w-full max-w-[192px] leading-[100%] font-bold bold tracking-[0%] text-white">
                What makes Islamic finance unique?
              </span>
              <span className="w-full max-w-[70px] bg-[#fff] hover:bg-[#2198FF]  transition-colors cursor-pointer rounded-full min-h-[70px] flex items-center justify-center">
                <Play color="black" size={30} />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-end p-[33px]"
            style={{
              backgroundImage: `url(${libraryPeople})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              maxWidth: "380px",
              minHeight: "516px",
            }}
          >
            <div className="flex items-center justify-between gap-5 w-full">
              <span className="text-[20px] w-full max-w-[192px] leading-[100%] font-bold bold tracking-[0%] text-white">
                How is risk managed in Islamic finance?
              </span>
              <span className="w-full max-w-[70px] bg-[#fff] hover:bg-[#2198FF]  transition-colors cursor-pointer rounded-full min-h-[70px] flex items-center justify-center">
                <Play color="black" size={30} />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-end p-[33px]"
            style={{
              backgroundImage: `url(${officeBoy})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              maxWidth: "380px",
              minHeight: "516px",
            }}
          >
            <div className="flex items-center justify-between gap-5 w-full">
              <span className="text-[20px] w-full max-w-[192px] leading-[100%] font-bold bold tracking-[0%] text-white">
                What makes Islamic finance unique?
              </span>
              <span className="w-full max-w-[70px] bg-[#fff] hover:bg-[#2198FF]  transition-colors cursor-pointer rounded-full min-h-[70px] flex items-center justify-center">
                <Play color="black" size={30} />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-end p-[33px]"
            style={{
              backgroundImage: `url(${officeBoy})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              maxWidth: "380px",
              minHeight: "516px",
            }}
          >
            <div className="flex items-center justify-between gap-5 w-full">
              <span className="text-[20px] w-full max-w-[192px] leading-[100%] font-bold bold tracking-[0%] text-white">
                What makes Islamic finance unique?
              </span>
              <span className="w-full max-w-[70px] bg-[#fff] hover:bg-[#2198FF]  transition-colors cursor-pointer rounded-full min-h-[70px] flex items-center justify-center">
                <Play color="black" size={30} />
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShowCaseCarousel;
