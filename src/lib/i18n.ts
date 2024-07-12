import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { brTranslation, enTranslation } from '@/locales'

export const supportedLngs = {
  en: 'English',
  br: 'Português-BR',
}

const language = localStorage.getItem('@guilherme-portifolio:language')
const languageIsValid = language && Object.keys(supportedLngs).includes(language)

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: languageIsValid ? language : 'en',
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
