import Header from "../componet/Header";
import Footer from "../componet/Footer";
import heroImg from "../image/istockphoto.jpg";

function AboutUs() {
  return (
    <>
      <Header />
      {/* Hero */}
      <section className="pt-20 md:pt-32 bg-gradient-to-br from-sky-50 via-teal-50 to-emerald-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center justify-center min-h-[calc(100vh-5rem)] md:min-h-[calc(80vh-8rem)]">
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">
              We make online shopping simple, fast, and delightful
            </h1>
            <p className="mt-4 md:mt-5 text-slate-600 text-base md:text-xl lg:text-2xl max-w-2xl md:max-w-3xl">
              Our platform connects you with quality products, transparent
              prices, and a seamless buying experience from discovery to
              delivery.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="/products"
                className="px-4 md:px-6 py-2 md:py-3 rounded-lg border-1 border-slate-300 hover:border-none text-slate-700 bg-transparent hover:bg-gradient-to-br 
        from-sky-500 via-teal-300 to-emerald-400 hover:text-white font-semibold transition text-sm md:text-base"
              >
                Shop Now
              </a>
              <a
                href="#values"
                className="px-4 md:px-6 py-2 md:py-3 rounded-lg border bg-transparent border-slate-300 hover:border-none hover:bg-gradient-to-br 
        from-sky-500 via-teal-300 to-emerald-400 hover:text-white text-slate-700 font-semibold transition backdrop-blur text-sm md:text-base"
              >
                Our Values
              </a>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="absolute -inset-2 md:-inset-4 bg-teal-300/30 blur-xl md:blur-2xl rounded-2xl md:rounded-3xl" />
            <img
              src={heroImg}
              alt="People shopping online"
              className="relative w-full rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl object-cover h-48 md:h-[440px]"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="container mx-auto px-4 py-12 md:py-16 lg:py-20 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
          <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
              10k+
            </div>
            <div className="mt-1 md:mt-2 text-slate-600 text-xs md:text-sm lg:text-base">Happy Customers</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
              5k+
            </div>
            <div className="mt-1 md:mt-2 text-slate-600 text-xs md:text-sm lg:text-base">Products</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
              99.9%
            </div>
            <div className="mt-1 md:mt-2 text-slate-600 text-xs md:text-sm lg:text-base">Uptime</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
              24/7
            </div>
            <div className="mt-1 md:mt-2 text-slate-600 text-xs md:text-sm lg:text-base">Support</div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="container mx-auto px-4 pb-6 md:pb-8 lg:pb-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
              Our Mission
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-slate-600">
              To empower customers with choice and confidence. We obsess over
              product quality, fair pricing, and building tools that make
              shopping enjoyable and worry‑free.
            </p>
            <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3 text-slate-700 text-sm md:text-base">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-teal-600 text-lg">✓</span> Fast, secure checkout
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-teal-600 text-lg">✓</span> Trusted sellers and
                verified reviews
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-teal-600 text-lg">✓</span> Easy returns and
                customer-first policies
              </li>
            </ul>
          </div>
          <div className="rounded-xl md:rounded-2xl border border-slate-200 p-4 md:p-6 bg-slate-50">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
              Why customers choose us
            </h3>
            <p className="mt-2 md:mt-3 text-slate-700 text-sm md:text-base">
              We bring together curated catalogs, powerful search, and proactive
              support to ensure every order arrives as expected.
            </p>
            <div className="mt-4 md:mt-5 grid grid-cols-2 gap-3 md:gap-4">
              <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-white border border-slate-200 shadow-sm text-xs md:text-sm">Secure Payments</div>
              <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-white border border-slate-200 shadow-sm text-xs md:text-sm">Lightning Delivery</div>
              <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-white border border-slate-200 shadow-sm text-xs md:text-sm">Top-rated Support</div>
              <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-white border border-slate-200 shadow-sm text-xs md:text-sm">Quality Assurance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        id="values"
        className="container mx-auto px-4 py-8 md:py-12 lg:py-16 bg-white"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-6 md:mb-8 lg:mb-10">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="text-lg md:text-xl font-semibold text-slate-900">
              Customer Obsession
            </h4>
            <p className="mt-2 text-slate-700 text-sm md:text-base">
              Every decision starts from what is best for our customers.
            </p>
          </div>
          <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="text-lg md:text-xl font-semibold text-slate-900">
              Transparency
            </h4>
            <p className="mt-2 text-slate-700 text-sm md:text-base">
              Clear policies, honest pricing, and no hidden surprises.
            </p>
          </div>
          <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="text-lg md:text-xl font-semibold text-slate-900">
              Sustainability
            </h4>
            <p className="mt-2 text-slate-700 text-sm md:text-base">
              We partner with eco-conscious brands and optimize packaging.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="container mx-auto px-4 pb-12 md:pb-16 lg:pb-20 bg-white">
        <div className="rounded-2xl md:rounded-3xl border border-slate-200 p-[1px] bg-gradient-to-r from-emerald-100 to-teal-100">
          <div className="rounded-2xl md:rounded-3xl bg-white p-6 md:p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">
                Ready to explore more?
              </h3>
              <p className="mt-2 text-slate-700 text-sm md:text-base lg:text-lg">
                Discover our latest arrivals and community favorites.
              </p>
            </div>
            <div className="md:text-right">
              <a
                href="/products"
                className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-lg border-1 border-slate-300 hover:border-none text-slate-700 bg-transparent hover:bg-gradient-to-br 
        from-sky-500 via-teal-300 to-emerald-400 hover:text-white font-semibold transition text-sm md:text-base"
              >
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default AboutUs;
