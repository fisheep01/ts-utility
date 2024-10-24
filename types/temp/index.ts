/** 部分可选 */
export type PickOptional<T, K extends keyof T> = Partial<Pick<T, K>> &
  Omit<T, K>;

/** 部分不可选 */
export type OmitOptional<T, K extends keyof T> = Partial<Omit<T, K>> &
  Pick<T, K>;

export type UseSecondType<T, S = never> = S extends never ? T : S;

type ExtractRequired<T extends any[]> = T extends []
  ? []
  : T extends [...infer _Rest, any]
  ? T
  : number extends T["length"]
  ? []
  : T extends [...infer _Rest, any?]
  ? ExtractRequired<_Rest>
  : [];

type ExtractOptional<T extends any[]> = T extends [infer _First, ...infer _Rest]
  ? _First extends undefined
    ? T
    : ExtractOptional<_Rest>
  : T;

export type ExpandParameters<
  T extends (...arg: any) => any,
  P extends any[]
> = T extends (...arg: any) => any
  ? [...ExtractRequired<Parameters<T>>, ...ExtractRequired<P>, ...ExtractOptional<Parameters<T>>,...ExtractOptional<P>]
  : never;



type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

export type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);

export type SmartLiteral<T extends keyof any, U> = T | (U & {});
