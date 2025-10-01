export async function bubbleSort(arr, setArray, speed, setComparing, setSorted) {
  let array = [...arr];
  let n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      setComparing([j, j + 1]);
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        setArray([...array]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
    setSorted((prev) => [...prev, n - i - 1]); // mark sorted element
  }

  setComparing([]);
}
