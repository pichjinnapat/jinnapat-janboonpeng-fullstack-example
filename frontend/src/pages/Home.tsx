import React, { FC } from "react";
import Calculator from "../components/Calculator";

const Home: FC = () => {
  return (
    <div className="grid h-fit w-11/12 xs:w-full bg-navy-500 rounded-lg shadow-xl sm:grid-cols-4 sm:max-h-600px sm:w-full ">
      <div className="sm:col-span-1 w-full bg-navy-700 rounded-t-lg sm:rounded-l-lg p-1 xs:p-4">
        <div className="text-center flex flex-col justify-center h-full">
          <h1 className="text-lg xs:text-2xl lg:text-3xl xl:text-4xl">
            Welcome
          </h1>
          <p className="text-xs xs:text-xs lg:text-sm xl:text-base">
            calculator
          </p>
          <p className="text-md xs:text-xl lg:text-2xl xl:text-3xl">
            ➕ ➖ ✖️ ➗
          </p>
        </div>
      </div>
      <div className="sm:col-span-3 px-1 py-4 sm:p-4 flex justify-center">
        <Calculator />
      </div>
    </div>
  );
};

export default Home;
