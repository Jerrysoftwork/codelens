import { useState } from "react";
import { generateArray } from "./utils/generateArray";
import ArrayBars from "./components/ArrayBars";
import ControlPanel from "./components/ControlPanel";

export default function App() {
  const [array, setArray] = useState(generateArray());

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-indigo-700 p-6">
        CodeLens – Algorithm Visualizer
      </h1>

      <ControlPanel onGenerate={() => setArray(generateArray())} />
      <ArrayBars array={array} />
    </div>
  );
}
