import Image from "next/image";
import style from "./footer.module.scss";
function footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__first}>
        <Image src="/image/vtslogo.jpg" width={180} height={96} alt="logo" />
        <ul>
          <li>Codice fiscale/Partita IVA: 02310660465;</li>
          <li>
            Numero REA: LU 215156 Camera di Commercio Industria Artigianato e
            Agricoltura di LUCCA;
          </li>
          <li>Indirizzo PEC: validationssrl@legalmail.it</li>
        </ul>
      </div>
      <ul className={style.footer__second}>
        <li>VTS</li>
        <li>Via della Stazione 27, Barga</li>
        <li>0583 711372</li>
        <li>info@vtservices.it</li>
        <li>Wholly owned subsidiary in USA</li>
        <li>2 Ravinia Drive, Ste. 1630 - Atlanta, GA 30346</li>
      </ul>
      <ul className={style.footer__third}>
        <li>Azienda</li>
        <li>Contatti</li>
        <li>Lavora con noi</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
      </ul>
      <div className={style.footer__fourth}>
        <h3>seguici su:</h3>
        <div className={style.socialIcons}>
          <Image src="/image/what.svg" width={50} height={50} alt="logo" />
          <Image src="/image/link.svg" width={50} height={50} alt="logo" />
          <Image src="/image/instagram.svg" width={50} height={50} alt="logo" />
        </div>
      </div>
    </footer>
  );
}

export default footer;
