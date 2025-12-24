function Price({ product, className = "" }) {
    if (!product) return null;
  
    const { price, originalPrice, discount } = product;
  
    return (
      <div className={`flex items-center gap-2 mt-2 ${className}`}>
        <span className="text-md font-bold text-gray-800">
          ₹{price}
        </span>
  
        {originalPrice && (
          <span className="text-sm text-gray-400 line-through">
            ₹{originalPrice}
          </span>
        )}
  
        {discount && (
          <span className="text-xs text-orange-500 font-semibold">
            {discount}% OFF
          </span>
        )}
      </div>
    );
  }
  
  export default Price;
  