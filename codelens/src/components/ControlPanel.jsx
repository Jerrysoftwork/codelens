export default function ControlPanel({ onGenerate, onSort, speed, setSpeed, isSorting }) {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onGenerate}
          className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
          disabled={isSorting}
        >
          Generate New Array
        </button>
        <button
          onClick={onSort}
          className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
          disabled={isSorting}
        >
          Bubble Sort
        </button>
      </div>

      {/* Speed Slider */}
      <div className="flex flex-col items-center w-64">
        <label className="text-sm font-medium text-gray-600">
          Speed: {speed} ms
        </label>
        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
      </div>
    </div>
  );
}
