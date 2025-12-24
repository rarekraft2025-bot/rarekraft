import { useState } from "react";
import { toast } from "react-toastify";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import emailjs from "@emailjs/browser";

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

    if (cart.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    try {
      // Save order to Firebase
      const docRef = await addDoc(collection(db, "orders"), {
        user,
        cart,
        totalAmount: totalPrice,
        createdAt: serverTimestamp(),
      });

      //  Prepare product list HTML
      const productsHTML = cart
        .map(
          (item, index) =>
            `<p>${index + 1}. <strong>${item.name}</strong> - Size: ${item.size}, Color: ${item.color}, Qty: ${item.qty}, Price: ₹${item.price * item.qty}</p>`
        )
        .join("");

      // Send email with full details
      await emailjs.send(
        "service_m1kvxlc",      // service ID
        "template_61wdvxe",     // template ID
        {
          order_id: docRef.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          total: totalPrice,
          products: productsHTML, 
        },
        "Xh8oWxShTAC0msOgw"     // public key
      );

      toast.success("Order placed & email sent ✅");

      // Reset form and cart
      setUser({ name: "", email: "", phone: "", address: "" });
      setCart([]);
    } catch (error) {
      console.error("Order Error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Checkout Form */}
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
            className="w-full border p-2 rounded h-24"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          {cart.map((item, index) => (
            <div key={index} className="flex justify-between border-b py-2">
              <span>{item.name} × {item.qty}</span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}

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
