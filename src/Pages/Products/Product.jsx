import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, product_image, brand_name, product_name, type, price, ratings } =
    product;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={product_image} alt={product_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_name}</h2>
        <p>Brand Name : {brand_name}</p>
        <p>Product Type : {type}</p>
        <p>Price : {price}</p>
        <p>Ratings : {ratings}</p>
        <div className="flex gap-3 mt-4">
          <button className="btn btn-primary flex-1">Details</button>
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
