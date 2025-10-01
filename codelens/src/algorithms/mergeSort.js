export async function mergeSort(arr, setArray, speed, setComparing, setSorted) {
  let array = [...arr];

  async function merge(left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let L = array.slice(left, mid + 1);
    let R = array.slice(mid + 1, right + 1);

    let i = 0,
      j = 0,
      k = left;

    while (i < n1 && j < n2) {
      setComparing([left + i, mid + 1 + j]);
      await new Promise((resolve) => setTimeout(resolve, speed));

      if (L[i] <= R[j]) {
        array[k] = L[i];
        i++;
      } else {
        array[k] = R[j];
        j++;
      }
      setArray([...array]);
      k++;
    }

    while (i < n1) {
      array[k] = L[i];
      i++;
      k++;
      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }

    while (j < n2) {
      array[k] = R[j];
      j++;
      k++;
      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  }

  async function mergeSortRec(left, right) {
    if (left < right) {
      let mid = Math.floor((left + right) / 2);
      await mergeSortRec(left, mid);
      await mergeSortRec(mid + 1, right);
      await merge(left, mid, right);
    }
  }

  await mergeSortRec(0, array.length - 1);
  setComparing([]);
  setSorted([...Array(array.length).keys()]);
}
