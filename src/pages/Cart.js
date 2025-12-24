import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg p-6 mt-12 rounded-lg">
      <h2 className="text-xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Cart is empty</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 items-center border-b pb-4"
            >
              {/* Image */}
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Price: ₹{item.price}
                </p>
                <p className="text-sm text-gray-500">
                  Qty: {item.qty}
                </p>

                {/* Optional (if size/color exist) */}
                {item.size && (
                  <p className="text-xs text-gray-400">
                    Size: {item.size}
                  </p>
                )}
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(index)}
                className="text-red-500 hover:text-red-700 text-lg"
              >
                🗑
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      {cart.length > 0 && (
        <div className="mt-6 flex justify-between items-center border-t pt-4">
          <p className="text-lg font-bold">Total: ₹{totalPrice}</p>
          <Link
            to="/checkout"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
