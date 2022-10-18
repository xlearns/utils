/**
 * Multiple objects do not overwrite the merge
 * @example	mergeObject({},{t:{name:1,age:2}},{t:{name:2})  //=> {t:{name:2,age:2}}
 */
export function mergeObject(target, ...other) {
	for (let i = 0; i < other.length; ++i) {
		let from = other[i];
		if (typeof from !== "object") continue;
		for (let j in from) {
			if (from.hasOwnProperty(j)) {
				target[j] = Array.isArray(from[j])
					? mergeObject([], target[j], from[j])
					: typeof from[j] === "object"
					? mergeObject({}, target[j], from[j])
					: from[j];
			}
		}
	}
	return target;
}
