"use client";
import Image from "next/image";
import style from "./style.module.scss";
import LoaderSite from "../components/loader/loader";
import React from "react";
import { motion } from "framer-motion";

function VtsUsaPage() {
  const [loading, setLoading] = React.useState(true);
  return (
    <>
      <div className={"mainImage"}>
        <Image
          src="/image/usa_inc_main.jpg"
          layout="fill"
          objectFit="cover"
          alt="Usa subsidiary main image"
          quality={100}
          onLoadingComplete={() => setLoading(false)}
        />
        <LoaderSite loading={loading} />
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
          VTS USA INC.
        </h1>
        <section className={style.firstSection}>
          <p>
            <strong>
              VTS USA Inc. serves as the subsidiary of VTS Srl in the United
              States.
            </strong>
            <br /> Established to cater to the growing demand for validation and
            technical services in the American pharmaceutical industry, VTS USA
            Inc.
            <br /> operates with the same commitment to excellence and expertise
            that characterizes its parent company. <br /> With a dedicated team
            of professionals, VTS USA Inc. aims to provide top-notch consultancy
            services and support to clients across the United States, ensuring
            compliance and efficiency in their operations.{" "}
          </p>
          <h3>CONTACTS</h3>
          <ul>
            <li>8000 Avalon Blvd, Suite 100 and 200</li>
            <li>Alpharetta 30009 Atlanta, GA</li>
            <li>
              <a href="mailto:info@vtsus.com">Email: info@vtsus.com</a>
            </li>
          </ul>
        </section>
      </motion.main>
    </>
  );
}

export default VtsUsaPage;
