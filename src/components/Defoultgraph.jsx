import React from "react";
import {FaPlus } from "react-icons/fa";
const Defoultgraph = () => {
  return (
    <div className="">
      <div className="bg-white shadow-md rounded-lg p-6 w-[400px] mx-auto h-[230px]">
        {/* Title Section */}
        <h2 className="text-md font-semibold text-gray-500 ">
          Cloud Account Risk Assessment
        </h2>

        {/* Add Widget Button */}
        <div className="flex justify-center mt-[20%]">
          <button className="flex items-center text-gray-500 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition">
            <FaPlus className="mr-2" />
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );
};

export default Defoultgraph;
