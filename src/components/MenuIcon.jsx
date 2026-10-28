// Simple stroke icons for the Menu page cards (24x24 grid).
const PATHS = {
  // packages
  silver: <><path d="M3 13h18a9 9 0 0 1-18 0Z" /><path d="M8 9c0-1.5 1-1.5 1-3M12 9c0-1.5 1-1.5 1-3M16 9c0-1.5 1-1.5 1-3" /></>,
  gold: <><path d="M4 12h16v2a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-2Z" /><path d="M9 8c0-1.5 1-1.5 1-3M14 8c0-1.5 1-1.5 1-3" /></>,
  premium: <><path d="M3 18h18" /><path d="M5 18a7 7 0 0 1 14 0" /><path d="M12 8V6M10.5 6h3" /></>,
  finger: <><path d="M4 14l8-8 8 8-8 6Z" /><path d="M9 12l3 3 4-4" /></>,
  tea: <><path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V9Z" /><path d="M16 11h2a2 2 0 0 1 0 4h-2" /><path d="M8 4v2M12 4v2" /></>,
  // dish categories
  rice: <><path d="M3 13h18a9 9 0 0 1-18 0Z" /><path d="M8 9c0-1.5 1-1.5 1-3M12 9c0-1.5 1-1.5 1-3M16 9c0-1.5 1-1.5 1-3" /></>,
  curries: <><path d="M4 12h16v2a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-2Z" /><path d="M9 8c0-1.5 1-1.5 1-3M14 8c0-1.5 1-1.5 1-3" /></>,
  shorteats: <><path d="M4 14l8-8 8 8-8 6Z" /><path d="M9 12l3 3 4-4" /></>,
  desserts: <><path d="M5 10h14l-1 8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2l-1-8Z" /><path d="M7 10a5 5 0 0 1 10 0" /><path d="M12 5V3" /></>,
}

export default function MenuIcon({ name, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {PATHS[name]}
    </svg>
  )
}
