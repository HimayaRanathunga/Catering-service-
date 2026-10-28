import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IMG } from '../config'
import SectionHeading from '../components/SectionHeading'
import Lightbox from '../components/Lightbox'

const TABS = ['all', 'food', 'weddings', 'events', 'rentals']

export default function Gallery() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(null) // index into `shown`
  const [tab, setTab] = useState('all')
  const shown = IMG.gallery.filter((g) => tab === 'all' || g.cat === tab)
  const count = (k) => IMG.gallery.filter((g) => k === 'all' || g.cat === k).length
  const go = (d) => setOpen((i) => (i + d + shown.length) % shown.length)
  const cur = open !== null ? shown[open] : null

  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-6">
      <SectionHeading big title={t('gallery.title')} intro={t('gallery.intro')} />

      <div className="sticky top-16 z-30 mt-10 -mx-5 px-5 py-3 bg-ink/90 backdrop-blur border-y border-line">
        <div className="flex gap-2 overflow-x-auto [scrollbar-width:none]">
          {TABS.map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`shrink-0 flex items-center gap-2 rounded-full px-4 py-1.5 text-sm transition-all duration-300 ${tab === k ? 'bg-gold text-ink scale-105' : 'border border-line text-cream/80 hover:border-gold hover:text-gold'}`}
            >
              {t(`gallery.${k}`)}
              <span className={`text-xs ${tab === k ? 'text-ink/60' : 'text-cream/40'}`}>{count(k)}</span>
            </button>
          ))}
        </div>
      </div>

      <div key={tab} className="mt-8 columns-2 md:columns-3 gap-3 [&>button]:mb-3">
        {shown.map((g, i) => (
          <button
            key={g.src}
            onClick={() => setOpen(i)}
            style={{ animationDelay: `${Math.min(i, 12) * 55}ms` }}
            className="tile-in group relative block w-full overflow-hidden rounded-xl"
          >
            <img src={g.src} alt="" loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute bottom-3 left-4 font-serif text-2xl text-cream translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{t(`gallery.${g.cat}`)}</span>
            <span className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-gold text-ink scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
            </span>
            <span className="absolute inset-0 rounded-xl ring-2 ring-inset ring-gold/0 group-hover:ring-gold/60 transition-all duration-500" />
          </button>
        ))}
      </div>

      <Lightbox
        src={cur?.src}
        label={cur ? `${open + 1} / ${shown.length}` : ''}
        onClose={() => setOpen(null)}
        onPrev={() => go(-1)}
        onNext={() => go(1)}
      />
    </section>
  )
}
