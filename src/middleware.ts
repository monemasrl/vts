import createMiddleware from 'next-intl/middleware';
import { localePrefix, defaultLocale, locales, pathnames } from './configTranslation';
export default createMiddleware({
    // A list of all locales that are supported
    defaultLocale,
    locales,
    localePrefix,
    pathnames
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(it|en)/:path*']
};