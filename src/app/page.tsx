import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillMail,
  AiFillMediumSquare,
  AiFillMediumCircle,
  AiFillInstagram,
} from "react-icons/ai";
// import { useState } from "react";
import { log } from "console";

export default function Home() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    // <div className={darkMode ? "dark" : ""}>
    <div>
      <Head>
        <title>Abdul Qhodir Zaelany Portofolio</title>
        <meta name="description" content="generated by qodirtok" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-extrabold font-mono ">ZLNS</h1>
            <ul className="flex items-center">
              <li></li>
              <li>
                <Link
                  className="bg-gradient-to-r from-blue-500 to-blue-200 text-white px-4 py-2 rounded-md ml-8"
                  href={
                    "https://drive.google.com/file/d/1Mc03p_2o-hPxkWcu3ylUqMQwiwag6dsV/view?usp=sharing"
                  }
                  target="_blank"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium md:text-6xl text-blue-500">
              Abdul Qhodir Zaelany
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Software Engineer | Backend
            </h3>
            <p className="text-md py-5 leading-8 md:text-xl max-w-lg mx-auto">
              I&apos;m a developer with 3 year experience, speciality in
              developing eCommerce apps for several companies. currently working
              as a backend Engineer from{" "}
              <span className="text-blue-400"> Malang East Java</span>.
            </p>
          </div>
          <div className="text-5xl lg:flex  lg:justify-center gap-10 py-3">
            <Link
              href={
                "https://www.linkedin.com/in/abdul-qhodir-zaelany-4531641b2/"
              }
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
            <Link href={"https://github.com/qodirtok"} target="_blank">
              <AiFillGithub />
            </Link>
            <Link href={"https://medium.com/@qodirtok"} target="_blank">
              <AiFillMediumSquare />
            </Link>
            <Link href={"https://www.instagram.com/qodirtok/"} target="_blank">
              <AiFillInstagram />
            </Link>
            <Link href={"mailto:qodirtok@gmail.com"} target="_blank">
              <AiFillMail />
            </Link>
          </div>
          <div className="relative"></div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py1">Services</h3>
            <p className="text-md py2 leading-8">
              since i begining of my journey{" "}
              <span className="text-blue-400">agencies</span>
            </p>
          </div>
          <div className="lg:flex gap-10">
            <ListService
              job="Student Intern"
              company="University Of Muhammadiyah Malang"
              date="May 2015 - Aug 2015"
              about={["asd"]}
              system={["Linux", "Debian", "Apache"]}
            />
            <ListService
              job="Student Intern"
              company="Dinas Komunikasi dan Informatika"
              date="Jan 2019 - Feb 2019"
              about={["asd"]}
              system={["PHP", "CodeIgniter", "MySQL", "JavaScript", "HTML/CSS"]}
            />
            <ListService
              job="Fulltime Software Engineer"
              company="Icube by Sirclo"
              date="Jun 2020 - now"
              about={["asd"]}
              system={[
                "PHP",
                "Magento 2",
                "Docker",
                "MySQL",
                "Graphql",
                "Rest Api",
              ]}
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py1">Portofolio</h3>
          </div>
          <div className="lg:flex lg:mx-w-lg lg:flex-wrap lg:mx-auto gap-10">
            <ListPorto
              name="Sistem Perpustakaan"
              date="2023"
              descriptions={["asd"]}
              system={["php", "MySQL", "Laravel", "Bootstrap"]}
            />
            <ListPorto
              name="POS (AGROMART)"
              date="2023"
              descriptions={["asd"]}
              system={["php", "MySQL", "CodeIgniter", "Bootstrap"]}
            />
            <ListPorto
              name="POS (MIDOS)"
              date="2023"
              descriptions={["asd"]}
              system={["php", "MySQL", "CodeIgniter", "Bootstrap"]}
            />
            <ListPorto
              name="SPBE (Sistem Pemerintahan Berbasis Elektronik)"
              date="2023"
              descriptions={["asd"]}
              system={["php", "MySQL", "CodeIgniter", "Bootstrap"]}
            />
            <ListPorto
              name="SIKOPMA (Sistem Informasi Koperasi Mahasiswa)"
              date="2023"
              descriptions={["asd"]}
              system={["php", "MySQL", "CodeIgniter", "Bootstrap"]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

const ListService = (params) => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10">
      <h3 className="text-lg font-medium pt-8 pb-0">{params.job}</h3>
      <h4 className="py-1 text-lg font-thin pt-1 pb-0">{params.company}</h4>
      <span className="py-1 text-xs font-serif pt-1 pb-2">{params.date}</span>
      <div>
        <ul>{params.about.map((about) => rollCallAbout(about))}</ul>
      </div>
      {/* <p className="py-1 text-justify">{params.about}</p> */}
      <div className="flex flex-col gap-1 py-2 lg:flex-row lg:flex-wrap">
        {params.system.map((name) => rollCall(name))}
      </div>
    </div>
  );
};

const ListPorto = (params) => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-5 ">
      <h3 className="text-lg font-medium pt-8 pb-0">{params.name}</h3>
      <span className="py-1 text-xs font-serif pt-1 pb-2">{params.date}</span>
      <div>
        <ul>
          {params.descriptions.map((descriptions) =>
            rollCallAbout(descriptions)
          )}
        </ul>
      </div>
      {/* <p className="py-1 text-justify">{params.descriptions}</p> */}
      {/* <p className="py-1 text-justify">{params.descriptions}</p> */}
      <div className="flex flex-col gap-1 py-2 lg:flex-row lg:flex-wrap">
        {params.system.map((name) => rollCall(name))}
      </div>
    </div>
  );
};

const rollCallAbout = (elements) => {
  return (
    <li>
      <p className="py-0 text-justify">{elements}</p>
    </li>
  );
};

const rollCall = (elements) => {
  return (
    <span className="bg-cyan-400 rounded-md py-1 px-1 text-xs text-justify">
      {elements}
    </span>
  );
};
