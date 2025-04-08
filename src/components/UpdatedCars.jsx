import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";

const UpdatedCars = () => {
  const { user } = UseAuth();
  const { id } = useParams();
  const [car, setCar] = useState({});


  useEffect(() => {
    fetchCarData();
  }, [id]);

  console.log(car);

  const fetchCarData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_uRL}/car/${id}`
    );
    setCar(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const model = form.model.value;

    const category = form.category.value;

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
    const updatedCar = {
      model,

      category,

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
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_uRL}/updateCars/${id}`,
        updatedCar
      );

      if (data.modifiedCount || data.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Update Successful",
          text: "Car details updated successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
       
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error?.response?.data?.message || "Something went wrong!",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Edit Car Details
        </h2>
        <p className="text-gray-500">
          Update your vehicle information for rental listings
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Car Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Car Model
            </label>
            <input
              name="model"
              type="text"
              defaultValue={car.model}
              className="input input-bordered rounded-lg w-full"
              placeholder="e.g. Camry, X5"
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
              defaultValue={car.category}
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

          {/* Seats */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Seats
            </label>
            <input
              name="seats"
              type="number"
              defaultValue={car.seats}
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
              defaultValue={car.price}
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
              defaultValue={car.availability}
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
              defaultValue={car.registrationNumber}
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
              defaultValue={car.features}
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
              defaultValue={car.location}
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
            defaultValue={car.image}
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
            defaultValue={car.description}
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

export default UpdatedCars;
