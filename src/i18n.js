// filepath: c:\Users\bbulc\Desktop\website\src\i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Çeviri dosyalarını backend'den (veya public klasöründen) yükler
  .use(LanguageDetector) // Kullanıcının tarayıcı dilini algılar
  .use(initReactI18next) // i18next'i react-i18next ile entegre eder
  .init({
    supportedLngs: ['en', 'tr'], // Desteklenen diller
    fallbackLng: 'en', // Eğer algılanan dil desteklenmiyorsa kullanılacak varsayılan dil
    debug: import.meta.env.DEV, // Geliştirme modunda debug açık, productionda kapalı
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'], // Algılanan dili nerede saklayacağı
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Çeviri dosyalarının yolu
    },
    react: {
      useSuspense: true, // Suspense kullanımı (önerilen true)
    },
  });

export default i18n;
