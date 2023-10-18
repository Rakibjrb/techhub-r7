import { Outlet } from "react-router-dom";
import Nav from "./Layout/Navbar/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Outlet></Outlet>
    </>
  );
};

export default App;
