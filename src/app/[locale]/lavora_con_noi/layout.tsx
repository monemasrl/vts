import JsonldMetaData from "@/components/metaData/jsonldmetadata";
import React from "react";
import meta from "../../../../public/data/meta-lavora_con_noi.json";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  if (locale === "it") {
    return meta.it.metaHtml;
  } else if (locale === "en") {
    return meta.en.metaHtml;
  }
}
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonldMetaData metadata={meta} />
      {children}
    </>
  );
}

export default Layout;
