import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Don't forget to import the styles
import CarRentCard from "./CarRentCard";

const TabCategory = () => {
  const [propulerCar, setPropulerCars] = useState([]);
  console.log(propulerCar, "cars");
  console.log(propulerCar.category);
  

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setPropulerCars(data));
  }, []);
  return (
    <div className="py-8 px-4">
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
        Explore Most Popular Cars
      </h1>
      <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
        Here's a list of some of the most popular cars globally, based on sales
        and customer preferences
      </p>

      <Tabs className="mt-8">
        <div className="flex justify-center">
          <TabList className="flex space-x-1 bg-gradient-to-r from-blue-500 to-indigo-600 p-1 rounded-lg">
            <Tab className="px-4 py-2 text-white rounded-md ui-selected:bg-white ui-selected:text-blue-600 ui-selected:font-bold">
              All Cars
            </Tab>
            <Tab className="px-4 py-2 text-white rounded-md ui-selected:bg-white ui-selected:text-blue-600 ui-selected:font-bold">
              Luxury
            </Tab>
            <Tab className="px-4 py-2 text-white rounded-md ui-selected:bg-white ui-selected:text-blue-600 ui-selected:font-bold">
              SUVs
            </Tab>
            <Tab className="px-4 py-2 text-white rounded-md ui-selected:bg-white ui-selected:text-blue-600 ui-selected:font-bold">
              Electric
            </Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="flex justify-center">
            <div className=" grid gap-4 justify-center  grid-cols-1 md:grid-cols-3  lg:grid-cols-4">
              {propulerCar.map((cars) => (
                <CarRentCard key={cars._id} cars={cars} />
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Content for Luxury tab */}
            <p>Luxury cars content goes here</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Content for SUVs tab */}
            <p>SUVs content goes here</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Content for Electric tab */}
            <p>Electric cars content goes here</p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategory;
