import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function ThankYou() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const docRef = doc(db, "orders", orderId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setOrder(docSnap.data());
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (!order) {
    return <p className="text-center mt-10">Order not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">

        <h1 className="text-2xl font-bold text-green-600 text-center">
          🎉 Order Placed Successfully
        </h1>

        <p className="text-center mt-2 text-gray-600">
          Thank you for shopping with <strong>Rarekraft</strong>
        </p>

        <div className="mt-6 space-y-2">
          <p><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
        </div>

        <hr className="my-4" />

        {/* Customer Details */}
        <div>
          <h2 className="font-semibold mb-2">Delivery Details</h2>
          <p>{order.user.name}</p>
          <p>{order.user.phone}</p>
          <p>
            {order.user.address}, {order.user.city},{" "}
            {order.user.state} - {order.user.pincode}
          </p>
        </div>

        <hr className="my-4" />

        {/* Order Items */}
        <div>
          <h2 className="font-semibold mb-2">Order Summary</h2>

          {order.cart.map((item, i) => (
            <div
              key={i}
              className="flex justify-between border-b py-2 text-sm"
            >
              <span>
                {item.name} × {item.qty}
              </span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}

          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>₹{order.totalAmount}</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600"
          >
            Continue Shopping
          </Link>
        </div>
      </div>

      {/* Loader */}
      <style>{`
        .loader {
          width: 40px;
          height: 40px;
          border: 4px solid #ddd;
          border-top: 4px solid #f97316;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default ThankYou;
