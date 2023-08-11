/** 部分可选 */
export type PickOptional<T, K extends keyof T> = Partial<Pick<T, K>> &
  Omit<T, K>;

/** 部分不可选 */
export type OmitOptional<T, K extends keyof T> = Partial<Omit<T, K>> &
  Pick<T, K>;

export type UseSecondType<T, S = never> = S extends never ? T : S;

export type ExpandParameters<
  T extends (...arg: any) => any,
  P extends any[]
> = T extends (...arg: any) => any
? [...Parameters<T>, ...P]
: never;
