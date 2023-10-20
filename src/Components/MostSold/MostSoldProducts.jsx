import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MostSoldProducts = () => {
  const [mostSoldProducts, setMostSoldProducts] = useState([]);

  useEffect(() => {
    fetch("https://brand-shop-server-side.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.data
          .slice(1, 8)
          .filter((product) => product.ratings === "4.9");
        setMostSoldProducts(filtered);
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-3 xl:px-0 mt-16 pb-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-font-lato mb-4">
          Most Sold Products
        </h2>
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-blue-700 rounded-md"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {mostSoldProducts.map((product) => (
          <div key={product._id}>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full h-[240px] xl:h-[190px]"
                  src={product.product_image}
                  alt={product.product_name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.product_name}</h2>
                <p>Brand Name : {product.brand_name}</p>
                <p>Product Type : {product.type}</p>
                <p>Price : {product.price}$</p>
                <p>Ratings : {product.ratings}</p>
                <div className="flex gap-3 mt-4">
                  <Link
                    to={`/api/product/details/${product._id}`}
                    className="btn btn-primary flex-1"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostSoldProducts;
