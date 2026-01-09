import { motion } from "framer-motion";
import shirtImg from "../assets/banner-image.jpg";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <section className="relative bg-gradient-to-b from-[#F7F6F3] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20
        grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <p className="uppercase tracking-[0.25em] text-xs text-gray-500">
            Rare Kraft
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
            Crafted for <br className="hidden md:block" />
            Modern Professionals
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-md mx-auto md:mx-0">
            Premium fabrics, timeless design, and effortless comfort —
            tailored for workdays that demand confidence.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => {
                const section = document.getElementById("shop-collection");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-black text-white px-6 py-3 text-sm font-semibold rounded-md hover:bg-gray-900 transition"
            >
              Shop Collection
            </button>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Soft background glow */}
          <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-orange-100 blur-3xl"></div>

          <motion.img
            src={shirtImg}
            alt="Rare Kraft Shirt"
            className="
              w-[220px] h-[280px]
              sm:w-[260px] sm:h-[320px]
              md:w-[340px] md:h-[420px]
              rounded-2xl object-cover object-top shadow-xl
            "
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}

export default HomeBanner;
