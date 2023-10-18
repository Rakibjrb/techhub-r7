import { useLoaderData, useLocation } from "react-router-dom";
import Form from "../../../Components/ProductAddAndUpdate/Form";

const UpdateProduct = () => {
  const { data } = useLoaderData();
  const location = useLocation().pathname;

  return <Form location={location} data={data} />;
};

export default UpdateProduct;
