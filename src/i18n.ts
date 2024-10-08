import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import content from './data/content.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: content.en },
      es: { translation: content.es },
    },
    lng: 'es', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;