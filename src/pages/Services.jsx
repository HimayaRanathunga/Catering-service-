import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IMG, SITE } from '../config'
import SectionHeading from '../components/SectionHeading'
import EventTiles from '../components/EventTiles'
import Faq from '../components/Faq'

export default function Services() {
  const { t } = useTranslation()
  const rows = [['rental', IMG.rental, '/rentals', 'viewRentals'], ['catering', IMG.catering, '/menu', 'viewMenu'], ['party', IMG.party, '/quote', 'quote']]

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16">
        <SectionHeading big title={t('services.title')} intro={t('services.intro')} />
        <div className="mt-12 flex flex-col gap-6">
          {rows.map(([k, img, to, cta], i) => (
            <div key={k} className="sticky" style={{ top: `${5 + i * 1.25}rem` }}>
              <Link to={to} className="group relative block h-[26rem] md:h-[30rem] overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/30">
                <img src={img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/60 to-transparent" />
                <span className="absolute top-5 right-6 font-serif text-8xl md:text-9xl text-gold/80 leading-none select-none transition-transform duration-500 group-hover:-translate-y-2">0{i + 1}</span>
                <div className="absolute inset-y-0 left-0 flex max-w-lg flex-col justify-end p-6 md:p-10">
                  <h3 className="font-serif text-4xl md:text-6xl leading-none">{t(`services.${k}.title`)}</h3>
                  <p className="mt-4 text-cream/80">{t(`services.${k}.text`)}</p>
                  <span className="mt-6 inline-flex items-center gap-3 text-gold">
                    <span className="border-b border-gold/0 group-hover:border-gold transition-colors">{t(`cta.${cta}`)}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-3">→</span>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <EventTiles rich />

      <section className="mx-auto max-w-6xl px-5 mt-24">
        <SectionHeading title={t('areas.title')} intro={t('areas.intro')} />
        <div className="mt-6 flex flex-wrap gap-2">
          {SITE.areas.map((a) => <span key={a} className="rounded-full border border-line px-4 py-1.5 text-sm text-cream/80 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink hover:-translate-y-0.5 cursor-default">{a}</span>)}
        </div>
      </section>

      <Faq />
    </>
  )
}
