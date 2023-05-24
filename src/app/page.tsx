import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import Header from "./component/header";
import Banner from "./component/banner";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
    </main>
  );
}
