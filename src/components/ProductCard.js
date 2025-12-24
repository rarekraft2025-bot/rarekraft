import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Price from "./Price";

function ProductCard({ product }) {
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
        <Price product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
