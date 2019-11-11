import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import fi from './fi.json';
import sv from './sv.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: [
        'path',
        'querystring',
        'cookie',
        'localStorage',
        'navigator',
        'htmlTag',
        'subdomain',
      ],
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      fi: {
        translation: fi,
      },
      sv: {
        translation: sv,
      },
    },
  });

export default i18n;
