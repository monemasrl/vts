import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

function page({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <div>success</div>;
}

export default page;
