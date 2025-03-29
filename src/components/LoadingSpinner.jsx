import React from "react";
import { RingLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div>
      <span className="text-fuchsia-700 flex items-center justify-center w-full min-h-[calc(100vh-305px)] ">
        <RingLoader />
      </span>
    </div>
  );
};

export default LoadingSpinner;
