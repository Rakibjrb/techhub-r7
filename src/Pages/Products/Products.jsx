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
    <div className="max-w-screen-xl mx-auto px-3 xl:px-0 my-8">
      <h2 className="capitalize text-center text-3xl font-bold font-font-lato">
        {brandName} Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-3 mt-10">
        {products.length > 0 ? (
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <div className="flex justify-center items-center col-span-3 h-[40vh]">
            <div className="text-center">
              <h2 className="text-3xl font-font-kanit mb-3">
                No {brandName} products available right now
              </h2>
              <h3 className="text-xl">
                Brand new product comming soon stay connected with us ......
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
