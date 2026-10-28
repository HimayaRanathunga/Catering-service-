import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { QuoteProvider } from './context/QuoteContext'
import QuoteChip from './components/QuoteChip'
import Rentals from './pages/Rentals'
import Menu from './pages/Menu'
import Quote from './pages/Quote'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  return (
    <QuoteProvider>
      <ScrollToTop />
      <Navbar />
      <main key={pathname} className="min-h-[70vh] page-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <QuoteChip />
      <WhatsAppFloat />
    </QuoteProvider>
  )
}
