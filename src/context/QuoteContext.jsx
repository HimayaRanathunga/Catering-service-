import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const QuoteContext = createContext(null)
const KEY = 'quote-v1'

const empty = { items: {}, pkg: '', event: '', date: '', guests: '', area: '', name: '', phone: '', note: '' }

function load() {
  try { return { ...empty, ...JSON.parse(localStorage.getItem(KEY) || '{}') } } catch { return empty }
}

export function QuoteProvider({ children }) {
  const [q, setQ] = useState(load)

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(q)) } catch { /* ignore */ }
  }, [q])

  const value = useMemo(() => ({
    q,
    set: (patch) => setQ((s) => ({ ...s, ...patch })),
    setQty: (id, n) => setQ((s) => {
      const items = { ...s.items }
      if (n <= 0) delete items[id]; else items[id] = n
      return { ...s, items }
    }),
    toggle: (id) => setQ((s) => {
      const items = { ...s.items }
      if (items[id]) delete items[id]; else items[id] = 1
      return { ...s, items }
    }),
    count: Object.keys(q.items).length + (q.pkg ? 1 : 0),
  }), [q])

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

export const useQuote = () => useContext(QuoteContext)
