import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuote } from '../context/QuoteContext'
import { EVENT_IDS, PACKAGES } from '../data/catalog'
import { waLink } from '../components/WhatsAppFloat'
import SectionHeading from '../components/SectionHeading'

const field = 'w-full rounded-lg bg-coal border border-line px-4 py-3 text-sm focus:outline-none focus:border-gold'

function Step({ n, title, children }) {
  return (
    <div className="border border-line rounded-lg p-5 sm:p-6">
      <h3 className="font-serif text-lg flex items-center gap-3">
        <span className="grid place-items-center h-7 w-7 rounded-full bg-gold text-ink text-sm">{n}</span>{title}
      </h3>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export default function Quote() {
  const { t } = useTranslation()
  const { q, set, setQty } = useQuote()
  const onChange = (k) => (e) => set({ [k]: e.target.value })
  const ids = Object.keys(q.items)

  const send = (e) => {
    e.preventDefault()
    const rentals = ids.map((id) => `  - ${t(`rentals.items.${id}`)} x ${q.items[id]}`).join('\n')
    const lines = [
      t('quote.sentIntro'),
      q.event && `${t('quote.lblEvent')}: ${t(`events.items.${q.event}`)}`,
      q.date && `${t('quote.lblDate')}: ${q.date}`,
      q.guests && `${t('quote.lblGuests')}: ${q.guests}`,
      q.area && `${t('quote.lblArea')}: ${q.area}`,
      q.pkg && `${t('quote.lblPackage')}: ${t(`menu.packages.${q.pkg}.n`)}`,
      ids.length && `${t('quote.lblRentals')}:\n${rentals}`,
      `${t('quote.lblName')}: ${q.name}`,
      `${t('quote.lblPhone')}: ${q.phone}`,
      q.note && `${t('quote.lblNote')}: ${q.note}`,
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener')
  }

  return (
    <section className="mx-auto max-w-3xl px-5 pt-16">
      <SectionHeading big title={t('quote.title')} intro={t('quote.intro')} />
      <form onSubmit={send} className="mt-10 grid gap-5">
        <Step n="1" title={t('quote.s1')}>
          <div className="grid gap-4 sm:grid-cols-2">
            <select className={field} value={q.event} onChange={onChange('event')} aria-label={t('quote.eventType')}>
              <option value="">{t('quote.eventType')}</option>
              {EVENT_IDS.map((id) => <option key={id} value={id}>{t(`events.items.${id}`)}</option>)}
            </select>
            <input type="date" className={field} value={q.date} onChange={onChange('date')} aria-label={t('quote.date')} />
            <input type="number" min="1" className={field} placeholder={t('quote.guests')} value={q.guests} onChange={onChange('guests')} />
            <input className={field} placeholder={t('quote.area')} value={q.area} onChange={onChange('area')} />
          </div>
        </Step>

        <Step n="2" title={t('quote.s2')}>
          <div className="grid gap-2">
            {[{ id: '' }, ...PACKAGES].map((p) => (
              <label key={p.id} className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer text-sm transition-colors ${q.pkg === p.id ? 'border-gold' : 'border-line hover:border-gold/60'}`}>
                <input type="radio" name="pkg" className="accent-[var(--c-gold)]" checked={q.pkg === p.id} onChange={() => set({ pkg: p.id })} />
                <span>{p.id ? t(`menu.packages.${p.id}.n`) : t('quote.noCatering')}</span>
                {p.id && <span className="ml-auto hidden sm:block text-cream/50 text-xs">{t(`menu.packages.${p.id}.tag`)}</span>}
              </label>
            ))}
          </div>
        </Step>

        <Step n="3" title={t('quote.s3')}>
          {ids.length === 0 ? (
            <p className="text-sm text-cream/60">{t('quote.empty')} <Link to="/rentals" className="text-gold underline">{t('cta.viewRentals')}</Link></p>
          ) : (
            <ul className="divide-y divide-line">
              {ids.map((id) => (
                <li key={id} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                  <span>{t(`rentals.items.${id}`)}</span>
                  <span className="flex items-center gap-2">
                    <button type="button" onClick={() => setQty(id, q.items[id] - 1)} className="h-7 w-7 rounded-full border border-line hover:border-gold" aria-label="-">−</button>
                    <input
                      type="number" min="1" value={q.items[id]} aria-label={t('quote.qty')}
                      onChange={(e) => setQty(id, parseInt(e.target.value, 10) || 1)}
                      className="w-16 rounded-md bg-coal border border-line px-2 py-1 text-center"
                    />
                    <button type="button" onClick={() => setQty(id, q.items[id] + 1)} className="h-7 w-7 rounded-full border border-line hover:border-gold" aria-label="+">+</button>
                    <button type="button" onClick={() => setQty(id, 0)} className="ml-2 text-xs text-cream/50 hover:text-gold">{t('cta.remove')}</button>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Step>

        <Step n="4" title={t('quote.s4')}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input required className={field} placeholder={t('quote.name')} value={q.name} onChange={onChange('name')} />
            <input required type="tel" className={field} placeholder={t('quote.phone')} value={q.phone} onChange={onChange('phone')} />
            <textarea rows="3" className={`${field} sm:col-span-2`} placeholder={t('quote.message')} value={q.note} onChange={onChange('note')} />
          </div>
        </Step>

        <button className="rounded-full bg-gold py-3.5 text-ink font-medium hover:bg-gold-soft transition-colors">{t('quote.send')}</button>
        <p className="text-center text-xs text-cream/50">{t('quote.note')}</p>
      </form>
    </section>
  )
}
