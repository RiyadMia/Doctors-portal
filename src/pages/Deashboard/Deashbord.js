import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Deashbord = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashbord-sidebar" type="checkbox" className="drawer-toggle" />
      <div className=" drawer-content">
        <h2 className="text-2xl font-bold text-purple-600">
          Wwalcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashbord-sidebar" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/deashbord">My Appoinments</Link>
          </li>
          <li>
            <Link to="/deashbord/myreview">My Review </Link>
            {admin && <Link to="/deashbord/user">All Users </Link>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Deashbord;
