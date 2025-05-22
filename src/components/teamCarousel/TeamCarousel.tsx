/* eslint-disable @typescript-eslint/no-explicit-any */ 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import melo from "../../assets/images/Melo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";

const team = [
  {
    name: "Dr. Mezbah Uddin Ahmed",
    desc: "It is a long established fact that a reader will be distracted by the readable content...",
    img: melo, // Yoki local rasm
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
];
const TeamCarousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    centerPadding: "0px",

    speed: 500,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="max-w-6xl mx-auto py-12">
      <Slider {...settings}>
        {team.map((member, index): any => (
          <div key={index} className="px-4">
            <div
              className={`transition-all duration-300  rounded-2xl p-6 flex flex-col items-center text-center bg-[#d7f0f0]`}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm mt-2">{member.desc}</p>
              <div className="flex gap-4 mt-4 text-xl justify-center">
                <Facebook className="text-[#686868] cursor-pointer" />
                <Instagram className="text-[#686868] cursor-pointer" />
                <Twitter className="text-[#686868] cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamCarousel;
