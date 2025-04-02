import React from "react";
import Carousel from "../components/Carousel";
import TabCategory from "../components/TabCategory";
import PropularCars from "../components/PropularCars";

const Home = () => {
  return (
    <div>
      <Carousel />
      <TabCategory />
      <PropularCars />
    </div>
  );
};

export default Home;
