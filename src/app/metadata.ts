function homePageJsonLD() {
  return {
    __html: `{"@context": "https://schema.org",
      "@type": "Organization",
      "image": [
        "${process.env.NEXT_PUBLIC_URL}/image/4_3graph.jpg",
        "${process.env.NEXT_PUBLIC_URL}/image/mainimage.jpg"
       ],
      "name": "VTServices",
      "address": [{
        "@type": "PostalAddress",
        "streetAddress": " via della Stazione 27 Mologno Barga",
        "addressLocality": "Lucca",
        "addressRegion": "Toscana",
        "postalCode": "55051",
        "addressCountry": "IT"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "2 Ravinia Drive, Ste. 1630",
        "addressLocality": "Atlanta",
        "addressRegion": "Georgia",
        "postalCode": "30346",
        "addressCountry": "US"
      },
    ],
      "url": "${process.env.NEXT_PUBLIC_URL}",
      "telephone": "+320583711372",
      "email":"info@vtservices.it"
    }
  `,
  };
}
function aziendaPageJsonLD() {
  return {
    __html: `{"@context": "https://schema.org",
      "@type": "Organization",
      "image": [
        "${process.env.NEXT_PUBLIC_URL}/image/4_3graph.jpg",
        "${process.env.NEXT_PUBLIC_URL}/image/mainimage.jpg"
       ],
      "name": "VTServices",
      "address": [{
        "@type": "PostalAddress",
        "streetAddress": " via della Stazione 27 Mologno Barga",
        "addressLocality": "Lucca",
        "addressRegion": "Toscana",
        "postalCode": "55051",
        "addressCountry": "IT"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "2 Ravinia Drive, Ste. 1630",
        "addressLocality": "Atlanta",
        "addressRegion": "Georgia",
        "postalCode": "30346",
        "addressCountry": "US"
      },
    ],
      "url": "${process.env.NEXT_PUBLIC_URL}",
      "telephone": "+320583711372",
      "email":"info@vtservices.it"
    }
  `,
  };
}
function lavoraPageJsonLD() {
  return {
    __html: `[{"@context": "https://schema.org",
      "@type": "jobPosting",
      "title": "CQV Engineer",
      "description": "CQV Engineer (minimo 5 anni di esperienza)",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "VTServices",
        "sameAs": "${process.env.NEXT_PUBLIC_URL}"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": " via della Stazione 27 Mologno Barga",
          "addressLocality": "Lucca",
          "addressRegion": "Toscana",
          "postalCode": "55051",
          "addressCountry": "IT"
        }
      },
      "experienceRequirements": "5 anni",
    },
    {
      "@context": "https://schema.org",
      "@type": "jobPosting",
      "title": "CQV Technician",
      "description": "CQV Technician (minimo 2 anni di esperienza)",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "VTServices",
        "sameAs": "${process.env.NEXT_PUBLIC_URL}"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": " via della Stazione 27 Mologno Barga",
          "addressLocality": "Lucca",
          "addressRegion": "Toscana",
          "postalCode": "55051",
          "addressCountry": "IT"
        }
      },
      "experienceRequirements": "2 anni",
    }
  ]
  `,
  };
}
const aziendaMetadata = {
  title: "VTServices Azienda",
  description:
    "La società Validations and Technical Services s.r.l. (VTS Srl), con sede legale Castelvecchio Pascoli, Barga (LU), è stata costituita nel gennaio 2013 acquisendo un ramo d’azienda da una società terza che si occupava di “Commissioning Qualifica e Validazioni”",
  keywords: "VTServices, azienda, validation, technical services",
  openGraph: {
    title: "VTServices Azienda",
    description:
      "La società Validations and Technical Services s.r.l. (VTS Srl), con sede legale Castelvecchio Pascoli, Barga (LU), è stata costituita nel gennaio 2013 acquisendo un ramo d’azienda da una società terza che si occupava di “Commissioning Qualifica e Validazioni”",
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

const homeMetadata = {
  title: "VTServices website",
  description:
    "Commissioning, qualification, validation. Da oltre 20 anni, un servizio di prim'ordine. La nostra flessibilità e volontà di adattarci alle richieste dei clienti sono ciò che ci rende un’eccellenza nel nostro settore.",
  keywords: "VTServices, Commissioning, qualification, validation, technical services",
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
}
const lavoraMetadata = {
  title: "VTServices lavora con noi",
  description: "La nostra azienda è sempre alla ricerca di personale qualificato. Se sei un professionista ambizioso e desideri unirti a un team dinamico e orientato al successo, candidati per una delle posizioni aperte",
  keywords: "VTServices, Commissioning, qualification, validation, technical services lavora con noi",
  openGraph: {
    title: "VTServices lavora con noi",
    description: "La nostra azienda è sempre alla ricerca di personale qualificato. Se sei un professionista ambizioso e desideri unirti a un team dinamico e orientato al successo, candidati per una delle posizioni aperte",
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
}

export { homePageJsonLD, aziendaPageJsonLD, lavoraPageJsonLD, aziendaMetadata, homeMetadata, lavoraMetadata }