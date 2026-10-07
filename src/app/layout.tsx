import "./globals.css";
// import "./assets/css/style.css";

export const metadata = {
  title: "Abdul Qhodir Zaelany — Backend Engineer",
  description:
    "Portfolio of Abdul Qhodir Zaelany, backend engineer from Malang, East Java. 4+ years building eCommerce apps with PHP, Laravel, Magento, Golang, and GraphQL.",
  openGraph: {
    title: "Abdul Qhodir Zaelany — Backend Engineer",
    description:
      "Backend engineer from Malang, East Java. 4+ years building eCommerce apps with PHP, Laravel, Magento, Golang, and GraphQL.",
    url: "https://azelsq.my.id",
    siteName: "Abdul Qhodir Zaelany",
    images: ["/image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Qhodir Zaelany — Backend Engineer",
    description:
      "Backend engineer from Malang, East Java. 4+ years building eCommerce apps.",
    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
