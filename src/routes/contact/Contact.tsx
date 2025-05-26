import { Link } from "react-router-dom";
import { Container } from "../../utils";
import Consul from "../../components/consul/Consul";
import Footer from "../../components/footer/Footer";
import type { FormProps } from "antd";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;
type FieldType = {
  name?: string;
  email?: string;
  message?: string;
  budget?: string;
  interest?: string;
};

const Contact = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
      <section className="my-[127px]">
        <Container>
          <div className="mb-[127px] flex items-start gap-[77px] justify-between">
            <div className="flex flex-col w-full items-start gap-[20px]">
              <h1 className="text-[64px] leading-[100%] tracking-[0%] font-normal bold">
                Let’s Talk
              </h1>
              <p className="w-full max-w-[538px] text-[22px] leading-[100%] tracking-[0%] font-normal bold text-[#686868]">
                Have some big idea or brand to develop and need help? Then reach
                out we'd love to hear about your project and provide help
              </p>

              <div className="mt-[34px] flex flex-col gap-[54px]">
                <div className="flex flex-col items-start gap-[20px]">
                  <h3 className="text-[32px] leading-[100%] tracking-[0%] font-normal text-black bold">
                    Email
                  </h3>
                  <Link to={"mailto:beebs@gmail.com"}>beebs@gmail.com</Link>
                </div>
                <div className="flex flex-col items-start gap-[20px]">
                  <h3 className="text-[32px] leading-[100%] tracking-[0%] font-normal text-black bold">
                    Socials
                  </h3>
                  <Link
                    className="text-[16px] leading-[100%] font-normal bold tracking-[0%] text-[#686868] border-b-[1px] border-[#686868]"
                    to={"https://www.instagram.com/"}
                    target="_blank"
                  >
                    Instagram
                  </Link>

                  <Link
                    className="text-[16px] leading-[100%] font-normal bold tracking-[0%] text-[#686868] border-b-[1px] border-[#686868]"
                    to={"https://www.x.com/"}
                    target="_blank"
                  >
                    Twitter
                  </Link>

                  <Link
                    className="text-[16px] leading-[100%] font-normal bold tracking-[0%] text-[#686868] border-b-[1px] border-[#686868]"
                    to={"https://www.facebook.com/"}
                    target="_blank"
                  >
                    Facebook
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[520px]">
              <Form
                className="w-full"
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item<FieldType>
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your Name!" },
                  ]}
                >
                  <Input className="!bg-[#F7F7F7] !p-2 !rounded-none" />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input
                    className="!bg-[#F7F7F7] !p-2 !rounded-none"
                    type="email"
                  />
                </Form.Item>

                <Form.Item<FieldType>
                  label="What service are you interested in"
                  name="interest"
                  rules={[
                    {
                      required: true,
                      message: "Please select your interest!",
                    },
                  ]}
                >
                  <Select
                    className="!bg-[#F7F7F7]"
                    placeholder="Select project type"
                    allowClear
                  >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                  </Select>
                </Form.Item>

                <Form.Item<FieldType>
                  label="Budget"
                  name="budget"
                  rules={[
                    {
                      required: true,
                      message: "Please select your budget!",
                    },
                  ]}
                >
                  <Select
                    className="!bg-[#F7F7F7]"
                    placeholder="Select project budget"
                    allowClear
                  >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                  </Select>
                </Form.Item>

                <Form.Item<FieldType>
                  label="Message"
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: "Please write your message!",
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={6}
                    className="!bg-[#F7F7F7] !p-2 !rounded-none"
                  />
                </Form.Item>
                <Form.Item label={null}>
                  <Button
                    type="primary"
                    className="w-full !bg-[#009688] !rounded-none !p-6"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Container>
      </section>
      <Consul />
      <Footer />
    </>
  );
};

export default Contact;
