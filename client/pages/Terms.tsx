import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
            Terms & Conditions
          </h1>
          <p className="text-foreground/70">
            Please read these terms carefully before using our website
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2 className="font-serif text-3xl font-bold text-primary mt-12 mb-6">
            Use License
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Permission is granted to temporarily download one copy of the materials (information or software) on K_organics's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>

          <h2 className="font-serif text-3xl font-bold text-primary mt-12 mb-6">
            Disclaimer
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            The materials on K_organics's website are provided on an 'as is' basis. K_organics makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="font-serif text-3xl font-bold text-primary mt-12 mb-6">
            Limitations
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            In no event shall K_organics or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on K_organics's website.
          </p>

          <h2 className="font-serif text-3xl font-bold text-primary mt-12 mb-6">
            Accuracy of Materials
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            The materials appearing on K_organics's website could include technical, typographical, or photographic errors. K_organics does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>

          <h2 className="font-serif text-3xl font-bold text-primary mt-12 mb-6">
            Links
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            K_organics has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site.
          </p>

          {/* Placeholder Note */}
          <div className="mt-12 p-8 bg-secondary rounded-lg border border-border">
            <p className="text-foreground/70 font-semibold">
              ℹ️ This is a placeholder page. To customize with complete Terms & Conditions, please continue prompting.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
