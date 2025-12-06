import type { CompareFunction } from "./typings/index";

export function cloneArray<T>(array: T[]) {
  return [...array];
};

export function createDefaultCompare<T>(): CompareFunction<T> {
  return (a, b) => {
    return (a > b) ? 1 : (a < b ? - 1 : 0);
  };
};