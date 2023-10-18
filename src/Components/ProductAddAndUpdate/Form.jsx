import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import swal from "sweetalert";

const Form = ({ location }) => {
  const [formUpdate, setFormUpdate] = useState({
    formText: "Add A New Product",
    btnText: "Add Product",
  });

  const updateProduct = (productData) => {
    console.log(productData);
  };

  const addProduct = (productData) => {
    fetch("https://brand-shop-server-side.vercel.app/api/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => swal(data.message))
      .catch((err) => {
        toast.error("something went wrong");
        console.log(err);
      });
  };

  const handleDecide = (e) => {
    e.preventDefault();

    const product_image = e.target.product_image.value;
    const product_name = e.target.product_name.value;
    const brand_name = e.target.brand_name.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const ratings = e.target.ratings.value;
    const short_description = e.target.description.value;

    const productData = {
      product_image,
      product_name,
      brand_name,
      type,
      price,
      ratings,
      short_description,
    };

    const text = document
      .getElementById("formHeaderText")
      .innerText.toLowerCase();
    if (text === "update this product") {
      updateProduct(productData);
      e.target.reset();
    } else {
      addProduct(productData);
      e.target.reset();
    }
  };

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
              <h2 id="formHeaderText" className="text-center text-2xl pt-5">
                {formUpdate.formText}
              </h2>
              <form onSubmit={handleDecide} className="card-body">
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
                  <div className="form-control col-span-1 md:col-span-3">
                    <label className="label">
                      <span className="label-text">Product Description</span>
                    </label>
                    <textarea
                      type="text"
                      placeholder="write description here ..."
                      className="input input-bordered py-3 h-[150px]"
                      name="description"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
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
