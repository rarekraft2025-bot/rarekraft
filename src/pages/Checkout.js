import { useState } from "react";
import { toast } from "react-toastify";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function Checkout({ cart, setCart }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.phone || !user.address) {
      toast.error("All fields are required");
      return;
    }

    if (user.phone.length !== 10) {
      toast.error("Enter valid phone number");
      return;
    }

    if (cart.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    const orderData = {
      user,
      products: cart,
      totalAmount: totalPrice,
      status: "Pending",
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "orders"), orderData);

      toast.success("Order placed successfully ✅");

      setUser({
        name: "",
        email: "",
        phone: "",
        address: "",
      });

      setCart([]);
    } catch (error) {
      console.error("Order Error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT – CHECKOUT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-lg p-6 space-y-4"
        >
          <h2 className="text-xl font-bold mb-4">Checkout Details</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            value={user.address}
            onChange={handleChange}
            className="w-full border p-2 rounded resize-none h-24"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition"
          >
            Place Order
          </button>
        </form>

        {/* RIGHT – ORDER SUMMARY */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start border-b py-3"
            >
              <div className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    Size: {item.size} | Color: {item.color}
                  </p>
                  <p className="text-xs text-gray-500">
                    Qty: {item.qty}
                  </p>
                </div>
              </div>
              <p className="font-semibold text-sm">
                ₹{item.price * item.qty}
              </p>
            </div>
          ))}

          {/* TOTAL */}
          <div className="flex justify-between mt-4 font-bold text-lg">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
