"use client";
import Image from "next/image";
import style from "./style.module.scss";
import { motion } from "framer-motion";
import ImagePreload from "../../../components/imagePreload/imagePreload";
import { useLocale } from "next-intl";
import data from "../../../../public/data/vts_usa_inc.json";
function VtsUsaPage() {
  const locale = useLocale();
  const dataLocale = data[locale as keyof typeof data];
  return (
    <>
      <div className={"mainImage"}>
        <ImagePreload src={"/image/usa_inc_main.jpg"} alt="azienda" full />
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
      </motion.main>
    </>
  );
}

export default VtsUsaPage;
