import { useEffect, useState } from 'react'

// Cross-fading background photos with a slow zoom.
export default function HeroSlides({ images }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setI((x) => (x + 1) % images.length), 6000)
    return () => clearInterval(id)
  }, [images.length])
  return (
    <>
      {images.map((src, k) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${k === i ? 'opacity-100 kenburns' : 'opacity-0'}`}
        />
      ))}
    </>
  )
}
