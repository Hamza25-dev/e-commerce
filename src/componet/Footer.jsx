function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="text-2xl font-bold text-slate-900">E-Commerce</div>
          <p className="mt-3 text-slate-600 text-sm">
            Quality products, simple shopping, and friendly support.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/products" className="hover:underline">All Products</a></li>
            <li><a href="/carts" className="hover:underline">Cart</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a className="hover:underline">Help Center</a></li>
            <li><a className="hover:underline">Shipping & Returns</a></li>
            <li><a className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Newsletter</h4>
          <p className="mt-3 text-sm text-slate-600">Get updates and offers.</p>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <button type="submit" className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-500">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} E-Commerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;


