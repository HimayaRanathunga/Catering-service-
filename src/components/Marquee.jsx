// Endless scrolling strip of short labels.
export default function Marquee({ items }) {
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-line py-4" aria-hidden="true">
      <div className="marquee flex w-max gap-10">
        {row.map((x, i) => (
          <span key={i} className="flex items-center gap-10 text-sm tracking-widest uppercase text-cream/60 whitespace-nowrap">
            {x}<span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
