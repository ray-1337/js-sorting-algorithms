import { cloneArray, createDefaultCompare } from "../../common";

// Lines of code were copied from https://www.geeksforgeeks.org/dsa/merge-sort and optimized
export default function mergeSort<T>(arr: T[], compareFn: CompareFunction<T> = createDefaultCompare()) {
  const [array, total]: [T[], number] = [cloneArray(arr), arr.length];

  const merge = (left: number, mid: number, right: number) => {
    const [n1, n2]: [number, number] = [((mid - left) + 1), right - mid];
    const [lArr, rArr]: [any[], any[]] = [new Array(n1), new Array(n2)];

    for (let i = 0; i < n1; i++) {
      lArr[i] = array[left + i];
    };

    for (let j = 0; j < n2; j++) {
      rArr[j] = array[mid + 1 + j];
    };

    let [i, j, k]: [number, number, number] = [0, 0, left];

    while (i < n1 && j < n2) {
      if (compareFn(lArr[i], rArr[j]) <= 0) {
        array[k] = lArr[i];
        i++;
      } else {
        array[k] = rArr[j];
        j++;
      };

      k++;
    };

    while (i < n1) {
      array[k] = lArr[i];
      i++; k++;
    };

    while (j < n2) {
      array[k] = rArr[j];
      j++; k++;
    };
  };

  const sort = (left: number = 0, right: number = (total - 1)) => {
    if (left >= right) {
      return;
    };

    const mid = Math.floor(left + (right - left) / 2);

    sort(left, mid);
    sort(mid + 1, right);

    merge(left, mid, right);

    return;
  };

  sort();

  return array;
};