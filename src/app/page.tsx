"use client";
import Image from "next/image";
import style from "./home.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineChevronRight } from "react-icons/md";
import Form from "./components/form/form";
import { useState } from "react";
import Splash from "./components/splash/splash";
const secondSectionHomeData = {
  title:
    "Offriamo consulenza e servizi di Commissioning, Qualification and Validation",
  text1:
    "Consulenza specializzata per le attività di Commissioning, Qualifica e Validazioni di macchinari, apparecchiature, sistemi di controllo e automazione, sistemi informatici per la gestione di fabbrica, utilities, ambienti a contaminazione controllata per produzioni sterili.",
  text2:
    "Attività di monitoraggio dei locali a contaminazione controllata, taratura della strumentazione critica, consulenza sull’analisi dei rischi e procedure operative standard dell’industria farmaceutica, in accordo a quanto richiesto dalle normative che regolamentano le attività negli opifici di produzione. Noleggio di strumenti per la qualifica e taratura.",
  specs: [
    {
      title: "Ingegneria",
      image: "ingegneria.svg",
      list: [
        "Definizione dei requisiti utente (URS)",
        "Auditing e consulenze tecniche su impianti, processi, apparecchiature",
        "Servizi di revisione progettuale (value engineering, GMP review)",
        "traduzione di manualistica e documentazione tecnica",
      ],
    },
    {
      title: "Consulenza e Gestione",
      image: "consulenza.svg",
      list: [
        "Project Management",
        "Consulenza tecnica specialistica",
        "Risoluzione di problemi impiantistici",
        "Pianificazione della manutenzione e calibrazione",
        "Audit a fornitori",
        "Audit Energetici",
      ],
    },
    {
      title: "Commissioning Qualifica e Validazioni",
      image: "commissioning.svg",
      list: [
        "Preparazione di Validation Master Plan",
        "Esecuzione di Design Qualification (DQ)",
        "Esecuzione di analisi di rischio su impianti, processi e apparecchiature",
        "Coordinamento ed esecuzione di collaudi presso il fornitore (FAT) di sistemi, apparecchiature e impianti",
        " Assistenza a start-up di impianti, macchinari, servizi",
        "Commissioning di impianti, macchinari, servizi",
        "  Coordinamento ed esecuzione di collaudi presso il sito (SAT) di apparecchiature e impianti",
        "Calibrazione di strumentazione",
        "Attività di qualifica (IQ, OQ, PQ) di impianti e sistemi",
        "Attività di riqualifica e verifica periodica",
        "Supporto alla Convalida di Processo",
      ],
    },
    {
      title: "Settori e Specializzazioni",
      image: "settori.svg",
      list: [
        "Impianti di processo “bulk”",
        "Catena del freddo (“Cold chain”)",
        "Line di lavorazione “Fill-finish”",
        "Sistemi di condizionamento (HVAC)",
        "Tecnologie di packaging",
        "Utilities critiche (PW, WFI, CS, ecc.)",
      ],
    },
  ],
};

