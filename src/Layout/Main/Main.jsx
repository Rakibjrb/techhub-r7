import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import BrandNames from "../../Components/Brands/BrandNames";

const Main = () => {
  const data = useLoaderData();

  return (
    <>
      <Banner />
      <BrandNames data={data.data} />
    </>
  );
};

export default Main;
