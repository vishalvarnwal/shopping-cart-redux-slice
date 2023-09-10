import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const data = await fetch(API_URL);
      const response = await data.json();
      setProducts(response);
    } catch (error) {
      setProducts([]);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <Spinner />
        </div>
      ) : products.length < 1 ? (
        <div className="flex justify-center items-center">
          <p>No Product Found</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {products.map((product) => (
            <Product item={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
