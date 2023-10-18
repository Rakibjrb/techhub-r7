import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Form = ({ location }) => {
  const [formUpdate, setFormUpdate] = useState({
    formText: "Add A New Product",
    btnText: "Add Product",
  });

  useEffect(() => {
    if (location.indexOf("/api/update/product") === 0) {
      setFormUpdate({
        formText: "Update This Product",
        btnText: "Update Now",
      });
    }
  }, []);

  return (
    <div className="bg-gray-600">
      <div>
        <div className="py-10 font-font-lato">
          <div className="hero-content">
            <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-200">
              <h2 className="text-center text-2xl pt-5">
                {formUpdate.formText}
              </h2>
              <form className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="form-control md:col-span-3">
                    <label className="label">
                      <span className="label-text">Product Image Url</span>
                    </label>
                    <input
                      type="text"
                      placeholder="product image url"
                      className="input input-bordered"
                      name="product_image"
                      required
                    />
                  </div>
                  <div className="form-control md:col-span-2">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Name"
                      className="input input-bordered"
                      name="product_name"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Brand Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Brand Name"
                      className="input input-bordered"
                      name="brand_name"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Type</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Type"
                      className="input input-bordered"
                      name="type"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Price</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Brand Name"
                      className="input input-bordered"
                      name="price"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Ratings</span>
                    </label>
                    <input
                      type="text"
                      placeholder="product ratings"
                      className="input input-bordered"
                      name="ratings"
                      required
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                    {formUpdate.btnText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
Form.propTypes = {
  location: PropTypes.string,
};
