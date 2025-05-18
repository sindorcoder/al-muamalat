import { Container } from "../../utils";
import logo from "../../assets/images/footerLogo.svg";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#009688] py-[38px] mt-[50px]">
      <Container>
        <div className="flex justify-center flex-col items-center gap-[35px]">
          <img src={logo} alt="Dior design logo" />
          <ul className="flex items-center gap-[48px] ">
            <li>
              <Link
                className="text-[16px] leading-[150%] tracing-[0%] roboto text-white"
                to={""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-[16px] leading-[150%] tracing-[0%] roboto text-white"
                to={"about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-[16px] leading-[150%] tracing-[0%] roboto text-white"
                to={"service"}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                className="text-[16px] leading-[150%] tracing-[0%] roboto text-white"
                to={"contact"}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="flex items-center gap-5">
            <li>
              <Link to={""}>
                <Youtube color="white" />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <Facebook color="white" />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <Twitter color="white" />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <Instagram color="white" />
              </Link>
            </li>
          </ul>
          <div className="w-full border-[1px] border-white"></div>
          <p className="text-[16px] leading-[150%] tracking-[0%] text-center roboto text-[#CFD3D7]">
            Copyright Satyam Studio
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
