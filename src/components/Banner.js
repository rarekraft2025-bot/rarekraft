import { motion } from "framer-motion";
import shirtImg from "../assets/banner-image.jpg";

function HomeBanner() {
  return (
    <section className="bg-[#F6F5F3]">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-0 min-h-[50vh] md:min-h-[40vh]
        grid grid-cols-1 md:grid-cols-2 items-center gap-8">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="uppercase tracking-widest text-xs text-gray-500">
            Rare Kraft
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
            Crafted for<br className="hidden md:block" />
            Professional Elegance
          </h1>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={shirtImg}
            alt="Rare Kraft Shirt"
            className="
              w-[200px] h-[200px]
              sm:w-[240px] sm:h-[240px]
              md:w-[300px] md:h-[300px]
              rounded-xl object-cover shadow-lg object-top
            "
          />
        </motion.div>

      </div>
    </section>
  );
}

export default HomeBanner;
