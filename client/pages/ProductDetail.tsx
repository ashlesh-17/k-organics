import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Leaf, Star, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = {
    id,
    name: "Traditional Dhoop Sticks",
    category: "Dhoop",
    price: "₹299",
    rating: 4.8,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1600599810694-f3fc466e114d?w=800&h=800&fit=crop",
    description:
      "Our premium dhoop sticks are handcrafted using 100% natural ingredients sourced from India's finest organic suppliers. Each stick is made with devotion and spiritual intention.",
    ingredients: [
      "Neem",
      "Tulsi",
      "Sandalwood",
      "Jaggery",
      "Cow Dung",
      "Natural Gums",
    ],
    benefits: [
      "Purifies the environment",
      "Enhances meditation",
      "Drives away negative energy",
      "Creates spiritual atmosphere",
      "Natural mosquito repellent",
    ],
    usage:
      "Light the dhoop stick and place in a safe holder. Use during morning rituals, meditation, or prayer ceremonies. Each stick burns for approximately 30-40 minutes.",
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Rose & Sandalwood",
      price: "₹249",
      image:
        "https://images.unsplash.com/photo-1600599810694-f3fc466e114d?w=500&h=500&fit=crop",
    },
    {
      id: 4,
      name: "Neem & Tulsi",
      price: "₹199",
      image:
        "https://images.unsplash.com/photo-1600599810694-f3fc466e114d?w=500&h=500&fit=crop",
    },
    {
      id: 3,
      name: "Festive Pack",
      price: "₹599",
      image:
        "https://images.unsplash.com/photo-1600599810694-f3fc466e114d?w=500&h=500&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Product Detail Section */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/products"
            className="text-primary hover:text-accent transition-colors mb-8 inline-flex items-center gap-2"
          >
            ← Back to Products
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-accent text-sm font-semibold uppercase">
                  {product.category}
                </span>
              </div>
              <h1 className="font-serif text-4xl font-bold text-primary mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <span className="text-foreground/70">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="text-4xl font-bold text-primary mb-8">
                {product.price}
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-primary hover:bg-secondary transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-primary hover:bg-secondary transition-colors"
                  >
                    +
                  </button>
                </div>
                <button className="flex-1 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>

              {/* Features */}
              <div className="border-t border-b border-border py-6">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-5 h-5 text-neem-green" />
                  <span className="text-foreground">100% Natural Ingredients</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-5 h-5 text-neem-green" />
                  <span className="text-foreground">Handmade with Devotion</span>
                </div>
                <div className="flex items-center gap-3">
                  <Leaf className="w-5 h-5 text-neem-green" />
                  <span className="text-foreground">Eco-Friendly Packaging</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="mb-16 bg-secondary rounded-lg p-8">
            <h2 className="font-serif text-2xl font-bold text-primary mb-6">
              Ingredients
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {product.ingredients.map((ingredient, index) => (
                <div key={index} className="text-center p-4 bg-background rounded-lg">
                  <p className="font-semibold text-primary">{ingredient}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-primary mb-6">
              Benefits
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent text-2xl leading-none mt-1">✓</span>
                  <span className="text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usage Instructions */}
          <div className="mb-16 bg-sand rounded-lg p-8">
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              How to Use
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              {product.usage}
            </p>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <Link
                  key={relProduct.id}
                  to={`/product/${relProduct.id}`}
                  className="group"
                >
                  <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden bg-secondary">
                      <img
                        src={relProduct.image}
                        alt={relProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                        {relProduct.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">
                          {relProduct.price}
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
