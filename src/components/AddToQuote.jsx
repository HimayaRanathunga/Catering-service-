import { useTranslation } from 'react-i18next'
import { useQuote } from '../context/QuoteContext'

export default function AddToQuote({ id }) {
  const { t } = useTranslation()
  const { q, toggle } = useQuote()
  const on = !!q.items[id]
  return (
    <button
      onClick={() => toggle(id)}
      aria-pressed={on}
      className={`rounded-full border px-3 py-1 text-xs transition-colors ${on ? 'bg-gold border-gold text-ink' : 'border-line text-cream/80 hover:border-gold hover:text-gold'}`}
    >
      {on ? `✓ ${t('cta.added')}` : `+ ${t('cta.addQuote')}`}
    </button>
  )
}
