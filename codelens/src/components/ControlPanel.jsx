import React from "react";

const ControlPanel = ({
  onGenerate,
  onSort,
  onStepMode,
  onNextStep,
  isSorting,
  isStepMode,
  speed,
  setSpeed,
  algorithm,
  setAlgorithm,
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <button
        onClick={onGenerate}
        disabled={isSorting}
        className="px-4 py-2 bg-gray-600 text-white rounded"
      >
        Generate New
      </button>

      <button
        onClick={onSort}
        disabled={isSorting || isStepMode}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Sort
      </button>

      <button
        onClick={onStepMode}
        disabled={isSorting}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        Step Mode
      </button>

      <button
        onClick={onNextStep}
        disabled={!isStepMode}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Next Step
      </button>

      <select
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value)}
        className="px-3 py-2 border rounded"
      >
        <option value="bubble">Bubble Sort</option>
        <option value="quick">Quick Sort</option>
      </select>

      <div className="flex items-center gap-2">
        <label className="text-sm">Speed</label>
        <input
          type="range"
          min="50"
          max="1000"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
