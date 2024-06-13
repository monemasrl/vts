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

const dataCards = [
  {
    titolo: "CQV Technician (minimo 2 anni di esperienza)",
    image: "tecnico",
    link: "formCandidature",
  },
  {
    titolo: "CQV Engineer (minimo 5 anni di esperienza)",
    image: "ingegnere",
    link: "formCandidature",
  },
];
const dataAccordion = [
  {
    title: "Messa in servizio",
    content:
      "Questa parte del processo CQV garantisce che tutte le strutture e le attrezzature utilizzate nel processo di produzione siano progettate e installate come previsto. Questo per garantire la sicurezza del prodotto e la sicurezza di coloro che utilizzano l'apparecchiatura nella produzione.\nLa fase di messa in servizio del processo CQV comporta molta documentazione e test. Se sei un ingegnere CQV, le tue principali responsabilità (in questa parte del processo CQV) saranno:\nDocumentare eventuali problemi riscontrati con l'apparecchiatura e come risolverli. Eseguire i protocolli di regolazione desiderati per l'apparecchiatura specificata. Proteggere l'apparecchiatura prima di metterla in servizio.",
  },
  {
    title: "Qualifica",
    content: `<div>
        Il passo successivo sarà quello di qualificare l'attrezzatura per un uso sicuro. Ci sono tre passaggi di qualificazione che devono essere seguiti in questa parte del processo CQV.
        <ul>
        <li>
          <div class='title'>Fase 1: Qualifica dell'installazione (IQ)</div>
          Questa fase del processo garantisce che l'apparecchiatura sia installata correttamente. In sostanza, ripercorre ciò che è accaduto nella prima fase (messa in servizio) e garantisce che tutta la documentazione sia in ordine.
        </li>
        <li>
        <div class='title'>Fase 2: Qualifica operativa (OQ)</div>
          La qualifica operativa comporta la verifica che l'apparecchiatura funzioni come previsto. Ad esempio, ciò potrebbe comportare la verifica che l'apparecchiatura possa funzionare per una durata specificata senza influire su nient'altro
          intorno ad essa o senza malfunzionamenti.
        </li>
        <li>
        <div class='title'>  Fase 3: Qualificazione delle prestazioni (PQ)</div>
          Questo per garantire che l'apparecchiatura possa funzionare in modo efficiente e coerente nelle condizioni in cui funzionerà.
        </li>
        </ul>
      </div>`,
  },
  {
    title: "Convalida",
    content: `La fase di convalida del processo CQV prevede più revisioni. Si tratta di una parte continua del processo CQV che viene utilizzato per garantire una sicurezza sostenibile intorno all'apparecchiatura.
    Questo passaggio può comportare il monitoraggio dei dati, in quanto ciò aiuterà un ingegnere CQV a valutare l'efficienza dell'apparecchiatura. Potrebbero anche farlo campionando l'attrezzatura e il prodotto che produce, per assicurarsi che ogni prodotto soddisfi le specifiche richieste.<br/>
    La convalida è probabilmente la parte più integrante del processo CQV, in quanto la documentazione prodotta da questa fase può aiutarti a evitare problemi di conformità se il tuo prodotto viene ritenuto difettoso.`,
  },
  {
    title: "Perchè lavorare in CQV?",
    content: `Il CQV è un settore molto interessante delle scienze della vita. In qualità di CQV, sarai in grado di migliorare le tue competenze e aumentare il tuo potenziale di guadagno. <br/>
    Se scegli di diventare Tecnico o ingegnere CQV, il tuo ruolo avrà un'ampia varietà di compiti, consentendoti di lavorare con una vasta gamma di tecnologie e prodotti. Il lato positivo è che è un settore molto interessante in cui iniziare la tua carriera! È estremamente specialistico e molto di nicchia.`,
  },
];

function LavoraConNoi() {
  const locale = useLocale();

  const dataLocale = data[locale as keyof typeof data];

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
