import { Outlet } from "react-router-dom";
import Nav from "./Layout/Navbar/Nav";
import { Toaster } from "react-hot-toast";
import Footer from "./Layout/Footer/Footer";

const App = () => {
  return (
    <>
      <>
        <Nav />
        <Outlet></Outlet>
        <Footer />
      </>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
