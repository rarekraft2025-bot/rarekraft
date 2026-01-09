import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { toast } from "react-toastify";
import Price from "../components/Price";
import Footer from "../components/Footer";

function Detail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (p) => String(p.id) === String(id)
  );

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [activeImg, setActiveImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [showAdded, setShowAdded] = useState(false);

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
    // ❌ size not selected → top toast
    if (!size) {
      toast.error("Please select size", {
        position: "top-center",
      });
      return;
    }

    // ✅ size selected
    addToCart({ ...product, qty, size });

    setShowAdded(true);

    setTimeout(() => {
      setShowAdded(false);
    }, 12000);
  };

  const prevImg = () =>
    setActiveImg((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  const nextImg = () =>
    setActiveImg((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );

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

            <div
              className="flex-1 cursor-zoom-in order-1 md:order-2"
              onClick={() => setLightboxOpen(true)}
            >
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

      {/* BOTTOM ADD TO CART BLOCK */}
      {showAdded && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 py-3 shadow-lg flex items-center gap-4">
          <div className="flex flex-col">
            <p className="text-sm font-semibold">
              {product.name}
            </p>
            <p className="text-xs text-gray-300">
              Product added to cart
            </p>
          </div>

          <button
            onClick={() => navigate("/cart")}
            className="ml-auto text-sm font-semibold underline text-orange-500"
          >
            View Bag
          </button>
        </div>

      )}

      <Footer />
    </>
  );
}

export default Detail;
