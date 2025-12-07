import { cloneArray, createDefaultCompare } from "../../common";

// Lines of code were copied from https://www.geeksforgeeks.org/dsa/insertion-sort-algorithm and optimized
export default function insertionSort<T>(arr: T[], compareFn: CompareFunction<T> = createDefaultCompare()) {
  const [array, total]: [T[], number] = [cloneArray(arr), arr.length];

  for (let i = 1; i < total; i++) {
    let [key, j]: [T, number] = [array[i], i - 1]

    while (j >= 0 && compareFn(array[j], key) > 0) {
      array[j + 1] = array[j];
      j = j - 1;
    };

    array[j + 1] = key;
  };

  return array;
};