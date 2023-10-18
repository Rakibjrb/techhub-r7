import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const MyCart = () => {
  const { data } = useLoaderData();

  const [addedProducts, setAddedProducts] = useState(data);

  const handleCartProductDelete = (id) => {
    fetch(`https://brand-shop-server-side.vercel.app/api/cartproducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        swal(data.message);
        const filteredProduct = addedProducts.filter(
          (product) => product._id !== id
        );
        setAddedProducts(filteredProduct);
      })
      .catch((err) => {
        toast("Something went wrong !!!");
        console.log(err);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-3 xl:px-0 my-8">
      <h2 className="capitalize text-center text-3xl font-bold font-font-lato">
        My Cart Products
      </h2>
      <h4 className="text-center text-xl mt-2">
        Items Added : {addedProducts.length}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-3 mt-10">
        {addedProducts.length > 0 ? (
          addedProducts.map((product) => {
            const {
              _id,
              product_image,
              brand_name,
              product_name,
              type,
              price,
              ratings,
            } = product;

            return (
              <div
                key={_id}
                className="card card-compact bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    className="w-full h-[240px]"
                    src={product_image}
                    alt={product_name}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product_name}</h2>
                  <div className="flex justify-between">
                    <p>Brand Name : {brand_name}</p>
                    <p>Product Type : {type}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Price : {price}$</p>
                    <p>Ratings : {ratings}</p>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button className="btn btn-primary flex-1">Buy Now</button>
                    <button
                      onClick={() => handleCartProductDelete(_id)}
                      className="btn btn-primary flex-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <h2 className="text-center font-bold font-font-lato text-3xl">
              Ooops ....
            </h2>
            <h2 className="text-center font-font-lato text-xl mt-3">
              No Product added
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
