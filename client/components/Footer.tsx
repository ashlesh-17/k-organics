import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-3">K_organics</h3>
            <p className="text-primary-foreground/80 text-sm">
              Premium quality, handmade organic incense sticks rooted in Indian tradition and spirituality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/919000000000"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a
                href="mailto:hello@korganics.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </a>
              <p className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4" />
                India
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60 text-sm">
            © 2024 K_organics. All rights reserved. Handcrafted with devotion.
          </p>
        </div>
      </div>
    </footer>
  );
}
