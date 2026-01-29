import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../components/spinner";
import ProductCard from "../components/cards";
import "../styles/category.css";

function Home({ search }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const categories = [
    "all",
    "furniture",
    "fragrances",
    "groceries"
  ];

  const filteredProducts = products
    .filter(p =>
      category === "all" ? true : p.category === category
    )
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

  if (loading) return <Spinner />;

  return (
    <div>
      {/* AMAZON CATEGORY BAR */}
      <div className="amazon-category-bar">
        {categories.map(cat => (
          <div
            key={cat}
            className={`amazon-category-item ${
              category === cat ? "active" : ""
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat.toUpperCase()}
          </div>
        ))}
      </div>

      {/* PRODUCTS */}
      <div style={{ padding: "25px" }}>
        <div className="products">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
