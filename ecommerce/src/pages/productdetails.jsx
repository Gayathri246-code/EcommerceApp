import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/spinner";


function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const fetchSingleProduct = async () => {
    const res = await axios.get(
      `https://dummyjson.com/products/${id}`
    );
    setProduct(res.data);
    setLoading(false);
  };

  if (loading) return <Spinner />;

  return (
    <div style={{ padding: "40px" }}>
      <img src={product.thumbnail} width="300" />

      <h2>{product.title}</h2>
      <h3>₹ {product.price}</h3>
      <p>{product.description}</p>
      <p><b>Category:</b> {product.category}</p>
    </div>
  );
}

export default ProductDetails;
