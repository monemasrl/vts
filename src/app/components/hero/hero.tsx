"use client";
import Image from "next/image";
import style from "./hero.module.scss";
import { easeOut, motion } from "framer-motion";
import { useState } from "react";
import LoaderSite from "../loader/loader";
import { usePathname } from "next/navigation";

function Hero() {
  const isHome = usePathname() === "/";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: easeOut,
      },
    },
  };

  const [loading, setLoading] = useState(true);
  if (!isHome) {
    return null;
  }
  return (
    <section className={style.hero}>
      <Image
        className={style.hero__image}
        src={"/image/mainImage.jpg"}
        layout="fill"
        alt="Immagine Principale HomePage"
        onLoadingComplete={() => setLoading(false)}
      />
      {loading && <LoaderSite />}
      <div className={style.hero__text}>
        <motion.ul variants={container} initial="hidden" animate="show">
          <motion.li variants={item}>
            <Image
              src={"/image/bullet.svg"}
              width={50}
              height={50}
              alt="bullet image"
            />
            <span>Commissioning</span>
          </motion.li>
          <motion.li variants={item}>
            <Image
              src={"/image/bullet.svg"}
              width={50}
              height={50}
              alt="bullet image"
            />
            <span>Qualification</span>
          </motion.li>
          <motion.li variants={item}>
            <Image
              src={"/image/bullet.svg"}
              width={50}
              height={50}
              alt="bullet image"
            />
            <span>Validation</span>
          </motion.li>
        </motion.ul>{" "}
      </div>
    </section>
  );
}
export default Hero;
