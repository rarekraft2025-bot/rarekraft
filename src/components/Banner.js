import { motion } from "framer-motion";
import shirtImg from "../assets/banner-image.jpg";

function HomeBanner() {
  return (
    <section className="bg-[#F6F5F3]">
      <div className="max-w-7xl mx-auto px-4 h-[40vh] grid grid-cols-1 md:grid-cols-2 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-widest text-xs text-gray-500">
            Rare Kraft
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-medium text-gray-900">
            Crafted for<br />Professional Elegance
          </h1>

          <p className="mt-4 text-gray-600 max-w-md">
            Premium formal shirts designed with precision,
            comfort, and lasting style in mind.
          </p>
        </motion.div>

        {/* Circle Image */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={shirtImg}
            alt="Rare Kraft Shirt"
            className="w-[260px] h-[260px] rounded-s object-cover shadow-lg object-top"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default HomeBanner;