export default function Experience() {
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
      <div className="flex flex-row items-center p-0 gap-[8px] w-[423px] h-[48px]">
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
          My Experience
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
    <div className="flex flex-col items-start p-0 gap-[40px]">
      <ListContent
        contents={[
          {
            title:
              "Student Intern - UPT Perpustakaan University of Muhammadiyah Malang",
            about:
              "developing and making a web server using linux server, and i have learning how to organize book on shelves",
            date: "May 2015 - Aug 2015",
          },
          {
            title: "Student Intern - Dinas Komunikasi dan Informatika",
            about:
              "Developing and designing a web apps about sorvey of conditions and suggestions regarding the divisions",
            date: "Jan 2019 - Feb 2019",
          },
          {
            title: "Teacher - SMK Muhammadiyah 2 Malang",
            about:
              "serving my self into learning and teaching about computer and web studies",
            date: "April 2020 - April 2020",
          },
          {
            title: "Part Time - Galeri Bursa Efek Indonesia (GI BEI)",
            about:
              "learning about how to calculate assets investation in another place",
            date: "April 2020 - April 2020",
          },
          {
            title: "Software Engineer - Icube by Sirclo",
            about:
              "Making a lot of custom plugin, maintaning a working application, reducing respond time from 20 second to 5 second, reducing search data using algolia search, custom indexing data with algolia search and developing Rest API and Graphqls",
            date: "Jun 2020 - now",
          },
        ]}
      />
    </div>
  );
};

const ListContent = (props) => {
  return props.contents.map((content, index) => (
    <div
      key={index}
      className="flex flex-row items-center p-[40px] gap-[40px] hover:shadow-lg rounded-[12px] box-border bg-[#FFFFFF] hover:border-[#2061F0] hover:border-solid hover:border-[1px] w-full"
    >
      <div className="flex flex-col justify-center items-start p-0 gap-[24px]">
        {/* meta */}
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
        <h4
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.2px",
            color: "#161616",
          }}
        >
          {content.date}
        </h4>
      </div>
    </div>
  ));
};
