import React, { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import axios from "axios";
import { RingLoader } from "react-spinners";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AiTwotoneFolderAdd } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";

const MyCars = () => {
  const { user } = UseAuth();
  const [myCars, setMyCars] = useState([]);
  const [sortByDate, setSortByDate] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
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

  const handleSort = () => {
    let sortedCars = [...myCars];
    // price shorting
    if (setSortByDate === "low") {
      sortedCars.sort((a, b) => a.price - b.price);
    } else if (setSortByPrice === "high") {
      sortedCars.sort((a, b) => b.price - a.price);
    }

    if (setSortByDate === "newest") {
      sortedCars.sort((a, b) => new b.date() - new a.date());
    } else if (setSortByDate === "oldest") {
      sortedCars.sort((a, b) => new a.date() - new b.date());
    }

    setMyCars(sortedCars);
  };

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
    <div>
      <div className="flex flex-col py-3 px-3 sm:flex-row sm:items-end sm:justify-around gap-4 mb-6">
        <div className="flex flex-wrap gap-4">
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
          onClick={handleSort}
          type="button"
          className=" flex  items-center gap-1 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm"
        >
          <IoFilter className="text-lg " />
          Sort
        </button>
      </div>
      <div className="overflow-x-auto ">
        <table className="table  w-full">
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
              <tr key={car._id} className="border border-gray-200">
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
                  <Link
                    to={`/update/${car._id}`}
                    className="btn btn-sm btn-info mr-2"
                  >
                    Update
                  </Link>
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
    </div>
  );
};

export default MyCars;
