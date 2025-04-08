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
    const transmission = form.transmission.value;
    const fuelType = form.fuelType.value;
    const category = form.category.value;
    const year = form.year.value;
    const seats = form.seats.value;
    const price = form.price.value;
    const availability = form.availability.value;
    const registrationNumber = form.registrationNumber.value;
    const features = form.features.value;
    const description = form.description.value;
    const image = form.image.value;
    const location = form.location.value;
    const email = user?.email;
    const date = dayjs().format("MMMM D, YYYY - h:mm:ss A");

    const formData = {
      brand,
      model,
      transmission,
      fuelType,
      category,
      year,
      seats,
      price,
      availability,
      registrationNumber,
      features,
      description,
      image,
      location,
      email,
      date,
      bookingCount: 0,
      bookingStatus: "pending",
    };

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Brand */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brand
            </label>
            <input
              name="brand"
              type="text"
              className="input input-bordered rounded-lg w-full"
              placeholder="e.g. Toyota, BMW"
              required
            />
          </div>

          {/* Car Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Car Model
            </label>
            <input
              name="model"
              type="text"
              className="input input-bordered rounded-lg w-full"
              placeholder="e.g. Camry, X5"
              required
            />
          </div>

          {/* Transmission */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Transmission
            </label>
            <input
              name="transmission"
              type="text"
              className="input input-bordered rounded-lg w-full"
              placeholder="e.g. Automatic, Manual"
              required
            />
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fuel Type
            </label>
            <input
              name="fuelType"
              type="text"
              className="input input-bordered rounded-lg w-full"
              placeholder="e.g. Premium Gasoline"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>

            <select
              name="category"
              defaultValue="Pick a font"
              className="select input input-bordered rounded-lg w-full "
            >
              <option disabled={true}>Pick a category</option>
              <option>Premium</option>
              <option>Standard</option>
              <option>Luxury</option>
              <option>Economy</option>
              <option>Muscle</option>
              <option>Elite</option>
            </select>
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
              required
            />
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
              placeholder="e.g. 5"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Daily Rental Price ($)
            </label>
            <input
              name="price"
              type="number"
              className="input input-bordered rounded-lg w-full"
              placeholder="e.g. 129"
              required
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Availability
            </label>
            <input
              name="availability"
              type="text"
              className="input input-bordered rounded-lg w-full"
              placeholder="e.g. Available"
              required
            />
          </div>

          {/* Vehicle Registration Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Registration Number
            </label>
            <input
              name="registrationNumber"
              type="text"
              className="input input-bordered rounded-lg w-full"
              placeholder="e.g. ABC-1234"
              required
            />
          </div>

          {/* Features */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Features
            </label>
            <input
              name="features"
              type="text"
              className="input input-bordered rounded-lg w-full"
              placeholder="e.g. GPS, AC, Bluetooth"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              name="location"
              type="text"
              className="input input-bordered rounded-lg w-full"
              placeholder="e.g. Central Park"
              required
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            name="image"
            type="text"
            className="input input-bordered rounded-lg w-full"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered rounded-lg w-full h-32"
            placeholder="Write a short description of the car"
            required
          ></textarea>
        </div>

        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button type="submit" className="btn rounded-lg bg-amber-500">
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCars;
