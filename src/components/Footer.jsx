import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SITE } from '../config'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-line mt-24">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="" className="h-12 w-12 rounded-full object-cover" />
            <span className="font-serif text-xl">{t('brand')}</span>
          </div>
          <p className="mt-4 text-sm text-cream/60 max-w-xs">{t('footer.tag')}</p>
        </div>
        <div className="text-sm flex flex-col gap-2">
          {[['/', 'home'], ['/rentals', 'rentals'], ['/menu', 'menu'], ['/services', 'services'], ['/gallery', 'gallery'], ['/contact', 'contact']].map(([to, k]) => (
            <Link key={to} to={to} className="text-cream/70 hover:text-gold">{t(`nav.${k}`)}</Link>
          ))}
        </div>
        <div className="text-sm text-cream/70 flex flex-col gap-2">
          <a href={`tel:${SITE.phoneDisplay.replace(/\s/g, '')}`} className="hover:text-gold">{SITE.phoneDisplay}</a>
          <span>{t('contact.addressText')}</span>
          <a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:text-gold">{t('footer.follow')}</a>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} {t('brand')}. {t('footer.rights')}
      </div>
    </footer>
  )
}
