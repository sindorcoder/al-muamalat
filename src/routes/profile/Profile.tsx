import { useState } from "react";
import Footer from "../../components/footer/Footer";
import ProfileComp from "../../components/profile/ProfileComp";
import { Container } from "../../utils";
import Course from "../../components/course/Course";

const Profile = () => {
  const [course, setCourse] = useState<boolean>(false);


  return (
    <>
      <section className="my-[140px]">
        <Container>
          <div className="flex items-center gap-[23px]">
            <button
              onClick={() => setCourse(false)}
              className="text-[16px] cursor-pointer leading-[100%] tracking-[0%] font-semibold text py-[10.5px] px-[9.5px] bg-[#009688] rounded-[10px] w-full max-w-[157px] text-white"
              style={{ backgroundColor: course ? "#fff" : "#009688", color: course ? "#686868" : "#fff", border: course ? "1px solid #686868" : "none" }}
            >
              Profile
            </button>
            <button
              onClick={() => setCourse(true)}
              className="text-[16px] cursor-pointer leading-[100%] tracking-[0%] font-semibold text py-[10.5px] px-[9.5px] border-[1px] rounded-[10px] w-full max-w-[157px] text-[#686868]"
              style={{ backgroundColor: course ? "#009688" : "#fff", color: course ? "#fff" : "#686868", border: course ? "none" : "1px solid #686868" }}
            >
              Courses
            </button>
          </div>
        </Container>
        {course ? <Course /> : <ProfileComp />}
      </section>
      <Footer />
    </>
  );
};

export default Profile;
