import Image from "next/image";
import style from "./footer.module.scss";
import Link from "next/link";
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
        <li>
          <a href="tel:+390583711372">0583 711372</a>
        </li>
        <li>
          <a href="mailto:info@vtservices.it">info@vtservices.it</a>
        </li>
        <li>Wholly owned subsidiary in USA</li>
        <li>2 Ravinia Drive, Ste. 1630 - Atlanta, GA 30346</li>
      </ul>
      <ul className={style.footer__third}>
        <li>
          <Link href="/azienda">Azienda</Link>
        </li>
        <li>
          <Link href={"/#contatti"}>Contatti</Link>
        </li>
        <li>
          <Link href={"/lavora_con_noi"}>Lavora con noi</Link>
        </li>
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
