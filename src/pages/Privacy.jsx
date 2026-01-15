export default function Privacy() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-[#F6E9D9]">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#800020] mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-700">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2 className="font-serif text-3xl font-bold text-[#800020] mt-12 mb-6">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            K_organics operates the website. This page informs you of our
            policies regarding the collection, use, and disclosure of personal
            data when you use our Service.
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#800020] mt-12 mb-6">
            Information Collection and Use
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#800020] mt-12 mb-6">
            Security of Data
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The security of your data is important to us, but remember that no
            method of transmission over the Internet or method of electronic
            storage is 100% secure.
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#800020] mt-12 mb-6">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>

          <div className="mt-12 p-8 bg-[#F6E9D9] rounded-lg border border-gray-200">
            <p className="text-gray-700 font-semibold">
              ℹ️ This is a placeholder page. To customize with your complete
              Privacy Policy details, please continue prompting.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
