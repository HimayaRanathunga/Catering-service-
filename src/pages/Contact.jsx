import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SITE } from '../config'
import { waLink } from '../components/WhatsAppFloat'
import SectionHeading from '../components/SectionHeading'

const field = 'w-full rounded-lg bg-coal border border-line px-4 py-3 text-sm focus:outline-none focus:border-gold'

export default function Contact() {
  const { t } = useTranslation()
  const [f, setF] = useState({ name: '', phone: '', event: '', date: '', guests: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const events = t('contact.events', { returnObjects: true })

  const submit = (e) => {
    e.preventDefault()
    const lines = [
      t('wa.hello'),
      `${t('contact.name')}: ${f.name}`,
      `${t('contact.phone')}: ${f.phone}`,
      `${t('contact.event')}: ${f.event}`,
      `${t('contact.date')}: ${f.date}`,
      `${t('contact.guests')}: ${f.guests}`,
      f.message && `${t('contact.message')}: ${f.message}`,
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener')
  }

  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 grid gap-12 md:grid-cols-5">
      <div className="md:col-span-3">
        <SectionHeading big title={t('contact.title')} intro={t('contact.intro')} />
        <form onSubmit={submit} className="mt-8 grid gap-4 sm:grid-cols-2">
          <input required className={field} placeholder={t('contact.name')} value={f.name} onChange={set('name')} />
          <input required type="tel" className={field} placeholder={t('contact.phone')} value={f.phone} onChange={set('phone')} />
          <select required className={field} value={f.event} onChange={set('event')}>
            <option value="" disabled>{t('contact.event')}</option>
            {events.map((x) => <option key={x} value={x}>{x}</option>)}
          </select>
          <input type="date" className={field} value={f.date} onChange={set('date')} aria-label={t('contact.date')} />
          <input type="number" min="1" className={`${field} sm:col-span-2`} placeholder={t('contact.guests')} value={f.guests} onChange={set('guests')} />
          <textarea rows="4" className={`${field} sm:col-span-2`} placeholder={t('contact.message')} value={f.message} onChange={set('message')} />
          <button className="sm:col-span-2 rounded-full bg-gold py-3 text-ink font-medium hover:bg-gold-soft transition-colors">{t('contact.send')}</button>
        </form>
      </div>

      <aside className="md:col-span-2 flex flex-col gap-6">
        <div className="border border-line rounded-lg p-6 text-sm">
          <h3 className="font-serif text-lg">{t('contact.reach')}</h3>
          <a href={`tel:${SITE.phoneDisplay.replace(/\s/g, '')}`} className="mt-3 block hover:text-gold">{SITE.phoneDisplay}</a>
          <a href={SITE.facebook} target="_blank" rel="noreferrer" className="mt-2 block hover:text-gold">Facebook</a>
          <h3 className="font-serif text-lg mt-6">{t('contact.address')}</h3>
          <p className="mt-2 text-cream/70">{t('contact.addressText')}</p>
        </div>
        <iframe
          title="map"
          className="w-full h-64 rounded-lg border border-line"
          loading="lazy"
          src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
        />
      </aside>
    </section>
  )
}
