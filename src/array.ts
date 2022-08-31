/**
 * @description
 * @target 1 => [1]
 */
export function toArray(array) {
	array = array || [];
	if (Array.isArray(array)) return array;
	return [array];
}