export default function Home() {
  const [splash, setSplash] = useState(true);

  setTimeout(() => {
    setSplash(false);
  }, 1000);

  return (
    <AnimatePresence>
      {splash ? (
        <motion.div
          key="splash"
          initial={{ backgroundColor: "#283443", opacity: 1 }}
          animate={{ backgroundColor: "#485f7d", opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Splash />
        </motion.div>
      ) : (
        <main className={style.home}>
          <section className={style.FirstSectionHome}>
            <motion.div
              className={style.FirstSectionHome__text}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
              <h1>
                <Image
                  src={"/image/bullet.svg"}
                  width={40}
                  height={40}
                  alt="bullet image"
                />
                Da oltre 20 anni, un servizio di prim’ordine
              </h1>
              <div className={style.FirstSectionHome__text__content}>
                <p>
                  Gestiamo le richieste con competenza, assicurando che la tua
                  esperienza sia fluida e senza problemi. Siamo partner
                  affidabili. Collaboriamo attivamente con i nostri clienti per
                  capire le loro esigenze specifiche e offrire soluzioni
                  personalizzate. La nostra flessibilità e volontà di adattarci
                  alle richieste dei clienti sono ciò che ci rende un’eccellenza
                  nel nostro settore.
                  <Image
                    src={"/image/iso.jpg"}
                    width={300}
                    height={145}
                    alt="iso image"
                  />
                </p>
                <ul>
                  <li>1 sede Italia</li>
                  <li>1 Subsidiary Svizzera</li>
                  <li>1 Subsidiary USA</li>
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
          >
            <h2>
              <Image
                src={"/image/bullet.svg"}
                width={40}
                height={40}
                alt="bullet image"
              />
              Offriamo consulenza e servizi di Commissioning, Qualification and
              Validation
            </h2>
            <div className={style.secondSectionHome__mainText}>
              <p>
                Consulenza specializzata per le attività di Commissioning,
                Qualifica e Validazioni di macchinari, apparecchiature, sistemi
                di controllo e automazione, sistemi informatici per la gestione
                di fabbrica, utilities, ambienti a contaminazione controllata
                per produzioni sterili.
              </p>
              <p>
                Attività di monitoraggio dei locali a contaminazione
                controllata, taratura della strumentazione critica, consulenza
                sull’analisi dei rischi e procedure operative standard
                dell’industria farmaceutica, in accordo a quanto richiesto dalle
                normative che regolamentano le attività negli opifici di
                produzione. Noleggio di strumenti per la qualifica e taratura.
              </p>
            </div>
            <div className={style.secondSectionHome__specs}>
              {secondSectionHomeData.specs.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={style.secondSectionHome__specs__singleSpec}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1 },
                      }}
                    >
                      <Image
                        src={`/image/${item.image}`}
                        width={90}
                        height={120}
                        alt="iso image"
                      />
                    </motion.div>
                    <div
                      className={
                        style.secondSectionHome__specs__singleSpec__txt
                      }
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
          >
            <div className={style.thirdSectionHome__wrapper}>
              <motion.div
                className={style.thirdSectionHome__wrapper__text}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              >
                <h2>
                  {" "}
                  <Image
                    src={"/image/bullet.svg"}
                    width={40}
                    height={40}
                    alt="bullet image"
                  />
                  Lavora con noi
                </h2>
                <p>
                  La nostra azienda è sempre alla ricerca di personale
                  qualificato.
                  <br />
                  Se sei un professionista ambizioso e desideri unirti a un team
                  dinamico e orientato al successo, candidati per una delle
                  posizioni aperte{" "}
                </p>
                <button>
                  <span>Vai alle candidature</span>
                  <MdOutlineChevronRight />
                </button>
              </motion.div>
              <motion.div
                className={style.thirdSectionHome__wrapper__image}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              >
                <Image
                  src={"/image/lavora.png"}
                  width={467}
                  height={479}
                  alt="iso image"
                />
              </motion.div>
              <div
                className={style.thirdSectionHome__wrapper__image__back}
              ></div>
            </div>
            <div className={style.thirdSectionHome__background}></div>
          </motion.section>
          <section className={style.fourthSectionHome}>
            <div className={style.fourthSectionHome__wrapper}>
              <Image
                src={"/image/contatti.jpg"}
                layout="fill"
                alt={"iso image"}
              />
              <div className={style.fourthSectionHome__wrapper__text}>
                <div
                  className={style.fourthSectionHome__wrapper__text__content}
                >
                  <div
                    className={
                      style.fourthSectionHome__wrapper__text__content__box
                    }
                  >
                    <h2>
                      {" "}
                      <Image
                        src={"/image/bullet.svg"}
                        width={40}
                        height={40}
                        alt="bullet image"
                      />
                      Contattaci
                    </h2>
                    <p>
                      Se desideri ricevere ulteriori informazioni sui nostri
                      servizi, se hai domande o richieste, compila il form
                    </p>
                  </div>
                </div>
                <Form />{" "}
              </div>
            </div>
          </section>
        </main>
      )}
    </AnimatePresence>
  );
}
