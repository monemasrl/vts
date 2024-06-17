import { Locale } from './../node_modules/intl-messageformat/node_modules/@formatjs/ecma402-abstract/lib/types/core.d';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { locales, pathnames, localePrefix } from './configTranslation';

export const { Link, getPathname, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({
        locales,
        pathnames,
        localePrefix,
    });