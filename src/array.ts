import type { Nullable, Arrayable } from "./types";
/**
 * every element transform array
 * @example	toArray(1)
 */
export function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
	array = array || [];
	if (Array.isArray(array)) return array;
	return [array];
}

export function mergeArrayable<T>(...args: Nullable<Arrayable<T>>[]): Array<T> {
	return args.flatMap((i) => toArray(i));
}
