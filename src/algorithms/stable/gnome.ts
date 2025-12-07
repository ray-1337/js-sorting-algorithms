import type { CompareFunction } from "../../typings/index";
import { cloneArray, createDefaultCompare, swap } from "../../common";

// Lines of code were copied from https://en.wikipedia.org/wiki/Gnome_sort#Pseudocode and optimized
export default function gnomeSort<T>(arr: T[], compareFn: CompareFunction<T> = createDefaultCompare()) {
  const [array, total] = [cloneArray(arr), arr.length];

  let pos: number = 0;
  
  while (pos < total) {
    if (pos === 0 || compareFn(array[pos], array[pos - 1]) >= 0) {
      pos++;
    } else {
      swap(array, pos, (pos - 1));
      pos--;
    };
  };

  return array;
};