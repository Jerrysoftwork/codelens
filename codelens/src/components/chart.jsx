// src/components/Chart.jsx
import React from "react";

const Chart = ({ array, comparing, sorted }) => {
  return (
    <div className="flex items-end justify-center h-64 bg-gray-50 border rounded p-4 overflow-hidden">
      {array.map((value, index) => (
        <div
          key={index}
          className={`
            w-3 mx-0.5 rounded-t
            ${comparing.includes(index) ? "bg-red-500" : ""}
            ${sorted.includes(index) ? "bg-green-500" : ""}
            ${!comparing.includes(index) && !sorted.includes(index) ? "bg-blue-500" : ""}
          `}
          style={{ height: `${value * 3}px` }}
        ></div>
      ))}
    </div>
  );
};

export default Chart;
