import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuote } from '../context/QuoteContext'

// Floating shortcut to the quote page, shown once something has been added.
export default function QuoteChip() {
  const { t } = useTranslation()
  const { count } = useQuote()
  const { pathname } = useLocation()
  if (!count || pathname === '/quote') return null
  return (
    <Link
      to="/quote"
      className="fixed bottom-6 left-5 z-50 flex items-center gap-2 rounded-full bg-gold text-ink pl-4 pr-3 py-2.5 text-sm font-medium shadow-xl hover:bg-gold-soft transition-colors"
    >
      {t('quote.cart')}
      <span className="grid place-items-center h-6 min-w-6 px-1 rounded-full bg-ink text-gold text-xs">{count}</span>
    </Link>
  )
}
