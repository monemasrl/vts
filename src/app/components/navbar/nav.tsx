"use client";
import Image from "next/image";
import Link from "next/link";
import style from "./nav.module.scss";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const data = {
  nav: [
    {
      title: "Azienda",
      url: "/azienda",
    },
    {
      title: "Contatti",
      url: "/contatti",
    },
    {
      title: "Lavora Con Noi",
      url: "/Lavora-Con-Noi",
    },
  ],
};

function NavBar() {
  const [mobile, setMobile] = useState(false);

  return (
    <header className={style.header}>
      <nav className={style.mainNavBar}>
        <div className={style.mainNavBar__logo}>
          <a href="/">
            <Image
              src="/image/logo-white.svg"
              width={121}
              height={94}
              alt="logo"
            />
          </a>
        </div>
        <div className={style.mainNavBar__navBlock}>
          <div className={style.mainNavBar__navBlock__topData}>
            Via della Stazione 27, Barga - 0583 711372 - info@vtservices.it
          </div>
          <hr />
          <ul className={style.mainNavBar__navBlock__nav}>
            {data.nav.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.burger} onClick={() => setMobile(true)}>
          <RxHamburgerMenu />
        </div>
        <AnimatePresence>
          {mobile && (
            <motion.div
              key="mobileMenu"
              className={style.navMobile}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div
                className={style.navMobile__close}
                onClick={() => setMobile(false)}
              >
                <RxCross2 />
              </div>
              <a href="/">
                <Image
                  src="/image/logo-white.svg"
                  width={121}
                  height={94}
                  alt="logo"
                />
              </a>

              <ul className={style.navMobile__nav}>
                {data.nav.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <hr style={{ width: "50%" }} />
              <div className={style.navMobile__generic}>
                Via della Stazione 27, Barga - 0583 711372 - info@vtservices.it
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
export default NavBar;
