import { useState } from "react";
import { generateArray } from "./utils/generateArray";
import ArrayBars from "./components/ArrayBars";
import ControlPanel from "./components/ControlPanel";
import { bubbleSort } from "./algorithms/bubbleSort";

export default function App() {
  const [array, setArray] = useState(generateArray());
  const [comparing, setComparing] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  const handleGenerate = () => {
    if (!isSorting) setArray(generateArray());
  };

  const handleSort = async () => {
    setIsSorting(true);
    const steps = bubbleSort(array);

    for (let i = 0; i < steps.length; i++) {
      const { array: newArr, comparing } = steps[i];
      setArray(newArr);
      setComparing(comparing);
      await new Promise((resolve) => setTimeout(resolve, 200)); // speed
    }

    setComparing([]);
    setIsSorting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-indigo-700 p-6">
        CodeLens – Algorithm Visualizer
      </h1>

      <div className="flex items-center justify-center gap-4 p-4">
        <button
          onClick={handleGenerate}
          className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
          disabled={isSorting}
        >
          Generate New Array
        </button>
        <button
          onClick={handleSort}
          className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
          disabled={isSorting}
        >
          Bubble Sort
        </button>
      </div>

      <ArrayBars array={array} comparing={comparing} />
    </div>
  );
}
