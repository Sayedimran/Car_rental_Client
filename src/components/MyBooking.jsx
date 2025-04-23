import axios from "axios";
import React, { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import DatePicker from "react-datepicker";
import { Dialog } from "@headlessui/react";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const MyBooking = () => {
  const { user } = UseAuth();
  const [booking, setBooking] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState([]); // NEW

  // Fetch bookings
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_API_uRL}/bookedCar?email=${user.email}`)
        .then((res) => {
          setBooking(res.data);
        });
    }





  }, [user]);

  // Cancel a booking
 const handleCancel = async (booking) => {
   Swal.fire({
     title: "Are you sure?",
     text: "You are about to cancel this booking!",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#d33",
     cancelButtonColor: "#3085d6",
     confirmButtonText: "Yes, cancel it!",
   }).then(async (result) => {
     if (result.isConfirmed) {
       try {
         await axios.patch(
           `${import.meta.env.VITE_API_uRL}/statusCar/${booking._id}`
         );

         // Update local state
         const updated = booking.map((car) =>
           car._id === booking._id ? { ...car, status: "Canceled" } : car
         );
         setBooking(updated);

         // Show success alert
         Swal.fire({
           title: "Canceled!",
           text: "The booking has been canceled.",
           icon: "success",
           timer: 2000,
           showConfirmButton: false,
         });
       } catch (err) {
         console.error(err);
         Swal.fire("Error!", "Something went wrong.", "error");
       }
     }
   });
 };

 

  // Modify booking dates
  const handleBooking = async () => {
    if (!selectedBooking || !startDate || !endDate) return;

    await axios.patch(
      `${import.meta.env.VITE_API_uRL}/bookedCar/${selectedBooking._id}`,
      {
        startDate,
        endDate,
      }
    );

    const updated = booking.map((car) =>
      car._id === selectedBooking._id ? { ...car, startDate, endDate } : car
    );
    setBooking(updated);
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  return (
    <div className="overflow-x-auto mt-8 p-4">
      <table className="w-full table-auto border-collapse shadow rounded-lg">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3 font-semibold">Image</th>
            <th className="p-3 font-semibold">Model</th>
            <th className="p-3 font-semibold">Booking Date</th>
            <th className="p-3 font-semibold">Total Price</th>
            <th className="p-3 font-semibold">Status</th>
            <th className="p-3 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((booked) => (
            <tr key={booked._id} className="hover:bg-gray-50">
              <td className="p-3">
                <img
                  src={booked.image}
                  alt=""
                  className="h-12 w-20 object-cover rounded"
                />
              </td>
              <td className="p-3">{booked.model}</td>
              <td className="p-3">
                {new Date(booked.startDate).toLocaleDateString()} -{" "}
                {new Date(booked.endDate).toLocaleDateString()}
              </td>
              <td className="p-3">${booked.price}</td>
              <td className="p-3">{booked.status}</td>
              <td className="p-3 flex gap-2">
                {/* Modify Button */}
                <button
                  onClick={() => {
                    setSelectedBooking(booked);
                    setIsModalOpen(true);
                    setStartDate(new Date(booked.startDate));
                    setEndDate(new Date(booked.endDate));
                  }}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Modify
                </button>

                {/* Cancel Button */}
                <button
                  onClick={() => handleCancel(booked)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <Dialog
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedBooking(null);
        }}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white rounded-xl p-6 shadow-lg space-y-4">
            <Dialog.Title className="text-xl font-bold">
              Modify Booking Date
            </Dialog.Title>

            <div className="flex gap-2">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="w-full border px-3 py-2 rounded"
                placeholderText="Start Date"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                className="w-full border px-3 py-2 rounded"
                placeholderText="End Date"
                minDate={startDate}
              />
            </div>

            <div className="flex justify-end gap-3 pt-3">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedBooking(null);
                }}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleBooking}
                className="  px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Confirm
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default MyBooking;
