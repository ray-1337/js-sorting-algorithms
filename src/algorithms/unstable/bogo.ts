import { isSorted, createDefaultCompare, shuffleAndSwap } from "../../common";
import type { CompareFunction } from "../../typings/index";

export default function bogoSort<T>(arr: T[], compareFn: CompareFunction<T> = createDefaultCompare(), options: BogoSortOptions = {}) {
  const array = [...arr];

  if (!options?.randomness) {
    options = {
      ...options,
      randomness: "pseudo"
    };
  };

  while (!isSorted(array, compareFn)) {
    shuffleAndSwap(array, options.randomness === "pure");
  };

  return array;
};

export interface BogoSortOptions {
  /**
   * `pure` uses `Crypto.randomInt`, while `pseudo` uses `Math.random`.
   * 
   * @default pseudo
   */
  randomness?: "pure" | "pseudo";
};