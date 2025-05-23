import { Container } from "../../utils";
import Card from "../card/Card";
import islamic from "../../assets/images/Islamic.svg";
import inter from "../../assets/images/International.svg"
import education from "../../assets/images/Education.svg";
import finance from "../../assets/images/finance.svg";
// import market from "../../assets/images/market.svg";
import doc from "../../assets/images/doc.svg";

const Services = () => {
  return (
    <section className="mt-[70px]">
      <Container>
        <h2 className="text-[40px] leading-[100%] tracking-[0%] font-[700] text-center bold">
          Our services{" "}
        </h2>
        <p className="w-full max-w-[574px] text-[20px] leading-[100%] mx-auto mt-[10px] bold tracking-normal text-center font-[500]">
          Expert guidance for managing funds in alignment with Islamic
          principles, helping you make informed, halal investment decisions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[62px]">
          <Card
            color="#DEEAFF"
            title={"Islamic Fund Management"}
            text={
              "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments."
            }
            image={islamic}
          />
          <Card
            color="#D5F6ED"
            title={"International Relations"}
            text={
              "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion."
            }
            image={inter}
          />
          <Card
            color="#FBE2F4"
            title={"Education and Training"}
            text={
              "We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions."
            }
            image={education}
          />
          <Card
            color="#E2DBF9"
            title={"For Islamic Banks"}
            text={
              "We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles."
            }
            image={finance}
          />
          {/* <Card
            color="#EBEFF3"
            title={"Islamic Capital Market"}
            text={
              "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management."
            }
            image={market}
          /> */}
          <Card
            color="#FFEDB6"
            title={"Shariah Compliance Audit"}
            text={
              "We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles."
            }
            image={doc}
          />
        </div>
      </Container>
    </section>
  );
};

export default Services;
