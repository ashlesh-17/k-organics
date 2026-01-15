import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Dhoop", "Incense", "Gift Pack"];

  const products = [
    {
      id: 1,
      name: "Traditional Dhoop Sticks",
      category: "Dhoop",
      price: "₹299",
      image:
        "https://images.unsplash.com/photo-1600599810694-f3fc466e114d?w=500&h=500&fit=crop",
      description: "Pure natural incense with medicinal herbs",
    },
    {
      id: 2,
      name: "Rose & Sandalwood",
      category: "Incense",
      price: "₹249",
      image:
        "https://images.unsplash.com/photo-1600599810694-f3fc466e114d?w=500&h=500&fit=crop",
      description: "Floral blend for spiritual ceremonies",
    },
    {
      id: 3,
      name: "Festive Pack",
      category: "Gift Pack",
      price: "₹599",
      image:
        "https://images.unsplash.com/photo-1600599810694-f3fc466e114d?w=500&h=500&fit=crop",
      description: "Perfect for celebrations and festivals",
    },
    {
      id: 4,
      name: "Neem & Tulsi",
      category: "Incense",
      price: "₹199",
      image:
        "https://images.unsplash.com/photo-1600599810694-f3fc466e114d?w=500&h=500&fit=crop",
      description: "Purifying blend for daily use",
    },
    {
      id: 5,
      name: "Diwali Collection",
      category: "Gift Pack",
      price: "₹1,299",
      image:
        "https://images.unsplash.com/photo-1600599810694-f3fc466e114d?w=500&h=500&fit=crop",
      description: "Premium assorted collection for the festival season",
    },
    {
      id: 6,
      name: "Meditation Blend",
      category: "Incense",
      price: "₹349",
      image:
        "https://images.unsplash.com/photo-1600599810694-f3fc466e114d?w=500&h=500&fit=crop",
      description: "Calming herbs for deep meditation",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
            Our Products
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            Handcrafted organic incense for every occasion and spiritual practice
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-primary hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group cursor-pointer"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative overflow-hidden h-64 bg-secondary">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-foreground/60 text-sm mb-4">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        {product.price}
                      </span>
                      <button className="bg-primary text-primary-foreground p-2 rounded-lg hover:opacity-90 transition-opacity">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
