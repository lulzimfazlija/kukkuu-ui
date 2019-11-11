import { i18n as I18nInstanceType } from 'i18next';

export const getCurrentLanguage = (i18n: I18nInstanceType) =>
  (i18n && i18n.languages && i18n.languages[0]) || 'fi';
