import Image from "next/image";
import style from "./style.module.scss";

import ImagePreload from "../../../components/imagePreload/imagePreload";

import data from "../../../../public/data/vts_usa_inc.json";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";
function VtsUsaPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const dataLocale = data[locale as keyof typeof data];
  return (
    <>
      <div className={"mainImage"}>
        <ImagePreload src={"/image/usa_inc_main.jpg"} alt="azienda" full />
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
        <section className={style.firstSection}>
          <p dangerouslySetInnerHTML={{ __html: dataLocale.testo }} />

          <h3>{dataLocale.contatti}</h3>
          <ul>
            <li>{dataLocale.address.address}</li>
            <li>{dataLocale.address.state}</li>

            <li>
              <a href={"mailto:" + dataLocale.address.mail}>
                Email: {dataLocale.address.mail}
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default VtsUsaPage;
