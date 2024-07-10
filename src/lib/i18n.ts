import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import { brTranslation, enTranslation } from '@/locales'

export const supportedLngs = {
  en: 'English',
  br: 'Português-BR',
}

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: Object.keys(supportedLngs),
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enTranslation,
      },
      br: {
        translation: brTranslation,
      },
    },
  })

export default i18n
