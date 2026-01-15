import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: '#2B5288' }}>
              K
            </div>
            <span className="hidden sm:inline font-serif text-xl font-bold text-[#2B5288]">K_organics</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#2B5288] transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#2B5288] transition-colors font-medium">About</Link>
            <Link to="/shop" className="text-gray-700 hover:text-[#2B5288] transition-colors font-medium">Shop</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#2B5288] transition-colors font-medium">Contact</Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6 text-[#2B5288]" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6 text-[#2B5288]" /> : <Menu className="w-6 h-6 text-[#2B5288]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <Link to="/" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/shop" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link to="/contact" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
