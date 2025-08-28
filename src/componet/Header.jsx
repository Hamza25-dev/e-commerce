import { Link, useNavigate } from "react-router";
import Button from "./Button";

function Header({children, className = ""}) {
  const navigate = useNavigate();

  const isloggedIn = false

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent body-font">
      <div className="container h mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span className="cursor-pointer ml-3 text-2xl font-bold bg-gradient-to-br from-sky-400 via-teal-400 to-emerald-500 text-transparent bg-clip-text">
            E-Commerce
          </span>
        </a>
        <nav className="md:ml-auto gap-5 md:mr-auto flex flex-wrap items-center text-lg justify-center">
          <Link
            onClick={() => navigate("/")}
            to="/"
            className="mr-5 border-none transition-all duration-200 hover:font-semibold text-sky-300 hover:decoration-2 hover:decoration-white hover:underline hover:bg-gradient-to-br from-sky-400 via-teal-400 to-emerald-500 hover:bg-clip-text hover:text-transparent hover:underline-offset-8"
          >
            Home
          </Link>
          <Link
            onClick={() => navigate("/about")}
            to="/about"
            className="mr-5 transition-all duration-200 border-none hover:font-medium hover:decoration-white hover:decoration-2 hover:bg-clip-text hover:text-transparent text-sky-300 hover:underline hover:bg-gradient-to-br from-sky-400 via-teal-400 to-emerald-500
            hover:underline-offset-8"
          >
            About Us
          </Link>
          <Link
            onClick={() => navigate("/products")}
            to="/products"
            className="mr-5 hover:decoration-2 transition-all duration-200 border-none hover:font-semibold hover:decoration-white hover:bg-clip-text hover:text-transparent text-sky-300 hover:underline hover:bg-gradient-to-br from-sky-400 via-teal-400 to-emerald-500 hover:underline-offset-8"
          >
            Products
          </Link>
          <Link
            onClick={() => navigate("/carts")}
            to="/carts"
            className="mr-5 hover:decoration-2 transition-all duration-200 border-none hover:font-semibold hover:decoration-white text-sky-300 hover:bg-clip-text hover:text-transparent hover:underline hover:bg-gradient-to-br from-sky-400 via-teal-400 to-emerald-500 hover:underline-offset-8"
          >
            Carts
          </Link>
        </nav>
        <Button className={`...${className}`} children={isloggedIn ? "Logout" : "Signin"} onClick={() => navigate(isloggedIn ? "/auth/logout" : "/auth/signin")} />
      </div>
    </header>
  );
}

export default Header;
