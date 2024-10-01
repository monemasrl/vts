import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Oswald } from "next/font/google";
import "../sass/all.scss";
import NavBar from "../../components/navbar/nav";

import Footer from "../../components/footer/footer";
import ScrollTop from "../../components/scrollTop/scrollTop";
import JsonldMetaData from "@/components/metaData/jsonldmetadata";

import { locales } from "../../configTranslation";
const metadata = {
  it: {
    metaHtml: {
      title: "VTServices website",
      description:
        "Commissioning, qualification, validation. Da oltre 20 anni, un servizio di prim'ordine. La nostra flessibilità e volontà di adattarci alle richieste dei clienti sono ciò che ci rende un’eccellenza nel nostro settore.",
      keywords:
        "VTServices, Commissioning, qualification, validation, technical services",
      openGraph: {
        title: "VTServices website",
        description:
          "Commissioning, qualification, validation. Da oltre 20 anni, un servizio di prim'ordine. La nostra flessibilità e volontà di adattarci alle richieste dei clienti sono ciò che ci rende un’eccellenza nel nostro settore.",
        type: "website",
        locale: "it_IT",
        url: "https://vtservices.it/",
        siteName: "VTServices",
        images: [
          {
            url: "https://vtservices.it/image/opengraph-image.jpg",
            width: 1200,
            height: 630,
            alt: "VTServices website",
          },
        ],
      },
    },
    jsonld: {
      "@context": "https://schema.org",
      "@type": "Organization",
      image: [
        "https://vtservices.it/image/4_3graph.jpg",
        "https://vtservices.it/image/mainimage.jpg",
      ],
      name: "VTServices",
      address: [
        {
          " @type": "PostalAddress",
          streetAddress: " via della Stazione 27 Mologno Barga",
          addressLocality: "Lucca",
          addressRegion: "Toscana",
          postalCode: "55051",
          addressCountry: "IT",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "8000 Avalon Blvd, Suite 100 and 200",
          addressLocality: "Alpharetta",
          addressRegion: "Atlanta",
          postalCode: "30009",
          addressCountry: "GA",
        },
      ],
      url: "https://vtservices.it/",
      telephone: "+320583711372",
      email: "info@vtservices.it",
    },
  },
  en: {
    metaHtml: {
      title: "VTServices website",
      description:
        "First-class service for over 20 years, our flexibility and willingness to adapt to customer requests are what make us an excellence in our sector.",
      keywords:
        "VTServices, Commissioning, qualification, validation, technical services",
      openGraph: {
        title: "VTServices website",
        description:
          "First-class service for over 20 years, our flexibility and willingness to adapt to customer requests are what make us an excellence in our sector.",
        type: "website",
        locale: "en_US",
        url: "https://vtservices.it/",
        siteName: "VTServices",
        images: [
          {
            url: "https://vtservices.it/image/opengraph-image.jpg",
            width: 1200,
            height: 630,
            alt: "VTServices website",
          },
        ],
      },
    },
  },
};
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
const oswald = Oswald({ subsets: ["latin"], weight: ["200", "400", "700"] });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const data = metadata[locale as keyof typeof metadata].metaHtml;

  return data;
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
