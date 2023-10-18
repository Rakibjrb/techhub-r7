import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const { data } = useLoaderData();
  const brandName = useLocation().pathname.slice(10);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = data.filter(
      (singleData) => singleData.brand_name.toLowerCase() === brandName
    );

    setProducts(filteredProducts);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-3 xl:px-0 mt-16">
      <h2 className="capitalize text-center text-3xl font-bold font-font-lato">
        {brandName} Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-3">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
