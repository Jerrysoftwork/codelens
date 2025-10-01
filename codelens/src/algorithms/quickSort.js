export async function quickSort(arr, setArray, speed, setComparing, setSorted) {
  let array = [...arr];

  async function partition(low, high) {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      setComparing([j, high]);
      await new Promise((resolve) => setTimeout(resolve, speed));

      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        setArray([...array]);
      }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    setArray([...array]);
    return i + 1;
  }

  async function quick(low, high) {
    if (low < high) {
      let pi = await partition(low, high);
      await quick(low, pi - 1);
      await quick(pi + 1, high);
    }
  }

  await quick(0, array.length - 1);
  setComparing([]);
  setSorted([...Array(array.length).keys()]); // all sorted
}
