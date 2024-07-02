"use client";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "@/navigation";
import { BiChevronDown } from "react-icons/bi";
import "./switcher.scss";

type Props = {
  isHome: boolean;
};

export default function Switcher({ isHome }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const locales = ["it", "en"];
  const [nextLocale, setNextLocale] = useState<string>(locale);
  const [currentLocales, setCurrentLocales] = useState<string[]>(locales);
  const [isOpen, setIsOpen] = useState(false);

  function handleRouteChangeAndSwitcherClose(cur: string, locale: string) {
    if (cur !== locale) {
      setNextLocale(cur);
    }
    if (cur === locale) {
      setIsOpen((prev) => !prev);
    }
  }

  console.log(currentLocales, "currentLocales");

  useEffect(() => {
    const newLocales = currentLocales.filter((loc) => nextLocale !== loc);
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
    <div className={"wrapperSwitcher"}>
      <div className={"icon"} onClick={() => setIsOpen((prev) => !prev)}>
        <BiChevronDown />
      </div>
      <ul
        className={`${"switcher"} ${isHome ? "switcher__home" : null} ${
          isOpen ? "switcher__open" : null
        }`}
      >
        {currentLocales.map((cur) => {
          return (
            <li
              key={cur}
              value={cur}
              onClick={() => handleRouteChangeAndSwitcherClose(cur, locale)}
              className={cur === locale ? "active" : ""}
            >
              {cur}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
