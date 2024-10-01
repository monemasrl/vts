import Image from "next/image";
import style from "./style.module.scss";
import Link from "next/link";
import ImagePreload from "../../../components/imagePreload/imagePreload";
import data from "../../../../public/data/azienda.json";
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
        <section className={style.firstSection}>
          <Image
            className={style.firstSection__image}
            src={"/image/logo-inner-page.svg"}
            width={300}
            height={185}
            alt="bullet image"
          />
          <p>{dataLocale.testo}</p>
        </section>
        <section className={style.secondSection}>
          <h2>{dataLocale.sedi.titolo}</h2>
          <ul>
            <li>
              <strong>{dataLocale.sedi.subtitolo}</strong>
            </li>
            <li>{dataLocale.sedi.testo}</li>
            {dataLocale.sedi.list.map((item, index) => {
              if (!item.url) {
                return <li key={index}>{item.titolo}</li>;
              } else {
                return (
                  <li key={index}>
                    <Link href={"/" + locale + item.url}>{item.titolo}</Link>
                  </li>
                );
              }
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Azienda;
