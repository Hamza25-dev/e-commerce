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
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-br from-sky-300 via-teal-400 to-emerald-100 bg-clip-text text-transparent">E-Commerce</h1>
        <p className="mb-12 font-semibold text-xl bg-gradient-to-br from-sky-300 via-teal-400 to-emerald-100 bg-clip-text text-transparent">
          Discover premium quality men’s fashion designed for comfort, style,
          and confidence — because every man deserves to look his best.
        </p>
        <Link to="/auth" className= "px-6 py-3 bg-transparent rounded-xl hover:text-white hover:bg-gradient-to-br from-sky-400 via-teal-400 to-emerald-500 border-2 hover:border-none border-sky-500 text-sky-500 transition">
          Get Started
        </Link>
      </div>
    </section>
  );
}
