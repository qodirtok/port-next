import Link from "next/link";
import HomeHero from "./assets/component/section/homehero";
import Expertise from "./assets/component/section/expertise";
import Experience from "./assets/component/section/experience";
import Porto from "./assets/component/section/porto";
import Footer from "./assets/component/section/footer";

export default function Home() {
  return (
    <div>
      <main className="bg-white " style={{ fontFamily: "Poppins" }}>
        <section
          className="min-h-full px-[16px] md:px-[120px] lg:px-[120px] "
          style={{ backgroundColor: "#F7F9FF" }}
        >
          <HomeHero />
        </section>
        <section
          id="Expertise"
          className="min-h-full py-[140px] px-[16px] md:px-[120px] lg:px-[120px] flex flex-col gap-[80px]"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <Expertise />
        </section>
        <section
          id="Experience"
          className="min-h-full flex flex-col px-[16px] sm:px-[16px] md:px-[120px] lg:px-[120px] md:py-[140px] lg:py-[140px] gap-[80px]"
          style={{ backgroundColor: "#F7F9FF" }}
        >
          <Experience />
        </section>

        <section
          id="Work"
          className="min-h-full py-[140px] px-[16px] md:px-[120px] lg:px-[120px] flex flex-col gap-[80px]"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <Porto />
        </section>

        <section
          id="Contact"
          className="min-h-full py-[140px] px-[16px] md:px-[120px] lg:px-[120px] flex flex-col gap-[40px]"
          style={{ backgroundColor: "#F7F9FF" }}
        >
          <div className="flex flex-row items-center gap-[8px]">
            <svg
              width="80"
              height="3"
              viewBox="0 0 80 4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M80 3.5H0V0.5H80V3.5Z"
              />
            </svg>
            <h3
              style={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "40px",
                lineHeight: "48px",
                letterSpacing: "0.2px",
                color: "#161616",
              }}
            >
              Get in Touch
            </h3>
          </div>
          <p
            style={{
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "28px",
              letterSpacing: "0.2px",
              color: "#65666C",
              maxWidth: "560px",
            }}
          >
            Open to backend, eCommerce, and integration projects. Send me an
            email and I&apos;ll get back to you.
          </p>
          <Link
            href="mailto:qodirtok@gmail.com"
            style={{
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "32px",
              letterSpacing: "0.2px",
              color: "#2061F0",
            }}
          >
            qodirtok@gmail.com
          </Link>
        </section>

        <footer className="flex flex-col justify-center items-center py-[40px] bg-[#FAFBFC]">
          <Footer />
        </footer>
      </main>
    </div>
  );
}
