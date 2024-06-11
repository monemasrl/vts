import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./sass/all.scss";
import NavBar from "../components/navbar/nav";
import Hero from "../components/hero/hero";
import SmoothScroll from "../components/scroll/smoothScroll";
import Footer from "../components/footer/footer";
import ScrollTop from "../components/scrollTop/scrollTop";
import { homePageJsonLD, homeMetadata } from "./metadata";

const oswald = Oswald({ subsets: ["latin"], weight: ["200", "400", "700"] });

export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

          {children}
          <Footer />
        </SmoothScroll>
        <ScrollTop />
      </body>
    </html>
  );
}
