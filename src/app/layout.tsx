// import "./globals.css";
import "./assets/css/style.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portofolio",
  description: "My portofolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <title>Document</title> */}
        <title></title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
