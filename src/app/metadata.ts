function homePageJsonLD() {
  return {
    __html: `{"@context": "https://schema.org",
      "@type": "Organization",
      "image": [
        "${process.env.NEXT_PUBLIC_URL}/image/4_3graph.jpg",
        "${process.env.NEXT_PUBLIC_URL}/image/mainimage.jpg"
       ],
      "name": "VTServices",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": " via della Stazione 27 Mologno Barga",
        "addressLocality": "Lucca",
        "addressRegion": "Toscana",
        "postalCode": "55051",
        "addressCountry": "IT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.761293,
        "longitude": -73.982294
      },
      "url": "${process.env.NEXT_PUBLIC_URL}",
      "telephone": "+12122459600",
      "email":"info@vtservices.it"
    }
  `,
  };
}
export { homePageJsonLD }