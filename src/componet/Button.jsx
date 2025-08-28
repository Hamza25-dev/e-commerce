function Button({ children, onClick, className = ""}) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center cursor-pointer hover:text-white hover:font-semibold 
        border border-sky-500 text-medium items-center bg-transparent text-sky-500 
        py-1 px-3 focus:outline-none hover:bg-gradient-to-br 
        from-sky-400 via-teal-400 to-emerald-500 hover:border-0 
        rounded-md h-10 w-20 text-base mt-4 md:mt-0 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
