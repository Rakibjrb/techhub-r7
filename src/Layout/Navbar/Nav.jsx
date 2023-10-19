import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./nav.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Nav = () => {
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/api/add/product">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/api/added/product">Added Products</NavLink>
      </li>
    </>
  );

  const { user, requestUserLogOut } = useContext(AuthContext);

  const handleLogout = () => {
    requestUserLogOut()
      .then(() => toast.success("User logout successfull ....."))
      .catch(() => toast.error("something went wrong !!!"));
  };

  return (
    <div className="bg-gray-300">
      <div className="navbar max-w-screen-xl mx-auto px-4 xl:px-0 font-font-lato">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3"
            >
              {navlinks}
            </ul>
          </div>
          <a className="normal-case text-2xl md:text-3xl font-font-kanit">
            Tech<span className="text-blue-500 font-extrabold">H</span>ub
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="navstyle menu-horizontal px-1 gap-10 font-bold">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2">
            <Link to="/user/mycart" className="p-3 bg-gray-200 rounded-full">
              <FaShoppingCart className="text-xl" />
            </Link>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-8 md:w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      {user?.displayName}
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/user/account" className="btn btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
