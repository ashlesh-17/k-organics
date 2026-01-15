import { useState } from 'react'
import { Button } from '@mui/material'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Dhoop', 'Incense', 'Gift Pack']

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(p => p.category === selectedCategory)

  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-[#F6E9D9]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#2B5288] mb-4">Our Products</h1>
          <p className="text-xl text-gray-700 max-w-2xl">Handcrafted organic incense for every occasion</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'contained' : 'outlined'}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  backgroundColor: selectedCategory === cat ? '#2B5288' : 'transparent',
                  color: selectedCategory === cat ? 'white' : '#2B5288',
                  borderColor: '#2B5288',
                  textTransform: 'none',
                  fontWeight: 600,
                }}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
