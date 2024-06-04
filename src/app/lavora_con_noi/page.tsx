import style from "./style.module.scss";
import Image from "next/image";
import CardsLavora from "../components/cards/cardsLavora";
import Accordion from "../components/accordion/accordion";
import FormLavora from "../components/form/formLavora";
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
  return (
    <>
      <div className={"mainImage"}>
        <Image
          src="/image/lavora-con-noi.jpg"
          layout="fill"
          objectFit="cover"
          alt="lavora con noi"
        />
      </div>
      <main className={"innerPage"}>
        <h1>
          <Image
            src={"/image/bullet.svg"}
            width={40}
            height={40}
            alt="bullet image"
          />
          Lavora con noi{" "}
        </h1>
        <section className={style.annunci}>
          <CardsLavora dataCards={dataCards} />
        </section>
        <section className={style.warning}>
          <div className={style.warning__head}>
            <Image
              src="/image/warning.svg"
              width={60}
              height={60}
              alt="warning"
            />
            <p>
              Se non hai esperienza in questo settore e sei interessato
              intraprendere questa attività, ti offriamo un periodo formativo,
              requisiti minimi:
            </p>
          </div>
          <div className={style.warning__content}>
            <div>
              <h3>CQV Engineer:</h3>
              <ul>
                <li>
                  Laurea più attinente: Ingegneria Chimica Ingegneria
                  Elettronica
                </li>
                <li>Ingegneria dell’Automazione</li>
                <li>Ingegneria Informatica</li>
                <li>Ingegneria delle Telecomunicazioni</li>
                <li>Chimica e Tecnologie Farmaceutiche</li>
              </ul>
            </div>
            <div>
              <h3>CQV Technician</h3>
              <ul>
                <li>Istruzione superiore più attinente:</li>
                <li>Diploma di Perito Elettronico e automazione</li>
                <li>Diploma di Perito Chimico</li>
                <li>Diploma di Perito Informatico</li>
              </ul>
            </div>
          </div>
          <div></div>
        </section>
        <section className={style.info}>
          <h2>Che cos&apos;è il processo di convalida CQV?</h2>
          <p>
            Quando viene prodotto un farmaco o un prodotto medico, ci sono molti
            rischi che ne derivano. Questo è il motivo per cui è fondamentale
            che esistano processi per monitorare e valutare la sicurezza delle
            apparecchiature utilizzate per sviluppare prodotti farmaceutici. Per
            fare ciò, le aziende farmaceutiche seguono il processo CQV CQV è
            l&apos;acronimo di Commissioning, Qualification and Validation. Si
            tratta di un processo di test in più fasi che consente alle aziende
            farmaceutiche di testare le proprie apparecchiature di produzione in
            base agli standard, alle normative e ai requisiti del settore.
          </p>
          <Accordion data={dataAccordion} />
        </section>

        <section id="formCandidature" className={style.form}>
          <h2>Rientri in un profilo che ricerchiamo? </h2>
          <FormLavora candidature={dataCards} />
        </section>
      </main>
    </>
  );
}
export default LavoraConNoi;
