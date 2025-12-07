import type { CompareFunction } from "../../typings/index";
import { cloneArray, createDefaultCompare } from "../../common";

// Lines of code were copied from https://www.geeksforgeeks.org/dsa/selection-sort-algorithm-2 and optimized
export default function selectionSort<T>(arr: T[], compareFn: CompareFunction<T> = createDefaultCompare()) {
  const [array, total]: [T[], number] = [cloneArray(arr), arr.length];

  for (let i = 0; i < (total - 1); i++) {
    let [min_idx, temp]: [number, T] = [i, array[i]];

    for (let j = (i + 1); j < total; j++) {
      if (compareFn(array[j], array[min_idx]) < 0) {
        min_idx = j;
      };
    };

    array[i] = array[min_idx];
    array[min_idx] = temp;
  };

  return array;
};