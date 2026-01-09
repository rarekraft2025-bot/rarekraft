import React from "react";
import { Link } from "react-router-dom";
import Price from "../components/Price";
import Footer from "../components/Footer";

function Cart({ cart, setCart }) {

  const removeItem = (index, e) => {
    e.stopPropagation(); // 🔥 prevents navigation
    e.preventDefault();  // 🔥 prevents Link click

    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const getSellingPrice = (item) => {
    if (!item.originalPrice) return 0;

    return item.discount
      ? Math.round(
        item.originalPrice - (item.originalPrice * item.discount) / 100
      )
      : item.originalPrice;
  };

  const totalPrice = cart.reduce((acc, item) => {
    return acc + getSellingPrice(item) * item.qty;
  }, 0);

  return (
    <>
      <div className="max-w-5xl mx-auto bg-white shadow-lg p-6 mt-12 rounded-lg mb-16">
        <h2 className="text-xl font-bold mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Cart is empty</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className="flex gap-4 items-center border-b pb-4"
              >
                {/* Clickable product */}
                <Link
                  to={`/product/${item.id}`}
                  className="flex gap-4 items-center flex-1"
                >
                  {/* Image */}
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded">
                    <img
                      src={item.images?.[0] || "/placeholder.png"}
                      alt={item.name}
                      className="w-full h-full object-cover object-top rounded-[6px]"
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <p className="font-semibold hover:underline">
                      {item.name}
                    </p>
                    <Price product={item} />
                    <p className="text-sm text-gray-500">
                      Qty: {item.qty}
                    </p>

                    {item.size && (
                      <p className="text-xs text-gray-400">
                        Size: {item.size}
                      </p>
                    )}
                  </div>
                </Link>

                {/* Remove */}
                <button
                  onClick={(e) => removeItem(index, e)}
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
            <p className="text-lg font-bold">
              Total: ₹{totalPrice}
            </p>
            <Link
              to="/checkout"
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>

  );
}

export default Cart;

