import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Oswald } from "next/font/google";
import "../sass/all.scss";
import NavBar from "../../components/navbar/nav";
import Footer from "../../components/footer/footer";
import ScrollTop from "../../components/scrollTop/scrollTop";
import JsonldMetaData from "@/components/metaData/jsonldmetadata";
import meta from "../../../public/data/meta-home.json";
import { locales } from "../../configTranslation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
const oswald = Oswald({ subsets: ["latin"], weight: ["200", "400", "700"] });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  //const data = mdata[locale as keyof typeof meta].metaHtml;
  if (locale === "it") {
    return meta.it.meta;
  } else if (locale === "en") {
    return meta.en.meta;
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/image/favicon.ico" />
        <JsonldMetaData metadata={meta} />
      </head>
      <body className={oswald.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>

        <ScrollTop />
      </body>
    </html>
  );
}
