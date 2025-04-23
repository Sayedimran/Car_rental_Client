import { Dialog } from "@headlessui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CarsDetails = () => {
  const { user } = UseAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    fetchCarData();
  }, [id]);

  const { model, price, availability, features, image, description } =
    car || {};

  const fetchCarData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_uRL}/car/${id}`
    );
    setCar(data);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `0${d.getMonth() + 1}`.slice(-2); // Month 0-based
    const day = `0${d.getDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };
  const handleBooking = async () => {
    const bookingData = {
      carId: car._id,
      userEmail: user.email,
      model: model,
      price,
      status: "confirmed",
      image: image,
      startDate: formatDate(startDate), // 👈 Formatted date
      endDate: formatDate(endDate), // 👈 Formatted date
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_uRL}/booking`,
        bookingData
      );

      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Car Added!",
          text: "Your car has been successfully added.",
          timer: 2000,
          showConfirmButton: false,
        });
        // navigate("/myBooking");
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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-8">
      {/* Car Image */}
      <img
        src={image}
        alt={model}
        className="w-full h-[300px] object-cover rounded-lg mb-6"
      />

      {/* Car Info */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{model}</h2>
      <p className="text-xl text-blue-600 font-semibold mb-2">${price} / day</p>
      <p
        className={`inline-block px-3 py-1 text-sm rounded-full ${
          availability
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        } mb-4`}
      >
        {availability ? "Available" : "Unavailable"}
      </p>

      {/* Features */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-700 mb-1">Features:</h4>
        <ul className="list-disc list-inside text-gray-600">
          {features?.split(",").map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-1">Description:</h4>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Book Now Button */}
      <div className="text-right">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow"
        >
          Book Now
        </button>
      </div>

      {/* Booking Confirmation Modal */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-[50]"
      >
        {/* <div className="fixed inset-0 bg-black/30" aria-hidden="true" /> */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg space-y-4 relative">
            <h1 className="text-xl font-semibold text-gray-800">
              Confirm Booking
            </h1>

            <div className="text-gray-600 space-y-2">
              <p>
                <strong>Car:</strong> {model}
              </p>
              <p>
                <strong>Price:</strong> ${price} per day
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {availability ? "Available" : "Unavailable"}
              </p>

              <div className="flex gap-2 mt-2">
                <div className="w-full">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="Start Date"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    popperClassName="z-[9999]"
                  />
                </div>
                <div className="w-full">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="End Date"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    popperClassName="z-[9999]"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  await handleBooking();
                  setIsModalOpen(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Confirm Booking
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default CarsDetails;
