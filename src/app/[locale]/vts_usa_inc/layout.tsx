import React from "react";
import meta from "../../../../public/data/meta-vts_usa_inc.json";
import JsonldMetaData from "@/components/metaData/jsonldmetadata";

/* export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const data = meta[locale as keyof typeof meta].metaHtml;
  return data;
} */
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonldMetaData metadata={meta} />
      {children}
    </>
  );
}

export default Layout;
