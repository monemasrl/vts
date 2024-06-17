"use client";

import Image from "next/image";
import style from "./home.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineChevronRight } from "react-icons/md";
import Form from "../../components/form/form";
import { useEffect, useState } from "react";
import Splash from "../../components/splash/splash";
import Link from "next/link";
import Hero from "../../components/hero/hero";
import { useLocale, useTranslations } from "next-intl";
import data from "../../../public/data/home.json";

export default function Home() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {}, []);

  setTimeout(() => {
    setSplash(false);
  }, 1300);
  const locale = useLocale();
  const t = useTranslations("Navigation");
  const dataLocale = data[locale as keyof typeof data];
  return (
    <main>
      <AnimatePresence>
        {splash && (
          <motion.div
            key="splash"
            initial={{ backgroundColor: "#283443", opacity: 1 }}
            animate={{ backgroundColor: "#485f7d", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Splash />
          </motion.div>
        )}
      </AnimatePresence>
      <Hero />
      <section className={style.FirstSectionHome}>
        <motion.div
          className={style.FirstSectionHome__text}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
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
          <div className={style.FirstSectionHome__text__content}>
            <p>
              {dataLocale.sezione1.testo}
              <Image
                src={"/image/iso.jpg"}
                width={300}
                height={145}
                alt="iso image"
              />
            </p>
            <ul>
              {dataLocale.sezione1.specs.map((item, index) => {
                if (!item.url) {
                  return <li key={index}>{item.titolo}</li>;
                }
                return (
                  <li key={index}>
                    <Link style={{ color: "#485f7d" }} href={locale + item.url}>
                      {item.titolo}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
        <div className={style.FirstSectionHome__image}>
          <Image
            src={"/image/vts.jpg"}
            width={1148}
            height={519}
            alt="first section image"
          />
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <Image
          className={style.dividerHome}
          src={"/image/dividerHome.jpg"}
          width={300}
          height={300}
          alt="divider"
          unoptimized
        />
      </motion.div>
      <motion.section
        className={style.secondSectionHome}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <h2>
          <Image
            src={"/image/bullet.svg"}
            width={40}
            height={40}
            alt="bullet image"
          />
          {dataLocale.sezione2.titolo}
        </h2>
        <div className={style.secondSectionHome__mainText}>
          <p>{dataLocale.sezione2.testo1}</p>
          <p>{dataLocale.sezione2.testo2}</p>
        </div>
        <div className={style.secondSectionHome__specs}>
          {dataLocale.sezione2.specs.map((item, index) => {
            return (
              <div
                key={index}
                className={style.secondSectionHome__specs__singleSpec}
              >
                <motion.div
                  className={style.secondSectionHome__specs__singleSpec__img}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={`/image/${item.image}`}
                    width={90}
                    height={120}
                    alt="iso image"
                  />
                </motion.div>
                <div
                  className={style.secondSectionHome__specs__singleSpec__txt}
                >
                  <h3>{item.title}</h3>
                  <ul>
                    {item.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>
      <motion.section
        className={style.thirdSectionHome}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <div className={style.thirdSectionHome__wrapper}>
          <motion.div
            className={style.thirdSectionHome__wrapper__text}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            <h2>
              {" "}
              <Image
                src={"/image/bullet.svg"}
                width={40}
                height={40}
                alt="bullet image"
              />
              {dataLocale.lavora.titolo}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: dataLocale.lavora.testo }} />

            <Link href={locale + t("lavora_con_noi.url")}>
              <div className="button">
                <span>{dataLocale.lavora.button}</span>
                <MdOutlineChevronRight />{" "}
              </div>
            </Link>
          </motion.div>
          <motion.div
            className={style.thirdSectionHome__wrapper__image}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <Image
              src={"/image/lavora.png"}
              width={467}
              height={479}
              alt="iso image"
            />
          </motion.div>
          <div className={style.thirdSectionHome__wrapper__image__back} />
        </div>
        <motion.div
          className={style.thirdSectionHome__background}
          initial={{ x: -500, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.5 },
          }}
          viewport={{ once: true }}
        ></motion.div>
      </motion.section>
      <motion.section
        id="contatti"
        className={style.fourthSectionHome}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.5 },
        }}
        viewport={{ once: true }}
      >
        <div className={style.fourthSectionHome__wrapper}>
          <Image src={"/image/contatti.jpg"} layout="fill" alt={"iso image"} />
          <div className={style.fourthSectionHome__wrapper__text}>
            <div className={style.fourthSectionHome__wrapper__text__content}>
              <div
                className={style.fourthSectionHome__wrapper__text__content__box}
              >
                <h2>
                  <Image
                    src={"/image/bullet.svg"}
                    width={40}
                    height={40}
                    alt="bullet image"
                  />
                  {dataLocale.contattaci.titolo}
                </h2>
                <p>{dataLocale.contattaci.testo}</p>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </motion.section>
    </main>
  );
}
