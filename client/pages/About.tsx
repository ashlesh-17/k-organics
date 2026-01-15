import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Our Story
          </h1>
          <p className="text-xl text-foreground/70">
            Founded on principles of purity, devotion, and sustainability
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">
              Building K_organics with Intention
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              K_organics was founded with a simple mission: to create premium, handmade organic incense that honors Indian traditions while respecting nature and sustainability.
            </p>

            <h2 className="font-serif text-3xl font-bold text-primary mb-6 mt-12">
              Our Process
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Every stick is carefully crafted using 100% natural ingredients, sourced ethically and processed with care.
            </p>

            <h2 className="font-serif text-3xl font-bold text-primary mb-6 mt-12">
              Our Commitment
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              We're committed to sustainability, fair practices, and delivering the purest spiritual experience to our community.
            </p>
          </div>

          {/* Placeholder Note */}
          <div className="mt-12 p-8 bg-secondary rounded-lg border border-border">
            <p className="text-foreground/70">
              This is a placeholder page. To customize the About Us section with more details about your brand story, founder values, production process, and sustainability mission, please continue prompting.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
