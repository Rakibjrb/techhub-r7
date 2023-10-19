import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import BrandNames from "../../Components/Brands/BrandNames";
import MostSoldProducts from "../../Components/MostSold/MostSoldProducts";

const Main = () => {
  const data = useLoaderData();

  return (
    <>
      <Banner />
      <BrandNames data={data.data} />
      <MostSoldProducts />
    </>
  );
};

export default Main;
