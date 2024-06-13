import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./localeSwitcherSelect";

export default function LocaleSwitcher({ isHome }: { isHome: boolean }) {
  const locale = useLocale();
  const locales = ["it", "en"];

  return (
    <LocaleSwitcherSelect defaultValue={locale} isHome={isHome}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
