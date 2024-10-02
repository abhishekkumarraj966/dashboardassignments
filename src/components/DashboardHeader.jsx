import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Icons for refresh and options menu
import { PieChart, Pie, Cell } from "recharts";
const DashboardHeader = () => {
  const data2 = [
    { name: "Connected", value: 2, color: "#445ce3" },
    { name: "Not Connected", value: 2, color: "#e4e4e7" },
  ];

  return (
    <div className=" ">
      <div className="flex gap-[2%] pb-[0.5%]">
        <div className="">
          <div className="bg-white shadow-md p-4 rounded-lg max-w-md relative h-[240px]">
            <h2 className="text-md font-semibold text-gray-600 ">
              CSPM Executive Dashboard
            </h2>

            {/* Cloud Accounts Section */}
            <div className="flex justify-between items-center relative">
              <div className="relative">
                {/* Donut Chart */}
                <PieChart width={200} height={200}>
                  <Pie
                    data={data2}
                    cx={100}
                    cy={100}
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data2.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>

                {/* Total Number in the Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold">2</p>
                    <p className="text-sm text-gray-500">Total</p>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <ul className="text-sm ml-4">
                {data2.map((item) => (
                  <li key={item.name} className="flex items-center mb-2">
                    <span
                      className="inline-block w-3 h-3 mr-2"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    {item.name} ({item.value})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
