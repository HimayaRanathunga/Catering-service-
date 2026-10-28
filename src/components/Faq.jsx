import { useTranslation } from 'react-i18next'
import SectionHeading from './SectionHeading'

export default function Faq() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true })
  return (
    <section className="mx-auto max-w-3xl px-5 mt-24">
      <SectionHeading title={t('faq.title')} center />
      <div className="mt-8 divide-y divide-line border-y border-line">
        {items.map((x, i) => (
          <details key={i} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
              {x.q}
              <span className="text-gold text-xl transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-cream/70">{x.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
