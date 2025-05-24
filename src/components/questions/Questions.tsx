import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { Container } from "../../utils";
const Questions = () => {
  const text = `
"Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively."
`;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Will I receive lifetime access to the courses?",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "Will I receive lifetime access to the courses?",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Can I use the materials for community teaching?",
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: "Is there a free trial for the courses?",
      children: <p>{text}</p>,
    },
    {
      key: "5",
      label: "Who can benefit from these courses?",
      children: <p>{text}</p>,
    },

    {
      key: "6",
      label: "Who can benefit from these courses?",
      children: <p>{text}</p>,
    },
  ];

  return (
    <section>
      <Container>
        <div>
          <h2 className="text-[42px] leading-[100%] font-bold bold tracking-[0%] text-center">
            Frequently asked questions
          </h2>
          <p className="text-[20px] leading-[100%] tracking-[0%] text-center text-[#686868] mt-[16px] mb-[31px]">
            If you have any further questions, please contact us{" "}
          </p>
        </div>
        <Collapse
          expandIcon={({ isActive }) =>
            isActive ? (
              <span style={{ fontSize: 18 }}>×</span>
            ) : (
              <span style={{ fontSize: 18 }}>+</span>
            )
          }
          expandIconPosition="end"
          items={items}
        />
      </Container>
    </section>
  );
};

export default Questions;
