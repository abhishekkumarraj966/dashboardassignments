import React from "react";
import { FaPlus } from "react-icons/fa";
const RegistryScan = () => {
  const data = [
    { name: "Critical", count: 2, color: "#B71C1C", percentage: "20%" },
    { name: "High", count: 2, color: "#E64A19", percentage: "20%" },
    { name: "Medium", count: 1, color: "#FBC02D", percentage: "20%" },
    { name: "Low", count: 1, color: "#FFEB3B", percentage: "20%" },
    { name: "Informational", count: 1, color: "#BDBDBD", percentage: "20%" },
  ];
  const totalVulnerabilities = 1470;
  return (
    <div className="mx-[10%] pb-[2%]">
      <h1 className="text-[25px] font-semibold text-gray-800">Registry Scan</h1>
      <div className="flex gap-[1%]">
        {/* graf1 */}

        <div className="bg-white shadow-md p-6 rounded-lg w-[450px] max-w-lg mx-auto h-[200px]">
          {/* Header Section */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Image Risk Assessment
            </h2>
            <div className="flex gap-3">
              <div className="text-2xl font-bold text-gray-900">
                {totalVulnerabilities}
              </div>
              <span className="text-gray-500 text-[16px] pt-1">
                Total Vulnerabilities
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 mb-4 flex overflow-hidden rounded-full">
            {data.map((item, index) => (
              <div
                key={index}
                style={{ width: item.percentage, backgroundColor: item.color }}
                className="h-full"
              ></div>
            ))}
          </div>

          {/* Legend Section */}
          <div className="flex justify-between flex-wrap">
            {data.map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <span
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-sm text-gray-700">
                  {item.name} ({item.count})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* graf2 */}
        <div className="bg-white shadow-md p-4 rounded-lg w-[450px] max-w-md h-[200px]">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-md font-semibold text-gray-700">
              Image Security Issues
            </h2>
            <div className="text-2xl font-bold text-gray-900">2</div>
            <span className="text-gray-500 text-sm">Total Images</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 mb-4 flex overflow-hidden rounded-full">
            {data.map((item, index) => (
              <div
                key={index}
                style={{ width: item.percentage, backgroundColor: item.color }}
                className="h-full"
              ></div>
            ))}
          </div>

          {/* Legend Section */}
          <div className="grid grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div key={index} className="flex items-center">
                <span
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-sm text-gray-700">
                  {item.name} ({item.count})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* graf3 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center w-[450px] h-[200px]">
          <button className="flex items-center text-gray-500 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition">
            <FaPlus className="mr-2" />
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistryScan;
