import { cloneArray, createDefaultCompare } from "../../common";

// Lines of code were copied from https://www.geeksforgeeks.org/dsa/bubble-sort-algorithm and optimized
export default function bubbleSort<T>(arr: T[], compareFn: CompareFunction<T> = createDefaultCompare()) {
  const [array, total]: [T[], number] = [cloneArray(arr), arr.length];

  let temp: T;
  let isSwapped: boolean = false;

  for (let i = 0; i < (total - 1); i++) {
    isSwapped = false;
    
    for (let j = 0; j < (total - i - 1); j++) {
      if (compareFn(array[j], array[j + 1]) > 0) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwapped = true;
      };
    };

    if (!isSwapped) {
      break;
    };
  };

  return array;
};