import { useState } from "react";
import ControlPanel from "./components/ControlPanel";
import Chart from "./components/Chart";
import { bubbleSort } from "./algorithms/bubbleSort";
import { quickSort } from "./algorithms/quickSort";
import { mergeSort } from "./algorithms/mergeSort";

function App() {
  const [size, setSize] = useState(20); // NEW: size of array
  const [array, setArray] = useState(generateArray(20));
  const [speed, setSpeed] = useState(200);
  const [isSorting, setIsSorting] = useState(false);
  const [comparing, setComparing] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [algorithm, setAlgorithm] = useState("bubble");

  function generateArray(size) {
    return Array.from({ length: size }, () =>
      Math.floor(Math.random() * 50) + 5
    );
  }

  const resetArray = () => {
    setArray(generateArray(size)); // use current size
    setSorted([]);
    setComparing([]);
  };

  const handleSort = async () => {
    setIsSorting(true);
    setSorted([]);
    setComparing([]);

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
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        CodeLens – Algorithm Visualizer
      </h1>

      {/* Control Panel */}
      <ControlPanel
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        speed={speed}
        setSpeed={setSpeed}
        size={size}
        setSize={setSize}
        resetArray={resetArray}
        handleSort={handleSort}
        isSorting={isSorting}
      />

      {/* Chart */}
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-4xl">
          <Chart array={array} comparing={comparing} sorted={sorted} />
        </div>
      </div>
    </div>
  );
}

export default App;
