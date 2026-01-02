import { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Price from "../components/Price";

function Detail({ addToCart }) {
  const { state } = useLocation();
  const product = state?.product;

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [activeImg, setActiveImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!product) {
    return <p className="text-center mt-20">Product not found</p>;
  }

  const sizes = ["S", "M", "L", "XL"];
  const images = product.images || [product.image];

  const handleAddToCart = () => {
    if (!size) {
      toast.error("Please select size");
      return;
    }

    addToCart({ ...product, qty, size });
    toast.success("Added to cart ✅");
  };

  const prevImg = () =>
    setActiveImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImg = () =>
    setActiveImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="p-10 bg-[#e7ddd5] flex justify-center">
      <div className="bg-white max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 shadow-lg">

        {/* LEFT GALLERY */}
        <div className="flex gap-4 p-6">

          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImg(i)}
                className={`w-20 h-24 object-cover cursor-pointer border ${activeImg === i
                  ? "border-orange-500"
                  : "border-gray-300"
                  }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div
            className="flex-1 cursor-zoom-in"
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={images[activeImg]}
              alt={product.name}
              className="w-full h-[700px] object-cover object-top"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="mt-3 text-sm text-gray-600 max-w-sm">
              {product.description}
            </p>

            <Price product={product} />

            {/* SIZE */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-2">Select Size</p>
              <div className="flex gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-1 border ${size === s
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
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setQty(qty - 1)}
                disabled={qty === 1}
                className="px-3 py-1 bg-gray-200"
              >
                -
              </button>
              <span className="font-semibold">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-1 bg-gray-200"
              >
                +
              </button>
            </div>

            {/* ADD TO CART */}
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full bg-orange-500 text-white py-3 hover:bg-orange-600"
            >
              Add to Cart
            </button>

            {product.highlights?.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold mb-2">Key Highlights</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {product.highlights.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.deliveryInfo && (
              <div className="mt-6 border-t pt-4 text-sm text-gray-700 space-y-1">
                <p>🚚 {product.deliveryInfo.delivery}</p>
                <p>🔄 {product.deliveryInfo.returns}</p>
                {product.deliveryInfo.cod && <p>💳 Cash on Delivery available</p>}
              </div>
            )}


          </div>

          <p className="text-xs font-semibold mt-10">rarekraft.com</p>
        </div>
      </div>

      {/* 🔥 LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImg();
            }}
            className="absolute left-5 text-white text-4xl"
          >
            ‹
          </button>

          <img
            src={images[activeImg]}
            className="max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImg();
            }}
            className="absolute right-5 text-white text-4xl"
          >
            ›
          </button>

          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-6 text-white text-3xl"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default Detail;
