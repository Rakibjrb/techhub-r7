import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, product_image, brand_name, product_name, type, price, ratings } =
    product;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
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
          <Link
            to={`/api/product/details/${_id}`}
            className="btn btn-primary flex-1"
          >
            Details
          </Link>
          <Link
            to={`/api/update/product/${_id}`}
            className="btn btn-primary flex-1"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
Product.propTypes = {
  product: PropTypes.object,
};
