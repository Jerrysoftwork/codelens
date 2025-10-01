export default function ControlPanel({
  onGenerate,
  onSort,
  speed,
  setSpeed,
  isSorting,
  algorithm,
  setAlgorithm,
}) {
  return (
    <div className="flex items-center justify-center gap-6 p-4 bg-gray-800 shadow-md">
      <button
        onClick={onGenerate}
        disabled={isSorting}
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Generate New Array
      </button>

      <button
        onClick={onSort}
        disabled={isSorting}
        className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 disabled:opacity-50"
      >
        Sort
      </button>

      <div>
        <label className="mr-2">Speed:</label>
        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          value={speed}
          disabled={isSorting}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>

      <div>
        <label className="mr-2">Algorithm:</label>
        <select
          value={algorithm}
          disabled={isSorting}
          onChange={(e) => setAlgorithm(e.target.value)}
          className="bg-gray-700 px-2 py-1 rounded"
        >
          <option value="bubble">Bubble Sort</option>
          <option value="quick">Quick Sort</option>
          <option value="merge">Merge Sort</option>
        </select>
      </div>
    </div>
  );
}
