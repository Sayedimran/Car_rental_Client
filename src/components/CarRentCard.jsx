import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const CarRentCard = ({ cars }) => {
  const {
    id,
    brand,
    model,
    transmission,
    mileage,
    fuelType,
    category,
    year,
    seats,
    location,
    price,
    image,
  } = cars;
  return (
    <div className="card w-80 bg-base-100 shadow-xl border border-gray-200 rounded-xl">
      
      {/* Image Container with Zoom Effect */}
      <figure className="relative overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={model}
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <span className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-semibold rounded-md shadow">
          {brand}
        </span>
      </figure>

      {/* Car Details */}
      <div className="p-4">
        <h2 className="text-lg font-bold">
         {model}
        </h2>
        <div className="flex flex-wrap items-center text-sm text-gray-600 gap-2 my-2">
          <span>⚙️ {transmission}</span>
          <span>📏 {mileage} KM</span>
          <span>⛽ {fuelType}</span>
          <span>🏷 {category}</span>
          <span>📅 {year}</span>
          <span>👥 {seats} Persons</span>
        </div>
        <div className="flex flex-wrap items-center text-sm text-gray-600 gap-2 my-2"></div>

        {/* Price and Button */}
        <div className="flex flex-col items-center text-gray-700 bg-gray-300 p-4 rounded-lg text-sm gap-2 w-full">
          <span className="flex items-center">
            <FaLocationDot /> {location}
          </span>
          <span className="text-xl font-bold text-green-600">${price}/day</span>
        </div>

        <button className="btn btn-dark text-white bg-black mt-2 w-full rounded-lg">
          🚗 Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarRentCard;
