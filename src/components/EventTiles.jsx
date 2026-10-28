import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IMG } from '../config'
import { EVENT_IDS } from '../data/catalog'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function EventTiles({ rich = false }) {
  const { t } = useTranslation()
  const [on, setOn] = useState(0)
  if (rich) {
    return (
      <section className="mx-auto max-w-6xl px-5 mt-24">
        <SectionHeading big title={t('events.title')} intro={t('events.intro')} />
        <Reveal>
          <div className="mt-10 flex flex-col md:flex-row gap-2 h-[44rem] md:h-[32rem]">
            {EVENT_IDS.map((id, i) => (
              <button
                key={id}
                onMouseEnter={() => setOn(i)}
                onFocus={() => setOn(i)}
                onClick={() => setOn(i)}
                className={`group relative overflow-hidden rounded-xl text-left transition-[flex] duration-700 ease-[cubic-bezier(.3,.7,.2,1)] ${i === on ? 'flex-[7]' : 'flex-1'}`}
              >
                <img src={IMG.events[id]} alt="" loading="lazy" className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${i === on ? 'scale-100 saturate-100' : 'scale-125 saturate-50'}`} />
                <div className={`absolute inset-0 transition-colors duration-700 ${i === on ? 'bg-gradient-to-t from-ink/90 via-transparent to-transparent' : 'bg-ink/55'}`} />
                <span className="absolute top-3 left-4 font-serif text-xl text-gold">0{i + 1}</span>
                <span className={`absolute font-serif text-cream whitespace-nowrap transition-all duration-500 ${i === on ? 'bottom-5 left-5 text-4xl md:text-5xl' : 'bottom-4 left-4 text-xl md:bottom-5 md:text-2xl md:[writing-mode:vertical-rl] md:rotate-180 md:left-1/2 md:-translate-x-1/2'}`}>{t(`events.items.${id}`)}</span>
              </button>
            ))}
          </div>
        </Reveal>
        <p className="mt-6 text-center text-cream/60 text-sm">{t('events.all')}</p>
      </section>
    )
  }
  return (
    <section className="mx-auto max-w-6xl px-5 mt-24">
      <SectionHeading big={rich} title={t('events.title')} intro={t('events.intro')} />
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
        {EVENT_IDS.map((id, i) => (
          <Reveal key={id} delay={(i % 4) * 70}>
            <div className={`group relative aspect-[4/5] overflow-hidden rounded-lg ${rich ? 'transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/20' : ''}`}>
              <img src={IMG.events[id]} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              {rich && <span className="absolute top-3 left-3 font-serif text-2xl text-gold">0{i + 1}</span>}
              {rich && <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/70 rounded-lg transition-colors duration-500" />}
              <span className={`absolute bottom-3 left-3 right-3 font-serif text-white ${rich ? 'text-2xl transition-transform duration-500 group-hover:-translate-y-2' : 'text-lg'}`}>{t(`events.items.${id}`)}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center text-cream/60 text-sm">{t('events.all')}</p>
    </section>
  )
}
