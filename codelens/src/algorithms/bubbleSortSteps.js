// Bubble Sort (Step Mode version)
export function bubbleSortSteps(array) {
  const arr = [...array];
  const steps = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // record comparing
      steps.push({ array: [...arr], comparing: [j, j + 1], sorted: [] });

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // record after swap
        steps.push({ array: [...arr], comparing: [j, j + 1], sorted: [] });
      }
    }
  }

  // final sorted state
  steps.push({
    array: [...arr],
    comparing: [],
    sorted: arr.map((_, idx) => idx),
  });

  return steps;
}
