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
      <h2 className="capitalize text-center text-3xl font-bold font-font-lato mt-14 mb-5">
        {brandName} Products
      </h2>
      {products.length > 0 ? (
        <>
          <div className="mt-4 max-w-screen-lg mx-auto">
            <div className="carousel md:h-[400px]">
              <div id="item1" className="carousel-item w-full">
                <img src={products[2]?.product_image} className="w-full" />
              </div>
              <div id="item2" className="carousel-item w-full">
                <img src={products[1]?.product_image} className="w-full" />
              </div>
              <div id="item3" className="carousel-item w-full">
                <img src={products[0]?.product_image} className="w-full" />
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-3 mt-10">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </>
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
  );
};

export default Products;

{
  /* <div className="flex justify-center items-center col-span-3 h-[40vh]">
<div className="text-center">
  <h2 className="text-3xl font-font-kanit mb-3">
    No {brandName} products available right now
  </h2>
  <h3 className="text-xl">
    Brand new product comming soon stay connected with us ......
  </h3>
</div>
</div> */
}
