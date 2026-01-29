import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { toast } from "react-toastify";
import Price from "../components/Price";
import Footer from "../components/Footer";
import { FaBasketShopping } from "react-icons/fa6";

function Detail({ addToCart, cart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (p) => String(p.id) === String(id)
  );

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!product) {
    return (
      <p className="text-center mt-20 text-gray-500">
        Product not found
      </p>
    );
  }

  const sizes = ["M", "L", "XL"];
  const images = product.images || [];

  const handleAddToCart = () => {
    if (!size) {
      toast.error("Please select size", {
        position: "top-center",
      });
      return;
    }

    addToCart({ ...product, qty, size });
  };

  return (
    <>
      <div className="p-4 sm:p-6 md:p-10 bg-[#e7ddd5] flex justify-center">
        <div className="bg-white max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 shadow-lg">

          {/* LEFT GALLERY */}
          <div className="flex flex-col md:flex-row gap-4 p-4 sm:p-6">
            <div className="flex md:flex-col gap-2 md:gap-3 order-2 md:order-1">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 object-cover cursor-pointer border ${activeImg === i
                    ? "border-orange-500"
                    : "border-gray-300"
                    }`}
                  alt=""
                />
              ))}
            </div>

            <div className="flex-1 cursor-zoom-in order-1 md:order-2">
              <img
                src={images[activeImg]}
                alt={product.name}
                className="w-full h-[320px] sm:h-[420px] md:h-[700px] object-cover object-top"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="p-5 sm:p-6 md:p-10 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {product.name}
              </h1>

              <p className="mt-3 text-sm text-gray-600 max-w-md">
                {product.description}
              </p>

              <Price product={product} />

              {/* SIZE */}
              <div className="mt-6">
                <p className="text-sm font-semibold mb-2">
                  Select Size
                </p>
                <div className="flex gap-2 flex-wrap">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-4 py-2 border ${size === s
                        ? "bg-orange-500 text-white border-orange-500"
                        : "border-gray-300"
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* QUANTITY */}
              <div className="mt-6 flex items-center gap-4">
                <button
                  onClick={() => setQty(qty - 1)}
                  disabled={qty === 1}
                  className="px-4 py-2 bg-gray-200"
                >
                  -
                </button>

                <span className="font-semibold">{qty}</span>

                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-2 bg-gray-200"
                >
                  +
                </button>
              </div>

              {/* ADD TO CART */}
              <button
                onClick={handleAddToCart}
                className="mt-6 w-full bg-orange-500 text-white py-3 hover:bg-orange-600 transition"
              >
                Add to Cart
              </button>
            </div>

            <p className="text-xs font-semibold mt-10">
              rarekraft.com
            </p>
          </div>
        </div>
      </div>

      {/* FLOATING CART ICON — ONLY IF CART HAS ITEMS */}
      {cart?.length > 0 && (
        <button
          onClick={() => navigate("/cart")}
          className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition"
          title="View Cart"
        >
          <FaBasketShopping size={22} />
        </button>
      )}



      <Footer />
    </>
  );
}

export default Detail;
