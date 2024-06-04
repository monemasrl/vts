import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./sass/all.scss";
import NavBar from "./components/navbar/nav";
import Hero from "./components/hero/hero";
import SmoothScroll from "./components/scroll/smoothScroll";
import Footer from "./components/footer/footer";
import ScrollTop from "./components/scrollTop/scrollTop";
import { homePageJsonLD } from "./metadata";

const oswald = Oswald({ subsets: ["latin"], weight: ["200", "400", "700"] });

export const metadata: Metadata = {
  title: "VTServices website",
  description:
    "Commissioning, qualification, validation. Da oltre 20 anni, un servizio di prim'ordine. La nostra flessibilità e volontà di adattarci alle richieste dei clienti sono ciò che ci rende un’eccellenza nel nostro settore.",
  openGraph: {
    title: "VTServices website",
    description:
      "Commissioning, qualification, validation. Da oltre 20 anni, un servizio di prim'ordine. La nostra flessibilità e volontà di adattarci alle richieste dei clienti sono ciò che ci rende un’eccellenza nel nostro settore.",
    type: "website",
    locale: "it_IT",
    url: " process.env.NEXT_PUBLIC_URL",
    siteName: "VTServices",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/image/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "VTServices website",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(homePageJsonLD(), "test");
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/image/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={homePageJsonLD()}
          key="product-jsonld"
        />
      </head>
      <body className={oswald.className}>
        <SmoothScroll>
          <NavBar />
          <Hero />
          {children}
          <Footer />
        </SmoothScroll>
        <ScrollTop />
      </body>
    </html>
  );
}
