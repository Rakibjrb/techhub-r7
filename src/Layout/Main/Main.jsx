import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import BrandNames from "../../Components/Brands/BrandNames";
import MostSoldProducts from "../../Components/MostSold/MostSoldProducts";
import Welcome from "../../Components/Welcome/Welcome";

const Main = () => {
  const data = useLoaderData();

  return (
    <>
      <Banner />
      <Welcome />
      <BrandNames data={data.data} />
      <MostSoldProducts />
    </>
  );
};

export default Main;
