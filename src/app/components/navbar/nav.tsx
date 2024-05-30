import Image from "next/image";
import Link from "next/link";
import style from "./nav.module.scss";
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
      </nav>
    </header>
  );
}
export default NavBar;
