import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import fi from './fi.json';
import sv from './sv.json';

const i18nInit = (initLocale: string) => {
  i18next.use(initReactI18next).init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    lng: initLocale || 'en',
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

  return i18next;
};

export default i18nInit;
