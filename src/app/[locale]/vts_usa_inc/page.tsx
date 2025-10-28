import Image from "next/image";
import style from "./style.module.scss";

import ImagePreload from "../../../components/imagePreload/imagePreload";
import Slider from "../../../components/sliders/sliderTimer";
import data from "../../../../public/data/vts_usa_inc.json";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import Accordion from "../../../components/accordion/accordion";
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
          <Slider />
          <Accordion data={dataLocale.accordion} />

          <p dangerouslySetInnerHTML={{ __html: dataLocale.testo2 }} />
        </section>
      </main>
    </>
  );
}

export default VtsUsaPage;
