import React, { useEffect, useState } from "react";
import CarRentCard from "./CarRentCard";

const PropularCars = () => {
  const [propulerCar, setPropulerCars] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setPropulerCars(data));
  }, []);
  return (
    <div className="flex justify-center">
      {/* <div className=" grid gap-4 justify-center  grid-cols-1 md:grid-cols-3  lg:grid-cols-4">
        {propulerCar.map((cars) => (
          <CarRentCard key={cars._id} cars={cars} />
        ))}
      </div> */}
    </div>
  );
};

export default PropularCars;
