/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, Input, Space, Form, Checkbox, Button } from "antd";
import { useState } from "react";
import { Container } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import "../../../node_modules/swiper/modules/pagination.css";

const { Option } = Select;

const countryData = [
  { code: "+1", iso: "us", name: "United States" },
  { code: "+44", iso: "gb", name: "United Kingdom" },
  { code: "+998", iso: "uz", name: "Uzbekistan" },
  { code: "+91", iso: "in", name: "India" },
  { code: "+81", iso: "jp", name: "Japan" },
  { code: "+49", iso: "de", name: "Germany" },
  { code: "+33", iso: "fr", name: "France" },
  { code: "+39", iso: "it", name: "Italy" },
  { code: "+34", iso: "es", name: "Spain" },
  { code: "+7", iso: "ru", name: "Russia" },
  { code: "+86", iso: "cn", name: "China" },
  { code: "+82", iso: "kr", name: "South Korea" },
  { code: "+90", iso: "tr", name: "Turkey" },
  { code: "+966", iso: "sa", name: "Saudi Arabia" },
  { code: "+971", iso: "ae", name: "United Arab Emirates" },
  { code: "+20", iso: "eg", name: "Egypt" },
  { code: "+234", iso: "ng", name: "Nigeria" },
  { code: "+55", iso: "br", name: "Brazil" },
  { code: "+61", iso: "au", name: "Australia" },
  { code: "+46", iso: "se", name: "Sweden" },
];

const Consul = () => {
  const [phone, setPhone] = useState("+44");

  const handlePhoneChange = (e: any) => {
    setPhone(e);
  };

  const onFinish = (e: any) => {
    console.log(e);
  };

  return (
    <section className="my-[70px] ">
      <Container>
        <div className="flex justify-between min-h-[465px]">
          <div className="w-full max-w-[709px] relative h-full min-h-[465px]">


            <Swiper
              className="h-full consul-swiper"
              modules={[Pagination, A11y, Autoplay]}
              spaceBetween={10}
              pagination={true}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2700,
                disableOnInteraction: false,
              }}

            >
              <SwiperSlide className="h-full">
                <div className="flex h-full min-h-[465px] flex-col items-start gap-5 p-[45px] bg-[#FAE9D3]">
                  <h2 className="text-[32px] leading-[100%] tracking-[0%] font-bold title text-[#D28527]">
                    Workshops and Spiritual Development
                  </h2>
                  <p className="text-[22px] w-full max-w-[612px] leading-[32px] tracking-[0%] font-medium title text-[#D28527]">
                    Participate in our weekly workshops focused on Islamic
                    studies and spiritual growth. These sessions are designed to
                    help you strengthen your connection with faith and acquire
                    essential skills for daily life
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="h-full">
                <div className="flex h-full min-h-[465px] flex-col items-start gap-5 p-[45px] bg-[#FAE9D3]">
                  <h2 className="text-[32px] leading-[100%] tracking-[0%] font-bold title text-[#D28527]">
                    Workshops and Spiritual Development
                  </h2>
                  <p className="text-[22px] w-full max-w-[612px] leading-[32px] tracking-[0%] font-medium title text-[#D28527]">
                    Participate in our weekly workshops focused on Islamic
                    studies and spiritual growth. These sessions are designed to
                    help you strengthen your connection with faith and acquire
                    essential skills for daily life
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="h-full">
                <div className="flex h-full min-h-[465px] flex-col items-start gap-5 p-[45px] bg-[#FAE9D3]">
                  <h2 className="text-[32px] leading-[100%] tracking-[0%] font-bold title text-[#D28527]">
                    Workshops and Spiritual Development
                  </h2>
                  <p className="text-[22px] w-full max-w-[612px] leading-[32px] tracking-[0%] font-medium title text-[#D28527]">
                    Participate in our weekly workshops focused on Islamic
                    studies and spiritual growth. These sessions are designed to
                    help you strengthen your connection with faith and acquire
                    essential skills for daily life
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="h-full">
                <div className="flex h-full min-h-[465px] flex-col items-start gap-5 p-[45px] bg-[#FAE9D3]">
                  <h2 className="text-[32px] leading-[100%] tracking-[0%] font-bold title text-[#D28527]">
                    Workshops and Spiritual Development
                  </h2>
                  <p className="text-[22px] w-full max-w-[612px] leading-[32px] tracking-[0%] font-medium title text-[#D28527]">
                    Participate in our weekly workshops focused on Islamic
                    studies and spiritual growth. These sessions are designed to
                    help you strengthen your connection with faith and acquire
                    essential skills for daily life
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full py-[45px] px-[50px] bg-[#F9F7F3]">

            <div className="flex flex-col gap-2">
              <h2 className="text-[32px] leading-[100%] tracking-[0%] font-bold title text-[#152032]">
                Free consultation
              </h2>
              <p className="text-[20px] w-full  leading-[20px] tracking-[0%] font-medium title text-[#152032]">
                Leave your phone number, and we will reach out to provide you
                with complete information about our courses.
              </p>
            </div>
            <Form
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
              className="!mt-[28px]"
            >
              <Space direction="vertical" style={{ width: "100%" }}>
                <Form.Item
                  name={"name"}
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input
                    placeholder={"Name"}
                    style={{ width: 300 }}
                    className=" capitalize"
                  />
                </Form.Item>
                <Form.Item
                  name={"phone"}
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    type="number"
                    addonBefore={
                      <Select
                        defaultValue="+44"
                        style={{ width: 80 }}
                        optionLabelProp="label"
                        onChange={(e) => handlePhoneChange(e)}
                      >
                        {countryData.map((country: any) => (
                          <Option
                            key={country.code}
                            value={country.code}
                            label={
                              <span className="flex items-center gap-2">
                                <img
                                  src={`https://flagcdn.com/w20/${country.iso}.png`}
                                  alt={country.name}
                                  width={30}
                                  height={30}
                                />
                              </span>
                            }
                          >
                            <span>
                              <img
                                src={`https://flagcdn.com/w40/${country.iso}.png`}
                                alt={country.name}
                                style={{ width: 20, marginRight: 8 }}
                              />
                              ({country.code})
                            </span>
                          </Option>
                        ))}
                      </Select>
                    }
                    placeholder={phone}
                    style={{ width: 300 }}
                  />
                </Form.Item>
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  rules={[{ required: true, message: "Please Checked!" }]}
                >
                  <Checkbox className="!flex !items-center gap-4">
                    <span className="text-[18px] font-medium tracking-[0%] leading-[100%] title">
                      I agree to the use of my personal information for
                      consultation purposes.
                    </span>
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full !py-6 !text-[20px] !bg-[#009688] !leading-[100%] !tracking-[0%] !font-bold !title"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Space>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Consul;
