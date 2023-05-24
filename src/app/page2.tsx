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

export default function Home() {
  return (
    <main className="tracking-widests">
      <Header />
      <Banner />
      <About />
      <Portofolio />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
