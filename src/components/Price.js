function Price({ product, className = "" }) {
  if (!product) return null;

  const { originalPrice, discount } = product;

  const sellingPrice = discount
    ? Math.round(originalPrice - (originalPrice * discount) / 100)
    : originalPrice;

  return (
    <div className={`flex flex-wrap items-center gap-2 mt-2 ${className}`}>
      <span className="text-md font-bold text-gray-800">
        ₹{sellingPrice}
      </span>

      {discount > 0 && (
        <>
          <span className="text-sm text-gray-400 line-through">
            ₹{originalPrice}
          </span>

          <span className="text-xs text-orange-500 font-semibold">
            {discount}% OFF
          </span>
        </>
      )}
    </div>
  );
}

export default Price;
