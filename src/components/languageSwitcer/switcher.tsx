"use client";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { ReactNode, useState, useEffect, use } from "react";
import { useRouter, usePathname } from "@/navigation";
import { BiChevronDown } from "react-icons/bi";
import style from "./switcher.module.scss";
type Props = {
  children: ReactNode;
  defaultValue: string;
  isHome: boolean;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  isHome,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const locales = ["it", "en"];
  const [nextLocale, setNextLocale] = useState<string>(locale);
  const [currentLocales, setCurrentLocales] = useState<string[]>(locales);
  const [isOpen, setIsOpen] = useState(false);

  function handleRouteChangeAndSwitcherClose(cur: string, locale: string) {
    setNextLocale(cur);
    if (cur === locale) {
      setIsOpen((prev) => !prev);
    }
    const newLocales = currentLocales.filter((loc) => locale !== loc);
  }

  useEffect(() => {
    const newLocales = currentLocales.filter((loc) => locale !== loc);
    setCurrentLocales([nextLocale, ...newLocales]);
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale }
    );
    return () => {
      setIsOpen(false);
    };
  }, [nextLocale]);

  return (
    <div className={style.wrapperSwitcher}>
      <div className={style.icon} onClick={() => setIsOpen((prev) => !prev)}>
        <BiChevronDown />
      </div>
      <ul
        className={`${style.switcher} ${isHome ? style.switcher__home : null} ${
          isOpen ? style.switcher__open : null
        }`}
        defaultValue={defaultValue}
      >
        {currentLocales.map((cur) => (
          <li
            key={cur}
            value={cur}
            onClick={() => handleRouteChangeAndSwitcherClose(cur, locale)}
          >
            {cur}
          </li>
        ))}
      </ul>
    </div>
  );
}
