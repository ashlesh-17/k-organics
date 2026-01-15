import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  Leaf,
  Droplets,
  Wind,
  Heart,
  Star,
  ArrowRight,
} from "lucide-react";

export default function Index() {
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
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Yoga Instructor",
      text: "K_organics incense transforms my meditation space. The natural aroma is absolutely divine and uplifting.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Spiritual Guide",
      text: "Finally found authentic handmade incense that honors our traditions. Pure quality, no compromises.",
      rating: 5,
    },
    {
      name: "Anjali Patel",
      role: "Wellness Enthusiast",
      text: "The craftsmanship is incredible. Each stick is made with such care and devotion. Highly recommend!",
      rating: 5,
    },
  ];

  const whyUs = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Natural",
      description: "No chemicals, no additives. Pure organic ingredients only.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Handmade with Devotion",
      description: "Each stick crafted with care and spiritual intention.",
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Eco-Friendly",
      description: "Sustainable practices and eco-conscious packaging.",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Pure Heritage",
      description: "Rooted in Indian tradition and authentic spirituality.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 bg-gradient-to-br from-background via-secondary to-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-muted rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-accent text-lg font-semibold mb-4 uppercase tracking-wider">
            Welcome to K_organics
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Purely Crafted.<br />
            Spiritually Inspired.
          </h1>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium handmade organic incense sticks rooted in Indian tradition. 100% natural, chemical-free, and crafted with devotion for your spiritual journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Know Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider">
              Our Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
              Featured Products
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Discover our finest handcrafted selections, each made with pure natural ingredients and spiritual intention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
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

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why K_organics */}
      <section className="py-16 md:py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider">
              Our Promise
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-2">
              Why K_organics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4 text-accent">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-primary mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Banner */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-primary to-temple-blue text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-wider">
            Festive Season
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
            Celebrate with K_organics
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Perfect gifts for Diwali, weddings, and spiritual occasions. Beautifully packaged with authentic handmade incense.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Gift Packs
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider">
              Customer Stories
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-2">
              Loved by Our Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-foreground/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider">
              Follow Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
              @K_organics
            </h2>
            <p className="text-foreground/70">
              Join our community of incense lovers and spiritual seekers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden bg-border">
                <img
                  src={`https://images.unsplash.com/photo-1600599810694-f3fc466e114d?w=300&h=300&fit=crop&random=${i}`}
                  alt={`Instagram post ${i}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com"
              className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Follow on Instagram
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Ready to Experience Pure Spirituality?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Discover the difference that handmade, organic incense can make in your daily practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Start Shopping
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/919000000000"
              className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
