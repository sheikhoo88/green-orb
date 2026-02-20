import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QuoteProvider } from './context/QuoteContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './App.css'

export default function App() {
  return (
    <QuoteProvider>
      <BrowserRouter>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <QuoteModal />
      </BrowserRouter>
    </QuoteProvider>
  )
}
