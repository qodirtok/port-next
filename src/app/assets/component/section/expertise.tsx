import Image from "next/image";
import { log } from "console";
import Magento from "../icon/expertice/magento.jpg";
import Php from "../icon/expertice/php.jpg";
import JScript from "../icon/expertice/jscript.jpg";
import HTML from "../icon/expertice/html.jpg";
import Css from "../icon/expertice/css.jpg";
import Mysql from "../icon/expertice/mysql.png";
import Gql from "../icon/expertice/gql.png";
import RestApi from "../icon/expertice/restapi.png";
import XMl from "../icon/expertice/xml.png";
import Docker from "../icon/expertice/docker.jpg";

export default function Expertise() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-start p-0 gap-[40px]">
      {/* text */}
      <TextExpertise />
      <ItemsExpertise />
    </div>
  );
}

const TextExpertise = () => {
  return (
    <div className="flex flex-row items-center p-0 gap-[8px] w-[384px] h-[48px]">
      <svg
        width="80"
        height="3"
        viewBox="0 0 80 4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M80 3.5H0V0.5H80V3.5Z"
        />
      </svg>
      <h3
        className="w-[251px] h-[48px]"
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "40px",
          lineHeight: "48px",
          letterSpacing: "0.2px",
          color: "#161616",
        }}
      >
        My Expertise
      </h3>
    </div>
  );
};

const ItemsExpertise = () => {
  return (
    <div className="flex flex-wrap items-end justify-between p-0 gap-[40px]">
      <Items
        items={[
          { logo: <Image src={Magento} alt="" />, name: "Magento" },
          { logo: <Image src={Php} alt="" />, name: "PHP" },
          { logo: <Image src={HTML} alt="" />, name: "HTML" },
          { logo: <Image src={Css} alt="" />, name: "CSS" },
          { logo: <Image src={JScript} alt="" />, name: "Java Script" },
          { logo: <Image src={Mysql} alt="" />, name: "MySQL" },
          { logo: <Image src={Gql} alt="" />, name: "GraphQL" },
          { logo: <Image src={RestApi} alt="" />, name: "Rest API" },
          { logo: <Image src={XMl} alt="" />, name: "XML" },
          { logo: <Image src={Docker} alt="" />, name: "Docker" },
        ]}
      />
    </div>
  );
};

const Items = (props) => {
  return props.items.map((list, index) => (
    <div key={index} className="flex flex-row items-center p-0 gap-[8px] ">
      {list.logo}
      <h3
        style={{
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "0.1px",
        }}
      >
        {list.name}
      </h3>
    </div>
  ));
};
