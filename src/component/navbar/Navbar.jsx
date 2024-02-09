import { FaSearch, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-[#1C2536] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <form method="GET">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <FaSearch />
                  </button>
                </span>
                <input
                  type="search"
                  name="q"
                  className="w-32 lg:w-full py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </div>
            </form>
          </div>
        </div>
        <div>
          <h2 className="text-xl lg:text-4xl font-serif">Dashboard</h2>
        </div>
        <div className="navbar-end">
          <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
            <span className="font-semibold">Grace Simmons</span>
            <span className="text-sm text-white">Lecturer</span>
          </div>
          <span className="h-10 w-10 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="user profile photo"
              className="h-full w-full object-cover"
            />
          </span>
          <Link to="/login">
            <button className="btn btn-outline btn-sm text-white">
              Login <FaSignInAlt />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
