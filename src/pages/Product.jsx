import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ArrowLeft, ShoppingCart, Leaf, Star } from "lucide-react";
import { products } from "../data/products";

export default function Product() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((p) => p.id === parseInt(id)) || products[0];

  return (
    <div>
      {/* Back Button */}
      <section className="py-4 px-4 bg-[#FFFCEF]">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/shop"
            className="flex items-center gap-2 text-[#800020] hover:text-[#E65A3A] transition-colors"
          >
            <ArrowLeft size={20} /> Back to Shop
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Info */}
            <div>
              <p className="text-[#E65A3A] text-sm font-semibold uppercase mb-4">
                {product.category}
              </p>
              <h1 className="font-serif text-4xl font-bold text-[#800020] mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#E65A3A] text-[#E65A3A]"
                    />
                  ))}
                </div>
                <span className="text-gray-600">(128 reviews)</span>
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="text-4xl font-bold text-[#800020] mb-8">
                {product.price}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-[#800020] hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="px-6 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-[#800020] hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <Button
                  variant="contained"
                  startIcon={<ShoppingCart size={20} />}
                  style={{
                    backgroundColor: "#800020",
                    color: "white",
                    padding: "12px 32px",
                    fontSize: "1rem",
                    textTransform: "none",
                    fontWeight: 600,
                    flex: 1,
                  }}
                >
                  Add to Cart
                </Button>
              </div>

              {/* Features */}
              <div className="border-t border-b border-gray-200 py-6">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-5 h-5 text-[#6FAF8C]" />{" "}
                  <span className="text-gray-700">
                    100% Natural Ingredients
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-5 h-5 text-[#6FAF8C]" />{" "}
                  <span className="text-gray-700">Handmade with Devotion</span>
                </div>
                <div className="flex items-center gap-3">
                  <Leaf className="w-5 h-5 text-[#6FAF8C]" />{" "}
                  <span className="text-gray-700">Eco-Friendly Packaging</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mb-16 bg-[#F6E9D9] rounded-lg p-8">
            <h2 className="font-serif text-2xl font-bold text-[#800020] mb-6">
              Ingredients
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {product.ingredients.map((ing, i) => (
                <div key={i} className="text-center p-4 bg-white rounded-lg">
                  <p className="font-semibold text-[#800020]">{ing}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-[#800020] mb-6">
              Benefits
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#E65A3A] text-2xl">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usage */}
          <div className="mb-16 bg-[#F6E9D9] rounded-lg p-8">
            <h2 className="font-serif text-2xl font-bold text-[#800020] mb-4">
              How to Use
            </h2>
            <p className="text-gray-700 leading-relaxed">{product.usage}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
