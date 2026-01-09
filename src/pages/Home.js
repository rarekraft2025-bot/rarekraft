import products from "../data/products";
import ProductCard from "../components/ProductCard";
import HomeBanner from "../components/Banner";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home({ addToCart }) {
  return (
    <div>
      <HomeBanner />

      {/* PRODUCTS SECTION */}
      <div
        id="shop-collection"
        className="max-w-7xl mx-auto px-4 py-10"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              state={{ product: item }}
            >
              <ProductCard
                product={item}
                addToCart={addToCart}
              />
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
