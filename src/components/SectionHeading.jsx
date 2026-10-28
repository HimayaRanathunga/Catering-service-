export default function SectionHeading({ title, intro, center, big }) {
  return (
    <div className={center ? 'text-center mx-auto max-w-2xl' : big ? 'max-w-3xl' : 'max-w-2xl'}>
      <h2 className={`font-serif ${big ? 'text-4xl md:text-6xl leading-[1.05]' : 'text-3xl md:text-4xl'}`}>{title}</h2>
      <div className={`mt-4 h-px w-12 bg-gold ${center ? 'mx-auto' : ''}`} />
      {intro && <p className="mt-4 text-cream/70">{intro}</p>}
    </div>
  )
}
