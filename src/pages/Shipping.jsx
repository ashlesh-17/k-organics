export default function Shipping() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-[#F6E9D9]">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#2B5288] mb-4">Shipping & Returns</h1>
          <p className="text-gray-700">Learn about our delivery and return policies</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2 className="font-serif text-3xl font-bold text-[#2B5288] mt-12 mb-6">Shipping Policy</h2>
          <p className="text-gray-700 leading-relaxed">We offer shipping across India with various delivery options. Orders are processed within 2-3 business days. Standard shipping typically takes 5-7 business days.</p>

          <h2 className="font-serif text-3xl font-bold text-[#2B5288] mt-12 mb-6">Shipping Costs</h2>
          <p className="text-gray-700 leading-relaxed">Shipping costs are calculated based on the delivery location and weight of your order. Free shipping is available for orders above ₹500.</p>

          <h2 className="font-serif text-3xl font-bold text-[#2B5288] mt-12 mb-6">Returns & Exchanges</h2>
          <p className="text-gray-700 leading-relaxed">We accept returns within 14 days of delivery. Products must be in original, unused condition. Please contact our support team to initiate a return.</p>

          <h2 className="font-serif text-3xl font-bold text-[#2B5288] mt-12 mb-6">Refunds</h2>
          <p className="text-gray-700 leading-relaxed">Refunds are processed within 7-10 business days after we receive and inspect your returned items. The refund will be credited to your original payment method.</p>

          <div className="mt-12 p-8 bg-[#F6E9D9] rounded-lg border border-gray-200">
            <p className="text-gray-700 font-semibold">ℹ️ This is a placeholder page. To customize with detailed Shipping & Returns policies, please continue prompting.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
