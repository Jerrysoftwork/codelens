import React from "react";

const Chart = ({ array, comparing, sorted }) => {
  // Dynamic width: smaller when there are more bars
  const barWidth = Math.max(2, Math.floor(300 / array.length));

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Bars */}
      <div className="flex items-end justify-center h-64 bg-gray-50 border rounded p-4 overflow-hidden w-full">
        {array.map((value, index) => (
          <div
            key={index}
            className={`
              mx-0.5 rounded-t
              ${comparing.includes(index) ? "bg-red-500" : ""}
              ${sorted.includes(index) ? "bg-green-500" : ""}
              ${!comparing.includes(index) && !sorted.includes(index) ? "bg-blue-500" : ""}
            `}
            style={{
              height: `${value * 3}px`,
              width: `${barWidth}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-blue-500 rounded"></span> Unsorted
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-500 rounded"></span> Comparing
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-500 rounded"></span> Sorted
        </div>
      </div>
    </div>
  );
};

export default Chart;
