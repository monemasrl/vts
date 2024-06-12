"use client";
import Image from "next/image";
import style from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import ImagePreload from "../../../components/imagePreload/imagePreload";

import { useLocale } from "next-intl";

function Azienda() {
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
          La nostra azienda{" "}
        </h1>
        <section className={style.firstSection}>
          <Image
            className={style.firstSection__image}
            src={"/image/logo-inner-page.svg"}
            width={300}
            height={185}
            alt="bullet image"
          />
          <p>
            La società Validations and Technical Services s.r.l. (VTS Srl), con
            sede legale Castelvecchio Pascoli, Barga (LU), è stata costituita
            nel gennaio 2013 acquisendo un ramo d’azienda da una società terza
            che si occupava di “Commissioning Qualifica e Validazioni”. VTS Srl,
            attualmente comprende un team di 30 persone tra Projet Manager, CQV
            Engineer, e CQV Technician. Visto l’esponenziale richiesta delle
            industrie farmaceutiche di questo tipo di consulenza (CQV), VTS è in
            continua ricerca di personale, sia già qualificato che da
            formare.esecutore di test in campo e Calibrazioni della
            strumentazione critica.
          </p>
        </section>
        <section className={style.secondSection}>
          <h2>Le nostre sedi</h2>
          <ul>
            <li>
              <strong>
                La sede operativa e gli uffici di VTS Srl si trovano in via
                della Stazione 27 Mologno Barga LU.
              </strong>
            </li>
            <li>Da alcuni anni VTS Srl ha aperto 2 subsidiaries:</li>
            <li>
              <Link href="/vts_usa_inc">
                VTS USA Inc. con sede ad Atlanta GA
              </Link>
            </li>
            <li>VTS SWITZERLAND Sagl con sede a Lugano CH</li>
          </ul>
        </section>
      </motion.main>
    </>
  );
}

export default Azienda;
