import { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function Detail({ addToCart }) {
  const { state } = useLocation();
  const product = state?.product;

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  if (!product) {
    return <p className="text-center mt-20">Product not found</p>;
  }

  const sizes = ["S", "M", "L", "XL"];
  const colors = [
    { name: "Black", hex: "#333333" },
    { name: "White", hex: "#f3f3f3" },
    { name: "Gray", hex: "#888888" },
    { name: "Beige", hex: "#d9cbb1" },
  ];

  const handleAddToCart = () => {
    if (!size || !color) {
      toast.error("Please select size and color");
      return;
    }

    addToCart({
      ...product,
      qty,
      size,
      color,
    });

    toast.success("Added to cart ✅", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-[#e7ddd5] flex items-center justify-center p-6">
      <div className="bg-white max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 shadow-lg">

        {/* LEFT IMAGE */}
        <div className="relative bg-black">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover aspect-[3/3] object-top"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="mt-3 text-sm text-gray-600 max-w-sm">
              {product.description}
            </p>

            <p className="mt-4 text-xl font-semibold">
              ₹{product.price}
            </p>

            {/* SIZE */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-2">Select Size</p>
              <div className="flex gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-3 py-1 border rounded ${
                      size === s
                        ? "bg-orange-500 text-white border-orange-500"
                        : "border-gray-300"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* COLOR */}
            <div className="mt-4">
              <p className="text-sm font-semibold mb-2">Select Color</p>
              <div className="flex gap-2">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c.name)}
                    style={{ backgroundColor: c.hex }}
                    className={`w-7 h-7 rounded-full border-2 ${
                      color === c.name
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => setQty(qty - 1)}
                disabled={qty === 1}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span className="font-semibold">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            {/* ADD TO CART */}
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition"
            >
              Add to Cart
            </button>
          </div>

          <p className="text-xs font-semibold mt-10">rarekraft.com</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
