import { useState } from "react";
import ControlPanel from "./components/ControlPanel";
import Chart from "./components/chart";
import { bubbleSort } from "./algorithms/bubbleSort";
import { quickSort } from "./algorithms/quickSort";
import { bubbleSortSteps } from "./algorithms/bubbleSortSteps";
import { quickSortSteps } from "./algorithms/quickSortSteps";

function App() {
  const [array, setArray] = useState(generateArray(20));
  const [speed, setSpeed] = useState(200);
  const [comparing, setComparing] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState("bubble");

  // Step mode state
  const [isStepMode, setIsStepMode] = useState(false);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  function generateArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 50) + 5);
  }

  const handleGenerate = () => {
    if (isSorting) return;
    setArray(generateArray(20));
    setComparing([]);
    setSorted([]);
    setSteps([]);
    setCurrentStep(0);
    setIsStepMode(false);
  };

  const handleSort = async () => {
    setIsSorting(true);
    setSorted([]);

    if (algorithm === "bubble") {
      await bubbleSort(array, setArray, speed, setComparing, setSorted);
    } else if (algorithm === "quick") {
      await quickSort(array, setArray, speed, setComparing, setSorted);
    }

    setIsSorting(false);
  };

  const handleStepMode = () => {
    setIsStepMode(true);
    setSteps([]);
    setCurrentStep(0);

    let stepList = [];

    if (algorithm === "bubble") {
      stepList = bubbleSortSteps(array);
    } else if (algorithm === "quick") {
      stepList = quickSortSteps(array);
    }

    setSteps(stepList);

    if (stepList.length > 0) {
      setArray(stepList[0].array);
      setComparing(stepList[0].comparing);
      setSorted(stepList[0].sorted);
    }
  };

  const handleNextStep = () => {
    if (!isStepMode || steps.length === 0) return;
    const nextIndex = currentStep + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(nextIndex);
      setArray(steps[nextIndex].array);
      setComparing(steps[nextIndex].comparing);
      setSorted(steps[nextIndex].sorted);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">CodeLens – Algorithm Visualizer</h1>
      <ControlPanel
        onGenerate={handleGenerate}
        onSort={handleSort}
        onStepMode={handleStepMode}
        onNextStep={handleNextStep}
        isSorting={isSorting}
        isStepMode={isStepMode}
        speed={speed}
        setSpeed={setSpeed}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
      />
      <Chart array={array} comparing={comparing} sorted={sorted} />
    </div>
  );
}

export default App;
