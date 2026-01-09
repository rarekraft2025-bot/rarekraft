import { useState } from "react";
import { toast } from "react-toastify";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    state: "",
    city: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [isLoading, setIsLoading] = useState(false);

  const getSellingPrice = (item) => {
    if (!item.originalPrice) return 0;

    return item.discount
      ? Math.round(
        item.originalPrice - (item.originalPrice * item.discount) / 100
      )
      : item.originalPrice;
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + getSellingPrice(item) * item.qty,
    0
  );


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // 🔹 Auto-fill State & City from PIN
  const handlePincode = async (e) => {
    const pin = e.target.value;
    setUser({ ...user, pincode: pin });

    if (pin.length === 6) {
      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
        const data = await res.json();

        if (data[0].Status === "Success") {
          setUser((prev) => ({
            ...prev,
            city: data[0].PostOffice[0].District,
            state: data[0].PostOffice[0].State,
          }));
        } else {
          toast.error("Invalid PIN Code");
        }
      } catch {
        toast.error("Unable to fetch PIN details");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    if (
      !user.name ||
      !user.email ||
      !user.phone ||
      !user.pincode ||
      !user.state ||
      !user.city ||
      !user.address
    ) {
      toast.error("All fields are required");
      return;
    }

    if (!/^\d{10}$/.test(user.phone)) {
      toast.error("Enter valid 10-digit phone number");
      return;
    }

    if (cart.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    try {
      setIsLoading(true);

      const docRef = await addDoc(collection(db, "orders"), {
        user,
        cart,
        paymentMethod,
        totalAmount: totalPrice,
        createdAt: serverTimestamp(),
      });

      const productsHTML = cart
        .map(
          (item, i) =>
            `<p>${i + 1}. ${item.name} × ${item.qty} — ₹${getSellingPrice(item) * item.qty
            }</p>`
        )
        .join("");

      await emailjs.send(
        "service_m1kvxlc",
        "template_61wdvxe",
        {
          order_id: docRef.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: `${user.address}, ${user.city}, ${user.state} - ${user.pincode}`,
          payment: paymentMethod,
          total: totalPrice,
          products: productsHTML,
        },
        "Xh8oWxShTAC0msOgw"
      );

      toast.success("Order placed successfully ✅");

      setCart([]);
      setUser({
        name: "",
        email: "",
        phone: "",
        pincode: "",
        state: "",
        city: "",
        address: "",
      });

      navigate(`/thank-you/${docRef.id}`);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };


  const INSTAGRAM_USERNAME = "rarekraft_for_rare";


  return (
    <>
      <div className=" bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Checkout Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-lg p-6 space-y-4"
          >
            <h2 className="text-xl font-bold">Checkout Details</h2>

            <input className="input" name="name" placeholder="Full Name" value={user.name} onChange={handleChange} disabled={isLoading} />
            <input className="input" type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} disabled={isLoading} />
            <input className="input" name="phone" placeholder="Phone (10 digits)" value={user.phone} onChange={handleChange} disabled={isLoading} />

            <input className="input" name="pincode" placeholder="PIN Code" value={user.pincode} onChange={handlePincode} disabled={isLoading} />

            <div className="grid grid-cols-2 gap-4">
              <input className="input bg-gray-100" placeholder="City" value={user.city} readOnly />
              <input className="input bg-gray-100" placeholder="State" value={user.state} readOnly />
            </div>

            <textarea className="input h-24" name="address" placeholder="Full Address" value={user.address} onChange={handleChange} disabled={isLoading} />

            {/* Payment Method */}
            <div>
              <p className="font-semibold mb-2">Payment Method</p>
              <label className="flex gap-2 mb-1">
                <input type="radio" checked={paymentMethod === "COD"} onChange={() => setPaymentMethod("COD")} disabled={isLoading} />
                Cash on Delivery
              </label>
              <label className="flex gap-2">
                <input type="radio" checked={paymentMethod === "ONLINE"} onChange={() => setPaymentMethod("ONLINE")} disabled={isLoading} />
                Online Payment
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-500 text-white py-3 rounded flex justify-center items-center gap-2 disabled:opacity-60"
            >
              {isLoading && <span className="loader"></span>}
              {isLoading
                ? "Placing Order..."
                : paymentMethod === "ONLINE"
                  ? "Proceed to Pay"
                  : "Place Order"}
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            {cart.map((item, i) => (
              <div key={i} className="flex justify-between border-b py-2">
                <span>{item.name} × {item.qty}</span>
                <span>₹{getSellingPrice(item)}</span>
              </div>
            ))}

            <div className="flex justify-between mt-4 font-bold text-lg">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
        </div>

        {/* Styles */}
        <style>{`
        .input {
          width: 100%;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 6px;
        }
        .loader {
          width: 18px;
          height: 18px;
          border: 2px solid #fff;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      </div>
      <Footer/>
    </>

  );
}

export default Checkout;

