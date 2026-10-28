import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle'

const links = [
  ['/', 'home'],
  ['/rentals', 'rentals'],
  ['/menu', 'menu'],
  ['/services', 'services'],
  ['/gallery', 'gallery'],
  ['/contact', 'contact'],
]

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm transition-colors ${isActive ? 'text-gold' : 'text-cream/80 hover:text-gold-soft'}`

  return (
    <header className="sticky top-0 z-40 bg-ink/90 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.jpeg" alt="" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-serif text-lg leading-tight hidden sm:block">{t('brand')}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map(([to, k]) => (
            <NavLink key={to} to={to} end className={linkClass}>{t(`nav.${k}`)}</NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/quote" className="hidden sm:block rounded-full bg-gold px-4 py-1.5 text-sm font-medium text-ink hover:bg-gold-soft transition-colors">{t('cta.quote')}</Link>
          <button className="lg:hidden p-2 -mr-2" aria-label="Menu" onClick={() => setOpen(!open)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line bg-ink px-5 py-4 flex flex-col gap-4">
          {links.map(([to, k]) => (
            <NavLink key={to} to={to} end className={linkClass} onClick={() => setOpen(false)}>{t(`nav.${k}`)}</NavLink>
          ))}
          <NavLink to="/quote" className={linkClass} onClick={() => setOpen(false)}>{t('cta.quote')}</NavLink>
        </nav>
      )}
    </header>
  )
}
