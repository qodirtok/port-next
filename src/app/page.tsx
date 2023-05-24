import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import Header from "./component/header";
import Banner from "./component/banner";
import About from "./component/about";
import Portofolio from "./component/portofolio";
import Work from "./component/work";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abdul Qhodir Zaelany Portofolio</title>
        <meta name="description" content="generated by qodirtok" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">QHODIR</h1>
            <ul className="flex items-center">
              <li></li>
              <li>
                <Link
                  className="bg-gradient-to-r from-cyan-500 to-cyan-200 text-white px-4 py-2 rounded-md ml-8"
                  href={"#"}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium">Abdul Qhodir Zaelany</h2>
            <h3 className="text-2xl py-2">Software Engineer | Backend</h3>
            <p className="text-md py-5 leading-8">about</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillMail />
          </div>
          <div className="relative"></div>
        </section>
      </main>
    </div>
  );
}
