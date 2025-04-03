import React, { useEffect, useState } from "react";
import CarRentCard from "./CarRentCard";
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

const PropularCars = () => {
  const [propulerCar, setPropulerCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setPropulerCars(data));
  }, []);
  return (
    <div>
      <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl mt-4 mx-auto">
        {/* Search Input */}
        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            placeholder="Search cars..."
            className="w-full px-5 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <FaSearch className="absolute top-3 right-4 text-gray-400 text-lg" />
        </div>

        {/* Category Dropdown */}
        <select className="w-full md:w-1/4 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500">
          <option value="all">All Categories</option>
          <option value="luxury">Luxury</option>
          <option value="suv">SUV</option>
          <option value="electric">Electric</option>
        </select>

        {/* Filter Button */}
        <button className="flex items-center gap-2 px-5 py-3 bg-violet-700 text-white rounded-lg hover:bg-violet-800 transition-all">
          <IoFilter className="text-lg" /> Filter
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <div className=" grid gap-4 justify-center  grid-cols-1 md:grid-cols-3  lg:grid-cols-4">
          {propulerCar.map((cars) => (
            <CarRentCard key={cars._id} cars={cars} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropularCars;
