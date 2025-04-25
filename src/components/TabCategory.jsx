import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Don't forget to import the styles
import CarRentCard from "./CarRentCard";
import axios from "axios";

const TabCategory = () => {
  const [propulerCar, setPropulerCars] = useState([]);

  const [activeCategory, setActiveCategory] = useState("All Cars");

  // Dynamic Tabs
  const categories = [
    "All Cars",
    ...new Set(propulerCar.map((cartCategory) => cartCategory.category)),
  ];
  // filter Cards by Tabs clicking

  const filterCardOfCars =
    activeCategory === "All Cars"
      ? propulerCar
      : propulerCar.filter((cars) => cars.category === activeCategory);
  // console.log(propulerCar, "cars");

  useEffect(() => {
    const fetchPopularCars = async () => {
      try {
        const { data } = await axios(`${import.meta.env.VITE_API_uRL}/cars`);
        setPropulerCars(data);
        
        
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchPopularCars();
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
        <div className="flex  justify-center">
          <TabList className=" grid grid-cols-2 md:grid-cols-8 lg:grid-cols-8 gap-3 space-x-1  p-1 rounded-lg">
            {categories.map((category) => (
              <Tab
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  activeCategory === category
                    ? " text-white bg-violet-800"
                    : "text-black bg-cyan-100 hover:bg-violet-800 hover:text-white "
                } `}
                selectedClassName=""
              >
                {category}
              </Tab>
            ))}
          </TabList>
        </div>

        {categories.map((categoryP) => (
          <TabPanel key={categoryP}>
            <div className="flex justify-center mt-4">
              <div className=" grid gap-4 justify-center  grid-cols-1 md:grid-cols-3  lg:grid-cols-4">
                {filterCardOfCars.map((cars) => (
                  <CarRentCard key={cars._id} cars={cars} />
                ))}
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabCategory;
