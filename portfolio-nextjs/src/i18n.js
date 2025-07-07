"use client";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

if (!i18n.isInitialized) {
    i18n
        .use(HttpBackend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: "pt",
            supportedLngs: ["pt", "en"],
            defaultNS: "common",
            ns: ["common"],
            debug: false,
            interpolation: {
                escapeValue: false,
            },
            backend: {
                loadPath: "/locales/{{lng}}/{{ns}}.json",
            },
            detection: {
                order: ["localStorage", "navigator"],
                caches: ["localStorage"],
                lookupLocalStorage: "i18nextLng"
            },
            react: {
                useSuspense: false,
            },
        });
}

export default i18n;
