import React from "react";

const AddCars = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Add New Car
      </h2>

      <form className="space-y-6">
        {/* Basic Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Brand */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brand
            </label>
            <input
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
            <select className="select select-bordered rounded-lg w-full">
              <option disabled selected>
                Select category
              </option>
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
              <select className="select select-bordered rounded-lg w-full">
                <option disabled selected>
                  Select transmission
                </option>
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
              <select className="select select-bordered rounded-lg w-full">
                <option disabled selected>
                  Select fuel type
                </option>
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
                type="number"
                className="input input-bordered rounded-lg w-full"
                placeholder="e.g. 50, 100, 200"
              />
            </div>

            {/* Location */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
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
          <button type="button" className="btn rounded-lg bg-amber-500 ">
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCars;
