import React from "react";
import { Link } from "react-router-dom";
import Price from "../components/Price";
import Footer from "../components/Footer";

function Cart({ cart, setCart, }) {

  const removeItem = (index, e) => {
    e.stopPropagation();
    e.preventDefault();

    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const getSellingPrice = (item) => {
    if (!item.originalPrice) return 0;
    return item.discount
      ? Math.round(
        item.originalPrice -
        (item.originalPrice * item.discount) / 100
      )
      : item.originalPrice;
  };

  const bagTotal = cart.reduce(
    (acc, item) => acc + getSellingPrice(item) * item.qty,
    0
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 pb-40">

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">
            Cart is empty
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* LEFT – CART ITEMS */}
            <div className="md:col-span-2 space-y-6">

              {cart.map((item, index) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b pb-6"
                >
                  {/* Image */}
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.images?.[0]}
                      alt={item.name}
                      className="w-28 h-36 object-cover rounded object-top"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex-1">
                    <Link
                      to={`/product/${item.id}`}
                      className="font-semibold hover:underline"
                    >
                      {item.name}
                    </Link>

                    <p className="text-sm text-gray-500 mt-1">
                      Size: {item.size} | Qty: {item.qty}
                    </p>

                    <div className="mt-2">
                      <Price product={item} />
                    </div>

                  </div>
                  <div className="flex flex-col items-end gap-24">
                    <button
                      onClick={(e) => removeItem(index, e)}
                      className="text-gray-400 hover:text-red-600 text-lg"
                      title="Remove item"
                    >
                      🗑
                    </button>
                    <p className="font-semibold">
                      ₹{getSellingPrice(item) * item.qty}
                    </p>


                  </div>

                  {/* Item Price */}



                </div>
              ))}
            </div>

            {/* RIGHT – PRICE DETAILS */}
            <div className="border rounded-lg p-6 h-fit sticky top-20">

              <h3 className="font-semibold text-lg mb-4">
                PRICE DETAILS
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Bag Total</span>
                  <span>₹{bagTotal}</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Coupon Discount</span>
                  <span>- ₹0</span>
                </div>

                <hr />

                <div className="flex justify-between font-semibold text-base">
                  <span>Grand Total</span>
                  <span>₹{bagTotal}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block mt-6 bg-black text-white text-center py-3 font-semibold hover:bg-gray-900 transition"
              >
                PAY ₹{bagTotal}
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;
