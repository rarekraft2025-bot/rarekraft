import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <p>{order.name}</p>
            <p>{order.price}</p>
            <p>{order.size}</p>
            <p>{order.color}</p>
            <p>{new Date(order.createdAt.seconds * 1000).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Admin;
