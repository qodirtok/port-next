import Link from "next/link";

export default function Footer() {
  return (
    <>
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "24px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: "#434345",
        }}
      >
        <List
          content={[
            { link: "https://github.com/qodirtok", name: "Github", slash: "/" },
            { link: "mailto:qodirtok@gmail.com", name: "Email", slash: "/" },
            {
              link: "https://www.linkedin.com/in/abdul-qhodir-zaelany-4531641b2/",
              name: "Linkedin",
              slash: "/",
            },
            { link: "https://medium.com/@qodirtok", name: "Medium" },
          ]}
        />
      </p>{" "}
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "24px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: "#434345",
        }}
      >
        Abdul Qhodir Zaelany&copy;
        <em>{new Date().getFullYear()}</em>
      </p>
    </>
  );
}

const List = (props) => {
  return props.content.map((val, index) => (
    <Link key={index} href={val.link} target="_blank">
      {val.name}
      <em>{val.slash ? val.slash : ""}</em>
    </Link>
  ));
};
