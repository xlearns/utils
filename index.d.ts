declare type Nullable<T> = T | null | undefined;
declare type Arrayable<T> = T | Array<T>;

/**
 * @description
 * @target 1 => [1]
 */
declare function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T>;

export { toArray };
