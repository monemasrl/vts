import { Metadata } from "next";
import React from "react";
import { lavoraMetadata, lavoraPageJsonLD } from "../metadata";
export const metadata: Metadata = lavoraMetadata;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={lavoraPageJsonLD()}
        key="product-jsonld"
      />
      {children}
    </>
  );
}

export default Layout;
