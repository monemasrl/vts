import { Metadata } from "next";
import React from "react";
import { aziendaMetadata, aziendaPageJsonLD } from "../../metadata";

export const metadata: Metadata = aziendaMetadata;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={aziendaPageJsonLD()}
        key="product-jsonld"
      />
      {children}
    </>
  );
}

export default Layout;
