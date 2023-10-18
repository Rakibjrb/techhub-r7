import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./brandnames.css";

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
              className="overflow-hidden for-hover-style transition-all"
              key={brand._id}
              to={`/products/${brand.brand_name.toLowerCase()}`}
            >
              <div className="relative image-full h-[300px]">
                <img
                  src={brand.brand_img}
                  className="w-full h-full absolute"
                  alt={brand.brand_name}
                />
                <div className="absolute w-full h-full bg-gradient-to-t from-[rgba(32,32,32,0.44)] to-[rgba(40,40,40,0.43)]"></div>
                <h2 className="brand-name text-3xl text-white font-font-kanit absolute -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {brand.brand_name}
                </h2>
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
