export async function bubbleSort(array, setArray, speed, setComparing, setSorted) {
  let arr = [...array];
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      setComparing([j, j + 1]);

      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
      }

      await new Promise((resolve) => setTimeout(resolve, speed));
    }

    // Mark last element as sorted
    setSorted((prev) => [...prev, n - i - 1]);
  }

  setComparing([]);
}
