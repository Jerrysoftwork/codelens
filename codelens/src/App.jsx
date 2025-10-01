import { useState } from "react";
import ArrayBars from "./components/ArrayBars";
import ControlPanel from "./components/ControlPanel";
import { bubbleSort } from "./algorithms/bubbleSort";

export default function App() {
  const [array, setArray] = useState(generateArray(20));
  const [speed, setSpeed] = useState(200);
  const [isSorting, setIsSorting] = useState(false);
  const [comparing, setComparing] = useState([]);
  const [sorted, setSorted] = useState([]);

  function generateArray(size) {
    return Array.from({ length: size }, () =>
      Math.floor(Math.random() * 200) + 10
    );
  }

  const handleGenerate = () => {
    if (!isSorting) {
      setArray(generateArray(20));
      setSorted([]);
      setComparing([]);
    }
  };

  // ✅ Fixed Bubble Sort hook
  const handleSort = async () => {
    setIsSorting(true);
    setSorted([]); // reset sorted markers
    setComparing([]); // reset comparing markers
    await bubbleSort(array, setArray, speed, setComparing, setSorted);
    setIsSorting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-indigo-700 p-6">
        CodeLens – Algorithm Visualizer
      </h1>

      {/* Sticky Control Panel */}
      <div className="sticky top-0 z-20 bg-white shadow-md py-6 border-b">
        <div className="flex flex-col items-center gap-6">
          <ControlPanel
            onGenerate={handleGenerate}
            onSort={handleSort}
            speed={speed}
            setSpeed={setSpeed}
            isSorting={isSorting}
          />
        </div>
      </div>

      {/* Chart with safe spacing */}
      <div className="mt-28 px-6 min-h-[400px] flex items-end justify-center">
        <ArrayBars array={array} comparing={comparing} sorted={sorted} />
      </div>
    </div>
  );
}
