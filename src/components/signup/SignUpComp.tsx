import { Container } from "../../utils";
import logo from "../../assets/images/Logo.svg";
import illus from "../../assets/images/illustration.png";
import ellipse from "../../assets/images/ellipse.png";

import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
type FieldType = {
  username?: string;
  password?: string;
  email?: string;
};
const SignUpComp = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };
  return (
    <div>
      <Container>
        <div className="flex items-start gap-[100px] p-2">
          <div className="w-full max-w-[50%]">
            <div className="w-full flex mt-[70px] items-center justify-between gap-5">
              <Link to={"/"}>
                <img src={logo} alt="Al-Muamalat Logo" />
              </Link>
              <div className="flex flex-col items-start gap-2">
                <span className="text-[20px] leading-[100%] tracking-[0%] text-[#8F8F8F] font-[400]">
                  Questions?
                </span>
                <span className="text-[30px] font-[700] leading-[100%] tracking-[0%] text-[#009688]">
                  Ask Diyor
                </span>
              </div>
            </div>
            <div className="mt-[105px] flex flex-col w-full max-w-[440px]">
              <div className="flex flex-col gap-2 mb-[40px]">
                <h2 className="text-[86px] leading-[100%]  tracing-[4%]">
                  Get started
                </h2>
                <div className="flex items-center gap-[19px]">
                  <span className="text-[26px] font-[400] leading-[100%] text-[#8F8F8F] tracking-[0%] ">
                    Already have an account?
                  </span>
                  <Link
                    to="/signin"
                    className="text-[26px] font-[400] leading-[100%] text-[#009688] tracking-[0%] "
                  >
                    Sign in
                  </Link>
                </div>
              </div>
              <Form
                name="basic"
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item<FieldType>
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input
                    placeholder="Enter your name"
                    prefix={<User color="#8F8F8F" />}
                    className="flex items-center !py-[6px] flex-row-reverse"
                  />
                </Form.Item>
                <Form.Item<FieldType>
                  name="email"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    prefix={<Mail color="#8F8F8F" />}
                    className="flex items-center !py-[6px] flex-row-reverse"
                  />
                </Form.Item>
                <Form.Item<FieldType>
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    className="!py-[10px]"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item label={null}>
                  <Button
                    className="w-full !py-[23px] !bg-[#009688]"
                    type="primary"
                    htmlType="submit"
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="w-full relative max-w-[50%] bg-teal-500 flex flex-col gap-10 py-[20px] px-[48px] rounded-[40px]">
            <img
              src={illus}
              width={"90%"}
              height={"100%"}
              className="object-contain object-center"
              alt="iillustration"
            />
            <h1 className="text-[36px] text-center text-white leading-[56px] tracing-[5%]">
              Welcome to Al Muamalat – Empowering Your Journey in Islamic
              Finance
            </h1>
            <div className="absolute top-[65px] -left-10">
              <img src={ellipse} alt="ellipse" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUpComp;
