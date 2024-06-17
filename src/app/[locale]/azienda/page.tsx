"use client";
import Image from "next/image";
import style from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import ImagePreload from "../../../components/imagePreload/imagePreload";
import { useLocale } from "next-intl";
import data from "../../../../public/data/azienda.json";

function Azienda() {
  const locale = useLocale();
  const dataLocale = data[locale as keyof typeof data];
  return (
    <>
      <div className={"mainImage"}>
        <ImagePreload src={"/image/nostra-azienda.jpg"} alt="azienda" full />
      </div>
      <motion.main
        className={"innerPage"}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
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
      </motion.main>
    </>
  );
}

export default Azienda;
