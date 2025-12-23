



import { motion } from "framer-motion";
import shirtImg from "../assets/banner-image.jpg"; 

function HomeBanner() {
  return (
    <section className="relative bg-[#0c1825] text-white overflow-hidden">
      
      {/* Moving background text */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center gap-8 opacity-10"
        animate={{ x: ["0%", "-20%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        <h1 className="text-[10vw] font-bold whitespace-nowrap">
          CRAFTED WITH PRECISION
        </h1>
        <h1 className="text-[10vw] font-bold whitespace-nowrap">
          CRAFTED WITH PRECISION
        </h1>
      </motion.div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 h-[60vh] flex items-center justify-center">

        {/* Circle image */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[300px] h-[300px] rounded-full overflow-hidden border border-white/30"
        >
          <img
            src={shirtImg}
            alt="Rare Kraft Shirt"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Center text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute bottom-16 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-gray-300">
            Rare Kraft
          </p>
          {/* <h2 className="mt-3 text-3xl font-light">
            Formal Shirts, Redefined
          </h2> */}
        </motion.div>
      </div>
    </section>
  );
}

export default HomeBanner;
