// Quick Sort (Step Mode version)
export function quickSortSteps(array) {
  const arr = [...array];
  const steps = [];

  const swap = (a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  };

  const partition = (low, high) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      // record comparing
      steps.push({ array: [...arr], comparing: [j, high], sorted: [] });

      if (arr[j] < pivot) {
        i++;
        swap(i, j);
        steps.push({ array: [...arr], comparing: [i, j], sorted: [] });
      }
    }

    swap(i + 1, high);
    steps.push({ array: [...arr], comparing: [i + 1, high], sorted: [] });

    return i + 1;
  };

  const quickSortRecursive = (low, high) => {
    if (low < high) {
      const pi = partition(low, high);
      quickSortRecursive(low, pi - 1);
      quickSortRecursive(pi + 1, high);
    }
  };

  quickSortRecursive(0, arr.length - 1);

  // final sorted state
  steps.push({
    array: [...arr],
    comparing: [],
    sorted: arr.map((_, idx) => idx),
  });

  return steps;
}
