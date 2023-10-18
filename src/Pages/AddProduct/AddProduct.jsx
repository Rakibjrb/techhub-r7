import { useLocation } from "react-router-dom";
import Form from "../../Components/ProductAddAndUpdate/Form";

const AddProduct = () => {
  const location = useLocation().pathname;

  return <Form location={location} />;
};

export default AddProduct;
