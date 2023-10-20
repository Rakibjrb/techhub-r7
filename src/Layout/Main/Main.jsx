import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import BrandNames from "../../Components/Brands/BrandNames";
import MostSoldProducts from "../../Components/MostSold/MostSoldProducts";
import Welcome from "../../Components/Welcome/Welcome";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Main = () => {
  const data = useLoaderData();
  const { theme } = useContext(AuthContext);

  return (
    <div data-theme={theme ? "dark" : "light"}>
      <div className="pt-2">
        <Banner />
      </div>
      <Welcome />
      <BrandNames data={data.data} />
      <MostSoldProducts />
    </div>
  );
};

export default Main;
