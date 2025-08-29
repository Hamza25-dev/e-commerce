import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

function Header({ children, className = "" }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);

  const isloggedIn = false;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 👇 agar hero visible hai to navbar transparent
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 } // hero 10% visible hote tak transparent
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed shadow-md  top-0 left-0 w-full z-50 bg-transparent body-font ${
        isScrolled
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <a className="flex title-font font-medium items-center">
            <span className="cursor-pointer text-xl lg:text-2xl font-bold bg-gradient-to-br from-sky-400 via-teal-400 to-emerald-500 text-transparent bg-clip-text">
              E-Commerce
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {/* Home Page Links */}
          <div className="flex items-center space-x-4 xl:space-x-6">
            <Link
              onClick={() => navigate("/")}
              to="/"
              className="text-sky-300 hover:bg-gradient-to-br hover:from-sky-400 hover:via-teal-400 hover:to-emerald-500 hover:text-transparent hover:bg-clip-text transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Home
            </Link>
            <Link
              onClick={() => navigate("/#testimonials")}
              to="/#testimonials"
              className="text-sky-300 hover:bg-gradient-to-br hover:from-sky-400 hover:via-teal-400 hover:to-emerald-500 hover:text-transparent hover:bg-clip-text transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Reviews
            </Link>
          </div>

          {/* About Page Links */}
          <div className="flex items-center space-x-4 xl:space-x-6">
            <Link
              onClick={() => navigate("/about")}
              to="/about"
              className="text-sky-300 hover:bg-gradient-to-br hover:from-sky-400 hover:via-teal-400 hover:to-emerald-500 hover:text-transparent hover:bg-clip-text transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              About
            </Link>
            <Link
              onClick={() => navigate("/about#mission")}
              to="/about#mission"
              className="text-sky-300 hover:bg-gradient-to-br hover:from-sky-400 hover:via-teal-400 hover:to-emerald-500 hover:text-transparent hover:bg-clip-text transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Mission
            </Link>
            <Link
              onClick={() => navigate("/about#values")}
              to="/about#values"
              className="text-sky-300 hover:bg-gradient-to-br hover:from-sky-400 hover:via-teal-400 hover:to-emerald-500 hover:text-transparent hover:bg-clip-text transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Values
            </Link>
          </div>

          {/* Products Page Links */}
          <div className="flex items-center space-x-4 xl:space-x-6">
            <Link
              onClick={() => navigate("/products")}
              to="/products"
              className="text-sky-300 hover:bg-gradient-to-br hover:from-sky-400 hover:via-teal-400 hover:to-emerald-500 hover:text-transparent hover:bg-clip-text transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Products
            </Link>
            <Link
              onClick={() => navigate("/products#featured")}
              to="/products#featured"
              className="text-sky-300 hover:bg-gradient-to-br hover:from-sky-400 hover:via-teal-400 hover:to-emerald-500 hover:text-transparent hover:bg-clip-text transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Featured
            </Link>
            <Link
              onClick={() => navigate("/products#categories")}
              to="/products#categories"
              className="text-sky-300 hover:bg-gradient-to-br hover:from-sky-400 hover:via-teal-400 hover:to-emerald-500 hover:text-transparent hover:bg-clip-text transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Categories
            </Link>
            <Link
              onClick={() => navigate("/products#deals")}
              to="/products#deals"
              className="text-sky-300 hover:bg-gradient-to-br hover:from-sky-400 hover:via-teal-400 hover:to-emerald-500 hover:text-transparent hover:bg-clip-text transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Deals
            </Link>
          </div>
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button
            className="ml-6"
            children={isloggedIn ? "Logout" : "Signin"}
            onClick={() =>
              navigate(isloggedIn ? "/auth/logout" : "/auth/signin")
            }
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md text-sky-300 hover:text-white hover:bg-sky-500/20 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:hidden absolute top-full left-0 w-full flex-col mt-2 bg-white/95 backdrop-blur border border-slate-200 rounded-lg shadow-lg`}
        >
          <div className="px-4 py-3 space-y-1">
            {/* Home Page Links */}
            <div className="border-b border-slate-200 pb-2 mb-2">
              <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Home
              </h5>
              <Link
                onClick={() => {
                  navigate("/");
                  closeMenu();
                }}
                to="/"
                className="block py-2 px-3 text-slate-700 hover:bg-slate-100 rounded-md transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  navigate("/#testimonials");
                  closeMenu();
                }}
                to="/#testimonials"
                className="block py-2 px-3 text-slate-700 hover:bg-slate-100 rounded-md transition-colors text-sm"
              >
                Reviews
              </Link>
            </div>

            {/* About Page Links */}
            <div className="border-b border-slate-200 pb-2 mb-2">
              <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                About
              </h5>
              <Link
                onClick={() => {
                  navigate("/about");
                  closeMenu();
                }}
                to="/about"
                className="block py-2 px-3 text-slate-700 hover:bg-slate-100 rounded-md transition-colors text-sm"
              >
                About
              </Link>
              <Link
                onClick={() => {
                  navigate("/about#mission");
                  closeMenu();
                }}
                to="/about#mission"
                className="block py-2 px-3 text-slate-700 hover:bg-slate-100 rounded-md transition-colors text-sm"
              >
                Mission
              </Link>
              <Link
                onClick={() => {
                  navigate("/about#values");
                  closeMenu();
                }}
                to="/about#values"
                className="block py-2 px-3 text-slate-700 hover:bg-slate-100 rounded-md transition-colors text-sm"
              >
                Values
              </Link>
            </div>

            {/* Products Page Links */}
            <div className="border-b border-slate-200 pb-2 mb-2">
              <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Products
              </h5>
              <Link
                onClick={() => {
                  navigate("/products");
                  closeMenu();
                }}
                to="/products"
                className="block py-2 px-3 text-slate-700 hover:bg-slate-100 rounded-md transition-colors text-sm"
              >
                Products
              </Link>
              <Link
                onClick={() => {
                  navigate("/products#featured");
                  closeMenu();
                }}
                to="/products#featured"
                className="block py-2 px-3 text-slate-700 hover:bg-slate-100 rounded-md transition-colors text-sm"
              >
                Featured
              </Link>
              <Link
                onClick={() => {
                  navigate("/products#categories");
                  closeMenu();
                }}
                to="/products#categories"
                className="block py-2 px-3 text-slate-700 hover:bg-slate-100 rounded-md transition-colors text-sm"
              >
                Categories
              </Link>
              <Link
                onClick={() => {
                  navigate("/products#deals");
                  closeMenu();
                }}
                to="/products#deals"
                className="block py-2 px-3 text-slate-700 hover:bg-slate-100 rounded-md transition-colors text-sm"
              >
                Deals
              </Link>
            </div>

            {/* Mobile Button */}
            <div className="pt-2">
              <Button
                className="w-full justify-center"
                children={isloggedIn ? "Logout" : "Signin"}
                onClick={() => {
                  navigate(isloggedIn ? "/auth/logout" : "/auth/signin");
                  closeMenu();
                }}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
