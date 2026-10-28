import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { RENTAL_CATS } from '../data/catalog'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import AddToQuote from '../components/AddToQuote'

export default function Rentals() {
  const { t } = useTranslation()
  const [active, setActive] = useState(RENTAL_CATS[0].id)

  // Highlight the chip of the category currently in view.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id.replace('cat-', ''))),
      { rootMargin: '-35% 0px -55% 0px' }
    )
    RENTAL_CATS.forEach((c) => { const el = document.getElementById(`cat-${c.id}`); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16">
        <SectionHeading big title={t('rentals.title')} intro={t('rentals.intro')} />
      </section>

      <div className="sticky top-16 z-30 mt-10 bg-ink/90 backdrop-blur border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-3 flex gap-2 overflow-x-auto [scrollbar-width:none]">
          {RENTAL_CATS.map((c) => (
            <a
              key={c.id}
              href={`#cat-${c.id}`}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm transition-all duration-300 ${active === c.id ? 'bg-gold text-ink scale-105' : 'border border-line text-cream/80 hover:border-gold hover:text-gold'}`}
            >
              {t(`rentals.cats.${c.id}`)}
            </a>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 mt-14 flex flex-col gap-20">
        {RENTAL_CATS.map((c, i) => (
          <Reveal key={c.id}>
            <div id={`cat-${c.id}`} className="scroll-mt-40 grid gap-8 md:grid-cols-5 items-center">
              <div className={`md:col-span-2 relative group ${i % 2 ? 'md:order-2' : ''}`}>
                <div className="aspect-[4/5] overflow-hidden rounded-xl">
                  <img src={c.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <span className="absolute -top-5 -left-2 font-serif text-7xl md:text-8xl text-gold/90 pointer-events-none select-none transition-transform duration-500 group-hover:-translate-y-1">0{i + 1}</span>
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gold/0 group-hover:ring-gold/60 transition-all duration-500 pointer-events-none" />
              </div>
              <div className="md:col-span-3">
                <h3 className="font-serif text-4xl md:text-5xl leading-none">{t(`rentals.cats.${c.id}`)}</h3>
                <ul className="mt-6 border-t border-line">
                  {c.items.map((id) => (
                    <li key={id} className="group/row flex items-center justify-between gap-3 py-4 border-b border-line transition-all duration-300 hover:bg-coal hover:pl-4 hover:pr-3">
                      <span className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold scale-0 group-hover/row:scale-100 transition-transform duration-300" />
                        {t(`rentals.items.${id}`)}
                      </span>
                      <AddToQuote id={id} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <div className="text-center mt-20 mb-4">
        <Link to="/quote" className="inline-block rounded-full bg-gold px-8 py-3.5 text-ink font-medium hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20 transition-all">{t('cta.quote')} →</Link>
      </div>
    </>
  )
}
