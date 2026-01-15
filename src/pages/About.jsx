import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-[#F6E9D9]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#2B5288] mb-6">Our Story</h1>
          <p className="text-xl text-gray-700">Founded on principles of purity, devotion, and sustainability</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#2B5288] mb-6">Building K_organics with Intention</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">K_organics was founded with a simple mission: to create premium, handmade organic incense that honors Indian traditions while respecting nature and sustainability. Each stick is crafted with care and spiritual devotion.</p>

          <h2 className="font-serif text-3xl font-bold text-[#2B5288] mb-6 mt-12">Our Process</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">Every stick is carefully crafted using 100% natural ingredients, sourced ethically and processed with care. From raw materials to the final product, we maintain the highest standards of quality and purity.</p>

          <h2 className="font-serif text-3xl font-bold text-[#2B5288] mb-6 mt-12">Our Commitment</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">We're committed to sustainability, fair practices, and delivering the purest spiritual experience to our community. K_organics represents more than just incense—it's a philosophy of living in harmony with nature.</p>

          <div className="mt-12 p-8 bg-[#F6E9D9] rounded-lg border border-gray-200">
            <p className="text-gray-700">
              This is a placeholder page. To customize the About Us section with more details about your brand story, founder values, production process, and sustainability mission, please continue prompting.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link to="/shop">
              <Button variant="contained" endIcon={<ArrowRight size={20} />} style={{ backgroundColor: '#2B5288', color: 'white', padding: '12px 32px', fontSize: '1rem', textTransform: 'none', fontWeight: 600 }}>
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
