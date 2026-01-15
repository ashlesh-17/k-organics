import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-foreground/70">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2 className="font-serif text-3xl font-bold text-primary mt-12 mb-6">
            Introduction
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            K_organics ("we" or "us" or "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>

          <h2 className="font-serif text-3xl font-bold text-primary mt-12 mb-6">
            Information Collection and Use
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>

          <h2 className="font-serif text-3xl font-bold text-primary mt-12 mb-6">
            Security of Data
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>

          <h2 className="font-serif text-3xl font-bold text-primary mt-12 mb-6">
            Changes to This Privacy Policy
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          {/* Placeholder Note */}
          <div className="mt-12 p-8 bg-secondary rounded-lg border border-border">
            <p className="text-foreground/70 font-semibold">
              ℹ️ This is a placeholder page. To customize with your complete Privacy Policy details, please continue prompting.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
