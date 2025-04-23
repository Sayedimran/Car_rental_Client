import React from "react";
import { NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const Navber = () => {
  const { user, loading, logOut } = UseAuth();
  const gradient =
    "bg-gradient-to-r from-blue-600 via-purple-800 to-indigo-700 text-transparent bg-clip-text";

  const link = (
    <>
      {loading ? (
        <div className="h-8 w-[500px] bg-gray-200 rounded-md animate-pulse"></div>
      ) : user ? (
        <div className="flex flex-col lg:flex-row md:flex-row ">
          {" "}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `font-bold text-white ` : `font-bold ${gradient}   `
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allCars"
              className={({ isActive }) =>
                isActive ? `font-bold text-white ` : `font-bold ${gradient}   `
              }
            >
              Available Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addCars"
              className={({ isActive }) =>
                isActive ? `font-bold text-white ` : `font-bold ${gradient}   `
              }
            >
              Add Car
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myCars"
              className={({ isActive }) =>
                isActive ? `font-bold text-white ` : `font-bold ${gradient}   `
              }
            >
              My Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myBooking"
              className={({ isActive }) =>
                isActive ? `font-bold text-white ` : `font-bold ${gradient}   `
              }
            >
              My Bookings
            </NavLink>
          </li>
        </div>
      ) : (
        <div className="flex">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `font-bold text-white ` : `font-bold ${gradient}   `
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `font-bold text-white ` : `font-bold ${gradient}   `
              }
            >
              Available Cars
            </NavLink>
          </li>
        </div>
      )}
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <label
            tabIndex={0}
            className="btn bg-transparent border-none lg:hidden w-15"
          >
            <img src="/menu.png" alt="Menu" className="size-8" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52 "
          >
            {link}
          </ul>
        </div>

        {loading ? (
          <div className="h-8 w-[150px] bg-gray-200 rounded-md animate-pulse"></div>
        ) : user ? (
          <div className="flex items-center">
            <img
              className="size-12 mb-4"
              src="/car-rental.png"
              alt="Car Rental Logo"
            />
            <a
              href="/"
              className="text-2xl font-extrabold  bg-gradient-to-r from-blue-600 via-purple-800 to-indigo-700 text-transparent bg-clip-text"
            >
              CarRental
            </a>
          </div>
        ) : (
          <div className="flex items-center">
            <img
              className="size-12 mb-4"
              src="/car-rental.png"
              alt="Car Rental Logo"
            />
            <a
              href="/"
              className="text-2xl font-extrabold  bg-gradient-to-r from-blue-600 via-purple-800 to-indigo-700 text-transparent bg-clip-text"
            >
              CarRental
            </a>
          </div>
        )}
      </div>
      <div className="navbar-center hidden md:block lg:flex">
        <ul className="menu menu-horizontal px-1 ">{link}</ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <span className="">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
          </span>
        ) : user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="Profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <button
                  onClick={logOut}
                  className="btn btn-error btn-sm w-full"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <NavLink
              to="/login"
              className="btn rounded-lg  bg-gradient-to-r from-blue-600  to-indigo-700 text-fuchsia-50 "
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn rounded-lg  bg-gradient-to-r from-blue-600  to-indigo-700 text-fuchsia-50 "
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
