import Image from "next/image";
import style from "./style.module.scss";
import ImagePreload from "../../../components/imagePreload/imagePreload";
import data from "../../../../public/data/privacy.json";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

function Azienda({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const dataLocale = data[locale as keyof typeof data];
  return (
    <>
      <div className={"mainImage"}>
        <ImagePreload src={"/image/nostra-azienda.jpg"} alt="azienda" full />
      </div>
      <main className={"innerPage"}>
        <h1>
          <Image
            src={"/image/bullet.svg"}
            width={40}
            height={40}
            alt="bullet image"
          />
          {dataLocale.titolo}
        </h1>
        <section
          className={style.firstSection}
          dangerouslySetInnerHTML={{ __html: dataLocale.testo }}
        />
      </main>
    </>
  );
}

export default Azienda;
