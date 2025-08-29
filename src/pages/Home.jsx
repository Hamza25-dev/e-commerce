import { Link } from "react-router-dom";
import Header from "../componet/Header";
import Hero from "../componet/Hero";
import Footer from "../componet/Footer";

function Home() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8 md:mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-xl md:text-2xl">🚚</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 md:mb-3">Fast Delivery</h3>
              <p className="text-sm md:text-base text-slate-600">Get your orders delivered within 24-48 hours with our express shipping service.</p>
            </div>
            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-xl md:text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 md:mb-3">Secure Payment</h3>
              <p className="text-sm md:text-base text-slate-600">Shop with confidence using our secure payment gateway and buyer protection.</p>
            </div>
            <div className="text-center p-4 md:p-6 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-xl md:text-2xl">💬</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 md:mb-3">24/7 Support</h3>
              <p className="text-sm md:text-base text-slate-600">Our customer support team is available round the clock to help you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section id="categories" className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8 md:mb-12">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-xl md:text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-slate-900 text-sm md:text-base">Electronics</h3>
              <p className="text-xs md:text-sm text-slate-600 mt-1 md:mt-2">Latest gadgets</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-xl md:text-2xl">👕</span>
              </div>
              <h3 className="font-semibold text-slate-900 text-sm md:text-base">Fashion</h3>
              <p className="text-xs md:text-sm text-slate-600 mt-1 md:mt-2">Trendy styles</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-xl md:text-2xl">🏠</span>
              </div>
              <h3 className="font-semibold text-slate-900 text-sm md:text-base">Home & Living</h3>
              <p className="text-xs md:text-sm text-slate-600 mt-1 md:mt-2">Comfort & style</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-xl md:text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-slate-900 text-sm md:text-base">Books</h3>
              <p className="text-xs md:text-sm text-slate-600 mt-1 md:mt-2">Knowledge & entertainment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8 md:mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-slate-50 p-4 md:p-6 rounded-xl">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">A</div>
                <div className="ml-3">
                  <h4 className="font-semibold text-slate-900 text-sm md:text-base">Ahmed Khan</h4>
                  <p className="text-xs md:text-sm text-slate-600">Verified Buyer</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm md:text-base">"Amazing quality products and super fast delivery. Will definitely shop again!"</p>
            </div>
            <div className="bg-slate-50 p-4 md:p-6 rounded-xl">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">S</div>
                <div className="ml-3">
                  <h4 className="font-semibold text-slate-900 text-sm md:text-base">Sarah Ahmed</h4>
                  <p className="text-xs md:text-sm text-slate-600">Verified Buyer</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm md:text-base">"Great customer service and the products exceeded my expectations. Highly recommended!"</p>
            </div>
            <div className="bg-slate-50 p-4 md:p-6 rounded-xl">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">M</div>
                <div className="ml-3">
                  <h4 className="font-semibold text-slate-900 text-sm md:text-base">Muhammad Ali</h4>
                  <p className="text-xs md:text-sm text-slate-600">Verified Buyer</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm md:text-base">"Best online shopping experience ever. Fast shipping and quality products!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-12 md:py-20 bg-gradient-to-r from-teal-600 to-emerald-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Ready to Start Shopping?</h2>
          <p className="text-lg md:text-xl text-teal-100 mb-6 md:mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers and discover amazing products at great prices.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="px-6 md:px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors text-sm md:text-base">
              Browse Products
            </Link>
            <Link to="/about" className="px-6 md:px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors text-sm md:text-base">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
