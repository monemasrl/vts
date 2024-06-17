"use client";
import style from "./style.module.scss";
import Image from "next/image";
import CardsLavora from "../../../components/cards/cardsLavora";
import Accordion from "../../../components/accordion/accordion";
import FormLavoraConNoi from "../../../components/form/formLavora";
import { motion } from "framer-motion";
import ImagePreload from "../../../components/imagePreload/imagePreload";
import { useLocale } from "next-intl";
import data from "../../../../public/data/lavora_con_noi.json";

function LavoraConNoi() {
  const locale = useLocale();

  const dataLocale = data[locale as keyof typeof data];
  const dataCards = dataLocale.annunci;
  return (
    <>
      <div className={"mainImage"}>
        <ImagePreload
          src="/image/lavora-con-noi.jpg"
          alt="lavora con noi"
          full={true}
        />
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
          {dataLocale.sezione1.titolo}
        </h1>
        <section className={style.annunci}>
          <CardsLavora dataCards={dataCards} />
        </section>
        <section className={style.warning}>
          <div className={style.warning__head}>
            {" "}
            <Image
              src="/image/warning.svg"
              width={60}
              height={60}
              alt="warning"
            />{" "}
            <p>{dataLocale.sezione1.testo1}</p>
          </div>
          <div className={style.warning__content}>
            <div>
              <h3>{dataLocale.sezione1.left.titolo}</h3>
              <ul>
                {dataLocale.sezione1.left.list.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3>{dataLocale.sezione1.right.titolo}</h3>
              <ul>
                {dataLocale.sezione1.right.list.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
          <div></div>
        </section>
        <section className={style.info}>
          <h2>{dataLocale.sezione2.titolo}</h2>
          <p>{dataLocale.sezione2.testo}</p>
          <Accordion data={dataLocale.sezione2.list} />
        </section>

        <section id="formCandidature" className={style.form}>
          <h2>{dataLocale.contatti.titolo}</h2>
          <FormLavoraConNoi candidature={dataCards} />
        </section>
      </motion.main>
    </>
  );
}
export default LavoraConNoi;
