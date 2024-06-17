"use client";
import React from "react";
import { useLocale } from "next-intl";

function JsonldMetaData({ metadata }: { metadata: any }) {
  const locale = useLocale();
  const data = metadata[locale as keyof typeof metadata];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data.jsonld) }}
      key="product-jsonld"
    />
  );
}

export default JsonldMetaData;
