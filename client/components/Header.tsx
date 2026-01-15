import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
            <span className="font-serif text-xl font-bold text-primary hidden sm:inline">
              K_organics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-secondary rounded-lg"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link
              to="/"
              className="block px-2 py-2 text-foreground hover:bg-secondary rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-2 py-2 text-foreground hover:bg-secondary rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/products"
              className="block px-2 py-2 text-foreground hover:bg-secondary rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="block px-2 py-2 text-foreground hover:bg-secondary rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
