import { Outlet } from "react-router-dom";
import Nav from "./Layout/Navbar/Nav";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <>
        <Nav />
        <Outlet></Outlet>
      </>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
