import React from "react";
import { FaChartBar, FaPlus } from "react-icons/fa";
import Defoultgraph from "./Defoultgraph";
import AppLayout from "./AppLayout";
const CwppDashbord = () => {
  return (
    <AppLayout>
    <div className="">
      <h1 className="text-[25px] font-semibold text-gray-800">
        CWPP Dashboard
      </h1>

      <div className="flex gap-[2%] pb-[0.5%]">
        {/* graf1 */}
        <div className="bg-white shadow-md p-4 rounded-lg max-w-md relative  w-[385px] h-[230px]  ">
          {/* Title */}
          <h2 className="text-md font-semibold mb-4 text-gray-700">
            Top 5 Namespace Specific Alerts
          </h2>

          {/* Content when no data is available */}
          <div className="flex flex-col items-center justify-center h-40">
            <FaChartBar className="text-gray-400 text-6xl mb-2" />
            <p className="text-gray-500 text-lg">No Graph data available!</p>
          </div>
        </div>
        {/* graf2 */}
        <div className="bg-white shadow-md p-4 rounded-lg max-w-md relative  w-[385px] h-[230px] ">
          {/* Title */}
          <h2 className="text-md font-semibold mb-4 text-gray-700">
            Top 5 Namespace Specific Alerts
          </h2>

          {/* Content when no data is available */}
          <div className="flex flex-col items-center justify-center h-40">
            <FaChartBar className="text-gray-400 text-6xl mb-2" />
            <p className="text-gray-500 text-lg">No Graph data available!</p>
          </div>
        </div>
        {/* graf3 */}
        <Defoultgraph/>
      </div>
    </div>
    </AppLayout>
  );
};

export default CwppDashbord;
