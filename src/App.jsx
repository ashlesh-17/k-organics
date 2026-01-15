import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Shipping from './pages/Shipping'
import Terms from './pages/Terms'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#FFFCEF]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
