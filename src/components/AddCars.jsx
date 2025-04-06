import axios from "axios";
import React from "react";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const AddCars = () => {
  const navigate = useNavigate();
  const { user } = UseAuth();
  const handleAddCars = async (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const model = form.model.value;
    const year = form.year.value;
    const category = form.category.value;
    const transmission = form.transmission.value;
    const fuelType = form.fuelType.value;
    const seats = form.seats.value;
    const price = form.price.value;
    const location = form.location.value;
    const availability = form.availability.value;
    const image = form.image.value;
    const description = form.description.value;
    const email = user?.email;
    const date = dayjs().format("MMMM D, YYYY - h:mm:ss A");

    // console.log(
    //   brand,
    //   model,
    //   year,
    //   category,
    //   transmission,
    //   fuelType,
    //   seats,
    //   price,
    //   location,
    //   image,
    //   description
    // );

    const formData = {
      brand,
      model,
      year,
      category,
      transmission,
      fuelType,
      seats,
      price,
      location,
      availability,
      image,
      description,
      email,
      date,
    };
    // make a post request
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_uRL}/addCars`,
        formData
      );

      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Car Added!",
          text: "Your car has been successfully added.",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/myCars");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.response?.data?.message || "Something went wrong!",
      });
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Add New Car
      </h2>

      <form onSubmit={handleAddCars} className="space-y-6">
        {/* Basic Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Brand */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brand
            </label>
            <input
              name="brand"
              type="text"
              className="input input-bordered rounded-lg  w-full"
              placeholder="e.g. Toyota, BMW"
            />
          </div>

          {/* Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Model
            </label>
            <input
              name="model"
              type="text"
              className="input input-bordered rounded-lg w-full"
              placeholder="e.g. Camry, X5"
            />
          </div>

          {/* Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Year
            </label>
            <input
              name="year"
              type="number"
              className="input input-bordered rounded-lg w-full"
              placeholder="e.g. 2023"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              className="select select-bordered rounded-lg w-full"
            >
              <option>Select category</option>
              <option>Economy</option>
              <option>Premium</option>
              <option>Luxury</option>
              <option>Electric</option>
              <option>Standard</option>
              <option>Muscle</option>
            </select>
          </div>
        </div>

        {/* Specifications Section */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Transmission */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transmission
              </label>
              <select
                name="transmission"
                className="select select-bordered rounded-lg w-full"
              >
                <option>Select transmission</option>
                <option>Automatic</option>
                <option>Manual</option>
                <option>CVT</option>
              </select>
            </div>

            {/* Fuel Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fuel Type
              </label>
              <select
                name="fuelType"
                className="select select-bordered rounded-lg w-full"
              >
                <option>Select fuel type</option>
                <option>Gasoline</option>
                <option>Diesel</option>
                <option>Electric</option>
                <option>Hybrid</option>
              </select>
            </div>

            {/* Seats */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Seats
              </label>
              <input
                name="seats"
                type="number"
                className="input input-bordered rounded-lg w-full"
                placeholder="e.g. 4, 5, 7"
              />
            </div>
          </div>
        </div>

        {/* Rental Information */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Rental Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Price Per Day */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Per Day ($)
              </label>
              <input
                name="price"
                type="number"
                className="input input-bordered rounded-lg w-full"
                placeholder="e.g. 50, 100, 200"
              />
            </div>

            {/* Location */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                name="location"
                type="text"
                className="input input-bordered rounded-lg w-full"
                placeholder="e.g. New York, Los Angeles"
              />
            </div>
            {/* Abilablity */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Availability
              </label>
              <input
                name="availability"
                type="text"
                className="input input-bordered rounded-lg w-full"
                placeholder="e.g. New York, Los Angeles"
              />
            </div>
          </div>
        </div>

        {/* Image Upload */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Car Image</h3>
          <input
            name="image"
            type="text"
            className="input input-bordered rounded-lg w-full"
            placeholder="Cars Phot URL...."
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered rounded-lg
             w-full h-32"
            placeholder="Enter car description and features..."
          ></textarea>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            className="btn btn-outline btn-error rounded-lg"
          >
            Cancel
          </button>
          <button type="submit" className="btn rounded-lg bg-amber-500 ">
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCars;
