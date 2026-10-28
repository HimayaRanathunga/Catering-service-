import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IMG, SITE } from '../config'
import { EVENT_IDS, RENTAL_CATS, KIT_GROUPS } from '../data/catalog'
import MenuBody from '../components/MenuBody'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import HeroSlides from '../components/HeroSlides'
import Marquee from '../components/Marquee'
import CountUp from '../components/CountUp'
import EventTiles from '../components/EventTiles'
import Faq from '../components/Faq'

export default function Home() {
  const { t } = useTranslation()
  const why = t('why.items', { returnObjects: true })
  const quotes = t('testimonials.items', { returnObjects: true })
  const stats = [['events', SITE.stats.events, '+'], ['guests', SITE.stats.guests, '+'], ['years', SITE.stats.years, '']]

  const bar = useRef(null)
  const heroText = useRef(null)
  // Scroll progress bar + gentle hero parallax.
  useEffect(() => {
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`
      if (heroText.current && !calm && scrollY < innerHeight) {
        heroText.current.style.transform = `translateY(${scrollY * 0.18}px)`
        heroText.current.style.opacity = String(1 - scrollY / (innerHeight * 0.9))
      }
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div ref={bar} className="fixed top-0 left-0 right-0 z-50 h-0.5 origin-left bg-gold" style={{ transform: 'scaleX(0)' }} />
      <section className="relative overflow-hidden">
        <HeroSlides images={IMG.hero} />
        <div className="absolute inset-0 bg-ink/75" />
        <div ref={heroText} className="relative mx-auto max-w-6xl px-5 py-28 md:py-44 will-change-transform">
          <p className="hero-in text-gold text-sm tracking-widest uppercase">{t('hero.eyebrow')}</p>
          <h1 style={{ animationDelay: '120ms' }} className="hero-in font-serif text-5xl md:text-8xl mt-4 max-w-4xl leading-[1.02] tracking-tight">{t('hero.title')}</h1>
          <p style={{ animationDelay: '260ms' }} className="hero-in mt-6 max-w-xl text-cream/80 text-lg">{t('hero.text')}</p>
          <div style={{ animationDelay: '400ms' }} className="hero-in mt-9 flex flex-wrap gap-3">
            <Link to="/rentals" className="shine rounded-full bg-gold px-6 py-3 text-ink font-medium hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30 transition-all">{t('cta.viewRentals')}</Link>
            <Link to="/quote" className="rounded-full border border-cream/40 px-6 py-3 hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all">{t('cta.quote')}</Link>
            <a href="#process" className="px-3 py-3 text-cream/80 hover:text-gold transition-colors">{t('cta.howItWorks')} ↓</a>
          </div>
        </div>
        <a href="#approach" aria-label="Scroll" className="bob absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex h-10 w-6 justify-center rounded-full border border-cream/50 pt-2"><span className="h-2 w-1 rounded-full bg-gold" /></a>
      </section>

      <Marquee items={EVENT_IDS.map((id) => t(`events.items.${id}`))} />

      <section id="approach" className="scroll-mt-20 mx-auto max-w-6xl px-5 mt-24 grid gap-10 md:grid-cols-2 items-center">
        <Reveal>
          <div className="group aspect-[4/5] overflow-hidden rounded-lg">
            <img src="/photos/approach.jpg" alt="" loading="lazy" className="h-full w-full object-cover object-[55%_50%] transition-transform duration-[1200ms] group-hover:scale-110" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-gold text-sm tracking-widest uppercase">{t('approach.eyebrow')}</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-[1.08]">{t('approach.title')}</h2>
          <p className="mt-6 text-cream/70 text-lg">{t('approach.text')}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 mt-28">
        <p className="text-gold text-sm tracking-widest uppercase">{t('kit.eyebrow')}</p>
        <SectionHeading big title={t('kit.title')} />
        <div className="mt-12 grid gap-px bg-line border border-line rounded-lg overflow-hidden sm:grid-cols-2">
          {KIT_GROUPS.map((g, i) => {
            const cat = RENTAL_CATS.find((c) => c.id === g.cat)
            return (
              <Reveal key={g.id} className="bg-ink" delay={(i % 2) * 80}>
                <Link to="/rentals" className="group flex gap-5 p-5 md:p-6 items-center">
                  <img src={cat.img} alt="" loading="lazy" className="h-28 w-28 md:h-32 md:w-32 shrink-0 rounded-lg object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl group-hover:text-gold transition-colors">{t(`kit.${g.id}.title`)}</h3>
                    <p className="mt-2 text-sm text-cream/65">{t(`kit.${g.id}.text`)}</p>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-5 mt-28 scroll-mt-24">
        <p className="text-gold text-sm tracking-widest uppercase">{t('process.eyebrow')}</p>
        <SectionHeading big title={t('process.title')} />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {t('process.steps', { returnObjects: true }).map((st, i) => (
            <Reveal key={i} delay={i * 100} className="border-t border-gold/60 pt-5">
              <span className="font-serif text-5xl text-gold">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-medium">{st.t}</h3>
              <p className="mt-2 text-cream/65">{st.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <EventTiles />

      <section className="mx-auto max-w-6xl px-5 mt-24">
        <div className="grid grid-cols-3 gap-4 border-y border-line py-10 text-center">
          {stats.map(([k, n, s]) => (
            <div key={k} className="group rounded-lg py-3 transition-all duration-300 hover:bg-coal hover:-translate-y-1">
              <div className="font-serif text-4xl md:text-6xl text-gold transition-transform duration-300 group-hover:scale-110"><CountUp to={n} suffix={s} /></div>
              <div className="mt-2 text-xs md:text-sm text-cream/60">{t(`stats.${k}`)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 mt-24">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <SectionHeading title={t('menu.title')} intro={t('menu.intro')} />
          <Link to="/menu" className="text-gold text-sm hover:underline">{t('cta.viewMenu')} →</Link>
        </div>
        <MenuBody rich />
      </section>

      <section className="mx-auto max-w-6xl px-5 mt-24">
        <SectionHeading title={t('why.title')} />
        <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4 border border-line rounded-lg overflow-hidden">
          {why.map((w, i) => (
            <Reveal key={i} className="group bg-ink p-6 transition-colors duration-300 hover:bg-coal" delay={i * 80}>
              <span className="inline-block text-gold font-serif text-4xl transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110">0{i + 1}</span>
              <h3 className="mt-3 font-medium">{w.t}</h3>
              <p className="mt-2 text-sm text-cream/65">{w.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 mt-24">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <SectionHeading title={t('gallery.title')} intro={t('gallery.intro')} />
          <Link to="/gallery" className="text-gold text-sm hover:underline">{t('gallery.more')} →</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {IMG.gallery.slice(0, 4).map((g) => (
            <Link to="/gallery" key={g.src} className="group relative block aspect-square overflow-hidden rounded-xl">
              <img src={g.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500" />
              <span className="absolute inset-0 grid place-items-center font-serif text-5xl text-cream opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">+</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 mt-24">
        <SectionHeading title={t('testimonials.title')} />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={i} className="group relative overflow-hidden border border-line rounded-lg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-coal" delay={i * 100}>
              <span className="absolute -top-4 right-4 font-serif text-9xl text-gold/15 select-none transition-transform duration-500 group-hover:scale-125">”</span>
              <p className="relative font-serif text-2xl leading-snug">“{q.q}”</p>
              <p className="mt-4 text-sm text-gold">{q.n}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Faq />

      <section className="mx-auto max-w-6xl px-5 mt-24">
        <div className="glow rounded-xl border border-gold/40 px-6 py-16 text-center">
          <h2 className="font-serif text-4xl md:text-6xl">{t('cta2.title')}</h2>
          <p className="mt-3 text-cream/70 max-w-lg mx-auto">{t('cta2.text')}</p>
          <Link to="/quote" className="shine inline-block mt-7 rounded-full bg-gold px-8 py-3.5 text-ink font-medium hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30 transition-all">{t('cta.quote')}</Link>
        </div>
      </section>
    </>
  )
}
