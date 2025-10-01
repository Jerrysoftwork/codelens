export default function ControlPanel({ onGenerate, onSort, speed, setSpeed, isSorting }) {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={onGenerate}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          disabled={isSorting}
        >
          Generate New Array
        </button>
        <button
          onClick={onSort}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          disabled={isSorting}
        >
          Bubble Sort
        </button>
      </div>

      {/* Speed Slider */}
      <div className="flex flex-col items-center">
        <label className="text-gray-700 mb-1">Speed: {speed} ms</label>
        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-64"
          disabled={isSorting}
        />
      </div>
    </div>
  );
}
