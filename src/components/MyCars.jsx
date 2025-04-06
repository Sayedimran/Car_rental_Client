import React, { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import axios from "axios";
import { RingLoader } from "react-spinners";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AiTwotoneFolderAdd } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";

const MyCars = () => {
  const { user } = UseAuth();
  const [myCars, setMyCars] = useState([]);
  const [loading, setloading] = useState(true);
  // const nevigate = useNavigate();
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_API_uRL}/my-cars?email=${user?.email}`)
        .then((res) => {
          setMyCars(res.data);
          setloading(false);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="h-20  w-full bg-gray-400 rounded-md animate-pulse "></div>
    );
  }
  if (myCars.length === 0)
    return (
      <div className=" min-h-screen flex justify-center items-center text-center text-2xl flex-col ">
        No cars found
        <Link
          to="/addCars"
          className="text-amber-500 btn rounded-lg font-bold mt-2.5"
        >
          <AiTwotoneFolderAdd className="size-8" />
          Add Your car
        </Link>
      </div>
    );

  const handleDeletebtn = async (id) => {
    // Show confirmation popup
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axios.delete(
            `${import.meta.env.VITE_API_uRL}/car/${id}`
          );
          console.log(data);

          // Show success alert
          Swal.fire("Deleted!", "The car has been deleted.", "success");
          setMyCars(myCars.filter((cars) => cars._id !== id));

          // Optionally update UI here (e.g., refetch or filter from state)
        } catch (err) {
          console.error(err);
          Swal.fire("Error!", "Failed to delete the car.", "error");
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto md:block ">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Model</th>
            <th>Price</th>
            <th>Bookings</th>
            <th>Availability</th>
            <th>Date Added</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myCars.map((car) => (
            <tr key={car._id}>
              <td>
                <img
                  src={car.image}
                  className="w-20 h-12 object-cover rounded"
                />
              </td>
              <td>{car.model}</td>
              <td>${car.price}</td>
              <td>{car.bookingCount || 0}</td>
              <td>{car.available ? "Available" : "Not Available"}</td>
              <td>{car.date}</td>
              <td>
                <button className="btn btn-sm btn-info mr-2">Update</button>
                <button
                  onClick={() => handleDeletebtn(car._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCars;
