import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Failed", value: 1689, color: "#e74c3c" },
  { name: "Warning", value: 36, color: "#f1c40f" },
  { name: "Not Available", value: 681, color: "#bdc3c7" },
  { name: "Passed", value: 7253, color: "#2ecc71" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Graph3 = () => {
  return (
    <div className="flex">
      <div className="bg-white shadow-md p-4 rounded-lg relative h-[240px] w-[420px]">
        <h2 className="text-md font-semibold text-gray-600">
          CSPM Executive Dashboard
        </h2>

        {/* Cloud Accounts Section */}
        <div className="flex justify-between items-center relative">
          <div className="relative h-[200px] w-[100%] flex">
            {/* Donut Chart */}
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <ul className="text-[12px] mt-2">
              {data.map((item) => (
                <li key={item.name} className="flex items-center mb-2">
                  <span
                    className="inline-block w-3 h-3 mr-2"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  {item.name}  - {`${((item.value / data.reduce((acc, item) => acc + item.value, 0)) * 100).toFixed(0)}%`}
                </li>
              ))}
            </ul>
          </div>
          {/* Legend */}
        </div>
      </div>
    </div>
  );
};

export default Graph3;
