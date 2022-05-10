import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import {
  isDate,
  formatRelative,
  format as formatDate,
  formatDistance,
} from "date-fns";
import { enUS, nl } from "date-fns/locale"; // import all locales we need

const locales = { enUS, nl }; // used to look up the required locale

import translationEN from "locales/en/labels.json";
import translationHI from "locales/hi/labels.json";

const resources = {
  en: {
    translation: translationEN,
  },
  hi: {
    translation: translationHI,
  },
};

i18n
  // for loading translations form the server
  .use(Backend)
  //   detects the localstorage language preference
  .use(LanguageDetector)
  //   passes down the i18n instance down to react for more react based features
  .use(initReactI18next)
  .init({
    resources,
    debug: false,
    react: {
      useSuspense: false,
    },
    fallbackLng: "hi",
    // ns: ["common", "labels", "validation"],
    // backend: {
    //   loadPath: "locales/{{lng}}/{{ns}}.json",
    //   addPath: "locales/add/{{lng}}/{{ns}}",
    //   crossDomain: true,
    // },
    // detection: {
    //   // order and from where user language should be detected
    //   order: ["localStorage", "cookie"],

    //   // keys or params to lookup language from
    //   lookupCookie: "lang",

    //   // cache user language on
    //   caches: ["localStorage", "cookie"],

    //   // optional expire and domain for set cookie
    //   cookieMinutes: 10080, // 7 days
    //   cookieDomain: "I18NEXT_LANG_COOKIE_DOMAIN",
    // },
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (isDate(value)) {
          const locale = locales[lng];

          if (format === "short") return formatDate(value, "P", { locale });
          if (format === "long") return formatDate(value, "PPPP", { locale });
          if (format === "relative")
            return formatRelative(value, new Date(), { locale });
          if (format === "ago")
            return formatDistance(value, new Date(), {
              locale,
              addSuffix: true,
            });

          return formatDate(value, format, { locale });
        }

        return value;
      },
    },
  });

export default i18n;
