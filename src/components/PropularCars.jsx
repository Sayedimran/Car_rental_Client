import React, { useEffect, useState } from "react";
import CarRentCard from "./CarRentCard";
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";


const PropularCars = () => {
  const [propulerCar, setPropulerCars] = useState([]);
  const [sortByDate, setSortByDate] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  console.log(propulerCar);

  useEffect(() => {
    const fetchPopularCars = async () => {
      try {
        const { data } = await axios(`${import.meta.env.VITE_API_uRL}/cars`);
        setPropulerCars(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchPopularCars();
  }, []);

  if (loading) {
    return (
      <div>
        <div className=" shadow-md flex flex-col md:flex-row items-center gap-16 w-full max-w-6xl mt-4 mx-auto bg-gray-200 rounded-xl animate-pulse"></div>
        <div className="   max-w-6xl mt-4 mx-auto grid  gap-4 justify-center  grid-cols-1 md:grid-cols-3  lg:grid-cols-4 animate-pulse">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-[330px] w-[280px] bg-gray-200 rounded-xl animate-pulse"
            ></div>
          ))}
        </div>
        ;
      </div>
    );
  }

  const handleFilterbtn = () => {
    let sortedCars = [...propulerCar];

    // Price sorting
    if (sortByPrice === "low") {
      sortedCars.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === "high") {
      sortedCars.sort((a, b) => b.price - a.price);
    }

    // Date sorting
    if (sortByDate === "newest") {
      sortedCars.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortByDate === "oldest") {
      sortedCars.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setPropulerCars(sortedCars);
  };

  const filteredCars = propulerCar.filter(
    (car) =>
      car.model.toLowerCase().includes(searchQuery) ||
      car.brand.toLowerCase().includes(searchQuery) ||
      car.location.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <div className="bg-gray-100 p- rounded-xl shadow-md flex flex-col md:flex-row items-center gap-16 w-full max-w-6xl mt-4 mx-auto">
        {/* Search Input */}
        <div className="relative w-full px-3 md:w-2/3">
          <input
            type="text"
            placeholder="Search cars..."
            className="w-full px-5 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          />
          <FaSearch className="absolute top-3  right-6 text-gray-400 text-lg" />
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col py-3 px-3 sm:flex-row sm:items-end sm:justify-around gap-4 mb-6 lg:flex-row">
          <div className="flex   gap-4  lg:flex-row ">
            {/* Date Added diye sort korar dropdown */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Date Added
              </label>
              <select
                onChange={(e) => setSortByDate(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>

            {/* Price diye sort korar dropdown */}
            <div>
              <label
                htmlFor="priceSort"
                className="block text-sm text-gray-600 mb-1"
              >
                Price
              </label>
              <select
                onChange={(e) => setSortByPrice(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Lowest First</option>
                <option value="high">Highest First</option>
              </select>
            </div>
          </div>

          {/* Sort korar button */}
          <button
            onClick={handleFilterbtn}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-violet-700 text-white rounded-lg hover:bg-violet-800 transition-all"
          >
            <IoFilter className="text-lg " /> Filter
          </button>
        </div>

        {/* Filter Button */}
      </div>
      <div className="flex justify-center mt-10">
        <div className=" grid gap-4 justify-center  grid-cols-1 md:grid-cols-3  lg:grid-cols-4">
          {filteredCars.map((cars) => (
            <CarRentCard key={cars._id} cars={cars} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropularCars;
