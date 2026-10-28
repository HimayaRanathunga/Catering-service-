import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import enX from './en.extra.json'

// en.extra.json overrides/extends en.json at the top level.
i18n.use(initReactI18next).init({
  resources: { en: { translation: { ...en, ...enX } } },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

document.documentElement.lang = 'en'

export default i18n
