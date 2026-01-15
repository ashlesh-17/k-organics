import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { ArrowRight, Leaf, Heart, Wind, Droplets, Star } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home() {
  const testimonials = [
    { name: 'Priya Sharma', role: 'Yoga Instructor', text: 'Absolutely divine incense that elevates my meditation practice.', rating: 5 },
    { name: 'Rajesh Kumar', role: 'Spiritual Guide', text: 'Finally found authentic handmade incense that honors our traditions.', rating: 5 },
    { name: 'Anjali Patel', role: 'Wellness Enthusiast', text: 'The craftsmanship is incredible. Made with such care and devotion!', rating: 5 },
  ]

  const whyUs = [
    { icon: <Leaf className="w-8 h-8" />, title: '100% Natural', description: 'No chemicals, no additives' },
    { icon: <Heart className="w-8 h-8" />, title: 'Handmade with Devotion', description: 'Each stick crafted with care' },
    { icon: <Wind className="w-8 h-8" />, title: 'Eco-Friendly', description: 'Sustainable practices' },
    { icon: <Droplets className="w-8 h-8" />, title: 'Pure Heritage', description: 'Indian tradition rooted' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 bg-gradient-to-br from-[#FFFCEF] via-[#F6E9D9] to-[#FFFCEF]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-[#E65A3A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#6FAF8C] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#E65A3A] text-lg font-semibold mb-4 uppercase tracking-wider">Welcome to K_organics</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#2B5288] mb-6 leading-tight">
            Purely Crafted.<br />Spiritually Inspired.
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium handmade organic incense sticks rooted in Indian tradition. 100% natural, chemical-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button variant="contained" endIcon={<ArrowRight size={20} />} style={{ backgroundColor: '#2B5288', color: 'white', padding: '12px 32px', fontSize: '1rem', textTransform: 'none', fontWeight: 600 }}>
                Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outlined" style={{ borderColor: '#2B5288', color: '#2B5288', padding: '12px 32px', fontSize: '1rem', textTransform: 'none', fontWeight: 600 }}>
                Know Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E65A3A] text-sm font-semibold uppercase tracking-wider">Our Collection</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2B5288] mt-2 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our finest handcrafted selections, each made with pure natural ingredients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.slice(0, 4).map(product => <ProductCard key={product.id} product={product} />)}
          </div>
          <div className="text-center">
            <Link to="/shop">
              <Button variant="outlined" endIcon={<ArrowRight size={20} />} style={{ borderColor: '#2B5288', color: '#2B5288', padding: '12px 32px', fontSize: '1rem', textTransform: 'none', fontWeight: 600 }}>
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why K_organics */}
      <section className="py-16 md:py-24 px-4 bg-[#F6E9D9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E65A3A] text-sm font-semibold uppercase tracking-wider">Our Promise</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2B5288] mt-2">Why K_organics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="flex justify-center mb-4 text-[#E65A3A]">{item.icon}</div>
                <h3 className="font-semibold text-[#2B5288] mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Banner */}
      <section className="py-16 md:py-24 px-4 text-white" style={{ background: 'linear-gradient(to right, #2B5288, #2F6FA3)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/80 text-sm font-semibold uppercase tracking-wider">Festive Season</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">Celebrate with K_organics</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Perfect gifts for Diwali, weddings, and spiritual occasions. Beautifully packaged.</p>
          <Link to="/shop">
            <Button variant="contained" endIcon={<ArrowRight size={20} />} style={{ backgroundColor: '#E65A3A', color: 'white', padding: '12px 32px', fontSize: '1rem', textTransform: 'none', fontWeight: 600 }}>
              Explore Gift Packs
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E65A3A] text-sm font-semibold uppercase tracking-wider">Customer Stories</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2B5288] mt-2">Loved by Our Community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-[#E65A3A] text-[#E65A3A]" />)}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-[#2B5288]">{t.name}</p>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-[#F6E9D9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2B5288] mb-6">Ready to Experience Pure Spirituality?</h2>
          <p className="text-lg text-gray-700 mb-8">Discover the difference that handmade, organic incense can make.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button variant="contained" endIcon={<ArrowRight size={20} />} style={{ backgroundColor: '#2B5288', color: 'white', padding: '12px 32px', fontSize: '1rem', textTransform: 'none', fontWeight: 600 }}>
                Start Shopping
              </Button>
            </Link>
            <a href="https://wa.me/919000000000">
              <Button variant="outlined" style={{ borderColor: '#2B5288', color: '#2B5288', padding: '12px 32px', fontSize: '1rem', textTransform: 'none', fontWeight: 600 }}>
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
