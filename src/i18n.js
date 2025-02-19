import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend"; // Load translations from the public folder
import LanguageDetector from "i18next-browser-languagedetector"; // Detect user language

i18n
  .use(HttpApi) // Load translations from external files
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Bind with React
  .init({
    supportedLngs: ["en", "hi"], // Supported languages
    fallbackLng: "en", // Default language
    debug: true, // Set false in production

    backend: {
      loadPath: "/Language/{{lng}}/translation.json", // ✅ Corrected Path
    },

    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
