import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCard({ product, addToCart }) {
  const [qty, setQty] = useState(1);


  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      
      {/* Product Image */}
      <div className="w-full h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 object-top"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs">{product.description}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-md font-bold text-gray-800">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          )}
          {product.discount && (
            <span className="text-xs text-orange-500">
              {product.discount}% OFF
            </span>
          )}
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => setQty(qty - 1)}
            disabled={qty === 1}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition text-xs"
          >
            -
          </button>
          <span className="font-medium text-sm">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition text-xs"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
