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
            { link: "#", name: "Github", slash: "/" },
            { link: "#", name: "Email", slash: "/" },
            { link: "#", name: "Linkedin", slash: "/" },
            { link: "#", name: "Medium" },
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
        Abdul Qhodir Zaelany&copy;<em>{new Date().getFullYear()}</em>
      </p>
    </>
  );
}

const List = (props) => {
  return props.content.map((val) => (
    <Link href={val.link}>
      {val.name}
      <em>{val.slash ? val.slash : ""}</em>
    </Link>
  ));
};
