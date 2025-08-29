import Header from "../componet/Header";
import Footer from "../componet/Footer";
import ProductCard from "../componet/ProductCard";
import img1 from "../image/photo-1.avif";
import img2 from "../image/photo-2.avif";
import img3 from "../image/photo-3.avif";
import img4 from "../image/istockphoto-2.webp";
import img5 from "../image/istockphoto-3.webp";
import img6 from "../image/premium_photo.avif";
import img7 from "../image/photo-4.avif";
import img8 from "../image/photo-5.avif";
import img9 from "../image/istockphoto-4.webp";
import img10 from "../image/istockphoto-5.webp";
import img11 from "../image/istockphoto-6.webp";
import img12 from "../image/premium_photo-2.avif";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      title: "Minimalist Backpack",
      price: 79,
      description: "Lightweight everyday carry with padded laptop sleeve.",
      imageSrc: img1,
    },
    {
      id: 2,
      title: "Running Sneakers",
      price: 89,
      description: "Breathable mesh upper with responsive cushioning.",
      imageSrc: img2,
    },
    {
      id: 3,
      title: "Ceramic Mug",
      price: 19,
      description: "Hand‑finished glaze, 350ml, microwave safe.",
      imageSrc: img3,
    },
    {
      id: 4,
      title: "Mirrorless Camera",
      price: 899,
      description: "24MP sensor, 4K video, compact body for travel.",
      imageSrc: img4,
    },
    {
      id: 5,
      title: "Wireless Earbuds",
      price: 99,
      description: "ANC, 30‑hour case battery, sweat resistant.",
      imageSrc: img5,
    },
    {
      id: 6,
      title: "Leather Messenger Bag",
      price: 149,
      description: "Full‑grain leather, adjustable strap, organizer pockets.",
      imageSrc: img6,
    },
    {
      id: 7,
      title: "Smart Fitness Watch",
      price: 119,
      description: "Heart‑rate, GPS, sleep tracking, 7‑day battery.",
      imageSrc: img7,
    },
    {
      id: 8,
      title: "Bluetooth Speaker",
      price: 69,
      description: "Punchy bass in a pocket‑sized form factor.",
      imageSrc: img8,
    },
    {
      id: 9,
      title: "Portrait Prime Lens 50mm",
      price: 249,
      description: "Fast f/1.8 aperture for creamy background blur.",
      imageSrc: img9,
    },
    {
      id: 10,
      title: "Portable NVMe SSD",
      price: 129,
      description: "Up to 1,050MB/s, metal shell, USB‑C.",
      imageSrc: img10,
    },
    {
      id: 11,
      title: "Flexible Travel Tripod",
      price: 49,
      description: "Adjustable legs, ball head, fits in any backpack.",
      imageSrc: img11,
    },
    {
      id: 12,
      title: "Studio Monitor Headphones",
      price: 139,
      description: "Neutral tuning, plush earpads, detachable cable.",
      imageSrc: img12,
    },
  ];

  const featuredProducts = products.slice(0, 4);
  const allProducts = products;
  const dealsProducts = products.slice(4, 8);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="pt-20 md:pt-28 lg:pt-32 container mx-auto px-4 bg-gradient-to-br from-sky-50 via-teal-50 to-emerald-50">
        <div className="text-center py-8 md:py-12 lg:py-16">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-900 mb-3 md:mb-4">Our Products</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">Handpicked items with great value, quality, and style.</p>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-6 md:mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((p) => (
            <ProductCard
              key={p.id}
              imageSrc={p.imageSrc}
              title={p.title}
              price={p.price}
              description={p.description}
              onClick={() => navigate(`/products/${p.id}`)}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="container mx-auto px-4 py-8 md:py-12 lg:py-16 bg-slate-50">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-6 md:mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
              <span className="text-xl md:text-2xl">📱</span>
            </div>
            <h3 className="font-semibold text-slate-900 text-sm md:text-base">Electronics</h3>
            <p className="text-xs md:text-sm text-slate-600 mt-1 md:mt-2">Smart devices & gadgets</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
              <span className="text-xl md:text-2xl">👕</span>
            </div>
            <h3 className="font-semibold text-slate-900 text-sm md:text-base">Fashion</h3>
            <p className="text-xs md:text-sm text-slate-600 mt-1 md:mt-2">Clothing & accessories</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
              <span className="text-xl md:text-2xl">🏠</span>
            </div>
            <h3 className="font-semibold text-slate-900 text-sm md:text-base">Home</h3>
            <p className="text-xs md:text-sm text-slate-600 mt-1 md:mt-2">Furniture & decor</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
              <span className="text-xl md:text-2xl">📷</span>
            </div>
            <h3 className="font-semibold text-slate-900 text-sm md:text-base">Photography</h3>
            <p className="text-xs md:text-sm text-slate-600 mt-1 md:mt-2">Cameras & lenses</p>
          </div>
        </div>
      </section>

      {/* All Products */}
      <section id="all-products" className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-6 md:mb-8">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {allProducts.map((p) => (
            <ProductCard
              key={p.id}
              imageSrc={p.imageSrc}
              title={p.title}
              price={p.price}
              description={p.description}
              onClick={() => navigate(`/products/${p.id}`)}
            />
          ))}
        </div>
      </section>

      {/* Deals Section */}
      <section id="deals" className="container mx-auto px-4 py-8 md:py-12 lg:py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-6 md:mb-8">Special Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {dealsProducts.map((p) => (
            <ProductCard
              key={p.id}
              imageSrc={p.imageSrc}
              title={p.title}
              price={p.price}
              description={p.description}
              onClick={() => navigate(`/products/${p.id}`)}
            />
          ))}
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Products;
