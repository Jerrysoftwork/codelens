// Bubble Sort - generates animation steps
export function bubbleSort(array) {
  const steps = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // highlight comparison
      steps.push({ array: [...arr], comparing: [j, j + 1], swapped: false });

      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({ array: [...arr], comparing: [j, j + 1], swapped: true });
      }
    }
  }

  return steps;
}
