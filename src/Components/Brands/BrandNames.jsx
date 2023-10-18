import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BrandNames = ({ data }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 xl:px-0 my-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-font-lato mb-4">
          Our Most Popular Brands
        </h2>
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-blue-700 rounded-md"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-3 mt-10">
        {data.map((brand) => {
          return (
            <Link
              key={brand._id}
              to={`/products/${brand.brand_name.toLowerCase()}`}
            >
              <div className="card bg-base-100 shadow-md image-full h-[300px]">
                <figure>
                  <img
                    src={brand.brand_img}
                    className="w-full h-40"
                    alt={brand.brand_name}
                  />
                </figure>
                <div className="card-body relative">
                  <h2 className="text-3xl font-font-kanit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {brand.brand_name}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BrandNames;
BrandNames.propTypes = {
  data: PropTypes.array,
};