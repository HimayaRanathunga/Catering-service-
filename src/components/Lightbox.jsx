import { useEffect } from 'react'

const arrow = 'absolute top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-gold hover:text-ink transition-colors'

export default function Lightbox({ src, onClose, onPrev, onNext, label }) {
  useEffect(() => {
    if (!src) return
    const h = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onPrev?.()
      else if (e.key === 'ArrowRight') onNext?.()
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [src, onClose, onPrev, onNext])
  if (!src) return null
  return (
    <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm grid place-items-center p-4" onClick={onClose}>
      <img key={src} src={src} alt="" className="lb-in max-h-full max-w-full rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
      {label && <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-1.5 text-sm text-white backdrop-blur">{label}</span>}
      {onPrev && (
        <button className={`${arrow} left-4`} aria-label="Previous" onClick={(e) => { e.stopPropagation(); onPrev() }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
      )}
      {onNext && (
        <button className={`${arrow} right-4`} aria-label="Next" onClick={(e) => { e.stopPropagation(); onNext() }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      )}
      <button
        className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-gold hover:text-ink transition-colors"
        aria-label="Close"
        onClick={onClose}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
    </div>
  )
}
