import { Pathnames, LocalePrefix } from 'next-intl/routing';

export const defaultLocale = 'it' as const;
export const locales = ['it', 'en'] as const;

export const pathnames: Pathnames<typeof locales> = {
    '/': '/',

};

export const localePrefix: LocalePrefix<typeof locales> = 'always';
