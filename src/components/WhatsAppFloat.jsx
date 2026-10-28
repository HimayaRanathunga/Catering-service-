import { useTranslation } from 'react-i18next'
import { SITE } from '../config'

export function waLink(text) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
}

export default function WhatsAppFloat() {
  const { t } = useTranslation()
  return (
    <a
      href={waLink(t('wa.hello'))}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      <span className="hidden sm:block rounded-full bg-cream text-ink text-sm px-4 py-2 shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition">
        {t('wa.float')}
      </span>
      <span className="wa-pulse grid place-items-center h-14 w-14 rounded-full bg-[#25D366] shadow-xl transition-transform group-hover:scale-105">
        <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true">
          <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.12.55 4.18 1.6 6L4 28l7.1-1.86a12 12 0 0 0 4.94 1.06C22.68 27.2 28 21.8 28 15.16 28 8.5 22.68 3 16.04 3zm0 21.9c-1.8 0-3.56-.5-5.1-1.4l-.36-.22-4.2 1.1 1.12-4.1-.24-.38a9.9 9.9 0 0 1-1.52-5.26c0-5.5 4.5-10 10.06-10 5.5 0 10 4.4 10 9.9 0 5.5-4.5 10.36-9.76 10.36zm5.5-7.5c-.3-.15-1.8-.9-2.08-1-.28-.1-.48-.15-.68.15-.2.3-.78 1-.96 1.2-.18.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3 0-.46.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.65-.93-2.25-.24-.6-.5-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.54s1.08 2.95 1.24 3.15c.15.2 2.13 3.25 5.16 4.56.72.3 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.08 1.8-.74 2.05-1.45.25-.7.25-1.3.18-1.45-.08-.13-.28-.2-.58-.35z" />
        </svg>
      </span>
    </a>
  )
}
