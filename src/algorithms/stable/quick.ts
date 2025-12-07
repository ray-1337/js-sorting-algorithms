import type { CompareFunction } from "../../typings/index";
import { cloneArray, createDefaultCompare, swap } from "../../common";

// Lines of code were copied from https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/ and optimized
// + using Median of Three, lines of codes were copied from https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot and translated in (Java/Type)Script.
export default function quickSort<T>(arr: T[], compareFn: CompareFunction<T> = createDefaultCompare()): T[] {
  const [array, total]: [T[], number] = [cloneArray(arr), arr.length];

  const partition = (low: number, high: number) => {
    let mid = (low + high) / 2;

    switch (true) {
      case (array[mid] < array[low]): {
        swap(array, low, mid);
        break;
      };

      case (array[high] < array[low]): {
        swap(array, low, high);
        break;
      };

      case (array[mid] < array[high]): {
        swap(array, mid, high);
        break;
      };

      default: break;
    };
    
    let [pivot, index]: [T, number] = [array[high], low - 1];

    for (let i = low; i <= high - 1; i++) {
      if (compareFn(array[i], pivot) < 0) {
        index++;
        swap(array, index, i);
      };
    };

    swap(array, index + 1, high);
    return index + 1;
  };

  const sort = (low: number = 0, high: number = (total - 1)) => {
    if (!(low < high)) {
      return;
    };

    const pi = partition(low, high);

    sort(low, pi - 1);
    sort(pi + 1, high);

    return;
  };

  sort();

  return array;
};