import React from "react";
import { PieChart, Pie, Cell } from "recharts";
const CloudAccount = () => {
  const data1 = [
    // day1
    { name: "Failed", value: 1689, color: "#e74c3c" },
    { name: "Warning", value: 36, color: "#f1c40f" },
    { name: "Not Available", value: 681, color: "#bdc3c7" },
    { name: "Passed", value: 7253, color: "#2ecc71" },
  ];
  return (
    <div className="">
      <div className="bg-white shadow-md p-4 rounded-lg max-w-md relative h-[240px] ">
        <h2 className="text-md font-semibold text-gray-600">
          Cloud Account Risk Assessment
        </h2>
        <div className="flex justify-between items-center relative">
          {/* Donut Chart */}
          <div className="relative">
            <PieChart width={200} height={200}>
              <Pie
                data={data1}
                cx={100}
                cy={100}
                innerRadius={50}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>

            {/* Total Number in the Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold">9659</p>
                <p className="text-sm text-gray-500">Total</p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <ul className="text-sm ml-4">
            {data1.map((item) => (
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
  );
};

export default CloudAccount;
