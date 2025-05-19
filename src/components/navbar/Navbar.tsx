import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import { Container } from "../../utils";
import uk from "../../assets/images/uk.svg";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="py-4 shadow-xl">
        <Container>
          <div className="flex items-center justify-between gap-5">
            <Link to={""}>
              <img src={logo} alt="AL-Muamalat Logo in cite" />
            </Link>
            <ul className="flex items-center justify-between gap-5">
              <li>
                <Link
                  to="/"
                  className="text-[15px] leading-[100%] tracking-[0%] font-[600] text"
                  style={{
                    color: pathname === "/" ? "#009688" : "#000000",
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                className="text-[15px] leading-[100%] tracking-[0%] font-[600] text relative"
                ref={menuRef}
              >
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center  font-[600] text-[15px] leading-[100%] tracking-[0%] mt-[4px]"
                  style={{
                    color: pathname === "/education" ? "#009688" : "#000000",
                  }}
                >
                  Programs <ChevronDown className="ml-1 h-5 w-5" />
                </button>

                {isOpen && (
                  <div className="absolute top-full left-0 w-[300px] mt-2 border rounded-md bg-white shadow-lg z-10">
                    <div className="p-4 border-b">
                      <Link
                        to={"/education"}
                        style={{
                          color:
                            pathname === "/education" ? "#009688" : "#000000",
                        }}
                        className="text-[#686868] text-[15px] leading-[100%] tracking-[0%] text-nowrap font-medium"
                      >
                        International educational programs
                      </Link>
                    </div>
                    <div className="p-4 border-b">
                      <Link
                        to={""}
                        className="text-[#686868] text-[15px] leading-[100%] tracking-[0%] text-nowrap"
                      >
                        Specialized courses
                      </Link>
                    </div>
                    <div className="p-4 border-b">
                      <Link
                        to={""}
                        className="text-[#686868] text-[15px] leading-[100%] tracking-[0%] text-nowrap"
                      >
                        Islamic Finance Literacy Course
                      </Link>
                    </div>
                    <div className="p-4">
                      <Link
                        to={""}
                        className="text-gray-600 text-[15px] leading-[100%] tracking-[0%] text-nowrap"
                      >
                        Certification program
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/tools"
                  style={{
                    color: pathname === "/tools" ? "#009688" : "#000000",
                  }}
                  className="text-[15px] leading-[100%] tracking-[0%] font-[600] text"
                >
                  Finance tools
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{
                    color: pathname === "/contact" ? "#009688" : "#000000",
                  }}
                  className="text-[15px] leading-[100%] tracking-[0%] font-[600] text"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-[34px]">
              <div className="relative" ref={languageRef}>
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-2  font-medium text-[15px]"
                >
                  <img src={uk} alt="United Kingdom Language Selected" /> ENG{" "}
                  <ChevronDown className="ml-1 h-5 w-5" />
                </button>

                {isLanguageOpen && (
                  <div className="absolute top-full left-0 w-[100px] mt-2 border rounded-md bg-white shadow-lg z-10">
                    <button className="flex items-center gap-2 p-2 text-[15px] leading-[100%] tracking-[0%] text-nowrap">
                      <img src={uk} alt="United Kingdom Language Selected" />{" "}
                      ENG{" "}
                    </button>
                  </div>
                )}
              </div>
              <div className="border-2 w-[2px] h-[32px] border-[#76767699]"></div>
              <button
                onClick={() => navigate("/signin")}
                className=" capitalize cursor-pointer py-[9px] px-[31px] bg-[#009688] rounded-[8px] text-white"
              >
                sign in
              </button>
            </div>
          </div>
        </Container>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
