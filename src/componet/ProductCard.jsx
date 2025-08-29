function ProductCard({ imageSrc, title, price, description, onClick }) {
  return (
    <div className="group rounded-xl md:rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img src={imageSrc} alt={title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
      </div>
      <div className="p-3 md:p-4">
        <div className="flex items-start justify-between gap-2 md:gap-3">
          <h3 className="font-semibold text-slate-900 line-clamp-1 text-sm md:text-base">{title}</h3>
          <span className="text-teal-700 font-bold text-sm md:text-base">${price}</span>
        </div>
        <p className="mt-2 text-xs md:text-sm text-slate-600 line-clamp-2">{description}</p>
        <button onClick={onClick} className="mt-3 md:mt-4 w-full rounded-md bg-teal-600 text-white py-2 text-xs md:text-sm font-medium hover:bg-teal-500 transition-colors">
          View
        </button>
      </div>
    </div>
  );
}

export default ProductCard;


