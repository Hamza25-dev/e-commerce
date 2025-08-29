import { Link } from "react-router-dom";
import image from "../image/istockphoto.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Banner Image */}
      <img
        src={image}   
        className="absolute blur-[3px] inset-0 w-full h-full object-cover"
      />

      {/* Overlay (dark shade for readability) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 bg-gradient-to-br from-sky-300 via-teal-400 to-emerald-100 bg-clip-text text-transparent">
          E-Commerce
        </h1>
        <p className="mb-6 sm:mb-8 lg:mb-10 font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-gradient-to-br from-sky-300 via-teal-400 to-emerald-100 bg-clip-text text-transparent max-w-2xl mx-auto leading-relaxed">
          Discover premium quality men's fashion designed for comfort, style,
          and confidence — because every man deserves to look his best. From everyday essentials to statement pieces.
        </p>
        <Link 
          to="/auth" 
          className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-lg border-2 border-sky-500 hover:border-none text-sky-500 bg-transparent hover:bg-gradient-to-br from-sky-400 via-teal-400 to-emerald-500 hover:text-white font-semibold transition-all duration-300 text-sm md:text-base"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
