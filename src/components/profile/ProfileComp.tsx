import { Container } from "../../utils";
import type { FormProps } from "antd";
import { Form, Input } from "antd";

type FieldType = {
  firstName?: string;
  lastName?: string;
  address?: string;
  birthday?: string;
};

const ProfileComp = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <section className="my-[28px]">
      <Container>
        <div className="shadow-sm bg-white py-[60px] px-[32px] rounded-[10px]">

          <div className="flex items-center justify-between gap-5">
            
            <div className="flex items-center gap-[24px] w-full">
              <div className="w-full max-w-[80px] bg-[#009688] min-h-[80px] rounded-full"></div>
              <span className="text-[32px] leading-[100%] tracking-[0%] font-medium ">
                Alexa Rawles
              </span>
            </div>
            <button className="text-[16px] cursor-pointer leading-[100%] tracking-[0%] font-semibold text py-[10.5px] px-[9.5px] bg-[#009688] rounded-[10px] w-full max-w-[93px] text-white">
              Save
            </button>
          </div>
          <Form
            layout="vertical"
            className="!grid grid-cols-2 gap-[41px] !mt-[52px]"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your First Name!" },
              ]}
            >
              <Input
                className="!bg-[#F9F9F9] !border-none !py-3"
                placeholder="Your First Name"
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please input your Last Name!" },
              ]}
            >
              <Input
                className="!bg-[#F9F9F9] !border-none !py-3"
                placeholder="Your First Name"
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="address"
              label="Address"
              valuePropName="checked"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input
                className="!bg-[#F9F9F9] !border-none !py-3"
                placeholder="Enter Your Address"
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="birthday"
              label="Birthday"
              valuePropName="checked"
              rules={[
                { required: true, message: "Please input your Birthday!" },
              ]}
            >
              <Input
                className="!bg-[#F9F9F9] !border-none !py-3"
                placeholder="Enter Your Birthday"
              />
            </Form.Item>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default ProfileComp;
