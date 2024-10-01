import Image from "next/image";
import style from "./home.module.scss";

import { MdOutlineChevronRight } from "react-icons/md";
import Form from "../../components/form/form";

import Splash from "../../components/splash/splash";
import Link from "next/link";
import Hero from "../../components/hero/hero";
import { useLocale, useTranslations } from "next-intl";
import data from "../../../public/data/home.json";
import { unstable_setRequestLocale } from "next-intl/server";
import AnimatedSection from "@/components/sections/animatedSection";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Navigation");
  const dataLocale = data[locale as keyof typeof data];
  return (
    <main>
      <Splash />
      <Hero />
      <AnimatedSection className={style.FirstSectionHome}>
        <div className={style.FirstSectionHome__text}>
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
                    <Link
                      style={{ color: "#485f7d" }}
                      href={"/" + locale + item.url}
                    >
                      {item.titolo}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={style.FirstSectionHome__image}>
          <Image
            src={"/image/vts.jpg"}
            width={1148}
            height={519}
            alt="first section image"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <Image
          className={style.dividerHome}
          src={"/image/dividerHome.jpg"}
          width={300}
          height={300}
          alt="divider"
          unoptimized
        />
      </AnimatedSection>
      <AnimatedSection className={style.secondSectionHome}>
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
                <div
                  className={style.secondSectionHome__specs__singleSpec__img}
                >
                  <Image
                    src={`/image/${item.image}`}
                    width={90}
                    height={120}
                    alt="iso image"
                  />
                </div>
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
      </AnimatedSection>
      <AnimatedSection className={style.thirdSectionHome}>
        <div className={style.thirdSectionHome__wrapper}>
          <div className={style.thirdSectionHome__wrapper__text}>
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

            <Link href={"/" + locale + t("lavora_con_noi.url")}>
              <div className="button">
                <span>{dataLocale.lavora.button}</span>
                <MdOutlineChevronRight />{" "}
              </div>
            </Link>
          </div>
          <div className={style.thirdSectionHome__wrapper__image}>
            <Image
              src={"/image/lavora.png"}
              width={467}
              height={479}
              alt="iso image"
            />
          </div>
          <div className={style.thirdSectionHome__wrapper__image__back} />
        </div>
        <div className={style.thirdSectionHome__background}></div>
      </AnimatedSection>
      <AnimatedSection className={style.fourthSectionHome}>
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
      </AnimatedSection>
    </main>
  );
}
