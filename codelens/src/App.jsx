import { useState } from "react";
import ControlPanel from "./components/ControlPanel";
import Chart from "./components/Chart";
import { bubbleSort } from "./algorithms/bubbleSort";
import { quickSort } from "./algorithms/quickSort";
import { mergeSort } from "./algorithms/mergeSort";

export default function App() {
  const [array, setArray] = useState(generateArray(20));
  const [speed, setSpeed] = useState(300);
  const [isSorting, setIsSorting] = useState(false);
  const [comparing, setComparing] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [algorithm, setAlgorithm] = useState("bubble"); // default algorithm

  function generateArray(size) {
    return Array.from({ length: size }, () =>
      Math.floor(Math.random() * 100) + 10
    );
  }

  const regenerateArray = () => {
    if (isSorting) return;
    setArray(generateArray(20));
    setSorted([]);
  };

  const handleSort = async () => {
    setIsSorting(true);
    setSorted([]); // reset

    if (algorithm === "bubble") {
      await bubbleSort(array, setArray, speed, setComparing, setSorted);
    } else if (algorithm === "quick") {
      await quickSort(array, setArray, speed, setComparing, setSorted);
    } else if (algorithm === "merge") {
      await mergeSort(array, setArray, speed, setComparing, setSorted);
    }

    setIsSorting(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="p-4 text-2xl font-bold text-center bg-gray-800 shadow">
        CodeLens – Algorithm Visualizer
      </header>

      <ControlPanel
        onGenerate={regenerateArray}
        onSort={handleSort}
        speed={speed}
        setSpeed={setSpeed}
        isSorting={isSorting}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
      />

      <main className="flex-1 flex items-center justify-center p-6">
        <Chart array={array} comparing={comparing} sorted={sorted} />
      </main>
    </div>
  );
}
