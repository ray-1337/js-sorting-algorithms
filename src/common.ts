import type { CompareFunction } from "./typings/index";

export function cloneArray<T>(array: T[]) {
  return [...array];
};

export function isSorted<T>(array: T[], compareFn: CompareFunction<T> = createDefaultCompare()) {
  return array.every((item, index, arr) => index > 0 ? (compareFn(arr[index - 1], item) <= 0) : true);
};

export function createDefaultCompare<T>(): CompareFunction<T> {
  return (a, b) => {
    return (a > b) ? 1 : (a < b ? - 1 : 0);
  };
};

export function swap<T>(array: T[], a: number, b: number) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  
  return;
};