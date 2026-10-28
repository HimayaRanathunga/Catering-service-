import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PACKAGES, MENU_CATS, DISH_PHOTOS } from '../data/catalog'
import { useQuote } from '../context/QuoteContext'
import Reveal from './Reveal'
import MenuIcon from './MenuIcon'

// Packages, dish collage and dish categories: shared by the Menu page and the home page.
export default function MenuBody({ rich = false }) {
  const { t } = useTranslation()
  const { q, set } = useQuote()
  const [dish, setDish] = useState(0)

  return (
    <>
      <h3 className="font-serif text-2xl mt-14">{t('menu.packagesTitle')}</h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PACKAGES.map((p, i) => {
          const on = q.pkg === p.id
          return (
            <Reveal key={p.id} delay={(i % 3) * 80}>
              <div className={`group h-full flex flex-col rounded-lg overflow-hidden border transition-all duration-500 ${on ? 'border-gold' : 'border-line'} ${rich ? 'hover:-translate-y-2 hover:border-gold hover:shadow-2xl hover:shadow-gold/10 bg-coal' : ''}`}>
                {rich && (
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-coal via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 rounded-full bg-gold px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-ink">{t(`menu.packages.${p.id}.tag`)}</span>
                  </div>
                )}
                <div className={`p-5 pb-0 ${rich ? '-mt-9 relative' : ''}`}>
                  <span className={`grid h-14 w-14 place-items-center rounded-full text-gold transition-transform duration-500 ${rich ? 'bg-ink border border-gold/60 group-hover:rotate-[360deg]' : 'bg-gold/10'}`}>
                    <MenuIcon name={p.id} className="h-8 w-8" />
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  {!rich && <span className="text-xs tracking-widest uppercase text-gold">{t(`menu.packages.${p.id}.tag`)}</span>}
                  <h4 className={`font-serif mt-1 ${rich ? 'text-3xl' : 'text-xl'}`}>{t(`menu.packages.${p.id}.n`)}</h4>
                  <p className="mt-2 text-sm text-cream/70 flex-1">{t(`menu.packages.${p.id}.d`)}</p>
                  <p className="mt-4 text-sm text-cream/50">{t('menu.contactPrice')}</p>
                  <button
                    onClick={() => set({ pkg: on ? '' : p.id })}
                    className={`mt-3 rounded-full px-4 py-2 text-sm transition-colors ${on ? 'bg-gold text-ink' : 'border border-line hover:border-gold hover:text-gold'}`}
                  >{on ? `✓ ${t('cta.added')}` : t('menu.choose')}</button>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      <h3 className={`font-serif mt-16 ${rich ? 'text-4xl md:text-5xl' : 'text-2xl'}`}>{t('menu.dishesTitle')}</h3>
      {rich ? (
        <div className="mt-8 grid gap-6 md:grid-cols-5 items-stretch">
          <div className="relative md:col-span-3 aspect-[4/3] md:aspect-auto md:min-h-[26rem] overflow-hidden rounded-2xl border border-line">
            {DISH_PHOTOS.map((d, i) => (
              <img
                key={d.id}
                src={d.src}
                alt={t(`menu.dishes.${d.id}`)}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${i === dish ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
              <span key={dish} className="font-serif text-5xl md:text-7xl leading-none text-cream animate-[page-in_.5s_ease_both]">{t(`menu.dishes.${DISH_PHOTOS[dish].id}`)}</span>
              <span className="font-serif text-2xl text-gold">0{dish + 1}<span className="text-cream/40"> / 0{DISH_PHOTOS.length}</span></span>
            </div>
          </div>
          <ul className="md:col-span-2 flex flex-col justify-between border-t border-line">
            {DISH_PHOTOS.map((d, i) => (
              <li key={d.id} className="border-b border-line">
                <button
                  onMouseEnter={() => setDish(i)}
                  onFocus={() => setDish(i)}
                  onClick={() => setDish(i)}
                  className={`group w-full flex items-center gap-4 py-3.5 text-left transition-all duration-300 ${i === dish ? 'pl-4 text-gold' : 'text-cream/70 hover:text-cream hover:pl-2'}`}
                >
                  <span className="font-serif text-lg w-8">0{i + 1}</span>
                  <span className="font-serif text-2xl flex-1">{t(`menu.dishes.${d.id}`)}</span>
                  <span className={`transition-all duration-300 ${i === dish ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}`}>→</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2">
          {DISH_PHOTOS.map((d, i) => (
            <Reveal key={d.id} delay={(i % 4) * 60} className="group relative overflow-hidden rounded-lg">
              <img src={d.src} alt={t(`menu.dishes.${d.id}`)} loading="lazy" className="h-28 md:h-36 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-2 pt-6 text-xs text-white">{t(`menu.dishes.${d.id}`)}</span>
            </Reveal>
          ))}
        </div>
      )}

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {MENU_CATS.map((c) => (
          <Reveal key={c.id} className={`flex gap-4 rounded-lg border border-line p-4 ${rich ? 'transition-all duration-300 hover:border-gold hover:bg-coal hover:-translate-y-1' : ''}`}>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
              <MenuIcon name={c.id} className="h-8 w-8" />
            </span>
            <div>
              <h4 className="font-serif text-lg">{t(`menu.cats.${c.id}`)}</h4>
              <ul className="mt-2 text-sm text-cream/70 grid gap-1">
                {c.items.map((id) => <li key={id}>• {t(`menu.dishes.${id}`)}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  )
}
