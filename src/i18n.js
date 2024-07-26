import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./languages/en.json";
import translationAR from "./languages/ar.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
    .use(initReactI18next)
    .init({
        lng: "en",
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false
        }
});

export default i18n;