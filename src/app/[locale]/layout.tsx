import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "../sass/all.scss";
import NavBar from "../../components/navbar/nav";
import Hero from "../../components/hero/hero";
import SmoothScroll from "../../components/scroll/smoothScroll";
import Footer from "../../components/footer/footer";
import ScrollTop from "../../components/scrollTop/scrollTop";
import { homePageJsonLD, homeMetadata } from "../metadata";

const oswald = Oswald({ subsets: ["latin"], weight: ["200", "400", "700"] });

export const metadata: Metadata = homeMetadata;

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

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
          <NextIntlClientProvider messages={messages} locale={locale}>
            <NavBar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </SmoothScroll>
        <ScrollTop />
      </body>
    </html>
  );
}
