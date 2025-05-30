import Link from "next/link";

export default function Porto() {
  return (
    <>
      <Title />
      <Content />
    </>
  );
}

const Title = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between items-center p-0  ">
      <div className="flex flex-row items-center p-0 gap-[8px] w-[361px] h-[48px]">
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
          className=""
          style={{
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "40px",
            lineHeight: "48px",
            letterSpacing: "0.2px",
            color: "#161616",
          }}
        >
          Latest Project
        </h3>
      </div>
      <p
        className="py-[10px] items-end"
        style={{
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "0.2px",
          color: "#65666C",
        }}
      >
        Start From 2015 - 2024
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <div className="flex flex-wrap items-start gap-[40px]">
      <ListContent
        contents={[
          {
            title: "POS (Royal Laundry)",
            about:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: "Nov 2024 - Dec 2024",
            link: "https://github.com/qodirtok/next-pos",
          },
          {
            title: "Sistem Perpustakaan",
            about:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: "May 2015 - Aug 2015",
            link: "#",
          },
          {
            title: "POS (AGROMART)",
            about:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: "May 2015 - Aug 2015",
            link: "https://gitlab.com/qodirtok/argomart",
          },
          {
            title: "POS (MIDOS)",
            about:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: "May 2015 - Aug 2015",
            link: "#",
          },
          {
            title: "SPBE (Sistem Pemerintahan Berbasis Elektronik)",
            about:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: "May 2015 - Aug 2015",
            link: "https://gitlab.com/qodirtok/spbe",
          },
          {
            title: "SIKOPMA (Sistem Informasi Koperasi Mahasiswa)",
            about:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: "May 2015 - Aug 2015",
            link: "https://gitlab.com/qodirtok/simnew",
          },
        ]}
      />
    </div>
  );
};

const ListContent = (props) => {
  return props.contents.map((content, index) => (
    <article
      key={index}
      className="box-border flex flex-col items-center p-[40px] gap-[40px] bg-[#FAFBFC] hover:shadow-lg rounded-[12px] hover:border-[#2061F0] hover:border-solid hover:border-[1px] w-full "
    >
      {/* content */}
      <div className="flex flex-col justify-center items-start p-0 gap-[24px]">
        {/* meta content */}
        <div className="flex flex-col items-start p-0 gap-[12px]">
          <h3
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "28px",
              lineHeight: "36px",
              letterSpacing: "0.2px",
              color: "#161616",
            }}
          >
            {content.title}
          </h3>
          <p
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "28px",
              letterSpacing: "0.2px",
              display: "flex",
              alignItems: "center",
              color: "#65666C",
            }}
          >
            {content.about}
          </p>
        </div>
        {/* date */}
        <p>{content.date}</p>

        <div className="flex flex-row items-center p-0 gap-[12px]">
          <Link
            href={content.link}
            style={{
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "28px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "0.2px",
              color: "#2061F0",
            }}
            target="_blank"
          >
            Link Project
          </Link>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z"
              fill="#2061F0"
            />
          </svg>
        </div>
      </div>
    </article>
  ));
};
