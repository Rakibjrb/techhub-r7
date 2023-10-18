import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const ProductDetails = () => {
  const { data } = useLoaderData();
  const {
    product_image,
    brand_name,
    product_name,
    short_description,
    type,
    price,
    ratings,
  } = data;

  const handleAddToCart = () => {
    fetch("https://brand-shop-server-side.vercel.app/api/cartproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        product_image,
        brand_name,
        product_name,
        short_description,
        type,
        price,
        ratings,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        swal(data.message);
      })
      .catch((err) => {
        toast.error(data.message);
        console.log(err);
      });
  };

  return (
    <div className="max-w-screen-md mx-auto px-3 md:px-0 py-10">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full  md:h-[432px]"
            src={product_image}
            alt={product_name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{product_name}</h2>
          <p className="text-justify md:text-left">{short_description}</p>
          <h4 className="text-xl font-semibold">Brand Name : {brand_name}</h4>
          <h4 className="text-xl font-semibold">Product Type : {type}</h4>
          <h4 className="text-xl font-semibold">Price : {price}$</h4>
          <h4 className="text-xl font-semibold">Ratings : {ratings}</h4>
          <button onClick={handleAddToCart} className="btn btn-primary mt-5">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
