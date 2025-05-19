import { ChevronDown } from "lucide-react";
import { Container } from "../../utils";

const Information = () => {
  return (
    <section className="my-[70px]">
      <Container>
        <div>
          <h2 className="text-[40px] leading-[100%] tracking-[0%] font-[700] bold text-center">
            Brief information about the course
          </h2>
          <div className="flex gap-[20px] mt-[66px] justify-between">
            <div className="w-full max-w-[50%]">
              <span className="text-[#009688] flex items-center gap-2">
                <h3 className="text-[34px] font-[500] leading-[100%] tracking-[0%] bold ">
                  Videodarslar
                </h3>
                <ChevronDown className="text-[#009688] w-[30px] h-[30px] inline-block" />
              </span>
              <p className="text-[28px] leading-[100%] tracking-[0%] bold text-[#152032] mt-[30px]">
                Lessons are posted on the platform in the form of videos, which
                can be viewed anytime and anywhere. Video lessons are updated.
              </p>
            </div>
            <div className="w-full max-w-[50%]">
              <span className="text-[#009688] flex items-center gap-2">
                <h3 className="text-[34px] font-[500] leading-[100%] tracking-[0%] bold ">
                  Tasks
                </h3>
                <ChevronDown className="text-[#009688] w-[30px] h-[30px] inline-block" />
              </span>
              <p className="text-[28px] leading-[100%] tracking-[0%] bold text-[#152032] mt-[30px]">
                Test tasks are given at the end of the module. Only students who
                successfully pass the test will be able to access the lessons in
                the next module.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Information;
