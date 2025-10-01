import { useState } from "react";
import { generateArray } from "./utils/generateArray";
import ArrayBars from "./components/ArrayBars";
import ControlPanel from "./components/ControlPanel";
import { bubbleSort } from "./algorithms/bubbleSort";

export default function App() {
  const [array, setArray] = useState(generateArray());
  const [comparing, setComparing] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(200); // default speed in ms

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
      await new Promise((resolve) => setTimeout(resolve, speed)); // use slider speed
    }

    setComparing([]);
    setIsSorting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-indigo-700 p-6">
        CodeLens – Algorithm Visualizer
      </h1>

      <ControlPanel
        onGenerate={handleGenerate}
        onSort={handleSort}
        speed={speed}
        setSpeed={setSpeed}
        isSorting={isSorting}
      />

      <ArrayBars array={array} comparing={comparing} />
    </div>
  );
}
