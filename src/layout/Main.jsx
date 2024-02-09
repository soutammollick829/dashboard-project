import { Link, Outlet } from "react-router-dom";
import { FaCogs, FaHome, FaHospitalUser, FaStream,} from "react-icons/fa";
import logo from "../assets/logo/Untitled (2).png";

const Main = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-circle btn-outline drawer-button lg:hidden"
          >
            <FaStream />
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-56 min-h-full bg-[#1C2536] text-white">
            {/* Sidebar content here */}
            <img className="w-32" src={logo} alt="logo" />
            <div className="mt-10">
              <Link
                to=""
                className="inline-flex items-center gap-2 text-lg hover:bg-slate-600 hover:opacity-80 p-2 rounded-xl"
              >
                <FaHome /> User Home
              </Link>
              <Link
                to=""
                className="inline-flex items-center gap-2 text-lg hover:bg-slate-600 hover:opacity-80 p-2 rounded-xl"
              >
                <FaHospitalUser /> Roles
              </Link>
              <details className="items-center gap-2 text-lg hover:bg-slate-600 hover:opacity-80 p-2 rounded-xl">
                <summary>Profile</summary>
                <ul>
                  <li>
                    <a>Personal</a>
                  </li>
                  <li>
                    <a>Professional</a>
                  </li>
                </ul>
              </details>
              <Link
                to=""
                className="inline-flex items-center gap-2 text-lg hover:bg-slate-600 hover:opacity-80 p-2 rounded-xl"
              >
                <FaCogs /> Log-Out
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
