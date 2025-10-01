import React from "react";

const ControlPanel = ({
  algorithm,
  setAlgorithm,
  speed,
  setSpeed,
  size,
  setSize,
  resetArray,
  handleSort,
  isSorting,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 bg-white p-4 rounded shadow-md">
      {/* Algorithm Selector */}
      <div>
        <label className="mr-2 font-medium">Algorithm:</label>
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          className="p-2 border rounded"
          disabled={isSorting}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="quick">Quick Sort</option>
          <option value="merge">Merge Sort</option>
        </select>
      </div>

      {/* Speed Slider */}
      <div>
        <label className="mr-2 font-medium">Speed:</label>
        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          disabled={isSorting}
          className="cursor-pointer"
        />
        <span className="ml-2">{speed} ms</span>
      </div>

      {/* Size Slider */}
      <div>
        <label className="mr-2 font-medium">Size:</label>
        <input
          type="range"
          min="5"
          max="50"
          step="1"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          disabled={isSorting}
          className="cursor-pointer"
        />
        <span className="ml-2">{size} bars</span>
      </div>

      {/* Buttons */}
      <button
        onClick={resetArray}
        disabled={isSorting}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Generate New
      </button>

      <button
        onClick={handleSort}
        disabled={isSorting}
        className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Sort
      </button>
    </div>
  );
};

export default ControlPanel;
